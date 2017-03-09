---
layout: post_kevin
title: Un nouveau blog tout beau avec Jekyll
author: kevin
category: planet
---

Voilà j'ai enfin terminé de faire ce blog! Il sera passé par beaucoup d'étapes, mais le résultat vaut vraiment le coup. Principalement parce que c'est moi qui l'ai fait, en choississant a ma sauce chaque petit morceau. Je pense que la partie la plus dure n'a pas tant été l'apprentissage de Jekyll pour générer un site statique, mais plutôt le choix d'un design final pour ce site. Autant se l'avouer tout de suite: Je ne suis pas doué quand il s'agit de réfléchir au design d'un site web. Autant pour un logiciel il existe des bibliothèques qui définissent des menus, des canvas, des onglets etc... Autant dans le web c'est une galaxie de possibilités, a un tel point qu'on ne s'y retrouve plus.
<!--break-->

Mais bon j'y suis finalement arrivé. Il manque encore quelques petite touches au site (je pense notamment aux commentaires, qui ne fonctionnenent pas du tout vous pouvez essayer vous ne verrez jamais votre commentaire s'afficher sur mon site, et aussi une petite liste des copains et autres sites a voir. Peut-être vais-je rajouter ça dans l'onglet Contact).

Un peu de technique maintenant. Comme je l'ai mentionné, j'utilise Jekyll pour faire de la génération de code statique. Pour ceux qui ne savent pas, statique signifie (en gros) qu'il n'y a pas de code PHP, donc pas de gestion coté serveur. Vous avec de l'HTML, et du CSS. C'est quasiment tout ce qu'il y a sur ce site. Le gros avantage de Jekyll par rapport a ce que je voulais est qu'il est spécialisé pour la conception de Blogs, avec une gestion des articles qui sont écrit de mon coté en langage Markdown, puis sont transformé en page HTML/CSS par Jekyll selon un modèle que j'ai défini.

Ah oui il faut en parler de ces modèles, ou plutôt appelé par Jekyll des Layouts. Pour générer du code avec Jekyll, on commence par écrire des pages qui serviront de modèles pour la génération, et en mettant dedans des commandes Jekyll pour lui donner des informations, comme lui dire a quel endroit insérer le contenu de la page qui utilise ce Layout. Un modèle peut être tout et n'importe quoi en HTML. Pour ce site j'utilise a peu près deux catégories de Layouts, d'un coté ceux qui contiennent le code de base d'une page HTML donc avec le DOCTYPE les balises <head> les lignes d'insertion de CSS etc... Agrémentés donc en plein milieu d'une ligne avec {{content}} pour placer le contenu de la page. Et d'un autre coté j'utilise des Layouts qui eux-mêmes sont derivés des Layouts de la première catégories.

C'est le système que j'aime le plus avec Jekyll car ça permet de créer des modèles de pages au début, ce qui fait que pour la suite on a plus qu'à écrire le contenu qu'on veut et indiquer le modèle a utiliser. Non seulement ça simplifie la vie mais c'est en plus très facilement lisible quand on veut remettre les mains dans le cambouis. Par exemple quand j'écris cet article, j'écris un fichier de type Markdown, avec le contenu de mon article et le formattage que je veux faire (Jekyll s'occupe aussi de convertir le Markdown en HTML. Franchement, quel homme ce Jekyll!), et avec au début deux trois lignes d'information qui sont utilisées par Jekyll dont le Layout.

Je pense que je vais conclure sur le fait que je suis vraiment satisfait des possibilités offertes par Jekyll. Il permet de facilement faire du code statique sans se casser la tête et surtout le rendu final est très performant puisqu'on n'a ni PHP ni Javascript pour faire tout ça. Mais après rien n'empêche de rajouter du PHP ou du Javascript! Par exemple sur ce site le bouton 'Contact' a une propriété HTML onclick qui lance une fonction Javascript pour afficher ou non la barre de Contact. J'ai aussi quelques lignes de PHP qui me permettent de gérer le formulaire d'envoi de commentaire, pour m'envoyer un mail avec le contenu et je n'ai plus qu'à rajouter ça au site (pas très pratique certes puisqu'il faut recopier le contenu du mail, le nom et l'article associé, dans le dossier \_comments, mais apparemment il existe des ptits gars qui ont fait un script pour automatiser tout ça)

Si vous voulez vous lancer dans la création d'un blog et que vous êtes débutant comme moi, Jekyll est vraiment un très bon outil pour faire ça.

Gloire a Jekyll :3
