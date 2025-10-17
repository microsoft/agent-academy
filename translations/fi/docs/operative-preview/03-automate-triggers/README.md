<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-17T05:34:06+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "fi"
}
-->
# Tehtävä 03: Lisää tapahtumatriggereitä toimimaan itsenäisesti

--8<-- "disclaimer.md"

## 🕵️‍♂️ Koodinimi: `OPERATION SIGNAL POINT`

> **⏱️ Operaatioaikaikkuna:** `~45 minuuttia`

## 🎯 Tehtävän kuvaus

Tervetuloa takaisin, Agentti. [Tehtävässä 02](../02-multi-agent/README.md) opit rakentamaan Application Intake -alaisagentin ja Interview Prep -liitetyn agentin laajentaaksesi päärekrytointiauttajasi kyvykkyyksiä.

Tehtäväsi, jos päätät hyväksyä sen, on **Operation Signal Point** - syventyminen **tapahtumatriggereihin** - nostamalla agenttijärjestelmäsi reaktiivisesta **itsenäiseen toimintaan**. Muutat agenttisi odottamasta ihmisen syötettä proaktiivisesti reagoimaan ulkoisiin tapahtumiin ja toimimaan älykkäästi ilman valvontaa.

Ajattele sitä päivityksenä agenteista, jotka _vastaavat kysymyksiin_, agenteiksi, jotka _ennakoivat tarpeita_ ja _toimivat itsenäisesti_. Tapahtumatriggereiden ja automatisoitujen työnkulkujen avulla rekrytointiauttajasi tunnistaa saapuvat ansioluettelot sähköpostitse, käsittelee liitteet automaattisesti, tallentaa tiedot Dataverseen ja ilmoittaa HR-rekrytointitiimillesi Microsoft Teamsin kautta - samalla kun keskityt tärkeämpiin tehtäviin.

Tervetuloa maailmaan, jossa automaatio kohtaa älykkyyden.

## 🔎 Tavoitteet

Tässä tehtävässä opit:

1. Kuinka tapahtumatriggerit mahdollistavat itsenäisen agenttikäyttäytymisen ilman käyttäjän vuorovaikutusta
1. Erot interaktiivisten ja itsenäisten agenttien välillä Copilot Studiossa
1. Kuinka luoda tapahtumatriggereitä, jotka käsittelevät sähköpostiliitteitä automaattisesti ja lataavat tiedostoja Dataverseen
1. Kuinka rakentaa agenttivirtoja, jotka lähettävät mukautettuja kortteja Teams-kanaville ilmoituksia varten
1. Kuinka siirtää tietoja tapahtumatriggereiden ja agenttivirtojen välillä päästä päähän -automaatioon

## 🤔 Mikä on tapahtumatriggeri?

Aiemmin [Recruitissa](../../recruit/10-add-event-triggers/README.md) opimme tapahtumatriggereistä. Käydään tämä nopeasti läpi, jos se meni ohi.

**Tapahtumatriggerit** antavat agentin _toimia_ _itsenäisesti_, kun jotain tapahtuu toisessa järjestelmässä - ilman käyttäjän viestiä. Kun määritetty tapahtuma käynnistyy - kuten “uusi SharePoint-kohde,” “uusi sähköposti,” “Planner-tehtävä osoitettu” tai jopa ajastettu tapahtuma, liitin lähettää triggerin hyötykuorman agentille. Agentti seuraa sitten ohjeitasi päättääkseen, mitä toimia tai aiheita kutsua.

### Keskeiset ominaisuudet

- **Itsenäinen aktivointi:**
      - Toisin kuin aiheet, jotka käynnistyvät, kun käyttäjä kirjoittaa agentille, tapahtumatriggerit käynnistyvät ulkoisista tapahtumista, mikä mahdollistaa proaktiivisen käyttäytymisen.

- **Hyötykuormaohjattu:**
      - Jokainen tapahtuma toimittaa hyötykuorman (muuttujat + valinnaiset ohjeet) liittimen kautta. Agentti käyttää määrittelemiäsi ohjeita ja hyötykuormaa päättääkseen, mitä tehdä seuraavaksi.
      - Esimerkiksi _kutsua aihe_ tai _suorittaa työkalujen määrittelemät toiminnot_.

- **Valmiit esimerkit:**
      - SharePoint/OneDrive-tiedosto tai -kohde luotu
      - Planner-tehtävä suoritettu/osoitettu
      - Microsoft Forms -vastaus lähetetty
      - Ajastettu tapahtuma

    Saatavuus riippuu organisaatiosi Power Automate -datapolitiikoista.

- **Vaatii generatiivista orkestrointia:**
      - Tapahtumatriggerit ovat saatavilla vain, kun generatiivinen orkestrointi on aktivoitu agentille.

- **Laskutus/käyttö:**
      - Jokainen triggerin toimitus lasketaan viestiksi Copilot Studion kapasiteetissa.
      - Esimerkiksi 10 minuutin ajastettu tapahtuma lähettää viestin joka 10 minuutti.

- **Todennusmalli ja asennus:**
      - Lisää triggerit agentin Yleiskatsauksessa, kohdassa _Triggerit_. Triggerin liittimen todennus käyttää agentin tekijän tiliä (“agentin tekijän todennus”).
      - Voit muokata triggerin parametreja ja hyötykuormaa Power Automate -tekijäportaalissa.

- **Testaus ja havainnointi:**
      - Voit testata triggereitä agentin testipaneelista ja tarkastella käyttäytymistä toimintakartalla ennen julkaisua.

!!! info "TL;DR kehittäjille"

    Ajattele tapahtumatriggereitä **webhook-tyyppisinä signaaleina**, jotka työntävät rakenteellisen hyötykuorman agentillesi, antaen sen _aloittaa_ työn ja ketjuttaa toimintoja järjestelmien välillä - odottamatta käyttäjän pyyntöä.

### Aihetriggerit - miten ne eroavat

Aiemmin opit aihetriggereistä [Recruitissa](../../recruit/07-add-new-topic-with-trigger/README.md), mutta saatat silti miettiä, miten _aihetriggerit_ eroavat _tapahtumatriggereistä_ ja miksi tämä ero on tärkeä ymmärtää, kun halutaan ymmärtää, mikä tekee agentista itsenäisen.

Aihetriggerit hallitsevat _milloin aihe käynnistyy_, yleensä vastauksena käyttäjän viestiin.

- Generatiivisessa orkestroinnissa oletustriggeri on **By agent** - suunnittelija valitsee aiheen, jonka nimi/kuvaus parhaiten vastaa käyttäjän viestiä.
- Klassillisessa orkestroinnissa oletus on **Fraasit** - suunnittelija valitsee aiheen, kun yksi tai useampi triggerifraasi parhaiten vastaa käyttäjän viestiä.

Muita triggerityyppejä ovat `Viestin vastaanotto`, `Tapahtuman vastaanotto`, `Toiminnan vastaanotto`, `Keskustelun päivitys`, `Kutsun vastaanotto`, `Passitus`, `Toimettomuus` ja `Suunnitelman suoritus`.

!!! info "Keskeinen ero"

    Aihetriggerit ovat _keskustelutoiminnan_ käynnistäjiä chatissa.
    
    Tapahtumatriggerit ovat järjestelmän _tapahtumien_ käynnistäjiä, jotka toimitetaan liittimien kautta ja voivat käynnistää agentin ilman keskustelua.

### Pikaopas aihetriggeristä vs tapahtumatriggeristä

- **Aihetriggeri:** Käyttäjä (tai chat-toiminta) sanoi/teki X ➡️ suorita aihe T.
- **Tapahtumatriggeri:** SharePoint/Planner/Sähköposti/Ajastin käynnistyi hyötykuormalla P ➡️ agentti arvioi ohjeet ➡️ kutsu Toiminnot/Aiheet vastaavasti.

## 🏓 Interaktiivinen agentti vs itsenäinen agentti - vertailu

Nyt kun tiedät eron tapahtumatriggereiden ja aihetriggereiden välillä, opitaan seuraavaksi ero interaktiivisen agentin ja itsenäisen agentin välillä.

Copilot Studion termeissä "interaktiivinen" viittaa agenteihin, jotka pääasiassa toimivat **aiheiden** kautta chatissa tai kanavassa. "Itsenäinen" viittaa agenteihin, jotka hyödyntävät myös **tapahtumatriggereitä** toimiakseen ilman käyttäjän syötettä.

