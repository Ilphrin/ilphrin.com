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

###EDIT
J'ai modifié grandement mon snippet, afin de gérer le niveau
 d'indentation et le saut de ligne en cas de balise de bloc (comme \<body>). Pour cela j'ai changé l'expression régulière pour prendre tous les caractères avant la balise, pour les réutiliser.

J'ai découpé un peu mon code python avec 3 fonctions supplémentaires:

* needNewLine: Qui regarde si la balise que l'on veut taper fait parti d'un tableau, si c'est le cas c'est qu'il faudra faire des saut de ligne et mettre le cursor sur la ligne vide entre la balise ouvrante et la balise fermante.
* makeBegTag: Me permet d'écrire la balise ouvrante, en prenant en mettant un saut de ligne si needNewLine renvoie 1. Dans ce cas là on rajoute une indentation correspondant à celle récupérée avec le match.group(1)
* makeEndTag: Idem pour la balise fermante

Du coup le code final ressemble maintenant à ça:
{% highlight python %}

global !p
def notUniqueTag(value):
  if value not in ["br", "link", "meta", "img", "hr"]:
    return 1
  return 0

def needNewLine(value):
  if value in ["body", "html", "head", "p", "section", "article", "style", "aside"]:
    return 1
  return 0

def makeBegTag(a, b, indent):
  if needNewLine(a):
    return indent + "<" + a + b + ">\n" + indent + "  "
  else:
    return "<" + a + b + ">"

def makeEndTag(a, indent):
  if needNewLine(a):
    return "\n" + indent + "<" + a + "/>"
  else:
    return "<" + a + "/>"
endglobal

snippet "(.*)<([a-z]+)(.*)>" "Tag" rA
`!p
a = match.group(2)
b = match.group(3)
indent = match.group(1)
if not snip.c and notUniqueTag(a) and not b == "/":
  snip.rv = makeBegTag(a, b, indent)
elif not snip.c:
  snip.rv = makeBegTag(a, b, indent)
`$1`!p
if not snip.c and notUniqueTag(a) and not b == "/":
  snip.rv = makeEndTag(a, indent)
`
endsnippet

{% endhighlight %}
