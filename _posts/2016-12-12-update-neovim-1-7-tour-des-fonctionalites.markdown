---
layout: post_kevin
title: "Update: Neovim 0.1.7, petit tour"
author: kevin
category: planet
serie: vim
cover: vim_nvim.png
---

Ca y est, une nouvelle version de Neovim vient de sortir! Et avec elle sont lot de fonctionalités et de corrections bien sympa (voire même plus que sympa vous allez voir ;) ), profitons-en pour revoir les fonctionalités cool de Neovim

<!--break-->

Neovim est en développement depuis une paire d'années maintenant et, avec le soutien de nombreux contributeurs, rajoute un interêt non negligeable à ce bon vieux Vim qui sort une version toutes les décennies. Voici une liste non-exhaustives des nouveautés non seulement dans la 0.1.7 mais aussi dans le travail antérieur:

* En 0.1.7 nous avons maintenant le __inccommand__, successeur au _incsub_, nous permet d'avoir un aperçu temps-réel des modifs sur du texte, par le biais par example d'une substitution comme :%s/coucou/plop/g (une exemple [ICI](https://asciinema.org/a/92207))
* La Newsletter #7 est sortie, et dedans un il y un retour sur ce qui a été fait
* La commande _:tchdir_ qui permet de changer de répertoire localement à un 'tab'
* La 'statusline' peut maintenant aligner un nombre indéfini d'élements
* [oni](https://github.com/extr0py/oni) est un GUI pour Mac, mais le support de Linux est en cours (chez moi il se lance mais n'affiche rien d'autre qu'une barre et une page blanche), il peut réussir là ou NyaoVim à été un peu décevant à mon goût
* La commande _:CheckHealth_ qui permet d'avoir des rapports d'erreurs sur la configuration, le statut des plugins, et diverses informations comme le statut de la gestion du clipboard sur votre système
* Les utilisateurs de Debian seront heureux d'apprendre que Neovim sera dans la [prochaine version de Debian](https://packages.debian.org/stretch/neovim) ;)
* Le transcompileur VimL vers Lua fait des progès intéressants, mais sont développement est mis en arrière-plan par rapport au support de Windows.

Bien sûr ce n'est pas une liste complète, pour cela je vous invite à aller voir [CECI](https://neovim.io/news/) et [CELA](https://github.com/neovim/neovim/releases/tag/v0.1.7) pour beaucoup plus de détails.

Désolé pour cet article un peu court, et en retard par rapport a mon planning hebdomadaire mais je dois avoue que j'ai pas mal de boulot en ce moment, mais promis je reviendrais assez rapidement, probablement pour parler des commentaires sur mon blog qui sont maintenant fonctionnel et ce grâce à Staticman!