Seuraava taulukko tiivistää niiden erot ja yhtäläisyydet.

| Ulottuvuus                          | Interaktiivinen agentti | Itsenäinen agentti                                                                                           |
|-------------------------------------|-------------------------|-------------------------------------------------------------------------------------------------------------|
| Miten käynnistyy                   | Käyttäjä (tai chat-toiminta) käynnistää aiheen. Esimerkki: By agent, Fraasit, Viestin vastaanotto. | Ulkoinen tapahtumatrigger lähettää hyötykuorman liittimen kautta agentille. Esimerkki: SharePoint, Planner, sähköposti, ajastin jne. |
| Pääasiallinen käyttö               | Kysymys-vastaus, ohjatut työnkulut, pyynnöstä ohjatut toiminnot chatissa - Teams, web jne. | Proaktiiviset toiminnot ja taustalla tapahtuva automaatio - reagoi järjestelmämuutoksiin ja ilmoittaa, arkistoi tai orkestroi tehtäviä. |
| Triggeripinta                      | Aihetriggerit: By agent / Fraasit / Viestin vastaanotto / Toimintatyypit / Kutsu / Toimettomuus / Suunnitelman suoritus | Tapahtumatriggerikirjasto liittimien kautta; hyötykuorma sisältää tapahtumatiedot + valinnaiset ohjeet. |
| Suunnittelija (generatiivinen orkestrointi) | Hyödynnetään vahvasti By agent- ja Suunnitelman suoritus -triggereissä aiheiden valintaan/järjestykseen. | Vaaditaan tapahtumatriggereille; agentti käyttää ohjeita + hyötykuormaa päättääkseen, mitä toimintoja/aiheita kutsua. |
| Tyypillinen esimerkki              | Käyttäjä kysyy "Mikä on palautuskäytäntömme?" → Aihe käynnistyy, hakee tietoa, vastaa. | Uusi Planner-tehtävä osoitettu → Tapahtumatriggeri käynnistyy → Agentti lähettää Teams-viestin, päivittää tietueen tai kutsuu aiheen. |
| Asennuspolku                       | Luo aiheet, määritä triggerityyppi, kirjoita dialogi/toiminnot; julkaise kanaville. | Lisää tapahtumatriggeri (Yleiskatsaus → Triggerit), todenna liitin agentin tekijän tunnuksilla, määritä hyötykuorma/ohjeet; testaa testipaneelin kautta; julkaise. |
| Todennus ja hallinta               | Toimii kanavan/todennuksen kontekstissa; aihetriggerit vastaavat chat-toimintoihin sallituissa kanavissa. | Triggerin saatavuus riippuu Power Automate -datapolitiikoista; liittimet toimivat agentin tekijän tilillä. |
| Havainnointi                       | Testaa aiheet Copilot Studiossa, tarkastele keskustelutranskriptejä/toimintoja. | Käytä Test triggeriä ja toimintakarttaa varmistaaksesi suoritus ennen julkaisua, seuraa toimintaa julkaisun jälkeen. |
| Kapasiteettivaikutus               | Jokainen käyttäjän viesti/agentin vastaus on viesti, joka kuluttaa kapasiteettia. | Jokainen tapahtuman toimitus on myös viesti, plus kaikki seuraavat toiminnot. Esimerkki: 10 minuutin ajastettu tapahtuma = 6 viestiä/tunti |

### Milloin käyttää mitä?

- Valitse **aihetriggerit (interaktiiviset)**, kun käyttäjät aloittavat agenttikeskustelun - FAQ, ohjattu tiedonkeruu tai komento-tyyppiset tehtävät chatissa. Suunnittelijan By agent -triggeri vähentää manuaalista fraasien kuratointia.
- Lisää **tapahtumatriggerit (itsenäiset)**, kun agentin pitäisi aloittaa keskustelu tai ryhtyä toimiin itsenäisesti - päivityksissä SharePoint/Dataverse, saapuvissa sähköposteissa tai ajastetusti. Tämä siirtää sinut reaktiivisesta proaktiiviseen toimintaan.

## Kehittäjän vinkit ja huomioitavat asiat

1. **Ota käyttöön generatiivinen orkestrointi** kaikille agenteille, jotka haluat tehdä itsenäisiksi. Tapahtumatriggerit eivät näy muuten.

1. **Mallinna hyötykuorma ajoissa.** Päätä, mitkä vähimmäiskentät agenttisi tarvitsee triggeristä, kuten `itemId`, `assignedTo`, `dueDate`, ja lisää ytimekkäät ohjeet, jotka kertovat agentille, mitä toimintoa/aihetta kutsua hyötykuorman arvojen perusteella.

1. **Todennuksen laajuus on tärkeä.** Triggerit todennetaan agentin tekijän tilin kautta. Varmista, että tilillä on oikeat liittimen käyttöoikeudet ja että se noudattaa Power Automate -datapolitiikoita.

1. **Hallitse kustannuksia ja melua.** Korkean taajuuden ajastukset tai erittäin vilkkaat lähteet voivat kasvattaa viestikulutusta nopeasti - rajoita mahdollisuuksien mukaan tai lisää ehtoja triggeriin suodattaaksesi tapahtumia.

1. **Testaa ennen julkaisua.** Käytä **Test triggeriä** ja toimintakarttaa tarkkaillaksesi suunnitelmaa ja kutsuttuja toimintoja - iteroi ohjeita/hyötykuormaa, kunnes käyttäytyminen on vakaata.

## 🧪 Lab 03 - Hakemusten automaattinen käsittely sähköpostitse

Seuraavaksi lisäämme tapahtumatriggerin **Hiring Agentille** ja rakennamme agenttivirran alaiselle **Application Intake Agentille**, joka käsittelee hakemuksia itsenäisesti.

### ✨ Käyttötapaus

!!! info ""

    **HR-rekrytoijana**

    **Haluan** saada ilmoituksen, kun sähköposti, jossa on ansioluettelo, saapuu postilaatikkooni ja se ladataan automaattisesti Dataverseen

    **Jotta voin** pysyä ajan tasalla sähköpostitse lähetetyistä hakemuksista, jotka ladataan automaattisesti Dataverseen

Tämä saavutetaan kahdella tekniikalla:

1. Tapahtumatriggerillä, joka aktivoituu, kun sähköposti saapuu,
    1. Tarkista, että tiedoston `contentType` on `PDF` formaattityyppinä.
    1. Poimi tiedosto ja lataa se Dataverseen Dataverse-liittimen toimien avulla.
    1. Lähetä sitten kehotus agentille jatkokäsittelyä varten siirtämällä syöttöparametrit Dataverse-toimista.

1. Agenttivirta lisätään alaiselle **Application Intake Agentille**, joka käynnistyy tapahtumatriggerin kehotuksesta.
    1. Käytä tapahtumatriggerin kehotuksesta siirrettyjä syöttöparametreja mukautetussa kortissa, joka lähetetään Microsoft Teamsin kanavalle HR-rekrytointitiimin ilmoittamiseksi. Mukautetussa kortissa on linkki Dataversen tietueeseen, joka näkyy **Hiring Agentissa**.

Aloitetaan!

### ✨ Esivaatimukset tehtävän suorittamiseksi

Tarvitset **joko**:

