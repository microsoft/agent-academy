<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T18:20:10+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "cs"
}
-->
# Mise 03: Přidání spouštěčů událostí pro autonomní činnost

--8<-- "disclaimer.md"

## 🕵️‍♂️ KRYCÍ JMÉNO: `OPERACE SIGNAL POINT`

> **⏱️ Časový rámec operace:** `~45 minut`

## 🎯 Stručný popis mise

Vítejte zpět, agente. V [Misi 02](../02-multi-agent/README.md) jste se naučili, jak vytvořit podřízeného agenta pro příjem žádostí a propojeného agenta pro přípravu na pohovor, čímž jste rozšířili schopnosti svého hlavního náborového agenta.

Vaším úkolem, pokud se rozhodnete jej přijmout, je **Operace Signal Point** – hlubší ponoření do **spouštěčů událostí** – povýšení vašeho systému agentů z reaktivního na **autonomní provoz**. Přeměníte své agenty z čekání na lidský vstup na proaktivní reakci na externí události a inteligentní činnost bez dohledu.

Představte si to jako upgrade z agentů, kteří _odpovídají na otázky_, na agenty, kteří _předvídají potřeby_ a _jednají nezávisle_. Prostřednictvím spouštěčů událostí a automatizovaných pracovních postupů váš náborový agent detekuje příchozí e-maily s životopisy, automaticky zpracuje přílohy, uloží data do Dataverse a upozorní váš HR tým náboru prostřednictvím Microsoft Teams – zatímco vy se soustředíte na úkoly s vyšší hodnotou.

Vítejte ve světě, kde se automatizace setkává s inteligencí.

## 🔎 Cíle

V této misi se naučíte:

1. Jak spouštěče událostí umožňují autonomní chování agentů bez interakce uživatele
1. Rozdíly mezi interaktivními a autonomními agenty v Copilot Studio
1. Jak vytvořit spouštěče událostí, které automaticky zpracovávají e-mailové přílohy a nahrávají soubory do Dataverse
1. Jak vytvořit pracovní postupy agentů, které zveřejňují adaptivní karty v kanálech Teams pro upozornění
1. Jak předávat data mezi spouštěči událostí a pracovními postupy agentů pro automatizaci od začátku do konce

## 🤔 Co je spouštěč událostí?

Dříve v [Recruit](../../recruit/10-add-event-triggers/README.md) jsme se naučili o spouštěčích událostí. Udělejme si rychlé shrnutí, pokud jste to minuli.

**Spouštěče událostí** umožňují agentovi _jednat_ samostatně, když se něco stane v jiném systému – není potřeba žádná zpráva od uživatele. Když se spustí konfigurovaná událost – například „nová položka v SharePointu“, „nový e-mail“, „přiřazený úkol v Planneru“ nebo dokonce časově založená opakování, konektor odešle spouštěcí data vašemu agentovi. Agent pak následuje vaše pokyny, aby rozhodl, jaké akce nebo témata má zavolat.

### Klíčové vlastnosti

- **Autonomní aktivace:**
      - Na rozdíl od spouštěčů témat, které začínají, když uživatel píše agentovi, spouštěče událostí se spouštějí z externích událostí, což umožňuje proaktivní chování.

- **Řízené daty:**
      - Každá událost doručuje data (proměnné + volitelné pokyny) prostřednictvím konektoru. Agent používá vaše definované pokyny a data k rozhodnutí, co dělat dál.
      - Například _zavolat téma_ nebo _provést akce definované nástroji_.

- **Příklady připravené k použití:**
      - Soubor nebo položka vytvořená v SharePointu/OneDrive
      - Úkol v Planneru dokončen/přiřazen
      - Odpověď na Microsoft Forms odeslána
      - Opakování/plán

    Dostupnost závisí na datových politikách vaší organizace nakonfigurovaných v Power Automate.

- **Vyžaduje generativní orchestraci:**
      - Spouštěče událostí jsou dostupné pouze tehdy, když je pro agenta povolena generativní orchestrace.

- **Fakturace/užívání:**
      - Každé doručení spouštěče se počítá jako zpráva do kapacity Copilot Studio.
      - Například opakování každých 10 minut odešle zprávu každých 10 minut.

- **Model autentizace a nastavení:**
      - Spouštěče přidáváte v přehledu agenta, pod _Triggers_. Autentizace pro konektor spouštěče používá účet autora agenta („autentizace autora agenta“).
      - Parametry spouštěče a data můžete upravit v portálu Power Automate maker.

- **Testování a sledování:**
      - Spouštěče můžete testovat z testovacího panelu agenta a zkoumat chování pomocí mapy aktivit před publikováním.

!!! info "Shrnutí pro vývojáře"

    Představte si spouštěče událostí jako **signály podobné webhookům**, které posílají strukturovaná data vašemu agentovi, umožňují mu _zahájit_ práci a řetězit akce napříč systémy – aniž by čekal na uživatele.

### Spouštěče témat – jak se liší

Dříve jste se naučili o spouštěčích témat v [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), ale možná stále přemýšlíte, jak se _spouštěče témat_ liší od _spouštěčů událostí_ a proč je tento rozdíl důležitý pro pochopení toho, co činí agenta autonomním.

Spouštěče témat kontrolují _kdy se téma spustí_, obvykle v reakci na zprávu uživatele.

- V generativní orchestraci je výchozí spouštěč **Podle agenta** – plánovač vybere téma, jehož název/popisek nejlépe odpovídá zprávě uživatele.
- V klasické orchestraci je výchozí **Fráze** – plánovač vybere téma, když jedna nebo několik spouštěcích frází nejlépe odpovídá zprávě uživatele.

Další typy spouštěčů zahrnují `Přijatá zpráva`, `Přijatá událost`, `Přijatá aktivita`, `Aktualizace konverzace`, `Přijaté vyvolání`, `Nečinnost` a `Dokončení plánu`.

!!! info "Základní rozdíl"

    Spouštěče témat jsou _zahajovače konverzace_ uvnitř chatu.
    
    Spouštěče událostí jsou _zahajovače systému_ doručené prostřednictvím konektorů, které mohou spustit agenta bez jakékoli konverzace.

### Rychlý přehled spouštěče témat vs spouštěče událostí

- **Spouštěč témat:** Uživatel (nebo aktivita v chatu) řekl/udělal X ➡️ spustit téma T.
- **Spouštěč událostí:** SharePoint/Planner/E-mail/Časovač spustil s daty P ➡️ agent vyhodnotí pokyny ➡️ zavolat akce/témata podle potřeby.

## 🏓 Interaktivní agent vs autonomní agent – srovnání

Nyní, když znáte rozdíl mezi spouštěči událostí a spouštěči témat, se naučíme rozdíl mezi interaktivním agentem a autonomním agentem.

V termínech Copilot Studio „interaktivní“ odpovídá agentům, kteří primárně komunikují prostřednictvím **témat** v chatu nebo kanálu. „Autonomní“ odpovídá agentům, kteří také využívají **spouštěče událostí**, aby fungovali bez vstupu uživatele.

Následující tabulka shrnuje jejich rozdíly a podobnosti.

