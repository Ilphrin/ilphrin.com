---
layout: post_kevin
title: Des news en tout genre
author: kevin
---

Depuis que j'ai mis en ligne le site, j'ai fait tout un tas de petites modifications mineures pour rendre le tout un peu plus joli/stable/fonctionnel, en voici une liste (non exhaustive puisque je ne me souviens pas de tout):

* Les commentaires fonctionnent maintenant! J'ai bidouillé pendant un bon moment à comprendre pourquoi quand je recevais un mail avec le contenu du commentaire à ajouter, ce n'était pas en utf-8. En fait il fallait rajouter \\r\\n a la fin de chaque informations de l'en-tête de requete de mail pour que ça passe correctement...
* Je profite des articles sur Vim pour améliorer mon fichier CSS vim_syntax.css, puisque Jekyll peut faire de la mise en valeur de code avec \{\% highlight %\}, mais avec mes règles CSS la coloration était effacée pour ne laisser que du jaune ocre. Puisque Jekyll est bien fait il crée une classe pour chaque élément sémantique du langage mis en valeur, ce qui fait qu'il ne reste plus qu'à créer une règle CSS par classe pour avoir sa coloration personnalisée!
* Toujours dans le CSS j'ai viré tous les 'outline' possible avec un brutal =>  * {outline: none;}, de plus je me suis amusé avec les propriétés :focus pour le formulaire de commentaire pour rendre tout ça un peu plus vivant
* Je pense ajouter une partie pour les news qui m'ont interressé ou mes pensées du moment, choses qui ne suffiraient pas à faire un article et n'ont donc pas leur place ici.
* Le lien en bas pour le code du site sur Github dirige maintenant vers le dépot récemment crée. Je ne me suis pas vraiment cassé la tête a commenter les layouts ou a faire les choses de façon propre. Déjà parce que c'est la première fois que je fais un site complet donc je n'ai pas toutes les bonnes habitudes, et ensuite parce que ce n'est pas la peine je pense de détailler puisqu'il suffit de comprendre l'organisation de façon globale. (Et puis il y a beaucoup de choses qui sont inspirées de code trouvé sur l'Internet donc mieux documentés que par moi).
* Si vous avez regardé le dépôt vous avez pu remarquer que mon CV est sur le site, mais que je n'ai mis aucun lien pour l'afficher. C'est volontaire. Si vous souhaitez vraiment le voir il est a http://ilphrin.com/kevin/CV_en.pdf, je compte ne faire que passer le lien sur mon compte Linkedin ou dans mes cartes de visite, je ne crois pas que ce soit la peine de prendre un bout de place sur le site pour ça.