- **Olet suorittanut Tehtävä 01 ja Tehtävä 02** ja sinulla on valmiina Hiring Agent, **TAI**
- **Tuo Tehtävä 03 aloitusratkaisu**, jos aloitat alusta tai haluat ottaa kiinni. [Lataa Tehtävä 03 aloitusratkaisu](https://aka.ms/agent-academy)

!!! note "Ratkaisun tuonti ja esimerkkidata"
    Jos käytät aloitusratkaisua, katso [Tehtävä 01](../01-get-started/README.md) saadaksesi yksityiskohtaiset ohjeet ratkaisujen ja esimerkkidatan tuomisesta ympäristöösi.

Tarvitset myös pääsyn **Microsoft Teamsiin** suorittaaksesi toisen laboratorion harjoituksen mukautetun kortin lähettämisestä Microsoft Teamsiin.

### Lab 3.1 - Automatisoi sähköpostitse saapuvien ansioluetteloiden lataaminen Dataverseen

1. Hiring Agentissa, vieritä alas **Yleiskatsaus-välilehdellä** ja valitse **+ Lisää triggeri**.

       ![Lisää triggeri agentille](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.fi.png)

1. Lista triggereistä ilmestyy. Valitse **Kun uusi sähköposti saapuu (V3)** ja valitse **Seuraava**.

       ![Valitse Kun uusi sähköposti saapuu (V3) triggeri](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.fi.png)

1. Näet nyt **Triggerin nimen** ja **Kirjaudu sisään** -yhteysviittaukset listatuista sovelluksista.

       Nimeä triggeri seuraavasti:
    
       ```text
       Kun uusi sähköposti saapuu hakijalta
       ```

       Varmista, että näet vihreän valintamerkin kunkin listatun sovelluksen yhteysviittauksen kohdalla. Jos et näe vihreää valintamerkkiä, kirjaudu sisään ellipsin (...) kautta ja valitse **+ Uusi yhteysviittaus** luodaksesi uuden yhteysviittauksen.

       ![Päivitä triggerin nimi ja tarkista yhteysviittaukset](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.fi.png)

1. Viimeinen vaihe on asettaa triggerin syöttöominaisuudet. Päivitä seuraavat ominaisuudet seuraavasti:

     | Ominais
Nyt päivitetään tapahtumatriggeri lisäämällä automaatiotoimintoja. Valitse **kolme pistettä (...)** triggerin kohdalla ja valitse **Muokkaa Power Automate -työkalussa**.

![Valitse Muokkaa Power Automate -työkalussa](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.fi.png)

1. Triggeri latautuu Power Automate -portaalin virtaeditoriin. Näet virtaeditorin Power Automate -portaalissa, jossa voimme lisätä logiikkaa ja toimintoja automaation tehostamiseksi. Triggeri näkyy ylimpänä, ja viimeisenä toimintona virrassa on **Lähettää kehotteen määritetylle copilotille käsittelyä varten**.

![Virtaeditori Power Automate -portaalissa](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.fi.png)

1. Oletuksena Power Automate -työkalun **Kun uusi sähköposti saapuu** -triggeri voi käsitellä useita sähköposteja yhdessä, jos niitä saapuu useita kerralla, ja suorittaa virran vain kerran koko erälle.

   Jotta virta suoritetaan erikseen jokaiselle sähköpostille, ota käyttöön **Split On** -asetus triggerin asetuksista ja valitse `@triggerOutputs()?['body/value']` pudotusvalikon array-kentästä.

   Kun **Split On** on käytössä ja array-kenttä asetettu `@triggerOutputs()?['body/value']`, virta suoritetaan erikseen jokaiselle viestille, vaikka niitä saapuisi useita samanaikaisesti.

![Ota käyttöön Split On -asetukset triggerissä](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.fi.png)

1. Lisätään seuraavaksi logiikkaa tarkistamaan liitteen tiedostotyyppi. Haluamme ladata vain .PDF-tiedostoliitteet, emmekä kuvia (nämä voivat olla esimerkiksi sähköpostin allekirjoituksista). Valitse triggerin alapuolella **+**-kuvake ja valitse **Control** kohdasta **Built in tools**.

![Valitse Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.fi.png)

1. Valitse **Condition**-toiminto.

![Valitse Condition-toiminto](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.fi.png)

1. Konfiguroidaan nyt ehto tarkistamaan, onko tiedostoliitteen tyyppi .PDF. **Choose a value** -kentässä valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

   1. Kirjoita **Search**-kenttään seuraava:

      ```text
      content type
      ```

   1. Valitse triggeristä **Attachments Content-Type** -parametri.

   1. Valitse seuraavaksi **Add**, jotta dynaaminen sisältö lisätään toiminnon **Id**-parametriin.

![Konfiguroi Condition-toiminto](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.fi.png)

1. Pysähdytään hetkeksi. Olet ehkä huomannut, että **For each**-toiminto ilmestyi automaattisesti.

   Valitse **For each**-toiminto. Tämä toiminto edustaa silmukointia jokaisen sähköpostin liitteen läpi, koska triggerin **Attachments Content-Type** -parametri liittyy jokaiseen liitteeseen.

   Taustalla se on array, ja siksi **For each**-toiminto lisättiin automaattisesti, kun valitsimme **Attachments Content-Type** -parametrin **Condition**-toiminnossa.

   Lisätietoja tästä saat laajentamalla seuraavan oppimisosion.

??? info "Lisätietoa: For each -toiminnon automaattinen ilmestyminen"

    🤔 **Miksi "Apply to each" tai "For each" ilmestyy automaattisesti?**
    
    Kun valitset parametrin (dynaaminen sisältö), joka edustaa listaa tai arrayta - esimerkiksi liitteiden, sähköpostien tai rivien listaa - Power Automate tunnistaa, että haluat ehkä käsitellä jokaista kohdetta erikseen.
    
    Tämän helpottamiseksi Power Automate lisää automaattisesti **“Apply to each”** (tai **For each**) -silmukan toiminnon ympärille. Tämä varmistaa, että toimintosi suoritetaan kerran jokaiselle listan kohteelle sen sijaan, että yritettäisiin käsitellä koko lista kerralla (mikä voisi aiheuttaa virheitä).

    🦋 **Esimerkki**
    
    - Jos valitset "Attachments" aiemmasta toiminnosta (joka on array) ja yrität käyttää sitä toiminnossa, joka odottaa yksittäistä tiedostoa, Power Automate ympäröi toimintosi **"Apply to each"** (tai **For each**) -silmukalla. 
    - Näin toimintosi suoritetaan **jokaiselle liitteelle** - yksi kerrallaan.
       
    💡 **Tärkeät kohdat**
    
    - **Automaattinen:** Silmukka ilmestyy automaattisesti auttamaan sinua käsittelemään jokaista kohdetta kokoelmassa.
    - **Estää virheet:** Ilman silmukkaa toimintosi saattaa epäonnistua, koska se ei voi käsitellä useita kohteita kerralla.
    - **Visuaalinen vihje:** Se on visuaalinen tapa näyttää, että virta toistaa toiminnon jokaiselle listan kohteelle.

![For Each -toiminto selitettynä](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.fi.png)

1. Seuraavaksi, toisessa **Choose a value** -kentässä, kirjoita seuraava:

   ```text
   application/pdf
   ```

   Tämä varmistaa, että jokaisen tiedostoliitteen kohdalla tarkistetaan, onko tiedostomuoto .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.fi.png)

1. Konfiguroidaan nyt **True**-polku, jotta tiedosto voidaan poimia sähköpostista ja ladata **Resume**-Dataverse-taulukkoon.

   Lisää uusi toiminto **True**-polun alle ja etsi `html to text`. Valitse **Html to text** -toiminto.

   Lisätietoja **Html to text** -toiminnosta saat laajentamalla seuraavan oppimisosion.

??? info "Lisätietoa: Html to text -toiminto"

    🤔 **Mikä on "HTML to text" -toiminto?**
    
    **HTML to text** -toiminto Power Automate -työkalussa muuntaa HTML-muotoisen sisällön pelkäksi tekstiksi. Tämä on erityisen hyödyllistä, kun vastaanotat dataa (kuten sähköposteja, verkkosisältöä tai API-vastauksia), jotka sisältävät HTML-tageja, ja haluat poimia vain luettavan tekstin ilman muotoiluja tai koodia.

    ⚙️ **Miten se toimii?**
    
    - **Syöte:** Syötät HTML-sisältöä (esimerkiksi sähköpostin runko).
    - **Tulos:** Toiminto poistaa kaikki HTML-tagit ja palauttaa vain pelkän tekstin.
    
    👍🏻 **Milloin sitä kannattaa käyttää?**
    
    - Kun haluat poimia luettavaa tekstiä sähköposteista, verkkosivuilta tai API-vastauksista, jotka sisältävät HTML:ää.
    - Ennen sisällön lähettämistä järjestelmiin, jotka eivät tue HTML-muotoilua (kuten SMS, Teams-viestit tai tietokannat).
    - Datan siistimiseen jatkokäsittelyä tai analysointia varten.

    🔭 **Mistä sen löytää?**
    
    - Power Automate -työkalussa Agent Flows -osiossa, etsi toiminto nimeltä `HTML to text`. Se löytyy **Data Operations** -liittimestä.
       
    💡 **Tärkeät kohdat**
    
    - Poistaa kaikki HTML-tagit ja jättää vain tekstin.
    - Ei tulkitse tai suorita skriptejä/tyylejä - poistaa vain tagit.
    - Hyödyllinen datan siistimiseen ja sisällön valmisteluun pelkkänä tekstinä.

