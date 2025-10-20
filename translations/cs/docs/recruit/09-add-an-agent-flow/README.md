<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-20T17:24:05+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "cs"
}
-->
# 🚨 Mise 09: Přidejte tok agenta do svého Tématu pro automatizaci

## 🕵️‍♂️ KRYCÍ JMÉNO: `OPERACE AUTOMATIZAČNÍ VELMOC`

> **⏱️ Časový rámec operace:** `~30 minut`  

🎥 **Podívejte se na průvodce**

[![Náhled videa o toku agenta](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.cs.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Podívejte se na průvodce na YouTube")

## 🎯 Stručný popis mise

Váš agent nyní dokáže komunikovat s uživateli a poskytovat informace, ale skutečná provozní dokonalost vyžaduje, aby váš agent dokázal jednat. Tato mise promění vašeho konverzačního agenta v automatizační velmoc tím, že ho vybaví toky agenta.

Na konci mise vytvoříte kompletní automatizaci požadavků na zařízení, která zachytí vstupy uživatele prostřednictvím adaptivní karty, získá data ze SharePointu, odešle oznámení manažerům e-mailem a poskytne uživateli bezproblémovou zpětnou vazbu – to vše bude řízeno vaším agentem prostřednictvím inteligentní automatizace pracovních toků.

## 🔎 Cíle

V této misi se naučíte:

1. Porozumět tomu, co jsou toky agenta a jak se liší od cloudových toků Power Automate pro automatizaci.
1. Seznámit se s klíčovými funkcemi, které činí toky agenta výkonnými, včetně akcí AI a přirozeného jazyka.
1. Prozkoumat návrhář toků agenta a jak používat výrazy pro dynamické zpracování dat.
1. Vytvořit kompletní automatizaci požadavků na zařízení, která integruje data ze SharePointu a e-mailová oznámení.

## 🤔 Co je tok agenta?

Toky agenta jsou výkonným nástrojem pro automatizaci opakujících se úkolů a integraci vašich aplikací a služeb. Představte si je jako strukturované, krok za krokem definované pracovní toky, které váš agent může provádět, aby automatizoval úkoly nebo se připojil k jiným aplikacím a službám. Můžete je považovat za malé pracovní toky, které pomáhají vašemu agentovi provádět úkoly, jako je odesílání oznámení, aktualizace záznamů nebo reakce na události.

Na rozdíl od autonomních agentů, kteří používají AI k rozhodování za pochodu, jsou toky agenta **deterministické pracovní toky** – což znamená, že vždy následují stejnou cestu, což zajišťuje konzistentní a spolehlivé výsledky.

Jednoduše řečeno:

- Pomáhají vašemu agentovi _dělat věci_, nejen _říkat věci_ uživatelům.
- Jsou znovu použitelné napříč tématy a agenty a mohou být spuštěny zprávami uživatelů, událostmi nebo jinými aplikacemi a službami.

## 🙋🏽 Ano, ale jak se liší od cloudových toků Power Automate?

Toky agenta i cloudové toky Power Automate pomáhají automatizovat úkoly. Jsou navrženy pro různé účely a fungují různými způsoby.

### 🤖 Toky agenta v Copilot Studio

**K čemu slouží:**

- Určeny pro konverzační a autonomní agenty (prostřednictvím pokynů agenta) v Copilot Studio.
- Zaměřeny na chytrou, AI řízenou automatizaci, která interaguje s obchodními systémy.

**Proč jsou užitečné:**

- Snadno se vytvářejí a spravují přímo v Copilot Studio.
- Skvělé pro automatizaci úkolů, které se dějí _během konverzace_ s uživateli, jako je podání žádosti o dovolenou.
- Nepotřebujete samostatnou licenci Power Automate, protože fakturace je založena na využití v Copilot Studio. To může ušetřit čas a náklady pro podnikové týmy.

**Omezení:**

- Nelze je sdílet, kopírovat ani přiřadit spoluvlastníkům.
- Toky agenta jsou viditelné a použitelné pouze v Copilot Studio.
- Aktuálně lze spouštěče událostí pro agenty upravovat v portálu Power Automate maker.

### ☁️ Cloudové toky Power Automate

**K čemu slouží:**

- Navrženy pro obecnou automatizaci napříč mnoha aplikacemi a službami.
- Mohou běžet nezávisle nebo spolupracovat s toky agenta.

**Proč jsou užitečné:**

- Nabízejí širokou škálu konektorů.
- Ideální pro automatizaci procesů mimo agenty.
- Mohou být sdíleny, znovu použity a spravovány napříč týmy.

**Požadavky:**

- K jejich použití potřebujete licenci Power Automate.

### 📗 Shrnutí

| Použijte toto | Když chcete |
| :- | :- |
| Toky agenta | Automatizovat úkoly uvnitř agenta, využít AI a vše spravovat v Copilot Studio |  
| Cloudové toky Power Automate | Automatizovat napříč aplikacemi a službami nebo vytvářet pracovní toky mimo agenty |

## 👍🏻 Proč používat toky agenta

Toky agenta vždy následují pevně danou cestu – při stejném vstupu dělají pokaždé totéž.

To je činí:

- **Spolehlivými** – můžete se spolehnout, že se budou chovat stejně pokaždé.
- **Předvídatelnými** – víte, jaký výsledek očekávat, když tok běží.
- **Pravidlovými** – následují kroky, které definujete.

Další výhody:

- **Automatizace** – umožňuje vašemu agentovi zvládat opakující se úkoly, jako je podávání formulářů nebo odesílání oznámení.
- **Propojení** – propojení s více než 1400 konektory, jako jsou ServiceNow, SharePoint, Salesforce. Případně si můžete vytvořit vlastní konektor.
- **Úzká integrace** – toky agenta jsou součástí logiky agenta, jsou spouštěny přímo zprávami uživatelů nebo akcemi v konverzaci.
- **Škálovatelnost** – znovu použitelné toky napříč více agenty nebo scénáři.
- **Bez kódu nebo s minimem kódu** – toky můžete vytvářet pomocí přirozeného jazyka nebo vizuálního návrháře.
- **Vše na jednom místě** – návrh, testování a nasazení toků agenta na jednom místě – Copilot Studio. Není třeba přepínat mezi platformami.

## 🏄🏻‍♂️ Jak toky agenta vylepšují vašeho agenta?

Toky agenta rozšiřují schopnosti vašeho agenta nad rámec pouhého "povídání" s uživateli. Umožňují mu jednat a interagovat se systémy.

Představte si, že pracujete ve finančním oddělení a dostáváte spoustu faktur od dodavatelů. Obvykle někdo musí každou fakturu přečíst, vybrat důležité údaje – částku, datum, od koho je – a zkontrolovat, zda vše odpovídá vašim záznamům. Poté ji poslat správné osobě ke schválení. To zabírá čas a úsilí.

S toky agenta v Copilot Studio můžete tento proces automatizovat. Jakmile faktura dorazí, agent:

1. Přečte dokument pomocí inteligentního zpracování dokumentů a najde klíčové informace.
1. Zkontroluje údaje oproti vašim podnikovým datům, aby se ujistil, že vše vypadá správně.
1. Pošle ji ke schválení správné osobě/osobám.

To šetří čas, snižuje chyby a zjednodušuje celý proces.

### Představte si to takto

- **Agenti**: chytří rozhodovatelé
- **Toky agenta**: spolehliví vykonavatelé

### Proč na tom záleží

- Získáte to nejlepší z obou světů: spolehlivou automatizaci a flexibilní AI.
- Je snadné vytvářet a aktualizovat toky podle měnících se potřeb vašeho podnikání.
- Můžete škálovat automatizaci napříč týmy.

## 🔌 Klíčové funkce, které činí toky agenta výkonnými

1. **Autorství v přirozeném jazyce**
    - Můžete popsat, co chcete, aby tok dělal, běžnou angličtinou.
    - Copilot rozumí vašemu záměru a vytvoří tok za vás.
    - Není třeba psát kód – stačí vysvětlit svůj nápad.

1. **Akce AI**

    Použijte AI k:

    - Čtení a porozumění dokumentům nebo obrázkům.
    - Shrnutí dlouhého obsahu do krátkých, užitečných odpovědí.
    - Poskytování chytrých doporučení nebo rozhodnutí.

1. **Generativní akce**
    - Tyto akce umožňují toku přizpůsobit se v reálném čase.
    - Agent může plánovat a upravovat kroky na základě měnících se informací.

1. **Integrační akce**
    - Propojte svůj tok s jinými nástroji, jako jsou Outlook, Microsoft Teams, ServiceNow, SharePoint a další aplikace a služby, prostřednictvím více než 1400 vestavěných konektorů nebo vlastního konektoru.
    - To pomáhá vašemu agentovi pracovat s aplikacemi, které váš tým již používá.

1. **Člověk v procesu**
    - Přidejte kroky schválení, kde osoba musí něco zkontrolovat nebo potvrdit.
    - [Pokročilá schválení](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) podporují připomínky, delegace a vícestupňová schválení.

## ⚙️ Jak fungují

1. **Spouštěč**

    Událost spustí tok – například uživatel položí otázku, spustí tok z tématu, naplánovaný čas nebo událost v jiném systému.

1. **Akce**

    To jsou kroky, které agent provede – například odeslání e-mailu, volání API, aktualizace tiketu v ServiceNow.

## 🧶 Jak vytvořit tok agenta

1. **Přirozený jazyk**: popište, co chcete, aby agent dělal, a Copilot to vytvoří za vás.
1. **Návrhářské plátno**: přetáhněte akce, podmínky a smyčky v návrháři toků agenta a vytvořte svůj tok.

## 🎨 Co je návrhář toků agenta?

Je to vizuální nástroj v Copilot Studio, který vám pomáhá vytvářet, upravovat a spravovat toky agenta, které poskytují krok za krokem instrukce, které váš agent následuje při plnění úkolů. Je navržen tak, aby byl snadno použitelný, i když jste v tokách agenta nováčkem.

### Klíčové funkce návrháře toků agenta

1. **Vizuální plátno**
    - Můžete vidět celý tok rozložený jako diagram.
    - Snadno přibližujte/oddalujte, přizpůsobte zobrazení nebo použijte minimapu pro navigaci v rozsáhlých tocích.

1. **Přidávání a odstraňování akcí**
    - Klikněte na _plus (+)_ tlačítko pro přidání nové akce, jako je odeslání zprávy nebo aktualizace položky v seznamu SharePoint.
    - Můžete vyhledávat akce z konektorů a konfigurovat je prostřednictvím jejich nastavení.
    - Chcete-li akci odstranit, klikněte na _tři tečky (⋮)_ a vyberte _Smazat_.

1. **Kontrola parametrů**
    - Klikněte na jakoukoli akci, abyste zobrazili nebo upravili její nastavení nazývané _parametry_.
    - Hodnoty můžete zadat ručně nebo použít _výrazy_, aby byly dynamické.

1. **Historie verzí**
    - Pokaždé, když uložíte svůj tok, se zaznamená verze.
    - Můžete se vrátit zpět a zobrazit nebo obnovit předchozí verzi, pokud je to potřeba.

1. **Kontrola chyb**
    - _Kontrola toku_ zvýrazní všechny chyby.
    - Všechny chyby musí být vyřešeny před publikováním toku.

1. **Publikování a testování**
    - Jakmile je váš tok bez chyb, publikujte ho, aby byl aktivní.
    - Použijte funkci _Test_, abyste tok spustili ručně nebo automaticky a ověřili, zda funguje podle očekávání.

### Proč používat návrhář toků agenta?

- **Vizuální a intuitivní** – toky můžete vytvářet přetahováním a klikáním.
- **Bezpečné experimentování** – historie verzí vám umožňuje vrátit změny zpět.
- **Vestavěné testování** – pomáhá vám zajistit, že vše funguje před spuštěním.

## 🔤 Zmínili jste _výrazy_ – co jsou výrazy?

Výrazy jsou malé vzorce nebo příkazy, které pomáhají vašemu toku agenta pracovat s daty. Používáte je k výpočtu hodnot, formátování textu, rozhodování nebo získávání konkrétních informací ze vstupů.

### Proč používat výrazy?

Výrazy vám umožňují:

- **Přizpůsobit zpracování dat** – kombinovat jména, formátovat data.
- **Rozhodovat** – pokud je hodnota větší než 10, udělat něco.
- **Transformovat data** – změnit text na malá písmena, extrahovat část řetězce.
- **Automatizovat logiku** – bez psaní plného kódu.

### Jak vypadají výrazy?

Výrazy používají funkce. Půjčím si vysvětlení, co jsou funkce, od bývalého Microsoft MVP, Jerryho Weinstocka.

!!! citát
    Funkce jsou vestavěná logika pro transformaci vašich dat buď prostřednictvím jednoduchých nebo složitých operací ve vašem výrazu.

Funkce vám umožňují vytvářet výrazy, aniž byste museli psát jakýkoli kód.

Jak to rád popisuji, funkce v tokách agenta je podobná funkcím v Excelu. Můžete provést operaci na datech, abyste je transformovali na požadovaný výstup. Při vytváření vzorce v Excelu vybíráte vstupní hodnotu z buněk v tabulce nebo rozsahu a poté aplikujete funkce k manipulaci s výstupem dat. Příkladem je použití funkce `COUNT` k určení počtu buněk obsahujících čísla z rozsahu.

V tokách agenta místo odkazování na data z buněk v tabulce odkazujete na výstupy dat ze spouštěče nebo akcí při vytváření vašich výrazů. Pokračujeme-li v předchozím příkladu, použijte funkci `length` k získání počtu položek vrácených z akce konektoru _Get items_ v SharePointu.

### Proč na funkcích záleží?

Použití funkcí činí vaše toky agenta:

- **Chytřejšími** – mohou reagovat na různé vstupy nebo podmínky.
- **Flexibilními** – můžete přizpůsobit, jak jsou data zpracována.
- **Efektivními** – vyhnete se manuálním krokům automatizací logiky.

### Nejužitečnější funkce

Následující jsou běžné funkce používané v tokách agenta. Pro úplný seznam funkcí přejděte na [referenční příručku](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Text

- `concat()` - Spojuje dva nebo více textových řetězců dohromady.
      - Příklad: `concat('Ahoj ', firstName)` → “Ahoj Honzo”

- `toLower()` / `toUpper()` - Změní text na malá nebo velká písmena.
      - Užitečné pro standardizaci vstupů
- Příklad: `addDays(utcNow(), 7)` výstup je 7 dní od dneška.

- `formatDateTime()` - Formátuje datum do čitelného řetězce.
      - Příklad: Pondělí, 7. července 2025

#### ✅ Logické

- `if()` - Spustí jednu hodnotu, pokud je podmínka pravdivá, jinou pokud je nepravdivá.
      - Příklad: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - Kontroluje, zda jsou dvě hodnoty stejné.

- `and()`, `or()`, `not()` - Kombinace více podmínek.

#### 🪣 Další užitečné funkce

- `coalesce()` - Vrátí první neprázdnou hodnotu.
      - Užitečné pro záložní/standardní hodnoty.

- `guid()` - Generuje unikátní ID.
      - Užitečné pro sledování nebo logování.

- `length()` - Počítá, kolik znaků nebo položek je v řetězci nebo poli.

## ⭐ Nejlepší postupy

Zde jsou některé nejlepší postupy pro vytváření toků agentů v Copilot Studio.

1. **Začněte jednoduše a postupně rozšiřujte**

    - Začněte malým, jasným úkolem, jako je odeslání zprávy.
    - Přidejte další kroky po otestování základů vaší automatizace.

1. **Používejte jasné a popisné názvy akcí**

    - Jasně označte každý krok, aby bylo jasné, co dělá vám i vašemu týmu.
    - Příklad: místo výchozího názvu "Aktualizovat položku" pro akci konektoru SharePoint ji přejmenujte podle toho, co aktualizuje, například "Aktualizovat stav zařízení."

1. **Zkontrolujte chyby před publikováním**

    - Použijte **kontrolu toku**, abyste našli a opravili případné problémy.
    - Toky nelze publikovat, pokud obsahují chyby, takže se je snažte vyřešit, jakmile se objeví.

1. **Důkladně otestujte svůj tok**

    - To, že se tok uloží a publikuje, neznamená, že funguje podle očekávání.
    - Použijte funkci _Test_ k manuálnímu nebo automatickému spuštění toku a zkontrolujte výsledky.

1. **Používejte historii verzí**

    - Tok často ukládejte, abyste se mohli vrátit k dřívějším verzím, pokud to bude potřeba.
    - Můžete zobrazit a obnovit předchozí verze pomocí panelu _Historie verzí_.

1. **Používejte parametry a výrazy rozumně**

    - Při konfiguraci akcí používejte parametry, aby byl váš tok dynamický.
    - Můžete zadávat hodnoty ručně nebo používat výrazy k jejich výpočtu, případně je kombinovat s hodnotami z předchozích akcí pomocí výběru _dynamického obsahu_.

1. **Odstraňte nepoužité akce**

    - Pokud přidáte akci a později se rozhodnete, že ji nepotřebujete, odstraňte ji, aby byl váš tok přehledný.

## 🧪 Laboratoř 09 - Přidání toku agenta pro automatizaci a rozšíření schopností témat

Nyní se naučíme, jak rozšířit naše téma pomocí adaptivních karet a využít pokročilé funkce témat a uzlů.

- [9.1 Vytvoření toku agenta](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Přidání toku agenta do tématu](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Aktualizace tématu Požadavek na zařízení s několika uzly pro lepší uživatelský zážitek](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Testování agenta pomocí několika scénářů](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Případ použití

**Jako** manažer zaměstnance

**Chci** přijímat požadavky na zařízení

**Abych** mohl zkontrolovat zařízení požadované zaměstnancem.

Začněme!

### Předpoklady

1. **Seznam SharePoint**

    Budeme používat seznam **Zařízení** v SharePointu z [Lekce 00 - Nastavení kurzu - Krok 3: Vytvoření nového webu SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Pokud jste seznam **Zařízení** v SharePointu nenastavili, vraťte se prosím k [Lekce 00 - Nastavení kurzu - Krok 3: Vytvoření nového webu SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agent podpory Contoso**

    Použijeme stejného agenta, kterého jsme vytvořili dříve v [Lekce 06 - Vytvoření vlastního agenta pomocí přirozeného jazyka s Copilotem a jeho propojení s vašimi daty](../06-create-agent-from-conversation/README.md).

### 9.1 Vytvoření toku agenta

V tomto cvičení vytvoříme tok agenta, který získá položku ze SharePointu pro vybrané zařízení a pošle e-mail manažerovi s detaily zařízení.

1. V tématu **Požadavek na zařízení** přejděte dolů k uzlu **Zeptat se pomocí adaptivní karty** a přidejte nový uzel. Vyberte **Přidat nástroj** a na kartě **Základní nástroje** v panelu vyberte **Nový tok agenta**.

    ![Přidat nový tok agenta](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.cs.png)

1. Načte se návrhář toků agenta s triggerem a akcí.

    - **Trigger** - Když agent spustí tok
        - Spustí tok z agenta Copilot Studio.

    - **Akce** - Odpověď agentovi
        - Odesílá odpověď, která může obsahovat výstupní hodnoty zpět agentovi Copilot Studio.

    Vyberte trigger.

    ![Vyberte trigger](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.cs.png)

1. Dále přidáme několik vstupů pro tok agenta.

    - `DeviceSharePointId` - bude ukládat hodnotu, ID, položky SharePointu. Tato hodnota ID je výstupem z uzlu Zeptat se pomocí adaptivní karty, kde uživatel vybral zařízení.

    - `User` - bude to jméno uživatele, které bude pocházet ze systémové proměnné agenta.

    - `AdditionalComments` - bude to komentář zadaný uživatelem, což je výstup z uzlu Zeptat se pomocí adaptivní karty.

    Nejprve přidáme `DeviceSharePointId` jako vstup pro náš trigger. Vyberte **+ Přidat vstup**.

    ![Přidat vstup](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.cs.png)

1. Pro typ uživatelského vstupu vyberte **Text**.

    ![Vyberte Text](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.cs.png)

1. Pro název vstupu zadejte následující.

    ```text
    DeviceSharePointId
    ```

    ![Vstup DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.cs.png)

1. Nyní přidáme druhý vstup, `User`. Opakujte stejné kroky, vyberte **+ Přidat vstup** a vyberte **Text**.

    ![Přidat vstup](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.cs.png)

1. Pro název vstupu zadejte následující.

    ```text
    User
    ```

    ![Vstup User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.cs.png)

1. Nyní přidáme třetí vstup, `AdditionalComments`. Opakujte stejné kroky, vyberte **+ Přidat vstup** a vyberte **Text**.

    ![Přidat vstup](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.cs.png)

1. Pro název vstupu zadejte následující.

    ```text
    AdditionalComments
    ```

    ![Vstup AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.cs.png)

1. Pro vstup `AdditionalComments` jej aktualizujeme, aby byl volitelný. Vyberte **ikonu tři tečky (...)** a zvolte **Udělat pole volitelné**.

    ![Udělat pole volitelné](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.cs.png)

1. Skvělá práce! Trigger je nyní nakonfigurován, pokračujme. Vyberte **ikonu plus +** pod triggerem pro vložení nové akce.

    ![Přidat akci](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.cs.png)

1. Zobrazí se **panel akcí**, kde můžete zobrazit akce z více než 1400 vestavěných konektorů pro Microsoft a služby třetích stran. Do **vyhledávacího pole** zadejte následující,

    ```text
    Get item
    ```

    V seznamu výsledků vyhledávání se zobrazí akce. Vyberte akci **Získat položku** z konektoru **SharePoint**.

    ![Akce Získat položku](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.cs.png)

1. Nyní můžeme začít konfigurovat akci **Získat položku**.

    Vyberte **ikonu tři tečky (...)** v akci **Získat položku**.

    ![Vyberte tři tečky](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.cs.png)

1. Vyberte **Přejmenovat**.

    ![Vyberte Přejmenovat](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.cs.png)

1. Přejmenujte akci na,

    ```text
    Get Device
    ```

    ![Přejmenovat akci](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.cs.png)

1. V poli **Adresa webu** vyberte **Adresu webu** SharePointu Contoso IT vytvořeného v [Lekce 00 - Nastavení kurzu - Krok 3: Vytvoření nového webu SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    V poli **Název seznamu** vyberte seznam **Zařízení** v SharePointu.

    ![Parametry vstupu](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.cs.png)

1. V poli **Id** vyberte **ikonu blesku** nebo **ikonu fx** napravo.

    ![Výběr dynamického obsahu](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.cs.png)

1. Na kartě **Dynamický obsah** v panelu zadejte následující,

    ```text
    sharepoint
    ```

    Ve výsledcích vyhledávání se zobrazí vstupní parametry odpovídající hledané hodnotě. Vyberte parametr **DeviceSharePointId** z triggeru.

    Poté vyberte **Přidat**, aby se dynamický obsahový vstup přidal do parametru **Id** akce.

    ![Vyberte vstup DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.cs.png)

1. Dynamický obsahový vstup z triggeru je nyní odkazován v parametru **Id** akce. Dále aktualizujeme jeden z pokročilých parametrů. Vyberte **Zobrazit vše**, abyste viděli pokročilé parametry.

    ![Zobrazit pokročilé parametry](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.cs.png)

1. Zobrazí se parametr **Omezit sloupce podle zobrazení** a ve výchozím nastavení je nastaven na **Použít všechny sloupce (Neomezovat)**. Aktualizujeme tuto hodnotu na zobrazení, abychom omezili sloupce vrácené v odpovědi akce. Vyberte parametr **Omezit sloupce podle zobrazení**, abyste zobrazili seznam zobrazení.

    ![Vyberte parametr](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.cs.png)

1. Vyberte zobrazení **Všechny položky**.

    ![Vyberte zobrazení Všechny položky](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.cs.png)

1. Vyberte **ikonu plus +** pod akcí _Získat zařízení_ pro vložení nové akce.

    ![Přidat novou akci](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.cs.png)

1. Do vyhledávacího pole zadejte následující,

    ```text
    send an email
    ```

    V seznamu výsledků vyhledávání se zobrazí akce. Vyberte akci **Odeslat e-mail (V2)** z konektoru **Office 365 Outlook**.

    ![Akce Odeslat e-mail](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.cs.png)

1. Dále musíme vytvořit připojení pro akci konektoru. Vyberte **Přihlásit se**.

    ![Vytvořit připojení](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.cs.png)

1. Vyberte svůj přihlášený uživatelský účet.

    ![Vyberte uživatelský účet](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.cs.png)

1. Vyberte **Povolit přístup**. Připojení bylo nyní vytvořeno.

    ![Vyberte povolit přístup](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.cs.png)

1. Přejmenujte akci na následující,

    ```text
    Send an email to manager
    ```

    Dále definujeme vstupní parametry naší akce.

    Pro vstupní parametr **Komu** vyberte sebe. Normálně by to byl váš manažer nebo bychom použili jinou akci, která by získala vašeho manažera na základě vašeho profilu Entra ID, ale pro účely této lekce vyberte sebe.

    Pro vstupní parametr **Předmět** zadejte následující,

    ```text
    Request type: new device
    ```

    Pro vstupní parametr **Tělo** zadejte následující,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Přejmenovat akci a nakonfigurovat vstupy](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.cs.png)

1. Dále aktualizujeme vstupní parametr **Tělo** s odkazy na dynamický obsahový vstup z **triggeru** nebo akce **Získat položku**. Zadejte mezeru za druhým řádkem, protože vložíme jméno uživatele z triggerového vstupu, **User**.

    Vyberte **ikonu blesku** nebo **ikonu fx** napravo.

    ![Přidat vstup User jako dynamický obsah](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.cs.png)

1. Na kartě **Dynamický obsah** v panelu vyberte vstup **User** z triggeru.

    Vyberte **Přidat**, aby se dynamický obsahový vstup **User** přidal do parametru **Tělo** akce.

    ![Vyberte vstup User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.cs.png)
1. Dynamický obsah zadaný spouštěčem je nyní odkazován v parametru **Body** akce. Stejný postup zopakujeme pro zbývající řádky v těle e-mailové zprávy.

    ![Přidán uživatelský vstup](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.cs.png)

1. Klikněte do prostoru vedle `Výrobce:`. Vyberte ikonu **blesku** nebo **fx ikonu** napravo.

    Na kartě **Dynamický obsah** v panelu, který se objeví, zadejte do vyhledávacího pole následující,

    ```text
    manufacturer
    ```

    Vyberte vstup **Hodnota výrobce** ze spouštěče a klikněte na **Přidat**.

    ![Přidání hodnoty výrobce jako dynamického obsahu](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.cs.png)

1. Klikněte do prostoru vedle `Model:`. Vyberte ikonu **blesku** nebo **fx ikonu** napravo.

    Na kartě **Dynamický obsah** v panelu, který se objeví, zadejte do vyhledávacího pole následující,

    ```text
    model
    ```

    Vyberte vstup **Model** z akce **Získat položku** a klikněte na **Přidat**.

    ![Přidání modelu jako dynamického obsahu](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.cs.png)

1. U textu `Odkaz na položku v SharePointu` jej aktualizujeme na hypertextový odkaz v těle e-mailové zprávy. Klikněte na začátek řádku a vyberte ikonu **blesku** nebo **fx ikonu** napravo.

    ![Přidání dynamického obsahu](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.cs.png)

1. Klikněte za HTML značku kotvy a vyberte ikonu **blesku** nebo **fx ikonu** napravo.

    Na kartě **Dynamický obsah** v panelu, který se objeví, zadejte do vyhledávacího pole následující,

    ```text
    link to item
    ```

    Vyberte vstup **Odkaz na položku** z akce **Získat položku** a klikněte na **Přidat**.

    ![Přidání odkazu na položku jako dynamického obsahu](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.cs.png)

1. Musíme přepnout na HTML editor výběrem ikony **&lt;/&gt;**.

    ![Přidání uživatelského vstupu](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.cs.png)

1. HTML editor je nyní aktivován. Klikněte před text `Odkaz na položku v SharePointu`, přidejte HTML značku kotvy pro vytvoření hypertextového odkazu. Zkopírujte a vložte následující.

    ```text
    <a href="
    ```

    ![HTML značka](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.cs.png)

1. Dynamický obsah vstupu **Odkaz na položku** je nyní odkazován v parametru **Body**. Klikněte za vstup **Odkaz na položku**, zkopírujte a vložte následující.

    ```text
    ">
    ```

    ![HTML značka](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.cs.png)

1. Klikněte za text `Odkaz na položku v SharePointu`, uzavřete HTML značku kotvy. Zkopírujte a vložte následující.

    ```text
    </a>
    ```

    ![HTML značka](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.cs.png)

1. Vyberte ikonu **&lt;/&gt;** pro přepnutí zobrazení kódu.

    ![Deaktivace zobrazení kódu](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.cs.png)

1. Poté znovu vyberte ikonu **&lt;/&gt;** pro opětovné přepnutí zobrazení kódu.

    ![Přepnutí zpět na zobrazení kódu](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.cs.png)

1. Všimněte si, že se objevilo několik nadbytečných znaků `&lt;br&gt;`. Tyto znaky smažte.

    ![Smazání znaků](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.cs.png)

1. Nyní jsme dokončili přidání hypertextového odkazu do těla e-mailové zprávy 😎 Vyberte ikonu **&lt;/&gt;** pro přepnutí zobrazení kódu.

    ![HTML značka upravena](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.cs.png)

1. Klikněte za text `Další komentáře od` před dvojtečkou a vyberte ikonu **blesku** nebo **fx ikonu** napravo.

    ![Přidání uživatelského parametru](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.cs.png)

1. Na kartě **Dynamický obsah** v panelu, který se objeví, zadejte do vyhledávacího pole následující,

    ```text
    user
    ```

    Vyberte parametr **Uživatel** ze spouštěče a klikněte na **Přidat**.

    ![Přidání uživatelského parametru jako dynamického obsahu](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.cs.png)

1. Nyní vložíme výraz, který zobrazí hodnotu Dalších komentářů, pokud je uživatel poskytne v uzlu **Zeptat se pomocí adaptivní karty**, jinak zobrazí "Žádné", pokud uživatel žádné komentáře neposkytne.

    Klikněte za dvojtečku a vyberte ikonu **blesku** nebo **fx ikonu** napravo.

    ![Přidání výrazu](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.cs.png)

1. Na kartě **Funkce** v panelu a v poli výrazu nahoře zadejte následující,

    ```text
    if(empty())
    ```

    Tento výraz používá funkci `if` pro podmíněné vyjádření.

    Další použitou funkcí je `empty`, která kontroluje, zda hodnota existuje nebo ne v parametru typu string. Parametr typu string, který má být odkazován, je hodnota vstupního parametru `AdditionalComments` ze spouštěče.

    ![Pokud prázdné](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.cs.png)

1. Dále klikněte **uvnitř závorek** za funkcí `empty`. Vložíme vstupní parametr `AdditionalComments` ze spouštěče.

    Vyberte kartu **Dynamický obsah**. Zadejte do vyhledávacího pole následující,

    ```text
    Additional
    ```

    Posuňte se dolů v panelu a vyberte vstup **AdditionalComments** ze spouštěče. Parametr bude nyní přidán jako parametr typu string ve výrazu.

    ![Přidání AdditionalComments jako dynamického obsahu](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.cs.png)

1. Dále definujeme logiku **_true_**, kde pokud je parametr typu string `AdditionalComments` prázdný, chceme zobrazit text `Žádné`.

    Za závorkou, která uzavírá parametr typu string, zadejte následující,

    ```text
    , 'None',
    ```

    ![Logika true](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.cs.png)

1. Nakonec definujeme logiku **_false_**, kde pokud parametr typu string `AdditionalComments` není prázdný, chceme zobrazit hodnotu vstupního parametru **AdditionalComments** ze spouštěče.

    > Připomínka: tato hodnota bude pocházet z pole Další komentáře adaptivní karty v uzlu **Zeptat se pomocí adaptivní karty** v tématu **Požadavek na zařízení**.

    Za čárkou za naší logikou **_true_** vyberte kartu **Dynamický obsah**. Zadejte do vyhledávacího pole následující,

    ```text
    Additional
    ```

    Posuňte se dolů v panelu a vyberte vstup **AdditionalComments** ze spouštěče. Parametr bude nyní přidán jako parametr typu string ve výrazu.

    Nyní jej přidejte do našeho parametru **Body** výběrem **Přidat**.

    ![Logika false](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.cs.png)

1. Skvělé, náš výraz je hotový! Výraz byl nyní přidán do parametru **Body**. Nakonec naformátujte poslední řádek kurzívou.

    ![Kurzíva](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.cs.png)

1. Nyní aktualizujeme akci **Odpovědět agentovi**, aby poslala hodnotu parametru **Hodnota modelu** z akce **Získat položku** zpět agentovi.

    Podržte levé tlačítko myši a pohybujte se směrem nahoru v návrháři, abyste viděli akci **Odpovědět agentovi**.

    Vyberte akci **Odpovědět agentovi** a vyberte typ **Textový výstup**.

    ![Výběr textového výstupu](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.cs.png)

1. Zadejte následující jako název výstupu.

    ```text
    ModelValue
    ```

    ![Výstup HodnotaModelu](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.cs.png)

1. Vyberte pole hodnoty a vyberte ikonu **blesku** nebo **fx ikonu** napravo.

    ![Vložení výrazu](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.cs.png)

1. Na kartě **Dynamický obsah** v panelu, který se objeví, zadejte do vyhledávacího pole následující,

    ```text
    model
    ```

    Vyberte parametr **Model** z akce **Získat položku** a klikněte na **Přidat**.

    ![Přidání parametru Model jako dynamického obsahu](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.cs.png)

1. Parametr **Model** je nyní hodnotou textového výstupu. Vyberte **Uložit koncept**, abyste uložili tok agenta.

    Nyní jsme dokončili náš tok agenta 👏🏻

    ![Výběr uložit koncept](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.cs.png)

1. Udělejme ještě jednu aktualizaci našeho toku agenta před publikováním. Vyberte kartu **Přehled** a klikněte na **Upravit**.

    ![Výběr Upravit](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.cs.png)

1. Pro **Název toku** zkopírujte a vložte následující.

    ```text
    Send device request email
    ```

    Pro **Popis** vyberte ikonu **obnovit**, aby AI automaticky vygenerovala popis na základě spouštěče a akcí v toku agenta.

    Klikněte na **Uložit**, abyste uložili aktualizovaný název a popis toku agenta.

    ![Přejmenování, přidání popisu a uložení detailů](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.cs.png)

1. Vyberte kartu **Návrhář** a klikněte na **Publikovat**, abyste publikovali tok agenta, aby mohl být přidán jako uzel v tématu **Požadavek na zařízení**.

    ![Publikovat](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.cs.png)

1. Krátce se objeví potvrzovací zpráva, která potvrdí, že tok agenta byl publikován.

    ![Potvrzovací zpráva](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.cs.png)

### 9.2 Přidání toku agenta do tématu

Nyní přidáme tok agenta do tématu **Požadavek na zařízení**.

1. Vyberte **Agenti** v levém menu a klikněte na **Contoso Helpdesk Agent**.

    ![Výběr agentů](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.cs.png)

1. Vyberte kartu **Témata**.

    ![Výběr karty Témata](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.cs.png)

1. Vyberte téma **Požadavek na zařízení**.

    ![Výběr tématu Požadavek na zařízení](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.cs.png)

1. Posuňte se dolů k uzlu **Zeptat se pomocí adaptivní karty** a přidejte nový uzel.

    Vyberte **Přidat nástroj** a na kartě **Základní nástroje** v panelu, který se objeví, vyberte tok agenta **Odeslat e-mail s požadavkem na zařízení**, který jsme nedávno vytvořili a publikovali.

    ![Výběr toku agenta](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.cs.png)

1. Pro vstupy spouštěče našeho toku agenta musíme vybrat výstupy proměnných z uzlu **Zeptat se pomocí adaptivní karty**.

    Vyberte ikonu **tři tečky (...)** pro vstup **DeviceSharePointId**.

    ![Výběr proměnné](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.cs.png)

1. Vyberte proměnnou **deviceSelectionId**, která je jedním z výstupů definovaných v uzlu **Zeptat se pomocí adaptivní karty**.

    ![Výběr proměnné deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.cs.png)

1. Dále vyberte ikonu **tři tečky (...)** pro vstup **Uživatel**.

    ![Výběr proměnné](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.cs.png)

1. Vyberte kartu **Systém** v panelu proměnných a klikněte na **User.DisplayName**. Tato proměnná ukládá zobrazované jméno interního uživatele, který komunikuje s agentem.

    ![Výběr systémové proměnné User.DisplayName](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.cs.png)

1. Dále vyberte ikonu **větší než** pro **Pokročilé vstupy**, aby se rozbalily a zobrazily vstup **AdditionalComments**.

    ![Rozbalení pokročilých vstupů](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.cs.png)

1. Vyberte ikonu **tři tečky (...)** pro vstup AdditionalComments.

    ![Výběr proměnné](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.cs.png)

1. Vyberte kartu **Vzorec** a ikonu rozbalení v panelu proměnných, protože použijeme výraz Power Fx.

    ![Karta Vzorec](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.cs.png)

1. Podobně jako výraz v toku agenta, který provádí podmíněnou kontrolu pomocí funkce _if_, ale tentokrát
    - použitím funkcí Power Fx,
    - a vložením buď žádné hodnoty, nebo hodnoty výstupní proměnné `commentsId` z uzlu **Zeptat se pomocí adaptivní karty**.

    Zadejte následující funkce do pole Power Fx,

    ```text
    If(IsBlank())
    ```

Tento výraz používá funkci `If` pro podmíněný příkaz if-else.

Další použitou funkcí je `IsBlank`, která kontroluje, zda hodnota existuje nebo neexistuje v parametru typu string. Parametrem typu string, na který se odkazujeme, je výstupní proměnná `commentsId` z uzlu **Ask with adaptive card**.

![Funkce If a IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.cs.png)

1. Nyní klikněte **uvnitř závorek** za funkcí `IsBlank`. Vložíme výstupní proměnnou `commentsId` z uzlu **Ask with adaptive card**.

   Zadejte následující do závorek,

    ```text
    Topic.commentsId
    ```

   A přidejte čárku za závorku.

   ![Odkaz na výstup commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.cs.png)

1. Nyní definujeme logiku:

   - když je **_true_** - pokud je parametr typu string `Topic.commentsId` prázdný, chceme vložit žádnou hodnotu.
   - když je **_false_** - pokud parametr typu string `Topic.commentsId` není prázdný, vložíme hodnotu proměnné commentsId.

   Za závorku, která uzavírá parametr typu string, zadejte následující,

    ```text
    "", Topic.commentsId)
    ```

   Výraz Power Fx by měl být následující,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   Skvělá práce, náš výraz je hotový! 🙌🏻 Nyní vyberte **Insert**, abyste nastavili vstupní parametr toku agenta na výraz Power Fx.

   ![Výraz Power Fx](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.cs.png)

1. **Uložte** téma.

### 9.3 Aktualizace tématu Žádost o zařízení s několika uzly pro lepší uživatelský zážitek

Nyní přidáme dva další uzly:

- **Send a message** - bude fungovat jako potvrzovací zpráva, která odkazuje na vybrané zařízení a informuje, že jejich žádost byla odeslána.

- **Topic management** - pro ukončení konverzace přesměrujeme na uzel **End of conversation**.

Začněme!

1. Vyberte **plus + ikonu** pod uzlem toku agenta a vyberte uzel **Send a message**.

   ![Přidání uzlu Send a message](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.cs.png)

1. Zadejte následující do pole zprávy,

    ```text
    Thanks
    ```

   Poté vyberte **Insert variable**, protože budeme odkazovat na jméno uživatele.

   ![Vložení proměnné](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.cs.png)

1. Vyberte záložku **System** a vyhledejte `User` v poli vyhledávání. Vyberte proměnnou **User.DisplayName**.

   ![Výběr systémové proměnné](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.cs.png)

1. Zadejte následující do pole zprávy,

    ```text
    . Your selected device,
    ```

   Poté vyberte **Insert variable** a tentokrát na záložce **Custom** vyberte proměnnou **ModelValue**.

   Poté zadejte následující, aby byla zpráva kompletní.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   Zpráva by měla vypadat následovně.

   ![Odeslání zprávy](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.cs.png)

1. Nakonec vyberte **plus + ikonu** pod uzlem **Send a message** a vyberte **Topic management**, následně **Go to another topic** a vyberte **End of Conversation**.

   ![Topic management](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.cs.png)

1. **Uložte** téma.

   ![Uložit](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.cs.png)

### 9.4 Testování agenta pomocí několika scénářů

Skvělá práce!!! 😁 Nyní můžeme otestovat našeho agenta.

#### 9.4.1 Požádejte o zařízení a zadejte komentář v adaptivní kartě

1. **Obnovte** testovací panel, vyberte ikonu **activity map** a zadejte následující jako zprávu agentovi.

    ```text
    I need a laptop
    ```

   ![Testování agenta](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.cs.png)

1. Agent spustí **Available devices** a odpoví seznamem dostupných zařízení. Zadejte následující jako odpověď na otázku, zda chcete požádat o zařízení.

    ```text
    Yes
    ```

   ![Ano](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.cs.png)

1. Všimněte si, jak agent spustil **Request device** podle pokynů agenta a že adaptivní karta je nyní zobrazena ve zprávě agenta.

   Vyberte zařízení **Surface Laptop 15** a přidejte následující jako komentář.

    ```text
    I need 16GB of RAM please
    ```

   ![Výběr zařízení a zadání komentáře](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.cs.png)

1. Posuňte se dolů, dokud neuvidíte tlačítko **Submit Request**, a vyberte jej pro odeslání adaptivní karty agentovi.

   ![Odeslání žádosti](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.cs.png)

1. Vyberte **Allow**, aby agent mohl použít vaše přihlašovací údaje pro ověření připojení dvou akcí konektoru.

   ![Povolit](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.cs.png)

1. Agent poté zobrazí potvrzovací zprávu, která zahrnuje vybraný model, a následně přesměruje na téma **End of Conversation**. Skvělé!

   ![Žádost odeslána](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.cs.png)

1. Vyberte **Ano**, abyste ověřili zbytek tématu **End of Conversation**.

   ![Výběr Ano](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.cs.png)

1. Následně ohodnoťte zkušenost výběrem libovolné hvězdy na kartě hodnocení.

   Agent poté přejde k poslednímu uzlu **Question** v tématu **End of Conversation**. Vyberte **Ne**.

   ![Téma End of Conversation](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.cs.png)

1. Téma se poté dokončí a v testovacím panelu se zobrazí závěrečná zpráva.

   ![Téma End of Conversation](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.cs.png)

1. Zkontrolujte svou e-mailovou schránku, zda jste obdrželi e-mail, který agent poslal manažerovi. Můžete vidět podrobnosti o vybraném zařízení a poznámku zadanou v adaptivní kartě.

   ![E-mail přijat](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.cs.png)

1. Klikněte na hypertextový odkaz a prohlížeč by měl načíst položku SharePointu daného zařízení. Skvělé!

   ![Kliknutí na odkaz v e-mailu](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.cs.png)

#### 9.4.2 Požádejte o zařízení a nezadejte komentář v adaptivní kartě

Nyní otestujeme scénář, kdy není zadán žádný komentář.

1. Opakujte stejné kroky:

   - **Obnovte** testovací panel a vyberte ikonu **activity map**
   - Zadejte zprávu, `Potřebuji notebook`
   - Odpovězte `Ano` na otázku, zda chcete požádat o zařízení

   ![Požádat o zařízení](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.cs.png)

1. Tentokrát vyberte zařízení **Surface Laptop 13** a nezadejte žádný komentář.

   ![Výběr zařízení](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.cs.png)

1. **Odešlete** žádost výběrem tlačítka **Submit Request**.

   ![Odeslání žádosti](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.cs.png)

1. Tentokrát e-mail přijatý ve vaší schránce zobrazí **None** jako komentář.

   ![E-mail přijat](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.cs.png)

#### 9.4.3 Nepožádejte o zařízení

Otestujeme poslední scénář, kdy není požádáno o zařízení, a téma **Goodbye** by mělo být spuštěno podle pokynů agenta.

1. Opakujte stejné kroky:

   - **Obnovte** testovací panel a vyberte ikonu **activity map**
   - Zadejte zprávu, `Potřebuji notebook`
   - Tentokrát odpovězte `Ne` na otázku, zda chcete požádat o zařízení

   ![Testování agenta](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.cs.png)

1. Agent spustil téma **Goodbye** a otázka definovaná v tématu je položena.

   ![Téma Goodbye spuštěno](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.cs.png)

## ✅ Mise splněna

Gratulujeme! 👏🏻 Naučili jste se, jak vytvořit tok agenta a přidat jej do našeho existujícího tématu **Request device**, a jak přesměrovat agenta na jiné téma.

Toto je konec **Lab 09 - Přidání toku agenta pro automatizaci a rozšíření schopností tématu**, vyberte odkaz níže pro přechod na další lekci. V následující lekci rozšíříme případ použití z této laboratoře.

⏭️ [Přejít na lekci **Přidání spouštěčů událostí - Povolení autonomních schopností agenta**](../10-add-event-triggers/README.md)

## 📚 Taktické zdroje

🔗 [Představení toků agenta: Transformace automatizace pomocí AI-prvních pracovních toků](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Přehled toků agenta](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Použití toků agenta s vaším agentem](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Seznam funkcí v referenční příručce](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Toky agenta ve studiu Copilot](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analytika" />

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.