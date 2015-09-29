---
layout: post_kevin
title: "Tuxle Triad et Pygame: Avoir une main"
author: kevin
cover: tuxletriad.jpg
category: planet
---

Salut à tous!

Me voilà aujourd'hui pour un deuxième article sur Pygame. Je vais cette fois-ci vous expliquer comment créer une "main" remplie de cartes tirées aléatoirement, et positionner les cartes dans la main.

La dernière fois je vous avais expliqué comment fonctionnait un objet **Card**. Mais pour pouvoir jouer il en faudra plus d'une (ça risque d'être quelque peu ennuyant sinon ;) ). Ceux qui ont essayé le jeu savent combien de carte il faut, c'est-à-dire 5 par joueur. Pour faire ça nous allons utiliser tout simplement une liste. Dans la fonction **__init__** du fichier  game.py, on peut voir les deux lignes suivantes:

	self.player1Hand = self.randomHand(1)

	self.player2Hand = self.randomHand(-1)

<!--break-->
Je vais expliquer juste après ce qui est à gauche de chaque opérateur =. Je fais donc appel à une fonction r**andomHand()**, qui appartient à la classe **Application**. En descendant plus loin dans le fichier (dans les alentours de la ligne 500 à l'heure de l'écriture de cet article), on trouve la définition de cette fonction qui prend le paramètre **player**. Ce paramètre doit valoir 1 ou -1.

La ligne la plus importante dans cette fonction est **listCards = [card for card in range(len(allCards))]**. Cette ligne va répertorier toutes les cartes existantes par un numéro correspondant à leur position dans la liste **allCards** (qui est créée dans le fichier <u>listOfCards.py</u>). Ensuite avec la fonction **random.shuffle(listCards)**, on va mélanger tous ces numéros.

La boucle **for** de la fonction va passer 5 fois. A chaque fois, on va prendre le premier numéro de la liste, créer une carte correspondant au numéro de cette liste, l'ajouter à une liste de carte nommée **Cards** (avec un 's', ce n'est pas l'objet **Card**) au début, puis supprimer le numéro qu'on a pioché de la liste de numéro. **Cards** va donc contenir 5 cartes prises aléatoirement dans la liste. Enfin la fonction retourne un objet **Hand**.

On va donc voir maintenant ce qu'est ce fameux objet **Hand**. Pour cela on va changer de fichier et aller jeter un oeil du coté du fichier **Hand.py**.  Bon déjà soulagement: il y a moins de 30 lignes de code à lire ;). Sinon, petite explication de l'utilité de cet objet **Hand**:

Tout d'abord on enregistre la liste de cartes dans l'instance d'objet **Hand**. Ensuite on va faire une boucle pour parcourir chacune des cartes de cette liste, et on va à chacune donner des coordonnés pour la placer dans la fenêtre du jeu.

Petite piqûre de rappel, les coordonnés dans une fenêtre fonctionnent par paires. L'abscisse X et l'ordonnée Y, qui respectivement déterminent la colonne et la ligne du pixel indiqué. On va donc à chaque fois modifier la position du centre de l'objet **Rect** de la carte (rappelez-vous j'en ai parlé dans [l’article précédent](/2014/08/17/introduction-a-pygame.html).

![Pygame01](/images/pygame01.png){:style="float:left"}En abscisse X, il n'y a que deux valeur possible, selon si l'on est le joueur 1 ou 2 (ou plutôt en l'occurrence, -1 dans le code du jeu, c'est simplement plus facile à gérer d'appeler le joueur 2 par -1), 60 ou 740.

En ordonnée Y c'est un poil plus compliqué mais pas tant que ça, en fait on prend une position de base, et à chaque fois que l'on parcourt un tour de boucle on veut que la carte suivante soit affiché plus bas, donc on la décale de I*DELTA, I étant le numéro de la carte traitée et DELTA la différence de pixel entre chaque carte.
L'avant dernière ligne est une petite subtilité pour la gestion d'évenement. En fait pour chaque carte on va recréer un objet **Rect** avec les mêmes valeurs qu'avant SAUF pour la hauteur de l'objet rect qui sera fixé à la valeur DELTA. Pourquoi cela?

Je n'ai pas encore parlé de la gestion des clics mais c'est assez simple à se représenter. Imaginons que l'on garde les valeur de base, lorsque dans le jeu je vais vouloir cliquer sur une carte, le programme va comparer la position de la souris au moment du clic avec celle des cartes pour voir sur laquelle j'ai cliqué. Mais du coup les cartes se superposent partiellement, et donc si je clique en haut de la deuxième carte, du point de vue du programme j'aurais aussi cliqué sur la carte du dessus qui est légèrement cachée. Et ca va être un bazar pas possible à gérer à chaque fois qu'on voudra poser une carte car il risque de poser celle du dessus.

Donc pour palier a cela on réduit virtuellement la taille de l'objet **Rect** de la carte pour qu'il ne s'occupe que d'une partie de la carte lorsque l'on clique. Cela implique un défaut: Si on clique en bas de la dernière carte il ne fera rien puisque ce n'est pas sur l'objet **Rect**. Je n'ai pour le moment pas encore trouvé de solution convenable à cela. Mais si quelqu'un à une solution à me proposer qu'il se dévoue ;)

Nous avons donc fait le tour de la question concernant la création d'une main entière de cartes. Voilà tout ce qui se passe quand on lance dans le fichier <u>game.py</u> les deux lignes de code indiquées en haut de l'article. **self.player1Hand** et **self.player2Hand** ne sont donc que des instance d'objet Hand correspondant respectivement au joueur 1 et 2.

Et vu que c'est la grosse mode du moment, j'ai rejoint Diaspora*! Et je dois avouer que je suis sous le charme, à un tel point que je n'utilise presque plus Facebook. Je vais essayer de mettre des news de mes articles à propos de Pygame et Tuxle Triad ainsi que son développement sur Diaspora*, que vous pourrez donc suivre avec  #pygame, dont je suis le seul et unique participant pour l'instant! x) N'hésitez pas à me faire de remarques sur l'article ou même sur mon jeu, si vous l'avez essayé sous tout les angles et que vous avez des porpositions d'ajout et d'améliorations à me faire. ;)

Je ne sais pas encore sur quoi je vais partir pour le prochain article. Surement la gestion des cases sur le terrain. Mais mes cours ayant prit une grande partie de mon temps je ne sais pas encore quand est-ce que je pourrais l'écrire. Je vais aussi surement faire de légères modifications d'apparence des articles pour rendre plus visible  certaines choses, comme les lignes de code que je met entre balises de citation. Faites-moi savoir si vous avez des idées là-dessus parce que je suis pas très doué pour tout ce qui touche à l'apparence. ^^

Sur ce je vous souhaite bonne journée à tous et à la prochaine!
