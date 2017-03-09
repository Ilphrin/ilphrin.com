---
layout: post_kevin
title: Passage de Skype à Ekiga
author: kevin
cover: micro.jpg
---

Salut tout l'monde!

Ça faisait un moment que je n'avais pas écrit. La cause: Un manque de temps effroyable. Entre les cours, les activités extérieures et deux trois occupations je n'ai plus le temps de rien faire. Mais bon voilà après une longue absence je reviens pour vous parler d'une alternative à Skype qui est déjà bien connue, répondant au nom de [Ekiga](http://ekiga.org/).
<!--break-->
Cela faisait un moment que je me disais qu'il fallait que j'enlève Skype de mon ordinateur. Il est un peu lourd, les notifications sonores sont vraiment moches sur mon pc, et tout récemment à l'acquisition de ma nouvelle webcam je me suis rendu compte que quand je voulais la configurer avec [guvcview](http://doc.ubuntu-fr.org/guvcview), et bien Skype n'était pas content et faisait planter ma session. Ce qui est tout de même gênant car ma caméra permet de faire du 720p avec une luminosité et des couleurs plus qu'acceptable, et Skype me réduit tout ça à du 320x260 et des bandes de couleurs.

Soit, il ne me restait qu'à trouver un autre logiciel pouvant le remplacer, et essayer de faire venir mes contacts dessus, ce qui n'est pas chose aisée quand le monde entier est habitué à ce seul Skype. A bout d'environ 5 secondes de recherches je trouve mon bonheur. Ekiga est un logiciel de visioconférence sous licence GPLv2 et multiplateforme, qui permet de gérer l'appel Pc à Pc, Pc à téléphone, ainsi que la messagerie instantanée, exactement ce que je cherche somme toute.

Je lance donc l'installation avec le gestionnaire de logiciels de Linux Mint, et tout de suite un assistant de configuration apparait pour m'aider à configurer mon premier compte en 9 étapes. Ekiga nous demande d'abord de saisir Nom et Prénom, ou son pseudo si l'on veut apparaitre avec quelque chose d'un peu personnalisé aux autres contacts. Ensuite après une brève explication sur l'utilisation du [SIP](https://fr.wikipedia.org/wiki/Session_Initiation_Protocol) et du [H323](https://fr.wikipedia.org/wiki/H.323), Ekiga nous invite à créer un compte SIP par le biais de son site, ce que j'ai fais dans mon cas mais l'on peut très bien sauter cette étape si l'on possède déjà un compte avec un autre service en cochant la case en bas de la fenêtre.

![Ekiga](/images/ekiga1.png  "ekiga1.pnh")

L'inscription sur le site ekiga.net se fait comme n'importe quel autre compte.  Si ce n'est qu'il y a l'adresse ekiga à prendre en compte (ce n'est pas celle-ci qui faut indiquer à la 4e étape de la configuration de compte). Je n'ai pas fait la configuration Pc-To-Phone parce que ce n'est pas pour ça que je l'ai installé, et je ne pense pas avoir à m'en servir donc je l'ai passée.  Pour ce qui est du type de connexion et des périphériques audio je conseille de laisser tout par défaut au début, et si ça ne marche vraiment pas à ce moment-là vous pourrez toujours revenir configurer tout cela. Pareil pour le périphérique d'entrée vidéo, ce n'est utile que si vous avez une caméra sinon cela ne sert à rien d'y toucher. (Note: Si vous en avez une de branché, sélectionnez-la maintenant sinon ce sera l'autre qui sera prit par défaut, qui est une icone mouvante qui se balade à la place du cadre de l'image de votre caméra)

Voilà après un récapitulatif des paramètres vous pouvez cliquer sur Appliquer pour terminer la configuration! Si tout s'est bien passé maintenant il vous reste à ajouter des contacts. C'est là que l'adresse Ekiga est utile! Car c'est elle qu'il faut indiquer dans la fenêtre d'ajout de contact. La case Nom peut être remplacé par ce que vous voulez, c'est vous qui choisissez le nom par lequel cette personne apparaitra dans votre liste de contact ou dans vos discussions!

Bon pour tout vous avouer certaines choses ne marchent pas encore correctement, mais il faudrait que j'essaie avec d'autre personnes pour être certain. Par exemple je reçoit bien la flux vidéo et audio de mon contact (moi sur un Linux Mint 16 et mon contact sur un Windows 8), le son de micro lui est bien envoyé et je me vois bien moi-même en petit avec ma caméra mais mon contact ne me voit pas.

Voilà j'espère que ce court article vous aura plu, n'hésitez pas à me dire si certaines explication sont incorrecte/incompréhensible/mal dite.

Sur ce, bonne journée et amusez-vous bien!
