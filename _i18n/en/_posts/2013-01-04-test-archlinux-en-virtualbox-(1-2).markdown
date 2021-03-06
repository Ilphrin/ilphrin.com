---
layout: post_kevin
title: Test ArchLinux en VirtualBox ( 1/2 )
author: kevin
cover: archlinux.png
---

Récemment je me suis décidé à apprendre à utiliser et à comprendre le fonctionnement de Linux. Du coup j'ai voulu me tourner vers une distribution qui m'offrirait cette possibilité dès son installation. Je me suis rapidement laissé dire que ArchLinux conviendrait à mes besoins. Mais comme mon laptop ne possède pas une capacité de stockage extraordinaire (20 Go...) je l'ai mis sur un disque dur externe sous virtualbox. En lui accordant une place de 20Go, ce qui devrait largement suffire étant donné que je ne vais rien installer de superflu sur cette machine virtuelle. Je me suis aussi dit que ça pourrait en intéresser quelques-uns si je décrivais tout ce que j'avais fait dans un article. Néanmoins il y a trop de choses à faire, et je serais obligé de découper cet article en deux (sinon ça fait quand même un peu gros et lourd à la fin...)
<!--break-->
Voilà la majorité des sites sur lesquels je me suis basé pour cette installation:
 
* [Wiki Archlinux](http://mintic.blog4ever.com/wiki.archlinux.fr/Installation)  <-- Surtout celui-ci, en fait cet article ne fera que détailler cette page la plupart du temps
* [Wiki ArchLinux - Xorg](http://mintic.blog4ever.com/wiki.archlinux.fr/Xorg)  <-- Pour la suite (la deuxième partie de l'article)
* [ArchLinux Virtualbox](https://wiki.archlinux.org/index.php/VirtualBox#Arch_Linux_guests) <-- Les additions invités de virtualbox

Pour cet exemple j'ai téléchargé le dernier iso d'ArchLinux 32bits et j'ai suivi les étapes sur le wiki pour le mettre sur une clé USB bootable.

Pour tous les fichier à créer/éditer, j'utilise le logiciel nano, qui est mon préferé quand il s'agit de s'occuper des fichiers en ligne de commande.

 
##Installation

On lance la machine virtuelle (je ne décris pas ici la création d'une machine virtuelle, normalement une rapide recherche sur le net vous permet d'en savoir largement sur l'utilisation de Virtualbox).


Au démarrage on appuie sur F12 pour sélectionner un démarrage précis (j'ai eu un moment de doute et je ne sais plus si j'ai démarré sur floppy ou sur CD/DVD désolé...)

Ensuite normalement arrive le menu de démarrage Live. On prend : BOOT ArchLinux
Là on à un défilement de message incompréhensibles... Puis on arrive sur une invite de commande connecté sous root.
Commencez par mettre un clavier français:

	loadkeys fr-pc
 
##Partitionnement
 
D'après ArchlinuxFR on devrait faire 4 partitions, mais j'omets celle correspondante au swap, ce qui m'en fait seulement 3.
 
Partitionemement grâce à fdisk avec:

	fdisk /dev/sda

Faites ensuite comme je l'ai fait (avec vos valeur pour la taille des différentes partitions si vous en avez fais des différentes):

	Command(m for help) : n              
	Parition type:                                
	p  primary                                  
	e  extended                                
	Select(default p): p                       
	Partition number(1-4, default1): 1
	First sector (default 2048): 2048  
	End sector: +100M                      
 
Puis par le même procédé on entre pour chacune des partitions:

    p              
    2              
    206848    
    +12288M             (12Go)

    p              
    3              
    25372672
    (laisser vide pour prendre toute la place restante)
    Command(m for help): w  (Pour quitter et enregistrer les modifications)

##Formatage
    
On devrait donc avoir maintenant nos 3 partitions, on va les formater pour qu'elle soient en ext4 (sauf /dev/sda1 qu'on mettra en ext2). Donc pour formater tout ça on va faire :

mkfs.ext2 /dev/sda1 
mkfs.ext4 /dev/sda2 
mkfs.ext4 /dev/sda3
 
Attendre que chacune des commandes se termine avant de faire quoi que ce soit/passer à la suivante. 

##Montage des partitions

On monte maintenant toutes les partitions pour qu'elles correspondent au dossier que l'on veut, c'est-à-dire:

	mount /dev/sda2 /mnt                  # Racine
	mkdir /mnt/{boot,home}              # Création des deux répertoires pour les points de montages restants
	mount /dev/sda1 /mnt/boot          # Répertoire de boot
	mount /dev/sda3 /mnt/home        # Répertoire perso

Au final au devrait donc avoir des partitions ressemblant à ça: 

	/home : ~8Go --> /dev/sda3        ext4 Monté dans /mnt/home
	/ : 12Go --> /dev/sda2                 ext4 Monté dans /mnt   
	/boot: 100Mo --> /dev/sda1         ext2 Monté dans /mnt/boot  

##Connexion réseau

Normalement si on est en connexion filiairele pc est automatiquement connecté au réseau. Cependant étant donné que nous sommes sous une machine Virtualbox ce n'est pas toujours le cas.
Il faut lancer la commande suivante afin de démarrer le démon qui gère la connexion filiaire au réseau eth0:

	dhcpd etho0         (A lancer avec "sh" et non "bash" !) 

##Installation du système de base

On peut changer le fichier /etc/pacman.d/mirrorlist pour obtenir le miroir le plus proche mais ce n'est pas obligatoire. Donc on va lancer l'installation
directement même si ça prend un peu plus de temps. On fait ça grâce à la commande:

	pacstrap /mnt base


Là il faut laisser faire quelques minutes/heures selon votre connexion. Il se peut qu'il y ait une demande de confirmation de la part de l'utilisateur.
 
Ensuite il faut installer base-devel pour l'utilisation des dépôts d'utilisateur d'Arch avec la commande;
 
	pacstrap /mnt base-devel
 
Là aussi il faut attendre quelques minutes que le téléchargement/installation se fasse, j'ai eu droit à une demande de confirmation qui s'est...confirmée toute seul O_ô. Bon passons l'éponge pour cette fois-ci...

Enfin, pour terminer avec ces installations dans tous les sens, il faut installer le chargeur de démarrage. La plupart du temps on choisit GRUB ou LILO, mais la documentation se base sur l'installation de syslinux. On va donc suivre leur exemple avec:

	pacstrap /mnt syslinux

L'installation devrait être beaucoup plus rapide. Et bien entendu...une auto-confirmation de la part de pacstrap! Faudrait que je pose la question sur les forums quand même.
 
##Configuration

Il faut générer un fichier de configuration /etc/fstab. Il contiendra toutes les informations concernant le partitionnement du/des disque(s) et leur arborescence.
 
	genfstab -U -p /mnt >> /mnt/etc/fstab
 
Je ne suis pas sûr de la signification des paramètres envoyés à genfstab (-U  et -p). Vous pouvez lancer un genfstab -h pour voir leur signification si vous arrivez à mieux comprendre que moi ^^"
Le symbole de flux >> permet d'enregistrer la sortie de la commande dans un fichier spécifié (ici /mnt/etc/fstab,  il y aura donc un fichier nommé fstab avec comme contenu la sortie de la commande à gauche du symbole de flux). Si le fichier existe déjà le contenu sera ajouté à la fin.
 
Ensuite on va démarrer dans un nouveau système, on appelle cela Chrooter. On utilise la commande suivante:

	arch-chroot /mnt

On démarre un nouveau système avec comme racine l'argument spécifié après la commande arch-chroot. De ce fait on "enferme" un système dans un autre, le premier n'ayant donc plus accès aux dossiers supérieurs (on peut pas aller au-dessus de la racine /).

Donc ici on démarre un nouveau système dans /mnt qui contient tout ce dont on a besoin pour la suite de la configuration (puisque le(s) disque(s) et leur(s) partitions sont dans ce dossier).

On va ensuite donner un nom à la machine. Pour cela on va modifier le fichier /etc/hostname avec par exemple la commande nano (voir la documentation pour l'utilisation de cet outil). A ma connaissance on peut donner celui que l'on veut.

Le fichier étant vide, et vu qu'il n'y a aucune information spécifique sur le wiki d'ArchLinux, j'en déduis qu'il suffit simplement d'écrire le nom que l'on veut. Pour ma part je me contente d'un "archiso".
 
Ensuite petite modification du fichier /etc/locale.gen pour définir la langue du système à utiliser et sous quel format. Pour le choisir il faut dé-commenter (enlever le #) la ligne que l'on veut. J'ai enlevé celui de la ligne "fr_FR.UTF-8 UTF-8". Puis on lance la commande "locale-gen" pour enregistrer ce paramètre et générer le locale correspondant.
Puis on créé le fichier /etc/locale.conf et on y met:
 
	LANG="fr_FR.UTF-8"
 
Pour que le paramètre soit celui enregistré par défaut. Il se peut que ce paramètre ne soit pris en compte qu'au redémarrage de la machine. Pour le faire pour la session courante on lance la commande:

	export LANG=fr_FR.UTF-8
 
On édite ensuite le fichier /etc/vconsole.conf pour la configuration du type de clavier et l'on y met:
 
	KEYMAP=fr-pc
 
On règle maintenant l'heure locale avec un lien à /etc/localtime vers le fuseau horaire correspondant. Ici:

	ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime
 
Si le votre est différent, je vous conseille de fouiller le répertoire zoneinfo pour y trouver le votre.
 
On va ensuite créer les ramdisks. Ne me demandez pas une définition je ne sais pas encore exactement ce que c'est, simplement qu'il sert pour l'image du noyau linux.
On configure ensuite le chargeur de démarrage pour qu'il...démarre x) Plus exactement on lance l'installation automatique sur le MBR (Master Boot Record) :
 
	syslinux-install_update -iam

Ça devrait se faire assez rapidement en théorie.  
Allez on à presque terminé! Maintenant on va définir un mot de passe pour le compte root avec la commande "passwd" (sans les guillemets"), et l'on entre ensuite le mot de passe que l'on veut (Deux fois pour vérification).
Pour finir, on va démonter toutes les partitions avec un :

	umount /mnt/boot /mnt/home /mnt
 
Vous pouvez maintenant redémarrer/éteindre votre ordinateur (virtuel) en toute tranquillité!
 
Et voilà on à terminé! Terminé? En fait pas exactement, mais ceci est la fin de la première partie de cet article. Vous pouvez continuer par-vous même par le biais du site ArchLinux. Notamment pour la création d'un utilisateur dont je ne donnerais pas d'explication ici.
Dans la deuxième partie je m'occuperais de l'installation du serveur Xorg et d'un environnement graphique.

Merci d'avoir pris le temps de lire cet article,  n'hésitez pas à me dire si vous avez des problème ou des suggestions. Sur ce je vous dis à bientôt et bonne fin de journée!
