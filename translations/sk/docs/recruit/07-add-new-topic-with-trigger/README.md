<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-20T17:16:40+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "sk"
}
-->
# 🚨 Misia 07: Pridanie novej témy s triggerom a uzlami

## 🕵️‍♂️ KRYCÍ NÁZOV: `OPERÁCIA ZOSTAŤ PRI TÉME`

> **⏱️ Časový rámec operácie:** `~60 minút`

🎥 **Pozrite si prehľad**

[![Náhľad videa triggeru](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.sk.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Pozrite si prehľad na YouTube")

## 🎯 Misia v skratke

Vytvorili ste agenta. Počúva, učí sa a odpovedá na otázky - ale teraz je čas byť viac taktický. V tejto misii sa ponoríte hlboko do jeho fungovania a naučíte svojho agenta presne reagovať na konkrétne podnety.

S Témami a Triggermi váš agent dokáže:

- Rozpoznať zámer

- Smerovať konverzácie pomocou logiky

- Zbierať a ukladať premenné

- Spúšťať toky a vykonávať akcie

Nevytvárate len dialóg, ale zapájate jeho rozhodovací mozog. Vitajte v Neurálnom Nexus.

## 🔎 Ciele

V tejto misii sa naučíte:

1. Pochopiť, čo sú témy a ich úlohu pri vytváraní štruktúrovaných konverzácií pre vášho agenta
1. Naučiť sa anatómiu tém vrátane trigger fráz a konverzačných uzlov
1. Preskúmať rôzne typy konverzačných uzlov a ako používať Power Fx pre dynamickú logiku
1. Vytvoriť vlastné témy od základu na riešenie konkrétnych požiadaviek a úloh používateľov
1. Vybudovať funkčnú tému, ktorá sa pripája k údajom SharePointu pomocou konektorov a nástrojov

## 🤔 Čo je téma?

Téma je štruktúrovaná konverzácia, ktorá pomáha vášmu agentovi reagovať na konkrétne otázky alebo úlohy používateľov. Predstavte si tému ako mini-konverzáciu alebo úlohu, ktorú váš agent dokáže zvládnuť. Každá téma je navrhnutá tak, aby reagovala na konkrétnu otázku alebo požiadavku používateľa.

### 🌌 Účel témy

Existujú tri bežné účely tém na základe potrieb používateľov:

**Informačné** - odpovedajú na otázky ako:

- `Čo je …?`
- `Kedy bude …?`
- `Prečo …?`
- `Môžete mi povedať …?`

**Dokončenie úlohy** - pomáhajú používateľom _niečo urobiť_:

- `"Chcem …"`
- `"Ako …?"`
- `"Potrebujem …?"`

**Riešenie problémov** - riešia problémy:

- `Niečo nefunguje …`
- `Narazil som na chybové hlásenie …`
- `Vidím niečo neočakávané …?`

Môžete tiež vytvoriť témy pre nejasné otázky ako `Potrebujem pomoc`, ktoré žiadajú používateľov o viac detailov pred pokračovaním.

## 🐦 Prečo sú témy užitočné?

Témy vám pomáhajú:

- Organizovať znalosti vášho agenta.

- Urobiť konverzácie prirodzenými.

- Efektívne riešiť problémy používateľov.

## 🪺 Typy tém

1. **Systémové témy** - sú zabudované a riešia bežné udalosti ako:
    - Začatie konverzácie
    - Ukončenie konverzácie
    - Riešenie chýb
    - Požiadanie používateľov o prihlásenie
    - Eskalácia na ľudského agenta

1. **Vlastné témy** - vytvárate ich na riešenie konkrétnych úloh alebo otázok ako:
    - Žiadosť o dovolenku zamestnanca
    - Požiadavka na nové alebo náhradné zariadenie

![Typy tém](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.sk.png)

## 🧬 Anatómia témy

Každá téma zvyčajne obsahuje nasledujúce.

### 🗣️ Trigger frázy

Sú to slová alebo vety, ktoré môžu používatelia povedať na spustenie témy.

**Príklady:**

Pre tému žiadosti o dovolenku môžu byť trigger frázy:

- `Chcem si vziať dovolenku`
- `Požiadať o dovolenku`
- `Požiadať o voľno`
- `Ako môžem podať žiadosť o dovolenku?`

Pre tému požiadavky na zariadenie môžu byť trigger frázy:

- `Potrebujem nové zariadenie`
- `Môžem požiadať o zariadenie?`
- `Môžete mi pomôcť s požiadavkou na zariadenie`

### 💬 Konverzačné uzly

Téma sa skladá z uzlov, ktoré sú kroky, ktoré agent nasleduje po spustení témy. Tieto kroky spájate, aby ste vytvorili konverzačný tok, ktorý váš agent nasleduje pri interakcii s používateľmi.

Predstavte si ich ako pokyny alebo akcie, ako napríklad:

- Kladenie otázok používateľovi
- Posielanie správ
- Volanie externých služieb, ako je systém správy dovoleniek
- Nastavenie alebo kontrola premenných
- Používanie podmienok na vetvenie konverzácie
- Presmerovanie na inú tému

![Konverzačné uzly](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.sk.png)

Nasledujú hlavné typy uzlov, ktoré môžete pridať do agenta:

#### Poslať správu

- **Účel** - posiela správu používateľovi.
- **Príklad** - `Ďakujem za vašu požiadavku! Pomôžem vám s tým.`

Tento uzol umožňuje vášmu agentovi posielať správy používateľom, ktoré môžu byť jednoduchý text alebo bohatý obsah ako obrázky, videá, karty, rýchle odpovede a adaptívne karty.

Môžete personalizovať správy pomocou premenných, pridať viacero variácií správ pre rozmanitosť a dokonca prispôsobiť výstup reči pre kanály s podporou hlasu.

!!! tip
    Predstavte si to ako blok "povedz niečo", ktorý pomáha vášmu agentovi jasne a interaktívne komunikovať s používateľmi.

#### Položiť otázku

- **Účel** - kladie používateľovi otázku a čaká na jeho odpoveď.
- **Príklad** - `Aké sú vaše dátumy dovolenky?`

Tento uzol sa používa na kladenie otázok používateľom počas konverzácie a ukladanie ich odpovedí do premenných na neskoršie použitie.

Môžete prispôsobiť typ otázky, ako je textový vstup, alebo použiť entity pre definovaný zoznam hodnôt, z ktorých si používateľ vyberá, a definovať, ako by sa mal agent správať, ak používateľ dá neplatnú odpoveď alebo otázku preskočí.

Podporuje tiež bohatý obsah ako obrázky a rýchle odpovede a umožňuje jemne doladiť nastavenia validácie, opakovania a prerušenia, aby konverzácia plynula hladko.

!!! tip
    Predstavte si to ako blok "spýtaj sa a počúvaj", ktorý pomáha vášmu agentovi interagovať s používateľmi štruktúrovaným spôsobom, ktorý definujete.

#### Položiť otázku s adaptívnou kartou

- **Účel** - poslať bohatú, interaktívnu kartu pomocou JSON.
- **Príklad** - karta, ktorá zobrazuje výber dátumu v kalendári, aby si používateľ mohol vybrať dátum.

Tento uzol zobrazuje bohaté, interaktívne karty, ktoré môžu používatelia vyplniť a odoslať, ako sú formuláre s textovými políčkami, tlačidlami a obrázkami. Zachytáva vstup používateľa a ukladá ho do premenných, ktoré váš agent môže neskôr použiť v konverzácii.

!!! tip
    Predstavte si to ako prispôsobiteľný blok "staviteľ formulárov", ktorý robí vášho agenta viac zapájajúcim a schopným zbierať podrobné informácie od používateľov.

#### Pridať podmienku

- **Účel** - pridať logiku do konverzácie. Kontroluje niečo a rozhoduje, čo robiť ďalej.
- **Príklad** - ak používateľ povie `Áno`, prejdite na ďalší krok. Ak `Nie`, ukončite konverzáciu.

Tento uzol vytvára rozhodovacie body v konverzačnom toku vášho agenta kontrolovaním, či premenná spĺňa určité kritériá. Na základe toho, či je podmienka pravdivá alebo nepravdivá, agent nasleduje rôzne cesty.

!!! tip
    Predstavte si to ako blok "ak-else", ktorý pomáha vášmu agentovi robiť rozhodnutia na základe vstupu používateľa alebo uložených údajov v premenných.

#### Správa premenných

- **Účel** - ukladá alebo maže informácie (nazývané premenné) počas konverzácie.
- **Príklad** - uloží dátum, ktorý používateľ vybral v uzle Položiť otázku, ktorý zobrazuje adaptívnu kartu.

Tento uzol umožňuje ukladať a spravovať informácie počas konverzácie, môže to byť meno používateľa, odpoveď alebo preferencie. Môžete používať rôzne typy premenných, ako sú text, čísla alebo dátumy, a môžu byť obmedzené na jednu tému, zdieľané medzi témami (globálne) alebo dokonca získané zo systému alebo prostredia.

!!! tip
    Predstavte si to ako "pamäťovú skrinku", ktorá pomáha vášmu agentovi pamätať si informácie a používať ich, keď konverzácia s používateľom pokračuje.

#### Správa témy

- **Účel** - presúva konverzáciu na inú tému alebo krok v rámci témy, prenáša konverzáciu alebo ukončuje tému alebo konverzáciu.
- **Príklad** - presmerovanie na tému "Politika dovoleniek".

Tento uzol umožňuje vášmu agentovi preskočiť z jednej témy na druhú bez reštartovania konverzácie, ukončiť tému, preniesť alebo ukončiť konverzáciu, alebo prejsť na iný krok v rámci tej istej témy. Pomáha viesť používateľov cez rôzne časti konverzačného toku hladkým prechodom medzi témami a môžete medzi nimi prenášať premenné, aby ste zachovali kontext.

!!! tip
    Predstavte si to ako blok "prejsť na inú sekciu/krok", ktorý pomáha vášmu agentovi byť flexibilným pri chatovaní s používateľmi.

#### Pridať nástroj

- **Účel** - pripojí sa k nástrojom, ako sú konektory, toky agenta, výzvy, vlastné vyhľadávanie, vyhľadávací dotaz, zručnosti, protokol kontextu modelu.
- **Príklad** - Tok agenta vykonaný po tom, ako používateľ podá žiadosť o dovolenku.

Tento uzol dáva vášmu agentovi schopnosti interagovať s externými systémami alebo vykonávať konkrétne úlohy, ako je posielanie e-mailov, kontrola počasia alebo prístup k databázam. Môžete pridať nástroje pomocou zabudovaných konektorov, vlastných API, tokov agenta, výziev alebo pripojenia k serverom Model Context Protocol (MCP), a dokonca _grafické užívateľské rozhranie_ automatizácie pre desktopové aplikácie prostredníctvom nástroja na používanie počítača.

!!! tip
    Predstavte si nástroje ako "akčné bloky", ktoré dávajú vášmu agentovi super schopnosti robiť veci nad rámec _chatovania_, ako je volanie API, spustenie procesu alebo automatické zbieranie vstupu používateľa.

#### Generatívny uzol odpovedí

- **Účel** - používa veľký jazykový model na generovanie prirodzených, ľudských odpovedí na základe otázky používateľa a akýchkoľvek pripojených údajov.
- **Príklad** - používa pripojený zdroj znalostí, ktorý obsahuje informácie o nárokoch na dovolenku, aby odpovedal na otázky používateľa týkajúce sa žiadostí o dovolenku.

Tento uzol umožňuje vášmu agentovi odpovedať na otázky používateľov pomocou informácií z rôznych zdrojov znalostí, ako sú webové stránky, dokumenty, SharePoint alebo vlastné údaje. Môže byť použitý ako záložné riešenie, keď sa nenájde žiadna zodpovedajúca téma, alebo v rámci témy na poskytovanie podrobnejších, dynamických odpovedí na základe konkrétnych zdrojov, ktoré ste nakonfigurovali pre svojho agenta.

!!! tip
    Predstavte si to ako "inteligentný odpovedací blok", ktorý pomáha vášmu agentovi poskytovať užitočné, presné odpovede vyhľadávaním dôveryhodného obsahu, ktorý definujete.

#### Uzol HTTP požiadavky

- **Účel** - pripojí vášho agenta k externým systémom odoslaním API volaní (napríklad `GET` alebo `POST`) na získanie alebo aktualizáciu údajov.
- **Príklad** - keď sa používateľ pýta na zostatok svojich dní dovolenky, agent vykoná `GET` požiadavku na systém správy dovoleniek a extrahuje `remainingLeaveDays` z odpovede API a odpovie používateľovi s hodnotou.

Tento uzol umožňuje vášmu agentovi pripojiť sa k externým systémom odoslaním REST API volaní, ako sú `GET` alebo `POST` požiadavky. Môžete prispôsobiť požiadavku pomocou hlavičiek, obsahu tela a dokonca použiť Power Fx na zahrnutie dynamických údajov, potom uložiť odpoveď do premenných na neskoršie použitie v konverzácii.

!!! tip
    Predstavte si to ako blok "získať informácie", ktorý pomáha vášmu agentovi komunikovať s inými službami, ako je získavanie detailov používateľa alebo odosielanie údajov do iného systému.

#### Poslať udalosť

- **Účel** - umožňuje vášmu agentovi posielať akcie, ktoré nie sú správy, ako sú systémové aktualizácie alebo spúšťače nástrojov - klientovi alebo kanálu, čím mu pomáha vykonávať úlohy.
- **Príklad** - reagovanie na pripojenie používateľa do chatu zobrazením uvítacej správy.

Tento uzol umožňuje vášmu agentovi posielať akcie, ktoré nie sú správy, externým systémom alebo kanálom, ktoré potom rozhodnú, ako reagovať. Každej udalosti dáte názov a pripojíte hodnotu, ktorá môže byť jednoduché číslo alebo text, premenná alebo Power Fx formula, a tá sa odošle ako JSON objekt.

!!! tip
    Predstavte si to ako blok "tichý spúšťač", ktorý pomáha vášmu agentovi robiť veci na pozadí alebo komunikovať s externými nástrojmi bez potreby, aby používateľ niečo povedal.

## 🏋🏻‍♀️ Používanie Power Fx vo vašich uzloch

V Copilot Studio je Power Fx nízkokódový programovací jazyk používaný na pridanie logiky a dynamického správania vášmu agentovi. Je to ten istý jazyk používaný v Microsoft Power Apps a je navrhnutý tak, aby bol jednoduchý a podobný Excelu, čo ho robí ľahko použiteľným pre vývojárov aj ne-vývojárov.

![Power Fx výraz](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.sk.png)

### Čo Power Fx dokáže v témach

- Nastaviť a manipulovať premenné
      - Príklad: `Set(userName, "Adele Vance")`
- Vytvárať podmienky
      - Príklad: `If(score > 80, "Pass", "Fail")`
- Formátovať a transformovať údaje
      - Príklad: `Text(DateValue, "dd/mm/yyyy")`

### Prečo používať Power Fx?

- **Flexibilné:** môžete vytvárať logiku bez
Toto vám umožňuje opísať, čo chcete, pomocou prirodzeného jazyka, a Copilot za vás vytvorí konverzáciu. To isté platí aj pri úprave vašej témy – použite prirodzený jazyk a Copilot vašu tému skontroluje a upraví.

#### Čo Copilot podporuje

- Môže vytvárať a upravovať:
      - Uzly správ
      - Uzly otázok
      - Uzly podmienok
- Nepodporuje pokročilé nastavenia, ako napríklad spôsob opakovania otázky, ak používateľ neodpovedá, alebo ako spravovať prerušenia počas otázky. Tieto nastavenia však môžete manuálne upraviť, ak je to potrebné.

#### Prečo je to užitočné

- Urýchľuje vývoj s pomocou AI.
- Umožňuje sústrediť sa na logiku a používateľskú skúsenosť namiesto opakovaného nastavovania.
- Uľahčuje iteráciu a zlepšovanie konverzačných tokov s minimálnym úsilím.

#### ✨ Príklady výziev

- **Vytvoriť tému**
      - `Prijať meno, vek a dátum narodenia používateľa a potom zopakovať jeho odpovede`
      - `Získať adresu ulice, štát a PSČ používateľa. Používateľ by mal mať možnosť opakovať každú otázku až 4-krát`

- **Upraviť tému**
      - `Pridať otázku, ktorá sa pýta na dátum narodenia používateľa`
      - `Zhrnúť zozbierané informácie v adaptívnej karte.`

## 👩🏻‍🎨 OK, ako navrhnúť témy pre môjho agenta?

### 🧙🏻‍♂️ Krok 1 - pochopiť, čo používateľ potrebuje

Začnite identifikáciou bežných otázok alebo úloh, ktoré budú používatelia klásť vášmu agentovi. Môžu to byť:

- Otázky, ktoré používatelia často kladú, napríklad: `Aký mám nárok na dni voľna kvôli chorobe?`
- Bežné úlohy, ktoré chcú používatelia vykonať, napríklad podanie formulára
- Problémy, s ktorými sa používatelia často stretávajú, napríklad problémy s prihlásením

### 📦 Krok 2 - Zoskupte scenáre

Organizujte potreby používateľov do troch kategórií na základe toho, čo sme sa naučili skôr – účel témy:

- Informácie - používateľ chce niečo vedieť
- Splnenie úlohy - používateľ chce niečo vykonať
- Riešenie problémov - používateľ potrebuje pomoc pri riešení problému

### 🗺️ Krok 3 - Navrhnite konverzáciu

Nakreslite jednoduchý tok konverzácie, ako by mal agent reagovať:

- Začnite pozdravom alebo potvrdením
- Položte doplňujúce otázky na získanie podrobností
- Poskytnite odpovede alebo vykonajte akcie

!!! tip
    Udržujte konverzáciu krátku a zameranú. Pýtajte sa len na to, čo je nevyhnutné.

### 🔀 Krok 4 - Riešte rôzne typy konverzácií

Navrhnite pre:

- **Jednorazové otázky** - jedna otázka, jedna odpoveď

- **Viacnásobné otázky** - konverzácia tam a späť s doplňujúcimi otázkami

Príklad:

- Používateľ: `Chcem požiadať o dovolenku.`

- Agent: `Samozrejme! Aký dátum by ste chceli, aby vaša dovolenka začala?`

- Používateľ: `15. júla`

- Agent: `Rozumiem. A kedy sa vaša dovolenka skončí?`

- Používateľ: `22. júla.`

- Agent: `Ďakujem! Aký je dôvod vašej dovolenky?`

- Používateľ: `Rodinná dovolenka.`

- Agent: `Ďakujem za podrobnosti. Vaša žiadosť o dovolenku od 15. júla do 22. júla na rodinnú dovolenku bola podaná. Čoskoro dostanete potvrdenie.`

### 🤖 Krok 5 - Použite AI na neočakávané otázky

Aj keď ste navrhli tému pre žiadosti o dovolenku, používatelia môžu klásť otázky, ktoré nie sú priamo pokryté. Tu prichádzajú na rad funkcie AI, ako je systémová téma _Conversational boosting_.

Táto téma obsahuje uzol generatívnych odpovedí, ktorý umožňuje vášmu agentovi okamžite používať pripojené zdroje informácií. Akékoľvek zdroje informácií pridané na úrovni agenta sú automaticky zahrnuté v uzle generatívnych odpovedí v systémovej téme _Conversational boosting_.

#### Príklad

- Používateľ: `Môžem preniesť nevyužité dni dovolenky do budúceho roka?`

Táto otázka nemusí byť súčasťou vášho preddefinovaného toku témy, najmä ak vaša téma pokrýva iba podávanie žiadostí o dovolenku.

#### Ako AI pomáha

Ak je váš agent pripojený k dokumentom o politikách HR vašej spoločnosti alebo k internému webu, AI môže:

- Vyhľadať relevantnú politiku dovolenky
- Pochopiť a zhrnúť pravidlá
- Agent odpovie: `Podľa politiky HR môžete preniesť nevyužité dni dovolenky do nasledujúceho kalendárneho roka. Pre viac informácií si pozrite sekciu politiky dovolenky na HR portáli.`

#### Prečo je to užitočné

- Nemusíte manuálne vytvárať tému pre každú otázku týkajúcu sa politiky.
- AI môže čerpať presné odpovede z dôveryhodných zdrojov informácií.
- Zlepšuje používateľskú skúsenosť tým, že agent pôsobí inteligentnejšie a pohotovejšie.

### 🔬 Krok 6 - Otestujte tému, tok konverzácie

Pred publikovaním vašej témy:

- Testujte pomocou reálnych otázok alebo reálnych vzorových vstupov.
- Uistite sa, že znie prirodzene a je užitočná.

!!! tip
    Pri testovaní aplikujte vylepšenia na vašu tému, ako napríklad pridanie ďalších uzlov alebo odstránenie uzlov namiesto presmerovania na inú tému.

### ⚠️ Krok 7 - Vyhnite sa duplikovaniu obsahu webovej stránky

Nekopírujte to, čo už je na vašej webovej stránke.

- Zamerajte sa na témy, na ktoré sa používatelia často pýtajú.
- Pridávajte nové témy na základe histórie chatu alebo požiadaviek na podporu.

### ✨ Príklad toku konverzácie

Nižšie je uvedený príklad témy, ktorá spracováva žiadosti o dovolenku.

#### Krok 1: Spúšťacia fráza

Používateľ napíše,

`Chcem požiadať o dovolenku`

#### Krok 2: Agent sa pýta na podrobnosti pomocou adaptívnej karty

Agent sa pýta,

`Samozrejme! Aké dátumy by ste chceli mať voľno?`

Adaptívna karta obsahuje ovládacie prvky na výber dátumu začiatku a konca.

#### Krok 3: Používateľ poskytne dátumy

Používateľ vyberie dátum začiatku ako 5. august 2025 a dátum konca ako 10. august 2025 a odošle kartu. Hodnoty dátumov sa ukladajú do výstupu adaptívnej karty ako premenné.

#### Krok 4: Spustenie cloudového toku

Spustí sa cloudový tok Power Automate, ktorý vytvorí novú žiadosť v systéme správy dovoleniek a pošle e-mail na upozornenie manažéra o žiadosti o dovolenku.

#### Krok 5: Odoslanie potvrdzujúcej správy používateľovi

Agent odpovie,

`Vaša žiadosť o dovolenku od 5. augusta do 10. augusta bola podaná. Váš manažér ju preskúma a čoskoro sa vám ozve.`

## 🧪 Laboratórium 07 - Pridanie novej témy s konverzačnými uzlami

Teraz sa naučíme, ako pridať novú tému so spúšťačom a nástrojmi. Toto laboratórium pokryje vytvorenie témy od začiatku, aby ste pochopili, ako prispôsobiť témy vašim potrebám.

- [7.1 Pridanie novej témy od začiatku](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Definovanie vstupov a výstupov spúšťača](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Pridanie nástroja pomocou konektora](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Prípad použitia

**Ako** zamestnanec

**Chcem** vedieť, aké zariadenia sú dostupné

**Aby som** mal zoznam dostupných zariadení

Začnime!

### Predpoklady

1. **Zoznam SharePoint**

    Budeme používať zoznam **Devices** v SharePointe z [Lekcia 00 - Nastavenie kurzu - Krok 3: Vytvorenie nového SharePoint webu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Ak ste ešte nenastavili zoznam **Devices** v SharePointe, vráťte sa prosím na [Lekcia 00 - Nastavenie kurzu - Krok 3: Vytvorenie nového SharePoint webu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agent Contoso Helpdesk**

    Budeme používať rovnakého agenta, ktorého sme vytvorili predtým v [Lekcia 06 - Vytvorenie vlastného agenta pomocou prirodzeného jazyka s Copilotom a jeho prepojenie s vašimi dátami](../06-create-agent-from-conversation/README.md).

### 7.1 Pridanie novej témy od začiatku

1. Vyberte kartu **Topics** blízko názvu agenta. Ak ju nevidíte, vyberte **+6** a zobrazí sa vám zoznam **Topics**.

    ![Vyberte Topics](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.sk.png)

1. Karta **Topics** sa načíta a predvolene sa zobrazia _Custom_ témy. Témy môžete filtrovať podľa All, Custom a System. Vlastné a systémové témy, ktoré aktuálne vidíte, boli automaticky vytvorené pri zriadení agenta.

    Vyberte **+ Add a topic** a potom **From blank**.

    ![Vytvoriť tému od začiatku](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.sk.png)

1. Zadajte názov témy. Skopírujte a vložte nasledujúce.

    ```text
    Available devices
    ```

    ![Názov témy](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.sk.png)

1. Zadajte popis spúšťača, ktorý načrtne, čo téma robí. Skopírujte a vložte nasledujúce.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Zadajte názov a popis spúšťača](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.sk.png)

### 7.2 Definovanie vstupov a výstupov spúšťača

1. Ďalej pridáme novú vstupnú premennú, ktorú generatívna AI použije vo svojej orchestrácii na extrahovanie hodnoty typu zariadenia zo správy používateľa. Vyberte **Viac elipsy (...)** v téme a vyberte **Details**, aby ste zobrazili panel podrobností témy.

    ![Vyberte Podrobnosti témy](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.sk.png)

1. Panel **Topic details** sa teraz načítal. Vyberte kartu **Input**.

    ![Karta Input](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.sk.png)

1. Vyberte **Create a new variable**.

    ![Vytvoriť novú vstupnú premennú](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.sk.png)

1. Zadajte názov pre premennú. Skopírujte a vložte nasledujúce.

    ```text
    VarDeviceType
    ```

    ![Názov vstupnej premennej](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.sk.png)

1. Teraz musíme definovať naše vstupné a výstupné premenné. Nasledujú vlastnosti, ktoré môžu byť definované pre vstupy a výstupy témy.

    | Pole    | Hodnota |
    | ---------- | :--------- |
    | Ako agent vyplní tento vstup? | Určuje, ako agent vyplní túto premennú hodnotou pred spustením témy. Predvolene je nastavené na _Dynamicky vyplniť najlepšou možnosťou_. Inak môžete prepísať vstup hodnotou namiesto toho, aby ste sa pýtali používateľa|
    | Typ údajov premennej  | Typ údajov premennej. Podporované typy údajov sú `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Zobrazený názov   | Názov premennej   |
    | Identifikovať ako  | Typ entity, aby agent zachytil správny typ hodnoty  |
    | Popis    | Popis pomáha agentovi automaticky vyplniť vstupy pred spustením témy alebo generovať otázky na získanie hodnôt   |

    Vlastnosti _Ako agent vyplní tento vstup?_, _Typ údajov premennej_ a _Zobrazený názov_ môžu zostať nezmenené. Aktualizujte vlastnosť **Identifikovať ako** na **Celá odpoveď používateľa**.

    ![Aktualizovať Identifikovať ako](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.sk.png)

1. Skopírujte a vložte nasledujúce ako popis.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Popis](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.sk.png)

1. Ďalej definujeme náš výstup pre tému. Vyberte kartu **Output**.

    ![Vyberte kartu Output](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.sk.png)

1. Vyberte **Create a new variable**.

    ![Vytvoriť novú výstupnú premennú](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.sk.png)

1. Aktualizujte nasledujúce vlastnosti.

    **Názov premennej** - Skopírujte a vložte nasledujúce.

    ```text
    VarAvailableDevices
    ```

    **Typ údajov premennej** - Vyberte **Table** ako typ údajov.

    **Popis premennej** - Skopírujte a vložte nasledujúce.

    ```text
    List of available devices by device type
    ```

    ![Vlastnosti výstupu](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.sk.png)

1. Teraz sme dokončili definovanie vstupov a výstupov témy. Vyberte **X ikonu**, aby ste opustili panel **Topic details**.

    ![Opustiť panel podrobností témy.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.sk.png)

### 7.3 Pridanie nástroja pomocou konektora

1. Ďalej pridáme uzol, ktorý umožní agentovi získať zoznam zariadení zo zoznamu **Devices** v SharePointe. Vyberte **+ ikonu** pod spúšťačom.

    ![Pridať nástroj](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.sk.png)

1. Vyberte uzol **Add a tool**, potom kartu **Connector**. Vyhľadajte `Get items` a vyberte akciu konektora **Get items** pre SharePoint.

    ![Vybrať Get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.sk.png)

1. Je potrebné vytvoriť nové pripojenie pre konektor. Vyberte ikonu **chevron** a vyberte **Create new connection**.

    ![Pridať nástroj](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.sk.png)

1. Zobrazia sa dve možnosti, ktoré vám umožnia pripojiť sa priamo k SharePoint Online alebo k lokálnemu SharePointu. Predvolene bude vybraná možnosť **Connect directly (cloud-services)**, ktorú použijeme pre naše pripojenie.
Vyberte **Vytvoriť**.

![Vyberte Vytvoriť](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.sk.png)

1. Vyberte svoj prihlásený používateľský účet.

![Vyberte prihlásený používateľský účet](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.sk.png)

1. Ďalej musíte potvrdiť, že váš používateľský účet môže byť použitý na pripojenie k SharePoint konektoru. Vyberte **Povoliť prístup**.

![Vyberte povoliť prístup](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.sk.png)

1. Vyberte **Odoslať** pre akciu SharePoint konektora **Získať položky**, aby bola pridaná ako uzol do témy.

![Odoslať](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.sk.png)

1. Akcia SharePoint konektora **Získať položky** je teraz pridaná do témy. Môžeme začať konfigurovať vstupy akcie. Vyberte **ikonu s tromi bodkami (...)** a potom **Vlastnosti**.

![Vyberte Vlastnosti](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.sk.png)

1. Zobrazí sa konfiguračný panel **Získať položky** a predvolene uvidíte kartu **Vstupy**. Vyberte kartu **Iniciácia** a zadajte popis do poľa **Popis použitia**. Skopírujte a vložte nasledujúce.

    ```text
    Retrieves devices from SharePoint list
    ```

> Toto sa hodí, keď si pozrieme stránku _Spravovať vaše pripojenia_ nášho agenta. K tomu sa čoskoro vrátime.

![Popis Získať položky](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.sk.png)

1. Vyberte kartu **Vstupy** a vyberte lokalitu **Contoso IT** a zoznam **Zariadenia**, ktorý ste nastavili v [Lekcia 00 - Nastavenie kurzu - Krok 3: Vytvorte novú lokalitu SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Konfigurácia vstupov Získať položky](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.sk.png)

1. Teraz, aby sa zobrazovali iba zariadenia zo zoznamu SharePoint na základe
   - vybranej hodnoty,
   - a iba zariadenia, kde stav je _Dostupný_,

   musíme aplikovať filter. To sa dosiahne zadaním filtračného dotazu pomocou Power Fx. Vyberte **ikonu s tromi bodkami (...)**.

![Vyberte ikonu s tromi bodkami](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.sk.png)

1. Predvolene budete na karte **Vlastné**. Vyberte kartu **Vzorec**.

![Vyberte kartu Vzorec](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.sk.png)

1. Vyberte ikonu **rozšíriť**, aby ste zväčšili pole **Vzorec**. Skopírujte a vložte nasledujúci výraz Power Fx.

Používame funkciu `Concatenate` na vytvorenie výrazu, ktorý bude filtrovať
   - stĺpec SharePoint **Stav** rovný _Dostupný_
   - a stĺpec SharePoint **Typ majetku** rovný _vybranému zariadeniu z uzla otázky_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Vyberte **Vložiť**.

![Zadajte výraz Power Fx a vyberte vložiť](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.sk.png)

1. Výraz Power Fx bude teraz aplikovaný v parametri vstupu Filtračný dotaz akcie **Získať položky**. Ďalej vyberte zobrazenie **Všetky položky** v **Obmedziť stĺpce podľa zobrazenia**. Tým sa načítajú iba stĺpce zo zoznamu na základe vybraného zobrazenia.

![Zoznam stĺpcov podľa zobrazenia](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.sk.png)

1. Ďalej aktualizujeme názov premennej pre výstup. Vyberte kartu **Výstupy** a vyberte premennú `GetItems`.

![Aktualizovať premennú](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.sk.png)

1. Aktualizujte názov na nasledujúci.

    ```text
    VarDevices
    ```

![Aktualizovať názov premennej](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.sk.png)

1. Posuňte sa nadol a v sekcii **Použitie** vyberte **Globálne**. Tým sa premenná sprístupní pre akúkoľvek tému.

![Aktualizovať na Globálnu premennú](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.sk.png)

1. **Zatvorte** panel **Vlastnosti premennej**.

![Zatvorte panel Vlastnosti premennej](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.sk.png)

1. Vyberte ikonu **plus +** na vloženie nového uzla, vyberte **Správa premenných** a potom vyberte **Nastaviť hodnotu premennej**.

![Pridať uzol Nastaviť hodnotu premennej](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.sk.png)

1. Vyberte ikonu **väčšie ako** pre vstupný parameter **Nastaviť premennú**.

![Nastaviť premennú](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.sk.png)

1. Vyberte výstup témy vytvorený skôr ako premennú, **VarAvailableDevices**.

![Uložiť tému](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.sk.png)

1. Ďalej vyberte **ikonu s tromi bodkami (...)** na definovanie hodnoty premennej.

![Vyberte hodnotu premennej](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.sk.png)

1. Teraz použijeme PowerFx výraz na nastavenie hodnoty premennej ako vlastnosti `value`, ktorá sa vráti v odpovedi **Získať položky**, a nastavíme [rozsah premennej](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) na globálny pridaním predpony `Global`.

Vyberte **Vložiť** a **uložiť** tému.

![Power Fx vzorec pre hodnotu premennej](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.sk.png)

1. Ďalej musíme aktualizovať pokyny pre agenta. Vyberte kartu **Prehľad** a potom **Upraviť**.

![Upraviť pokyny](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.sk.png)

1. Pridajte nový riadok do pokynov, skopírujte a vložte nasledujúce.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Táto inštrukcia bude navigovať generatívnu AI, aby spustila spúšťač **Dostupné zariadenia** na zobrazenie zoznamu dostupných zariadení zo zoznamu **Zariadenia** v SharePoint. Vyberte celý zástupný symbol témy v hranatých zátvorkách.

![Pridať pokyny](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.sk.png)

1. Zadajte znak lomky `/` a zobrazí sa zoznam tém. Vyberte tému **Dostupné zariadenia**.

![Referenčný spúšťač](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.sk.png)

1. **Uložte** aktualizované pokyny.

![Uložiť pokyny](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.sk.png)

1. Teraz otestujeme náš aktualizovaný agent. Vyberte **Testovať** v pravom hornom rohu na zobrazenie testovacieho panela a **obnovte** testovací panel. Zadajte nasledujúcu správu agentovi.

    ```text
    I need a laptop
    ```

![Testovať](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.sk.png)

1. Predtým, než agent môže pokračovať, používateľ musí overiť, že jeho pripojenie môže byť použité. Vyberte **Povoliť**.

![Vyberte povoliť](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.sk.png)

1. Agent vykoná nástroj SharePoint, ktorý načíta filtrovaný zoznam zariadení, kde typ zariadenia je "laptop" a stav je "dostupný," na základe použitého Power Fx výrazu. Odpoveď vo formáte odrážok bude vrátená používateľovi na prečítanie.

![Odpoveď testu](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.sk.png)

1. Posledná vec, ktorú sa naučíme, je zobrazenie pripojení použitých na stránke _Spravovať vaše pripojenia_ agenta. Vyberte **ikonu s tromi bodkami (...)** a potom **Spravovať pripojenie**.

![Spravovať pripojenie](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.sk.png)

1. Táto stránka je miesto, kde môžeme vidieť všetky pripojenia použité agentom. Momentálne je uvedené iba jedno pripojenie, ktoré je spojené s nástrojom SharePoint, ktorý bol pridaný do témy. Vyberte **1 nástroj** v stĺpci **Použité**.

![Použité](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.sk.png)

1. Tu môžeme vidieť detaily akcie Získať položky a pamätáte si _popis použitia_, ktorý sme zadali skôr? Tu uvidíme popis použitia. Vyberte **Zatvoriť**.

> Toto nám ukazuje, aké akcie sú použité a ich účel. Udržiava to naše pripojenia organizované 📁.

![Popis použitia](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.sk.png)

1. Vráťte sa na kartu prehliadača s Copilot Studio a **obnovte** testovací panel na vymazanie testu.

## ✅ Misia splnená

Gratulujeme! 👏🏻 Naučili ste sa, ako pridať novú tému od začiatku, ako pridať nástroj, ktorý volá akciu SharePoint konektora Získať položky, a použiť Power Fx na filtrovanie odpovede tak, aby sa vrátili iba zariadenia, kde stav je dostupný a typ zariadenia je laptop. 🙌🏻

Toto je koniec **Lab 07 - Pridanie novej témy s konverzačnými uzlami**, vyberte odkaz nižšie na presun do ďalšej lekcie. V nasledujúcej lekcii rozšírime prípad použitia z tejto laboratórnej práce.

⏭️ [Presun na lekciu **Zlepšenie interakcií používateľov pomocou adaptívnych kariet**](../08-add-adaptive-card/README.md)

## 📚 Taktické zdroje

🔗 [Použitie systémových tém](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Témy v Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Nastavenie spúšťačov tém](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Definovanie tém agenta](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Vytváranie výrazov pomocou Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Tvorba tém pomocou prirodzeného jazyka](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Pridanie akcií do agentov pomocou konektorov](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytika" />

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.