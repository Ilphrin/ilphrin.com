---
layout: post_kevin
title: Génération de code C++ en plugin Neovim avec CLang
author: kevin
category: planet
serie: vim
---

La Piscine de C++ qui marque le début de notre deuxième année à Epitech vient de se terminer. Durant ces deux semaines on étudie à fond la quasi-totalité des concepts liés à la POO.

Rapidement tout le monde a commencé à chercher tout ce qui pouvait nous faciliter la vie pour coder, et de nombreux étudiants se sont tournés vers des IDE très puissants, mais aussi très lourds. Moi je suis du genre à rester sur mon Neovim même si j'ai moins de fonctionalités, au moins ça marche et je sais ce que je code.

Mais mon égo en a pris un coup au vu de toutes les fonctionnalités de ces IDE et j'ai eu envie de développer un plugin qui puisse faire, à défaut de complètement, certaines choses de façon équivalentes à ces IDE. Pour ça j'ai dû apprendre à utiliser l'API Python de Neovim, et la librairie de parsing CLang.

Mon plugin en est à ses balbutiements mais je compte bien l'améliorer au fil du temps. Je vais commencer par parler un peu de la création d'un plugin dans Neovim, puis du fonctionnement de CLang. Dans un prochain article je rentrerais un peu plus dans les détails sur la façon dont j'ai fait fonctionner les deux ensembles, mais cet article est déjà bien assez long ;)

<!--break-->

##Neovim

