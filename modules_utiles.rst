.. meta::
    :description: des modules Python utiles au lycée
    :keywords: python, algorithmique, programmation, langage, lycée, modules, random, math

*******************
Deux modules utiles
*******************

D'abord, qu'est-ce qu'un module ? Il s'agit d'une sorte de bibliothèque (un regroupement de fonctions prédéfinies) qui une fois importée permet d'accéder à de nouvelles fonctions. On a déjà vu

.. sourcecode:: python

    from __future__ import division

qui permet de pouvoir utiliser la division décimale dans les versions de Python2.x. Il en existe beaucoup d'autres. On peut citer :

- le module turtle qui permet de réaliser des dessins géométriques,
- le module numpy qui permet de faire du calcul scientifique,
- le module sympy qui permet de faire du calcul formel.

Il y en a beaucoup d'autres et parmi eux, j'ai choisi de présenter les deux qui en classe de seconde au moins me semblent le plus utile.

Le module math
==============

C'est un module qui permet d'avoir accès aux fonctions mathématiques comme le cosinus (cos), le sinus (sin), la racine carrée (sqrt), le nombre :math:`\pi` (pi) et bien d’autres...

.. sourcecode:: python

    >>> from math import *  # importation du module
    >>> cos(pi)             # cosinus d'un angle en radian
    -1.0
    >>> sqrt(25)            # racine carrée
    5.0

En plus de ce qui a été cité précédemment, on peut ajouter les fonctions tangente (tan), partie entière (floor), exponentielle (exp) et logarithme népérien (log).

Concernant la fonction partie entière, il y en avait déjà une sans l'apport du module math. Il s'agit de int. Vous noterez une légère différence entre les deux.

.. sourcecode:: python

    >>> floor(12.123)
    12.0
    >>> int(12.123)
    12


Le module random
================

En anglais "random" signifie "le hasard". Ce module va nous permettre d'utiliser des fonctions générant des nombres aléatoires. Les deux qui me semblent le plus utile dans un premier temps sont :
- random() qui renvoie un nombre aléatoire entre 0 et 1,
- choice(liste) qui choisit au hasard un nombre dans une liste donnée.

.. sourcecode:: python

    >>> from random import *
    >>> random()
    0.34461947461259612
    >>> random()
    0.024762749258158245
    >>> L = [7, 3, 8, 5, 6]
    >>> choice(L)
    5
    >>> choice(L)
    3
    >>> # cela marche pour une liste de chaine de caractères
    >>> liste = ['Pierre', 'Paul', 'Jacques']
    >>> choice(liste)
    'Jacques'

