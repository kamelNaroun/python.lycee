.. meta::
    :description: manipulation listes et texte
    :keywords: python, algorithmique, programmation, langage, lycée, listes, texte

******************************************
Manipulation basique de listes et de texte
******************************************

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
    >>> montexte = montexte + " Merci."
    >>> montexte
    'Blabla bli bloubloublou. Merci.'
    >>> montexte += " Beaucoup."
    >>> montexte
    'Blabla bli bloubloublou. Merci. Beaucoup.'

******************************************
Manipulation avancée de listes et de texte
******************************************

Prendre un élément en comptant à partir de la fin
=================================================

.. sourcecode:: python

    >>> # On reprend une liste de test, un peu plus longue cette fois, et homogène.
    >>> maliste = ["zéro", "un", "deux", "trois", "quatre", "cinq"]
    >>> maliste[-1]     # on demande le dernier élément
    'cinq'
    >>> maliste[-2]     # l’avant-dernier
    'quatre'
    >>> maliste[-3]     # l’avant-avant-dernier (ou antépénultième), et ainsi de suite…
    'trois'

Prendre une partie d’une liste
==============================

.. sourcecode:: python

    >>> maliste[1:3]    # Ici on demande une partie de la liste et non un élément seul.
    ['un', 'deux']
    >>> # On remarque que cela fonctionne comme range(1,3), le 3 n’est pas compris.
    >>> # Voyons maintenant si l’on ne précise pas l’indice de départ ou d’arrivée:
    >>> maliste[1:]     # Sans indice d’arrivée, on ne s’arrête qu’à la fin,
    ['un', 'deux', 'trois', 'quatre', 'cinq']
    >>> maliste[:3]     # sans indice de départ, on commence du tout début.
    ['zéro', 'un', 'deux']

Le mot le plus long
===================

On présente ici un petit algorithme qui trouve le mot le plus long dans le texte
stocké dans la variable ``texte``.

.. sourcecode:: python

	>>> texte = "voici une suite de mots presque en vrac"
	>>> mot_long = ""  # Cette variable contiendra le mot cherché.
	>>> # Le recordman de longueur en quelque sorte.
	>>> # Pour l’instant on stocke le mot vide "" dedans.
	>>> mots = texte.split()              # On construit la liste des mots.
	>>> for mot in mots:                  # On parcourt cette liste (boucle for).
	...     if len(mot) > len(mot_long):  # Si le mot rencontré bat le record de longueur,
	...         mot_long = mot            # on le proclame recordman.
	... 
	>>> mot_long                          # On affiche le résultat.
	'presque'

Liste des rangs d’apparition d’une lettre
=========================================

.. sourcecode:: python

	>>> mot = "apparition"
	>>> rangs = []                    # Cette liste va accumuler les rangs de la lettre *i*.
	>>> for rang in range(len(mot)):  # La variable rang parcourt les entiers de 0 au rang de la dernière lettre du mot.
	...     if mot[rang] == 'i':
	...         rangs.append(rang)    # Si la lettre du mot est 'i', on stocke le rang dans notre liste.
	... 
	>>> rangs                         # On affiche le résultat.
	[5, 7]

