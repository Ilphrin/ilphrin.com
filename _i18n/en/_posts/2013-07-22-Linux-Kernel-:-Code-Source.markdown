---
layout: post_kevin
title: "Linux Kernel: Code source"
author: kevin
cover: circuit.jpg
---

Salut tout l'monde!

Comme promis voici un nouvel article sur le noyau Linux. Comme le précédent ceci est une traduction d'un autre article sur linux.org. Disponible à cette [adresse](http://www.linux.org/threads/the-linux-kernel-the-source-code.4204/).

Après que le code source du noyau soit téléchargé et décompressé, les utilisateurs peuvent voir de nombreux dossiers et fichiers. Il peut être d'une grande difficulté de trouver un fichier en particulier. Heureusement, le code source est trié d'une façon spécifique. Cela permet  aux développeurs de retrouver un fichier ou un élément du noyau.
<!--break-->
La racine du code source du noyau contient les dossiers suivants:

	arch
	blockcrypto
	Documentation
	drivers
	firmware
	fs
	include
	init
	ipc
	kernel
	lib
	mm
	net
	samples
	scripts
	security
	sound
	tools
	usr
	virt

Il y a aussi quelques fichiers dans la racine du code source, listés ci-dessous :

COPYING - Informations à propos de la licence et des droits. Le noyau Linux est sous licence

GPLv2. Cette licence autorise toute personne à utiliser, modifier, distribuer, et partager le code source et à le compiler librement. Cependant, vous ne pouvez pas revendre le code source.

CREDITS - Liste des contributeurs

Kbuild - Ceci est un script qui configure plusieurs paramètres pour le noyau. Par exemple, ce script configure la variable ARCH qui est le type de processeur que le développeur veut que le noyau supporte.

Kconfig - Ce script est utiliser quand un développeur configure le noyau, nous en reparlerons dans un prochain article.

MAINTAINERS - Ceci est une liste ces mainteneurs, leurs adresses mail, site web, et le fichier ou la partie de code du noyau qu'ils développent ou réparent. C'est assez utile lorsqu'un développeur trouve un bug dans le noyau et veut le rapporter à un mainteneur qui pourra s'occuper du problème.

Makefile - Ce script est le fichier principal utilisé pour compiler le noyau. Ce fichier passe es paramètres au compilateur comme une liste de fichiers à compiler ainsi que tout autre information nécessaire.

README - Ce fichier texte fourni des information aux développeur savoir comment compiler le noyau.

REPORTING-BUGS - Ce fichier texte fourni les informations pour rapporter un bug.Le code du noyau se trouve dans des fichiers portant l'extension ".c" ou ".h". L'extension ".c" indique que le noyau est écrit en langage C, l'un des nombreux langages de programmation. Les fichiers en ".h" sont des fichiers d'en-tête, et sont aussi écrit en C. Les fichiers d'en-tête (aussi appelé "header" en anglais) contiennent du code fréquemment utilisé dans les fichiers ".c". Cela permet d'économiser le temps des programmeurs car ils peuvent utiliser ces codes au lieu de ré-écrire le code à chaque fois. Autrement, un morceau de code qui fait la même action serait présent dans tous les fichiers ".c". Ce qui gaspillerait de l'espace sur le disque-dur.

Tous les fichiers contenus dans les dossiers cités ci-dessus sont bien organisés. Le nom des dossiers aident les développeurs pour au moins avoir une vision correcte du contenu. L'arbre des répertoires et leurs descriptions sont données ci-dessous.

arch - Ce dossier contient un Kconfig qui permet de configurer certains paramètres pour compiler le code contenu dans ce dossier. Chaque architecture de processeur dans son dossier correspondant. Par exemple, le code source pour les processeurs Alpha est présent dans le dossier alpha.

	alpha
	arc
	arm
	arm64
	avr32
	blackfin
	c6x
	cris
	frv
	h8300
	hexagon
	ia64
	m32r
	m68k
	metag
	microblaze
	mips
	mn10300
	openrisc
	parisc
	powerpc
	s390
	score
	sh
	sparc
	tile
	um
	unicore32
	x86
	xtensa

block - Ce dossier contient les codes des drivers des dispositifs blocks. Les dispositifs block acceptent et envoient des données dans des blocs. Les blocs de données sont des extraits de donnés plutôt qu'un flux continu.

