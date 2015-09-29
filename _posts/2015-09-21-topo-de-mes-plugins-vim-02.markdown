---
layout: post_kevin
title: Topo de mes plugins Vim - 02
author: kevin
cover: vim_nvim.png
category: planet
---

Les plugins c'est vraiment le top, alors dans Vim je vous en parle même pas, c'est comme rajouter des animations CSS, si je ne fait pas attention j'en rajoute un peu partout! Depuis la dernière fois j'ai rajouté quelque plugins qui ne révolutionnent pas mon utilisation de Vim, mais restent quand même un petit plus agréable. Du coup aujourd'hui ça va être plus court mais il y aura plus de monde ;)

<!--break-->

##rust.vim

####Pour gérer le langage de Mozilla

Installation: [http://vimawesome.com/plugin/rust-vim-love-story](http://vimawesome.com/plugin/rust-vim-love-story)

Je pense que tout est dans le titre, si vous vous lancez dans l'apprentissage de Rust ce plugin est incontournable pour avoir une coloration syntaxique et quelques outils de completion (comme pour la documentation de code avec ///), et quelques actions supplémentaires (mais je n'utilise que la coloration syntaxique personnellement).
Note intéressante sur ce plugin: Apparemment il se synchronise de façon journalière au dépot github de Rust (le dépot du plugin pas le plugin en lui-même hein!)
Il n'y a pas besoin de configuration précise pour fonctionner correctement, vous faites un git clone dans votre dossier de plugins et le tour est joué!

##indentLine

####Savoir où en est l'indentation

Installation: [http://vimawesome.com/plugin/indentline](http://vimawesome.com/plugin/indentline)

C'est un plugin que j'ai découvert cette semaine. Il permet d'afficher des guides pour les nieaux d'indentation dans le fichier. Je trouve ça assez pratique surtout quand des fois j'ai de mauvaises indentation (genre une espace après avoir indenté d'un niveau).
Avec ce plugin on peut notamment configurer le caractère a afficher en fond comme guide, et aussi la couleur de ce caractère. Respectivement avec les commandes dans le vimrc:

{% highlight vim %}
let g:indentLine_char = '¦' "Je ne sais pas comment on obtiens ce caractère au clavier, je l'ai récuperé avec un Copier-Coller
let g:indentLine_color_term = 0 "Pour avoir une couleur noir
{% endhighlight%}

##NERDCommenter

####Les commentaires faciles

Installation: [http://vimawesome.com/plugin/the-nerd-commenter](http://vimawesome.com/plugin/the-nerd-commenter)

Je l'utilise souvent pour écrire un pavé de texte dans du code, puis le mettre en commentaire en sélectionnant le tout et en faisant ensuite \\cc ou \\cs. Il dispose de tout un tas de commandes pour aller un peu plus loin dans la gestion des commentaires mais son utilisation basique me suffit amplement. Il ne lui manque plus qu'à ajouter la gestion pour Rust et ce serait parfait :D (j'ai posté une Issue sur la page Github à ce sujet, je mettrai à jour l'article si il y a du nouveau de ce coté là!)

##vim-cargo

####Quelques commandes pour Cargo

Installation: [http://vimawesome.com/plugin/vim-cargo](http://vimawesome.com/plugin/vim-cargo)

Fork plus complet: [https://github.com/shmup/vim-cargo](https://github.com/shmup/vim-cargo)

Tant qu'on parle de Rust autant parler de ce plugin. Ce petit plugin très simple rajoute 4 (à ce jour, et 8 dans le Fork que j'ai mis en lien) petites commandes classiques pour manipuler Cargo le gestionnaire de projet qui va de pair avec Rust. Le code semble très court et simple je pense que je vais essayer de l'étoffer un peu, ça me permettra d'apprendre a écrire du VimScript!

##Colorizer

####Avoir un surlignage selon les couleurs

Installation: [http://vimawesome.com/plugin/color-highlight](http://vimawesome.com/plugin/color-highlight)

Tout est dans le titre encore une fois. Colorizer va analyser votre texte/code, et si il reconnait des écritures de format de couleur il va surligner le texte de la couleur correspondante, par exemple avec "red" il va surligner red en rouge, il sait reconnaitre aussi des modèles plus complexes comme notamment les format utilisés en CSS. #FF0000, rgb(255, 0, 0), rgba(255, 0, 0, 255) et hsl(120%, 70%, 820%) par exemple seront tous surligné en une teinte de rouge.

##MRU (Most Recently Used)

####Voir les fichiers récemments ouverts

Installation: [http://vimawesome.com/plugin/mru-vim](http://vimawesome.com/plugin/mru-vim)


MRU permet par le biais de la commande eponyme (:MRU, on sait jamais) de voir la liste des fichiers récemments ouverts, d'en sélectionner un, et de l'ouvrir avec la touche Enter. C'est une fonctionalité classique mais j'avoue que je n'y pensais plus quand j'utilisais Vim, maintenant je lance vim dans mon terminal où que je sois avec j'ouvre le fichier sur lequel je bosse en ce moment avec le :MRU. Je me suis meme permis de rajouter ces quelque petites lignes dans mon vimrc:

{% highlight vim %}
if bufname('') == ''
  autocmd VimEnter * MRU
endif
autocmd BufNewFile * MRU
{% endhighlight %}

Comme ça MRU se lance si j'ai ouvert vim sans aucun fichier en paramètre, et lorsque que je crée un nouveau buffer vide. Néanmoins il ne s'ouvre pas lorsque je crée un nouvel Onglet vide (j'y travaille j'y travaille!)
