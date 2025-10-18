<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-17T18:57:38+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "fr"
}
-->
# 🚨 Mission 07 : Ajouter un nouveau sujet avec déclencheur et nœuds

## 🕵️‍♂️ NOM DE CODE : `OPÉRATION RESTER SUR LE SUJET`

> **⏱️ Fenêtre temporelle de l'opération :** `~60 minutes`

🎥 **Regardez la vidéo explicative**

[![Miniature vidéo déclencheur](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.fr.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Regardez la vidéo explicative sur YouTube")

## 🎯 Résumé de la mission

Vous avez créé un agent. Il écoute, apprend et répond aux questions - mais maintenant, il est temps d'être plus stratégique. Dans cette mission, vous allez plonger dans les détails et apprendre à votre agent à répondre avec précision à des demandes spécifiques.

Avec les Sujets et Déclencheurs, votre agent peut :

- Reconnaître l'intention

- Diriger les conversations avec logique

- Collecter et stocker des variables

- Déclencher des flux et agir

Vous ne construisez pas seulement un dialogue, vous connectez son cortex décisionnel. Bienvenue dans le Nexus Neuronal.

## 🔎 Objectifs

Dans cette mission, vous apprendrez :

1. Comprendre ce que sont les sujets et leur rôle dans la création de conversations structurées pour votre agent
1. Apprendre l'anatomie des sujets, y compris les phrases déclencheuses et les nœuds de conversation
1. Explorer différents types de nœuds de conversation et comment utiliser Power Fx pour une logique dynamique
1. Créer des sujets personnalisés à partir de zéro pour gérer des demandes et tâches spécifiques des utilisateurs
1. Construire un sujet fonctionnel qui se connecte aux données SharePoint en utilisant des connecteurs et outils

## 🤔 Qu'est-ce qu'un sujet ?

Un sujet est une conversation structurée qui aide votre agent à répondre à des questions ou tâches spécifiques des utilisateurs. Pensez à un sujet comme une mini-conversation ou tâche que votre agent peut gérer. Chaque sujet est conçu pour répondre à une question ou demande spécifique de l'utilisateur.

### 🌌 Objectif d'un sujet

Il existe trois objectifs courants pour les sujets en fonction des besoins des utilisateurs :

**Informationnel** - répond à des questions telles que :

- `Qu'est-ce que …?`
- `Quand …?`
- `Pourquoi …?`
- `Pouvez-vous me dire …?`

**Accomplissement de tâche** - aide les utilisateurs à _faire_ quelque chose :

- `"Je veux …"`
- `"Comment puis-je …?"`
- `"J'ai besoin de …?"`

**Dépannage** - résout des problèmes :

- `Quelque chose ne fonctionne pas …`
- `Je rencontre un message d'erreur …`
- `Je vois quelque chose d'inattendu …?`

Vous pouvez également créer des sujets pour des questions ambiguës comme `J'ai besoin d'aide`, qui demandent aux utilisateurs plus de détails avant de continuer.

## 🐦 Pourquoi les sujets sont-ils utiles ?

Les sujets vous aident à :

- Organiser les connaissances de votre agent.

- Rendre les conversations naturelles.

- Résoudre efficacement les problèmes des utilisateurs.

## 🪺 Types de sujets

1. **Sujets système** - ils sont intégrés et gèrent des événements courants tels que :
    - Démarrer une conversation
    - Terminer une conversation
    - Gérer les erreurs
    - Demander aux utilisateurs de se connecter
    - Escalader vers un agent humain

1. **Sujets personnalisés** - vous les créez pour gérer des tâches ou questions spécifiques telles que :
    - Demande de congé des employés
    - Demande de nouvel appareil ou remplacement

![Types de sujets](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.fr.png)

## 🧬 Anatomie d'un sujet

Chaque sujet contient généralement les éléments suivants.

### 🗣️ Phrases déclencheuses

Ce sont des mots ou phrases que les utilisateurs pourraient dire pour démarrer le sujet.

**Exemples :**

Pour un sujet de demande de congé, les phrases déclencheuses pourraient être :

- `Je veux prendre des congés`
- `Demande de congé`
- `Postuler pour un congé`
- `Comment soumettre une demande de congé ?`

Pour un sujet de demande d'appareil, les phrases déclencheuses pourraient être :

- `J'ai besoin d'un nouvel appareil`
- `Puis-je demander un appareil ?`
- `Pouvez-vous m'aider avec une demande d'appareil`

### 💬 Nœuds de conversation

Un sujet est composé de nœuds qui sont des étapes que l'agent suit une fois le sujet déclenché. Vous connectez ces étapes pour construire un flux de conversation que votre agent suit lorsqu'il interagit avec les utilisateurs.

Pensez à ces étapes comme des instructions ou actions telles que :

- Poser des questions à l'utilisateur
- Envoyer des messages
- Appeler un service externe tel qu'un système de gestion des congés
- Définir ou vérifier des variables
- Utiliser des conditions pour diviser la conversation
- Diriger vers un autre sujet

![Nœuds de conversation](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.fr.png)

Voici les principaux types de nœuds que vous pouvez ajouter à un agent :

#### Envoyer un message

- **Objectif** - envoie un message à l'utilisateur.
- **Exemple** - `Merci pour votre demande ! Je vais vous aider.`

Ce nœud permet à votre agent d'envoyer des messages aux utilisateurs, qui peuvent être du texte simple ou du contenu enrichi comme des images, vidéos, cartes, réponses rapides et cartes adaptatives.

Vous pouvez personnaliser les messages en utilisant des variables, ajouter plusieurs variantes de messages pour plus de diversité, et même personnaliser la sortie vocale pour les canaux activés par la voix.

!!! tip
    Pensez-y comme un bloc "dire quelque chose" qui aide votre agent à communiquer clairement et de manière interactive avec les utilisateurs.

#### Poser une question

- **Objectif** - pose une question à l'utilisateur et attend sa réponse.
- **Exemple** - `Quelles sont vos dates de congé ?`

Ce nœud est utilisé pour demander des informations spécifiques aux utilisateurs pendant une conversation et stocker leurs réponses dans des variables pour une utilisation ultérieure.

Vous pouvez personnaliser le type de question comme une saisie de texte ou utiliser des entités pour une liste définie de valeurs parmi lesquelles un utilisateur peut choisir, et définir comment l'agent doit se comporter si l'utilisateur donne une réponse invalide ou passe la question.

Il prend également en charge le contenu enrichi comme les images et les réponses rapides, et vous permet d'affiner la validation, les relances et les paramètres d'interruption pour que le flux de conversation soit fluide.

!!! tip
    Pensez-y comme un bloc "demander et écouter" qui aide votre agent à interagir avec les utilisateurs de manière structurée que vous définissez.

#### Demander avec une carte adaptative

- **Objectif** - envoyer une carte interactive enrichie en utilisant JSON.
- **Exemple** - une carte qui affiche un sélecteur de date de calendrier pour qu'un utilisateur choisisse une date.

Ce nœud affiche des cartes interactives enrichies que les utilisateurs peuvent remplir et soumettre, telles que des formulaires avec des zones de texte, des boutons et des images. Il capture les entrées de l'utilisateur et les stocke dans des variables, que votre agent peut utiliser plus tard dans la conversation.

!!! tip
    Pensez-y comme un bloc "constructeur de formulaire" personnalisable qui rend votre agent plus engageant et capable de collecter des informations détaillées des utilisateurs.

#### Ajouter une condition

- **Objectif** - ajouter une logique à la conversation. Il vérifie quelque chose et décide quoi faire ensuite.
- **Exemple** - si l'utilisateur dit `Oui`, passez à l'étape suivante. Si `Non`, terminez la conversation.

Ce nœud crée des points de décision dans le flux de conversation de votre agent en vérifiant si une variable répond à certains critères. En fonction de si la condition est vraie ou fausse, l'agent suit des chemins différents.

!!! tip
    Pensez-y comme un bloc "si-alors" qui aide votre agent à prendre des décisions en fonction des données utilisateur ou des informations stockées dans des variables.

#### Gestion des variables

- **Objectif** - stocke ou efface des informations (appelées variables) pendant la conversation.
- **Exemple** - enregistre la date sélectionnée par l'utilisateur dans le nœud Poser une question qui affiche une carte adaptative.

Ce nœud vous permet de stocker et gérer des informations pendant une conversation, cela peut être le nom, la réponse ou les préférences d'un utilisateur. Vous pouvez utiliser différents types de variables comme du texte, des nombres ou des dates, et elles peuvent être limitées à un seul sujet, partagées entre les sujets (globales), ou même extraites du système ou de l'environnement.

!!! tip
    Pensez-y comme une "boîte mémoire" qui aide votre agent à se souvenir des informations et à les utiliser au fur et à mesure que la conversation continue avec l'utilisateur.

#### Gestion des sujets

- **Objectif** - déplace la conversation vers un autre sujet ou étape au sein du sujet, transfère la conversation ou termine le sujet ou la conversation.
- **Exemple** - rediriger vers un sujet "Politique de congé".

Ce nœud permet à votre agent de passer d'un sujet à un autre sans redémarrer la conversation, de terminer le sujet, de transférer ou de terminer la conversation, ou d'aller à une étape différente au sein du même sujet. Il aide à guider les utilisateurs à travers différentes parties du flux de conversation en passant en douceur entre les sujets, et vous pouvez transmettre des variables entre eux pour conserver le contexte.

!!! tip
    Pensez-y comme un bloc "aller à une autre section/étape" qui aide votre agent à être flexible dans ses échanges avec les utilisateurs.

#### Ajouter un outil

- **Objectif** - se connecte à des outils tels que des connecteurs, des flux d'agent, des invites, des recherches personnalisées, des requêtes de recherche, des compétences, des protocoles de contexte de modèle.
- **Exemple** - Flux d'agent exécuté après que l'utilisateur soumet sa demande de congé.

Ce nœud donne à votre agent la capacité d'interagir avec des systèmes externes ou d'effectuer des tâches spécifiques, comme envoyer des emails, vérifier la météo ou accéder à des bases de données. Vous pouvez ajouter des outils en utilisant des connecteurs intégrés, des API personnalisées, des flux d'agent, des invites, ou vous connecter à des serveurs MCP (Model Context Protocol), et même une automatisation de l'interface utilisateur graphique pour les applications de bureau via l'outil d'utilisation de l'ordinateur.

!!! tip
    Pensez aux outils comme des "blocs d'action" qui donnent à votre agent des super-pouvoirs pour faire des choses au-delà du _chat_, comme appeler une API, exécuter un processus ou collecter automatiquement des données utilisateur.

#### Nœud de réponses génératives

- **Objectif** - utilise un modèle de langage avancé pour générer des réponses naturelles et humaines basées sur la question de l'utilisateur et les données connectées.
- **Exemple** - utilise la source de connaissances connectée contenant des informations sur les droits aux congés pour répondre aux questions des utilisateurs concernant les demandes de congé.

Ce nœud permet à votre agent de répondre aux questions des utilisateurs en utilisant des informations provenant de diverses sources de connaissances, comme des sites web, des documents, SharePoint ou des données personnalisées. Il peut être utilisé comme solution de secours lorsqu'aucun sujet correspondant n'est trouvé, ou au sein d'un sujet pour fournir des réponses plus détaillées et dynamiques basées sur des sources spécifiques que vous avez configurées pour votre agent.

!!! tip
    Pensez-y comme un "bloc de réponse intelligente" qui aide votre agent à fournir des réponses utiles et précises en recherchant du contenu de confiance que vous définissez.

#### Nœud de requête HTTP

- **Objectif** - connecte votre agent à des systèmes externes en envoyant des appels API (par exemple `GET` ou `POST`) pour récupérer ou mettre à jour des données.
- **Exemple** - lorsqu'un utilisateur demande son solde de jours de congé, l'agent effectue une requête `GET` au système de gestion des congés et extrait les `joursDeCongéRestants` de la réponse API et répond à l'utilisateur avec la valeur.

Ce nœud permet à votre agent de se connecter à des systèmes externes en envoyant des appels API REST, comme des requêtes `GET` ou `POST`. Vous pouvez personnaliser la requête avec des en-têtes, du contenu de corps, et même utiliser Power Fx pour inclure des données dynamiques, puis stocker la réponse dans des variables pour une utilisation ultérieure dans la conversation.

!!! tip
    Pensez-y comme un "bloc pour obtenir des informations" qui aide votre agent à communiquer avec d'autres services, comme récupérer des détails utilisateur ou envoyer des données à un autre système.

#### Envoyer un événement

- **Objectif** - permet à votre agent d'envoyer des actions non liées à des messages, telles que des mises à jour système ou des déclencheurs d'outils - au client ou au canal, l'aidant à effectuer des tâches.
- **Exemple** - réagir à un utilisateur rejoignant un chat en affichant un message de bienvenue.

Ce nœud permet à votre agent d'envoyer des actions non liées à des messages à des systèmes ou canaux externes, qui peuvent ensuite décider comment répondre. Vous donnez à chaque événement un nom et attachez une valeur, qui peut être un simple nombre ou texte, une variable, ou une formule Power Fx, et il est envoyé sous forme d'objet JSON.

!!! tip
    Pensez-y comme un "bloc déclencheur silencieux" qui aide votre agent à effectuer des tâches en arrière-plan ou à communiquer avec des outils externes sans nécessiter que l'utilisateur dise quoi que ce soit.

## 🏋🏻‍♀️ Utiliser Power Fx dans vos nœuds

Dans Copilot Studio, Power Fx est un langage de programmation low-code utilisé pour ajouter de la logique et un comportement dynamique à votre agent. C'est le même langage utilisé dans Microsoft Power Apps, et il est conçu pour être simple et semblable à Excel, ce qui le rend facile pour les développeurs et non-développeurs.

![Expression Power Fx](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.fr.png)

### Ce que Power Fx peut faire dans les sujets

- Définir et manipuler des variables
      - Exemple : `Set(userName, "Adele Vance")`
- Créer des conditions
      - Exemple : `If(score > 80, "Pass", "Fail")`
- Formater et transformer des données
      - Exemple : `Text(DateValue, "dd/mm/yyyy")`

### Pourquoi utiliser Power Fx ?

- **Flexible :** vous pouvez construire une logique sans écrire des lignes de code complètes.

- **Familier :** si vous avez utilisé des formules Excel, cela semble très similaire.

- **Puissant :** il vous permet de personnaliser les conversations, valider les entrées, et contrôler le comportement de votre agent en fonction des données utilisateur.

## 🏗️ Comment créer et modifier des sujets ?

Il existe deux façons de créer et modifier des sujets pour vos agents.

### 1. Créer à partir de zéro

Cela vous permet de construire des flux de conversation personnalisés à partir de rien, et vous pouvez ajouter ou supprimer des nœuds selon vos besoins lors de la modification de votre sujet.

![Ajouter un sujet](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.fr.png)

#### Pourquoi cela est utile

- Cela vous donne un contrôle total sur la façon dont votre agent répond.
- Vous pouvez personnaliser la logique en utilisant des variables, Power Fx et des conditions.
- C'est parfait pour créer des expériences sur mesure pour des besoins spécifiques de l'entreprise.

### 2. Créer avec Copilot
Cela vous permet de décrire ce que vous souhaitez en utilisant un langage naturel, et Copilot construira la conversation pour vous. Il en va de même lorsque vous modifiez votre sujet : utilisez un langage naturel et Copilot examinera et modifiera le sujet pour vous.

#### Ce que Copilot prend en charge

- Peut créer et modifier :
      - Nœuds de message
      - Nœuds de question
      - Nœuds de condition
- Ne prend pas en charge les paramètres avancés tels que la manière de relancer l'utilisateur s'il ne répond pas ou la gestion des interruptions pendant une question. Vous pouvez toujours ajuster ces paramètres manuellement si nécessaire.

#### Pourquoi c'est utile

- Accélère le développement grâce à l'assistance de l'IA.
- Vous permet de vous concentrer sur la logique et l'expérience utilisateur plutôt que sur des configurations répétitives.
- Facilite les itérations et l'amélioration des flux de conversation avec un effort minimal.

#### ✨ Exemples de demandes

- **Créer un sujet**
      - `Accepter le nom, l'âge et la date de naissance d'un utilisateur, puis répéter ses réponses.`
      - `Collecter l'adresse, l'état et le code postal d'un utilisateur. L'utilisateur doit pouvoir réessayer chaque question jusqu'à 4 fois.`

- **Modifier un sujet**
      - `Ajouter une question demandant la date de naissance de l'utilisateur.`
      - `Résumer les informations collectées dans une carte Adaptive.`

## 👩🏻‍🎨 OK, comment concevoir des sujets pour mon agent ?

### 🧙🏻‍♂️ Étape 1 - comprendre les besoins des utilisateurs

Commencez par identifier les questions ou tâches courantes que les utilisateurs poseront à votre agent. Cela pourrait inclure :

- Des questions fréquentes comme, `quels sont mes droits pour les congés maladie ?`
- Des tâches courantes que les utilisateurs souhaitent accomplir, comme soumettre un formulaire
- Des problèmes fréquents rencontrés par les utilisateurs, comme des problèmes de connexion

### 📦 Étape 2 - Regrouper les scénarios

Organisez les besoins des utilisateurs en trois catégories basées sur ce que nous avons appris précédemment - l'objectif d'un sujet :

- Informatif - l'utilisateur veut savoir quelque chose
- Accomplissement de tâche - l'utilisateur veut faire quelque chose
- Résolution de problème - l'utilisateur a besoin d'aide pour résoudre un problème

### 🗺️ Étape 3 - Cartographier la conversation

Dessinez un flux de conversation simple sur la manière dont l'agent devrait répondre :

- Commencez par une salutation ou une confirmation
- Posez des questions de suivi pour obtenir des détails
- Fournissez des réponses ou effectuez des actions

!!! tip
    Gardez la conversation courte et ciblée. Posez uniquement ce qui est nécessaire.

### 🔀 Étape 4 - Gérer différents types de conversation

Concevez pour :

- **Tour unique** - une question, une réponse

- **Multi-tours** - une conversation avec des questions de suivi

Exemple :

- Utilisateur : `Je veux demander un congé.`

- Agent : `Bien sûr ! À partir de quelle date souhaitez-vous commencer votre congé ?`

- Utilisateur : `15 juillet`

- Agent : `Compris. Et quand votre congé se terminera-t-il ?`

- Utilisateur : `22 juillet.`

- Agent : `Merci ! Quelle est la raison de votre congé ?`

- Utilisateur : `Vacances en famille.`

- Agent : `Merci pour les détails. J'ai soumis votre demande de congé du 15 au 22 juillet pour des vacances en famille. Vous recevrez bientôt une confirmation.`

### 🤖 Étape 5 - Utiliser l'IA pour des questions inattendues

Même si vous avez conçu un sujet pour les demandes de congé, les utilisateurs pourraient poser des questions qui ne sont pas directement couvertes. C'est là que les fonctionnalités d'IA comme le sujet système _Boosting conversationnel_ sont utiles.

Ce sujet inclut un nœud de réponses génératives, qui permet à votre agent d'utiliser immédiatement des sources de connaissances connectées. Toutes les sources de connaissances ajoutées au niveau de l'agent sont automatiquement incluses dans le nœud de réponses génératives du sujet système _Boosting conversationnel_.

#### Exemple

- Utilisateur : `Puis-je reporter mes jours de congé non utilisés à l'année prochaine ?`

Cette question pourrait ne pas faire partie de votre flux de sujet prédéfini, surtout si votre sujet ne traite que des demandes de congé.

#### Comment l'IA aide

Si votre agent est connecté aux documents de politique RH de votre entreprise ou au site interne, l'IA peut :

- Rechercher la politique de congé pertinente
- Comprendre et résumer les règles
- L'agent répond : `Selon la politique RH, vous pouvez reporter vos jours de congé non utilisés à l'année civile suivante. Pour plus de détails, consultez la section politique de congé sur le portail RH.`

#### Pourquoi c'est utile

- Vous n'avez pas besoin de créer manuellement un sujet pour chaque question liée à une politique.
- L'IA peut fournir des réponses précises à partir de sources de connaissances fiables.
- Cela améliore l'expérience utilisateur en rendant l'agent plus intelligent et réactif.

### 🔬 Étape 6 - Tester le sujet, le flux de conversation

Avant de publier votre sujet :

- Testez avec de vraies questions ou des exemples réels.
- Assurez-vous que cela semble naturel et utile.

!!! tip
    Appliquez des améliorations à votre sujet en fonction des tests, comme ajouter plus de nœuds ou supprimer des nœuds pour rediriger vers un autre sujet.

### ⚠️ Étape 7 - Évitez de dupliquer le contenu du site web

Ne copiez pas ce qui est déjà sur votre site web.

- Concentrez-vous sur les sujets que les utilisateurs demandent souvent.
- Ajoutez de nouveaux sujets en fonction de l'historique des conversations ou des demandes de support.

### ✨ Exemple de flux de conversation

Voici un exemple de sujet qui traite des demandes de congé.

#### Étape 1 : Phrase de déclenchement

L'utilisateur tape,

`Je veux demander un congé.`

#### Étape 2 : L'agent demande des détails via une carte Adaptive

L'agent demande,

`Bien sûr ! Quelles dates souhaitez-vous prendre ?`

La carte Adaptive contient un contrôle de sélection de calendrier pour la date de début et de fin.

#### Étape 3 : L'utilisateur fournit les dates

L'utilisateur sélectionne la date de début comme le 5 août 2025 et la date de fin comme le 10 août 2025, et soumet la carte. Les valeurs des dates sont stockées dans la sortie de la carte Adaptive sous forme de variables.

#### Étape 4 : Exécution du flux cloud

Un flux cloud Power Automate est exécuté, créant une nouvelle demande dans le système de gestion des congés et envoyant un e-mail pour informer le responsable de la demande de congé.

#### Étape 5 : Envoyer un message de confirmation à l'utilisateur

L'agent répond,

`Votre demande de congé du 5 au 10 août a été soumise. Votre responsable examinera et vous répondra sous peu.`

## 🧪 Lab 07 - Ajouter un nouveau sujet avec des nœuds de conversation

Nous allons maintenant apprendre à ajouter un nouveau sujet avec un déclencheur et des outils. Ce laboratoire couvrira la création d'un sujet à partir de zéro afin que vous compreniez comment personnaliser les sujets selon vos besoins.

- [7.1 Ajouter un nouveau sujet à partir de zéro](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Définir les entrées et sorties du déclencheur](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Ajouter un outil en utilisant un connecteur](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Cas d'utilisation

**En tant qu'** employé

**Je veux** savoir quels appareils sont disponibles

**Afin de** disposer d'une liste des appareils disponibles

Commençons !

### Prérequis

1. **Liste SharePoint**

    Nous utiliserons la liste SharePoint **Devices** de [Leçon 00 - Configuration du cours - Étape 3 : Créer un nouveau site SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Si vous n'avez pas configuré la liste SharePoint **Devices**, veuillez revenir à [Leçon 00 - Configuration du cours - Étape 3 : Créer un nouveau site SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agent d'assistance Contoso**

    Nous utiliserons le même agent créé précédemment dans [Leçon 06 - Créer un agent personnalisé en utilisant le langage naturel avec Copilot et en le connectant à vos données](../06-create-agent-from-conversation/README.md).

### 7.1 Ajouter un nouveau sujet à partir de zéro

1. Sélectionnez l'onglet **Sujets** près du nom de l'agent. Si vous ne le voyez pas, sélectionnez **+6** et vous verrez **Sujets** listés.

    ![Sélectionner Sujets](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.fr.png)

1. L'onglet **Sujets** se charge et par défaut les sujets _Personnalisés_ seront affichés. Vous pouvez filtrer les sujets par Tous, Personnalisés et Système. Les sujets personnalisés et système que vous voyez actuellement ont été créés automatiquement lorsque l'agent a été provisionné.

    Sélectionnez **+ Ajouter un sujet** et choisissez **À partir de zéro**.

    ![Créer un sujet à partir de zéro](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.fr.png)

1. Entrez un nom pour le sujet. Copiez et collez ce qui suit.

    ```text
    Available devices
    ```

    ![Nommer le sujet](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.fr.png)

1. Entrez une description de déclencheur qui décrit ce que fait le sujet. Copiez et collez ce qui suit.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Entrer un nom et une description pour le déclencheur](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.fr.png)

### 7.2 Définir les entrées et sorties du déclencheur

1. Ensuite, nous allons ajouter une nouvelle variable d'entrée que l'IA générative utilisera dans son orchestration pour extraire la valeur du type d'appareil à partir du message de l'utilisateur. Sélectionnez les **trois points (...)** dans le sujet et choisissez **Détails** pour afficher le volet des détails du sujet.

    ![Sélectionner Détails du sujet](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.fr.png)

1. Le volet **Détails du sujet** est maintenant chargé. Sélectionnez l'onglet **Entrée**.

    ![Onglet Entrée](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.fr.png)

1. Sélectionnez **Créer une nouvelle variable**.

    ![Créer une nouvelle variable d'entrée](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.fr.png)

1. Entrez un nom pour la variable. Copiez et collez ce qui suit.

    ```text
    VarDeviceType
    ```

    ![Nom de la variable d'entrée](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.fr.png)

1. Nous devons maintenant définir nos variables d'entrée et de sortie. Les propriétés suivantes peuvent être définies pour les entrées et sorties de sujet.

    | Champ    | Valeur |
    | ---------- | :--------- |
    | Comment l'agent remplira-t-il cette entrée ? | Détermine comment l'agent remplit cette variable avec une valeur avant d'exécuter le sujet. Par défaut, elle est définie sur _Remplir dynamiquement avec la meilleure option_. Sinon, vous pouvez remplacer une entrée par une valeur au lieu de demander à l'utilisateur |
    | Type de données de la variable  | Le type de données de la variable. Les types de données pris en charge sont `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Nom d'affichage   | Nom de la variable   |
    | Identifier comme  | Type d'entité pour que l'agent capture le bon type de valeur  |
    | Description    | La description aide l'agent à remplir automatiquement les entrées avant d'exécuter le sujet ou à générer des questions pour demander les valeurs   |

    Les propriétés _Comment l'agent remplira-t-il cette entrée ?_, _Type de données de la variable_ et _Nom d'affichage_ peuvent rester telles quelles. Mettez à jour la propriété **Identifier comme** à **Réponse entière de l'utilisateur**.

    ![Mettre à jour Identifier comme](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.fr.png)

1. Copiez et collez ce qui suit comme description.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Description](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.fr.png)

1. Ensuite, définissons notre sortie pour le sujet. Sélectionnez l'onglet **Sortie**.

    ![Sélectionner l'onglet Sortie](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.fr.png)

1. Sélectionnez **Créer une nouvelle variable**.

    ![Créer une nouvelle variable de sortie](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.fr.png)

1. Mettez à jour les propriétés suivantes.

    **Nom de la variable** - Copiez et collez ce qui suit.

    ```text
    VarAvailableDevices
    ```

    **Type de données de la variable** - Sélectionnez **Table** comme type de données.

    **Description de la variable** - Copiez et collez ce qui suit.

    ```text
    List of available devices by device type
    ```

    ![Propriétés de sortie](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.fr.png)

1. Nous avons maintenant terminé de définir les entrées et sorties du sujet. Sélectionnez l'**icône X** pour quitter le volet **Détails du sujet**.

    ![Quitter le volet des détails du sujet.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.fr.png)

### 7.3 Ajouter un outil en utilisant un connecteur

1. Ajoutons ensuite un nœud qui permet à l'agent de récupérer la liste des appareils de la liste SharePoint **Devices**. Sélectionnez l'**icône +** sous le déclencheur.

    ![Ajouter un outil](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.fr.png)

1. Sélectionnez le nœud **Ajouter un outil**, puis l'onglet **Connecteur**. Recherchez `Get items` et sélectionnez l'action du connecteur SharePoint **Get items**.

    ![Sélectionner Get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.fr.png)

1. Une nouvelle connexion doit être créée pour le connecteur. Sélectionnez l'**icône chevron** et choisissez **Créer une nouvelle connexion**.

    ![Ajouter un outil](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.fr.png)

1. Deux options seront affichées permettant de se connecter directement à SharePoint Online ou à un SharePoint sur site. Par défaut, l'option **Connecter directement (services cloud)** sera sélectionnée, ce que nous utiliserons pour notre connexion.
Sélectionnez **Créer**.

![Sélectionner Créer](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.fr.png)

1. Sélectionnez votre compte utilisateur connecté.

![Sélectionner le compte utilisateur connecté](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.fr.png)

1. Ensuite, vous devez confirmer que votre compte utilisateur peut être utilisé pour la connexion au connecteur SharePoint. Sélectionnez **Autoriser l'accès**.

![Sélectionner autoriser l'accès](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.fr.png)

1. Sélectionnez **Soumettre** pour que l'action du connecteur SharePoint **Obtenir des éléments** soit ajoutée comme un nœud au sujet.

![Soumettre](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.fr.png)

1. L'action du connecteur SharePoint **Obtenir des éléments** est maintenant ajoutée au sujet. Nous pouvons maintenant commencer à configurer les entrées de l'action. Sélectionnez l'**icône de l'ellipse (...)** et choisissez **Propriétés**.

![Sélectionner Propriétés](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.fr.png)

1. Le volet de configuration **Obtenir des éléments** apparaîtra et par défaut, vous verrez l'onglet **Entrées**. Sélectionnez l'onglet **Initiation** et entrez une description dans le champ **Description d'utilisation**. Copiez et collez ce qui suit.

    ```text
    Retrieves devices from SharePoint list
    ```

> Cela sera utile lorsque nous consulterons la page _Gérer vos connexions_ de notre agent. Nous y reviendrons sous peu.

![Description des éléments obtenus](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.fr.png)

1. Sélectionnez l'onglet **Entrées** et choisissez le site **Contoso IT** et la liste **Devices** que vous avez configurés dans [Leçon 00 - Configuration du cours - Étape 3 : Créer un nouveau site SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Configurer les entrées des éléments obtenus](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.fr.png)

1. Maintenant, pour afficher uniquement les appareils de la liste SharePoint en fonction de
   - la valeur sélectionnée,
   - et uniquement les appareils dont le statut est _Disponible_,

nous devons appliquer un filtre. Cela se fait en entrant une requête de filtre à l'aide de Power Fx. Sélectionnez l'**icône de l'ellipse (...)**.

![Sélectionner l'icône ellipse](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.fr.png)

1. Par défaut, vous serez dans l'onglet **Personnalisé**. Sélectionnez l'onglet **Formule**.

![Sélectionner l'onglet Formule](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.fr.png)

1. Sélectionnez l'icône **agrandir** pour élargir le champ **Formule**. Copiez et collez l'expression Power Fx suivante.

Nous utilisons la fonction `Concatenate` pour créer une expression qui filtrera
   - la colonne SharePoint **Statut** égale à _Disponible_
   - et la colonne SharePoint **Type d'actif** égale à _l'appareil sélectionné depuis le nœud de question_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Sélectionnez **Insérer**.

![Entrer l'expression Power Fx et sélectionner insérer](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.fr.png)

1. L'expression Power Fx sera maintenant appliquée dans le paramètre d'entrée de requête de filtre de l'action **Obtenir des éléments**. Ensuite, sélectionnez la vue **Tous les éléments** dans **Limiter les colonnes par vue**. Cela permettra de récupérer uniquement les colonnes de la liste en fonction de la vue sélectionnée.

![Lister les colonnes par vue](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.fr.png)

1. Ensuite, nous allons mettre à jour le nom de la variable pour la sortie. Sélectionnez l'onglet **Sorties** et choisissez la variable `GetItems`.

![Mettre à jour la variable](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.fr.png)

1. Mettez à jour le nom avec ce qui suit.

    ```text
    VarDevices
    ```

![Mettre à jour le nom de la variable](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.fr.png)

1. Faites défiler vers le bas et dans la section **Utilisation**, sélectionnez **Global**. Cela rendra la variable accessible par n'importe quel sujet.

![Mettre à jour en variable globale](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.fr.png)

1. **Fermez** le volet **Propriétés de la variable**.

![Fermer le volet des propriétés de la variable](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.fr.png)

1. Sélectionnez l'**icône plus +** pour insérer un nouveau nœud, choisissez **Gestion des variables** puis sélectionnez **Définir une valeur de variable**.

![Ajouter un nœud Définir une valeur de variable](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.fr.png)

1. Sélectionnez l'icône **supérieure à** pour le paramètre d'entrée **Définir la variable**.

![Définir la variable](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.fr.png)

1. Sélectionnez la sortie du sujet créée précédemment comme variable, **VarAvailableDevices**.

![Enregistrer le sujet](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.fr.png)

1. Ensuite, sélectionnez l'**icône ellipse (...)** pour définir la valeur de la variable.

![Sélectionner la valeur de la variable](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.fr.png)

1. Nous allons maintenant utiliser une expression PowerFx pour définir la valeur de la variable comme la propriété `value` retournée dans la réponse **Obtenir des éléments**, et rendre [la portée de la variable](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) globale en ajoutant le préfixe `Global`.

Sélectionnez **Insérer** et **enregistrez** le sujet.

![Formule Power Fx pour la valeur de la variable](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.fr.png)

1. Ensuite, nous devons mettre à jour les instructions de l'agent. Sélectionnez l'onglet **Aperçu** et choisissez **Modifier**.

![Modifier les instructions](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.fr.png)

1. Ajoutez une nouvelle ligne dans les instructions, copiez et collez ce qui suit.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Cette instruction guidera l'IA générative pour invoquer le déclencheur **Appareils disponibles** afin d'afficher la liste des appareils disponibles de la liste SharePoint **Devices**. Sélectionnez l'ensemble du sujet entre crochets.

![Ajouter des instructions](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.fr.png)

1. Tapez le caractère barre oblique `/` et la liste des sujets apparaîtra. Sélectionnez le sujet **Appareils disponibles**.

![Référencer le déclencheur](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.fr.png)

1. **Enregistrez** les instructions mises à jour.

![Enregistrer les instructions](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.fr.png)

1. Nous allons maintenant tester notre agent mis à jour. Sélectionnez **Tester** en haut à droite pour afficher le volet de test et **actualisez** le volet de test. Entrez le message suivant à l'agent.

    ```text
    I need a laptop
    ```

![Tester](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.fr.png)

1. Avant que l'agent puisse continuer, l'utilisateur doit vérifier que sa connexion peut être utilisée. Sélectionnez **Autoriser**.

![Sélectionner autoriser](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.fr.png)

1. L'agent exécutera l'outil SharePoint qui récupère une liste filtrée des appareils où le type d'appareil est "ordinateur portable" et le statut est "disponible", à partir de l'expression Power Fx utilisée. Une réponse formatée sous forme de points sera retournée pour que l'utilisateur puisse la lire.

![Réponse du test](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.fr.png)

1. Une dernière chose à apprendre est de consulter les connexions utilisées en affichant la page _Gérer vos connexions_ de l'agent. Sélectionnez l'**ellipse (...)** et choisissez **Gérer la connexion**.

![Gérer la connexion](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.fr.png)

1. Cette page est où nous pouvons voir toutes les connexions utilisées par l'agent. Actuellement, une seule connexion est répertoriée, associée à l'outil SharePoint qui a été ajouté au sujet. Sélectionnez **1 outil** dans la colonne **Utilisé par**.

![Utilisé par](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.fr.png)

1. C'est ici que nous pouvons voir les détails de l'action Obtenir des éléments et vous vous souvenez de la _description d'utilisation_ que nous avons entrée plus tôt ? C'est ici que nous verrons la description d'utilisation. Sélectionnez **Fermer**.

> Cela nous permet de savoir quelles actions sont utilisées et leur objectif. Cela garde nos connexions organisées 📁.

![Description d'utilisation](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.fr.png)

1. Retournez à votre onglet de navigateur avec Copilot Studio et **actualisez** le volet de test pour effacer le test.

## ✅ Mission accomplie

Félicitations ! 👏🏻 Vous avez appris à ajouter un nouveau sujet à partir de zéro, à ajouter un outil qui appelle l'action du connecteur SharePoint Obtenir des éléments et à utiliser Power Fx pour filtrer la réponse afin de ne retourner que les appareils dont le statut est disponible et le type d'appareil est ordinateur portable. 🙌🏻

C'est la fin de **Lab 07 - Ajouter un nouveau sujet avec des nœuds de conversation**, sélectionnez le lien ci-dessous pour passer à la leçon suivante. Nous développerons le cas d'utilisation de ce laboratoire dans le laboratoire de la leçon suivante.

⏭️ [Passer à la leçon **Améliorer les interactions utilisateur avec les cartes adaptatives**](../08-add-adaptive-card/README.md)

## 📚 Ressources tactiques

🔗 [Utiliser les sujets système](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Sujets dans Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Définir les déclencheurs de sujet](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Définir les sujets d'agent](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Créer des expressions avec Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Créer des sujets avec le langage naturel](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Ajouter des actions aux agents à l'aide de connecteurs](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytics" />

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle humaine. Nous ne sommes pas responsables des malentendus ou des interprétations erronées résultant de l'utilisation de cette traduction.