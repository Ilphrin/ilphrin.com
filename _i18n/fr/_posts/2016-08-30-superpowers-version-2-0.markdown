---
layout: post_kevin
title: "Superpowers passe en 2.0, revenons dessus"
author: kevin
category: planet
serie: superpowers
---

Je vous avais déjà parlé de Superpowers dans l'article précédent. Ce logiciel sert pour "la création de jeux 2D+3D pour tous", et il est gratuit en entièrement Open Source!

<!--break-->

Une nouvelle version est sortie il y a quelques jours, l'occasion pour moi de revenir parler un peu de ce logiciel, les deux/trois trucs que j'ai découvert dessus, et mon premier jeu de découverte de l'outil. Mais d'abord les nouveautés apportées par cete version:

- Mise à jour des traduction en Russe.
- Ajout d'une traduction en Italien.
- Utilisation d'une version de NodeJS plus récente.
- Correction d'un crash lors du déplacement d'un dossier.
- Ajout de la possibilité de choisir le nom du serveur.
- Suppression du paramètre inutile "port" dans le fichier config.json.
- Gestion d'erreur lors du téléchargement du registre.
- D'autres petites correction dans les différentes parties du projet.

Le développement de Superpowers avance constamment et ça fait plaisir à voir. Il y a encore peu de contributeurs au code principal, mais il y a une bonne communauté qui se forme que ce soit sur [itch.io](itch.io) ou sur le chat Discord, et de plus en plus de gens se mettent à créer des jeux avec cet IDE.

J'aimerais parler d'une fonctionalité qui m'intéresse particulièrement, qui est l'ajout de Shaders. Pour une petite définition de ce qu'est un Shader je vous invite à lire l'article sur [wikipedia](https://en.wikipedia.org/wiki/Shader).

![superpowers_03](/images/superpowers_03.jpg){:.cover}

Lorsque l'on édite un Shader, on arrive sur une page découpé en 4 zones. En haut à gauche la définition des _uniforms_ et des _attributes_, en haut à droite on a une prévsualisation du Shader sur la surface que l'on veut (Un plan, une image, une sphere, ou un cube), en bas a gauche l'éditeur de Shader Vertex, et en bas à droite l'éditeur de Shader Fragments.

J'ai commencé à apprendre à faire des Shader en découvrant cet outil (je ne savais même pas ce qu'était un Shader avant!), et depuis j'utilise Superpowers pour apprendre à utiliser et créer des Shader car il permet de rapidement voir le résultat sur des element de notre jeu et de les incorporer dans une scène.

Il existe déjà des outils très puissant en ligne pour les shaders (comme ShaderToy, bien que le site fasse ramer à mort mon ordinateur...), mais l'avoir directement dans son logiciel de développement de jeu rajoute un plus intéressant. Il ne manque plus qu'une auto-complétion pour divers elements: variables OpengL, Attributes/Uniforms/Varying, fonctions GLSL, etc... Dans l'editeur de code Vertex ou Fragment.

Pas de rapport ave les Shaders, mais je me suis lancé dans la création d'un petit jeu sans ambition pour apprendre à manipuler Superpowers. Vous pouvez le voir dans la partie "Projet" de mon site, il s'appelle Dodgell.

Dans ce jeu, vous jouez un petit bonhomme qui avance tout seul dans l'espace (on voit les planètes et les étoiles qui défilent en arrière-plan c'est pour ça =D), et vous devez esquiver le plus longtemps possible les ennemis qui arrivent du haut de l'écran. A chaque ennemis qui sort de l'écran par le bas, vous gagnez 5 points. Le meilleur score sur le même ordinateur est enregistré.

Faire ce petit jeu m'a permis d'apprendre les bases des bases avec Superpowers, c'est-à-dire l'utilisation des scènes, des behaviors, des tilemap, tilesets, etc... Et surtout de manipuler l'API [TypeScript](https://www.typescriptlang.org/). Je ne compte pas le continuer bien longtemps, je pense rajouter des choses comme un menu, peut-être des niveaux différents, des ennemis différents (plus gros, plus rapides, avec des mouvements non-linéaires!). J'aimerais surtout me lancer dans un [Shoot'em up](https://fr.wikipedia.org/wiki/Shoot_%27em_up), ça fait un moment que ça me trotte dans la tête (d'ailleurs on peut voir Dodgell comme un croquis de Shoot'em up, mais où on tire pas).

Surtout depuis que je me suis mis à des jeux comme [Touhou Project](https://en.wikipedia.org/wiki/Touhou_Project), ou même d'autres jeux qui n'ont aucun rapport dans le principe mais qui m'ont donné beaucoup d'idées pour faire un jeu sympa, comme [Fate Grand Order](http://typemoon.wikia.com/wiki/Fate/Grand_Order) ou [Path of Exile](https://www.pathofexile.com/). Le premier ayant des fonctionalités telle que les événements ou les combats qu'on pourrait qualifier de collaboratifs (un boss avec X milliars de PV, chaque joueurs qui le combat peut faire tomber un certain nombre de millions de PV, si toute la communauté bat le boss dans le temps imparti ils gagnent des trucs). Dans le deuxième ce sont surtout les effets des mob qui sont intéressants, et qu'on peut appliquer dans un Shoot'em up (des ennemis qui vous tirent dessus, et qui en plus ont un lien de plasma qui les relient et qui sont mortels si vous passez au travers).

Enfin voilà tout ça pour dire que je vais bien m'amuser dans les temps qui viennent avec Superpowers, même si j'ai d'autres projets à faire en même temps (je me lance dans un lecteur de flux RSS entièrement en Rust :D) et que ma troisième année à Epitech va commencer, je vais essayer de prendre du temps pour avancer Dodgell, et faire d'autres jeux avec Superpowers, notamment avec d'autres gens pour ENFIN voir ce que valent ces fameuses fonctionalités collaboratives promises avec Superpowers. Ca intéresse quelqu'un dans le public de faire des jeux tous ensemble? ;)