Neovim a totalement changé son API pour les plugin par rapport à Vim, en utilisant [msgpack](http://msgpack.org/) pour pouvoir créer des clients comme on veut dans le langage qu'on veut pour faire une API, un GUI, etc...

Dans mon cas je connais le Python, il y a une API Python, du coup je l'ai codé en Python, tout le monde suit? ;) Mais il y a de nombreux autres clients, vous pouvez voir la liste [ICI](https://github.com/neovim/neovim/wiki/Related-projects).

Pour m'aider j'y suis allé pas-à-pas en suivant plusieurs exemples donnés sur le dépôt de [l'API Python](https://github.com/neovim/python-client).

Bon assez parlé place à l'action, comment ça fonctionne un plugin Neovim avec Python? Déjà il faut installer cette API, cela se fait par le biais de la commande suivante:

{% highlight sh %}

sudo pip install neovim

{% endhighlight %}

J'ai appelé mon plugin [easy-cpp.nvim](https://github.com/Ilphrin/easy-cpp.nvim), je met dans un dossier éponyme le contenu de mon plugin, qui se résume par:

* Un README.md qui fera office d'introduction notamment sur Github
* Un fichier LICENSE (MIT dans mon cas, j'aime bien cette license :3)
* Un dossier rplugin/python

rplugin est pour Remote Plugin, c'est-à-dire les plugins qui son gérés grâce a une API client telle que celle de Python. et le dossier python permet d'indiquer pour quel langage ce plugin est destiné.

Ce dossier est lui-même composé du:

* dossier easy-cpp/ qui va contenir tout le code, qui pour le moment n'est que dans un fichier __init__.py parce que je suis sale
* fichier easy-cpp.py, qui est vide et qui le restera.

Allons ensuite maintenant dans ce fichier __init__.py. Il contient principalement une classe avec un décorateur de neovim pour indiquer que cette classe dirige le plugin. Cette classe est initialisée avec un paramètre qui est le client de vim en lui-même. Cet objet va servir à faire toute l'interaction avec notre éditeur de texte préferé.

<pre><code class="python">

@neovim.plugin
class Easy(object):
  def __init__(self, vim):
    self.vim = vim
    ...

  @neovim.command('EasyGenerate')
  def generate(self):
    ...

</code></pre>

On voit ici que j'ai utilisé deux décorateurs liés à neovim. @neovim.plugin permet donc de marquer votre classe comme étant celle qui gère le plugin comme je l'ai déjà dit. @neovim.command est à placer sur une méthode de votre classe.

Elle va permettre de transformer votre méthode en commande pour Neovim. C'est-à-dire qu'une fois Neovim lancé, on peut taper :EasyGenerate et la fonction generate() va être lancée. Dans le principe c'est le gros de ce qu'il y a a apprendre pour créer un plugin pour Neovim. Mais il y a encore une chose dont je doit parler et qui est essentiel pour insérer du texte dans un fichier: la variable Buffer.

On a notre objet self.vim qui contient énormément d'informations sur l'état actuel de l'éditeur (je vous invite a voir les fichiers de tests unitaires de l'API Python qui contiennent pas mal d'information sur le sujet). Parmis les variables qu'il contient j'ai principalement eu à utiliser self.vim.current.buffer et self.vim.buffers

self.vim.buffers est un tableau qui contient chacune des lignes qui existent dans chacun des buffers ouverts. Le premier niveau du tableau (buffers[0], buffers[1], etc...) contient tour à tour les buffers ouverts. Le deuxième niveau (buffers[0][2], buffers[4][1:5], etc...). Pour modifier il suffit d'assigner une chaine de caractère à une ligne d'un buffer, ou meme un tableau de chaines de caractères.

Pour ajouter à la fin d'un buffer il y a deux possibilités: soit on veut ajouter à la fin et dans ce cas on fait buffers.append(maChaineOuMonTableau), soit on veut intercaler une ou des lignes entre deux autres, par exemple si je veux insérer du texte à la ligne 42 je fais buffers.append(maChainOuMonTableau, 42). Au final c'est comme un tableau classique en Python :)

##CLang

CLang est extrêmement puissant, mais il n'y a malheureusement que peu de ressources documentaires sur le sujet, et encore moins pour la librairie en Python. Ayant réussi à faire deux trois chose avec je me suis dit que partager avec tout le monde ce que j'ai appris pourrait en pousser d'autres à faire le pas ;) (et m'apprendre des choses en retour!)

J'ai commencé par suivre ce tutoriel tout d'abord aux conseil de mon ami [Strackeror](https://github.com/Strackeror): [http://szelei.me/code-generator/](http://szelei.me/code-generator/).

Ce tutoriel est très bien écrit (mais en anglais bien sûr), et il vous donne les bases pour comprendre CLang et l'utiliser dans Python. Mais dans mon cas je ne l'ai pas suivi en entier car mon but était un peu différent de ce qu'il voulait faire. Mon but est d'utiliser CLang pour analyser un fichier d'en-tête C++, et en extirper les prototypes de chaque méthode avec leur espace de nom.

Je m'explique, j'ai fait un fichier de header pour mes tests, et un fichier de source pour comparer le résultat final que je veux:

{% highlight cpp %}

#ifndef TEXTCOMPONENT_H
# define TEXTCOMPONENT_H

#include <string>

namespace Test
{
  namespace inerTest
  {
    class TextComponent
    {
      public:
          TextComponent();

          std::string text() const;
          void setText(const std::string& value);

      private:
          void superSecretFunction();
          std::string m_text;
    };
  }

  class newText
  {
    public:
      newText();
      newText(newText const&);
      newText& operator=(newText const&);
  };
}

class OutText
{
  public:
    OutText();
    OutText(OutText const&);
    OutText& operator=(OutText const&);
};

void outputsmthing(int, int);

#endif /* TEXTCOMPONENT_H */

{% endhighlight %}

Et ce que je veux obtenir:

{% highlight cpp %}

#include "textcomponent.h"

std::string Test::inerTest::TextComponent::text() const
{

}

void Test::inerTest::TextComponent::setText(const std::string & value)
{

}

void Test::inerTest::TextComponent::superSecretFunction()
{

}

Test::newText & Test::newText::operator=(const Test::newText &)
{

}

void outputsmthing(int, int)
{

}

OutText & OutText::operator=(const OutText &)
{

}


{% endhighlight %}

J'ai volontairement fait un cas pas très joli d'encapsulation dans des espaces de noms, mais bon au moins si là ça fonctionne c'est que je suis sur une bonne base!

Donc pour générer ça, on va avoir besoin d'installer clang pour python, pour ça rien de tel qu'un:

{% highlight sh %}

sudo pip install clang

{% endhighlight %}

Ensuite on ouvre un fichier python à coté de notre fichier header (je ne parle pas du fichier __init__.py de tout à l'heure là on se met dans un autre dossier pour travailler sur autre chose sans le lier au plugin). On commence ce fichier en initialisant clang, lui demandant de créer un index, et de parser un fichier donné en paramètre avec sys.argv[]. Enfin, on va utiliser la sortie pour génerer la liste des fonctions du fichier de header:

{% highlight python %}

from clang import *
import sys

cindex.Config.set_library_file('/usr/lib/llvm-3.4/lib/libclang.so.1')
index = cindex.Index.create()
translation_unit = index.parse(sys.argv[1], ['-x', 'c++', '-std=c++11', '-D__CODE_GENERATOR__'])

def get_methods(cursor):
    name = cursor.spelling
    functions = []

    for c in cursor.get_children():
        if (c.kind == cindex.CursorKind.CXX_METHOD):
            functions.append(c)
    return functions

def get_all_public_functions(cursor):
    result = {}
    for c in cursor.get_children():
        if (c.kind == cindex.CursorKind.CLASS_DECL) and c.location.file.name == sys.argv[1]:
            a_class = get_methods(c)
            result[c.spelling] = a_class
        elif (c.kind == cindex.CursorKind.NAMESPACE) and c.location.file.name == sys.argv[1]:
            child_classes = get_all_public_functions(c)
            result[c.spelling] = child_classes
        elif (c.kind == cindex.CursorKind.FUNCTION_DECL) and c.location.file.name == sys.argv[1]:
            result[c.spelling] = c
    return result

classes = get_all_public_functions(translation_unit.cursor)

{% endhighlight %}

Pas de panique je vais tout expliquer!

Les premières lignes sont expliquées dans l'article que j'ai mis en lien plus haut, je ne pense pas avoir besoin de revenir dessus.

Tout en bas on assigne à classes le retour de la fonction get_all_public_functions qui prend en paramètre un objet Cursor. Cet objet propre a CLang contient tout un tas d'informations sur chaque segment de code, sous forme d'arbre.

Dans get_all_public_functions() on parcourt la liste des enfants de ce Cursor avec la méthode get_children(), la variable c obtenue est un...Cursor, vu que nous sommes dans un arbre de Cursors, chaque enfant est un autre Cursor dépendant de son parent.

Cet objet contient de nombreuses informations, dont c.kind qui indique le type du Cursor. Dans notre cas on vérifie pour trois valeurs:

* Si c'est un classe (CLASS_DECL), dans ce cas-là on appelle la fonction get_methods() plus haut qui récupère toutes les méthodes de cette classe.
* Si c'est un namespace (NAMESPACE) on recupère de façon récursive le retour de get_all_public_functions() avec comme valeur l'enfant courant. Puis on l'ajoute à result.
* Si c'est une fonction (FUNCTION_DECL), on l'ajoute simplement à result.

result étant un dictionnaire, on lui passe en guise le clé c.spelling, qui correspond au code en lui-même pointé par le curseur, dans notre cas c'est soit un nom de classe, soit un nom de namespace, soit un nom de fonction.

Petit détail, la condition c.location.file.name == sys.argv[1] permet de vérifier qu'on parle toujours du même fichier, et pas d'un fichier récuperé lors d'un #include, qui sera aussi parsé par CLang quoiqu'on fasse, sauf qu'on veut pas l'ajouter en résultat ;)

La suite au prochain épisode...
