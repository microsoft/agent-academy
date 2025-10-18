<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-17T19:10:18+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "fr"
}
-->
# 🚨 Mission 12 : Comprendre les licences

## 🕵️‍♂️ NOM DE CODE : `OPÉRATION SAVOIR CE QUE VOUS DEVEZ`

> **⏱️ Fenêtre temporelle de l'opération :** `~15 minutes`

## 🎯 Résumé de la mission

Bienvenue, Recrue. Avant de déployer vos agents sur le terrain, vous devez comprendre **comment l'utilisation est mesurée, licenciée et facturée**. Cette mission décompose le modèle de facturation basé sur les messages, explique ce que comprennent les licences Microsoft 365 Copilot et vous montre comment planifier avec votre estimateur.

---

## 🎯 Objectif : Comprendre le modèle basé sur les messages

Copilot Studio ne facture pas par utilisateur ou par fonctionnalité — il vous facture en fonction de **combien de messages vos agents consomment**. Un "message" est une interaction entre votre agent et l'utilisateur (ou un système).

- 💬 Chaque interaction utilisateur avec votre agent compte pour au moins **1 message**
- 🔄 Les interactions complexes (comme le grounding, l'IA générative ou les flux) consomment **plusieurs messages**
- 💼 Vous payez pour les messages soit via des **packs prépayés**, soit en **paiement à l'utilisation (PAYGO)**

---

## Options de licence

### 1. **Packs de messages Copilot Studio**

- Prépayé : **25 000 messages/mois pour 200 $**
- Idéal pour une utilisation prévisible — la capacité est partagée au sein du tenant

### 2. **Paiement à l'utilisation (PAYGO)**

- Postpayé : **0,01 $ par message**
- Aucun engagement initial ; l'utilisation est facturée en fin de mois via Azure

---

## Et si vous avez des licences M365 Copilot ?

Si votre équipe dispose de **licences Microsoft 365 Copilot**, vos agents **peuvent fonctionner sans facturation supplémentaire pour des scénarios clés** :

- Les réponses classiques, les réponses génératives, les messages basés sur le graph et les actions basiques des agents sont **non facturés** pour les utilisateurs authentifiés de M365 Copilot dans des applications comme Teams et Outlook  
- Cependant : si vous activez des fonctionnalités avancées comme les déclencheurs autonomes, les flux d'agents au-delà des actions basiques ou utilisez des canaux/API externes, ceux-ci **consomment des messages facturables**

| Scénario                                    | Messages supplémentaires facturés ?          |
|---------------------------------------------|----------------------------------------------|
| Utilisateur M365 Copilot interrogeant un agent dans Teams | ❌ Non facturé                                |
| Agent appelant une API ou un flux externe   | ✅ Facturé (5 + messages)                     |
| Agent utilisant un déclencheur autonome ou un grounding | ✅ Facturé                                    |

---

## 🧮 Planifiez avec précision : Utilisez l'estimateur

Avant de lancer votre agent, utilisez notre **Estimateur d'utilisation Copilot Studio** pour prévoir la consommation de messages dans des scénarios réalistes :

[👉 Utilisez l'estimateur d'utilisation Copilot Studio](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Il vous permet de :

- 🔢 Spécifier votre **nombre d'utilisateurs**
- ⚙️ Sélectionner les **fonctionnalités de l'agent** (grounding, actions, flux, mémoire)
- 📈 Estimer le **nombre total de messages par agent par mois**
- 🧠 Optimiser la conception et éviter les surprises de facturation

!!! tip
    ✅ Utilisez-le tôt — et à nouveau après la construction — pour comparer l'utilisation prévue et réelle.

---

## 💼 Exemple de scénario

**Environnement** : Agent du service d'assistance IT avec grounding + un flux Power Automate  
**Sessions** : 5 interactions utilisateur par session  
**Hypothèses** : grounding (10 msgs) + action (5 msgs) + 5 réponses génératives (10 msgs)  
**Total** : ~25 messages par session  
**Échelle** : 500 sessions/mois = ~12 500 messages (½ pack de messages)

---

## 🧠 Conseils pratiques pour contrôler les coûts

- Surveillez l'utilisation via le Power Platform Admin Center
- Commencez en développement/test avant de passer en production
- Désactivez les actions et connecteurs inutilisés
- Utilisez les **licences Microsoft 365 Copilot** autant que possible pour un usage interne
- Utilisez des packs de messages lorsque l'échelle devient prévisible
- Utilisez l'**Estimateur d'utilisation Copilot Studio** pour prévoir l'utilisation

---

## 🏁 Mission accomplie

Vous comprenez maintenant :

- Comment l'utilisation est calculée et facturée
- Quand M365 Copilot couvre l'utilisation — et quand ce n'est pas le cas
- Comment prévoir et gérer votre consommation de messages

🎓 Avec ces connaissances, vous êtes prêt à avancer et à déployer vos agents **efficacement et intelligemment**

---

## 📚 Ressources tactiques

En savoir plus sur les licences et la facturation dans Copilot Studio

- 📄 [Licences et tarifs des messages Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Guide de licence Power Platform (juillet 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Gestion des messages et surveillance de la capacité](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytique" />

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous ne sommes pas responsables des malentendus ou des interprétations erronées résultant de l'utilisation de cette traduction.