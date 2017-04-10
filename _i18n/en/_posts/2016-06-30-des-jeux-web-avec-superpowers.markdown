---
layout: post_kevin
title: "Des jeux Web avec Superpowers"
author: kevin
category: planet
serie: superpowers
---

Quand il s'agit de développer des jeux vidéos sur base d'HTML5, il existe de nombreux cours et librairies sur Internet relatif à ce sujet, et on peut maintenant trouver facilement des ressources pour apprendre à développer des jeux avec telles ou telle technologie (jetez un oeil [ICI](https://hacks.mozilla.org/2016/02/html-5-game-development-video-series/), ça veut le coup d'oeil ;)). Dans la continuité de ce boum technologique, et né __Superpowers__: Un IDE pour développer des Jeux Web de façon collaborative.

<!--break-->

### Le concept

Superpowers est un projet libre, qui tourne sur une base d'[Electron](http://electron.atom.io/) donc le logiciel lui-même est fait avec des technologies Web, et il est multiplateforme donc vous pouvez l'essayer sous Windows, Mac OS ou Linux, mais aussi directement depuis le navigateur Web!

Superpowers fonctionne par système de client\<-\>serveur, le serveur s'occupe de gérer les différents projets, et l'accès par les clients à ceux-ci. Lorsque vous lancez le serveur il se lance par défaut en _localhost_ sur un port pré-défini. Une fois le serveur lancé vous pouvez vous y connecter avec un client, avec potentiellement un mot de passe et/ou un nom d'utilisateur à fournir.

![superpowers_01](/images/superpowers_01.png)

### On peut commencer à travailler...

Tout est faisable à l'intérieur de cet environnement de développement. Que ce soit sur les graphismes, le code, le son, etc... Le site officiel fourni un [très bon tutoriel](http://docs.superpowers-html5.com/fr/bien-demarrer/a-propos-de-superpowers) pour débuter avec Superpowers.

Lorsque l'on travaille avec Superpowers sur l'aspect du code, on ne travaille pas directement avec l'HTML, le CSS, ou même le Javascript. Ici tout est en [TypeScript](http://www.typescriptlang.org/), un langage de surcouche à Javascript, qui peut ensuite être compilé vers ce dernier. Pour apprendre à utiliser Superpowers il faut apprendre le langage TypeScript, qui est vraiment très simple, mais aussi à la fois puissant. Je laisse la parole à d'autres personnes plus compétentes pour parler de celui-ci quelque part sur le Net, mais vraiment l'essayer c'est l'adopter. ;)

### ...En collaboration!

Le gros point qui est à mettre en avant à mon avis, et le fait que Superpowers permet aux créateurs de Jeux Vidéos de travailler ensemble, et simultanément sur un projet. Chaque changement se voit en temps réel auprès des autres clients connectés: L'un peut coder pendant qu'un autre prépare des TileSets, et qu'un autre construit une Scène de jeu.

![superpowers_02](/images/superpowers_02.png)

Ce logiciel est encore en Bêta officiellement, il a donc encore quelques soucis, et manque de deux/trois fonctionalités qui pourraient être utiles (des notifications de modifications sur une partie du projet, un moyen de communication, pourquoi pas intégrer un client IRC directement à l'intérieur), mais cela n'assombrit pas ses nombreuses qualités.

Il est rare en ce moment d'avoir un projet libre qui prend les devant et qui innove dans un domaine. Quand aujourd'hui la tendance est à la copie de fonctionalités en comparaison d'autres outils payants et/ou propriétaires, Superpowers apporte une nouvelle pierre à l'édifice des jeux vidéos en Web, et je suis impatient de démarrer un projet sérieux avec (Surement un Shoot 'em up, bien sûr libre cela va de soi, si il y a des intéressés ;) ).

Pour finir, un petit lien vers un dépot Github qui contient de gros tutoriaux sur Superpowers en créant de A à Z des petits jeux d'arcade: [ICI](https://github.com/mseyne/superpowers-tutorials)
