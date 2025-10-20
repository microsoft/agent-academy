<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T17:11:44+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "ro"
}
-->
# 🚨 Misiunea 03: Implementarea unui Agent Declarativ pentru Microsoft 365 Copilot

## 🕵️‍♂️ NUME DE COD: `OPERAȚIUNEA EXTENSIA COPILOT`

> **⏱️ Fereastra de Timp pentru Operațiune:** `~60 minute`

🎥 **Urmărește Tutorialul**

[![Miniatură video pentru Crearea unui Agent Declarativ](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.ro.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Urmărește tutorialul pe YouTube")

## 🎯 Scopul Misiunii

Bine ai venit la prima ta misiune pe teren, Creator de Agenți. Ai fost selectat să proiectezi, echipezi și implementezi un Agent Declarativ—un operativ specializat integrat direct în Microsoft 365 Copilot și Microsoft Teams.

Spre deosebire de agenții tradiționali, agenții declarativi funcționează cu o misiune definită (instrucțiuni), instrumente (prompturi/conectori) și acces strategic la inteligența internă (surse de cunoștințe precum SharePoint, Dataverse și altele). Sarcina ta este să construiești acest agent folosind Microsoft Copilot Studio—un centru de comandă fără cod unde abilitățile și scopul agentului prind viață.

Să începem.

## 🔎 Obiective

În această misiune, vei învăța:

1. Ce sunt agenții declarativi și cum extind Microsoft 365 Copilot cu capabilități personalizate
1. Compararea Microsoft Copilot Studio cu constructorul de agenți Copilot Studio pentru crearea agenților declarativi
1. Crearea unui agent declarativ folosind limbaj natural prin experiența de creare conversațională
1. Adăugarea de prompturi AI ca instrumente pentru a îmbunătăți cunoștințele specializate și abilitățile de rezolvare a problemelor ale agentului
1. Publicarea și testarea agentului declarativ în Microsoft 365 Copilot și Microsoft Teams

## 🕵🏻‍♀️ Ce este un agent declarativ pentru Microsoft 365 Copilot?

Agenții declarativi sunt versiuni personalizate ale Microsoft 365 Copilot. Poți personaliza Microsoft 365 Copilot pentru a răspunde nevoilor specifice ale afacerii, oferindu-i instrucțiuni pentru a sprijini un proces specific, conectându-l la cunoștințele organizației și utilizând instrumente pentru o extensibilitate mai largă. Acest lucru permite organizațiilor să creeze experiențe personalizate cu funcționalități sporite pentru utilizatorii lor.

## 🤔 De ce să folosesc Microsoft Copilot Studio pentru a construi un agent declarativ?

Ca creator, este posibil să fi explorat deja [constructorul de agenți Copilot Studio](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) în Microsoft 365 Copilot și, probabil, te întrebi _de ce să construiesc un agent declarativ în Microsoft Copilot Studio?_

Microsoft Copilot Studio oferă un set cuprinzător de instrumente și funcții pentru agenții declarativi care depășesc limitările constructorului de agenți Copilot Studio. Similar cu constructorul de agenți Copilot Studio, nu trebuie să cunoști programare sau dezvoltare software pentru a construi în Microsoft Copilot Studio. Să analizăm mai detaliat diferențele dintre constructorul de agenți Copilot Studio și Copilot Studio pentru crearea agenților declarativi.

### Compararea funcțiilor

Tabelul următor evidențiază diferențele în crearea unui agent declarativ în constructorul de agenți Copilot Studio și Copilot Studio.

| Funcție                   | Constructorul de agenți Copilot Studio în Microsoft 365 Copilot                          | Extinderea Microsoft 365 Copilot în Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Cunoștințe**       | Web, SharePoint, chat-uri Microsoft Teams, emailuri Outlook, conectori Copilot     | Căutare web (prin Bing), SharePoint, Dataverse, Dynamics 365, conectori Copilot  |
| **Instrumente**       | Interpret de cod, generator de imagini     | 1400+ conectori Power Platform, conectori personalizați, prompturi, utilizare computer, REST API, Protocol Context Model   |
| **Prompturi de început**         | Configurarea prompturilor pentru utilizatori pentru a începe rapid   | Configurarea prompturilor pentru utilizatori pentru a începe rapid  |
| **Canal**           | Agent publicat doar în Microsoft 365 Copilot     | Agent publicat în Microsoft 365 Copilot și Microsoft Teams      |
| **Permisiuni de partajare**         | Utilizatorii sunt doar vizualizatori    | Utilizatorii pot fi editori sau vizualizatori   |

Există mai multe capabilități oferite pentru agenții declarativi construiți în Microsoft Copilot Studio, pe care le vom învăța în continuare.

!!! tip
    - Pentru a afla mai multe despre constructorul de agenți Copilot Studio, accesează [Copilot Developer Camp: Lab MAB1 - Construiește primul tău agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Pentru dezvoltarea avansată a extinderii unui agent declarativ dincolo de constructorul de agenți Copilot Studio pentru Microsoft 365 Copilot, accesează [Copilot Developer Camp: Lab MAB1 - Construiește primul tău agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Extinderea Microsoft 365 Copilot cu agenți declarativi construiți în Copilot Studio

Să extindem ceea ce am învățat din tabelul de comparație a funcțiilor.

#### Personalizare

- **Instrucțiuni Detaliate**: Poți oferi instrucțiuni detaliate și capabilități pentru a defini scopul și comportamentul agentului cu precizie.
  - Acest lucru include invocarea instrumentelor pur și simplu folosind limbaj natural.

- **Acces la Cunoștințele Organizației**: Permite accesul la cunoștințele organizației care respectă permisiunile utilizatorilor.
  - Integrare SharePoint
  - Integrare Dataverse
  - Integrare Dynamics 365
  - Conectori Microsoft 365 Copilot activați de administratorul organizației

   ![Personalizare](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.ro.png)

#### Capabilități Avansate

- **Integrare cu Servicii Externe**: Îți permite să alegi din peste 1400 de conectori Power Platform care se integrează cu servicii externe, oferind funcționalități mai complexe și mai puternice.
  - Exemple includ [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) și altele
  - Alternativ, poți utiliza servere Model Context Protocol și REST API direct în agentul declarativ

- **Prompturi AI**: Folosește un prompt pentru a analiza și transforma text, documente, imagini și date cu limbaj natural și raționament AI.
  - Selectează modelul de chat, alege între Basic (Implicit), Standard, Premium
  - Opțiunea de a aduce propriul model Azure AI Foundry pentru a fundamenta promptul

- **Mai multe opțiuni de configurare a implementării**: Selectează canale și definește permisiunile utilizatorilor.
  - Publică în Microsoft Teams, o interfață familiară pentru utilizatorii tăi pentru o adoptare mai rapidă
  - Permisiunile de editare pot fi partajate pentru a preveni dependența de un singur punct de responsabilitate al proprietarului agentului

   ![Capabilități Avansate](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.ro.png)

În concluzie, agenții declarativi din Microsoft Copilot Studio permit personalizarea Microsoft 365 Copilot pentru a răspunde nevoilor afacerii prin integrarea sistemelor de cunoștințe organizaționale, instrumente pentru conectarea la servicii externe sau modele AI GPT.

## 🧪 Laborator 03: Construirea unui agent declarativ în Microsoft Copilot Studio pentru Microsoft 365 Copilot

Vom învăța în continuare cum să construim un agent declarativ pentru un caz de utilizare "Business-to-Employee", care va acționa ca un **agent de asistență IT**.

- [3.1 Creează un agent declarativ](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Creează și adaugă un prompt pentru agentul declarativ](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Actualizează instrucțiunile și testează agentul declarativ](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Publică agentul declarativ în Microsoft 365 Copilot și Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Acest laborator va prezenta pașii pentru adăugarea unui Prompt ca instrument. Lecțiile următoare vor detalia adăugarea surselor de cunoștințe și alte instrumente disponibile. Simplificăm procesul pentru învățarea ta 😊

### 👩🏻‍💼 Înțelegerea Business-to-Employee (B2E)

Business-to-Employee (B2E) se referă la interacțiunile și serviciile pe care o afacere le oferă direct angajaților săi. În contextul unui agent, înseamnă utilizarea capabilităților avansate ale Copilot Studio pentru a sprijini și îmbunătăți experiența de lucru a angajaților din cadrul organizației.

### ✨ Scenariu de utilizare

**Ca** angajat

**Îmi doresc** să primesc ajutor rapid și precis de la agentul de asistență IT pentru probleme precum probleme cu dispozitivele, depanarea rețelei, configurarea imprimantei

**Astfel încât să pot** rămâne productiv și să rezolv problemele tehnice fără întârzieri

Să începem!

### Cerințe preliminare

- Creatorii trebuie să aibă permisiuni pentru a crea și acces la un mediu Copilot Studio.

!!! note "Notă privind licențierea"
    Acest laborator va prezenta pașii pentru adăugarea unui Prompt ca instrument. Lecțiile următoare vor detalia adăugarea surselor de cunoștințe și alte instrumente disponibile. Simplificăm procesul pentru învățarea ta 😊
  
    Nu ai nevoie de o licență de utilizator Microsoft 365 Copilot pentru a publica agentul declarativ construit în Copilot Studio în Microsoft 365 Copilot. Totuși, **utilizatorii** agentului declarativ _publicat_ în Microsoft 365 Copilot necesită o licență de utilizator Microsoft 365 Copilot.

### 3.1 Creează un agent declarativ

!!! warning "Întrebările Copilot pot varia între sesiuni"

    Experiența de creare conversațională Copilot poate varia de fiecare dată, iar întrebările oferite pentru ghidare pot fi ușor diferite față de cele anterioare.

1. Accesează [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) și autentifică-te folosind acreditările tale. Asigură-te că ai selectat mediul pe care îl folosești pentru aceste laboratoare.

1. Selectează **Agenți** din meniu și alege **Copilot pentru Microsoft 365**.

       ![Copilot pentru Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.ro.png)

1. Următorul pas este să creezi un agent declarativ selectând **+ Adaugă** agent.

       ![Adaugă Agent](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.ro.png)

1. Vom vedea apoi cum se încarcă experiența de creare conversațională, unde putem discuta în limbaj natural cu Copilot pentru a descrie agentul declarativ pe care dorim să-l construim și să folosim întrebările oferite pentru ghidare.

       Introdu o descriere detaliată care să includă următoarele,  
       - sarcina agentului  
       - ce tip de solicitări poate gestiona  
       - formatul răspunsului său  
       - scopul agentului  
    
       ```text
       Ești un profesionist IT extrem de calificat și experimentat, specializat într-o gamă largă de sisteme informatice, rețele și securitate cibernetică. Ești capabil să diagnostichezi și să rezolvi probleme tehnice, să explici soluțiile într-un mod clar și ușor de înțeles pentru utilizatori de toate nivelurile tehnice și să oferi îndrumări privind cele mai bune practici. Ar trebui să fii concis și informativ, folosind instrucțiuni pas cu pas cu puncte de tip bullet acolo unde este cazul. Scopul tău este să ajuți utilizatorul să înțeleagă problema și cum să o rezolve eficient.
       ```
    
       ![Creează Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.ro.png)

1. După ce ai trimis promptul, va apărea o actualizare vizibilă în panoul din partea dreaptă cu detaliile și instrucțiunile agentului, așa cum au fost definite de prompt. Următorul pas este să confirmi numele agentului, iar Copilot va sugera un nume.

       Introdu `da` pentru a accepta numele sugerat sau introdu un alt nume, cum ar fi următorul,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instrucțiuni actualizate](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.ro.png)

    !!! warning "Reamintire: Întrebările Copilot pot varia între sesiuni"

        Experiența de creare conversațională Copilot poate varia de fiecare dată, iar întrebările oferite pentru ghidare pot fi ușor diferite față de cele anterioare.

1. Numele agentului a fost acum actualizat, așa cum se vede în panoul din partea dreaptă. Suntem acum întrebați să rafinăm instrucțiunile pentru agent. Ceea ce a sugerat Copilot sună bine, așa că îi vom cere să folosească propriile sugestii. Vom introduce următorul text,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Nume actualizat](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.ro.png)

1. Următorul pas este să fim întrebați dacă dorim să adăugăm site-uri web sau cunoștințe accesibile publicului. Vom răspunde cu `Nu`, deoarece vom adăuga doar un prompt pentru agentul nostru declarativ în acest laborator. Laboratoarele ulterioare din lecțiile viitoare vor acoperi sursele de cunoștințe.

      ![Nu s-au adăugat site-uri web sau surse de cunoștințe](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.ro.png)

1. Vom vedea apoi un răspuns de la Copilot că am terminat configurarea agentului nostru folosind experiența de creare conversațională Copilot. Totuși, să-l rafinăm mai mult, subliniind că ar trebui să fie concis și informativ cu puncte de tip bullet, să folosească empatie în comunicare și să ceară feedback după oferirea soluțiilor.

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

      ![Actualizează instrucțiunile agentului](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.ro.png)

1. Copilot confirmă că instrucțiunile au fost actualizate. Apasă **Creează** pentru a provisiona agentul declarativ pentru Microsoft 365 Copilot.

      ![Creează agent](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.ro.png)

    !!! warning "Reamintire: Întrebările Copilot pot varia între sesiuni"

        Experiența de creare conversațională Copilot poate varia de fiecare dată, iar întrebările oferite pentru ghidare pot fi ușor diferite față de cele anterioare.

1. După ce agentul a fost provisionat, vei vedea detaliile agentului care conțin descrierea și instrucțiunile definite în timpul experienței de creare conversațională Copilot.
![Detalii agent](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.ro.png)

Derulați în jos panoul și veți vedea, de asemenea, opțiunile de adăugare a cunoștințelor, activarea căutării pe web (prin Bing), sugestiile de început și detaliile de publicare ale agentului declarativ pentru Microsoft 365 Copilot. Sugestiile de început vor fi afișate și în panoul de testare din partea dreaptă. Utilizatorii pot selecta aceste sugestii pentru a începe interacțiunea cu agentul.

![Sugestii de început](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.ro.png)

1. În secțiunea Detalii a agentului, aveți posibilitatea de a schimba și pictograma agentului. Selectați **Edit**.

![Editare detalii](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.ro.png)

Aici puteți schimba pictograma și culoarea de fundal. Selectați **Save** și apoi selectați din nou **Save** pentru a actualiza detaliile agentului.

![Schimbare pictogramă](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.ro.png)

1. Să facem un test rapid al agentului pe care l-am creat. Selectați una dintre **Sugestiile de început** din panoul de testare din partea dreaptă.

![Testare sugestie de început](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.ro.png)

1. Agentul nostru va răspunde. Observați cum a respectat instrucțiunile, oferind puncte cheie în părți ușor de înțeles și utilizând empatia în răspunsul său.

Dacă derulați până la sfârșitul mesajului, observați cum a cerut feedback după ce a oferit o soluție, conform instrucțiunilor.

![Răspuns din testare](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.ro.png)

În câteva minute, ați adăugat un agent declarativ pentru Microsoft 365 Copilot în Copilot Studio 🙌🏻

În continuare, vom învăța cum să adăugăm un instrument la agentul nostru, creând un prompt.

### 3.2 Crearea și adăugarea unui prompt pentru agentul declarativ

1. Derulați în jos la secțiunea **Tools** și selectați **+ Add tool**

![Adăugare instrument](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.ro.png)

1. Va apărea fereastra modală Tools și va fi afișată o listă de conectori Power Platform. Pentru a adăuga un Prompt, selectați **+ New tool**.

![Instrument nou](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.ro.png)

1. Va fi afișată o listă de alte instrumente - Prompt, Conector personalizat, REST API și Model Context Protocol. Dacă organizația dvs. îndeplinește [cerințele pentru utilizarea computerului](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), aceasta va apărea și în listă. Selectați **Prompt**.

![Selectare prompt](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.ro.png)

1. Introduceți un nume pentru prompt. Să numim promptul nostru `IT Expert`.

![Introducere nume](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.ro.png)

1. Selectați **pictograma săgeată** de lângă **Model** pentru a vedea diferitele modele de chat disponibile. În mod implicit, modelul **Basic GPT-4.1 mini** este selectat și aveți opțiunea de a utiliza propriul model prin Azure AI Foundry Models. Vom rămâne la modelul implicit selectat.

![Schimbare model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.ro.png)

1. În continuare, vom oferi promptului nostru instrucțiuni. Există 3 metode din care puteți alege:

   - Utilizați Copilot pentru a genera instrucțiuni pe baza descrierii a ceea ce doriți să facă promptul.
   - Utilizați un șablon prestabilit din biblioteca de prompturi pentru a crea un prompt.
   - Introduceți manual propriile instrucțiuni.

1. Să încercăm mai întâi utilizarea Copilot pentru a genera instrucțiuni pe baza unei descrieri introduse. Introduceți următoarele în câmpul Copilot și trimiteți.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Începeți cu Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.ro.png)

1. Copilot va începe să genereze un prompt pentru noi.

![Copilot generează prompturi](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.ro.png)

1. Instrucțiunile generate de Copilot vor apărea.

![Instrucțiuni generate de Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.ro.png)

1. Derulați în jos la sfârșitul instrucțiunilor și veți vedea parametrul de intrare al utilizatorului deja definit de Copilot. Aveți apoi opțiunea de a:
   - Păstra instrucțiunile generate.
   - Reîmprospăta instrucțiunile generate folosind Copilot.
   - Șterge instrucțiunile generate.

Ștergeți instrucțiunile generate selectând pictograma **coș de gunoi** și vom încerca următorul pas, biblioteca de prompturi.

![Instrucțiuni prompt](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.ro.png)

1. Selectați linkul **prompt template**.

![Selectare șablon prompt](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.ro.png)

1. Veți vedea o listă de șabloane de prompturi din care puteți alege. Acestea sunt din [Power Platform Prompt library](https://aka.ms/power-prompts).

![Biblioteca de prompturi](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.ro.png)

1. Căutați promptul `IT expert` și selectați-l.

![Selectare prompt IT expert](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.ro.png)

1. Promptul va fi adăugat ca instrucțiuni cu parametrul de intrare definit de șablonul promptului. Similar cu abordarea pe care am folosit-o pentru a oferi instrucțiuni agentului nostru în timpul experienței de creare conversațională cu Copilot, acest șablon de prompt descrie:
   - o sarcină,
   - ce tip de întrebări poate gestiona,
   - și formatul răspunsului său și scopul promptului.

![Instrucțiuni prompt](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.ro.png)

1. Ștergeți instrucțiunile și vom încerca să introducem manual instrucțiunile. Vom folosi [promptul IT Expert](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) din [Power Platform Prompt library](https://aka.ms/power-prompts). Copiați și lipiți promptul.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Instrucțiuni prompt](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.ro.png)

1. În continuare, putem defini parametrii de intrare ai utilizatorului pentru promptul nostru. Aceștia pot fi text și imagini, și date de testare. Există, de asemenea, posibilitatea de a conecta promptul la cunoștințe din tabelele Dataverse. Pentru acest exercițiu, avem doar un parametru de intrare de definit, care este problema. Acesta este în prezent un substituent în promptul nostru ca `[Problem]`. Vom configura acum această intrare fie introducând caracterul `/`, fie selectând **+Add content** și apoi **Text**.

![Intrare text](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.ro.png)

1. Acum putem introduce un nume pentru parametrul nostru de intrare și date de testare.

Introduceți următoarele ca nume

    ```text
    problem input
    ```

Introduceți următoarele ca date de testare

    ```text
    My laptop gets an error with a blue screen
    ```

Apoi selectați **Close**.

![Configurare intrare problemă](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.ro.png)

1. Parametrul de intrare pentru problemă va fi acum adăugat la instrucțiuni cu datele de testare configurate. Acum putem testa promptul nostru!

![Intrare problemă adăugată](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.ro.png)

1. Selectați **Test** pentru a testa promptul.

![Testare instrucțiuni](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.ro.png)

1. Răspunsul va fi afișat. Observați cum răspunsul oferă titluri cu puncte cheie conform instrucțiunilor. Derulați în jos și analizați restul răspunsului modelului.

![Răspuns model](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.ro.png)

1. Înainte de a salva promptul, să învățăm despre setările care pot fi configurate pentru acest prompt. Selectați pictograma **ellipsis (...)**.

![Setări prompt](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.ro.png)

1. Aici vom vedea trei setări care pot fi configurate.

   - **Temperature**: Temperaturile mai scăzute duc la rezultate previzibile, în timp ce temperaturile mai ridicate permit răspunsuri mai diverse sau creative.
   - **Record retrieval**: Specificați numărul de înregistrări recuperate pentru sursele dvs. de cunoștințe.
   - **Include links in the response**: Când este selectat, răspunsul include citări de linkuri pentru înregistrările recuperate.

Selectați pictograma **X** pentru a ieși din Setări.

![Configurare setări](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.ro.png)

1. Selectați **Save** pentru a salva promptul.

![Salvare prompt](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.ro.png)

1. În continuare, selectați **Add to agent** pentru a adăuga promptul la agentul nostru declarativ.

![Instrucțiuni prompt](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.ro.png)

1. Promptul va apărea acum sub Tools 🙌🏻

![Prompt adăugat](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.ro.png)

Vom actualiza în continuare instrucțiunile noastre pentru a invoca promptul și a testa agentul nostru declarativ.

### 3.3 Actualizarea instrucțiunilor și testarea agentului declarativ

1. Derulați în sus la secțiunea **Details** și selectați **Edit**. Acest lucru va permite editarea câmpurilor.

![Selectare Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.ro.png)

1. Acum putem actualiza instrucțiunile pentru a invoca promptul nostru, făcând referire la numele promptului. Ștergeți instrucțiunile, apoi copiați și lipiți următoarele.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Observați cum propoziția finală instruiește agentul să folosească întrebarea adresată de utilizator ca valoare pentru parametrul de intrare al problemei. Agentul va folosi întrebarea ca intrare pentru prompt. În continuare, selectați **Save**.

![Actualizare instrucțiuni pentru a invoca promptul](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.ro.png)

1. Suntem acum gata să testăm instrucțiunile actualizate ale agentului nostru declarativ. Selectați **pictograma de reîmprospătare** din panoul de testare.

![Selectare pictogramă de reîmprospătare](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.ro.png)

1. Introduceți următorul prompt și trimiteți.

```text
Mă puteți ajuta, laptopul meu are un ecran albastru
```

![Efectuare test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.ro.png)

1. Agentul invocă promptul și răspunde.

![Instrucțiuni prompt](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.ro.png)

Acum să publicăm agentul nostru declarativ 😃

### 3.4 Publicarea agentului declarativ în Microsoft 365 Copilot și Microsoft Teams

1. Selectați **Publish**.

![Publicare agent](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.ro.png)

1. Va apărea o fereastră modală care afișează Canalele și detaliile de publicare care pot fi actualizate.

   - Canale: Agentul va fi publicat în Microsoft 365 Copilot și Microsoft Teams.
   - Informații despre aplicația agentului: Acestea sunt ceea ce va fi afișat atunci când utilizatorul adaugă agentul în Microsoft 365 Copilot sau în Microsoft Teams. Aceste câmpuri pot fi actualizate după cum este necesar.

![Detalii aplicație agent](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.ro.png)

1. De exemplu, puteți actualiza **Short description**, **Long description**, **Developer name** cu numele dvs.

!!! tip
Dacă nu vedeți toate câmpurile afișate în browserul dvs., încercați să micșorați zoom-ul, de exemplu, la 75%.

Selectați **Publish**. Copilot Studio va începe apoi publicarea agentului.

![Publicare agent](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.ro.png)

1. Când publicarea este finalizată, vom vedea [Opțiunile de disponibilitate](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) ale agentului.

| Opțiune de disponibilitate | Descriere |
| ---------- | ---------- |
| Share Link | Copiați linkul pentru a-l distribui utilizatorilor partajați pentru a deschide agentul în Microsoft 365 Copilot |
| Show to my teammates and shared users | Vă permite să acordați acces altora pentru a participa la crearea agentului sau grupurilor de securitate pentru a le acorda accesul de a utiliza agentul în Microsoft 365 Chat sau Microsoft Teams. |
| Show to everyone in my org | Trimiteți administratorului de tenant pentru a adăuga în catalogul organizațional pentru toți utilizatorii tenantului pentru a adăuga agentul. Agentul va apărea sub Built by your org în Microsoft 365 Copilot și în Microsoft Teams |
| Download as a .zip | Descărcați ca fișier zip pentru a-l încărca ca aplicație personalizată în Microsoft Teams |

![Opțiuni de disponibilitate](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.ro.png)

1. Să vedem cum putem partaja agentul. Selectați **Show to my teammates and shared users**. Va apărea un panou unde puteți căuta utilizatori cu care doriți să partajați agentul, fie introducând numele lor, un email sau un grup de securitate. Puteți revizui această listă oricând pentru a edita cine are acces la agent.

Există, de asemenea, două casete de selectare:
- _Trimiteți o invitație prin email utilizatorilor noi_ - utilizatorii noi vor primi o invitație prin email.
- _Vizibil în Built with Power Platform_ - agentul devine disponibil în secțiunea Built with Power Platform din magazinul de aplicații Teams.
Pentru mai multe detalii, consultați [Conectarea și configurarea unui agent pentru Teams și Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Selectați **Anulare** sau pictograma **X** pentru a ieși din panou.

![Distribuie agentul](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.ro.png)

1. Selectați **Copiere** și, într-o filă nouă a browserului, lipiți linkul.

![Copiază linkul](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.ro.png)

1. Microsoft 365 Copilot se va încărca și va apărea o fereastră modală cu detaliile aplicației agentului. Observați cum numele dezvoltatorului, descrierea scurtă și descrierea lungă sunt afișate. Acestea provin din detaliile de publicare actualizate într-un pas anterior.

Selectați **Adăugare**.

![Opțiuni de disponibilitate](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.ro.png)

1. Următorul pas este încărcarea agentului nostru declarativ. Putem vedea sugestiile de început din care utilizatorii pot selecta rapid pentru a primi ajutor imediat.

Selectați una dintre sugestiile de început. În sugestiile mele de început, voi selecta sugestia **Ajutor pentru instalarea software-ului**, care va completa automat câmpul de mesaj Copilot. Trimiteți întrebarea către Copilot.

![Selectați sugestia de început](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.ro.png)

1. Selectați **Permite întotdeauna** pentru a oferi agentului declarativ permisiunea de a invoca sugestia Expert IT.

![Selectați permite întotdeauna](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.ro.png)

1. Agentul va invoca apoi sugestia **Expert IT** și vom vedea răspunsul modelului returnat ca mesaj în agentul nostru declarativ.

![Răspuns](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.ro.png)

Derulați în jos pentru a vedea detaliile complete ale răspunsului.

![Răspuns](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.ro.png)

1. Dar _cum știm_ că agentul declarativ a invocat sugestia? 👀 Ei bine, iată un sfat!

!!! tip
    Puteți testa și depana agenții în Microsoft 365 Copilot activând [modul dezvoltator](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Introduceți următorul text în câmpul de mesaj Copilot și trimiteți.

    ```text
    -developer on
    ```

Un mesaj de confirmare va apărea pentru a vă informa că modul dezvoltator este acum activat.

![Modul dezvoltator activat](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.ro.png)

1. Trimiteți următoarea întrebare pentru a invoca sugestia.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Introduceți întrebarea](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.ro.png)

1. Vom vedea din nou un răspuns model de la sugestia **Expert IT** returnat ca mesaj. Derulați în jos până la sfârșitul mesajului și va fi afișat un card cu informații de depanare.

Extindeți **Informații de depanare agent** selectându-l.

![Informații de depanare agent](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.ro.png)

1. Aici veți găsi informații despre metadatele agentului care au apărut în timpul rulării.

![Informații de depanare agent extinse](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.ro.png)

În cazul nostru, ne vom concentra pe secțiunea _Acțiuni_.

- **Acțiuni potrivite** evidențiază starea curentă a funcțiilor găsite în timpul căutării aplicației.
- **Acțiuni selectate** evidențiază starea curentă a funcțiilor alese pentru rulare pe baza procesului decizional al aplicației.

![Informații de depanare agent extinse](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.ro.png)

Astfel, putem vedea că orchestratorul agentului a ales să invoce sugestia Expert IT conform instrucțiunilor agentului nostru declarativ. Acest lucru este detaliat în secțiunea _Acțiuni executate_, care ne spune, de asemenea, că sugestia a fost invocată cu succes.

![Revizuire informații de depanare agent](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.ro.png)

1. Pentru a dezactiva modul dezvoltator, introduceți următorul text în câmpul de mesaj Copilot și trimiteți.

    ```text
    -developer off
    ```

Un mesaj de confirmare va apărea pentru a vă informa că modul dezvoltator este dezactivat. Super, acum știți cum să verificați dacă agentul dvs. declarativ din Microsoft 365 Copilot a invocat sugestia 🌞

![Modul dezvoltator dezactivat](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.ro.png)

1. Vom testa acum agentul nostru în Microsoft Teams. Navigați la **Aplicații** folosind meniul din partea stângă și selectați **Teams** în secțiunea _Aplicații_.

![Selectați Teams în Aplicații](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.ro.png)

1. Microsoft Teams se va încărca într-o filă nouă a browserului și vi se vor prezenta termenii de utilizare pentru Microsoft 365 Copilot, selectați **Sunt de acord**.

![Selectați Sunt de acord](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.ro.png)

1. Microsoft 365 Copilot se va încărca implicit, cu panoul din partea dreaptă listând toți agenții disponibili, inclusiv agentul declarativ **Contoso Tech Support Pro**.

![Microsoft 365 Copilot în Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.ro.png)

1. Selectați **pictograma elipsă (...)** din meniul din partea stângă. Căutați **Contoso Tech Support Pro** în câmpul de căutare sau, dacă vedeți agentul, selectați-l.

De asemenea, puteți face clic dreapta pe mouse pentru a **Fixa** agentul pentru acces rapid în meniul din partea stângă din Microsoft Teams.

![Selectați și fixați agentul](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.ro.png)

1. Vom vedea apoi agentul nostru încărcat. 1. Să testăm acum agentul nostru. Introduceți următoarea sugestie și trimiteți.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Fixați agentul](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.ro.png)

1. Un răspuns model de la sugestia noastră va fi apoi afișat.

![Răspuns în Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.ro.png)

În câteva minute, ați învățat cum să publicați agentul dvs. declarativ și să-l testați în Microsoft 365 Copilot și în Microsoft Teams 😊

## ✅ Misiune Îndeplinită

Felicitări! 👏🏻 Ați creat un agent declarativ în Copilot Studio, unde ați adăugat o sugestie, ați instruit agentul să utilizeze sugestia și ați învățat cum să testați + publicați agentul dvs. în Microsoft 365 Copilot și Microsoft Teams.

Agentul dvs. este acum activ—pregătit să ajute, să rezolve probleme și să servească utilizatorii interni la cerere.

Acesta este sfârșitul **Laboratorului 03 - Construirea unui agent declarativ în Microsoft Copilot Studio pentru Microsoft 365 Copilot**, selectați linkul de mai jos pentru a trece la lecția următoare.

⏭️ [Treceți la lecția **Crearea unei soluții noi**](../04-creating-a-solution/README.md)

Până data viitoare, rămâneți ageri. Viitorul muncii în corporații trece prin agenți—și acum știți cum să construiți unul.

## 📚 Resurse Tactice

🔗 [Construirea unui agent declarativ în Microsoft Copilot Studio pentru Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Adăugarea sugestiilor](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Distribuirea agenților cu alți utilizatori](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Construirea sugestiilor pentru agentul dvs.](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analitică" />

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.