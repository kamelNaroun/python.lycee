.. meta::
    :description: comment suivre ce tuto
    :keywords: python, algorithmique, programmation, langage, lycée, tutoriel

**************************
Comment suivre ce tutoriel
**************************

Prérequis
*********

Nous supposerons ici:

#. que vous avez réussi à installer Python et Pyscripter, ou tout autre environnement de développement intégré,
#. que vous avez bien compris la différence entre interpréteur et éditeur.

Sinon vous pouvez allez voir les paragraphes :ref:`installation`, :ref:`interpreteur` et :ref:`editeur`.

Créer son propre aide-mémoire
*****************************

Que vous soyez enseignant ou élève (ou ni l’un ni l’autre mais que vous voulez profiter de ces pages),
nous vous conseillons de suivre ce tutoriel en gardant une trace des commandes «qui marchent».

En effet, vous serez content plus tard de retrouver les quelques lignes que vous aviez comprises, mais que vous
n’avez pas pu retenir par cœur. D’un autre côté, purement scolaire cette fois-ci, votre professeur pourra suivre
votre progression au travers des fichiers que vous aurez enregistrés au fur et à mesure.

La méthode que nous préconisons est la suivante: chaque bout de code proposé dans le tutoriel devra être:

#. testé directement dans l’interpréteur,
#. rédigé dans l’éditeur (vous aurez sûrement besoin de l’instruction ``print`` pour afficher un résultat),
   puis testé,
#. testé à nouveau dans l’interpréteur après une ou plusieurs modifications
   (légères ou importantes, à vous de faire preuve de créativité),
#. à nouveau rédigé et testé dans l’éditeur avec les modifications de l’étape précédente.

Exemple
*******

Un exemple basé sur la partie :ref:`interpreteur` où l’on trouve:

.. sourcecode:: python

    >>> 2+3*5
    17

.. note::

   C’est le moment d’ouvrir votre environnement de développement (PyScripter par exemple)
   et de suivre ces quatre étapes au fur et à mesure!

**Première étape**, le test dans l’interpréteur. On y tape ``2+3*5`` puis ``Entrée``.
On contrôle que Python répond bien ``17``.

**Deuxième étape**, on rédige ce test dans l’éditeur. On peut y taper simplement:

.. sourcecode:: python

    print(2+3*5)

Notez que c’est simplement ce que propose le tutoriel (``2+3*5``) à l’intérieur des parenthèses d’un ``print`` (Python 2.x n’a pas besoin des parenthèses).

L’exécution du programme donnera:

.. sourcecode:: python

    17

On peut aussi y taper quelque chose de plus complet:

.. sourcecode:: python

    # Test d’une opération arithmétique simple.
    print("2+3*5 donne:")
    print(2+3*5)


Ici on a commenté ce que l’on faisait à l’aide du symbole ``#`` et on a embelli l’affichage en rajoutant un ``print`` qui montre ce que l’on a demandé de faire à Python.

N’oubliez pas d’exécuter votre programme pour le tester.

**Troisième étape**, on tente une modification simple dans l’interpréteur, puis une autre, puis encore une autre plus élaborée…

.. sourcecode:: python

    >>> 2+3*5+1
    18
    >>> 2 + 3*5 + 1
    18
    >>> 2 + 3*5 - 5*(12 - 7)
    -8


**Quatrième étape**, on rédige les trouvailles de l’étape précédente dans l’éditeur, et on les teste.

N’oubliez pas d’enregistrer votre fichier, si possible avec un nom significatif.
Vous pourrez ainsi retrouver facilement un morceau de code dont vous aurez besoin, et qui fonctionne!

Cela peut par exemple donner:

.. sourcecode:: python

    # Test d’une opération arithmétique simple.
    print("2+3*5 donne:")
    print(2+3*5)

    print("Les espaces sont possibles pour mieux présenter un calcul.")
    print("2 + 3*5 + 1 donne aussi:")
    print(2 + 3*5 + 1)

    # À vous pour 2 + 3*5 - 5*(12 - 7) !!!
