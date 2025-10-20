<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-20T17:17:56+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "ro"
}
-->
# 🚨 Misiunea 07: Adăugarea unui subiect nou cu declanșator și noduri

## 🕵️‍♂️ NUME DE COD: `OPERAȚIUNEA RĂMÂI PE SUBIECT`

> **⏱️ Interval de timp al operațiunii:** `~60 minute`

🎥 **Urmărește tutorialul**

[![Miniatură video declanșator](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.ro.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Urmărește tutorialul pe YouTube")

## 🎯  Scopul misiunii

Ai creat un agent. Ascultă, învață și răspunde la întrebări - dar acum este momentul să devii mai tactic. În această misiune, vei intra în detalii și vei învăța agentul cum să răspundă cu precizie la anumite solicitări.

Cu Subiecte și Declanșatoare, agentul tău poate:

- Recunoaște intenția

- Direcționa conversațiile logic

- Colecta și stoca variabile

- Declanșa fluxuri și lua măsuri

Nu construiești doar un dialog, ci conectezi cortexul decizional al agentului. Bine ai venit la Nexusul Neural.

## 🔎 Obiective

În această misiune, vei învăța:

1. Ce sunt subiectele și rolul lor în crearea conversațiilor structurate pentru agentul tău
1. Anatomia subiectelor, inclusiv fraze declanșatoare și noduri de conversație
1. Explorarea diferitelor tipuri de noduri de conversație și utilizarea Power Fx pentru logică dinamică
1. Crearea de subiecte personalizate de la zero pentru a gestiona cereri și sarcini specifice ale utilizatorilor
1. Construirea unui subiect funcțional care se conectează la datele SharePoint folosind conectori și instrumente

## 🤔 Ce este un subiect?

Un subiect este o conversație structurată care ajută agentul să răspundă la întrebări sau sarcini specifice ale utilizatorilor. Gândește-te la un subiect ca la o mini-conversație sau o sarcină pe care agentul tău o poate gestiona. Fiecare subiect este conceput să răspundă unei întrebări sau cereri specifice ale utilizatorului.

### 🌌 Scopul unui subiect

Există trei scopuri comune pentru subiecte, bazate pe nevoile utilizatorilor:

**Informațional** - răspunde la întrebări precum:

- `Ce este …?`
- `Când va …?`
- `De ce …?`
- `Poți să-mi spui …?`

**Finalizarea sarcinilor** - ajută utilizatorii să _facă_ ceva:

- `"Vreau să …"`
- `"Cum pot să …?"`
- `"Am nevoie de …?"`

**Rezolvarea problemelor** - rezolvă probleme:

- `Ceva nu funcționează …`
- `Întâmpin un mesaj de eroare …`
- `Văd ceva neașteptat …?`

De asemenea, poți crea subiecte pentru întrebări ambigue, cum ar fi `Am nevoie de ajutor`, care cer utilizatorilor mai multe detalii înainte de a continua.

## 🐦 De ce sunt utile subiectele?

Subiectele te ajută să:

- Organizezi cunoștințele agentului tău.

- Faci conversațiile să pară naturale.

- Rezolvi eficient problemele utilizatorilor.

## 🪺 Tipuri de subiecte

1. **Subiecte de sistem** - acestea sunt predefinite și gestionează evenimente comune, cum ar fi:
    - Începerea unei conversații
    - Încheierea unei conversații
    - Gestionarea erorilor
    - Solicitarea utilizatorilor să se autentifice
    - Escaladarea către un agent uman

1. **Subiecte personalizate** - le creezi pentru a gestiona sarcini sau întrebări specifice, cum ar fi:
    - Cererea de concediu a angajaților
    - Solicitarea unui dispozitiv nou sau de înlocuire

![Tipuri de subiecte](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.ro.png)

## 🧬 Anatomia unui subiect

Fiecare subiect conține, de obicei, următoarele.

### 🗣️ Fraze declanșatoare

Acestea sunt cuvinte sau propoziții pe care utilizatorii le-ar putea spune pentru a începe subiectul.

**Exemple:**

Pentru un subiect de cerere de concediu, frazele declanșatoare ar putea fi:

- `Vreau să iau concediu`
- `Solicit concediu`
- `Aplic pentru timp liber`
- `Cum pot să depun o cerere de concediu?`

Pentru un subiect de solicitare de dispozitiv, frazele declanșatoare ar putea fi:

- `Am nevoie de un dispozitiv nou`
- `Pot să solicit un dispozitiv?`
- `Mă poți ajuta cu o cerere de dispozitiv`

### 💬 Noduri de conversație

Un subiect este format din noduri, care sunt pașii pe care agentul îi urmează odată ce subiectul este declanșat. Conectezi acești pași pentru a construi un flux de conversație pe care agentul îl urmează atunci când interacționează cu utilizatorii.

Gândește-te la acestea ca la instrucțiuni sau acțiuni, cum ar fi:

- Punerea de întrebări utilizatorului
- Trimiterea de mesaje
- Apelarea unui serviciu extern, cum ar fi sistemul de gestionare a concediilor
- Setarea sau verificarea variabilelor
- Utilizarea condițiilor pentru ramificarea conversației
- Direcționarea către un alt subiect

![Noduri de conversație](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.ro.png)

Următoarele sunt principalele tipuri de noduri pe care le poți adăuga unui agent:

#### Trimite un mesaj

- **Scop** - trimite un mesaj utilizatorului.
- **Exemplu** - `Mulțumesc pentru cererea ta! Te voi ajuta cu asta.`

Acest nod permite agentului să trimită mesaje utilizatorilor, care pot fi text simplu sau conținut bogat, cum ar fi imagini, videoclipuri, carduri, răspunsuri rapide și carduri adaptive.

Poți personaliza mesajele folosind variabile, adăuga mai multe variante de mesaje pentru diversitate și chiar personaliza ieșirea vocală pentru canalele activate vocal.

!!! tip
    Gândește-te la acesta ca la un bloc "spune ceva" care ajută agentul să comunice clar și interactiv cu utilizatorii.

#### Pune o întrebare

- **Scop** - pune utilizatorului o întrebare și așteaptă răspunsul acestuia.
- **Exemplu** - `Care sunt datele tale de concediu?`

Acest nod este utilizat pentru a cere utilizatorilor informații specifice în timpul unei conversații și pentru a stoca răspunsurile lor în variabile pentru utilizare ulterioară.

Poți personaliza tipul de întrebare, cum ar fi introducerea textului sau utilizarea entităților pentru o listă definită de valori din care utilizatorul selectează, și defini cum ar trebui să se comporte agentul dacă utilizatorul oferă un răspuns invalid sau sare peste întrebare.

De asemenea, suportă conținut bogat, cum ar fi imagini și răspunsuri rapide, și îți permite să ajustezi validarea, reîntrebarea și setările de întrerupere pentru a face fluxul conversației să fie lin.

!!! tip
    Gândește-te la acesta ca la un bloc "întreabă și ascultă" care ajută agentul să interacționeze cu utilizatorii într-un mod structurat pe care îl definești.

#### Întreabă cu card adaptiv

- **Scop** - trimite un card interactiv bogat folosind JSON.
- **Exemplu** - un card care afișează un selector de date calendaristic pentru ca utilizatorul să selecteze o dată.

Acest nod afișează carduri interactive bogate pe care utilizatorii le pot completa și trimite, cum ar fi formulare cu casete de text, butoane și imagini. Captura răspunsul utilizatorului și îl stochează în variabile, pe care agentul le poate folosi ulterior în conversație.

!!! tip
    Gândește-te la acesta ca la un bloc "constructor de formulare" personalizabil care face agentul mai captivant și capabil să colecteze informații detaliate de la utilizatori.

#### Adaugă o condiție

- **Scop** - adaugă logică conversației. Verifică ceva și decide ce să facă în continuare.
- **Exemplu** - dacă utilizatorul spune `Da`, trece la pasul următor. Dacă `Nu`, încheie conversația.

Acest nod creează puncte de decizie în fluxul conversației agentului verificând dacă o variabilă îndeplinește anumite criterii. În funcție de faptul că condiția este adevărată sau falsă, agentul urmează căi diferite.

!!! tip
    Gândește-te la acesta ca la un bloc "dacă-altfel" care ajută agentul să ia decizii în funcție de datele utilizatorului sau de informațiile stocate în variabile.

#### Gestionarea variabilelor

- **Scop** - stochează sau șterge informații (numite variabile) în timpul conversației.
- **Exemplu** - salvează data selectată de utilizator în nodul Pune o întrebare care afișează un card adaptiv.

Acest nod îți permite să stochezi și să gestionezi informații în timpul unei conversații, cum ar fi numele utilizatorului, răspunsul sau preferințele. Poți utiliza diferite tipuri de variabile, cum ar fi text, numere sau date, și acestea pot fi limitate la un singur subiect, partajate între subiecte (globale) sau chiar preluate din sistem sau mediu.

!!! tip
    Gândește-te la acesta ca la o "cutie de memorie" care ajută agentul să-și amintească informații și să le folosească pe măsură ce conversația continuă cu utilizatorul.

#### Gestionarea subiectelor

- **Scop** - mută conversația către un alt subiect sau pas din cadrul subiectului, transferă conversația sau încheie subiectul sau conversația.
- **Exemplu** - redirecționează către subiectul "Politica de concediu".

Acest nod permite agentului să treacă de la un subiect la altul fără a relua conversația, să încheie subiectul, să transfere sau să încheie conversația sau să treacă la un pas diferit în cadrul aceluiași subiect. Ajută la ghidarea utilizatorilor prin diferite părți ale fluxului conversației prin tranziții fluide între subiecte, și poți transmite variabile între ele pentru a păstra contextul.

!!! tip
    Gândește-te la acesta ca la un bloc "mergi la altă secțiune/pas" care ajută agentul să fie flexibil în conversațiile cu utilizatorii.

#### Adaugă un instrument

- **Scop** - se conectează la instrumente, cum ar fi conectori, fluxuri de agent, solicitări, căutare personalizată, interogare de căutare, abilități, protocol de context al modelului.
- **Exemplu** - Fluxul agentului executat după ce utilizatorul își trimite cererea de concediu.

Acest nod oferă agentului capacități de a interacționa cu sisteme externe sau de a îndeplini sarcini specifice, cum ar fi trimiterea de e-mailuri, verificarea vremii sau accesarea bazelor de date. Poți adăuga instrumente folosind conectori încorporați, API-uri personalizate, fluxuri de agent, solicitări sau conectarea la servere MCP (Model Context Protocol), și chiar automatizare GUI pentru aplicații desktop prin utilizarea instrumentului computerului.

!!! tip
    Gândește-te la instrumente ca la "blocuri de acțiune" care oferă agentului superputeri pentru a face lucruri dincolo de _conversație_, cum ar fi apelarea unui API, rularea unui proces sau colectarea automată a informațiilor utilizatorului.

#### Nod de răspuns generativ

- **Scop** - utilizează un model de limbaj mare pentru a genera răspunsuri naturale, asemănătoare celor umane, bazate pe întrebarea utilizatorului și orice date conectate.
- **Exemplu** - utilizează sursa de cunoștințe conectată care conține informații despre drepturile de concediu pentru a răspunde la întrebările utilizatorului privind cererile de concediu.

Acest nod permite agentului să răspundă la întrebările utilizatorului folosind informații din diverse surse de cunoștințe, cum ar fi site-uri web, documente, SharePoint sau date personalizate. Poate fi utilizat ca soluție de rezervă atunci când nu se găsește niciun subiect potrivit sau în cadrul unui subiect pentru a oferi răspunsuri mai detaliate și dinamice bazate pe surse specifice pe care le-ai configurat pentru agentul tău.

!!! tip
    Gândește-te la acesta ca la un "bloc de răspuns inteligent" care ajută agentul să ofere răspunsuri utile și precise prin căutarea conținutului de încredere pe care îl definești.

#### Nod de cerere HTTP

- **Scop** - conectează agentul la sisteme externe prin trimiterea de apeluri API (de exemplu, `GET` sau `POST`) pentru a prelua sau actualiza date.
- **Exemplu** - când un utilizator întreabă despre soldul zilelor de concediu, agentul efectuează o cerere `GET` către sistemul de gestionare a concediilor și extrage `remainingLeaveDays` din răspunsul API și răspunde utilizatorului cu valoarea.

Acest nod permite agentului să se conecteze la sisteme externe prin trimiterea de apeluri API REST, cum ar fi cererile `GET` sau `POST`. Poți personaliza cererea cu anteturi, conținutul corpului și chiar utiliza Power Fx pentru a include date dinamice, apoi stoca răspunsul în variabile pentru utilizare ulterioară în conversație.

!!! tip
    Gândește-te la acesta ca la un bloc "ajunge și obține informații" care ajută agentul să comunice cu alte servicii, cum ar fi preluarea detaliilor utilizatorului sau trimiterea de date către un alt sistem.

#### Trimite un eveniment

- **Scop** - permite agentului să trimită acțiuni non-mesaj, cum ar fi actualizări de sistem sau declanșatoare de instrumente - către client sau canal, ajutându-l să îndeplinească sarcini.
- **Exemplu** - reacționează la un utilizator care se alătură unui chat prin afișarea unui mesaj de bun venit.

Acest nod permite agentului să trimită acțiuni non-mesaj către sisteme externe sau canale, care pot decide cum să răspundă. Fiecare eveniment primește un nume și o valoare, care poate fi un număr simplu sau text, o variabilă sau o formulă Power Fx, și este trimis ca un obiect JSON.

!!! tip
    Gândește-te la acesta ca la un bloc "declanșator silențios" care ajută agentul să facă lucruri în culise sau să comunice cu instrumente externe fără ca utilizatorul să spună ceva.

## 🏋🏻‍♀️ Utilizarea Power Fx în nodurile tale

În Copilot Studio, Power Fx este un limbaj de programare low-code utilizat pentru a adăuga logică și comportament dinamic agentului tău. Este același limbaj utilizat în Microsoft Power Apps și este conceput să fie simplu și asemănător cu Excel, fiind ușor de utilizat atât pentru dezvoltatori, cât și pentru non-dezvoltatori.

![Expresie Power Fx](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.ro.png)

### Ce poate face Power Fx în subiecte

- Setează și manipulează variabile
      - Exemplu: `Set(userName, "Adele Vance")`
- Creează condiții
      - Exemplu: `If(score > 80, "Pass", "Fail")`
- Formatează și transformă date
      - Exemplu: `Text(DateValue, "dd/mm/yyyy")`

### De ce să folosești Power Fx?

- **Flexibil:** poți construi logică fără a scrie linii complete de cod.

- **Familiar:** dacă ai utilizat formule Excel, se simte foarte similar.

- **Puternic:** îți permite să personalizezi conversațiile, să validezi intrările și să controlezi cum se comportă agentul în funcție de datele utilizatorului.

## 🏗️ Cum creez și editez subiecte?

Există două moduri prin care poți crea și edita subiecte pentru agenții tăi.

### 1. Creează de la zero

Aceasta îți permite să construiești fluxuri de conversație personalizate de la zero, și poți adăuga sau elimina noduri după cum este necesar atunci când editezi subiectul.

![Ad
Acest lucru îți permite să descrii ceea ce dorești folosind limbaj natural, iar Copilot va construi conversația pentru tine. Același lucru se aplică și atunci când editezi subiectul; folosește limbaj natural, iar Copilot va revizui și modifica subiectul pentru tine.

#### Ce suportă Copilot

- Poate crea și edita:
      - Noduri de mesaje
      - Noduri de întrebări
      - Noduri de condiții
- Nu suportă setări avansate, cum ar fi cum să repornești utilizatorul dacă nu răspunde sau cum să gestionezi întreruperile în timpul unei întrebări. Poți ajusta manual aceste setări dacă este necesar.

#### De ce este util

- Accelerează dezvoltarea cu asistență AI.
- Te lasă să te concentrezi pe logică și experiența utilizatorului în loc de configurări repetitive.
- Face mai ușoară iterarea și îmbunătățirea fluxurilor de conversație cu efort minim.

#### ✨ Exemple de solicitări

- **Creare subiect**
      - `Acceptă numele, vârsta și data nașterii utilizatorului și apoi repetă răspunsurile acestuia`
      - `Colectează adresa stradală, statul și codul poștal al utilizatorului. Utilizatorul ar trebui să poată încerca din nou fiecare întrebare de până la 4 ori`

- **Editare subiect**
      - `Adaugă o întrebare care să solicite data nașterii utilizatorului`
      - `Rezumă informațiile colectate într-un Adaptive Card.`

## 👩🏻‍🎨 OK, cum proiectez subiecte pentru agentul meu?

### 🧙🏻‍♂️ Pasul 1 - înțelege ce au nevoie utilizatorii

Începe prin identificarea întrebărilor sau sarcinilor comune pe care utilizatorii le vor adresa agentului tău. Acestea ar putea fi:

- Întrebări pe care utilizatorii le pun frecvent, cum ar fi `care este dreptul meu la zile de concediu medical?`
- Sarcini comune pe care utilizatorii doresc să le finalizeze, cum ar fi completarea unui formular
- Probleme pe care utilizatorii le întâmpină frecvent, cum ar fi problemele de autentificare

### 📦 Pasul 2 - Grupează scenariile

Organizează nevoile utilizatorilor în trei categorii bazate pe ceea ce am învățat mai devreme - scopul unui subiect:

- Informativ - utilizatorul dorește să afle ceva
- Finalizarea unei sarcini - utilizatorul dorește să facă ceva
- Rezolvarea problemelor - utilizatorul are nevoie de ajutor pentru a rezolva o problemă

### 🗺️ Pasul 3 - Schițează conversația

Desenează un flux simplu de conversație despre cum ar trebui să răspundă agentul

- Începe cu un salut sau o confirmare
- Pune întrebări suplimentare pentru a obține detalii
- Oferă răspunsuri sau efectuează acțiuni

!!! tip
    Păstrează conversația scurtă și concentrată. Pune doar întrebările necesare.

### 🔀 Pasul 4 - Gestionează diferite tipuri de conversații

Proiectează pentru ambele:

- **Un singur schimb** - o întrebare, un răspuns

- **Schimburi multiple** - o conversație de tip întrebare-răspuns cu întrebări suplimentare

Exemplu:

- Utilizator: `Vreau să aplic pentru concediu.`

- Agent: `Sigur! Ce dată dorești să înceapă concediul?`

- Utilizator: `15 iulie`

- Agent: `Am înțeles. Și când se va termina concediul?`

- Utilizator: `22 iulie.`

- Agent: `Mulțumesc! Care este motivul concediului?`

- Utilizator: `Vacanță cu familia.`

- Agent: `Mulțumesc pentru detalii. Am trimis cererea ta de concediu din 15 iulie până pe 22 iulie pentru o vacanță cu familia. Vei primi o confirmare în curând.`

### 🤖 Pasul 5 - Folosește AI pentru întrebări neașteptate

Chiar dacă ai proiectat un subiect pentru cererile de concediu, utilizatorii ar putea pune întrebări care nu sunt acoperite direct. Aici intervin funcțiile AI, cum ar fi subiectul sistemului _Conversational boosting_.

Acest subiect include un nod de răspunsuri generative, care permite agentului să înceapă să folosească surse de cunoștințe conectate imediat. Orice surse de cunoștințe adăugate la nivelul agentului sunt incluse automat în nodul de răspunsuri generative din subiectul sistemului _Conversational boosting_.

#### Exemplu

- Utilizator: `Pot să transfer zilele de concediu neutilizate în anul următor?`

Această întrebare s-ar putea să nu facă parte din fluxul de subiect predefinit, mai ales dacă subiectul tău se ocupă doar de trimiterea cererilor de concediu.

#### Cum ajută AI

Dacă agentul tău este conectat la documentele de politică HR ale companiei sau la site-ul intern, AI poate:

- Căuta politica relevantă privind concediul
- Înțelege și rezuma regulile
- Agentul răspunde cu: `Conform politicii HR, poți transfera zilele de concediu neutilizate în anul calendaristic următor. Pentru mai multe detalii, verifică secțiunea de politică privind concediul pe portalul HR.`

#### De ce este util

- Nu trebuie să creezi manual un subiect pentru fiecare întrebare legată de politică.
- AI poate extrage răspunsuri precise din surse de cunoștințe de încredere.
- Îmbunătățește experiența utilizatorului, făcând agentul să pară mai inteligent și mai receptiv.

### 🔬 Pasul 6 - Testează subiectul, fluxul conversației

Înainte de a publica subiectul:

- Testează folosind întrebări reale sau exemple reale de intrări.
- Asigură-te că sună natural și este util.

!!! tip
    Aplică îmbunătățiri subiectului tău pe măsură ce testezi, cum ar fi adăugarea mai multor noduri sau eliminarea nodurilor în loc să redirecționezi către un alt subiect.

### ⚠️ Pasul 7 - Evită duplicarea conținutului de pe site-ul web

Nu copia ceea ce este deja pe site-ul tău web.

- Concentrează-te pe subiecte despre care utilizatorii întreabă frecvent.
- Adaugă subiecte noi bazate pe istoricul conversațiilor sau cererile de suport.

### ✨ Exemplu de flux de conversație

Mai jos este un exemplu de subiect care gestionează cererile de concediu.

#### Pasul 1: Fraza declanșatoare

Utilizatorul scrie,

`Vreau să solicit concediu`

#### Pasul 2: Agentul solicită detalii folosind un Adaptive Card

Agentul întreabă,

`Sigur! Ce date dorești să iei liber?`

Adaptive Card are un control de selecție a datei de început și a datei de sfârșit.

#### Pasul 3: Utilizatorul oferă datele

Utilizatorul selectează data de început ca 5 august 2025 și data de sfârșit 10 august 2025 și trimite cardul. Valorile datei sunt stocate în ieșirea Adaptive Card ca variabile.

#### Pasul 4: Fluxul cloud executat

Un flux cloud Power Automate a fost executat, care creează o nouă cerere în sistemul de gestionare a concediilor și trimite un e-mail pentru a notifica managerul despre cererea de concediu.

#### Pasul 5: Trimite un mesaj de confirmare utilizatorului

Agentul răspunde cu,

`Cererea ta de concediu din 5 august până pe 10 august a fost trimisă. Managerul tău o va analiza și îți va răspunde în curând.`

## 🧪 Laborator 07 - Adaugă un subiect nou cu noduri de conversație

Acum vom învăța cum să adăugăm un subiect nou cu un declanșator și instrumente. Acest laborator va acoperi crearea unui subiect de la zero, astfel încât să înțelegi cum să personalizezi subiectele în funcție de nevoile tale.

- [7.1 Adaugă un subiect nou de la zero](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Definește intrările și ieșirile declanșatorului](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Adaugă un instrument folosind un conector](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Caz de utilizare

**Ca** angajat

**Vreau să** știu ce dispozitive sunt disponibile

**Astfel încât să** am o listă cu dispozitivele disponibile

Să începem!

### Cerințe preliminare

1. **Lista SharePoint**

    Vom folosi lista **Devices** din SharePoint din [Lecția 00 - Configurarea cursului - Pasul 3: Crearea unui site nou SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Dacă nu ai configurat lista **Devices** din SharePoint, te rugăm să te întorci la [Lecția 00 - Configurarea cursului - Pasul 3: Crearea unui site nou SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agentul Contoso Helpdesk**

    Vom folosi același agent creat anterior în [Lecția 06 - Crearea unui agent personalizat folosind limbaj natural cu Copilot și conectarea acestuia la datele tale](../06-create-agent-from-conversation/README.md).

### 7.1 Adaugă un subiect nou de la zero

1. Selectează **fila Topics** lângă numele agentului. Dacă nu o vezi vizibilă, selectează **+6** și vei vedea **Topics** listate.

    ![Select Topics](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.ro.png)

1. Fila **Topics** se va încărca și, implicit, subiectele _Custom_ vor fi afișate. Poți filtra subiectele după All, Custom și System. Subiectele personalizate și de sistem pe care le vezi acum au fost create automat când agentul a fost configurat.

    Selectează **+ Add a topic** și apoi **From blank**.

    ![Create topic from scratch](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.ro.png)

1. Introdu un nume pentru subiect. Copiază și lipește următorul text.

    ```text
    Available devices
    ```

    ![Name the topic](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.ro.png)

1. Introdu o descriere a declanșatorului care să contureze ce face subiectul. Copiază și lipește următorul text.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Enter a name and description for trigger](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.ro.png)

### 7.2 Definește intrările și ieșirile declanșatorului

1. În continuare, vom adăuga o variabilă de intrare nouă pe care AI-ul generativ o va folosi în orchestrarea sa pentru a extrage tipul de dispozitiv din mesajul utilizatorului. Selectează **More ellipsis (...)** în subiect și apoi **Details** pentru a vizualiza panoul de detalii al subiectului.

    ![Select Topic Details](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.ro.png)

1. Panoul **Topic details** s-a încărcat acum. Selectează fila **Input**.

    ![Input tab](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.ro.png)

1. Selectează **Create a new variable**.

    ![Create new input variable](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.ro.png)

1. Introdu un nume pentru variabilă. Copiază și lipește următorul text.

    ```text
    VarDeviceType
    ```

    ![Input variable name](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.ro.png)

1. Acum trebuie să definim variabilele de intrare și ieșire. Următoarele sunt proprietăți care pot fi definite pentru intrările și ieșirile subiectului.

    | Câmp    | Valoare |
    | ---------- | :--------- |
    | Cum va completa agentul această intrare? | Determină cum completează agentul această variabilă cu o valoare înainte de a rula subiectul. Implicit este setat pe _Dynamically fill with the best option_. În caz contrar, poți suprascrie o intrare cu o valoare în loc să întrebi utilizatorul |
    | Tipul de date al variabilei  | Tipul de date al variabilei. Tipurile de date suportate sunt `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Nume afișat   | Numele variabilei   |
    | Identifică ca  | Tipul de entitate pentru ca agentul să captureze tipul corect de valoare  |
    | Descriere    | Descrierea ajută agentul să completeze automat intrările înainte de a rula subiectul sau să genereze întrebări pentru a solicita valorile   |

    Proprietățile _Cum va completa agentul această intrare?_, _Tipul de date al variabilei_ și _Nume afișat_ pot rămâne neschimbate. Actualizează proprietatea **Identifică ca** la **Răspunsul complet al utilizatorului**.

    ![Update Identify as](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.ro.png)

1. Copiază și lipește următorul text ca descriere.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Description](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.ro.png)

1. În continuare, să definim ieșirea pentru subiect. Selectează fila **Output**.

    ![Select Output tab](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.ro.png)

1. Selectează **Create a new variable**.

    ![Create new output variable](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.ro.png)

1. Actualizează următoarele proprietăți.

    **Nume variabilă** - Copiază și lipește următorul text.

    ```text
    VarAvailableDevices
    ```

    **Tipul de date al variabilei** - Selectează **Table** ca tip de date.

    **Descrierea variabilei** - Copiază și lipește următorul text.

    ```text
    List of available devices by device type
    ```

    ![Output properties](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.ro.png)

1. Am finalizat definirea intrărilor și ieșirilor subiectului. Selectează **X icon** pentru a ieși din panoul **Topic details**.

    ![Exit from topic details pane.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.ro.png)

### 7.3 Adaugă un instrument folosind un conector

1. În continuare, să adăugăm un nod care permite agentului să recupereze lista de dispozitive din lista **Devices** din SharePoint. Selectează **+ icon** sub declanșator.

    ![Add a tool](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.ro.png)

1. Selectează nodul **Add a tool**, apoi fila **Connector**. Caută `Get items` și selectează acțiunea conectorului **Get items** din SharePoint.

    ![Select get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.ro.png)

1. Trebuie creată o conexiune nouă pentru conector. Selectează **chevron** icon și apoi **Create new connection**.

    ![Add a tool](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.ro.png)

1. Vor fi afișate două opțiuni care îți permit să te conectezi direct la SharePoint Online sau la un SharePoint local. Implicit, opțiunea **Connect directly (cloud-services)** va fi selectată, ceea ce vom folosi pentru conexiunea noastră.
Selectați **Create**.

![Selectați Create](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.ro.png)

1. Selectați contul de utilizator autentificat.

![Selectați contul de utilizator autentificat](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.ro.png)

1. Următorul pas este să confirmați că contul dvs. de utilizator poate fi utilizat pentru conexiunea la conectorul SharePoint. Selectați **Allow access**.

![Selectați Allow access](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.ro.png)

1. Selectați **Submit** pentru acțiunea conectorului SharePoint **Get items** pentru a fi adăugată ca nod în subiect.

![Submit](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.ro.png)

1. Acțiunea conectorului SharePoint **Get items** este acum adăugată la subiect. Putem începe configurarea intrărilor acțiunii. Selectați **pictograma elipsă (...)** și apoi **Properties**.

![Selectați Properties](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.ro.png)

1. Panoul de configurare **Get items** va apărea și, implicit, veți vedea fila **Inputs**. Selectați fila **Initiation** și introduceți o descriere în câmpul **Usage Description**. Copiați și lipiți următorul text.

    ```text
    Retrieves devices from SharePoint list
    ```

> Acest lucru va fi util când vom vizualiza pagina _Manage your connections_ a agentului nostru. Vom reveni la aceasta în scurt timp.

![Descriere Get items](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.ro.png)

1. Selectați fila **Inputs** și selectați site-ul **Contoso IT** și lista **Devices** pe care ați configurat-o în [Lecția 00 - Configurarea cursului - Pasul 3: Crearea unui site nou SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Configurați intrările Get items](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.ro.png)

1. Acum, pentru a afișa doar dispozitivele din lista SharePoint bazate pe:
   - valoarea selectată,
   - și doar dispozitivele unde statusul este _Available_,

   trebuie să aplicăm un filtru. Acest lucru se realizează prin introducerea unei interogări de filtrare cu ajutorul Power Fx. Selectați **pictograma elipsă (...)**.

![Selectați pictograma elipsă](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.ro.png)

1. Implicit, veți fi în fila **Custom**. Selectați fila **Formula**.

![Selectați fila Formula](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.ro.png)

1. Selectați pictograma **expand** pentru a mări câmpul **Formula**. Copiați și lipiți următoarea expresie Power Fx.

Utilizăm funcția `Concatenate` pentru a crea o expresie care va filtra:
   - coloana SharePoint **Status** egală cu _Available_,
   - și coloana SharePoint **Asset type** egală cu _dispozitivul selectat din nodul întrebării_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Selectați **Insert**.

![Introduceți expresia Power Fx și selectați insert](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.ro.png)

1. Expresia Power Fx va fi aplicată acum în parametrul de intrare Filter Query al acțiunii **Get items**. Apoi, selectați vizualizarea **All items** în **Limit Columns by View**. Acest lucru va recupera doar coloanele din listă bazate pe vizualizarea selectată.

![List Columns by View](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.ro.png)

1. Următorul pas este să actualizăm numele variabilei pentru ieșire. Selectați fila **Outputs** și selectați variabila `GetItems`.

![Actualizați variabila](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.ro.png)

1. Actualizați numele la următorul.

    ```text
    VarDevices
    ```

![Actualizați numele variabilei](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.ro.png)

1. Derulați în jos și, în secțiunea **Usage**, selectați **Global**. Acest lucru va face ca variabila să fie accesibilă de orice subiect.

![Actualizați la variabilă globală](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.ro.png)

1. **Închideți** panoul **Variable properties**.

![Închideți panoul Variable properties](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.ro.png)

1. Selectați pictograma **plus +** pentru a insera un nod nou, selectați **Variable management**, urmat de **Set a variable value**.

![Adăugați nodul Set a variable value](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.ro.png)

1. Selectați pictograma **greater than** pentru parametrul de intrare **Set variable**.

![Setați variabila](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.ro.png)

1. Selectați ieșirea subiectului creat anterior ca variabilă, **VarAvailableDevices**.

![Salvați subiectul](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.ro.png)

1. Apoi, selectați **pictograma elipsă (...)** pentru a defini valoarea variabilei.

![Selectați valoarea variabilei](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.ro.png)

1. Vom folosi acum o expresie PowerFx pentru a seta valoarea variabilei ca proprietatea `value` returnată în răspunsul **Get items** și pentru a face [domeniul variabilei](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) global prin adăugarea prefixului `Global`.

Selectați **Insert** și **save** subiectul.

![Formula Power Fx pentru valoarea variabilei](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.ro.png)

1. Următorul pas este să actualizăm instrucțiunile agentului. Selectați fila **Overview** și apoi **Edit**.

![Editați instrucțiunile](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.ro.png)

1. Adăugați o linie nouă în instrucțiuni, copiați și lipiți următorul text.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Această instrucțiune va ghida AI generativ să invoce trigger-ul **Available devices** pentru a afișa lista de dispozitive disponibile din lista **Devices** SharePoint. Selectați întregul placeholder al subiectului în paranteze pătrate.

![Adăugați instrucțiuni](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.ro.png)

1. Tastați caracterul slash `/` și va apărea lista de subiecte. Selectați subiectul **Available devices**.

![Referință trigger](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.ro.png)

1. **Salvați** instrucțiunile actualizate.

![Salvați instrucțiunile](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.ro.png)

1. Acum vom testa agentul actualizat. Selectați **Test** în partea dreaptă sus pentru a afișa panoul de testare și **refresh** panoul de testare. Introduceți următorul mesaj către agent.

    ```text
    I need a laptop
    ```

![Test](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.ro.png)

1. Înainte ca agentul să poată continua, utilizatorul trebuie să verifice dacă conexiunea sa poate fi utilizată. Selectați **Allow**.

![Selectați Allow](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.ro.png)

1. Agentul va executa instrumentul SharePoint care recuperează o listă filtrată de dispozitive unde tipul dispozitivului este "laptop" și statusul este "available," utilizând expresia Power Fx. Un răspuns format sub formă de puncte va fi returnat pentru utilizator.

![Răspunsul testului](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.ro.png)

1. Ultimul lucru de învățat este vizualizarea conexiunilor utilizate prin pagina _Manage your connections_ a agentului. Selectați **pictograma elipsă (...)** și apoi **Manage Connection**.

![Manage connection](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.ro.png)

1. Aceasta este pagina unde putem vedea toate conexiunile utilizate de agent. În prezent, este listată doar o conexiune asociată instrumentului SharePoint care a fost adăugat la subiect. Selectați **1 tool** în coloana **Used By**.

![Used By](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.ro.png)

1. Aici putem vedea detaliile acțiunii Get items și vă amintiți descrierea _usage description_ pe care am introdus-o mai devreme? Aici vom vedea descrierea utilizării. Selectați **Close**.

> Acest lucru ne ajută să știm ce acțiuni sunt utilizate și scopul lor. Ne menține conexiunile organizate 📁.

![Descrierea utilizării](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.ro.png)

1. Revenim la fila browserului cu Copilot Studio și **refresh** panoul de testare pentru a șterge testul.

## ✅ Misiune Îndeplinită

Felicitări! 👏🏻 Ați învățat cum să adăugați un subiect nou de la zero, cum să adăugați un instrument care apelează acțiunea conectorului SharePoint Get items și să utilizați Power Fx pentru a filtra răspunsul astfel încât să returneze doar dispozitivele unde statusul este available și tipul dispozitivului este laptop. 🙌🏻

Acesta este sfârșitul **Lab 07 - Adăugarea unui subiect nou cu noduri de conversație**, selectați linkul de mai jos pentru a trece la lecția următoare. Vom extinde cazul de utilizare din acest laborator în lecția următoare.

⏭️ [Treceți la lecția **Enhance user interactions with Adaptive Cards**](../08-add-adaptive-card/README.md)

## 📚 Resurse Tactice

🔗 [Utilizați subiecte de sistem](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Subiecte în Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Setați trigger-uri pentru subiecte](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Definirea subiectelor agentului](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Creați expresii utilizând Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Crearea subiectelor utilizând limbaj natural](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Adăugarea acțiunilor la agenți utilizând conectori](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytics" />

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.