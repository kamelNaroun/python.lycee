.. meta::
    :description: introduction aux listes en compréhension
    :keywords: python, algorithmique, programmation, langage, lycée, listes, compréhension

***********************
Listes en compréhension
***********************

C’est une idée reconnue_ mais peu de langages de programmation l’ont
adoptée: la possibilité de créer des listes de manière à la fois
concise et élégante.

Profitons-en !

La syntaxe est très proche de la manière dont, en maths,
`on peut décrire certains ensembles`_:

:math:`\{ f(x) ; x \in A \}` et
:math:`\{ x \in A \ | P(x) \}`

Notons tout d’abord que pour les mathématiciens, un ensemble n’est pas
ordonné, alors que pour Python, une liste est ordonnée et peut contenir
plusieurs fois le même élément.


Au plus simple: copie de la liste
=================================

Dans sa version la plus simple, la syntaxe est ``[x for x in ma_liste]``,
où ``x`` est une variable muette et ``ma_liste`` est la liste à parcourir.

``[x for x in ma_liste]`` peut se lire «les x quand x parcourt
la liste ma_liste».

.. sourcecode:: python

    >>> liste = [1, 2, 3]
    >>> [x for x in liste]
    [1, 2, 3]

On obtient une copie de la liste, ce qui n’est à vrai dire pas très
intéressant. De plus on pouvait le faire encore plus facilement avec
``liste[:]``. Passons à quelque chose de plus sérieux.


Avec filtrage par un test
=========================

Nous avons vu au chapitre :ref:`tests` que l’on pouvait exécuter un bloc
d’instructions ou un autre suivant le résultat d’un test, comme un
aiguillage.

Ici, si la condition suivant le ``if`` est vraie, l’élément correspondant
sera inclus dans la liste finale, et sera exclu sinon. Notez que nous
n’avons pas besoin de ``else``.

``[x for x in ma_liste if condition_sur_x]`` peut se lire «la liste des x
quand x parcourt la liste ma_liste mais seulement les x pour lesquels la
condition est vraie».

.. sourcecode:: python

    >>> liste = [1, 2, 3]
    >>> [x for x in liste if x > 1]
    [2, 3]

Les tests peuvent aussi être donnés sous la forme de :ref:`fonctions`. En
effet, si ``test`` est une fonction qui retourne un booléen (voir :ref:`booleens`),
alors on peut l’utiliser pour filtrer avec la syntaxe
``[x for x in ma_liste if test(x)]``.

``[x for x in ma_liste if test(x)]`` peut se lire «la liste des x quand
x parcourt la liste ma_liste, tels que test(x) est vrai».

.. sourcecode:: python

    >>> def pair(nbre):
    ...     return nbre % 2 == 0
    ... 
    >>> [x for x in range(0, 10) if pair(x)]
    [0, 2, 4, 6, 8]


Avec application d’une fonction
===============================

Une fois qu’une fonction est définie (numérique ou non, voir
:ref:`fonctions`), elle peut être appliquée au nombres de la liste de
départ, les images constitueront la liste d’arrivée.

``[f(x) for x in ma_liste]`` peut se lire «la liste des f(x) quand
x parcourt la liste ma_liste».

On obtient le même résultat en mettant directement une expression en x à
la place de ``f(x)``.

``[2*x for x in ma_liste]`` peut se lire «la liste des doubles de x quand
x parcourt la liste ma_liste».

.. sourcecode:: python

    >>> [2*x for x in range(0, 10)]
    [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]


Filtrage et application d’une fonction
======================================

Les deux derniers paragraphes peuvent se combiner.
``[f(x) for x in ma_liste if test(x)]`` peut se lire «la liste des f(x) quand
x parcourt la liste ma_liste, tels que test(x) est vrai».

.. _reconnue: http://fr.wikipedia.org/wiki/Liste_en_compr%C3%A9hension
.. _on peut décrire certains ensembles: http://fr.wikipedia.org/wiki/Ensemble#D.C3.A9finition_d.E2.80.99un_ensemble_en_compr.C3.A9hension
