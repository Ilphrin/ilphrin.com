---
layout: post_kevin
title: "C'était: Le Hackaton MesInfos à Lyon"
author: kevin
category: planet
serie: cetait
cover: mesinfos.png
---

Bon pour commencer l'explication il faudrait parler de CozyCloud. Pour ceux qui ne savent pas, CozyCloud est un outil de cloud (j'ai l'impression de rien dire) personnel. CozyCloud fonctionne comme un serveur sur lequel on utilise des applications. Applications qui sont trouvable soit sur le marketplace officiel, et qui contient une vingtaine d'applications, soit sur un dépot Github quelconque. Ces applications peuvent être sur tout et n'importe quoi. Mais l'interêt consiste surtout à pouvoir être le seul à posséder ses données, car CozyCloud est fait pour être auto-hébergé.

<!--break-->

![Cozycloud](/images/cozy_01.png)

C'est-à-dire que vous pouvez facilement (moyennant quelques connaissances techniques quand même) installer un CozyCloud chez vous sur un serveur personnel. Du coup vous disposez d'un super outil de cloud, mais vous avez la main sur ce qui sort et qui rentre puisque c'est à vous ;)

Depuis plusieurs mois maintenant, CozyCloud à travaillé avec la Fing, un think tank dans le domaine de la transformation numérique (et pas digital, n'est-ce pas), sur le projet MesInfos. MesInfos propose aux utilisateurs de reprendre le contrôle de leurs données, et ce à travers un concept de "Self Data". Pour comprendre ce terme, je vais simplement citer MesInfos: Le Self Data, c’est devenir l’acteur de ses données personnelles. Ne plus se contenter de les produire pour que d’autres les exploitent, mais bien récupérer le contrôle de celles-ci pour les utiliser à ses propres fins. Le Self Data peut ainsi se définir comme « la production, l’exploitation et le partage de données personnelles par les individus, sous leur contrôle et à leurs propres fins ».

MesInfos à tissé des liens partenariaux avec des entreprises pour que celles-ci fournissent un moyen à leur utilisateurs de voir les données récoltés sur leur personne. On va pouvoir, par exemple, récupérer ses factures EDF, ou dans une tout autre mesure récupérer ses commits sur Github. La palette de possibilités est assez large et ne dépend que du nombre d'entreprises partenaires, mais on a déjà un aperçu sur le site de MesInfos rubirques [partenaires](http://mesinfos.fing.org/partenaires/).

Dans CozyCloud on retrouve donc une nouvelle application qui s'appelle My Accounts (Mes comptes en français je suppose, j'ai mon pc en anglais du coup je ne saurais dire). Dedans on va pouvoir se connecter à un service en entrant ses identifiants comme si on se connectait à ledit service, et une fois que c'est fait CozyCloud récupère automatiquement et périodiquement vos données, qui finissent je le rappelle dans votre espace CozyCloud, aucune donnée ne sors de chez vous.

En brut il n'y a pas grand chose d'utile à ces données, mais l'interêt va consister ensuite à créer des applications CozyCloud qui vont utiliser intelligemment ces données. Et c'est enfin le moment où je parle du sujet de cet article: Le Hackaton MesInfos qu'il y a eu une semaine plus tôt au Tubà de Lyon, du Vendredi soir au Dimanche soir.

En un week-end il fallait imaginer une utilisation des données de MesInfos dans CozyCloud à travers une application. Les critères de validations sont sur le nombres de services sur lequelles nous prenons des données, la pertinence du projet, et l'état d'avancement à la fin du weekend.

Il fallait tout d'abord composer les groupes. Autant dire que je ne connaissais presque personne à part les autres étudiants d'Epitech présents à cet événement. J'ai donc rejoint une personne qui avait présenté son idée de projet lors des présentation. Nous avons formé un groupe complet de 6 personnes aux compétences très diverses.

Nous étions 3 étudiants d'Epitech dans le groupe (moi seul 3e année), les autres avaient des activités qui n'avaient aucun rapport (j'ai oublié parce que je suis un poisson rouge). Le projet s'appelait BeGreen. L'idée était d'utiliser les données sur la consommation de l'utilisateur, et de lui présenter son empreinte écologique d'une part, et de l'inciter ensuite à l'améliorer d'autre part grâce à la gamification.

![BeGreen Logo](/images/begreen.png){: .medium}

Le Hackaton s'est déroulé au Tubà à Lyon, c'est un lieu que je ne connaissais absolument pas. (Alors que je passe deux fois par jour devant en allant au bahut...) C'est un endroit où l'on peut essayer des services et projet innovant, ou même venir avec son idée de projet pour l'aider a le développer.

Donc il y avait tout ce beau monde (CozyCloud, MesInfos, la Fing qui est a l'origine de MesInfos, le Tubà) des représentant du Grand Lyon et de ce qui touche à l'Open Data (comme Mme [Nathalie VernusProst](https://twitter.com/n_vernus_prost)), afin de nous aider et conseiller.

Mis à part un chef de projet qui nous a fait perdre beaucoup de temps à monopoliser le temps de parole et un léger conflit le concernant, le weekend s'est très bien déroulé! En plus il y avait un très bon couscous (si ya des orgas qui lisent mon article, merci pour le couscous j'en ai encore mangé en rentrant chez moi x) ).

Du coup je vais raccourcir et en venir aux trois groupes qui ont gagnés. Le premier est "Qui suis-je", qui était principalement composé de camarades de ma promo à Epitech qui ont profités de ce Hackaton pour réfléchir à leur projet de fin d'études (qui correspondait très bien)

![Qui suis-je](/images/mesinfos_01.jpeg){: .small}

Le deuxième groupe s'appelait "Métro Boulot Dodo". Je ne vais pas trop détailler sur ce projet parce que... j'ai pas bien compris ce qu'ils font je dois avouer.

![Metro boulot dodo](/images/mesinfos_02.jpeg){: .small}

Et enfin le 3e groupe s'appelait "Billy", ça à été mon groupe préféré car leur présentation était très centrée sur l'humour et ça à beaucoup marché. Billy est une application qui va afficher l'argent qu'il vous reste à dépenser dans vos loisirs, et faisant la différence entre votre montant sur votre compte bancaire et les factures qu'il vous reste à payer. L'interface présentée était très simple (une grosse icone au milieu avec le montant)

![Billy](/images/mesinfos_03.jpg){: .small}

Donc résultat un très bon weekend et que je re-ferais avec plaisir, ça m'a permis de voir un peu plus comment développer des applications dans CozyCloud et avec NodeJS, et ça m'a donné quelques idées d'applications à faire à l'occasion (comme une vue des commits Github, j'aime pas du tout l'interface du profil Github).
