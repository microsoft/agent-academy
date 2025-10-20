<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-20T18:15:04+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "ro"
}
-->
# 🕵️‍♂️ Misiunea 04: Scrierea Instrucțiunilor pentru Agenți

--8<-- "disclaimer.md"

## 🕵️‍♂️ NUME DE COD: `OPERAȚIUNEA DIRECTIVĂ SECRETĂ`

> **⏱️ Fereastra de Timp a Operațiunii:** `~45 minute`

## 🎯 Rezumatul Misiunii

Agent, următoarea ta misiune este **Operațiunea Directivă Secretă** - stăpânirea artei comunicării și controlului agenților prin instrucțiuni și descrieri precise.

Misiunea ta, dacă alegi să o accepți, este să înveți abilități esențiale de redactare a instrucțiunilor clare și acționabile care să ghideze agenții să ia decizii inteligente, să folosească instrumentele și sursele de cunoștințe potrivite și să colaboreze fără probleme cu alți agenți. De asemenea, vei învăța să redactezi descrieri de înaltă calitate care ajută agenții să înțeleagă resursele lor și să răspundă cu precizie chirurgicală la cererile utilizatorilor.

Consideră aceasta ca fiind antrenamentul tău avansat în psihologia agenților și modificarea comportamentului. Așa cum un operativ de teren are nevoie de parametri clari pentru a reuși, agenții tăi AI necesită instrucțiuni redactate cu măiestrie pentru a acționa cu claritate, precizie și pentru a oferi informații valoroase în scenarii reale.

---

## 🔎 Obiective

Prin completarea acestei misiuni, vei:

- **Stăpânirea Instrucțiunilor**: Înțelege arta și știința redactării instrucțiunilor pentru agenți în Copilot Studio  
- **Ghidare Strategică**: Învață cum să direcționezi agenții să folosească instrumente, surse de cunoștințe și să colaboreze cu alți agenți  
- **Claritate Operațională**: Asigură-te că agenții tăi acționează cu precizie, transparență și eficiență  

---

## 📝 Scrierea Instrucțiunilor pentru Agenți

Redactarea instrucțiunilor eficiente pentru agenți este cheia comportamentului de succes al acestora. Instrucțiunile sunt utilizate de agenți pentru:

- A decide ce instrument, subiect sau sursă de cunoștințe să folosească pentru o cerere a utilizatorului sau un declanșator autonom  
- A completa intrările pentru orice instrument pe baza contextului disponibil  
- A genera un răspuns pentru utilizatorul final  

### Cum Funcționează Instrucțiunile

Instrucțiunile trebuie să fie bazate pe instrumentele, subiectele și sursele de cunoștințe configurate pentru agentul tău. Agenții nu pot acționa pe baza instrucțiunilor pentru resurse pe care nu le au. De exemplu, dacă îi indici agentului să caute într-un FAQ de pe un site web, trebuie să adaugi acel FAQ ca sursă de cunoștințe.

Poți face referire la instrumente specifice, subiecte, variabile sau expresii Power Fx folosind `/` în instrucțiuni. Acest lucru ajută agentul să știe exact ce să folosească și când.

### Ce să Includeți în Instrucțiuni

- Adăugați instrucțiuni pentru cazurile în care doriți să ghidați alegerile agentului, mai ales când există ambiguitate.  
- Folosiți instrucțiuni pentru a seta limite, cum ar fi restricționarea subiectelor sau specificarea formatelor de răspuns.  
- Oferiți indicii pentru completarea intrărilor instrumentelor, de exemplu, "Folosește adresa de email din câmpul de contact al lead-ului atunci când ajuți utilizatorul să redacteze un email."  
- Specificați cum ar trebui să fie formatate răspunsurile, de exemplu, "Oferă întotdeauna răspunsuri despre starea comenzilor în format tabelar."  
- Folosiți constrângeri pentru a limita acțiunile agentului, de exemplu, "Răspunde doar la cererile legate de beneficiile angajaților."  

### Exemple Practice

- "Folosește documentele FAQ doar dacă întrebarea nu este relevantă pentru Ore, Programări sau Facturare."  
- "Folosește subiectul de creare a tichetelor doar pentru crearea tichetelor; pentru alte cereri legate de rezolvarea problemelor, folosește subiectul de depanare."  
- "Oferă întotdeauna răspunsuri despre starea comenzilor în format tabelar."  

### Testare și Perfecționare

- După editarea instrucțiunilor, folosește panoul de testare pentru a valida comportamentul agentului.  
- Actualizează și publică modificările, dacă este necesar.  

### Ghidare Avansată

- Numerotează sau folosește liste cu puncte pentru instrucțiunile tale și specifică faptul că trebuie urmate în ordine.  
- Folosește formatul markdown pentru lizibilitate și pentru a ajuta AI-ul generativ să proceseze instrucțiunile.  
- Dacă dorești ca agentul să fie foarte specific, ia în considerare crearea unui subiect pentru acel caz de utilizare.  
- Folosește denumiri exacte pentru instrumente și subiecte în instrucțiuni pentru a evita confuziile.  

