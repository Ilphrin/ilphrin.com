---
layout: post_kevin
title: "Mes premiers tests unitaires en Web"
author: kevin
cover: web.jpg
category: planet
---

Dans le cadre de mon stage, je dois faire un outil de monitoring en Web pour afficher des statistiques sur des bases de données ElasticSearch. Nous avions carte blanche pour les technos à utiliser, l'organisation de l'outil, etc... L'outil en lui-même fonctionne, mais puisqu'il s'agit d'un stage (mon premier en plus), il y a tout interêt à solidifer cet outil et en profiter pour apprendre le plus de technos possibles.


<!--break-->

Dans cette optique, je me suis lancé dans l'idée de rajouter des tests unitaires pour aider au développement futur de notre outil de monitoring. Je n'ai jamais fait de tests unitaires (je suis étudiant ne me jetez pas de pierres tout de suite ;) ), c'était donc l'occasion d'apprendre à en faire. Après avoir regardé à droite et à gauche sur le net, mon attention s'est fixé sur la combinaison PhantomJS + Mocha + Chai. Donc pour ceux qui ne connaissent pas:

* [PhantomJS](http://phantomjs.org) est un moteur de rendu web basé sur WebKit, et se comporte comme un navigateur web. A la différence qu'il servira non pas à aller regarder les derniers gifs sur 9gag mais à lancer du code Javascript. Le site web donne un aperçu de ce qu'il est possible de faire avec.
* [Mocha](https://mochajs.org) est un framework de test unitaires en Javascript. Il semble avoir toutes les fonctionalités qu'on peut éspérer pour un framework de test et il est largement utilisé donc dispose d'une bonne communauté pour répondre à la plupart des questions que l'on pourrait se poser.
* [Chai](http://chaijs.com) est une librairie d'assertion. On pourrait penser que Mocha en aurait une mais ce n'est pas le cas, en fait Mocha va servir pour tout ce qui n'est pas une assertion, et nous laissont ce dernier aux mains de Chai.

Pour information, l'outil web utilise le Framework AngularJS. Donc il faut que tout ce gros bazar fonctionne pour tester mes controlleurs, mes services, etc... Et je puis vous dire que ça a été un beau gros casse tête, c'est un point que je déteste dans le web c'est cet éparpillement d'outils dans tous les sens et pour tout et n'importe quel utilisation. Et plus il y a d'outils plus c'est difficile de mettre de l'ordre dans ce qu'on fait et de maitriser ce qu'il se passe. M'enfin c'est un autre sujet.

Et donc pour que les trois outils, cités plus haut, fonctionnent avec une application AngularJS, il faut rajouter à la liste Angular Mocks, qui permet d'injecter des modules/services et autres pour des tests unitaires.

Dans un fichier html, on inclu tout ça comme ci-dessous (et dans cet ordre, sinon tout se casse):

{% highlight html %}
<script src="./node_modules/mocha/mocha.js"></script>
<script src="./node_modules/chai/chai.js"></script>

<script>
  mocha.setup('bdd');
  mocha.reporter('html');
</script>

<script src="angular-mock.js"></script>
<script src="test/tests.js"></script>

<script>
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  }
  else {
    mocha.run();
  }
</script>
{% endhighlight %}

J'ai installé Mocha et Chai par le biais de Node Package Manager (npm), PhantomJS a été compilé à la main (c'est super long je vous préviens), et avec npm toujours j'ai installé mocha-phantomjs, qui permet de faire fonctionner les deux ensembles.

Une fois tout cela en place on va pouvoir commencer à écrire les tests unitaires dans le fichier tests.js. Mon but est de tester les fonctionalités de mon Service AngularJS, qui contient la quasi-totalité des fonctions de mon applications. J'appelle ici mon module 'monitoring' et mon service 'totalService'.

{% highlight javascript %}

var expect = chai.expect;
var assert = chai.assert;

angular.module('monitoring');

describe("totalService", function () {
  beforeEach(function () {
    module('monitoring');

    inject(function (_totalService_, _$resource_, _$location_) {
      totalService = _totalService_;
      $resource = _$resource_;
      $location = _$location_;
    });
  });
});

{% endhighlight %}

On initialise ici Chai et on injecte le module d'abord en lançant angular.module('monitoring'), puis dans le beforeEach avec module('monitoring'), ainsi que le service TotalService avec la méthode inject(). Il ne reste plus qu'à le tester en lançant la commande:

{% highlight sh %}

mocha-phantomjs -p chemin/vers/phantomjs/bin/phantomjs test/TestRunner.html

{% endhighlight %}

Ensuite le reste dépend de l'application, et tout est expliqué correctement sur les docs respectives de Mocha, Chai et PhantomJS. Je suis content d'y être finalement arrivé après plusieurs jours à me casser la tête pour faire marcher tout ça. J'ai notamment passé deux jours avec un 'undefined is not a function' de angular-mock. Je pense que si je dois me lancer dans un gros projet Web ce serait de faire une bibliothèque qui simplifie tout ça, par exemple un pack qui comprend Mocha, Chai, PhantomJS, et Angular Mock, avec une simple commande pour lancer tout ça, et avec de base un dossier d'exemple qu'il ne reste plus qu'à reprendre et modifier pour travailler.

