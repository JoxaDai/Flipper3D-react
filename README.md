# Flipper3D-react
Projet de réalisation d'un jeux de flipper interactif 3D en React avec Cannon.js

NOTES IMPORTANTES DEV E5:  



Fonctionnalités ajoutés au jeu : 


- ajout d' un système de tableau des scores qui s'affiche une fois la partie terminer sur l'écran 
"via un style CSS moderne et adapté".
Il est également possible pour le joueur de choisir une image d'avatar qui s'affichera juste a côté 
de son pseudo et de son score final.
- ajout d'un timer qui limite le temps de jeu 
- ajout de bonus /items à collecter 

Les données seront stocker dans la table "scores" de la base "Flipper-React3_ROME"







npm install axios
(package utile a l'utilisation des variables de scoring pour le/les joueurs) 

POUR LANCER LE PROJET EN LOCALHOST : 
sur le CMD

cd C:\Flipper3D React E5
npm run
npm start 


Ajouter un projet Node.js :


npm init -y
 dépendances nécessaires pour le backend :


npm install express body-parser sqlite3

rentrer l'adresse : localhost:5000 (pour accèder au rendu du projet) 

installer également les ressources suivante (si elles n'était pas présente dans le projet pour la physique et les valeur three paramètres): 
npm install axios @react-three/fiber @react-three/drei @react-three/cannon three
Créez un fichier de serveur Node.js (si non présent):
 installer express via Node.js 
