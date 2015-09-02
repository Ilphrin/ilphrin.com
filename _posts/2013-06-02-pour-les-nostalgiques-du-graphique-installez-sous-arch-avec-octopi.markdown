---
layout: post_kevin
author: kevin
cover: pacman.jpg
---
Salut tout l'monde!

Cela commence à faire quelque mois que je tourne sous Archlinux, et mis à part un plantage Xorg qui m'a forcé à faire une petite ré-installation, je me plais vraiment avec cette distribution! Notamment grâce au dépôt communautaire AUR qui, jusqu'à maintenant, m'a permis d'installation tous les soft dont j'avais envie, et que je ne trouvais pas dans les gestionnaire de paquet des autres distributions.
<!--break-->
Aujourd'hui je vais vous parler d'un logiciel fournissant un frontend comme on dit à l'outil de gestion de paquet Pacman (ou Yaourt) : Octopi. C'est un projet d'un monsieur Alexandre Albuquerque Arnt (auprès duquel je m'excuse déjà si j'ai écorché son nom ^^"), il est sous licence GPL2 et est écrit en C++ avec Qt4. Mr Arnt est aussi la créateur de  [QTgzManager](http://qtgzmanager.wordpress.com/).

Pas de temps à perdre, voyons comment l'installer avec ses dépendances:

	pacman -S octopi-git

Note : Il est préférable d'installer aussi un frontend pour sudo, tel que gksu, kdsu, etc... car Pacman/Yaourt nécessite les droit d'administrateur pour agir.

![octopi](/images/octopi01.png.png) 

Comme vous pouvez le voir dans la capture ci-dessus, il se présente comme un gestionnaire de paquet classique:  (Dé-)Installation, mise à jour système, etc.... Mais il présente aussi certaines fonctionnalités sympas, comme l'affichage des news sur Archlinux dans "Actualités, ou l'onglet "Utilisation" qui donne tout ce qu'il faut pour savoir utiliser correctement ce logiciel, où l'on peut voir notamment qu'un bon nombre de raccourcis en facilitent l'utilisation.