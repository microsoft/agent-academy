<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T17:10:38+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "sk"
}
-->
# 🚨 Misia 03: Nasadenie deklaratívneho agenta pre Microsoft 365 Copilot

## 🕵️‍♂️ KRYCÍ NÁZOV: `OPERÁCIA ROZŠÍRENIE COPILOT`

> **⏱️ Časový rámec operácie:** `~60 minút`

🎥 **Pozrite si prehľad**

[![Vytvorte deklaratívneho agenta - náhľad videa](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.sk.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Pozrite si prehľad na YouTube")

## 🎯 Misia

Vitajte na vašej prvej terénnej úlohe, Agent Maker. Boli ste vybraní na navrhnutie, vybavenie a nasadenie deklaratívneho agenta—špecializovaného operatívca priamo integrovaného do Microsoft 365 Copilot a Microsoft Teams.

Na rozdiel od tradičných agentov, deklaratívni agenti fungujú na základe definovanej misie (inštrukcie), nástrojov (promptov/konektorov) a strategického prístupu k interným informáciám (zdroje znalostí ako SharePoint, Dataverse a ďalšie). Vašou úlohou je vytvoriť tohto agenta pomocou Microsoft Copilot Studio—centrum bez kódu, kde sa zručnosti a účel vášho agenta stávajú realitou.

Poďme na to.

## 🔎 Ciele

V tejto misii sa naučíte:

1. Pochopiť, čo sú deklaratívni agenti a ako rozširujú Microsoft 365 Copilot o vlastné schopnosti
1. Porovnať Microsoft Copilot Studio vs. Copilot Studio agent builder pri vytváraní deklaratívnych agentov
1. Vytvoriť deklaratívneho agenta pomocou prirodzeného jazyka prostredníctvom konverzačného procesu tvorby
1. Pridať AI prompty ako nástroje na zlepšenie špecializovaných znalostí a schopností riešiť problémy vášho agenta
1. Publikovať a testovať vášho deklaratívneho agenta v Microsoft 365 Copilot a Microsoft Teams

## 🕵🏻‍♀️ Čo je deklaratívny agent pre Microsoft 365 Copilot?

Deklaratívni agenti sú prispôsobené verzie Microsoft 365 Copilot. Môžete prispôsobiť Microsoft 365 Copilot tak, aby vyhovoval konkrétnym obchodným potrebám, poskytnutím inštrukcií na podporu konkrétneho procesu, zakotvením v podnikových znalostiach a využitím nástrojov na širšiu rozšíriteľnosť. To umožňuje organizáciám vytvárať personalizované skúsenosti s väčšou funkčnosťou pre ich používateľov.

## 🤔 Prečo by som mal použiť Microsoft Copilot Studio na vytvorenie deklaratívneho agenta?

Ako tvorca je možné, že ste už preskúmali [Copilot Studio agent builder](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) v Microsoft 365 Copilot, a tak sa pravdepodobne pýtate _prečo vytvárať deklaratívneho agenta v Microsoft Copilot Studio?_

Microsoft Copilot Studio ponúka komplexnú sadu nástrojov a funkcií pre deklaratívnych agentov, ktoré presahujú obmedzenia Copilot Studio agent builder. Podobne ako Copilot Studio agent builder, na prácu v Microsoft Copilot Studio nepotrebujete vedieť programovanie alebo vývoj softvéru. Poďme si to rozobrať podrobnejšie, aby sme pochopili rozdiely medzi Copilot Studio Agent Builder a Copilot Studio pri vytváraní deklaratívnych agentov.

### Porovnanie funkcií

Nasledujúca tabuľka zdôrazňuje rozdiely pri vytváraní deklaratívneho agenta v Copilot Studio agent builder a Copilot Studio.

| Funkcia                   | Copilot Studio agent builder v Microsoft 365 Copilot                          | Rozšírenie Microsoft 365 Copilot v Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Znalosti**       | Web, SharePoint, chaty Microsoft Teams, e-maily Outlook, konektory Copilot     | Webové vyhľadávanie (cez Bing), SharePoint, Dataverse, Dynamics 365, konektory Copilot  |
| **Nástroje**       | Interpret kódu, generátor obrázkov     | 1400+ konektorov Power Platform, vlastné konektory, prompt, počítačové použitie, REST API, Model Context Protocol   |
| **Úvodné prompty**         | Konfigurácia promptov pre rýchly začiatok používateľov   | Konfigurácia promptov pre rýchly začiatok používateľov  |
| **Kanál**           | Agent publikovaný iba v Microsoft 365 Copilot     | Agent publikovaný v Microsoft 365 Copilot a Microsoft Teams      |
| **Zdieľacie povolenia**         | Používatelia sú iba diváci    | Používatelia môžu byť editori alebo diváci   |

Existuje viac schopností ponúkaných pre deklaratívnych agentov vytvorených v Microsoft Copilot Studio, o ktorých sa dozvieme ďalej.

!!! tip
    - Ak sa chcete dozvedieť viac o Copilot Studio agent builder, navštívte [Copilot Developer Camp: Lab MAB1 - Vytvorte svojho prvého agenta](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Pre rozšírenie deklaratívneho agenta nad rámec Copilot Studio agent builder pre Microsoft 365 Copilot, navštívte [Copilot Developer Camp: Lab MAB1 - Vytvorte svojho prvého agenta](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Rozšírenie Microsoft 365 Copilot s deklaratívnymi agentmi vytvorenými v Copilot Studio

Rozšírme, čo sme sa naučili z tabuľky porovnania funkcií.

#### Prispôsobenie

- **Podrobné inštrukcie**: Môžete poskytnúť podrobné inštrukcie a schopnosti na presné definovanie účelu a správania agenta.
  - To zahŕňa použitie nástrojov jednoducho pomocou prirodzeného jazyka.

- **Prístup k podnikovým znalostiam**: Umožňuje prístup k podnikovým znalostiam, ktoré rešpektujú povolenia používateľov.
  - Integrácia SharePoint
  - Integrácia Dataverse
  - Integrácia Dynamics 365
  - Konektory Microsoft 365 Copilot povolené administrátorom vašej organizácie

   ![Prispôsobenie](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.sk.png)

#### Pokročilé schopnosti

- **Integrácia s externými službami**: Umožňuje vybrať z 1400+ konektorov Power Platform, ktoré integrujú externé služby, poskytujúc komplexnejšie a silnejšie funkcie.
  - Príklady zahŕňajú [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) a ďalšie
  - Alternatívne môžete tiež využiť servery Model Context Protocol a REST API priamo vo vašom deklaratívnom agentovi

- **AI prompty**: Použite prompt na analýzu a transformáciu textu, dokumentov, obrázkov a dát pomocou prirodzeného jazyka a AI logiky.
  - Vyberte chatovací model, zvoľte z Basic (Predvolené), Standard, Premium
  - Možnosť priniesť vlastný model Azure AI Foundry na zakotvenie vášho promptu

- **Viac možností konfigurácie nasadenia**: Vyberte kanály a definujte povolenia používateľov.
  - Publikujte do Microsoft Teams, známeho používateľského rozhrania pre vašich používateľov na rýchlejšie prijatie
  - Povolenia na úpravy môžu byť zdieľané, aby sa zabránilo závislosti na jednom vlastníkovi agenta

   ![Pokročilé schopnosti](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.sk.png)

Stručne povedané, deklaratívni agenti v Microsoft Copilot Studio umožňujú prispôsobenie Microsoft 365 Copilot tak, aby vyhovoval obchodným potrebám prostredníctvom integrácie podnikových znalostných systémov, nástrojov na pripojenie k externým službám alebo AI GPT modelom.

## 🧪 Laboratórium 03: Vytvorte deklaratívneho agenta v Microsoft Copilot Studio pre Microsoft 365 Copilot

Ďalej sa naučíme, ako vytvoriť deklaratívneho agenta pre prípad použitia "Business-to-Employee", ktorý bude fungovať ako **agent IT helpdesku**.

- [3.1 Vytvorte deklaratívneho agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Vytvorte a pridajte prompt pre vášho deklaratívneho agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Aktualizujte inštrukcie a otestujte vášho deklaratívneho agenta](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Publikujte vášho deklaratívneho agenta do Microsoft 365 Copilot a Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Toto laboratórium načrtne kroky na pridanie Promptu ako nástroja. Nasledujúce lekcie sa budú zaoberať pridávaním zdrojov znalostí a ďalších dostupných nástrojov. Udržiavame to jednoduché pre vaše učenie 😊

### 👩🏻‍💼 Pochopenie Business-to-Employee (B2E)

Business-to-Employee (B2E) sa vzťahuje na interakcie a služby, ktoré podnik poskytuje priamo svojim zamestnancom. V kontexte agenta to znamená využitie pokročilých schopností Copilot Studio na podporu a zlepšenie pracovných skúseností zamestnancov v rámci organizácie.

### ✨ Scenár použitia

**Ako** zamestnanec

**Chcem** rýchlu a presnú pomoc od agenta IT helpdesku pri problémoch, ako sú problémy so zariadením, riešenie problémov so sieťou, nastavenie tlačiarne

**Aby som mohol** zostať produktívny a vyriešiť technické problémy bez zbytočných oneskorení

Začnime!

### Predpoklady

- Tvorcovia musia mať povolenia na vytváranie a prístup k prostrediu Copilot Studio.

!!! note "Poznámka k licencovaniu"
    Toto laboratórium načrtne kroky na pridanie Promptu ako nástroja. Nasledujúce lekcie sa budú zaoberať pridávaním zdrojov znalostí a ďalších dostupných nástrojov. Udržiavame to jednoduché pre vaše učenie 😊
  
    Na publikovanie vášho deklaratívneho agenta vytvoreného v Copilot Studio do Microsoft 365 Copilot nepotrebujete licenciu používateľa Microsoft 365 Copilot. Avšak **používatelia** _publikovaného deklaratívneho agenta_ v Microsoft 365 Copilot potrebujú licenciu používateľa Microsoft 365 Copilot.

### 3.1 Vytvorte deklaratívneho agenta

!!! warning "Otázky Copilot sa môžu líšiť medzi reláciami"

    Konverzačný proces tvorby Copilot sa môže zakaždým líšiť, pričom poskytnuté otázky na usmernenie môžu byť mierne odlišné od predchádzajúcich.

1. Prejdite na [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) a prihláste sa pomocou svojich prihlasovacích údajov. Uistite sa, že ste prešli na prostredie, ktoré používate pre tieto laboratóriá.

1. Vyberte **Agents** z ponuky a zvoľte **Copilot for Microsoft 365**.

       ![Copilot for Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.sk.png)

1. Ďalej vytvoríme deklaratívneho agenta výberom **+ Add** agent.

       ![Add Agent](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.sk.png)

1. Potom sa načíta konverzačný proces tvorby, kde môžeme chatovať v prirodzenom jazyku s Copilotom, aby sme opísali deklaratívneho agenta, ktorého chceme vytvoriť, a použiť poskytnuté otázky na usmernenie.

       Zadajme podrobný popis, ktorý obsahuje nasledujúce,  
       - úlohu agenta  
       - aké typy otázok môže riešiť  
       - formát jeho odpovede  
       - cieľ agenta  
    
       ```text
       Ste vysoko kvalifikovaný a skúsený IT profesionál špecializujúci sa na širokú škálu počítačových systémov, sieťovania a kybernetickej bezpečnosti. Dokážete diagnostikovať a riešiť technické problémy, vysvetliť riešenia jasným a zrozumiteľným spôsobom pre používateľov všetkých technických úrovní a poskytnúť usmernenie o najlepších postupoch. Mali by ste byť stručný a informatívny, používať krok za krokom pokyny s odrážkami, keď je to vhodné. Vaším cieľom je pomôcť používateľovi pochopiť problém a efektívne ho vyriešiť.
       ```
    
       ![Vytvorte Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.sk.png)

1. Po odoslaní promptu sa na pravej strane zobrazí viditeľná aktualizácia s podrobnosťami a inštrukciami agenta, ako sú definované v promptu. Ďalej budete požiadaní o potvrdenie názvu vášho agenta a Copilot navrhne názov.

       Buď zadajte `yes`, aby ste prijali navrhovaný názov, alebo zadajte iný názov, napríklad nasledujúci,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Inštrukcie aktualizované](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.sk.png)

    !!! warning "Pripomienka: Otázky Copilot sa môžu líšiť medzi reláciami"

        Konverzačný proces tvorby Copilot sa môže zakaždým líšiť, pričom poskytnuté otázky na usmernenie môžu byť mierne odlišné od predchádzajúcich.

1. Názov agenta bol teraz aktualizovaný, ako je vidieť na pravej strane. Teraz sme požiadaní o spresnenie inštrukcií pre agenta. To, čo Copilot navrhol, znie skvele, takže ho požiadame, aby použil svoje vlastné návrhy. Zadajte nasledujúce,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Názov aktualizovaný](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.sk.png)

1. Ďalej sa nás opýtajú, či chceme pridať nejaké verejne dostupné webové stránky alebo znalosti. Odpovieme `No`, pretože v tomto laboratóriu pridáme iba prompt pre nášho deklaratívneho agenta. Následné laboratóriá v budúcich lekciách sa budú zaoberať zdrojmi znalostí.

      ![Žiadne webové stránky alebo zdroje znalostí pridané](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.sk.png)

1. Potom uvidíme odpoveď od Copilot, že sme teraz dokončili konfiguráciu nášho agenta pomocou konverzačného procesu tvorby Copilot. Avšak poďme ho ešte viac spresniť tým, že načrtneme, že by mal byť stručný a informatívny s odrážkami, používať empatiu v komunikácii a pýtať sa na spätnú väzbu po poskytnutí riešení.

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

      ![Aktualizujte inštrukcie agenta](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.sk.png)

1. Copilot potvrdzuje, že inštrukcie boli aktualizované. Kliknite na **Create**, aby ste vytvorili deklaratívneho agenta pre Microsoft 365 Copilot.

      ![Vytvorte agenta](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.sk.png)

    !!! warning "Pripomienka: Otázky Copilot sa môžu líšiť medzi rel
![Podrobnosti o agentovi](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.sk.png)

Posuňte sa nadol v paneli a uvidíte možnosti pridania znalostí, povolenia vyhľadávania na webe (cez Bing), úvodné výzvy a podrobnosti o publikovaní deklaratívneho agenta pre Microsoft 365 Copilot. Úvodné výzvy sa zobrazia aj v testovacom paneli na pravej strane. Používatelia si môžu vybrať tieto úvodné výzvy na začatie interakcie s agentom.

![Navrhované výzvy](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.sk.png)

1. V sekcii Podrobnosti agenta máte možnosť zmeniť aj ikonu agenta. Vyberte **Edit**.

![Upraviť podrobnosti](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.sk.png)

Tu môžete zmeniť ikonu a farbu pozadia. Vyberte **Save** a potom znova **Save**, aby ste aktualizovali podrobnosti agenta.

![Zmeniť ikonu](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.sk.png)

1. Urobme rýchly test agenta, ktorého sme vytvorili. Vyberte jednu z **Úvodných výziev** v testovacom paneli na pravej strane.

![Test úvodnej výzvy](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.sk.png)

1. Náš agent potom odpovie. Všimnite si, ako dodržal pokyny tým, že poskytol odpoveď vo forme bodov, ktoré sú ľahko zrozumiteľné, a použil empatiu vo svojej odpovedi.

Ak sa posuniete na spodok správy, všimnite si, že po poskytnutí riešenia požiadal o spätnú väzbu, ako bolo inštruované.

![Odpoveď z testovania](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.sk.png)

Za pár minút ste pridali deklaratívneho agenta pre Microsoft 365 Copilot v Copilot Studio 🙌🏻

Ďalej sa naučíme, ako pridať nástroj k nášmu agentovi, vytvoríme výzvu.

### 3.2 Vytvorenie a pridanie výzvy pre vášho deklaratívneho agenta

1. Posuňte sa nadol do sekcie **Tools** a vyberte **+ Add tool**

![Pridať nástroj](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.sk.png)

1. Zobrazí sa modálne okno Nástroje a zoznam konektorov Power Platform. Ak chcete pridať výzvu, vyberte **+ New tool**.

![Nový nástroj](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.sk.png)

1. Zobrazí sa zoznam ďalších nástrojov - Výzva, Vlastný konektor, REST API a Model Context Protocol. Ak vaša organizácia spĺňa [požiadavky na používanie počítača](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), zobrazí sa aj v zozname. Vyberte **Prompt**.

![Vybrať výzvu](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.sk.png)

1. Zadajte názov výzvy. Nazvime našu výzvu `IT Expert`.

![Zadať názov](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.sk.png)

1. Vyberte **ikonu šípky** vedľa **Model**, aby ste videli rôzne modely chatu, z ktorých si môžete vybrať. Predvolene je vybraný model **Basic GPT-4.1 mini** a máte tiež možnosť použiť vlastný model prostredníctvom Azure AI Foundry Models. Zostaneme pri predvolenom modeli.

![Zmeniť model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.sk.png)

1. Ďalej poskytneme našej výzve pokyny. Existujú 3 metódy, ktoré si môžete vybrať:

   - Použite Copilot na generovanie pokynov na základe vášho popisu toho, čo chcete, aby výzva robila.
   - Použite prednastavenú šablónu z knižnice výziev na vytvorenie výzvy.
   - Ručne zadajte vlastné pokyny.

1. Najprv vyskúšajme použitie Copilot na generovanie pokynov na základe zadaného popisu. Zadajte nasledujúce do poľa Copilot a odošlite.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Začať s Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.sk.png)

1. Copilot potom začne generovať výzvu pre nás.

![Copilot vytvára návrhy výziev](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.sk.png)

1. Návrh pokynov generovaný Copilotom sa potom zobrazí.

![Návrh pokynov generovaný Copilotom](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.sk.png)

1. Posuňte sa na spodok pokynov a uvidíte užívateľský vstupný parameter, ktorý už definoval Copilot. Potom máte možnosť:
   - Zachovať generované návrhy pokynov.
   - Obnoviť návrhy pokynov pomocou Copilot.
   - Vymazať návrhy pokynov.

   Vymažte návrhy pokynov výberom ikony **odpadkového koša** a ďalej vyskúšame knižnicu výziev.

![Pokyny výzvy](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.sk.png)

1. Vyberte odkaz **šablóna výzvy**.

![Vybrať šablónu výzvy](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.sk.png)

1. Zobrazí sa zoznam šablón výziev, z ktorých si môžete vybrať. Tieto sú z [knižnice výziev Power Platform](https://aka.ms/power-prompts).

![Knižnica výziev](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.sk.png)

1. Vyhľadajte výzvu `IT expert` a vyberte ju.

![Vybrať výzvu IT expert](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.sk.png)

1. Výzva sa potom pridá ako pokyny s vstupným parametrom definovaným šablónou výzvy. Podobne ako pri poskytovaní pokynov pre nášho agenta počas konverzačného procesu vytvárania s Copilot, táto šablóna výzvy obsahuje:
   - úlohu,
   - aké typy otázok dokáže spracovať,
   - a formát jej odpovede a cieľ výzvy.

![Pokyny výzvy](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.sk.png)

1. Vymažte pokyny a ďalej vyskúšame ručné zadanie pokynov. Použijeme [výzvu IT Expert](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) z [knižnice výziev Power Platform](https://aka.ms/power-prompts). Skopírujte a vložte výzvu.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Pokyny výzvy](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.sk.png)

1. Ďalej môžeme definovať užívateľské vstupné parametre našej výzvy. Môžu to byť texty a obrázky, a vzorové údaje na testovanie. Existuje tiež možnosť zakotviť výzvu s vedomosťami z tabuliek Dataverse. Pre tento cvičenie máme len jeden užívateľský vstup na definovanie, ktorým je vstup problému. Momentálne je to zástupný symbol v našej výzve ako `[Problem]`. Teraz nakonfigurujeme tento vstup buď zadaním znaku `/` alebo výberom **+Add content** a potom vyberte **Text**.

![Textový vstup](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.sk.png)

1. Teraz môžeme zadať názov pre náš vstupný parameter a vzorové údaje.

Zadajte nasledujúce ako názov:

    ```text
    problem input
    ```

Zadajte nasledujúce ako vzorové údaje:

    ```text
    My laptop gets an error with a blue screen
    ```

Potom vyberte **Close**.

![Konfigurácia vstupu problému](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.sk.png)

1. Vstupný parameter problému bude teraz pridaný do pokynov s nakonfigurovanými vzorovými údajmi. Teraz môžeme otestovať našu výzvu!

![Pridaný vstup problému](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.sk.png)

1. Vyberte **Test**, aby ste otestovali výzvu.

![Test pokynov](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.sk.png)

1. Odpoveď sa potom zobrazí. Všimnite si, ako odpoveď poskytuje nadpisy s bodmi podľa pokynov. Posuňte sa nadol a skontrolujte zvyšok odpovede modelu.

![Odpoveď modelu](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.sk.png)

1. Pred uložením našej výzvy sa naučíme o nastaveniach, ktoré je možné pre túto výzvu nakonfigurovať. Vyberte ikonu **tri bodky (...).**

![Nastavenia výzvy](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.sk.png)

1. Tu uvidíme tri nastavenia, ktoré je možné nakonfigurovať.

   - **Teplota**: Nižšie teploty vedú k predvídateľným výsledkom, zatiaľ čo vyššie teploty umožňujú rozmanitejšie alebo kreatívnejšie odpovede.
   - **Získavanie záznamov**: Určte počet záznamov získaných pre vaše zdroje vedomostí.
   - **Zahrnúť odkazy do odpovede**: Po výbere odpoveď obsahuje citácie odkazov na získané záznamy.

   Vyberte ikonu **X**, aby ste opustili Nastavenia.

![Konfigurácia nastavení](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.sk.png)

1. Vyberte **Save**, aby ste uložili výzvu.

![Uložiť výzvu](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.sk.png)

1. Ďalej vyberte **Add to agent**, aby ste pridali výzvu k nášmu deklaratívnemu agentovi.

![Pokyny výzvy](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.sk.png)

1. Výzva sa teraz zobrazí pod Nástrojmi 🙌🏻

![Pridaná výzva](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.sk.png)

Ďalej aktualizujeme naše pokyny na vyvolanie výzvy a otestujeme nášho deklaratívneho agenta.

### 3.3 Aktualizácia pokynov a testovanie vášho deklaratívneho agenta

1. Posuňte sa nahor do sekcie **Details** a vyberte **Edit**. Tým sa umožní upravovať polia.

![Vybrať Upraviť](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.sk.png)

1. Teraz môžeme aktualizovať naše pokyny na vyvolanie našej výzvy odkazom na názov výzvy. Vymažte pokyny, potom skopírujte a vložte nasledujúce.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Všimnite si, ako posledná veta inštruuje agenta, aby použil otázku položenú používateľom ako hodnotu pre vstupný parameter problému. Agent použije otázku ako vstup problému pre výzvu. Ďalej vyberte **Save**.

![Aktualizovať pokyny na vyvolanie výzvy](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.sk.png)

1. Teraz sme pripravení otestovať naše aktualizované pokyny nášho deklaratívneho agenta. Vyberte **ikonu obnovenia** v testovacom paneli.

![Vybrať ikonu obnovenia](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.sk.png)

1. Ďalej zadajte nasledujúcu výzvu nižšie a odošlite.

```text
Môžete mi pomôcť, môj laptop má modrú obrazovku
```

![Vykonať test](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.sk.png)

1. Agent vyvolá výzvu a odpovie.

![Pokyny výzvy](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.sk.png)

Teraz publikujeme nášho deklaratívneho agenta 😃

### 3.4 Publikovanie vášho deklaratívneho agenta do Microsoft 365 Copilot a Microsoft Teams

1. Vyberte **Publish**.

![Publikovať agenta](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.sk.png)

1. Zobrazí sa modálne okno, ktoré zobrazuje Kanály a podrobnosti o publikovaní, ktoré je možné aktualizovať.

   - Kanály: Agent bude publikovaný do Microsoft 365 Copilot a Microsoft Teams.
   - Informácie o aplikácii agenta: Toto sa zobrazí, keď používateľ pridá agenta do Microsoft 365 Copilot alebo do Microsoft Teams. Ide o polia, ktoré je možné podľa potreby aktualizovať.

![Podrobnosti o aplikácii agenta](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.sk.png)

1. Napríklad môžete aktualizovať **Krátky popis**, **Dlhý popis**, **Meno vývojára** svojím menom.

!!! tip
Ak nevidíte všetky polia zobrazené vo vašom prehliadači, skúste zmenšiť zobrazenie, napr. na 75%.

Vyberte **Publish**. Copilot Studio potom začne publikovať agenta.

![Publikovanie agenta](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.sk.png)

1. Po dokončení publikovania uvidíme [Možnosti dostupnosti](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) agenta.

| Možnosť dostupnosti | Popis |
| ---------- | ---------- |
| Zdieľať odkaz | Skopírujte odkaz na distribúciu s používateľmi, ktorým bol agent zdieľaný, aby ho otvorili v Microsoft 365 Copilot |
| Zobraziť mojim kolegom a zdieľaným používateľom | Umožňuje vám udeliť prístup ostatným na účasť na tvorbe agenta alebo bezpečnostným skupinám na udelenie prístupu na používanie agenta v Microsoft 365 Chat alebo Microsoft Teams. |
| Zobraziť všetkým v mojej organizácii | Odoslať správcovi tenanta na pridanie do organizačného katalógu pre všetkých používateľov tenanta, aby mohli pridať agenta. Agent sa zobrazí pod Vytvorené vašou organizáciou v Microsoft 365 Copilot a v Microsoft Teams |
| Stiahnuť ako .zip | Stiahnuť ako zip súbor na nahranie ako vlastnú aplikáciu v Microsoft Teams |

![Možnosti dostupnosti](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.sk.png)

1. Pozrime sa na zdieľanie agenta. Vyberte **Zobraziť mojim kolegom a zdieľaným používateľom**. Zobrazí sa panel, kde môžete vyhľadať používateľov, ktorým chcete zdieľať agenta, buď zadaním ich mena, e-mailu alebo bezpečnostnej skupiny. Tento zoznam môžete kedykoľvek skontrolovať a upraviť, kto má prístup k agentovi.

Existujú tiež dve zaškrtávacie políčka:
- _Poslať e-mailové pozvanie novým používateľom_ - noví používatelia dostanú e-mailové pozvanie.
- _Viditeľné Vytvorené pomocou Power Platform_ - agent sa stane dostupným v sekcii Vytvorené pomocou Power Platform v obchode aplikácií Teams.
Pre viac podrobností si pozrite [Pripojenie a konfigurácia agenta pre Teams a Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Vyberte **Zrušiť** alebo ikonu **X**, aby ste opustili panel.

![Zdieľať agenta](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.sk.png)

1. Vyberte **Kopírovať** a v novom okne prehliadača vložte odkaz.

![Kopírovať odkaz](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.sk.png)

1. Microsoft 365 Copilot sa načíta a zobrazí sa modálne okno s detailmi aplikácie agenta. Všimnite si, ako sa zobrazujú meno vývojára, krátky popis a dlhý popis. Tieto údaje pochádzajú z publikovaných detailov aktualizovaných v predchádzajúcom kroku.

Vyberte **Pridať**.

![Možnosti dostupnosti](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.sk.png)

1. Náš deklaratívny agent sa načíta ďalej. Môžeme vidieť počiatočné výzvy na výber, ktoré rýchlo umožňujú používateľom získať okamžitú pomoc.

Vyberte jednu z počiatočných výziev. V mojich počiatočných výzvach vyberiem výzvu **Pomoc pri inštalácii softvéru**, ktorá automaticky predvyplní pole správy Copilot. Odoslať otázku Copilotovi.

![Vybrať počiatočnú výzvu](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.sk.png)

1. Vyberte **Vždy povoliť**, aby ste dali svojmu deklaratívnemu agentovi povolenie na vyvolanie výzvy IT Expert.

![Vybrať vždy povoliť](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.sk.png)

1. Agent potom vyvolá našu výzvu **IT Expert** a uvidíme odpoveď modelu vrátenú ako správu v našom deklaratívnom agentovi.

![Odpoveď](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.sk.png)

Posuňte sa nadol, aby ste videli úplné detaily odpovede.

![Odpoveď](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.sk.png)

1. Ale _ako vieme_, že deklaratívny agent vyvolal výzvu? 👀 Tu je tip!

!!! tip
    Môžete testovať a ladiť agentov v Microsoft 365 Copilot povolením [režimu vývojára](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Zadajte nasledujúce do poľa správy Copilot a odošlite.

    ```text
    -developer on
    ```

Zobrazí sa potvrdzujúca správa, ktorá vás informuje, že režim vývojára je teraz povolený.

![Režim vývojára povolený](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.sk.png)

1. Odošlite nasledujúcu otázku na vyvolanie výzvy.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Zadať otázku](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.sk.png)

1. Opäť uvidíme odpoveď modelu z našej výzvy **IT Expert** vrátenú ako správu. Posuňte sa na spodok správy a zobrazí sa karta s informáciami o ladení.

Rozbaľte **Agent Debug Info** výberom tejto možnosti.

![Informácie o ladení agenta](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.sk.png)

1. Tu nájdete informácie o metadátach agenta, ktoré sa vyskytli počas behu.

![Informácie o ladení agenta rozbalené](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.sk.png)

V našom prípade sa zameriame na sekciu _Actions_

- **Matched actions** zvýrazňujú aktuálny stav funkcií nájdených počas vyhľadávania aplikácie.
- **Selected actions** zvýrazňujú aktuálny stav funkcií vybraných na spustenie na základe rozhodovacieho procesu aplikácie.

![Informácie o ladení agenta rozbalené](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.sk.png)

Tu môžeme vidieť, že orchestrátor agenta sa rozhodol vyvolať výzvu IT Expert podľa pokynov nášho deklaratívneho agenta. Toto je ďalej uvedené v sekcii _Executed Actions_, ktorá nám tiež hovorí, že výzva bola úspešne vyvolaná.

![Preskúmať informácie o ladení agenta](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.sk.png)

1. Ak chcete vypnúť režim vývojára, zadajte nasledujúce do poľa správy Copilot a odošlite.

    ```text
    -developer off
    ```

Zobrazí sa potvrdzujúca správa, ktorá vás informuje, že režim vývojára je deaktivovaný. Super, teraz viete, ako overiť, či váš deklaratívny agent v Microsoft 365 Copilot vyvolal vašu výzvu 🌞

![Režim vývojára deaktivovaný](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.sk.png)

1. Teraz otestujeme nášho agenta v Microsoft Teams. Prejdite na **Aplikácie** pomocou menu na ľavej strane a vyberte **Teams** v sekcii _Aplikácie_.

![Vybrať Teams v Aplikáciách](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.sk.png)

1. Microsoft Teams sa potom načíta v novom okne prehliadača a zobrazia sa podmienky používania Microsoft 365 Copilot, vyberte **Súhlasím**.

![Vybrať Súhlasím](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.sk.png)

1. Microsoft 365 Copilot sa potom načíta predvolene, s panelom na pravej strane, ktorý zobrazuje všetkých vašich dostupných agentov, vrátane deklaratívneho agenta **Contoso Tech Support Pro**.

![Microsoft 365 Copilot v Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.sk.png)

1. Vyberte **ikonu elipsy (...)** v menu na ľavej strane. Buď vyhľadajte **Contoso Tech Support Pro** v poli vyhľadávania, alebo ak vidíte agenta, vyberte ho.

Môžete tiež kliknúť pravým tlačidlom myši a **Pripnúť** agenta pre rýchly prístup v menu na ľavej strane v Microsoft Teams.

![Vybrať a pripnúť agenta](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.sk.png)

1. Potom uvidíme, že sa náš agent načíta. 1. Ďalej otestujeme nášho agenta. Zadajte nasledujúcu výzvu a odošlite.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Pripnúť agenta](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.sk.png)

1. Zobrazí sa modelová odpoveď z našej výzvy.

![Odpoveď v Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.sk.png)

Za pár minút ste sa naučili, ako publikovať svojho deklaratívneho agenta a otestovať ho v Microsoft 365 Copilot a v Microsoft Teams 😊

## ✅ Misia splnená

Gratulujeme! 👏🏻 Vytvorili ste deklaratívneho agenta v Copilot Studio, kde ste pridali výzvu, inštruovali agenta, aby použil výzvu, a naučili sa, ako testovať + publikovať svojho agenta do Microsoft 365 Copilot a Microsoft Teams.

Váš agent je teraz pripravený na akciu—pripravený pomáhať, riešiť problémy a slúžiť interným používateľom na požiadanie.

Toto je koniec **Lab 03 - Vytvorenie deklaratívneho agenta v Microsoft Copilot Studio pre Microsoft 365 Copilot**, vyberte odkaz nižšie, aby ste prešli na ďalšiu lekciu.

⏭️ [Prejsť na lekciu **Vytvorenie nového riešenia**](../04-creating-a-solution/README.md)

Do budúcna, zostaňte ostrí. Budúcnosť podnikovej práce prechádza cez agentov—a teraz viete, ako jedného vytvoriť.

## 📚 Taktické zdroje

🔗 [Vytvorenie deklaratívneho agenta v Microsoft Copilot Studio pre Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Pridať výzvy](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Zdieľať agentov s inými používateľmi](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Vytvorte výzvy pre svojho agenta](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytika" />

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.