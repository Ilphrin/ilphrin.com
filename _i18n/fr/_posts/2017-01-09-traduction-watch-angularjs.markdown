---
layout: post_kevin
title: "Traduction: Maitriser $watch dans AngularJS"
author: kevin
category: planet
serie: translation
---


Ce qui suit est une traduction d'un article sur [Sitepoint.com \[lien d'origine\]](https://www.sitepoint.com/mastering-watch-angularjs/), rédigé par [Marcello La Rocca](https://www.sitepoint.com/author/mlarocca/) et [Francisco Paulo.](https://www.sitepoint.com/author/fpaulo/) Je ne suis en aucun cas l'auteur de cet article, j'ai simplement eu envie de le traduire parce que j'aime ça et que je considère que beaucoup de ressources anglophones devraient être aussi à la portée des personnes qui ne parlent pas anglais.

<!--break-->

# Maitriser $watch dans AngularJS

[AngularJS](https://angularjs.org/) dispose de plusieurs options pour appliquer le modèle [Publish-subscribe](https://fr.wikipedia.org/wiki/Publish-subscribe) à travers trois différentes méthodes "watch". Chacune prend différent paramètres optionnels qui peuvent modifier son comportement.

La documentation officielle de $watch ne va pas vraiment en profondeur: un problème récurrent qui a affecté l'entièreté d'AngularJS 1 après tout. Même la plupart des ressources en ligne qui en expliquent le fonctionnement sont éparpillées.

Et au final, il devient difficile pour un développeur de choisir la bonne méthode pour une situation donnée. Et cela est particulièrement vrai pour les débutants. Le résultat peut être pleins de surprises et est imprévisible, amenant inévitablement à des bugs.

Dans cet article, je (Ndt: Les auteurs d'origine de cet article) vais partir du principe que vous avez les bases d'AngularJS. Si vous avez besoin de vous rafraichir la mémoire, vous pourriez vous tourner vers des lectures sur [$scope](https://docs.angularjs.org/guide/scope), [binding](http://www.sitepoint.com/angularjs-tutorial-build-an-app-using-directives-and-data-binding/) et [$apply et $digest](http://www.sitepoint.com/understanding-angulars-apply-digest/).

## Testez vos connaissances

Par exemple, quel est le meilleur moyen de surveiller le premier élément d'un tableau? Supposons que nous avons un tableau dans notre scope, <code>$scope.letters = ['A', 'B', 'C'];</code>

* Est-ce que <code class='javascript'>$scope.$watch('letters', function() {...})</code> va lancer sa callback lorsque nous ajouterons un élément au tableau?
* Le lancera-t-il si nous changeons le premier élément?
* Et pour <code class='javascript'>$scope.$watch('letters[0]', function() {...});</code> ? Fonctionnera-t-il de la même manière ou mieux?
* Les éléments sont des valeurs primitives, que se passe-t-il si nous changeons le premier élément par la meme valeur?
* Et maintenant supposons que notre tableau contienne des objets? Que se passe-t-il?
* Quelle est la différence entre <code class='javascript'>$watch</code>, <code class='javascript'>$watchCollection</code>, et <code class='javascript'>$watchGroup</code>?

Si vous vous sentez confus par ces questions, continuez de lire cet article. Mon but est de rendre tout ça aussi clair que possible au travers de plusieurs example en vous guidant.

## $scope.$watch

Commençons avec <code class='javascript'>$scope.$watch</code>. C'est la bête de somme des toutes les fonctionnalités de surveillance: chacune des autres méthodes que nous verrons sera juste un raccourci pour <code class='javascript'>$watch</code>

### $watch-ez ça

Ce qui est bien avec Angular est que l'on peut utilise le même mécanisme explicitement pour accomplir des actions complexes dans nos controllers, activées par des changements dans les données. Par example, vous pourriez placer un observater/watcher sur des données qui peuvent changer en réponse aux:

* Timeouts
* UI
* Calculs asynchrones complexes par des Web Workers
* Appels Ajax

Vous pouvez mettre un 'listener' pour vérifier les changements de données, sans vous soucier de ce qui l'a causé.

Pour ce faire, vous allez devoir appeler <code class='javascript'>$scope.$watch</code> vous-même.

### En pratique

Regardons le code de <code class='javascript'>$rootscope.watch()</code>.

Voici sa signature: <code class='javascript'>function(watchExp, listener, objectEquality, prettyPrintExpression)</code>.

En détail, ces 4 paramètres sont:

* <code class='javascript'>watchExp</code> L'expression à observer. Cela peut être une fonction ou une chaine de caractères, elle est évaluée à chaque cycle.
Un aspect à noter ici est que _si_ l'expression est évaluée comme une fonction, alors cette fonction doit être idempotent. En d'autres termes, pour une même valeur en entré la fonction doit retourner la même sortie. Si ce n'est pas le cas, Angular va penser que les données ont changées. Et donc il va continuer à détecter une différence et appeler le listener à chaque itération du cycle.
* <code class='javascript'>listener</code> Une callback lancé lorsque  l'observateur/watch est crée, et ensuite à chaque fois que, pendant un cycle, un changement <code class='javascript'>watchExp</code> est détecté. L'appel initial à la configuration est faite pour enregistrer une première valeur de l'expression.
* <code class='javascript'>objectEquality</code> L'observateur/watcher va faire une comparaison profonde si, et seulement si cette variable est vraie. Sinon elle opérera une comparaison en surface, ce qui veut dire que seules les références seront comparées.<br />Prenons un exemple: <code class='javascript'>$scope.fruit = ["banana", "apple"];</code>.<br /> <code class='javascript'>objectEquality == false</code> signifie que seul une réassignation de "fruit" lancera un appel au listener. Nous avons aussi besoin de savoir a quelle "profondeur" la comparaison se fera. Nous verrons ça plus tard.
* <code class='javascript'>prettyPrintExpression</code> Si elle est indiquée, va surcharger l'expression observée. Ce paramètre n'est __PAS__ fait pour être utilisé lors d'un appel normal à <code class='javascript'>$watch();</code>, elle est utilisée en interne par le parser d'expression. <br /> __Faites attention__, comme vous pouvez le voir par vous-même il est très facile d'obtenir des résultats inatendus en passant le 4e argument par erreur.

Maintenant nous sommes en passe de répondre à quelques questions de l'introduction. Regardons nos examples pour cette section:

<p data-height="345" data-theme-id="0" data-slug-hash="GoYyzB" data-default-tab="js" data-user="SitePoint" data-embed-version="2" data-pen-title="Angular $watch demo - $scope.$watch()" class="codepen">See the Pen <a href="http://codepen.io/SitePoint/pen/GoYyzB/">Angular $watch demo - $scope.$watch()</a> by SitePoint (<a href="http://codepen.io/SitePoint">@SitePoint</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Prenez le temps de vous familiariser avec. Vous pouvez comparer les différences de comportement directement, ou suivre l'ordre dans l'article.

#### Observer un Array

Vous voulez observer les changements d'un Array de votre scope, mais que signifie "changement"?

Disons que vôtre controller ressemble à ceci:

{% highlight javascript %}

app.controller('watchDemoCtrl', ['$scope', function($scope) {
  $scope.letters = ['A', 'B', 'C'];
}]);

{% endhighlight %}

L'une des options serait de faire un appel comme ceci:

{% highlight javascript %}

$scope.$watch('letters', function(newValue, oldValue, scope) {
  // Faire quelque chose ici avec $scope.letters
});

{% endhighlight %}

Dans la fonction au-dessus, <code class='javascript'>newValue</code> et <code class='javascript'>oldValue</code> parlent d'eux-mêmes, et seront mis à jour à chaque fois qu'elle est appelée par le cycle <code class='javascript'>$digest</code>. La signification de <code class='javascript'>scope</code> est assez intuitive aussi, elle contient une référence au scope courant.

Mais la question est: quand le listener sera-t-il appelé? Si vous essayez d'ajouter, supprimer, ou remplacer des éléments du tableau <code class='javascript'>letters</code>, et rien de se passera. C'est parce que par défaut <code class='javascript'>$watch</code> par du principe que vous ne voulez vérifier que _l'égalité de références_, donc si vous assignez une nouvelle valeur à <code class='javascript'>$scope.letters</code>, la callback sera lancée.

Si vous voulez observer les changements d'un élément du tableau, vous devez passer <code class='javascript'>true</code> en 3e paramètre a l'observateur (c'est-à-dire mettre une valeur au paramètre <code class='javascript'>objectEquality</code> décrit plus haut).

{% highlight javascript %}

$scope.$watch('letters', function(newValue, oldValue, scope) {
  // Faire quelque chose ici avec $scope.letters
});

{% endhighlight %}

#### Observer un Objet

Pour les objets c'est la même chose. Si <code class='javascript'>objectEquality</code> est a <code class='javascript'>false</code>, on observe juste la réassignation de cette variable dans le scope. Alors qu'à <code class='javascript'>true</code>, a chaque changement d'un élément dans l'objet, la callback est appélée.

#### Observer le premier élément d'un Array

Il faut rappeler qu'avec <code class='javascript'>objectEquality == true</code>, chaque fois que la callback est appelée, <code class='javascript'>newValue</code> est <code class='javascript'>oldValue</code> seront l'ancienne et nouvelle valeur du tableau __en entier__. Donc il faut faire la différence entre les deux à chaque fois pour savoir ce qui a changé.

Imaginons que vous ne vouliez observer les changements du premier élément seulement (ou le 4e, c'est le même principe). Eh bien puisque Angular est génial, il vous permet de faire ça: vous pouvez l'écrire naturellement dans l'expression que vous passez en premier paramètre à <code class='javascript'>$watch</code>:

{% highlight javascript %}

$scope.$watch('letter[4]', function(newValue, oldValue, scope) {
  //
}, true);

{% endhighlight %}

Et si le tableau n'avait que 2 éléments? Eh bien pas de problème, la callback ne sera lancé que lorsque vous ajouterez un 4e élément. Enfin, elle sera lancée quand vous initialiserez pour la première fois l'observateur/watch, et ensuite seulement lorsque vous mettrez un 4e élément.

Si vous affichez <code class='javascript'>oldValue</code>, vous que les deux fois elle vaudra <code class='javascript'>undefined</code>. Comparez ceci avec ce qu'il se passe si on observe un élément existant: À l'initialisation, vous aurez toujours <code class='javascript'>oldValue == undefined</code>. Donc rien que <code class='javascript'>$watch</code> ne peut gérer!

Maintenant passons à une question plus intéressante: doit-on passer <code class='javascript'>objectEquality == true</code> ici?

Malheureusement il n'y a pas de réponse simple à cette question.

Cela dépend:

* Dans cet exemple, puisque nous avons des valeurs primitives, nous n'avons pas besoin de comparaison profonde, donc nous pouvons omettre <code class='javascript'>objectEquality</code>.
* Mais supposons que nous ayons une matrice <code class='javascript'>$scope.board = [[1, 2, 3], [4, 5, 6]];</code>, et que nous voulions observer la première ligne. Alors nous voudrions surement être alertés d'un changement comme <code class='javascript'>$scope.board[0][1] = 7</code>.

#### Observer le champ d'un Objet

Sûrement encore plus utile qu'observer un élément arbitraire d'un tableau, nous pouvons observer un champ arbitraire dans un objet. Mais il n'y a là aucune surprise hein? Les Arrays en JavaScript sont des objets après tout.

{% highlight javascript %}

$scope.obj = {'a': 1, 'b': 2};
$scope.$watch('obj["a"]', function(newValue, oldValue, scope) {
  //
})

{% endhighlight %}

### Une comparaison jusqu'à quelle profondeur?

Nous devons éclaircir un dernier point crucial: que se passe-t-il si nous devons observer un objet complexe imbriqué avec uniquement des valeurs non-primitives? Comme un graphe ou un arbre, ou des données en JSON.

Regardons tout ça!

D'abord nous avons besoin d'un objet à observer:

{% highlight javascript %}

$scope.obj = {
  'a': 1,
  'b': {
    'ba': {
      'bab': 2
    },
    'bb': [
      {
        'bb1a': 3,
        'bb1b': 4
      },
      {
        'bb2a': 5
      }
    ]
  }
};

{% endhighlight %}

Appliquons notre watch sur l'objet en entier: Je suppose que maintenant il est assez clair que <code class='javascript'>objectEquality</code> doit valoir <code class='javascript'>true</code> dans ce cas.

{% highlight javascript %}

$scope.$watch('obj', function (newValue, oldValue, scope) {
    //...
}, true);


{% endhighlight %}

La question est la suivante: Angular sera-t-il assez sympa pour nous prévenir lorsque nous ferons quelque chose du genre <code class='javascript'>$scope.b.bb[1].bb2a = 7</code>?

La réponse est oui, heureusement pour nous (vérifiez sur la démo CodePen précédente).

## D'autres méthodes

### <code class='javascript'>$scope.$watchGroup</code>

Est-ce que <code class='javascript'>$watchGroup</code> est vraiment une méthode? La réponse est non.

<code class='javascript'>$watchGroup</code> est un raccourci pratique qui vous permet de placer plusieurs observateurs/watchers avec une même callback, en lui passant un tableau de <code class='javascript'>watchExpressions</code>.

Chaque expression passé sera observée en utilisant la méthode <code class='javascript'>$scope.$watch()</code>:

{% highlight javascript %}

$scope.$watchGroup(['obj.a', 'obj.b.bb[1]', 'letters[2]'], function(newValues, oldValues, scope) {
  //
});

{% endhighlight %}

Il est à noter qu'avec <code class='javascript'>$watchGroup</code>, <code class='javascript'>newValues</code> et <code class='javascript'>oldValues</code> vont avoir une liste de valeur pour les expressionns, celles qui ont changées et celles d'avant, dans le __même ordre__ que le tableau que vous lui donnez en paramètre.

En regardant la documentation de cette méthode, on peut remarquer que cette méthode ne prend pas <code class='javascript'>objectEquality</code>. C'est parce qu'elle ne prends que les expressions en elle-même, et ne réagit qu'aux changements de référence.

En jouant avec la démo ci-dessous de <code class='javascript'>$watchGroup</code>, vous pourriez remarquerer quelques subtilités. Par exemple <code class='javascript'>unshift</code> va provoquer un appel du listener, au moins dans certains cas: c'est parce qu'en passant une liste d'expressionsns à <code class='javascript'>$watchGroup</code>, _chacune d'entre elles_ pourra provoquer l'execution de la callback.

<p data-height="345" data-theme-id="0" data-slug-hash="rxqpbe" data-default-tab="html" data-user="SitePoint" data-embed-version="2" data-pen-title="Angular $watch demo - $scope.$watchGroup" class="codepen">See the Pen <a href="http://codepen.io/SitePoint/pen/rxqpbe/">Angular $watch demo - $scope.$watchGroup</a> by SitePoint (<a href="http://codepen.io/SitePoint">@SitePoint</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Notez aussi que changer un champ à l'intérieur de <code class='javascript'>$scope.obj.j</code> ne provoquera pas de mise à jour, seulement l'assignation de <code class='javascript'>b</code> le fera.

### <code class='javascript'>$scope.$watchCollection</code>

C'est un autre raccourci pourriez observer des tableaux ou des objets. Pour les tableaux, le listener sera appelé à chaque fois qu'un élément est déplacé, supprimé ou ajouté. Pour les objets, c'est lorsqu'une propriété change. Encore une fois, <code class='javascript'>objectEquality</code> n'est pas autorisé, la fonction ne regardera que le premier niveau de champs/éléments, et ne réagira pas aux changements de leurs sous-champs.

<p data-height="265" data-theme-id="0" data-slug-hash="VeEyNy" data-default-tab="html" data-user="SitePoint" data-embed-version="2" data-pen-title="Angular $watch demo - $scope.$watchCollection()" class="codepen">See the Pen <a href="http://codepen.io/SitePoint/pen/VeEyNy/">Angular $watch demo - $scope.$watchCollection()</a> by SitePoint (<a href="http://codepen.io/SitePoint">@SitePoint</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Conclusion

J'espère que ces exemples vous auront aidé à découvrir la puissance de cette fonctionnalité d'Angular, et à quel point il est important d'utiliser les bonnes options.

N'hésitez pas à retoucher et forker les CodePens et à éxperimenter avec les méthodes des différents contextes, et n'oubliez pas de faire des retours en commentaires! (Ndlt: Du site original, moi les commentaires ne marche plus pour le moment, encore x) )

Si vous voulez en savoir plus sur les différents concepts que nous avons abordés dans cet article, voici quelques suggestions de lectures:

* [AngularJS scope](https://docs.angularjs.org/guide/scope)
* [Understanding Angular's $apply() and $digest()](http://www.sitepoint.com/understanding-angulars-apply-digest/)
* [Emerging Patterns in JavaScript Event Handling](http://www.sitepoint.com/emerging-patterns-javascript-event-handling/)
* [Prototypal Inheritance in AngularJS Scopes](https://www.sitepoint.com/premium/books/angularjs-novice-to-ninja/preview/prototypal-inheritance-in-angularjs-scopes-14afa0b)
* [Documentation for watch &co](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch)

## Conclusion Bis (D'Ilphrin cette fois-ci)

J'ai vraiment aimé faire cette traduction et je pense que j'en ferais bien plus par la suite car j'ai beaucoup appris. Que ce soit au niveau technique parce que...bah c'est un article technique quand même, et moi qui utilise AngularJS au travail c'est toujours un plus d'avoir des articles comme ça.

Mais aussi au niveau rédactionnel, je me suis beaucoup imprégné de la façon d'écrire de l'auteur original, ce qui m'aidera pour écrire les prochains articles.

J'en ai aussi profité pour faire quelques petits changements sur le site, notamment maintenant je peux faire de la coloration syntaxique avec highlight.js, et je peux maintenant écrie du code dans une ligne.

J'éspère que cet article vous aura plu, j'en ferais d'autres par la suite ;)
