.. meta::
    :description: les boucles en Python, au lycée
    :keywords: python, algorithmique, programmation, langage, lycée, boucles, while, for, tant que, pour

***************************************************
Boucles (instructions :samp:`while` et :samp:`for`)
***************************************************

Tant que
========

Le principe de la boucle :samp:`while`, c'est d'exécuter un bloc d'instructions tant que (while in english) une condition donnée est vraie. Encore une fois commençons par un exemple :

.. sourcecode:: python

    >>> i = 1
    >>> while i <= 5:
    ...     print(i)
    ...     i = i + 1
    ...
    1
    2
    3
    4
    5

Ici tant que (while) la condition :math:`(i\leq5)` est vraie, le bloc d'instructions (il y en a deux dans notre cas) est executé.

.. warning::

    La deuxième instruction est primordiale car elle assure que l'on va sortir de la boucle. En effet, avec ce genre de boucle, il faut faire attention à ne pas construire une **boucle sans fin**.

Pour savoir combien de fois la boucle :samp:`while` est executée, il peut être utile d'utiliser une variable qui servira de compteur, c'est-à-dire une variable initialisée à zéro et incrémentée de 1 dans le bloc d'instructions.


Pour
====

Lorsque l'on souhaite répéter un nombre **donné** de fois la même instruction ou le même bloc d'instructions, la commande :samp:`for` est la plus appropriée.

Admettons que l'on veuille afficher 5 fois le mot *blabla*. Voici ce que l'on peut faire.

.. sourcecode:: python

    >>> for i in range(5):	# pour i allant de 0 à 4
    ...     print("blabla")
    ...
    blabla
    blabla
    blabla
    blabla
    blabla

Bon, arrêtons là le blabla et regardons un exemple plus mathématique. Si on veut afficher les carrés des entiers de 1 à 7 :

.. sourcecode:: python

    >>> for i in range(1, 8):	# pour i allant de 1 à 7
    ...     print(i**2)
    ...
    1
    4
    9
    16
    25
    36
    49

Puis terminons sur un exemple classique qui est le calcul de la somme des premiers entiers. Disons ici que l'on s'arrête à 30. Autrement dit, on veut calculer

.. math::

    1+2+3+\dots+30
    
que l'on note aussi

.. math::

    \sum_{i=1}^{30}\, i

.. sourcecode:: python

    >>> S = 0
    >>> for i in range(1, 31):   # pour i allant de 1 à 30
    ...     S = S + i
    ... print(S)
    ... 
    465


