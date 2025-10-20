<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-20T17:15:30+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "cs"
}
-->
# 🚨 Mise 07: Přidání nového tématu s triggerem a uzly

## 🕵️‍♂️ KRYCÍ NÁZEV: `OPERACE ZŮSTAT NA TÉMATU`

> **⏱️ Časový rámec operace:** `~60 minut`

🎥 **Podívejte se na průvodce**

[![Náhled videa triggeru](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.cs.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Podívejte se na průvodce na YouTube")

## 🎯  Stručný popis mise

Vytvořili jste agenta. Poslouchá, učí se a odpovídá na otázky - ale teď je čas být více taktičtí. V této misi se ponoříte hluboko pod povrch a naučíte svého agenta, jak přesně reagovat na konkrétní podněty.

S tématy a triggery může váš agent:

- Rozpoznat záměr

- Směrovat konverzace pomocí logiky

- Sbírat a ukládat proměnné

- Spouštět toky a provádět akce

Nevytváříte jen dialog, ale zapojujete jeho rozhodovací centrum. Vítejte v Neural Nexus.

## 🔎 Cíle

V této misi se naučíte:

1. Porozumět tomu, co jsou témata a jakou roli hrají při vytváření strukturovaných konverzací pro vašeho agenta
1. Naučit se anatomii témat včetně trigger frází a konverzačních uzlů
1. Prozkoumat různé typy konverzačních uzlů a jak používat Power Fx pro dynamickou logiku
1. Vytvořit vlastní témata od základu pro zpracování specifických požadavků a úkolů uživatelů
1. Vytvořit funkční téma, které se propojí s daty SharePointu pomocí konektorů a nástrojů

## 🤔 Co je téma?

Téma je strukturovaná konverzace, která pomáhá vašemu agentovi reagovat na konkrétní otázky nebo úkoly uživatelů. Představte si téma jako malou konverzaci nebo úkol, který váš agent zvládne. Každé téma je navrženo tak, aby reagovalo na konkrétní otázku nebo požadavek uživatele.

### 🌌 Účel tématu

Existují tři běžné účely témat podle potřeb uživatelů:

**Informační** - odpovídá na otázky jako:

- `Co je …?`
- `Kdy bude …?`
- `Proč …?`
- `Můžete mi říct …?`

**Dokončení úkolu** - pomáhá uživatelům _něco udělat_:

- `"Chci …"`
- `"Jak mohu …?"`
- `"Potřebuji …?"`

**Řešení problémů** - řeší problémy:

- `Něco nefunguje …`
- `Narazil jsem na chybovou zprávu …`
- `Vidím něco neočekávaného …?`

Můžete také vytvořit témata pro nejasné otázky jako `Potřebuji pomoc`, které požádají uživatele o více podrobností před pokračováním.

## 🐦 Proč jsou témata užitečná?

Témata vám pomáhají:

- Organizovat znalosti vašeho agenta.

- Zajistit, aby konverzace působily přirozeně.

- Efektivně řešit problémy uživatelů.

## 🪺 Typy témat

1. **Systémová témata** - jsou vestavěná a zpracovávají běžné události jako:
    - Zahájení konverzace
    - Ukončení konverzace
    - Zpracování chyb
    - Požádání uživatelů o přihlášení
    - Předání lidskému agentovi

1. **Vlastní témata** - vytváříte je pro zpracování specifických úkolů nebo otázek jako:
    - Žádost o dovolenou zaměstnance
    - Žádost o nový nebo náhradní zařízení

![Typy témat](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.cs.png)

## 🧬 Anatomie tématu

Každé téma obvykle obsahuje následující.

### 🗣️ Trigger fráze

Jsou to slova nebo věty, které uživatelé mohou říci, aby téma spustili.

**Příklady:**

Pro téma žádosti o dovolenou mohou být trigger fráze:

- `Chci si vzít dovolenou`
- `Žádost o dovolenou`
- `Podat žádost o volno`
- `Jak mohu podat žádost o dovolenou?`

Pro téma žádosti o zařízení mohou být trigger fráze:

- `Potřebuji nové zařízení`
- `Mohu požádat o zařízení?`
- `Můžete mi pomoci s žádostí o zařízení`

### 💬 Konverzační uzly

Téma se skládá z uzlů, což jsou kroky, které agent následuje, jakmile je téma spuštěno. Tyto kroky propojujete, abyste vytvořili konverzační tok, který váš agent následuje při interakci s uživateli.

Představte si je jako instrukce nebo akce, například:

- Kladení otázek uživateli
- Posílání zpráv
- Volání externí služby, jako je systém správy dovolené
- Nastavení nebo kontrola proměnných
- Použití podmínek pro větvení konverzace
- Přesměrování na jiné téma

![Konverzační uzly](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.cs.png)

Hlavní typy uzlů, které můžete přidat do agenta, jsou následující:

#### Poslat zprávu

- **Účel** - posílá zprávu uživateli.
- **Příklad** - `Děkuji za vaši žádost! Pomohu vám s tím.`

Tento uzel umožňuje vašemu agentovi posílat zprávy uživatelům, které mohou být jednoduchý text nebo bohatý obsah jako obrázky, videa, karty, rychlé odpovědi a adaptivní karty.

Můžete personalizovat zprávy pomocí proměnných, přidat více variant zpráv pro rozmanitost a dokonce přizpůsobit výstup řeči pro kanály s podporou hlasu.

!!! tip
    Představte si to jako blok "řekni něco", který pomáhá vašemu agentovi jasně a interaktivně komunikovat s uživateli.

#### Položit otázku

- **Účel** - klade uživateli otázku a čeká na jeho odpověď.
- **Příklad** - `Jaké jsou vaše termíny dovolené?`

Tento uzel se používá k tomu, aby se uživatelů zeptal na konkrétní informace během konverzace a uložil jejich odpovědi do proměnných pro pozdější použití.

Můžete přizpůsobit typ otázky, například textový vstup, nebo použít entity pro definovaný seznam hodnot, ze kterých si uživatel vybírá, a definovat, jak by se měl agent chovat, pokud uživatel poskytne neplatnou odpověď nebo otázku přeskočí.

Podporuje také bohatý obsah jako obrázky a rychlé odpovědi a umožňuje jemně doladit nastavení validace, opakovaného dotazování a přerušení, aby konverzace probíhala hladce.

!!! tip
    Představte si to jako blok "zeptejte se a poslouchejte", který pomáhá vašemu agentovi interagovat s uživateli strukturovaným způsobem, který definujete.

#### Zeptat se pomocí adaptivní karty

- **Účel** - posílá bohatou, interaktivní kartu pomocí JSON.
- **Příklad** - karta, která zobrazuje výběr data v kalendáři, aby si uživatel mohl vybrat datum.

Tento uzel zobrazuje bohaté, interaktivní karty, které mohou uživatelé vyplnit a odeslat, například formuláře s textovými poli, tlačítky a obrázky. Zachycuje vstup uživatele a ukládá jej do proměnných, které může váš agent později použít v konverzaci.

!!! tip
    Představte si to jako přizpůsobitelný blok "tvůrce formulářů", který činí vašeho agenta více interaktivním a schopným sbírat podrobné informace od uživatelů.

#### Přidat podmínku

- **Účel** - přidává logiku do konverzace. Zkontroluje něco a rozhodne, co dělat dál.
- **Příklad** - pokud uživatel řekne `Ano`, přejděte na další krok. Pokud `Ne`, ukončete konverzaci.

Tento uzel vytváří rozhodovací body v konverzačním toku vašeho agenta tím, že kontroluje, zda proměnná splňuje určité kritérium. Na základě toho, zda je podmínka pravdivá nebo nepravdivá, agent následuje různé cesty.

!!! tip
    Představte si to jako blok "pokud-else", který pomáhá vašemu agentovi rozhodovat se na základě vstupů uživatele nebo uložených dat v proměnných.

#### Správa proměnných

- **Účel** - ukládá nebo maže informace (nazývané proměnné) během konverzace.
- **Příklad** - uloží datum, které uživatel vybral v uzlu Položit otázku, který zobrazuje adaptivní kartu.

Tento uzel umožňuje ukládat a spravovat informace během konverzace, může to být jméno uživatele, odpověď nebo preference. Můžete použít různé typy proměnných, jako je text, čísla nebo data, a mohou být omezeny na jedno téma, sdíleny mezi tématy (globální) nebo dokonce získány ze systému nebo prostředí.

!!! tip
    Představte si to jako "paměťovou krabičku", která pomáhá vašemu agentovi pamatovat si informace a používat je, jak konverzace s uživatelem pokračuje.

#### Správa témat

- **Účel** - přesune konverzaci na jiné téma nebo krok v rámci tématu, přenese konverzaci nebo ukončí téma či konverzaci.
- **Příklad** - přesměrování na téma "Politika dovolené".

Tento uzel umožňuje vašemu agentovi přejít z jednoho tématu na jiné bez restartování konverzace, ukončit téma, přenést nebo ukončit konverzaci, nebo přejít na jiný krok v rámci stejného tématu. Pomáhá uživatelům procházet různé části konverzačního toku hladkým přechodem mezi tématy a můžete mezi nimi předávat proměnné, aby se zachoval kontext.

!!! tip
    Představte si to jako blok "přejít na jinou sekci/krok", který pomáhá vašemu agentovi být flexibilní při komunikaci s uživateli.

#### Přidat nástroj

- **Účel** - připojuje se k nástrojům, jako jsou konektory, toky agenta, výzvy, vlastní vyhledávání, vyhledávací dotazy, dovednosti, protokol kontextu modelu.
- **Příklad** - Tok agenta spuštěný po odeslání žádosti o dovolenou uživatelem.

Tento uzel dává vašemu agentovi schopnosti interagovat s externími systémy nebo provádět specifické úkoly, jako je posílání e-mailů, kontrola počasí nebo přístup k databázím. Můžete přidat nástroje pomocí vestavěných konektorů, vlastních API, toků agenta, výzev nebo připojení k serverům Model Context Protocol (MCP), a dokonce i _grafické uživatelské rozhraní_ automatizace pro desktopové aplikace prostřednictvím nástroje pro použití počítače.

!!! tip
    Představte si nástroje jako "akční bloky", které dávají vašemu agentovi super schopnosti dělat věci nad rámec _chatování_, jako je volání API, spuštění procesu nebo automatické sbírání vstupů uživatele.

#### Generativní odpovědi uzel

- **Účel** - používá velký jazykový model k generování přirozených, lidsky podobných odpovědí na základě otázky uživatele a připojených dat.
- **Příklad** - používá připojený zdroj znalostí, který obsahuje informace o nárocích na dovolenou, aby odpověděl na otázky uživatele týkající se žádostí o dovolenou.

Tento uzel umožňuje vašemu agentovi odpovídat na otázky uživatelů pomocí informací z různých zdrojů znalostí, jako jsou webové stránky, dokumenty, SharePoint nebo vlastní data. Může být použit jako záložní řešení, když není nalezeno žádné odpovídající téma, nebo v rámci tématu k poskytování podrobnějších, dynamických odpovědí na základě specifických zdrojů, které jste nakonfigurovali pro svého agenta.

!!! tip
    Představte si to jako "chytrý odpovědní blok", který pomáhá vašemu agentovi poskytovat užitečné, přesné odpovědi hledáním důvěryhodného obsahu, který definujete.

#### Uzel HTTP požadavku

- **Účel** - připojuje vašeho agenta k externím systémům odesíláním API požadavků (například `GET` nebo `POST`) pro získání nebo aktualizaci dat.
- **Příklad** - když se uživatel zeptá na zůstatek svých dnů dovolené, agent provede `GET` požadavek na systém správy dovolené, extrahuje `remainingLeaveDays` z odpovědi API a odpoví uživateli s hodnotou.

Tento uzel umožňuje vašemu agentovi připojit se k externím systémům odesíláním REST API požadavků, jako jsou `GET` nebo `POST` požadavky. Můžete přizpůsobit požadavek pomocí hlaviček, obsahu těla a dokonce použít Power Fx k zahrnutí dynamických dat, poté uložit odpověď do proměnných pro pozdější použití v konverzaci.

!!! tip
    Představte si to jako "získat informace" blok, který pomáhá vašemu agentovi komunikovat s jinými službami, jako je získání detailů uživatele nebo odeslání dat do jiného systému.

#### Poslat událost

- **Účel** - umožňuje vašemu agentovi posílat akce, které nejsou zprávami, jako jsou systémové aktualizace nebo spouštění nástrojů - klientovi nebo kanálu, což mu pomáhá provádět úkoly.
- **Příklad** - reagování na připojení uživatele do chatu zobrazením uvítací zprávy.

Tento uzel umožňuje vašemu agentovi posílat akce, které nejsou zprávami, externím systémům nebo kanálům, které se poté rozhodnou, jak reagovat. Každé události dáte název a připojíte hodnotu, která může být jednoduché číslo nebo text, proměnná nebo Power Fx vzorec, a ta se odešle jako JSON objekt.

!!! tip
    Představte si to jako "tichý spouštěč" blok, který pomáhá vašemu agentovi dělat věci na pozadí nebo komunikovat s externími nástroji bez potřeby, aby uživatel něco řekl.

## 🏋🏻‍♀️ Použití Power Fx ve vašich uzlech

V Copilot Studio je Power Fx nízkokódový programovací jazyk používaný k přidání logiky a dynamického chování vašemu agentovi. Je to stejný jazyk používaný v Microsoft Power Apps a je navržen tak, aby byl jednoduchý a podobný Excelu, což usnadňuje jeho použití jak vývojářům, tak i těm, kteří nejsou vývojáři.

![Power Fx vzorec](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.cs.png)

### Co Power Fx dokáže v tématech

- Nastavit a manipulovat s proměnnými
      - Příklad: `Set(userName, "Adele Vance")`
- Vytvářet podmínky
      - Příklad: `If(score > 80, "Pass", "Fail")`
- Formátovat a transformovat data
      - Příklad: `Text(DateValue, "dd/mm/yyyy")`

### Proč používat Power Fx?

- **Flexibilní:** můžete vytvářet logiku bez psaní plných řádků kódu.

- **Známý:** pokud jste používali vzorce v Excelu, je to velmi podobné.

- **Silný:** umožňuje personalizovat konverzace, validovat vstupy a kontrolovat, jak se váš agent chová na základě dat uživatele.


To vám umožní popsat, co chcete, pomocí přirozeného jazyka, a Copilot za vás vytvoří konverzaci. Totéž platí při úpravě vašeho tématu – použijte přirozený jazyk a Copilot vaše téma zkontroluje a upraví.

#### Co Copilot podporuje

- Může vytvářet a upravovat:
      - Uzly zpráv
      - Uzly otázek
      - Uzly podmínek
- Nepodporuje pokročilá nastavení, jako je způsob opakovaného dotazování uživatele, pokud neodpoví, nebo jak spravovat přerušení během otázky. Tato nastavení můžete stále upravit ručně, pokud je to potřeba.

#### Proč je to užitečné

- Zrychluje vývoj díky asistenci AI.
- Umožňuje soustředit se na logiku a uživatelskou zkušenost místo opakovaného nastavování.
- Usnadňuje iteraci a zlepšování konverzačních toků s minimálním úsilím.

#### ✨ Příklady výzev

- **Vytvoření tématu**
      - `Přijměte jméno, věk a datum narození uživatele a poté mu jeho odpovědi zopakujte.`
      - `Shromážděte ulici, stát a PSČ uživatele. Uživatel by měl mít možnost každou otázku zopakovat až 4krát.`

- **Úprava tématu**
      - `Přidejte otázku, která se ptá na datum narození uživatele.`
      - `Shrňte shromážděné informace v Adaptive Card.`

## 👩🏻‍🎨 Dobře, jak navrhnout témata pro mého agenta?

### 🧙🏻‍♂️ Krok 1 - pochopte, co uživatelé potřebují

Začněte identifikací běžných otázek nebo úkolů, které budou uživatelé od vašeho agenta požadovat. Mohou to být:

- Otázky, které uživatelé často kladou, například: `Jaké mám nároky na nemocenské dny?`
- Běžné úkoly, které chtějí uživatelé splnit, například podání formuláře
- Problémy, kterým uživatelé často čelí, například problémy s přihlášením

### 📦 Krok 2 - Skupinové scénáře

Organizujte potřeby uživatelů do tří kategorií na základě toho, co jsme se naučili dříve – účel tématu:

- Informativní - uživatel chce něco vědět
- Dokončení úkolu - uživatel chce něco udělat
- Řešení problémů - uživatel potřebuje pomoc s řešením problému

### 🗺️ Krok 3 - Navrhněte konverzaci

Náčrtněte jednoduchý tok konverzace, jak by měl agent reagovat.

- Začněte pozdravem nebo potvrzením
- Položte doplňující otázky, abyste získali podrobnosti
- Poskytněte odpovědi nebo proveďte akce

!!! tip
    Udržujte konverzaci krátkou a zaměřenou. Ptejte se jen na to, co je nezbytné.

### 🔀 Krok 4 - Zpracování různých typů konverzací

Navrhněte pro:

- **Jednorázové dotazy** - jedna otázka, jedna odpověď

- **Víceotáčkové dotazy** - konverzace s otázkami a odpověďmi

Příklad:

- Uživatel: `Chci požádat o dovolenou.`

- Agent: `Jistě! Od jakého data chcete, aby vaše dovolená začala?`

- Uživatel: `15. července`

- Agent: `Rozumím. A kdy vaše dovolená skončí?`

- Uživatel: `22. července.`

- Agent: `Děkuji! Jaký je důvod vaší dovolené?`

- Uživatel: `Rodinná dovolená.`

- Agent: `Děkuji za informace. Zadal jsem vaši žádost o dovolenou od 15. července do 22. července z důvodu rodinné dovolené. Brzy obdržíte potvrzení.`

### 🤖 Krok 5 - Použití AI na neočekávané otázky

I když jste navrhli téma pro žádosti o dovolenou, uživatelé mohou klást otázky, které nejsou přímo pokryty. Zde přichází na řadu funkce AI, jako je systémové téma _Conversational boosting_.

Toto téma zahrnuje uzel generativních odpovědí, který umožňuje vašemu agentovi okamžitě využívat připojené zdroje znalostí. Jakékoli zdroje znalostí přidané na úrovni agenta jsou automaticky zahrnuty v uzlu generativních odpovědí v rámci systémového tématu _Conversational boosting_.

#### Příklad

- Uživatel: `Mohu si přenést nevyužité dny dovolené do příštího roku?`

Tato otázka nemusí být součástí vašeho předem definovaného toku tématu, zejména pokud vaše téma pokrývá pouze podávání žádostí o dovolenou.

#### Jak AI pomáhá

Pokud je váš agent připojen k dokumentům o politice HR vaší společnosti nebo k internímu webu, AI může:

- Vyhledat relevantní politiku dovolené
- Porozumět a shrnout pravidla
- Agent odpoví: `Podle politiky HR můžete přenést nevyužité dny dovolené do příštího kalendářního roku. Pro více informací se podívejte na sekci o politice dovolené na HR portálu.`

#### Proč je to užitečné

- Nemusíte manuálně vytvářet téma pro každou otázku týkající se politiky.
- AI může získat přesné odpovědi z důvěryhodných zdrojů znalostí.
- Zlepšuje uživatelskou zkušenost tím, že agent působí chytřeji a pohotověji.

### 🔬 Krok 6 - Testování tématu, toku konverzace

Před publikováním vašeho tématu:

- Testujte pomocí skutečných otázek nebo vzorových vstupů.
- Ujistěte se, že působí přirozeně a užitečně.

!!! tip
    Při testování aplikujte vylepšení na vaše téma, například přidání dalších uzlů nebo odstranění uzlů a jejich nahrazení přesměrováním na jiné téma.

### ⚠️ Krok 7 - Vyhněte se duplikaci obsahu webových stránek

Nekopírujte to, co už je na vašem webu.

- Zaměřte se na témata, na která se uživatelé často ptají.
- Přidávejte nová témata na základě historie chatu nebo požadavků na podporu.

### ✨ Příklad toku konverzace

Níže je příklad tématu, které zpracovává žádosti o dovolenou.

#### Krok 1: Spouštěcí fráze

Uživatel napíše,

`Chci požádat o dovolenou`

#### Krok 2: Agent se ptá na podrobnosti pomocí Adaptive Card

Agent se ptá,

`Jistě! Jaké datum byste si přáli na dovolenou?`

Adaptive Card obsahuje ovládací prvky pro výběr data začátku a konce.

#### Krok 3: Uživatel poskytne data

Uživatel vybere datum začátku jako 5. srpna 2025 a datum konce jako 10. srpna 2025 a odešle kartu. Hodnoty dat jsou uloženy ve výstupu Adaptive Card jako proměnné.

#### Krok 4: Spuštění cloudového toku

Cloudový tok Power Automate byl spuštěn, který vytvoří novou žádost v systému správy dovolené a odešle e-mail, aby informoval manažera o žádosti o dovolenou.

#### Krok 5: Odeslání potvrzovací zprávy uživateli

Agent odpoví,

`Vaše žádost o dovolenou od 5. srpna do 10. srpna byla odeslána. Váš manažer ji přezkoumá a brzy se vám ozve.`

## 🧪 Laboratoř 07 - Přidání nového tématu s konverzačními uzly

Nyní se naučíme, jak přidat nové téma s triggerem a nástroji. Tato laboratoř pokryje vytvoření tématu od začátku, abyste pochopili, jak přizpůsobit témata vašim potřebám.

- [7.1 Přidání nového tématu od začátku](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Definování vstupů a výstupů triggeru](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Přidání nástroje pomocí konektoru](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Případ použití

**Jako** zaměstnanec

**Chci** vědět, jaká zařízení jsou k dispozici

**Abych** měl seznam dostupných zařízení

Začněme!

### Předpoklady

1. **Seznam SharePoint**

    Budeme používat seznam **Devices** na SharePointu z [Lekce 00 - Nastavení kurzu - Krok 3: Vytvoření nového webu SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Pokud jste seznam **Devices** na SharePointu nenastavili, vraťte se prosím na [Lekce 00 - Nastavení kurzu - Krok 3: Vytvoření nového webu SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agent Contoso Helpdesk**

    Budeme používat stejný agent, který byl vytvořen dříve v [Lekce 06 - Vytvoření vlastního agenta pomocí přirozeného jazyka s Copilotem a jeho propojení s vašimi daty](../06-create-agent-from-conversation/README.md).

### 7.1 Přidání nového tématu od začátku

1. Vyberte **záložku Topics** poblíž názvu agenta. Pokud ji nevidíte, vyberte **+6** a zobrazí se vám **Topics**.

    ![Vyberte Topics](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.cs.png)

1. Záložka **Topics** se načte a ve výchozím nastavení se zobrazí _Custom_ témata. Témata můžete filtrovat podle All, Custom a System. Vlastní a systémová témata, která aktuálně vidíte, byla vytvořena automaticky při zřízení agenta.

    Vyberte **+ Add a topic** a zvolte **From blank**.

    ![Vytvořit téma od začátku](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.cs.png)

1. Zadejte název tématu. Zkopírujte a vložte následující.

    ```text
    Available devices
    ```

    ![Pojmenujte téma](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.cs.png)

1. Zadejte popis triggeru, který popisuje, co téma dělá. Zkopírujte a vložte následující.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Zadejte název a popis triggeru](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.cs.png)

### 7.2 Definování vstupů a výstupů triggeru

1. Dále přidáme novou vstupní proměnnou, kterou generativní AI použije ve své orchestraci k extrakci hodnoty typu zařízení ze zprávy uživatele. Vyberte **Více elips (...)** v tématu a zvolte **Details**, abyste zobrazili panel podrobností tématu.

    ![Vyberte Podrobnosti tématu](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.cs.png)

1. Panel **Topic details** se nyní načetl. Vyberte záložku **Input**.

    ![Záložka Input](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.cs.png)

1. Vyberte **Create a new variable**.

    ![Vytvořit novou vstupní proměnnou](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.cs.png)

1. Zadejte název proměnné. Zkopírujte a vložte následující.

    ```text
    VarDeviceType
    ```

    ![Název vstupní proměnné](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.cs.png)

1. Nyní musíme definovat naše vstupní a výstupní proměnné. Následující jsou vlastnosti, které lze definovat pro vstupy a výstupy tématu.

    | Pole    | Hodnota |
    | ---------- | :--------- |
    | Jak agent naplní tento vstup? | Určuje, jak agent naplní tuto proměnnou hodnotou před spuštěním tématu. Ve výchozím nastavení je nastaveno na _Dynamicky naplnit nejlepší možností_. Jinak můžete přepsat vstup hodnotou místo dotazování uživatele |
    | Datový typ proměnné  | Datový typ proměnné. Podporované datové typy jsou `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Zobrazovaný název   | Název proměnné   |
    | Identifikovat jako  | Typ entity pro agenta, aby zachytil správný typ hodnoty  |
    | Popis    | Popis pomáhá agentovi automaticky naplnit vstupy před spuštěním tématu nebo generovat otázky pro získání hodnot   |

    Vlastnosti _Jak agent naplní tento vstup?_, _Datový typ proměnné_ a _Zobrazovaný název_ mohou zůstat beze změny. Aktualizujte vlastnost **Identifikovat jako** na **Celá odpověď uživatele**.

    ![Aktualizovat Identifikovat jako](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.cs.png)

1. Zkopírujte a vložte následující jako popis.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Popis](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.cs.png)

1. Dále definujeme náš výstup pro téma. Vyberte záložku **Output**.

    ![Vyberte záložku Output](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.cs.png)

1. Vyberte **Create a new variable**.

    ![Vytvořit novou výstupní proměnnou](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.cs.png)

1. Aktualizujte následující vlastnosti.

    **Název proměnné** - Zkopírujte a vložte následující.

    ```text
    VarAvailableDevices
    ```

    **Datový typ proměnné** - Vyberte **Table** jako datový typ.

    **Popis proměnné** - Zkopírujte a vložte následující.

    ```text
    List of available devices by device type
    ```

    ![Vlastnosti výstupu](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.cs.png)

1. Nyní jsme dokončili definování vstupů a výstupů tématu. Vyberte **ikonu X**, abyste opustili panel **Topic details**.

    ![Opustit panel podrobností tématu.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.cs.png)

### 7.3 Přidání nástroje pomocí konektoru

1. Dále přidáme uzel, který umožní agentovi získat seznam zařízení ze seznamu **Devices** na SharePointu. Vyberte **ikonu +** pod triggerem.

    ![Přidat nástroj](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.cs.png)

1. Vyberte uzel **Add a tool**, poté záložku **Connector**. Vyhledejte `Get items` a vyberte akci konektoru **Get items** na SharePointu.

    ![Vyberte get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.cs.png)

1. Pro konektor je třeba vytvořit nové připojení. Vyberte **ikonu šipky** a zvolte **Create new connection**.

    ![Přidat nástroj](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.cs.png)

1. Zobrazí se dvě možnosti, které vám umožní připojit se přímo k SharePoint Online nebo k SharePointu na místě. Ve výchozím nastavení bude vybrána možnost **Connect directly (cloud-services)**, kterou použijeme pro naše připojení.
Vyberte **Vytvořit**.

![Vyberte Vytvořit](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.cs.png)

1. Vyberte svůj přihlášený uživatelský účet.

![Vyberte přihlášený uživatelský účet](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.cs.png)

1. Dále je potřeba potvrdit, že váš uživatelský účet může být použit pro připojení ke konektoru SharePoint. Vyberte **Povolit přístup**.

![Vyberte povolit přístup](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.cs.png)

1. Vyberte **Odeslat**, aby byla akce konektoru SharePoint **Získat položky** přidána jako uzel do tématu.

![Odeslat](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.cs.png)

1. Akce konektoru SharePoint **Získat položky** je nyní přidána do tématu. Nyní můžeme začít konfigurovat vstupy akce. Vyberte **ikonu tři tečky (...)** a poté **Vlastnosti**.

![Vyberte Vlastnosti](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.cs.png)

1. Zobrazí se konfigurační panel **Získat položky** a ve výchozím nastavení uvidíte záložku **Vstupy**. Vyberte záložku **Zahájení** a zadejte popis do pole **Popis použití**. Zkopírujte a vložte následující.

    ```text
    Retrieves devices from SharePoint list
    ```

> To se bude hodit, až si prohlédneme stránku _Správa vašich připojení_ našeho agenta. K tomu se brzy vrátíme.

![Popis Získat položky](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.cs.png)

1. Vyberte záložku **Vstupy** a vyberte web **Contoso IT** a seznam **Zařízení**, který jste nastavili v [Lekce 00 - Nastavení kurzu - Krok 3: Vytvoření nového webu SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Konfigurace vstupů Získat položky](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.cs.png)

1. Nyní, abychom zobrazili pouze zařízení ze seznamu SharePoint na základě
   - vybrané hodnoty,
   - a pouze zařízení, kde stav odpovídá _Dostupné_,

   je potřeba použít filtr. Toho dosáhneme zadáním filtračního dotazu pomocí Power Fx. Vyberte **ikonu tři tečky (...)**.

![Vyberte ikonu tři tečky](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.cs.png)

1. Ve výchozím nastavení budete na záložce **Vlastní**. Vyberte záložku **Vzorec**.

![Vyberte záložku Vzorec](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.cs.png)

1. Vyberte ikonu **rozšířit**, abyste zvětšili pole **Vzorec**. Zkopírujte a vložte následující výraz Power Fx.

Používáme funkci `Concatenate` k vytvoření výrazu, který bude filtrovat
   - sloupec SharePoint **Stav** rovná se _Dostupné_
   - a sloupec SharePoint **Typ zařízení** rovná se _vybranému zařízení z uzlu otázky_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Vyberte **Vložit**.

![Zadejte výraz Power Fx a vyberte vložit](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.cs.png)

1. Výraz Power Fx bude nyní aplikován v parametru vstupu Filtrační dotaz akce **Získat položky**. Dále vyberte zobrazení **Všechny položky** v **Omezit sloupce podle zobrazení**. Tím se načtou pouze sloupce v seznamu na základě vybraného zobrazení.

![Seznam sloupců podle zobrazení](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.cs.png)

1. Dále aktualizujeme název proměnné pro výstup. Vyberte záložku **Výstupy** a vyberte proměnnou `GetItems`.

![Aktualizace proměnné](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.cs.png)

1. Aktualizujte název na následující.

    ```text
    VarDevices
    ```

![Aktualizace názvu proměnné](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.cs.png)

1. Posuňte se dolů a v sekci **Použití** vyberte **Globální**. Tím se proměnná zpřístupní pro jakékoli téma.

![Aktualizace na globální proměnnou](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.cs.png)

1. **Zavřete** panel **Vlastnosti proměnné**.

![Zavřete panel Vlastnosti proměnné](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.cs.png)

1. Vyberte ikonu **plus +** pro vložení nového uzlu, vyberte **Správa proměnných** a poté vyberte **Nastavit hodnotu proměnné**.

![Přidat uzel Nastavit hodnotu proměnné](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.cs.png)

1. Vyberte ikonu **větší než** pro vstupní parametr **Nastavit proměnnou**.

![Nastavit proměnnou](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.cs.png)

1. Vyberte výstup tématu vytvořený dříve jako proměnnou, **VarAvailableDevices**.

![Uložit téma](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.cs.png)

1. Dále vyberte **ikonu tři tečky (...)**, abyste definovali hodnotu proměnné.

![Vyberte hodnotu proměnné](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.cs.png)

1. Nyní použijeme výraz PowerFx k nastavení hodnoty proměnné jako vlastnosti `value`, která je vrácena v odpovědi **Získat položky**, a nastavíme [rozsah proměnné](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) na globální přidáním předpony `Global`.

Vyberte **Vložit** a **uložit** téma.

![Vzorec Power Fx pro hodnotu proměnné](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.cs.png)

1. Dále musíme aktualizovat pokyny agenta. Vyberte záložku **Přehled** a poté **Upravit**.

![Upravit pokyny](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.cs.png)

1. Přidejte nový řádek do pokynů, zkopírujte a vložte následující.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Tento pokyn povede generativní AI k vyvolání spouštěče **Dostupná zařízení**, aby zobrazil seznam dostupných zařízení ze seznamu **Zařízení** na SharePointu. Vyberte celý zástupný symbol tématu v hranatých závorkách.

![Přidat pokyny](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.cs.png)

1. Zadejte znak lomítka `/` a zobrazí se seznam témat. Vyberte téma **Dostupná zařízení**.

![Odkaz na spouštěč](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.cs.png)

1. **Uložte** aktualizované pokyny.

![Uložit pokyny](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.cs.png)

1. Nyní otestujeme našeho aktualizovaného agenta. Vyberte **Testovat** v pravém horním rohu, aby se zobrazil testovací panel, a **obnovte** testovací panel. Zadejte následující zprávu agentovi.

    ```text
    I need a laptop
    ```

![Test](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.cs.png)

1. Než agent může pokračovat, uživatel musí ověřit, že jeho připojení může být použito. Vyberte **Povolit**.

![Vyberte povolit](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.cs.png)

1. Agent provede nástroj SharePoint, který načte filtrovaný seznam zařízení, kde typ zařízení odpovídá "notebook" a stav odpovídá "dostupné", na základě použitého výrazu Power Fx. Odpověď bude vrácena ve formě odrážek, které si uživatel může přečíst.

![Odpověď testu](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.cs.png)

1. Poslední věc, kterou se naučíme, je prohlížení použitých připojení na stránce _Správa vašich připojení_ agenta. Vyberte **ikonu tři tečky (...)** a poté **Správa připojení**.

![Správa připojení](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.cs.png)

1. Na této stránce můžeme vidět všechna připojení používaná agentem. Aktuálně je uvedeno pouze jedno připojení, které je spojeno s nástrojem SharePoint, který byl přidán do tématu. Vyberte **1 nástroj** ve sloupci **Používá**.

![Používá](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.cs.png)

1. Zde můžeme vidět podrobnosti o akci Získat položky a vzpomenout si na _popis použití_, který jsme zadali dříve? Zde uvidíme tento popis použití. Vyberte **Zavřít**.

> To nám umožňuje zjistit, jaké akce jsou použity a k čemu slouží. To nám pomáhá udržovat naše připojení organizovaná 📁.

![Popis použití](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.cs.png)

1. Vraťte se na kartu prohlížeče s Copilot Studio a **obnovte** testovací panel, abyste vymazali test.

## ✅ Mise splněna

Gratulujeme! 👏🏻 Naučili jste se, jak přidat nové téma od začátku, jak přidat nástroj, který volá akci konektoru SharePoint Získat položky, a použít Power Fx k filtrování odpovědi tak, aby vracela pouze zařízení, kde stav odpovídá dostupné a typ zařízení odpovídá notebooku. 🙌🏻

Toto je konec **Lab 07 - Přidání nového tématu s konverzačními uzly**, vyberte odkaz níže pro přechod na další lekci. V následující lekci rozšíříme případ použití z této laboratoře.

⏭️ [Přejít na lekci **Zlepšení interakcí s uživatelem pomocí adaptivních karet**](../08-add-adaptive-card/README.md)

## 📚 Taktické zdroje

🔗 [Použití systémových témat](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Témata v Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Nastavení spouštěčů témat](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Definování témat agenta](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Vytváření výrazů pomocí Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Tvorba témat pomocí přirozeného jazyka](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Přidání akcí do agentů pomocí konektorů](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytika" />

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.