### Siguranță și Moderare

- Limitează ce instrumente ar trebui să folosească agentul atunci când face referire la surse de cunoștințe.  
- Limitează ce parametri ar trebui să fie utilizați pentru instrumente (de exemplu, să trimită email doar unei liste specificate de persoane).  
- Folosește instrucțiuni pentru a proteja împotriva comportamentului nedorit sau a problemelor de filtrare a conținutului.  

---

## ✍️ Redactarea Descrierilor pentru Instrumente, Subiecte și Agenți

Descrierile de înaltă calitate sunt esențiale pentru orchestrarea generativă. Agentul tău folosește aceste descrieri pentru a selecta instrumentele, subiectele și agenții potriviți pentru a răspunde cererilor și declanșatorilor utilizatorilor. Urmează aceste bune practici:

- **Folosește Limbaj Simplu și Direct**: Evită jargonul, argoul sau termenii excesiv de tehnici. Scrie în voce activă și la timpul prezent.  
- **Fii Specific și Relevant**: Include cuvinte cheie legate de funcționalitate și intenția utilizatorului. Asigură-te că descrierile diferențiază clar instrumentele sau subiectele similare pentru a evita ambiguitatea.  
- **Păstrează Descrierile Scurte și Informative**: Limitează descrierile la una sau două propoziții. Rezumă ce face instrumentul, subiectul sau agentul și cum beneficiază utilizatorul.  
- **Folosește Denumiri Unice și Descriptive**: Evită denumirile generice. De exemplu, folosește "Prognoza Meteo pentru Mâine" în loc de doar "Meteo".  
- **Listează Acțiuni sau Considerații**: Folosește liste cu puncte sau numerotate pentru claritate atunci când descrii mai multe caracteristici sau pași.  
- **Testează Suprapunerea**: Dacă mai multe subiecte au descrieri similare, agentul tău le poate invoca pe toate. Testează și revizuiește pentru a preveni suprapunerea.  

!!! example "Exemple de Descrieri Bune și Rele"
    **Bună:** Acest subiect oferă informații meteo pentru orice locație din lume pentru ziua următoare. Oferă temperatura. Nu obține vremea actuală pentru astăzi.  
    **Rea:** Acest instrument poate răspunde la întrebări. *(Prea vag)*  

---

## 🛠️ Bune Practici pentru Instrucțiuni și Descrieri

Pentru ca instrucțiunile și descrierile tale să fie cu adevărat eficiente, ține cont de aceste principii:

- Folosește voce activă și timpul prezent (de exemplu, "Acest instrument oferă informații meteo").  
- Evită jargonul, argoul sau termenii tehnici inutili, cu excepția cazului în care sunt necesari pentru publicul țintă.  
- Folosește liste cu puncte sau numerotate pentru a separa acțiuni, caracteristici sau considerații.  
- Include cuvinte cheie care se potrivesc cu intenția utilizatorului și funcționalitatea instrumentului sau subiectului.  
- Asigură-te că denumirile și descrierile resurselor similare sunt distincte pentru a evita confuzia și suprapunerea.  

---

## 🗂️ Structura Exemplară a Instrucțiunilor

Când redactezi instrucțiuni, ia în considerare următoarea structură pentru claritate și completitudine:

1. **Prezentare Generală**: Descrie pe scurt misiunea și rolul agentului  
1. **Pași de Proces**: Listează pașii principali pe care agentul ar trebui să-i urmeze  
1. **Puncte de Colaborare**: Indică momentele în care să apeleze alți agenți sau să folosească instrumente specifice  
1. **Siguranță și Moderare**: Include cerințele de conformitate sau siguranță  
1. **Circuit de Feedback**: Specifică modul în care agentul ar trebui să colecteze feedback sau să escaladeze probleme  

---

## 🧪 Laborator: Scrierea Instrucțiunilor pentru Agenți

*Conținutul laboratorului va fi disponibil în curând...*

---

## 🎉 Misiune Finalizată

Misiunea 04 este completă! Acum ai:

✅ **Stăpânirea Instrucțiunilor**: Ai învățat cum să redactezi instrucțiuni clare și acționabile pentru agenți  
✅ **Ghidare Strategică**: Ai direcționat agenții să folosească instrumente și să colaboreze eficient  
✅ **Claritate Operațională**: Ai asigurat că agenții acționează cu precizie și transparență  

Urmează [Misiunea 05](../05-agent-responses/README.md): Personalizarea răspunsurilor agenților pentru impact maxim.

---

## 📚 Resurse Tactice

📖 [Microsoft Copilot Studio - Scrierea Instrucțiunilor](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Ghid pentru Modul Generativ](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.