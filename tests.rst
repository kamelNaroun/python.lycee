.. meta::
    :description: tests en Python : usage du if et du else
    :keywords: python, algorithmique, programmation, langage, lycée, tests, if, else, elif, si, sinon

.. _tests:

******************************
Tests (instruction ``if``)
******************************

Premier contact
===============

.. index:: if, input

Commençons par regarder le script ci-dessous :

.. sourcecode:: python

    print("Entrer un nombre plus petit que 100.")
    nb = input()
    
    if nb < 100:
        print("Ce nombre convient.")
    else:
        print("Ce nombre est trop grand.")

A l'exécution du script, l'ordinateur va afficher la chaîne "Entrer un nombre plus petit que 100." et va marquer un temps d'arrêt. En effet, la commande ``input()`` attend ici que l'on rentre un nombre puis que l'on appuie sur la touche Entrée. Ce nombre sera alors affecté à la variable ``nb``.

Puis le test commence :

    - si (IF en anglais) la condition (``nb < 100``) est vraie, alors le bloc d'instructions qui suit (ici une seule instruction) est executé,
    - sinon (ELSE en anglais), c'est-à-dire si la condition (``nb < 100``) est fausse, alors c'est l'autre bloc d'instructions qui est executé.

.. note::

    Ici les deux blocs d'instructions ne sont composés que d'une seule instruction.

Le couple ``if`` et ``else`` agit finalement comme un aiguillage. Attention
cependant, l’instruction ``else`` et son bloc sont parfois omis. Dans ce cas,
si la condition est fausse, rien n’est exécuté.

.. index :: int, float

.. attention::

    Avec Python3, la fonction ``input()`` renvoie systématiquement une chaîne de caractères. Donc si c'est un nombre que l'on veut manipuler, il faudra utiliser la fonction ``int()`` s'il s'agit d'un entier ou ``float()`` s'il s'agit d'un décimal. Donc avec Python3, au dessus, il faut remplacer l'instruction ``nb = input()`` par
    
    .. sourcecode:: python
    
        chaine = input()
        nb = float(chaine)
    
    ou bien directement
    
    .. sourcecode:: python
    
        nb = float(input())


Comparaison de nombres
======================

Vous aurez souvent à comparer des nombres. Voici une liste des opérateurs
que vous pourrez utiliser.

* ``x == y`` est vrai quand x est égal à y,
* ``x != y`` est vrai quand x est différent de y,
* ``x > y`` est vrai quand x est strictement supérieur à y,
* ``x < y`` est vrai quand x est strictement inférieur à y,
* ``x >= y`` est vrai quand x est supérieur ou égal à y, et
* ``x <= y`` est vrai quand x est inférieur ou égal à y.


Doubles inégalités
==================

Python permet de plus l’enchaînement des comparaisons.

En mathématiques, il n’est pas rare que l’on ait à écrire
:math:`3 \leq x \leq 7` pour dire que x appartient à l’intervalle
:math:`[3;7]`. En Python, cela peut être fait grâce au connecteur ``and``
(voir la section :ref:`booleens`), mais c’est bien plus lisible avec
la double inégalité, et chaque expression n’est évaluée qu’une fois.

.. sourcecode:: python

    >>> for x in range(10):
    ...     if 3 <= x <= 7:
    ...         print(x, "est dans l'intervalle")
    ...     else:
    ...         print(x, "n'est pas dans l'intervalle")
    ... 
    (0, "n'est pas dans l'intervalle")
    (1, "n'est pas dans l'intervalle")
    (2, "n'est pas dans l'intervalle")
    (3, "est dans l'intervalle")
    (4, "est dans l'intervalle")
    (5, "est dans l'intervalle")
    (6, "est dans l'intervalle")
    (7, "est dans l'intervalle")
    (8, "n'est pas dans l'intervalle")
    (9, "n'est pas dans l'intervalle")


.. _booleens:

Compléments sur les booléens
============================

En début de chapitre nous avons vu que certaines conditions pouvaient
être «vraies» ou «fausses». Une branche des mathématiques appellée
«logique» s’occupe justement de ce genre de problèmes et les booléens_
en sont les briques élémentaires. En Python, les mots ``True`` et ``False``
représentent respectivement «vrai» et «faux» (comme en anglais en fait).

.. sourcecode:: python

    >>> True
    True
    >>> False
    False
    >>> true  # attention à la majuscule !!!
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'true' is not defined
    >>> 0 == 0
    True
    >>> 0 > 1
    False

La négation s’exprime avec ``not``.

.. sourcecode:: python

    >>> not True
    False
    >>> not False
    True
    >>> not 0 == 0
    False

On peut combiner deux booléens entre eux avec les opérateurs ``and`` et
``or``. Ce sont respectivement les opérateurs logiques «et» et «ou»
(comme en anglais aussi). Ci-dessous nous demandons à Python d’écrire les
tables de vérité de ces deux opérateurs.

.. sourcecode:: python

    >>> for a in [False, True]:
    ...     for b in [False, True]:
    ...         print(a, "and", b, "vaut", a and b)
    ... 
    False and False vaut False
    False and True vaut False
    True and False vaut False
    True and True vaut True

.. sourcecode:: python

    >>> for a in [False, True]:
    ...     for b in [False, True]:
    ...         print(a, "or", b, "vaut", a or b)
    ... 
    False or False vaut False
    False or True vaut True
    True or False vaut True
    True or True vaut True

Vous trouverez d’autres informations dans la documentation de Python au sujet
des booléens et des opérateurs logiques.

.. _booléens: http://fr.wikipedia.org/wiki/Bool%C3%A9en
