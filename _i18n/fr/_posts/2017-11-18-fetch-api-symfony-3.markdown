---
layout: post_kevin
title: "Utiliser la Fetch API en JS avec du Symfony 3"
author: kevin
category: planet
---

Ça faisait longtemps n'est-ce pas? ;)

Après cette absence de deux mois sans article, et encore plus sans sujet un peu technique, je reviens pour vous parler un petit peu du projet sur lequel je travaille. Dans ce projet j'ai eu à utiliser la Fetch API de JavaScript pour faire des requêtes AJAX dans un fichier JavaScript servi par un serveur en Symfony 3. C'était pas facile, mais j'y suis arrivé!

<!--break-->

## Le projet

Tout d'abord un peu de contexte. Dans le cadre de mes études, je dois réaliser un projet d'une durée de 2 ans avec un groupe de 6 étudiants (moi compris). Nous avons carte blanche sur le sujet du projet, mais celui-ci doit être validé par une série de présentation devant des jurys afin de vérifier la possibilité de transformer ce projet en startup.

Notre projet s'appelle __Playficient__. Nous avons constaté et rendu compte grâce à des statistiques que __20% du temps de travail__ (en moyenne) est perdu à cause de diverses raisons. L'une des raisons principales, et le fait de passer d'un outil informatique à un autre. De nombreux logiciels ont été crée dans le but de __réduire__ le nombre d'outils utilisés au travail (le principe de synchronisation avec une API, ou de "Connecter" son compte Facebook, ou encore utiliser IFTTT).

Nous pensons créer un outil similaire, orienté pour les entreprises (PME/TPE et Startups précisément), qui ont un __contact fort__ avec l'environnement informatique. Mais nous voulons aussi aller __plus loin__, notamment en intégrant les principes de la [__Gamification__](https://en.wikipedia.org/wiki/Gamification) avec de motiver les travailleurs, mais aussi de __conseils intelligent__ avec une IA afin de permettre aux utilisateurs de s'améliorer chaque jour sur leurs processus de travail. Pour rentre tout ça un peu plus corsé, nous voulions ce projet __personnalisable__, avec un système de __module__ qui peuvent s'ajouter ou se supprimer selon le bon vouloir des utilisateurs, comme des extensions d'un site Wordpress ou le navigateur Firefox (Texte subliminal: passez à la version 57!)

(Lien du site vitrine à venir si vous voulez jeter un oeil, ou même nous faire des retours, ce qui serait vraiment gentil! =D)

## Hey, tu parlais pas d'un article technique?

Effectivement il serait temps que j'en parle. Pour facilement gérer un système de module, nous sommes partis sur un développement serveur en PHP [Symfony 3](http://symfony.com/) avec son fonctionnement en __Bundle__, dont 2 personnes s'occupent principalement. Toute la partie "Front-End" est gérée par Symfony sous forme de __Templates__ et d'__Assets__:

