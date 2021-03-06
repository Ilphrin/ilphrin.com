---
layout: post_kevin
title: "Premiers pas avec Gaia (FirefoxOS)"
author: kevin
category: planet
cover: firefox.jpg
---

J'utilise tous les jours mon Open C avec Firefox OS dessus, depuis deux ans maintenant (plus ou moins).
J'ai vu passer l'OS de la version 1.2 jusqu'à la version 3.0 d'aujourd'hui, si on omet la "nouvelle" branche 2.5 que je n'ai pas encore pu observer par moi-même.
Je met fréquemment a jour mon téléphone grâce au travail considérable de la communauté francophone pour Firefox OS qui a travaillé dur pour fournir un système automatisé de construction de builds installable sur les Open C vendu sur Ebay et dans les magasin en France, et ce avec différentes branches (la Beta, la Aurora, la Nightly, et Spark en 2.5), tout est expliqué en détail sur le site [http://builds.firefoxos.mozfr.org/doc/fr/devices/zte-open-c](http://builds.firefoxos.mozfr.org/doc/fr/devices/zte-open-c)

<!--break-->

Mais quant au système lui-même on retrouve de façon assez récurrente des commentaires sur ses défaut, ou les fonctionalités qu'il lui manque. Le premier qui me vient a l'esprit est le support du protocole [CardDav](https://fr.wikipedia.org/wiki/CardDAV), qui est un protocole qui permet la synchronisation de ses contact a travers différent appareils.
Un bug a été crée vis-à-vis de ce manque sur le Bugzilla, datant de [début 2013](https://bugzilla.mozilla.org/show_bug.cgi?id=859306), et qui depuis ne semble pas montrer le bout de son nez, même si la demande se fait très forte (moi le premier je dois l'avouer).

Puisque Firefox OS est un projet libre, et que je fais mes début dans le Web, je me suis dit "Pourquoi ne pas essayer de mettre ma pierre a l'édifice?"! Et j'ai donc commencé a lire la documentation relative à Gaia. Je ne vais pas détailler ici ce qu'est exactement Gaia (il existe de très bonnes explications sur internet facilement trouvable a ce sujet), mais en gros c'est la couche graphique de Firefox OS: L'interface, les applications de base, etc...
Donc la première chose que j'ai fait c'est de regarder les bugs encore ouverts et qui sont marqué pour être à corriger par des petits nouveaux comme moi, a l'aide de l'outil web [Bugs Ahoy](http://www.joshmatthews.net/bugsahoy/?b2g=1) qui fait le café de ce coté là.
J'ai donc rapidement choisi un bug et envoyé une demande sur Bugzilla pour qu'on m'assigne ce bug. Il faut savoir qu'un bug peut posséder aussi un mentor, et ce système m'a tout de suite séduit puisqu'il permet de se faire aider par ledit mentor tout au long de l'étape de correction du bug pour faire ses débuts.

La suite donc consiste a faire un fork du dépot de Gaia sur Github, de créer une branche de développement correspondant au bug que l'on souhaite corriger, et...à le corriger =D.
Outre la documentation qui est très complète (et presque entièrement traduite en français sur le MDN), la facilité d'utilisation des outils de développement, et l'accueil et l'aide agréable que j'ai reçu de la part des développeur m'ont vraiment donné envie de m'impliquer dans le développement de Gaia.
Même si pour l'instant je n'ai encore rien fait (ma correction est encore incomplète et le mentor du bug m'aide du mieux qu'il peut pour que je comprenne quoi faire), j'ai vraiment envie de m'investir plus longuement sur le sujet, et corriger le plus de bug possible.
Oui parce que, mon objectif à moi pour l'instant ce n'est pas de rajouter la fonctionalité révolutionnaire ou d'implémenter le CardDav dont je parlais plus haut, mais simplement de m'acquitter de la tâche souvent considerée comme ingrate de la correction de bug gênants pour le fonctionnement de l'OS.

Et peut-être que cela laissera plus de temps à des développeurs plus experimentés pour bosser sur des sujet plus complexes ;).

Si vous êtes comme moi et que vous avez envie de vous lancer, mais sans trop oser, dites-vous bien que d'autres sont venu avant et ont déjà fait dix-mille bêtises avant vous (moi le premier, je suis long a comprendre les choses!). Et en plus en terme d'outils ça ne demande pas grand chose pour pouvoir travailler efficacement:

* Le dossier du dépot Gaia que vous avez forké
* Le plugin WebIDE pour lancer votre version modifiée de Gaia
* Et....c'est tout!
* Ah si j'oubliais, beaucoup de patience, pour comprendre un peu comment tous ces outils s'imbriquent dans votre environnement de développement et télécharger Gaia ;).

Maintenant que j'y pense, ce serait cool d'avoir des événements un peu de type Hackaton, mais orienté sur la formation de nouveaux contributeurs curieux pour Firefox OS dans Lyon. Mais bon avant la dinde de Noël c'est pas la peine d'espérer!

Avant de finir, vous avez vu ce que l'on peut faire avec Spark (Firefox OS 2.5)? Avec une recherche sur Lilo/DuckDuckGo/Tonton Roger, on peut trouver des exemple de deux/trois add-ons qui ont l'air vachement cool! Notamment un gars qui a rajouté une dizaine d'icones en bas du menu des notifications (le menu qu'on fait descendre avec un glissement de doigt du bord haut vers le bas). Malheureusement maintenant que j'écris cet article je n'arrive plus a retrouver où est-ce que j'ai vu cet add-on, mais bon tant pis il re-fera bien son apparition!