| Dimenze                             | Interaktivní agent    | Autonomní agent                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Jak začíná                          | Uživatel (nebo aktivita v chatu) spustí téma. Příklad: Podle agenta, Fráze, Přijatá zpráva.   | Externí spouštěč událostí odešle data prostřednictvím konektoru agentovi. Příklad: SharePoint, Planner, e-mail, plán, atd. |
| Primární použití                    | Otázky a odpovědi, řízené pracovní postupy, akce na vyžádání v chatu – Teams, web, atd.  | Proaktivní operace a automatizace na pozadí – reagovat na změny v systému a poté upozornit, uložit nebo organizovat úkoly. |
| Povrch spouštěče                   | Spouštěče témat: Podle agenta / Fráze / Přijatá zpráva / Typy aktivit / Vyvolání / Nečinnost / Dokončení plánu | Knihovna spouštěčů událostí prostřednictvím konektorů; data zahrnují údaje o události + volitelné pokyny. |
| Plánovač (generativní orchestrace)  | Silně využíván pro spouštěče Podle agenta a Dokončení plánu k výběru/seřazení témat. | Vyžadováno pro spouštěče událostí; agent používá pokyny + data k rozhodnutí, jaké akce/témata zavolat. |
| Typický příklad                     | Uživatel se ptá „Jaká je naše politika vracení peněz?“ → Spustí se téma, dotazuje se na znalosti, odpovídá. | Nový úkol v Planneru přiřazen → Spustí se spouštěč událostí → Agent zveřejní zprávu v Teams, aktualizuje záznam nebo zavolá téma. |
| Cesta nastavení                     | Vytvořit témata, definovat typ spouštěče, vytvořit dialog/akce; publikovat do kanálů. | Přidat spouštěč událostí (Přehled → Spouštěče), autentizovat konektor pomocí přihlašovacích údajů autora agenta, nakonfigurovat data/pokyny; testovat přes testovací panel; publikovat. |
| Autentizace a správa                | Funguje v kontextu kanálu/autentizace; spouštěče témat reagují na aktivity chatu v povolených kanálech. | Dostupnost spouštěčů závisí na datových politikách Power Automate; konektory fungují pod účtem autora agenta. |
| Sledování                           | Testovat témata v Copilot Studio, zkoumat přepisy konverzací/aktivity. | Použít Test spouštěče a mapu aktivit k ověření provedení před publikováním, sledovat aktivitu po publikování. |
| Dopad na kapacitu                   | Každá zpráva uživatele/odpověď agenta je zpráva spotřebovávající kapacitu. | Každé doručení události je také zpráva, plus jakékoli následné akce. Příklad: opakování každých 10 minut = 6 zpráv/hodinu |

### Kdy použít který?

- Zvolte **spouštěče témat (interaktivní)**, když uživatelé zahajují konverzaci s agentem – FAQ, řízený příjem nebo úkoly ve stylu příkazů uvnitř chatu. Spouštěč Podle agenta plánovače snižuje manuální kuraci frází.
- Přidejte **spouštěče událostí (autonomní)**, když by měl agent zahájit konverzaci nebo provést akci sám – při aktualizacích v SharePointu/Dataverse, příchozím e-mailu nebo podle plánu. To vás posouvá z reaktivních na proaktivní operace.

## Tipy pro vývojáře a úskalí

1. **Povolte generativní orchestraci** pro jakéhokoli agenta, kterého chcete učinit autonomním. Spouštěče událostí se jinak nezobrazí.

1. **Modelujte data včas.** Rozhodněte, jaká minimální pole váš agent potřebuje ze spouštěče, například `itemId`, `assignedTo`, `dueDate`, a přidejte stručné pokyny, které agentovi řeknou, jakou akci/téma zavolat na základě hodnot dat.

1. **Na autentizaci záleží.** Spouštěče se autentizují pomocí účtu autora agenta. Ujistěte se, že tento účet má správná oprávnění konektoru a splňuje datové politiky Power Automate.

1. **Kontrolujte náklady a šum.** Vysokofrekvenční opakování nebo velmi časté zdroje mohou rychle zvýšit spotřebu zpráv – omezte, kde je to možné, nebo přidejte podmínky ve spouštěči k filtrování událostí.

1. **Testujte před publikováním.** Použijte **Test spouštěče** a mapu aktivit k sledování plánu a volaných akcí – iterujte pokyny/data, dokud nebude chování stabilní.

## 🧪 Laboratoř 03 - Automatizace e-mailů s žádostmi kandidátů

Dále přidáme spouštěč událostí k **Náborovému agentovi** a vytvoříme pracovní postup agenta v podřízeném **Agentovi pro příjem žádostí**, který bude zajišťovat další zpracování pro autonomii.

### ✨ Scénář použití

!!! info ""

    **Jako** HR náborář

    **Chci** být upozorněn, když do mé schránky dorazí e-mail s životopisem, který byl automaticky nahrán do Dataverse

    **Abych mohl** být informován o životopisech zaslaných e-mailem pro žádosti automaticky nahrané do Dataverse

Toho dosáhneme pomocí dvou technik:

1. Spouštěč událostí pro příchozí e-mail,
    1. Zkontrolovat, zda `contentType` souboru odpovídá `PDF` jako formátu.
    1. Extrahovat soubor a nahrát do Dataverse pomocí akcí prostřednictvím konektoru Dataverse.
    1. Poté poslat výzvu agentovi pro další zpracování předáním vstupních parametrů z akcí Dataverse.

1. Pracovní postup agenta bude přidán do podřízeného **Agenta pro příjem žádostí**, který je vyvolán výzvou ve spouštěči událostí.
    1. Použít vstupní parametry předané z výzvy spouštěče událostí v adaptivní kartě zveřejněné v kanálu Microsoft Teams k upozornění HR týmu náboru. Adaptivní karta bude obsahovat odkaz na řádek v Dataverse, který bude zobrazen v **Náborovém agentovi**.

Začněme!

### ✨ Předpoklady pro splnění mise

Budete potřebovat **buď**:

