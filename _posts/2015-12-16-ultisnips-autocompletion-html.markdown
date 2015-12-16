---
layout: post_kevin
title: "Ultisnips: Autocomplétion HTML"
author: kevin
cover: vim_nvim.png
category: planet
---

Pour ceux qui ne le savent pas, Ultisnips est un plugin pour Vim/NeoVim qui permet de créer des snippets. C'est l'outil le plus puissant de création de snippet que j'ai pu voir jusque maintenant, tout éditeur confondu. Les possibilités offertes par ce plugin sont immense, alors qu'il est très simple d'utilisation, a partir du moment où l'on sait exactement ce que l'on veut faire.

<!--break-->

Cela fait maintenant 3 mois que j'utilise Ultisnips, et à chaque fois que je remarque que je répète souvent quelque chose dans mon code, je me presse d'en faire un snippet pour Ultisnips! Je dois en être à une vingtaine de snippets maintenant, et je commence tout juste à m'habituer à utiliser les fonctionalités les plus avancés. Et notamment les interpolation Python.

Ça en jette comme nom hein? En fait derrière ce nom aux consonnances Trekistes se cache un moyen de controler les snippets en utilisant des bouts de code en Python. Je ne vais pas faire un cours sur Ultisnips parce qu'il y à déjà largement les ressources suffisantes qui existent déjà (J'en ai parlé dans mon article sur les [plugin Vim](http://ilphrin.com/planet/2015/09/16/topo-des-plugins-vim-01.html) avec notamment tous les liens des vidéos de cours).

J'ai récemment essayé de faire mon propre snippet utilisant une interpolation Python. J'adore Python alors il était de mon devoir d'en faire, aussi inutile qu'il fût ;) Du coup je me suis lancé dans l'idée de faire un snippet pout autocompléter les balises HTML, notamment en les refermant tout de suite derrière, sans avoir à utiliser un autre plugin Vim. Et j'ai réussi (bon en même temps c'est pas la chose la plus complexe à faire), pour cela j'ai joué avec une expression régulière, et d'un petit test en Python. Voici donc le code de ce snippet:

{% highlight python %}
global !p
def notUniqueTag(value):
  if value not in ["br", "link", "meta", "img", "hr"]:
    return 1
  return 0
endglobal

snippet "<([a-z]+)(.\*)>" "Tag" rA
`!p
if not snip.c and notUniqueTag(match.group(1)):
  snip.rv = "<" + match.group(1) + match.group(2) + ">"
elif not snip.c:
  snip.rv = "<" + match.group(1) + match.group(2) + ">"
`$1`!p
if not snip.c and notUniqueTag(match.group(1)):
  snip.rv = "</" + match.group(1) + ">"
`
endsnippet
{% endhighlight %}

Le code de ce snippet n'est pas très compliqué mais je vais m'expliquer rapidement. Mon expression régulière vérifie l'existence d'un mot en minuscule, et potentiellement d'autres mots qui le suivent quels qu'ils soient, le tout entouré de chevrons. Si cette condition est vérifiée, alors le code Python commence.

J'ai besoin de vérifier que ce n'est pas une balise unique que j'utilise, tel que <br /> ou <meta />. Pour cela j'ai crée une fonction qui prend en paramètre le premier modèle de l'expression régulière ( ([a-z]+) soit le premier mot), et qui vérifie si le mot contenu ne fait pas partie de la liste écrite dans la fonction notUniqueTag().

Si cete condition est elle aussi vérifiée, alors je change le contenu pour mettre <maBalise>$1</maBalise>, avec $1 qui correspond à la position du curseur. Une fois qu'on a tapé le contenu, puisque c'est un snippet il suffit d'appuyer sur le raccourci pour aller à la position de curseur d'après (pour moi c'est Ctrl+J) pour aller à la fin de la balise fermante.

J'aime vraiment cette capacité à faire rapidement des snippet dont le comportement n'est pas fixe, ça ouvre des possibilités pour se faciliter la vie qui sont très intéressante, si vous avez écrit des super snippet faites le moi savoir je suis toujours à l'affût de perles rares de ce genre ;)

Bonne journée!
