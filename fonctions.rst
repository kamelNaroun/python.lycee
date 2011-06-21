.. meta::
    :description: les fonctions en Python, au lycée
    :keywords: python, algorithmique, programmation, langage, lycée, fonctions, def

*********
Fonctions
*********

Les fonctions comme on les connaît au lycée
*******************************************

On peut définir une fonction d'une variable . Considérons par exemple la fonction affine :math:`f` suivante définie sur **R** par:

.. math::

	f : x\longmapsto 2x+1

Pour la définir en Python :

.. sourcecode:: python

    >>> def f(x):
    ...     return 2 * x + 1
    ...
    >>> # on peut maintenant l'utiliser
    >>> f(0)
    1
    >>> # et la réutiliser
    >>> f(5)
    11

.. attention::
   
    Vous avez remarqué qu'à la deuxième ligne, on n'a pas commencé à écrire au début de la ligne. On dit qu'on fait une indentation. Et cette indentation est indispensable pour que Python fasse son travail. En règle générale, le bloc d’instructions (une ou plusieurs lignes) qui dépend d’une ligne (devant elle se terminer par :) doit être indenté. C’est obligatoire et en plus cela a l’avantage de rendre le script plus lisible. Vous avez dû remarquer qu'à cette occasion, le prompt ``...`` remplace le ``>>>`` .

Le principe de définition de fonctions est intéressant pour au moins deux raisons:

 - cela nous permet de ne pas répéter un calcul long à taper,
 - car Python possède un type spécial dédié au fonctions, que l'on peut donc manipuler,
   mettre dans des listes pour les étudier les unes à la suite des autres...
 
.. sourcecode:: python

    >>> f
    <function f at 0xb71839ec>

Les fonctions comme base de la programmation
********************************************

Les fonctions vues en seconde prennent souvent un nombre pour en calculer l'image.
Mais en programmation, on rencontre aussi beaucoup de fonctions prenant du texte, une liste, une fonction ou ne prenant pas de paramètre du tout. Elles peuvent aussi retourner du texte, une liste, une fonction, voire même ne rien retourner.

La fonction suivante n'a pas de paramètre et ne retourne rien non plus (pas de `return`).

.. sourcecode:: python

    >>> def hi():
    ...     print("Hello from Python!!!")
    ...
    >>> hi()
    Hello from Python!!!

La fonction ne renvoit rien mais ne chôme pas pour autant, elle écrit quelque chose à l'écran.
On peut, grâce à ce genre de fonction, lister une suite de tâches répétitive que l'on pourra lancer d'un seul coup.
C'est pratique aussi pour clarifier le programme, car on peut en séparer les différentes parties.

La fonction suivante prend du texte en paramètre et ne renvoit toujours rien.

.. sourcecode:: python

    >>> def hi(name):
    ...     print("hello " + name + " from Python!!!")
    ...
    >>> hi("John")
    hello John from Python!!!

Le travail est ainsi fait "en fonction" du texte passé en paramètre.

La fonction suivante ne prend pas de paramètre mais va retourner une lettre au hasard.

.. sourcecode:: python

    >>> from random import choice
    >>> def lettre():
    ...     return choice('abcdefghijklmnopqrstuvwxyz')
    ...
    >>> lettre()
    'm'
    >>> lettre()
    'r'

Pour enfoncer le clou sur la différence entre une fonction qui retourne quelque chose et une autre qui ne retourne rien, examinons cet exemple:

.. sourcecode:: python

	>>> def f(x): return 2 * x
	...
	>>> def g(x): print(2 * x)
	...
	>>> f(3)
	6
	>>> g(3)
	6
	>>> # MAIS
	>>> f(3) == 6
	True
	>>> g(3) == 6
	6
	False

Beaucoup de combinaisons sont possibles pour les fonctions,
à vous de construire les bonnes suivant vos besoins,
en fonction de la façon dont vous pensez découper votre programme.

