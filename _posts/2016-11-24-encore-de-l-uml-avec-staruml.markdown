---
layout: post_kevin
title: "Encore de l'UML avec StarUML"
author: kevin
category: planet
serie: UML
---

Oui je parle encore d'UML et de conception, mais promis après cet article ma période UML et maquette est finie ;) (quoique j'ai bien envie de continuer avec Figma, mais on a le temps avant ça!). Après l'essai de Umbrello, moi et un ami avons cherché un autre logiciel pour faire de l'UML et nous sommes tombés sur StarUML

<!--break-->

Bon je vais en décevoir quelques'un par contre, StarUMl n'est pas un logiciel libre, et il dispose même de deux version, une payante et une gratuite. Mais on est rassuré de savoir que la version gratuite fonctionne comme WinRAR: On nous demande d'acheter la version payante mais si on ne veut pas on peut très bien continuer avec la version gratuite qui est largement suffisante pour la plupart des utilisations! (Note: La plupart des extensions officielles sont elles open source et disponible sur Github)


Déjà en arrivant sur la page du projet, on a une assez bonne surprise puisque StarUML est multi-plateforme et est donc installable nativement sous Linux, Windows et Mac OS X. Puisque nous étions deux à l'essayer, nous avons pu doubler les tests. Moi sous Linux Mint 18 et mon camarade sous Windows 10.

* Sous Windows 10 installation rapide et sans soucis.
* Sur mon Linux Mint 18 j'ai des soucis de dépendances, "Dependency not satisfiable: libgcrypt11 (>= 1.4.5)" mais j'ai libgcrypt20 d'installé, donc je ne suis pas bien sûr de comprendre le message. Dans le doute j'envoie un message à l'équipe de StarUML pour poser la question.

Du coup pour le faire fonctionner j'ai pris la version windows que j'ai installé avec Wine et PlayOnLinux au bout de quelques essais.

![Capture StarUML](/images/staruml.jpg)

J'ai l'impression de commencer cet article en faisant de la mauvaise pub pour StarUML, mais en vérité j'aime beaucoup ce logiciel! Sur le site officiel on a une liste de ses fonctionnalités phares à mon avis tout à fait subjectif:

* Support de l'UML 2
* Support de ERD pour la modélisation de bases de données
* Gestionnaire d'extension (Je n'ai pas réussi à le faire marcher sous Wine, mais il y a une bonne documentation de l'API et plusieurs extensions vraiment sympa comme le support du Markdown pour la documentation des diagrammes)
* Generation de code à partir d'un diagramme dans divers langage: C#, Java, C++, etc. Certaines extensions rajoutent le support d'autres langages!
* Export en PDF

En plus de cela, StarUML dispose d'une interface érgonomique qui nous permet de rapidement rajouter un élément, trouver ce que l'on cherche, et modifer un élément existant. Dans la capture d'écran que j'ai mis un peu plus haut, on peut voir que l'écran est découpé en trois zones:

* A gauche la liste des diagrammes et des composants que l'on peut rajouter: Classes, Interfaces, relations, flèches, notes, etc.
* Au centre la vue du digramme en cours, c'est là qu'on va faire le gros de nos manipulations. En bas a droite de cette vue on peut voir un miniature de la vue, on peut se déplacer dedans avec la souris et StarUML va automatiquement zommer ou dé-zoomer si on se déplace plus ou moins près dans la vue 
* A droite une vue en arborescence de tous les composants que l'on a rajouté, ainsi qu'une boite de configuration pour l'élément sélectionné si on veut modifier quelque chose manuellement.

StarUML se rapproche déjà beaucoup plus de ce que je recherchai en terme de création de diagramme UML (à savoir que je me concentre principalement sur les diagrammes de classe) que Umbrello, qui est certes puissant et fait son travail mais ne dispose pas d'une interface aussi poussée et pratique d'utilisation. 

Je pense qu'on a un exemple typique de différences que l'on peut retrouver entre un logiciel entièrement gratuit et libre et un autre logiciel qui dispose d'un business model pour assurer son développement. Je pense qu'on peut faire un logiciel libre et même gratuit tout en ayant un moyen de financer son projet. Que ce soit un Kickstarter, un Tipee, des partenariats commerciaux, la publicité, les "bonus" payants, ou que sais-je encore.

Il y a aussi la façon dont on exploite les ressources d'une communauté (je sais pas si exploiter est un très joli mot dans cette situation). Par exemple le fait de fournir une API et une documentation bien faite pour développer des extensions à son logiciel est un excellent moyen de booster un projet (Dois-je parler de Vim/Neovim, Firefox, LibreOffice, et d'autres?). 
