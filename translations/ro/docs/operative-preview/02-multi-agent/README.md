<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4fb913dfc3bbc71506dd3602c4b8e6ed",
  "translation_date": "2025-10-20T18:02:18+00:00",
  "source_file": "docs/operative-preview/02-multi-agent/README.md",
  "language_code": "ro"
}
-->
# 🚨 Misiunea 02: Agenți Conectați

--8<-- "disclaimer.md"

## 🕵️‍♂️ NUME DE COD: `OPERAȚIUNEA SIMFONIE`

> **⏱️ Fereastra de Timp pentru Operațiune:** `~45 minute`

## 🎯 Rezumatul Misiunii

Bine ai revenit, Agent. În Misiunea 01, ai construit Agentul Principal de Recrutare - o bază solidă pentru gestionarea fluxurilor de lucru în recrutare. Dar un singur agent poate face doar atât.

Misiunea ta, dacă alegi să o accepți, este **Operațiunea Simfonie** - transformarea agentului tău unic într-un **sistem multi-agent**: o echipă orchestrată de agenți specializați care lucrează împreună pentru a gestiona provocările complexe ale recrutării. Gândește-te la asta ca la o trecere de la un operator solo la comandarea unei echipe de specialiști.

La fel ca o orchestră simfonică unde fiecare muzician își joacă rolul în armonie perfectă, vei adăuga doi specialiști critici la Agentul Principal de Recrutare: un Agent de Preluare a Aplicațiilor pentru procesarea automată a CV-urilor și un Agent de Pregătire a Interviurilor pentru crearea materialelor de interviu cuprinzătoare. Acești agenți vor lucra împreună fără probleme sub coordonarea principalului tău orchestrator.

## 🔎 Obiective

În această misiune, vei învăța:

1. Când să folosești **agenți copil** vs **agenți conectați**
1. Cum să proiectezi **arhitecturi multi-agent** care se pot extinde  
1. Crearea **agenților copil** pentru sarcini specifice
1. Stabilirea **modelului de comunicare** între agenți
1. Construirea Agentului de Preluare a Aplicațiilor și Agentului de Pregătire a Interviurilor

## 🧠 Ce sunt agenții conectați?

În Copilot Studio, nu ești limitat la construirea agenților unici, monolitici. Poți crea **sisteme multi-agent** - rețele de agenți specializați care lucrează împreună pentru a gestiona fluxuri de lucru complexe.

Gândește-te la asta ca la o organizație reală: în loc ca o singură persoană să facă totul, ai specialiști care excelează în sarcini specifice și colaborează atunci când este necesar.

### De ce sunt importante sistemele multi-agent

- **Scalabilitate:** Fiecare agent poate fi dezvoltat, testat și întreținut independent de echipe diferite.  
- **Specializare:** Agenții se pot concentra pe ceea ce fac cel mai bine. Poate unul pentru procesarea datelor, altul pentru interacțiunea cu utilizatorii, altul pentru luarea deciziilor.  
- **Flexibilitate:** Poți combina și potrivi agenți, reutiliza-i în proiecte diferite și evolua sistemul treptat.  
- **Ușurință în întreținere:** Modificările unui agent nu afectează neapărat alții, făcând actualizările mai sigure și mai ușoare.

### Exemplu real: Procesul de recrutare

Ia în considerare fluxul nostru de recrutare - mai mulți agenți ar putea lucra împreună cu următoarele responsabilități:

- **Preluarea CV-urilor** necesită abilități de analiză a documentelor și extragerea datelor
- **Evaluarea** implică analizarea CV-urilor candidaților și potrivirea lor cu cerințele postului
- **Pregătirea interviurilor** necesită o analiză profundă a compatibilității candidatului  
- **Comunicarea cu candidații** necesită abilități empatice de comunicare

În loc să construiești un agent masiv care încearcă să gestioneze toate aceste abilități diferite, poți crea agenți specializați pentru fiecare domeniu și să-i orchestrezi împreună.

## 🔗 Agenți copil vs agenți conectați: Diferența cheie

Copilot Studio oferă două moduri de a construi sisteme multi-agent, fiecare cu utilizări distincte:

### ↘️ Agenți copil

Agenții copil sunt **specialiști ușori** care trăiesc în cadrul agentului principal. Gândește-te la ei ca la echipe specializate din același departament.

#### Detalii tehnice cheie

- Agenții copil trăiesc în cadrul agentului părinte și au o singură pagină de configurare.
- Instrumentele și Cunoștințele sunt **stocate la agentul părinte**, dar configurate să fie "Disponibile pentru" agentul copil.
- Agenții copil **partajează subiectele** agentului părinte. Subiectele pot fi referite de instrucțiunile agentului copil.
- Agenții copil **nu necesită publicare separată** - sunt disponibili automat în cadrul agentului părinte odată ce sunt creați. Acest lucru face testarea mai ușoară, deoarece modificările agentului părinte și ale agenților copil pot fi efectuate în **același spațiu de lucru comun**.

#### Folosește agenți copil când

- O singură echipă gestionează întreaga soluție
- Vrei să organizezi logic instrumentele și cunoștințele în sub-agenți
- Nu ai nevoie de autentificare sau implementare separată pentru fiecare agent
- Agenții nu vor fi publicați separat sau utilizați independent
- Nu ai nevoie să reutilizezi agenți în mai multe soluții