![Lisää HTML to text -toiminto](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.fi.png)

1. Seuraavaksi meidän täytyy luoda uusi yhteysviite **Html to text** -toiminnolle valitsemalla **Add new**.

![Lisää uusi yhteysviite](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.fi.png)

1. Toiminto voidaan nyt konfiguroida. Lisätään triggerin **Body**-parametri. **Content**-kentässä valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

![Lisää dynaaminen sisältö](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.fi.png)

1. **Dynamic content** -välilehdessä etsi `body` ja valitse triggerin **Body**-parametri, jonka jälkeen valitse **Add**.

![Lisää Body-parametri](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.fi.png)

1. Olemme valmiita konfiguroimaan tämän toiminnon, joten poistutaan toiminnosta valitsemalla vasemmalle osoittavat kaksoisnuolet («) paneelin pienentämiseksi.

![Pienennä toimintopaneeli](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.fi.png)

1. Lisätään uusi toiminto valitsemalla **+**-kuvake **Html to text** -toiminnon alapuolella, mikä avaa paneelin toimintojen lisäämistä varten. Valitse **Microsoft Dataverse** -liitin.

![Lisää uusi toiminto](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.fi.png)

1. Valitse **Add a new row** -toiminto.

![Lisää uusi rivi -toiminto](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.fi.png)

1. Nimeä toiminto valitsemalla **Kolme pistettä (...)**, kopioi ja liitä seuraava nimi:

   ```text
   Add a new Resume row
   ```

   **Table name** -parametrissa etsi `res` ja valitse **Resumes**-taulukko.

![Nimeä toiminto ja konfiguroi Table name -parametri](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.fi.png)

1. Valitse seuraavaksi **Resume Title** -kenttä ja valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

![Konfiguroi Resume Title -parametri](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.fi.png)

1. **Function-välilehdessä** syötä seuraava lauseke, joka käyttää `item()`-funktiota:

   ```text
   item()?['name']
   ```

   Lisätietoja `item()`-funktiosta saat laajentamalla seuraavan oppimisosion.

??? info "Lisätietoa: `item()`-funktio"

    🤔 **Mikä on `item()`-funktio?**
    
    - Kun käytät **Apply to each** -toimintoa, Power Automate käy läpi kokoelman (array) jokaisen elementin.
    - Sitä käytetään yleisimmin toiminnon kuten **Apply to each** (tai **For each**), **Select** tai **Filter array** sisällä.

    ⚙️ **Miten se toimii?**
    
    - `item()` on funktio, joka palauttaa silmukassa tai array-operaatiossa käsiteltävän nykyisen kohteen.
    - Silmukan sisällä `item()` viittaa _käsiteltävään elementtiin_.

    📌 **Missä sitä käytetään?**
    
    - **Apply to each:** nykyisen kohteen ominaisuuksien käyttämiseen.
    - **Select:** arrayn jokaisen kohteen muuntamiseen.
    - **Filter array:** nykyisen kohteen viittaamiseen arvioinnin aikana.

    🦋 **Esimerkki**
    
    - Lauseke silmukan sisällä:
           -  `item()?['Email']`
    - Tämä hakee nykyisen kohteen `Email`-ominaisuuden.
       
    💡 **Tärkeät kohdat**
    
    - `item()` on _kontekstisidonnainen_: se viittaa aina silmukan tai array-operaation nykyiseen kohteeseen.
    - Jos silmukoita on useita, voit käyttää `items('LoopName')` viitataksesi tietyn silmukan kohteisiin.

   Valitse **Add**, jotta lauseke lisätään **Resume Title** -parametriin.

![Lisää lauseke Resume Title -parametriin](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.fi.png)

1. Meidän täytyy vielä konfiguroida useita parametreja. Valitse **Show all** ja **Cover Letter** -kentässä valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

   **Function-välilehdessä** syötä seuraava lauseke, joka käyttää samaa lauseketta kuin edellisessä [tehtävässä](../02-multi-agent/README.md).

   ```text
   if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
   ```

   Tämä lauseke tarkistaa, onko **Html to text** -toiminnosta saatu _teksti_ pidempi kuin 2000 merkkiä, ja jos on, palauttaa vain ensimmäiset 2000 merkkiä; muuten se palauttaa koko tekstin.

![Lisää lauseke Cover Letter -parametriin](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.fi.png)

1. Lauseke on nyt lisätty **Cover Letter** -kenttään.

![Lauseke lisätty Cover Letter -parametriin](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.fi.png)

1. **Source Email Address** -kenttään etsi `from` ja valitse triggeristä **From**-parametri, koska se sisältää sähköpostiosoitteen.

![Source Email Address -parametri](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.fi.png)

1. **Upload Date** -kentässä valitse oikealla oleva **salaman kuva** tai **fx-kuvake**. **Function-välilehdessä** syötä seuraava lauseke, joka käyttää `utcNow()`-funktiota.

   ```text
   utcNow()
   ```

   Lisätietoja `utcNow`-funktiosta saat laajentamalla seuraavan oppimisosion.

??? info "Lisätietoa: `utcNow`-funktio"

    🤔 **Mikä on `utcNow()`-funktio?**
    
    - `utcNow()`-funktio Power Automate -työkalussa palauttaa nykyisen päivämäärän ja ajan koordinoidussa yleisajassa (UTC) ISO 8601 -muodossa, kuten: `2025-09-23T04:32:14Z`
    
    🦋 **Esimerkki**
    
    - Lauseke:
           -  `concat('Raportti luotu ', utcNow())`
    - Tulos on:
           - Raportti luotu `2025-09-23T04:32:14Z`
       
    💡 **Tärkeät kohdat**

- **Ei vaadi argumentteja (syöttöparametreja):** antaa aina nykyisen UTC-aikaleiman.
   - **Käyttötapaukset**
       - Aikaleimojen lisääminen lokitietoihin tai tiedostonimiin
       - Nykyisen ajan vertaaminen muihin päivämääriin
       - Aikataulutus tai ajankohtaan perustuvat ehdot

   ![Latauspäivämäärä-parametri](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.fi.png)

1. Olemme nyt saaneet valmiiksi **Lisää uusi ansioluettelorivi** -toiminnon määrittämisen, joten poistutaan paneelista pienentämällä se.

   ![Poistu toimintopaneelista](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.fi.png)

1. Lisätään uusi toiminto valitsemalla **+ -kuvake** **Lisää uusi ansioluettelorivi** -toiminnon alapuolelta, mikä avaa paneelin toimintojen lisäämistä varten. Valitse uudelleen **Microsoft Dataverse** -liitin.

   ![Lisää Dataverse-toiminto](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.fi.png)

1. Valitse **Lataa tiedosto tai kuva** -toiminto.

   ![Lisää Lataa tiedosto tai kuva -toiminto](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.fi.png)

1. Nimeä toiminto uudelleen valitsemalla **Kolme pistettä (...)**, kopioi ja liitä seuraava nimi:

   ```text
   Lataa ansioluettelo
   ```

   ![Nimeä toiminto uudelleen](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.fi.png)

1. Valitse seuraavaksi **Sisällön nimi** -kenttä ja napsauta oikealla olevaa **salaman kuvaketta** tai **fx-kuvaketta**.

   **Toiminto-välilehdellä** syötä seuraava lauseke, joka käyttää `item()`-funktiota. Tämä hakee nykyisen kohteen (liitetiedoston) `name`-ominaisuuden.

   ```text
   item()?['name']
   ```

   ![Määritä Sisällön nimi -parametri](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.fi.png)

1. **Taulun nimi** -parametrille etsi `res` ja valitse **Ansioluettelot**-taulu.

   ![Määritä Taulun nimi -parametri](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.fi.png)

1. Valitse seuraavaksi **Rivin tunnus** -kenttä ja napsauta oikealla olevaa **salaman kuvaketta** tai **fx-kuvaketta**.

   Etsi `ID` ja valitse **Ansioluettelo**-parametri _Lisää uusi rivi_ Dataverse-toiminnosta, koska tämä sisältää rivin tunnusarvon, johon PDF-tiedosto ladataan.

   Valitse **Lisää**.

   ![Valitse Rivin tunnus](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.fi.png)