crypto - Ce dossier contient le code source de nombreux algorithmes de chiffrement. Par exemple, "sha1_generic.c' est le fichier contenant le code pour l'algorithme de chiffrement sha1.

Documentation - Ce dossier contient des documents texte qui fournissent des informations sur le noyau et la plupart des fichiers. Si un développeur a besoin d'information, celle-ci peuvent être trouvées ici.

drivers - Ce répertoire contient les codes source des drivers. Un driver est un logiciel controlant un élément du matériel. Par exemple, pour qu'un ordinateur comprenne un clavier et le rende utilisable, il a besoin d'un driver. Il y a de nombreux dossiers dans celui-ci. Chaque sous-dossier est nommé d'après un morceau ou un type de matériel. Par exemple, le dossier bluetooth contient les codes des drivers pour le bluetooth. Parmi d'autres drivers évidents se trouvent les scsi, usb et firewire. D'autres sont plus difficiles à trouver. Par exemple, les drivers de joystick ne se trouvent pas dans le dossier joystick. Cependant, ils sont dans ./drivers/input/joystick. Les souris et claviers se trouvent aussi dans le dossier input. Les dossiers Macintosh contiennent les codes pour le matériel Apple. Les dossiers Xen contiennent les codes pour l'hyperviseur Xen. Un hyperviseur est un logiciel ou un matériel permettant à un utilisateur de faire fonctionner plusieurs systèmes d'exploitation sur un seul ordinateur en même temps. Ainsi, l'utilisateur peut faire fonctionner Windows, Solaris, FreeBSD ou un autre système avec le système Linux. Il y a de nombreux dossiers par driver, mais ils sont trop nombreux pour tous les nommer ici, cependant, ils le seront dans un prochain article.

firmware - Le dossier des firmware contient le code qui permet à l'ordinateur de lire et comprendre les signaux des périphériques. Par exemple, une webcam gère son propre matériel, mais l'ordinateur doit comprendre les signaux que la webcam lui envoie. Le système Linux utilisera le firmware vicam pour comprendre la webcam. Autrement, sans firmware, le système Linux ne saurait gérer les information que la webcam lui envoie. En outre, les firmware permettent au système Linux d'envoyer des messages aux périphériques. Linux peut donc dire par, exemple, à la webcam de se recadrer ou de s'éteindre.

fs - Ceci est le dossier FileSystem. Tout le code nécessaire à la compréhension et l'utilisation des système de fichiers est contenu ici. Dans ce dossier, le code de chaque système de fichier est dans son dossier. Par exemple, le code du système de fichier ext4 est dans le dossier ext4. Dans le dossier fs, les développeurs pour voir que certains fichiers ne sont pas dans des dossiers. Ces fichiers permettent de gérer de façon globale les systèmes de fichiers. Par exemple, mount.h contient le code pour monter un système de fichier. Un système de fichier est une façon structurée de stocker et gérer des fichier et des dossiers dans un système de stockage. Chaque système de fichier possède ses propres avantages et désavantages. Ceci est dû à la programmation du système de fichier. Pour prendre un exemple, le système de fichier NTFS supporte la compression transparente (quand activé, les fichiers sont automatiquement compressés sans que l'utilisateur n'en soit informé). La plupart des systèmes de fichiers n'ont pas cette fonction, ils ne pourraient obtenir cela qu'en le programmant sur les fichiers dans le dossier fs.

include - Le dossier include contient divers fichiers importants utilisés par le noyau. Le nom du dossier vient de la commande en C "include" utilisée pour importer un fichier important en C dans la compilation.

init - Le dossier init possède les codes pour le démarrage du noyau (INITialisation). Le fichier principal en .c est le cœur du noyau. C'est le fichier de code source principal connecté avec tous les autres fichiers.

