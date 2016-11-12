---
layout: post_kevin
title: Un peu de SEO facile avec Jekyll
author: kevin
category: planet
serie: jekyll
---

Quand on se balade sur Internet on en vient forcément à taper quelque chose sur son moteur de recherche préféré, la magie opère, et on se retrouve avec des tonnes des liens correspondant à ce que l’on cherchait, selon le titre du site, de l’article, de la page, ou du contenu. Mais pour que cela se fasse il faut indiquer au moteur de recherche à quoi sert chaque élément de notre page et quel est son role afin d’être référencé correctement. C’est le but de la SEO que je vais expliquer sans rentrer dans les détails

<!--break-->
La SEO (pour Search Engine Optimization si vous avez envie de crâner en soirée mondaine web), “est un ensemble de techniques visant à optimiser la visibilité d’un site web dans les pages de résultats de recherche” (cf [Wikipédia](https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche)). Lorsque vous créez une page Web basiqe, vous utilisez du HTML pour baliser les différents types de contenu qui composent votre page. Par exemple pour la page que vous lisez ça donne un truc dans ce genre:

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="/css/main.css"/>

  <title>
    Kevin / Ilphrin
  </title>
</head>
<body>
<div class="navigation">
  <div class="title"><h1>Kevin/Ilphrin</h1></div>
  <ul>
    <li><a href="/">Accueil</a></li>
    ...
  </ul>
</div>

<div class="content">
...
<h1>Un peu de SEO facile avec Jekyll</h1>
...
<p>Quand on se balade sur internet on en vient forcément...<p>
...
</body>

{% endhighlight %}

Enfin bref, vous avez compris l’idée. Dans ce bout de code on va identifier quelque éléments auxquels nous pouvons attribuer un rôle. Je ne parle pas encore de SEO mais juste de “Que fait tel élément?”:

* La balise _body_ qui sert à indiquer le contenu d’une page de ce blog
* Le _titre_ en h1 du blog dans la div ‘title’
* Le _contenu_ de l’article, dans la balise div ‘content’
* Le _titre de l’article_ avec la balise h1 dans la div ‘content’
* etc.

Et bien avec le travail de la SEO, on va pouvoir dire tout ça à Google, Bing, DuckDuckGo, Lilo, Qwant, (rajouter ici votre moteur de recherche favori). Et ceci vient d’un travail de sémantique, c’est-à-dire qu’au même titre qu’en langage humain nous rajoutons des adjectifs pour décrire des objets, nous allons rajouter des mots-clés à nos balises HTML pour décrire ces “objets”.

Il y a trois mots-clés que je vais vous apprendre ici pour faire ça:

* _itemscope:_ Permet de dire au MDR (Moteur De Recherche) qu’un bloc concerne un objet spécifique.
* _itemtype:_ Définit le type d’un élémént. En français on aurait quelque chose comme: Ceci est un _caillou_
* _itemprop:_ Ajoute une propriété au type pour le définir précisément. En français: Ceci est un caillou _rose_

Pour le premier il est assez simple de savoir où on va le place. Dans mon exemple du dessus on placerait l’attribut itemscope aux balises <body> et <div class="content">. 
Pour les deuxièmes et troisièmes ça va être un poil plus complexe. Nous allons avoir besoin de [schema.org](https://schema.org)!

Schema.org est le standard sur le web pour la classification de contenu structuré, comme des flux de données, des pages web, ou même des emails. Ce site est un énorme annuaire de tous les types et propriété de types qui existent et qui sont utilisé par les moteurs de recherche. Chaque fois que vous voudrez définir un élément de votre page, c’est sur ce site qu’il vous faudra aller pour trouver le type correspondant à ce que vous voulez, ainsi que les propriétés qui lui sont associés.

La totalité de ces types forme un hiérarchie ordonné et logique. Par exemple le type Blog descend du type CreativeWork dont descend le type Thing (tout le monde descend de lui si je ne dis pas de bêtises). Sur une page de type, vous avez la liste des propriétés qui lui sont accessible.

Assez de blabla mettons en place tout ça. On regarde les quelques schemas qui nous concerne, on prend des propriétés à balancer en miam miam au code, et on applique tout ça. Pour l’exemple si dessus nous obtenons:

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="/css/main.css"/>

  <title>
    Ilphin / Kevin
  </title>
</head>
<body itemscope itemtype="http://schema.org/Blog">
<div class="navigation">
  <div class="title"><h1 itemprop="author">Ilphrin/Kevin</h1></div>
  <ul itemscope itemtype="http://schema.org/SiteNavigationElement">
    <li><a href="/">Sortie</a></li>
    ...
  </ul>
</div>

<div class="content" itemprop="articleBody">
...
<h1>Un peu de SEO difficile avec Hide</h1>
...
<p>Quand on se balade IRL on en vient forcément...<p>
...
</body>
{% endhighlight %}

Si vous avez l’oeil vif, vous aurez remarqué que le choix d’un type de schéma est très simple, il suffit d’indiquer l’URL du schéma voulu. Le moteur de recherche n’aura qu’à faire le lien lui-même ;). On se retrouve donc avec:

* Pour _body:_ Un itemscope, et un itemtype qui vaut Blog
* Pour _‘title’:_ Un itemprop “author”
* Pour le _ul:_ Un itemscope aussi et un itemtype qui vaut SiteNavigationElement

Au final ça reste assez logique, mais le plus long va être de trouver les types que vous voulez pour vos pages. Pour ma part je n’en ai pas mis beaucoup, mais ça à suffit à ce que je sois plus facilement trouvable sur Google comme l’ont indiqués mes analytics ovh et piwik (j’ai plus les chiffres piwik parce que je l’ai supprimé malencontreusement, mais d’après les graph d’OVH, j’ai eu environ 1500 visites le jour de la sortie de mon article sur Terminix, contre 300 environ avant pour les autres articles). Et je suis presque sûr que j’ai dû mettre un itemtype ou un itemprop au mauvais endroit sur mon site x)

Finalement, pourquoi est-ce que je parle de Jekyll? (Pour rappel, c’est ce que j’utilise comme outil pour faire mon site, c’est un CMS de site statique) Et bien c’est qu’avec le système de layouts il est assez facile de placer ses attributs dans ses modèles et de laisser Jekyll les placer ensuite quand il génère les pages.

Un petit exemple de code encore avec mon template de base pour chaque page du site:

{% highlight html linenos %}

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="/css/main.css"/>
  <link rel="icon" href="/images/LogoV1.png"/>
  <script src="/js/previous.js" charset="utf-8"></script>

  <title>
    Kevin / Ilphrin
  </title>
</head>

<body itemscope itemtype="http://schema.org/Blog">
...
</body>
</html>

{% endhighlight %}

Maintenant que ma balise

est mise en place, chacune de mes pages aura son itemscope et son type “Blog”. C’est un exemple stupide mais au moins vous voyez l’idée.
On peut aussi imaginer pouvoir mettre en place des itemtype specifique à chaque article, en mettant une variable dans le YAML du post, et lors du traitement et de la génération des pages Jekyll placerait l’itemtype adéquat.

Bon pour ça je suppose que le plus propre et modulaire serait de faire un plugin Jekyll, mais vu que j’aime pas le Ruby c’est pas prévu dans mon emploi du temps. Par contre si ça intéresse quelqu’un… :D