**Exemplu:** Un agent de asistență IT cu agenți copil pentru:

- Proceduri de resetare a parolelor
- Depanarea hardware-ului  
- Ghiduri de instalare software

### 🔀 Agenți conectați

Agenții conectați sunt **agenți independenți, complet dezvoltați** cu care agentul principal poate colabora. Gândește-te la ei ca la departamente separate care lucrează împreună la un proiect.

#### Detalii tehnice cheie

- Agenții conectați au **subiectele și fluxurile lor de conversație**. Ei operează independent cu propriile setări, logică și cicluri de implementare.
- Agenții conectați **trebuie să fie publicați** înainte de a fi adăugați și utilizați de alți agenți.
- În timpul testării, modificările agentului conectat trebuie să fie publicate înainte de a fi utilizate de agentul apelant.

#### Folosește agenți conectați când

- Echipe multiple dezvoltă și întrețin diferiți agenți independent
- Agenții au nevoie de propriile setări, autentificare și canale de implementare
- Vrei să publici și să întreții agenți separat cu gestionarea independentă a ciclului de viață al aplicației (ALM) pentru fiecare agent
- Agenții ar trebui să fie reutilizabili în mai multe soluții

**Exemplu:** Un sistem de servicii pentru clienți care se conectează la:

- Un agent de facturare separat întreținut de echipa financiară
- Un agent de suport tehnic separat întreținut de echipa de produs
- Un agent de retururi separat întreținut de echipa de operațiuni

!!! tip "Sfat"
    Poți combina ambele abordări! De exemplu, agentul principal ar putea să se conecteze la agenți externi din alte echipe, având în același timp agenți copil pentru sarcini interne specializate.

## 🎯 Modele de arhitectură multi-agent

Când proiectezi sisteme multi-agent, apar mai multe modele bazate pe modul în care agenții interacționează:

| Model                | Descriere                                                                 | Cel mai potrivit pentru                                         |
|----------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------|
| **Hub și Spoke**     | Un agent orchestrator principal coordonează cu mai mulți agenți specializați. Orchestratorul gestionează interacțiunea cu utilizatorul și deleagă sarcini agenților copil sau conectați. | Fluxuri complexe unde un agent coordonează sarcini specializate |
| **Pipeline**         | Agenții transmit munca secvențial de la unul la altul, fiecare adăugând valoare înainte de a trece la etapa următoare. | Procese liniare precum procesarea aplicațiilor (preluare → evaluare → interviu → decizie) |
| **Colaborativ**      | Agenții lucrează împreună simultan pe diferite aspecte ale aceleiași probleme, partajând contextul și rezultatele. | Analize complexe care necesită perspective sau domenii de expertiză multiple |

!!! tip "Sfat"
    Poți avea chiar și un hibrid al două sau mai multe dintre aceste modele.

## 💬Comunicarea agenților și partajarea contextului

Când agenții lucrează împreună, trebuie să partajeze informații eficient. Iată cum funcționează acest lucru în Copilot Studio:

### Istoricul conversației

În mod implicit, când un agent principal apelează un agent copil sau conectat, poate transmite **istoricul conversației**. Acest lucru oferă agentului specialist context complet despre ceea ce a discutat utilizatorul.

Poți dezactiva acest lucru din motive de securitate sau performanță - de exemplu, dacă agentul specialist trebuie doar să finalizeze o sarcină specifică fără a avea nevoie de contextul complet al conversației. Acesta poate fi o bună apărare împotriva **scurgerii de date**.

### Instrucțiuni explicite

Agentul principal poate oferi **instrucțiuni specifice** agenților copil sau conectați. De exemplu: "Procesează acest CV și rezumă abilitățile pentru rolul de Dezvoltator Senior."

### Valori returnate

Agenții pot returna informații structurate agentului apelant, permițând agentului principal să utilizeze acele informații în pașii următori sau să le partajeze cu alți agenți.

### Integrarea Dataverse

Pentru scenarii mai complexe, agenții pot partaja informații prin **Dataverse** sau alte depozite de date, permițând partajarea contextului persistent între mai multe interacțiuni.

## ↘️Agent copil: Agent de Preluare a Aplicațiilor

Să începem construirea sistemului nostru multi-agent de recrutare. Primul nostru specialist va fi **Agentul de Preluare a Aplicațiilor** - un agent copil responsabil de procesarea CV-urilor și informațiilor candidaților primite.

