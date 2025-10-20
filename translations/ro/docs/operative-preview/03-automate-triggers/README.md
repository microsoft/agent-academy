<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T18:25:40+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "ro"
}
-->
# Misiunea 03: Adăugarea declanșatorilor de evenimente pentru a acționa autonom

--8<-- "disclaimer.md"

## 🕵️‍♂️ NUME DE COD: `OPERAȚIUNEA SIGNAL POINT`

> **⏱️ Fereastra de timp a operațiunii:** `~45 minute`

## 🎯 Rezumatul misiunii

Bine ai revenit, Agent. În [Misiunea 02](../02-multi-agent/README.md) - ai învățat cum să construiești un agent copil pentru primirea aplicațiilor și un agent conectat pentru pregătirea interviurilor, extinzând astfel capacitățile principalului tău Agent de Recrutare.

Misiunea ta, dacă alegi să o accepți, este **Operațiunea Signal Point** - aprofundarea conceptului de **declanșatori de evenimente** - ridicând sistemul tău de agenți de la reactiv la **funcționare autonomă**. Vei transforma agenții tăi din așteptarea inputului uman în răspunsuri proactive la evenimente externe și acțiuni inteligente fără supraveghere.

Gândește-te la asta ca la o actualizare de la agenți care _răspund la întrebări_ la agenți care _anticipează nevoile_ și _acționează independent_. Prin declanșatori de evenimente și fluxuri automatizate, Agentul tău de Recrutare va detecta emailurile cu CV-uri primite, va procesa automat atașamentele, va stoca datele în Dataverse și va notifica echipa ta de recrutare HR prin Microsoft Teams - totul în timp ce tu te concentrezi pe sarcini de valoare mai mare.

Bine ai venit în lumea unde automatizarea întâlnește inteligența.

## 🔎 Obiective

În această misiune, vei învăța:

1. Cum declanșatorii de evenimente permit comportamentul autonom al agenților fără interacțiunea utilizatorului
1. Diferențele dintre agenții interactivi și autonomi în Copilot Studio
1. Cum să creezi declanșatori de evenimente care procesează automat atașamentele emailurilor și încarcă fișierele în Dataverse
1. Cum să construiești fluxuri de agenți care postează carduri adaptive în canalele Teams pentru notificări
1. Cum să transmiți date între declanșatori de evenimente și fluxuri de agenți pentru automatizare completă

## 🤔 Ce este un declanșator de eveniment?

Anterior, în [Recruit](../../recruit/10-add-event-triggers/README.md), am învățat despre declanșatorii de evenimente. Să facem un scurt rezumat în cazul în care ai ratat acest subiect.

**Declanșatorii de evenimente** permit unui agent să _acționeze_ pe cont propriu atunci când ceva se întâmplă într-un alt sistem - fără a fi necesar un mesaj de la utilizator. Când evenimentul configurat se declanșează - cum ar fi „element nou în SharePoint,” „email nou,” „task atribuit în Planner” sau chiar o recurență bazată pe timp, un conector trimite un payload de declanșare către agentul tău. Agentul urmează apoi instrucțiunile tale pentru a decide ce acțiuni sau subiecte să apeleze.

### Caracteristici cheie

- **Activare autonomă:**
      - Spre deosebire de declanșatorii de subiecte care pornesc atunci când un utilizator scrie agentului, declanșatorii de evenimente se declanșează din evenimente externe, permițând un comportament proactiv.

- **Bazat pe payload:**
      - Fiecare eveniment livrează un payload (variabile + instrucțiuni opționale) printr-un conector. Agentul folosește instrucțiunile definite de tine și payload-ul pentru a decide ce să facă în continuare.
      - De exemplu, _apelează un subiect_ sau _execută acțiuni definite de instrumente_.

- **Exemple disponibile din start:**
      - Fișier sau element creat în SharePoint/OneDrive
      - Task completat/atribuit în Planner
      - Răspuns trimis în Microsoft Forms
      - Recurență/programare

    Disponibilitatea depinde de politicile de date ale organizației tale configurate în Power Automate.

- **Necesită orchestrare generativă:**
      - Declanșatorii de evenimente sunt disponibili doar atunci când orchestrarea generativă este activată pentru agent.

- **Facturare/utilizare:**
      - Fiecare livrare a unui declanșator este considerată un mesaj în capacitatea Copilot Studio.
      - De exemplu, o recurență de 10 minute trimite un mesaj la fiecare 10 minute.

- **Model de autentificare și configurare:**
      - Adaugi declanșatori în cadrul secțiunii de prezentare a agentului, sub _Triggers_. Autentificarea pentru conectorul de declanșare folosește contul creatorului agentului („autentificarea autorului agentului”).
      - Poți edita parametrii declanșatorului și payload-ul în portalul Power Automate maker.

- **Testare și observabilitate:**
      - Poți testa declanșatorii din panoul de testare al agentului și poți inspecta comportamentul cu harta activităților înainte de publicare.

!!! info "Pe scurt pentru dezvoltatori"

    Gândește-te la declanșatorii de evenimente ca la **semnale asemănătoare webhook-urilor** care trimit un payload structurat către agentul tău, permițându-i să _inițieze_ activități și să lege acțiuni între sisteme - fără a aștepta ca un utilizator să întrebe.

### Declanșatorii de subiecte - cum diferă

Anterior, ai învățat despre declanșatorii de subiecte în [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), totuși s-ar putea să te întrebi cum diferă _declanșatorii de subiecte_ de _declanșatorii de evenimente_ și de ce această distincție este importantă pentru a înțelege ce face un agent autonom.

Declanșatorii de subiecte controlează _momentul în care un subiect rulează_, de obicei ca răspuns la un mesaj al utilizatorului.

- În orchestrarea generativă, declanșatorul implicit este **By agent** - planificatorul alege un subiect al cărui nume/descriere se potrivește cel mai bine cu mesajul utilizatorului.
- În orchestrarea clasică, declanșatorul implicit este **Phrases** - planificatorul alege un subiect atunci când una sau mai multe fraze de declanșare se potrivesc cel mai bine cu mesajul utilizatorului.

Alte tipuri de declanșatori includ `Message received`, `Event received`, `Activity received`, `Conversation update`, `Invoke received`, `On redirect`, `Inactivity` și `Plan complete`.

!!! info "Diferența principală"

    Declanșatorii de subiecte sunt _inițiatori de activitate conversațională_ în cadrul chatului.
    
    Declanșatorii de evenimente sunt _inițiatori de evenimente de sistem_ livrate prin conectori care pot rula agentul fără nicio conversație.

### Ghid rapid pentru declanșatorii de subiecte vs declanșatorii de evenimente

- **Declanșator de subiect:** Utilizatorul (sau activitatea chatului) a spus/a făcut X ➡️ rulează Subiectul T.
- **Declanșator de eveniment:** SharePoint/Planner/Email/Timer s-a declanșat cu payload-ul P ➡️ agentul evaluează instrucțiunile ➡️ apelează Acțiuni/Subiecte corespunzător.

## 🏓 Agent interactiv vs Agent autonom - comparație

Acum că știi diferența dintre declanșatorii de evenimente și declanșatorii de subiecte, să învățăm următoarea diferență dintre un agent interactiv și un agent autonom.

