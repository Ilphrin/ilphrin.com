---
layout: post_kevin
title: Changer de homescreen dans Firefox OS
author: kevin
cover: firefox.jpg
---

Salut tout le monde!



En discutant hier soir soir sur le salon #BuildOpenCEu, dattaz m'expliquait qu'il est possible sur Firefox OS de changer de Homescreen, l'écran d'accueil en français, pour quelque chose d'entièrement différent, du menu vertical ou horizontal jusqu'au cercle d'application que l'on peut faire tourner avec un mouvement de doigt. J'en ai donc essayé plusieurs  sur mon Open C et voilà ce que ça m'a donné pour chacun d'eux. Je tiens à rappeler que je suis en version Nightly que je met à jour chaque matin, donc il se peut que certains marchent mieux sur votre version de Firefox OS que sur la mienne, le mieux étant d'avoir au moins un test pour chaque version majeure de l'OS. Je m'excuse d'avance pour le manque de Screenshot, d'un part je n'ai pas pensé à en faire et de l'autre étant en Nightly et n'ayant pas encore de carte microSD je ne peux pas enregistrer de capture d'écran sur le téléphone.
<!--break-->

Les homescreen peuvent être trouvés [ICI](https://gist.github.com/xfausto/7c954f1b31cf086aff79):

* [Zwipe](https://github.com/mgoodings/zwipe): Celui que je trouve le plus intéressant, il est censé afficher l'heure et la date au milieu de l'écran ainsi que les applications sous forme de cercle en bas. Il se lance mais n'affiche rien à part un bout de code en guise de titre. Dans le débugger on peut voir que la variable $scope est indéfinie, cette dernière est essentielle pour le framework AngularJS utilisé pour cette appli.
* [Grayscreen](https://github.com/xfausto/Grayscreen): Une interface simple et plutôt jolie, censé ne fonctionner que pour la 1.4 mais je l'ai testé quand même en 2.2 pour voir, et bien entendu elle ne fonctionnait pas vraiment. On a un fond blanc et la date et l'heure s'affichent correctement à droite mais c'est tout.
* [Marsscreen](https://github.com/yorikvanhavre/MARSScreen): J'accroche pas du tout à celle-ci, la police de caractère n'est pas top et cela semble un peu flou. Néanmoins elle fonctionne à peu près, on a simplement pas les icones du coup toutes les applications ne s'affichent que par leur nom ce qui n'est pas très pratique. Si ça peut en intéresser certains, il n'y a surement pas grand chose à modifier pour faire afficher les icones.
* [Shyhome](https://github.com/Schoewilliam/Shyhome): Cette application ne va pas révolutionner l'interface, mais au moins elle fonctionne à peu près et est agréable à l'oeil, avec un bon fond d'écran ça doit bien rendre.
* [Betsuscreen](https://github.com/xfausto/betsuscreen): Celle-ci est plutôt prometteuse si on en croit les screenshot, avec une interface qui revient à la mode horizontale des versions 1.x, mais sur mon téléphone je n'ai droit à rien d'autre qu'un écran blanc, dommage...

Voilà ce sont les principaux que j'ai essayé, n'hésitez pas à les essayer vous aussi  pour faire des retour, certaines fonctionneront peut-être mieux avec des version différentes.

Pour ceux qui se posent la question (comme moi ^^), pour tester ces homescreen il suffit de dezipper le paquet téléchargé sur la page github en question, et de faire "Open Packaged app" dans le WebIDE de Firefox, ensuite vous lui demandez de se connecter à votre téléphone (au moment de la sélection, Firefox OS vous demandera une confirmation pour cette connexion) et ensuite de faire "Install and run" avec le bouton en forme de flèche en haut de la fenêtre.

Voilà c'est tout pour aujourd'hui, si d'autres personnes ont des homescreen à proposer ou que vous auriez trouvé, n'hésitez pas à m'en faire part dans les commentaires!

Bonne journée à tous!



PS: J'ai cru comprendre qu'on pouvait demander à WebIDE de faire une capture d'écran, je modifierai l'article pour ajouter des captures à l'occasion ^^
