<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9cd8cd1a4fbd8915171a2ed972cc322",
  "translation_date": "2025-10-17T01:21:44+00:00",
  "source_file": "docs/recruit/00-course-setup/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 00: Kurssin aloitus

## 🕵️‍♂️ Koodinimi: `OPERATION DEPLOYMENT READY`

> **⏱️ Operaatioaika:** `~30 minuuttia`  

## 🎯 Tehtävän kuvaus

Tervetuloa ensimmäiseen tehtävään Copilot Studio -agenttikoulutuksessasi.  
Ennen kuin voit aloittaa ensimmäisen tekoälyagenttisi rakentamisen, sinun täytyy luoda **kenttävalmis kehitysympäristö**.

Tässä ohjeessa käydään läpi järjestelmät, käyttöoikeudet ja asennusvaiheet, jotka tarvitaan Microsoft 365 -ekosysteemissä toimimiseen.

## 🔎 Tavoitteet

Tehtäväsi sisältää:

1. Microsoft 365 -tilin hankkiminen  
1. Pääsyn saaminen Microsoft Copilot Studioon  
1. (Valinnainen) Microsoft 365 Copilot -lisenssin hankkiminen tuotantokäyttöä varten  
1. Kehitysympäristön luominen Copilot Studio -ympäristöksi  
1. SharePoint-sivuston luominen, joka toimii tietolähteenä myöhemmissä tehtävissä  

---

## 🔍 Esivaatimukset

Ennen kuin aloitat, varmista että sinulla on:

1. **Työ- tai koulusähköpostiosoite** (henkilökohtaiset @outlook.com, @gmail.com jne. eivät ole tuettuja).  
1. Pääsy internetiin ja moderni selain (suositellaan Edge, Chrome tai Firefox).  
1. Perustiedot Microsoft 365:stä (esimerkiksi kirjautuminen Office-sovelluksiin tai Teamsiin).  
1. (Valinnainen) Luottokortti tai maksutapa, jos aiot ostaa maksullisia lisenssejä.  

---

## Vaihe 1: Hanki Microsoft 365 -tili

Copilot Studio sijaitsee Microsoft 365:ssä, joten tarvitset Microsoft 365 -tilin päästäksesi siihen. Voit käyttää olemassa olevaa tiliäsi, jos sinulla on sellainen, tai noudattaa näitä ohjeita sopivan lisenssin hankkimiseksi:

