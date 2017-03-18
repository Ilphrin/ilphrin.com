---
layout: post_kevin
title: "Linux Kernel: Sécurité et Configuration (1ère partie)"
author: kevin
cover: circuit.jpg
---
Salut tout le monde!

Je vous présente aujourd'hui la suite (qui s'est fait attendre) de traduction d'article sur le noyau Linux. Pour rappel vous pourrez retrouver ces articles sur [linux.org](linux.org), ainsi que tout un tas d'autres articles et tutos vraiment super intéressants, je vous conseille vraiment d'y aller! ( Seul bémol: Faut aimer l'anglais. ^^) D'ailleurs on peut voir sur ce site qu'il y a une vingtaine d'articles qui continuent celui-ci sur le noyau Linux, pour vous dire à quel point j'ai pris du retard! Pour me rattraper j'ai fais deux articles en un ici ;)

Et petit détail que je n'avais pas dis au début, quand vous lisez le pronom "je" dans ces articles, ce n'est pas moi mais l'auteur véritable de l'article qui est ciblé (C'est-à-dire Devyn Collier Johnson).

[Article précédent](/2013/07/22/Linux-Kernel-:-Code-Source.html)

Le noyau Linux est le cœur de tous les systèmes GNU/Linux. Si du code malicieux endommage ou prend le contrôle d'un élément du noyau, le système entier peut être sévèrement endommagé, des fichiers peuvent être supprimés ou corrompus, des informations privées peuvent être volées, etc... Il est clairement dans le meilleur intérêt de l'utilisateur de garder un noyau sécurisé. Heureusement, Linux est un système très sûr grâce à son noyau et a sa sécurité. Il y a moins de virus sous Linux que sous Windows, même en proportion du nombre d'utilisateurs. (C'est pourquoi beaucoup d'entreprises utilisent Linux pour gérer leur serveur.) Cependant, ce n'est pas une excuse pour négliger la sécurité du noyau. Linux possède de nombreuses fonctionnalités et programmes, mais seuls les Linux Security Modules (LSM) et autres système de sécurité du noyau seront abordés dans cet article.
<!--break-->
[AppArmor](http://fr.wikipedia.org/wiki/AppArmor) (Application Armor) est un module de sécurité crée à l'origine par Immunix. Depuis 2009, Canonical maintient le développement du code ( Novell s'en est occupé après Immunix et avant Canonical). Ce module de sécurité à été dans le noyau principal depuis sa version 2.6.36. AppArmor restreint les possibilités des programmes. AppArmor utilises les chemins de fichiers pour vérifier les restrictions de programme. Beaucoup d' administrateurs Linux affirment que AppArmor est le module de sécurité le plus facile à configurer. Cependant, plusieurs utilisateur Linux pensent que ce module est moins sécurisé que ses alternatives.

[Security-Enhanced Linux](http://fr.wikipedia.org/wiki/SELinux) (SELinux) est une alternative à AppArmor, crée par la National Security Agency (NSA). SELinux à été ajouté au noyau depuis la version 2.6. Il opère sur les outils de l'espace utilisateur du noyau. SELinux donne aux programmes (principalement les démons et les applications de serveur). SELinux peut aussi être utilisé pour contrôler les droits de l'utilisateur. Il n'utilise pas les chemins de fichier comme AppArmor, à la place SELinux utilise le système de fichiers pour noter les exécutables quand il vérifie leurs permissions. C'est ce qui fait que SELinux ne peut pas apporter de protection partout, c'est-à-dire tous les systèmes de fichiers, tandis que AppArmor le peux.

Note: Un démon (ou daemon en anglais, prononcer day-mon) est un programme qui tourne en tâche de fond.

Note bis: Bien que AppArmor, SELinux, et d'autres soient dans le noyau, seulement un module peut être actif à la fois.

[Smack](http://fr.wikipedia.org/wiki/Smack) est une autre possibilité de module de sécurité. Smack fait partie du noyau Linux depuis sa version 2.6.25. Il est supposé offrir plus de sécurité que AppArmor est être plus facile à configurer que SELinux.

[TOMOYO](http://en.wikipedia.org/wiki/TOMOYO_Linux), un autre module de sécurité, a été intégré au noyau depuis la version 2.6.30. L'objectif principal de TOMOYO est d'analyser le système à la recherche de failles de sécurités.

AppArmor, SELinux, Smack et TOMOYO forment les quatre modules LSM standards. Les LSM ont une sorte de formulaire de listes d'entités et de ce qu'ils sont permit ou non de faire.

Yama est un nouveau module de sécurité du noyau Linux. Il n'est pas encore considéré comme un module standard LSM, mais il pourrait à l'avenir être le cinquième. Yama utilises les mêmes principes de fonctionnement que les autres modules.

["grsecurity"](http://fr.wikipedia.org/wiki/Grsecurity) est un groupe de patchs de sécurité pour améliorer la sécurité du noyau Linux. La plupart de ces patchs sont liés aux connections à distances et aux dépassement de tampons. L'un des composant intéressant est PaX. PaX donne au code en mémoire le minimum de privilège possible. Par exemple, un programme en mémoire est marqué comme protégé en écriture. Ce qui est logique si on y pense, pourquoi un programme en train d'être exécuté aurait besoin d'être ré-écrit alors qu'il est toujours en mémoire? Maintenant, du mauvais code ne peut pas changé un programme en cours d'exécution. Un dépassement de mémoire s'effectue lorsqu'un programme écrit des données en mémoire et dépasse sa plage de mémoire pour aller écrire dans la mémoire d'autres applications. Quand PaX est actif, il aide à prévenir ces dépassements de tampon/mémoire car le programme n'aura pas le droit d'écrire dans l'espace des autres programmes.

Le Linux Intrusion Detection System LIDS) est un patch de sécurité de noyau qui ajoute les fonctionnalités du Mandatory Access Control (MAC). Ce patch agit que un module LSM.

[Systrace](http://en.wikipedia.org/wiki/Systrace) est un outil qui réduit et contrôle les accès des application au système de fichier et aux appels systèmes. Les appels systèmes sont des requêtes faites au noyau. Par exemple, quand un éditeur de texte écrit sur le disque-dur, l'application crée un appel système au noyau pour écrire sur le disque-dur.

Ce sont des éléments très important dans le système de sécurité du noyau Linux. Ces modules et patchs permettent de se protéger de programmes malicieux voulant attaquer le noyau. Sans ces fonctionnalités, le système Linux serait un système d'exploitation peu sûr.

Maintenant que nous avons une meilleure compréhension du noyau, nous pouvons nous attaquer au plus gros: configurer et compiler le code. La configuration prend énormément de temps. Les outils de configuration posent beaucoup de questions et permettent aux développeurs de modifier chaque aspect du kernel. Si vous n'êtes pas sûr d'une de vos modification, mieux vaut laisser la valeur par défaut proposée par l'outil de configuration. Cette série de tutoriels permettra de comprendre l'ensemble du processus de configuration d'un noyau Linux.

Pour configurer le code, ouvrez un terminal et déplacez-vous dans le répertoire du code source du noyau. Il existe plusieurs moyen de configurer le code, selon la préférence pour l'interface de configuration:

* make config - Interface en mode texte (celle utilisée couramment).
* make menuconfig - Mode texte avec des menus colorés et des bouton radios. Cette option permet aux développeur de restaurer une configuration précédente. -ncurses (ncurses-devel) nécessite d'être installé.
* make nconfig - Un autre mode texte avec des menus colorés. curses (libcdk5-dev) doit être installé.
* make xconfig - Interface Qt/X-windows. Qt doit être installé.
* make gconfig - Interface Gtk/X-windows. Gtk doit être installé
* make oldconfig - Mode texte qui prend les réponses par défauts en fonction d'un fichier de configuration local.
* make silentoldconfig - Même chose que le mode 'oldconfig' mais les réponses du fichier de configuration ne sont pas montrées.
* make olddefconfig - Comme 'silentoldconfig' si ce n'est que plusieurs questions sont complétées automatiquement par leur valeur par défaut.
* make defconfig - Cette option créée un fichier de config en utilisant les paramètre de l'architecture du système présent.
* make ${PLATFORM}_defconfig - Crée un fichier de config en utilisant les valeurs de arch/$ARCH/configs/${PLATFORM}_defconfig.
* make allyesconfig - Cette option crée un fichier de config qui répond 'yes' à toutes les question possible.
* make allmodconfig - Cette option créée un fichier de configuration qui va prendre le plus possible chaque partie du kernel comme module.

NOTE: Le code du noyau Linux peut être inséré dans le noyau lui-même ou être utilisé comme module. Par exemple, les utilisateurs voulant utiliser les drivers Bluetooth comme module (séparément du noyau), l'ajoutent au noyau, ou n'ajoutent rien du tout. Quand le code est ajouté au noyau, celui-ci nécessite plus de mémoire RAM et le temps de boot peut prendre plus de temps. Cependant, les performances du noyau seront plus grandes. Si le code est ajouté comme module, celui-ci restera sur le disque-dur jusqu'à ce qu'il soit nécessaire de l'utiliser. Ensuite seulement le module est chargé dans la RAM. Cela permet de réduire la consommation de RAM du noyau et de réduire le temps de démarrage, mais ses performances seront plus faible car le noyau et les modules seront repartis dans la RAM. L'autre possibilité est de ne pas ajouter de code. Par exemple, un développeur kernel sait que tout les systèmes n'utilisent pas les périphériques Bluetooth. Ainsi donc, le driver n'est pas ajouté au noyau. Cela améliore les performances du noyau. Cependant, si un utilisateur veut utiliser un périphérique Bluetooth plus tard, il aura besoin d'installer le module Bluetooth ou de mettre à jour tout le noyau.

* make allnoconfig - Cette option créée un fichier de configuration qui n'ajoute que l'essentiel du code, en répondant 'no' au plus de question possible. Ceci peut parfois rendre le noyau non fonctionnel pour le système sur lequel il a été compilé.
* make randconfig - Cette option prend des choix aléatoires pour le noyau.
* make localmodconfig - Cette option créée un fichier de configuration basé sur la liste courante de modules et la configuration du système.
* make localyesconfig - Cette commande met toutes les options des modules à 'yes', la majeure partie du kernel ne sera pas dans des modules.

Astuce: Il est préférable d'utiliser "make menuconfig" car l'utilisateur peut sauvegarder sa "progression" dans la configuration. "make config" ne permet pas cela.

#Configuration

La plupart des développeurs choisissent "make menuconfig" ou l'un des menus graphique. Après avoir entré la commande voulue, la première question demande si le noyau qui va être construit sera en 64 bits ou non. Les choix sont "Y", "n" et "?". Le point d'interrogation permet de détailler la question, "n" de répondre non et "Y" de répondre oui. Nous choisirons oui ici. Entrez "Y" (attention à la casse, pensez bien à la majuscule).

NOTE : Au début de l'écriture de cette série d'article, j'ai utilisé "make config". J'ai plus tard utilisé "make menuconfig" (ncurses). "make config" est linéaire et toutes les questions sont posées les unes après les autres pendant que l'interface ncuses est un menu dérivé. Si vous utilisé une interface de configuration qui utilise des menus, commencez au premier élément du menu et continuez en descendant dans chaque menu et sous-menu. Cela vous permettra de suivre ces articles correctement le long de la configuration de votre kernel.

NOTE BIS: Si le noyau est compilé sur un système 32 bits, l'outil de configuration vous demandera si le noyau devra être en 32 bits. La première question est différente sur d'autre processeurs.

La ligne suivante affiche "Cross-Compiler tool prefix (CROSS_COMPILE) []." Si vous ne fait pas de Cross-Compiling, appuyez sur Enter. Si vous êtes en train de le faire, entrez quelque chose comme "arm-unknown-linux-gnu-" pour les systèmes ARM ou "x86-64-pc-linux-gnu-" pour un système 64 bit. Il y a de nombreuses autres commandes possibles pour les autres types de processeurs, mais la liste serait bien trop longue. Une fois que le développeur sait pour quel type de processeur il veut compiler, il pourra aisément chercher la commande nécessaire pour ce processeur.

NOTE: Le [cross-compiling](http://en.wikipedia.org/wiki/Cross_compiler) est le fait de compiler du code pour d'autres processeurs. Par exemple, un système Intel qui fait du  Cross-compiling de code le fera pour d'autres processeurs qu' Intel. Donc ce système pourra compiler pour un processeur ARM ou AMD par exemple.

NOTE BIS: Chaque choix changera quelle questions viendront après et quand elles apparaitront. Je vais écrire chacun de mes choix pour que le lecteur potentiel de cet article pour suivre la méthode de configuration sur son propre système.

Ensuite, on peut voir "Local version - append to kernel release (LOCAL VERSION) []". Ici on peut donner un numéro de version spécial ou un nom à son kernel personnalisé. Je vais entrer "LinuxDotOrg". La version du noyau est maintenant "3.9.4-LinuxDotOrg". Ensuite, l'outil de configuration demande "Automatically append version information to the version string (LOCAL VERSION_AUTO) [N/y/?]". Si une arborescence de version git est trouvée, le numéro de révision sera ajouté. Dans cet exemple nous n'utilisons pas git, je réponds donc non. Vous vous souvenez de vmlinux et autres fichiers similaires? Et bien la question suivante demandera quel format de compression devra être utilisé. On peut choisir l'une des cinq propositions. Les choix sont:

1. Gzip (KERNEL_GZIP)
2. Bzip2 (KERNEL_BZIP2)
3. LZMA (KERNEL_LZMA)
4. XZ (KERNEL_XZ)
5. LZO (KERNEL_LZO)

Gzip est le format par défaut, j'entre "1" et je confirme. Chaque format de compression possède plus ou moins de taux de compression que ses concurrents. Un plus grand taux de compression signifie un fichier plus petit, mais plus de temps sera nécessaire pour le décompresser, et inversement.

Maintenant le logiciel nous affiche "Default hostname (DEFAULT_HOSTNAME) [(none)]". Le nom d'hôte peut être configuré. Généralement ceci est laissé en blanc, ainsi c'est l'utilisateur final de Linux qui pourra configurer le sien.

Ensuite on peut activer ou désactiver l'utilisation de la mémoire swap. Linux utilise une partition séparée appelée "swap" qu'il utilise comme mémoire virtuelle. C'est équivalent à la mémoire paginée de Windows. Fréquemment on répond oui à cette question "Support for paging of anonymous memory (swap) (SWAP) [Y/n/?]".

La ligne suivante "System V IPC (SYSVIPC) [Y/n/?]" demande si le kernel doit supporter IPC. IPC, qui signifie Inter Process Communication, permet aux processus de communiquer et de se synchroniser. Il est préférable d'activer IPC, sinon de nombreuses applications risquent de ne pas fonctionner. Répondre oui à cette question entrainera l'outil de configuration à demander 'POSIX Message Queues (POSIX_MQUEUE) [Y/n/?]". Cette question sera posée uniquement si vous avez activé IPC. Le POSIX Message Queues est une file de messages ( une sorte de communication inter-processus) où chaque message possède un niveau de priorité. Le choix par défaut est oui. Appuyer sur Entrée pour prendre le choix par défaut (indiqué par le caractère en majuscule).

Ensuite, "Open by fhandle syscalls (FHANDLE) [Y/n/?]" demande si les programmes pourront utiliser le gestionnaire de fichier plutôt que les noms de fichiers quand le système de fichiers aura besoin d'effectuer une opération. Par défaut la réponse est oui.

Parfois, selon les choix du développeur, certaines questions seront automatiquement complétées. Par exemple, la question suivante "Auditing support (AUDIT) [Y/?]", est répondue par un oui sans demander à cause des choix précédents. Le support de l'audit permet de faire des logs sur les accès et les modifications de tous les fichiers. La question suivante parle aussi d'audit: "Enable system-call auditing support (AUDITSYSCALL) [Y/n/?]". Si il est activé, tous les appels système sont enregistrés dans les logs. Si le développeur a besoin de performance, alors il vaudrait mieux désactiver le plus possible de fonctions d'audit et ne pas y ajouter au noyau. Certains peuvent activer ces option pour des questions de sécurité. Nous choisirons non pour cette question. Ensuite nous avons "Make audit loginuid immutable (AUDIT_LOGINUID_IMMUTABLE) [N/y/?]", qui demande si les processus peuvent changer leur loginuid (LOGIN User ID). Si activée, les processus dans l'espace utilisateur ne pourront pas changer leur loginuid. Pour des questions de performances, nous désactiverons cette fonctionnalité.

NOTE: Si vous utilisez l'outil à l'aide de la commande "make config", les questions dont les réponses ont été données automatiquement par l'outil de configuration seront affichées, mais leur réponses ne pourront être modifiées. Si vous utilisez "make menuconfig", vous ne pourrez changer le choix quel que soit le bouton pressé. De toute façon, changer ces options ne servirait pas à grand chose car un choix précédent à fait qu'il est nécessaire que cette question-là soit répondue d'une manière précise.

Dans le prochain article, nous configurerons le sous-système IRQ et les choix qui suivent.
