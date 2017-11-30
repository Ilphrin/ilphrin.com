---
layout: post_kevin
title: Présentation de Gnome-pie
author: kevin
---

Gnome-pie est un petit logiciel fort sympathique. Il permet, par le biais d'un raccourcis tapé au clavier, de faire apparaître un disque de ses logiciels.

En fait le terme exact devrait être une « tarte » de logiciels. Puisque 'Pie' en anglais veut dire aussi bien disque que tarte. Mais d'après le développeur on parle plus généralement de tartes. (je le soupçonne d'être fondateur d'une multinationale alimentaire...)
<!--break-->
Bon voici clairement a quoi ressemble les tartes :

[Voir la démonstration](https://vimeo.com/30618179)

Pour l'installation, je vais honteusement recopier le tuto du site de Mr Schneegans:

## Installation par PPA (recommandé)

```
sudo add-apt-repository ppa:simonschneegans/testing
sudo apt-get update
sudo apt-get install gnome-pie
Installation par les sources
```

Avec gtk2 :

```
sudo apt-get install git build-essential libgtk2.0-dev libcairo2-dev libappindicator-dev libgee-dev libxml2-dev libxtst-dev libgnome-menu-dev valac cmake libunique-dev libbamf-dev libwnck-dev bamfdaemon
```

Avec gtk3 :

```
sudo apt-get install git build-essential libgtk-3-dev libcairo2-dev libappindicator3-dev libgee-dev libxml2-dev libxtst-dev libgnome-menu-3-dev valac cmake libunique-3.0-dev libbamf3-dev libwnck-3-dev bamfdaemon
```

Ensuite pour les deux cas vous n'avez plus qu'à télécharger Gnome-pie, le compiler et l'installer comme ceci :

```
git clone git://github.com/Simmesimme/Gnome-Pie.git
cd Gnome-Pie && ./make.sh
cd build && sudo make install
```

Ensuite, quelle que soit votre méthode d'installation, je vous recommande de le faire lancer au démarrage de votre session.

## Configuration/Possibilités de base

Au premier lancement plusieurs tartes sont déjà disponibles. Donc notamment les raccourcis clavier qui vont avec, voici plus ou moins ce que donnent ces raccourcis :

- __Ctrl+Alt+a__: 6 objets ; Redémarrer Déconnecter Arrêter ainsi que trois logiciel qui sont sur votre ordinateur (je ne me souviens plus desquels je les ais changés depuis longtemps).

- __Ctrl+Alt+b__: x objets ; Tous les dossier de votre répertoire personnel ainsi que les différents volumes montés.

- __Ctrl+Alt+Espace__: Représente les différents types de logiciels présents sur votre ordinateur ( Ceux qui sont dans votre menu de bureau par exemple Accessoire Internet Préférence Administration etc...)

- __Ctrl+Alt+w__: Les différentes options de fenêtre c'est-à-dire Réduire Agrandir Restaurer Fermer.

- __Ctrl+Alt+m__: Celui que j'utilise le plus fréquemment. Il correspond aux boutons de base de votre lecteur de musique. Lecture/Pause Précédant Suivant Stop.

- __Ctrl+Alt+q__: Redémarrer Arrêter Déconnecter.



Il y a deux moyens pour créer/éditer ses propres tartes :

- __Le mode graphique__: Dans le menu préférence de gnome-pie. Vous pouvez sélectionner les tartes existantes en cliquant sur l'un de ceux de la liste de gauche, puis en cliquant dans le vide sur la tarte montrée a droite pour en ajouter une. Là il ne vous reste plus qu'à taper la commande a lancer et a vous choisir un nom ainsi qu'une icône.

Vous pouvez aussi ajouter une tarte en cliquant sur l’icône + en bas a gauche de la fenêtre. Là il vous est demandé d'entrer un nom ainsi que d'appuyer sur la combinaison de touche nécessaire a l'ouverture de cette tarte. Vous pouvez dès lors y ajouter des applications.

Attention : Sur mon ordinateur la sélection d’icône provoque un crash du logiciel, peut-être que vous aurez plus de chances que moi, en attendant si c'est votre cas vous pourrez choisir l'icône avec la deuxième méthode que je vais vous présenter.



- __Le mode texte__: Vous pouvez aussi tout écrire a la main, en allant directement dans le fichier de config. L'avantage ? Si comme moi vous avez un problème avec les icône, vous pouvez les choisir en donnant le chemin de l’icône.

Chez moi le fichier de config se trouve dans : /home/chezmoi/.conf/gnome-pie/pies.conf

Vous devez normalement vous retrouver devant un fichier de type texte xml. Vous pouvez créer une tarte de la façon suivante :

 
```
<pie name="Multimédia" id="831" icon="stock_media-play" hotkey="Control+Alt+m"></pie>
```

Vous avez plusieurs choses bizarres dans ces lignes, je vais vous y décrire ce que fait chaque attribut :

* `<pie> </pie>` Correspond a la création d'une tarte avec une balise ouvrante et une fermante.

* `name="Multimédia"` Correspond au nom donné a la tarte, ici c'est Multimédia (plus quelques caractères pour gérer l'accent du ''é'' ).

* `id=831` Bon alors celui-ci je dois avouer que je ne saurais l'utiliser correctement. Je ne sais non plus comment il fonctionne (si quelqu'un peut me le dire d'ailleurs ce serait cool x) ).

* `icon="stock_media-play"` Là il vous est possible de choisir votre icône. Soit c'est une icône système auquel cas vous pouvez directement entrer son nom, ou alors vous écrivez le chemin (de préférence le chemin absolu) pour y accéder.

* `hotkey="Control+Alt+m"` Là il s'agit du raccourcis sur lequel appuyer pour ouvrir la tarte, je ne saurais expliquer comment savoir a quoi correspondent les caractères qu'il y a entre chacune des touches a entrer.

Vous pouvez aussi a l'intérieur d'une tarte mettre une nouvelle application. Les lignes ressemblent a ceci : (j'ai pris une icône de la tarte Multimédia)

```
<slice type="key" name="Piste Suivante" icon="stock_media-next" command="XF86AudioNext" quickAction="true"/>
```

Alors là à l'inverse des balises <pie> et < /pie> la balise < slice /> est dite orpheline, car elle se termine sur la même balise qui l'à commencé (on peut le voir notamment avec le '/' a la fin). Littéralement slice en français veut dire 'part' comme...part de tarte ! C'est bien fait n'est-ce pas ^^

Bon passons au découpage de cette balise :

* `type="key"` signifie que c'est une commande un peu spéciale. Généralement quand vous voudrez ajouter une part de tarte cela sera plutôt : type=''app'' .

* `name="Piste suivante"` Est le nom qui va s'afficher pour le bouton.

* `icone="stock_media-next"` Est la même chose que pour la balise <pie> .

* `command="XF86AudioNext"` Est la commande qui va être lancée. Vous pouvez écrire une commande comme vous le feriez dans un terminal.

* `quickAction="true"` Bon je dois avouer ne pas connaître grand chose non plus sur l'utilité de cet attribut, mais toutes les applications que j'ai ajouté se sont vues mettre l'attribut : quickAction="false" .

Personnellement je n'ai crée qu'un seule tarte nommée 'Jeux' dans laquelle j'ai mis....mes jeux !

Voici le lien sur site de Mr Schneegans: [http://www.simonschneegans.de](http://www.simonschneegans.de)

Bon et bien voilà je crois que j'ai fait le tour. Sur ce je vais vous souhaiter une bonne fin de journée, tout en espérant en avoir amadoué quelques uns ;P
