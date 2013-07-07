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


Il s'agit d'un pseudo-commentaire indiquant à Python le système de codage
utilisé, ici l'utf8 (ou le latin-1) qui comprend les caractères spéciaux commme
les caractères accentués, les apostrophes, les cédilles ...


Les égalités : attention
========================

Il faut savoir que python n'est pas un logiciel de calcul formel, en tous cas
pas sans l'importation d'un module adéquat. Donc a priori, il ne fait pas de
calcul exact et il faut considérer que les valeurs numériques sont approchées.
Il faut donc être prudent quand on teste si une égalité est vraie ou fausse.

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

Pour connaitre toutes les différences entre Python2 et Python3, vous pouvez
consulter `cette section du site officiel`_.
Mais voici celles qui sont les plus importantes pour le débutant.

``print``
---------
C'est desormais une fonction. Pour l'utiliser il faut donc obligatoirement
utiliser des parenthèses.

La division
-----------
Plus besoin du ``from __future__ import division`` qui était nécessaire pour que
la division (/) soit bien décimale. Avec Python3, on a directement :

.. sourcecode:: python

    >>> 7/2
    3.5

Avec Python2, on avait :

.. sourcecode:: python

    >>> 7 / 2
    3
    >>> from __future__ import division
    >>> # la division est maintenant décimale
    >>> 7 / 2
    3.5

``imput``
---------
Cette fonction renvoie automatiquement une chaine de caractères, même s'il est
demandé de saisir un nombre.

``range``
---------
Avant, avec Python2, on avait :

.. sourcecode:: python

    >>> range(5)
    [0, 1, 2, 3, 4]

mainetnant, avec Python3, on a :

.. sourcecode:: python

    >>> range(5)
    range(0, 5)

Et pour avoir le contenu de la liste générée, il faut utiliser la fonction
``list``.

.. sourcecode:: python

    >>> list(range(5))
    [0, 1, 2, 3, 4]


Messages d'erreur
=================

Pour tout savoir, il faut se rendre à la `documentation officielle`_. Pour faire
simple, disons qu'il y a deux types d'erreur :

- les erreurs de syntaxe comme par exemple l'oubli d'un ``:`` à la fin d'une ligne `if`,
- les autres erreurs sont appelées **exceptions**.

Voyons les plus courantes pour le débutant.

    >>> a = 0
    >>> 1/a
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ZeroDivisionError: integer division or modulo by zero

Le message d'erreur ici est composé de trois lignes, mais c'est la dernière
ligne qui doit être lue avec attention. Cette dernière rappelle que la division
par zéro n'est pas autorisée. Le nom de l'exception `ZeroDivisionError` est
d'ailleurs très clair.

Il faut aussi faire attention aux index des listes et se rappeler que la
numérotation des listes commence à 0.

    >>> maliste = [2, 5, 10]
    >>> maliste[2]
    10
    >>> maliste[3]
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    IndexError: list index out of range

L'exception `IndexError` indique ici que l'on est allé trop loin dans la
numérotation.

Il faut aussi se rappeler que l'on ne peut pas faire d'opérations avec des
variables qui n'ont pas été préalablement définies.

    >>> b + 2
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'b' is not defined

L'exception `NameError` nous dit bien que la variable ``b`` n'a pas été définie.


.. _`cette section du site officiel`: http://docs.python.org/3/whatsnew/3.0.html
.. _`documentation officielle`: http://docs.python.org/3.3/tutorial/errors.html