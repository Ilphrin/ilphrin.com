---
layout: post_kevin
title: "Dev' d'un Gauntlet: La conclusion d'un jeu qui ne s'est pas fini"
author: kevin
category: planet
cover: gauntlet.jpg
serie: gauntlet_epitech
---

La date de rendu de notre projet de Gauntlet, qui est l'un des deux gros projet de fin de deuxième année, s'est terminée il y a à peu près une semaine maintenant. Il y a du bon et du moins bon, et je me suis dit que mettre sur papier numérique ce qu'il faut en retirer peut être un exercice utile, déjà pour moi pour avoir des notes pour plus tard, et peut-être que nos erreurs serviront à ce que quelqu'un ne refasse pas les mêmes =D.

<!--break-->

Pour avoir un peu de contexte, je vous envoie vers mon précédent article ([Ici, là oui ici!](/planet/2016/05/02/dev-dun-gauntlet-la-programmation-telle-qu-ecrite-par-satan.html)
Ce Gauntlet-like est le deuxième jeu sur lequel je travaille, après TuxleTriad. Il y a de nombreux paramètres qui ont changé par rapport au développement de ce dernier:

* C'est un travail de groupe, donc il faut penser le code pour qu'il soit compréhensible par ceux qui vont potentiellement l'exploiter.
* Nous avons dû passer un temps conséquent en début à nous organiser et nous distribuer les tâches, notamment par le biais d'un diagramme des principaux objets C++. (Merci [Dia!](https://framasoft.org/article1057.html))
* C'est un jeu en 3D et non pas en 2D, et donc beaucoup de choses changent ne serait-ce que pour la gestion des coordonnées, mais aussi des collisions (qui fut l'une des parties de notre projet dont je suis le moins fier).
* C'est un projet en C++, et non en Python, donc beaucoup plus bas niveau et avec une philosophie bien différente.
* Nous avons utilisé la librairie Irrlicht qui nous était totalement inconnus (jusqu'à ce que je me souvienne qu'elle est utilisée dans [Minetest](http://www.minetest.net/))
* Et j'oublie sûrement d'autres choses mais bon tout le monde est déjà parti de mon article maintenant donc c'est pas bien grave.

Il y a donc pas mal de challenges à relever là-dedans, mais rien d'insurmontable à première vue pour peu qu'on y passe le temps nécessaire.

Je vais surtout me concentrer sur deux choses dans cet article: L'architecture de notre code dans sa globalité, et les outils dont je me suis occupé.

Nous avons passé plusieurs heures avec Dia pour concevoir l'architecture de notre jeu. Il fallait une structure qui nous permet d'implémenter les composants d'Irrlicht, mais surtout de les surcharger pour y appliquer nos propres traitements. Pour cela nous avons conçu une classe IrrlichtEngine, qui contiendrait les principaux objets d'Irrlicht dans ses attributs, et qui s'occuperait en outre de la boucle de jeu principale.

À cette classe, nous viendront lui ajouter les différents éléments nécessaires que nous concevons. Dans mon cas ce fut la classe Camera, qui s'occupe de gérer le déplacement et le zoom automatiques de la caméra en fonction de la position des joueurs, et la classe CollisionManager qui permet de dire si oui ou non en est en train de se taper contre quelque chose, et si oui contre quoi on se tape.

En dehors de mon travail, nous avions aussi une classe pour gérer les entrées provenant du clavier et de manettes d'XBox branchées en USB, des classes pour gérer les objets 3D en jeu, et des sous-classe de celle-ci pour des éléments comme les Joueurs, les Ennemis, etc... Une classe pour les IA, une pour les objets en jeu (je parle là des objets qu'on utilise en jeu tels qu'une potion ou du poulet).

Plus nous ajoutions de fonctionnalités et de classes, plus nous nous rendions compte que le concept de cette classe IrrlichtEngine était tout simplement bloquant dans chacun de nos développements. Un exemple des plus parlants est mon CollisionManager (bien qu'il me semble que les IA ont eu leurs doses de souffrance aussi):

* Un Joueur veut taper un ennemi. On rajoute une condition si la touche d'attaque est appuyée. Si oui, on veut pouvoir baisser les points de vie de la personne en face. Problème: Le Joueur ne peut savoir qui il tape, car la liste des Personnages en jeu sont dans IrrlichtEngine, et qu'il n'est pas accessible aux autres classes.
* C'est là qu'intervient mon IrrlichtEngine, une classe codée à part et qui sera un attribut de l'IrrlichtEngine qui peut retourner le Personnage qui est en face.
* Pour être initialisé il a besoin d'un composant d'Irrlicht, le SceneManager. On ne peut pas le lui donner dans le constructeur, donc je dois créer une fonction initCollisionMgr() qui sera appelée dans le constructeur de l'IrrlichtEngine avec son attrbut SceneManager.
* Enfin mes fonctions utiles doivent prendre en paramètre un pointeur vers le Personnage qui veut savoir qui il a en face de lui, et faire joujou avec ses attributs et des fonctions d'Irrlicht pour voir s'il collisionne avec quelqu'un d'autre (Question: Le verbe collisionner existe?)
* ...Et en plus mes collisions ne fonctionent même pas correctement =D (Téléportations, bloquages, glissements sur le mur, et j'en passe).

En fait le souci principal au coeur de notre IrrlichtEngine c'est qu'on a pris chacun des composants d'Irrlicht qui étaient bien séparés dans leur coins pour les centraliser et bloquer l'accès à ceux-ci. Et lorsque nous nous sommes rendu compte de cela il était déjà trop tard, et pas question de rechanger l'architecture à 2 jours du rendu du projet! Nous avons donc fait avec tant bien que mal.

Je ne dis pas que le code d'IrrlichtEngine était mauvais, loin de là. Au contraire il était justement très bien par rapport à ce qu'on voulait de lui, et ça nous a bloqué d'autant plus. Ce fut notre plus grande leçon je pense dans ce projet. Mais c'était la première fois, pour la plupart, pour un développement de jeu vidéo. Et même moi qui en ai féja fait un dont je suis pas peu fier, je n'était absolument pas dans mon environnement naturel.

Mais il y a quand même plusieurs choses qui ont fonctionné très très bien dans ce projet, et vu que je n'ai pas tout fait du tout je ne parlerais que de mes "inventions". Tout d'abord il y a la création des niveaux. Pour cela j'ai utilisé IrrEdit.

IrrEdit est une extension au logiciel propriétaire et payant CopperCube, "un éditeur pour créer des jeux en 3D, des applications et des sites 3D sans programmer (cf le [site officiel](http://www.ambiera.com/coppercube/))"

![irredit_1](/images/irredit_01.png){:style="float:left"}

Voilà le premier niveau que j'ai fait avec celui-ci. J'ai dû passer 30 h à apprendre à l'utiliser, et 2h à faire vraiment les niveaux. Son interface est pas mal du tout et je n'ai même pas encore exploité un centième de ses capacités.

J'ai eu un souci, car il est exclusivement sous Windows, et j'avais pas de Windows fonctionnel sous la main (en fait si, mais je l'ai jamais démarré et j'avais pas envie de commencer =D). Donc j'ai fais chauffer Wine, et sous réserve de configurer CopperCube pour utiliser OpenGL plutôt que DirectX, tout fonctionnait au poil.

Seul hic, lorsque j'exporte des scènes irrlicht, je ne peux les utiliser dans mon jeu à cause de chemins absolus dans les fichiers XML générés par IrrEdit. Déjà c'est moche en absolu, et en plus c'était des chemins Windows donc pour le Multi-OS c'est dur...

J'ai donc dû passer un bon moment à développer un script en Bash qui va convertir les chemins absolus en chemins relatif, et avec des / plutôt que des \\. Je vais mettre prochainement ce script avec sa doc sur un dépôt Github [ICI](https://github.com/Ilphrin/irredit_relative).

J'ai déjà parlé du CollisionManager plus tôt, donc je n'en dirais pas plus j'ai fait un grand tour de ce qu'il faisait ;)

Je me suis occupé aussi de la caméra! Avec la classe... Camera, bien deviné! Ici il n'y a rien de compliqué, je voulais une caméra qui aie un peu le même comportement que dans Super Smash Browl sur Wii/Wii U.

Pour ceux qui ne voient pas, la caméra suit les différents joueurs, qu'ils soient 2 ou 8, et effectuent un ou zoom en fonction de la plus grande distance qu'il y a entre les joueurs.

Du coup ma Caméra fait deux choses à chaque frame de jeu: Elle calcule le centre sur 2 dimensions entre les joueurs et se positionne en hauteur pour fixer ce centre, et elle zoom en fonction de la plus grande distance entre les joueurs. Ça permet d'avoir une caméra dynamique plutôt cool et sans difficulté. Il faut juste récupérer les positions de tous les joueurs.

Dans l'ensemble ce projet aura été très intéressant, malgré une certaine fatigue ressentie pour ma part dû à un gros manque de repos.

Pour finir, j'ai trouvé qu'Irrlicht à été un moteur 3D largement suffisant pour ce qu'on voulait faire avec, et je n'ai pas compté le nombre de fois qu'on a cherché à faire une action dans notre code, avant que quelqu'un vienne nous dire "Non mais faut pas vous embêter, ya des fonctions déjà dans Irrlicht pour faire ça automatiquement!".

Ce que je regrette au final c'est qu'il a le même souci que beaucoup d'autres projets, souvent pour les logiciels libres d'ailleurs, c'est qu'il a une documentation qui commence à se faire vieille, et j'ai l'impression que le forum l'est encore plus (pour nous aider on a dû regarder des posts qui datent de 2005!).

Mais si vous avez des connaissances en C++, un ou deux gaillards sous la main et du temps libre, je vous conseille d'y jeter un coup d'oeil il possède de nombreuses fonctionnalités et surprises, et à l'avantage de fournir un moteur vraiment léger par rapport à la plupart de ses concurrents, pour un lot de fonctionalités largement suffisant (a mon goût).

Je n'écrirai pas d'autres articles sur le sujet puisque je ne pense pas que j'aurais à re-travailler avec sauf pour un projet personnel à la limite. Sur ce, bonne soirée et félicitations pour m'avoir lu jusqu'au bout! =D J'vous donnerai un cookie si on se croise.