1. Valitse **Sarakkeen nimi** -kenttä ja valitse **Ansioluettelo PDF** -vaihtoehto.

   ![Määritä Sarakkeen nimi -parametri](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.fi.png)

1. Valitse **Sisältö**-kenttä ja napsauta oikealla olevaa **salaman kuvaketta** tai **fx-kuvaketta**.

   **Toiminto-välilehdellä** syötä seuraava lauseke, joka käyttää `item()`-funktiota. Tämä hakee nykyisen kohteen (liitetiedoston) `contentBytes`-ominaisuuden. `contentBytes` viittaa tiedoston tai liitteen raakabinaaridataan, joka on koodattu Base64-merkkijonoksi.

   ```text
   item()?['contentBytes']
   ```

1. Olemme saaneet tämän toiminnon määrittämisen valmiiksi, joten poistutaan toiminnosta valitsemalla vasemmalle osoittavat kaksoisnuolet («) pienentääksemme paneelin.

   ![Pienennä toimintopaneeli](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.fi.png)

1. Valitse seuraavaksi **Lähettää kehotteen määritetylle copilotille käsittelyä varten**, vedä ja pudota tämä toiminto **Lataa ansioluettelo** -toiminnon alapuolelle _True_-polussa.

   ![Vedä ja pudota toiminto True-polkuun](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.fi.png)

1. Valitse **Lähettää kehotteen määritetylle copilotille käsittelyä varten** määrittääksesi sen.

   ![Valitse toiminto](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.fi.png)

1. **Runko/viesti**-kentässä valitse kaikki kentän sisältö ja tyhjennä/poista se.

   ![Tyhjennä Runko-parametri](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.fi.png)

1. Kopioi ja liitä seuraava teksti **Runko/viesti**-kenttään ja korosta `RESUME ID PLACEHOLDER`.

   ```text
   Lähetä [ResumeId (text)] = "RESUME ID PLACEHOLDER" ja [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" ja [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" työkalulle "Ilmoita Teamsin hakijakanavalle" lapsiagentissa "Hakemusten vastaanottoagentti"
   ```

   ![Korvaa Ansioluettelon ID -paikkamerkki](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.fi.png)

1. Valitse oikealla oleva **salaman kuvake** tai **fx-kuvake**.

   Etsi `resume` ja valitse **Ansioluettelo**-parametri _Lisää uusi rivi Dataverse_-toiminnosta, koska tämä sisältää luodun ansioluettelorivin `ID`-arvon.

   Valitse **Lisää**.

   ![Valitse Ansioluettelo-parametri](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.fi.png)

1. Korosta `RESUME TITLE PLACEHOLDER`. Valitse oikealla oleva **salaman kuvake** tai **fx-kuvake**.

   Etsi `title` ja valitse **Ansioluettelon otsikko** -parametri _Lisää uusi rivi Dataverse_-toiminnosta, koska tämä sisältää luodun ansioluettelorivin `otsikko`-arvon.

   Valitse **Lisää**.

   ![Valitse Ansioluettelon otsikko -parametri](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.fi.png)

1. Korosta `RESUME NUMBER PLACEHOLDER`. Valitse oikealla oleva **salaman kuvake** tai **fx-kuvake**.

   Etsi `resume number` ja valitse **Ansioluettelon numero** -parametri _Lisää uusi rivi Dataverse_-toiminnosta, koska tämä sisältää luodun ansioluettelorivin `numero`-arvon.

   Valitse **Lisää**.

   ![Valitse Ansioluettelon numero -parametri](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.fi.png)

1. Olemme saaneet tämän toiminnon ja agenttivirran määrittämisen valmiiksi 🙌🏻 Hyvin menee! Tallenna nyt tapahtumakäynnistysvirta valitsemalla **Tallenna luonnos**.

   ![Tallenna luonnos](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.fi.png)

1. Nyt meidän täytyy muokata agenttivirran tietoja, valitse **Takaisin**.

   ![Valitse Takaisin](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.fi.png)

1. Valitse **Muokkaa** **Tiedot**-osiossa ja päivitä **Suunnitelma** **Copilot Studio** -vaihtoehtoon.

   Valitse **Tallenna**.

   ![Vaihda Copilot Studio -suunnitelma](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.fi.png)

1. Näyttöön tulee modal, joka pyytää vahvistamaan siirtymisen Copilot Studio -suunnitelmaan. Valitse **Vahvista**.

   ![Vahvista Copilot Studio -suunnitelman vaihto](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.fi.png)

1. Suunnitelma on nyt päivitetty **Copilot Studio** -suunnitelmaan. Valitse **Muokkaa**, koska meidän täytyy julkaista tapahtumakäynnistysvirta agentillemme.

   ![Muokkaa virtaa](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.fi.png)

1. Valitse **Julkaise**.

   ![Julkaise](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.fi.png)

   Hurraa! Tapahtumakäynnistysvirta on nyt julkaistu 😃

   ![Julkaistu](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.fi.png)

Jatketaan uuden agenttivirran luomisella, jonka lapsi **Hakemusten vastaanottoagentti** käynnistää.

### Lab 3.2 - Ilmoita Teams-kanavalle mukautetulla kortilla

Nyt luomme uuden agenttivirran lapsiagentille **Hakemusten vastaanottoagentti**, joka käyttää tapahtumakäynnistyksen välittämiä arvoja lähettääkseen mukautetun kortin Teams-kanavalle. Tämä mukautettu kortti ilmoittaa HR-rekrytointitiimille automaattisesti ladatusta PDF-tiedostosta, jotta he voivat tarkistaa sen.

Aloitetaan!

1. Valitse **Rekrytointiautomaatti**-sovelluksessa **Agentit**-välilehti ja valitse **Hakemusten vastaanottoagentti**.

   ![Valitse Hakemusten vastaanottoagentti](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.fi.png)

1. Selaa alas kohtaan **Työkalut** ja valitse **+ Lisää**.

   ![Lisää työkalu](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.fi.png)

1. Näyttöön tulee **Lisää työkalu** -modal. Valitse **+ Uusi työkalu**.

   ![Valitse Uusi työkalu](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.fi.png)

1. Valitse **Agenttivirta**.

   ![Valitse Agenttivirta](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.fi.png)

1. **Agenttivirran suunnittelija** latautuu seuraavaksi. **Kun agentti kutsuu virtaa** -käynnistimessä valitse **+ Lisää syöte**.

   ![Valitse lisää syöte](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.fi.png)

1. Valitse **Teksti** käyttäjän syötteen tyypiksi.

   ![Valitse Teksti](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.fi.png)

1. Syötä tekstikenttään seuraava syöteparametrin nimi.

   ```text
   ResumeId
   ```

   ![Ansioluettelon ID -syöte](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.fi.png)

1. Toista samat vaiheet lisätäksesi toisen tekstisyötteen. Kopioi ja liitä seuraava syöteparametrin nimi.

   ```text
   ResumeTitle
   ```

   ![Ansioluettelon otsikko -syöte](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.fi.png)

1. Toista samat vaiheet lisätäksesi kolmannen tekstisyötteen. Kopioi ja liitä seuraava syöteparametrin nimi.

   ```text
   ResumeNumber
   ```
   ![Ansioluettelon numero -syöte](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.fi.png)

1. Muistatko, kuinka [Rekrytointi](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request)-osiossa lisäsimme mukautetun kortin aiheen sisälle agentillemme? Tällä kertaa aiomme lisätä mukautetun kortin agenttivirtaan. Lisäämme nyt toisen toiminnon agenttivirtaamme, joka lähettää mukautetun kortin Teams-kanavalle.

   Valitse **+ -kuvake** käynnistimen alapuolelta.

   ![Lisää uusi toiminto](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.fi.png)

1. Valitse **Lähetä kortti keskusteluun tai kanavalle** -toiminto.

   ![Valitse Lähetä kortti keskusteluun tai kanavalle -toiminto](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.fi.png)

1. Microsoft Teams -yhteysviite täytyy luoda kirjautuneella käyttäjätililläsi. Valitse **Kirjaudu sisään**.

   ![Valitse kirjaudu sisään](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.fi.png)

1. Valitse käyttäjätilisi ja valitse sitten **Salli pääsy**.

   ![Valitse Salli pääsy](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.fi.png)

