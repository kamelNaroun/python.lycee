.. meta::
    :description: les bases en Python pour le lycée
    :keywords: python, algorithmique, programmation, langage, lycée, bases, listes

**************
Quelques bases
**************

Calculs, opérations
===================

Dans le tableau ci-après, sont présentés les symboles utilisés pour les
opérations de base.

    ============================  ========   ==================
     Opérations                   Symboles   Exemples
    ============================  ========   ==================
    addition                         `+`       2 + 5 donne 7
    soustraction                     `-`       8 - 2 donne 6
    multiplication                   `*`     `6 * 7` donne 42
    exponentiation (puissance)       `**`    `5 ** 3` donne 125
    division                         /       7 / 2 donne 3.5
    reste de division entière        %       7 % 3 donne 1
    quotient de division entière     //      7 // 3 donne 2
    ============================  ========   ==================

.. attention::

    Si vous utilisez une version 2 de Python, la division se fera comme la
    division entière. Voir `différences entre Python2 et Python3`_.

.. index:: division

Affectations et égalité
=======================

Une affectation se fait en utilisant le signe ``=``. Tester si une égalité est
vraie ou fausse se fait en utilisant ``==``. Regardons l’exemple suivant.

.. sourcecode:: python
   :linenos:
    
   >>> a = 13
   >>> print(a)
   13
   >>> a == 13
   True

La ligne 1 ne donne aucun affichage. Si la variable a n’existait pas, alors elle
est créée et prend la valeur 13. Et si elle existait déjà, cette variable prend
aussi la valeur 13 (l’ancienne valeur est alors perdue).

.. sourcecode:: python

   >>> var = 12.5
   >>> var
   12.5
   >>> var == 49.3
   False

On remarque au passage que, dans l’interpréteur interactif, taper juste ``var``
a le même effet que ``print(var)``. Ce n’est pas le cas dans l’éditeur où l’on
a besoin de l’instruction ``print`` pour afficher un résultat.

.. note::

    Vous trouverez plus de tests dans la partie :ref:`tests`.

Un dernier exemple :

.. sourcecode:: python

   >>> C = 3.8
   >>> C = C + 1
   >>> print(C)
   4.8

Il faut bien faire attention à ne pas confondre l’égalité mathématique
`C = C + 1` qui est toujours fausse (ou l’équation d’inconnue C qui n’a pas
de solution) avec la nouvelle affectation de la variable C à l’aide de
l’ancienne valeur. Ce que l’on peut schématiser ainsi :

.. math::

    C_{\rm{nouveau}}=C_{\rm{ancien}}+1

.. admonition:: Pour aller plus loin

    Python permet les affectations multiples:

    >>> x = y = 42
    >>> x
    42
    >>> y
    42

    Avec la notion de tuple ou de liste, Python permet aussi les affectations
    parallèles:

    >>> x, y = (1, 2)  # mais aussi...
    >>> x, y = [1, 2]
    >>> (x, y) = (1, 2)
    >>> x, y = 1, 2    # donnent:
    >>> x
    1
    >>> y
    2
    >>> r, v, b = image.getpixel((x, y))
    >>> r, v, b
    (255, 0, 0)

    Pratique pour les coordonnées ou pour les triplets RVB (synthèse additive
    de couleurs), il ne faut cependant pas en abuser.


Chaînes de caractères
=====================

Pour afficher une chaîne de caractères, il faut utiliser la commande ``print``.

.. index:: print

.. attention::

    Depuis la version 3 de Python, la commande ``print`` est considérée comme
    une fonction dont il faut alors mettre les arguments entre parenthèses.

.. sourcecode:: python

   >>> print("bonjour monde")
   bonjour monde

On peut aussi affecter à une variable une chaîne de caractères. Il faut juste
faire attention que ``print(a)`` et ``print("a")`` n’auront pas le même effet,
comme le montre l’exemple suivant :

.. sourcecode:: python

   >>> abc = "deux mots"
   >>> print(abc)
   deux mots
   >>> print("abc")
   abc

Pas le même effet, en fait sauf dans un cas particulier comme celui-ci :

.. sourcecode:: python

   >>> a = "a"
   >>> print(a)
   a

Puis un exemple un peu plus complexe utilisant la commande ``print``,
qui sait gérer différents types de paramètres pour les afficher sur une même
ligne si on les sépare avec des virgules.

.. sourcecode:: python

   >>> a = 9
   >>> print("le carré de ", a, " est ", a**2)
   le carré de 9 est 81

.. admonition:: Pour aller plus loin

    On peut aussi utiliser (mais pour une première lecture, il vaut mieux
    s’arrêter là) les possibilités de formatage des chaines de caractères
    comme ci-dessous.

    .. sourcecode:: python

       >>> a = 9
       >>> print("le carré de {} est {}".format(a, a**2))
       le carré de 9 est 81

    Pour plus d’informations sur ce formatage, voir
    `la documentation officielle sur les chaines de caractères`_.

Notez finalement que la chaîne de caractères vide s’écrit ``""`` ou ``''`` et
que Python fourni des outils pour manipuler le texte à volonté
(voir :ref:`manips_texte`).


Listes
======

C’est une structure qui peut être très utile. Une liste peut contenir des
données de types différents. Dans le cadre de ce cours, nous nous limiterons aux
listes de nombres. En Python, une liste se note entre crochets avec la virgule
comme séparateur.

.. sourcecode:: python

   >>> a = [9, 7, 6, 9]

La **numérotation** des éléments de la liste **commence à 0**.

.. sourcecode:: python

   >>> a = [9, 7, 6, 9]
   >>> a[0]
   9
   >>> a[2]
   6

.. index:: len

Il peut être utile de connaitre ce que l’on appelle la **longueur d’une liste**.

.. sourcecode:: python

   >>> a = [9, 7, 6, 9]
   >>> len(a)
   4


On peut vouloir **ordonner** une liste de nombres dans **l’ordre croissant**.

.. index:: sort

.. sourcecode:: python

   >>> a = [9, 7, 6, 9]
   >>> a.sort()
   >>> a
   [6, 7, 9, 9]

.. index:: append

On peut vouloir **ajouter** un nombre à la liste, dans le sens d'agrandir la
liste d'un élément.

.. sourcecode:: python

   >>> a = [9, 7, 6, 9]
   >>> a.append(2)
   >>> a
   [9, 7, 6, 9, 2]


Puis il y a des listes toutes faites que l’on obtient grâce à la fonction
``range``.

.. index:: range

.. sourcecode:: python

   >>> a = range(5, 15, 2)
   >>> list(a)
   [5, 7, 9, 11, 13]

On a donc obtenu les entiers de 5 (inclus) à 15 (exclu) de 2 en 2 (on dit que
l’incrément est 2). On peut ne pas préciser l’incrément et dans ce cas,
l’incrément est 1.

.. sourcecode:: python

   >>> B = range(3, 9)
   >>> list(B)
   [3, 4, 5, 6, 7, 8]

On peut en plus ne pas préciser l’entier de départ. Et dans ce cas, la valeur de
départ est automatiquement 0.

.. sourcecode:: python

   >>> x = range(5)
   >>> list(x)
   [0, 1, 2, 3, 4]

Notez finalement que la liste vide s’écrit ``[]`` et
que Python fourni des outils pour manipuler les listes à volonté
(voir :ref:`manips_listes`).


.. _`différences entre Python2 et Python3`: annexes.html#differences-entre-python2-et-python3
.. _`la documentation officielle sur les chaines de caractères`: http://docs.python.org/3.3/library/string.html#formatexamples
