---
layout: post_kevin
author: kevin
title: Faire son propre écran de login MDM en HTML
cover: linuxmint.png
---
Salut tout l'monde!

[The Linux Mint Blog](http://blog.linuxmint.com/?p=2327) à publié récemment un article concernant MDM expliquant qu'il gère maintenant les thèmes HTML5.  Si vous n'aimez pas l'Anglais, voici comment avoir la dernière version de mdm:
<!--break-->
- Télécharger et installer l'archive ici : [archive](http://build.linuxmint.com/automate/www/instances/linuxmint/ubuntu/pool/main/m/mdm/)

* Enlever les "ajustements de Mint" (je met entre guillemet car je ne sais pas vraiment à quoi cela correspond) :

		rm -f /etc/linuxmint/adjustments/15-mdm.overwrite 

* Redémarrer son pc
* Ensuite vous pouvez configurer MDM par deux façons:
* Par le menu du panel   :  Menu->Administration->Ecran de démarrage (Login Window)
* Ou en ligne de commande avec:

		sudo mdmsetup 

* Dans l'onglet "Locale", mettez "Style" sur HTML
* Faites une copie du répertoire /usr/share/mdm/html-themes/mdm dans votre dossier personnel, ce sera ce dossier là avec lequel vous ferez mumuse ;)
* Quand vous avez fini vous pouvez nommer votre thème comme bon vous semble puis le copier dans le répertoire /usr/share/mdm/html-themes/

Vous pouvez avoir un aperçu de votre résultat en entrant la commande

	mdm-theme-emulator 

Et en ouvrant le fichier __index.html__

Et voilà vous avez de quoi vous occuper un bon moment! Moi je ne peux pas encore faire  grand chose vu qu'il faut connaitre l'html/css et le javascript pour faire de joli trucs, du coup je me suis contenté de celui proposé de base.

Bonne journée à tous! _o/