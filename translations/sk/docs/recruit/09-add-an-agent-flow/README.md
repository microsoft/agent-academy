<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-20T17:25:31+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "sk"
}
-->
# 🚨 Misia 09: Pridajte tok agenta do svojej témy pre automatizáciu

## 🕵️‍♂️ KRYCÍ NÁZOV: `OPERÁCIA AUTOMATIZAČNÁ SILA`

> **⏱️ Časový rámec operácie:** `~30 minút`  

🎥 **Pozrite si prehľad**

[![Náhľad videa o toku agenta](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.sk.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Pozrite si prehľad na YouTube")

## 🎯 Misia v skratke

Váš agent už dokáže komunikovať s používateľmi a poskytovať informácie, ale skutočná prevádzková dokonalosť si vyžaduje, aby váš agent konal. Táto misia premení váš konverzačný agent na automatizačnú silu tým, že ho vybaví tokmi agenta.

Na konci misie vytvoríte kompletnú automatizáciu požiadavky na zariadenie, ktorá zachytáva vstupy používateľa prostredníctvom adaptívnej karty, získava údaje zo SharePointu, posiela upozornenia manažérom prostredníctvom e-mailu a poskytuje bezproblémovú spätnú väzbu používateľovi - všetko orchestruje váš agent prostredníctvom inteligentnej automatizácie pracovného toku.

## 🔎 Ciele

V tejto misii sa naučíte:

1. Pochopiť, čo sú toky agenta a ako sa líšia od cloudových tokov Power Automate pre automatizáciu
1. Naučiť sa kľúčové funkcie, ktoré robia toky agenta silnými, vrátane AI akcií a tvorby prirodzeného jazyka
1. Preskúmať návrhára tokov agenta a ako používať výrazy na dynamické spracovanie údajov
1. Vytvoriť kompletnú automatizáciu požiadavky na zariadenie, ktorá integruje údaje zo SharePointu a e-mailové upozornenia

## 🤔 Čo je tok agenta?

Toky agenta sú silným nástrojom na automatizáciu opakujúcich sa úloh a integráciu vašich aplikácií a služieb. Predstavte si ich ako štruktúrované, krok za krokom pracovné toky, ktoré váš agent môže vykonávať na automatizáciu úloh alebo pripojenie k iným aplikáciám a službám. Môžete si ich predstaviť ako mini pracovné toky, ktoré pomáhajú vášmu agentovi robiť veci ako posielať upozornenia, aktualizovať záznamy alebo reagovať na udalosti.

Na rozdiel od autonómnych agentov, ktorí používajú AI na rozhodovanie za pochodu, toky agenta sú **deterministické pracovné toky** - to znamená, že vždy nasledujú rovnakú cestu, čím zabezpečujú konzistentné a spoľahlivé výsledky.

Jednoducho povedané:

- Pomáhajú vášmu agentovi _robiť veci_, nielen _hovoriť veci_ používateľom.
- Sú opakovane použiteľné naprieč témami a agentmi a môžu byť spustené správami používateľov, udalosťami alebo inými aplikáciami a službami.

## 🙋🏽 Áno, ale ako sa líšia od cloudových tokov Power Automate?

Oba toky agenta a cloudové toky Power Automate pomáhajú automatizovať úlohy. Sú navrhnuté na rôzne účely a fungujú rôznymi spôsobmi.

### 🤖 Toky agenta v Copilot Studio

**Na čo sú určené:**

- Vytvorené pre konverzačných a autonómnych agentov (prostredníctvom pokynov agenta) v Copilot Studio.
- Zamerané na inteligentnú, AI-riadenú automatizáciu, ktorá interaguje s obchodnými systémami.

**Prečo sú užitočné:**

- Jednoduché na vytvorenie a správu priamo v Copilot Studio.
- Skvelé na automatizáciu úloh, ktoré sa dejú _počas konverzácie_ s používateľmi, ako napríklad podanie žiadosti o dovolenku.
- Nepotrebujete samostatnú licenciu Power Automate, pretože fakturácia je založená na používaní v rámci Copilot Studio. To môže ušetriť čas a náklady pre podnikové tímy.

**Obmedzenia:**

- Nemôžete ich zdieľať, kopírovať ani priradiť spoluvlastníkov.
- Toky agenta sú viditeľné a použiteľné iba v Copilot Studio.
- Momentálne je možné upravovať spúšťače udalostí pre agentov v portáli Power Automate maker.

### ☁️ Cloudové toky Power Automate

**Na čo sú určené:**

- Navrhnuté na všeobecnú automatizáciu naprieč mnohými aplikáciami a službami.
- Môžu fungovať nezávisle alebo spolupracovať s tokmi agenta.

**Prečo sú užitočné:**

- Ponúkajú širokú škálu konektorov.
- Ideálne na automatizáciu procesov mimo agentov.
- Môžu byť zdieľané, opakovane použité a spravované naprieč tímami.

**Požiadavky:**

- Na ich používanie potrebujete licenciu Power Automate.

### 📗 Zhrnutie

| Použite toto | Keď chcete |
| :- | :- |
| Toky agenta | Automatizovať úlohy v rámci agenta, používať AI a udržiavať všetko v Copilot Studio |  
| Cloudové toky Power Automate | Automatizovať naprieč aplikáciami a službami alebo vytvárať pracovné toky mimo agentov |

## 👍🏻 Prečo používať toky agenta

Toky agenta vždy nasledujú pevne stanovenú cestu - robia to isté zakaždým, keď dostanú rovnaký vstup.

To ich robí:

- **Spoľahlivými** - môžete sa spoľahnúť, že sa budú správať rovnako zakaždým.
- **Predvídateľnými** - viete, aký výsledok očakávať, keď sa tok spustí.
- **Pravidlovo založenými** - nasledujú kroky, ktoré definujete.

Ďalšie výhody:

- **Automatizácia** - umožňuje vášmu agentovi zvládnuť opakujúce sa úlohy, ako je podávanie formulárov alebo posielanie upozornení.
- **Prepojenie** - pripojenie k viac ako 1400 konektorom, ako ServiceNow, SharePoint, Salesforce. Prípadne si môžete vytvoriť vlastný konektor.
- **Úzka integrácia** - toky agenta sú súčasťou logiky agenta, sú spúšťané priamo správami používateľov alebo akciami v konverzácii.
- **Škálovateľnosť** - opakovane použiteľné toky naprieč viacerými agentmi alebo scenármi.
- **Bez kódu alebo s minimálnym kódom** - môžete vytvárať toky pomocou prirodzeného jazyka alebo vizuálneho návrhára.
- **Všetko na jednej platforme** - môžete navrhovať, testovať a nasadzovať toky agenta na jednom mieste - Copilot Studio. Nie je potrebné prepínať medzi platformami.

## 🏄🏻‍♂️ Ako toky agenta zlepšujú vášho agenta?

Toky agenta rozširujú schopnosti vášho agenta nad rámec "chatovania" s používateľmi. Umožňujú mu konať a interagovať so systémami.

Predstavte si, že pracujete vo finančnom oddelení a dostávate veľa faktúr od dodávateľov. Normálne by niekto musel prečítať každú faktúru, vybrať dôležité detaily - sumu, dátum, od koho je, a skontrolovať, či všetko zodpovedá vašim záznamom. Potom ju poslať správnej osobe na schválenie. To zaberá čas a úsilie.

S tokmi agenta v Copilot Studio môžete tento proces automatizovať. Hneď ako faktúra dorazí, agent:

1. Prečíta dokument pomocou inteligentného spracovania dokumentov na nájdenie kľúčových informácií.
1. Skontroluje detaily oproti vašim podnikovým údajom, aby sa uistil, že všetko vyzerá správne.
1. Pošle ju na schválenie správnej osobe/osobám.

Tým sa šetrí čas, znižujú chyby a celý proces je oveľa hladší.

### Predstavte si to takto

- **Agenti**: inteligentní rozhodovatelia
- **Toky agenta**: spoľahliví vykonávatelia

### Prečo na tom záleží

- Získate to najlepšie z oboch svetov: spoľahlivú automatizáciu a flexibilnú AI.
- Je jednoduché vytvárať a aktualizovať toky podľa zmien potrieb vášho podnikania.
- Môžete škálovať automatizáciu naprieč tímami.

## 🔌 Kľúčové funkcie, ktoré robia toky agenta silnými

1. **Tvorba prirodzeného jazyka**
    - Môžete opísať, čo chcete, aby tok robil, v bežnej angličtine.
    - Copilot rozumie vášmu zámeru a vytvorí tok za vás.
    - Nie je potrebné písať kód - stačí vysvetliť váš nápad.

1. **AI akcie**

    Používajte AI na:

    - Čítanie a porozumenie dokumentov alebo obrázkov.
    - Zhrnutie dlhého obsahu do krátkych, užitočných odpovedí.
    - Poskytovanie inteligentných odporúčaní alebo rozhodnutí.

1. **Generatívne akcie**
    - Umožňujú toku prispôsobiť sa v reálnom čase.
    - Agent môže plánovať a upravovať kroky na základe meniacej sa informácie.

1. **Integračné akcie**
    - Pripojte svoj tok k iným nástrojom, ako Outlook, Microsoft Teams, ServiceNow, SharePoint a ďalším aplikáciám a službám, prostredníctvom viac ako 1400 zabudovaných konektorov alebo vlastného konektora.
    - To pomáha vášmu agentovi pracovať s aplikáciami, ktoré váš tím už používa.

1. **Človek v procese**
    - Pridajte kroky schvaľovania, kde osoba musí niečo skontrolovať alebo potvrdiť.
    - [Pokročilé schvaľovania](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) podporujú pripomienky, delegovanie a viacstupňové schvaľovania.

## ⚙️ Ako fungujú

1. **Spúšťač**

    Udalosť spustí tok - napríklad používateľ položí otázku, spustí tok z témy, naplánovaný čas alebo udalosť v inom systéme.

1. **Akcie**

    Toto sú kroky, ktoré agent vykonáva ďalej - poslanie e-mailu, volanie API, aktualizácia lístka v ServiceNow.

## 🧶 Ako vytvoriť tok agenta

1. **Prirodzený jazyk**: opíšte, čo chcete, aby agent robil, a Copilot ho vytvorí za vás.
1. **Návrhové plátno**: presúvajte a pridávajte akcie, podmienky a slučky v návrhári tokov agenta na vytvorenie vášho toku agenta.

## 🎨 Čo je návrhár tokov agenta?

Je to vizuálny nástroj v Copilot Studio, ktorý vám pomáha vytvárať, upravovať a spravovať toky agenta, ktoré poskytujú krok za krokom pokyny, ktoré váš agent nasleduje na dokončenie úloh. Je navrhnutý tak, aby bol jednoduchý na používanie, aj keď ste v tokov agenta nováčik.

### Kľúčové funkcie návrhára tokov agenta

1. **Vizuálne plátno**
    - Môžete vidieť celý váš tok rozložený ako diagram.
    - Jednoducho priblížte/oddiaľte, prispôsobte zobrazenie alebo použite miniatúrnu mapu na navigáciu vo veľkých tokoch.

1. **Pridávanie a odstraňovanie akcií**
    - Kliknite na _plus (+)_ tlačidlo na pridanie novej akcie, ako je poslanie správy alebo aktualizácia položky v zozname SharePoint.
    - Môžete vyhľadávať akcie z konektorov a konfigurovať ich prostredníctvom ich nastavení.
    - Na odstránenie akcie kliknite na _tri bodky (⋮)_ a vyberte _Odstrániť_.

1. **Kontrola parametrov**
    - Kliknite na akciu na zobrazenie alebo úpravu jej nastavení nazývaných _parametre_.
    - Môžete manuálne zadávať hodnoty alebo používať _výrazy_ na ich dynamizáciu.

1. **História verzií**
    - Každýkrát, keď uložíte svoj tok, sa zaznamená verzia.
    - Môžete sa vrátiť a zobraziť alebo obnoviť predchádzajúcu verziu, ak je to potrebné.

1. **Kontrola chýb**
    - _Kontrola toku_ zvýrazní akékoľvek chyby.
    - Všetky chyby musia byť vyriešené pred publikovaním vášho toku.

1. **Publikovanie a testovanie**
    - Keď je váš tok bez chýb, publikujte ho, aby bol aktívny.
    - Použite funkciu _Test_, aby ste manuálne alebo automaticky spustili váš tok a overili, či funguje podľa očakávania.

### Prečo používať návrhára tokov agenta?

- **Vizuálny a intuitívny** - môžete vytvárať toky presúvaním a kliknutím.
- **Bezpečné experimentovanie** - história verzií vám umožňuje vrátiť zmeny.
- **Zabudované testovanie** - pomáha vám uistiť sa, že všetko funguje pred spustením.

## 🔤 Spomenuli ste _výrazy_ - čo sú výrazy?

Výrazy sú malé vzorce alebo príkazy, ktoré pomáhajú vášmu toku agenta pracovať s údajmi. Používate ich na výpočet hodnôt, formátovanie textu, rozhodovanie alebo získanie konkrétnych informácií zo vstupov.

### Prečo používať výrazy?

Výrazy vám umožňujú:

- **Prispôsobiť spracovanie údajov** - kombinovať mená, formátovať dátumy.
- **Robiť rozhodnutia** - ak je hodnota väčšia ako 10, vykonať niečo.
- **Transformovať údaje** - zmeniť text na malé písmená, extrahovať časť reťazca.
- **Automatizovať logiku** - bez písania plného kódu.

### Ako vyzerajú výrazy?

Výrazy používajú funkcie. Požičiam si vysvetlenie, čo sú funkcie, od bývalého Microsoft MVP, Jerryho Weinstocka.

!!! citát
    Funkcie sú zabudovaná logika na transformáciu vašich údajov buď prostredníctvom jednoduchých alebo zložitých operácií vo vašom výraze.

Funkcie vám umožňujú vytvárať výrazy bez potreby písania kódu.

Ako to rád opisujem, funkcia v tokoch agenta je podobná funkciám v Exceli. Môžete vykonať operáciu na údajoch, aby ste ich transformovali na požadovaný výstup. Pri vytváraní vzorca v Exceli vyberáte vstupnú hodnotu z buniek v tabuľke alebo rozsahu a potom aplikujete funkcie na manipuláciu výstupu údajov. Príkladom je použitie funkcie `COUNT` na zistenie počtu buniek obsahujúcich čísla z rozsahu.

V tokoch agenta namiesto odkazovania na údaje z buniek v tabuľke odkazujete na výstupy údajov zo spúšťača alebo akcií pri vytváraní vašich výrazov. Pokračujúc v predchádzajúcom príklade, použite funkciu `length` na získanie počtu položiek vrátených z akcie konektora _Get items_ v SharePointe.

### Prečo na funkciách záleží?

Používanie funkcií robí vaše toky agenta:

- **Inteligentnejšími** - môžu reagovať na rôzne vstupy alebo podmienky.
- **Flexibilnými** - môžete prispôsobiť spracovanie údajov.
- **Efektívnymi** - vyhnete sa manuálnym krokom automatizáciou logiky.

### Najužitočnejšie funkcie

Nasledujúce sú bežné funkcie používané v
- Príklad: `addDays(utcNow(), 7)` výstup je o 7 dní neskôr.

- `formatDateTime()` - Formátuje dátum do čitateľného reťazca.
      - Príklad: Pondelok, 7. júl 2025

#### ✅ Logické

- `if()` - Spustí jednu hodnotu, ak je podmienka pravdivá, inú, ak je nepravdivá.
      - Príklad: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - Kontroluje, či sú dve hodnoty rovnaké.

- `and()`, `or()`, `not()` - Kombinujú viacero podmienok.

#### 🪣 Ďalšie užitočné funkcie

- `coalesce()` - Vráti prvú nenulovú hodnotu.
      - Užitočné pre záložné alebo predvolené hodnoty.

- `guid()` - Generuje jedinečné ID.
      - Užitočné pre sledovanie alebo logovanie.

- `length()` - Počíta, koľko znakov alebo položiek je v reťazci alebo poli.

## ⭐ Najlepšie postupy

Tu sú niektoré najlepšie postupy pri vytváraní tokov agentov v Copilot Studio.

1. **Začnite jednoducho a postupne rozširujte**

    - Začnite s malou, jasnou úlohou, ako je odoslanie správy.
    - Pridajte ďalšie kroky po otestovaní základov vašej automatizácie.

1. **Používajte jasné a popisné názvy akcií**

    - Jasne označte každý krok, aby ste vy aj váš tím rozumeli, čo robí.
    - Príklad: namiesto predvoleného názvu "Aktualizovať položku" pre akciu konektora SharePoint ju premenujte na to, čo aktualizuje, napríklad "Aktualizovať stav zariadenia."

1. **Skontrolujte chyby pred publikovaním**

    - Použite **kontrolu toku**, aby ste našli a opravili akékoľvek problémy.
    - Nemôžete publikovať toky, ak obsahujú chyby, preto sa ich snažte vyriešiť hneď, ako sa objavia.

1. **Dôkladne otestujte svoj tok**

    - Len preto, že sa uloží a publikuje, neznamená, že funguje podľa očakávania.
    - Použite funkciu _Test_ na manuálne alebo automatické spustenie toku a skontrolujte výsledky.

1. **Používajte históriu verzií**

    - Ukladajte svoj tok často, aby ste sa mohli v prípade potreby vrátiť k predchádzajúcim verziám.
    - Predchádzajúce verzie si môžete prezrieť a obnoviť pomocou panela _História verzií_.

1. **Používajte parametre a výrazy rozumne**

    - Pri konfigurácii akcií používajte parametre na dynamizáciu toku.
    - Hodnoty môžete zadávať manuálne alebo používať výrazy na ich výpočet, prípadne ich kombinovať s hodnotami z predchádzajúcich akcií pomocou výberu _dynamického obsahu_.

1. **Odstráňte nepoužité akcie**

    - Ak pridáte akciu a neskôr sa rozhodnete, že ju nepotrebujete, odstráňte ju, aby bol váš tok prehľadný.

## 🧪 Laboratórium 09 - Pridanie toku agenta pre automatizáciu a rozšírenie schopností témy

Teraz sa naučíme, ako rozšíriť našu tému pomocou adaptívnych kariet a využívania pokročilých funkcií tém a uzlov.

- [9.1 Vytvorenie toku agenta](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Pridanie toku agenta do témy](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Aktualizácia témy Požiadavka na zariadenie s viacerými uzlami pre lepší používateľský zážitok](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Testovanie agenta pomocou viacerých scenárov](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Použitie

**Ako** manažér zamestnanca

**Chcem** prijímať požiadavky na zariadenia

**Aby som** mohol preskúmať zariadenie požadované zamestnancom.

Začnime!

### Predpoklady

1. **Zoznam SharePoint**

    Budeme používať zoznam **Zariadenia** v SharePointe z [Lekcia 00 - Nastavenie kurzu - Krok 3: Vytvorenie nového SharePoint webu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Ak ste ešte nenastavili zoznam **Zariadenia** v SharePointe, vráťte sa prosím na [Lekcia 00 - Nastavenie kurzu - Krok 3: Vytvorenie nového SharePoint webu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agent Contoso Helpdesk**

    Použijeme rovnakého agenta, ktorého sme vytvorili predtým v [Lekcia 06 - Vytvorenie vlastného agenta pomocou prirodzeného jazyka s Copilotom a jeho prepojenie s vašimi údajmi](../06-create-agent-from-conversation/README.md).

### 9.1 Vytvorenie toku agenta

V tomto cvičení vytvoríme tok agenta, ktorý získa položku zo SharePointu pre vybrané zariadenie a pošle e-mail manažérovi s podrobnosťami o zariadení.

1. V téme **Požiadavka na zariadenie** prejdite nadol k uzlu **Opýtať sa pomocou adaptívnej karty** a pridajte nový uzol. Vyberte **Pridať nástroj** a na karte **Základné nástroje** v paneli, ktorý sa zobrazí, vyberte **Nový tok agenta**.

    ![Pridať nový tok agenta](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.sk.png)

1. Načítava sa **Návrhár tokov agenta** s triggerom a akciou.

    - **Trigger** - Keď agent spustí tok
        - Spustí tok z agenta Copilot Studio.

    - **Akcia** - Odpovedať agentovi
        - Pošle odpoveď, ktorá môže obsahovať výstupné hodnoty späť agentovi Copilot Studio.

    Vyberte trigger.

    ![Vybrať trigger](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.sk.png)

1. Ďalej pridáme niekoľko vstupov pre tok agenta.

    - `DeviceSharePointId` - bude uchovávať hodnotu, ID, položky zo SharePointu. Táto hodnota ID je výstup z uzla Opýtať sa pomocou adaptívnej karty, kde používateľ vybral zariadenie.

    - `User` - bude to meno používateľa, ktoré bude pochádzať zo systémovej premennej agenta.

    - `AdditionalComments` - bude to komentár zadaný používateľom, ktorý je výstupom z uzla Opýtať sa pomocou adaptívnej karty.

    Najprv pridáme `DeviceSharePointId` ako vstup pre náš trigger. Vyberte **+ Pridať vstup**.

    ![Pridať vstup](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.sk.png)

1. Pre typ vstupu používateľa vyberte **Text**.

    ![Vybrať Text](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.sk.png)

1. Pre názov vstupu zadajte nasledujúce.

    ```text
    DeviceSharePointId
    ```

    ![Vstup DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.sk.png)

1. Teraz pridáme druhý vstup, `User`. Opakujte rovnaké kroky, vyberte **+ Pridať vstup** a vyberte **Text**.

    ![Pridať vstup](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.sk.png)

1. Pre názov vstupu zadajte nasledujúce.

    ```text
    User
    ```

    ![Vstup User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.sk.png)

1. Teraz pridáme tretí vstup, `AdditionalComments`. Opakujte rovnaké kroky, vyberte **+ Pridať vstup** a vyberte **Text**.

    ![Pridať vstup](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.sk.png)

1. Pre názov vstupu zadajte nasledujúce.

    ```text
    AdditionalComments
    ```

    ![Vstup AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.sk.png)

1. Pre vstup `AdditionalComments` ho aktualizujeme, aby bol voliteľný. Vyberte **ikonu elipsy (...)** a vyberte **Urobiť pole voliteľným**.

    ![Urobiť pole voliteľným](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.sk.png)

1. Skvelá práca! Trigger je teraz nakonfigurovaný, pokračujme. Vyberte **plus + ikonu** pod triggerom na vloženie novej akcie.

    ![Pridať akciu](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.sk.png)

1. Zobrazí sa **Panel akcií**, kde môžete vidieť akcie z viac ako 1400 zabudovaných konektorov pre Microsoft a služby tretích strán. Do **vyhľadávacieho poľa** zadajte nasledujúce,

    ```text
    Get item
    ```

    Zoznam akcií sa zobrazí vo výsledkoch vyhľadávania. Vyberte akciu **Získať položku** z konektora **SharePoint**.

    ![Akcia Získať položku](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.sk.png)

1. Teraz môžeme začať konfigurovať akciu **Získať položku**.

    Vyberte **ikonu elipsy (...)** v akcii **Získať položku**.

    ![Vybrať elipsu](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.sk.png)

1. Vyberte **Premenovať**.

    ![Vybrať Premenovať](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.sk.png)

1. Premenujte akciu na,

    ```text
    Get Device
    ```

    ![Premenovať akciu](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.sk.png)

1. V poli **Adresa webu** vyberte **Adresu webu** SharePoint webu Contoso IT vytvoreného v [Lekcia 00 - Nastavenie kurzu - Krok 3: Vytvorenie nového SharePoint webu](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    V poli **Názov zoznamu** vyberte zoznam **Zariadenia** v SharePointe.

    ![Parametre vstupu](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.sk.png)

1. V poli **Id** vyberte **ikonu blesku** alebo **ikonu fx** napravo.

    ![Výber dynamického obsahu](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.sk.png)

1. Na karte **Dynamický obsah** v paneli zadajte nasledujúce,

    ```text
    sharepoint
    ```

    Výsledky vyhľadávania zobrazia vstupné parametre, ktoré zodpovedajú hľadanému výrazu. Vyberte parameter **DeviceSharePointId** z triggeru.

    Potom vyberte **Pridať**, aby ste pridali vstup dynamického obsahu do parametra **Id** akcie.

    ![Vybrať vstup DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.sk.png)

1. Vstup dynamického obsahu z triggeru je teraz referencovaný v parametri **Id** akcie. Ďalej aktualizujeme jeden z pokročilých parametrov. Vyberte **Zobraziť všetko**, aby ste videli pokročilé parametre.

    ![Zobraziť pokročilé parametre](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.sk.png)

1. Zobrazí sa parameter **Obmedziť stĺpce podľa zobrazenia** a predvolene je nastavený na **Použiť všetky stĺpce (Neobmedzovať)**. Túto hodnotu aktualizujeme na zobrazenie, aby sme obmedzili stĺpce vrátené v odpovedi akcie. Vyberte parameter **Obmedziť stĺpce podľa zobrazenia**, aby ste videli zoznam zobrazení.

    ![Vybrať parameter](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.sk.png)

1. Vyberte zobrazenie **Všetky položky**.

    ![Vybrať zobrazenie Všetky položky](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.sk.png)

1. Vyberte **plus + ikonu** pod akciou _Získať zariadenie_ na vloženie novej akcie.

    ![Pridať novú akciu](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.sk.png)

1. Do vyhľadávacieho poľa zadajte nasledujúce,

    ```text
    send an email
    ```

    Zoznam akcií sa zobrazí vo výsledkoch vyhľadávania. Vyberte akciu **Odoslať e-mail (V2)** z konektora **Office 365 Outlook**.

    ![Akcia Odoslať e-mail](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.sk.png)

1. Ďalej musíme vytvoriť pripojenie pre akciu konektora. Vyberte **Prihlásiť sa**.

    ![Vytvoriť pripojenie](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.sk.png)

1. Vyberte svoj prihlásený používateľský účet.

    ![Vybrať používateľský účet](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.sk.png)

1. Vyberte **Povoliť prístup**. Pripojenie bolo teraz vytvorené.

    ![Vybrať povoliť prístup](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.sk.png)

1. Premenujte akciu na nasledujúce,

    ```text
    Send an email to manager
    ```

    Ďalej definujeme vstupné parametre našej akcie.

    Pre parameter **Komu** vyberte seba. Normálne by to bol váš manažér alebo by sme použili inú akciu, ktorá by získala vášho manažéra na základe vášho profilu Entra ID, ale pre účely tejto lekcie vyberte seba.

    Pre parameter **Predmet** zadajte nasledujúce,

    ```text
    Request type: new device
    ```

    Pre parameter **Telo** zadajte nasledujúce,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Premenovať akciu a nakonfigurovať vstupy](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.sk.png)

1. Ďalej aktualizujeme parameter **Telo** vstupu referenciami na dynamický obsah z **triggeru** alebo akcie **Získať položku**. Zadajte medzeru po druhom riadku, pretože vložíme meno používateľa z triggeru, **User**.

    Vyberte **ikonu blesku** alebo **ikonu fx** napravo.

    ![Pridať vstup User ako dynamický obsah](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.sk.png)

1. Na karte **Dynamický obsah** v paneli vyberte vstup **User** z triggeru.

    Vyberte **Pridať**, aby ste pridali dynamický obsah **User** do parametra **Telo** akcie.

    ![Vybrať vstup User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.sk.png)
1. Dynamický obsah zadaný spúšťačom je teraz referencovaný v parametri **Body** akcie. Rovnaký postup zopakujeme pre zostávajúce riadky v tele e-mailovej správy.

    ![Používateľský vstup pridaný](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.sk.png)

1. Kliknite do priestoru vedľa `Výrobca:`. Vyberte ikonu **blesku** alebo ikonu **fx** napravo.

    Na karte **Dynamický obsah** v rozbaľovacom paneli zadajte do vyhľadávacieho poľa nasledujúce,

    ```text
    manufacturer
    ```

    Vyberte vstup **Hodnota výrobcu** zo spúšťača a kliknite na **Pridať**.

    ![Pridať hodnotu výrobcu ako dynamický obsah](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.sk.png)

1. Kliknite do priestoru vedľa `Model:`. Vyberte ikonu **blesku** alebo ikonu **fx** napravo.

    Na karte **Dynamický obsah** v rozbaľovacom paneli zadajte do vyhľadávacieho poľa nasledujúce,

    ```text
    model
    ```

    Vyberte vstup **Model** z akcie **Získať položku** a kliknite na **Pridať**.

    ![Pridať model ako dynamický obsah](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.sk.png)

1. Pre text `Odkaz na položku v SharePointe` ho aktualizujeme na hypertextový odkaz v tele e-mailovej správy. Kliknite na začiatok riadku a vyberte ikonu **blesku** alebo ikonu **fx** napravo.

    ![Pridať dynamický obsah](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.sk.png)

1. Kliknite za HTML značku kotvy a vyberte ikonu **blesku** alebo ikonu **fx** napravo.

    Na karte **Dynamický obsah** v rozbaľovacom paneli zadajte do vyhľadávacieho poľa nasledujúce,

    ```text
    link to item
    ```

    Vyberte vstup **Odkaz na položku** z akcie **Získať položku** a kliknite na **Pridať**.

    ![Pridať odkaz na položku ako dynamický obsah](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.sk.png)

1. Musíme prepnúť na HTML editor výberom ikony **&lt;/&gt;**.

    ![Pridať používateľský vstup](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.sk.png)

1. HTML editor je teraz povolený. Kliknite pred text `Odkaz na položku v SharePointe`, pridajte HTML značku kotvy na vytvorenie hypertextového odkazu. Skopírujte a vložte nasledujúce.

    ```text
    <a href="
    ```

    ![HTML značka](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.sk.png)

1. Dynamický obsah vstupu **Odkaz na položku** je teraz referencovaný v parametri **Body**. Kliknite za vstup **Odkaz na položku**, skopírujte a vložte nasledujúce.

    ```text
    ">
    ```

    ![HTML značka](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.sk.png)

1. Kliknite za text `Odkaz na položku v SharePointe`, uzavrite HTML značku kotvy. Skopírujte a vložte nasledujúce.

    ```text
    </a>
    ```

    ![HTML značka](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.sk.png)

1. Vyberte ikonu **&lt;/&gt;** na prepnutie zobrazenia kódu.

    ![Vypnúť zobrazenie kódu](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.sk.png)

1. Potom znova vyberte ikonu **&lt;/&gt;** na opätovné prepnutie zobrazenia kódu.

    ![Prepnúť späť na zobrazenie kódu](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.sk.png)

1. Všimnite si, že sa objavilo niekoľko extra znakov `&lt;br&gt;`. Odstráňte tieto znaky.

    ![Odstrániť znaky](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.sk.png)

1. Teraz sme dokončili pridanie hypertextového odkazu do tela e-mailovej správy 😎 Vyberte ikonu **&lt;/&gt;** na prepnutie zobrazenia kódu.

    ![HTML značka upravená](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.sk.png)

1. Kliknite za text `Ďalšie komentáre od` pred dvojbodkou a vyberte ikonu **blesku** alebo ikonu **fx** napravo.

    ![Pridať parameter používateľa](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.sk.png)

1. Na karte **Dynamický obsah** v rozbaľovacom paneli zadajte do vyhľadávacieho poľa nasledujúce,

    ```text
    user
    ```

    Vyberte parameter **Používateľ** zo spúšťača a kliknite na **Pridať**.

    ![Pridať parameter používateľa ako dynamický obsah](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.sk.png)

1. Teraz vložíme výraz, ktorý zobrazí hodnotu Ďalších komentárov, ak ich používateľ poskytol v uzle **Opýtať sa adaptívnou kartou**, inak zobrazí "Žiadne", ak používateľ neposkytol žiadne komentáre.

    Kliknite za dvojbodku a vyberte ikonu **blesku** alebo ikonu **fx** napravo.

    ![Pridať výraz](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.sk.png)

1. Na karte **Funkcia** v rozbaľovacom paneli a v poli výrazu vyššie zadajte nasledujúce,

    ```text
    if(empty())
    ```

    Tento výraz používa funkciu `if` na podmienkový výrok.

    Ďalšia použitá funkcia je `empty`, ktorá kontroluje, či hodnota existuje alebo nie v reťazcovom parametri. Reťazcový parameter, ktorý sa má referencovať, je hodnota vstupného parametra `AdditionalComments` zo spúšťača.

    ![Ak prázdne](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.sk.png)

1. Ďalej kliknite **do zátvoriek** za funkciou `empty`. Vložíme vstupný parameter `AdditionalComments` zo spúšťača.

    Vyberte kartu **Dynamický obsah**. Zadajte do vyhľadávacieho poľa nasledujúce,

    ```text
    Additional
    ```

    Posuňte sa dolu v paneli a vyberte vstup **AdditionalComments** zo spúšťača. Parameter bude teraz pridaný ako reťazcový parameter vo výraze.

    ![Pridať AdditionalComments ako dynamický obsah](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.sk.png)

1. Ďalej definujeme logiku **_true_**, kde ak je reťazcový parameter `AdditionalComments` prázdny, chceme zobraziť reťazec (text) `Žiadne`.

    Po zátvorke, ktorá uzatvára reťazcový parameter, zadajte nasledujúce,

    ```text
    , 'None',
    ```

    ![Logika true](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.sk.png)

1. Nakoniec definujeme logiku **_false_**, kde ak reťazcový parameter `AdditionalComments` nie je prázdny, chceme zobraziť hodnotu vstupného parametra **AdditionalComments** zo spúšťača.

    > Pripomienka: táto hodnota bude z poľa Ďalšie komentáre adaptívnej karty v uzle **Opýtať sa adaptívnou kartou** v téme **Požiadať o zariadenie**.

    Po čiarke za našou logikou **_true_** vyberte kartu **Dynamický obsah**. Zadajte do vyhľadávacieho poľa nasledujúce,

    ```text
    Additional
    ```

    Posuňte sa dolu v paneli a vyberte vstup **AdditionalComments** zo spúšťača. Parameter bude teraz pridaný ako reťazcový parameter vo výraze.

    Teraz ho pridajte do nášho parametra **Body** výberom **Pridať**.

    ![Logika false](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.sk.png)

1. Výborne, náš výraz je kompletný! Výraz bol teraz pridaný do parametra **Body**. Nakoniec naformátujte posledný riadok kurzívou.

    ![Kurzíva](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.sk.png)

1. Teraz aktualizujeme akciu **Odpovedať agentovi**, aby sme poslali hodnotu parametra **Hodnota modelu** z akcie **Získať položku** späť agentovi.

    Podržte ľavé tlačidlo myši a pohybujte sa smerom nahor v návrhárovi, aby ste videli akciu **Odpovedať agentovi**.

    Vyberte akciu **Odpovedať agentovi** a vyberte výstup **Text** ako typ.

    ![Vybrať výstup Text](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.sk.png)

1. Zadajte nasledujúce ako názov výstupu.

    ```text
    ModelValue
    ```

    ![Výstup ModelValue](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.sk.png)

1. Vyberte pole hodnoty a vyberte ikonu **blesku** alebo ikonu **fx** napravo.

    ![Vložiť výraz](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.sk.png)

1. Na karte **Dynamický obsah** v rozbaľovacom paneli zadajte do vyhľadávacieho poľa nasledujúce,

    ```text
    model
    ```

    Vyberte parameter **Model** z akcie **Získať položku** a kliknite na **Pridať**.

    ![Pridať parameter Model ako dynamický obsah](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.sk.png)

1. Parameter **Model** je teraz hodnotou textového výstupu. Vyberte **Uložiť koncept**, aby ste uložili tok agenta.

    Teraz sme dokončili tok agenta 👏🏻

    ![Vybrať uložiť koncept](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.sk.png)

1. Urobme ešte jednu aktualizáciu toku agenta pred publikovaním. Vyberte kartu **Prehľad** a kliknite na **Upraviť**.

    ![Vybrať Upraviť](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.sk.png)

1. Pre **Názov toku** skopírujte a vložte nasledujúce.

    ```text
    Send device request email
    ```

    Pre **Popis** vyberte ikonu **obnoviť**, aby ste pomocou AI automaticky vygenerovali popis na základe spúšťača a akcií v toku agenta.

    Vyberte **Uložiť**, aby ste uložili aktualizovaný názov a popis toku agenta.

    ![Premenovať, pridať popis a uložiť detaily](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.sk.png)

1. Vyberte kartu **Návrhár** a kliknite na **Publikovať**, aby ste publikovali tok agenta, ktorý môže byť pridaný ako uzol v téme **Požiadať o zariadenie**.

    ![Publikovať](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.sk.png)

1. Krátko sa zobrazí potvrdzujúca správa, ktorá potvrdí, že tok agenta bol publikovaný.

    ![Potvrdzujúca správa](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.sk.png)

### 9.2 Pridanie toku agenta do témy

Teraz pridajme tok agenta do témy **Požiadať o zariadenie**.

1. Vyberte **Agenti** v ponuke na ľavej strane a vyberte **Contoso Helpdesk Agent**.

    ![Vybrať Agenti](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.sk.png)

1. Vyberte kartu **Témy**.

    ![Vybrať kartu Témy](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.sk.png)

1. Vyberte tému **Požiadať o zariadenie**.

    ![Vybrať tému Požiadať o zariadenie](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.sk.png)

1. Posuňte sa dolu k uzlu **Opýtať sa adaptívnou kartou** a pridajte nový uzol.

    Vyberte **Pridať nástroj** a na karte **Základné nástroje** v rozbaľovacom paneli vyberte tok agenta **Odoslať e-mailovú žiadosť o zariadenie**, ktorý sme nedávno vytvorili a publikovali.

    ![Vybrať tok agenta](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.sk.png)

1. Pre vstupy spúšťača nášho toku agenta musíme vybrať výstupné premenné z uzla **Opýtať sa adaptívnou kartou**.

    Vyberte ikonu **trojbodky (...)** pre vstup **DeviceSharePointId**.

    ![Vybrať premennú](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.sk.png)

1. Vyberte premennú **deviceSelectionId**, ktorá je jedným z výstupov definovaných v uzle **Opýtať sa adaptívnou kartou**.

    ![Vybrať premennú deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.sk.png)

1. Ďalej vyberte ikonu **trojbodky (...)** pre vstup **Používateľ**.

    ![Vybrať premennú](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.sk.png)

1. Vyberte kartu **Systém** v rozbaľovacom paneli premenných a vyberte **User.DisplayName**. Táto premenná uchováva zobrazované meno interného používateľa, ktorý interaguje s agentom.

    ![Vybrať systémovú premennú User.DisplayName](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.sk.png)

1. Ďalej vyberte ikonu **väčší ako** pre **Rozšírené vstupy**, aby ste rozbalili a videli vstup **AdditionalComments**.

    ![Rozbaliť rozšírené vstupy](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.sk.png)

1. Vyberte ikonu **trojbodky (...)** pre vstup AdditionalComments.

    ![Vybrať premennú](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.sk.png)

1. Vyberte kartu **Vzorec** a ikonu rozbalenia v rozbaľovacom paneli premenných, pretože použijeme výraz Power Fx.

    ![Karta Vzorec](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.sk.png)

1. Podobne ako výraz v toku agenta, ktorý vykonáva podmienkovú kontrolu pomocou funkcie _if_, ale tentokrát
    - pomocou funkcií Power Fx,
    - a vložením buď žiadnej hodnoty, alebo hodnoty výstupnej premennej `commentsId` z uzla **Opýtať sa adaptívnou kartou**.

    Zadajte nasledujúce funkcie do poľa Power Fx,

    ```text
    If(IsBlank())
    ```

Tento výraz používa funkciu `If` pre podmienkový príkaz if-else.

Ďalšou použitou funkciou je `IsBlank`, ktorá kontroluje, či hodnota existuje alebo neexistuje v reťazcovom parametri. Reťazcový parameter, na ktorý sa odkazuje, je výstupná premenná `commentsId` z uzla **Ask with adaptive card**.

![Funkcie If a IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.sk.png)

1. Ďalej kliknite **do zátvoriek** za funkciou `IsBlank`. Vložíme výstupnú premennú `commentsId` z uzla **Ask with adaptive card**.

   Zadajte nasledujúce do zátvoriek,

    ```text
    Topic.commentsId
    ```

   A pridajte čiarku za zátvorku.

   ![Odkaz na výstup commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.sk.png)

1. Teraz definujeme logiku

   - keď je **_true_** - ak je reťazcový parameter `Topic.commentsId` prázdny, nechceme vložiť žiadnu hodnotu.
   - keď je **_false_** - ak reťazcový parameter `Topic.commentsId` nie je prázdny, vložíme hodnotu premennej commentsId.

   Po zátvorke, ktorá uzatvára reťazcový parameter, zadajte nasledujúce,

    ```text
    "", Topic.commentsId)
    ```

   Výraz Power Fx by mal vyzerať nasledovne,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   Skvelá práca, náš výraz je hotový! 🙌🏻 Teraz vyberte **Insert**, aby ste nastavili vstupný parameter toku agenta na výraz Power Fx.

   ![Výraz Power Fx](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.sk.png)

1. **Uložte** tému.

### 9.3 Aktualizácia témy Request device s viacerými uzlami pre lepší používateľský zážitok

Ďalej pridáme dva ďalšie uzly:

- **Send a message** - bude slúžiť ako potvrdzujúca správa, ktorá odkazuje na vybrané zariadenie a informuje, že ich požiadavka bola odoslaná.

- **Topic management** - na ukončenie konverzácie presmerujeme na uzol **End of conversation**.

Začnime!

1. Vyberte **plus + ikonu** pod uzlom agent flow a vyberte uzol **Send a message**.

   ![Pridať uzol send a message](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.sk.png)

1. Zadajte nasledujúce do poľa správy,

    ```text
    Thanks
    ```

   Potom vyberte **Insert variable**, aby sme odkazovali na meno používateľa.

   ![Vložiť premennú](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.sk.png)

1. Vyberte kartu **System** a vyhľadajte `User` v poli vyhľadávania. Vyberte premennú **User.DisplayName**.

   ![Vybrať systémovú premennú](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.sk.png)

1. Zadajte nasledujúce do poľa správy,

    ```text
    . Your selected device,
    ```

   Potom vyberte **Insert variable** a tentokrát na karte **Custom** vyberte premennú **ModelValue**.

   Potom zadajte nasledujúce, aby ste dokončili správu.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   Správa by mala vyzerať nasledovne.

   ![Send message](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.sk.png)

1. Nakoniec vyberte **plus + ikonu** pod uzlom **Send a message** a vyberte **Topic management**, následne **Go to another topic** a vyberte **End of Conversation**.

   ![Topic management](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.sk.png)

1. **Uložte** tému.

   ![Uložiť](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.sk.png)

### 9.4 Testovanie agenta pomocou viacerých scenárov

Skvelá práca!!! 😁 Teraz môžeme otestovať nášho agenta.

#### 9.4.1 Požiadanie o zariadenie a zadanie komentára v adaptívnej karte

1. **Obnovte** testovací panel, vyberte ikonu **activity map** a zadajte nasledujúce ako správu agentovi.

    ```text
    I need a laptop
    ```

   ![Testovanie agenta](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.sk.png)

1. Agent spustí **Available devices** a odpovie zoznamom dostupných zariadení. Zadajte nasledujúce ako odpoveď na otázku, či chcete požiadať o zariadenie.

    ```text
    Yes
    ```

   ![Áno](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.sk.png)

1. Všimnite si, ako agent spustil **Request device** podľa pokynov agenta a že adaptívna karta sa teraz zobrazuje v správe agenta.

   Vyberte zariadenie **Surface Laptop 15** a pridajte nasledujúci komentár.

    ```text
    I need 16GB of RAM please
    ```

   ![Vybrať zariadenie a zadať komentár](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.sk.png)

1. Posuňte sa nadol, kým neuvidíte tlačidlo **Submit Request**, a vyberte ho na odoslanie adaptívnej karty agentovi.

   ![Odoslať požiadavku](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.sk.png)

1. Vyberte **Allow**, aby agent mohol použiť vaše poverenia na autentifikáciu pripojenia dvoch akcií konektora.

   ![Povoliť](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.sk.png)

1. Agent potom zobrazí potvrdzujúcu správu, ktorá obsahuje vybraný model, a následne presmeruje na tému **End of Conversation**. Super!

   ![Požiadavka odoslaná](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.sk.png)

1. Vyberte **Áno**, aby ste overili zvyšok témy **End of Conversation**.

   ![Vybrať Áno](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.sk.png)

1. Ďalej ohodnoťte skúsenosť výberom ktoréhokoľvek z hviezdičiek na karte hodnotiacej škály.

   Agent potom pokračuje k poslednému uzlu **Question** v téme **End of Conversation**. Vyberte **Nie**.

   ![Téma End of Conversation](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.sk.png)

1. Téma sa potom dokončí, keď sa v testovacom paneli zobrazí záverečná správa.

   ![Téma End of Conversation](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.sk.png)

1. Skontrolujte svoju schránku e-mailového účtu, aby ste si prezreli e-mail, ktorý agent odoslal manažérovi. Môžete vidieť podrobnosti o vybranom zariadení a poznámku zadanú v adaptívnej karte.

   ![Prijatý e-mail](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.sk.png)

1. Kliknite na hypertextový odkaz a prehliadač by mal načítať položku SharePointu zariadenia. Skvelé!

   ![Kliknúť na odkaz v e-maile](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.sk.png)

#### 9.4.2 Požiadanie o zariadenie bez zadania komentára v adaptívnej karte

Teraz otestujeme scenár, keď komentár nie je zadaný.

1. Opakujte rovnaké kroky:

   - **Obnovte** testovací panel a vyberte ikonu **activity map**
   - Zadajte správu, `Potrebujem laptop`
   - Odpovedzte `Áno` na otázku o požiadavke na zariadenie

   ![Požiadavka na zariadenie](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.sk.png)

1. Tentokrát vyberte zariadenie **Surface Laptop 13** a nezadajte komentár.

   ![Vybrať zariadenie](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.sk.png)

1. **Odošlite** požiadavku výberom tlačidla **Submit Request**.

   ![Odoslať požiadavku](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.sk.png)

1. Tentokrát e-mail prijatý vo vašej schránke zobrazí **None** ako komentár.

   ![Prijatý e-mail](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.sk.png)

#### 9.4.3 Nepožiadanie o zariadenie

Otestujme posledný scenár, ktorý je nepožiadanie o zariadenie, a téma **Goodbye** by mala byť spustená podľa pokynov agenta.

1. Opakujte rovnaké kroky:

   - **Obnovte** testovací panel a vyberte ikonu **activity map**
   - Zadajte správu, `Potrebujem laptop`
   - Tentokrát odpovedzte `Nie` na otázku o požiadavke na zariadenie

   ![Testovanie agenta](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.sk.png)

1. Agent spustil tému **Goodbye** a otázka definovaná v téme je položená.

   ![Spustená téma Goodbye](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.sk.png)

## ✅ Misia splnená

Gratulujeme! 👏🏻 Naučili ste sa, ako vytvoriť tok agenta a pridať ho do našej existujúcej témy **Request device**, a ako presmerovať agenta na inú tému.

Toto je koniec **Lab 09 - Add an agent flow for automation and enhance topic capabilities**, vyberte odkaz nižšie na presun do ďalšej lekcie. V nasledujúcej lekcii rozšírime prípad použitia z tejto laboratórnej úlohy.

⏭️ [Presun na lekciu **Add Event Triggers - Enable autonomous agent capabilities**](../10-add-event-triggers/README.md)

## 📚 Taktické zdroje

🔗 [Predstavujeme agentové toky: Transformácia automatizácie pomocou AI-first pracovných postupov](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Prehľad agentových tokov](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Použitie agentových tokov s vaším agentom](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Zoznam funkcií v referenčnej príručke](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Agentové toky v Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analytika" />

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.