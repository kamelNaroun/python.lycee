.. meta::
    :description: manipulation listes et texte
    :keywords: python, algorithmique, programmation, langage, lycée, listes, texte

**********************************
Manipulation de listes et de texte
**********************************

Manipulation de listes
======================

.. sourcecode:: python

    >>> maliste = [0, "un", 2]  # on définit une liste pour faire des tests
    >>> len(maliste)            # on demande sa longueur (length en anglais)
    3
    >>> maliste[0]              # on demande le premier élément (rang ou index 0)
    0
    >>> maliste[1]              # le deuxième (index 1)
    'un'
    >>> "un" in maliste         # on demande si le texte "un" est un élément de la liste
    True
    >>> "deux" in maliste
    False
    >>> maliste.index("un")     # on demande l'index (rang) de l'élément "un"
    1
    >>> maliste.count("un")     # on demande le nombre d'apparitions de l'élément "un"
    1

Manipulation de texte
=====================

.. note::

    Puisque Python considère qu'une chaîne est une liste de caractères, tout ce que nous
    venons de dire sur les listes est encore valable.

.. sourcecode:: python

    >>> montexte = "Blabla bli bloubloublou."
    >>> len(montexte)
    24
    >>> montexte[0]
    'B'
    >>> montexte[1]
    'l'
    >>> montexte[23]
    '.'
    >>> "a" in montexte
    True
    >>> "z" in montexte
    False
    >>> montexte.index("B")
    0
    >>> montexte.index("b")
    3
    >>> montexte.index(".")
    23
    >>> montexte.count("b")
    5

Certaines manipulations sont propres aux chaînes.

.. sourcecode:: python

    >>> montexte.lower()
    'blabla bli bloubloublou.'
    >>> montexte.strip(".")
    'Blabla bli bloubloublou'
    >>> montexte.split()
    ['Blabla', 'bli', 'bloubloublou.']
    >>> montexte.lower().strip(".").split()
    ['blabla', 'bli', 'bloubloublou']


Ajouter du texte à du texte ou modifier par ajout
-------------------------------------------------

.. sourcecode:: python

    >>> montexte + " Merci."
    'Blabla bli bloubloublou. Merci.'
    >>> montexte
    'Blabla bli bloubloublou.'
    >>> montexte  = montexte + " Merci."
    >>> montexte
    'Blabla bli bloubloublou. Merci.'
    >>> montexte += " Beaucoup."
    >>> montexte
    'Blabla bli bloubloublou. Merci. Beaucoup.'
