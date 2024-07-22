Arcadia Zoo Website
Description
Le site web d'Arcadia Zoo a été développé pour servir de vitrine interactive du zoo, permettant aux visiteurs de préparer leur visite en découvrant les activités, services et animaux disponibles. En plus de fournir des informations aux visiteurs, le site dispose de fonctionnalités de gestion pour les employés du zoo, facilitant la gestion des animaux, des boutiques et des utilisateurs.

Fonctionnalités Principales
Page d'Accueil: Présentation générale du zoo et accès rapide aux sections principales.
Section Parc: Histoire, ambitions et convictions du zoo.
Section Services: Informations sur les boutiques, restaurants et autres services.
Section Animaux: Détails sur les animaux, leur habitat et leur état de santé.
Section Habitats: Exploration des différents habitats avec effet visuel interactif.
Billetterie: Formulaire de réservation des billets avec envoi de confirmation par email.
Gestion des Animaux: Interface pour ajouter, modifier et supprimer des informations sur les animaux.
Gestion des Services: Interface pour gérer les boutiques et autres services.
Gestion des Utilisateurs: Interface pour créer et gérer les comptes des employés et vétérinaires.
Authentification: Système de connexion sécurisé pour accéder aux pages de gestion.
Technologies Utilisées
HTML5: Structure du site.
CSS3: Stylisation et design responsive.
JavaScript: Interactivité et gestion des données en local.
Netlify: Déploiement du site avec HTTPS pour sécuriser les échanges de données.
Git: Contrôle de version et gestion du code source.
Visual Studio Code: Environnement de développement.



Manuel d'Utilisation
Présentation de l'Application
L'application Arcadia Zoo permet aux visiteurs de découvrir les différentes facettes du zoo et de préparer leur visite en ligne. Les employés peuvent utiliser les interfaces de gestion pour maintenir les informations à jour. Voici les identifiants pour réaliser les parcours possibles :

Administrateur:
Email: admin@arcadia
Mot de passe: arcadiaADMIN
Employé:
Email: work@arcadia
Mot de passe: arcadiaWORK
Vet
Email: vet@arcadia
Mot de passe: arcadiaVET


Navigation
Page d'Accueil: Introduction au zoo avec liens vers les sections principales.
Section Parc: Histoire et informations générales.
Section Services: Liste et détails des services offerts.
Section Animaux: Informations détaillées sur chaque animal.
Section Habitats: Exploration des différents habitats.
Billetterie: Formulaire pour réserver des billets.
Pages de Gestion: Accès restreint aux employés pour gérer les animaux, services et utilisateurs.


Charte Graphique
Palette de Couleurs
Couleur Principale: #5B473A (Brun)
Couleur Secondaire: #FFA500 (Orange)
Couleurs Complémentaires: #f0f0f0 (Gris clair), #d97e59 (Corail)
Police
Police Utilisée: Inter
Caractéristiques: Sans-serif, adaptée pour une lecture facile et claire.



Réflexions Initiales
L'objectif était de créer un site interactif et facile à gérer, utilisant des technologies modernes et accessibles.

Configuration de l'Environnement de Travail
IDE: Visual Studio Code pour son extensibilité et sa prise en charge des technologies web.
Version Control: Git pour suivre les modifications et collaborer efficacement.
Déploiement: Netlify pour son intégration facile avec GitHub et son support HTTPS.
Modèle Conceptuel de Données
Les données sont structurées pour inclure les informations sur les animaux, les utilisateurs et les services, permettant une gestion facile via des interfaces dédiées.

Diagramme d'Utilisation et de Séquence
Utilisateurs: Visiteurs et Employés
Séquences: Connexion, Gestion des Animaux, Gestion des Services, Réservation de Billets
Déploiement
Le site est déployé sur Netlify, avec un processus de CI/CD automatisé pour s'assurer que les dernières modifications sont toujours en ligne.

Sécurité
Les formulaires et données utilisateur sont sécurisés via des validations JavaScript, la prévention des attaques XSS, et le chiffrement HTTPS assuré par Netlify.

Veille Technologique
Une veille régulière a été menée pour identifier les vulnérabilités potentielles, notamment les attaques XSS et les failles de sécurité des formulaires, en suivant les recommandations de l'OWASP et autres sources fiables.