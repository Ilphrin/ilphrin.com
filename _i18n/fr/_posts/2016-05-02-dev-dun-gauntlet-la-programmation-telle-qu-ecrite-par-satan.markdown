---
layout: post_kevin
title: "Dev' d'un Gauntlet: La programmation telle que l'a écrit Satan"
author: kevin
category: planet
cover: gauntlet.jpg
serie: gauntlet_epitech
---

Mettons un peu de contexte derrière ce titre étrange... Nous approchons de la fin de 2e année à Epitech, et l'un des plus gros projet de C++ a commencé: Indie Studio.

Nous sommes 6 sur ce projet, avec 1 mois et demi devant nous pour développer 1 jeu dans une petite liste:

- [Sprint](https://en.wikipedia.org/wiki/Gran_Trak_10): Un jeu de courses de voitures avec l'ajout de power-ups façon Mario-Kart
- [Lemmings](https://fr.wikipedia.org/wiki/Lemming): Un jeu de reflexion où l'on doit gérer des petites bestioles un peu débiles. (Mais on connait non?)
- [Worms](https://fr.wikipedia.org/wiki/Worms_(s%C3%A9rie://fr.wikipedia.org/wiki/Worms_(s%C3%A9rie))): Nan celui-là vous êtes obligé de le connaitre, allez y jouer avant de continuer cet article.
- [Bomberman](https://fr.wikipedia.org/wiki/Bomberman): Un jeu multijoueur dont le but est de poser des bombes pour tuer le plus d'ennemis. (Je vais me faire censurer par le gouvernement avec des phrase comme ça)
- [Gauntlet](https://fr.wikipedia.org/wiki/Gauntlet): Un jeu d'action dans un donjon en vue de dessus, avec multijoueur jusque 4 sur le même pc! __On a pris celui-ci__.

<!--break-->

Nous avons quelques restrictions dont deux d'entres elles qui sont: Un jeu 3D, et un jeu multijoueur. Une fois le jeu choisi on va prendre un moteur 3D en piochant l'un de ces deux-là:

- [Irrlicht](https://fr.wikipedia.org/wiki/Irrlicht): Simple est bien foutu, et à décidé de parti sur celui-ci.
- [Ogre 3D](https://fr.wikipedia.org/wiki/Ogre_3D): Plus connu, il est apparemment beaucoup plus puissant et performant, mais nous n'avons pas réussi à le faire marcher, et vu que le temps presse nous avons dû trancher.

Mon but est d'écrire un article chaque fois que nous nous réunissons tous pour bosser une journée entière dessus, afin de noter notre avancée et partager un peu nos démarches, idées, et pourquoi pas quelques bouts de codes. Mais nous ne pourrons pas diffuser le code du jeu réalisé puisqu'il sera au nom et à la licence d'Epitech.

Je dirais que nous avons travaillé principalement sur 2 aspects aujourd'hui:

<h3>1) La documentation/L'organisation</h3>

Nous avons commencé a nous répartir les tâches, en fonction des envies et des capacités. Moi et mon binome dans ce groupe, Nathanael, devons nous occuper de tout ce qui attrait à l'environnement de jeu et l'interface. C'est-à-dire un menu principal pour commencer.

Mais aussi la gestion des cartes dans lesquelles les joueurs vont jouer avec notamment une possible génération aléatoire de carte, et les mécanismes pour ajuster le niveau de jeu: Le nombre de monstres, la force de ceuxi-ci, l'adaptation au nombre de joueurs, etc...

J'avais fait un peu de lecture à l'époque ou j'ai codé [TuxleTriad](https://github.com/Ilphrin/TuxleTriad) sur la façon de gérer la difficulté dans un jeu du type de Gauntlet, et j'en avais retenu un "algo" que je pense utilise pour notre jeu.

Chaque acteur - monstre, boss, héros, pnj - possède un 'poids' qu'il lui est attribué préalablement par le biais d'un fichier de configuration et qui détermine un peu sa force globale. Un héros aura un grand poids, et le but est qu'une fois le niveau crée, le total des poids des ennemis soit supérieur ou égal au poids des joueurs. Viennent par dessus s'ajouter des modificateurs externes pour ajuster la difficulté selon une situation ou un événement.

Il y a plusieurs avantages à ce principe:

- __Les cartes__: On va pouvoir créer des cartes aléatoirement assez facilement si on construit bien ce système.
- __La modularité__: On possède une grande modularité sur la façon de créer un niveau. On peut par exemple facilement imaginer une courbe de croissance....croissante, du modificateur de difficulté au fil de l'avancée dans les différents niveau. Ou faire des niveaux secrets avec pleins de trésors, mais aussi beaucoup d'ennemis puissants.

Je vois par contre un défaut à ce système: La mise en place. Nous allons avoir besoin de beaucoup de données de configurations pour générer tout ça, un fichier par niveau par exemple.

Sinon nous en avons profité pour lire la Doc' d'Irrlicht, et la chose la plus importante: Ça vient de l'Allemand et ça signifie Feu Follet! Quand même, je me devais de le dire ;)

On sais donc que l'on peut utiliser OpenGL facilement sur Windows et sous Linux avec Irrlicht, qu'il possède un module de gestion des controlleur de types manettes, et qu'il possède un gestionnaire de fichier XML integré, dont nous nous servirons surement pour décrire les stats' des monstres, des joueurs, et de tout le reste.

<h3>2) L'enfer</h3>

Voilà on y arrive. En fait j'ai oublié de mentionner une restrictions de taille tout à l'heure: Nous devons créer un installateur pour Linux ET Windows.

2 problèmes: De 1 personne n'aime coder sous Windows dans notre groupe, et de 2 on a jamais eu de projet à faire sous Windows avec Epitech, et là on va devoir tout apprendre sur le système de compilation et de linkage sous Windows.

Et croyez-moi, maintenant que nous avons frolé le museau de la bête, on a pas envie de sentir ses poils! (J'espère que vous avez bien l'image en tete maintenant).

Je vais vous épargnez les détails, mais dans le gros de notre processus d'apprentissage voici ce qu'il s'est passé:

- On a voulu compiler avec GCC, on a compris qu'il fallait installer MinGW.
- Mingw était pas trouvé dans le CMD (sérieux, Windows ose appeler ça la ligne de commande...)
- J'ai réussi à lancer un tout petit fichier C avec MinGW.
- On a quitté de rage, et regardé comment faire de la cross-compilation pour Windows à partir de notre chère patrie Linux. Après facilement 200Mo de paquets installés, on a quitté de rage.
- On est retourné sous Windows, Rémi, happé par le désespoir, à installé Visual Studio pour créer un fichier de projet Irrlicht pour avoir une DLL de notre moteur.
- Après 3/4h de travail acharné. Le Saint Graal apparait: "Compilation finished, 1 Build created, 0 errors" \o/

Ce qu'il reste à faire donc:

- Faire un .BAT pour automatiser cette compilation.
- Avoir un .exe de notre jeu
- Utiliser un outil comme Inno Setup pour lancer ce .BAT, générer noter .exe, et installer notre jeu correctement sous Windows.

Je peux vous dire que les insultes contre Windows ont été nombreuses (surtout venant de moi :D).

Bon maintenant qu'on vois à peu près comment ça marche ça devrait le faire, mais plusieurs choses me gênent énormément dans ce que l'on a fait, mais que l'on ne peut pas faire grand chose contre par manque de temps:

- Pourquoi faut-il un IDE obèse come Visual Studio pour compiler du code C?
- Quitte à avoir un OS qui fait tout seul ce qu'il faut, pourquoi c'est si compliqué de compiler un printf("Coucou\n"); ?
- Pourquoi l'installateur de MinGW est aussi moche?

Et enfin, pouquoi c'est si mal documenté? J'veux dire, la comilation c'est quand même l'essence même de l'informatique, pourquoi une chose aussi triviale est un tel calvaire à réaliser? Je sais que Windows se veut un OS pour le grand public, mais il y a bien des gens qui codent dessus? Sinon GNU/Linux n'aurait pas de soucis de popularité.

Je ne veux que deux possibilités pour que quelqu'un développe de son plein gré (c'est-à-dire en dehors de son travail et tout) sous Windows: Soit il le fait depuis des années et connait le workflow Windows, dans ce cas ce serait sympa de la part de ce mec de populariser le MSDN ou de nous faire un ptit Wiki (j'offre des cookies =D), ou alors c'est que la lobotomie commerciale de Windows fait des merveilles, et que les gens ne codent sous Windows que parce qu'ils pensent que c'est ce qu'il se fait de mieux.

Alors que franchement, entre nous, au final c'est pas si mal notre petit:

<pre>
<code class="bash">
./configure
make
make install
</code>
</pre>
