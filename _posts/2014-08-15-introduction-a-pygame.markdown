---
layout: post_kevin
title: Introduction à Pygame
author: kevin
cover: tuxletriad.jpg
---

Salut tout le monde!

Cela fait un bon moment que j'étudie la programmation, j'ai d'abord commencé par le C pour le C++, et même les langages web. Mais ce n'était que de la théorie et je voulais essayer de créer mon propre petit programme, et j'ai découvert le langage Python il y a environ 1 an grâce au célèbre livre [Apprendre à programmer avec Python 3](http://python.developpez.com/cours/apprendre-python3/).

Mais encore une fois je n'avais rien crée moi-même, je n'avais pendant longtemps fait que la théorie, même si ce livre propose tout un tas d'applications du cours, ce n'était pas de moi que venaient les idées ni le gros du code.  Il y a plusieurs semaines je me suis donc lancé dans une tentative de faire mon propre programme, et plus exactement un jeu, et pour cela j'ai dû apprendre à utiliser la bibliothèque [Pygame](http://www.pygame.org/news.html).
<!--break-->
Petite présentation de la bibliothèque: Pygame est une surcouche pour Python à SDL. On y retrouve absolument toutes les fonctionnalités, ainsi si vous avez déjà travaillé avec SDL, par exemple en C, vous ne serez pas destabilisé. La communauté est très grande et avec le chat IRC ont peut très rapidement recevoir de l'aide. Vous pouvez même, une fois votre programmation entamée, faire une petite page sur le site de Pygame pour le faire découvrir aux autres programmeurs et avoir/donner de nouvelles idées.

Pygame est une librairie vraiment complète et puissante. Pour apprendre à l'utiliser la plupart des tutoriaux vont faire un pas-à-pas pour coder tel ou tel petit jeu, et avec une explication suffisante pour comprendre à quoi sert tel objet dans tel programme. (A ce propos je conseille la lecture de "Making Game with Python and Pygame".)  Je n'ai pas la prétention de pouvoir faire mieux, ce que je veux essayer de faire avec cet/ces article c'est d'essayer d'expliquer certains mécanismes qui m'ont permis de coder mon jeu, comme par exemple la gestion du menu, les animations, etc... Au moins cela aura l'avantage d'être en français, parce qu'on peut dire ce que l'on veut, c'est quel que soit le niveau de maitrise on se sent bien plus à l'aise dans sa langue natale! (Enfin pour mon cas ;) )

Quelques petits liens de documentation sur Pygame:

