<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-20T17:39:32+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "ro"
}
-->
# 🚨 Misiunea 12: Înțelegerea Licențierii

## 🕵️‍♂️ NUME DE COD: `OPERAȚIUNEA ȘTII CE DATORII AI`

> **⏱️ Fereastra de timp a operațiunii:** `~15 minute`

## 🎯 Rezumatul Misiunii

Bine ai venit, recrut. Înainte de a-ți trimite agenții pe teren, trebuie să știi **cum se măsoară utilizarea, cum se licențiază și cum se facturează**. Această misiune explică modelul de facturare bazat pe mesaje, ce includ licențele Microsoft 365 Copilot și cum să planifici utilizând estimatorul.

---

## 🎯 Obiectiv: Înțelegerea modelului bazat pe mesaje

Copilot Studio nu taxează pe utilizator sau pe funcționalitate—facturarea se face pe baza **numărului de mesaje consumate de agenții tăi**. Un „mesaj” reprezintă o interacțiune între agentul tău și utilizator (sau un sistem).

- 💬 Fiecare interacțiune a utilizatorului cu agentul tău este considerată cel puțin **1 mesaj**
- 🔄 Interacțiunile complexe (cum ar fi grounding, AI generativ sau fluxuri) consumă **mai multe mesaje**
- 💼 Plătești pentru mesaje fie prin **pachete preplătite**, fie prin **pay-as-you-go (PAYGO)**

---

## Opțiuni de Licențiere

### 1. **Pachete de Mesaje Copilot Studio**

- Preplătit: **25.000 de mesaje/lună pentru 200$**
- Cel mai potrivit pentru utilizare previzibilă — capacitatea este împărțită între toți utilizatorii din tenant

### 2. **Pay-As-You-Go (PAYGO)**

- Post-plătit: **0,01$ per mesaj**
- Fără angajamente inițiale; utilizarea este facturată la sfârșitul lunii prin Azure

---

## Ce se întâmplă dacă ai licențe M365 Copilot?

Dacă echipa ta are **licențe Microsoft 365 Copilot**, agenții tăi **pot funcționa fără costuri suplimentare pentru scenarii cheie**:

- Răspunsuri clasice, răspunsuri generative, mesaje bazate pe grafic și acțiuni de bază ale agentului sunt **nefacturate** pentru utilizatorii autentificați M365 Copilot în aplicații precum Teams și Outlook  
- Totuși: dacă activezi funcții avansate precum declanșatoare autonome, fluxuri ale agentului dincolo de acțiunile de bază sau folosești canale/API-uri externe, acestea **consumă mesaje facturabile**

| Scenariu                                     | Mesaje suplimentare facturate?               |
|---------------------------------------------|----------------------------------------------|
| Utilizator M365 Copilot întreabă agentul în Teams | ❌ Nefacturat                                |
| Agentul apelează un API extern sau un flux  | ✅ Facturat (5 + mesaje)                     |
| Agentul folosește un declanșator autonom sau grounding | ✅ Facturat                                 |

---

## 🧮 Planifică cu Precizie: Folosește Estimatorul

Înainte de a lansa agentul tău, folosește **Copilot Studio Usage Estimator** pentru a estima consumul de mesaje în scenarii realiste:

[👉 Folosește Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Acesta îți permite să:

- 🔢 Specifici **numărul de utilizatori**
- ⚙️ Selectezi **funcționalitățile agentului** (grounding, acțiuni, fluxuri, memorie)
- 📈 Estimezi **numărul total de mesaje per agent pe lună**
- 🧠 Optimizezi designul și eviți surprizele de facturare

!!! tip
    ✅ Rulează-l devreme — și din nou după ce ai construit — pentru a compara utilizarea estimată cu cea reală.

---

## 💼 Scenariu Exemplu

**Mediu**: Agent Help Desk IT cu grounding + un flux Power Automate  
**Sesiuni**: 5 interacțiuni ale utilizatorului per sesiune  
**Presupuneri**: grounding (10 mesaje) + acțiune (5 mesaje) + 5 răspunsuri generative (10 mesaje)  
**Total**: ~25 mesaje per sesiune  
**Scală**: 500 sesiuni/lună = ~12.500 mesaje (½ pachet de mesaje)

---

## 🧠 Sfaturi Pro pentru Controlul Costurilor

- Monitorizează utilizarea prin Power Platform Admin Center
- Începe în dev/test înainte de a merge live
- Dezactivează acțiunile și conectorii neutilizați
- Folosește **licențele Microsoft 365 Copilot** când este posibil pentru utilizare internă
- Folosește pachete de mesaje când utilizarea devine previzibilă
- Folosește **Copilot Studio Usage Estimator** pentru a estima utilizarea

---

## 🏁 Misiune Finalizată

Acum înțelegi:

- Cum se calculează și se facturează utilizarea
- Când M365 Copilot acoperă utilizarea — și când nu
- Cum să estimezi și să gestionezi consumul de mesaje

🎓 Cu aceste cunoștințe, ești pregătit să avansezi și să îți lansezi agenții **eficient și inteligent**

---

## 📚 Resurse Tactice

Află mai multe despre licențierea și facturarea în Copilot Studio

- 📄 [Licențierea și Tarifele pentru Mesaje în Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Ghidul de Licențiere Power Platform (iulie 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Gestionarea Mesajelor și Monitorizarea Capacității](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analitice" />

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.