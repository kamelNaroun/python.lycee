.. meta::
    :description: Exemples d'algorithmes en Python pour le lycée
    :keywords: python, algorithmique, programmation, langage, lycée, exemples

********
Exemples
********

Tableau de valeurs
==================

On peut facilement obtenir le tableau de valeur d'une fonction sur un intervalle borné avec un certain pas.

Considérons la fonction :math:`g` définie par :math:`g(x)=\sqrt{x^4+1}`. Si l'on souhaite obtenir les valeurs prises par la fonction sur l'intervalle :math:`[2;3]` avec un pas de :math:`0,1` , voici ce que l'on peut faire :

.. sourcecode:: python
    
    from math import sqrt

    def g(x):
        return sqrt(x**4 + 1)

    x = 2
    while x < 3.1:
        print("g(",x,") =",g(x))
        x = x + 0.1

En exécutant ce script, voici ce que l'on obtient

.. sourcecode:: python

    g( 2 ) = 4.12310562562
    g( 2.1 ) = 4.52195754071
    g( 2.2 ) = 4.94222621902
    g( 2.3 ) = 5.38368832679
    g( 2.4 ) = 5.8461611336
    g( 2.5 ) = 6.32949445059
    g( 2.6 ) = 6.83356422374
    g( 2.7 ) = 7.35826745912
    g( 2.8 ) = 7.90351820394
    g( 2.9 ) = 8.46924435826
    g( 3.0 ) = 9.05538513814

On peut ne pas trouver très beau les espaces après et avant les parenthèses, puis vouloir que les arrondis à :math:`10^{-2}` près. Pour cela, il suffit d'utiliser les possibilités de formatage de la fonction print comme cela.

.. sourcecode:: python

    from math import sqrt

    def g(x):
        return sqrt(x**4 + 1)

    x = 2
    while x < 3.1:
        print("g(%0.1f) = %0.2f" %(x, g(x)))
        x = x + 0.1

Et on obtient : 

.. sourcecode:: python

<<<<<<< HEAD
    g(2.0)= 4.12
=======
    g(2.0) = 4.12
>>>>>>> meilleurs_exemples
    g(2.1) = 4.52
    g(2.2) = 4.94
    g(2.3) = 5.38
    g(2.4) = 5.85
    g(2.5) = 6.33
    g(2.6) = 6.83
    g(2.7) = 7.36
    g(2.8) = 7.90
    g(2.9) = 8.47
    g(3.0) = 9.06

Evidemment dans les deux cas, le signe = est affiché, mais il s'agit bien entendu d'une approximation. On peut signaler au passage l'existence de la fonction round() qui donne l'arrondi à la précision demandée

.. sourcecode:: python

    >>> round(12.456, 1)   # arrondi de 12.456 au dixième
    12.5
    >>> a = 8.743159
    >>> round(a, 2)        # arrondi de a au centième
    8.74
    >>> round(a)          # arrondi à l'unité
    9

Intervalle de fluctuation
=========================

On peut demander d'écrire un programme qui permet de déterminer l'intervalle de fluctuation au seuil de 95% à partir d'une liste de valeurs, connaissant évidemment le centre de l'intervalle. Voici une proposition avec une précision de l'ordre du millième.

.. sourcecode:: python

    # -*- coding:utf-8 -*-

    # première entrée : la série en liste
    serie = [0.674, 0.679, 0.681, 0.692, 0.705, 0.711, 0.718, 0.718, 0.732, 0.760]

    # deuxième entrée : le centre de l'intervalle
    centre = 0.7

    # le nombre de valeurs
    effectif_total = float(len(serie))   # float() inutile à partir de la version 3

    # initialisation du rayon de l'intervalle
    rayon = 0

    # initialisation du taux de valeurs dans l'intervalle
    taux = 0

    # boucle où on augmente le rayon d'un intervalle centré sur la valeur centre
    # jusqu'à atteindre le taux de 95%
    while taux < 0.95:
        # initialisation de la variable qui compte
        # le nombre d'éléments dans l'intervalle
        effectif = 0
        for valeur in serie:
            if centre - rayon <= valeur <= centre + rayon:
                effectif += 1
        taux = effectif / effectif_total
        rayon += 0.001      # pour une précision au millième

    print("[%0.3f , %0.3f]" %(centre - rayon, centre + rayon))


Un jeu de dé
============

On lance un dé. Si le numéro est 1, 5 ou 6, alors c'est gagné, sinon c'est perdu. Ecrire un programme simulant ce jeu d'abord sans utiliser de liste puis en utilisant une liste. Voici une première proposition :

.. sourcecode:: python

    # -*- coding:utf-8 -*-

    from random import randint

    d = randint(1, 6)
    print(d)

    if d == 1:
        print("gagné")
    else:
        if d == 5:
            print("gagné")
        else:
            if d == 6:
                print("gagné")
            else:
                print("perdu")

En utilisant elif, on peut simplifier le script comme ceci :

.. sourcecode:: python

    # -*- coding:utf-8 -*-

    from random import randint

    d = randint(1, 6)
    print(d)

    if d == 1:
        print("gagné")
    elif d == 5:
        print("gagné")
    elif d == 6:
        print("gagné")
    else:
        print("perdu")

Et maintenant en utilisant une liste, on peut faire encore plus simple :

.. sourcecode:: python

    # -*- coding:utf-8 -*-

    from random import randint

    d = randint(1, 6)
    print(d)

    if d in [1, 5, 6]:
        print("gagné")
    else:
        print("perdu")

