<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "180f9cc0b40527f61be092c9b0f72aba",
  "translation_date": "2025-10-20T23:40:40+00:00",
  "source_file": "docs/recruit/06-create-agent-from-conversation/README.md",
  "language_code": "hr"
}
-->
# 🚨 Misija 06: Kreirajte prilagođenog agenta koristeći prirodni jezik s Copilotom i povežite ga s vašim podacima

## 🕵️‍♂️ KODNO IME: `OPERACIJA AGENT FORGE`

> **⏱️ Vrijeme trajanja operacije:** `~75 minuta`

🎥 **Pogledajte vodič**

[![Video thumbnail za kreiranje prilagođenog agenta](../../../../../translated_images/video-thumbnail.9d5fddc1190fd4a04537488795821ac2f88fdcfe00e017f6e575a33f724e39cb.hr.jpg)](https://www.youtube.com/watch?v=qZTtQVncGFg "Pogledajte vodič na YouTubeu")

## 🎯 Kratak opis misije

Dobrodošli nazad, kreatore agenata. Ova misija stavlja vas u zapovjedničku poziciju najmoćnije funkcionalnosti u Copilot Studiju - kreiranje prilagođenog agenta od nule koristeći samo prirodni jezik… i dodatno ga osnažujući vašim vlastitim podacima.

Ovo nije samo još jedan chatbot. Vi gradite digitalnog suradnika s pristupom znanju - onog koji može razmišljati, odgovarati i koristiti stvarne informacije iz vaše organizacije.

Vaše oružje? Prirodni jezik. Vaša misija? Dizajnirajte, obučite i testirajte potpuno prilagođenog agenta za IT podršku koji odgovara na pitanja koristeći SharePoint, učitane datoteke ili URL-ove vaše tvrtke.

Krenimo graditi vašeg agenta od temelja.

## 🔎 Ciljevi

U ovoj misiji naučit ćete:

1. Razumjeti što su prilagođeni agenti i kako se razlikuju od unaprijed pripremljenih predložaka
1. Kreirati agente koristeći prirodne jezične upite i dizajn razgovora s Copilotom
1. Povezati agente s izvorima znanja vaše organizacije, uključujući SharePoint, dokumente i web stranice
1. Naučiti o generativnoj orkestraciji i kako agenti dinamički pretražuju i odgovaraju koristeći više izvora podataka
1. Izgraditi i testirati potpuno funkcionalnog agenta za IT podršku koji može odgovarati na pitanja koristeći vaše vlastite podatke

## 🤔 Što je _prilagođeni_ agent?

Prilagođeni agent je chatbot ili virtualni asistent kojeg kreirate i dizajnirate u Copilot Studiju kako bi pomogao korisnicima s određenim zadacima ili pitanjima. Zove se prilagođeni jer:

- **Vi odlučujete o svrsi** - pomaže korisnicima da zatraže godišnji odmor, provjere status narudžbe, pruži pomoć s IT pitanjima.
- **Vi definirate razgovor** - što agent kaže i kako bi trebao odgovarati.
- **Vi ga povezujete s vašim podacima** - povežite ga s podacima vaše organizacije putem ugrađenih podržanih izvora znanja.
- **Vi ga povezujete s vašim sustavima ili aplikacijama** - birajte između konektora, tokova, REST API-ja i modela kontekstualnih protokola servera.

!!! note
    Zamislite to ovako: gradite vlastitog digitalnog pomoćnika koji može razgovarati s korisnicima i obavljati zadatke za njih, poput odgovaranja na pitanja, prikupljanja informacija potrebnih za proces ili povezivanja s podacima vaše organizacije.

### 🤖 Što prilagođeni agent može učiniti?

Prilagođeni agent može obavljati sljedeće:

- Pitati korisnike za informacije poput imena, datuma ili preferencija.
- Spremiti te informacije u bazu podataka ili tablicu.
- Pretraživati podatke na temelju postavljenih pitanja i odgovarati na njih.
- Raditi autonomno bez direktne interakcije korisnika s agentom.
- Pokretati radnje na zahtjev kroz direktnu interakciju korisnika ili autonomno, poput slanja e-mailova ili kreiranja zapisa.

### 👩🏻‍💻 Zašto koristiti prilagođenog agenta?

- Štedi vrijeme automatizacijom ponavljajućih zadataka.
- Pruža korisnicima prijateljsko i vođeno iskustvo.
- Prilagođava se vašim poslovnim ili projektnim potrebama.

### ✨ Primjer

Kreirate prilagođenog agenta koji pomaže zaposlenicima da zatraže godišnji odmor.

Agent traži njihovo ime, datume godišnjeg odmora i ime njihovog menadžera, zatim sprema te informacije u sustav koji upravlja zahtjevima za godišnji odmor, poput SharePoint liste.

Sada, umjesto da se navigiraju do SharePoint liste i kreiraju novi zapis, zaposlenici jednostavno razgovaraju s agentom.

## 🗣️ Koristite prirodni jezik za kreiranje agenata

Ranije ste naučili kako brzo kreirati agente u Copilot Studiju koristeći unaprijed pripremljene predloške agenata u [Lekciji 05 - Brzi početak s unaprijed pripremljenim agentima](../05-using-prebuilt-agents/README.md). U ovoj lekciji, zaronit ćemo u iskustvo kreiranja razgovora s Copilotom. Copilot Studio olakšava kreiranje agenata kroz razgovor s Copilotom, baš kao da imate konverzaciju.

U Copilot Studiju, ne morate pisati kod da biste kreirali agenta. Umjesto toga, opisujete što želite da vaš agent radi u običnom jeziku, a Copilot vam pomaže da ga izgradite korak po korak kroz iskustvo nalik chatu.

## 🌱 Ali ja sam nov u "opisivanju što želim" - što da radim?

Opisivanje u prirodnom jeziku za kreiranje prilagođenog agenta može biti novi koncept za vas. Kad god koristite Copilot u Microsoft proizvodima i uslugama, koristite prirodni jezik u obliku _upita_.

Upit je poruka ili instrukcija koju dajete AI agentu kako biste mu rekli što želite da učini. Zamislite to kao davanje uputa asistentu. Što su vaše upute jasnije, to će vaš asistent lakše razumjeti i djelovati prema njima.

### 🪄 Zašto su upiti važni

- Vode ponašanje agenta.
- Pomažu agentu da razumije kakav razgovor treba voditi.
- Dobar upit čini agenta korisnijim i preciznijim.

### 📝 Savjeti za pisanje dobrog upita

- Budite jasni i specifični - recite točno što želite da agent učini.
- Razmišljajte kao korisnik - što će korisnik reći? Što bi agent trebao odgovoriti?
- Uključite primjere - ako je moguće, dajte primjer interakcije.

### ✨ Primjer

Recimo da HR tim treba agenta koji pomaže s zahtjevima za godišnji odmor.

Upit bi mogao biti:

    “Želim kreirati agenta koji pomaže korisnicima da podnesu zahtjev za godišnji odmor. Kada korisnik kaže da želi zatražiti slobodno vrijeme, agent bi trebao pitati za njihovo ime, datum početka godišnjeg odmora, datum završetka godišnjeg odmora i ime njihovog menadžera. Kada korisnik pruži te informacije, agent bi trebao spremiti podatke u SharePoint listu pod nazivom ‘Zahtjevi za godišnji odmor’ i objaviti obavijest u namjenskom Microsoft Teams kanalu.”

Zašto ovaj upit funkcionira:

- **Jasno navodi cilj** - podnošenje zahtjeva za godišnji odmor
- **Opisuje interakciju korisnika** - što korisnik kaže i što agent treba pitati
- **Navodi potrebne podatke** - ime, datum početka, datum završetka, menadžer
- **Spominje gdje podaci idu** - SharePoint lista pod nazivom Zahtjevi za godišnji odmor

## 🔮 OK, kreirao sam svog agenta... kako ga dalje povezati s znanjem?

U Copilot Studiju, izvori znanja su mjesta gdje vaš agent može pronaći informacije kako bi dao bolje odgovore. Kada dodate ove izvore, vaš agent može povući podatke vaše organizacije s mjesta poput Power Platform, Dynamics 365, web stranica i drugih sustava ili usluga koje vaša tvrtka koristi.

Ovi izvori rade zajedno s AI-jem kako bi pomogli vašem agentu da odgovara preciznije na korisnička pitanja, što se postiže kroz ono što se naziva **generativna orkestracija**.

### 🌿 Što je generativna orkestracija u kontekstu agenata?

Generativna orkestracija znači da agent koristi AI kako bi dinamički odlučio kako odgovoriti na pitanje kombinirajući svoje ugrađene jezične vještine s informacijama iz dodanih izvora znanja.

Kada korisnik postavi pitanje, agent:

- Razumije pitanje koristeći AI.
- Može pitati korisnika za nedostajuće informacije generirajući pitanja u hodu.
- Odabire najrelevantnije izvore znanja.
- Pretražuje te izvore za odgovore.
- Generira prirodan, koristan odgovor koristeći informacije koje je pronašao.

### 🏦 Zašto su izvori znanja važni?

1. **Pametniji odgovori** - kada dodate izvore znanja, vaš agent može dati bolje, preciznije odgovore koristeći stvarne podatke vaše organizacije.

1. **Manje ručnog rada** - ne morate pisati svaki mogući odgovor. Agent može pretraživati dodane izvore i automatski odgovarati.

1. **Koristi pouzdane informacije** - vaš agent može povući odgovore iz sustava koje već koristite, poput Dataverse, SharePointa ili web stranica vaše tvrtke, tako da korisnici imaju pouzdane informacije iz izvora istine.

1. **Radi s generativnim AI-jem** - izvori znanja i AI pomažu vašem agentu da razumije pitanja i odgovara prirodno, čak i ako pitanje nije unaprijed programirano ili dodano kao početni upit.

1. **Fleksibilan i proširiv** - možete dodati izvore znanja u bilo kojem trenutku tijekom postavljanja ili kasnije, vaš agent postaje pametniji kako se vaše potrebe mijenjaju.

### ✨ Primjer

Zamislite da kreirate agenta koji pomaže zaposlenicima s HR pitanjima. Dodate dokument o HR politici vaše tvrtke i SharePoint stranicu kao izvore znanja.

Kada zaposlenik pita, _“Koliko dana godišnjeg odmora imam pravo?”_, agent koristi generativnu orkestraciju kako bi pretražio te izvore i odgovorio s točnom politikom, bez da ste ručno napisali taj odgovor. To vam štedi vrijeme jer ne morate predvidjeti svako moguće pitanje koje bi zaposlenik mogao postaviti o svojim pravima.

## Vrste izvora znanja koji se mogu dodati

1. **Javne web stranice**
    - **Što radi:** Pretražuje specifične web stranice (poput stranice vaše tvrtke) koristeći Bing.
    - **Zašto je korisno:** Odlično za povlačenje javno dostupnih informacija poput FAQ-a ili detalja o proizvodima.

1. **Dokumenti**
    - **Što radi:** Koristi dokumente koje direktno učitate u vašeg agenta, poput PDF-ova ili Word datoteka. Ove učitane datoteke sigurno se pohranjuju u Dataverse.
    - **Zašto je korisno:** Omogućuje vašem agentu da odgovara na pitanja na temelju internih vodiča, priručnika ili politika.

1. **SharePoint**
    - **Što radi:** Povezuje se s SharePoint mapama ili datotekama koristeći Microsoft Graph Search.
    - **Zašto je korisno:** Idealno za pristup timskim dokumentima, HR politikama ili projektnim datotekama pohranjenim u SharePointu.

1. **Dataverse**
    - **Što radi:** Koristi strukturirane podatke iz vaše Dataverse okoline, tablica i redaka, te može primijeniti sinonime i definicije pojmova za poboljšanje odgovora agenta.
    - **Zašto je korisno:** Kada trebate pretraživati podatke vaše organizacije pohranjene u Dataverse, poput informacija o klijentima.

1. **Znanje u stvarnom vremenu s konektorima**
    - **Što radi:** Omogućuje vašem agentu pristup živim podacima iz drugih sustava vaše organizacije poput Salesforcea, ServiceNowa, Dynamics 365, AzureSQL-a, Databricksa i drugih tijekom razgovora, koristeći korisničke dozvole.
    - **Zašto je korisno:** Pruža ažurirane, sigurne i točne odgovore bez pohranjivanja ili dupliciranja podataka, čineći vašeg agenta pametnijim i sigurnijim.

1. **Azure AI Search**
    - **Što radi:** Omogućuje vašem agentu pretraživanje velikih skupova dokumenata pohranjenih u Azureu koristeći semantičko i vektorsko pretraživanje za razumijevanje korisničkih pitanja.
    - **Zašto je korisno:** Pruža točne, pouzdane odgovore iz složenih izvora podataka, podržava citate i dobro se skalira za velike kolekcije dokumenata s kontrolama sigurnog pristupa.

## 🔒 Napomena o sigurnosti

### Autentifikacija izvora znanja

Neki izvori, poput SharePointa i Dataverse, zahtijevaju autentifikaciju korisnika. To znači da će agent referencirati podatke u svom odgovoru samo ako ih korisnik smije vidjeti. Dok drugi izvori mogu zahtijevati dodatnu konfiguraciju kako bi se agent povezao s njima, poput Azure AI Searcha koji zahtijeva Azure račun i specifikaciju vrste autentifikacije.

## Poboljšanje odgovora vašeg agenta u Copilot Studiju

Nakon što je vaš agent kreiran kroz iskustvo kreiranja razgovora, poželjet ćete testirati svog agenta u odnosu na upute koje je Copilot generirao iz vašeg upita. Poboljšanje odgovora vašeg agenta u Copilot Studiju odnosi se na osiguravanje da jasno razumije vaše ciljeve i ima pristup pravim informacijama.

1. **Doradite upute za agenta** - ovdje govorite svom agentu kako bi se trebao ponašati. Koristite jasne, specifične upute.

    Na primjer:

    ✅ “Ponašaj se kao prijateljski agent korisničke podrške koji jednostavno objašnjava stvari.”

    ❌ “Budi koristan.” (Previše nejasno)

1. **Provjerite ton i jezik** - osigurajte da ton agenta odgovara vašoj publici.

    Možete ga postaviti da bude:

    - Prijateljski i neformalan.
    - Profesionalan i sažet.
    - Podržavajući i strpljiv.

1. **Dodajte ili ažurirajte izvore znanja** - ako vaš agent treba odgovarati na pitanja o određenoj temi, osigurajte da ima pristup pravim informacijama.

    - Dodajte poveznice na web stranice, dokumente ili FAQ-ove.
    - Održavajte sadržaj ažuriranim.
    - Koristite jasne, dobro strukturirane informacije.

1. **Koristite teme i okidače** - Ako vaš agent treba obavljati specifične zadatke ili razgovore, možete kreirati teme s okidačima fraza. To pomaže preciznije voditi razgovor. Više o tome naučit ćemo u sljedećoj lekciji.

1. **Testirajte s pravim pitanjima** - pokušajte postaviti agentu vrste pitanja koje bi korisnici mogli postaviti.

    Ako odgovori nisu dobri:

    - Prilagodite sistemske upute.
    - Dodajte više primjera ili znanja.
    - Preformulirajte svoja pitanja kako biste vidjeli kako odgovara.

1. **Pregledajte i iterirajte** - poboljšanje agenta je kontinuirani proces!

    Nakon objavljivanja:

    - Prikupljajte povratne informacije od korisnika.
    - Pratite uobičajena pitanja ili nejasnoće.
    - Nastavite prilagođavati postavke agenta.

## 🧪 Laboratorij 06: Kreirajte prilagođenog agenta u Copilot Studiju

Sada ćemo naučiti kako kreirati prilagođenog agenta koji može komunicirati s vašim podacima

- [6.1 Koristite prirodni jezik za kreiranje agenta s Copilotom](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.2 Dodajte interni izvor znanja koristeći SharePoint stranicu](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.3 Dodajte interni izvor znanja učitavanjem dokumenta](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.4 Testirajte agenta](../../../../../docs/recruit/06-create-agent-from-conversation)

### ✨ Primjer uporabe
Koristit ćemo isti scenarij iz [Lekcije 03 - Kreiranje deklarativnog agenta za Microsoft 365 Copilot](../03-create-a-declarative-agent-for-M365Copilot/README.md#use-case-scenario)

**Kao** zaposlenik

**Želim** brzo i točno dobiti pomoć od IT helpdesk agenta za probleme poput problema s uređajima, rješavanja problema s mrežom, postavljanja pisača

**Kako bih mogao** ostati produktivan i riješiti tehničke probleme bez odgađanja

Krenimo!

### ✨ Preduvjeti

- **SharePoint stranica**

Koristit ćemo **Contoso IT** SharePoint stranicu iz [Lekcije 00 - Postavljanje tečaja - Korak 3: Kreiranje nove SharePoint stranice](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

Ako niste postavili **Contoso IT** SharePoint stranicu, vratite se na [Lekciju 00 - Postavljanje tečaja - Korak 3: Kreiranje nove SharePoint stranice](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

- **Rješenje**

Koristit ćemo rješenje **Contoso Helpdesk Agent** iz [Lekcije 04 - Kreiranje rješenja za vašeg agenta](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

Ako niste postavili rješenje **Contoso Agent**, vratite se na [Lekciju 04 - Kreiranje rješenja za vašeg agenta](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

### 6.1 Koristite prirodni jezik za kreiranje agenta s Copilotom

!!! warning "Pitanja Copilota mogu se razlikovati između sesija"

    Iskustvo konverzacijskog kreiranja s Copilotom može se razlikovati svaki put, pri čemu se pružena pitanja za smjernice mogu malo razlikovati od prethodnih.

1. Idite na početnu stranicu Copilot Studija i u polje unesite sljedeći upit koji opisuje IT helpdesk agenta. Upit uključuje cilj agenta, kontekst, očekivane zadatke i format odgovora agenta.

    ```text
    You are an IT help desk agent. Your goal is to assist users with their IT issues. You can access information from our company's knowledge base at https://support.microsoft.com/en-us. Your responses should be polite and helpful. If a user reports a slow computer, ask about the age of the device, current software versions, and if they've recently installed any new programs. If a user is experiencing trouble logging into their email, guide them through password reset procedures. You should be concise and informative, using step-by-step instructions with bullet points when appropriate.
    ```

      ![Unesite upit](../../../../../translated_images/6.1_01_Prompt.c4be2ff2cac9fde3659f2e7016e48f01860b55523d3320b3b8450ef2fcb1f51a.hr.png)

1. Zatim će se učitati iskustvo konverzacijskog kreiranja s Copilotom. Vidjet ćete da Copilot obrađuje vaš upit.

      ![Iskustvo konverzacijskog kreiranja s Copilotom](../../../../../translated_images/6.1_02_ConversationalCreationExperienceLoads.115eaf4e5a15c1b60bc0d25c97a0d97d462d6c740cfed5de369b2bd8fd1cc8bc.hr.png)

1. Copilot potvrđuje da je agent postavljen prema pruženim uputama i traži potvrdu o imenu agenta. Zamolit ćemo Copilota da našeg agenta nazove,

       ```text
       Contoso Helpdesk Agent
       ```

      ![Preimenovanje agenta](../../../../../translated_images/6.1_03_AgentName.a848acea10cd1d3d6ba68fea2b0e094ecbd130a124413e3c8134198c81654833.hr.png)

1. Copilot izvršava zahtjev i vidjet ćemo da je ime agenta ažurirano u panelu agenta. Zatim nas Copilot traži da doradimo upute. Pita nas kako bi trebao odgovarati na određene probleme, a mi ćemo zatražiti da prizna problem, pruži primjere tema za odgovore i formatira odgovor u obliku točaka.

    Kopirajte i zalijepite sljedeće te pošaljite zahtjev Copilotu.

       ```text
       Prioritet dajte hitnim zahtjevima. Primjeri IT problema ili scenarija za pomoć: problemi s uređajima, povezivanje na mrežu, problemi s prijavom. Prilikom rješavanja problema, prvo priznajte njihov problem i odgovorite s empatijom, zatim pružite korak-po-korak upute koristeći točke i pitajte trebaju li dodatnu pomoć.
       ```

      ![Doradite upute agenta](../../../../../translated_images/6.1_04_RefineInstructions.9575407dbc12e0399691068d20e0d0252bb8b8f839cf53ee9d715fe2c16afa70.hr.png)

1. Upute agenta bit će ažurirane nakon što Copilot primi zahtjev. Primijetite kako se na desnoj strani panela sada pojavljuju početni upiti. Oni su formirani na temelju naših uputa.

    Zatim Copilot traži javne web stranice kako bi se agentova znanja temeljila na njima.

    Kopirajte i zalijepite sljedeće te pošaljite zahtjev Copilotu.

      ```text
      https://support.microsoft.com
      ```

      ![Dodajte javno dostupnu web stranicu](../../../../../translated_images/6.1_05_KnowledgeSource.3aec8d869b73d273f88c62cf99bb2f731df83a83c1ca54d92d6e96b86a570637.hr.png)

1. Javno dostupna web stranica bit će dodana kao izvor znanja. Copilot pita trebaju li se dodati dodatni izvori znanja. Ne trebamo dodavati dodatne javne web stranice.

    Kopirajte i zalijepite sljedeće te pošaljite zahtjev Copilotu.

      ```text
      Proceed with setup
      ```

      ![Nastavite s postavljanjem](../../../../../translated_images/6.1_06_ProceedWithSetup.11ceb9ccccccd19418711681d42b602ee223ebd017d6bf300088de84d1d35f1d.hr.png)

1. Copilot potvrđuje da je postavljanje našeg Contoso Helpdesk Agenta završeno, ali dodat ćemo još jednu izmjenu. Zatražit ćemo da naš agent ne odgovara na pitanja vezana uz HR. Ovo omogućuje našem agentu da zna da ne bi trebao odgovarati na HR pitanja koja postavljaju korisnici.

    Kopirajte i zalijepite sljedeće te pošaljite zahtjev Copilotu.

       ```text
       Ne pružajte pomoć za pitanja vezana uz HR, primjeri su: Koliko imam dana godišnjeg odmora? Koliko imam dana bolovanja? Koji je URL našeg portala za plaće?
       ```

      ![Ne odgovarajte na HR pitanja](../../../../../translated_images/6.1_07_DoNotTalkAbout.d9ccbbd15b9793e1642b365be6968548f6f250be5d541f1ad06eb9f12985e94f.hr.png)

1. Upute će biti ažurirane kako ne bi pružale pomoć za pitanja vezana uz HR. Ne trebamo dalje ažurirati, naš agent je spreman za kreiranje.

      ![Upute agenta ažurirane](../../../../../translated_images/6.1_08_AgentInstructionsUpdated.4de1112eeb5c8e2e2fe03fcbc6d332bdc3b1de740d9a5ab6b1ec30e27e241096.hr.png)

1. Prije nego kreiramo našeg agenta, učinit ćemo nekoliko stvari.

    Prvo, odaberite karticu **Configure** kako biste vidjeli detalje agenta definirane iz naše konverzacije s Copilotom. Ovdje ćete vidjeti ime, opis, upute, znanja i predložene/početne upite.

      ![Pregled detalja agenta](../../../../../translated_images/6.1_09_ViewAgentDetails.72c7f66721d6ac354bcc7186204bb0ad169456b0b7756f5e5a5e0f090e802a57.hr.png)

1. Drugo, testirajmo našeg agenta. Kopirajte i zalijepite sljedeće te pošaljite pitanje našem agentu.

       ```text
       Kako mogu provjeriti status jamstva za svoj Surface?
       ```

      ![Testirajte agenta](../../../../../translated_images/6.1_10_TestAgent.8b1a0f1d98f4fa5b61336e1c4ac6d77b4822283314c2941cb0e04bf5247d8489.hr.png)

1. Odgovor na pitanje će se prikazati gdje su odgovori u formatu korak-po-korak vodiča koristeći točke. Odlično, naš agent radi! 🙌🏻

      ![Odgovor agenta](../../../../../translated_images/6.1_11_AgentResponse.c5fb305335b8e9b456b0f75ec9e237d4abbc3e9a1a6976e14bb656f1adffb14a.hr.png)

1. Na kraju, dvostruko provjerimo rješenje u kojem će naš agent biti kreiran, je li to rješenje koje smo kreirali i odabrali kao preferirano rješenje u [Lekciji 04 - Kreiranje novog rješenja](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Odaberite **ikonu s tri točke (...)** i odaberite **Update Advanced Settings**.

      ![Ažurirajte napredne postavke](../../../../../translated_images/6.1_12_UpdateAdvancedSettings.5943949ae7c9f492fb90779b0284283deb4186f14cd6588c46920f8e50d8d6d0.hr.png)

1. Pojavit će se modal **Advanced Settings** i možemo vidjeti da je naše rješenje kreirano ranije odabrano prema zadanim postavkama. To je zbog odabira našeg rješenja kao preferiranog rješenja u [Lekciji 04 - Kreiranje novog rješenja](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Odaberite **Cancel.**

      ![Pregled naprednih postavki](../../../../../translated_images/6.1_13_AdvancedSettings.fff0861831346d5bef4e7731fed83073aca6d17aa940633040f65b1f300aee15.hr.png)

1. Sada kreirajmo našeg prilagođenog agenta! Odaberite **Create**.

      ![Odaberite Create](../../../../../translated_images/6.1_14_CreateAgent.7330a5fbe44a0664f35c5b5502e499f6dd3bad55d13094ef6c22608e8f8831b1.hr.png)

1. Copilot Studio će započeti s postavljanjem našeg agenta.

      ![Postavljanje agenta](../../../../../translated_images/6.1_15_SettingUpAgent.34028a37bc2922eae13d0a18bb468bd738608b4de948192d89c3a2680fff2496.hr.png)

1. Kada naš agent bude postavljen, možemo vidjeti detalje agenta koji odražavaju ono što smo zatražili tijekom našeg iskustva konverzacijskog kreiranja s Copilotom. Pomaknite se dolje kako biste pregledali agenta gdje ćete vidjeti ime, opis, upute, izvore znanja i predložene upite. Način orkestracije je prema zadanim postavkama omogućen, a zadani model se koristi za model odgovora agenta.

      ![Agent kreiran](../../../../../translated_images/6.1_16_AgentCreated.91edb1939b33d158930cd385c0d97c320958504e224ffc163ed5030b0cdc72a7.hr.png)

      ![Izvori znanja](../../../../../translated_images/6.1_17_KnowledgeSources.00f1ed0b7f405e4820971834fb75e39a80659cf1b9eeeee42d861bfc4656240f.hr.png)

      ![Predloženi upiti](../../../../../translated_images/6.1_18_SuggestedPrompts.20b84b9420858de8485460cc50a8e73798b08bb2022c946899adcbf9b484e0f0.hr.png)

1. Sada testirajmo našeg novokreiranog agenta. U **Test** panelu na desnoj strani odaberite ikonu **Activity Map**.

      ![Odaberite Activity Map](../../../../../translated_images/6.1_19_ActivityMap.b2e6c77c69fd953818dc73b4dbe2e6d46529cf105d7a4a18c590d15c0b717cf4.hr.png)

1. Unesite sljedeće pitanje u **Test** panel.

       ```text
       Kako mogu pronaći ključ proizvoda za Windows 11?
       ```

      ![Testirajte novokreiranog agenta](../../../../../translated_images/6.1_20_TestAgent.a9d3a761477c9b79facd132c173ec886d808320ad2cbc0347066a20c0f9dd669.hr.png)

1. Zatim će se učitati Activity Map koji nam u stvarnom vremenu pokazuje koji put agent obrađuje. U ovom scenariju, naš agent je razumio pitanje i pretražuje izvore znanja. Trenutno imamo jedan izvor koji je javna web stranica koju smo ranije dodali koristeći Copilot, što agent pregledava.

      ![Pregled izvora znanja](../../../../../translated_images/6.1_21_ReviewingSources.78068042898e2960667393c931e120dbe80f6b74c9af222b79446f7a82d5c757.hr.png)

1. Naš agent zatim odgovara s odgovorima koji su navedeni u obliku točaka, kako je definirano u uputama. Odgovor ima reference na web stranice iz kojih je agent formirao svoj odgovor. Ovo omogućuje korisnicima da provjere izvor odgovora.

      ![Reference u odgovoru](../../../../../translated_images/6.1_22_Response.44a088e80f2a9fac74bcd364571f1ebb900b43e9e647089ef51d39b809b0f0e9.hr.png)

1. Također možete pregledati odgovor i njegove izvore pomicanjem dolje u **Knowledge modal** u Activity Mapu.

      ![Referencirani izvori](../../../../../translated_images/6.1_23_ReferencedSources.ca8e41855284446d121a34fd9d8d667e05016f5eda741adcf7f356ac2c59c559.hr.png)

Čestitamo! Kreirali ste svog prvog prilagođenog agenta s Copilotom u Copilot Studiju 🙌🏻

### 6.2 Dodavanje internog izvora znanja koristeći SharePoint stranicu

Ranije s Copilotom, dodali smo javnu web stranicu kao vanjski izvor znanja za našeg agenta tijekom iskustva konverzacijskog kreiranja. Sada ćemo dodati interni izvor znanja koristeći SharePoint stranicu. Ovo će biti SharePoint stranica koju ste kreirali tijekom [Lekcije 00 - Postavljanje tečaja](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. Odaberite **+ Add knowledge**.

      ![Odaberite Add knowledge](../../../../../translated_images/6.2_01_AddKnowledge.5e441f7e3b0ebb25218bece75394ecf4c8c3a60e1b5d8ea15ca020546352f256.hr.png)

1. Odaberite **SharePoint**.

      ![Odaberite SharePoint](../../../../../translated_images/6.2_02_SelectSharePoint.5bd29d31cc76f581db3eef474731fc2dfce4ef1dab86d9cc11716323ba726408.hr.png)

1. Zalijepite **adresu SharePoint stranice** kreirane u [Lekciji 00 - Postavljanje tečaja](../00-course-setup/README.md#step-4-create-new-sharepoint-site) u polje SharePoint URL i odaberite **Add**.

      ![Unesite URL SharePoint stranice](../../../../../translated_images/6.2_03_AddSharePointURL.974c251d9690524a8bfa4c9dd930af3d834245749fb9f1fda508c3b1f9773827.hr.png)

1. Ažurirajte **ime** SharePoint stranice na `Contoso IT` i odaberite **Add**.

      ![Ažurirajte ime SharePoint stranice i dodajte je agentu](../../../../../translated_images/6.2_04_UpdateNameAddToAgent.46a814c09586fe135bffb77814ba13d0593f25feaaa989174c97e80345f03866.hr.png)

1. SharePoint stranica je sada dodana kao izvor znanja sa statusom _Ready_. Stupac Status će pokazati je li izvor znanja uspješno učitan/povezan ili postoji problem.

      ![Status SharePoint stranice](../../../../../translated_images/6.2_05_SharePointStatus.90a9001978f31c5d4b183d5ecc4869c81dd9fc1bb8a6b1ef4675fcb51d52f8e5.hr.png)

### 6.3 Dodavanje internog izvora znanja učitavanjem dokumenta

Sada ćemo dodati još jedan interni izvor znanja učitavanjem dokumenta direktno našem agentu.

1. Odaberite **Add knowledge**.

      ![Odaberite Add knowledge](../../../../../translated_images/6.3_01_AddKnowledge.d93caa805efb7e2a433d9777f8eb1789dc5daf4f9ebe95da2a74a2b57cffdd33.hr.png)

1. Odaberite **Upload file** ili **Select to browse**.

      ![Odaberite upload datoteka](../../../../../translated_images/6.3_02_UploadFile.662de4f3916bfa3f34a6699a9a45846e64e71a70dfecbc656fb5b511792de6b6.hr.png)

1. Preuzmite ovu [uzornu datoteku](../../../../../docs/recruit/06-create-agent-from-conversation/assets/Contoso_Guest_WiFi_Connection_Guide.docx "download") i odaberite je u File Exploreru. Odaberite **Open**.

      ![Odaberite dokument](../../../../../translated_images/6.3_03_SelectFile.077d73491dc6ff1f6114d259261ee68334c4da182c3b55233468637d1989f14c.hr.png)

1. Datoteka je odabrana za učitavanje. Zatim odaberite **Add to agent**.

      ![Odaberite Add to Agent](../../../../../translated_images/6.3_04_AddToAgent.1eec469d6d28c22959c8d7f3ad39aa0df5e07adfdb85ce1e21c0c4fe31c27db5.hr.png)

1. Dokument će biti u procesu dodavanja agentu. Pričekajte dok učitavanje ne bude završeno, nemojte zatvarati prozor preglednika. Status dokumenta će u početku pokazivati _In progress_, pričekajte dok se status ne ažurira na **Ready** prije testiranja vašeg agenta.

      ![Status datoteke](../../../../../translated_images/6.3_05_FileStatus.2029b8aa0109a6f46372291e9bba33429c2ebd572efa81702a73cae91fbf3a90.hr.png)

Sada testirajmo našeg agenta!

### 6.4 Testiranje agenta

Testirat ćemo naša tri izvora znanja postavljanjem pitanja našem Contoso Helpdesk Agentu.

1. Odaberite ikonu **refresh** u test panelu, zatim odaberite ikonu **activity map**.

      ![Ikona za osvježavanje](../../../../../translated_images/6.4_01_RefreshAndActivityMap.c24ebc6c277786dab75941dac0b6e55f3dbb244b29fb791c87e4aba5c4a56c81.hr.png)

1. Unesite sljedeće pitanje kako biste testirali naš javni web (vanjski) izvor znanja.

      ```text
      How can I find the serial number on my Surface device?
      ```

      ![Unesite upit za testiranje izvora znanja s web stranice](../../../../../translated_images/6.4_02_TestQuestion1.3a5aeaaa72a9578a05edd4575275e1ba60ecaf8c7377ab13872619580e0309f9.hr.png)

1. Zatim ćete vidjeti kako agent pregledava izvore znanja i pruža odgovor koristeći izvor znanja s web stranice.
![Web stranica navedena u odgovoru](../../../../../translated_images/6.4_03_ReviewingSources.a56742505402eab51b423b543c814242728ff7947e443360740b3e5dac82ba65.hr.png)

1. Odgovor će biti vraćen, primijetite kako postoje reference na web stranicu iz koje je odgovor formiran. Ako se pomaknete dolje u modal znanja na karti aktivnosti, vidjet ćete ostale izvore znanja koje je agent pretraživao, a to su SharePoint stranica i prenesena datoteka.

    Međutim, oni nisu korišteni jer je u odjeljku **Referenced sources** referenciran samo izvor znanja s web stranice. Odgovor je utemeljen na izvoru znanja s web stranice. Ako odaberete reference, bit ćete preusmjereni na web stranicu.

![Izvori znanja referencirani i pretraženi](../../../../../translated_images/6.4_04_ReferencedSources.2fb91e8ed7cac8196c3cc1e43006512d4138adb4f240bdab66cd2af5fd1ec7c6.hr.png)

1. Sada ćemo testirati i naš izvor znanja s SharePoint stranice i izvor znanja iz dokumenta u jednoj poruci. Unesite sljedeće pitanje.

      ```text
      How can I access our company Contoso VPN? How do guests connect to the Contoso Guest wifi?
      ```

![Testiraj izvore znanja SharePoint i dokumenta](../../../../../translated_images/6.4_05_TestQuestion2.f77ce87578b59386ec5491716996aff9247c5e5ad458a51226276238adb282f3.hr.png)

1. Ponovno ćete vidjeti kako agent pregledava tri izvora znanja kako bi generirao odgovor na pitanja iz naše jedne poruke. Agent odgovara na oba pitanja u jednoj poruci i zasebno referencira SharePoint stranicu i dokument iz kojih je generirao svoj odgovor.

    U modalu znanja na karti aktivnosti vidjet ćete SharePoint stranicu i dokument korištene kao referentne izvore. Imate potpunu vidljivost o tome koji su izvori znanja korišteni za odgovaranje na oba pitanja.

![Referencirani izvori znanja](../../../../../translated_images/6.4_06_ReferencedSources.caf049dac28b4317c39b074b481f5d7d5b1b92fd792fc4b796fec0c1575f9581.hr.png)

1. Uvijek je dobro provjeriti je li generirani odgovor točan. Odaberite referencu na SharePoint stranicu i učitat će se SharePoint stranica s FAQ-ovima gdje možete pregledati upute za VPN.

![Pregledaj SharePoint stranicu](../../../../../translated_images/6.4_07_VerifySharePoint.6ee48515fedf37a62564ddc388c2452751ed5777cda321d887c315c2de78d293.hr.png)

1. Zatim odaberite referencu na dokument i pojavit će se modal s tekstom iz dokumenta koji odražava odgovor.

![Pregledaj dokument](../../../../../translated_images/6.4_08_VerifyDocument.0f0680b63e6bdd0b558eb287e85965b87ab820e12b25b1e0965f8ebbde795222.hr.png)

Agent može odgovoriti na više pitanja u jednoj poruci, pretražiti izvore znanja + referencirati izvore znanja u svom odgovoru. Uvijek provjerite je li odgovor točan pregledavajući reference.

## ✅ Misija završena

Čestitamo! 👏🏻 Naučili ste kako koristiti prirodni jezik za stvaranje vlastitog prilagođenog agenta koji može komunicirati koristeći vaše podatke iz tri različita izvora znanja 🙌🏻

Ovo je kraj **Laboratorija 06 - Stvaranje agenta s Copilotom**, odaberite poveznicu ispod za prelazak na sljedeću lekciju. Vaš prilagođeni agent stvoren u ovom laboratoriju koristit će se u laboratoriju sljedeće lekcije.

⏭️ [Prijeđite na lekciju **Dodavanje nove teme s okidačem**](../07-add-new-topic-with-trigger/README.md)

Dobrodošli u elitu. Sada znate kako stvoriti digitalne agente koji govore vašim jezikom, koriste vaše podatke i podržavaju vaš tim. Nastavite dalje—vaša misija tek počinje.

## 📚 Taktički resursi

🔗 [Brzi početak: Stvaranje i implementacija agenta](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-get-started?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172617-ebenitez)

🔗 [Stvaranje i brisanje agenata](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-172617-ebenitez)

🔗 [Ključni koncepti - Autorstvo agenata](https://learn.microsoft.com/microsoft-copilot-studio/authoring-fundamentals/?WT.mc_id=power-172617-ebenitez)

📺 [Stvaranje prilagođenog agenta koristeći prirodni jezik](https://aka.ms/ai-in-action/copilot-studio/ep1)

📺 [Dodavanje znanja vašim agentima](https://aka.ms/ai-in-action/copilot-studio/ep2)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/06-create-agent-from-conversation" alt="Analitika" />

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.