În termenii Copilot Studio, "interactiv" se referă la agenți care interacționează în principal prin **subiecte** într-un chat sau canal. "Autonom" se referă la agenți care utilizează și **declanșatori de evenimente** pentru a rula fără inputul utilizatorului.

Următorul tabel rezumă diferențele și asemănările lor.

| Dimensiune                          | Agent interactiv      | Agent autonom                                                                                                 |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Cum începe                          | Utilizatorul (sau activitatea chatului) declanșează un subiect. Exemplu: By agent, Phrases, Message received. | Declanșatorul de eveniment extern trimite un payload prin conector către agent. Exemplu: SharePoint, Planner, email, programare etc. |
| Utilizare principală                | Întrebări și răspunsuri, fluxuri ghidate, acțiuni la cerere în chat - Teams, web etc. | Operațiuni proactive și automatizare în fundal - reacționează la schimbările de sistem și apoi notifică, arhivează sau orchestrează sarcini. |
| Suprafața declanșatorului           | Declanșatori de subiecte: By agent / Phrases / Message received / Tipuri de activitate / Invoke / Inactivity / Plan complete | Biblioteca de declanșatori de evenimente prin conectori; payload-ul include datele evenimentului + instrucțiuni opționale. |
| Planificator (orchestrare generativă)| Foarte utilizat pentru declanșatorii By agent și Plan complete pentru a selecta/secvenția subiecte. | Necesită pentru declanșatorii de evenimente; agentul folosește instrucțiunile + payload-ul pentru a decide ce acțiuni/subiecte să apeleze. |
| Exemplu tipic                       | Utilizatorul întreabă "Care este politica noastră de rambursare?" → Subiectul rulează, interoghează cunoștințele, răspunde. | Task nou atribuit în Planner → Declanșatorul de eveniment se activează → Agentul postează un mesaj în Teams, actualizează un registru sau apelează un subiect. |
| Calea de configurare                | Creează subiecte, definește tipul de declanșator, autorizează dialog/acțiuni; publică în canale. | Adaugă declanșator de eveniment (Overview → Triggers), autentifică conectorul cu acreditările autorului agentului, configurează payload-ul/instrucțiunile; testează prin panoul de testare; publică. |
| Autentificare și guvernanță         | Rulează sub contextul canalului/autentificării; declanșatorii de subiecte răspund la activitățile chatului în canalele permise. | Disponibilitatea declanșatorului depinde de politicile de date Power Automate; conectorii rulează sub contul creatorului agentului. |
| Observabilitate                     | Testează subiectele în Copilot Studio, inspectează transcripturile conversațiilor/activităților. | Folosește Test trigger și harta activităților pentru a valida execuția înainte de publicare, monitorizează activitatea după publicare. |
| Impact asupra capacității           | Fiecare mesaj al utilizatorului/răspuns al agentului este un mesaj care consumă capacitate. | Fiecare livrare de eveniment este, de asemenea, un mesaj, plus orice acțiuni ulterioare. Exemplu: o recurență de 10 minute = 6 mesaje/oră |

### Când să folosești ce?

- Alege **declanșatori de subiecte (interactivi)** atunci când utilizatorii inițiază conversația cu agentul - FAQ, primire ghidată sau sarcini de tip comandă în chat. Declanșatorul By agent al planificatorului reduce curarea manuală a frazelor.
- Adaugă **declanșatori de evenimente (autonomi)** atunci când agentul ar trebui să înceapă conversația sau să acționeze singur - la actualizări în SharePoint/Dataverse, emailuri primite sau conform unui program. Acest lucru te mută de la operațiuni reactive la operațiuni proactive.

## Sfaturi și atenționări pentru dezvoltatori

1. **Activează orchestrarea generativă** pentru orice agent pe care dorești să-l faci autonom. Declanșatorii de evenimente nu vor apărea altfel.

1. **Modelează payload-ul devreme.** Decide ce câmpuri minime are nevoie agentul tău de la declanșator, cum ar fi `itemId`, `assignedTo`, `dueDate` și adaugă instrucțiuni concise care să indice agentului ce acțiune/subiect să apeleze pe baza valorilor payload-ului.

1. **Domeniul de autentificare contează.** Declanșatorii se autentifică folosind contul creatorului agentului. Asigură-te că acel cont are permisiunile corecte ale conectorului și respectă politicile de date Power Automate.

1. **Controlează costurile și zgomotul.** Recurențele frecvente sau sursele foarte active pot consuma rapid capacitatea de mesaje - limitează acolo unde este posibil sau adaugă condiții în declanșator pentru a filtra evenimentele.

1. **Testează înainte de publicare.** Folosește **Test trigger** și harta activităților pentru a urmări planul și acțiunile apelate - ajustează instrucțiunile/payload-ul până când comportamentul este stabil.

## 🧪 Laboratorul 03 - Automatizarea emailurilor de aplicație ale candidaților

Urmează să adăugăm un declanșator de eveniment la **Agentul de Recrutare** și să construim un flux de agent în cadrul **Agentului de Primire a Aplicațiilor** pentru a gestiona procesarea ulterioară pentru autonomie.

### ✨ Scenariu de utilizare

!!! info ""

    **Ca** Recrutor HR

    **Doresc** să fiu notificat atunci când un email cu un CV ajunge în Inbox-ul meu și este încărcat automat în Dataverse

    **Pentru a putea** fi la curent cu CV-urile trimise prin email pentru aplicații încărcate automat în Dataverse

Vom realiza acest lucru folosind două tehnici:

1. Un declanșator de eveniment pentru momentul în care emailul ajunge,
    1. Verifică dacă `contentType` al fișierului este egal cu `PDF` ca tip de format.
    1. Extrage fișierul și încarcă-l în Dataverse folosind acțiuni prin conectorul Dataverse.
    1. Apoi trimite un prompt agentului pentru procesare ulterioară, transmițând parametrii de intrare din acțiunile Dataverse.

1. Un flux de agent va fi adăugat la copilul **Agent de Primire a Aplicațiilor**, care este invocat de promptul din declanșatorul de eveniment.
    1. Folosește parametrii de intrare transmiși din promptul declanșatorului de eveniment într-un card adaptiv postat într-un canal din Microsoft Teams pentru a notifica echipa de recrutare HR. Cardul adaptiv va avea un link către rândul din Dataverse care va fi vizualizat în **Agentul de Recrutare**.

Să începem!

### ✨ Cerințe preliminare pentru finalizarea misiunii

Va trebui să **fie**:

