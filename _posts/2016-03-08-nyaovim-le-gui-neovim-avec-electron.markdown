---
layout: post_kevin
title: Nyaovim le GUI Neovim avec Electron
author: kevin
category: planet
---

Voilà un projet dont j'avais plusieurs fois entendu parler mais sans jamais réellement me pencher dessus. Le seul défaut que je trouvais à Neovim c'est de ne pas avoir de GUI associé vraiment digne de ce nom, ce que je cherche est quelque chose de joli principalement mais aussi qui permette vraiment de profiter d'une interface graphique: prévisualisation, barre de défilement, bulle d'information et autre, etc...

<!--break-->

Et bien il s'avère qu'il existe un projet qui semble s'approcher pas mal de ce que je cherche dans l'architecture! Et ce projet s'appelle [Nyaovim](https://github.com/rhysd/NyaoVim) (Nya est l'équivalent de Miaou au Japon). C'est une interface graphique web pour Neovim, qui est utilisé comme application pc grâce à Electron.

[Electron](electron.atom.io) permet de créer des logiciels "desktop" avec des technos web, et à été développé notamment par Github pour créer leur petit nouveau: [Atom](atom.io). Electron part du moteur de rendu web Chromium avec un outil coté serveur très connu qui est [NodeJS](https://nodejs.org/en/), et permet donc de créer des logiciels en HTML/CSS Javascript.

L'avantage de ce système c'est qu'avec Nyaovim on va pourvoir d'une part créer des plugins dédiés à ce GUI en créant des [WebComponent](https://github.com/rhysd/neovim-component), comme les deux que le développeur de Nyaovim à déjà codé: [markdown-preview](https://github.com/rhysd/nyaovim-markdown-preview) et [popup-tooltip](https://github.com/rhysd/nyaovim-popup-tooltip).

Bon du coup comment profiter de cet outil? C'est très simple, il faut disposer du gestionnaire de package de NodeJS appelé [NPM](https://www.npmjs.com/), disponible dans la plupart des dépôt des grandes distribution de ce monde, qui est fourni lorsqu'on installe NodeJS sur son pc. Ensuite la commande a lancer pour installer Nyaovim est la suivante:

{% highlight bash %}

sudo npm install -g nyaovim

nyaovim

{% endhighlight %}

Et voilà votre GUI est maintenant installé et lancé!

Ce projet est indiqué comme instable sur son dépôt Github donc je ne serais pas vindicateur vis à vis du résultat. Mais il y a quand même de nombreux bugs qui me chagrine encore un peu:

* Les bugs graphiques sont souvent présents, j'ai souvent ma barre vim-airline qui apparait en plein milieu de mon buffer, ou un caractère fantome qui se superpose à mon curseur, etc...
* La bulle de complétion ne s'affiche plus, ou parfois apparait par clignotement, c'est qui est un peu dommage, surtout pour moi qui utilise les snippet Ultisnips à foison...
* Quelques boutons dans la barre de menu pour ouvrir un buffer de certains fichiers de config' ne serait pas un mal, comme nyaovimrc.html (le fichier de configuration de l'interface de nyaovim), ou tout simplement du vimrc

Malgré ces soucis je ne peux que conseiller d'aller voir ce projet qui à le mérite d'essayer quelque chose de nouveau et qui part sur une base très solide pour de futurs plugins ou améliorations très sympathique!

Sur ce j'ai finit pour aujourd'hui, mais j'ai encore deux trois articles dans la poche en ce moment, notamment toujours a propos de Vim/Neovim qui risque de plaire à certains ;)
