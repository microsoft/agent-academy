<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T17:08:19+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "hu"
}
-->
# 🚨 Küldetés 03: Deklaratív ügynök telepítése a Microsoft 365 Copilot számára

## 🕵️‍♂️ KÓDNEVE: `COPILOT BŐVÍTÉS MŰVELET`

> **⏱️ Műveleti időablak:** `~60 perc`

🎥 **Nézd meg az útmutatót**

[![Deklaratív ügynök létrehozása videó thumbnail](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.hu.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Nézd meg az útmutatót a YouTube-on")

## 🎯 Küldetés összefoglaló

Üdvözlünk az első terepi küldetéseden, Ügynökkészítő. Téged választottak ki, hogy megtervezd, felszereld és telepíts egy Deklaratív Ügynököt – egy speciális operátort, amely közvetlenül be van ágyazva a Microsoft 365 Copilotba és a Microsoft Teamsbe.

A hagyományos ügynököktől eltérően a deklaratív ügynökök meghatározott küldetéssel (utasítások), eszközökkel (utasítások/csatlakozók) és stratégiai hozzáféréssel rendelkeznek belső intelligenciához (tudásforrások, mint például SharePoint, Dataverse és mások). A feladatod, hogy ezt az ügynököt a Microsoft Copilot Studio segítségével építsd fel – egy kódmentes irányítóközpont, ahol az ügynök képességei és célja életre kelnek.

Kezdjük.

## 🔎 Célkitűzések

Ebben a küldetésben megtanulod:

1. Megérteni, hogy mik a deklaratív ügynökök, és hogyan bővítik a Microsoft 365 Copilotot egyedi képességekkel
1. Összehasonlítani a Microsoft Copilot Studio-t és a Copilot Studio ügynöképítőt a deklaratív ügynökök létrehozásához
1. Deklaratív ügynök létrehozása természetes nyelv használatával a beszélgetés alapú létrehozási élményen keresztül
1. AI utasítások hozzáadása eszközként az ügynök speciális tudásának és problémamegoldó képességeinek javítása érdekében
1. Deklaratív ügynök közzététele és tesztelése a Microsoft 365 Copilotban és a Microsoft Teamsben

## 🕵🏻‍♀️ Mi az a deklaratív ügynök a Microsoft 365 Copilot számára?

A deklaratív ügynökök a Microsoft 365 Copilot testreszabott verziói. A Microsoft 365 Copilotot testre szabhatod, hogy megfeleljen az adott üzleti igényeknek, ha utasításokat adsz meg egy adott folyamat támogatására, vállalati tudással alapozod meg, és eszközöket használsz a szélesebb körű bővíthetőség érdekében. Ez lehetővé teszi a szervezetek számára, hogy személyre szabott élményeket hozzanak létre, amelyek nagyobb funkcionalitást kínálnak a felhasználók számára.

## 🤔 Miért érdemes a Microsoft Copilot Studio-t használni deklaratív ügynök létrehozásához?

Mint készítő, lehet, hogy már felfedezted a [Copilot Studio ügynöképítőt](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) a Microsoft 365 Copilotban, és valószínűleg azon tűnődsz, _miért érdemes deklaratív ügynököt építeni a Microsoft Copilot Studio-ban?_

A Microsoft Copilot Studio átfogó eszköz- és funkciókészletet kínál a deklaratív ügynökök számára, amely túlmutat a Copilot Studio ügynöképítő korlátain. Hasonlóan a Copilot Studio ügynöképítőhöz, itt sem szükséges programozási vagy szoftverfejlesztési ismeretekkel rendelkezni. Nézzük meg közelebbről a Copilot Studio ügynöképítő és a Copilot Studio közötti különbségeket a deklaratív ügynökök építése során.

### Funkciók összehasonlítása

Az alábbi táblázat kiemeli a különbségeket a Copilot Studio ügynöképítő és a Copilot Studio által épített deklaratív ügynökök között.

| Funkció                   | Copilot Studio ügynöképítő a Microsoft 365 Copilotban                          | Microsoft 365 Copilot bővítése a Copilot Studio-ban                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Tudás**       | Web, SharePoint, Microsoft Teams csevegések, Outlook e-mailek, Copilot csatlakozók     | Webes keresés (Bing által), SharePoint, Dataverse, Dynamics 365, Copilot csatlakozók  |
| **Eszközök**       | Kódértelmező, képgenerátor     | 1400+ Power Platform csatlakozó, egyedi csatlakozók, utasítás, számítógép használat, REST API, Model Context Protocol   |
| **Kezdő utasítások**         | Utasítások konfigurálása a felhasználók gyors kezdéséhez   | Utasítások konfigurálása a felhasználók gyors kezdéséhez  |
| **Csatorna**           | Ügynök csak a Microsoft 365 Copilotban publikálva     | Ügynök publikálva a Microsoft 365 Copilotban és a Microsoft Teamsben      |
| **Megosztási jogosultságok**         | A felhasználók csak nézők    | A felhasználók szerkesztők vagy nézők lehetnek   |

További képességek érhetők el a Microsoft Copilot Studio-ban épített deklaratív ügynökök számára, amelyeket a következőkben megismerünk.

!!! tip
    - Ha többet szeretnél megtudni a Copilot Studio ügynöképítőről, látogass el ide: [Copilot Developer Camp: Lab MAB1 - Építsd meg az első ügynöködet](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Ha a deklaratív ügynököt a Microsoft 365 Copilot számára a Copilot Studio ügynöképítőn túl szeretnéd fejleszteni, látogass el ide: [Copilot Developer Camp: Lab MAB1 - Építsd meg az első ügynöködet](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### A Microsoft 365 Copilot bővítése a Copilot Studio-ban épített deklaratív ügynökökkel

Bővítsük ki, amit a funkciók összehasonlító táblázatából megtanultunk.

#### Testreszabás

- **Részletes utasítások**: Részletes utasításokat és képességeket adhatsz meg, hogy pontosan meghatározd az ügynök célját és viselkedését.
  - Ez magában foglalja az eszközök természetes nyelv használatával történő aktiválását.

- **Vállalati tudáshoz való hozzáférés**: Lehetővé teszi a vállalati tudáshoz való hozzáférést, amely tiszteletben tartja a felhasználói jogosultságokat.
  - SharePoint integráció
  - Dataverse integráció
  - Dynamics 365 integráció
  - Microsoft 365 Copilot csatlakozók, amelyeket a szervezet adminisztrátora engedélyezett

   ![Testreszabás](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.hu.png)

#### Fejlett képességek

- **Integráció külső szolgáltatásokkal**: Lehetővé teszi, hogy 1400+ Power Platform csatlakozóból válassz, amelyek integrálódnak külső szolgáltatásokkal, így összetettebb és erőteljesebb funkciókat biztosítanak.
  - Példák: [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) és mások
  - Alternatívaként közvetlenül használhatod a Model Context Protocol szervereket és REST API-kat a deklaratív ügynökön belül

- **AI utasítások**: Használj utasítást szövegek, dokumentumok, képek és adatok elemzésére és átalakítására természetes nyelv és AI érvelés segítségével.
  - Válaszd ki a csevegési modellt, válassz az Alap (Alapértelmezett), Standard, Prémium közül
  - Lehetőség van saját Azure AI Foundry modell használatára az utasítás megalapozásához

- **Több telepítési konfigurációs lehetőség**: Válassz csatornákat és határozd meg a felhasználói jogosultságokat.
  - Publikálás a Microsoft Teamsbe, amely a felhasználók számára ismerős felhasználói felület a gyorsabb elfogadás érdekében
  - A szerkesztési jogosultságok megoszthatók, hogy elkerüljük az ügynök tulajdonosának egyetlen függőségi pontját

   ![Testreszabás](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.hu.png)

Összefoglalva, a deklaratív ügynökök a Microsoft Copilot Studio-ban lehetővé teszik a Microsoft 365 Copilot testreszabását az üzleti igényekhez, vállalati tudásrendszerek integrációjával, eszközökkel a külső szolgáltatásokhoz való csatlakozáshoz vagy AI GPT modellekhez.

## 🧪 Lab 03: Deklaratív ügynök építése a Microsoft Copilot Studio-ban a Microsoft 365 Copilot számára

A következőkben megtanuljuk, hogyan építsünk deklaratív ügynököt egy "Business-to-Employee" (B2E) felhasználási esethez, amely **IT helpdesk ügynökként** fog működni.

- [3.1 Deklaratív ügynök létrehozása](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Utasítás létrehozása és hozzáadása a deklaratív ügynökhöz](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Utasítások frissítése és a deklaratív ügynök tesztelése](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Deklaratív ügynök publikálása a Microsoft 365 Copilotba és a Microsoft Teamsbe](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Ez a labor bemutatja, hogyan lehet utasítást hozzáadni eszközként. A következő leckékben részletesen foglalkozunk a tudásforrások hozzáadásával és más elérhető eszközök hozzáadásával. Egyszerűen tartjuk a tanulás érdekében 😊

### 👩🏻‍💼 Business-to-Employee (B2E) megértése

A Business-to-Employee (B2E) azokat az interakciókat és szolgáltatásokat jelenti, amelyeket egy vállalkozás közvetlenül nyújt az alkalmazottainak. Az ügynök kontextusában ez azt jelenti, hogy a Copilot Studio fejlett képességeit használjuk az alkalmazottak munkatapasztalatának támogatására és javítására a szervezeten belül.

### ✨ Felhasználási eset

**Mint** alkalmazott

**Azt szeretném**, hogy gyors és pontos segítséget kapjak az IT helpdesk ügynöktől olyan problémák esetén, mint eszközproblémák, hálózati hibaelhárítás, nyomtató beállítás

**Hogy** produktív maradhassak és technikai problémákat késedelem nélkül megoldhassak

Kezdjük!

### Előfeltételek

- A készítőknek engedéllyel kell rendelkezniük a Copilot Studio környezetben való létrehozáshoz és hozzáféréshez.

!!! note "Licencelési megjegyzés"
    Ez a labor bemutatja, hogyan lehet utasítást hozzáadni eszközként. A következő leckékben részletesen foglalkozunk a tudásforrások hozzáadásával és más elérhető eszközök hozzáadásával. Egyszerűen tartjuk a tanulás érdekében 😊
  
    Nincs szükséged Microsoft 365 Copilot felhasználói licencre ahhoz, hogy a Copilot Studio-ban épített deklaratív ügynököt publikáld a Microsoft 365 Copilotba. Azonban **a publikált deklaratív ügynök** felhasználói a Microsoft 365 Copilotban Microsoft 365 Copilot felhasználói licencre lesz szükségük.

### 3.1 Deklaratív ügynök létrehozása

!!! warning "A Copilot kérdései eltérhetnek az egyes munkamenetek között"

    A Copilot beszélgetés alapú létrehozási élménye minden alkalommal változhat, ahol az iránymutatásra szolgáló kérdések kissé eltérhetnek az előzőektől.

1. Lépj a [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) oldalra, és jelentkezz be a hitelesítő adataiddal. Győződj meg róla, hogy átváltottál arra a környezetre, amelyet ezekhez a laborokhoz használsz.

1. Válaszd ki a **Ügynökök** menüpontot, majd válaszd ki a **Copilot a Microsoft 365-höz** opciót.

       ![Copilot a Microsoft 365-höz](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.hu.png)

1. Ezután hozzunk létre egy deklaratív ügynököt a **+ Ügynök hozzáadása** gombra kattintva.

       ![Ügynök hozzáadása](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.hu.png)

1. Ezután megjelenik a beszélgetés alapú létrehozási élmény, ahol természetes nyelven beszélgethetünk a Copilot-tal, hogy leírjuk a deklaratív ügynököt, amelyet építeni szeretnénk, és használhatjuk az iránymutatásra szolgáló kérdéseket.

       Írjunk be egy részletes leírást, amely a következőket tartalmazza,  
       - az ügynök feladata  
       - milyen típusú kérdéseket tud kezelni  
       - a válasz formátuma  
       - az ügynök célja  
    
       ```text
       Ön egy magasan képzett és tapasztalt IT szakember, aki széles körű számítógépes rendszerek, hálózatok és kiberbiztonság területén specializálódott. Képes diagnosztizálni és megoldani technikai problémákat, megmagyarázni a megoldásokat érthető módon minden technikai szintű felhasználó számára, és útmutatást adni a legjobb gyakorlatokról. Legyen tömör és informatív, használjon lépésről lépésre történő utasításokat pontokba szedve, amikor szükséges. Az Ön célja, hogy segítse a felhasználót a probléma megértésében és hatékony megoldásában.
       ```
    
       ![Utasítás létrehozása](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.hu.png)

1. Az utasítás elküldése után észrevehető frissítés jelenik meg a jobb oldali panelen az ügynök részleteivel és az utasításokkal, ahogyan azt az utasítás meghatározta. Ezután megkérdezik, hogy megerősítjük-e az ügynök nevét, és a Copilot javasol egy nevet.

       Írjuk be, hogy `igen`, ha elfogadjuk a javasolt nevet, vagy adjunk meg egy másik nevet, például a következőt,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Utasítások frissítve](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.hu.png)

    !!! warning "Emlékeztető: A Copilot kérdései eltérhetnek az egyes munkamenetek között"

        A Copilot beszélgetés alapú létrehozási élménye minden alkalommal változh
![Ügynök részletei](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.hu.png)

Görgess le a panelen, és láthatod a tudás hozzáadásának lehetőségét, a webes keresés engedélyezését (Bing segítségével), kezdő javaslatokat, valamint a Microsoft 365 Copilot deklaratív ügynökének közzétételi részleteit. A kezdő javaslatok a jobb oldali tesztpanelen is megjelennek. A felhasználók kiválaszthatják ezeket a kezdő javaslatokat, hogy elkezdjék az interakciót az ügynökkel.

![Javasolt javaslatok](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.hu.png)

1. Az ügynök részletei szekcióban lehetőséged van az ügynök ikon megváltoztatására is. Válaszd az **Edit** lehetőséget.

![Részletek szerkesztése](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.hu.png)

Itt megváltoztathatod az ikont és a háttérszínt. Válaszd a **Save** lehetőséget, majd ismét a **Save** gombot az ügynök részleteinek frissítéséhez.

![Ikon megváltoztatása](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.hu.png)

1. Végezzünk egy gyors tesztet az általunk létrehozott ügynökkel. Válassz egyet a **Starter Prompts** közül a jobb oldali tesztpanelen.

![Kezdő javaslat tesztelése](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.hu.png)

1. Az ügynök válaszolni fog. Figyeld meg, hogyan követte az utasításokat, és bontotta le az információkat emészthető pontokra, valamint empátiát mutatott a válaszában.

Ha legörgetsz az üzenet aljára, észreveszed, hogy a megoldás nyújtása után visszajelzést kért, ahogy az utasításban szerepelt.

![Tesztelés válasza](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.hu.png)

Néhány perc alatt létrehoztál egy deklaratív ügynököt a Microsoft 365 Copilot számára a Copilot Studio-ban 🙌🏻

Most megtanuljuk, hogyan adjunk hozzá egy eszközt az ügynökünkhöz, és létrehozunk egy javaslatot.

### 3.2 Javaslat létrehozása és hozzáadása a deklaratív ügynökhöz

1. Görgess le az **Eszközök** szekcióhoz, és válaszd a **+ Add tool** lehetőséget.

![Eszköz hozzáadása](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.hu.png)

1. Megjelenik az Eszközök ablak, amelyben a Power Platform csatlakozók listája látható. Javaslat hozzáadásához válaszd a **+ New tool** lehetőséget.

![Új eszköz](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.hu.png)

1. Megjelenik más eszközök listája - Javaslat, Egyéni csatlakozó, REST API és Model Context Protocol. Ha a szervezeted megfelel a [Számítógép-használati követelményeknek](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), ez is megjelenik a listában. Válaszd a **Prompt** lehetőséget.

![Javaslat kiválasztása](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.hu.png)

1. Adj nevet a javaslatnak. Nevezzük el `IT Expert`-nek.

![Név megadása](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.hu.png)

1. Válaszd ki a **chevron ikon**-t a **Model** mellett, hogy megtekintsd a választható chat modelleket. Alapértelmezés szerint a **Basic GPT-4.1 mini** modell van kiválasztva, és lehetőséged van saját modellt használni az Azure AI Foundry Models segítségével. Maradunk az alapértelmezett modellnél.

![Modell megváltoztatása](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.hu.png)

1. Ezután megadjuk a javaslatunknak az utasításokat. Három módszer közül választhatsz:

   - Használhatod a Copilotot, hogy az általad megadott leírás alapján generáljon utasításokat.
   - Használhatsz egy előre beállított sablont a javaslat könyvtárból.
   - Kézzel is megadhatod az utasításokat.

1. Először próbáljuk ki, hogy a Copilot generáljon utasításokat az általunk megadott leírás alapján. Írd be a következőt a Copilot mezőbe, majd küldd el.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Kezdés a Copilot segítségével](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.hu.png)

1. A Copilot elkezdi generálni a javaslatot.

![Copilot javaslatokat készít](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.hu.png)

1. A Copilot által generált vázlatos utasítások megjelennek.

![Copilot által generált vázlatos utasítások](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.hu.png)

1. Görgess le az utasítások aljára, és látni fogod, hogy a felhasználói bemeneti paramétert már definiálta a Copilot. Ezután lehetőséged van:
   - Megtartani a generált vázlatos utasításokat.
   - Frissíteni a vázlatos utasításokat a Copilot segítségével.
   - Törölni a vázlatos utasításokat.

   Töröld a vázlatos utasításokat a **szemetes ikon** kiválasztásával, majd próbáljuk ki a javaslat könyvtárat.

![Javaslat utasítások](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.hu.png)

1. Válaszd ki a **prompt template** linket.

![Javaslat sablon kiválasztása](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.hu.png)

1. Megjelenik a választható javaslat sablonok listája. Ezek a [Power Platform Prompt könyvtárból](https://aka.ms/power-prompts) származnak.

![Javaslat könyvtár](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.hu.png)

1. Keress rá az `IT expert` javaslatra, és válaszd ki.

![IT expert javaslat kiválasztása](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.hu.png)

1. A javaslat hozzáadódik utasításként a javaslat sablon által definiált bemeneti paraméterrel. Hasonlóan ahhoz, ahogy az ügynökünk utasításait megadtuk a Copilot beszélgetési létrehozási élmény során, ez a javaslat sablon meghatározza:
   - a feladatot,
   - milyen típusú kérdéseket tud kezelni,
   - a válasz formátumát és a javaslat célját.

![Javaslat utasítások](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.hu.png)

1. Töröld az utasításokat, és próbáljuk ki a kézi utasítás megadását. Használjuk az [IT Expert javaslatot](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) a [Power Platform Prompt könyvtárból](https://aka.ms/power-prompts). Másold és illeszd be a javaslatot.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Javaslat utasítások](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.hu.png)

1. Ezután meghatározhatjuk a javaslatunk felhasználói bemeneti paramétereit. Ezek lehetnek szövegek, képek, valamint mintaadatok teszteléshez. Lehetőség van arra is, hogy a javaslatot Dataverse táblákból származó tudással alapozzuk meg. Ehhez a gyakorlathoz csak egy felhasználói bemenetet kell definiálnunk, amely a probléma bemenet. Ez jelenleg egy helyőrző a javaslatunkban, mint `[Problem]`. Most konfiguráljuk ezt a bemenetet, vagy a `/` karakter beírásával, vagy a **+Add content** kiválasztásával, majd a **Text** opcióval.

![Szöveges bemenet](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.hu.png)

1. Most megadhatjuk a bemeneti paraméter nevét és mintaadatokat.

   Add meg a következőt névként:

    ```text
    problem input
    ```

   Add meg a következőt mintaadatként:

    ```text
    My laptop gets an error with a blue screen
    ```

   Ezután válaszd a **Close** lehetőséget.

![Probléma bemenet konfigurálása](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.hu.png)

1. A probléma bemeneti paraméter hozzáadódik az utasításokhoz a konfigurált mintaadatokkal. Most már tesztelhetjük a javaslatunkat!

![Probléma bemenet hozzáadva](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.hu.png)

1. Válaszd a **Test** lehetőséget a javaslat teszteléséhez.

![Utasítások tesztelése](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.hu.png)

1. A válasz megjelenik. Figyeld meg, hogyan biztosít a válasz címsorokat és felsorolásokat az utasításoknak megfelelően. Görgess le, és tekintsd át a modell válaszának további részleteit.

![Modell válasz](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.hu.png)

1. Mielőtt elmentenénk a javaslatot, ismerjük meg a javaslat beállításait, amelyeket konfigurálhatunk. Válaszd ki az **ellipsis (...) ikont**.

![Javaslat beállítások](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.hu.png)

1. Itt három beállítást láthatsz, amelyeket konfigurálhatsz:

   - **Hőmérséklet**: Alacsonyabb hőmérséklet előre látható eredményeket eredményez, míg magasabb hőmérséklet változatosabb vagy kreatívabb válaszokat tesz lehetővé.
   - **Rekord visszakeresés**: Adja meg a tudásforrásokból visszakeresett rekordok számát.
   - **Linkek hozzáadása a válaszhoz**: Ha kiválasztva van, a válasz tartalmazza a visszakeresett rekordok hivatkozásait.

   Válaszd az **X** ikont a Beállításokból való kilépéshez.

![Beállítások konfigurálása](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.hu.png)

1. Válaszd a **Save** lehetőséget a javaslat mentéséhez.

![Javaslat mentése](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.hu.png)

1. Ezután válaszd az **Add to agent** lehetőséget, hogy hozzáadd a javaslatot a deklaratív ügynökünkhöz.

![Javaslat utasítások](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.hu.png)

1. A javaslat most megjelenik az Eszközök alatt 🙌🏻

![Javaslat hozzáadva](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.hu.png)

Ezután frissítjük az utasításainkat, hogy meghívjuk a javaslatot, és teszteljük a deklaratív ügynökünket.

### 3.3 Utasítások frissítése és a deklaratív ügynök tesztelése

1. Görgess fel a **Részletek** szekcióhoz, és válaszd az **Edit** lehetőséget. Ez lehetővé teszi a mezők szerkesztését.

![Edit kiválasztása](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.hu.png)

1. Most frissíthetjük az utasításainkat, hogy meghívjuk a javaslatot a javaslat nevének hivatkozásával. Töröld az utasításokat, majd másold és illeszd be a következőt.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

   Figyeld meg, hogy az utolsó mondat arra utasítja az ügynököt, hogy használja a felhasználó által feltett kérdést a probléma bemeneti paraméter értékeként. Az ügynök a kérdést fogja használni a javaslat probléma bemeneteként. Ezután válaszd a **Save** lehetőséget.

![Utasítások frissítése a javaslat meghívásához](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.hu.png)

1. Most készen állunk arra, hogy teszteljük a deklaratív ügynökünk frissített utasításait. Válaszd ki a **frissítés ikont** a tesztpanelen.

![Frissítés ikon kiválasztása](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.hu.png)

1. Ezután írd be az alábbi javaslatot, majd küldd el.

```text
Segítenél nekem? A laptopom kék képernyőt mutat.
```

![Teszt végrehajtása](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.hu.png)

1. Az ügynök meghívja a javaslatot és válaszol.

![Javaslat utasítások](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.hu.png)

Most publikáljuk a deklaratív ügynökünket 😃

### 3.4 Deklaratív ügynök publikálása a Microsoft 365 Copilot és Microsoft Teams számára

1. Válaszd a **Publish** lehetőséget.

![Ügynök publikálása](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.hu.png)

1. Megjelenik egy ablak, amely a csatornákat és a publikálási részleteket mutatja, amelyeket frissíthetsz.

   - Csatornák: Az ügynök a Microsoft 365 Copilot és Microsoft Teams számára lesz publikálva.
   - Ügynök alkalmazás információ: Ez az, amit a felhasználó látni fog, amikor hozzáadja az ügynököt a Microsoft 365 Copilothoz vagy a Microsoft Teamshez. Ezek a mezők szükség szerint frissíthetők.

![Ügynök alkalmazás részletei](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.hu.png)

1. Például frissítheted a **Rövid leírást**, **Hosszú leírást**, **Fejlesztő nevét** a saját neveddel.

!!! tip
   Ha nem látod az összes mezőt a böngésződben, próbálj meg kicsinyíteni, például 75%-ra.

   Válaszd a **Publish** lehetőséget. A Copilot Studio elkezdi publikálni az ügynököt.

![Ügynök publikálása](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.hu.png)

1. Amikor a publikálás befejeződik, látni fogjuk az ügynök [Elérhetőségi opcióit](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez).

   | Elérhetőségi opció | Leírás |
   | ---------- | ---------- |
   | Link megosztása | Másold a linket, hogy megoszd a felhasználókkal, akik megnyithatják az ügynököt a Microsoft 365 Copilotban |
   | Mutasd meg a csapattársaimnak és megosztott felhasználóknak | Lehetővé teszi, hogy másoknak hozzáférést adj az ügynök szerkesztéséhez, vagy biztonsági csoportoknak, hogy hozzáférést kapjanak az ügynök használatához a Microsoft 365 Chatben vagy Microsoft Teamsben. |
   | Mutasd meg mindenki számára a szervezetemben | Küldd el a bérlő adminisztrátornak, hogy hozzáadja a szervezeti katalógushoz minden bérlő felhasználó számára, hogy hozzáadhassák az ügynököt. Az ügynök megjelenik a Szervezeted által készített szekcióban a Microsoft 365 Copilotban és Microsoft Teamsben. |
   | Letöltés .zip formátumban | Töltsd le zip fájlként, hogy egyéni alkalmazásként feltöltsd a Microsoft Teamsbe. |

![Elérhetőségi opciók](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.hu.png)

1. Nézzük meg az ügynök megosztását. Válaszd a **Mutasd meg a csapattársaimnak és megosztott felhasználóknak** lehetőséget. Megjelenik egy panel, ahol kereshetsz felhasználókat, akikkel meg szeretnéd osztani az ügynököt, akár név, e-mail vagy biztonsági csoport megadásával. Ezt
További részletekért lásd: [Kapcsolódás és ügynök konfigurálása a Teams és a Microsoft 365 számára](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Válassza a **Mégse** vagy az **X** ikont a panel bezárásához.

![Ügynök megosztása](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.hu.png)

1. Válassza a **Másolás** lehetőséget, majd illessze be a linket egy új böngészőfülön.

![Link másolása](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.hu.png)

1. A Microsoft 365 Copilot betöltődik, és megjelenik egy modális ablak az ügynök alkalmazás részleteivel. Figyelje meg, hogyan jelennek meg a fejlesztő neve, a rövid leírás és a hosszú leírás. Ezek a korábbi lépésben frissített publikációs adatokból származnak.

Válassza az **Hozzáadás** lehetőséget.

![Elérhetőségi opciók](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.hu.png)

1. Ezután betöltődik a deklaratív ügynökünk. Láthatjuk a kezdő javaslatokat, amelyek közül választhatunk, és amelyek gyorsan lehetővé teszik a felhasználók számára, hogy azonnali segítséget kérjenek.

Válasszon egy kezdő javaslatot. Az én kezdő javaslataim közül a **Szoftver telepítési segítség** javaslatot választom, amely automatikusan kitölti a Copilot üzenet mezőt. Küldje el a kérdést a Copilotnak.

![Kezdő javaslat kiválasztása](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.hu.png)

1. Válassza az **Mindig engedélyez** lehetőséget, hogy engedélyezze a deklaratív ügynökének az IT Expert javaslat meghívását.

![Mindig engedélyezés kiválasztása](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.hu.png)

1. Az ügynök ezután meghívja az **IT Expert** javaslatot, és a modell válasza üzenetként jelenik meg a deklaratív ügynökben.

![Válasz](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.hu.png)

Görgessen le, hogy megtekintse a válasz teljes részleteit.

![Válasz](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.hu.png)

1. De _hogyan tudjuk_, hogy a deklaratív ügynök meghívta a javaslatot? 👀 Nos, itt egy tipp!

!!! tip
    Tesztelheti és hibakeresést végezhet az ügynökökön a Microsoft 365 Copilotban, ha engedélyezi a [fejlesztői módot](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Írja be a következőt az üzenet Copilot mezőbe, és küldje el.

    ```text
    -developer on
    ```

Megjelenik egy megerősítő üzenet, amely jelzi, hogy a fejlesztői mód mostantól engedélyezve van.

![Fejlesztői mód engedélyezve](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.hu.png)

1. Küldje el a következő kérdést a javaslat meghívásához.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Kérdés megadása](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.hu.png)

1. Ismét megjelenik egy modell válasz az **IT Expert** javaslatból, amely üzenetként jelenik meg. Görgessen le az üzenet aljára, ahol egy kártya jelenik meg hibakeresési információkkal.

Bontsa ki az **Ügynök hibakeresési információk** részt, ha kiválasztja.

![Ügynök hibakeresési információk](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.hu.png)

1. Itt található információ az ügynök metaadatairól, amelyek a futásidőben történtek.

![Ügynök hibakeresési információk kibővítve](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.hu.png)

Az esetünkben az _Akciók_ szekcióra fogunk összpontosítani.

- **Egyező akciók** kiemelik az alkalmazás keresése során talált funkciók aktuális állapotát.
- **Kiválasztott akciók** kiemelik az alkalmazás döntéshozatali folyamatának alapján futtatásra kiválasztott funkciók aktuális állapotát.

![Ügynök hibakeresési információk kibővítve](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.hu.png)

Itt láthatjuk, hogy az ügynök orchestrator az IT Expert javaslatot választotta ki a deklaratív ügynökünk utasításai szerint. Ez tovább részletezve van a _Végrehajtott akciók_ szekcióban, amely azt is elmondja, hogy sikeresen meghívta a javaslatot.

![Ügynök hibakeresési információk áttekintése](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.hu.png)

1. A fejlesztői mód kikapcsolásához írja be a következőt az üzenet Copilot mezőbe, és küldje el.

    ```text
    -developer off
    ```

Megjelenik egy megerősítő üzenet, amely jelzi, hogy a fejlesztői mód le van tiltva. Szuper, most már tudja, hogyan ellenőrizheti, hogy a deklaratív ügynöke a Microsoft 365 Copilotban meghívta-e a javaslatot 🌞

![Fejlesztői mód letiltva](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.hu.png)

1. Most teszteljük az ügynökünket a Microsoft Teamsben. Navigáljon az **Alkalmazások** menüpontra a bal oldali menü segítségével, és válassza a **Teams** lehetőséget az _Alkalmazások_ szekcióban.

![Teams kiválasztása az Alkalmazásokban](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.hu.png)

1. A Microsoft Teams egy új böngészőfülön betöltődik, majd megjelennek a Microsoft 365 Copilot használati feltételei, válassza az **Elfogadom** lehetőséget.

![Elfogadom kiválasztása](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.hu.png)

1. A Microsoft 365 Copilot alapértelmezés szerint betöltődik, a jobb oldali panelen pedig az összes elérhető ügynök listája látható, beleértve a **Contoso Tech Support Pro** deklaratív ügynököt.

![Microsoft 365 Copilot a Teamsben](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.hu.png)

1. Válassza ki a **három pont ikont (...)** a bal oldali menüben. Keresse meg a **Contoso Tech Support Pro** ügynököt a keresőmezőben, vagy ha látja az ügynököt, válassza ki.

Egér jobb gombjával kattintva **Rögzítheti** az ügynököt a bal oldali menüben a Microsoft Teamsben, hogy gyorsan elérhető legyen.

![Ügynök kiválasztása és rögzítése](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.hu.png)

1. Ezután betöltődik az ügynökünk. 1. Most teszteljük az ügynökünket. Írja be a következő javaslatot, és küldje el.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Ügynök rögzítése](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.hu.png)

1. A javaslatból származó modell válasz megjelenik.

![Válasz a Teamsben](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.hu.png)

Néhány perc alatt megtanulta, hogyan publikálja a deklaratív ügynökét, és hogyan tesztelje azt a Microsoft 365 Copilotban és a Microsoft Teamsben 😊

## ✅ Küldetés Teljesítve

Gratulálunk! 👏🏻 Létrehozott egy deklaratív ügynököt a Copilot Studio-ban, ahol hozzáadott egy javaslatot, utasította az ügynököt a javaslat használatára, és megtanulta, hogyan tesztelje + publikálja az ügynökét a Microsoft 365 Copilotban és a Microsoft Teamsben.

Az ügynöke most készen áll arra, hogy segítsen, problémákat oldjon meg, és azonnal kiszolgálja a belső felhasználókat.

Ez a **Lab 03 - Deklaratív ügynök létrehozása a Microsoft Copilot Studio-ban a Microsoft 365 Copilot számára** című lecke vége, válassza az alábbi linket a következő leckére lépéshez.

⏭️ [Lépjen a **Új megoldás létrehozása** leckére](../04-creating-a-solution/README.md)

Legközelebb is maradjon éles. A vállalati munka jövője az ügynökökön keresztül valósul meg—és most már tudja, hogyan kell egyet létrehozni.

## 📚 Taktikai Források

🔗 [Deklaratív ügynök létrehozása a Microsoft Copilot Studio-ban a Microsoft 365 Copilot számára](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Javaslatok hozzáadása](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Ügynökök megosztása más felhasználókkal](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Javaslatok létrehozása az ügynökéhez](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analitika" />

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.