* [Apprendre à programmer avec Python 3](http://python.developpez.com/cours/apprendre-python3/)  comme je le disais quelques lignes plus haut, pour ceux qui n'ont pas de base en Python.
* [Invent With Python](http://inventwithpython.com/) pour apprendre à utiliser PyGame (mais pas que!).
* [La doc de Pygame](http://www.pygame.org/docs/), classique :) Ainsi que les [projets publiés sur le site](http://www.pygame.org/tags/), donc des tonnes de code que l'on peut lire et lancer pour apprendre!
* [Une vidéo d'introduction à Pygame](https://www.youtube.com/watch?v=bMt47wvK6u0), faire lors de la PyCon. Je vous la conseille vivement même si c'est en anglais car c'est aussi tout un tas de mécanismes des jeux qui sont expliqués.

Pour commencer un petit mot ce le jeu en question. C'est un jeu de carte inspiré entièrement d'un mini-jeu proposé dans le jeu vidéo Final Fantasy VIII sur la Playstation (première du nom), appelé TripleTriad. Je vais essayer dans cet article d'expliquer d'une manière ou d'une autre comment je m'y suis pris pour coder ça. En rappellant que c'est mon premier vrai programme, et qu'il y a surement des choses à améliorer (ne serait-ce que les bugs que je n'arrive pas encore à résoudre x) ). Vous pouvez retrouver TuxleTriad ( je suis pas allé chercher bien loin pour le nom, pour ceux qui connaissent TripleTriad ;) ) [ICI](https://github.com/Ilphrin/TuxleTriad). Pour le lancer il suffit d'utiliser python2.7 (Attention, pas une version 3.x!) sur le fichier **Menu.py**.

Pour ce premier article, je vais commencer par expliquer comment on gère les cartes du joueurs, c'est-à-dire comment récupérer un fichier image pour une carte,. Dans le dossier du jeu, chaque fichier de carte possède un nom sous cette forme:

	Nom + "B" ou "R" + ".jpg"

On a 'B' pour bleu si c'est le joueur de gauche, et 'R' pour rouge si c'est le joueur 2. Chaque carte possède donc un propriétaire (selon la couleur), un nom, et 4 numéro indiqués sur la carte. Ensuite il nous faut une liste pour enregistrer, d'une part, le nom de la carte, et d'autre part ses caractéristique. Cette liste correspond au fichier <u>listOfCards.py</u>. La deuxième liste contient les caractéristique. L'indice de la liste de caractéristique correspond exactement à la carte du même indice dans la liste de nom.
La liste 'value' contient une sous-liste pour chaque carte. Les valeurs de cette liste sont:

* Le numéro du haut
* Le numéro de droite
*    Le numéro du bas
*    Le numéro de gauche
*    Les deux autres ne sont pas encore utilisé dans le jeu ne vous en préocuppez donc pas.

Avant d'aller plus loin il faut faire un petit point sur deux outils SUPER importants, tellement importants qu'il n'y a quasiment qu'eux dans mon jeu, et sont présent dans tout les programmes Pygame.

![pygame02](/images/pygame02.png){:style="float:left"}
Dans Pygame, lorsque l'on veut afficher quelque chose, il faut créer deux objets: **Surface** et **Rect**. Les deux peuvent être représentés par un carré à l'écran. Voyez la Surface comme un calque que l'on viendrait poser sur la fenêtre, avec quelque chose déssiné dessus. Une Surface contient donc tout les éléments qui permettent de colorier des pixels. A l'inverse, l'objet Rect ne gère aucun affichage, mais on peut l'imaginer comme une punaise que l'on mettrait sur un calque pour qu'il tienne en place. Sous forme aussi de carré, il contient les coordonnées du calque à plusieurs endroits, et permet de gérer des événements comme des collisions (entre deux Surface, ou même avec avec la souris si elle se trouve dessus).



Maintenant vous avez tout ce qu'il faut pour comprendre le fichier <u>Card.py</u>. Chaque carte sera une instance de la classe **Card**. On enregistre donc dans cette classe:

*    self.owner -> Le propriétaire de la carte
*    self.number -> La position du nom de la carte dans listOfCards.py
*    self.name -> le nom de la carte qu'on vient chercher directement dans la liste allCards de listOfCards.py
*    self.top, self.right,.... -> Les 4 valeurs de la carte
*    self.element, self.type, self.About -> Pas intéréssant pour le moment
*    self.inHand -> On veut constamment savoir si la carte est encore dans la main du joueur
*    self.image, self.rect -> La Surface et le Rect de la carte

**self.image** vaut 'None' au début de la classe, mais on y met une Surface dans la fonction **getCard(self)** du fichier <u>functions.py</u>. Cette fonction va d'abord chercher le chemin du fichier carte en fonction du propriétaire, puis il va utiliser la fonction **pygame.image.load** de Pygame. Cette fonction retourne une Surface remplie avec l'image envoyée en paramètre. Et pour finir, de retour dans la classe Card, on récupère le Rect correspondant à self.image avec une autre fonction de Pygame: **self.image.get_rect()**. Cette fonction s'utlise uniquement sur une Surface, et va en extraire un objet Rect qui contient les information nécessaire à l'exploitation  de la Surface. (Sa largeur, sa hauteur, etc...).

Voilà il me semble que l'on a fait le tour de cette première partie. La fonction **changeOwner** permet au jeu de gérer le changement de propriétaire (lorsque l'adversaire capture notre carte ou réciproquement), et la fonction **__repr__** est propre à Python, et nous permet de faire un "print notreObjet" même si cet objet n'est pas une chaine de caractères.

C'est la première fois que je fais ce genre d'article, n'hésitez donc pas à me donner des retour, me dire ce qui vous a plu/déplu, ce qui aurait mérité plus d'éclaircissement etc... Et si quelqu'un lisant cet article s'y connait en Pygame et souhaite me corriger sur quelque chose, qu'il le fasse! Je ne voudrais pas dire de bêtises et être la cause du mal de crâne de plusieurs personnes ;)

Voilà amusez-vous bien et bonne programmation ;)
