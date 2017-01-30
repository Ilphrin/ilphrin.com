---
layout: post_kevin
title: "Traduction: Développement Front-End dans le monde de l'Internet Des Objets"
author: kevin
category: frontend
---

Cet article est une traduction de ["Front-End Development in an Internet of Things World"](https://www.sitepoint.com/the-future-of-the-web-in-an-internet-of-things-world/), dont l'auteur est [Patrick Catanzariti](https://www.sitepoint.com/the-future-of-the-web-in-an-internet-of-things-world/). Je ne suis en aucun cas l'auteur de cet article, j'ai simplement eu envie de le traduire parce que j'aime ça et que je considère que beaucoup de ressources anglophones devraient etre aussi à la portée des personnes qui ne parlent pas anglais.

<!--break-->

# Développement Front-End dans le monde de l'Internet Des Objets

Le World Wide Web à évolué constammment à travers ses 27 ans d'histoire. La façon d'afficher et de styliser le contenu est passé par de nombreuses phases, la plus récente étant l'émergence du _Responsive Web_, un Web qui s'adapte à plusieurs navigateurs et tailles d'écran. Avec un nombre toujours croissant d'Objets Connectés comme les Raspberry Pis, les smartwatches, les assistants personnels qui sont commandés par la voix, et plus encore, le potentiel du Responsive Web est mise à rude épreuve.

L'Internet des Objets signifie qu'encore plus d'outils peuvent potentiellement charger du contenu Web. Nous devons nous assurer que le Web reste accessible et utilisable pour ces dispositifs si nous voulons éviter une segmentation similaire à ce que nous avons eu entre les ordinateurs et les téléphones. La dernière chose que nous voulons c'est un Web conçu pour l'Internet des Objets, et un conçu pour les ordinateur et mobiles.

## Quels Objets Connectés pourraient afficher du Web?

Une bonne partie des développeurs ne réalisent pas le nombre potentiel de dispositifs qui pourraient afficher du contenu Web dans le futur.

### Les Objets avec de petits affichages

Les dispositifs comme les Raspberry Pis avec des écran 2.4" et plus ont le Wi-Fi, l'ethernet, et meme des connections 3G/4G, leurs donnant tout le potentiel pour afficher du contenu Web. Ce contenu peut avoir la forme de page Web depuis le World Wide Web, ou depuis des pages Web locales pour les manuels d'objets embarqués, les outils controlés avec les pages Web et les tableaux de bords affichés en Web.

### Smartwatches

Les Smartwatches ont des écrans encore plus petits, avec des grandes palettes de couleurs et de résolutions. Alors que l'Apple Watch n'a pas encore de navigateur Web, Android dispose d'un navigateur pour sont Android Wear de Appfour et il y a toutes les chances pour qu'au fil du temps de plus en plus de montres connectées disposent de navigateurs Web (en éspérant que quelqu'un conçoive l'application de manière à l'utiliser facilement!). Si le Web est vraiment _responsive_ et accessible partout, nous devrions être préparé pour cette situation. Que se passera-t-il si, dans le futur, quelqu'un lisant un email sur sa Smartwatch cliquera sur un lien Web? Un simple navigateur Web sur une puissante Smartwach n'est pas impossible.

### Assistants Personnel à commande vocale

La nouvelle mode numérique est l'assistant vocal intelligent, comme Siri d'Apple, Echo Alexa d'Amazon, Google Now et Cortana de Microsoft. Le rôle de ces assistants dans une maison est d'éteindre ou d'allumer la lumière, mettre un réveil, ajuster la température et ainsi de suite. Ces services répondes aussi aux commandes vocales et aux question avec les données qu'elles récupèrent de différents endroits sur le net, impliquant souvent de croiser chaque base de données des enteprises avec les informations à propos de la personne utilisant le service. Pour les personnes intéressées, j'ai (Ndt: l'auteur original de l'article) écris des articles pour créer sa propre intelligence artificielle d'assistant sur SitePoint, comme [Five Simple Ways to Build Artificial Intelligence in 2016] et une série sur [How to Build Your Own AI Assistant Using Api.ai].

Au fil du temps avec les améliorations des intelligences artificielles et du _machine learning_, ces assistants pourraient parcourir le Web pour chercher des informations et nous les lire.

Pour que cela soit possible, il faut que le Web soit accessible au Bots qui vont exploiter l'information plutôt que l'afficher. Dans l'idéal, les pages Web devraient déjà être structurées pour aider les lecteurs d'écran, cependant l'utilisation des outils d'accéssibilité est souvent mis de coté aujourd'hui. L'emergence de services d'assistant personnel pourrait changer cela.

### De tout nouveaux affichages

Les écrans futurs, quand on parle d'Internet des Objets, peuvent apporter de nombreuses et fantastiques nouvelles possibilités. Pensez aux Smart Mirrors, aux Smart Windows (Ndt: Eheh, un Windows intelligent...), aux tableaux de bords de voitures, etc. Ceux-ci vont apparaître petit à petit dans notre vie, mais comment le Web s'affichera dessus? De nouvelles questions de conceptions sont à venir: pour afficher du contenu sur un miroir/une fenêtre, nous aurions besoin d'avoir un plus grand contraste de couleurs. Les affichage de miroir/fenêtre pourraient avoir une gamme de couleur limité, dont les développeurs auraient à prendre en compte? C'est en phase de devenir un tout nouveau monde.

## Préparer notre CSS et notre Markup pour le futur

Il y a plusieurs points clés sur lesquels les développeurs web doivent concentrer leur attention, si vous voulons un Web qui convient à toutes ces nouvelles technologies.

### Du CSS vraiment Responsive

Les pages Web auront besoin de s'adapter et être relativement lisible sur de tout petits affichages. Détecter de toutes petites résolutions sera surement l'un des pilier ici d'un point de vue CSS. Est-ce que le CSS sur un tout petit écran sera similaire à un site sur mobile? Ou devons-nous créer des règles et des standards qui vont aider à afficher le texte dans une plus grande police? De nouveaux standads pour restructurer la disposition sur de petits écran en utilisant les flexbox? De nouveaux standards pour concevoir des menu sur de petits écrans? Seul le temps nous le dira, mais seule une poignée de développeurs Web seront pionniers dans cet effort et il sera fascinant de voir comment la communauté suivra.

### L'élément \<picture\>

L'élement picture nous permet de choisir plusieurs images en fonction de la résolution et du type d'écran. La version final de cette spec sera clé pour avoir un web qui tournera bien lors du chargement de pages sur ce qui sera peut-être des objets avec peu de batteries et de faibles connections, et avec des objets avec de petites résolutions qui n'arriveront pas à afficher de larges images.

### La dépendance à JavaScript est dangereuse

Lorsque l'on regarde des dispositifs avec de petites batteries et des assistants personnels qui vont lire à voix haute le contenu de page web, il ne vont pas obligatoirement laner du JavaScript ou être capable de le gérer de la même manière qu'un smartphone ou une tablette. Si votre site Web repose sur du JavaScript pour insérer ses données sans aucun moyen alternatifs, les derniers Objets Connectés pourraient avoir des problèmes à y accèder. S'assurer que le Web fonctionne même sans JavaScript est un effort valable!

### WAI-ARIA et autres techniques d'Accessibilité
