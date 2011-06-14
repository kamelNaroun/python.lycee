.. meta::
    :description: les bases en Python pour le lycée
    :keywords: python, algorithmique, programmation, langage, lycée, bases, listes

**************
Quelques bases
**************

Calculs, opérations
===================

Dans le tableau ci-après, sont présentés les symboles utilisés pour les opérations de base.

    ============================  ========   ==================
     Opérations                   Symboles   Exemples
    ============================  ========   ==================
    addition                         `+`       2 + 5 donne 7
    soustraction                     `-`       8 - 2 donne 6
    multiplication                   `*`     `6 * 7` donne 42
    exponentiation (puissance)       `**`    `5 ** 3` donne 125
    division                         /       10 / 2 donne 5
    reste de division entière        %       7 % 3 donne 1
    quotient de division entière     //      7 // 3 donne 2
    ============================  ========   ==================

.. attention::

    Si vous n’utilisez pas une version 3 de Python, la division fera comme la division entière. Pour retrouver la «vraie» division, c’est-à-dire la division décimale, il faut importer un module comme le montre l’exemple suivant.


.. sourcecode:: python

    >>> 7/2
    3
    >>> from __future__ import division
    >>> # la division est maintenant décimale
    >>> 7/2
    3.5

Pour toute la suite, je suppose que la division est décimale.


Affectations et égalité
=======================

Une affectation se fait en utilisant le signe =. Tester si une égalité est vraie
ou fausse se fait en utilisant ==. Regardons l’exemple suivant.

.. sourcecode:: python
   :linenos:
    
   >>> a=13
   >>> print(a)
   13
   >>> a==13
   True

La ligne 1 ne donne aucun affichage. Si la variable a n’existait pas, alors elle est créée et prend la valeur 13. Et si elle existait déjà, cette variable prend aussi la valeur 13 (l’ancienne valeur est alors perdue).

.. sourcecode:: python

   >>> var=12.5
   >>> var
   12.5
   >>> var==49.3
   False

On remarque au passage que, dans l’interpréteur interactif, taper juste ``var`` a le même effet que ``print(var)``.
Ce n’est pas le cas dans l’éditeur où l’on a besoin de l’instruction ``print`` pour afficher un résultat.

Un dernier exemple :

.. sourcecode:: python

   >>> C=3.8
   >>> C=C+1
   >>> print(C)
   4.8

Il faut bien faire attention à ne pas confondre l’égalité mathématique `C = C + 1` qui est toujours fausse (ou l’équation d’inconnue C qui n’a pas de solution) avec la nouvelle affectation de la variable C à l’aide de l’ancienne valeur. Ce que l’on peut schématiser ainsi :

.. math::

    C_{\rm{nouveau}}=C_{\rm{ancien}}+1


Chaîne de caractères
====================

Pour afficher une chaîne de caractères, il faut utiliser la commande print.

.. attention::

    Depuis la version 3 de Python, la commande print est considérée comme une fonction dont il faut alors mettre les arguments entre parenthèses.

.. sourcecode:: python

   >>> print("bonjour monde")
   bonjour monde

On peut aussi affecter à une variable une chaîne de caractères. Il faut juste faire attention que *print(a)* et *print("a")* n’auront pas le même effet, comme le montre l’exemple suivant :

.. sourcecode:: python

   >>> abc="deux mots"
   >>> print(abc)
   deux mots
   >>> print("abc")
   abc

Pas le même effet, en fait sauf dans un cas particulier comme celui-ci :

.. sourcecode:: python

   >>> a="a"
   >>> print(a)
   a

Puis un exemple un peu plus complexe utilisant la commande ``print``,
qui sait gérer différent types de paramètres pour les afficher sur une même ligne si on les sépare avec des virgules.

.. sourcecode:: python

   >>> a=9
   >>> print("le carré de ",a," est ",a**2)
   le carré de 9 est 81

On peut aussi utiliser (mais pour une première lecture, il vaut mieux s’arrêter là) les possibilités de formatage de la fonction print comme ci-dessous.

.. sourcecode:: python

   >>> a=9
   >>> print("le carré de %i est %i" %(a,a**2))
   le carré de 9 est 81

Pour plus d’informations sur ce formatage, voir en annexe.

Notez finalement que la chaîne de caractères vide s’écrit ``""`` ou ``''``.

Listes
======

C’est une structure qui peut être très utile. Une liste peut contenir des données de type différents. Dans le cadre de ce cours, nous nous limiterons aux listes de nombres. En Python, une liste se note entre crochets avec la virgule comme séparateur.

.. sourcecode:: python

   >>> a=[9,7,6,9]

La **numérotation** des éléments de la liste **commence à 0**.

.. sourcecode:: python

   >>> a=[9,7,6,9]
   >>> a[0]
   9
   >>> a[2]
   6

Il peut être utile de connaitre ce que l’on appelle la **longueur d’une liste**.

.. sourcecode:: python

   >>> a=[9,7,6,9]
   >>> len(a)
   4

On peut vouloir **ranger** une liste de nombres dans **l’ordre croissant**.

.. sourcecode:: python

   >>> a=[9,7,6,9]
   >>> a.sort()
   >>> a
   [6,7,9,9]

On peut vouloir **ajouter** un nombre à la liste, dans le sens d'agrandir la liste d'un élément.

.. sourcecode:: python

   >>> a=[9,7,6,9]
   >>> a.append(2)
   >>> a
   [9,7,6,9,2]

Puis il y a des listes toutes faites que l’on obtient grâce à la fonction **range**.

.. sourcecode:: python

   >>> a=range(5,15,2)
   >>> a
   [5,7,9,11,13]

On a donc obtenu les entiers de 5 (inclus) à 15 (exclu) de 2 en 2 (on dit que
l’incrément est 2). On peut ne pas préciser l’incrément et dans ce cas, l’incrément
est 1.

.. sourcecode:: python

   >>> B=range(3,9)
   >>> B
   [3,4,5,6,7,8]

On peut en plus ne pas préciser l’entier de départ. Et dans ce cas, la valeur de
départ est automatiquement 0.

.. sourcecode:: python

   >>> x=range(5)
   >>> x
   [0,1,2,3,4]

Notez finalement que la liste vide s’écrit ``[]``.