- **Să fi finalizat Misiunea 01 și Misiunea 02** și să ai Agentul de Recrutare pregătit, **SAU**
- **Să imporți soluția de început pentru Misiunea 03** dacă începi de la zero sau ai nevoie să recuperezi. [Descarcă soluția de început pentru Misiunea 03](https://aka.ms/agent-academy)

!!! note "Importul soluției și datele de probă"
    Dacă folosești soluția de început, consultă [Misiunea 01](../01-get-started/README.md) pentru instrucțiuni detaliate despre cum să imporți soluții și date de probă în mediul tău.

De asemenea, vei avea nevoie de acces la **Microsoft Teams** pentru a finaliza al doilea exercițiu de laborator privind postarea unui card adaptiv în Microsoft Teams.

### Laboratorul 3.1 - Automatizarea încărcării CV-urilor în Dataverse primite prin email

1. În Agentul de Recrutare, derulează în jos în **fila Overview** și selectează **+ Add trigger**.

       ![Adaugă declanșator la agent](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.ro.png)

1. Va apărea o listă de declanșatori. Selectează **When a new email arrives (V3)** și apasă **Next**.

       ![Selectează declanșatorul When a new email arrives (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.ro.png)

1. Vom vedea acum **Numele declanșatorului** și referințele de conexiune **Sign in** pentru aplicațiile listate.

       Redenumește numele declanșatorului astfel:
    
       ```text
       When a new email arrives from an applicant
       ```

       Asigură-te că vezi o bifă verde lângă fiecare dintre referințele de conexiune ale aplicațiilor listate. Dacă
Acum vom actualiza declanșatorul evenimentului pentru a adăuga mai multe capabilități de automatizare. Selectați **ellipsis (...)** de lângă declanșator și alegeți **Edit in Power Automate**.

![Selectați Edit in Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.ro.png)

1. Declanșatorul se va încărca apoi ca un flux în portalul Power Automate maker. Ceea ce vedeți este designerul de fluxuri din portalul Power Automate maker. Aici putem adăuga logică și acțiuni suplimentare pentru mai multă automatizare. Declanșatorul va apărea în partea de sus, urmat de **Trimite un prompt către copilotul specificat pentru procesare** ca ultima acțiune din flux.

![Designerul de fluxuri în portalul Power Automate maker](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.ro.png)

1. În mod implicit, declanșatorul **Când sosește un email nou** din Power Automate poate procesa mai multe emailuri împreună dacă sosesc mai multe deodată, rulând fluxul o singură dată pentru lot.

Pentru a vă asigura că fluxul rulează separat pentru fiecare email, activați setarea **Split On** în setările declanșatorului și selectați `@triggerOutputs()?['body/value']` în câmpul array din dropdown.

Cu **Split On** activat și câmpul array setat la `@triggerOutputs()?['body/value']`, fluxul va rula individual pentru fiecare mesaj, chiar dacă sosesc mai multe simultan.

![Activați setările Split On în declanșator](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.ro.png)

1. Următorul pas este să adăugăm logică pentru a verifica tipul fișierului atașat; dorim să încărcăm doar atașamente de tip .PDF și nu imagini (acestea ar putea proveni din semnături de email). Selectați pictograma **+** de sub declanșator și alegeți **Control** din secțiunea **Built in tools**.

![Selectați Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.ro.png)

1. Selectați acțiunea **Condition**.

![Selectați acțiunea Condition](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.ro.png)

1. Acum configurăm condiția pentru a verifica dacă tipul atașamentului este .PDF. În câmpul **Choose a value**, selectați **pictograma fulger** sau **pictograma fx** din dreapta.

1. În câmpul **Search**, introduceți următorul text,

```text
content type
```

1. Apoi selectați parametrul **Attachments Content-Type** din declanșator.

1. Următorul pas este să selectați **Add** pentru a adăuga intrarea de conținut dinamic în parametrul **Id** al acțiunii.

![Configurați acțiunea Condition](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.ro.png)

1. Să facem o pauză aici pentru un moment, probabil ați observat că acțiunea **For each** a apărut automat.

Selectați acțiunea **For each**. Această acțiune reprezintă bucla prin fiecare atașament din email, deoarece parametrul **Attachments Content-Type** din declanșator este legat de fiecare atașament.

În culise, este un array și de aceea acțiunea **For each** a fost adăugată automat când am selectat parametrul **Attachments Content-Type** în acțiunea **Condition**.

Pentru a afla mai multe despre acest lucru, extindeți blocul de învățare suplimentar de mai jos.

??? info "Învățare suplimentară: Acțiunea For each apare automat"

🤔 **De ce apare automat "Apply to each" sau "For each"?**

Când selectați un parametru (conținut dinamic) care reprezintă o listă sau un array de elemente - de exemplu, o listă de atașamente, emailuri sau rânduri - Power Automate recunoaște că s-ar putea să doriți să procesați fiecare element individual.

Pentru a vă ajuta să faceți acest lucru, Power Automate adaugă automat o buclă **“Apply to each”** (sau **For each**) în jurul acțiunii dvs. Acest lucru asigură că acțiunea dvs. va rula o dată pentru fiecare element din listă, în loc să încerce să proceseze întreaga listă deodată (ceea ce ar putea cauza erori).

🦋 **Exemplu**

- Dacă selectați "Attachments" dintr-o acțiune anterioară (care este un array) și încercați să o utilizați într-o acțiune care așteaptă un singur fișier, Power Automate înfășoară acțiunea dvs. într-o buclă **"Apply to each"** (sau **For each**). 
- În acest fel, acțiunea dvs. va rula pentru **fiecare atașament** - unul câte unul.

💡 **Puncte cheie**

- **Automat:** Bucla apare automat pentru a vă ajuta să procesați fiecare element dintr-o colecție.
- **Previne erorile:** Fără buclă, acțiunea dvs. ar putea eșua deoarece nu poate gestiona mai multe elemente simultan.
- **Indiciu vizual:** Este o modalitate vizuală de a arăta că fluxul dvs. va repeta acțiunea pentru fiecare element din listă.

![Acțiunea For Each explicată](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.ro.png)

1. Următorul pas este să introduceți în celălalt câmp **Choose a value** următorul text,

```text
application/pdf
```

Acest lucru va asigura că pentru fiecare atașament, se va verifica dacă formatul extensiei fișierului este .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.ro.png)

1. Acum vom configura calea **True** pentru a extrage fișierul din email și a-l încărca în tabelul **Resume** din Dataverse.

Adăugați o nouă acțiune mai jos în calea **True** și căutați `html to text`. Selectați acțiunea **Html to text**.

Pentru a afla mai multe despre acțiunea **Html to text**, extindeți blocul de învățare suplimentar de mai jos.

??? info "Învățare suplimentară: Acțiunea Html to text"

🤔 **Ce este acțiunea "HTML to text"?**

Acțiunea **HTML to text** din Power Automate este utilizată pentru a converti conținutul formatat HTML în text simplu. Acest lucru este deosebit de util atunci când primiți date (cum ar fi emailuri, conținut web sau răspunsuri API) care conțin etichete HTML și doriți să extrageți doar textul lizibil fără formatare sau cod.

⚙️ **Cum funcționează?**

- **Input:** Furnizați un șir de conținut HTML (de exemplu, corpul unui email).
- **Output:** Acțiunea elimină toate etichetele HTML și returnează doar textul simplu.

👍🏻 **Când ar trebui să o utilizați?**

- Când doriți să extrageți textul lizibil din emailuri, pagini web sau răspunsuri API care conțin HTML.
- Înainte de a trimite conținut către sisteme care nu acceptă formatarea HTML (cum ar fi SMS, mesaje Teams sau baze de date).
- Pentru a curăța datele pentru procesare sau analiză ulterioară.

🔭 **Unde o găsiți?**

- În Power Automate pentru fluxurile Agent, căutați acțiunea numită `HTML to text`. Este sub conectorul **Data Operations**.

💡 **Puncte cheie**

- Elimină toate etichetele HTML și lasă doar textul.
- Nu interpretează sau execută scripturi/stiluri - doar elimină etichetele.
- Util pentru curățarea datelor și pregătirea conținutului pentru ieșiri în format text simplu.

![Adăugați acțiunea HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.ro.png)

1. Următorul pas este să creați o nouă referință de conexiune pentru acțiunea **Html to text** selectând **Add new**.

![Adăugați o nouă referință de conexiune](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.ro.png)

1. Acțiunea poate fi acum configurată. Adăugați parametrul **Body** din declanșator. În câmpul **Content**, selectați **pictograma fulger** sau **pictograma fx** din dreapta.

![Adăugați conținut dinamic](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.ro.png)

1. În fila **Dynamic content**, căutați `body` și selectați parametrul **Body**, apoi selectați **Add**.

![Adăugați parametrul Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.ro.png)

1. Am terminat configurarea acestei acțiuni, așa că să ieșim din acțiune selectând cele două paranteze unghiulare («) care indică spre stânga pentru a restrânge panoul.

![Restrângeți panoul acțiunii](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.ro.png)

1. Vom adăuga o nouă acțiune selectând **+ icon** sub acțiunea **Html to text**, care va încărca panoul pentru a adăuga acțiuni. Selectați conectorul **Microsoft Dataverse**.

![Adăugați o nouă acțiune](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.ro.png)

1. Selectați acțiunea **Add a new row**.

![Selectați acțiunea Add a new row](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.ro.png)

1. Redenumiți acțiunea selectând **Ellipsis (...)**, copiați și lipiți următorul text ca nume,

```text
Add a new Resume row
```

Pentru parametrul **Table name**, căutați `res` și selectați tabelul **Resumes**.

![Redenumiți acțiunea și configurați parametrul Table name](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.ro.png)

1. Selectați câmpul **Resume Title** și alegeți **pictograma fulger** sau **pictograma fx** din dreapta.

![Configurați parametrul Resume Title](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.ro.png)

1. În fila **Function**, introduceți următoarea expresie care utilizează funcția `item()`.

```text
item()?['name']
```

Pentru a afla mai multe despre funcția `item()`, extindeți blocul de învățare suplimentar de mai jos.

??? info "Învățare suplimentară: funcția `item()`"

🤔 **Ce este funcția `item()`?**

- Când utilizați o acțiune **Apply to each**, Power Automate trece prin fiecare element dintr-o colecție (array).
- Este cel mai des utilizată în acțiuni precum **Apply to each** (sau **For each**), **Select** sau **Filter array**.

⚙️ **Cum funcționează?**

- `item()` este o funcție care returnează elementul curent procesat într-o buclă sau operație pe array.
- În interiorul acelei bucle, `item()` se referă la _elementul curent_ procesat.

📌 **Unde o utilizați?**

- **Apply to each:** pentru a accesa proprietățile elementului curent.
- **Select:** pentru a transforma fiecare element dintr-un array.
- **Filter array:** pentru a face referire la elementul curent evaluat.

🦋 **Exemplu**

- Expresie într-o buclă:
       -  `item()?['Email']`
- Aceasta obține proprietatea `Email` a elementului curent.

💡 **Puncte cheie**

- `item()` este _sensibil la context_: se referă întotdeauna la elementul curent din bucla sau operația pe array în care vă aflați.
- Dacă cuibăriți bucle, puteți utiliza `items('LoopName')` pentru a face referire la elementele dintr-o buclă specifică.

Selectați **Add** pentru a adăuga expresia la parametrul **Resume Title**.

![Adăugați expresia pentru parametrul Resume Title](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.ro.png)

1. Mai trebuie să configurăm câteva parametri, selectați **Show all** și în câmpul **Cover Letter**, alegeți **pictograma fulger** sau **pictograma fx** din dreapta.

În fila **Function**, introduceți următoarea expresie care utilizează aceeași expresie din [misiunea anterioară](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Această expresie verifică dacă _textul_ din acțiunea **Html to text** este mai lung de 2000 de caractere și, dacă da, returnează doar primele 2000 de caractere; altfel, returnează textul complet.

![Adăugați expresia pentru parametrul Cover Letter](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.ro.png)

1. Expresia va fi acum adăugată în câmpul **Cover Letter**.

![Expresia adăugată la parametrul Cover Letter](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.ro.png)

1. Pentru câmpul **Source Email Address**, căutați `from` și selectați parametrul **From** din declanșator, deoarece acesta conține valoarea adresei de email.

![Parametrul Source Email Address](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.ro.png)

1. Pentru câmpul **Upload Date**, selectați **pictograma fulger** sau **pictograma fx** din dreapta. În fila **Function**, introduceți următoarea expresie care utilizează funcția `utcNow()`.

```text
utcNow()
```

Pentru a afla mai multe despre funcția `utcNow`, extindeți blocul de învățare suplimentar de mai jos.

??? info "Învățare suplimentară: funcția `utcNow`"

🤔 **Ce este funcția `utcNow()`?**

- Funcția utcnow() din Power Automate returnează data și ora curentă în Timpul Universal Coordonat (UTC) în format ISO 8601, cum ar fi: `2025-09-23T04:32:14Z`

🦋 **Exemplu**

- Expresie:
       -  `concat('Raport generat la ', utcnow())`
- Rezultatul este:
       - Raport generat la `2025-09-23T04:32:14Z`

💡 **Puncte cheie**
- **Nu sunt necesari argumente (parametri de intrare):** oferă întotdeauna timestamp-ul UTC curent.
   - **Cazuri de utilizare**
       - Adăugarea timestamp-urilor în jurnale sau nume de fișiere
       - Compararea timpului curent cu alte date
       - Programarea sau condiții bazate pe timp

![Parametru Data Încărcării](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.ro.png)

1. Am finalizat configurarea acțiunii **Adaugă un rând nou pentru CV**, așa că să ieșim din panou prin colapsarea acestuia.

![Ieșire din panoul de acțiuni](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.ro.png)

1. Vom adăuga o nouă acțiune selectând **+ icon** sub acțiunea **Adaugă un rând nou pentru CV**, ceea ce va încărca panoul pentru a adăuga acțiuni. Selectați din nou conectorul **Microsoft Dataverse**.

![Adaugă acțiunea Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.ro.png)

1. Selectați acțiunea **Încarcă un fișier sau o imagine**.

![Adaugă acțiunea Încarcă un fișier sau o imagine](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.ro.png)

1. Redenumiți acțiunea selectând **Ellipsis (...)**, copiați și lipiți următorul text ca nume,

```text
Upload Resume File
```

![Redenumește acțiunea](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.ro.png)

1. Selectați câmpul **Nume conținut** și apoi selectați **icon fulger** sau **icon fx** din dreapta.

În fila **Funcție**, introduceți următoarea expresie care utilizează funcția `item ()`. Aceasta obține proprietatea `name` a elementului curent (fișierul atașat).

```text
item()?['name']
```

![Configurează parametrul Nume conținut](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.ro.png)

1. Pentru parametrul **Nume tabel**, căutați `res` și selectați tabelul **Resumes**.

![Configurează parametrul Nume tabel](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.ro.png)

1. Selectați câmpul **ID rând** și apoi selectați **icon fulger** sau **icon fx** din dreapta.

Căutați `ID` și selectați parametrul **Resume** din acțiunea _Adaugă un rând nou_ Dataverse, deoarece acesta conține valoarea ID-ului rândului în care se va încărca fișierul PDF.

Selectați **Adaugă**.

![Selectează parametrul ID rând](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.ro.png)

1. Selectați câmpul **Nume coloană** și selectați opțiunea **Resume PDF**.

![Configurează parametrul Nume coloană](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.ro.png)

1. Selectați câmpul **Conținut** și selectați **icon fulger** sau **icon fx** din dreapta.

În fila **Funcție**, introduceți următoarea expresie care utilizează funcția `item ()`. Aceasta obține proprietatea `contentBytes` a elementului curent (fișierul atașat). `contentBytes` se referă la datele binare brute ale unui fișier sau atașament, codificate ca un șir Base64.

```text
item()?['contentBytes']
```

1. Am finalizat configurarea acestei acțiuni, așa că să ieșim din acțiune selectând cele două paranteze unghiulare («) care indică spre stânga pentru a colapsa panoul.

![Colapsează panoul de acțiuni](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.ro.png)

1. Următorul pas este să selectăm **Trimite un prompt către copilotul specificat pentru procesare**, apoi să tragem și să plasăm această acțiune sub acțiunea **Upload Resume File** în calea _True_ a condiției.

![Trage și plasează acțiunea în calea True](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.ro.png)

1. Selectați **Trimite un prompt către copilotul specificat pentru procesare** pentru a-l configura.

![Selectează acțiunea](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.ro.png)

1. În câmpul **Corp/Mesaj**, selectați tot conținutul câmpului și ștergeți-l.

![Șterge parametrul Corp](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.ro.png)

1. Copiați și lipiți următorul text în câmpul **Corp/Mesaj** și evidențiați `RESUME ID PLACEHOLDER`.

```text
Trimite [ResumeId (text)] = "RESUME ID PLACEHOLDER" și [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" și [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" către instrumentul "Notify Teams Applicant channel" în agentul copil "Application Intake Agent"
```

![Înlocuiește textul Resume ID Placeholder](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.ro.png)

1. Selectați **icon fulger** sau **icon fx** din dreapta.

Căutați `resume` și selectați parametrul **Resume** din acțiunea _Adaugă un rând nou Dataverse_, deoarece acesta conține valoarea `ID` a rândului Resume creat.

Selectați **Adaugă**.

![Selectează parametrul Resume](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.ro.png)

1. Evidențiați `RESUME TITLE PLACEHOLDER`. Selectați **icon fulger** sau **icon fx** din dreapta.

Căutați `title` și selectați parametrul **Resume Title** din acțiunea _Adaugă un rând nou Dataverse_, deoarece acesta conține valoarea `resume title` a rândului Resume creat.

Selectați **Adaugă**.

![Selectează parametrul Resume Title](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.ro.png)

1. Evidențiați `RESUME NUMBER PLACEHOLDER`. Selectați **icon fulger** sau **icon fx** din dreapta.

Căutați `resume number` și selectați parametrul **Resume Number** din acțiunea _Adaugă un rând nou Dataverse_, deoarece acesta conține valoarea `Resume Number` a rândului Resume creat.

Selectați **Adaugă**.

![Selectează parametrul Resume Number](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.ro.png)

1. Am finalizat configurarea acestei acțiuni și fluxul agentului nostru 🙌🏻 Faceți o treabă excelentă! Acum să salvăm fluxul de declanșare a evenimentului selectând **Salvează schița**.

![Salvează schița](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.ro.png)

1. Acum trebuie să edităm detaliile fluxului agentului, selectați **Înapoi**.

![Selectează Înapoi](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.ro.png)

1. Selectați **Editați** în secțiunea **Detalii** și actualizați **Planul** la opțiunea **Copilot Studio**.

Selectați **Salvează**.

![Schimbă planul Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.ro.png)

1. Va apărea o fereastră modală care vă va cere să confirmați trecerea la planul Copilot Studio. Selectați **Confirmă**.

![Confirmă schimbarea planului Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.ro.png)

1. Planul este acum actualizat la **Copilot Studio**. Selectați **Editați**, deoarece trebuie să publicăm fluxul de declanșare a evenimentului pentru agentul nostru.

![Editați fluxul](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.ro.png)

1. Selectați **Publică**.

![Publică](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.ro.png)

Ura! Fluxul de declanșare a evenimentului este acum publicat 😃

![Publicat](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.ro.png)

Să continuăm cu crearea unui nou flux de agent care va fi invocat de agentul copil **Intake Application Agent**.

### Laboratorul 3.2 - Notifică un canal Teams folosind un card adaptiv

Acum vom crea un nou flux de agent pentru agentul copil **Intake Application Agent** care utilizează valorile transmise de declanșatorul de eveniment pentru a posta un card adaptiv într-un canal Teams. Acest card adaptiv va alerta echipa de recrutare HR despre PDF-ul care a fost încărcat automat, astfel încât să îl poată revizui.

Să începem!

1. În **Hiring Agent**, selectați fila **Agenți** și selectați **Application Intake Agent**.

![Selectează Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.ro.png)

1. Derulați în jos la **Instrumente** și selectați **+ Adaugă**.

![Adaugă instrument](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.ro.png)

1. Va apărea fereastra modală **Adaugă instrument**. Selectați **+ Instrument nou**.

![Selectează Instrument nou](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.ro.png)

1. Selectați **Flux agent**.

![Selectează Flux agent](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.ro.png)

1. Designerul de flux agent se va încărca. În declanșatorul **Când un agent apelează fluxul**, selectați **+ Adaugă o intrare**.

![Selectează adaugă o intrare](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.ro.png)

1. Selectați **Text** ca tip de intrare utilizator.

![Selectează Text](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.ro.png)

1. În câmpul de text pentru intrare, copiați și lipiți următorul text pentru numele parametrului de intrare.

```text
ResumeId
```

![Intrare ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.ro.png)

1. Repetați aceiași pași pentru a adăuga o a doua intrare text. Copiați și lipiți următorul text pentru numele parametrului de intrare.

```text
ResumeTitle
```

![Intrare ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.ro.png)

1. Repetați aceiași pași pentru a adăuga o a treia intrare text. Copiați și lipiți următorul text pentru numele parametrului de intrare.

```text
ResumeNumber
```
![Intrare ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.ro.png)

1. Vă amintiți cum în [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) am adăugat un card adaptiv într-un subiect pentru agentul nostru? De data aceasta, vom adăuga un card adaptiv într-un flux de agent. Acum vom adăuga o altă acțiune în fluxul nostru de agent care va posta un card adaptiv într-un canal Teams.

Selectați **+ icon** sub declanșator.

![Adaugă acțiune nouă](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.ro.png)

1. Selectați acțiunea **Postează card într-un chat sau canal**.

![Selectează acțiunea Postează card într-un chat sau canal](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.ro.png)

1. Este necesară crearea unei referințe de conexiune la Microsoft Teams cu contul dvs. conectat. Selectați **Conectare**.

![Selectează conectare](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.ro.png)

1. Selectați contul dvs. de utilizator și apoi selectați **Permite accesul**.

![Selectează Permite accesul](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.ro.png)

1. Pentru următorii parametri de intrare,

| Parametru | Cum să setați | Detalii |
|----------|------------|---------|
| **Postează ca** | Dropdown | Selectați opțiunea `Flow bot` |
| **Postează în** | Dropdown | Selectați opțiunea `Canal` |
| **Echipă** | Dropdown | Selectați o echipă disponibilă în mediul dvs. la care aveți acces pentru a finaliza acest exercițiu de laborator |
| **Canal** | Dropdown | Selectați un canal disponibil în mediul dvs. la care aveți acces pentru a finaliza acest exercițiu de laborator |

![Configurează parametrii de intrare](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.ro.png)

1. Următorul pas este să configurăm câmpul **Card adaptiv**. Selectați câmpul **Card adaptiv**.

![Selectează câmpul Card adaptiv](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.ro.png)

1. Deschideți [Fișierul JSON actualizat pentru tabelul Resume](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), copiați întregul conținut și lipiți-l în câmpul Card adaptiv.

![Copiați și lipiți JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.ro.png)

1. Similar cu ceea ce am făcut în [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), vom înlocui valorile existente din payload-ul JSON cu valori reale sau conținut dinamic.

Mai întâi, să actualizăm URL-ul pentru proprietatea `url` din cadrul proprietății `selectAction`. Acest URL va fi înlocuit cu URL-ul vizualizării sistemului Resumes din aplicația model-driven **Hiring Hub**. Acest lucru va permite recrutorului să selecteze acțiunea și să fie direcționat către vizualizarea sistemului Resumes din aplicația model-driven.

Evidențiați valoarea URL curentă și ștergeți-o.

![Selectează valoarea URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.ro.png)

1. În aplicația model-driven **Hiring Hub**, navigați la vizualizarea sistemului **Resumes** folosind meniul din partea stângă și copiați URL-ul. Apoi navigați înapoi la fluxul agentului și lipiți URL-ul copiat în proprietatea **url** din cadrul proprietății `selectAction`.

![Copiați URL-ul vizualizării sistemului Resumes](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.ro.png)
1. Ar trebui să vedeți următoarele, unde detaliile mediului aplicației modelate **Hiring Hub** sunt evidențiate în galben.

     | Parametru | Valoare | Explicație |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL-ul organizației mediului Dataverse/Dynamics 365 |
     | **appid** | GUID | Pentru a deschide o aplicație modelată specifică, se utilizează parametrul de interogare fie appid, fie appname. În acest caz, se folosește appid |
     | **viewid** | GUID | Parametrul de interogare care reprezintă id-ul vizualizării |

       ![Lipire URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.ro.png)

1. Următorul pas este să adăugăm valori de conținut dinamic pentru mai multe proprietăți. Să începem cu textul care va afișa referința Număr CV pentru rândul creat automat de declanșatorul evenimentului.

      Selectați pictograma **panel** pentru a încărca panoul de acțiuni.

       ![Selectați pictograma panel](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.ro.png)

1. Derulați în jos până la linia unde vedeți proprietatea `text` pentru `RESUME NUMBER PLACEHOLDER`. Evidențiați valoarea placeholder și ștergeți-o.

       ![Ștergeți placeholder](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.ro.png)

1. Faceți clic între ghilimelele duble și selectați pictograma **fulger** sau pictograma **fx** din dreapta.

      În fila **Dynamic Content**, selectați parametrul **ResumeNumber** și apăsați **Add**.

       ![Adăugați parametrul ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.ro.png)

1. Parametrul **ResumeNumber** va fi acum adăugat ca conținut dinamic la proprietatea `text`.

       ![Conținut dinamic ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.ro.png)

1. Vom repeta aceiași pași pentru `RESUME NAME PLACEHOLDER`. Derulați în jos până la linia unde vedeți proprietatea `text` pentru `RESUME NAME PLACEHOLDER`. Evidențiați valoarea placeholder și ștergeți-o.

       ![Placeholder Nume CV](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.ro.png)

1. Faceți clic între ghilimelele duble și selectați pictograma **fulger** sau pictograma **fx** din dreapta.

      În fila **Dynamic Content**, selectați parametrul **ResumeTitle** și apăsați **Add**.

       ![Adăugați parametrul ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.ro.png)

1. Parametrul **ResumeTitle** va fi acum adăugat ca conținut dinamic la proprietatea `text`.

       ![Conținut dinamic ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.ro.png)

1. Vom repeta aceiași pași pentru valoarea **Due Date**, care reprezintă data până la care un recrutor ar trebui să revizuiască CV-ul. Derulați în jos până la linia unde vedeți proprietatea `text` pentru `May 21, 2023`.

       ![Selectați Permite accesul](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.ro.png)

1. Ștergeți această valoare placeholder de dată și faceți clic între ghilimelele duble.

       ![Ștergeți](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.ro.png)

1. Selectați pictograma **fulger** sau pictograma **fx** din dreapta și, în fila **Function**, introduceți următoarea expresie și apăsați **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Această expresie utilizează două funcții.

     | Funcție | Explicație |
     |----------|------------|
     | **addDays** | Adaugă un număr specificat de zile la o dată dată și returnează data rezultată în format string |
     | **utcNow** | Returnează data și ora curentă în formatul Timp Universal Coordonat (UTC) ca string. |

      Pentru valoarea utcNow, formatăm data pentru a fi lună și zi, urmată de an.

       ![Expresie Data Limită](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.ro.png)

      Expresia va fi acum adăugată la proprietatea `text`.

       ![Expresie Data Limită](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.ro.png)

1. În final, vom actualiza URL-ul pentru proprietatea `url` din cadrul proprietății `actions` array aflată la sfârșitul payload-ului JSON. Acest URL placeholder curent va fi înlocuit cu URL-ul rândului CV din aplicația modelată **Hiring Hub**. Acest lucru va permite recrutorului să selecteze acțiunea `Action.OpenURL` a cardului adaptiv și să fie direcționat către CV-ul din aplicația modelată.

       ![Ștergeți placeholder URL Vizualizare CV](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.ro.png)

1. În aplicația modelată **Hiring Hub**, deschideți un rând în vizualizarea sistemului **Resumes** folosind meniul din partea stângă. Rândul CV-ului se va încărca ca un formular în aplicația modelată.

      Copiați URL-ul rândului CV.

    ??? info "Cum să navigați înapoi la aplicația modelată **Hiring Hub** în cazul în care ați ieșit/închis-o"

        1. Accesați [https://make.powerapps.com](https://make.powerapps.com) și asigurați-vă că sunteți în mediul de dezvoltare pe care îl utilizați pentru aceste exerciții de laborator, altfel comutați la acesta.
        
        ![Accesați make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.ro.png)

        1. Selectați **Apps** în panoul meniului din partea stângă și pentru aplicația modelată **Hiring Hub**, selectați pictograma **Play** pentru a o încărca în browser.
        
        ![Selectați aplicația modelată Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.ro.png)

       ![Copiați URL-ul rândului CV](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.ro.png)

1. Apoi navigați înapoi la fluxul agentului, evidențiați valoarea curentă a URL-ului placeholder și ștergeți-o.

       ![Ștergeți placeholder URL rând CV](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.ro.png)

1. Apoi lipiți URL-ul copiat în proprietatea **url** din cadrul proprietății `url`.

       ![Lipiți URL-ul copiat al rândului CV](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.ro.png)

1. Ar trebui să vedeți următoarele. Ștergeți valoarea id-ului `GUID` de la sfârșit. Vom înlocui acest conținut dinamic - parametrul **ResumeId**.

       ![Ștergeți placeholder URL Vizualizare CV](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.ro.png)

1. Selectați pictograma **fulger** sau pictograma **fx** din dreapta.

      În fila **Dynamic Content**, selectați parametrul **ResumeId** și apăsați **Add**.

       ![Parametrul ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.ro.png)

1. **ResumeId** va fi adăugat ca conținut dinamic. Următoarele detalii ale mediului aplicației modelate **Hiring Hub** sunt evidențiate în galben.

     | Parametru | Valoare | Explicație |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL-ul organizației mediului Dataverse/Dynamics 365 |
     | **appid** | GUID | Pentru a deschide o aplicație modelată specifică, se utilizează parametrul de interogare fie appid, fie appname. În acest caz, se folosește appid |
     | **id** | GUID | Parametrul de interogare care reprezintă id-ul rândului CV |

       ![Conținut dinamic ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.ro.png)

1. Am finalizat configurarea acțiunii **Post card in a chat or channel** 👏🏻 Ieșiți din panoul de configurare a acțiunii selectând pictograma **x**.

       ![Închideți panoul](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.ro.png)

1. În final, vom configura ultima acțiune, **Respond to the agent**, trimițând un text înapoi agentului pentru a încheia procesarea.

      În acțiunea **Respond to the agent**, selectați **+Add an output**.

       ![Selectați Adăugați un output](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.ro.png)

1. Selectați **Text** ca tip de output.

       ![Selectați text ca tip de output](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.ro.png)

1. Introduceți următorul text ca nume al output-ului.

       ![Output Finalizare Conversație](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.ro.png)

1. Introduceți următorul text ca valoare pentru output.

       ```text
       Finished
       ```

       ![Valoare Output Finalizare Conversație](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.ro.png)

1. Am finalizat configurarea fluxului agentului. Selectați **Save draft** pentru a salva fluxul agentului. Va apărea un mesaj de confirmare odată ce este salvat.

       ![Salvați schița](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.ro.png)

1. Înainte de a publica fluxul agentului, trebuie să actualizăm detaliile fluxului agentului. Selectați fila **Overview** și apăsați **Edit**.

      În câmpul nume flux, introduceți următorul text.

       ```text
       Notify Teams Applicant channel
       ```      

      După aceea, selectați pictograma **Refresh** pentru a actualiza descrierea fluxului agentului folosind AI.

      Apoi selectați **Save** pentru a salva detaliile actualizate ale fluxului agentului.

       ![Editați și salvați detaliile](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.ro.png)

1. Navigați înapoi la fila **Designer** și selectați **Publish** pentru a publica fluxul agentului. Va apărea un mesaj de confirmare odată ce este salvat.

       ![Publicați fluxul agentului](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.ro.png)

1. Fluxul agentului trebuie acum adăugat ca un instrument în **Application Intake Agent**. Navigați înapoi la **Hiring Agent** și selectați fila **Agents**, apoi selectați **Application Intake Agent**.

       ![Selectați Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.ro.png)

1. În secțiunea **Details** a agentului, vom actualiza câmpul **Description**. Copiați următorul text și lipiți-l la sfârșitul textului descrierii.

       ```text
       și notifică, de asemenea, canalul Teams Applicant
       ```

       ![Actualizați descrierea agentului](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.ro.png)

1. Următorul pas este să adăugăm fluxul agentului ca un instrument. Derulați în jos și selectați **+ Add**.

       ![Selectați Adăugați](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.ro.png)

1. Selectați fluxul agentului creat anterior, **Notify Teams Applicant Channel**.

       ![Selectați fluxul agentului](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.ro.png)

1. Selectați **Add and configure** în continuare.

       ![Selectați Adăugați și configurați](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.ro.png)

1. În secțiunea **Inputs** a fluxului agentului, cele trei input-uri configurate anterior în fluxul agentului sunt vizibile. Implicit, configurația **Fill using** este setată la **Dynamically fill with AI**. Vom păstra această setare, deoarece promptul de la declanșatorul evenimentului (în ultima acțiune, **Sends a prompt to the specified copilot for processing** - acestea sunt pașii 38-44 din **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) va conține valorile parametrilor pe care AI le va extrage.

       ![Input-uri flux agent instrument](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.ro.png)

1. Acum că instrumentul a fost adăugat la **Application Intake Agent**, instrucțiunile agentului trebuie actualizate. Selectați pictograma **săgeată înapoi** pentru a reveni la lista de agenți.

       ![Selectați pictograma săgeată înapoi](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.ro.png)

1. Selectați **Application Intake Agent** în fila **Agents** a **Hiring Agent**.

       ![Selectați Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.ro.png)

1. În câmpul **Instructions**, introduceți o linie nouă după instrucțiunile `2.Post-Upload`. Copiați și lipiți următoarele instrucțiuni.

       ```text
       Proces pentru încărcarea CV-urilor prin email
       1. Când primiți un mesaj, **Trimiteți [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" și [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" și [ResumeNumber (text_2)]= "R01026" către instrumentul "Notify Teams Applicant channel"** în agentul copil "Application Intake Agent", apelați [AGENT FLOW PLACEHOLDER]
       ```

       ![Actualizați instrucțiunile Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.ro.png)

1. Evidențiați textul `[AGENT FLOW PLACEHOLDER`.

       ![Evidențiați placeholder](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.ro.png)

1. Introduceți caracterul slash, `/`, și selectați instrumentul **Notify Teams Applicant Channel**.

       ![Selectați instrumentul Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.ro.png)
1. Fluxul agentului va fi acum invocat de **Agentul de Preluare a Aplicațiilor**, conform instrucțiunilor, după ultima acțiune (**Trimite un prompt către copilotul specificat pentru procesare**) din declanșatorul de eveniment, care trimite promptul ce conține valorile parametrilor înapoi la agent.

      Selectați **Salvare** pentru a salva instrucțiunile actualizate pentru **Agentul de Preluare a Aplicațiilor**.

       ![Selectați Salvare](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.ro.png)

1. Instrucțiunile vor fi acum actualizate odată ce agentul a fost salvat.

       ![Instrucțiuni actualizate](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.ro.png)

1. Acum trebuie să **Publicăm** **Agentul de Recrutare**. Selectați **Publicare** în colțul din dreapta sus, iar în fereastra _Publicați acest agent_ care apare, selectați **Publicare**.

       ![Publicați Agentul de Recrutare](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.ro.png)

1. După publicare, va apărea un mesaj de confirmare că agentul a fost publicat.

       ![Mesaj de confirmare](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.ro.png)

Acum putem testa agentul!

### Laborator 3.3 - Testarea declanșatorului de eveniment

1. Pentru a executa declanșatorul de eveniment, trebuie trimis un e-mail cu un fișier PDF de tip CV atașat. În Outlook, compuneți un nou mesaj de e-mail.

     | Componenta e-mail | Detalii |
     |----------|------------|
     | **Destinatar** | Utilizați contul utilizatorului autentificat ca valoare |
     | **Fișier atașat** | Încărcați fișierul [TAYLOR TESTPERSON (FICTIV)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf)  |
     | **Corp** | Copiați și lipiți următorul text ca și corp al e-mailului  |

       ```text
       Stimate Manager de Recrutare,

       Vă scriu pentru a-mi exprima interesul față de poziția de Inginer Senior Power Platform în organizația dumneavoastră. Cu peste nouă ani de experiență în livrarea de soluții sigure și scalabile pe platformele cloud Microsoft, sunt încrezător în capacitatea mea de a contribui eficient la echipa dumneavoastră.

       În rolul meu cel mai recent de Inginer Principal Power Platform, am dezvoltat un flux automatizat de preluare a CV-urilor, reducând trierea manuală și îmbunătățind căutarea. Am livrat aplicații de gestionare a cazurilor HR, am introdus fluxuri conștiente de soluții și am implementat verificări PR pentru a îmbunătăți timpii de implementare. Expertiza mea include Power Apps, Power Automate, Power Pages, Dataverse și o gamă de servicii Microsoft 365, precum și integrarea cu Graph/REST APIs și Azure Functions.

       Anterior, am dezvoltat aprobări în Teams cu carduri adaptive, reducând timpii de aprobare la aceeași zi, și am creat cadre robuste de gestionare a erorilor. Experiența mea include, de asemenea, migrarea fluxurilor de lucru vechi către Power Automate și construirea de portaluri de autoservire adoptate de sute de angajați.

       Dețin o diplomă de licență în Informatică și sunt certificat ca Dezvoltator Power Platform (PL-400) și Arhitect de Soluții (PL-600). Sunt, de asemenea, pasionat de mentorat și am voluntariat în grupuri locale de creatori.

       Vă rog să găsiți atașat CV-ul meu pentru considerație. Aș fi încântat să discut despre cum abilitățile și experiența mea se aliniază cu nevoile dumneavoastră.

       Vă mulțumesc pentru timpul și considerația acordată.

       Cu stimă,  
       Taylor Testperson
       ```

       **Trimiteți** e-mailul odată compus.

       ![Compuneți e-mail cu fișier PDF atașat](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.ro.png)

1. În portalul Power Automate maker pentru fluxul declanșatorului de eveniment, selectați pictograma **Reîmprospătare** pentru a vizualiza rularea fluxului care a reușit pentru e-mailul trimis.

       ![Selectați pictograma reîmprospătare pentru a vizualiza rularea fluxului](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.ro.png)

1. Înapoi în Copilot Studio, în **Agentul de Recrutare**, selectați fila **Activitate**.

       ![Selectați fila Activitate](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.ro.png)

1. Fila **Activitate** se va încărca și va afișa toate activitățile **Agentului de Recrutare**. Va exista o activitate cu numele **Automatizat** care are statusul **Completat**. Această activitate reprezintă declanșatorul de eveniment și fluxul agentului care a fost invocat.

       ![Activitate completată](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.ro.png)

1. Selectați activitatea și selectați declanșatorul de eveniment din harta activității. În panoul din partea dreaptă, observați cum parametrii de intrare din prompt conțin valorile parametrilor `Resume Id`, `Resume Title` și `Resume Number` din rândul **Dataverse** care a fost creat. Acestea provin din valorile de conținut dinamic configurate anterior în pașii 18 - 27 din **Laboratorul 3.1 - Automatizarea încărcării CV-urilor în Dataverse primite prin e-mail**.

       ![Declanșator de eveniment](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.ro.png)

1. Navigați înapoi la aplicația model-driven **Hiring Hub** și în vizualizarea sistemului **Resumes**, selectați **Reîmprospătare** pentru a reîmprospăta vizualizarea. Rândul nou creat pentru CV-ul trimis prin e-mail va fi acum listat, deoarece a fost creat prin declanșatorul de eveniment.

       ![Rând CV creat](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.ro.png)

1. Navigați înapoi la Copilot Studio și selectați fluxul agentului **Notifică canalul de aplicanți Teams** din cadrul **Agentului de Preluare a Aplicațiilor** în harta activității. În panoul din partea dreaptă, observați cum intrările au valori din rândul Dataverse. Acestea provin din promptul trimis de ultima acțiune (**Trimite un prompt către copilotul specificat pentru procesare**) din declanșatorul de eveniment, care conține valorile parametrilor din rândul Dataverse nou creat. Astfel putem transmite valori de parametri de la declanșatoare de eveniment către fluxurile agentului.

       ![Selectați fluxul agentului](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.ro.png)

1. În final, să aruncăm o privire la cardul adaptiv postat în canalul **Microsoft Teams**. În canal, vom vedea cardul adaptiv care afișează informațiile despre rândul CV-ului nou creat în Dataverse. Treceți cursorul peste hyperlink-ul de la începutul cardului adaptiv, observați cum URL-ul este URL-ul vizualizării sistemului Resumes pe care l-am configurat anterior în payload-ul JSON (pașii 15 - 19 din **Laboratorul 3.2 - Notificarea unui canal Teams folosind un card adaptiv**) al cardului adaptiv.

       ![URL-ul vizualizării tabelului CV din cardul adaptiv](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.ro.png)

1. Selectați hyperlink-ul și veți fi direcționat către vizualizarea sistemului Resumes în aplicația model-driven **Hiring Hub** din browserul dumneavoastră.

       ![Vizualizarea sistemului CV în aplicația model-driven Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.ro.png)

1. Navigați înapoi la cardul adaptiv postat în canalul Microsoft Teams. De această dată, treceți cursorul peste **Vizualizați CV-ul**, care este acțiunea `Action.OpenURL` a cardului adaptiv. Observați cum URL-ul este rândul CV-ului pe care l-am configurat anterior în payload-ul JSON (pașii 30 - 36 din **Laboratorul 3.2 - Notificarea unui canal Teams folosind un card adaptiv**) al cardului adaptiv.

       ![URL-ul rândului CV din cardul adaptiv](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.ro.png)

1. Selectați acțiunea și veți fi direcționat către formularul rândului CV în aplicația model-driven **Hiring Hub** din browserul dumneavoastră.

       ![Rândul CV în aplicația model-driven Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.ro.png)

## ✅ Misiune Îndeplinită

Felicitări! 👏🏻 Lucru excelent, Operativ.

✅ Declanșator de eveniment: ați creat un declanșator de eveniment care transmite valori de parametri Dataverse către un flux de agent.  
✅ Ați construit un flux de agent: consumă valorile parametrilor Dataverse pentru a posta un card adaptiv într-un canal Microsoft Teams pentru a alerta echipa de recrutare HR.  
✅ Instrucțiuni actualizate pentru agentul copil: pentru a invoca fluxul odată ce declanșatorul de eveniment a fost finalizat.

Acest lucru permite **Agentului de Recrutare** să funcționeze autonom ori de câte ori CV-urile sunt primite ca atașamente de e-mail și să notifice echipa de recrutare HR pentru revizuire manuală.

Acesta este sfârșitul **Laboratorului 03 - Automatizarea e-mailurilor de aplicație ale candidaților**, selectați linkul de mai jos pentru a trece la lecția următoare.

⏭️ [Treceți la lecția **Crearea Instrucțiunilor pentru Agent**](../04-agent-instructions/README.md)

## 📚 Resurse Tactice

📖 [Faceți agentul dumneavoastră autonom în Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  
📖 [Adăugați un declanșator de eveniment](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  
📖 [Utilizați fluxuri de agent cu agentul dumneavoastră](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  
📖 [Introducere în declanșatoarele Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  
📖 [Utilizarea fluxurilor Power Automate cu agenți](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  
📖 [Prevenirea pierderii de date pentru Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.