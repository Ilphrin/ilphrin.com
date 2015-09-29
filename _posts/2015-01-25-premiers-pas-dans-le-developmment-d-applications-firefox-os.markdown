---
layout: post_kevin
title: Premiers pas dans le développement de Firefox OS
author: kevin
cover: firefox.jpg
category: planet
---

Salut tout le monde!

Comme je le disais dans [mon précédent article](/2015/01/22/changer-de-homescreen-dans-firefox-os.html), il existe plusieurs applications pour changer son homescreen, mais elles datent toutes
 de plusieurs jour/mois et ne sont, pour la plupart, plus fonctionnelles. Je me suis donc dit que j'allais regarder l'un des projets que j'ai présenté et essayer de le patcher pour le faire fonctionner.
<!--break-->
J'ai choisi l'application [Zwipe](https://github.com/mgoodings/zwipe), d'une part parce que les screenshots donnaient l'impression d'une application assez sympa ésthétiquement, et d'autre part car Zwipe
 fonctionne à l'aide du framework AngularJS, sur lequel j'avais déjà essayé de travailler il y a quelques semaines mais sans résultat. Pour (ré-)apprendre à utiliser AngularJS, je me suis aidé de [ce cours
sur Graphikart ](http://www.grafikart.fr/formations/angularjs) qui explique vraiment très bien son fonctionnement![Zwipe1](/images/zwipe1.png){:style="float:right"}.Je suppose que vous connaissez déjà
AngularJS ou que vous venez de regarder le cours que je viens de mettre en lien, sinon il y aura plusieurs points dans cet article que vous risquez de ne pas comprendre.

Bon alors déjà première étape, ouvrir WebIDE. Pour ceux qui ne le savent pas WebIDE est un outil dans le navigateur Firefox pour le développement sous Firefox OS, il est mis par défaut dans Firefox
Developper Edition. Une fois ouvert, il faut cliquer sur "Open Packaged app", puis sélectionner le dossier de zwipe que l'on vient de télécharger. Ensuite on sélectionne comme runtime son téléphone et on
installe l'application. On tombe sur ce qui est montré à sur l'image ci-contre. On voit...bah pas grand chose, mais l'oeil avisé aura remarqué le petit 1 dans son cadre rouge en bas à droite. Il faut donc
maintenant aller dans WebIDE et faire "Debug App" (ou appuyer sur F12).

La Console nous donne ce message d'erreur "Error: $scope is undefined", ce qui est un peu dommage vu qu'AngularJS fonctionne principalement à l'aide de cette variable. Donc on ouvre son éditeur de texte
favori et on va ouvrir les fichiers qui nous intéressent: /index.html et /js/app.js. Le fichier index.html nous apprend trois choses importantes. Premièrement le Module est nommé dans la balise html et
s'appelle <u>zwipe</u>, deuxièmement le Controller dans lequel l'application travaille s'appelle <u>ZwipeCtrl</u>, et enfin on sait qu'il existe un tableau de variables <u>apps</u>, qui contient les applications et les
informations qui leurs sont liées.

Bon maintenant regardons le fichier app.js. On a une première grosse fonction anonyme au début de ce fichier qui contient une fonction DashApplication, nous en reparlerons un peu plus tard, sachez simplement
qu'elle s'occupe de récupérer les données des applications installées pour nous. Juste après on a ce qui nous intéresse, c'est-à-dire la création du module <u>zwipe</u>.

Dedans on y distingue deux gros groupes plus une config:  une Factory qui s'appelle <u>AppService</u>, et la définition du Controller <u>ZwipeCtrl</u>. Dans ce dernier on a la définition de la function avec les variables
qui vont bien en deuxième paramètre, et notamment la fameuse variable $scope! Donc on la met bien en paramètre, pourquoi est-elle marqué comme indéfinie alors???  Si vous venez tout juste de regarder le
cours sur Graphikart, vous aurez peut-être une information essentielle enore fraîche dans votre esprit. Parfois le code d'une page web peut être amené à subir une opération de **minimisation** afin d'optimiser
l'application/la page. Problème: cela passe parfois par un renommage des variables! Ainsi notre variable en paramètre n'est probablement plus la bonne :/ Donc pour pouvoir pallier à ce problème, on change un
peu le format du deuxième paramètre du Controller, pour le transformer en tableau!

Et donc dans ce tableau on va mettre d'une part 3 chaines de caractère dans lequel on va copier chacun des paramètres de la fonction (autant le faire pour les trois paramètres, vu que le problème risque
d'être le même pour tout les paramètres ;) ), puis d'autre part en 4e paramètre la fonction en elle-même qui ne change pas. Au fait, nous avions aussi une Factory non? Peut-être doit-on lui faire subir la
même opération? Et bien effectivement! Donc rebelote avec la Factory ZwipeCtrl, on fait un tableau pour contenir la variable $q. Et surtout on oublie pas de fermer les crochets à la fin de la Factory.

Si tout s'est passindex2.pngé comme il faut on se trouve avec ce qu'il y a à la capture d'écran à gauche. C'est déjà plutôt cool! Mais on voit apparaitre du coup un deuxième problème qui nous était invisible
avant. La plupart des icones sont remplacées par une icone par défaut, alors qu'elle fonctionnaient bien sur le Homescreen de base (enfin, je le suppose, si ce n'est pas le cas chez vous c'est dommage ;) ).
Bon, ça siginifie qu'on a un problème à la récupération des données des applications. Ça tombe bien on a une function qui s'en occupe: DashApplication! Quand on regarde son code dans le fichier app.js on
voit qu'il y a tout un tas de "sous-fonctions" pour récupérer certaines données, notamment une pour les icones. S'il existe un objet <u>this.manifest.icons</u> alors on récupère la case '60' dans cet objet, qui
contient le chemin vers l'image d'une taille de 60 pixel.

Or si on regarde les icones pour les autres applications, toutes n'ont pas une icone de taille 60. On va devoir changer légèrement ce code. On initialise une variable i à 60, et on va la faire travailler
dans une boucle while, disons jusqu'à que i soit supérieur à 512. Pour chaque valeur jusqu'à 512 on va regarder si this.descriptor.icons[i] vaut quelque chose, si c'est le cas alors on a une icone et on le
retourne, sinon on incrémente de 2 et on recommence. Si à 512 on a vraiment rien trouvé alors là on renvoie null. Cette petite boucle pourra nous permettre de recupérer à peu près toutes les icones, sauf
celles qui pourraient être un peu exotique ( inférieure à 60 pixel ou supérieure à 512).

Une nouvelle capture pour voir ce que ça donne?  Pas tout de suite car voici que nous avons encore des problèmes! Même si déjà ça s'améliore grandement ^^ Le premier problème est un texte incompréhensible
balancé en erreur dans la console, le deuxième est que certaines icones sont du coup sont plus
petites que d'autre, et c'est moche. Pour le premier problème je vais l'expliquer en accéléré parce que je ne me souviens pas de ce qui m'avais permis de me rendre compte de ce problème. En fait il y a une
application pour le thème par défaut de gaia, et elle ne dispose pas d'icone. Mais de toutes façon on n'en veut pas de cette "application" qui n'en est pas vraiment une. On retourne dans la Factory, et là on
a une variable <u>hiddenRoles</u>, dans laquelle on va rajouter le role "theme". Le role dans une application Firefox OS sert à définir ce que fait en gros l'application, il n'existe pas beaucoup de role pour
l'instant, alors beaucoup n'ont pas de rôles, et d'autres en ont pour un but bien précis, mais du coup ne sont pas des applications utilisable en tant que tel.
Pour le deuxième problème ![Zwipe2](/images/zwipe2.png){:style="float:left"}, en fait on peut simplement ajouter un style à la balise html qui contient l'image, pour luindex3.png, fixer une taille. Donc dans
index.html à la balise <img> on rajoute un petit style="width 70px; height: 70px". C'est une valeur arbitraire on peut mettre ce que l'on veut ^^ À droite vous pouvez voir le résultat que l'on devrait
obtenir une fois tous ce bazar corrigé.
Victoire! Nous voilà avec une applications exploitable!

Avec un peu de travail, et d'acharnement on a donc pu corriger les petit soucis d'une application utilisant un framework, et qui utilise les fonctions de récupérations de données des applications Firefox OS.
Bien sûr elle n'est pas encore parfaite, mais quelle applications pourrait se targuer de l'être ;)

J'espère que cet article vous a plu, et plus important encore vous aura montré que parfois il suffit de pas grand chose pour faire planter une application, mais qu'on peut tout à fait y corriger pour peu
qu'on accepte d'y mettre le temps qu'il faut. J'ai personellement mis environ deux jours entier (du réveil au coucher à peu près) pour trouver et corriger ces bugs, et je suis un grand débutant dans le
domaine. N'hésitez pas à fouiller cette application pour comprendre un peu comment elle fonctionne et comment exploiter certaines fonctionnalité des API Firefox OS. J'ai forké ce projet pour faire mes
bidouilles mais aussi rajouter mes petits trucs, si ça intéresse quelqu'un mon fork est [ICI](https://github.com/Ilphrin/zwipe).

Sur ce, je vous souhaite une agréable journée, pleine de bidouilles et de renards qui flambent.