ipc - IPC signifie Inter-Process Communication (communication à l'intérieur du processus). Ce dossier contient le code pour les communications entre le noyau et les processus. Le noyau contrôle le matériel et les programmes ne peuvent que demander au noyau d'effectuer un tâche. Mettons qu'un utilisateur a un programme permettant d'ouvrir le lecteur DVD. Le programme n'ouvre pas le lecteur lui-même. En revanche, il informe le noyau que le lecteur doit être ouvert. Ensuite, le noyau ouvre le lecteur en envoyant un signal au matériel. Ce code s'occupe aussi des signaux de mort. Par exemple, lorsqu'un système administrateur ouvre un gestionnaire de processus pour fermer un programme qui a vérrouillé le signal pour le fermer est appelé un signal de mort. Le noyau reçoit le signal et (en fonction du type de signal) va demander au programme de s'arrêter ou va simplement enlever le processus de la mémoire et du CPU.

kernel - Le code dans ce dossier contrôle de noyau lui-même. Par exemple, si un débogueur a besoin de tracer un problème, le noyau peut utiliser le code provenant des fichiers sources de ce dossier pour informer les débogueur de toutes les actions du noyau. Il y aussi du code pour la gestion du temps. Dans le dossier kernel se trouve un autre dossier nommé "power". Du code dans ce dossier donne la possibilité à l'ordinateur de redémarrer, s'arrêter, et se mettre en veille.

lib - Le dossier library (librairie) contient le code pour les librairies du noyau, qui est un regroupement de fichiers dont le noyau aura besoin d'utiliser.

mm - Le dossier Memory Management (gestion de la mémoire) contient le code source pour gérer la mémoire. La mémoire n'est pas aléatoirement placé dans la RAM. Au lieu de cela, le noyau place les données soigneusement dans la RAM. Le noyau ne ré-écrit jamais de morceau de mémoire déjà utilisé ou qui contient des données importantes.

net - Le dossier réseau contient le code pour les protocoles réseaux. Ceci inclut du code pour IPv6 et Appletalk mais aussi le protocole Ethernet, wifi, bluethoot, etc... Aussi, le code pour gérer les pont réseaux et la résolution des nom DNS est dans ce dossier.

samples - Ce dossier contient des modèles de projets de modules en cours de développement. Mettons que l'on a besoin d'un nouveau module avec une caractéristique particulière, mais qu'aucun programmateur n'a annoncé vouloir travailler dessus. Et bien, ce genre de module va dans ce dossier. Cela permet aux nouveaux développeurs de noyau de piocher dedans un module qu'il voudrait développer.

scripts - Ce dossier contient les scripts nécessaires pour compiler le noyau. Il est plus raisonnable de ne rien changer dans ce dossier. Sinon il se pourrait que vous ne puissiez plus configurer ou construire le noyau.

security - Ce dossier contient le code pour les sécurité du noyau. Il est important de protéger le noyau des virus et des hackers(pirates?). Sinon le système Linux pourrait être endommagé. La sécurité du noyau sera le sujet d'un prochain article.

son - Ce répertoire contient le code des drivers son pour les carte audio.

tools - Ce répertoire contient des outils pour interagir avec le noyau

usr - Vous souvenez-vous que le fichier vmlinuz et d'autres fichiers similaires avaient été mentionnés dans l'article précédent ? Le code dans ces dossiers créé les fichiers après la compilation du noyau.

virt - Ce dossier contient les codes de virtualisation permettant aux utilisateurs de faire fonctionner plus d'un système. Il est différent de Xen (voir ci-dessus). Avec la virtualisation, le système d'exploitation "invité" agit comme n'importe quelle autre application dans le système d'exploitation Linux (système hôte). Avec un hyperviseur comme Xen, les deux systèmes d'exploitations gèrent le matériel ensemble et en même temps. Dans une virtualisation, le système fonctionne par-dessus du noyau Linux tandis qu'avec un hyperviseur, il n'y a pas de système "invité" et aucun des systèmes ne dépend du ou des autres.

Note: Ne jamais déplacer un fichier dans le dossier du noyau sauf si vous êtes certain de savoir ce que vous faites. Sinon la compilation pourrait se terminer par une erreur du genre "missing file".

La structure du dossier du noyau Linux est toujours restée relativement constante. Les développeurs du noyau ont fait quelque modifications, mais dans l'ensemble, cette organisation est la même dans toutes les versions du noyau. Le dossier des drivers garde aussi la même disposition. Nous parlerons des drivers du noyau prochainement.

Voilà voilà. Le prochain article devrait être fait soit d'ici la fin de la semaine soit la semaine prochaine.

Et je remercie énormément Yunero Kisapsodos de m'avoir grandement aidé dans la rédaction/traduction de cet article!
