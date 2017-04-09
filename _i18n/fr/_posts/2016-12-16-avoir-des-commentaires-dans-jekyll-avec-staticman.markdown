---
layout: post_kevin
title: Avoir des commentaires sur un site Jekyll avec Staticman
author: kevin
category: planet
serie: jekyll
cover: staticman.png
---

Ça y est! Après maintenant 2 ans d'acharnement, j'ai enfin un système de commentaires fonctionnel et cool sur mon site! Pourquoi fut-ce si long? Eh bien pour deux raisons, la première c'est que je maintiens de site web avec le [CMS Jekyll](https://jekyllrb.com/), qui permet de faire des sites uniquement statiques. L'avantage c'est que c'est très simple à mettre en place et à développer (je m'embête pas avec des bases de données ou du PHP pour avoir du back-end). L'inconvénient, c'est que je peux difficilement profiter des avantages d'un site dynamique, et notamment les commentaires. Mais ça c'était avant qu'on me parle de [Staticman](https://staticman.net/)

<!--break-->

Lorsque j'ai posé la question sur le chat [IRC](irc:irc.freenode.net/jekyll) de jekyll pour savoir par quel moyen je pouvais faire marcher les commentaires sur mon site, tout de suite après on m'a redirigé vers le site de Staticman. L'idée de cet outil est d'apporter des possibilités de traitement de données sur des sites statique. Le site donne des exemples comme les commentaires, les reviews, ou les votes. En plus il est fait pour fonctionner avec un dépôt Github.

En lisant la description détaillée sur le site et sur le [dépôt Github du projet](https://github.com/eduardoboucas/staticman), on en apprend un peu plus sur son fonctionnement, par exemple pour un commentaire:

* Un utilisateur va vouloir rédiger un commentaire sur un site X, et cliquer sur "Envoyer"
* Le formulaire envoie une requête au serveur NodeJS de Staticman, qui va recevoir la donnée, la traiter selon le fichier de configuration que vous écrivez sur le dépôt de votre site, et vous envoyer le contenu formaté sous forme de Pull Request sur votre dépôt pour ajouter un fichier dans le dossier \_data/ de Jekyll
* Vous acceptez la merge request, et il ne vous reste plus qu'à build votre site jekyll et à l'envoyer sur votre serveur pour voir votre joli commentaire.

Le fonctionnement de Staticman est vraiment aussi simple que ça. Le [site](https://staticman.net/docs) explique comment faire pour l'intégrer à son site. J'ai eu toutefois des petites difficultés notamment sur le fichier de configuration. Je vais donc vous poster ici le contenu de mon fichier et de mon template pour que vous voyiez comment ça marche en pratique:

{% highlight yml %}
comments:
  allowedFields: ["name", "email", "url", "message", "post_id"]
  allowedOrigins: ["ilphrin.com"]
  branch: "master"
  filename: "{fields.name}_{@timestamp}"
  format: "yml"
  generatedFields:
    date:
      type: date
      options:
        format: "timestamp-seconds"
  moderation: true
  name: "ilphrin.com"
  path: "_data/comments/"
  requiredFields: ["name", "email", "message", "post_id"]
  commitMessage: "New comment on the blog"
{% endhighlight %}

Il n'y a pas grand-chose à dire sur ce fichier-là il parle de lui-même à mon avis. Vous devez placer ce fichier à la racine de votre dépôt pour que Staticman le lise correctement. Voici ensuite la partie de la page HTML pour les formulaires sur mon site:

{% highlight html %}
  <form id="commentform" method="POST" action="https://api.staticman.net/v2/entry/Ilphrin/ilphrin.com/master/comments">
    <input name="options[slug]" type="hidden" value="{{ page.slug }}">
    <input name="options[redirect]" type="hidden" value="https://ilphrin.com{{page.url}}">
    <input name="options[origin]" type="hidden" value="https://ilphrin.com" />
    <input type="hidden" name="fields[post_id]" value="{{page.id}}" />
    <div id="form_info">
      <div id="title_form">
        <p>Nom:</p>
        <p>E-mail:</p>
        <p>Site Web:</p>
      </div>
      <div id="content_form">
        <p><input type="text" size="25" name="fields[name]" id="name" placeholder="(Requis)" required/></p>
        <p><input type="email" size="25" name="fields[email]" id="email" placeholder="(Requis, non publié)" required/></p>
        <p><input type="text" size="25" name="fields[url]" id="link" placeholder="(Optionnel)"/></p>
      </div>
    </div>
    <textarea name="fields[message]" rows="10" cols="60" id="comment" placheolder="(Requis)" required></textarea>
    <input type="submit" name="submit" value="Envoyer ✔"/>
  </form>
{% endhighlight %}

Là il ne faut surtout pas oublier deux choses: la première c'est l'action du formulaire à indiquer dans la balise __\<form\>__, et la deuxième c'est que les différents champs que vous voulez renseigner sont dans des objets. Pour ajouter une option vous aurez __\<input name="option[MonOption]"\>__ et pour un champ à traiter se sera __\<input name="fields[MonChamp]"\>__

Voilà vous avez maintenant les outils pour mettre en place des commentaires facilement et rapidement pour votre site, vous n'aurez plus d'excuses ;)

{% note %}
Pour plus de lecture sur le sujet je vous conseille aussi ce très bon article (en anglais) <a href="https://mademistakes.com/articles/jekyll-static-comments/">SUR CE LIEN</a></content>
{% endnote %}
