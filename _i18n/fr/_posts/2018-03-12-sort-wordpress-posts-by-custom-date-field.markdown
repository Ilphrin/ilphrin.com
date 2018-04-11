---
layout: post_kevin
title: Trier les articles Wordpress par une date 'champs personnalisé'
author: kevin
hashtags: wordpress, php
category: planet
---

Il vous est surement déjà arrivé, en travaillant sur un thème Wordpress, d'avoir à créer un 'champ personnalisé', un champ supplémentaire qui contient une information liée à un article, une catégorie, un tag, ou tout autre entité Wordpress. On peut créer différent type de _champ personnalisé_, et celui sur lequel on va s'attarder aujourd'hui est le type Date, associé à un article.

Et surtout comment l'utiliser pour trier nos articles.

<!--break-->

## Un _champ personnalisé_ de Date

Un _champ personnalisé_ est une métadonnée liée à un article, une page, etc. On peut rajouter autant de métadonnées que l'on veut, et celles-ci peuvent contenir une très large gamme d'information: Un chaine de caractère, un nombre, une date, une heure ...

On peut voir les _champs personnalisés_ d'un article en déroulant le menu "Options de l'écran" en haut, puis en cochant "Champs Personnalisés". Vous pouvez maintenant voir en bas de l'article toutes les métadonnées de l'article, et pourrez aussi en rajouter un.

![Wordpress theme options](/images/wordpress_01.jpg){:.img.cover}_Options de l'écran_

Pour simplifier l'article j'ai utilisé le plugin [Advanced Custom Fields PRO](https://www.advancedcustomfields.com/) (La version non-PRO est tout aussi bien pour notre cas). Ce plugin permet de créer rapidement des champs pour chaque article sans avoir à rajouter la clé de métadonnée à chaque nouvel article.

## Le cas d'utilisation — Créons un Thème

Voici la situation: Vous gérer la création d'un site Wordpress pour un organisme X. X va poster fréquemment des articles concernant des événements Meetup que les employé·e·s organisent. Ces événements ont tous une date à laquelle elles se déroulent. L'objectif est donc d'avoir une page de Blog qui va lister tous les articles, et les trier non pas par date d'écriture de ceux-ci, mais par la date de l'événement auquel chaque article correspond.

Pour cela nous devons partir d'un nouveau thème, car cela va nécessiter d'écrire un peu de code PHP. Je ne vais pas détailler la création d'un thème, il existe suffisamment de [documentation](https://codex.wordpress.org/Theme_Development) [sur](https://webdesign.tutsplus.com/tutorials/building-a-wordpress-theme-in-60-seconds--cms-24315) [le](https://colorlib.com/wp/how-to-create-unique-wordpress-themes-tutorials/) [sujet](https://blog.templatetoaster.com/create-wordpress-theme-scratch/).

## WP_QUERY pour faire des requêtes

Si vous avez déjà créé un thème par le passé, ou si vous venez de suivre l'un des liens que je viens de vous donner, normalement vous disposez d'un dossier de thème avec un fichier `functions.php` à la racine. Ce fichier peut contenir tout un tas d'actions à enregistrer avant le chargement d'un page wordpress, ajouter du CSS ou du JavaScript à charger dans votre site ou, dans notre cas, modifier une requête vers le contenu d'une base de données de notre site.

Wordpress dispose d'un objet très puissant qui gère toutes les requêtes, qui s'appelle [WP_QUERY](https://codex.wordpress.org/Class_Reference/WP_Query). En modifiant directement cet objet, vous allez pouvoir modifier la façon dont Wordpress fait ses requêtes pour aller récupérer vos articles.

Vous avez vos articles, ils sont beaux, bien écrits, et donnent envie d'aller à ces événements. Vous avez même pris le temps d'ajouter un _champ personnalisé_ qui contient la date de votre événement pour chaque article. Ce champ possède la clé: "date_evenement". Nous allons maintenant aller rajouter une [action](https://codex.wordpress.org/Plugin_API/Action_Reference) qui va s'exécuter juste avant d'aller récupérer les articles:

```
add_action( 'pre_get_posts', 'get_post_by_event'  );
function get_post_by_event( $query  ) {
  if( $query->is_main_query() && !is_admin() && is_home()  ) {
    $query->set( 'meta_key', 'date_evenement'  );
    $query->set( 'orderby', 'meta_value'  );
    $query->set( 'order', 'ASC'  );
  }
}
```

Voyons pas-à-pas ce que fait ce code:

1. Tout d'abord nous enregistrons l'action, qui s'appelle `pre_get_posts`, et nous lui demandons de lancer `get_post_by_event` au moment adéquat.
2. La fonction `get_post_by_event` prend un paramètre `$query` qui est une instance de la classe WP_QUERY. C'est ce paramètre qui va nous servir pour trier les articles.
3. Cette condition permet de vérifier que nous traitons la bonne requête, mais aussi de vérifier sur quel page nous nous trouvons. Ces fonctions sont internes à Wordpress.
4. Nous utilisons 3 fois la méthode `set` de `$query` pour modifier la requête. La première détermine une clé de métadonnée pour la requête, ici `'date_evenement'`. La deuxième fois nous modifions l'ordre dans lequel les articles seront retournés, par `meta_value`, c'est-à-dire en fonction de la valeur de la clé de chaque article.

Et enfin nous modifier l'ordre pour qu'on ait les événements du plus récent au plus lointain, mais ceci n'est pas obligatoire.

## WP_QUERY et les actions

WP_QUERY est un objet assez complexe à maitriser (je ne prétends pas d'ailleurs le maitriser complétement!), mais une fois qu'on a mis les mains dedans, on se rend compte des nombreuses possibilités qu'il offre. À ma connaissance, c'est aussi personnalisable que si vous pouviez écrire directement la requête SQL qui va chercher les articles. 

En combinant cet objet avec les _actions_ de Wordpress, les possibilités deviennent vraiment très nombreuses, et je ne peux que vous inviter à lire la documentation de la liste des actions possible pour vous faire une idée!
