---
layout: post_kevin
title: Topo de mes plugins Vim - 01
author: kevin
cover: vim_nvim.png
category: planet
---

Au fil des mois de mes utilisations de Vim, je finis par emmagasiner un bon paquet de plugins, dont je me sers plus ou moins souvent selon ma capacité à me souvenir de leur existence dans mes dossier. Et le gros problème que j'ai avec ces plugins c'est que je pour beaucoup je ne me souviens jamais de comment ils fonctionnent de A à Z, et j'aime avoir une documentation complète pour me rappeler tout ça.

<!--break-->

Or, autant Vim en lui même est très bien documenté avec non seulement des documents de référence pour le :help mais aussi par le biais de tutoriaux très bien fait tels que VimTutor ainsi qu'un jeu web pour apprendre les bases de vim. (Sans parler de VimGolf, tiens j'irais y jouer après la rédaction de cet article.) Mais pour les plugins je manque généralement de ressources, et la documentation de référence fournie avec le :help ne me suffit pas pour me souvenir de la configuration précise d'un plugin quand je veux modifier quelque chose de précis, ou parfois c'est (je l'avoue) simplement dû a ma flemme de lire la langue de Shakespeare.

Du coup je vais écrire ici toutes mes notes sur l'utilisation des mes plugins vim, comment je peux configurer etc... et j'aurais peut-être au bout d'un moment une bonne base de connaissances qu'il deviendra intéréssant d'utiliser (c'est pour ça que j'ai mis - 01 dans le titre c'est que je pense découper en plusieurs articles pour ne pas que ça fasse trop gros d'un seul coup)

##Ultisnips

###Faire des snippets comme dans Atom ou SublimeText
[Site de l'auteur](www.sirver.net)

**Installation**: http://vimawesome.com/plugin/ultisnips-forever-and-always

C'est sûrement l'outil le plus abouti à ce jour pour ce qui est de l'écriture de snippets. Mais j'ai eu énormément de mal à le faire fonctionner, si j'ai bien compris d'ou venait le souci, c'est dû a une incompatibilité avec autre plugin.
Donc pour éviter ce genre de problèmes il faut mettre ses snippets dans un autre dossier que ~/.vim/snippets. Moi j'ai simplement mis ~/.vim/Ultisnips/ et modifié le paramètre dans mon vimrc:

{% highlight vim %}
let g:UltiSnipsSnippetsDir = "~/.vim/Ultisnips/"
{% endhighlight %}

Une fois cela fait on va pouvoir commencer a écrire des snippets! Et pour cela il existe plusieurs vidéos qui sont très bien faites dans le domaine. Je ne puis que conseiller les liens donné dans la documentation d'Ultisnips:

* [http://www.sirver.net/blog/2011/12/30/first-episode-of-ultisnips-screencast/](http://www.sirver.net/blog/2011/12/30/first-episode-of-ultisnips-screencast/)
* [http://www.sirver.net/blog/2012/01/08/second-episode-of-ultisnips-screencast/](http://www.sirver.net/blog/2012/01/08/second-episode-of-ultisnips-screencast/)
* [http://www.sirver.net/blog/2012/02/05/third-episode-of-ultisnips-screencast/](http://www.sirver.net/blog/2012/02/05/third-episode-of-ultisnips-screencast/)
* [http://www.sirver.net/blog/2012/03/31/fourth-episode-of-ultisnips-screencast/](http://www.sirver.net/blog/2012/03/31/fourth-episode-of-ultisnips-screencast/)

Ainsi que:

* [http://vimcasts.org/episodes/meet-ultisnips/](http://vimcasts.org/episodes/meet-ultisnips/)
* [http://vimcasts.org/episodes/ultisnips-python-interpolation/](http://vimcasts.org/episodes/ultisnips-python-interpolation/)
* [http://vimcasts.org/episodes/ultisnips-visual-placeholder/](http://vimcasts.org/episodes/ultisnips-visual-placeholder/)

Écrire un snippet avec Ultisnips est assez similaire a la façon qu'ont les autres éditeurs de texte de le faire. Par exemple, a chaque fois que j'écris un article sur ce blog je remplis d'abord trois informations YAML puis un paragrapge, un tags de découpage pour la première page du site, et la suite de l'article, je peux donc écrire un snippet pour accélérer un tout petit peu les chose:

{% highlight yaml linenos %}
snippet post
---
layout: ${1:post_kevin}
title: $2
author: kevin
---

$3

<!--break-->

$4
{% endhighlight %}

On peut utiliser des petits bout de codes en Python, VimL ou Bash pour des utilisations plus complexes. Par exemple si je veut choisir un layout différent parmis ceux que j'ai sur mon site en utilisant une autocomplétion personnalisée je peux améliorer le snippet précédent:

{% highlight yaml linenos%}
global !p
def complete(t, opts):
  if t:
    opts = [m[len(t):] for m in opts if m.startswith(t)]
  if len(opts) == 1:
    return opts[0]
  return opts

snippet post
---
layout: $1 `!p snip.rv = complete(t[1], ['post_kevin', 'index', 'autre_layout', 'etc...'])`
title: $2
author: kevin
---

$3

<!--break-->

$4
{% endhighlight %}
(code python honteusement piqué su site de l'auteur du plugin)

Maintenant que j'ai réussi a l'installer je pense que je vais m'amuser à écrire des tonnes de snippets dans tous les sens et pour tout et n'importe quoi!

##Vim-airline

####Ou comment rendre l'interface de Vim badass

[Site de l'auteur](http://bling.github.io/)

**Installation**: [http://vimawesome.com/plugin/vim-airline-sad-beautiful-tragic](http://vimawesome.com/plugin/vim-airline-sad-beautiful-tragic)

J'aime beaucoup ce plugin, mais j'ai eu aussi pas mal de difficultés à le faire marcher vraiment correctement jusqu'à récemment ou je me suis replongé dessus.
Le principal problème que  j'avais etait...qu'il ne m'obéissait pas du tout en fait! Le premier problème que j'avais venat du fait qu'il ne s'affciahait que lorsque j'avais au moins deux fenêtres Vim. Or en me baladant sur superuser.com j'ai trouvé cette commande a rajouter dans le vimrc:

{% highlight vim %}
set laststatus=2
{% endhighlight %}

Si on regarde la documentation Vim correspondant à ce paramètre, on comprend que ça gère les cas dans lesquels la statusline doit s'afficher ou non, en mettant la valeur 2 on lui demande de s'afficher tout le temps, alors qu'avec la valeur 1 on lui demande de ne s'afficher que lorsqu'il y a au moins deux fenêtres.

On peut ensuite configurer l'apparence de cette statusbar de deux façons. Soit en choisissant manuellement chacun des composants et leur apparence, soit en choisissant un thème avec la commande suivant:

{% highlight vim %}
:AirlineTheme
{% endhighlight %}

Et en faisant défiler a l'aide de la commande Tab.
On peut déjà choisir les informations qui sont affichées dans la statusbar, pour ça vim-airline découpe la barre en **Section**, qui sont nommées de a,b,c,x,y,z. Voici ma configuration:

{% highlight vim %}
set lastsatus=2
let g:airline_powerline_fonts=1
let g:airline_section_x='%{strftime("%H:%M")}'
let g:airline_section_y='%{char2nr(getline(".")[col(".")-1])}' "Pour obtenir la valeur ascii du caractère a la position du curseur
let g:airline_section_z='Line:%l Col:%c'
{% endhighlight%}

Pour avoir les jolis affichages en flèches de vim-airline. il faut installer les polices de caractères de powerline. Pourquoi? Parce que ce sont des caractères en forme de flèche ou de branche ou tout un tas d'autres choses qui en fait ne vont pas servir à écrire du texte mais a affiner l'affichage. Pour l'installer il suffit d'aller sur la page [Github de powerline](https://github.com/powerline/fonts) et de lancer le install.sh du .zip téléchargé.

Pour changer le thème de base:

{% highlight vim %}
let g:airline_theme="murmur"
{% endhighlight %}

Lorsque j'ai voulu pour la première fois changer de thème, je me suis rendu compte que je n'obtenais absolument pas les même résultats que sur les screenshots de Vim-airline. Avant de modifier les couleurs il fallait donc déjà qu'elles soient fonctionnelles! A force de farfouiller sur le net, j'ai compris qu'il y avait une variable liée a la gestion du nombre de couleurs dans Vim qui s'appelle t_Co, j'ai rajouté donc cette ligne dans mon vimrc:

{% highlight vim %}
set t_Co=256
{% endhighlight%}

Et victoire ça marche! En fait avant cette ligne ma valeur pour t_Co était de 8! Si cette variable est le nombre de couleurs de la fenêtre Vim, alors avant j'avais encore moins de couleur que Mario Bros sur arcade!(Et j'ai vérifié)

Il me reste encore un bon paquet de plugins a traiter, mais au moins juste écrire cet article m'a permis de revoir pas mal de choses sur la configuration de Vim-airline et Ultisnips ce qui n'est pas plus mal (Pour l'histoire du lastsatus a 1 par défaut, je ne l'ai appris qu'hier)

Si certaines personnes lisant cet article trouvent des choses à redire ou a rajouter n'hésitez pas mon adresse mail est dans l'onglet Contact, en attendant que les commentaires fonctionnent sur le site!

@pluche
