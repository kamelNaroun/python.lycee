.. meta::
    :description: comment gérer les accents avec Python et se méfier des égalités
    :keywords: python, algorithmique, programmation, langage, lycée, accents, égalités

*******
Annexes
*******

Gestion des accents
===================

En première ou deuxième ligne d'un script, il faut insérer la ligne :

.. sourcecode:: python

    # -*- coding: utf-8 -*-

ou bien

.. sourcecode:: python

    # -*- coding: latin-1 -*-


Il s'agit d'un pseudo-commentaire indiquant à Python le système de codage utilisé, ici l'utf8 (ou le latin-1) qui comprend les caractères spéciaux commme les caractères accentués, les apostrophes, les cédilles ...


Les égalités : attention
========================

Il faut savoir que python n'est pas un logiciel de calcul formel, en tous cas pas sans l'importation d'un module adéquat. Donc a priori, il ne fait pas de calcul exact et il faut considérer que les valeurs numériques sont approchées. Il faut donc être prudent quand on teste si une égalité est vraie ou fausse.

.. sourcecode:: python

    >>> from math import sqrt
    >>> a = sqrt(2)
    >>> b = sqrt(3)
    >>> c = sqrt(5)
    >>> # testons maintenant une égalité
    >>> a**2 + b**2 == c**2
    False

Le résultat n'est pas celui attendu. En effet, on a bien

.. math::

    (\sqrt{2})^2+(\sqrt{3})^2=(\sqrt{5})^2


Différences entre Python2 et Python3
====================================

A compléter


Messages d'erreur
=================

Voici quelques messages d'erreurs que l'on peut rencontrer :

.. sourcecode:: python

    >>> a + 1
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'a' is not defined

Il faut d'abord définir `a` en lui donnant une valeur.

.. sourcecode:: python

    >>> 1 / 0
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ZeroDivisionError: integer division or modulo by zero

La division par zéro est impossible. Personne ne ferait cette erreur de cette
façon. Mais dans l'exemple suivant, cela peut être plus fréquent.

.. sourcecode:: python

    >>> for x in range(4):
    ...     print(1/x)
    ... 
    Traceback (most recent call last):
      File "<stdin>", line 2, in <module>
    ZeroDivisionError: integer division or modulo by zero


.. sourcecode:: python

    >>> chaine = "blabla"
    >>> 1 + chaine
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: unsupported operand type(s) for +: 'int' and 'str'

Le nombre 1 et la chaine de caractères `chaine` ne sont pas du même type. On ne
peut donc pas les ajouter.

.. sourcecode:: python

    >>> chaine + 1
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: cannot concatenate 'str' and 'int' objects

Ici, on aurait pu s'attendre à avoir le même message d'erreur, mais pour les
chaines de caractères, l'opération `+` correspond à la concaténation qui ici
n'est pas possible puisque 1 n'est pas de  ce type. Par contre :

.. sourcecode:: python

    >>> chaine + "1"
    'blabla1'
