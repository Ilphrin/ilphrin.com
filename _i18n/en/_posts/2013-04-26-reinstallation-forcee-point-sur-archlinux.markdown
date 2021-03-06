---
layout: post_kevin
cover: archlinux.png
author: kevin
title: "Réinstallation forcée --> Point sur Arch Linux" 
---

Salut tout l'monde!

Bon comme l'indique le titre de l'article, j'ai été obligé de faire un ré-installation de mon pc. En effet la moitié de mes applications ne voulaient plus s'ouvrir et j'avais d'autres problèmes important, et j'ai jamais réussi à comprendre pourquoi ça faisait ça tout d'un coup. Alors après quelques jours de combat j'ai finalement abandonné et ai télechargé une image iso d'archlinux. Malheureusement je ne pourrai donc pas continuer l'article pour détailler l'installation, mais si vous êtes intéressés je vous conseille vivement le wiki d'archlinux anglais et français.
<!--break-->
Bon, tout le monde ne connait pas forcément Arch Linux, j'vais donc faire une petite intro pour vous présenter le contexte. Arch est une distribution sortie en 2002, qui se veut basée sur la simplicité, au sens sans "option" rajoutée. Lorsque l'on se procure une Arch linux, on dispose du strict nécessaire pour avoir un système, le reste c'est à l'utilisateur de choisir ce qu'il veut avoir. Et bien sur je ne peux pas parler du fonctionnement d'Arch Linux sans mentionner le principe [KISS](http://wiki.archlinux.fr/kiss)! Pour faire court, il s'agit de laisser un éventail d'action maximum pour l'utilisateur afin qui puisse prendre sons système en main dans sa totalité. On trouvera rarement des GUI aux outils fourni par Archlinux car généralement un programme en interface graphique offre moins de contrôle sur le programme, alors qu'en ligne de commande on peut savoir précisément ce que l'on fait.

Cela signifie que l'on peut choisir la quasi-totalité des logiciels qui vont composer notre système. Du gestionnaire de réseaux au dock du bureau en passant par votre lecteur vidéo. Les avantages de cette procédure sont juste énormes à mon sens. L'utilisation de la RAM et de la mémoire CPU seront moins importants puisque vous n'aurez pas tous les logiciels lancés au démarrage sur les autres distributions. Et pour les disques durs qui ne font pas quinze millions de terra-octets vous aurez plus de place pour vos données après l'installation ^^ ( moi personellement avec mes 20Go ça m'aide plutôt bien...)

Bon en tout cas, j'ai fini de l'installer il y a de cela plusieurs semaines déjà et j'en suis plus que content. Les principaux logiciels que j'utilisais avant sous Linux Mint fonctionnent plus la plus grande majorité, comme sunflower, vlc, xchat, gimp etc... Pareil pour ce qui est de la composition de mon bureau Openbox avec conky, nitrogen,tint2 et wbar principalement. Le démarrage de ma session donne l'impression d'être plus rapide mais pas de beaucoup. Mais surtout ce que j'apprécie le plus avec cette distribution, c'est la gestion des paquêts qui est grandement améliorée avec l'[AUR](https://wiki.archlinux.org/index.php/AUR_User_Guidelines), qui est en gros un dépôt ou chaque utilisateur peut venir rajouter son paquet, le tout géré par le système de PKGBUILD sur lequel je ne m'attarderais pas car je ne suis pas encore assez connaisseur là-dedans...

Néanmoins il me reste encore pas mal de choses à corriger, même si je pense que certaines sont dues à l'âge avancé de mon ordinateur.  Je mets ici la liste des choses que j'ai à corriger; plus pour servir de pense-bête qu'autre chose:

* Comportement D-Bus étrange
* Gestion du wifi non-fonctionnelle
* Slim  ne veut pas se lancer parfois quand je me déconnecte simplement de ma session
* Gestion du son avec Alsa vraiment bizarre.

En tout cas je vous conseille vivement cette distribution si vous n'avez pas froid aux yeux en voyant que vous devez commencer par du mode texte pendant un bon moment et lire un peu de documentation pour comprendre le fonctionnement. Pour vous aider je vous renvoie aux liens que j'ai donné dans mon ancien article Test Archlinux en Virtualbox (1/2)

 

Sur ce je vous souhaite une bonne journée et à bientôt! ;)