- **Dokončit Misi 01 a Misi 02** a mít připraveného Náborového agenta, **NEBO**
- **Importovat startovací řešení Mise 03**, pokud začínáte od začátku nebo potřebujete dohnat. [Stáhnout startovací řešení Mise 03](https://aka.ms/agent-academy)

!!! note "Import řešení a ukázková data"
    Pokud používáte startovací řešení, podívejte se na [Misi 01](../01-get-started/README.md) pro podrobné pokyny, jak importovat řešení a ukázková data do vašeho prostředí.

Budete také potřebovat přístup k **Microsoft Teams**, abyste dokončili druhé cvičení laboratoře zveřejnění adaptivní karty v Microsoft Teams.

### Laboratoř 3.1 - Automatizace nahrávání životopisů do Dataverse přijatých e-mailem

1. V Náborovém agentovi přejděte dolů na **záložku Přehled** a vyberte **+ Přidat spouštěč**.

       ![Přidat spouštěč k agentovi](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.cs.png)

1. Zobrazí se seznam spouštěčů. Vyberte **Když dorazí nový e-mail (V3)** a zvolte **Další**.

       ![Vybrat spouštěč Když dorazí nový e-mail (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.cs.png)

1. Nyní uvidíme **Název spouštěče** a **Přihlášení** k referencím připojení pro uvedené aplikace.

       Přejmenujte název spouštěče na následující,
    
      
Nyní aktualizujeme spouštěč události, abychom přidali další možnosti automatizace. Vyberte **tři tečky (...)** u spouštěče a zvolte **Upravit v Power Automate**.

![Vyberte Upravit v Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.cs.png)

1. Spouštěč se načte jako tok v portálu Power Automate maker. To, co vidíte, je návrhář toků v portálu Power Automate maker. Zde můžeme přidat další logiku a akce pro větší automatizaci. Spouštěč se zobrazí nahoře, následovaný akcí **Odesílá výzvu určenému copilotovi k zpracování** jako poslední akcí v toku.

![Návrhář toků v portálu Power Automate maker](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.cs.png)

1. Ve výchozím nastavení může spouštěč **Když dorazí nový e-mail** v Power Automate zpracovat více e-mailů najednou, pokud dorazí současně, a spustit tok pouze jednou pro celou dávku.

Aby se tok spouštěl samostatně pro každý e-mail, povolte nastavení **Split On** v nastavení spouštěče a vyberte `@triggerOutputs()?['body/value']` v poli rozbalovacího seznamu.

S povoleným **Split On** a nastaveným polem na `@triggerOutputs()?['body/value']` se tok spustí jednotlivě pro každou zprávu, i když dorazí více zpráv současně.

![Zapněte nastavení Split On ve spouštěči](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.cs.png)

1. Dále přidáme logiku pro kontrolu typu souboru přílohy, chceme nahrávat pouze přílohy ve formátu .PDF a ne obrázky (ty by mohly pocházet z podpisů e-mailů). Vyberte ikonu **+** pod spouštěčem a zvolte **Control** v sekci **Vestavěné nástroje**.

![Vyberte Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.cs.png)

1. Vyberte akci **Podmínka**.

![Vyberte akci Podmínka](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.cs.png)

1. Nyní nakonfigurujeme podmínku, která zkontroluje, zda je typ souboru přílohy .PDF. V poli **Vyberte hodnotu** vyberte **ikonu blesku** nebo **ikonu fx** napravo.

1. Do pole **Hledat** zadejte následující,

```text
content type
```

1. Poté vyberte parametr **Attachments Content-Type** ze spouštěče.

1. Dále vyberte **Přidat**, abyste přidali dynamický obsah do parametru **Id** akce.

![Nakonfigurujte akci Podmínka](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.cs.png)

1. Zastavme se na chvíli, pravděpodobně jste si všimli, že se automaticky objevila akce **Pro každou**.

Vyberte akci **Pro každou**. Tato akce představuje procházení každé přílohy v e-mailu, protože parametr **Attachments Content-Type** ze spouštěče je vázán na každou přílohu.

Pod povrchem se jedná o pole, a proto byla akce **Pro každou** automaticky přidána, když jsme vybrali parametr **Attachments Content-Type** v akci **Podmínka**.

Chcete-li se o tom dozvědět více, rozbalte následující blok dalšího učení.

??? info "Další učení: Automatické zobrazení akce Pro každou"

🤔 **Proč se automaticky objevuje "Použít na každou" nebo "Pro každou"?**

Když vyberete parametr (dynamický obsah), který představuje seznam nebo pole položek - například seznam příloh, e-mailů nebo řádků - Power Automate rozpozná, že možná chcete zpracovat každou položku jednotlivě.

Aby vám s tím pomohl, Power Automate automaticky přidá smyčku **"Použít na každou"** (nebo **"Pro každou"**) kolem vaší akce. To zajišťuje, že vaše akce bude spuštěna jednou pro každou položku v seznamu, místo aby se pokoušela zpracovat celý seznam najednou (což by mohlo způsobit chyby).

🦋 **Příklad**

- Pokud vyberete "Přílohy" z předchozí akce (což je pole) a pokusíte se ji použít v akci, která očekává jeden soubor, Power Automate obalí vaši akci smyčkou **"Použít na každou"** (nebo **"Pro každou"**).
- Tímto způsobem vaše akce bude spuštěna pro **každou přílohu** - jednu po druhé.

💡 **Klíčové body**

- **Automatické:** Smyčka se objeví automaticky, aby vám pomohla zpracovat každou položku v kolekci.
- **Zabraňuje chybám:** Bez smyčky by vaše akce mohla selhat, protože nemůže zpracovat více položek najednou.
- **Vizualizace:** Je to vizuální způsob, jak ukázat, že váš tok bude opakovat akci pro každou položku v seznamu.

![Akce Pro každou vysvětlena](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.cs.png)

1. Dále do druhého pole **Vyberte hodnotu** zadejte následující,

```text
application/pdf
```

Tím zajistíte, že pro každou přílohu bude zkontrolováno, zda má formát souboru .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.cs.png)

1. Nyní nakonfigurujeme cestu **True**, abychom extrahovali soubor z e-mailu a nahráli jej do tabulky **Resume** v Dataverse.

Přidejte novou akci níže v cestě **True** a vyhledejte `html to text`. Vyberte akci **Html to text**.

Chcete-li se dozvědět více o akci **Html to text**, rozbalte následující blok dalšího učení.

??? info "Další učení: Akce Html to text"

🤔 **Co je akce "HTML to text"?**

Akce **HTML to text** v Power Automate se používá k převodu obsahu ve formátu HTML na prostý text. To je obzvláště užitečné, když obdržíte data (například e-maily, webový obsah nebo odpovědi API), která obsahují HTML značky, a chcete extrahovat pouze čitelný text bez jakéhokoliv formátování nebo kódu.

⚙️ **Jak to funguje?**

- **Vstup:** Poskytnete řetězec HTML obsahu (například tělo e-mailu).
- **Výstup:** Akce odstraní všechny HTML značky a vrátí pouze prostý text.

👍🏻 **Kdy byste ji měli použít?**

- Když chcete extrahovat čitelný text z e-mailů, webových stránek nebo odpovědí API, které obsahují HTML.
- Před odesláním obsahu do systémů, které nepodporují HTML formátování (například SMS, zprávy Teams nebo databáze).
- K vyčištění dat pro další zpracování nebo analýzu.

🔭 **Kde ji najdete?**

- V Power Automate pro Agent Flows, vyhledejte akci nazvanou `HTML to text`. Nachází se pod konektorem **Data Operations**.

💡 **Klíčové body**

- Odstraňuje všechny HTML značky a ponechává pouze text.
- Neinterpretuje ani nespouští skripty/styly - pouze odstraňuje značky.
- Užitečné pro čištění dat a přípravu obsahu pro výstupy v prostém textu.

![Přidat akci HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.cs.png)

1. Dále musíme vytvořit nové připojení pro akci **Html to text** výběrem **Přidat nové**.

![Přidat nové připojení](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.cs.png)

1. Akce může být nyní nakonfigurována. Přidejme parametr **Body** ze spouštěče. V poli **Obsah** vyberte **ikonu blesku** nebo **ikonu fx** napravo.

![Přidat dynamický obsah](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.cs.png)

1. Na kartě **Dynamický obsah** vyhledejte `body` a vyberte parametr **Body**, poté zvolte **Přidat**.

![Přidat parametr Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.cs.png)

1. Dokončili jsme konfiguraci této akce, takže ji opustíme výběrem dvou šipek («) směřujících doleva pro sbalení panelu.

![Sbalit panel akce](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.cs.png)

1. Přidáme novou akci výběrem **+ ikony** pod akcí **Html to text**, což načte panel pro přidání akcí. Vyberte konektor **Microsoft Dataverse**.

![Přidat novou akci](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.cs.png)

1. Vyberte akci **Přidat nový řádek**.

![Přidat akci nový řádek](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.cs.png)

1. Přejmenujte akci výběrem **tří teček (...)**, zkopírujte a vložte následující jako název,

```text
Přidat nový řádek Resume
```

Pro parametr **Název tabulky** vyhledejte `res` a vyberte tabulku **Resumes**.

![Přejmenovat akci a nakonfigurovat parametr Název tabulky](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.cs.png)

1. Vyberte pole **Název životopisu** a zvolte **ikonu blesku** nebo **ikonu fx** napravo.

![Nakonfigurovat parametr Název životopisu](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.cs.png)

1. Na kartě **Funkce** zadejte následující výraz, který používá funkci `item()`.

```text
item()?['name']
```

Chcete-li se dozvědět více o funkci `item()`, rozbalte následující blok dalšího učení.

??? info "Další učení: Funkce `item()`"

🤔 **Co je funkce `item()`?**

- Když použijete akci **Použít na každou**, Power Automate prochází každým prvkem v kolekci (poli).
- Nejčastěji se používá uvnitř akcí jako **Použít na každou** (nebo **Pro každou**), **Vybrat** nebo **Filtrovat pole**.

⚙️ **Jak to funguje?**

- `item()` je funkce, která vrací aktuální položku zpracovávanou ve smyčce nebo operaci pole.
- Uvnitř této smyčky `item()` odkazuje na _aktuální prvek_, který se zpracovává.

📌 **Kde ji použít?**

- **Použít na každou:** pro přístup k vlastnostem aktuální položky.
- **Vybrat:** pro transformaci každé položky v poli.
- **Filtrovat pole:** pro odkaz na aktuální položku, která se vyhodnocuje.

🦋 **Příklad**

- Výraz uvnitř smyčky:
       -  `item()?['Email']`
- Tím získáte vlastnost `Email` aktuální položky.

💡 **Klíčové body**

- `item()` je _kontextově citlivé_: vždy odkazuje na aktuální položku ve smyčce nebo operaci pole, ve které se nacházíte.
- Pokud vnoříte smyčky, můžete použít `items('LoopName')` pro odkaz na položky v konkrétní smyčce.

Vyberte **Přidat**, abyste přidali výraz do parametru **Název životopisu**.

![Přidat výraz pro parametr Název životopisu](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.cs.png)

1. Stále musíme nakonfigurovat několik dalších parametrů, vyberte **Zobrazit vše** a v poli **Motivační dopis** vyberte **ikonu blesku** nebo **ikonu fx** napravo.

Na kartě **Funkce** zadejte následující výraz, který používá stejný výraz jako v předchozí [misi](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Tento výraz kontroluje, zda _text_ z akce **Html to text** je delší než 2000 znaků, a pokud ano, vrátí pouze prvních 2000 znaků; jinak vrátí celý text.

![Přidat výraz pro parametr Motivační dopis](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.cs.png)

1. Výraz bude nyní přidán do pole **Motivační dopis**.

![Výraz přidán do parametru Motivační dopis](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.cs.png)

1. Pro pole **Zdrojová e-mailová adresa** vyhledejte `from` a vyberte parametr **From** ze spouštěče, protože obsahuje hodnotu e-mailové adresy.

![Parametr Zdrojová e-mailová adresa](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.cs.png)

1. Pro pole **Datum nahrání** vyberte **ikonu blesku** nebo **ikonu fx** napravo. Na kartě **Funkce** zadejte následující výraz, který používá funkci `utcNow()`.

```text
utcNow()
```

Chcete-li se dozvědět více o funkci `utcNow`, rozbalte následující blok dalšího učení.

??? info "Další učení: Funkce `utcNow`"

🤔 **Co je funkce `utcNow()`?**

- Funkce utcnow() v Power Automate vrací aktuální datum a čas v koordinovaném světovém čase (UTC) ve formátu ISO 8601, například: `2025-09-23T04:32:14Z`

🦋 **Příklad**

- Výraz:
       -  `concat('Report generated on ', utcnow())`
- Výstup je:
       - Report generated on `2025-09-23T04:32:14Z`

💡 **Klíčové body**
- **Žádné argumenty (vstupní parametry) nejsou vyžadovány:** vždy vrací aktuální UTC časové razítko.
   - **Použití**
       - Přidávání časových razítek do logů nebo názvů souborů
       - Porovnávání aktuálního času s jinými daty
       - Plánování nebo podmínky založené na čase

![Parametr data nahrání](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.cs.png)

1. Nyní jsme dokončili konfiguraci akce **Přidat nový řádek životopisu**, takže opustíme panel jeho sbalením.

![Opustit panel akce](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.cs.png)

1. Přidáme novou akci výběrem **+ ikony** pod akcí **Přidat nový řádek životopisu**, což načte panel pro přidání akcí. Znovu vyberte konektor **Microsoft Dataverse**.

![Přidat akci Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.cs.png)

1. Vyberte akci **Nahrát soubor nebo obrázek**.

![Přidat akci Nahrát soubor nebo obrázek](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.cs.png)

1. Přejmenujte akci výběrem **Tři tečky (...)**, zkopírujte a vložte následující jako název:

```text
Nahrát soubor životopisu
```

![Přejmenovat akci](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.cs.png)

1. Dále vyberte pole **Název obsahu** a klikněte na **ikonu blesku** nebo **fx ikonu** napravo.

V **záložce Funkce** zadejte následující výraz, který používá funkci `item ()`. Tento výraz získá vlastnost `name` aktuální položky (přiloženého souboru).

```text
item()?['name']
```

![Konfigurovat parametr názvu obsahu](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.cs.png)

1. Pro parametr **Název tabulky** vyhledejte `res` a vyberte tabulku **Životopisy**.

![Konfigurovat parametr názvu tabulky](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.cs.png)

1. Dále vyberte pole **ID řádku** a klikněte na **ikonu blesku** nebo **fx ikonu** napravo.

Vyhledejte `ID` a vyberte parametr **Životopis** z akce _Přidat nový řádek Dataverse_, protože obsahuje hodnotu ID řádku, do kterého se má nahrát soubor PDF.

Vyberte **Přidat**.

![Vybrat parametr ID řádku](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.cs.png)

1. Vyberte pole **Název sloupce** a zvolte možnost **PDF životopisu**.

![Konfigurovat parametr názvu sloupce](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.cs.png)

1. Vyberte pole **Obsah** a klikněte na **ikonu blesku** nebo **fx ikonu** napravo.

V **záložce Funkce** zadejte následující výraz, který používá funkci `item ()`. Tento výraz získá vlastnost `contentBytes` aktuální položky (přiloženého souboru). `contentBytes` odkazuje na surová binární data souboru nebo přílohy, zakódovaná jako Base64 řetězec.

```text
item()?['contentBytes']
```

1. Dokončili jsme konfiguraci této akce, takže ji opustíme výběrem dvou úhlových závorek («) směřujících doleva pro sbalení panelu.

![Sbalit panel akce](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.cs.png)

1. Dále vyberte **Odeslat výzvu určenému copilotovi k zpracování**, poté přetáhněte tuto akci pod akci **Nahrát soubor životopisu** v _True_ cestě podmínky.

![Přetáhnout akci do True cesty](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.cs.png)

1. Vyberte **Odeslat výzvu určenému copilotovi k zpracování** pro její konfiguraci.

![Vybrat akci](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.cs.png)

1. V poli **Tělo/zpráva** vyberte veškerý obsah pole a vymažte/smažte jej.

![Vymazat parametr Tělo](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.cs.png)

1. Zkopírujte a vložte následující text do pole **Tělo/zpráva** a zvýrazněte `RESUME ID PLACEHOLDER`.

```text
Odeslat [ResumeId (text)] = "RESUME ID PLACEHOLDER" a [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" a [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" do nástroje "Notify Teams Applicant channel" v podagentovi "Application Intake Agent"
```

![Nahradit text zástupce ID životopisu](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.cs.png)

1. Vyberte **ikonu blesku** nebo **fx ikonu** napravo.

Vyhledejte `resume` a vyberte parametr **Životopis** z akce _Přidat nový řádek Dataverse_, protože obsahuje hodnotu `ID` řádku vytvořeného životopisu.

Vyberte **Přidat**.

![Vybrat parametr životopisu](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.cs.png)

1. Zvýrazněte `RESUME TITLE PLACEHOLDER`. Vyberte **ikonu blesku** nebo **fx ikonu** napravo.

Vyhledejte `title` a vyberte parametr **Název životopisu** z akce _Přidat nový řádek Dataverse_, protože obsahuje hodnotu `název životopisu` vytvořeného řádku životopisu.

Vyberte **Přidat**.

![Vybrat parametr názvu životopisu](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.cs.png)

1. Zvýrazněte `RESUME NUMBER PLACEHOLDER`. Vyberte **ikonu blesku** nebo **fx ikonu** napravo.

Vyhledejte `resume number` a vyberte parametr **Číslo životopisu** z akce _Přidat nový řádek Dataverse_, protože obsahuje hodnotu `Číslo životopisu` vytvořeného řádku životopisu.

Vyberte **Přidat**.

![Vybrat parametr čísla životopisu](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.cs.png)

1. Dokončili jsme konfiguraci této akce a náš tok agenta 🙌🏻 Skvělá práce! Nyní uložme náš tok událostí výběrem **Uložit koncept**.

![Uložit koncept](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.cs.png)

1. Nyní musíme upravit podrobnosti toku agenta, vyberte **Zpět**.

![Vybrat Zpět](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.cs.png)

1. Vyberte **Upravit** v sekci **Podrobnosti** a aktualizujte **Plán** na možnost **Copilot Studio**.

Vyberte **Uložit**.

![Změnit plán Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.cs.png)

1. Zobrazí se modální okno, které vás požádá o potvrzení přepnutí na plán Copilot Studio. Vyberte **Potvrdit**.

![Potvrdit změnu plánu Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.cs.png)

1. Plán je nyní aktualizován na **Copilot Studio**. Vyberte **Upravit**, protože potřebujeme publikovat tok událostí pro našeho agenta.

![Upravit tok](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.cs.png)

1. Vyberte **Publikovat**.

![Publikovat](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.cs.png)

Hurá! Tok událostí je nyní publikován 😃

![Publikováno](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.cs.png)

Pokračujme vytvořením nového toku agenta, který bude vyvolán podagentem **Intake Application Agent**.

### Laboratoř 3.2 - Upozornění na kanál Teams pomocí adaptivní karty

Nyní vytvoříme nový tok agenta pro podagenta **Intake Application Agent**, který využije hodnoty předané tokem událostí k odeslání adaptivní karty do kanálu Teams. Tato adaptivní karta upozorní tým HR na nábor na automaticky nahraný PDF soubor, aby jej mohli zkontrolovat.

Začněme!

1. V **Hiring Agent** vyberte záložku **Agenti** a zvolte **Application Intake Agent**.

![Vybrat Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.cs.png)

1. Přejděte dolů na **Nástroje** a vyberte **+ Přidat**.

![Přidat nástroj](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.cs.png)

1. Zobrazí se modální okno **Přidat nástroj**. Vyberte **+ Nový nástroj**.

![Vybrat Nový nástroj](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.cs.png)

1. Vyberte **Tok agenta**.

![Vybrat Tok agenta](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.cs.png)

1. Následně se načte **návrhář toku agenta**. V triggeru **Když agent zavolá tok** vyberte **+ Přidat vstup**.

![Vybrat přidat vstup](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.cs.png)

1. Vyberte **Text** jako typ uživatelského vstupu.

![Vybrat Text](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.cs.png)

1. Do textového pole vstupu zkopírujte a vložte následující jako název vstupního parametru.

```text
ResumeId
```

![Vstup ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.cs.png)

1. Opakujte stejné kroky pro přidání druhého textového vstupu. Zkopírujte a vložte následující jako název vstupního parametru.

```text
ResumeTitle
```

![Vstup ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.cs.png)

1. Opakujte stejné kroky pro přidání třetího textového vstupu. Zkopírujte a vložte následující jako název vstupního parametru.

```text
ResumeNumber
```
![Vstup ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.cs.png)

1. Pamatujete si, jak jsme v [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) přidali adaptivní kartu do Tématu pro našeho agenta? Tentokrát přidáme adaptivní kartu do toku agenta. Nyní přidáme další akci do našeho toku agenta, která odešle adaptivní kartu do kanálu Teams.

Vyberte **+ ikonu** pod triggerem.

![Přidat novou akci](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.cs.png)

1. Vyberte akci **Odeslat kartu do chatu nebo kanálu**.

![Vybrat akci Odeslat kartu do chatu nebo kanálu](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.cs.png)

1. Je třeba vytvořit referenci připojení k Microsoft Teams pomocí vašeho přihlášeného uživatelského účtu. Vyberte **Přihlásit se**.

![Vybrat přihlásit se](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.cs.png)

1. Vyberte svůj uživatelský účet a poté klikněte na **Povolit přístup**.

![Vybrat Povolit přístup](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.cs.png)

1. Pro následující vstupní parametry:

| Parametr | Jak nastavit | Detaily |
|----------|--------------|---------|
| **Odeslat jako** | Rozbalovací nabídka | Vyberte možnost `Flow bot` |
| **Odeslat do** | Rozbalovací nabídka | Vyberte možnost `Kanál` |
| **Tým** | Rozbalovací nabídka | Vyberte tým, který je dostupný ve vašem prostředí a ke kterému máte přístup pro účely dokončení tohoto cvičení |
| **Kanál** | Rozbalovací nabídka | Vyberte kanál, který je dostupný ve vašem prostředí a ke kterému máte přístup pro účely dokončení tohoto cvičení |

![Konfigurovat vstupní parametry](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.cs.png)

1. Dále nakonfigurujeme pole **Adaptivní karta**. Vyberte pole **Adaptivní karta**.

![Vybrat pole Adaptivní karta](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.cs.png)

1. Otevřete [JSON soubor aktualizované tabulky životopisů](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), zkopírujte jeho celý obsah a vložte jej do pole Adaptivní karta.

![Zkopírovat a vložit JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.cs.png)

1. Podobně jako jsme to udělali v [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), nahradíme existující hodnoty v JSON payload skutečnými hodnotami nebo dynamickým obsahem.

Nejprve aktualizujeme URL pro vlastnost `url` v rámci vlastnosti `selectAction`. Tato URL bude nahrazena URL systémového zobrazení Životopisů v modelové aplikaci **Hiring Hub**. To umožní náboráři vybrat akci a být přesměrován na systémové zobrazení Životopisů v modelové aplikaci.

Zvýrazněte aktuální hodnotu URL a smažte ji.

![Vybrat hodnotu URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.cs.png)

1. V modelové aplikaci **Hiring Hub** přejděte do systémového zobrazení **Životopisy** pomocí nabídky na levé straně a zkopírujte URL. Poté se vraťte do toku agenta a vložte zkopírovanou URL do vlastnosti **url** v rámci vlastnosti `selectAction`.

![Zkopírovat URL systémového zobrazení životopisů](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.cs.png)
1. Měli byste vidět následující, kde žlutě zvýrazněné jsou detaily vašeho prostředí modelové aplikace **Hiring Hub**.

     | Parametr | Hodnota | Vysvětlení |
     |----------|------------|---------|
     | **Organizační URI** | GUID | URL organizace prostředí Dataverse/Dynamics 365 |
     | **appid** | GUID | Pro otevření konkrétní modelové aplikace se používá parametr dotazu buď appid nebo appname. V tomto případě se používá appid |
     | **viewid** | GUID | Parametr dotazu, který je ID zobrazení |

       ![Vložit URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.cs.png)

1. Dále přidáme hodnoty dynamického obsahu pro několik vlastností. Začněme textem, který zobrazí referenci čísla životopisu řádku, který byl autonomně vytvořen spouštěčem události.

      Vyberte ikonu **panelu** pro načtení akčního panelu.

       ![Vybrat ikonu panelu](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.cs.png)

1. Posuňte se dolů na řádek, kde vidíte vlastnost `text` pro `RESUME NUMBER PLACEHOLDER`. Zvýrazněte hodnotu zástupného symbolu a smažte ji.

       ![Smazat zástupný symbol](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.cs.png)

1. Klikněte mezi dvojité uvozovky a vyberte ikonu **blesku** nebo **fx ikonu** napravo.

      Na kartě **Dynamický obsah** vyberte parametr **ResumeNumber** a zvolte **Přidat**.

       ![Přidat parametr ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.cs.png)

1. Parametr **ResumeNumber** bude nyní přidán jako dynamický obsah do vlastnosti `text`.

       ![Dynamický obsah ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.cs.png)

1. Stejné kroky zopakujeme pro `RESUME NAME PLACEHOLDER`. Posuňte se dolů na řádek, kde vidíte vlastnost `text` pro `RESUME NAME PLACEHOLDER`. Zvýrazněte hodnotu zástupného symbolu a smažte ji.

       ![Zástupný symbol názvu životopisu](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.cs.png)

1. Klikněte mezi dvojité uvozovky a vyberte ikonu **blesku** nebo **fx ikonu** napravo.

      Na kartě **Dynamický obsah** vyberte parametr **ResumeTitle** a zvolte **Přidat**.

       ![Přidat parametr ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.cs.png)

1. Parametr **ResumeTitle** bude nyní přidán jako dynamický obsah do vlastnosti `text`.

       ![Dynamický obsah ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.cs.png)

1. Stejné kroky zopakujeme pro hodnotu **Due Date**, která představuje, kdy by měl náborář životopis zkontrolovat. Posuňte se dolů na řádek, kde vidíte vlastnost `text` pro `May 21, 2023`.

       ![Vybrat Povolit přístup](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.cs.png)

1. Smažte tuto hodnotu zástupného symbolu data a klikněte mezi dvojité uvozovky.

       ![Smazat](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.cs.png)

1. Vyberte ikonu **blesku** nebo **fx ikonu** napravo a na kartě **Funkce** zadejte následující výraz a zvolte **Přidat**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Tento výraz využívá dvě funkce.

     | Funkce | Vysvětlení |
     |----------|------------|
     | **addDays** | Přidá specifikovaný počet dní k danému datu a vrátí výsledné datum ve formátu řetězce |
     | **utcNow** | Vrátí aktuální datum a čas v univerzálním koordinovaném čase (UTC) ve formátu řetězce. |

      Pro hodnotu utcNow formátujeme datum na měsíc a den, následovaný rokem.

       ![Výraz Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.cs.png)

      Výraz bude nyní přidán do vlastnosti `text`.

       ![Výraz Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.cs.png)

1. Nakonec aktualizujeme URL pro vlastnost `url` v rámci vlastnosti `actions` na konci JSON payloadu. Aktuální zástupný symbol URL bude nahrazen URL řádku životopisu v modelové aplikaci **Hiring Hub**. To umožní náboráři vybrat akci `Action.OpenURL` adaptivní karty a být přesměrován na životopis v modelové aplikaci.

       ![Smazat zástupný symbol URL pro zobrazení životopisu](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.cs.png)

1. V modelové aplikaci **Hiring Hub** otevřete řádek v systémovém zobrazení **Resumes** pomocí levého menu. Řádek životopisu se načte jako formulář v modelové aplikaci.

      Zkopírujte URL řádku životopisu.

    ??? info "Jak se vrátit zpět do modelové aplikace **Hiring Hub**, pokud jste ji opustili/zavřeli"

        1. Přejděte na [https://make.powerapps.com](https://make.powerapps.com) a ujistěte se, že jste ve svém vývojářském prostředí, které používáte pro tyto laboratorní cvičení, jinak na něj přepněte.
        
        ![Přejít na make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.cs.png)

        1. Vyberte **Apps** v levém menu a u modelové aplikace **Hiring Hub** vyberte ikonu **Play**, aby se načetla ve vašem prohlížeči.
        
        ![Vybrat modelovou aplikaci Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.cs.png)

       ![Zkopírovat URL řádku životopisu](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.cs.png)

1. Poté se vraťte zpět do toku agenta, zvýrazněte aktuální hodnotu zástupného symbolu URL a smažte ji.

       ![Smazat zástupný symbol URL řádku životopisu](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.cs.png)

1. Poté vložte zkopírované URL do vlastnosti **url** v rámci vlastnosti `url`.

       ![Vložit zkopírované URL řádku životopisu](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.cs.png)

1. Měli byste vidět následující. Smažte hodnotu ID `GUID` na konci. Nahradíme ji dynamickým obsahem - parametrem **ResumeId**.

       ![Smazat zástupný symbol URL pro zobrazení životopisu](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.cs.png)

1. Vyberte ikonu **blesku** nebo **fx ikonu** napravo.

      Na kartě **Dynamický obsah** vyberte parametr **ResumeId** a zvolte **Přidat**.

       ![Parametr ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.cs.png)

1. Parametr **ResumeId** bude přidán jako dynamický obsah. Následující žlutě zvýrazněné jsou detaily vašeho prostředí modelové aplikace **Hiring Hub**.

     | Parametr | Hodnota | Vysvětlení |
     |----------|------------|---------|
     | **Organizační URI** | GUID | URL organizace prostředí Dataverse/Dynamics 365 |
     | **appid** | GUID | Pro otevření konkrétní modelové aplikace se používá parametr dotazu buď appid nebo appname. V tomto případě se používá appid |
     | **id** | GUID | Parametr dotazu, který je ID řádku životopisu |

       ![Dynamický obsah ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.cs.png)

1. Dokončili jsme konfiguraci akce **Post card in a chat or channel** 👏🏻 Ukončete konfiguraci akčního panelu výběrem ikony **x**.

       ![Zavřít panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.cs.png)

1. Nakonec nakonfigurujeme poslední akci, **Respond to the agent**, odesláním textu zpět agentovi pro ukončení zpracování.

      V akci **Respond to the agent** vyberte **+Přidat výstup**.

       ![Vybrat Přidat výstup](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.cs.png)

1. Vyberte **Text** jako typ výstupu.

       ![Vybrat text jako typ výstupu](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.cs.png)

1. Zadejte následující jako název výstupu.

       ![Výstup Ukončit konverzaci](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.cs.png)

1. Zadejte následující jako hodnotu výstupu.

       ```text
       Finished
       ```

       ![Hodnota výstupu Ukončit konverzaci](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.cs.png)

1. Nyní jsme dokončili konfiguraci toku agenta. Vyberte **Uložit koncept** pro uložení toku agenta. Po uložení se zobrazí potvrzovací zpráva.

       ![Uložit koncept](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.cs.png)

1. Před publikováním toku agenta musíme aktualizovat detaily toku agenta. Vyberte kartu **Přehled** a zvolte **Upravit**.

      Do pole názvu toku zadejte následující.

       ```text
       Notify Teams Applicant channel
       ```      

      Poté vyberte ikonu **Obnovit**, aby se pomocí AI aktualizoval popis toku agenta.

      Poté vyberte **Uložit** pro uložení aktualizovaných detailů toku agenta.

       ![Upravit a uložit detaily](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.cs.png)

1. Vraťte se zpět na kartu **Designer** a vyberte **Publikovat** pro publikování toku agenta. Po uložení se zobrazí potvrzovací zpráva.

       ![Publikovat tok agenta](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.cs.png)

1. Tok agenta nyní musí být přidán jako nástroj do **Application Intake Agent**. Vraťte se zpět do **Hiring Agent** a vyberte kartu **Agenti**, poté zvolte **Application Intake Agent**.

       ![Vybrat Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.cs.png)

1. V sekci **Detaily** agenta aktualizujeme pole **Popis**. Zkopírujte následující a vložte na konec textu popisu.

       ```text
       a také upozorní kanál Teams Applicant
       ```

       ![Aktualizovat popis agenta](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.cs.png)

1. Dále přidáme tok agenta jako nástroj. Posuňte se dolů a vyberte **+ Přidat**.

       ![Vybrat Přidat](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.cs.png)

1. Vyberte tok agenta vytvořený dříve, **Notify Teams Applicant Channel**.

       ![Vybrat tok agenta](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.cs.png)

1. Poté vyberte **Přidat a konfigurovat**.

       ![Vybrat Přidat a konfigurovat](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.cs.png)

1. V sekci **Vstupy** toku agenta jsou viditelné tři vstupy, které jsme dříve nakonfigurovali v toku agenta. Ve výchozím nastavení je konfigurace **Vyplnit pomocí** nastavena na **Dynamicky vyplnit pomocí AI**. Toto nastavení ponecháme, protože výzva ze spouštěče události (v poslední akci, **Odeslat výzvu specifikovanému copilotovi pro zpracování** - to jsou kroky 38-44 z **Lab 3.1 - Automatizace nahrávání životopisů do Dataverse přijatých e-mailem**) bude obsahovat hodnoty parametrů, které AI extrahuje.

       ![Vstupy nástroje toku agenta](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.cs.png)

1. Nyní, když byl nástroj přidán do **Application Intake Agent**, je třeba aktualizovat instrukce agenta. Vyberte ikonu **zpětné šipky** pro návrat na seznam agentů.

       ![Vybrat ikonu zpětné šipky](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.cs.png)

1. Vyberte **Application Intake Agent** na kartě **Agenti** v **Hiring Agent**.

       ![Vybrat Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.cs.png)

1. Do pole **Instrukce** zadejte nový řádek po instrukcích `2.Post-Upload`. Zkopírujte a vložte následující instrukce.

       ```text
       Proces pro nahrávání životopisů e-mailem
       1. Když obdržíte zprávu, **Pošlete [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" a [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" a [ResumeNumber (text_2)]= "R01026" nástroji "Notify Teams Applicant channel"** v podagentovi "Application Intake Agent", zavolejte [AGENT FLOW PLACEHOLDER]
       ```

       ![Aktualizovat instrukce Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.cs.png)

1. Zvýrazněte text `[AGENT FLOW PLACEHOLDER`.

       ![Zvýraznit zástupný symbol](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.cs.png)

1. Zadejte znak lomítka `/` a vyberte nástroj **Notify Teams Applicant Channel**.

       ![Vybrat nástroj Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.cs.png)
1. Tok agenta nyní bude spuštěn **Application Intake Agent** podle pokynů, po poslední akci (**Odesílá výzvu určenému copilotovi k zpracování**) v event triggeru, který odešle výzvu obsahující hodnoty parametrů zpět agentovi.

      Vyberte **Uložit**, abyste uložili aktualizované pokyny pro **Application Intake Agent**.

       ![Vyberte Uložit](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.cs.png)

1. Pokyny budou nyní aktualizovány, jakmile bude agent uložen.

       ![Pokyny aktualizovány](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.cs.png)

1. Nyní je potřeba **Publikovat** **Hiring Agent**. Vyberte **Publikovat** v pravém horním rohu a v modálním okně _Publikovat tohoto agenta_, které se objeví, vyberte **Publikovat**.

       ![Publikovat Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.cs.png)

1. Po publikování se objeví potvrzovací zpráva, že agent byl publikován.

       ![Potvrzovací zpráva](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.cs.png)

Nyní můžeme agenta otestovat!

### Lab 3.3 - Testování event triggeru

1. Pro spuštění event triggeru je potřeba odeslat e-mail s přiloženým souborem PDF životopisu. V Outlooku vytvořte novou e-mailovou zprávu.

     | Komponenta e-mailu | Detaily |
     |----------|------------|
     | **Příjemce** | Použijte svůj přihlášený uživatelský účet jako hodnotu |
     | **Příloha souboru** | Nahrajte soubor [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf)  |
     | **Tělo** | Zkopírujte a vložte následující text jako tělo e-mailu  |

       ```text
       Vážený manažere náboru,

       Píši, abych vyjádřil svůj zájem o pozici Senior Power Platform Engineer ve vaší organizaci. S více než devíti lety zkušeností s poskytováním bezpečných a škálovatelných řešení na platformách Microsoft cloud jsem si jistý, že mohu efektivně přispět vašemu týmu.

       Ve své poslední roli jako Lead Power Platform Engineer jsem vyvinul automatizovaný pipeline pro příjem životopisů, což snížilo manuální třídění a zlepšilo vyhledatelnost. Dodal jsem aplikace pro správu HR případů, zavedl řešení-aware flows a implementoval PR kontroly pro zlepšení doby nasazení. Moje odborné znalosti zahrnují Power Apps, Power Automate, Power Pages, Dataverse a řadu služeb Microsoft 365, stejně jako integraci s Graph/REST API a Azure Functions.

       Dříve jsem vyvinul schvalování v Teams pomocí adaptivních karet, což zkrátilo dobu schvalování na stejný den, a vytvořil robustní rámce pro zpracování chyb. Moje zkušenosti zahrnují také migraci starších workflow na Power Automate a budování samoobslužných portálů, které si osvojily stovky zaměstnanců.

       Mám titul B.Sc. v oboru informatiky a certifikace Power Platform Developer (PL-400) a Solution Architect (PL-600). Také se vášnivě věnuji mentorování a dobrovolně spolupracuji s místními maker skupinami.

       Přikládám svůj životopis pro vaše zvážení. Rád bych měl příležitost diskutovat o tom, jak mé dovednosti a zkušenosti odpovídají vašim potřebám.

       Děkuji za váš čas a zvážení.

       S úctou,
       Taylor Testperson
       ```

       **Odeslat** e-mail po jeho vytvoření.

       ![Vytvořit e-mail s přiloženým souborem PDF](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.cs.png)

1. V Power Automate maker portálu pro tok event triggeru vyberte ikonu **Obnovit**, abyste zobrazili úspěšný běh toku pro odeslaný e-mail.

       ![Vyberte ikonu obnovit pro zobrazení běhu toku](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.cs.png)

1. Zpět v Copilot Studio v **Hiring Agent** vyberte záložku **Aktivita**.

       ![Vyberte záložku Aktivita](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.cs.png)

1. Záložka **Aktivita** se načte a zobrazí všechny aktivity **Hiring Agent**. Bude zde aktivita s názvem **Automated**, která má stav **Complete**. Tato aktivita představuje event trigger a tok agenta, který byl spuštěn.

       ![Aktivita dokončena](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.cs.png)

1. Vyberte aktivitu a v mapě aktivit vyberte event trigger. Na panelu na pravé straně si všimněte, jak vstupní parametry ve výzvě obsahují hodnoty parametrů `Resume Id`, `Resume Title` a `Resume Number` z řádku **Dataverse**, který byl vytvořen. To bylo z dynamických hodnot obsahu nakonfigurovaných dříve v krocích 18 - 27 **Lab 3.1 - Automatizace nahrávání životopisů do Dataverse přijatých e-mailem**.

       ![Event trigger](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.cs.png)

1. Vraťte se zpět do modelové aplikace **Hiring Hub** a v zobrazení systému **Resumes** vyberte **Obnovit**, abyste obnovili zobrazení. Nově vytvořený řádek pro životopis, který byl odeslán e-mailem, bude nyní uveden, protože byl vytvořen prostřednictvím event triggeru.

       ![Řádek životopisu vytvořen](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.cs.png)

1. Vraťte se zpět do Copilot Studio a vyberte tok agenta **Notify Teams Applicant Channel** v rámci **Application Intake Agent** v mapě aktivit. Na panelu na pravé straně si všimněte, jak vstupy obsahují hodnoty z řádku Dataverse. To bylo z výzvy odeslané poslední akcí (**Odesílá výzvu určenému copilotovi k zpracování**) v event triggeru, která obsahuje hodnoty parametrů z nově vytvořeného řádku Dataverse. Takto můžeme předávat hodnoty parametrů z event triggerů do toků agenta.

       ![Vyberte tok agenta](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.cs.png)

1. Nakonec se podívejme na adaptivní kartu zveřejněnou v kanálu **Microsoft Teams**. V kanálu uvidíme adaptivní kartu, která zobrazuje informace o nově vytvořeném řádku životopisu v Dataverse. Přejeďte kurzorem nad hypertextový odkaz na začátku adaptivní karty, všimněte si, že URL je URL zobrazení systému Resumes, které jsme dříve nakonfigurovali v JSON (kroky 15 - 19 **Lab 3.2 - Oznámení kanálu Teams pomocí adaptivní karty**) payloadu adaptivní karty.

       ![Adaptivní karta URL zobrazení tabulky životopisů](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.cs.png)

1. Vyberte hypertextový odkaz a budete přesměrováni na zobrazení systému Resumes v modelové aplikaci **Hiring Hub** ve vašem prohlížeči.

       ![Zobrazení systému životopisů v modelové aplikaci Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.cs.png)

1. Vraťte se zpět k adaptivní kartě zveřejněné v kanálu Microsoft Teams. Tentokrát přejeďte kurzorem nad **Zobrazit životopis**, což je akce `Action.OpenURL` adaptivní karty. Všimněte si, že URL je řádek životopisu, který jsme dříve nakonfigurovali v JSON (kroky 30 - 36 **Lab 3.2 - Oznámení kanálu Teams pomocí adaptivní karty**) payloadu adaptivní karty.

       ![Adaptivní karta URL řádku životopisu](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.cs.png)

1. Vyberte akci a budete přesměrováni na formulář řádku životopisu v modelové aplikaci **Hiring Hub** ve vašem prohlížeči.

       ![Řádek životopisu v modelové aplikaci Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.cs.png)

## ✅ Mise splněna

Gratulujeme! 👏🏻 Skvělá práce, Operative.

✅ Event trigger: vytvořili jste event trigger, který předává hodnoty parametrů Dataverse do toku agenta.  
✅ Vytvořili jste tok agenta: využívá hodnoty parametrů Dataverse k zveřejnění adaptivní karty v kanálu Microsoft Teams, aby upozornil HR tým na nábor.  
✅ Aktualizovali jste pokyny podřízeného agenta: aby spustil tok, jakmile event trigger dokončí.

To umožňuje **Hiring Agent** pracovat autonomně, kdykoli jsou životopisy přijaty jako přílohy e-mailů, a upozornit HR tým na nábor na manuální kontrolu.

Tím končí **Lab 03 - Automatizace e-mailů s žádostmi o zaměstnání**, vyberte níže uvedený odkaz pro přechod na další lekci.

⏭️ [Přejít na lekci **Pokyny pro tvorbu agenta**](../04-agent-instructions/README.md)

## 📚 Taktické zdroje

📖 [Udělejte svého agenta autonomním v Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Přidání event triggeru](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Použití toků agenta s vaším agentem](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Úvod do triggerů Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Použití toků Power Automate s agenty](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Prevence ztráty dat pro Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.