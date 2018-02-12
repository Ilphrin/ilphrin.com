---
layout: post_kevin
title: "Umbrello: Un outil pour faire de l'UML"
author: kevin
category: planet
serie: UML
---

Pour nos projets a Epitech on doit de plus en plus travailler la partie conception plutôt que le projet en lui-même. Déjà parce que nos projets se complexifient: On passe d'un simple bash/sh à recoder à un équivalent de Mumble avec un client et un serveur tous les deux multi-plateforme. Et aussi bah... parce que ya pas que le code dans le dév, il faut réfléchir consciencieusement à l'architecture de son projet, aux différents composants que l'on va créer/coder et comment on va lier tout ce bazar.

<!--break-->

### L'UML

L'un des moyens les plus courant, les plus utilisés, de nos jours c'est l'UML pour _Unified Modelling Language_. Il faut voir l'UML comme une RFC, une normalisation de la conception de systèmes. Ce n'est pas le nom d'un logiciel, mais d'un protocole à utiliser dans son logiciel ou son bout de papier, pour concevoir son programme.

Avant de vous parler d' Umbrello, je vais parler un peu plus en détail du fonctionnement de l'UML et comment en faire. Si vous connaissez déjà vous pouvez défiler la page pour voir directement le moment ou je parle d'Umbrello ;) (je mets un petit titre)

En programmation, l'UML est particulièrement adapté lorsqu'on utilise un paradigme Orienté Objet type C++, Java, Python, etc. Mais rien n'empêche de l'utiliser pour d'autres choses! Lorsque l'on conçoit son programme, on passe par une phase d'abstraction. C'est-à-dire que l'on prend les éléments de ce qu'on veut obtenir, et on regarde s'il n'existe pas des caractéristiques communes entre ces éléments.

On va prendre un exemple assez simple pour imager tout ça. Imaginez que vous êtes en train de développer un outil de simulation de téléviseurs, pour avoir une vue 3D, faire des tests, voir le fonctionnement ou n'importe quoi d'autre on s'en fiche. Votre programme permet de représenter des téléviseurs existants.

On peut donc dire qu'on aura beaucoup de types de téléviseurs, avec tout un tas de marques, et de caractéristiques propres à chacun. Mais dans tous les cas ce sont les TV donc on doit pouvoir en déduire un certain nombre de propriétés communes:

* Toutes les TV ont une marque, des haut-parleurs, des câbles, etc.
* Toutes les TV doivent pouvoir s'allumer, s'éteindre, changer de chaine, monter/descendre le volume, etc.
* Toutes les TV ne fonctionnent que selon certains critères, par exemple seulement si la prise est branchée et s'il y a le câble ou l'antenne

Lorsque l'on va représenter ceci, on va avoir une classe dite "abstraite" mère appelé AbstractTV qui va contenir des cases et des fonctions vides pour chacun de ces attributs. Ensuite toutes les autres classes de TV vont découler de celle-ci, elles vont en _hériter_, et devront donc s'appuyer sur le modèle d'AbstractTV.

Et on peut donc représenter tout ça avec l'UML, je ne vais pas faire un schéma, je vous laisse le soin de trouver des tutos bien mieux que ce que je pourrais faire ;) Comme [celui-ci](http://www.tutorialspoint.com/uml/) ou [celui-là](http://laurent-piechocki.developpez.com/uml/tutoriel/lp/cours/)

### Umbrello

J'ai découvert donc récemment un logiciel sous KDE pour faire de l'UML rapidement et simplement qui s'appelle... [Umbrello](https://umbrello.kde.org/) (vous l'auriez pas deviné hein?) Je n'ai utilisé pour l'instant que l'outil pour faire des diagrammes de classe, mais bien sûr la plupart des types de diagrammes pour l'UML sont réalisables.

Ce logiciel est en développement et une version mineure sors tous les 4 mois à peu près. Une petite capture pour présenter la bête:

![umbrello interface](/images/umbrello01.png){:.cover}

En haut on a la barre d'outils pour faire la plupart des opérations nécessaires: création d'une interface, d'une classe, flèche de composition, d'agrégation, etc. Sur la gauche on a un panneau de détails sur les boites qu'on a crée sous forme d'arborescence et d'autres petits outils que je vous laisserais découvrir ;)

On l'a utilisé tout le long de notre projet de ces deux dernières semaines et nous sommes relativement satisfaits. Il y a deux soucis assez désagréable dans Umbrello que je trouve dommage:

* La molette fait un zoom/dezoom plutôt qu'un défilement vertical/horizontal, et c'est assez contre-intuitif en plus de n'être absolument pas pratique, ni utile puisqu'il y a une petite barre de réglage du zoom en bas à droite largement suffisante.
* Pas de Ctrl-Z ou de Ctrl-Y pour revenir dans l'historique des actions, en fait le seul moyen d'annuler ce qu'on vient de faire consiste soit à refaire manuellement nos mouvements en sens inverse, soit on peut utiliser "l'historique de commandes", et on clique sur l'état auquel on veut revenir. L'historique est donc déjà implémenté mais pas moyen d'y accéder rapidement comme dans presque n'importe quel logiciel avec des raccourcis clavier.

J'espère qu'il y aura des modifications faites sur ce sujet d'ici les prochaines versions, j'irais jeter un oeil sur leur liste de bugs pour essayer d'en parler. Sinon je vous conseille de l'essayer il est tout de même pratique et support quelques fonctionnalités avancés telles que l'import/export de code vers/depuis l'UML.