1. Seuraaville syöteparametreille:

   | Parametri | Asetus | Yksityiskohdat |
   |----------|--------|----------------|
   | **Lähetä nimellä** | Valikko | Valitse `Flow bot` -vaihtoehto |
   | **Lähetä** | Valikko | Valitse `Kanava` -vaihtoehto |
   | **Tiimi** | Valikko | Valitse tiimi, joka on käytettävissä ympäristössäsi tämän harjoituksen suorittamista varten |
   | **Kanava** | Valikko | Valitse kanava, joka on käytettävissä ympäristössäsi tämän harjoituksen suorittamista varten |

   ![Määritä syöteparametrit](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.fi.png)

1. Seuraavaksi määritämme **Mukautettu kortti** -kentän. Valitse **Mukautettu kortti** -kenttä.

   ![Valitse Mukautettu kortti -kenttä](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.fi.png)

1. Avaa [Ansioluettelotaulukon päivitetty JSON-tiedosto](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), kopioi sen koko sisältö ja liitä se Mukautettu kortti -kenttään.

   ![Kopioi ja liitä JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.fi.png)

1. Kuten teimme [Rekrytointi](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request)-osiossa, aiomme korvata olemassa olevat arvot JSON-tiedostossa todellisilla arvoilla tai dynaamisella sisällöllä.

   Päivitetään ensin URL-osoite `selectAction`-ominaisuuden `url`-ominaisuudessa. Tämä URL-osoite korvataan **Hiring Hub** -mallipohjaisen sovelluksen Ansioluettelot-järjestelmänäkymän URL-osoitteella. Tämä mahdollistaa rekrytoijan valita toiminnon ja siirtyä Ansioluettelot-järjestelmänäkymään mallipohjaisessa sovelluksessa.

   Korosta nykyinen URL-osoitteen arvo ja poista se.

   ![Valitse URL-arvo](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.fi.png)

1. Siirry **Hiring Hub** -mallipohjaisessa sovelluksessa **Ansioluettelot**-järjestelmänäkymään vasemman reunan valikon kautta ja kopioi URL-osoite. Palaa sitten agenttivirtaan ja liitä kopioitu URL-osoite **url**-ominaisuuteen `selectAction`-ominaisuuden sisällä.

   ![Kopioi Ansioluettelot-järjestelmänäkymän URL](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.fi.png)
1. Näet seuraavan, jossa keltaisella korostettuna ovat ympäristötiedot **Hiring Hub** -mallipohjaisesta sovelluksesta.

     | Parametri | Arvo | Selitys |
     |----------|------------|---------|
     | **Organisaation URI** | GUID | Dataverse/Dynamics 365 -ympäristön organisaation URL |
     | **appid** | GUID | Tietyn mallipohjaisen sovelluksen avaamiseen käytetään joko appid- tai appname-kyselyparametria. Tässä tapauksessa käytetään appid-parametria |
     | **viewid** | GUID | Kyselyparametri, joka on näkymän tunnus |

       ![Liitä URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.fi.png)

1. Seuraavaksi lisätään dynaamisia sisältöarvoja useille ominaisuuksille. Aloitetaan tekstistä, joka näyttää tapahtumatriggerin automaattisesti luoman rivin ansioviitteen.

      Valitse **paneeli**-ikoni ladataksesi toimintopaneelin.

       ![Valitse paneeli-ikoni](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.fi.png)

1. Vieritä alas riville, jossa näet `text`-ominaisuuden kohdalla `RESUME NUMBER PLACEHOLDER`. Korosta paikkamerkin arvo ja poista se.

       ![Poista paikkamerkki](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.fi.png)

1. Klikkaa lainausmerkkien väliin ja valitse oikealta **salaman kuva** tai **fx-ikoni**.

      Valitse **Dynaaminen sisältö** -välilehdeltä **ResumeNumber**-parametri ja valitse **Lisää**.

       ![Lisää ResumeNumber-parametri](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.fi.png)

1. **ResumeNumber**-parametri lisätään nyt dynaamisena sisältönä `text`-ominaisuuteen.

       ![ResumeNumber dynaaminen sisältö](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.fi.png)

1. Toistetaan samat vaiheet `RESUME NAME PLACEHOLDER`-paikkamerkille. Vieritä alas riville, jossa näet `text`-ominaisuuden kohdalla `RESUME NAME PLACEHOLDER`. Korosta paikkamerkin arvo ja poista se.

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.fi.png)

1. Klikkaa lainausmerkkien väliin ja valitse oikealta **salaman kuva** tai **fx-ikoni**.

      Valitse **Dynaaminen sisältö** -välilehdeltä **ResumeTitle**-parametri ja valitse **Lisää**.

       ![Lisää ResumeTitle-parametri](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.fi.png)

1. **ResumeTitle**-parametri lisätään nyt dynaamisena sisältönä `text`-ominaisuuteen.

       ![ResumeTitle dynaaminen sisältö](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.fi.png)

1. Toistetaan samat vaiheet **Due Date**-arvolle, joka edustaa päivämäärää, jolloin rekrytoijan tulisi tarkistaa ansioluettelo. Vieritä alas riville, jossa näet `text`-ominaisuuden kohdalla `May 21, 2023`.

       ![Valitse Salli pääsy](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.fi.png)

1. Poista tämä päivämääräpaikkamerkin arvo ja klikkaa lainausmerkkien väliin.

       ![Poista](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.fi.png)

1. Valitse oikealta **salaman kuva** tai **fx-ikoni** ja **Funktio**-välilehdellä syötä seuraava lauseke ja valitse **Lisää**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Tämä lauseke käyttää kahta funktiota.

     | Funktio | Selitys |
     |----------|------------|
     | **addDays** | Lisää tietyn määrän päiviä annettuun päivämäärään ja palauttaa tuloksena olevan päivämäärän merkkijonona |
     | **utcNow** | Palauttaa nykyisen päivämäärän ja ajan koordinoidussa yleisaikamuodossa (UTC) merkkijonona. |

      utcNow-arvoa varten muotoilemme päivämäärän kuukaudeksi ja päiväksi, jota seuraa vuosi.

       ![Lauseke Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.fi.png)

      Lauseke lisätään nyt `text`-ominaisuuteen.

       ![Lauseke Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.fi.png)

1. Lopuksi päivitetään URL-osoite `url`-ominaisuudelle JSON-payloadin `actions`-taulukon ominaisuuden sisällä. Nykyinen paikkamerkki-URL korvataan ansioluettelorivin URL-osoitteella **Hiring Hub** -mallipohjaisessa sovelluksessa. Tämä mahdollistaa rekrytoijan valita `Action.OpenURL`-toiminnon mukautetussa kortissa ja siirtyä ansioluetteloon mallipohjaisessa sovelluksessa.

       ![Poista Näytä ansioluettelo URL-paikkamerkki](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.fi.png)

