.. meta::
    :description: tests en Python : usage du if et du else
    :keywords: python, algorithmique, programmation, langage, lycée, tests, if, else, elif, si, sinon

******************************
Tests (instruction :samp:`if`)
******************************

Commençons par regarder le script ci-dessous :

.. sourcecode:: python

    print("Entrer un nombre plus petit que 100.")
    nb = input()
    
    if nb < 100:
        print("Ce nombre convient.")
    else:
        print("Ce nombre est trop grand.")

A l'execution du script, l'ordinateur va afficher la chaîne "Entrer un nombre plus petit que 100." et va marquer un temps d'arrêt. En effet, la commande :samp:`input()` attend ici que l'on rentre un nombre puis que l'on appuie sur la touche Entrée. Ce nombre sera alors affectée à la variable :samp:`nb`.

Puis le test comence :

    - si (IF en anglais) la condition (:samp:`nb<100`) est vraie, alors le bloc d'instructions qui suit (ici une seule instruction) est executé,
    - sinon (ELSE en anglais), c'est-à-dire si la condition (:samp:`nb < 100`) est fausse, alors c'est l'autre bloc d'instructions qui est executé.

.. note::

    Ici les deux blocs d'instructions ne sont composés que d'une seule instruction.

.. warning::

	Avec Python3, la fonction :samp:`input()` renvoie systèmatiquement une chaîne de caractères. Donc si c'est un nombre que l'on veut manipuler, il faudra utiliser la fonction :samp:`int()` s'il s'agit d'un entier ou :samp:`float()` s'il s'agit d'un décimal. Donc avec Python3, au dessus, il faut remplacer l'instruction :samp:`nb=input()` par
	
	.. sourcecode:: python
	
		chaine = input()
		nb = float(chaine)
	
	ou bien directement
	
	.. sourcecode:: python
	
		nb = float(input())


Exemple
=======

On peut écrire un petit programme qui nous dit si l'on peut construire un triangle dont les trois longueurs seraient données, en utilisant l'inégalité triangulaire).

.. sourcecode:: python

    # -*- coding:utf-8 -*-

    print("Entrer la liste de trois longueurs souhaitées")
    tri = input()

    tri.sort()      # ordonner les trois longueurs

    if tri[2] <= tri[0] + tri[1]:
        print("on peut construire le triangle")
    else:      
        print("on ne peut pas construire un tel triangle")
        


