<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-17T19:26:56+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "fr"
}
-->
# 🕵️‍♂️ Mission 04 : Rédaction des instructions pour les agents

--8<-- "disclaimer.md"

## 🕵️‍♂️ NOM DE CODE : `OPÉRATION DIRECTIVE SECRÈTE`

> **⏱️ Durée de l'opération :** `~45 minutes`

## 🎯 Résumé de la mission

Agent, votre prochaine mission est **Opération Directive Secrète** - maîtriser l'art de la communication et du contrôle des agents grâce à des instructions et des descriptions précises.

Votre mission, si vous l'acceptez, est d'apprendre les compétences essentielles pour rédiger des instructions claires et exploitables qui guident vos agents à prendre des décisions intelligentes, utiliser les bons outils et sources de connaissances, et collaborer efficacement avec d'autres agents. Vous maîtriserez également l'art de rédiger des descriptions de haute qualité qui aident les agents à comprendre leurs ressources et à répondre avec une précision chirurgicale aux requêtes des utilisateurs.

Considérez cela comme votre formation avancée en psychologie des agents et en modification de comportement. Tout comme un agent de terrain a besoin de paramètres de mission clairs pour réussir, vos agents IA nécessitent des instructions habilement conçues pour agir avec clarté, précision et fournir des renseignements précieux dans des scénarios réels.

---

## 🔎 Objectifs

En complétant cette mission, vous allez :

- **Maîtrise des instructions** : Comprendre l'art et la science de la rédaction des instructions pour les agents dans Copilot Studio  
- **Orientation stratégique** : Apprendre à diriger les agents pour utiliser des outils, des sources de connaissances et collaborer avec d'autres agents  
- **Clarté opérationnelle** : Garantir que vos agents agissent avec précision, transparence et efficacité  

---

## 📝 Rédaction des instructions pour les agents

Rédiger des instructions efficaces pour les agents est la clé d'un comportement réussi des agents. Les instructions sont utilisées par les agents pour :

- Décider quel outil, sujet ou source de connaissances utiliser pour une requête utilisateur ou un déclencheur autonome  
- Remplir les champs d'entrée pour tout outil en fonction du contexte disponible  
- Générer une réponse pour l'utilisateur final  

### Comment fonctionnent les instructions

Les instructions doivent être basées sur les outils, sujets et sources de connaissances configurés pour votre agent. Les agents ne peuvent pas agir sur des instructions concernant des ressources qu'ils n'ont pas. Par exemple, si vous demandez à votre agent de rechercher dans une FAQ de site web, vous devez ajouter cette FAQ comme source de connaissances.

Vous pouvez référencer des outils spécifiques, des sujets, des variables ou des expressions Power Fx en utilisant `/` dans vos instructions. Cela aide l'agent à savoir exactement quoi utiliser et quand.

### Que inclure dans les instructions

- Ajoutez des instructions pour les cas où vous souhaitez guider les choix de l'agent, en particulier lorsque l'ambiguïté est possible.  
- Utilisez des instructions pour définir des limites, comme restreindre les sujets ou spécifier les formats de réponse.  
- Donnez des indices pour remplir les champs d'entrée des outils, par exemple : "Utilisez l'adresse e-mail du champ contact du prospect pour aider l'utilisateur à rédiger un e-mail."  
- Spécifiez comment les réponses doivent être formatées, par exemple : "Donnez toujours les réponses concernant le statut des commandes sous forme de tableau."  
- Utilisez des contraintes pour limiter les actions de l'agent, par exemple : "Répondez uniquement aux demandes concernant les avantages des employés."  

### Exemples pratiques

- "Utilisez les documents FAQ uniquement si la question ne concerne pas les horaires, les rendez-vous ou la facturation."  
- "Utilisez uniquement le sujet de création de ticket pour créer des tickets ; pour les autres demandes liées à la résolution de problèmes, utilisez le sujet de dépannage."  
- "Donnez toujours les réponses concernant le statut des commandes sous forme de tableau."  

### Test et amélioration

- Après avoir modifié les instructions, utilisez le volet de test pour valider le comportement de l'agent.  
- Mettez à jour et publiez les modifications si nécessaire.  

### Orientation avancée

- Numérotez ou listez vos instructions par puces et précisez qu'elles doivent être suivies dans l'ordre.  
- Utilisez le formatage Markdown pour améliorer la lisibilité et aider l'IA générative à traiter vos instructions.  
- Si vous souhaitez que votre agent soit très spécifique, envisagez de créer un sujet pour ce cas d'utilisation.  
- Utilisez des noms exacts pour les outils et les sujets dans les instructions afin d'éviter toute confusion.  

