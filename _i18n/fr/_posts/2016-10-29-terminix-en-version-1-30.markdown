---
layout: post_kevin
title: Terminix en version 1.30
author: kevin
category: planet
serie: terminix
---

Il ne me semble pas avoir déjà parlé de Terminix jusqu’à présent donc je vais brièvement expliquer ce qu’est ce super projet.

Terminix est un émulateur de terminal en tuiles( tiling) pour Linux avec GTK3. C’est la description officielle du projet. Avec ce logiciel on dispose d’un terminal qu’on peut séparer de plusieurs façons: vertical, horizontal, ou avec des onglets. Son utilisation de GTK3 est plutôt cool puisqu’on se retrouve avec une interface très clean et agréable a l’oeil (et des petites animations, comme j’en raffole!)

<!--break-->

Si on regarde la page [Github du projet](https://github.com/gnunn1/terminix) on a une liste assez longue de fonctionnalités toutes plus sympa les unes que les autres. On peut citer:

  *  Le ré-arrangement des tuiles de terminal avec du __drag n drop__
  *  Le mode [Quake](https://github.com/gnunn1/terminix/wiki/Quake-Mode)
  *  Les notifications lors de la fin d’une tâche
  *  La sauvegarde de la sortie du terminal

Pour ce qui est du mode Quake ce n’est pas une fonctionnalité que j’utilise très souvent, mais avec l’ergonomie de Terminix c’est assez agréable à utiliser. On peut installer ce logiciel sur à peu près toutes les principales distributions GNU/Linux.

Il y a plusieurs semaines la nouvelle version de Terminix est sortie, rajoutant notamment:

  *  Le mode Quake cité précédemment
  *  Un gestionnaire de mot de passe qui utilise Gnome Keyring
  *  Les liens personnalisés
  *  Un gestionnaire de presse-papiers avancé
  *  Un nom de session par défaut
  *  Le changement de session rapide
  *  Le support expérimental pour les Trigger en installant un patch VTE

Il y a deux changements qui pour moi sont très intéressants et peuvent donner à réfléchir sur les possibilités qu’ils offrent.

Tout d’abord il y a les liens personnalisés, qui nous permettent de lancer une commande lorsque l’on clique sur un bout de phrase sur la sortie standard qui rentre dans la condition d’une expression régulière. Dans une [vidéo de présentation](https://www.youtube.com/watch?v=8qvZ37ojE0c) on peut voir un exemple de ça pour lancer gedit si on a un fichier suivi d’un numéro de ligne dans la sortie standard. C’est un exemple assez simple, mais je pense que c’est vraiment une fonctionnalité qui à du sens, avec peut-être des gens qui vont commencer à partager leur regexp respectifs qui sait :D Je ne l’ai pas encore utilisé parce que je fais tout dans neovim en ce moment, mais je vais me pencher dessus

La deuxième fonctionnalité qui m’a marqué c’est le changement de session rapide. Je n’ai pas réussi à le faire marcher sur mon pc (il faut un peu bidouiller pour l’instant de ce que j’ai compris). En gros en fonction de l’utilisateur sur lequel vous êtes identifié et sur quelle machine (si vous êtes en SSH sur un autre pc par exemple), vous allez avoir un profil de thème spécifique qui sera affiché, et lorsque vous changerez d’utilisateur ou de machine, vous passerez au nouveau profil de thème correspondant. Encore une fois dans la vidéo de présentation il y a un exemple de ça qui est utilisé. C’est une fonctionnalité plus esthétique qu’autre chose, mais je trouve ça très sympa aussi =D

Reste à voir s’il y aura des patchs pour mettre à jour VTE de GTK et ne plus avoir à bidouiller avec Terminix pour avoir ces fonctionnalités.



