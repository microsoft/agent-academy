<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-17T05:52:08+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 03: Julkaise deklaratiivinen agentti Microsoft 365 Copilotille

## 🕵️‍♂️ Koodinimi: `OPERATION COPILOT EXTENSION`

> **⏱️ Operaatioaikaikkuna:** `~60 minuuttia`

🎥 **Katso opastusvideo**

[![Luo deklaratiivinen agentti -videon pikkukuva](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.fi.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Katso opastus YouTubessa")

## 🎯 Tehtävän kuvaus

Tervetuloa ensimmäiseen kenttätehtävääsi, Agent Maker. Sinut on valittu suunnittelemaan, varustamaan ja julkaisemaan deklaratiivinen agentti—erikoistunut operatiivinen yksikkö, joka on suoraan integroitu Microsoft 365 Copilotiin ja Microsoft Teamsiin.

Toisin kuin perinteiset agentit, deklaratiiviset agentit toimivat määritellyn tehtävän (ohjeet), työkalujen (kehotteet/liittimet) ja strategisen pääsyn avulla sisäiseen tietoon (tietolähteet kuten SharePoint, Dataverse ja muut). Tehtäväsi on rakentaa tämä agentti Microsoft Copilot Studiossa—koodittomassa komentokeskuksessa, jossa agenttisi taidot ja tarkoitus heräävät eloon.

Aloitetaan.

## 🔎 Tavoitteet

Tässä tehtävässä opit:

1. Ymmärtämään, mitä deklaratiiviset agentit ovat ja miten ne laajentavat Microsoft 365 Copilotin mukautettuja ominaisuuksia
1. Vertailu Microsoft Copilot Studion ja Copilot Studio agent builderin välillä deklaratiivisten agenttien rakentamisessa
1. Deklaratiivisen agentin luominen luonnollisen kielen avulla keskusteluluomiskokemuksen kautta
1. AI-kehotteiden lisääminen työkaluiksi agenttisi erikoistuneen tiedon ja ongelmanratkaisukyvyn parantamiseksi
1. Deklaratiivisen agentin julkaiseminen ja testaaminen Microsoft 365 Copilotissa ja Microsoft Teamsissa

## 🕵🏻‍♀️ Mikä on deklaratiivinen agentti Microsoft 365 Copilotille?

Deklaratiiviset agentit ovat räätälöityjä versioita Microsoft 365 Copilotista. Voit mukauttaa Microsoft 365 Copilotia vastaamaan tiettyjä liiketoiminnan tarpeita antamalla sille ohjeita tukemaan tiettyä prosessia, yhdistämällä sen yrityksen tietoon ja hyödyntämällä työkaluja laajemman laajennettavuuden saavuttamiseksi. Tämä mahdollistaa organisaatioiden luoda henkilökohtaisia kokemuksia, joissa on enemmän toiminnallisuutta käyttäjilleen.

## 🤔 Miksi käyttäisin Microsoft Copilot Studiota deklaratiivisen agentin rakentamiseen?

Tekijänä olet ehkä jo tutustunut [Copilot Studio agent builderiin](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) Microsoft 365 Copilotissa ja mietit, _miksi rakentaa deklaratiivinen agentti Microsoft Copilot Studiossa?_

Microsoft Copilot Studio tarjoaa kattavan valikoiman työkaluja ja ominaisuuksia deklaratiivisille agenteille, jotka ylittävät Copilot Studio agent builderin rajoitukset. Samoin kuin Copilot Studio agent builder, et tarvitse ohjelmointi- tai ohjelmistokehitystaitoja rakentaaksesi Microsoft Copilot Studiossa. Tarkastellaan tarkemmin Copilot Studio agent builderin ja Copilot Studion eroja deklaratiivisten agenttien rakentamisessa.

### Ominaisuusvertailu

Seuraava taulukko korostaa eroja deklaratiivisen agentin rakentamisessa Copilot Studio agent builderissa ja Copilot Studiossa.

| Ominaisuus                   | Copilot Studio agent builder Microsoft 365 Copilotissa                          | Laajenna Microsoft 365 Copilotia Copilot Studiossa                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Tieto**       | Web, SharePoint, Microsoft Teams -keskustelut, Outlook-sähköpostit, Copilot-liittimet     | Web-haku (Bingin kautta), SharePoint, Dataverse, Dynamics 365, Copilot-liittimet  |
| **Työkalut**       | Koodin tulkki, kuvan luonti     | 1400+ Power Platform -liittimet, mukautetut liittimet, kehotteet, tietokoneen käyttö, REST API, Model Context Protocol   |
| **Aloituskehotteet**         | Määritä kehotteet käyttäjille nopean aloituksen mahdollistamiseksi   | Määritä kehotteet käyttäjille nopean aloituksen mahdollistamiseksi  |
| **Kanava**           | Agentti julkaistaan vain Microsoft 365 Copilotille     | Agentti julkaistaan Microsoft 365 Copilotille ja Microsoft Teamsille      |
| **Jakamisoikeudet**         | Käyttäjät ovat vain katselijoita    | Käyttäjät voivat olla muokkaajia tai katselijoita   |

Microsoft Copilot Studiossa rakennetuille deklaratiivisille agenteille on tarjolla enemmän ominaisuuksia, joista opimme seuraavaksi.

!!! tip
    - Lisätietoja Copilot Studio agent builderista löydät [Copilot Developer Camp: Lab MAB1 - Rakenna ensimmäinen agenttisi](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Deklaratiivisen agentin laajentamiseen Copilot Studio agent builderin ulkopuolella Microsoft 365 Copilotille löydät lisätietoja [Copilot Developer Camp: Lab MAB1 - Rakenna ensimmäinen agenttisi](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Microsoft 365 Copilotin laajentaminen Copilot Studiossa rakennetuilla deklaratiivisilla agenteilla

Laajennetaan oppimaamme ominaisuusvertailutaulukosta.

#### Mukauttaminen

- **Yksityiskohtaiset ohjeet**: Voit antaa yksityiskohtaisia ohjeita ja määrittää agentin tarkoituksen ja käyttäytymisen tarkasti.
  - Tämä sisältää työkalujen käyttöönoton yksinkertaisesti luonnollisen kielen avulla.

- **Yrityksen tiedon käyttö**: Mahdollistaa pääsyn yrityksen tietoon, joka kunnioittaa käyttäjän käyttöoikeuksia.
  - SharePoint-integraatio
  - Dataverse-integraatio
  - Dynamics 365 -integraatio
  - Microsoft 365 Copilot -liittimet, jotka organisaation ylläpitäjä on ottanut käyttöön

   ![Mukauttaminen](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.fi.png)

#### Edistyneet ominaisuudet

- **Integraatio ulkoisiin palveluihin**: Mahdollistaa valinnan 1400+ Power Platform -liittimen joukosta, jotka integroituvat ulkoisiin palveluihin ja tarjoavat monimutkaisempia ja tehokkaampia toimintoja.
  - Esimerkkejä ovat [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) ja paljon muuta
  - Vaihtoehtoisesti voit hyödyntää Model Context Protocol -palvelimia ja REST API:ita suoraan deklaratiivisessa agentissasi

- **AI-kehotteet**: Käytä kehotetta analysoimaan ja muuntamaan tekstiä, dokumentteja, kuvia ja dataa luonnollisen kielen ja AI-päätöksenteon avulla.
  - Valitse keskustelumalli, valitse Basic (Oletus), Standard, Premium
  - Mahdollisuus tuoda oma Azure AI Foundry -malli kehotteen pohjaksi

- **Lisää käyttöönoton konfigurointivaihtoehtoja**: Valitse kanavat ja määritä käyttäjäoikeudet.
  - Julkaise Microsoft Teamsiin, joka on käyttäjille tuttu käyttöliittymä nopeampaa käyttöönottoa varten
  - Muokkausoikeudet voidaan jakaa, jotta agentin omistajaan ei kohdistu yksittäistä riippuvuutta

   ![Mukauttaminen](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.fi.png)

Yhteenvetona voidaan todeta, että deklaratiiviset agentit Microsoft Copilot Studiossa mahdollistavat Microsoft 365 Copilotin mukauttamisen liiketoiminnan tarpeisiin integroimalla yrityksen tietojärjestelmiä, työkaluja ulkoisiin palveluihin tai AI GPT -malleihin.

## 🧪 Lab 03: Rakenna deklaratiivinen agentti Microsoft Copilot Studiossa Microsoft 365 Copilotille

Seuraavaksi opimme, kuinka rakennetaan deklaratiivinen agentti "Business-to-Employee" -käyttötapaukseen, joka toimii **IT-tukipalveluagenttina**.

- [3.1 Luo deklaratiivinen agentti](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Luo ja lisää kehotus deklaratiiviselle agentillesi](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Päivitä ohjeet ja testaa deklaratiivinen agenttisi](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Julkaise deklaratiivinen agenttisi Microsoft 365 Copilotille ja Microsoft Teamsille](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Tämä labra esittelee kehotteen lisäämisen työkaluna. Seuraavat oppitunnit käsittelevät tietolähteiden lisäämistä ja muiden saatavilla olevien työkalujen lisäämistä. Pidetään oppiminen yksinkertaisena 😊

### 👩🏻‍💼 Ymmärtäminen Business-to-Employee (B2E)

Business-to-Employee (B2E) viittaa vuorovaikutuksiin ja palveluihin, joita yritys tarjoaa suoraan työntekijöilleen. Agentin kontekstissa tämä tarkoittaa Copilot Studion edistyneiden ominaisuuksien käyttämistä työntekijöiden työskentelykokemuksen tukemiseksi ja parantamiseksi organisaation sisällä.

### ✨ Käyttötapaus

**Minä työntekijänä**

**Haluan** saada nopeaa ja tarkkaa apua IT-tukipalveluagentilta ongelmiin, kuten laiteongelmiin, verkon vianmääritykseen, tulostimen asennukseen

**Jotta voin** pysyä tuottavana ja ratkaista tekniset ongelmat ilman viivästyksiä

Aloitetaan!

### Esivaatimukset

- Tekijöillä tulee olla oikeudet luoda ja käyttää Copilot Studio -ympäristöä.

!!! note "Lisensointihuomio"
    Tämä labra esittelee kehotteen lisäämisen työkaluna. Seuraavat oppitunnit käsittelevät tietolähteiden lisäämistä ja muiden saatavilla olevien työkalujen lisäämistä. Pidetään oppiminen yksinkertaisena 😊
  
    Sinun ei tarvitse Microsoft 365 Copilot -käyttäjälisenssiä julkaistaksesi deklaratiivisen agentin Copilot Studiossa Microsoft 365 Copilotille. Kuitenkin **käyttäjät**, jotka käyttävät _julkaistua deklaratiivista agenttia_ Microsoft 365 Copilotissa, tarvitsevat Microsoft 365 Copilot -käyttäjälisenssin.

### 3.1 Luo deklaratiivinen agentti

!!! warning "Copilotin kysymykset voivat vaihdella eri istunnoissa"

    Copilotin keskusteluluomiskokemus voi vaihdella, ja tarjotut ohjeet voivat olla hieman erilaisia eri kerroilla.

1. Siirry osoitteeseen [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) ja kirjaudu sisään tunnuksillasi. Varmista, että vaihdat ympäristöön, jota käytät näissä labroissa.

1. Valitse **Agents** valikosta ja valitse **Copilot for Microsoft 365**.

       ![Copilot for Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.fi.png)

1. Seuraavaksi luomme deklaratiivisen agentin valitsemalla **+ Add** agent.

       ![Add Agent](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.fi.png)

1. Näemme keskusteluluomiskokemuksen latautuvan, jossa voimme keskustella luonnollisella kielellä Copilotin kanssa ja kuvata deklaratiivisen agentin, jonka haluamme rakentaa, sekä käyttää tarjottuja kysymyksiä ohjeena.

       Kirjoitetaan yksityiskohtainen kuvaus, joka sisältää seuraavat,  
       - agentin tehtävä  
       - millaisia kyselyitä se voi käsitellä  
       - sen vastausten muoto  
       - agentin tavoite  
    
       ```text
       Olet erittäin taitava ja kokenut IT-ammattilainen, joka on erikoistunut laajaan valikoimaan tietokonejärjestelmiä, verkkotekniikkaa ja kyberturvallisuutta. Osaat diagnosoida ja ratkaista teknisiä ongelmia, selittää ratkaisuja selkeästi ja ymmärrettävästi kaikentasoisille käyttäjille sekä antaa ohjeita parhaista käytännöistä. Sinun tulisi olla ytimekäs ja informatiivinen, käyttää vaiheittaisia ohjeita ja tarvittaessa luetelmakohtia. Tavoitteesi on auttaa käyttäjää ymmärtämään ongelma ja ratkaisemaan sen tehokkaasti.
       ```
    
       ![Luo kehotus](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.fi.png)

1. Kun kehotus on lähetetty, oikealla puolella näkyy merkittävä päivitys, jossa on agentin yksityiskohdat ja ohjeet, kuten kehotuksessa määriteltiin. Seuraavaksi sinua pyydetään vahvistamaan agentin nimi, ja Copilot ehdottaa nimeä.

       Kirjoita joko `yes` hyväksyäksesi ehdotetun nimen tai kirjoita eri nimi, kuten seuraava,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Ohjeet päivitetty](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.fi.png)

    !!! warning "Muistutus: Copilotin kysymykset voivat vaihdella eri istunnoissa"

        Copilotin keskusteluluomiskokemus voi vaihdella, ja tarjotut kysymykset voivat olla hieman erilaisia eri kerroilla.

1. Agentin nimi on nyt päivitetty, kuten näkyy oikealla puolella. Meitä pyydetään nyt tarkentamaan agentin ohjeita. Copilotin ehdotukset kuulostavat hyvältä, joten pyydämme sitä käyttämään omia ehdotuksiaan. Kirjoitamme seuraavan,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Nimi päivitetty](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.fi.png)

1. Seuraavaksi meiltä kysytään, haluammeko lisätä julkisesti saatavilla olevia verkkosivustoja tai tietoa. Vastaamme `No`, koska lisäämme vain kehotteen deklaratiiviselle agentille tässä labrassa. Tulevat labrat käsittelevät tietolähteitä.

      ![Ei verkkosivustoja tai tietolähteitä lisätty](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.fi.png)

1. Näemme Copilotin vastauksen, että olemme nyt valmiita määrittämään agenttimme Copilotin keskusteluluomiskokemuksen avulla. Tarkennetaan sitä kuitenkin lisäämällä, että sen tulisi olla ytimekäs ja informatiivinen luetelmakohtien avulla, käyttää empatiaa viestinnässä ja pyytää palautetta ratkaisujen antamisen jälkeen.

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

      ![Päivitä agentin ohjeet](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.fi.png)

1. Copilot vahvistaa, että ohjeet on päivitetty. Klikkaa **Create** luodaksesi deklaratiivisen agentin Microsoft 365 Copilotille.

      ![Luo agentti](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.fi.png)

    !!! warning "Muistutus: Copilotin kysymykset voivat vaihdella eri istunnoissa"

        Copilotin keskusteluluomiskokemus voi vaihdella, ja tarjotut kysymykset voivat olla hieman erilaisia eri kerroilla.

1. Kun agentti on luotu, näet agentin yksityiskohdat, jotka sisältävät kuvauksen ja ohjeet, jotka määriteltiin Copilotin keskusteluluomiskokemuksen aikana.
![Agentin tiedot](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.fi.png)

Vieritä paneelia alaspäin, niin näet myös mahdollisuudet lisätä tietoa, ottaa käyttöön verkkohaku (Bingin kautta), aloituskehotteet ja julkaisun tiedot Microsoft 365 Copilotin deklaratiiviselle agentille. Aloituskehotteet näkyvät myös testipaneelissa oikealla puolella. Käyttäjät voivat valita näitä aloituskehotteita aloittaakseen vuorovaikutuksen agentin kanssa.

![Ehdotetut kehotteet](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.fi.png)

1. Agentin Tiedot-osiossa voit myös muuttaa agentin kuvaketta. Valitse **Muokkaa**.

![Muokkaa tietoja](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.fi.png)

Täällä voit muuttaa kuvaketta ja taustaväriä. Valitse **Tallenna** ja valitse sitten **Tallenna** uudelleen päivittääksesi agentin tiedot.

![Vaihda kuvake](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.fi.png)

1. Testataan nopeasti luomaamme agenttia. Valitse yksi **Aloituskehotteista** testipaneelissa oikealla puolella.

![Testaa aloituskehotetta](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.fi.png)

1. Agenttimme vastaa. Huomaa, kuinka se noudatti ohjeita jakamalla vastauksen selkeisiin osiin ja käytti empatiaa vastauksessaan.

Jos vierität viestin loppuun, huomaat, että se myös pyytää palautetta ratkaisun antamisen jälkeen, kuten ohjeistettu.

![Vastaus testauksesta](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.fi.png)

Muutamassa minuutissa olet lisännyt deklaratiivisen agentin Microsoft 365 Copilotille Copilot Studiossa 🙌🏻

Seuraavaksi opimme, kuinka lisätä työkalu agentille ja luomme kehotteen.

### 3.2 Luo ja lisää kehotus deklaratiiviselle agentille

1. Vieritä alas **Työkalut**-osioon ja valitse **+ Lisää työkalu**

![Lisää työkalu](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.fi.png)

1. Työkalujen modaalinäkymä avautuu, ja Power Platform -liittimien lista näytetään. Kehotuksen lisäämiseksi valitse **+ Uusi työkalu**.

![Uusi työkalu](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.fi.png)

1. Näkyviin tulee lista muita työkaluja - Kehotus, Mukautettu liitin, REST API ja Model Context Protocol. Jos organisaatiosi täyttää [Tietokoneen käytön vaatimukset](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), tämä näkyy myös listassa. Valitse **Kehotus**.

![Valitse kehotus](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.fi.png)

1. Anna kehotukselle nimi. Nimeämme kehotuksemme `IT-asiantuntija`.

![Anna nimi](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.fi.png)

1. Valitse **nuolipainike** **Mallin** vieressä nähdäksesi eri keskustelumallit, joista voit valita. Oletuksena **Basic GPT-4.1 mini** -malli on valittuna, ja sinulla on myös mahdollisuus käyttää omaa mallia Azure AI Foundry Models -palvelun kautta. Pidämme valitun oletusmallin.

![Vaihda malli](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.fi.png)

1. Seuraavaksi annamme kehotuksellemme ohjeet. Voit valita kolmesta menetelmästä:

   - Käytä Copilotia luomaan ohjeet kuvauksesi perusteella siitä, mitä haluat kehotuksen tekevän.
   - Käytä valmista mallipohjaa kehotuskirjastosta kehotuksen luomiseen.
   - Syötä ohjeet manuaalisesti.

1. Kokeillaan ensin Copilotin käyttöä ohjeiden luomiseen syötetyn kuvauksen perusteella. Syötä seuraava Copilot-kenttään ja lähetä.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Aloita Copilotilla](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.fi.png)

1. Copilot alkaa luoda kehotusta meille.

![Copilot luonnostelee kehotuksia](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.fi.png)

1. Copilotin luomat luonnosohjeet tulevat näkyviin.

![Copilotin luomat luonnosohjeet](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.fi.png)

1. Vieritä ohjeiden loppuun, ja näet käyttäjän syöttöparametrin, jonka Copilot on jo määritellyt. Sinulla on mahdollisuus:
   - Säilyttää luodut luonnosohjeet.
   - Päivittää luonnosohjeet Copilotin avulla.
   - Poistaa luonnosohjeet.

Poista luonnosohjeet valitsemalla **roskakori**-ikoni, ja kokeilemme seuraavaksi kehotuskirjastoa.

![Kehotusohjeet](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.fi.png)

1. Valitse **kehotusmalli**-linkki.

![Valitse kehotusmalli](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.fi.png)

1. Näet listan kehotusmalleja, joista voit valita. Nämä ovat [Power Platform Kehotuskirjastosta](https://aka.ms/power-prompts).

![Kehotuskirjasto](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.fi.png)

1. Etsi `IT-asiantuntija`-kehotus ja valitse se.

![Valitse IT-asiantuntija-kehotus](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.fi.png)

1. Kehotus lisätään ohjeiksi, ja syöttöparametri määritellään kehotusmallin mukaan. Samalla tavalla kuin annoimme ohjeet agentille keskusteluluomiskokemuksen aikana Copilotin kanssa, tämä kehotusmalli määrittelee:
   - tehtävän,
   - millaisia kyselyitä se voi käsitellä,
   - ja vastauksen muodon sekä kehotuksen tavoitteen.

![Kehotusohjeet](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.fi.png)

1. Poista ohjeet, ja kokeilemme seuraavaksi ohjeiden syöttämistä manuaalisesti. Käytämme [IT-asiantuntija-kehotusta](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) [Power Platform Kehotuskirjastosta](https://aka.ms/power-prompts). Kopioi ja liitä kehotus.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Kehotusohjeet](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.fi.png)

1. Seuraavaksi voimme määritellä kehotuksemme käyttäjän syöttöparametrit. Nämä voivat olla tekstiä ja kuvia sekä esimerkkitietoja testaukseen. Kehotuksen voi myös yhdistää Dataverse-taulukoiden tietoon. Tässä harjoituksessa meillä on vain yksi käyttäjän syöttö määriteltävänä, joka on ongelman syöttö. Tämä on tällä hetkellä paikkamerkki kehotuksessamme nimellä `[Ongelma]`. Määritämme nyt tämän syötön joko syöttämällä `/`-merkin tai valitsemalla **+Lisää sisältöä** ja sitten **Teksti**.

![Tekstisyöttö](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.fi.png)

1. Voimme nyt antaa nimen syöttöparametrillemme ja esimerkkitiedot.

   Syötä seuraava nimi:

    ```text
    problem input
    ```

   Syötä seuraavat esimerkkitiedot:

    ```text
    My laptop gets an error with a blue screen
    ```

   Valitse sitten **Sulje**.

![Määritä ongelman syöttö](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.fi.png)

1. Ongelman syöttöparametri lisätään nyt ohjeisiin määritellyillä esimerkkitiedoilla. Voimme nyt testata kehotustamme!

![Ongelman syöttö lisätty](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.fi.png)

1. Valitse **Testaa** testataksesi kehotusta.

![Testaa ohjeet](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.fi.png)

1. Vastaus näytetään. Huomaa, kuinka vastaus sisältää otsikoita ja luettelomerkkejä ohjeiden mukaisesti. Vieritä alas ja tarkista mallivastauksen loppuosa.

![Mallivastaus](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.fi.png)

1. Ennen kuin tallennamme kehotuksemme, tutustutaan kehotuksen asetuksiin, joita voidaan muokata. Valitse **kolmipiste-ikoni (...).**

![Kehotuksen asetukset](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.fi.png)

1. Täällä näet kolme asetusta, joita voidaan muokata:

   - **Lämpötila**: Matala lämpötila tuottaa ennustettavia tuloksia, kun taas korkea lämpötila mahdollistaa monipuolisemmat tai luovemmat vastaukset.
   - **Tietueiden haku**: Määritä haettavien tietueiden määrä tietolähteistäsi.
   - **Sisällytä linkit vastaukseen**: Kun valittuna, vastaus sisältää linkkiviittaukset haettuihin tietueisiin.

   Valitse **X**-ikoni poistuaksesi asetuksista.

![Määritä asetukset](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.fi.png)

1. Valitse **Tallenna** tallentaaksesi kehotuksen.

![Tallenna kehotus](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.fi.png)

1. Valitse seuraavaksi **Lisää agenttiin** lisätäksesi kehotuksen deklaratiiviselle agentillemme.

![Kehotusohjeet](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.fi.png)

1. Kehotus näkyy nyt Työkalut-osiossa 🙌🏻

![Kehotus lisätty](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.fi.png)

Seuraavaksi päivitämme ohjeemme kehotuksen käyttämiseksi ja testaamme deklaratiivista agenttiamme.

### 3.3 Päivitä ohjeet ja testaa deklaratiivista agenttiasi

1. Vieritä ylös **Tiedot**-osioon ja valitse **Muokkaa**. Tämä mahdollistaa kenttien muokkaamisen.

![Valitse Muokkaa](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.fi.png)

1. Voimme nyt päivittää ohjeemme kutsumaan kehotuksemme viittaamalla kehotuksen nimeen. Poista ohjeet, kopioi ja liitä seuraava.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Huomaa, kuinka viimeinen lause ohjeistaa agenttia käyttämään käyttäjän kysymystä ongelman syöttöparametrin arvona. Agentti käyttää kysymystä kehotuksen ongelman syöttönä. Valitse seuraavaksi **Tallenna**.

![Päivitä ohjeet kehotuksen kutsumiseksi](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.fi.png)

1. Olemme nyt valmiita testaamaan päivitettyjä ohjeitamme deklaratiiviselle agentille. Valitse **päivitysikoni** testipaneelissa.

![Valitse päivitysikoni](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.fi.png)

1. Syötä seuraava kehotus ja lähetä.

```text
Voitko auttaa minua, kannettavassani on sininen ruutu
```

![Suorita testi](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.fi.png)

1. Agentti kutsuu kehotuksen ja vastaa.

![Kehotusohjeet](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.fi.png)

Julkaistaan nyt deklaratiivinen agenttimme 😃

### 3.4 Julkaise deklaratiivinen agenttisi Microsoft 365 Copilotille ja Microsoft Teamsille

1. Valitse **Julkaise**.

![Julkaise agentti](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.fi.png)

1. Näkyviin tulee modaalinäkymä, joka näyttää kanavat ja julkaisun tiedot, joita voidaan päivittää.

   - Kanavat: Agentti julkaistaan Microsoft 365 Copilotille ja Microsoft Teamsille.
   - Agenttisovelluksen tiedot: Nämä tiedot näytetään, kun käyttäjä lisää agentin Microsoft 365 Copilotille tai Microsoft Teamsille. Näitä kenttiä voidaan päivittää tarpeen mukaan.

![Agenttisovelluksen tiedot](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.fi.png)

1. Esimerkiksi voit päivittää **Lyhyt kuvaus**, **Pitkä kuvaus**, **Kehittäjän nimi** omalla nimelläsi.

!!! tip
Jos et näe kaikkia kenttiä selaimessasi, kokeile zoomata ulos, esim. 75%.

Valitse **Julkaise**. Copilot Studio alkaa julkaista agenttia.

![Agentin julkaisu](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.fi.png)

1. Kun julkaisu on valmis, näemme agentin [Saatavuusvaihtoehdot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez).

| Saatavuusvaihtoehto | Kuvaus |
| ---------- | ---------- |
| Jaa linkki | Kopioi linkki ja jaa se käyttäjien kanssa, jotta he voivat avata agentin Microsoft 365 Copilotissa |
| Näytä tiimiläisilleni ja jaetuille käyttäjille | Mahdollistaa agentin jakamisen muille, jotta he voivat osallistua agentin luomiseen, tai tietoturvaryhmille, jotta he voivat käyttää agenttia Microsoft 365 Chatissa tai Microsoft Teamsissa. |
| Näytä kaikille organisaatiossani | Lähetä tenantin ylläpitäjälle lisättäväksi organisaation katalogiin, jotta kaikki tenantin käyttäjät voivat lisätä agentin. Agentti näkyy kohdassa Organisaation luomat Microsoft 365 Copilotissa ja Microsoft Teamsissa. |
| Lataa .zip-tiedostona | Lataa zip-tiedostona ladattavaksi mukautettuna sovelluksena Microsoft Teamsissa. |

![Saatavuusvaihtoehdot](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.fi.png)

1. Katsotaan agentin jakamista. Valitse **Näytä tiimiläisilleni ja jaetuille käyttäjille**. Näkyviin tulee paneeli, jossa voit etsiä käyttäjiä, joille haluat jakaa agentin, joko syöttämällä heidän nimensä, sähköpostinsa tai tietoturvaryhmänsä. Voit tarkistaa tämän listan milloin tahansa muokataksesi, kenellä on pääsy agenttiin.

   Paneelissa on myös kaksi valintaruutua:
   - _Lähetä sähköpostikutsu uusille käyttäjille_ - uudet käyttäjät saavat sähköpostikutsun.
   - _Näkyvä Power Platformilla luotu_ - agentti tulee saataville Teams-sovelluskaupan Power Platformilla luotu -osiossa.
Lisätietoja saat kohdasta [Yhdistä ja määritä agentti Teamsille ja Microsoft 365:lle](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Valitse **Peruuta** tai **X**-kuvake poistuaksesi paneelista.

![Jaa agentti](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.fi.png)

1. Valitse **Kopioi** ja liitä linkki uuteen selaimen välilehteen.

![Kopioi linkki](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.fi.png)

1. Microsoft 365 Copilot latautuu ja modaalinen ikkuna avautuu, jossa näkyvät agenttisovelluksen tiedot. Huomaa, kuinka kehittäjän nimi, lyhyt kuvaus ja pitkä kuvaus näkyvät. Nämä ovat julkaisutietoja, jotka päivitettiin aiemmassa vaiheessa.

Valitse **Lisää**.

![Saatavuusvaihtoehdot](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.fi.png)

1. Seuraavaksi latautuu deklaratiivinen agenttimme. Näemme aloituskehotteet, joista voi valita, mikä mahdollistaa käyttäjien nopean avun saamisen.

Valitse yksi aloituskehotteista. Minun aloituskehotteissani valitsen **Ohjelmiston asennusapu** -kehotteen, joka automaattisesti täyttää Copilot-viestikentän. Lähetä kysymys Copilotille.

![Valitse aloituskehotus](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.fi.png)

1. Valitse **Salli aina** antaaksesi deklaratiiviselle agentillesi luvan käyttää IT-asiantuntijan kehotusta.

![Valitse salli aina](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.fi.png)

1. Agentti kutsuu sitten **IT-asiantuntija**-kehotteemme, ja näemme mallivastauksen, joka palautetaan viestinä deklaratiivisessa agentissamme.

![Vastaus](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.fi.png)

Vieritä alas nähdäksesi vastauksen kaikki tiedot.

![Vastaus](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.fi.png)

1. Mutta _kuinka tiedämme_, että deklaratiivinen agentti kutsui kehotteen? 👀 Tässä vinkki!

!!! tip
    Voit testata ja debugata agentteja Microsoft 365 Copilotissa ottamalla käyttöön [kehittäjätila](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Syötä seuraava viesti Copilot-kenttään ja lähetä.

    ```text
    -developer on
    ```

Vahvistusviesti ilmestyy ilmoittamaan, että kehittäjätila on nyt käytössä.

![Kehittäjätila käytössä](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.fi.png)

1. Lähetä seuraava kysymys kutsuaksesi kehotteen.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Syötä kysymys](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.fi.png)

1. Näemme mallivastauksen **IT-asiantuntija**-kehotteestamme, joka jälleen palautetaan viestinä. Vieritä viestin loppuun, ja kortti debug-tiedoilla näkyy.

Laajenna **Agentin debug-tiedot** valitsemalla se.

![Agentin debug-tiedot](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.fi.png)

1. Täältä löydät tietoa agentin metadatasta, joka tapahtui ajon aikana.

![Agentin debug-tiedot laajennettuna](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.fi.png)

Tässä tapauksessa keskitymme _Toiminnot_-osioon.

- **Vastaavat toiminnot** korostavat sovelluksen haun aikana löydettyjen toimintojen nykytilaa.
- **Valitut toiminnot** korostavat toimintojen nykytilaa, jotka valittiin suoritettavaksi sovelluksen päätöksentekoprosessin perusteella.

![Agentin debug-tiedot laajennettuna](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.fi.png)

Tässä näemme, että agentin orkestroija valitsi kutsua IT-asiantuntija-kehotteen deklaratiivisen agenttimme ohjeiden mukaisesti. Tämä on tarkemmin esitetty _Suoritetut toiminnot_-osiossa, joka myös kertoo, että kehotteen kutsuminen onnistui.

![Tarkista agentin debug-tiedot](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.fi.png)

1. Poista kehittäjätila käytöstä syöttämällä seuraava viesti Copilot-kenttään ja lähetä.

    ```text
    -developer off
    ```

Vahvistusviesti ilmestyy ilmoittamaan, että kehittäjätila on poistettu käytöstä. Hienoa, nyt tiedät, kuinka tarkistaa, kutsuiko deklaratiivinen agenttisi Microsoft 365 Copilotissa kehotteesi 🌞

![Kehittäjätila pois käytöstä](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.fi.png)

1. Testataan nyt agenttiamme Microsoft Teamsissa. Siirry **Sovellukset**-osioon vasemmanpuoleisesta valikosta ja valitse **Teams** _Sovellukset_-osiossa.

![Valitse Teams sovelluksissa](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.fi.png)

1. Microsoft Teams latautuu uuteen selaimen välilehteen, ja sinulle esitetään Microsoft 365 Copilotin käyttöehdot. Valitse **Hyväksy**.

![Valitse Hyväksy](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.fi.png)

1. Microsoft 365 Copilot latautuu oletuksena, ja oikeanpuoleisessa paneelissa näkyvät kaikki käytettävissä olevat agenttisi, mukaan lukien **Contoso Tech Support Pro** -deklaratiivinen agentti.

![Microsoft 365 Copilot Teamsissa](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.fi.png)

1. Valitse **kolmipistekuvake (...)** vasemmanpuoleisesta valikosta. Etsi **Contoso Tech Support Pro** hakukentästä tai jos näet agentin, valitse se.

Voit myös napsauttaa hiiren oikealla painikkeella ja **Kiinnittää** agentin nopeaa käyttöä varten vasemmanpuoleiseen valikkoon Microsoft Teamsissa.

![Valitse ja kiinnitä agentti](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.fi.png)

1. Näemme sitten agenttimme latautuvan. Testataan seuraavaksi agenttiamme. Syötä seuraava kehotus ja lähetä.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Kiinnitä agentti](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.fi.png)

1. Kehotteen mallivastaus näytetään.

![Vastaus Teamsissa](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.fi.png)

Muutamassa minuutissa olet oppinut, kuinka julkaista deklaratiivinen agenttisi ja testata sitä Microsoft 365 Copilotissa ja Microsoft Teamsissa 😊

## ✅ Tehtävä suoritettu

Onnittelut! 👏🏻 Olet rakentanut deklaratiivisen agentin Copilot Studiossa, jossa lisäsit kehotteen, ohjeistit agenttia käyttämään kehotetta sekä opit testaamaan ja julkaisemaan agenttisi Microsoft 365 Copilotissa ja Microsoft Teamsissa.

Agenttisi on nyt valmiina auttamaan, ratkaisemaan ongelmia ja palvelemaan sisäisiä käyttäjiä tarpeen mukaan.

Tämä on **Lab 03 - Rakenna deklaratiivinen agentti Microsoft Copilot Studiossa Microsoft 365 Copilotille** loppu. Valitse alla oleva linkki siirtyäksesi seuraavaan oppituntiin.

⏭️ [Siirry oppituntiin **Uuden ratkaisun luominen**](../04-creating-a-solution/README.md)

Ensi kertaan, pysy terävänä. Yritystyön tulevaisuus kulkee agenttien kautta—ja nyt tiedät, kuinka rakentaa sellaisen.

## 📚 Taktiset resurssit

🔗 [Rakenna deklaratiivinen agentti Microsoft Copilot Studiossa Microsoft 365 Copilotille](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Lisää kehotteita](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Jaa agentteja muiden käyttäjien kanssa](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Rakenna kehotteita agentillesi](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.