```mermaid
---
config:
  layout: elk
  look: neo
---
flowchart TB
 subgraph People["People"]
    direction TB
        HiringManager["Hiring Manager"]
        Interviewers["Interviewers"]
  end
 subgraph Agents["Agents"]
    direction LR
        ApplicationIntakeAgent["Application Intake Agent<br>(Child)"]
        InterviewAgent["Interview Agent<br>(Connected)"]
        HRAgent["HR Agent"]
  end
    HiringManager -- Upload CV --> HRAgent
    HRAgent -- Upload Resume, Create Candidate, Match to Job Roles --> ApplicationIntakeAgent
    ApplicationIntakeAgent -- Create Resume, Upsert Candidate, Create Job Application --> Dataverse["Dataverse"]
    ApplicationIntakeAgent -- Store Resume file in file column --> Dataverse
    HiringManager -- Ask for summaries --> HRAgent
    Interviewers -- Request interview pack --> HRAgent
    HRAgent -- Generate interview pack and summarize data --> InterviewAgent
    InterviewAgent -- Read all Candidate, Resume, Job Roles, Evaluation Criteria Data --> Dataverse
     HiringManager:::person
     Interviewers:::person
     ApplicationIntakeAgent:::agent
     InterviewAgent:::agent
     HRAgent:::agent
     Dataverse:::data
    classDef person fill:#e6f0ff,stroke:#3b82f6,color:#0b3660
    classDef agent fill:#e8f9ef,stroke:#10b981,color:#064e3b
    classDef data  fill:#f3f4f6,stroke:#6b7280,color:#111827
```

### 🤝Responsabilitățile Agentului de Preluare a Aplicațiilor

- **Analizează conținutul CV-urilor** din fișiere PDF furnizate prin chat interactiv (Într-o misiune viitoare vei învăța cum să procesezi CV-urile autonom).
- **Extrage date structurate** (nume, abilități, experiență, educație)
- **Potrivește candidații cu posturile disponibile** pe baza calificărilor și scrisorii de intenție
- **Stochează informațiile candidaților** în Dataverse pentru procesare ulterioară
- **Elimină duplicatele aplicațiilor** pentru a evita crearea aceluiași candidat de două ori, potrivindu-se cu înregistrările existente folosind adresa de e-mail extrasă din CV.

### ⭐De ce ar trebui să fie un agent copil

Agentul de Preluare a Aplicațiilor se potrivește perfect ca agent copil deoarece:

- Este specializat în procesarea documentelor și extragerea datelor
- Nu necesită publicare separată  
- Face parte din soluția noastră generală de recrutare gestionată de aceeași echipă
- Se concentrează pe un declanșator specific (primirea unui CV nou) și este invocat de Agentul de Recrutare.

## 🔀Agent conectat: Agent de Pregătire a Interviurilor  

Al doilea nostru specialist va fi **Agentul de Pregătire a Interviurilor** - un agent conectat care ajută la crearea materialelor de interviu cuprinzătoare și evaluează răspunsurile candidaților.

### 🤝Responsabilitățile Agentului de Pregătire a Interviurilor

- **Creează pachete de interviu** cu informații despre companie, cerințele postului și criterii de evaluare
- **Generează întrebări de interviu** adaptate rolurilor specifice și experiențelor candidaților
- **Răspunde la întrebări generale** despre posturi și aplicații pentru comunicarea cu părțile interesate

### ⭐De ce ar trebui să fie un agent conectat

Agentul de Pregătire a Interviurilor funcționează mai bine ca agent conectat deoarece:

- Echipa de achiziție de talente ar putea dori să-l folosească independent în mai multe procese de recrutare
- Are nevoie de propria bază de cunoștințe despre cele mai bune practici de interviu și criterii de evaluare
- Managerii de recrutare diferiți ar putea dori să personalizeze comportamentul său pentru echipele lor
- Ar putea fi reutilizat pentru posturi interne, nu doar pentru recrutarea externă

## 🧪Laborator 2.1: Adăugarea Agentului de Preluare a Aplicațiilor

Ești gata să pui teoria în practică? Hai să adăugăm primul nostru agent copil la Agentul de Recrutare existent.

### Cerințe preliminare pentru finalizarea acestei misiuni

Va trebui să **fie**:

