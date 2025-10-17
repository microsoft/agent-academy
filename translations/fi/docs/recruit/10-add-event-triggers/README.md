<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cd99a76bcb7372ac2771b6ae178b023d",
  "translation_date": "2025-10-17T05:40:29+00:00",
  "source_file": "docs/recruit/10-add-event-triggers/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 10: Lisää tapahtumatriggereitä - Ota käyttöön autonomiset agenttikyvyt

## 🕵️‍♂️ Koodinimi: `OPERATION GHOST ROUTINE`

> **⏱️ Operaatioaikaikkuna:** `~45 minuuttia`

🎥 **Katso opastusvideo**

[![Tapahtumatriggereiden videon pikkukuva](../../../../../translated_images/video-thumbnail.0d5b477d69adfe668fab9aa8ef5b199377b46788948b33b1969bf19c099b6469.fi.jpg)](https://www.youtube.com/watch?v=ZgwHL8PQ1nY "Katso opastus YouTubessa")

## 🎯 Tehtävän kuvaus

On aika nostaa agenttisi tasoa keskusteluavustajasta autonomiseksi toimijaksi. Tehtäväsi on mahdollistaa agenttisi toiminta ilman kutsua - reagoimalla signaaleihin digitaalisessa ympäristössäsi tarkasti ja nopeasti.

Tapahtumatriggereiden avulla koulutat agenttisi seuraamaan ulkoisia järjestelmiä, kuten SharePointia, Teamsia ja Outlookia, ja suorittamaan älykkäitä toimia heti, kun signaali vastaanotetaan. Tämä operaatio muuttaa agenttisi täysin toimivaksi kenttäresurssiksi - hiljaiseksi, nopeaksi ja aina valppaaksi.

Onnistuminen tarkoittaa agenttien rakentamista, jotka tuottavat arvoa aktiivisesti - eivät vain reagoi siihen.

## 🔎 Tavoitteet

📖 Tässä osiossa käsitellään:

- Tapahtumatriggereiden ymmärtäminen ja niiden rooli autonomisessa agenttikäyttäytymisessä
- Tapahtumatriggereiden ja aihetriggereiden erot, mukaan lukien triggerityönkulut ja hyötykuormat
- Yleiset tapahtumatrigger-skenaariot
- Autentikoinnin, turvallisuuden ja julkaisemisen huomioiminen tapahtumapohjaisille agenteille
- Autonomisen IT-tukipalveluagentin rakentaminen, joka reagoi SharePoint-tapahtumiin ja lähettää sähköpostivahvistuksia

## 🤔 Mikä on tapahtumatrigger?

**Tapahtumatrigger** on mekanismi, joka mahdollistaa agenttisi toiminnan autonomisesti ulkoisten tapahtumien perusteella ilman suoraa käyttäjän syötettä. Ajattele sitä tapana saada agenttisi "tarkkailemaan" tiettyjä tapahtumia ja toimimaan automaattisesti, kun nämä tapahtumat tapahtuvat.

Toisin kuin aihetriggerit, jotka vaativat käyttäjää kirjoittamaan jotain keskustelun aktivoimiseksi, tapahtumatriggerit aktivoituvat sen perusteella, mitä tapahtuu liitetyissä järjestelmissä. Esimerkiksi:

- Kun uusi tiedosto luodaan SharePointissa tai OneDrive for Businessissa
- Kun Dataversessa luodaan uusi tietue
- Kun Plannerissa tehtävä valmistuu
- Kun uusi Microsoft Forms -vastaus lähetetään
- Kun uusi Microsoft Teams -viesti lisätään
- Perustuen toistuvaan aikatauluun (kuten päivittäiset muistutukset)  
![Lisää triggeri](../../../../../translated_images/10_AddTriggerDialog.d665fde7e50d106d693110cd80e6c6b569bdad34ea985eb72fee7e0fccb3ef26.fi.png)

### Miksi tapahtumatriggerit ovat tärkeitä autonomisille agenteille

Tapahtumatriggerit muuttavat agenttisi reaktiivisesta avustajasta proaktiiviseksi, autonomiseksi apuriksi:

1. **Autonominen toiminta** - agenttisi voi työskennellä 24/7 ilman ihmisen väliintuloa, reagoiden tapahtumiin niiden tapahtuessa.
    - *Esimerkki:* Tervetuloviestin lähettäminen automaattisesti uusille tiimin jäsenille, kun heidät lisätään tiimiin.

1. **Reaaliaikainen reagointi** - sen sijaan, että odotettaisiin käyttäjien kysyvän jotain, agenttisi reagoi välittömästi merkityksellisiin tapahtumiin.
    - *Esimerkki*: Ilmoita IT-tiimille, kun SharePoint-dokumenttia muokataan.

1. **Työnkulun automatisointi** - ketjuta useita toimia yhden trigger-tapahtuman perusteella.
    - *Esimerkki:* Kun uusi tukipyyntö luodaan, luo tehtävä, ilmoita esimiehelle ja päivitä seurantataulukko.

1. **Johdonmukaiset prosessit** - varmista, että tärkeät vaiheet eivät jää väliin automatisoimalla vastaukset avaintapahtumiin.
    - *Esimerkki:* Jokainen uusi työntekijä saa automaattisesti perehdytysmateriaalit ja käyttöoikeuspyynnöt.

1. **Tietopohjaiset toimet** - käytä trigger-tapahtuman tietoja älykkäiden päätösten tekemiseen ja asianmukaisten toimien toteuttamiseen.
    - *Esimerkki:* Ohjaa kiireelliset tukipyynnöt kokeneille työntekijöille prioriteettitason perusteella.

## ⚙️ Miten tapahtumatriggerit toimivat?

Tapahtumatriggerit toimivat kolmen vaiheen työnkulun kautta, joka mahdollistaa agenttisi autonomisen reagoinnin ulkoisiin tapahtumiin:

### Trigger-työnkulku

1. **Tapahtuman havaitseminen** - Tietty tapahtuma tapahtuu liitetyssä järjestelmässä (SharePoint, Teams, Outlook jne.)
1. **Triggerin aktivointi** - Tapahtumatrigger havaitsee tämän tapahtuman ja lähettää hyötykuorman agentillesi Power Automate Cloud Flown kautta.
1. **Agentin vastaus** - Agenttisi vastaanottaa hyötykuorman ja suorittaa määrittelemäsi ohjeet.

### Tapahtuma- vs aihetriggerit

Näiden kahden trigger-tyypin eron ymmärtäminen on tärkeää:

| **Tapahtumatriggerit** | **Aihetriggerit** |
|-------------------|-------------------|
| Aktivoituu ulkoisten järjestelmätapahtumien perusteella | Aktivoituu käyttäjän syötteen/lauseiden perusteella |
| Mahdollistaa autonomisen agenttikäyttäytymisen | Mahdollistaa keskusteluvastaukset |
| Käyttää tekijän autentikointia | Vaihtoehto käyttäjän autentikoinnille |
| Toimii ilman käyttäjän vuorovaikutusta | Vaatii käyttäjän aloittamaan keskustelun |
| Esimerkkejä: Tiedosto luotu, sähköposti vastaanotettu | Esimerkki: "Millainen sää on?" |

## 📦 Hyötykuormien ymmärtäminen

Kun tapahtuma tapahtuu, trigger lähettää agentillesi **hyötykuorman**, joka sisältää tietoa tapahtumasta ja ohjeita siitä, miten reagoida.

### Oletus- vs mukautetut hyötykuormat

Jokaisella trigger-tyypillä on oletushyötykuormarakenne, mutta voit mukauttaa sitä:

**Oletushyötykuorma** - Käyttää vakiomuotoa, kuten `Käytä sisältöä {Body}`

- Sisältää perustiedot tapahtumasta
- Käyttää yleisiä käsittelyohjeita
- Hyvä yksinkertaisiin skenaarioihin

**Mukautettu hyötykuorma** - Lisää erityisiä ohjeita ja tietojen muotoilua

- Sisältää yksityiskohtaiset ohjeet agentillesi
- Määritä tarkasti, mitä tietoja käyttää ja miten
- Parempi monimutkaisiin työnkulkuihin

### Agentin ohjeet vs mukautetut hyötykuormaohjeet

Sinulla on kaksi paikkaa, joissa voit ohjata agenttisi käyttäytymistä tapahtumatriggerien avulla:

**Agentin ohjeet** (Yleiset)

- Laajat ohjeet, jotka koskevat kaikkia triggereitä
- Esimerkki: "Kun käsittelet tukipyyntöjä, tarkista aina ensin kaksoiskappaleet"
- Paras yleisiin käyttäytymismalleihin

**Hyötykuormaohjeet** (Trigger-kohtaiset)

- Erityiset ohjeet yksittäisille trigger-tyypeille  
- Esimerkki: "Tämän SharePoint-päivityksen osalta lähetä yhteenveto projektikanavalle"
- Paras monimutkaisille agenteille, joilla on useita triggereitä

💡 **Vinkki**: Vältä ristiriitaisia ohjeita näiden kahden tason välillä, sillä tämä voi aiheuttaa odottamatonta käyttäytymistä.

## 🎯 Yleiset tapahtumatrigger-skenaariot

Tässä käytännön esimerkkejä siitä, miten tapahtumatriggerit voivat parantaa agenttiasi:

### IT-tukipalveluagentti

- **Trigger**: Uusi SharePoint-lista-merkintä (tukipyyntö)
- **Toiminta**: Luokittele automaattisesti, määritä prioriteetti ja ilmoita asianmukaisille tiimin jäsenille

### Työntekijän perehdytysagentti

- **Trigger**: Uusi käyttäjä lisätty Dataverseen
- **Toiminta**: Lähetä tervetuloviesti, luo perehdytystehtävät ja myönnä käyttöoikeudet

### Projektinhallinta-agentti

- **Trigger**: Plannerissa tehtävä valmis
- **Toiminta**: Päivitä projektin hallintapaneeli, ilmoita sidosryhmille ja tarkista esteet

### Dokumenttien hallinta-agentti

- **Trigger**: Tiedosto ladattu tiettyyn SharePoint-kansioon
- **Toiminta**: Poimi metatiedot, lisää tunnisteet ja ilmoita dokumentin omistajille

### Kokousavustaja-agentti

- **Trigger**: Kalenteritapahtuma luotu
- **Toiminta**: Lähetä kokousta edeltävät muistutukset ja agenda, varaa resurssit

## ⚠️ Julkaisu- ja autentikointihuomiot

Ennen kuin agenttisi voi käyttää tapahtumatriggereitä tuotannossa, sinun on ymmärrettävä autentikoinnin ja turvallisuuden vaikutukset.

### Tekijän autentikointi

Tapahtumatriggerit käyttävät **agentin luojan tunnistetietoja** kaikessa autentikoinnissa:

- Agenttisi käyttää järjestelmiä sinun käyttöoikeuksillasi
- Käyttäjät voivat mahdollisesti käyttää tietoja tunnistetietojesi kautta
- Kaikki toimet suoritetaan "sinuna", vaikka käyttäjät olisivat vuorovaikutuksessa agentin kanssa

### Tietosuojan parhaat käytännöt

Turvallisuuden ylläpitämiseksi julkaistaessa agenteja, joilla on tapahtumatriggereitä:

1. **Arvioi tietojen käyttöoikeudet** - Tarkista, mihin järjestelmiin ja tietoihin triggerit voivat päästä
1. **Testaa huolellisesti** - Ymmärrä, mitä tietoja triggerit sisältävät hyötykuormissa
1. **Rajaa triggerin laajuus** - Käytä tarkkoja parametreja rajoittaaksesi, mitkä tapahtumat aktivoivat triggerit
1. **Tarkista hyötykuormatiedot** - Varmista, etteivät triggerit paljasta arkaluonteisia tietoja
1. **Seuraa käyttöä** - Seuraa trigger-aktiviteetteja ja resurssien kulutusta

## ⚠️ Vianetsintä ja rajoitukset

Pidä mielessä nämä tärkeät seikat työskennellessäsi tapahtumatriggerien kanssa:

### Kiintiö- ja laskutusvaikutukset

- Jokainen trigger-aktivointi lasketaan viestikulutukseen
- Usein aktivoituvat triggerit (kuten minuutin välein tapahtuvat) voivat nopeasti kuluttaa kiintiön
- Seuraa käyttöä välttääksesi rajoitukset

### Teknisiä vaatimuksia

- Saatavilla vain agenteille, joilla on generatiivinen orkestrointi käytössä
- Vaatii ratkaisukeskeisen pilvityönkulun jakamisen käyttöönottamista ympäristössäsi

### Tietojen menetyksen estäminen (DLP)

- Organisaatiosi DLP-käytännöt määrittävät, mitkä triggerit ovat käytettävissä
- Järjestelmänvalvojat voivat estää tapahtumatriggerit kokonaan
- Ota yhteyttä järjestelmänvalvojaan, jos odotetut triggerit eivät ole käytettävissä

## 🧪 Laboratorio 10 - Lisää tapahtumatriggereitä autonomisen agentin käyttäytymiseen

### 🎯 Käyttötapaus

Parannat IT-tukipalveluagenttiasi reagoimaan automaattisesti uusiin tukipyyntöihin. Kun joku luo uuden merkinnän SharePointin tukipyyntölistaan, agenttisi:

1. Aktivoituu automaattisesti, kun SharePoint-tukipyyntö luodaan
1. Toimittaa tukipyynnön tiedot ja ohjeet, jotka haluat sen suorittavan
1. Vahvistaa automaattisesti tukipyynnön lähettäjälle AI:n luomalla sähköpostilla

Tämä laboratorio osoittaa, miten tapahtumatriggerit mahdollistavat aidosti autonomisen agentin käyttäytymisen.

### Esivaatimukset

Ennen kuin aloitat tämän laboratorion, varmista, että sinulla on:

- ✅ Suoritettu aiemmat laboratoriot (erityisesti laboratoriot 6-8 IT-tukipalveluagentille)
- ✅ Pääsy SharePoint-sivustoon, jossa on IT-tukipyyntölista
- ✅ Copilot Studio -ympäristö, jossa tapahtumatriggerit ovat käytössä
- ✅ Agentillasi on generatiivinen orkestrointi käytössä
- ✅ Asianmukaiset käyttöoikeudet SharePointissa ja Copilot Studio -ympäristössäsi

### 10.1 Ota käyttöön generatiivinen AI ja luo SharePoint-merkinnän luontitriggeri

1. Avaa **IT-tukipalveluagenttisi** **Copilot Studiossa**

1. Varmista ensin, että **Generatiivinen AI** on käytössä agentillasi:
   - Siirry **Yleiskatsaus**-välilehdelle
   - Orkestrointiosiossa kytke **Generatiivinen orkestrointi** päälle, jos se ei ole jo käytössä  
     ![Ota käyttöön Generatiivinen AI](../../../../../translated_images/10_EnableGenerativeAI.a58904a7599016a94b89a11d6c1cd59022ae686ef553d17f89ebfb6c275cc900.fi.png)

1. Siirry **Yleiskatsaus**-välilehdelle ja etsi **Triggerit**-osio

1. Klikkaa **+ Lisää triggeri** avataksesi triggerikirjaston  
    ![Siirry triggereihin](../../../../../translated_images/10_NavigateToTrigger.f5907762b93236a72d2f89cdb7c903608adb61763888ba1d3b4998f46473240c.fi.png)

1. Etsi ja valitse **Kun merkintä luodaan** (SharePoint)  
    ![Valitse SharePoint-triggeri](../../../../../translated_images/10_SelectSharePointTrigger.d63e7cb0f06cf33e664c0e2316952aeac4adf507d7e0f87254cffebbfa5b3007.fi.png)

1. Määritä triggerin nimi ja yhteydet:

   - **Triggerin nimi:** Uusi tukipyyntö luotu SharePointissa

1. Odota yhteyksien määrittämistä ja valitse **Seuraava** jatkaaksesi.  
   ![Määritä triggerin nimi ja yhteydet](../../../../../translated_images/10_ConfigureTriggerNameAndConnections.f526dfc7a9e0dcc31bf791623e6431230f29ae001acb0f5075e175401bebb0f2.fi.png)

1. Määritä triggerin parametrit:

   - **Sivuston osoite**: Valitse "Contoso IT" SharePoint-sivustosi

   - **Listan nimi**: Valitse "Tickets"-listasi

   - **Lisäohjeet agentille, kun trigger aktivoituu:**

     ```text
     New Support Ticket Created in SharePoint: {Body}
     
     Use the 'Acknowledge SharePoint Ticket' tool to generate the email body automatically and respond.
     
     IMPORTANT: Do not wait for any user input. Work completely autonomously.
     ```

     ![Määritä triggerin parametrit](../../../../../translated_images/10_ConfigureTriggerParams.a67406d4a892ba1f59a04641cbb2f7226a329b9813b04676f92bf18c6003fd23.fi.png)

1. Valitse **Luo triggeri** viimeistelläksesi triggerin luomisen. Power Automate Cloud Flow luodaan automaattisesti aktivoimaan agentti autonomisesti.

1. Valitse **Sulje**.

### 10.2 Muokkaa triggeriä

1. **Yleiskatsaus**-välilehden **Triggerit**-osiossa valitse **...**-valikko **Uusi tukipyyntö luotu SharePointissa** -triggerin kohdalla

1. Valitse **Muokkaa Power Automatessa**  
   ![Muokkaa triggeriä Power Automatessa](../../../../../translated_images/10_EditTriggerInPowerAutomate.d99effb8145d40bd4d655021e0a34abf59ba23ff5e94bcae07e7e6711a52eff0.fi.png)

1. Valitse **Lähettää kehotteen määritetylle copilotille käsittelyä varten** -solmu

1. **Body/viesti**-kentässä poista Body-sisältö, **paina kauttaviiva-näppäintä** (/) ja valitse **Lisää lauseke**  
   ![Lisää lauseke triggerille](../../../../../translated_images/10_InsertExpressionForTrigger.adb940d8fa6e0bc50b325cedc3e3c085b5670e5cf2b275bf7b4ada1180d3ba01.fi.png)

1. Syötä seuraava lauseke antaaksesi agentille tarkat tiedot tukipyynnöstä:

    ```text
    concat('Submitted By Name: ', first(triggerOutputs()?['body/value'])?['Author/DisplayName'], '\nSubmitted By Email: ', first(triggerOutputs()?['body/value'])?['Author/Email'], '\nTitle: ', first(triggerOutputs()?['body/value'])?['Title'], '\nIssue Description: ', first(triggerOutputs()?['body/value'])?['Description'], '\nPriority: ', first(triggerOutputs()?['body/value'])?['Priority/Value'],'\nTicket ID : ', first(triggerOutputs()?['body/value'])?['ID'])
    ```

1. Valitse **Lisää**  
   ![Triggerin ulostulolauseke](../../../../../translated_images/10_TriggerOutputExpression.3b120eaa26cc9a4cd5451bb2ca658ce1a7192eb7a46c7c2b4d7431d20e982187.fi.png)

1. Valitse **Julkaise** oikean yläkulman työkalupalkista.

### 10.3 Luo työkalu sähköpostivahvistukselle

1. **Palaa** agenttiisi Copilot Studiossa

1. Siirry agenttisi **Työkalut**-välilehdelle

1. Klikkaa **+ Lisää työkalu** ja valitse **Liitin**

1. Etsi ja valitse **Lähetä sähköposti (V2)** -liitin  
    ![Valitse Outlook-liitin](../../../../../translated_images/10_SelectOutlookConnector.0bf4270b1d25c691574881514f162fd74e10206bc5efd798e5cb15741b73c063.fi.png)

1. Odota yhteyden määrittämistä ja valitse sitten **Lisää ja määritä**

1. Määritä työkalun asetukset:

   - **Nimi**: Vahvista SharePoint-tukipyyntö
   - **Kuvaus**
1. Avaa uusi selainvälilehti ja siirry **SharePoint IT Support Tickets -listaan**
1. Klikkaa **+ Lisää uusi kohde** luodaksesi testitiketin:
   - **Otsikko**: "Ei yhteyttä VPN:ään"
   - **Kuvaus**: "Ei yhteyttä yrityksen WIFI-verkkoon viimeisimmän päivityksen jälkeen"
   - **Prioriteetti**: "Normaali"

1. **Tallenna** SharePoint-kohde  
    ![Luo testitiketti](../../../../../translated_images/10_CreateTestTicket.137beedc82d337ef0a467c67d3b53249ec469ce1ce91d88a72fb2f8729a14fce.fi.png)
1. Palaa **Copilot Studioon** ja seuraa **Testaa laukaisinta** -paneelia laukaisimen aktivoitumisen varalta. Käytä **Päivitä**-ikonia ladataksesi laukaisutapahtuman, tämä voi kestää muutaman minuutin.  
    ![Seuraa laukaisimen testiä](../../../../../translated_images/10_MonitorTriggerTest.f9883de55ba1c9817121c7f801e29715fa74918603f96312dfcb0f16f9af44e0.fi.png)
1. Kun laukaisin näkyy, valitse **Aloita testaus**
1. Valitse **Toimintakartta-ikoni** **Testaa agenttiasi** -paneelin yläosasta
1. Varmista, että agenttisi:
   - Sai laukaisimen tiedot
   - Käytti "Kuittaa SharePoint-tiketti" -työkalua  
     ![Testaa laukaisin](../../../../../translated_images/10_TestTrigger.f68b063d3fa221601f61484aec9bf68aa17761366aa1efe8c3cad554ce3da902.fi.png)
1. Tarkista lähettäjän sähköpostilaatikko varmistaaksesi, että kuittausviesti on lähetetty  
    ![Testaa lähetetty sähköposti](../../../../../translated_images/10_TestEmailSent.1efe77ca636ca8b8c2593216539edfe11555f7e002a6dcb5e2024b36b40e12b3.fi.png)
1. Tarkista **Toiminta**-välilehti Copilot Studiossa nähdäksesi täydellisen laukaisimen ja työkalun suorituksen

## ✅ Tehtävä suoritettu

🎉 **Onnittelut!** Olet onnistuneesti toteuttanut tapahtumalaukaisimet liitintyökaluilla, jotka mahdollistavat agenttisi toiminnan itsenäisesti, lähettäen automaattisesti sähköpostikuittauksia ja käsitellen tukitikettejä ilman käyttäjän väliintuloa. Kun agenttisi julkaistaan, se toimii itsenäisesti puolestasi.

🚀 **Seuraavaksi**: Seuraavassa oppitunnissa opit [julkaisemaan agenttisi](../11-publish-your-agent/README.md) Microsoft Teamsiin ja Microsoft 365 Copilotiin, jolloin se on koko organisaatiosi käytettävissä!

⏭️ [Siirry **Julkaise agenttisi** -oppituntiin](../11-publish-your-agent/README.md)

## 📚 Taktiset resurssit

Valmis sukeltamaan syvemmälle tapahtumalaukaisimiin ja itsenäisiin agenteihin? Tutustu näihin resursseihin:

- **Microsoft Learn**: [Tee agentistasi itsenäinen Copilot Studiossa](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-177340-scottdurow)
- **Dokumentaatio**: [Lisää tapahtumalaukaisin](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-177340-scottdurow)
- **Parhaat käytännöt**: [Johdatus Power Automate -laukaisimiin](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-177340-scottdurow)
- **Edistyneet skenaariot**: [Power Automate -työnkulkujen käyttö agenttien kanssa](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-177340-scottdurow)
- **Tietoturva**: [Tietojen häviämisen estäminen Copilot Studiossa](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-177340-scottdurow)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/10-add-event-triggers" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.