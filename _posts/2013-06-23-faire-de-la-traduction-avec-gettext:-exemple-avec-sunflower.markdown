---
layout: post_kevin
title: "Faire de la traduction avec gettext : Exemple avec Sunflower"
author: kevin
cover: book.jpg
---

Salut tout le monde!

J'ai plusieurs fois eu affaire à des logiciels que je trouvais vraiment sympa, mais qui n'étaient pas disponibles en français, ce qui m'empêchait de bien l'utiliser, ou de le montrer à d'autres personnes qui n'y connaissent rien à l'anglais.  Ne connaissant pas encore bien la programmation, j'ai eu l'idée de faire un peu de traduction pour contribuer un peu aux logiciels que j'utilise. Je me suis donc tourné vers Sunflower, dont le site dispose d'un lien expliquant comment lui préparer une traduction. En fait on utilise un logiciel libre qui apparemment est très utilisé dans le monde de la traduction de logiciels.
<!--break-->
Le principe de base de ce logiciel n'est pas très compliqué à comprendre. Il va regarder le code source du logiciel et noter toutes les chaînes de caractères que l'utilisateur final pourrait voir d'une façon ou d'une autre, et les stocker dans un fichier avec l'extension .pot qui servira de base pour toutes les traductions que l'on peut faire du logiciel. Lorsque l'on décide de faire une traduction, on crée un dossier dans le répertoire où se trouve le fichier .pot avec comme nom l'indicatif de la langue (français -> fr, espagnol -> es, etc...). Dedans on crée un fichier avec l'extension .po qui sera une copie de l'autre fichier.

Sunflower dispose déjà de son fichier sunflower.pot situé dans  /usr/share/sunflower/translations/  (pour ma distribution Arch Linux) ainsi que quelques dossiers de traduction. J'ai donc crée un répertoire fr/LC_MESSAGES/   avec dedans un fichier sunflower.po qui est l'exacte copie du sunflower.pot.  Lorsque l'on ouvre le fichier on tombe sur quelque chose comme ça :

![Sunflower](/home/pellet_k/Perso/Site web/_site/images/sunflower01.png)

Au début on a quelques commentaires de descriptions, puis quelques lignes de texte qui rajoutent de la description (où vous pouvez , notamment, indiquer la langue dans laquelle vous souhaitez traduire et quelques informations comme votre nom et votre mail qui pourront être utile, par exemple pour l'auteur du logiciel pour vous contacter).  Ensuite et bien on a l'utile: les blocs de traduction. Il sont composés de trois éléments.

* Un commentaire qui indique le fichier et la ligne dans laquelle se trouve la chaîne de caractère
* Le msgid suivit d'une ligne en Anglais ( enfin qui est dans la langue source du logiciel, c'est quand même généralement l'Anglais!)
* le msgstr qui est simplement composé de deux guillemets. C'est entre ces guillemets que vous mettrez votre traduction de la ligne du dessus.

(Pour y avoir fait, il y a environ 500 termes à traduire pour Sunflower, mais avec un peu de boulot, d'aide et de google traduction on en vient à bout en quelques jours ^^). Quand vous pensez avoir fini ou fait la majeure partie de la traduction, il va falloir transformer ceci en un fichier binaire que Sunflower utilisera pour charger les traductions. Pour ce faire on utilise la commande suivante :

	msgfmt sunflower.po

Et voilà un fichier .mo qui est crée. Si votre système est configuré pour le français, Sunflower devrait par la suite charger le fichier généré ainsi (Note: Cela nécessite que le fichier crée soit appelé sunflower.mo  mais il est de  base nommé messages.mo, il suffit de le renommer pour que tout rentre en ordre). Et vous voilà avec un beau logiciel en français! Gettext est capable de bien des choses, j'ai mis un lien vers la documentation un peu en dessous.  Sur ce bonne journée à tous et bonne traduction!

<u>Sources:</u>

[Sunflower](https://code.google.com/p/sunflower-fm/)

[Documentation Gettext](http://www.gnu.org/software/gettext/)
