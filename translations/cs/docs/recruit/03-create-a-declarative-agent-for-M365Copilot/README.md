<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T17:09:36+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "cs"
}
-->
# 🚨 Mise 03: Nasazení deklarativního agenta pro Microsoft 365 Copilot

## 🕵️‍♂️ KRYCÍ JMÉNO: `OPERACE ROZŠÍŘENÍ COPILOT`

> **⏱️ Časový rámec operace:** `~60 minut`

🎥 **Podívejte se na průvodce**

[![Náhled videa o vytvoření deklarativního agenta](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.cs.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Podívejte se na průvodce na YouTube")

## 🎯 Mise

Vítejte na svém prvním terénním úkolu, Agent Makere. Byli jste vybráni k návrhu, vybavení a nasazení deklarativního agenta—specializovaného operativce přímo integrovaného do Microsoft 365 Copilot a Microsoft Teams.

Na rozdíl od tradičních agentů fungují deklarativní agenti s jasně definovaným posláním (instrukcemi), nástroji (promptami/konektory) a strategickým přístupem k interním informacím (zdroje znalostí jako SharePoint, Dataverse a další). Vaším úkolem je vytvořit tohoto agenta pomocí Microsoft Copilot Studio—centra bez nutnosti programování, kde ožívají schopnosti a účel vašeho agenta.

Pojďme na to.

## 🔎 Cíle

V této misi se naučíte:

1. Porozumět tomu, co jsou deklarativní agenti a jak rozšiřují Microsoft 365 Copilot o vlastní funkce
1. Porovnat Microsoft Copilot Studio a Copilot Studio agent builder při vytváření deklarativních agentů
1. Vytvořit deklarativního agenta pomocí přirozeného jazyka prostřednictvím konverzačního procesu tvorby
1. Přidat AI prompty jako nástroje pro zlepšení specializovaných znalostí a schopností řešení problémů vašeho agenta
1. Publikovat a otestovat svého deklarativního agenta v Microsoft 365 Copilot a Microsoft Teams

## 🕵🏻‍♀️ Co je deklarativní agent pro Microsoft 365 Copilot?

Deklarativní agenti jsou přizpůsobené verze Microsoft 365 Copilot. Microsoft 365 Copilot můžete přizpůsobit tak, aby splňoval specifické obchodní potřeby, tím, že mu poskytnete instrukce pro podporu konkrétního procesu, propojení s podnikovými znalostmi a využití nástrojů pro širší rozšiřitelnost. To umožňuje organizacím vytvářet personalizované zážitky s větší funkčností pro jejich uživatele.

## 🤔 Proč bych měl použít Microsoft Copilot Studio k vytvoření deklarativního agenta?

Jako tvůrce je možné, že jste již prozkoumali [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) v Microsoft 365 Copilot, a tak vás možná zajímá _proč vytvářet deklarativního agenta v Microsoft Copilot Studio?_

Microsoft Copilot Studio nabízí komplexní sadu nástrojů a funkcí pro deklarativní agenty, které přesahují omezení Copilot Studio agent builder. Podobně jako Copilot Studio agent builder, nepotřebujete znát programování nebo vývoj softwaru, abyste mohli tvořit v Microsoft Copilot Studio. Pojďme si podrobněji rozebrat rozdíly mezi Copilot Studio Agent Builder a Copilot Studio při vytváření deklarativních agentů.

### Porovnání funkcí

Následující tabulka zdůrazňuje rozdíly při vytváření deklarativního agenta v Copilot Studio agent builder a Copilot Studio.

| Funkce                   | Copilot Studio agent builder v Microsoft 365 Copilot                          | Rozšíření Microsoft 365 Copilot v Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Znalosti**       | Web, SharePoint, chaty v Microsoft Teams, e-maily v Outlooku, konektory Copilot     | Webové vyhledávání (přes Bing), SharePoint, Dataverse, Dynamics 365, konektory Copilot  |
| **Nástroje**       | Interpret kódu, generátor obrázků     | 1400+ konektorů Power Platform, vlastní konektory, prompty, použití počítače, REST API, Model Context Protocol   |
| **Úvodní prompty**         | Konfigurace promptů pro rychlý start uživatelů   | Konfigurace promptů pro rychlý start uživatelů  |
| **Kanál**           | Agent publikován pouze do Microsoft 365 Copilot     | Agent publikován do Microsoft 365 Copilot a Microsoft Teams      |
| **Sdílení oprávnění**         | Uživatelé jsou pouze diváci    | Uživatelé mohou být editory nebo diváky   |

Existuje více funkcí nabízených pro deklarativní agenty vytvořené v Microsoft Copilot Studio, o kterých se dozvíme dále.

!!! tip
    - Chcete-li se dozvědět více o Copilot Studio agent builder, navštivte [Copilot Developer Camp: Lab MAB1 - Vytvořte svého prvního agenta](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Pro rozšíření deklarativního agenta nad rámec Copilot Studio agent builder pro Microsoft 365 Copilot, navštivte [Copilot Developer Camp: Lab MAB1 - Vytvořte svého prvního agenta](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Rozšíření Microsoft 365 Copilot s deklarativními agenty vytvořenými v Copilot Studio

Pojďme rozšířit, co jsme se naučili z tabulky porovnání funkcí.

#### Přizpůsobení

- **Podrobné instrukce**: Můžete poskytnout podrobné instrukce a schopnosti, které přesně definují účel a chování agenta.
  - To zahrnuje vyvolání nástrojů jednoduše pomocí přirozeného jazyka.

- **Přístup k podnikovým znalostem**: Umožňuje přístup k podnikovým znalostem, které respektují oprávnění uživatelů.
  - Integrace SharePointu
  - Integrace Dataverse
  - Integrace Dynamics 365
  - Konektory Microsoft 365 Copilot povolené administrátorem vaší organizace

   ![Přizpůsobení](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.cs.png)

#### Pokročilé schopnosti

- **Integrace s externími službami**: Umožňuje vybrat z více než 1400 konektorů Power Platform, které se integrují s externími službami, poskytují složitější a výkonnější funkce.
  - Příklady zahrnují [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) a další
  - Alternativně můžete také využít servery Model Context Protocol a REST API přímo ve svém deklarativním agentovi

- **AI prompty**: Použijte prompt k analýze a transformaci textu, dokumentů, obrázků a dat pomocí přirozeného jazyka a AI logiky.
  - Vyberte chatovací model, zvolte Basic (výchozí), Standard, Premium
  - Možnost přinést vlastní model Azure AI Foundry pro zakotvení vašeho promptu

- **Více možností konfigurace nasazení**: Vyberte kanály a definujte oprávnění uživatelů.
  - Publikujte do Microsoft Teams, známého uživatelského rozhraní pro vaše uživatele pro rychlejší přijetí
  - Sdílení oprávnění pro editaci může být nastaveno, aby se zabránilo závislosti na jednom vlastníkovi agenta

   ![Pokročilé schopnosti](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.cs.png)

Shrnuto, deklarativní agenti v Microsoft Copilot Studio umožňují přizpůsobení Microsoft 365 Copilot tak, aby vyhovoval obchodním potřebám prostřednictvím integrace podnikových znalostních systémů, nástrojů pro připojení k externím službám nebo AI GPT modelům.

## 🧪 Laboratoř 03: Vytvoření deklarativního agenta v Microsoft Copilot Studio pro Microsoft 365 Copilot

Dále se naučíme, jak vytvořit deklarativního agenta pro případ použití "Business-to-Employee", který bude fungovat jako **agent IT helpdesku**.

- [3.1 Vytvoření deklarativního agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Vytvoření a přidání promptu pro vašeho deklarativního agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Aktualizace instrukcí a testování vašeho deklarativního agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Publikování vašeho deklarativního agenta do Microsoft 365 Copilot a Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Tato laboratoř popíše kroky k přidání promptu jako nástroje. Následující lekce se budou zabývat přidáním zdrojů znalostí a dalších dostupných nástrojů. Udržujeme to jednoduché pro vaše učení 😊

### 👩🏻‍💼 Porozumění Business-to-Employee (B2E)

Business-to-Employee (B2E) se týká interakcí a služeb, které podnik poskytuje přímo svým zaměstnancům. V kontextu agenta to znamená využití pokročilých schopností Copilot Studio k podpoře a zlepšení pracovního prostředí zaměstnanců v organizaci.

### ✨ Scénář použití

**Jako** zaměstnanec

**Chci** získat rychlou a přesnou pomoc od agenta IT helpdesku při problémech, jako jsou potíže se zařízením, řešení problémů s připojením k síti, nastavení tiskárny

**Abych mohl** být produktivní a řešit technické problémy bez zpoždění

Začněme!

### Předpoklady

- Tvůrci musí mít oprávnění k vytváření a přístup k prostředí Copilot Studio.

!!! note "Poznámka k licencování"
    Tato laboratoř popíše kroky k přidání promptu jako nástroje. Následující lekce se budou zabývat přidáním zdrojů znalostí a dalších dostupných nástrojů. Udržujeme to jednoduché pro vaše učení 😊
  
    K publikování vašeho deklarativního agenta vytvořeného v Copilot Studio do Microsoft 365 Copilot nepotřebujete uživatelskou licenci Microsoft 365 Copilot. Nicméně **uživatelé** _publikovaného deklarativního agenta_ v Microsoft 365 Copilot vyžadují uživatelskou licenci Microsoft 365 Copilot.

### 3.1 Vytvoření deklarativního agenta

!!! warning "Dotazy Copilot se mohou lišit mezi relacemi"

    Konverzační proces tvorby Copilot se může pokaždé lišit, kde poskytnuté otázky pro vedení mohou být mírně odlišné než dříve.

1. Přejděte na [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) a přihlaste se pomocí svých přihlašovacích údajů. Ujistěte se, že jste přepnuli na prostředí, které používáte pro tyto laboratoře.

1. Vyberte **Agenti** z nabídky a zvolte **Copilot pro Microsoft 365**.

       ![Copilot pro Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.cs.png)

1. Dále vytvoříme deklarativního agenta výběrem **+ Přidat** agenta.

       ![Přidat agenta](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.cs.png)

1. Poté se načte konverzační proces tvorby, kde můžeme přirozeným jazykem komunikovat s Copilotem, abychom popsali deklarativního agenta, kterého chceme vytvořit, a použít poskytnuté otázky pro vedení.

       Zadejme podrobný popis, který zahrnuje následující,  
       - úkol agenta  
       - jaké typy dotazů může řešit  
       - formát jeho odpovědí  
       - cíl agenta  
    
       ```text
       Jste vysoce kvalifikovaný a zkušený IT profesionál specializující se na širokou škálu počítačových systémů, sítí a kybernetické bezpečnosti. Dokážete diagnostikovat a řešit technické problémy, vysvětlit řešení jasným a srozumitelným způsobem pro uživatele všech technických úrovní a poskytnout rady ohledně osvědčených postupů. Měli byste být struční a informativní, používat krokové instrukce s odrážkami, kde je to vhodné. Vaším cílem je pomoci uživateli pochopit problém a efektivně ho vyřešit.
       ```
    
       ![Vytvořit prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.cs.png)

1. Po odeslání promptu se na pravé straně zobrazí aktualizace s detaily a instrukcemi agenta, jak byly definovány promptem. Dále budete požádáni o potvrzení názvu vašeho agenta a Copilot navrhne název.

       Zadejte `ano`, pokud chcete přijmout navržený název, nebo zadejte jiný název, například následující,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instrukce aktualizovány](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.cs.png)

    !!! warning "Připomínka: Dotazy Copilot se mohou lišit mezi relacemi"

        Konverzační proces tvorby Copilot se může pokaždé lišit, kde poskytnuté otázky pro vedení mohou být mírně odlišné než dříve.

1. Název agenta byl nyní aktualizován, jak je vidět na pravé straně. Nyní jsme požádáni o upřesnění instrukcí pro agenta. To, co Copilot navrhl, zní skvěle, takže ho požádáme, aby použil své vlastní návrhy. Zadejte následující,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Název aktualizován](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.cs.png)

1. Dále budeme dotázáni, zda chceme přidat nějaké veřejně dostupné webové stránky nebo znalosti. Odpovíme `Ne`, protože v této laboratoři přidáme pouze prompt pro našeho deklarativního agenta. Následující laboratoře v budoucích lekcích se budou zabývat zdroji znalostí.

      ![Žádné webové stránky nebo zdroje znalostí přidány](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.cs.png)

1. Poté uvidíme odpověď od Copilota, že jsme nyní dokončili konfiguraci našeho agenta pomocí konverzačního procesu tvorby Copilot. Nicméně ho ještě trochu upravíme tím, že uvedeme, že by měl být stručný a informativní s odrážkami, používat empatii v komunikaci a požádat o zpětnou vazbu po poskytnutí řešení.

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

      ![Aktualizovat instrukce agenta](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.cs.png)

1. Copilot potvrdí, že instrukce byly aktualizovány. Klikněte na **Vytvořit**, abyste vytvořili deklarativního agenta pro Microsoft 365 Copilot.

      ![Vytvořit agenta](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.cs.png)

    !!! warning "Připomínka: Dotazy Copilot se mohou lišit mezi relacemi"

        Konverzační proces tvorby Copilot se může pokaždé lišit, kde poskytnuté otázky pro vedení mohou být mírně odlišné než dříve.

1. Jakmile byl agent vytvořen, uvidíte detaily agenta, které obsahují popis a instrukce definované během konverzačního procesu tvorby Copilot.
![Podrobnosti o agentovi](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.cs.png)

Posuňte se dolů v panelu a uvidíte možnosti přidání znalostí, povolení webového vyhledávání (přes Bing), úvodní výzvy a podrobnosti o publikování deklarativního agenta pro Microsoft 365 Copilot. Úvodní výzvy se také zobrazí v testovacím panelu na pravé straně. Uživatelé mohou vybrat tyto úvodní výzvy, aby začali komunikovat s agentem.

![Navrhované výzvy](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.cs.png)

1. V sekci Podrobnosti agenta máte také možnost změnit ikonu agenta. Vyberte **Upravit**.

![Upravit podrobnosti](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.cs.png)

Zde můžete změnit ikonu a barvu pozadí. Vyberte **Uložit** a poté znovu **Uložit**, abyste aktualizovali podrobnosti agenta.

![Změnit ikonu](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.cs.png)

1. Proveďme rychlý test agenta, kterého jsme vytvořili. Vyberte jednu z **Úvodních výzev** v testovacím panelu na pravé straně.

![Test úvodní výzvy](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.cs.png)

1. Náš agent poté odpoví. Všimněte si, jak dodržel pokyny tím, že poskytl informace ve formě odrážek, které jsou snadno stravitelné, a použil empatii ve své odpovědi.

Pokud se posunete na konec zprávy, všimněte si, že také požádal o zpětnou vazbu po poskytnutí řešení, jak bylo požadováno.

![Odpověď z testování](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.cs.png)

Během několika minut jste přidali deklarativního agenta pro Microsoft 365 Copilot do Copilot Studio 🙌🏻

Dále se naučíme, jak přidat nástroj k našemu agentovi, vytvoříme výzvu.

### 3.2 Vytvoření a přidání výzvy pro deklarativního agenta

1. Posuňte se dolů do sekce **Nástroje** a vyberte **+ Přidat nástroj**.

![Přidat nástroj](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.cs.png)

1. Zobrazí se modální okno Nástroje a seznam konektorů Power Platform. Chcete-li přidat výzvu, vyberte **+ Nový nástroj**.

![Nový nástroj](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.cs.png)

1. Zobrazí se seznam dalších nástrojů - Výzva, Vlastní konektor, REST API a Model Context Protocol. Pokud vaše organizace splňuje [požadavky na používání počítače](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), objeví se také v seznamu. Vyberte **Výzva**.

![Vybrat výzvu](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.cs.png)

1. Zadejte název výzvy. Pojmenujme naši výzvu `IT Expert`.

![Zadat název](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.cs.png)

1. Vyberte **ikonu šipky** vedle **Modelu**, abyste viděli různé chatovací modely, ze kterých si můžete vybrat. Ve výchozím nastavení je vybrán model **Basic GPT-4.1 mini** a máte také možnost použít vlastní modely prostřednictvím Azure AI Foundry Models. Zůstaneme u výchozího modelu.

![Změnit model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.cs.png)

1. Dále poskytneme naší výzvě pokyny. Můžete si vybrat ze 3 metod:

   - Použít Copilot k vygenerování pokynů na základě vašeho popisu, co má výzva dělat.
   - Použít přednastavenou šablonu z knihovny výzev k vytvoření výzvy.
   - Ručně zadat vlastní pokyny.

1. Nejprve zkusme použít Copilot k vygenerování pokynů na základě zadaného popisu. Zadejte následující do pole Copilot a odešlete.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Začít s Copilotem](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.cs.png)

1. Copilot poté začne generovat výzvu.

![Copilot vytváří návrhy výzev](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.cs.png)

1. Návrh pokynů vygenerovaný Copilotem se poté zobrazí.

![Návrh pokynů vygenerovaný Copilotem](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.cs.png)

1. Posuňte se na konec pokynů a uvidíte uživatelský vstupní parametr, který již definoval Copilot. Poté máte možnost:
   - Ponechat vygenerované návrhy pokynů.
   - Obnovit návrhy pokynů pomocí Copilota.
   - Vymazat návrhy pokynů.

   Vymažte návrhy pokynů výběrem ikony **koše** a poté vyzkoušíme knihovnu výzev.

   ![Pokyny k výzvám](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.cs.png)

1. Vyberte odkaz **šablona výzvy**.

![Vybrat šablonu výzvy](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.cs.png)

1. Zobrazí se seznam šablon výzev, ze kterých si můžete vybrat. Tyto šablony pocházejí z [knihovny výzev Power Platform](https://aka.ms/power-prompts).

![Knihovna výzev](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.cs.png)

1. Vyhledejte výzvu `IT expert` a vyberte ji.

![Vybrat výzvu IT expert](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.cs.png)

1. Výzva bude poté přidána jako pokyny s vstupním parametrem definovaným šablonou výzvy. Podobně jako přístup, který jsme použili při poskytování pokynů pro našeho agenta během konverzačního procesu vytváření s Copilotem, tato šablona výzvy popisuje:
   - úkol,
   - jaké typy dotazů může zpracovat,
   - formát odpovědi a cíl výzvy.

![Pokyny k výzvě](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.cs.png)

1. Vymažte pokyny a poté zkusíme ručně zadat pokyny. Použijeme [výzvu IT Expert](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) z [knihovny výzev Power Platform](https://aka.ms/power-prompts). Zkopírujte a vložte výzvu.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Pokyny k výzvě](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.cs.png)

1. Dále můžeme definovat uživatelské vstupní parametry naší výzvy. Tyto parametry mohou být text a obrázky, a vzorová data pro testování. Existuje také možnost propojit výzvu se znalostmi z tabulek Dataverse. Pro tento úkol máme pouze jeden uživatelský vstup, který je třeba definovat, což je vstup problému. Tento vstup je aktuálně zástupcem v naší výzvě jako `[Problem]`. Nyní nakonfigurujeme tento vstup buď zadáním znaku `/` nebo výběrem **+Přidat obsah** a poté vybereme **Text**.

![Textový vstup](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.cs.png)

1. Nyní můžeme zadat název našeho vstupního parametru a vzorová data.

Zadejte následující jako název:

    ```text
    problem input
    ```

Zadejte následující jako vzorová data:

    ```text
    My laptop gets an error with a blue screen
    ```

Poté vyberte **Zavřít**.

![Konfigurovat vstup problému](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.cs.png)

1. Vstupní parametr problému bude nyní přidán do pokynů s nakonfigurovanými vzorovými daty. Nyní můžeme otestovat naši výzvu!

![Vstup problému přidán](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.cs.png)

1. Vyberte **Test**, abyste otestovali výzvu.

![Testovat pokyny](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.cs.png)

1. Odpověď se poté zobrazí. Všimněte si, jak odpověď poskytuje nadpisy s odrážkami podle pokynů. Posuňte se dolů a zkontrolujte zbytek odpovědi modelu.

![Odpověď modelu](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.cs.png)

1. Než uložíme naši výzvu, podívejme se na nastavení, která lze pro tuto výzvu konfigurovat. Vyberte **ikonu tři tečky (...).**

![Nastavení výzvy](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.cs.png)

1. Zde uvidíme tři nastavení, která lze konfigurovat:

   - **Teplota**: Nižší teploty vedou k předvídatelným výsledkům, zatímco vyšší teploty umožňují rozmanitější nebo kreativnější odpovědi.
   - **Získávání záznamů**: Určete počet záznamů získaných z vašich zdrojů znalostí.
   - **Zahrnout odkazy do odpovědi**: Pokud je vybráno, odpověď zahrnuje odkazy na získané záznamy.

   Vyberte **ikonu X**, abyste opustili Nastavení.

![Konfigurovat nastavení](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.cs.png)

1. Vyberte **Uložit**, abyste uložili výzvu.

![Uložit výzvu](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.cs.png)

1. Dále vyberte **Přidat k agentovi**, abyste přidali výzvu k našemu deklarativnímu agentovi.

![Pokyny k výzvě](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.cs.png)

1. Výzva se nyní objeví pod Nástroji 🙌🏻

![Výzva přidána](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.cs.png)

Dále aktualizujeme naše pokyny, abychom vyvolali výzvu a otestovali našeho deklarativního agenta.

### 3.3 Aktualizace pokynů a testování vašeho deklarativního agenta

1. Posuňte se nahoru do sekce **Podrobnosti** a vyberte **Upravit**. Tím se umožní úprava polí.

![Vybrat Upravit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.cs.png)

1. Nyní můžeme aktualizovat naše pokyny, abychom vyvolali naši výzvu odkazem na název výzvy. Vymažte pokyny, poté zkopírujte a vložte následující.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Všimněte si, jak poslední věta instruuje agenta, aby použil otázku položenou uživatelem jako hodnotu pro vstupní parametr problému. Agent použije otázku jako vstup problému pro výzvu. Dále vyberte **Uložit**.

![Aktualizovat pokyny pro vyvolání výzvy](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.cs.png)

1. Nyní jsme připraveni otestovat naše aktualizované pokyny našeho deklarativního agenta. Vyberte **ikonu obnovení** v testovacím panelu.

![Vybrat ikonu obnovení](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.cs.png)

1. Dále zadejte následující výzvu níže a odešlete.

```text
Můžete mi pomoci, můj notebook má modrou obrazovku
```

![Proveďte test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.cs.png)

1. Agent vyvolá výzvu a odpoví.

![Pokyny k výzvě](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.cs.png)

Nyní publikujeme našeho deklarativního agenta 😃

### 3.4 Publikování vašeho deklarativního agenta do Microsoft 365 Copilot a Microsoft Teams

1. Vyberte **Publikovat**.

![Publikovat agenta](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.cs.png)

1. Zobrazí se modální okno, které zobrazuje Kanály a podrobnosti o publikování, které lze aktualizovat.

   - Kanály: Agent bude publikován do Microsoft 365 Copilot a Microsoft Teams.
   - Informace o aplikaci agenta: Toto je to, co se zobrazí, když uživatel přidá agenta do Microsoft 365 Copilot nebo do Microsoft Teams. Jedná se o pole, která lze podle potřeby aktualizovat.

![Podrobnosti o aplikaci agenta](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.cs.png)

1. Například můžete aktualizovat **Krátký popis**, **Dlouhý popis**, **Jméno vývojáře** svým jménem.

!!! tip
Pokud nevidíte všechna pole zobrazená ve vašem prohlížeči, zkuste zmenšit zobrazení, např. na 75 %.

Vyberte **Publikovat**. Copilot Studio poté začne publikovat agenta.

![Publikování agenta](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.cs.png)

1. Po dokončení publikování uvidíme [Možnosti dostupnosti](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) agenta.

| Možnost dostupnosti | Popis |
| -------------------- | ------ |
| Sdílet odkaz | Zkopírujte odkaz a distribuujte ho sdíleným uživatelům, aby mohli otevřít agenta v Microsoft 365 Copilot |
| Zobrazit mým kolegům a sdíleným uživatelům | Umožňuje vám udělit přístup ostatním, aby se mohli podílet na tvorbě agenta, nebo bezpečnostním skupinám, aby jim byl udělen přístup k používání agenta v Microsoft 365 Chat nebo Microsoft Teams. |
| Zobrazit všem v mé organizaci | Odeslat tenantovému administrátorovi, aby přidal do organizačního katalogu pro všechny uživatele tenantu, aby mohli přidat agenta. Agent se zobrazí pod Vytvořeno vaší organizací v Microsoft 365 Copilot a v Microsoft Teams. |
| Stáhnout jako .zip | Stáhnout jako zip soubor pro nahrání jako vlastní aplikaci v Microsoft Teams. |

![Možnosti dostupnosti](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.cs.png)

1. Podívejme se na sdílení agenta. Vyberte **Zobrazit mým kolegům a sdíleným uživatelům**. Zobrazí se panel, kde můžete vyhledat uživatele, se kterými chcete agenta sdílet, buď zadáním jejich jména, e-mailu nebo bezpečnostní skupiny. Tento seznam můžete kdykoli zkontrolovat a upravit, kdo má k agentovi přístup.

Existují také dvě zaškrtávací políčka:
- _Poslat e-mailové pozvání novým uživatelům_ - noví uživatelé obdrží e-mailové pozvání.
- _Viditelné v sekci Vytvořeno pomocí Power Platform_ - agent se stane dostupným v sekci Vytvořeno pomocí Power Platform v obchodě aplikací Teams.
Pro více podrobností se podívejte na [Připojení a konfigurace agenta pro Teams a Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Vyberte **Zrušit** nebo ikonu **X**, abyste opustili panel.

![Sdílet agenta](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.cs.png)

1. Vyberte **Kopírovat** a vložte odkaz do nového okna prohlížeče.

![Kopírovat odkaz](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.cs.png)

1. Microsoft 365 Copilot se načte a objeví se modální okno s podrobnostmi o aplikaci agenta. Všimněte si, jak se zobrazují jméno vývojáře, krátký popis a dlouhý popis. Tyto informace pocházejí z publikovaných detailů aktualizovaných v předchozím kroku.

Vyberte **Přidat**.

![Možnosti dostupnosti](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.cs.png)

1. Náš deklarativní agent se načte jako další. Můžeme vidět úvodní návrhy, ze kterých si uživatelé mohou rychle vybrat a získat okamžitou pomoc.

Vyberte jeden z úvodních návrhů. V mém případě vyberu návrh **Pomoc s instalací softwaru**, který automaticky předvyplní pole zprávy Copilot. Odešlete otázku Copilotovi.

![Vybrat úvodní návrh](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.cs.png)

1. Vyberte **Vždy povolit**, abyste dali svému deklarativnímu agentovi oprávnění vyvolat návrh IT Expert.

![Vybrat vždy povolit](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.cs.png)

1. Agent poté vyvolá náš návrh **IT Expert** a uvidíme odpověď modelu vrácenou jako zprávu v našem deklarativním agentovi.

![Odpověď](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.cs.png)

Posuňte dolů, abyste viděli všechny podrobnosti odpovědi.

![Odpověď](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.cs.png)

1. Ale _jak víme_, že deklarativní agent vyvolal návrh? 👀 Tady je tip!

!!! tip
    Můžete testovat a ladit agenty v Microsoft 365 Copilot tím, že povolíte [režim vývojáře](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Zadejte následující do pole zprávy Copilot a odešlete.

    ```text
    -developer on
    ```

Objeví se potvrzovací zpráva, která vás informuje, že režim vývojáře je nyní povolen.

![Režim vývojáře povolen](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.cs.png)

1. Odešlete následující otázku, abyste vyvolali návrh.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Zadat otázku](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.cs.png)

1. Znovu uvidíme odpověď modelu z našeho návrhu **IT Expert**, vrácenou jako zprávu. Posuňte se dolů na konec zprávy a zobrazí se karta s informacemi o ladění.

Rozbalte **Agent Debug Info** kliknutím na něj.

![Informace o ladění agenta](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.cs.png)

1. Zde najdete informace o metadatech agenta, ke kterým došlo během běhu.

![Rozbalené informace o ladění agenta](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.cs.png)

V našem případě se zaměříme na sekci _Akce_.

- **Shodné akce** zvýrazňují aktuální stav funkcí nalezených během vyhledávání aplikace.
- **Vybrané akce** zvýrazňují aktuální stav funkcí vybraných k provedení na základě rozhodovacího procesu aplikace.

![Rozbalené informace o ladění agenta](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.cs.png)

Zde vidíme, že orchestrátor agenta se rozhodl vyvolat návrh IT Expert podle pokynů našeho deklarativního agenta. To je dále uvedeno v sekci _Provedené akce_, která nám také říká, že návrh byl úspěšně vyvolán.

![Přezkoumat informace o ladění agenta](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.cs.png)

1. Chcete-li vypnout režim vývojáře, zadejte následující do pole zprávy Copilot a odešlete.

    ```text
    -developer off
    ```

Objeví se potvrzovací zpráva, která vás informuje, že režim vývojáře je nyní deaktivován. Skvělé, teď víte, jak ověřit, zda váš deklarativní agent v Microsoft 365 Copilot vyvolal váš návrh 🌞

![Režim vývojáře deaktivován](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.cs.png)

1. Nyní otestujeme našeho agenta v Microsoft Teams. Přejděte na **Aplikace** pomocí nabídky na levé straně a vyberte **Teams** v sekci _Aplikace_.

![Vybrat Teams v Aplikacích](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.cs.png)

1. Microsoft Teams se načte v novém okně prohlížeče a poté se zobrazí podmínky používání Microsoft 365 Copilot, vyberte **Souhlasím**.

![Vybrat Souhlasím](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.cs.png)

1. Microsoft 365 Copilot se poté načte jako výchozí, s panelem na pravé straně, který uvádí všechny dostupné agenty, včetně deklarativního agenta **Contoso Tech Support Pro**.

![Microsoft 365 Copilot v Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.cs.png)

1. Vyberte **ikonu tří teček (...)** v nabídce na levé straně. Buď vyhledejte **Contoso Tech Support Pro** v poli vyhledávání, nebo pokud agenta vidíte, vyberte ho.

Můžete také kliknout pravým tlačítkem myši a **Připnout** agenta pro rychlý přístup v nabídce na levé straně v Microsoft Teams.

![Vybrat a připnout agenta](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.cs.png)

1. Poté se náš agent načte. 1. Nyní otestujeme našeho agenta. Zadejte následující návrh a odešlete.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Připnout agenta](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.cs.png)

1. Zobrazí se modelová odpověď z našeho návrhu.

![Odpověď v Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.cs.png)

Během několika minut jste se naučili, jak publikovat svého deklarativního agenta a testovat ho v Microsoft 365 Copilot a Microsoft Teams 😊

## ✅ Mise splněna

Gratulujeme! 👏🏻 Vytvořili jste deklarativního agenta v Copilot Studio, kde jste přidali návrh, instruovali agenta, aby použil návrh, a naučili se, jak testovat a publikovat svého agenta do Microsoft 365 Copilot a Microsoft Teams.

Váš agent je nyní připraven k akci—připraven pomáhat, řešit problémy a sloužit interním uživatelům na vyžádání.

Tím končí **Lab 03 - Vytvoření deklarativního agenta v Microsoft Copilot Studio pro Microsoft 365 Copilot**, vyberte odkaz níže, abyste přešli na další lekci.

⏭️ [Přejít na lekci **Vytvoření nového řešení**](../04-creating-a-solution/README.md)

Do příště, zůstaňte ve střehu. Budoucnost podnikové práce prochází agenty—a nyní víte, jak jednoho vytvořit.

## 📚 Taktické zdroje

🔗 [Vytvoření deklarativního agenta v Microsoft Copilot Studio pro Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Přidání návrhů](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Sdílení agentů s ostatními uživateli](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Vytvoření návrhů pro vašeho agenta](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytika" />

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.