### Sécurité et modération

- Limitez les outils que l'agent doit utiliser lorsqu'il fait référence à des sources de connaissances.  
- Limitez les paramètres à utiliser pour les outils (par exemple, envoyer des e-mails uniquement à une liste spécifiée d'individus).  
- Utilisez des instructions pour protéger contre les comportements indésirables ou les problèmes de filtrage de contenu.  

---

## ✍️ Rédaction des descriptions pour les outils, sujets et agents

Des descriptions de haute qualité sont essentielles pour une orchestration générative. Votre agent utilise ces descriptions pour sélectionner les bons outils, sujets et agents afin de répondre aux requêtes et déclencheurs des utilisateurs. Suivez ces bonnes pratiques :

- **Utilisez un langage simple et direct** : Évitez le jargon, l'argot ou les termes trop techniques. Écrivez à la voix active et au présent.  
- **Soyez spécifique et pertinent** : Incluez des mots-clés liés à la fonctionnalité et à l'intention de l'utilisateur. Assurez-vous que les descriptions différencient clairement des outils ou sujets similaires pour éviter toute ambiguïté.  
- **Restez concis et informatif** : Limitez les descriptions à une ou deux phrases. Résumez ce que fait l'outil, le sujet ou l'agent et comment il bénéficie à l'utilisateur.  
- **Utilisez des noms uniques et descriptifs** : Évitez les noms génériques. Par exemple, utilisez "Prévisions météo pour demain" au lieu de simplement "Météo".  
- **Listez les actions ou considérations** : Utilisez des listes à puces ou numérotées pour plus de clarté lors de la description de plusieurs fonctionnalités ou étapes.  
- **Testez les chevauchements** : Si plusieurs sujets ont des descriptions similaires, votre agent peut les invoquer tous. Testez et révisez pour éviter les chevauchements.  

!!! example "Exemples de bonnes et mauvaises descriptions"
    **Bon :** Ce sujet fournit des informations météorologiques pour n'importe quel endroit dans le monde pour le lendemain. Il donne la température. Il ne fournit pas la météo actuelle pour aujourd'hui.  
    **Mauvais :** Cet outil peut répondre à des questions. *(Trop vague)*  

---

## 🛠️ Bonnes pratiques pour les instructions et descriptions

Pour rendre vos instructions et descriptions vraiment efficaces, gardez ces principes à l'esprit :

- Utilisez la voix active et le présent (par exemple, "Cet outil fournit des informations météorologiques").  
- Évitez le jargon, l'argot ou les termes techniques inutiles, sauf si nécessaire pour le public cible.  
- Utilisez des listes à puces ou numérotées pour séparer les actions, fonctionnalités ou considérations.  
- Incluez des mots-clés correspondant à l'intention de l'utilisateur et à la fonctionnalité de l'outil ou du sujet.  
- Assurez-vous que les noms et descriptions des ressources similaires soient distincts pour éviter toute confusion ou chevauchement.  

---

## 🗂️ Structure d'instruction exemplaire

Lors de la rédaction des instructions, envisagez la structure suivante pour plus de clarté et de complétude :

1. **Aperçu** : Décrivez brièvement la mission et le rôle de l'agent  
1. **Étapes du processus** : Listez les étapes principales que l'agent doit suivre  
1. **Points de collaboration** : Indiquez quand appeler d'autres agents ou utiliser des outils spécifiques  
1. **Sécurité et modération** : Incluez toutes les exigences de conformité ou de sécurité  
1. **Boucle de rétroaction** : Spécifiez comment l'agent doit recueillir des retours ou escalader les problèmes  

---

## 🧪 Laboratoire : Rédaction des instructions pour les agents

*Contenu du laboratoire à venir...*

---

## 🎉 Mission accomplie

Mission 04 terminée ! Vous avez maintenant :

✅ **Maîtrise des instructions** : Appris à rédiger des instructions claires et exploitables pour les agents  
✅ **Orientation stratégique** : Dirigé les agents pour utiliser des outils et collaborer efficacement  
✅ **Clarté opérationnelle** : Assuré que les agents agissent avec précision et transparence  

La prochaine étape est [Mission 05](../05-agent-responses/README.md) : Personnaliser les réponses des agents pour un impact maximal.

---

## 📚 Ressources tactiques

📖 [Microsoft Copilot Studio - Rédaction des instructions](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Guide pour le mode génératif](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous ne sommes pas responsables des malentendus ou des interprétations erronées résultant de l'utilisation de cette traduction.