1. **Hanki maksullinen Microsoft 365 Business -tilaus**  
   1. Siirry [Microsoft 365 Business -suunnitelmien ja hinnoittelun sivulle](https://www.microsoft.com/microsoft-365/business/microsoft-365-plans-and-pricing)  
   1. Edullisin vaihtoehto aloittamiseen on Microsoft 365 Business Basic -suunnitelma. Valitse `Kokeile ilmaiseksi` ja täytä ohjattu lomake tilauksen, tilitietojen ja maksutietojen osalta.  
   ![Microsoft 365 Rekisteröityminen](../../../../../translated_images/m365-freetrial.985b49b07afc5be89598349721f6e4edbb248680f884831f63915c151668855a.fi.png)  
   1. Kun sinulla on uusi tilisi, kirjaudu sisään.

    !!! Tip
        Jos aiot julkaista agentteja Microsoft 365 Copilot Chatissa tai yhdistää organisaation dataan (SharePoint, OneDrive, Dataverse), tarvitset Microsoft 365 Copilot -lisenssin. Tämä on lisenssi, josta voit lukea lisää [lisensointisivustolla](https://www.microsoft.com/microsoft-365/copilot#plans).

---

## Vaihe 2: Aloita Copilot Studio -kokeilu

Kun sinulla on Microsoft 365 -vuokralainen, sinun täytyy saada pääsy Copilot Studioon. Voit saada ilmaisen 30 päivän kokeilujakson seuraamalla näitä ohjeita:

1. Siirry osoitteeseen [aka.ms/TryCopilotStudio](https://aka.ms/TryCopilotStudio).  
1. Syötä sähköpostiosoite, jonka määritit edellisessä vaiheessa, ja valitse `Seuraava`.  
![Microsoft 365 Rekisteröityminen](../../../../../translated_images/mcs-trial-screen.bc9d7566637fa38274735f903d9c71bf437994568e08e3a1eada35b0b8c1fb04.fi.png)  
1. Järjestelmän pitäisi tunnistaa tilisi. Valitse `Kirjaudu sisään`.  
![Microsoft 365 Rekisteröityminen](../../../../../translated_images/mcs-trial-signin.fe3992c64f2fbdf891ac3377acfa07b4af40cfe90cb19f8ee36b5f2db8fc15e5.fi.png)  
1. Valitse `Aloita ilmainen kokeilu`.  
![Microsoft 365 Rekisteröityminen](../../../../../translated_images/mcs-start-trial.cbbdd739179130bc78a620b62c7904819ec4453f4b91d1bd585725b2b69762bc.fi.png)

!!! info "Kokeilun tiedot"  
     1. Ilmainen kokeilu tarjoaa **täydet Copilot Studio -ominaisuudet**.  
     1. Saat sähköposti-ilmoituksia kokeilujakson päättymisestä. Voit jatkaa kokeilua 30 päivän jaksoissa (enintään 90 päivää agentin käyttöaikaa).  
     1. Jos vuokralaisesi järjestelmänvalvoja on poistanut itsepalvelukirjautumisen käytöstä, näet virheilmoituksen—ota yhteyttä Microsoft 365 -järjestelmänvalvojaan sen uudelleen aktivoimiseksi.

---

## Vaihe 3: Luo uusi kehitysympäristö

### Rekisteröidy Power Apps Developer Plan -suunnitelmaan

Käytä samaa Microsoft 365 -vuokralaista kuin vaiheessa 1 ja rekisteröidy Power Apps Developer Plan -suunnitelmaan luodaksesi ilmaisen kehitysympäristön Copilot Studion rakentamista ja testaamista varten.

1. Rekisteröidy [Power Apps Developer Plan -sivustolla](https://aka.ms/PowerAppsDevPlan).

    - Syötä sähköpostiosoitteesi  
    - Valitse valintaruutu  
    - Valitse **Aloita ilmainen**  

    ![Rekisteröidy Power Apps Developer Plan -suunnitelmaan](../../../../../translated_images/0.3_01_SignUp.0a30494c83195125a818282a3efd38bb973ead548e3c071757f6313440e0e4ce.fi.png)

1. Kun olet rekisteröitynyt Developer Plan -suunnitelmaan, sinut ohjataan [Power Apps](https://make.powerapps.com/)-sivustolle. Ympäristö käyttää nimeäsi, esimerkiksi **Adele Vancen ympäristö**. Jos ympäristö on jo olemassa samalla nimellä, uusi kehitysympäristö nimetään **Adele Vancen (1)** ympäristöksi.

    Käytä tätä kehitysympäristöä Copilot Studiossa, kun suoritat harjoituksia.

!!! Note
    Jos käytät olemassa olevaa Microsoft 365 -tiliä etkä luonut uutta vaiheessa 1, esimerkiksi omaa tiliäsi työorganisaatiossasi, IT-järjestelmänvalvojasi (tai vastaava) tiimi, joka hallinnoi vuokralaistasi/ympäristöjäsi, on saattanut poistaa rekisteröintiprosessin käytöstä. Tässä tapauksessa ota yhteyttä järjestelmänvalvojaan tai luo testivuokralainen vaiheessa 1 kuvatulla tavalla.

---

## Vaihe 4: Luo uusi SharePoint-sivusto

Uusi SharePoint-sivusto täytyy luoda, ja sitä käytetään [Oppitunnilla 06 - Luo mukautettu agentti keskustelukokemuksen avulla Copilotilla ja yhdistä se dataasi](../06-create-agent-from-conversation/README.md#62-add-an-internal-knowledge-source-using-a-sharepoint-site).

1. Valitse Microsoft Copilot Studion vasemmasta yläkulmasta vohvelikuvake nähdäksesi valikon. Valitse valikosta SharePoint.

    ![Valitse SharePoint](../../../../../translated_images/0.4_01_SelectSharePoint.39fd392919f757fa669d75b9d1a76f576df793e054a173fe0298e93060e1cebb.fi.png)

1. SharePoint latautuu. Valitse **+ Luo sivusto** luodaksesi uuden SharePoint-sivuston.

    ![Luo sivusto](../../../../../translated_images/0.4_02_CreateSite.df162f5889236f2fb08f3290a069a49872f1360265f9ef39818b2bfed02e06f3.fi.png)

1. Näyttöön tulee valintaikkuna, joka ohjaa sinua uuden SharePoint-sivuston luomisessa. Valitse **Tiimisivusto**.

    ![Tiimisivusto](../../../../../translated_images/0.4_03_SelectTeamOrCommunicationSite.b9620d158c751320104ad2e3da48f14751e8b674dc00dad0bdf7f57642ad712e.fi.png)

1. Seuraavassa vaiheessa Microsoftin malliluettelo latautuu oletuksena. Vieritä alas ja valitse **IT-tukipalvelu** -malli.

    ![IT-tukipalvelu-malli](../../../../../translated_images/0.4_04_SelectITHelpDeskTemplate.a391090ba69a7ddcf4423179bf14a421dfdc1279359badfba71645bde97d62a6.fi.png)

1. Valitse **Käytä mallia** luodaksesi uuden SharePoint-sivuston IT-tukipalvelu-mallin avulla.

    ![Käytä mallia](../../../../../translated_images/0.4_05_SelectUseTemplate.380fb401b622efb6e14f6d283bf75342d86422820253e32180461208feeaeae4.fi.png)

1. Syötä sivustosi tiedot. Esimerkki:

    | Kenttä | Arvo |
    | --- | --- |
    | Sivuston nimi | Contoso IT |
    | Sivuston kuvaus | Copilot Studio aloittelijoille |
    | Sivuston osoite | ContosoIT |

    ![Sivuston tiedot](../../../../../translated_images/0.4_06_SiteDetails.a0a8d49f3df370e8663f49927f0b4416ab154f5bf9495bf7b84b070111db0a0c.fi.png)

1. Viimeisessä vaiheessa voit valita kielen SharePoint-sivustolle. Oletuksena kieli on **englanti**. Jätä kieli **englanniksi** ja valitse **Luo sivusto**.

    ![Kieli ja muut vaihtoehdot](../../../../../translated_images/0.4_07_LanguageOtherOptions.256f55ab0ef024b41fe6816d309a6713aa78daa6f45938b90f3bdd71938fb163.fi.png)

1. SharePoint-sivusto luodaan muutamassa sekunnissa. Voit halutessasi lisätä muita käyttäjiä sivustollesi syöttämällä heidän sähköpostiosoitteensa **Lisää jäseniä** -kenttään. Kun olet valmis, valitse **Valmis**.

    ![Valitse valmis](../../../../../translated_images/0.4_08_SelectFinish.473163c547450b362c6b0c872d061a7aa438116d8b498f0356180aa8a1a20a88.fi.png)

1. SharePoint-sivuston etusivu latautuu seuraavaksi. **Kopioi** SharePoint-sivuston URL-osoite.

1. Tämä malli tarjoaa sivuja, joissa on esimerkkitietoja eri IT-käytännöistä, sekä kaksi esimerkkiluetteloa (Tickets ja Devices).

### Käytä Devices SharePoint -luetteloa

Käytämme **Devices**-luetteloa [Tehtävässä 07 - Lisää uusi aihe laukaisimella ja solmuilla](../07-add-new-topic-with-trigger/README.md#73-add-a-tool-using-a-connector).

### Lisää uusi sarake

Vieritä luettelon oikeaan reunaan ja valitse **+ Lisää sarake** -painike. Valitse **hyperlinkki**-tyyppi, syötä sarakkeen nimeksi **Kuva** ja valitse lisää.

### Luo esimerkkitietoja Devices SharePoint -luetteloon

Varmista, että täytät tämän luettelon vähintään neljällä esimerkkitietokohteella ja lisäät yhden lisäsarakkeen tähän luetteloon.  

Kun lisäät esimerkkitietoja, varmista, että seuraavat kentät täytetään:

- Laitteen kuva - käytä kuvia [laitteiden kuvat -kansiosta](https://github.com/microsoft/agent-academy/tree/main/docs/recruit/00-course-setup/images/device-images)  
- Otsikko  
- Tila  
- Valmistaja  
- Malli  
- Omaisuustyyppi  
- Väri  
- Sarjanumero  
- Ostopäivä  
- Ostohinta  
- Tilausnumero  
- Kuva - käytä seuraavia linkkejä  

|Laite  |URL  |
|---------|---------|
|Surface Laptop 13     | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-13.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-13.png)        |
|Surface Laptop 15     | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-15.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-15.png)        |
|Surface Pro    | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Pro-12.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Pro-12.png)        |
|Surface Studio    | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Studio.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Studio.png)        |

---

## ✅ Tehtävä suoritettu

Olet onnistuneesti:

- Luonut Microsoft 365 -kehitysympäristön  
- Aktivoinut Copilot Studio -kokeilujakson  
- Luonut SharePoint-sivuston agenttien pohjustamista varten  
- Täyttänyt Devices-luettelon tulevia tehtäviä varten  

Olet virallisesti valmis aloittamaan **rekrytointitason agenttikoulutuksen** [Oppitunnilla 01](../01-introduction-to-agents/README.md).  

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/00-course-setup" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.