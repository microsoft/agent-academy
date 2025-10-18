<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-17T18:54:53+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "fr"
}
-->
# 🚨 Mission 03 : Déployer un agent déclaratif pour Microsoft 365 Copilot

## 🕵️‍♂️ NOM DE CODE : `OPÉRATION EXTENSION COPILOT`

> **⏱️ Durée de l'opération :** `~60 minutes`

🎥 **Regardez la démonstration**

[![Vignette vidéo de création d'un agent déclaratif](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.fr.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Regardez la démonstration sur YouTube")

## 🎯 Mission

Bienvenue dans votre première mission sur le terrain, Agent Maker. Vous avez été sélectionné pour concevoir, équiper et déployer un agent déclaratif—un opérateur spécialisé intégré directement dans Microsoft 365 Copilot et Microsoft Teams.

Contrairement aux agents traditionnels, les agents déclaratifs fonctionnent avec une mission définie (instructions), des outils (prompts/connecteurs) et un accès stratégique à l'intelligence interne (sources de connaissances comme SharePoint, Dataverse, et plus). Votre tâche est de construire cet agent en utilisant Microsoft Copilot Studio—un centre de commande sans code où les compétences et la mission de votre agent prennent vie.

C'est parti.

## 🔎 Objectifs

Dans cette mission, vous apprendrez :

1. Comprendre ce que sont les agents déclaratifs et comment ils étendent Microsoft 365 Copilot avec des capacités personnalisées
1. Comparer Microsoft Copilot Studio et le générateur d'agents Copilot Studio pour créer des agents déclaratifs
1. Créer un agent déclaratif en utilisant le langage naturel via l'expérience de création conversationnelle
1. Ajouter des prompts IA comme outils pour améliorer les connaissances spécialisées et les capacités de résolution de problèmes de votre agent
1. Publier et tester votre agent déclaratif dans Microsoft 365 Copilot et Microsoft Teams

## 🕵🏻‍♀️ Qu'est-ce qu'un agent déclaratif pour Microsoft 365 Copilot ?

Les agents déclaratifs sont des versions personnalisées de Microsoft 365 Copilot. Vous pouvez adapter Microsoft 365 Copilot pour répondre à des besoins spécifiques de l'entreprise en lui fournissant des instructions pour soutenir un processus particulier, en l'ancrant avec des connaissances d'entreprise et en utilisant des outils pour une extensibilité accrue. Cela permet aux organisations de créer des expériences personnalisées avec des fonctionnalités accrues pour leurs utilisateurs.

## 🤔 Pourquoi utiliser Microsoft Copilot Studio pour créer un agent déclaratif ?

En tant que créateur, il est probable que vous ayez déjà exploré [le générateur d'agents Copilot Studio](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) dans Microsoft 365 Copilot et que vous vous demandiez _pourquoi créer un agent déclaratif dans Microsoft Copilot Studio ?_

Microsoft Copilot Studio offre un ensemble complet d'outils et de fonctionnalités pour les agents déclaratifs qui vont au-delà des limitations du générateur d'agents Copilot Studio. Tout comme le générateur d'agents Copilot Studio, vous n'avez pas besoin de connaître la programmation ou le développement logiciel pour créer dans Microsoft Copilot Studio. Décomposons cela davantage pour comprendre les différences entre le générateur d'agents Copilot Studio et Copilot Studio pour créer des agents déclaratifs.

### Comparaison des fonctionnalités

Le tableau suivant met en évidence les différences lors de la création d'un agent déclaratif dans le générateur d'agents Copilot Studio et Copilot Studio.

| Fonctionnalité              | Générateur d'agents Copilot Studio dans Microsoft 365 Copilot              | Étendre Microsoft 365 Copilot dans Copilot Studio              |
|-----------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Connaissances**       | Web, SharePoint, discussions Microsoft Teams, emails Outlook, connecteurs Copilot     | Recherche Web (via Bing), SharePoint, Dataverse, Dynamics 365, connecteurs Copilot  |
| **Outils**       | Interpréteur de code, générateur d'images     | 1400+ connecteurs Power Platform, connecteurs personnalisés, prompt, utilisation informatique, API REST, protocole de contexte de modèle   |
| **Prompts de démarrage**         | Configurer des prompts pour que les utilisateurs démarrent rapidement   | Configurer des prompts pour que les utilisateurs démarrent rapidement  |
| **Canal**           | Agent uniquement publié sur Microsoft 365 Copilot     | Agent publié sur Microsoft 365 Copilot et Microsoft Teams      |
| **Permissions de partage**         | Les utilisateurs sont uniquement des spectateurs    | Les utilisateurs peuvent être éditeurs ou spectateurs   |

Il existe davantage de capacités offertes pour les agents déclaratifs créés dans Microsoft Copilot Studio, que nous allons découvrir ensuite.

!!! tip
    - Pour en savoir plus sur le générateur d'agents Copilot Studio, rendez-vous sur [Copilot Developer Camp : Lab MAB1 - Créez votre premier agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Pour le développement avancé d'un agent déclaratif au-delà du générateur d'agents Copilot Studio pour Microsoft 365 Copilot, rendez-vous sur [Copilot Developer Camp : Lab MAB1 - Créez votre premier agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Étendre Microsoft 365 Copilot avec des agents déclaratifs créés dans Copilot Studio

Explorons ce que nous avons appris à partir du tableau de comparaison des fonctionnalités.

#### Personnalisation

- **Instructions détaillées** : Vous pouvez fournir des instructions détaillées et des capacités pour définir précisément l'objectif et le comportement de l'agent.
  - Cela inclut l'invocation d'outils simplement en utilisant le langage naturel.

- **Accès aux connaissances d'entreprise** : Permet l'accès aux connaissances d'entreprise tout en respectant les permissions des utilisateurs.
  - Intégration SharePoint
  - Intégration Dataverse
  - Intégration Dynamics 365
  - Connecteurs Microsoft 365 Copilot activés par l'administrateur de votre organisation

   ![Personnalisation](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.fr.png)

#### Capacités avancées

- **Intégration avec des services externes** : Vous permet de choisir parmi 1400+ connecteurs Power Platform qui s'intègrent avec des services externes, offrant des fonctionnalités plus complexes et puissantes.
  - Exemples incluent [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) et plus encore
  - Vous pouvez également utiliser directement des serveurs de protocole de contexte de modèle et des API REST dans votre agent déclaratif

- **Prompts IA** : Utilisez un prompt pour analyser et transformer du texte, des documents, des images et des données avec un raisonnement en langage naturel et en intelligence artificielle.
  - Sélectionnez le modèle de chat, choisissez entre Basique (par défaut), Standard, Premium
  - Option d'utiliser votre propre modèle Azure AI Foundry pour ancrer votre prompt

- **Plus d'options de configuration de déploiement** : Sélectionnez les canaux et définissez les permissions des utilisateurs.
  - Publiez sur Microsoft Teams, une interface utilisateur familière pour vos utilisateurs pour une adoption plus rapide
  - Les permissions d'édition des utilisateurs peuvent être partagées pour éviter un point de dépendance unique sur le propriétaire de l'agent

   ![Personnalisation](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.fr.png)

En résumé, les agents déclaratifs dans Microsoft Copilot Studio permettent de personnaliser Microsoft 365 Copilot pour répondre aux besoins de l'entreprise grâce à l'intégration de systèmes de connaissances d'entreprise, d'outils pour se connecter à des services externes ou à des modèles GPT IA.

## 🧪 Lab 03 : Créer un agent déclaratif dans Microsoft Copilot Studio pour Microsoft 365 Copilot

Nous allons apprendre à créer un agent déclaratif pour un cas d'utilisation "Business-to-Employee" qui agira comme un **agent de support informatique**.

- [3.1 Créer un agent déclaratif](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Créer et ajouter un prompt pour votre agent déclaratif](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Mettre à jour les instructions et tester votre agent déclaratif](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Publier votre agent déclaratif sur Microsoft 365 Copilot et Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Ce laboratoire décrira les étapes pour ajouter un prompt comme outil. Les leçons suivantes approfondiront l'ajout de sources de connaissances et d'autres outils disponibles. Nous simplifions pour votre apprentissage 😊

### 👩🏻‍💼 Comprendre le Business-to-Employee (B2E)

Le Business-to-Employee (B2E) fait référence aux interactions et services qu'une entreprise fournit directement à ses employés. Dans le contexte d'un agent, cela signifie utiliser les capacités avancées de Copilot Studio pour soutenir et améliorer l'expérience de travail des employés au sein de l'organisation.

### ✨ Scénario d'utilisation

**En tant qu'** employé

**Je veux** obtenir une aide rapide et précise de l'agent du support informatique pour des problèmes tels que les problèmes de périphériques, le dépannage réseau, la configuration d'imprimantes

**Afin de** rester productif et résoudre les problèmes techniques sans retard

C'est parti !

### Prérequis

- Les créateurs doivent avoir les permissions pour créer et avoir accès à un environnement Copilot Studio.

!!! note "Note sur les licences"
    Ce laboratoire décrira les étapes pour ajouter un prompt comme outil. Les leçons suivantes approfondiront l'ajout de sources de connaissances et d'autres outils disponibles. Nous simplifions pour votre apprentissage 😊
  
    Vous n'avez pas besoin d'une licence utilisateur Microsoft 365 Copilot pour publier votre agent déclaratif créé dans Copilot Studio sur Microsoft 365 Copilot. Cependant, **les utilisateurs** de l'_agent déclaratif publié_ dans Microsoft 365 Copilot nécessitent une licence utilisateur Microsoft 365 Copilot.

### 3.1 Créer un agent déclaratif

!!! warning "Les questions de Copilot peuvent varier d'une session à l'autre"

    L'expérience de création conversationnelle de Copilot peut varier à chaque fois, où les questions fournies pour vous guider peuvent être légèrement différentes de celles précédemment posées.

1. Accédez à [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) et connectez-vous avec vos identifiants. Assurez-vous de basculer vers l'environnement que vous utilisez pour ces laboratoires.

1. Sélectionnez **Agents** dans le menu et choisissez **Copilot pour Microsoft 365**.

       ![Copilot pour Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.fr.png)

1. Ensuite, nous allons créer un agent déclaratif en sélectionnant **+ Ajouter** un agent.

       ![Ajouter un agent](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.fr.png)

1. Nous verrons alors l'expérience de création conversationnelle se charger, où nous pouvons discuter en langage naturel avec Copilot pour décrire l'agent déclaratif que nous voulons créer, et utiliser les questions fournies pour nous guider.

       Entrons une description détaillée qui inclut les éléments suivants,  
       - la tâche de l'agent  
       - le type de demandes qu'il peut traiter  
       - le format de sa réponse  
       - l'objectif de l'agent  
    
       ```text
       Vous êtes un professionnel de l'informatique hautement qualifié et expérimenté, spécialisé dans une large gamme de systèmes informatiques, de réseaux et de cybersécurité. Vous êtes capable de diagnostiquer et de résoudre des problèmes techniques, d'expliquer les solutions de manière claire et compréhensible pour les utilisateurs de tous niveaux techniques, et de fournir des conseils sur les meilleures pratiques. Vous devez être concis et informatif, en utilisant des instructions étape par étape avec des puces lorsque cela est approprié. Votre objectif est d'aider l'utilisateur à comprendre le problème et à le résoudre efficacement.
       ```
    
       ![Créer un prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.fr.png)

1. Après avoir soumis le prompt, une mise à jour notable apparaîtra dans le volet de droite avec les détails et les instructions de l'agent tels que définis par le prompt. Ensuite, on vous demandera de confirmer le nom de votre agent, et Copilot aura suggéré un nom.

       Entrez `oui` pour accepter le nom suggéré ou entrez un autre nom tel que le suivant,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instructions mises à jour](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.fr.png)

    !!! warning "Rappel : Les questions de Copilot peuvent varier d'une session à l'autre"

        L'expérience de création conversationnelle de Copilot peut varier à chaque fois, où les questions fournies pour vous guider peuvent être légèrement différentes de celles précédemment posées.

1. Le nom de l'agent a maintenant été mis à jour, comme on peut le voir dans le volet de droite. On nous demande maintenant de préciser les instructions pour l'agent. Ce que Copilot a suggéré semble parfait, donc nous lui demanderons d'utiliser ses propres suggestions. Nous entrerons ce qui suit :

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Nom mis à jour](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.fr.png)

1. Ensuite, on nous demandera si nous voulons ajouter des sites Web ou des connaissances accessibles au public. Nous répondrons par `Non`, car nous ajouterons uniquement un prompt pour notre agent déclaratif dans ce laboratoire. Les laboratoires suivants dans les leçons futures couvriront les sources de connaissances.

      ![Aucun site Web ou source de connaissances ajouté](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.fr.png)

1. Nous verrons ensuite une réponse de Copilot indiquant que nous avons terminé de configurer notre agent en utilisant l'expérience de création conversationnelle de Copilot. Cependant, affinons-le encore en précisant qu'il doit être concis et informatif avec des puces, utiliser l'empathie dans la communication et demander des retours après avoir fourni des solutions.

    ```text
    Concise and Informative:
    - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
    - Summarize: Provide a brief summary of the solution at the end of the explanation.
   
    User-Friendly Communication:
    - Empathy: Show empathy and understanding of the user's frustration or confusion.
    - Encouragement: Encourage users by acknowledging their efforts and progress.
   
    Interactive and Engaging:
    - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
    ```

      ![Mettre à jour les instructions de l'agent](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.fr.png)

1. Copilot confirme que les instructions ont été mises à jour. Cliquez sur **Créer** pour provisionner l'agent déclaratif pour Microsoft 365 Copilot.

      ![Créer un agent](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.fr.png)

    !!! warning "Rappel : Les questions de Copilot peuvent varier d'une session à l'autre"

        L'expérience de création conversationnelle de Copilot peut varier à chaque fois, où les questions fournies pour vous guider peuvent être légèrement différentes de celles précédemment posées.

1. Une fois l'agent provisionné, vous verrez les détails de l'agent, qui contiennent la description et les instructions définies lors de l'expérience de création conversationnelle de Copilot.
![Détails de l'agent](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.fr.png)

Faites défiler le volet vers le bas et vous verrez également les fonctionnalités permettant d'ajouter des connaissances, d'activer la recherche web (via Bing), des invites de démarrage et les détails de publication de l'agent déclaratif pour Microsoft 365 Copilot. Les invites de démarrage seront également affichées dans le volet de test sur le côté droit. Les utilisateurs peuvent sélectionner ces invites de démarrage pour commencer à interagir avec l'agent.

![Invites suggérées](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.fr.png)

1. Dans la section Détails de l'agent, vous avez également la possibilité de modifier l'icône de l'agent. Sélectionnez **Modifier**.

![Modifier les détails](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.fr.png)

Ici, vous pouvez changer l'icône et la couleur de fond. Sélectionnez **Enregistrer**, puis **Enregistrer** à nouveau pour mettre à jour les détails de l'agent.

![Changer l'icône](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.fr.png)

1. Faisons un test rapide de l'agent que nous avons créé. Sélectionnez l'une des **Invites de démarrage** dans le volet de test sur le côté droit.

![Tester une invite de démarrage](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.fr.png)

1. Notre agent répondra alors. Remarquez comment il a suivi les instructions en fournissant des points sous forme de parties digestibles et en utilisant de l'empathie dans sa réponse.

Si vous faites défiler jusqu'en bas du message, remarquez qu'il a également demandé un retour d'information après avoir fourni une solution, comme demandé.

![Réponse du test](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.fr.png)

En quelques minutes, vous avez ajouté un agent déclaratif pour Microsoft 365 Copilot dans Copilot Studio 🙌🏻

Ensuite, nous apprendrons à ajouter un outil à notre agent, nous créerons une invite.

### 3.2 Créer et ajouter une invite pour votre agent déclaratif

1. Faites défiler jusqu'à la section **Outils** et sélectionnez **+ Ajouter un outil**

![Ajouter un outil](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.fr.png)

1. La fenêtre modale des outils apparaîtra et une liste de connecteurs Power Platform sera affichée. Pour ajouter une invite, sélectionnez **+ Nouvel outil**.

![Nouvel outil](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.fr.png)

1. Une liste d'autres outils est affichée - Invite, Connecteur personnalisé, API REST et Protocole de contexte de modèle. Si votre organisation répond aux [exigences pour l'utilisation de l'ordinateur](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), cela apparaîtra également dans la liste. Sélectionnez **Invite**.

![Sélectionner une invite](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.fr.png)

1. Entrez un nom pour l'invite. Nommons notre invite `Expert IT`.

![Entrer un nom](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.fr.png)

1. Sélectionnez l'**icône chevron** à côté du **Modèle** pour voir les différents modèles de chat disponibles. Par défaut, le modèle **Basic GPT-4.1 mini** est sélectionné et vous avez également la possibilité d'utiliser votre propre modèle via Azure AI Foundry Models. Nous resterons sur le modèle par défaut sélectionné.

![Changer de modèle](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.fr.png)

1. Ensuite, nous fournirons des instructions à notre invite. Il y a 3 méthodes que vous pouvez choisir :

   - Utiliser Copilot pour générer des instructions en fonction de votre description de ce que vous voulez que l'invite fasse.
   - Utiliser un modèle prédéfini de la bibliothèque d'invites pour créer une invite.
   - Entrer manuellement vos propres instructions.

1. Essayons d'abord d'utiliser Copilot pour générer des instructions basées sur une description saisie. Entrez ce qui suit dans le champ Copilot et soumettez.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Commencer avec Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.fr.png)

1. Copilot commencera alors à générer une invite pour nous.

![Copilot rédige des invites](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.fr.png)

1. Les instructions générées par Copilot apparaîtront alors.

![Instructions générées par Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.fr.png)

1. Faites défiler jusqu'en bas des instructions et vous verrez le paramètre d'entrée utilisateur déjà défini par Copilot. Vous avez alors l'option de :
   - Conserver les instructions générées.
   - Actualiser les instructions générées avec Copilot.
   - Effacer les instructions générées.

Effacez les instructions générées en sélectionnant l'icône **poubelle** et nous essayerons ensuite la bibliothèque d'invites.

![Instructions d'invite](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.fr.png)

1. Sélectionnez le lien **modèle d'invite**.

![Sélectionner un modèle d'invite](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.fr.png)

1. Vous verrez une liste de modèles d'invites parmi lesquels choisir. Ceux-ci proviennent de la [bibliothèque d'invites Power Platform](https://aka.ms/power-prompts).

![Bibliothèque d'invites](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.fr.png)

1. Recherchez l'invite `Expert IT` et sélectionnez-la.

![Sélectionner l'invite Expert IT](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.fr.png)

1. L'invite sera alors ajoutée comme instructions avec le paramètre d'entrée défini par le modèle d'invite. Semblable à l'approche que nous avons adoptée lors de la création conversationnelle de notre agent avec Copilot, ce modèle d'invite décrit :
   - une tâche,
   - le type de demandes qu'il peut traiter,
   - et le format de sa réponse ainsi que l'objectif de l'invite.

![Instructions d'invite](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.fr.png)

1. Effacez les instructions et nous essayerons ensuite de saisir manuellement les instructions. Nous utiliserons l'[invite Expert IT](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) de la [bibliothèque d'invites Power Platform](https://aka.ms/power-prompts). Copiez et collez l'invite.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Instructions d'invite](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.fr.png)

1. Ensuite, nous pouvons définir les paramètres d'entrée utilisateur de notre invite. Ceux-ci peuvent inclure du texte et des images, ainsi que des données d'exemple pour tester. Il est également possible d'ancrer l'invite avec des connaissances provenant des tables Dataverse. Pour cet exercice, nous avons seulement un paramètre d'entrée utilisateur à définir, qui est l'entrée du problème. Cela est actuellement un espace réservé dans notre invite sous la forme `[Problème]`. Nous allons maintenant configurer cette entrée en saisissant le caractère `/` ou en sélectionnant **+Ajouter du contenu**, puis **Texte**.

![Entrée texte](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.fr.png)

1. Nous pouvons maintenant entrer un nom pour notre paramètre d'entrée et des données d'exemple.

Entrez ce qui suit comme nom :

    ```text
    problem input
    ```

Entrez ce qui suit comme données d'exemple :

    ```text
    My laptop gets an error with a blue screen
    ```

Puis sélectionnez **Fermer**.

![Configurer l'entrée du problème](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.fr.png)

1. Le paramètre d'entrée du problème sera maintenant ajouté aux instructions avec les données d'exemple configurées. Nous pouvons maintenant tester notre invite !

![Entrée du problème ajoutée](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.fr.png)

1. Sélectionnez **Tester** pour tester l'invite.

![Tester les instructions](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.fr.png)

1. La réponse s'affichera alors. Remarquez comment la réponse fournit des titres avec des points comme indiqué dans les instructions. Faites défiler et examinez le reste de la réponse du modèle.

![Réponse du modèle](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.fr.png)

1. Avant d'enregistrer notre invite, apprenons les paramètres qui peuvent être configurés pour cette invite. Sélectionnez l'**icône ellipsis (...)**.

![Paramètres de l'invite](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.fr.png)

1. Ici, nous verrons trois paramètres qui peuvent être configurés :

   - **Température** : Des températures plus basses produisent des résultats prévisibles, tandis que des températures plus élevées permettent des réponses plus variées ou créatives.
   - **Récupération des enregistrements** : Spécifiez le nombre d'enregistrements récupérés pour vos sources de connaissances.
   - **Inclure des liens dans la réponse** : Lorsque cette option est sélectionnée, la réponse inclut des citations de liens pour les enregistrements récupérés.

Sélectionnez l'icône **X** pour quitter les paramètres.

![Configurer les paramètres](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.fr.png)

1. Sélectionnez **Enregistrer** pour enregistrer l'invite.

![Enregistrer l'invite](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.fr.png)

1. Ensuite, sélectionnez **Ajouter à l'agent** pour ajouter l'invite à notre agent déclaratif.

![Instructions d'invite](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.fr.png)

1. L'invite apparaîtra maintenant sous Outils 🙌🏻

![Invite ajoutée](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.fr.png)

Nous allons maintenant mettre à jour nos instructions pour invoquer l'invite et tester notre agent déclaratif.

### 3.3 Mettre à jour les instructions et tester votre agent déclaratif

1. Faites défiler jusqu'à la section **Détails** et sélectionnez **Modifier**. Cela permettra de rendre les champs modifiables.

![Sélectionner Modifier](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.fr.png)

1. Nous pouvons maintenant mettre à jour nos instructions pour invoquer notre invite en faisant référence au nom de l'invite. Effacez les instructions, puis copiez et collez ce qui suit.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Remarquez comment la phrase finale demande à l'agent d'utiliser la question posée par l'utilisateur comme valeur pour le paramètre d'entrée du problème. L'agent utilisera la question comme entrée du problème pour l'invite. Ensuite, sélectionnez **Enregistrer**.

![Mettre à jour les instructions pour invoquer l'invite](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.fr.png)

1. Nous sommes maintenant prêts à tester les instructions mises à jour de notre agent déclaratif. Sélectionnez l'**icône de rafraîchissement** dans le volet de test.

![Sélectionner l'icône de rafraîchissement](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.fr.png)

1. Ensuite, entrez l'invite suivante ci-dessous et soumettez.

```text
Pouvez-vous m'aider, mon ordinateur portable rencontre un écran bleu
```

![Effectuer un test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.fr.png)

1. L'agent invoque l'invite et répond.

![Instructions d'invite](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.fr.png)

Publions maintenant notre agent déclaratif 😃

### 3.4 Publier votre agent déclaratif sur Microsoft 365 Copilot et Microsoft Teams

1. Sélectionnez **Publier**.

![Publier l'agent](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.fr.png)

1. Une fenêtre modale apparaîtra affichant les canaux et les détails de publication qui peuvent être mis à jour.

   - Canaux : L'agent sera publié sur Microsoft 365 Copilot et Microsoft Teams.
   - Informations sur l'application de l'agent : Ce qui sera affiché lorsque l'utilisateur ajoutera l'agent à Microsoft 365 Copilot ou à Microsoft Teams. Ces champs peuvent être mis à jour selon les besoins.

![Détails de l'application de l'agent](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.fr.png)

1. Par exemple, vous pouvez mettre à jour la **Description courte**, la **Description longue**, le **Nom du développeur** avec votre nom.

!!! tip
Si vous ne voyez pas tous les champs affichés sur votre navigateur, essayez de réduire le zoom, par exemple à 75%.

Sélectionnez **Publier**. Copilot Studio commencera alors à publier l'agent.

![Publication de l'agent](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.fr.png)

1. Une fois la publication terminée, nous verrons les [options de disponibilité](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) de l'agent.

| Option de disponibilité | Description |
| ---------- | ---------- |
| Lien de partage | Copiez le lien pour le distribuer aux utilisateurs partagés afin d'ouvrir l'agent dans Microsoft 365 Copilot |
| Afficher à mes coéquipiers et utilisateurs partagés | Vous permet d'accorder l'accès à d'autres pour participer à la création de l'agent, ou à des groupes de sécurité pour leur accorder l'accès à utiliser l'agent dans Microsoft 365 Chat ou Microsoft Teams. |
| Afficher à tout le monde dans mon organisation | Soumettez à l'administrateur du tenant pour ajouter au catalogue organisationnel pour que tous les utilisateurs du tenant puissent ajouter l'agent. L'agent apparaîtra sous Construit par votre organisation dans Microsoft 365 Copilot et dans Microsoft Teams |
| Télécharger en tant que .zip | Téléchargez en tant que fichier zip pour le charger en tant qu'application personnalisée dans Microsoft Teams |

![Options de disponibilité](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.fr.png)

1. Jetons un coup d'œil au partage de l'agent. Sélectionnez **Afficher à mes coéquipiers et utilisateurs partagés**. Un volet apparaîtra où vous pouvez rechercher les utilisateurs avec lesquels vous souhaitez partager l'agent, soit en entrant leur nom, un email ou un groupe de sécurité. Vous pouvez consulter cette liste à tout moment pour modifier qui a accès à l'agent.

Il y a également deux cases à cocher :
- _Envoyer une invitation par email aux nouveaux utilisateurs_ - les nouveaux utilisateurs recevront une invitation par email.
- _Visible dans Construit avec Power Platform_ - l'agent devient disponible dans la section Construit avec Power Platform de la boutique d'applications Teams.
Pour plus de détails, consultez [Connecter et configurer un agent pour Teams et Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Sélectionnez **Annuler** ou l'icône **X** pour quitter le volet.

![Partager l'agent](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.fr.png)

1. Sélectionnez **Copier** et collez le lien dans un nouvel onglet de navigateur.

![Copier le lien](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.fr.png)

1. Microsoft 365 Copilot se chargera et une fenêtre modale apparaîtra avec les détails de l'application de l'agent. Remarquez comment le nom du développeur, la description courte et la description longue sont affichés. Ces informations proviennent des détails de publication mis à jour lors d'une étape précédente.

Sélectionnez **Ajouter**.

![Options de disponibilité](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.fr.png)

1. Notre agent déclaratif se chargera ensuite. Nous pouvons voir les invites de démarrage parmi lesquelles choisir, ce qui permet aux utilisateurs de demander rapidement de l'aide.

Sélectionnez une des invites de démarrage. Dans mes invites de démarrage, je vais sélectionner l'invite **Aide à l'installation de logiciels**, qui remplira automatiquement le champ de message Copilot. Soumettez la question à Copilot.

![Sélectionner une invite de démarrage](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.fr.png)

1. Sélectionnez **Toujours autoriser** pour donner à votre agent déclaratif la permission d'invoquer l'invite Expert IT.

![Sélectionner toujours autoriser](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.fr.png)

1. L'agent invoquera ensuite notre invite **Expert IT** et nous verrons la réponse du modèle retournée sous forme de message dans notre agent déclaratif.

![Réponse](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.fr.png)

Faites défiler vers le bas pour voir tous les détails de la réponse.

![Réponse](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.fr.png)

1. Mais _comment savons-nous_ que l'agent déclaratif a invoqué l'invite ? 👀 Eh bien, voici une astuce !

!!! tip
    Vous pouvez tester et déboguer les agents dans Microsoft 365 Copilot en activant le [mode développeur](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Entrez ce qui suit dans le champ de message Copilot et soumettez.

    ```text
    -developer on
    ```

Un message de confirmation apparaîtra pour vous informer que le mode développeur est maintenant activé.

![Mode développeur activé](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.fr.png)

1. Soumettez la question suivante pour invoquer l'invite.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Entrer la question](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.fr.png)

1. Nous verrons une réponse du modèle de notre invite **Expert IT** à nouveau retournée sous forme de message. Faites défiler jusqu'en bas du message et une carte avec des informations de débogage sera affichée.

Développez **Infos de débogage de l'agent** en la sélectionnant.

![Infos de débogage de l'agent](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.fr.png)

1. Ici, vous trouverez des informations sur les métadonnées de l'agent qui se sont produites à l'exécution.

![Infos de débogage de l'agent développées](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.fr.png)

Dans notre cas d'utilisation, nous nous concentrerons sur la section _Actions_.

- Les **Actions correspondantes** mettent en évidence l'état actuel des fonctions trouvées lors de la recherche de l'application.
- Les **Actions sélectionnées** mettent en évidence l'état actuel des fonctions choisies pour être exécutées en fonction du processus de prise de décision de l'application.

![Infos de débogage de l'agent développées](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.fr.png)

Ainsi, nous pouvons voir ici que l'orchestrateur de l'agent a choisi d'invoquer l'invite Expert IT conformément aux instructions de notre agent déclaratif. Cela est également détaillé dans la section _Actions exécutées_, qui nous indique qu'il a invoqué l'invite avec succès.

![Examiner les infos de débogage de l'agent](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.fr.png)

1. Pour désactiver le mode développeur, entrez ce qui suit dans le champ de message Copilot et soumettez.

    ```text
    -developer off
    ```

Un message de confirmation apparaîtra pour vous informer que le mode développeur est désactivé. Super, maintenant vous savez comment vérifier si votre agent déclaratif dans Microsoft 365 Copilot a invoqué votre invite 🌞

![Mode développeur désactivé](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.fr.png)

1. Nous allons maintenant tester notre agent dans Microsoft Teams. Accédez à **Applications** en utilisant le menu de gauche et sélectionnez **Teams** dans la section _Applications_.

![Sélectionner Teams dans Applications](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.fr.png)

1. Microsoft Teams se chargera ensuite dans un nouvel onglet de navigateur et nous serons alors présentés avec les conditions d'utilisation de Microsoft 365 Copilot, sélectionnez **Accepter**.

![Sélectionner Accepter](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.fr.png)

1. Microsoft 365 Copilot se chargera ensuite par défaut, avec le volet de droite listant tous vos agents disponibles, y compris l'agent déclaratif **Contoso Tech Support Pro**.

![Microsoft 365 Copilot dans Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.fr.png)

1. Sélectionnez **icône de points de suspension (...)** dans le menu de gauche. Recherchez **Contoso Tech Support Pro** dans le champ de recherche ou, si vous voyez l'agent, sélectionnez-le.

Vous pouvez également cliquer avec le bouton droit de la souris pour **Épingler** l'agent pour un accès rapide dans le menu de gauche de Microsoft Teams.

![Sélectionner et épingler l'agent](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.fr.png)

1. Nous verrons alors notre agent se charger. 1. Testons ensuite notre agent. Entrez l'invite suivante et soumettez.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Épingler l'agent](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.fr.png)

1. Une réponse du modèle de notre invite sera alors affichée.

![Réponse dans Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.fr.png)

En quelques minutes, vous avez appris à publier votre agent déclaratif et à le tester dans Microsoft 365 Copilot et dans Microsoft Teams 😊

## ✅ Mission accomplie

Félicitations ! 👏🏻 Vous avez créé un agent déclaratif dans Copilot Studio où vous avez ajouté une invite, instruit l'agent à utiliser l'invite et appris à tester + publier votre agent dans Microsoft 365 Copilot et Microsoft Teams.

Votre agent est maintenant opérationnel—prêt à assister, résoudre des problèmes et servir les utilisateurs internes à la demande.

Ceci marque la fin de **Lab 03 - Créer un agent déclaratif dans Microsoft Copilot Studio pour Microsoft 365 Copilot**, sélectionnez le lien ci-dessous pour passer à la leçon suivante.

⏭️ [Passer à la leçon **Créer une nouvelle solution**](../04-creating-a-solution/README.md)

À la prochaine fois, restez en forme. L'avenir du travail en entreprise passe par les agents—et maintenant vous savez comment en créer un.

## 📚 Ressources tactiques

🔗 [Créer un agent déclaratif dans Microsoft Copilot Studio pour Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Ajouter des invites](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Partager des agents avec d'autres utilisateurs](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Créer des invites pour votre agent](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous ne sommes pas responsables des malentendus ou des interprétations erronées résultant de l'utilisation de cette traduction.