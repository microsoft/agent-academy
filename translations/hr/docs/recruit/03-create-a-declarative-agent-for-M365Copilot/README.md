<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T23:44:49+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "hr"
}
-->
# 🚨 Misija 03: Implementacija Deklarativnog Agenta za Microsoft 365 Copilot

## 🕵️‍♂️ KODNO IME: `OPERACIJA COPILOT EKSTENZIJA`

> **⏱️ Vrijeme trajanja operacije:** `~60 minuta`

🎥 **Pogledajte vodič**

[![Video thumbnail za kreiranje deklarativnog agenta](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.hr.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Pogledajte vodič na YouTubeu")

## 🎯 Kratak opis misije

Dobrodošli na vaš prvi terenski zadatak, Agent Maker. Odabrani ste da dizajnirate, opremite i implementirate Deklarativnog Agenta—specijaliziranog operativca direktno integriranog u Microsoft 365 Copilot i Microsoft Teams.

Za razliku od tradicionalnih agenata, deklarativni agenti djeluju s definiranim zadatkom (uputama), alatima (promptovima/konektorima) i strateškim pristupom unutarnjoj inteligenciji (izvorima znanja poput SharePointa, Dataverse-a i drugih). Vaš zadatak je izgraditi ovog agenta koristeći Microsoft Copilot Studio—centar za upravljanje bez programiranja gdje vještine i svrha vašeg agenta oživljavaju.

Krenimo.

## 🔎 Ciljevi

U ovoj misiji naučit ćete:

1. Razumjeti što su deklarativni agenti i kako proširuju Microsoft 365 Copilot prilagođenim mogućnostima
1. Usporediti Microsoft Copilot Studio i Copilot Studio agent builder za izradu deklarativnih agenata
1. Kreirati deklarativnog agenta koristeći prirodni jezik kroz iskustvo konverzacijskog kreiranja
1. Dodati AI promptove kao alate za poboljšanje specijaliziranog znanja i sposobnosti rješavanja problema vašeg agenta
1. Objaviti i testirati vaš deklarativni agent u Microsoft 365 Copilot i Microsoft Teams

## 🕵🏻‍♀️ Što je deklarativni agent za Microsoft 365 Copilot?

Deklarativni agenti su prilagođene verzije Microsoft 365 Copilot-a. Možete prilagoditi Microsoft 365 Copilot kako bi zadovoljio specifične poslovne potrebe pružanjem uputa za podršku određenom procesu, povezivanjem s korporativnim znanjem i korištenjem alata za širu proširivost. To omogućuje organizacijama stvaranje personaliziranih iskustava s većom funkcionalnošću za njihove korisnike.

## 🤔 Zašto koristiti Microsoft Copilot Studio za izradu deklarativnog agenta?

Kao kreator, postoji mogućnost da ste već istražili [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) u Microsoft 365 Copilot-u i možda se pitate _zašto izraditi deklarativnog agenta u Microsoft Copilot Studio?_

Microsoft Copilot Studio nudi sveobuhvatan set alata i značajki za deklarativne agente koji nadilaze ograničenja Copilot Studio agent builder-a. Slično kao i Copilot Studio agent builder, ne morate znati programiranje ili razvoj softvera za izradu u Microsoft Copilot Studio. Pogledajmo detaljnije razlike između Copilot Studio Agent Builder-a i Copilot Studio za izradu deklarativnih agenata.

### Usporedba značajki

Sljedeća tablica ističe razlike pri izradi deklarativnog agenta u Copilot Studio agent builder-u i Copilot Studio.

| Značajka                   | Copilot Studio agent builder u Microsoft 365 Copilot                          | Proširenje Microsoft 365 Copilot-a u Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Znanje**       | Web, SharePoint, Microsoft Teams chatovi, Outlook e-mailovi, Copilot konektori     | Web pretraživanje (putem Binga), SharePoint, Dataverse, Dynamics 365, Copilot konektori  |
| **Alati**       | Interpretator koda, generator slika     | 1400+ Power Platform konektora, prilagođeni konektori, promptovi, računalna upotreba, REST API, Model Context Protocol   |
| **Početni promptovi**         | Konfigurirajte promptove za brzo pokretanje korisnika   | Konfigurirajte promptove za brzo pokretanje korisnika  |
| **Kanal**           | Agent objavljen samo na Microsoft 365 Copilot     | Agent objavljen na Microsoft 365 Copilot i Microsoft Teams      |
| **Dozvole za dijeljenje**         | Korisnici su samo gledatelji    | Korisnici mogu biti urednici ili gledatelji   |

Postoje dodatne mogućnosti koje se nude za deklarativne agente izrađene u Microsoft Copilot Studio o kojima ćemo učiti u nastavku.

!!! tip
    - Za više informacija o Copilot Studio agent builder-u, posjetite [Copilot Developer Camp: Lab MAB1 - Izradite svog prvog agenta](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Za profesionalni razvoj proširenja deklarativnog agenta izvan Copilot Studio agent builder-a za Microsoft 365 Copilot, posjetite [Copilot Developer Camp: Lab MAB1 - Izradite svog prvog agenta](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Proširenje Microsoft 365 Copilot-a s deklarativnim agentima izrađenim u Copilot Studio

Proširimo ono što smo naučili iz tablice usporedbe značajki.

#### Prilagodba

- **Detaljne upute**: Možete pružiti detaljne upute i mogućnosti za precizno definiranje svrhe i ponašanja agenta.
  - To uključuje pozivanje alata jednostavno korištenjem prirodnog jezika.

- **Pristup korporativnom znanju**: Omogućuje pristup korporativnom znanju koje poštuje korisničke dozvole.
  - Integracija sa SharePointom
  - Integracija s Dataverse-om
  - Integracija s Dynamics 365
  - Microsoft 365 Copilot konektori omogućeni od strane administratora vaše organizacije

   ![Prilagodba](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.hr.png)

#### Napredne mogućnosti

- **Integracija s vanjskim uslugama**: Omogućuje odabir između 1400+ Power Platform konektora koji se integriraju s vanjskim uslugama, pružajući složenije i moćnije funkcionalnosti.
  - Primjeri uključuju [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) i druge
  - Alternativno, možete koristiti Model Context Protocol servere i REST API-je direktno unutar vašeg deklarativnog agenta

- **AI promptovi**: Koristite prompt za analizu i transformaciju teksta, dokumenata, slika i podataka s prirodnim jezikom i AI zaključivanjem.
  - Odaberite model za chat, birajte između Basic (Default), Standard, Premium
  - Opcija za korištenje vlastitog Azure AI Foundry modela za temelj vašeg prompta

- **Više opcija konfiguracije implementacije**: Odaberite kanale i definirajte korisničke dozvole.
  - Objavite na Microsoft Teams, poznato korisničko sučelje za vaše korisnike za brže usvajanje
  - Dozvole za uređivanje mogu se dijeliti kako bi se spriječila ovisnost o jednom vlasniku agenta

   ![Prilagodba](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.hr.png)

Ukratko, deklarativni agenti u Microsoft Copilot Studio omogućuju prilagodbu Microsoft 365 Copilot-a kako bi odgovarali poslovnim potrebama kroz integraciju sustava korporativnog znanja, alata za povezivanje s vanjskim uslugama ili AI GPT modelima.

## 🧪 Laboratorij 03: Izrada deklarativnog agenta u Microsoft Copilot Studio za Microsoft 365 Copilot

Sljedeće ćemo naučiti kako izraditi deklarativnog agenta za slučaj upotrebe "Business-to-Employee", koji će djelovati kao **agent IT podrške**.

- [3.1 Kreirajte deklarativnog agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Kreirajte i dodajte prompt za vaš deklarativni agent](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Ažurirajte upute i testirajte vaš deklarativni agent](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Objavite vaš deklarativni agent na Microsoft 365 Copilot i Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Ovaj laboratorij će prikazati korake za dodavanje Prompt-a kao alata. Sljedeće lekcije će se baviti dodavanjem izvora znanja i drugih dostupnih alata. Držimo se jednostavnosti za vaše učenje 😊

### 👩🏻‍💼 Razumijevanje Business-to-Employee (B2E)

Business-to-Employee (B2E) odnosi se na interakcije i usluge koje poduzeće pruža direktno svojim zaposlenicima. U kontekstu agenta, to znači korištenje naprednih mogućnosti Copilot Studija za podršku i poboljšanje radnog iskustva zaposlenika unutar organizacije.

### ✨ Scenarij upotrebe

**Kao** zaposlenik

**Želim** dobiti brzu i točnu pomoć od agenta IT podrške za probleme poput problema s uređajem, rješavanja problema s mrežom, postavljanja pisača

**Kako bih mogao** ostati produktivan i riješiti tehničke probleme bez odgađanja

Krenimo!

### Preduvjeti

- Kreatori moraju imati dozvole za kreiranje i pristup Copilot Studio okruženju.

!!! note "Napomena o licenciranju"
    Ovaj laboratorij će prikazati korake za dodavanje Prompt-a kao alata. Sljedeće lekcije će se baviti dodavanjem izvora znanja i drugih dostupnih alata. Držimo se jednostavnosti za vaše učenje 😊
  
    Ne trebate licencu za korisnika Microsoft 365 Copilot-a kako biste objavili vaš deklarativni agent izrađen u Copilot Studio na Microsoft 365 Copilot. Međutim, **korisnici** _objavljenog deklarativnog agenta_ u Microsoft 365 Copilot-u trebaju licencu za korisnika Microsoft 365 Copilot-a.

### 3.1 Kreirajte deklarativnog agenta

!!! warning "Pitanja Copilot-a mogu se razlikovati između sesija"

    Iskustvo konverzacijskog kreiranja u Copilot-u može se razlikovati svaki put, gdje se pružena pitanja za smjernice mogu malo razlikovati od prethodnih.

1. Idite na [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) i prijavite se koristeći svoje vjerodajnice. Provjerite jeste li prebacili na okruženje koje koristite za ove laboratorije.

1. Odaberite **Agents** iz izbornika i odaberite **Copilot for Microsoft 365**.

       ![Copilot za Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.hr.png)

1. Zatim ćemo kreirati deklarativnog agenta odabirom **+ Add** agenta.

       ![Dodaj agenta](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.hr.png)

1. Vidjet ćemo kako se učitava iskustvo konverzacijskog kreiranja gdje možemo razgovarati prirodnim jezikom s Copilot-om kako bismo opisali deklarativnog agenta kojeg želimo izraditi i koristiti pružena pitanja za smjernice.

       Unesite detaljan opis koji uključuje sljedeće,  
       - zadatak agenta  
       - vrstu upita koje može obraditi  
       - format njegovog odgovora  
       - cilj agenta  
    
       ```text
       Vi ste visoko kvalificirani i iskusni IT profesionalac specijaliziran za širok raspon računalnih sustava, mreža i kibernetičke sigurnosti. Možete dijagnosticirati i riješiti tehničke probleme, jasno i razumljivo objasniti rješenja korisnicima svih tehničkih razina i pružiti smjernice o najboljim praksama. Trebali biste biti sažeti i informativni, koristeći upute korak po korak s točkama gdje je to prikladno. Vaš cilj je pomoći korisniku da razumije problem i kako ga učinkovito riješiti.
       ```
    
       ![Kreiraj Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.hr.png)

1. Nakon što pošaljete prompt, primijetit ćete ažuriranje na desnoj strani s detaljima i uputama agenta kako je definirano u promptu. Zatim će vas Copilot pitati da potvrdite ime vašeg agenta i predložit će ime.

       Unesite `da` za prihvaćanje predloženog imena ili unesite drugo ime, poput sljedećeg,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Upute ažurirane](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.hr.png)

    !!! warning "Podsjetnik: Pitanja Copilot-a mogu se razlikovati između sesija"

        Iskustvo konverzacijskog kreiranja u Copilot-u može se razlikovati svaki put, gdje se pružena pitanja za smjernice mogu malo razlikovati od prethodnih.

1. Ime agenta sada je ažurirano, što se vidi na desnoj strani. Sada nas pitaju da doradimo upute za agenta. Ono što je Copilot predložio zvuči odlično, pa ćemo ga zamoliti da koristi svoje prijedloge. Unesite sljedeće,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Ime ažurirano](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.hr.png)

1. Zatim će nas pitati želimo li dodati javno dostupne web stranice ili izvore znanja. Odgovorit ćemo s `Ne` jer ćemo u ovom laboratoriju dodati samo prompt za naš deklarativni agent. Sljedeći laboratoriji u budućim lekcijama pokrit će izvore znanja.

      ![Nisu dodane web stranice ili izvori znanja](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.hr.png)

1. Zatim ćemo vidjeti odgovor od Copilot-a da smo završili konfiguraciju našeg agenta koristeći iskustvo konverzacijskog kreiranja u Copilot-u. Međutim, doradimo ga još malo tako da navedemo da bi trebao biti sažet i informativan s točkama, koristiti empatiju u komunikaciji i tražiti povratne informacije nakon pružanja rješenja.

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

      ![Ažuriraj upute agenta](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.hr.png)

1. Copilot potvrđuje da su upute ažurirane. Kliknite **Create** kako biste kreirali deklarativnog agenta za Microsoft 365 Copilot.

      ![Kreiraj agenta](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.hr.png)

    !!! warning "Podsjetnik: Pitanja Copilot-a mogu se razlikovati između sesija"

        Iskustvo konverzacijskog kreiranja u Copilot-u može se razlikovati svaki put, gdje se pružena pitanja za smjernice mogu malo razlikovati od prethodnih.

1. Kada je agent kreiran, vidjet ćete detalje agenta koji sadrže opis i upute definirane tijekom iskustva konverzacijskog kreiranja u Copilot-u.
![Detalji agenta](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.hr.png)

Pomaknite se dolje po ploči i vidjet ćete mogućnosti dodavanja znanja, omogućavanja pretraživanja weba (putem Binga), početnih upita i detalja o objavljivanju deklarativnog agenta za Microsoft 365 Copilot. Početni upiti također će biti prikazani u testnoj ploči na desnoj strani. Korisnici mogu odabrati ove početne upite kako bi započeli interakciju s agentom.

![Predloženi upiti](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.hr.png)

1. U odjeljku Detalji agenta imate mogućnost promjene ikone agenta. Odaberite **Uredi**.

![Uredi detalje](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.hr.png)

Ovdje možete promijeniti ikonu i boju pozadine. Odaberite **Spremi**, a zatim ponovno odaberite **Spremi** kako biste ažurirali detalje agenta.

![Promijeni ikonu](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.hr.png)

1. Napravimo brzi test agenta kojeg smo kreirali. Odaberite jedan od **Početnih upita** u testnoj ploči na desnoj strani.

![Testiraj početni upit](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.hr.png)

1. Naš agent će zatim odgovoriti. Primijetite kako se pridržava uputa pružajući odgovore u obliku točaka koje su lako razumljive te koristi empatiju u svom odgovoru.

Ako se pomaknete na dno poruke, primijetit ćete kako također traži povratne informacije nakon što pruži rješenje, prema uputama.

![Odgovor nakon testiranja](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.hr.png)

U nekoliko minuta dodali ste deklarativnog agenta za Microsoft 365 Copilot u Copilot Studio 🙌🏻

Sljedeće ćemo naučiti kako dodati alat našem agentu, kreirat ćemo upit.

### 3.2 Kreiranje i dodavanje upita za vaš deklarativni agent

1. Pomaknite se dolje do odjeljka **Alati** i odaberite **+ Dodaj alat**

![Dodaj alat](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.hr.png)

1. Pojavit će se modal Alati i prikazat će se popis konektora Power Platforme. Za dodavanje upita odaberite **+ Novi alat**.

![Novi alat](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.hr.png)

1. Prikazat će se popis drugih alata - Upit, Prilagođeni konektor, REST API i Model Context Protocol. Ako vaša organizacija ispunjava [zahtjeve za korištenje računala](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), to će se također pojaviti na popisu. Odaberite **Upit**.

![Odaberi upit](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.hr.png)

1. Unesite naziv za upit. Nazovimo naš upit `IT stručnjak`.

![Unesi naziv](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.hr.png)

1. Odaberite **ikonu strelice** pored **Model** kako biste vidjeli različite modele razgovora koje možete odabrati. Prema zadanim postavkama odabran je model **Basic GPT-4.1 mini**, a također imate opciju korištenja vlastitog modela putem Azure AI Foundry Models. Ostat ćemo pri odabranom zadanom modelu.

![Promijeni model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.hr.png)

1. Zatim ćemo našem upitu pružiti upute. Postoje 3 metode koje možete odabrati:

   - Koristite Copilot za generiranje uputa na temelju vašeg opisa što želite da upit radi.
   - Koristite unaprijed postavljeni predložak iz biblioteke upita za kreiranje upita.
   - Ručno unesite vlastite upute.

1. Prvo ćemo pokušati koristiti Copilot za generiranje uputa na temelju unesenog opisa. Unesite sljedeće u polje Copilot i pošaljite.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Započnite s Copilotom](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.hr.png)

1. Copilot će zatim početi generirati upit za nas.

![Copilot izrađuje upite](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.hr.png)

1. Generirane nacrte uputa od strane Copilota će se pojaviti.

![Generirane nacrte uputa od Copilota](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.hr.png)

1. Pomaknite se dolje do dna uputa i vidjet ćete već definirani parametar korisničkog unosa od strane Copilota. Zatim imate opciju:
   - Zadržati generirane nacrte uputa.
   - Osvježiti nacrte uputa koristeći Copilot.
   - Obrisati nacrte uputa.

   Obrišite nacrte uputa odabirom ikone **kanta za smeće**, a zatim ćemo pokušati biblioteku upita.

![Upute za upit](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.hr.png)

1. Odaberite poveznicu **predložak upita**.

![Odaberi predložak upita](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.hr.png)

1. Vidjet ćete popis predložaka upita za odabir. Oni su iz [biblioteke upita Power Platforme](https://aka.ms/power-prompts).

![Biblioteka upita](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.hr.png)

1. Potražite upit `IT stručnjak` i odaberite ga.

![Odaberi upit IT stručnjak](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.hr.png)

1. Upit će zatim biti dodan kao upute s definiranim ulaznim parametrom prema predlošku upita. Slično pristupu koji smo koristili prilikom pružanja uputa našem agentu tijekom iskustva kreiranja razgovora s Copilotom, ovaj predložak upita opisuje:
   - zadatak,
   - vrstu upita koje može obraditi,
   - format odgovora i cilj upita.

![Upute za upit](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.hr.png)

1. Obrišite upute i sljedeće ćemo pokušati ručno unijeti upute. Koristit ćemo [upit IT stručnjak](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) iz [biblioteke upita Power Platforme](https://aka.ms/power-prompts). Kopirajte i zalijepite upit.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Upute za upit](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.hr.png)

1. Zatim možemo definirati parametre korisničkog unosa za naš upit. Oni mogu biti tekst i slike, te uzorci podataka za testiranje. Također postoji mogućnost povezivanja upita sa znanjem iz tablica Dataverse. Za ovu vježbu imamo samo jedan korisnički unos za definiranje, a to je unos problema. Trenutno je to rezervirano mjesto u našem upitu kao `[Problem]`. Sada ćemo konfigurirati ovaj unos ili unosom znaka `/` ili odabirom **+Dodaj sadržaj**, a zatim odabirom **Tekst**.

![Tekstualni unos](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.hr.png)

1. Sada možemo unijeti naziv za naš parametar unosa i uzorak podataka.

Unesite sljedeće kao naziv

    ```text
    problem input
    ```

Unesite sljedeće kao uzorak podataka

    ```text
    My laptop gets an error with a blue screen
    ```

Zatim odaberite **Zatvori**.

![Konfiguriraj unos problema](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.hr.png)

1. Parametar unosa problema sada će biti dodan u upute s konfiguriranim uzorkom podataka. Sada možemo testirati naš upit!

![Unos problema dodan](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.hr.png)

1. Odaberite **Testiraj** za testiranje upita.

![Testiraj upute](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.hr.png)

1. Odgovor će se zatim prikazati. Primijetite kako odgovor pruža naslove s točkama prema uputama. Pomaknite se dolje i pregledajte ostatak odgovora modela.

![Odgovor modela](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.hr.png)

1. Prije nego što spremimo naš upit, naučimo o postavkama koje se mogu konfigurirati za ovaj upit. Odaberite ikonu **tri točke (...)**.

![Postavke upita](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.hr.png)

1. Ovdje ćemo vidjeti tri postavke koje se mogu konfigurirati.

   - **Temperatura**: Niže temperature dovode do predvidljivih rezultata, dok više temperature omogućuju raznovrsnije ili kreativnije odgovore.
   - **Dohvaćanje zapisa**: Odredite broj zapisa koji se dohvaćaju iz vaših izvora znanja.
   - **Uključi poveznice u odgovoru**: Kada je odabrano, odgovor uključuje citate poveznica za dohvaćene zapise.

   Odaberite ikonu **X** za izlazak iz Postavki.

![Konfiguriraj postavke](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.hr.png)

1. Odaberite **Spremi** za spremanje upita.

![Spremi upit](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.hr.png)

1. Zatim odaberite **Dodaj agentu** za dodavanje upita našem deklarativnom agentu.

![Upute za upit](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.hr.png)

1. Upit će se sada pojaviti pod Alatima 🙌🏻

![Upit dodan](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.hr.png)

Sljedeće ćemo ažurirati naše upute kako bismo pozvali upit i testirali našeg deklarativnog agenta.

### 3.3 Ažurirajte upute i testirajte svog deklarativnog agenta

1. Pomaknite se gore do odjeljka **Detalji** i odaberite **Uredi**. Ovo će omogućiti uređivanje polja.

![Odaberi Uredi](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.hr.png)

1. Sada možemo ažurirati naše upute kako bismo pozvali naš upit referencirajući naziv upita. Obrišite upute, zatim kopirajte i zalijepite sljedeće.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Primijetite kako posljednja rečenica upućuje agenta da koristi pitanje koje je korisnik postavio kao vrijednost za parametar unosa problema. Agent će koristiti pitanje kao unos problema za upit. Zatim odaberite **Spremi**.

![Ažuriraj upute za pozivanje upita](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.hr.png)

1. Sada smo spremni testirati naše ažurirane upute našeg deklarativnog agenta. Odaberite ikonu **osvježi** u testnoj ploči.

![Odaberi ikonu osvježi](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.hr.png)

1. Zatim unesite sljedeći upit dolje i pošaljite.

```text
Možete li mi pomoći, moj laptop ima plavi ekran
```

![Izvrši test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.hr.png)

1. Agent poziva upit i odgovara.

![Upute za upit](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.hr.png)

Sada objavimo našeg deklarativnog agenta 😃

### 3.4 Objavite svog deklarativnog agenta na Microsoft 365 Copilot i Microsoft Teams

1. Odaberite **Objavi**.

![Objavi agenta](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.hr.png)

1. Pojavit će se modal koji prikazuje Kanale i detalje objavljivanja koji se mogu ažurirati.

   - Kanali: Agent će biti objavljen na Microsoft 365 Copilot i Microsoft Teams.
   - Informacije o aplikaciji agenta: Ovo će biti prikazano kada korisnik doda agenta na Microsoft 365 Copilot ili u Microsoft Teams. Ovo su polja koja se mogu ažurirati prema potrebi.

![Detalji aplikacije agenta](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.hr.png)

1. Na primjer, možete ažurirati **Kratki opis**, **Dugi opis**, **Ime developera** s vašim imenom.

!!! tip
Ako ne vidite sva polja prikazana na vašem pregledniku, pokušajte smanjiti zoom, npr. na 75%.

Odaberite **Objavi**. Copilot Studio će zatim započeti objavljivanje agenta.

![Objavljivanje agenta](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.hr.png)

1. Kada je objavljivanje završeno, vidjet ćemo [Opcije dostupnosti](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) agenta.

| Opcija dostupnosti | Opis |
| ---------- | ---------- |
| Dijeli poveznicu | Kopirajte poveznicu kako biste je podijelili s korisnicima koji će otvoriti agenta u Microsoft 365 Copilot |
| Prikaži mojim kolegama i podijeljenim korisnicima | Omogućuje vam da omogućite pristup drugima za sudjelovanje u izradi agenta ili sigurnosnim grupama kako biste im omogućili pristup za korištenje agenta u Microsoft 365 Chat ili Microsoft Teams. |
| Prikaži svima u mojoj organizaciji | Pošaljite zahtjev administratoru tenanta kako bi dodao agenta u organizacijski katalog za sve korisnike tenanta. Agent će se prikazati pod Izrađeno od vaše organizacije u Microsoft 365 Copilot i Microsoft Teams |
| Preuzmi kao .zip | Preuzmite kao zip datoteku za učitavanje kao prilagođenu aplikaciju u Microsoft Teams |

![Opcije dostupnosti](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.hr.png)

1. Pogledajmo dijeljenje agenta. Odaberite **Prikaži mojim kolegama i podijeljenim korisnicima**. Pojavit će se ploča gdje možete pretraživati korisnike s kojima želite podijeliti agenta, bilo unosom njihovog imena, e-maila ili sigurnosne grupe. Ovaj popis možete pregledati u bilo kojem trenutku kako biste uredili tko ima pristup agentu.

Postoje i dvije potvrdne kućice:
- _Pošalji e-mail pozivnicu novim korisnicima_ - novi korisnici će primiti e-mail pozivnicu.
- _Vidljivo u Izrađeno s Power Platformom_ - agent postaje dostupan u odjeljku Izrađeno s Power Platformom u trgovini aplikacija Teams.
Za više detalja, pogledajte [Povezivanje i konfiguriranje agenta za Teams i Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Odaberite **Odustani** ili ikonu **X** za izlazak iz okna.

![Podijeli agenta](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.hr.png)

1. Odaberite **Kopiraj** i zalijepite poveznicu u novu karticu preglednika.

![Kopiraj poveznicu](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.hr.png)

1. Microsoft 365 Copilot će se učitati i pojavit će se modal s detaljima aplikacije agenta. Primijetite kako su prikazani ime programera, kratki opis i dugi opis. Ovi podaci dolaze iz detalja objave ažuriranih u prethodnom koraku.

Odaberite **Dodaj**.

![Opcije dostupnosti](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.hr.png)

1. Naš deklarativni agent će se sljedeći učitati. Možemo vidjeti početne upite za odabir koji korisnicima omogućuju brzo traženje pomoći.

Odaberite jedan od početnih upita. U mom slučaju, odabrat ću upit **Pomoć pri instalaciji softvera** koji će automatski unaprijed popuniti polje poruke Copilot. Pošaljite pitanje Copilotu.

![Odabir početnog upita](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.hr.png)

1. Odaberite **Uvijek dopusti** kako biste dali svom deklarativnom agentu dopuštenje za pokretanje upita IT stručnjaka.

![Odabir uvijek dopusti](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.hr.png)

1. Agent će zatim pokrenuti naš upit **IT stručnjak** i vidjet ćemo odgovor modela prikazan kao poruku u našem deklarativnom agentu.

![Odgovor](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.hr.png)

Pomaknite se dolje kako biste vidjeli sve detalje odgovora.

![Odgovor](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.hr.png)

1. Ali _kako znamo_ da je deklarativni agent pokrenuo upit? 👀 Evo savjeta!

!!! tip
    Možete testirati i otklanjati greške agenata u Microsoft 365 Copilotu omogućavanjem [načina za programere](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Unesite sljedeće u polje poruke Copilot i pošaljite.

    ```text
    -developer on
    ```

Pojavit će se poruka potvrde koja će vas obavijestiti da je način za programere sada omogućen.

![Način za programere omogućen](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.hr.png)

1. Pošaljite sljedeće pitanje kako biste pokrenuli upit.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Unesite pitanje](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.hr.png)

1. Ponovno ćemo vidjeti odgovor modela iz našeg upita **IT stručnjak** prikazan kao poruka. Pomaknite se dolje do dna poruke i prikazat će se kartica s informacijama o otklanjanju grešaka.

Proširite **Informacije o otklanjanju grešaka agenta** odabirom.

![Informacije o otklanjanju grešaka agenta](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.hr.png)

1. Ovdje ćete pronaći informacije o metapodacima agenta koji su se dogodili tijekom izvođenja.

![Proširene informacije o otklanjanju grešaka agenta](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.hr.png)

U našem slučaju, fokusirat ćemo se na odjeljak _Akcije_

- **Podudarne akcije** ističu trenutni status funkcija pronađenih tijekom pretraživanja aplikacije.
- **Odabrane akcije** ističu trenutni status funkcija odabranih za izvođenje na temelju procesa donošenja odluka aplikacije.

![Proširene informacije o otklanjanju grešaka agenta](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.hr.png)

Ovdje možemo vidjeti da je orkestrator agenta odlučio pokrenuti upit IT stručnjaka prema uputama našeg deklarativnog agenta. To je dodatno objašnjeno u odjeljku _Izvršene akcije_ koji nam također govori da je uspješno pokrenuo upit.

![Pregled informacija o otklanjanju grešaka agenta](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.hr.png)

1. Za isključivanje načina za programere, unesite sljedeće u polje poruke Copilot i pošaljite.

    ```text
    -developer off
    ```

Pojavit će se poruka potvrde koja će vas obavijestiti da je način za programere isključen. Super, sada znate kako provjeriti je li vaš deklarativni agent u Microsoft 365 Copilotu pokrenuo vaš upit 🌞

![Način za programere isključen](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.hr.png)

1. Sada ćemo testirati našeg agenta u Microsoft Teamsu. Idite na **Aplikacije** koristeći izbornik s lijeve strane i odaberite **Teams** u odjeljku _Aplikacije_.

![Odaberite Teams u aplikacijama](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.hr.png)

1. Microsoft Teams će se zatim učitati u novoj kartici preglednika i bit će vam prikazani uvjeti korištenja za Microsoft 365 Copilot, odaberite **Slažem se**.

![Odaberite Slažem se](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.hr.png)

1. Microsoft 365 Copilot će se zatim učitati prema zadanim postavkama, s desne strane okna bit će popis svih dostupnih agenata, uključujući deklarativnog agenta **Contoso Tech Support Pro**.

![Microsoft 365 Copilot u Teamsu](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.hr.png)

1. Odaberite **ikonu s tri točke (...)** na izborniku s lijeve strane. Možete pretraživati **Contoso Tech Support Pro** u polju za pretraživanje ili, ako vidite agenta, odaberite ga.

Također možete desnim klikom miša odabrati **Prikvači** agenta za brzi pristup na izborniku s lijeve strane u Microsoft Teamsu.

![Odaberite i prikvačite agenta](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.hr.png)

1. Zatim ćemo vidjeti kako se naš agent učitava. 1. Sljedeće ćemo testirati našeg agenta. Unesite sljedeći upit i pošaljite.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Prikvači agenta](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.hr.png)

1. Prikazat će se odgovor modela iz našeg upita.

![Odgovor u Teamsu](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.hr.png)

U nekoliko minuta naučili ste kako objaviti svog deklarativnog agenta i testirati ga u Microsoft 365 Copilotu i Microsoft Teamsu 😊

## ✅ Misija završena

Čestitamo! 👏🏻 Izradili ste deklarativnog agenta u Copilot Studiju gdje ste dodali upit, dali upute agentu kako koristiti upit te kako testirati i objaviti svog agenta u Microsoft 365 Copilotu i Microsoft Teamsu.

Vaš agent je sada spreman za rad—spreman za pomoć, rješavanje problema i pružanje podrške internim korisnicima na zahtjev.

Ovo je kraj **Laboratorija 03 - Izrada deklarativnog agenta u Microsoft Copilot Studiju za Microsoft 365 Copilot**, odaberite poveznicu ispod za prelazak na sljedeću lekciju.

⏭️ [Prijeđite na lekciju **Izrada novog rješenja**](../04-creating-a-solution/README.md)

Do sljedećeg puta, budite oštri. Budućnost poslovanja u poduzećima prolazi kroz agente—a sada znate kako ga izraditi.

## 📚 Taktički resursi

🔗 [Izrada deklarativnog agenta u Microsoft Copilot Studiju za Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Dodavanje upita](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Dijeljenje agenata s drugim korisnicima](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Izrada upita za vašeg agenta](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analitika" />

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.