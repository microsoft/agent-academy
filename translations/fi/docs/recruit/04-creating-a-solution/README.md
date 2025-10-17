<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0c51aabca81d6256990caf4c015e6195",
  "translation_date": "2025-10-17T05:47:28+00:00",
  "source_file": "docs/recruit/04-creating-a-solution/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 04: Ratkaisun luominen agentillesi

## 🕵️‍♂️ KÄYTTÖKOODI: `OPERATION CTRL-ALT-PACKAGE`

> **⏱️ Operaatioaika:** `~45 minuuttia`

🎥 **Katso opastusvideo**

[![Ratkaisun luominen videon pikkukuva](../../../../../translated_images/video-thumbnail.3d68c6292e459541326e2cadf916f09488731b3cfbcd01de909c4bca9b53b49a.fi.jpg)](https://www.youtube.com/watch?v=1iATbkgfcpU "Katso opastus YouTubessa")

## 🎯 Tehtävän kuvaus

Agenttien luoja, tervetuloa seuraavaan taktiseen operaatioon. Tässä tehtävässä opit kokoamaan ratkaisun – virallisen käyttöönottoalustan IT-tukipalveluagentillesi, joka on rakennettu Microsoft Copilot Studiossa. Ajattele tätä digitaalisena salkkuna, joka sisältää agenttisi ja sen artefaktit.

Jokainen agentti tarvitsee hyvin rakennetun kodin. Juuri sitä Power Platform -ratkaisu tarjoaa – järjestystä, siirrettävyyttä ja valmiutta tuotantoon.

Aloitetaan pakkaaminen.

## 🔎 Tavoitteet

Tässä tehtävässä opit:

1. Ymmärtämään, mitä Power Platform -ratkaisut ovat ja mikä niiden rooli on agenttien kehityksessä
1. Oppimaan ratkaisujen käytön hyödyt agenttien organisoinnissa ja käyttöönotossa
1. Tutustumaan ratkaisujen julkaisijoihin ja niiden merkitykseen komponenttien hallinnassa
1. Ymmärtämään Power Platform -ratkaisun elinkaarta kehityksestä tuotantoon
1. Luomaan oman ratkaisun julkaisijan ja mukautetun ratkaisun IT-tukipalveluagentillesi

## 🕵🏻‍♀️ Ratkaisu? Mikä se on?

Microsoft Power Platformissa ratkaisut ovat kuin säiliöitä tai paketteja, jotka sisältävät kaikki sovellustesi tai agenttiesi osat – kuten taulukot, lomakkeet, työnkulut ja mukautetut logiikat. Ratkaisut ovat olennaisia sovellusten elinkaaren hallinnassa (ALM), sillä ne mahdollistavat sovellusten ja agenttien hallinnan ideasta kehitykseen, testaukseen, käyttöönottoon ja päivityksiin.

Copilot Studiossa jokainen luomasi agentti tallennetaan Power Platform -ratkaisuun. Oletuksena agentit luodaan oletusratkaisuun, ellei luoda uutta mukautettua ratkaisua agentin luomista varten. Tätä opimme 🤓 tässä oppitunnissa ja käytännön harjoituksessa.

Ratkaisuja on perinteisesti luotu **Power Apps -kehittäjäportaalissa** – verkkopohjaisessa käyttöliittymässä, jossa voit rakentaa ja mukauttaa sovelluksia, Dataverse-tietokantoja, työnkulkuja, tutkia tekoälykomponentteja ja paljon muuta.

   ![Ratkaisut](../../../../../translated_images/4.0_01_Solutions.4ab938830cdfc6d1b33fc88a172e2043ab713046e174855f866dc072bbeff4dd.fi.png)

Copilot Studiossa on nyt **Solution Explorer**, jossa voit hallita ratkaisuja suoraan. Sinun ei enää tarvitse siirtyä Power Apps -kehittäjäportaaliin hallitaksesi ratkaisuja, vaan voit tehdä sen suoraan Copilot Studiossa 🪄

Tämä tarkoittaa, että voit tehdä tavallisia ratkaisuihin liittyviä tehtäviä:

- **Luo ratkaisu** – mukautetut ratkaisut mahdollistavat agenttien viemisen ja tuomisen ympäristöjen välillä.
- **Aseta ensisijainen ratkaisu** – valitse ratkaisu, johon agentit, sovellukset jne. luodaan oletuksena.
- **Lisää tai poista komponentteja** – agenttisi voi viitata muihin komponentteihin, kuten ympäristömuuttujiin tai pilvityönkulkuihin. Siksi nämä komponentit on sisällytettävä ratkaisuun.
- **Vie ratkaisuja** – siirrä ratkaisuja toiseen kohdeympäristöön.
- **Tuo ratkaisuja** – tuo muualla luotuja ratkaisuja, mukaan lukien ratkaisujen päivittäminen tai päivittäminen.
- **Luo ja hallitse ratkaisuputkia** – automatisoi ratkaisujen käyttöönotto ympäristöjen välillä.
- **Git-integraatio** – mahdollistaa kehittäjien yhdistää ratkaisut Git-repositorioihin versionhallintaa, yhteistyötä ja ALM:ää varten. Tarkoitettu käytettäväksi vain kehitysympäristöissä.

   ![Ratkaisut](../../../../../translated_images/4.0_02_CopilotStudioSolutionExplorer.042184a894b65fc5b73c91579d9b19a86cd7ca4341c1553c972270dd15852677.fi.png)

Ratkaisuja on kahdenlaisia:

- **Hallinnoimattomat ratkaisut** – käytetään kehityksen aikana. Voit vapaasti muokata ja mukauttaa tarpeen mukaan.
- **Hallinnoidut ratkaisut** – käytetään, kun sovellus on valmis testaukseen tai tuotantoon. Nämä ovat lukittuja estämään tahattomat muutokset.

## 🤔 Miksi _pitäisi_ käyttää ratkaisua agentilleni?

Ajattele ratkaisuja _työkalupakkina_. Kun sinun täytyy korjata tai rakentaa jotain (agentti) eri paikassa (ympäristössä), keräät kaikki tarvittavat työkalut (komponentit) ja laitat ne työkalupakkiin (ratkaisu). Voit sitten kuljettaa tämän työkalupakin uuteen paikkaan (ympäristöön) ja käyttää työkaluja (komponentteja) työsi suorittamiseen tai lisätä uusia työkaluja (komponentteja) mukauttaaksesi agenttiasi tai projektiasi.

!!! quote "Elaiza, ystävällinen pilviadvokaattisi, täällä 🙋🏻‍♀️ jakamassa muutaman sanan:"
    Meillä on sanonta Uudessa-Seelannissa: "Ole siisti kiwi!" joka kehottaa Uuden-Seelannin asukkaita 🥝 ottamaan vastuuta ympäristöstään hävittämällä roskat asianmukaisesti ja pitämällä julkiset tilat siisteinä. Voimme käyttää samaa ajatusta agenteille pitämällä kaikki agenttiin liittyvä järjestyksessä ja siirrettävänä, mikä auttaa ylläpitämään siistiä ympäristöä.

On hyvä käytäntö luoda agentti omassa ratkaisussa lähdeympäristössä (kehittäjäympäristössä). Tässä syitä, miksi ratkaisut ovat arvokkaita:

🧩 **Järjestelmällinen kehitys**

- Pidät agenttisi erillään oletusratkaisusta, joka sisältää kaiken ympäristössä. Kaikki agenttisi komponentit ovat yhdessä paikassa 🎯

- Kaikki, mitä tarvitset agentillesi, on ratkaisussa, mikä tekee sen viemisestä ja tuomisesta kohdeympäristöön helpompaa 👉🏻 tämä on terveellinen ALM-tapa.

🧩 **Turvallinen käyttöönotto**

- Voit viedä sovelluksesi tai agenttisi hallinnoituna ratkaisuna ja ottaa sen käyttöön muissa kohdeympäristöissä (kuten testauksessa tai tuotannossa) ilman riskiä tahattomista muokkauksista.

🧩 **Versionhallinta**

- Voit luoda korjauspaketteja (kohdennettuja korjauksia), päivityksiä (laajempi muutos) tai päivityksiä (ratkaisun korvaaminen – yleensä suuria muutoksia ja uusien ominaisuuksien lisäämistä).

- Auttaa toteuttamaan muutoksia hallitusti.

🧩 **Riippuvuuksien hallinta**

- Ratkaisut seuraavat, mitkä osat ovat riippuvaisia toisistaan. Tämä estää sinua rikkomasta asioita, kun teet muutoksia.

🧩 **Tiimityö**

- Kehittäjät ja tekijät voivat työskennellä yhdessä hallinnoimattomien ratkaisujen parissa kehityksessä ja siirtää sitten hallinnoidun ratkaisun käyttöönottoa varten.

## 🪪 Ratkaisujen julkaisijoiden ymmärtäminen

Power Platformin ratkaisujen julkaisija on kuin etiketti tai brändi, joka tunnistaa, kuka on luonut tai omistaa ratkaisun. Se on pieni mutta tärkeä osa sovellusten, agenttien ja työnkulkujen mukautusten hallintaa, erityisesti tiimityössä tai ympäristöjen välillä.

Kun luot ratkaisun, sinun täytyy valita julkaisija. Tämä julkaisija määrittää:

- Etuliitteen, joka lisätään kaikkiin mukautettuihin komponentteihin (kuten taulukot, kentät ja työnkulut).

- Nimen ja yhteystiedot organisaatiolle tai henkilölle, joka omistaa ratkaisun.

### 🤔 Miksi se on tärkeää?

1. **Helppo tunnistettavuus** – etuliite (esim. `new_` tai `abc_`) auttaa nopeasti tunnistamaan, mitkä komponentit kuuluvat mihinkin ratkaisuun tai tiimiin.

1. **Välttää ristiriidat** – jos kaksi tiimiä luo sarakkeen nimeltä status, heidän etuliitteensä (`teamA_status`, `teamB_status`) estävät nimeämisristiriidat.

1. **Tukee ALM:ää** – kun ratkaisuja siirretään ympäristöjen välillä (Kehitys → Testaus → Tuotanto), julkaisija auttaa seuraamaan omistajuutta ja ylläpitämään johdonmukaisuutta.

### ✨ Esimerkki

Oletetaan, että luot julkaisijan nimeltä Contoso Solutions, jonka etuliite on `cts_`.

Jos lisäät mukautetun sarakkeen nimeltä _Priority_, se tallennetaan nimellä `cts_Priority` ratkaisuun.

Kuka tahansa, joka näkee sarakkeen ratkaisutasolla riippumatta siitä, missä ympäristössä he ovat, voi helposti tunnistaa sen Contoso Solutionsiin liittyväksi sarakkeeksi.

## 🧭 Power Platform -ratkaisun elinkaari

Nyt kun ymmärrät ratkaisun tarkoituksen, opitaan seuraavaksi sen elinkaari.

**1. Luo ratkaisu kehitysympäristössä** – aloita luomalla uusi ratkaisu kehitysympäristössäsi.

**2. Lisää komponentteja** – lisää sovelluksia, työnkulkuja, taulukoita ja muita elementtejä ratkaisuusi.

**3. Vie hallinnoituna ratkaisuna** – pakkaa ratkaisusi käyttöönottoa varten viemällä se hallinnoituna ratkaisuna.

**4. Tuo testausympäristöön** – testaa ratkaisusi erillisessä testausympäristössä varmistaaksesi, että kaikki toimii odotetusti.

**5. Tuo tuotantoympäristöön** – ota testattu ratkaisu käyttöön tuotantoympäristössä.

**6. Tee korjauksia, päivityksiä tai päivityksiä** – paranna tai korjaa ratkaisua korjauspakettien, päivitysten tai päivitysten avulla. 🔁 Toista sykli!

### ✨ Esimerkki

Kuvittele, että rakennat IT-tukipalveluagenttia, joka auttaa työntekijöitä ongelmissa, kuten laiteongelmissa, verkon vianetsinnässä, tulostimen asennuksessa ja muussa.

- Aloitat kehitysympäristössä käyttäen hallinnoimatonta ratkaisua.

- Kun se on valmis, viet sen hallinnoituna ratkaisuna ja tuot sen kohdeympäristöön, kuten järjestelmätestaukseen tai käyttäjähyväksyntätestaukseen (UAT).

- Testauksen jälkeen siirrät sen tuotantoympäristöön – koskematta alkuperäiseen kehitysversioon.

## 🧪 Labra 04: Luo uusi ratkaisu

Nyt opimme

- [4.1 Kuinka luoda ratkaisun julkaisija](../../../../../docs/recruit/04-creating-a-solution)
- [4.2 Kuinka luoda ratkaisu](../../../../../docs/recruit/04-creating-a-solution)

Pysymme aiemmassa esimerkissä, jossa luomme ratkaisun omassa Copilot Studio -ympäristössä IT-tukipalveluagentin rakentamista varten.

Aloitetaan!

### Esivaatimukset

#### Turvarooli

Copilot Studiossa se, mitä _voit tehdä_ ratkaisunhallinnassa, riippuu käyttäjän turvaroolista.
Jos sinulla ei ole lupaa hallita ratkaisuja Power Apps -hallintakeskuksessa, et voi tehdä näitä tehtäviä Copilot Studiossa.

Varmista, että sinulla on oikeat turvaroolit ja luvat, jotta kaikki sujuu sujuvasti. Jos et hallinnoi ympäristöjä organisaatiossasi, kysy IT-järjestelmänvalvojalta (tai vastaavalta tiimiltä), joka hallinnoi vuokraajaa/ympäristöjä.

Seuraavat turvaroolit mahdollistavat käyttäjien ratkaisujen luomisen omassa ympäristössään.

| Turvarooli    | Kuvaus |
| ---------- | ---------- |
| Ympäristön luoja | Tarjoaa tarvittavat luvat resurssien luomiseen, mukauttamiseen ja hallintaan tietyssä ympäristössä, mukaan lukien ratkaisut  |
| Järjestelmän mukauttaja  | Laajemmat luvat kuin Ympäristön luojalla, mukaan lukien ympäristön mukauttaminen ja turvaroolien hallinta |
| Järjestelmänvalvoja   | Korkein lupataso ja voi hallita kaikkia ympäristön osa-alueita, mukaan lukien turvaroolien luominen ja määrittäminen     |

#### Kehittäjäympäristö

Varmista, että olet vaihtanut omistettuun kehittäjäympäristöösi. Katso [Oppitunti 00 - Kurssin aloitus - Vaihe 3: Luo uusi kehittäjäympäristö](../00-course-setup/README.md#step-3-create-new-developer-environment).

1. Valitse oikeasta yläkulmasta **hammasratas**-kuvake ja vaihda oletusympäristöstä omaan ympäristöösi, esimerkiksi **Adele Vancen ympäristöön**.

    ![Kehittäjäympäristö](../../../../../translated_images/4.0_03_DeveloperEnvironment.07770f8ffb55e0f76dc7f8a5247154e66ac22a5ac3a00c7a025e1b0e1f43f43e.fi.png)

### 4.1 Luo ratkaisun julkaisija

1. Käytä samaa Copilot Studio -ympäristöä kuin edellisessä oppitunnissa. Valitse **kolmen pisteen kuvake (. . .)** Copilot Studion vasemmasta valikosta. Valitse **Ratkaisut** **Explore**-otsikon alta.

    ![Ratkaisut](../../../../../translated_images/4.1_01_Solutions.1db0ad61bec0859dc3bdd673df996059405a2ab29bed5e4a0f58435d8732fa38.fi.png)

1. **Solution Explorer** latautuu Copilot Studiossa. Valitse **+ Uusi ratkaisu**

    ![Ratkaisut](../../../../../translated_images/4.1_02_NewSolution.a0beb3ae63cbd368567ecac7ca483ce90ab1082fbb7ec4722faf20cb69ec2f59.fi.png)

1. **Uusi ratkaisu** -paneeli ilmestyy, jossa voimme määritellä ratkaisumme yksityiskohdat. Ensin meidän täytyy luoda uusi julkaisija. Valitse **+ Uusi julkaisija**.

    ![Ratkaisut](../../../../../translated_images/4.1_03_NewPublisher.af7ad3f00b1d01bfa741dec8c9f47ca2d1ddaed5af0b292211916fc9fa24a323.fi.png)  

1. **Uusi julkaisija** -paneelin **Ominaisuudet**-välilehti ilmestyy, jossa on täytettävä pakolliset ja ei-pakolliset kentät. Tässä voimme määritellä julkaisijan yksityiskohdat, joita käytetään ratkaisun luojan tai omistajan tunnistamiseen.

    | Ominaisuus    | Kuvaus | Pakollinen |
    | ---------- | ---------- | :----------: |
    | Näyttönimi | Julkaisijan näyttönimi | Kyllä   |
    | Nimi  | Julkaisijan yksilöllinen nimi ja skeemanimi  | Kyllä    |
    | Kuvaus   | Kuvaa ratkaisun tarkoituksen    | Ei     |
    | Etuliite    | Julkaisijan etuliite, joka lisätään uusiin komponentteihin   | Kyllä      |
    | Valintavaihtoehdon etuliite   | Generoi numeron julkaisijan etuliitteen perusteella. Tätä numeroa käytetään, kun lisäät vaihtoehtoja valintoihin, ja se osoittaa, mikä ratkaisu lisäsi vaihtoehdon.   | Kyllä      |

    Kopioi ja liitä seuraava **Näyttönimeksi**,

    ```text
    Contoso Solutions
    ```

    Kopioi ja liitä seuraava **Nimeksi**,

    ```text
    ContosoSolutions
    ```

    Kopioi ja liitä seuraava **Kuvaukseksi**,

    ```text
    Copilot Studio Agent Academy
    ```

    Kopioi ja liitä seuraava **Etuliitteeksi**,

    ```text
    cts
    ```

    Oletuksena **Valintavaihtoehdon** etuliite näyttää kokonaislukuarvon. Päivitä tämä kokonaisluku lähimpään tuhanteen. Esimerkiksi alla olevassa kuvassa se oli alun perin `77074`. Päivitä tämä arvosta `77074` arvoon `77000`.

    ![Ratkaisut](../../../../../translated_images/4.1_04_PublisherProperties.b6cbbe7bc0f51446f273bf9a8a06b163c2061a575dab0fc4a5f42007ac01a82c.fi.png)  

1. Jos haluat antaa ratkaisun yhteystiedot, valitse **Yhteystiedot**-välilehti ja täytä näytetyt sarakkeet.

    ![Ratkaisut](../../../../../translated_images/4.1_05_Contact.fc0b65c96cc1ef06a1bd173f21920516e123fab76d13f592eab8745f529df3ef.fi.png)

1. Valitse **Ominaisuudet**-välilehti ja valitse **Tallenna** luodaksesi julkaisijan.

    ![Ratkaisut](../../../../../translated_images/4.1_06_SavePublisher.4aabbd20a051b55eab9d5d961761c1fae61d5c0cef07f696c5eaa030f4a5c356.fi.png)
1. Uusi julkaisijan paneeli sulkeutuu ja sinut ohjataan takaisin **Uusi ratkaisu** -paneeliin, jossa juuri luotu julkaisija on valittuna.

    ![Ratkaisut](../../../../../translated_images/4.1_07_PublisherSelected.5d88b1212348c15841b5f57e78554649d4ed080d10dccaece30e826b6e359132.fi.png)  

Hyvä sinä, olet nyt luonut Ratkaisun Julkaisijan! 🙌🏻 Seuraavaksi opimme, kuinka luodaan uusi mukautettu ratkaisu.

### 4.2 Luo uusi ratkaisu

1. Nyt kun olemme luoneet julkaisijamme, voimme täyttää loput lomakkeesta **Uusi ratkaisu** -paneelissa.

    Kopioi ja liitä seuraava **Näyttönimeksi**,

    ```text
    Contoso Helpdesk Agent
    ```

    Kopioi ja liitä seuraava **Nimeksi**,

    ```text
    ContosoHelpdeskAgent
    ```

    Koska luomme uuden ratkaisun, [**Versio**-numero](https://learn.microsoft.com/power-apps/maker/data-platform/update-solutions#understanding-version-numbers-for-updates/?WT.mc_id=power-172615-ebenitez) on oletuksena `1.0.0.0`.

    Valitse **Aseta ensisijaiseksi ratkaisuksi** -valintaruutu.

    ![Ratkaisut](../../../../../translated_images/4.2_01_SolutionDetails_.ce2945385f3544846ca9e62f209c96a673a2540ea6e20404cd5f1b224d8b5321.fi.png)  

1. Laajenna **Lisäasetukset** nähdäksesi lisätiedot, jotka voidaan antaa ratkaisussa.

    ![Ratkaisut](../../../../../translated_images/4.2_02_MoreOptions.3c4b95d2fe119f8a8d8be783f5beba0a3b6c36fb83055cae80eaa45891aea73b.fi.png)

1. Näet seuraavat tiedot:

    - **Asennettu** - päivämäärä, jolloin ratkaisu asennettiin.

    - **Konfigurointisivu** - kehittäjät määrittävät HTML-verkkoresurssin, joka auttaa käyttäjiä vuorovaikuttamaan sovelluksensa, agenttinsa tai työkalunsa kanssa. Se näkyy verkkosivuna Tiedot-osiossa ohjeiden tai painikkeiden kanssa. Sitä käyttävät enimmäkseen yritykset tai kehittäjät, jotka rakentavat ja jakavat ratkaisuja muille.

    - **Kuvaus** - kuvaa ratkaisua tai antaa yleiskuvan konfigurointisivusta.

    Jätämme nämä tyhjiksi tässä harjoituksessa.

    Valitse **Luo**.

    ![Ratkaisut](../../../../../translated_images/4.2_03_Create.afd1bc27593062dfd945d4a0aa6fb05d87e0b02b0f45d01eaad8810f67a5f295.fi.png)

1. Contoso Helpdesk Agent -ratkaisu on nyt luotu. Siinä ei ole komponentteja, ennen kuin luomme agentin Copilot Studiossa.

    Valitse **takaisin nuoli** -kuvake palataksesi Ratkaisunhallintaan.

    ![Ratkaisut](../../../../../translated_images/4.2_04_SolutionCreated.f5f543303fd58856f93bfc1d4d6e9a27fd338a82e77b15258bb54f03b9b5f631.fi.png)

1. Huomaa, kuinka Contoso Helpdesk Agent näkyy nyt **Nykyisenä ensisijaisena ratkaisuna**, koska valitsimme **Aseta ensisijaiseksi ratkaisuksi** -valintaruudun aiemmin.

    ![Ratkaisut](../../../../../translated_images/4.2_05_CurrentPreferredSolutionSelected.fde1fa6c013f41f445c2b8721af8bc172a6a8bf98c4f5b8e946f87b4d5ec7823.fi.png)

## ✅ Tehtävä suoritettu

Onnittelut! 👏🏻 Olet luonut Julkaisijan ja käyttänyt sitä juuri luodussa Ratkaisussa rakentaaksesi agenttisi!

Hyvin tehty, Agentin tekijä. Siisti digitaalinen jalanjälki on ensimmäinen askel kohti skaalautuvaa toimivuutta. Nyt sinulla on työkalut ja ajattelutapa kestävään, yritysvalmiiseen agenttikehitykseen.

Tämä oli **Lab 04 - Ratkaisun luominen** loppu, valitse alla oleva linkki siirtyäksesi seuraavaan oppituntiin. Tässä harjoituksessa luotu ratkaisu käytetään seuraavan oppitunnin harjoituksessa.

⏭️ [Siirry **Aloita nopeasti valmiiden agenttien avulla** -oppituntiin](../05-using-prebuilt-agents/README.md)

## 📚 Taktiset resurssit

🔗 [Luo ratkaisu](https://learn.microsoft.com/power-apps/maker/data-platform/create-solution/?WT.mc_id=power-172615-ebenitez)

🔗 [Luo ja hallitse ratkaisuja Copilot Studiossa](https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview/?WT.mc_id=power-172615-ebenitez)

🔗 [Jaa agentteja muiden käyttäjien kanssa](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172615-ebenitez)

🔗 [Yhteenveto resursseista, jotka ovat käytettävissä ennalta määritetyille suojausrooleille](https://learn.microsoft.com/power-platform/admin/database-security#summary-of-resources-available-to-predefined-security-roles/?WT.mc_id=power-172615-ebenitez)

🔗 [Päivitä tai päivitä ratkaisu](https://learn.microsoft.com/power-apps/maker/data-platform/update-solutions/?WT.mc_id=power-172615-ebenitez)

🔗 [Yleiskatsaus Power Platformin putkistoihin](https://learn.microsoft.com/power-platform/alm/pipelines/?WT.mc_id=power-172615-ebenitez)

🔗 [Yleiskatsaus Git-integraatioon Power Platformissa](https://learn.microsoft.com/power-platform/alm/git-integration/overview/?WT.mc_id=power-172615-ebenitez)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/04-creating-a-solution" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.