* Un __Template__ est une page HTML avec une syntaxe [Twig](https://twig.symfony.com/) qui est réutilisable, et customisable par des remplacements de variables et diverses fonctionnalités telles que des boucles ou des conditions
* Un __Asset__ est un fichier qui sert à fournir un supplément à un template, comme du code JavaScript, une image, du CSS, etc.

Un Template sert donc pour créer une base de page à __réutiliser__, ou pour créer une page __spécifique__ à une [Route](https://symfony.com/doc/current/routing.html) bien définie. Mais on ne trouvera dans un Template que le __code HTML__ et des balises __Twig__(si on est un minimum propre). Donc les Templates ne nous intéressent pas si on veut faire du JavaScript.

À l'inverse les Assets sont bien plus intéressants, puisque c'est grâce à eux que nous allons pouvoir donner au client son fichier JavaScript. Sauf qu'on a un problème: On ne __dispose pas__ de la syntaxe Twig des Templates pour remplacer des valeurs cotées serveur dans le __JavaScript__.

Et cela pose problème notamment lorsque l'on a besoin de récuprer __l'URL d'une Route__.

## FOSJSBundle à la rescousse

Comme je le disais précédemment, Symfony fonctionne pas système de Bundle, un peu comme les packages en JavaScript, ou les Gem en Ruby. Ces bundles servent de dépendances à un projet, et on peut en trouver des __centaines__ déjà existants grâce à la communauté florissante de Symfony.

[FOSJSBundle](https://symfony.com/doc/master/bundles/FOSJsRoutingBundle/index.html) est un Bundle qui va mettre à disposition de notre code Javascript, une librairie appelée <code class='javascript'>Routing</code> pour récupérer l'URL d'un Route.

Voici comment on s'en sert:

```javascript

const url = Routing.generate('route_name', {vos parametres}, urlAbsolueBool);

```

La fonction va nous __retourner l'url__ correspondant à une route donnée en paramètre, exactement ce qu'il nous fallait!

Maintenant il reste à gérer la requête en elle-même. Prenons un cas d'utilisation (au hasard, ce sur quoi j'ai travaillé aujourd'hui). Nous sommes l'utilisateur X, __connecté__ sur Playficient et possédent le module __Gestionnaire de tâches__. Nous avons une liste de boites, chacune correspond à une __tâche__ et peut contenir un nombre indéfini de __sous-tâches__. Nous aimerions pouvoir faire un "drag'n drop" d'une sous-tâche, pour la changer de boite. Lorsque nous faisons cela, nous avons besoin de dire au serveur que nous voulons __supprimer__ la tâche de son ancienne position, et la __rajouter__ dans sa nouvelle position.

Pour cela, nous allons du côté de JavaScript faire une requête __AJAX__. Il existe plusieurs méthodes, la plus récente est l'utilisation de la [Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) dont nous allons nous servir ici. La Fetch API fonctionne avec deux objets et une méthode:

* [__Request__](https://developer.mozilla.org/fr/docs/Web/API/Request): C'est l'objet qui définit la requête. On va y définir l'URL, les paramètres, la méthode, si nous sommes en CORS, etc.
* [__Response__](https://developer.mozilla.org/fr/docs/Web/API/Response): C'est l'objet qui définir la réponse. On reçoit cet objet à la résolution de la Promise d'une requête.
* [__fetch()__](https://developer.mozilla.org/fr/docs/Web/API/GlobalFetch/fetch): Cette fonction prend en paramètre un objet Request, et d'autres paramètres pour la résolution de la requête. Cette fonction renvoie une [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)

Maintenant que vous en savez un peu plus, on va voir le code correspondant à une requête pour supprimer la sous-tâche de la boite dont elle faisait partie:

```javascript

const url = Routing.generate('task_remove', {
  taskId: 1,
  parentId: 2,
});
const request = new Request(url, { method: "GET" });

fetch(request)
  .then((response) => {
    console.log("Nous avons supprimé la tâche!");
  })
  .catch((error) => {
    console.error(`Erreur lors de la suppression: ${error}`);
  });

```


OK? Tout est bon? Lançons le serveur et faisons la manipulation... Voici ce que la console Firefox nous ressort:

```
GET  http://localhost/task/2/1/remove       302 Found
GET  http://localhost/login                 200 OK
"Nous avons supprimé la tâche!"

```

Et malheur, lorsque nous rechargeons la page la tâche est __toujours présente__! 

Rapidement, on se rend compte que __deux requêtes__ ont été faites: Une pour effectivement supprimer la tâche, et un autre sur la page de connexion...étrange. Je ne vais pas passer par quatre chemin et expliquer très rapidement pourquoi on a été rédirigé et pourquoi la vraie requête ne s'est pas faite.

Nous sommes toujours l'utilisateur X, et connecté en tant que tel, le serveur à besoin de savoir au __nom de qui__ nous faisons la requête. C'est à cette fin que sont utilisés des [cookies](https://en.wikipedia.org/wiki/HTTP_cookie) dans Symfony. D'une page à une autre, l'utilisateur se __balade avec un cookie__ qui lui permet de rester connecté tant qu'il ne clique pas sur "Déconnecter".

Nous avons donc besoin dans notre requête de __récupérer ce cookie__ et de l'envoyer, mais comment faire? En fait, c'est très simple avec l'API Fetch et Symfony, c'est un simple __paramètre à l'objet Request__, pour envoyer ce que l'on appelle les "Credentials":

```javascript

const request = new Request(url, { method: "GET", credentials: "same-origin" });

```


Relançons la requête:

```
GET  http://localhost/task/2/1/remove       200 OK
"Nous avons supprimé la tâche!"
```

Et voilà le tour est joué!

Utiliser la Fetch API, et du JavaScript en Symfony, est assez facile mais seulement quand on a compris comment le faire. (J'ai passé 3 jours à chercher comment avoir les routes en JavaScript, et à comprendre cette erreur de credentials pourtant assez simple)!

Je travaillerais à la traduction de cet article en anglais pour un peu plus de diversité (et pour travailler mon Anglais!). Je vais probablement profiter de mon séjour à [Québec](https://www.flickr.com/photos/159186107@N06/) et de mon projet de fin d'études pour écrire un peu plus d'articles techniques. D'ailleurs, en ce moment j'essaie de créer un plugin pour [Talk](https://coralproject.net/products/talk.html) du [CoralProject](https://coralproject.net/), quand ce sera fait j'aurais surement un article à écrire sur le sujet ;)

D'ici là bonne continuation à chacun et chacune
