---
layout: post_kevin
title: Un jeu de dessin basé sur les lois de la physique
author: kevin
cover: game.jpg
---

Caph est un petit jeu extrêmement sympathique dont le but est de faire se coller un objet A sur un objet B. Basé sur deux principes : Primo tout est a base de dessins. Pour parvenir a votre objectif, vous n'avez que votre souris qui vous permet de dessiner des formes sur lesquelles vont venir se construire vos techniques pour faire avances l'objet A. Secundo la difficulté la plus importante, est que ce jeu est basé sur les lois de la physique ! En effet selon ce que vous dessinez il y aura des effet de gravité et d’énergie mécanique variable.
<!--break-->

## Installation

Pour installer ce jeu il faut aller télécharger a partir de → [Caph](http://caphgame.sourceforge.net/)

Normalement une commande par le terminal et apt-get permettrai de l'installer. Mais depuis peu il y a des problèmes avec le fichier deb. Mais pour les autres version il n'y a manifestement pas de problème, vous pouvez donc continuer à utiliser ces version du jeux. Pour le reste il faut suivre le lien précédent et dans la catégorie "Downloads" cliquer sur le lien et télécharger la dernière version. Ensuite dans le répertoire où vous l'avez téléchargé vous faites une extraction d'un contenu de l'archive avec votre gestionnaire d'archive préféré. Ensuite ça se complique légèrement. Il faut aller dans le dossier caph/src/ puis vous ouvrez un terminal dans ce répertoire. vous lancez ensuite les commandes suivante:

```sh
./confg                           
./build                            
```

Ne faites pas attention aux quelques messages apparaissant, maintenant vous pouvez exécuter le fichier caph avec un simple ./caph . Le jeu se lance alors!

A partir de là libre à vous de créer les raccourcis que vous voulez pour lancer le jeu plus rapidement. (Par exemple en exécutant une commande avec Gnome-Pie!)

Si vous voulez plus d'infos sur le jeu, il y a un répertoire doc dans le jeu avec un fichier README qui fournit pas mal d'informations.

## Comment jouer

Voici les commande de base a connaître :

La souris vous permet de dessiner toutes les formes qui vous passent par la tête pour arriver au bout du niveau. Le clic-droit vous permet de changer de types de matériaux (Noir : Solide , Vert:Solide déformable et Bleu :Corde flexible).

Echap permet de faire un retour arrière dans les objets crées. Il est surtout a combiner avec la touche T qui permet de stopper les temps.

La touche R permet de recommencer le niveau

La touche N permet de passer au niveau suivant (n'ayant pas de système de sauvegarde vous pouvez retourner a votre niveau de cette façon)

Et enfin la touche Q vous permet de quitter le jeu.

Voilà j'espère que vous vous amuserez bien avec ce petit jeu, en tout cas au début c'est un peu difficile a prendre en main mais après ça va mieux. Bien sur les niveau vont en difficulté crescendo ! (je ne sais pas encore combien de niveau il existe, je vous le dirais quand je l'aurais fini x) ). Sur ce bonne fin de journée a tous et amusez-vous bien !
