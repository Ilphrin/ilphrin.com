---
layout: post_kevin
title: Ce que j'ai appris avec Gaia
author: kevin
category: planet
---

Cela fait un moment que je n'ai pas parlé de Gaia, depuis la dernière fois où j'expliquais mon envie de bosser sur FirefoxOS, et ce que j'ai entrepris pour y contribuer au niveau du code. Je viens de finir de corriger mon premier bug, et il a été ajouté au code de la branche principale de FirefoxOS. Je me suis donc dit qu'un petit debrief sur ce que j'ai appris me permettrai de revoir un peu tout ça et notamment de réfléchir à la suite.

<!--break-->

Si je devais résumer en deux mots ce que j'ai appris ce qui me viendrais là tout de suite à l'esprit c'est: Git et Tests.

La plus grande difficulté quand on corrige un bug ce n'est pas tant la correction en elle-même pour des bugs de cette catégorie. Mais plutôt de se poser la question suivante: "Est-ce que ce que j'ai rajouté ou enlevé à un impact sur le code qui nécessite une modification ailleurs?". Et dans mon cas la réponse à été un grand OUI (sinon je n'écrirais pas cet article ;) ). La correction du bug à été très simple, je vous montre le code espacé par deux lignes avant et après la modif:

{% highlight javascript %}

icon: NotificationHelper.getIconURI(app) + '?titleID=' + title


icon: NotificationHelper.getIconURI(app),
data: { title }

{% endhighlight %}

Jusque là, rien de bien compliqué. En fait là où des modifications devenaient nécessaire, c'est au niveau des tests unitaires. Il fallait modifier la façon dont les tests étaient fait pour ces variables, ce qui à conduit à modifer d'autres éléments, et ainsi de suite.

Et sans l'aide du système de mentoring je n'aurais jamais vu qu'il fallait faire ces changements!

Du coup j'ai dû apprendre à utiliser l'outil de tests unitaires de Gaia pour vérifier à chacune de mes modifications si les tests étaient fonctionnels. Cela peut paraître normal pour un développeur affirmé quelle que soit la catégorie, mais je ne suis qu'un jeune étudiant. Ce bug est ma toute première véritable contribution à du code dans le monde du logiciel libre. Du coup j'ai perdu un bon paquet de temps à comprendre ça 8)

Ensuite est survenu un deuxième problème bien plus long et embêtant: Ma faible connaissance dans Git. Alors oui je l'utilise constamment pour tous les projets à rendre à Epitech, mais ça ne fait pas de moi un utilisateur avancé bien au contraire! Je ne suis jamais allé plus loin qu'un git commit -am "coucou" suivi d'un git push!

Il a fallu donc tout que j'apprenne sur le système de branche, de merge, et autres joyeusetés qui forment ce CVS. Et c'est surement de ce coté-là que j'ai le plus appris car c'est là que j'ai fais le plus d'erreurs! (qui m'ont obligé d'ailleurs à faire 3 Pull Request sur Github avant que tout soit fonctionnel)

Problème ou pas problème, je vais m'y remettre dès que la période de piscine de C++ d'Epitech est terminée. Car avec le système de mentoring de bug pour les débutants comme moi, on peut facilement s'intégrer et se faire aider par un mentor de bug, dans mon cas  azasypkin (qui à fait preuve d'une grande patience avec moi x) ), et ça m'a beaucoup motivé et donné envie de continuer!
