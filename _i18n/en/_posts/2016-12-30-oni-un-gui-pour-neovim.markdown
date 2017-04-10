---
layout: post_kevin
title: "Oni: Un GUI sympa pour Neovim"
author: kevin
category: planet
cover: vim_nvim.png
serie: vim
---

Ca faisait longtemps que je n'avais pas parlé de [Neovim](https://neovim.io/) hein? Eh bien pour la peine je vais présenter un GUI fait avec Electron pour Neovim qui claque

<!--break-->

J'avais déjà essayé un GUI qui s'appelait [Nyaovim](https://github.com/rhysd/NyaoVim) il y a plusieurs mois. Le souci que j'avais était que beaucoup de choses ne fonctionnaient pas très bien (peut-être qu'il y a eu des améliorations ceci-dit depuis le temps), mais il avait un grand avantage qui était son API pour développer des widgets graphiques qui venaient s'ajouter aux fonctionnalités de Nyaovim.

L'ayant laissé de côté en attendant une meilleure stabilité, j'ai découvert un autre programme qui s'appelle cette fois-ci [Oni](https://github.com/extr0py/oni). Celui-ci possède beaucoup de points communs à Nyaovim. Il ont tous les deux un logo cool, ils fonctionnent tous les deux avec de l'Eléctron, ont tous les deux une API pour faire des extensions, etc.

Voici un petit screenshot de ce à quoi ressemble Oni pendant que je rédige mon article:

![Oni](/images/oni.png)

C'est cool hein? En comparaison voilà à quoi ressemble mon nvim en terminal (qui est déjà assez sympa à mon goût):

![Neovim](/images/oni_02.png)

Dans les différences visible on peut voir (outre ma pub caché pour le terminal Terminix ;) ):

* Que les caractères de vim-airline ne passent pas très bien
* Qu'il y a une petite barre en plus à droite de mon buffer. Cette barre m'indique ma position par rapport au fichier entier
* L'auto-complétion n'a pas du tout la meme tronche. Oni profite de l'[externalisation de l'UI](https://github.com/neovim/neovim/pull/5686) qu'est en train de faire Neovim pour améliorer graphiquement les différents éléments.
* Il y a une image en fond. Ca peut paraitre bete mais c'est le genre de personnalisation que j'aime beaucoup et qui rajotue une touche personnelle supplémentaire.super

Il faut savoir qu'au début de mes tests d'Oni, j'avais remarqué un bug d'affichage avec la première ligne de mon buffer et NERDTree, et j'ai donc fait un [rapport de bug](https://github.com/extr0py/oni/issues/106), qui a été corrigé 4 jours plus tard, avec une poignée d'autres bugs corrigé.

C'est une réactivité vraiment sympa surtout quand on voit qu'il n'y a que quelques développeurs principaux (3 à première vue d'après les graphs Github), et le reste des contributions étant assez minimes en comparaison.

Il y a la [version 1.6](https://github.com/extr0py/oni/releases) qui est sortie tout récemment pour Oni qui rajoute notamment:

* Le support des caractères [CJC](https://fr.wikipedia.org/wiki/Chinois,_japonais_et_cor%C3%A9en) (Chinois, Japonais, Coréen)
* Correction de l'affichage de l'autoauto-complétion
* Une refonte du système de plugin pour préparer les prochaines fonctionalités (Prévisualisation Markdown, intégration dynamique de l'UI des plugins)

C'est en somme un logiciel que je conseille vivement malgré deux trois petits bug genant parfois (par exemple je dois ré-écrire cet-article sous Neovim en terminal, car les accents circonflexes ne se mettent pas sur Oni)
