---
layout: post_kevin
title: "Faire marcher une carte hybride sous Linux"
author: kevin
category: planet
---

J'ai un [HP Elitebook 840](http://www8.hp.com/us/en/ads/elite-products/elitebook-840.html), qui possède un système de carte graphique dite "hybride", pour les besoins de mes études. Après deux ans j'ai enfin réussi à la faire fonctionner, et je me suis dis que j'allais partager ma méthode

<!--break-->

Pour détailler un peu, j'ai:

* Un chipset Intel intégré -> [Intel HD Graphics 4400](http://www.intel.com/content/www/us/en/support/graphics-drivers/graphics-for-4th-generation-intel-processors/intel-hd-graphics-4400.html)
* Une carte graphique "discrète" (j'y reviendrais plus tard sur le terme) -> [AMD Radeon HD 8750M](http://www.amd.com/en-us/products/graphics/notebook/8700m-8800m#)

Bien sûr, je n'utilise pas cet ordinateur que pour mes cours vu que c'est mon seul PC portable. L'utilisation la plus gourmande que j'ai vient des jeux vidéos. Souvent ce sont des jeux qui ne demandant pas grand-chose comme Osu, Dungeon Crawl Stone Soup, ou Beyond Divinity.

Mais certains jeux ont plus de demandes, comme Doom 3 ou Path Of Exile (jouant à ce dernier fréquemment), et là la performance baisse énormément, avec des piques descendant à 1 image toutes les 2-3 secondes.

Je ne me suis que rarement posé la question puisque je joue à tous ces jeux par le biais de Wine et PlayOnLinux, qui rajoute une couche de complexité et de travail pour l'ordinateur. Seulement depuis 3 mois j'ai eu envie d'investiguer un peu sur les performances de mon pc et j'ai découvert une chose intéressante

{% highlight sh %}
sudo cat /sys/kernel/debug/vgaswitcheroo/switch

0:DIS: :DynOff:0000:03:00.0
1:IGD:+:Pwr:0000:00:02.0
2:DIS-Audio: :Off:0000:03:00.1

{% endhighlight %}

Cette commande permet d'afficher l'état des deux cartes graphiques sur un pc hybride

* L'intégrée (IGD -> InteGrateD) : C'est le chipset fourni avec la carte mère. Il s'occupe de tous les traitements peu gourmands comme le compositeur de bureau, des pages web, etc. Tout ce qui est graphique mais qui ne consomme pas beaucoup de ressources.
* La discrete (DIS -> Discrete) : C'est la carte graphique, beaucoup plus puissante et utilisée pour des traitements graphiques plus poussés comme de l'OpenGL.

Dans la sortie de la commande plus haut on voit que la DIScrete est DynamicallyOFF, ce qui est normal puisque je ne fais aucun traitement particulier. Le souci c'est que quoique je fasse je n'arrivais pas à l'activer. Jusqu'à maintenant (petit teaser ;)).

Il faut d'abord rajouter une configuration dans votre xorg.conf:

{% highlight xorg %}
Section "Device"
  Identifier "Radeon"
  Driver "intel"
    Option "AccelMethod" "UXA"
    Option "SwapbuffersWait" "false"
    Option "VSync" "false"
    Option "DRI" "3"
EndSection

Section "Device"
  Identifier "Radeon"
  Driver "radeon"
    Option "SwapbuffersWait" "false"
    Option "TearFree" "false"
    Option "DRI" "3"
EndSection
{% endhighlight %}

On redémarre, et maintenant on peut forcer l'utilisation de la carte graphique sur une commande en mettant une variable d'environnement:

{% highlight sh %}
DRI_PRIME=1 macommande
{% endhighlight %}

Maintenant je peux jouer à Path Of Exile sans trop ramer ;)

{% note %}
Je ne sais pas si ça marche pour tous les pc portables avec une carte hybride Intel/Radeon, et surtout je n'ai pas testé toutes les combinaisons de configuration. C'est un amalgame d'informations trouvées sur StackOverflow, le bug tracker de Xorg, et d'autres recherches Google. N'hésitez pas à me dire ce qui à marché pour vous je vais essayer de faire une partie "Note" sur le site pour stocker ce genre d'astuces
{% endnote %}