- **Ai finalizat Misiunea 01** și ai Agentul de Recrutare pregătit, **SAU**
- **Importă soluția de început pentru Misiunea 02** dacă începi de la zero sau ai nevoie să recuperezi. [Descarcă Soluția de Început pentru Misiunea 02](https://aka.ms/agent-academy)

!!! note "Importul Soluției și Datele de Exemplu"
    Dacă folosești soluția de început, consultă [Misiunea 01](../01-get-started/README.md) pentru instrucțiuni detaliate despre cum să imporți soluții și date de exemplu în mediul tău.

### 2.1.1 Configurarea soluției

1. În Copilot Studio, selectează punctele de suspensie (...) de sub Instrumente în navigarea din stânga.
1. Selectează **Soluții**.  
    ![Selectează Soluții](../../../../../translated_images/2-select-solutions.42b77407cffd37d7c8b3265f2fd8adb88053b9ebda31bdf0b22cd77ec5b7bf88.ro.png)
1. Găsește soluția ta Operativă, selectează **punctele de suspensie (...)** de lângă ea și alege **Setează soluția preferată**. Acest lucru va asigura că toate lucrările tale vor fi adăugate la această soluție.  
    ![Setează Soluția Preferată](../../../../../translated_images/2-select-preferred-solution.4542e922555429074f49c6480f6e8345f8c8818b2549fe0cd625fa58a45aede9.ro.png)

### 2.1.2 Configurează instrucțiunile agentului de Recrutare

1. **Navighează** la Copilot Studio. Asigură-te că mediul tău este selectat în colțul din dreapta sus **Selectorul de Mediu**.

1. Deschide **Agentul de Recrutare** din Misiunea 01

1. Selectează **Editare** în secțiunea **Instrucțiuni** din fila **Prezentare generală** și adaugă următoarele instrucțiuni în partea de sus:

    ```text
    You are the central orchestrator for the hiring process. You coordinate activities, provide summaries, and delegate work to specialized agents.
    ```

1. Selectează **Salvează**  
    ![Instrucțiuni Agent de Recrutare](../../../../../translated_images/2-hiring-agent-instructions.dc1fcc2513c88722145e46794f3b3cd8b96d62482090275da62679bbfb6e352a.ro.png)

1. Selectează **Setări** (colțul din dreapta sus)

1. Asigură-te de următoarele setări:

    | Setare | Valoare |
    |--------|---------|
    | Folosește orchestrarea AI generativă pentru răspunsurile agentului | **Da** |
    | Moderarea conținutului | **Moderată** |
    | Folosește cunoștințe generale | **Dezactivat** |
    | Folosește informații de pe Web | **Dezactivat** |
    | Încărcări de fișiere | **Activat** |

![Folosește Orchestrarea Generativă](../../../../../translated_images/2-gen-orchestration.29e616a2d5721c51953fb6bde452c1ee06f40684911a6eba44e07de41c328726.ro.png)
![Setare Moderare](../../../../../translated_images/2-set-medium-moderation.c6c0c1d6c427abac44441aad97892c84bbc43420b91c2c18e704980f604ec1b2.ro.png)
![Setări Cunoștințe și Web](../../../../../translated_images/2-settings-knowledge-web.716090f708dff925ebb0d259f20734da39c831bba4df4f97bd334ce701aa92a9.ro.png)

### 2.1.3 Adaugă agentul copil de Preluare a Aplicațiilor

1. **Navighează** la fila **Agenți** din cadrul Agentului de Recrutare - aici vei adăuga agenții specialiști.

1. Selectează **+ Adaugă** și apoi **Creează un agent**. Observă că este etichetat cu "*Creează un agent ușor care trăiește în interiorul agentului tău curent și moștenește setările acestuia. Ideal pentru descompunerea logicii complexe* "  
    ![Adaugă Agent Copil](../../../../../translated_images/2-add-child-agent.47e6246572a58b85236c969c69f3bae835fd5099f4d7603abeab6b1ad9ce2a70.ro.png)

1. **Numește** agentul `Agent de Preluare a Aplicațiilor`

1. Selectează **Agentul alege** - Pe baza descrierii din dropdown-ul **Când va fi utilizat?**. Aceste opțiuni sunt similare cu declanșatoarele care pot fi configurate pentru subiecte.

1. Setează **Descrierea** să fie:

    ```text
    Processes incoming resumes and stores candidates in the system
    ```

    !
Folosim **Instrumentele Agent Flow** în loc de Subiecte pentru pasul *Încărcare CV* deoarece acest proces backend în mai mulți pași necesită o execuție deterministă și integrare cu sisteme externe. În timp ce Subiectele sunt cele mai potrivite pentru ghidarea dialogului conversațional, Agent Flows oferă automatizarea structurată necesară pentru a gestiona în mod fiabil procesarea fișierelor, validarea datelor și actualizarea bazelor de date (inserarea de noi sau actualizarea celor existente) fără a depinde de interacțiunea utilizatorului.

1. Localizați secțiunea **Tools** din pagina Application Intake Agent.  
   **Important:** Aceasta nu este fila Tools a agentului părinte, ci poate fi găsită dacă derulați în jos sub instrucțiunile agentului copil.

1. Selectați **+ Add**  
   ![Adăugați Instrument](../../../../../translated_images/2-add-tool.bbf282ab0b7abeb6cad0032db2dba94adf53e4f206ac976c6c7b9b339fb0e996.ro.png)

1. Selectați **+ New tool**  
   ![Adăugați un instrument nou](../../../../../translated_images/2-new-tool-2.6e09c313b1af9d233ecb1c1559fb9f5d92123bfc2af6cc2df5f52e549b6b961c.ro.png)

1. Selectați **Agent flow**.  
   Designerul Agent Flow se va deschide, aici vom adăuga logica pentru încărcarea CV-ului.  
   ![Adăugați Agent Flow](../../../../../translated_images/2-add-agent-flow.e5aecede97ecd79e08aae4be784a6255f354f13edb2621d3d61e961b09a70d53.ro.png)

1. Selectați nodul **When an agent calls the flow** și selectați **+ Add** un input pentru următorii parametri, asigurându-vă că adăugați atât numele, cât și descrierea.

    | Tip   | Nume       | Descriere                                                                                                   |
    |-------|------------|-----------------------------------------------------------------------------------------------------------|
    | Fișier| Resume     | Fișierul PDF al CV-ului                                                                                   |
    | Text  | Message    | Extrageți un mesaj stil scrisoare de intenție din context. Mesajul trebuie să fie mai mic de 2000 de caractere. |
    | Text  | UserEmail  | Adresa de email de unde provine CV-ul. Aceasta va fi utilizatorul care încarcă CV-ul în chat sau adresa de email de unde a fost primit. |

    ![Configurați parametrii de input](../../../../../translated_images/2-upload-resume-trigger.1f3ca963aa3d9d723756d0636d99c1d458e197b16df93f2ac360283cf07f3fb1.ro.png)

1. Selectați **+ icon** sub nodul trigger, căutați `Dataverse`, selectați **See more** lângă Microsoft Dataverse, și apoi selectați acțiunea **Add a new row** din secțiunea **Microsoft Dataverse**  
    ![Adăugați un nod nou](../../../../../translated_images/2-upload-resume-add-resume.0e5bb197fef951167c9168c827e48e8d45a24c7d619452d387d980336a30d421.ro.png)

1. Denumiți nodul **Create Resume**, selectând **ellipsis(...)**, și apoi **Rename**  
    ![Redenumiți nodul](../../../../../translated_images/2-upload-resume-add-resume-rename.f8ecb680cca6fe7d98cd9590ba4d59d0fe19a742baca4c05f7558ed3fea8c44e.ro.png)

1. Setați **Table name** la **Resumes**, apoi selectați **Show all** pentru a afișa toți parametrii.

1. Setați următoarele **proprietăți**:

    | Proprietate              | Cum să setați                 | Detalii / Expresie                                              |
    |--------------------------|-------------------------------|-----------------------------------------------------------------|
    | **Resume Title**         | Date dinamice (iconița fulger)| **When an agent calls the flow** → **Resume name** Dacă nu vedeți Resume name, asigurați-vă că ați configurat parametrul Resume mai sus ca tip de date. |
    | **Cover letter**         | Expresie (iconița fx)         | `if(greater(length(triggerBody()?['text']), 2000), substring(triggerBody()?['text'], 0, 2000), triggerBody()?['text'])` |
    | **Source Email Address** | Date dinamice (iconița fulger)| **When an agent calls the flow** → **UserEmail**               |
    | **Upload Date**          | Expresie (iconița fx)         | `utcNow()`                                                     |

    ![Editați Proprietăți](../../../../../translated_images/2-upload-resume-add-resume-props.17586d1a9546933fbc66b13e8f36366d5122a90db2f37abb1b459dea97605270.ro.png)

1. Selectați **+ icon** sub nodul Create Resume, căutați `Dataverse`, selectați **See more** lângă Microsoft Dataverse, și apoi selectați acțiunea **Upload a file or an image**.  
   **Important:** Asigurați-vă că nu selectați acțiunea Upload a file or an image to the selected environment.

1. Denumiți nodul **Upload Resume File**, selectând **ellipsis(...)**, și apoi **Rename**

1. Setați următoarele **proprietăți**:

     | Proprietate      | Cum să setați                 | Detalii |
     |------------------|-------------------------------|---------|
     | **Content name** | Date dinamice (iconița fulger)| When an agent calls the flow → Resume name |
     | **Table name**   | Selectați                    | Resumes |
     | **Row ID**       | Date dinamice (iconița fulger)| Create Resume → See more → Resume |
     | **Column Name**  | Selectați                    | Resume PDF |
     | **Content**      | Date dinamice (iconița fulger)| When an agent calls the flow → Resume contentBytes |

     ![Setați proprietăți](../../../../../translated_images/2-upload-resume-upload-resume-file.2250f45ffd06b6c60e91e0517966334acbd9cf6c0f98dc2f3f615431ae03be90.ro.png)

1. Selectați nodul **Respond to the agent**, și apoi selectați **+ Add an output**

     | Proprietate | Cum să setați                 | Detalii |
     |-------------|-------------------------------|---------|
     | **Tip**     | Selectați                     | `Text`  |
     | **Nume**    | Introduceți                  | `ResumeNumber` |
     | **Valoare** | Date dinamice (iconița fulger)| Create Resume → See More → Resume Number |
     | **Descriere** | Introduceți                 | `Numărul [ResumeNumber] al CV-ului creat` |

     ![Setați Proprietăți](../../../../../translated_images/2-upload-resume-return.f9beac6547b4f228a4ee6c538ca64e86883ab7b5d85b08c2cd6da26e4cc2e4c8.ro.png)

1. Selectați **Save draft** în colțul din dreapta sus  
     ![Salvați ca schiță](../../../../../translated_images/2-upload-resume-save-draft.6d5bed32d254815c765c19109b82113fd2520dbb5dce84288a3eb13896958d93.ro.png)

1. Selectați fila **Overview**, apoi **Edit** în panoul **Details**

     1. **Flow name**:`Resume Upload`
     1. **Description**:`Încarcă un CV la cerere`

     ![Redenumiți agent flow](../../../../../translated_images/2-upload-resume-rename.a26569a2def30b456ed3176c21ce889637c4d1155c56ca479521d278f25a4d5d.ro.png)

1. Selectați din nou fila **Designer**, și apoi **Publish**.  
     ![Publicare](../../../../../translated_images/2-upload-resume-publish.36f763ffc4487b32114a47a087fd5282beb7a9bb0272b3ff46046d8cd413e053.ro.png)

### 2.1.5 Conectați flow-ul la agentul dvs.

Acum veți conecta flow-ul publicat la Application Intake Agent.

1. Navigați înapoi la **Hiring Agent** și selectați fila **Agents**. Deschideți **Application Intake Agent**, și apoi localizați panoul **Tools**.  
    ![Adăugați agent flow la agent](../../../../../translated_images/2-add-agent-flow-to-agent.3c9aadae42fc389e7c6f56ea80505cd067e45ba7e4aa03f201e2cd792e24d1fe.ro.png)

1. Selectați **+ Add**

1. Selectați filtrul **Flow** și căutați `Resume Upload`. Selectați flow-ul **Resume Upload**, și apoi **Add and configure**.

1. Setați următorii parametri:

    | Parametru       | Valoare |
    |-----------------|---------|
    | **Descriere**   | `Încarcă un CV la cerere. REGULĂ STRICTĂ: Apelați acest instrument doar când este menționat în forma "Resume Upload" și există atașamente.` |
    | **Detalii suplimentare → Când poate fi utilizat acest instrument** | `doar când este menționat de subiecte sau agenți` |
    | **Inputs → Add Input** | `contentBytes` |
    | **Inputs → Add Input** | `name` |

    ![Detalii Resume Upload 1](../../../../../translated_images/2-resume-upload-tool-props-1.e3d8bf3ebdfd5aa8df23aa6ab83eec8a5def709f2c7d27fb700bef16c598da2f.ro.png)

    ![Adăugați inputuri](../../../../../translated_images/2-resume-upload-tool-props-2.16fb1380a34a9fa63b7c9673c7290ff09d491e920a5ff33b439a4b1a5abfccba.ro.png)

1. Apoi setați proprietățile inputurilor astfel:

    | Parametru Input | Proprietate | Detalii |
    |-----------------|-------------|---------|
    | **contentBytes** | Completați folosind | Valoare personalizată |
    |                  | Valoare (...→Formula→Insert) | `First(System.Activity.Attachments).Content` |
    | **name**         | Completați folosind | Valoare personalizată |
    |                  | Valoare (...→Formula→Insert) | `First(System.Activity.Attachments).Name` |
    | **Message**      | Personalizați         | Configurați setări personalizate |
    |                  | Descriere            | `Extrageți un mesaj stil scrisoare de intenție din context. Asigurați-vă că nu solicitați utilizatorului și creați cel puțin o scrisoare de intenție minimă din contextul disponibil. REGULĂ STRICTĂ - mesajul trebuie să fie mai mic de 2000 de caractere.` |
    |                  | Câte repetiții       | Nu repetați |
    |                  | Acțiune dacă nu se găsește entitatea | Setați variabila la valoare |
    |                  | Valoare implicită a entității | Încărcare CV |
    | **UserEmail**    | Completați folosind | Valoare personalizată |
    |                  | Valoare (...→Formula→Insert) | `System.User.Email` |

    ![Setați proprietățile inputurilor](../../../../../translated_images/2-resume-upload-tool-props-3.a18364f22b2c41c3e4f8fee68dddb01ff5190d57410d9fd3fe2fbddb3d74e352.ro.png)

1. Selectați **Save**

### 2.1.6 Definiți instrucțiunile agentului

1. Reveniți la **Application Intake Agent** selectând fila **Agents**, și apoi localizați panoul **Instructions**.

1. În câmpul **Instructions**, lipiți următoarele indicații clare pentru agentul copil:

    ```text
    You are tasked with managing incoming Resumes, Candidate information, and creating Job Applications.  
    Only use tools if the step exactly matches the defined process. Otherwise, indicate you cannot help.  
    
    Process for Resume Upload via Chat  
    1. Upload Resume  
      - Trigger only if /System.Activity.Attachments contains exactly one new resume.  
      - If more than one file, instruct the user to upload one at a time and stop.  
      - Call /Upload Resume once. Never upload more than once for the same message.  
    
    2. Post-Upload  
      - Always output the [ResumeNumber] (R#####).  
    ```

1. Unde instrucțiunile includ o bară oblică (/), selectați textul de după / și selectați numele rezolvat. Faceți acest lucru pentru:

    - `System.Activity.Attachments` (Variabilă)
    - `Upload Resume` (Instrument)

    ![Editați Instrucțiunile](../../../../../translated_images/2-application-agent-instructions.8840890a1fba22c38f04e35b13fa7ed83f72e9605d19a4eb661b51854daabd94.ro.png)

1. Selectați **Save**

### 2.1.7 Testați Application Intake Agent

Acum să verificăm dacă primul membru al orchestrei funcționează corect.

1. **Descărcați** [test Resumes.](https://download-directory.github.io/?url=https://github.com/microsoft/agent-academy/tree/main/operative/sample-data/resumes&filename=operative_sampledata)

1. **Deschideți** panoul de testare selectând **Test**.

1. **Încărcați** două CV-uri în chat-ul de testare și dați mesajul `Procesează aceste CV-uri`

    - Agentul ar trebui să returneze un mesaj similar cu *Doar un singur CV poate fi încărcat odată. Vă rugăm să încărcați un singur CV pentru a continua.*

    ![Testați încărcările multiple](../../../../../translated_images/2-test-multi-uploads.eb8866589463dcadb5570aba720531f0670ebfa6464d57e87415a84d9934a973.ro.png)

1. Încercați să încărcați **doar un CV**, cu mesajul `Procesează acest CV`

    - Agentul ar trebui să dea un mesaj similar cu *CV-ul pentru Avery Example a fost încărcat cu succes. Numărul CV-ului este R10026.*

1. În **Activity map**, ar trebui să vedeți **Application Intake Agent** gestionând încărcarea CV-ului.  
    ![Hartă activitate încărcare CV](../../../../../translated_images/2-upload-activity-map.dd11a9d3e114f4f0a576408116d7ed89c6b144d8b4ac54a228c5247af036ecef.ro.png)

1. Navigați la make.powerapps.com → Asigurați-vă că mediul dvs. este selectat în colțul din dreapta sus al Environment Picker.

1. Selectați **Apps** → Hiring Hub → meniul ellipsis(...) → **Play**  
    ![Deschideți aplicația model-driven](../../../../../translated_images/2-open-model-driven-app.550a2b764d513db4836444dd616dd87909adf54f2a930891276943b1a6e0ec77.ro.png)

    Notă: Dacă butonul de play este gri, înseamnă că nu ați publicat soluția din Misiunea 01. Selectați **Solutions** → **Publish all customizations**.

1. Navigați la **Resumes**, și verificați că fișierul CV este încărcat și scrisoarea de intenție este setată corespunzător.  
    ![CV încărcat în Dataverse](../../../../../translated_images/2-resume-uploade.92a046941cd273a2597d47c593b158d158320fa5384c60907143dbe798a56644.ro.png)

## 🧪Lab 2.2: Adăugarea agentului conectat pentru pregătirea interviului

Acum să creăm agentul conectat pentru pregătirea interviului și să-l adăugăm la Hiring Agent-ul existent.

### 2.2.1 Crearea agentului conectat pentru interviu

1. **Navigați** la Copilot Studio. Asigurați-vă că mediul dvs. este încă selectat în colțul din dreapta sus al Environment Picker.

1. Deschideți **Hiring Agent**

1. Navigați la fila Agent și selectați **+ Add an agent**

1. Selectați **Connect an existing agent** → **Copilot Studio**

1. Selectați **+ New agent**

### 2.2.2 Configurați setările de bază

1. Selectați fila **Configure** și introduceți următoarele proprietăți:

    - **Nume**: `Interview Agent`
    - **Descriere**: `Asistă în procesul de interviu.`

1. Instrucțiuni:

    ```text
    You are the Interview Agent. You help interviewers and hiring managers prepare for interviews. You never contact candidates. 
    Use Knowledge to help with interview preparation. 
    
    The only valid identifiers are:
      - ResumeNumber (ppa_resumenumber)→ format R#####
      - CandidateNumber (ppa_candidatenumber)→ format C#####
      - ApplicationNumber (ppa_applicationnumber)→ format A#####
      - JobRoleNumber (ppa_jobrolenumber)→ format J#####
    
    Examples you handle
      - Give me a summary of ...
      - Help me prepare to interview candidates for the Power Platform Developer role
      - Create interview assistance for the candidates for Power Platform Developer
      - Give targeted questions for Candidate Alex Johnson focusing on the criteria for the Job Application
      
    How to work:
        You are expected to ask clarification questions if required information for queries is not provided
        - If asked for interview help without providing a job role, ask for it
        - If asking for interview questions, ask for the candidate and job role if not provided.
    
    General behavior
    - Do not invent or guess facts
    - Be concise, professional, and evidence-based
    - Map strengths and risks to the highest-weight criteria
    - If data is missing (e.g., no resume), state what is missing and ask for clarification
    - Never address or message a candidate
    ```

1. Comutați **Web Search** la **Disabled**

1. Selectați **Create**  
    ![Creați Agentul de Interviu](../../../../../translated_images/2-create-interview-agent.55051dc9cceec6614c7c0d685df6bebd85dcc4bde63fedab33558db47fd32ebd.ro.png)

### 2.2.3 Configurați accesul la date și publicați

1. În secțiunea **Knowledge**, selectați **+ Add knowledge**  
    ![Adăugați cunoștințe](../../../../../translated_images/2-interview-agent-add-knowledge.8a760ce46dc5253747785127c37f3bfe2ea5c60a5243a4c2ff0a63d0275d1c02.ro.png)
1. Selectați **Dataverse**  
    ![Selectați Dataverse](../../../../../translated_images/2-interview-agent-add-knowledge-select-dataverse.1449c08b33f90f35c806071fb430c5e769a9d54d42b146a137404c63dc697d52.ro.png)
1. În **Search box**, introduceți `ppa_`. Acesta este prefixul pentru tabelele pe care le-ați importat anterior.
1. **Selectați** toate cele 5 tabele (Candidate, Evaluation Criteria, Job Application, Job Role, Resume)
1. Selectați **Add to agent**  
    ![Selectați tabelele Dataverse](../../../../../translated_images/2-interview-agent-add-knowledge-select-tables.1b8e5f6286f4d58555b4f3e5ee49de7ad559f21d1b6806a1253d7f0c84bf7ab8.ro.png)
1. Selectați **Settings**, pe Interview Agent, și setați următoarele setări:

    - **Permiteți altor agenți să se conecteze și să folosească acest agent:** `On`
    - **Folosiți cunoștințe generale**: `Off`
    - **Încărcări de fișiere**: `Off`
    - **Nivel de moderare a conținutului:** `Medium`
1. Selectați **Save**
1. Selectați **Publish**, și așteptați finalizarea publicării.

### 2.2.4 Conectați Agentul de Pregătire pentru Interviu la Hiring Agent

1. Navigați înapoi la **Hiring Agent**

1. Selectați fila **Agents**

1. Folosiți **+Add an agent** → **Copilot Studio**, pentru a adăuga **Interview Agent**. Setați descrierea să fie:
    ```text
    Assists with the interview process and provides information about Resumes, Candidates, Job Roles, and Evaluation Criteria.
    ```

    ![Detalii agent conectat](../../../../../translated_images/2-add-connected-agent.1d8c42eb5dd78891649fef9771473f639eb7015c6bda76ac17e24093c359b6b1.ro.png)
    Observați că opțiunea „Pass conversation history to this agent” este bifată. Acest lucru permite agentului părinte să ofere context complet agentului conectat.

1. Selectați **Add agent**

1. Asigurați-vă că vedeți atât **Application Intake Agent**, cât și **Interview Agent**. Observați cum unul este un agent copil, iar celălalt este un agent conectat.  
    ![Agent copil și agent conectat](../../../../../translated_images/2-child-and-connected.d888e561872260dfa66c657d5b31f99f2a3e492c2ed62284e124c5b81af54e7b.ro.png)

### 2.2.5 Testați colaborarea multi-agent

1. **Deschideți** panoul de testare selectând **Test**.

1. **Încărcați** unul dintre CV-urile de test și introduceți următoarea descriere care îi spune agentului părinte ce poate delega agentului conectat:

    ```text
    Upload this resume, then show me open job roles, each with a description of the evaluation criteria, then use this to match the resume to at least one suitable job role even if not a perfect match.
    ```

    ![Testare cu mai mulți agenți](../../../../../translated_images/2-multi-agent-test.1e7c8e9dc283f220983f74a960f49b194d9e1c013c4369e33354c84411fc991c.ro.png)

1. Observați cum Hiring Agent a delegat încărcarea agentului copil, iar apoi a cerut Interview Agent să ofere un rezumat și o potrivire cu rolul de muncă folosindu-și cunoștințele. 
   Experimentați cu diferite moduri de a pune întrebări despre CV-uri, roluri de muncă și criterii de evaluare.  
   **Exemple:**

    ```text
    Give me a summary of active resumes
    ```

    ```text
    Summarize resume R10044
    ```

    ```text
    Which active resumes are suitable for the Power Platform Developer role?
    ```

## 🎉 Misiune Îndeplinită

Excelentă treabă, Agent! **Operațiunea Simfonie** este acum completă. Ați transformat cu succes Hiring Agent-ul vostru într-o orchestră multi-agent sofisticată cu capabilități specializate.

Iată ce ați realizat în această misiune:

**✅ Stăpânirea arhitecturii multi-agent**  
Acum înțelegeți când să folosiți agenți copil vs agenți conectați și cum să proiectați sisteme scalabile.

**✅ Agent copil pentru Application Intake**  
Ați adăugat un agent copil specializat la Hiring Agent-ul vostru care procesează CV-uri, extrage date despre candidați și stochează informații în Dataverse.

**✅ Agent conectat pentru pregătirea interviului**  
Ați construit un agent conectat reutilizabil pentru pregătirea interviurilor și l-ați conectat cu succes la Hiring Agent-ul vostru.

**✅ Comunicare între agenți**  
Ați văzut cum agentul principal poate coordona cu agenți specializați, poate împărtăși contextul și poate orchestra fluxuri de lucru complexe.

**✅ Fundament pentru autonomie**  
Sistemul vostru de recrutare îmbunătățit este acum pregătit pentru funcționalitățile avansate pe care le vom adăuga în misiunile viitoare: declanșatoare autonome, moderarea conținutului și raționamente profunde.

🚀**Urmează:** În următoarea misiune, veți învăța cum să configurați agentul pentru a procesa autonom CV-uri din e-mailuri!

⏩[Treceți la Misiunea 03: Automatizați agentul cu declanșatoare](../03-automate-triggers/README.md)

## 📚 Resurse Tactice

📖 [Adăugați alți agenți (previzualizare)](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents?WT.mc_id=power-182762-scottdurow)

📖 [Adăugați instrumente agenților personalizați](https://learn.microsoft.com/microsoft-copilot-studio/advanced-plugin-actions?WT.mc_id=power-182762-scottdurow)

📖 [Lucrați cu Dataverse în Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse?WT.mc_id=power-182762-scottdurow)

📖 [Prezentare generală a fluxurilor agenților](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-182762-scottdurow)

📖 [Creați o soluție](https://learn.microsoft.com/power-platform/alm/solution-concepts-alm?WT.mc_id=power-182762-scottdurow)

📖 [Ghid ALM pentru soluții Power Platform](https://learn.microsoft.com/power-platform/alm/overview-alm?WT.mc_id=power-182762-scottdurow)

📺 [Colaborare între agenți în Copilot Studio](https://youtu.be/d-oD3pApHAg?si=rwIHKhJTkjSvhTHw)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.