.. meta::
    :description: utilisation de Python par l'interpréteur et par l'éditeur
    :keywords: python, algorithmique, programmation, langage, lycée, interpréteur, éditeur

********************
Première utilisation
********************

.. _interpreteur:

L’interpréteur
==============

L’esprit d’utilisation est un peu le même que celui d’une calculatrice. Le triple chevron >>> est l’invite de Python (prompt en anglais), ce qui signifie que Python attend une commande.

.. sourcecode:: python

   >>> 2+3*5
   17

On remarque au passage que la priorité des opérations est bien respectée.

Ce symbole est remplacé par ... si on tape un bloc d’instructions.


.. sourcecode:: python

   >>> for i in [2,5,7]:
   ...     print (i*3)
   ...
   6
   15
   21

Pour écrire des commentaires, il faut commencer par le caractère #.

.. sourcecode:: python

   >>> # une ligne qui ne fait rien

Bon, mettre un commentaire dans l’interpréteur n’a pas beaucoup d’intérêt, mais cela peut s’avérer utile dans l’écriture d’un script dans un éditeur de texte.

.. image:: /images/pyscripter-interpreteur1.png
    :align: center

.. _editeur:

L’éditeur
=========

On peut y écrire des scripts, c’est-à-dire des programmes petits ou grands. Voici un exemple :

.. sourcecode:: python
   :linenos:

   from math import *	# importation du module math

   d=5
   for i in range(20):
       d=sqrt(d)

   print("on trouve",d)

Ce petit script calcule et affiche la racine carrée de la racine carrée de ... (20
fois) de 5

.. math::

   \sqrt{\sqrt{\dots \sqrt{5}}}

Quelques explications sur ce script.
    - On reviendra plus tard sur la première ligne.
    - La ligne 2 n’est qu’un saut de ligne. Pour Python, cela ne fait rien. Cela sert juste à rendre le script plus lisible.
    - La ligne 4 se termine par :, puis la ligne suivante est indentée (par exemple grâce à l’usage de la touche tabulation ou bien quatre pressions de la touche espace, mais attention à ne pas mélanger les deux façons de faire).

.. image:: /images/pyscripter-editeur1.png
    :align: center

.. attention::
   
    L'indentation est indispensable pour que Python fasse son travail. En règle générale, le bloc d’instructions (une ou plusieurs lignes) qui dépend d’une ligne (devant elle se terminer par :) doit être indenté. C’est obligatoire et en plus cela a l’avantage de rendre le script plus lisible. 