1. **Hiring Hub** -mallipohjaisessa sovelluksessa avaa rivi **Resumes**-järjestelmänäkymässä vasemmanpuoleisen valikon avulla. Ansioluettelorivi latautuu lomakkeena mallipohjaisessa sovelluksessa.

      Kopioi ansioluettelorivin URL.

    ??? info "Kuinka navigoida takaisin **Hiring Hub** -mallipohjaiseen sovellukseen, jos olet poistunut/sulkenut sen"

        1. Siirry osoitteeseen [https://make.powerapps.com](https://make.powerapps.com) ja varmista, että olet kehittäjäympäristössä, jota käytät näissä harjoituksissa, tai vaihda siihen.
        
        ![Siirry make.powerapps.com-sivustoon](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.fi.png)

        1. Valitse **Sovellukset** vasemmanpuoleisesta valikosta ja **Hiring Hub** -mallipohjaisessa sovelluksessa valitse **Toista**-ikoni ladataksesi sen selaimeesi.
        
        ![Valitse Hiring Hub -mallipohjainen sovellus](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.fi.png)

       ![Kopioi ansioluettelorivin URL](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.fi.png)

1. Siirry takaisin agenttivirtaan, korosta nykyinen paikkamerkki-URL-arvo ja poista se.

       ![Poista ansioluettelorivin URL-paikkamerkki](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.fi.png)

1. Liitä kopioitu URL **url**-ominaisuuteen `url`-ominaisuuden sisällä.

       ![Liitä kopioitu ansioluettelorivin URL](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.fi.png)

1. Näet seuraavan. Poista `GUID`-tunnusarvo lopusta. Korvataan tämä dynaamisella sisällöllä - **ResumeId**-parametrilla.

       ![Poista Näytä ansioluettelo URL-paikkamerkki](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.fi.png)

1. Valitse oikealta **salaman kuva** tai **fx-ikoni**.

      Valitse **Dynaaminen sisältö** -välilehdeltä **ResumeId**-parametri ja valitse **Lisää**.

       ![ResumeId-parametri](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.fi.png)

1. **ResumeId** lisätään dynaamisena sisältönä. Seuraava keltaisella korostettu on ympäristötietosi **Hiring Hub** -mallipohjaisesta sovelluksesta.

     | Parametri | Arvo | Selitys |
     |----------|------------|---------|
     | **Organisaation URI** | GUID | Dataverse/Dynamics 365 -ympäristön organisaation URL |
     | **appid** | GUID | Tietyn mallipohjaisen sovelluksen avaamiseen käytetään joko appid- tai appname-kyselyparametria. Tässä tapauksessa käytetään appid-parametria |
     | **id** | GUID | Kyselyparametri, joka on ansioluettelorivin tunnus |

       ![ResumeId dynaaminen sisältö](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.fi.png)

1. Olemme nyt valmiita konfiguroimaan **Post card in a chat or channel** -toiminnon 👏🏻 Poistu toimintopaneelista valitsemalla **x**-ikoni.

       ![Sulje paneeli](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.fi.png)

1. Lopuksi konfiguroidaan viimeinen toiminto, **Respond to the agent**, lähettämällä teksti takaisin agentille prosessin päättämiseksi.

      **Respond to the agent** -toiminnossa valitse **+Lisää lähtö**.

       ![Valitse Lisää lähtö](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.fi.png)

1. Valitse **Teksti** lähtötyypiksi.

       ![Valitse teksti lähtötyypiksi](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.fi.png)

1. Syötä seuraava lähtönimeksi.

       ![Päätä keskustelu lähtö](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.fi.png)

1. Syötä seuraava lähtöarvoksi.

       ```text
       Valmis
       ```

       ![Päätä keskustelu lähtöarvo](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.fi.png)

1. Olemme nyt valmiita konfiguroimaan agenttivirran. Valitse **Tallenna luonnos** tallentaaksesi agenttivirran. Vahvistusviesti ilmestyy tallennuksen jälkeen.

       ![Tallenna luonnos](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.fi.png)

1. Ennen agenttivirran julkaisemista meidän täytyy päivittää agenttivirran tiedot. Valitse **Yleiskatsaus**-välilehti ja valitse **Muokkaa**.

      Virran nimen kenttään syötä seuraava.

       ```text
       Ilmoita Teamsin hakijakanavalle
       ```      

      Tämän jälkeen valitse **Päivitä**-ikoni päivittääksesi agenttivirran kuvauksen AI:n avulla.

      Valitse sitten **Tallenna** tallentaaksesi päivitetyt tiedot agenttivirrasta.

       ![Muokkaa ja tallenna tiedot](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.fi.png)

1. Siirry takaisin **Suunnittelija**-välilehdelle ja valitse **Julkaise** julkaistaksesi agenttivirran. Vahvistusviesti ilmestyy tallennuksen jälkeen.

       ![Julkaise agenttivirta](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.fi.png)

1. Agenttivirta täytyy nyt lisätä työkaluksi **Application Intake Agent** -agenttiin. Siirry takaisin **Hiring Agent** -sovellukseen ja valitse **Agentit**-välilehti, sitten valitse **Application Intake Agent**.

       ![Valitse Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.fi.png)

1. Agentin **Tiedot**-osiossa päivitetään **Kuvaus**-kenttä. Kopioi seuraava ja liitä kuvauksen tekstin loppuun.

       ```text
       ja ilmoita myös Teamsin hakijakanavalle
       ```

       ![Päivitä agentin kuvaus](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.fi.png)

1. Seuraavaksi lisätään agenttivirta työkaluksi. Vieritä alas ja valitse **+ Lisää**.

       ![Valitse Lisää](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.fi.png)

1. Valitse aiemmin luotu agenttivirta, **Ilmoita Teamsin hakijakanavalle**.

       ![Valitse agenttivirta](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.fi.png)

1. Valitse seuraavaksi **Lisää ja konfiguroi**.

       ![Valitse Lisää ja konfiguroi](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.fi.png)

1. Agenttivirran **Syötteet**-osiossa näkyvät kolme aiemmin agenttivirrassa konfiguroitua syötettä. Oletuksena **Täytä käyttämällä**-konfiguraatio on asetettu **Täytä dynaamisesti AI:n avulla**. Pidetään tämä asetus ennallaan, sillä tapahtumatriggerin kehotus (viimeisessä toiminnossa, **Lähetä kehotus määritetylle copilotille käsittelyä varten** - tämä on vaiheet 38-44 **Lab 3.1 - Automatisoi ansioluetteloiden lataaminen Dataverseen sähköpostitse vastaanotettuna**) sisältää parametrien arvot, jotka AI poimii.

       ![Työkalun agenttivirran syötteet](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.fi.png)

1. Nyt kun työkalu on lisätty **Application Intake Agent** -agenttiin, agentin ohjeet täytyy päivittää. Valitse **takaisin nuoli**-ikoni palataksesi agenttien listaan.

       ![Valitse takaisin nuoli-ikoni](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.fi.png)

1. Valitse **Application Intake Agent** **Agentit**-välilehdeltä **Hiring Agent** -sovelluksessa.

       ![Valitse Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.fi.png)

1. **Ohjeet**-kentässä lisää uusi rivi `2.Post-Upload`-ohjeiden jälkeen. Kopioi ja liitä seuraavat ohjeet.

       ```text
       Prosessi ansioluettelon lataamiseksi sähköpostitse
       1. Kun saat viestin, **Lähetä [ResumeId (teksti)] = "1680265f-5793-f011-b41b-7c1e525be9f7" ja [ResumeTitle (teksti_1)] = "TAYLOR TESTPERSON (FICTIIVINEN).pdf" ja [ResumeNumber (teksti_2)] = "R01026" työkalulle "Ilmoita Teamsin hakijakanavalle" lapsiagentissa "Application Intake Agent", kutsu [AGENT FLOW PLACEHOLDER]
       ```

       ![Päivitä Application Intake Agentin ohjeet](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.fi.png)

1. Korosta `[AGENT FLOW PLACEHOLDER`-teksti.

       ![Korosta paikkamerkki](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.fi.png)

1. Syötä eteenpäin vinoviiva `/` ja valitse **Ilmoita Teamsin hakijakanavalle**-työkalu.

       ![Valitse Ilmoita Teamsin hakijakanavalle -työkalu](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.fi.png)
1. Agenttivirta käynnistetään nyt **Application Intake Agent** -agentin toimesta ohjeiden mukaisesti, kun tapahtumatriggerin viimeinen toiminto (**Lähettää kehotteen määritetylle copilotille käsiteltäväksi**) lähettää kehotteen, joka sisältää parametriarvot takaisin agentille.

      Valitse **Tallenna** tallentaaksesi päivitetyt ohjeet **Application Intake Agent** -agentille.

       ![Valitse Tallenna](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.fi.png)

1. Ohjeet päivitetään, kun agentti on tallennettu.

       ![Ohjeet päivitetty](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.fi.png)

1. Nyt meidän täytyy **Julkaista** **Hiring Agent**. Valitse **Julkaise** oikeasta yläkulmasta ja valitse _Julkaise tämä agentti_ -modaalissa **Julkaise**.

       ![Julkaise Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.fi.png)

1. Julkaisun jälkeen ilmestyy vahvistusviesti, joka kertoo, että agentti on julkaistu.

       ![Vahvistusviesti](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.fi.png)

Voimme nyt testata agenttia!

### Lab 3.3 - Testaa tapahtumatriggeri

1. Tapahtumatriggerin suorittamiseksi täytyy lähettää sähköposti, jossa on liitteenä ansioluettelo pdf-muodossa. Luo uusi sähköpostiviesti Outlookissa.

     | Sähköpostikomponentti | Tiedot |
     |-----------------------|--------|
     | **Vastaanottaja** | Käytä kirjautunutta käyttäjätiliäsi arvona |
     | **Tiedostoliite** | Lataa [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) -tiedosto |
     | **Viestin sisältö** | Kopioi ja liitä alla oleva teksti sähköpostin sisältöön |

       ```text
       Hyvä rekrytointipäällikkö,

       Kirjoitan ilmaistakseni kiinnostukseni Senior Power Platform Engineer -tehtävää kohtaan organisaatiossanne. Yli yhdeksän vuoden kokemuksella turvallisten ja skaalautuvien ratkaisujen toimittamisesta Microsoftin pilvialustoilla, olen varma kyvystäni tuoda tehokasta panosta tiimiinne.

       Viimeisimmässä tehtävässäni Lead Power Platform Engineerinä kehitin automatisoidun ansioluetteloiden vastaanottoputken, joka vähensi manuaalista lajittelua ja paransi hakukelpoisuutta. Olen toimittanut HR-tapausten hallintasovelluksia, ottanut käyttöön ratkaisukeskeisiä virtoja ja toteuttanut PR-tarkistuksia parantaakseni käyttöönoton läpimenoaikoja. Asiantuntemukseni kattaa Power Apps, Power Automate, Power Pages, Dataverse ja useita Microsoft 365 -palveluita sekä integraatiot Graph/REST API:iden ja Azure Functionsin kanssa.

       Aiemmin kehitin Teams-hyväksyntöjä mukautettavilla korteilla, mikä lyhensi hyväksyntäaikoja samalle päivälle, ja loin vahvoja virheenkäsittelykehyksiä. Taustani sisältää myös vanhojen työnkulkujen siirtämisen Power Automateen ja itsepalveluportaalien rakentamisen, joita sadat työntekijät ovat ottaneet käyttöön.

       Minulla on tietojenkäsittelytieteen kandidaatin tutkinto ja olen sertifioitu Power Platform Developer (PL-400) ja Solution Architect (PL-600). Olen myös intohimoinen mentoroinnista ja olen toiminut vapaaehtoisena paikallisissa maker-ryhmissä.

       Liitteenä on ansioluetteloni harkittavaksenne. Keskustelen mielelläni siitä, miten taitoni ja kokemukseni vastaavat tarpeitanne.

       Kiitos ajastanne ja harkinnastanne.

       Ystävällisin terveisin,
       Taylor Testperson
       ```

       **Lähetä** sähköposti, kun se on valmis.

       ![Luo sähköposti PDF-liitteellä](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.fi.png)

1. Power Automate -valmistajaportaalissa tapahtumatriggerin virralle, valitse **Päivitä**-kuvake nähdäksesi onnistuneen virran suorituksen lähetetylle sähköpostille.

       ![Valitse päivitä-kuvake nähdäksesi virran suorituksen](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.fi.png)

1. Palaa Copilot Studioon **Hiring Agent** -agenttiin ja valitse **Toiminta**-välilehti.

       ![Valitse Toiminta-välilehti](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.fi.png)

1. **Toiminta**-välilehti latautuu ja näyttää kaikki **Hiring Agent** -agentin toiminnot. Siellä on toiminto nimeltä **Automated**, jonka tila on **Valmis**. Tämä toiminto edustaa tapahtumatriggeriä ja agenttivirtaa, joka käynnistettiin.

       ![Toiminto valmis](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.fi.png)

1. Valitse toiminto ja valitse tapahtumatriggeri toimintokartassa. Huomaa oikeanpuoleisessa paneelissa, kuinka kehotteen syöteparametrit sisältävät `Resume Id`, `Resume Title` ja `Resume Number` -parametriarvot **Dataverse**-riviltä, joka luotiin. Tämä johtuu aiemmin vaiheissa 18–27 **Lab 3.1 - Automate uploading resumes to Dataverse received by email** -osiossa konfiguroiduista dynaamisista sisällöistä.

       ![Tapahtumatriggeri](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.fi.png)

1. Siirry takaisin **Hiring Hub** -mallipohjaiseen sovellukseen ja valitse **Resumes system view** -näkymässä **Päivitä** päivittääksesi näkymän. Sähköpostilla lähetetylle ansioluettelolle luotu uusi rivi näkyy nyt, koska se luotiin tapahtumatriggerin kautta.

       ![Ansioluettelorivi luotu](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.fi.png)

1. Palaa Copilot Studioon ja valitse **Notify Teams Applicant Channel** -agenttivirta **Application Intake Agent** -agentissa toimintokartassa. Huomaa oikeanpuoleisessa paneelissa, kuinka syötteillä on arvot Dataverse-riviltä. Tämä johtuu kehotteesta, joka lähetettiin tapahtumatriggerin viimeisessä toiminnossa (**Lähettää kehotteen määritetylle copilotille käsiteltäväksi**) ja joka sisältää parametriarvot juuri luodusta Dataverse-rivistä. Näin voimme siirtää parametriarvoja tapahtumatriggeristä agenttivirtoihin.

       ![Valitse agenttivirta](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.fi.png)

1. Lopuksi tarkastellaan mukautettua korttia, joka on julkaistu kanavalle **Microsoft Teams** -sovelluksessa. Kanavalla näemme mukautetun kortin, joka näyttää tiedot juuri luodusta Dataverse-ansioluettelorivistä. Vie hiiri mukautetun kortin alussa olevan hyperlinkin päälle ja huomaa, kuinka URL on Resumes system view -näkymän URL, jonka konfiguroimme aiemmin JSON-payloadissa (vaiheet 15–19 **Lab 3.2 - Notify a Teams channel using an adaptive card**).

       ![Mukautettu kortti Resumes-taulukon näkymän URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.fi.png)

1. Valitse hyperlinkki, ja sinut ohjataan Resumes system view -näkymään **Hiring Hub** -mallipohjaisessa sovelluksessa selaimessasi.

       ![Resumes system view Hiring Hub -mallipohjaisessa sovelluksessa](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.fi.png)

1. Palaa mukautettuun korttiin, joka on julkaistu kanavalle Microsoft Teamsissa. Tällä kertaa vie hiiri **View Resume** -kohdan päälle, joka on mukautetun kortin `Action.OpenURL`-toiminto. Huomaa, kuinka URL on Resumes-rivi, jonka konfiguroimme aiemmin JSON-payloadissa (vaiheet 30–36 **Lab 3.2 - Notify a Teams channel using an adaptive card**).

       ![Mukautettu kortti Resumes-rivin URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.fi.png)

1. Valitse toiminto, ja sinut ohjataan Resumes-rivin lomakkeeseen **Hiring Hub** -mallipohjaisessa sovelluksessa selaimessasi.

       ![Resumes-rivi Hiring Hub -mallipohjaisessa sovelluksessa](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.fi.png)

## ✅ Tehtävä suoritettu

Onnittelut! 👏🏻 Erinomaista työtä, Operative.

✅ Tapahtumatriggeri: olet luonut tapahtumatriggerin, joka siirtää Dataverse-parametriarvot agenttivirtaan.  
✅ Rakennettu agenttivirta: käyttää Dataverse-parametriarvoja julkaistakseen mukautetun kortin kanavalle Microsoft Teamsissa HR-rekrytointitiimin ilmoittamiseksi.  
✅ Päivitetty lapsiagentin ohjeet: käynnistää virran, kun tapahtumatriggeri on suoritettu.

Tämä mahdollistaa **Hiring Agent** -agentin toimimaan itsenäisesti aina, kun ansioluetteloita vastaanotetaan sähköpostiliitteinä ja ilmoittamaan HR-rekrytointitiimille manuaalista tarkistusta varten.

Tämä oli **Lab 03 - Automating candidate application emails** -osion loppu, valitse alla oleva linkki siirtyäksesi seuraavaan oppituntiin.

⏭️ [Siirry **Authoring Agent Instructions** -oppituntiin](../04-agent-instructions/README.md)

## 📚 Taktiset resurssit

📖 [Tee agentistasi itsenäinen Copilot Studiossa](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)

📖 [Lisää tapahtumatriggeri](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)

📖 [Käytä agenttivirtoja agenttisi kanssa](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)

📖 [Power Automate -triggerien esittely](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)

📖 [Power Automate -virtojen käyttö agenttien kanssa](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)

📖 [Tietojen häviämisen estäminen Copilot Studiossa](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.