---
layout: post_kevin
title: Path of Exile avec Wine survitaminé
author: kevin
category: planet
hashtags: wine linux poe pahtofexile
---

Il est un fait avéré que si l'on veut jouer aux jeux vidéos, il faut dans la quasi-totalité des cas passer par Windows. Et même si de grandes avancées ont été faites ces dernières années, notamment avec l'arrivée de Steam pour pousser les éditeurs à créer sur d'autres plateformes, notre [cher Linux reste pas mal en arrière](http://store.steampowered.com/hwsurvey).

<!--break-->

J'avais déjà parlé de plusieurs jeux natifs Linux comme [Beholder](https://www.ilphrin.com/fr/planet/2017/07/14/beholder-1984-en-jeu-video-sous-linux.html) ou [SteamWorld:Heist](https://www.ilphrin.com/fr/planet/2017/05/29/steamworld-heist-humble-bundle.html) (qui sont de vraies perles d'ailleurs), ou encore des jeux plus "modestes" comme [Dungeon Crawl Stone Soup](https://www.ilphrin.com/fr/2013/10/25/dungeon-craw-stone-soup-la-perle-a-avoir.html) et [Caph](https://www.ilphrin.com/fr/2012/10/08/un-jeu-de-dessin-base-sur-les-lois-de-la-physiques.html). Il n'y a pas si longtemps on pouvait compter les jeux sous Linux avec les doigts de la main (en comptant en base décimale, je précise).

Mais la grande majorité des jeux restent néanmoins cantonnés à Windows, pour des raisons qui m'échappent parfois encore, surtout quand on voit que la plupart des logiciels de création de jeux comme Unity ou Unreal Engine supportent très bien Linux.

Donc, pour palier à ce problème il existe Wine! Qui veut dire "Wine Is Not an Emulator" d'ailleurs. Pourquoi ce n'est pas un émulateur? Parce qu'il fait bien mieux qu'émuler.

Wine est une couche d'abstraction des appels Windows, et les convertit en temps réel en appels à des librairies et fonctions Linux. Par exemple dans le domaine d'un jeu fonctionnant avec DirectX, chaque appel à une fonction de cette librairie sera traduite en un appel à OpenGL correspondant par Wine. Cette méthode a le mérite d'être bien plus performante, et moins lourde pour la machine que de devoir émuler un OS en entier.

Cela va faire 4 ans maintenant que je n'ai plus touché à un système Windows malgré mon côté joueur très fort, et ça je le dois à Wine! (Et PlayOnLinux que j'oublie pas! ;) )

## Path Of Exile

Path Of Exile est un jeu d'action RPG, ou un Hack'n'Slash selon la définition qu'on a, dans un univers de Dark Fantasy, le tout en Free To Play (vraiment). C'est un jeu qui à mis longtemps à être développé et à souffert pendant longtemps de sa dette technologique. C'est, par exemple, uniquement depuis peu que DirectX en version 11 est supporté!

Mon utilisation de ce jeu est assez intensive, je vais généralement assez loin dans le jeu et je joue souvent avec d'autres joueurs ce qui multiplie le nombre d'effets à afficher à l'écran. Néanmoins j'ai toujours eu 2 énormes soucis avec ce jeu, même avec mon nouvel ordinateur de chez System 76:

* DirectX 11 n'a jamais fonctionné avec Wine, malgré le support annoncé depuis plusieurs versions
* Le jeu souffre de gros ralentissement et pics descendants du nombre d'images par secondes.

À cause de cela j'ai grandement réduit ma fréquence de jeu. Mais des nouvelles du monde Wine m'ont permis de me pencher dessus, et tous ces problèmes appartiennent au passé, et je vais vous expliquer comment j'ai fait ça.

## Wine-staging patché

Je suis le mainteneur Wine de Path Of Exile. Ce qui veut dire que je suis en charge de modérer les tests envoyés sur le site de Wine par des utilisateurs, et de traquer et mettre à jour les liens vers les bugs connus en lien avec Path Of Exile.

Le [bug d'incompatibilité avec DirectX 11](https://bugs.winehq.org/show_bug.cgi?id=42695) est connu, et plusieurs personnes s'en sont plaintes déjà (moi le premier!). Et [un commentaire](https://bugs.winehq.org/show_bug.cgi?id=42695#c15) sur la discussion du bug a proposé une solution qui avait l'air de convenir.

La solution était de modifier deux petites lignes de codes dans une version précise de Wine, et le tour était joué! Il faut donc récupérer le code de Wine (la version Git, configuré avec la version wine-3.3 est très bien) et appliquer ces modifications avant de le compiler. (Attention, ceci n'est que pour Path Of Exile!)

Si vous suivez ces étapes en même temps que vous lisez, je vous conseille de __ne pas faire ça tout de suite__! Si vous avez suivi, il reste un autre problème dont je vais parler, et dont il va falloir s'occuper avant: Les ralentissements et pertes de performances.

## Wine-PBA

Tout récemment est sorti [un article d'un certain _acomminos_](https://comminos.com/posts/2018-02-21-wined3d-profiling.html) parlant d'un problème de performances qu'il avait repéré dans la traduction de DirectX vers OpenGL de Wine. Dans son article il explique la démarche qu'il a eu afin de diagnostiquer le problème, et proposer une solution qu'il a appelée wine-pba.

Je ne vais pas rentrer dans les détails, [Andrew](https://github.com/acomminos) l'explique bien mieux que moi allez voir son article, mais pour appliquer les patchs il faut une version précise de Wine: la 3.3-staging.

_Staging_ est le nom donné à un ensemble de patch appliqués à une version de Wine. La 3.3-staging signifie: "Version staging 3.3 de Wine 3.3".

Il faut donc que vous récupériez les source de Wine 3.3, que vous appliquiez les patchs _staging_ associés, et appliquiez ensuite les patchs de wine-pba. Une fois tout cela fait vous pouvez compiler Wine en suivant la documentation sur le site, et lancer le jeu avec votre nouveau wine compilé!

## résultats

Voici donc les graphiques (integrés nativement à PathOfExile) entre une version de wine 3.4 normale, et la version 3.3 staging avec wine-pba.

![Path Of Exile avant les patchs](/images/wine_01.jpg){:.img}_Avant les patchs_

![Path of Exile après les patchs](/images/wine_02.jpg){:.img}_Après les patchs_

Même si la différence ne parait pas vertigineuse, ce qui fait vraiment la différence c'est la différence de mouvement de ces barres. On voit par exemple le pic dans le cadre "Frame Time" à 200ms, et c'est une chose qui arrive fréquemment quand on a beaucoup de choses à charger d'un coup. Ces pics disparaissent après les modifications.

On voit aussi des changements dans le nombre de FPS. Ils sont à peu près similaires, mais dans la deuxième situation on a quelque chose de beaucoup plus stable, qui ne jongle plus entre les 5 FPS et les 200.

Je ne peux que vous inviter à tester avec différentes applications et voir par vous-même si ces modifications vous apportent quelque chose. Wine-PBA est un travail en cours, et très récent, et plusieurs modifications sont encore prévus par le développeur pour affiner l'outil. Nulle doute que cela va être une brique intéressante à ajouter à l'écosystème de Wine!
