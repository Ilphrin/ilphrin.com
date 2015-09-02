---
layout: post_kevin
title: "Dungeon Crawl Stone soup: La perle à avoir"
author: kevin
cover: dungeoncrawl.jpg
---

Si il y a bien un domaine auquel personne n'ayant une vie sociale ne peut se souscrire ou au moins en entendre des ragots, c'est bien celui du jeu vidéo. Mais revenons quelques années en arrière. Pas tout à fait à ses débuts, mais à une époque ou les graphismes n'importaient pas tant que ça et, du fait de leurs nombre encore restreint à ce moment-là, l'accent était mis sur le temps de jeu et l'intérêt, et c'était bien visible pour les jeux de rôles notamment (pour ceux qui ont un peu de culture à ce niveau-là, rappelez-vous des Might & Magic et The Eye of the Beholder).
<!--break-->
Pourquoi je parle de ça? Et bien c'est parce que l'on peut classer Dungeon Crawl: Stone soup dans cette catégorie de jeux de rôle "old-school" et pourtant si prenant, si intéressant. Ce jeu se veut d'une simplicité poussée à l'extrême en terme de graphisme, si bien qu'il pourrait tourner sur n'importe quelle machine et autre ordinausore. Si l'on se tourne du coté du 'background', l'histoire et l'univers, il n'y a rien. Nous incarnons un aventurier dont la quête est de retrouver l'Orbe de Zot dans un dangereux donjon, et pour ce faire on doit récupérer un certains nombre de runes. Ce n'est pas quelque chose de gênant en soi d'avoir peu d'information car il y a déjà fort à faire avec ce qui est présent!

Vous pouvez retrouver le jeu et toutes les infos utiles à cette ici: [Dungeon Crawl](http://crawl.develz.org/wordpress/)

Avant de vous donner un aperçu du jeu et de l'interface, j'aimerais parler des points positifs et négatifs (très peu pour lui) de ce jeu. Tout d'abord l'objectif est de faire des parties "courtes", c'est-à-dire pas plus de quelques heures. Pour y parvenir il y a trois ingrédients : Une création de personnage qui permette de faire a peu près tout ce que l'on veut ( 24 races et 26 classes pour l'instant), une difficulté plutôt élevé (je n'ai jamais réussi à gagner de parties, mais ça vient probablement aussi de mon coté boulet :) ), et enfin une génération aléatoire de donjon très au point puisque aucun problème de construction n'est apparu de mon coté, du genre salle inatteignable ou monstre surpuissant devant l'entrée du donjon. On peut faire deux milles parties ça ne sera jamais pareil et ça c'est quand même un gros bon point.

Ensuite sa facilité d'utilisation malgré les nombreuses possibilités et actions qui nous sont offertes. On peut utiliser tout un armadas d'objet allant de la lance à l'arbalète en passant par la fronde, des potions, des parchemins de sorts, des armures de tout types, etc... Avec en plus le système de gestion de nourriture, d'empoisonnement, de fatigue, de contamination magique et tous les autres que j'ai oublié. Et enfin le système de religion qui propose de vénérer tout une palette de dieux en tout genres dont j'ai oublié les noms, déesse de la magie, dieu du chaos, et de à peu près tout et n'importe quoi. A noter que l'importance des dieux peut être tantôt faible tantôt absolument géniale ou mortelle. (Je parle par expérience personnelle, le dieu du chaos qui me fait téléporter au milieu des monstres c'est pas vraiment la joie!).

J'ai un peu bâclé les points positifs mais je vous laisse le plaisir de découvrir le reste. Je n'aurais que deux choses à reprocher au jeu pour l'instant:

* Il n' existe qu' en anglais. N' étant qu'en version 0.13 cela peut se comprendre et de ce que j'en sais plusieurs projets de traductions sont en cours donc ce n' est qu' une question de temps.
* Sa difficulté est un point tout aussi positif que négatif. Il permet un vrai challenge comme je les aime, mais là j'en suis à très exactement 26 parties et je n'ai encore jamais vu de rune!

Bon allez assez bavardé regardons un petit peu à quoi ressemble l' interface du jeu:

![dungeon](/images/dungeoncrawl01.png)

a) La vue du donjon. On peut voir au centre le personnage, dont l'équipement est la majeur partie du temps très bien visible sur l'avatar, que ce soit une cape, une armure ou des gants. On voit aussi qu'à partir d'un certain nombre de case de mon personnage, les cases découvertes du donjon sont plus sombres pour représenter la portée de vue, qui peut être diminuée ou augmentée selon les situations.

b) La boite de dialogue. Tous les messages du jeu, les objets et monstres qui apparaissent, les événements, les informations systèmes, les textes de tutoriel, les actions des dieux, etc...

c) Tout ce qui compose votre personnage sous forme d'onglet et de cases. Tout en haut nous avons les 'abilities', actions offertes par la vénération d'un dieu. Plus en dessous il y a les principales actions à utiliser (Attaquer le monstre le plus proche, se reposer, prier, attendre un tour etc...). Ensuite dans l'ordre d'affichage on a ces onglets:

* Inventory: L'inventaire, pas grand chose à dire là dessus je pense ;)
    Spells: Les sorts mémorisés par votre personnage, ils en existe bien assez pour assouvir votre soif de destruction!
* Memorisation: Les sorts que vous pouvez apprendre grâce aux livres contenus dans votre inventaire.
* Skills: Les compétences, c'est ce qui détermine si vous êtes un bon bagarreur, un assassin aguerri ou un mage puissant.
* System commands: Divers outils d'information, notamment celui qui à mon sens est le plus important, la liste des mutations qu'à subi votre personnage, je vous laisse la surprise de les découvrir!
* Navigation: L'onglet de navigation. Pratique pour se déplacer rapidement.

d) Les monstres qui sont a votre portée de vue peuvent être attaqués directement en cliquant sur l'icône correspondante.

e) La mini carte est très pratique pour se repérer et aller rapidement vers des points précis, il suffit de cliquer sur l'endroit ou vous voulez aller et votre personnage s'y rendra immédiatement! La plupart des informations sont dessus comme les escaliers menant à l'étage supérieur ou inférieur, les cadavres ou les portes.

f) Et enfin les caractéristiques principales de votre personnage. Votre nom, vos barres de santé et de mana, les stats' telles que le niveau, la Force la Dextérité et l'Intelligence, la classe d'armure, votre arme, etc...

Si vous voulez l'installer il suffit sous Archlinux il suffit de lancer la commande:

	yaourt -S crawl

Sous Mint il faudra quelques manipulations de plus, mais rien de bien méchant:

1) Aller dans le centre de contrôle>sources de logiciels et ajouter le dépôt:

	deb http://crawl.develz.org/debian crawl 0.13

2) Ajouter la clé de signature du dépôt:

	wget http://crawl.develz.org/debian/pubkey -O - | sudo apt-key add -

3) Installer le paquet en lançant:

	sudo apt-get update && sudo apt-get install crawl crawl-tiles

Et vous voilà en possession de ce jeu! J'espère que vous vous amuserez bien, bonne journée à tous! ;)
