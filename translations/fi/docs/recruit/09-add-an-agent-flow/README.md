<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-17T05:42:09+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 09: Lisää agenttivirta aiheeseesi automaatiota varten

## 🕵️‍♂️ Koodinimi: `OPERATION AUTOMATION POWERHOUSE`

> **⏱️ Operaatioaikaikkuna:** `~30 minuuttia`  

🎥 **Katso opastusvideo**

[![Agenttivirran videon pikkukuva](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.fi.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Katso opastus YouTubessa")

## 🎯 Tehtävän kuvaus

Agenttisi osaa nyt keskustella käyttäjien kanssa ja tarjota tietoa, mutta todellinen operatiivinen huippuosaaminen vaatii, että agenttisi osaa myös toimia. Tämä tehtävä muuttaa keskusteluagenttisi automaation voimanpesäksi varustamalla sen agenttivirroilla.

Tehtävän lopussa olet luonut kokonaisvaltaisen laitepyyntöautomaatiojärjestelmän, joka kerää käyttäjän syötteet mukautuvan kortin avulla, hakee tietoja SharePointista, lähettää ilmoituksia esimiehille sähköpostitse ja tarjoaa käyttäjille sujuvaa palautetta - kaikki tämä agenttisi ohjaamana älykkään työnkulkuautomaatiojärjestelmän avulla.

## 🔎 Tavoitteet

Tässä tehtävässä opit:

1. Ymmärtämään, mitä agenttivirrat ovat ja miten ne eroavat Power Automate -pilvivirroista automaation osalta
1. Oppimaan agenttivirtojen keskeiset ominaisuudet, kuten tekoälytoiminnot ja luonnollisen kielen kirjoittamisen
1. Tutustumaan agenttivirran suunnittelutyökaluun ja ilmaisujen käyttöön dynaamisen datan käsittelyssä
1. Luomaan täydellisen laitepyyntöautomaatiojärjestelmän, joka integroi SharePoint-tiedot ja sähköposti-ilmoitukset

## 🤔 Mikä on agenttivirta?

Agenttivirrat ovat tehokas tapa automatisoida toistuvia tehtäviä ja integroida sovelluksesi ja palvelusi. Ajattele niitä jäsenneltyinä, vaiheittaisina työnkulkuina, joita agenttisi voi suorittaa automatisoidakseen tehtäviä tai yhdistääkseen muihin sovelluksiin ja palveluihin. Voit ajatella niitä pieninä työnkulkuina, jotka auttavat agenttiasi tekemään asioita, kuten lähettämään ilmoituksia, päivittämään tietueita tai reagoimaan tapahtumiin.

Toisin kuin autonomiset agentit, jotka käyttävät tekoälyä päätösten tekemiseen lennossa, agenttivirrat ovat **deterministisiä työnkulkuja** - eli ne seuraavat samaa polkua joka kerta, mikä takaa johdonmukaiset ja luotettavat tulokset.

Yksinkertaisesti sanottuna:

- Ne auttavat agenttiasi _tekemään asioita_, eivät vain _sanomaan asioita_ käyttäjille.
- Ne ovat uudelleenkäytettäviä eri aiheiden ja agenttien välillä, ja ne voidaan käynnistää käyttäjän viesteillä, tapahtumilla tai muilla sovelluksilla ja palveluilla.

## 🙋🏽 Kyllä, mutta miten ne eroavat Power Automate -pilvivirroista?

Sekä agenttivirrat että Power Automate -pilvivirrat auttavat automatisoimaan tehtäviä. Ne on suunniteltu eri tarkoituksiin ja toimivat eri tavoin.

### 🤖 Agenttivirrat Copilot Studiossa

**Mihin ne on tarkoitettu:**

- Suunniteltu keskustelu- ja autonomisille agenteille (agenttiohjeiden kautta) Copilot Studiossa.
- Keskittyvät älykkääseen, tekoälypohjaiseen automaatioon, joka on vuorovaikutuksessa liiketoimintajärjestelmien kanssa.

**Miksi ne ovat hyödyllisiä:**

- Helppo rakentaa ja hallita suoraan Copilot Studiossa.
- Erinomainen tehtävien automatisointiin, jotka tapahtuvat _keskustelun aikana_ käyttäjien kanssa, kuten lomapyynnön lähettäminen.
- Et tarvitse erillistä Power Automate -lisenssiä, koska laskutus perustuu Copilot Studion sisäiseen käyttöön. Tämä voi säästää aikaa ja kustannuksia yritystiimeille.

**Rajoitukset:**

- Et voi jakaa, kopioida tai määrittää yhteisomistajia.
- Agenttivirrat ovat näkyvissä ja käytettävissä vain Copilot Studiossa.
- Tällä hetkellä agenttien tapahtumatriggereitä voidaan muokata Power Automate -valmistajaportaalissa.

### ☁️ Power Automate -pilvivirrat

**Mihin ne on tarkoitettu:**

- Suunniteltu yleiskäyttöiseen automaatioon monien sovellusten ja palveluiden välillä.
- Voivat toimia itsenäisesti tai yhdessä agenttivirtojen kanssa.

**Miksi ne ovat hyödyllisiä:**

- Tarjoavat laajan valikoiman liittimiä.
- Ihanteellisia prosessien automatisointiin agenttien ulkopuolella.
- Voidaan jakaa, käyttää uudelleen ja hallita tiimien välillä.

**Vaatimukset:**

- Tarvitset Power Automate -lisenssin käyttääksesi niitä.

### 📗 Yhteenveto

| Käytä tätä | Kun haluat |
| :- | :- |
| Agenttivirrat | Automatisoida tehtäviä agentin sisällä, käyttää tekoälyä ja pitää kaikki Copilot Studiossa |  
| Power Automate -pilvivirrat | Automatisoida sovellusten ja palveluiden välillä tai rakentaa työnkulkuja agenttien ulkopuolella |

## 👍🏻 Miksi käyttää agenttivirtoja

Agenttivirrat seuraavat aina kiinteää polkua - ne tekevät saman asian joka kerta, kun niille annetaan sama syöte.

Tämä tekee niistä:

- **Luotettavia** - voit luottaa siihen, että ne toimivat samalla tavalla joka kerta.
- **Ennustettavia** - tiedät, mitä tulosta odottaa, kun virta suoritetaan.
- **Sääntöihin perustuvia** - ne seuraavat määrittelemiäsi vaiheita.

Muita etuja ovat:

- **Automaatio** - mahdollistaa agenttisi käsittelemään toistuvia tehtäviä, kuten lomakkeiden lähettämistä tai ilmoitusten lähettämistä.
- **Yhdistettävyys** - yhdistä yli 1400 liittimeen, kuten ServiceNow, SharePoint, Salesforce. Voit myös rakentaa oman mukautetun liittimen.
- **Tiivis integrointi** - agenttivirrat ovat osa agentin logiikkaa, ne käynnistyvät suoraan käyttäjän viesteistä tai toimista keskustelussa.
- **Skalautuvuus** - käytä virtoja uudelleen useiden agenttien tai skenaarioiden välillä.
- **Ei koodia tai vähän koodia** - voit rakentaa virtoja luonnollisella kielellä tai visuaalisella suunnittelutyökalulla.
- **Kaikki yhdessä alustassa** - voit suunnitella, testata ja ottaa käyttöön agenttivirtoja yhdessä paikassa - Copilot Studiossa. Ei tarvitse vaihtaa alustojen välillä.

## 🏄🏻‍♂️ Miten agenttivirrat parantavat agenttiasi?

Agenttivirrat laajentavat agenttisi kykyjä pelkän "keskustelun" ulkopuolelle käyttäjien kanssa. Ne mahdollistavat toiminnan ja järjestelmien kanssa vuorovaikuttamisen.

Oletetaan, että työskentelet talousosastolla ja saat paljon laskuja toimittajilta. Normaalisti jonkun täytyy lukea jokainen lasku, poimia tärkeät tiedot - summa, päivämäärä, lähettäjä - ja tarkistaa, että kaikki vastaa tietojasi. Sitten lasku lähetetään oikealle henkilölle hyväksyttäväksi. Tämä vie aikaa ja vaivaa.

Copilot Studion agenttivirtojen avulla voit automatisoida tämän prosessin. Kun lasku saapuu, agentti:

1. Lukee dokumentin älykkään dokumenttien käsittelyn avulla löytääkseen tärkeät tiedot.
1. Tarkistaa tiedot yrityksesi datasta varmistaakseen, että kaikki näyttää oikealta.
1. Ohjaa laskun hyväksyttäväksi oikealle henkilölle.

Tämä säästää aikaa, vähentää virheitä ja tekee koko prosessista sujuvamman.

### Ajattele sitä näin

- **Agentit**: älykkäät päätöksentekijät
- **Agenttivirrat**: luotettavat toteuttajat

### Miksi se on tärkeää

- Saat molempien maailmojen parhaat puolet: luotettavan automaation ja joustavan tekoälyn.
- Virtojen rakentaminen ja päivittäminen on helppoa liiketoiminnan tarpeiden muuttuessa.
- Voit skaalata automaation tiimien välillä.

## 🔌 Keskeiset ominaisuudet, jotka tekevät agenttivirroista tehokkaita

1. **Luonnollisen kielen kirjoittaminen**
    - Voit kuvata, mitä haluat virran tekevän, tavallisella kielellä.
    - Copilot ymmärtää tarkoituksesi ja rakentaa virran puolestasi.
    - Ei tarvitse kirjoittaa koodia - selitä ideasi.

1. **Tekoälytoiminnot**

    Käytä tekoälyä:

    - Lukemaan ja ymmärtämään dokumentteja tai kuvia.
    - Tiivistämään pitkää sisältöä lyhyiksi, hyödyllisiksi vastauksiksi.
    - Antamaan älykkäitä suosituksia tai päätöksiä.

1. **Generatiiviset toiminnot**
    - Nämä mahdollistavat virran mukautumisen reaaliajassa.
    - Agentti voi suunnitella ja säätää vaiheita muuttuvan tiedon perusteella.

1. **Integraatiotoiminnot**
    - Yhdistä virtasi muihin työkaluihin, kuten Outlook, Microsoft Teams, ServiceNow, SharePoint ja muihin sovelluksiin ja palveluihin, yli 1400 sisäänrakennetun liittimen kautta tai oman mukautetun liittimen avulla.
    - Tämä auttaa agenttiasi työskentelemään tiimisi jo käyttämien sovellusten kanssa.

1. **Ihminen mukana**
    - Lisää hyväksymisvaiheita, joissa henkilön täytyy tarkistaa tai vahvistaa jotain.
    - [Edistyneet hyväksynnät](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) tukevat muistutuksia, delegointia ja monivaiheisia hyväksyntöjä.

## ⚙️ Miten ne toimivat

1. **Käynnistys**

    Tapahtuma käynnistää virran - kuten käyttäjän kysymys, virran käynnistäminen aiheesta, aikataulutettu aika tai tapahtuma toisessa järjestelmässä.

1. **Toiminnot**

    Nämä ovat seuraavia vaiheita, joita agentti seuraa - lähettää sähköpostin, kutsuu API:n, päivittää tiketin ServiceNow:ssa.

## 🧶 Miten luoda agenttivirta

1. **Luonnollinen kieli**: kuvaa, mitä haluat agentin tekevän, ja Copilot rakentaa sen puolestasi.
1. **Suunnittelutyökalu**: vedä ja pudota toimintoja, ehtoja ja silmukoita agenttivirran suunnittelutyökalussa rakentaaksesi agenttivirran.

## 🎨 Mikä on agenttivirran suunnittelutyökalu?

Se on visuaalinen työkalu Copilot Studiossa, joka auttaa sinua rakentamaan, muokkaamaan ja hallitsemaan agenttivirtoja, jotka tarjoavat vaiheittaiset ohjeet agentillesi tehtävien suorittamiseksi. Se on suunniteltu helppokäyttöiseksi, vaikka olisit uusi agenttivirtojen parissa.

### Agenttivirran suunnittelutyökalun keskeiset ominaisuudet

1. **Visuaalinen työtila**
    - Näet koko virtasi kaaviona.
    - Voit helposti zoomata sisään/ulos, sovittaa näkymän tai käyttää minimap-toimintoa suurten virtojen navigointiin.

1. **Toimintojen lisääminen ja poistaminen**
    - Klikkaa _plus (+)_ -painiketta lisätäksesi uuden toiminnon, kuten viestin lähettämisen tai kohteen päivittämisen SharePoint-listassa.
    - Voit etsiä toimintoja liittimistä ja määrittää ne asetusten kautta.
    - Poista toiminto klikkaamalla _kolmea pistettä (⋮)_ ja valitsemalla _Poista_.

1. **Parametrien tarkistaminen**
    - Klikkaa mitä tahansa toimintoa nähdäksesi tai muokataksesi sen asetuksia, joita kutsutaan _parametreiksi_.
    - Voit syöttää arvoja manuaalisesti tai käyttää _ilmaisuja_ tehdäksesi niistä dynaamisia.

1. **Versiohistoria**
    - Joka kerta kun tallennat virtasi, versio tallennetaan.
    - Voit palata takaisin ja tarkastella tai palauttaa aiemman version tarvittaessa.

1. **Virheiden tarkistus**
    - _Virran tarkistaja_ korostaa mahdolliset virheet.
    - Kaikki virheet täytyy korjata ennen virran julkaisemista.

1. **Julkaisu ja testaus**
    - Kun virtasi on virheetön, julkaise se tehdäksesi siitä aktiivisen.
    - Käytä _Testaa_-toimintoa suorittaaksesi virtasi manuaalisesti tai automaattisesti ja tarkistaaksesi, toimiiko se odotetusti.

### Miksi käyttää agenttivirran suunnittelutyökalua?

- **Visuaalinen ja intuitiivinen** - voit rakentaa virtoja vetämällä ja klikkaamalla.
- **Turvallista kokeilla** - versiohistoria antaa mahdollisuuden peruuttaa muutokset.
- **Sisäänrakennettu testaus** - auttaa varmistamaan, että kaikki toimii ennen julkaisua.

## 🔤 Mainitsit _ilmaisut_ - mitä ilmaisut ovat?

Ilmaisut ovat pieniä kaavoja tai komentoja, jotka auttavat agenttivirtaa käsittelemään dataa. Niitä käytetään arvojen laskemiseen, tekstin muotoiluun, päätösten tekemiseen tai tietyn tiedon hakemiseen syötteistä.

### Miksi käyttää ilmaisuja?

Ilmaisut mahdollistavat:

- **Mukautetun datan käsittelyn** - yhdistä nimiä, muotoile päivämääriä.
- **Päätöksenteon** - jos arvo on suurempi kuin 10, tee jotain.
- **Datan muuntamisen** - muuta teksti pieniksi kirjaimiksi, poimi osa merkkijonosta.
- **Logiikan automatisoinnin** - ilman täyttä koodin kirjoittamista.

### Miltä ilmaisut näyttävät?

Ilmaisut käyttävät funktioita. Lainaan entisen Microsoft MVP:n, Jerry Weinstockin, selitystä siitä, mitä funktiot ovat.

!!! lainaus
    Funktiot ovat sisäänrakennettua logiikkaa, joka muuntaa dataasi joko yksinkertaisten tai monimutkaisten operaatioiden avulla ilmaisussa.

Funktiot mahdollistavat ilmaisujen rakentamisen ilman, että sinun tarvitsee kirjoittaa koodia.

Kuvaan sen näin: funktio agenttivirroissa on samanlainen kuin Excelin funktiot. Voit suorittaa operaatioita datalle muuntaaksesi sen halutuksi tulokseksi. Kun rakennat kaavaa Excelissä, valitset syöttöarvon taulukon soluista tai alueelta ja sovellat funktioita datan muokkaamiseksi. Esimerkkinä on `COUNT`-funktio, jolla lasketaan solujen lukumäärä, jotka sisältävät numeroita alueelta.

Agenttivirroissa, sen sijaan että viittaisit dataan taulukon soluista, viittaat datan lähtöihin käynnistyksestä tai toiminnoista rakentaessasi ilmaisuja. Jatkaen aiempaa esimerkkiä, käytä funktiota `length` saadaksesi kohteiden lukumäärän, jotka palautetaan _Get items_ SharePoint-liittimen toiminnosta.

### Miksi funktiot ovat tärkeitä?

Funktioiden käyttö tekee agenttivirroista:

- **Älykkäämpiä** - ne voivat reagoida erilaisiin syötteisiin tai olosuhteisiin.
- **Joustavia** - voit mukauttaa, miten dataa käsitellään.
- **Tehokkaita** - vältät manuaaliset vaiheet automatisoimalla logiikan.

### Hyödyllisimmät funktiot

Seuraavat ovat yleisiä funktioita, joita käytetään agenttivirroissa. Täydellinen lista funktioista löytyy [viiteoppaasta](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Teksti

- `concat()` - Yhdistää kaksi tai useampia tekstinpätkiä.
      - Esimerkki: `concat('Hei ', firstName)` → “Hei John”

- `toLower()` / `toUpper()` - Muuttaa tekstin pieniksi tai isoiksi kirjaimiksi.
      - Hyödyllinen syötteen standardointiin.

- `substring()` - Poimii osan merkkijonosta.
      - Esimerkki: Poimi nimen kolme ensimmäistä kirjainta.

- `trim()` - Poistaa välilyönnit tekstin alusta ja lopusta.

#### 🔢 Matematiikka ja numerot

- `add()
- Esimerkki: `addDays(utcNow(), 7)` tulos on 7 päivää tästä hetkestä.

- `formatDateTime()` - Muotoilee päivämäärän luettavaan merkkijonoon.
      - Esimerkki: Maanantai, 7. heinäkuuta 2025

#### ✅ Loogiset

- `if()` - Suorittaa yhden arvon, jos tosi, ja toisen, jos epätosi.
      - Esimerkki: `if(score > 50, 'Hyväksytty', 'Hylätty')`

- `equals()` - Tarkistaa, ovatko kaksi arvoa samat.

- `and()`, `or()`, `not()` - Yhdistää useita ehtoja.

#### 🪣 Muut hyödylliset funktiot

- `coalesce()` - Palauttaa ensimmäisen ei-tyhjän arvon.
      - Kätevä varmuuskopio-/oletusarvoille.

- `guid()` - Luo yksilöllisen tunnuksen.
      - Kätevä seurantaan tai lokitukseen.

- `length()` - Laskee, kuinka monta merkkiä tai kohdetta on merkkijonossa tai taulukossa.

## ⭐ Parhaat käytännöt

Tässä on joitakin parhaita käytäntöjä agenttivirtojen rakentamiseen Copilot Studiossa.

1. **Aloita yksinkertaisesti ja rakenna vähitellen**

    - Aloita pienellä, selkeällä tehtävällä, kuten viestin lähettämisellä.
    - Lisää enemmän vaiheita testattuasi automaation perusasiat.

1. **Käytä selkeitä ja kuvaavia toimintojen nimiä**

    - Nimeä jokainen vaihe selkeästi, jotta sinä ja tiimisi ymmärrätte, mitä se tekee.
    - Esimerkki: sen sijaan, että käytät oletusnimeä "Päivitä kohde" SharePoint-liittimen toiminnolle, nimeä se uudelleen kuvaamaan, mitä se päivittää, kuten "Päivitä laitteen tila."

1. **Tarkista virheet ennen julkaisemista**

    - Käytä **virhetarkistinta** löytääksesi ja korjataksesi mahdolliset ongelmat.
    - Et voi julkaista virtoja, jos niissä on virheitä, joten yritä ratkaista ne heti, kun ne ilmenevät.

1. **Testaa virtaasi perusteellisesti**

    - Se, että virta tallentuu ja julkaistaan, ei tarkoita, että se toimii odotetusti.
    - Käytä _Testaa_-ominaisuutta suorittaaksesi virran manuaalisesti tai automaattisesti ja tarkistaaksesi tulokset.

1. **Käytä versiohistoriaa**

    - Tallenna virtaasi usein, jotta voit palata aiempiin versioihin tarvittaessa.
    - Voit tarkastella ja palauttaa aiempia versioita _Versiohistoria_-paneelista.

1. **Käytä parametreja ja lausekkeita viisaasti**

    - Kun määrität toimintoja, käytä parametreja tehdäksesi virrasta dynaamisen.
    - Voit syöttää arvoja manuaalisesti tai käyttää lausekkeita niiden laskemiseen, tai yhdistää ne aiempien toimintojen arvoihin käyttämällä _dynaamisen sisällön_ valitsinta.

1. **Poista käyttämättömät toiminnot**

    - Jos lisäät toiminnon ja myöhemmin päätät, ettet tarvitse sitä, poista se pitääksesi virtasi siistinä.

## 🧪 Labra 09 - Lisää agenttivirta automaatioon ja paranna aiheiden ominaisuuksia

Nyt opimme, kuinka parannamme aihettamme mukautuvilla korteilla ja käyttämällä aiheiden ja solmujen edistyneitä toimintoja.

- [9.1 Luo agenttivirta](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Lisää agenttivirta aiheeseen](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Päivitä Pyydä laite -aihe useilla solmuilla paremman käyttäjäkokemuksen saavuttamiseksi](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Testaa agenttia useilla skenaarioilla](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Käyttötapaus

**Esimiehenä**

**Haluan** vastaanottaa laitepyyntöjä

**Jotta** voin tarkistaa työntekijän pyytämän laitteen.

Aloitetaan!

### Esivaatimukset

1. **SharePoint-lista**

    Käytämme **Laitteet** SharePoint-listaa kohdasta [Oppitunti 00 - Kurssin asennus - Vaihe 3: Luo uusi SharePoint-sivusto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Jos et ole luonut **Laitteet** SharePoint-listaa, palaa kohtaan [Oppitunti 00 - Kurssin asennus - Vaihe 3: Luo uusi SharePoint-sivusto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk Agent**

    Käytämme aiemmin luotua agenttia kohdasta [Oppitunti 06 - Luo mukautettu agentti luonnollisella kielellä Copilotilla ja yhdistä se tietoihisi](../06-create-agent-from-conversation/README.md).

### 9.1 Luo agenttivirta

Tässä harjoituksessa luomme agenttivirran, joka hakee SharePoint-kohteen valitusta laitteesta ja lähettää sähköpostin esimiehelle laitteen tiedoilla.

1. **Pyydä laite** -aiheessa, vieritä alas **Kysy mukautuvalla kortilla** -solmuun ja lisää uusi solmu. Valitse **Lisää työkalu** ja **Perustyökalut**-välilehdeltä valitse **Uusi agenttivirta**.

    ![Lisää uusi agenttivirta](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.fi.png)

1. Agenttivirtojen **Suunnittelija** latautuu laukaisimella ja toiminnolla.

    - **Laukaisin** - Kun agentti kutsuu virran
        - Tämä käynnistää virran Copilot Studio -agentista.

    - **Toiminto** - Vastaa agentille
        - Tämä lähettää vastauksen, joka voi sisältää lähtöarvoja takaisin Copilot Studio -agentille.

    Valitse laukaisin.

    ![Valitse laukaisin](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.fi.png)

1. Seuraavaksi lisäämme useita syötteitä agenttivirtaan.

    - `DeviceSharePointId` - tämä tallentaa arvon, ID:n, SharePoint-kohteesta. Tämä ID-arvo on lähtö **Kysy mukautuvalla kortilla** -solmusta, jossa käyttäjä valitsi laitteen.

    - `User` - tämä on käyttäjän nimi, joka tulee agentin järjestelmämuuttujasta.

    - `AdditionalComments` - tämä on käyttäjän antama kommentti, joka on lähtö **Kysy mukautuvalla kortilla** -solmusta.

    Lisäämme ensin `DeviceSharePointId` laukaisimen syötteeksi. Valitse **+ Lisää syöte**.

    ![Lisää syöte](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.fi.png)

1. Syötteen tyypiksi valitse **Teksti**.

    ![Valitse Teksti](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.fi.png)

1. Syötteen nimeksi kirjoita seuraava.

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId syöte](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.fi.png)

1. Lisäämme nyt toisen syötteen, `User`. Toista samat vaiheet, valitse **+ Lisää syöte** ja valitse **Teksti**.

    ![Lisää syöte](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.fi.png)

1. Syötteen nimeksi kirjoita seuraava.

    ```text
    User
    ```

    ![User syöte](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.fi.png)

1. Lisäämme nyt kolmannen syötteen, `AdditionalComments`. Toista samat vaiheet, valitse **+ Lisää syöte** ja valitse **Teksti**.

    ![Lisää syöte](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.fi.png)

1. Syötteen nimeksi kirjoita seuraava.

    ```text
    AdditionalComments
    ```

    ![AdditionalComments syöte](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.fi.png)

1. `AdditionalComments`-syötteelle päivitämme sen valinnaiseksi. Valitse **kolmipiste (...) -kuvake** ja valitse **Tee kentästä valinnainen**.

    ![Tee kentästä valinnainen](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.fi.png)

1. Hienoa työtä! Laukaisin on nyt määritetty, jatketaan. Valitse **plus + kuvake** laukaisimen alla lisätäksesi uuden toiminnon.

    ![Lisää toiminto](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.fi.png)

1. **Toimintopaneeli** tulee näkyviin, jossa voit tarkastella toimintoja yli 1400 sisäänrakennetusta liittimestä Microsoftin ja kolmansien osapuolten palveluihin. **Hakukenttään** kirjoita seuraava,

    ```text
    Get item
    ```

    Hakutuloksissa näkyy lista toimintoja. Valitse **Hae kohde** -toiminto **SharePoint-liittimestä**.

    ![Hae kohde -toiminto](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.fi.png)

1. Voimme nyt aloittaa **Hae kohde** -toiminnon määrittämisen.

    Valitse **Kolmipiste (...)** -kuvake **Hae kohde** -toiminnossa.

    ![Valitse kolmipiste](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.fi.png)

1. Valitse **Nimeä uudelleen**.

    ![Valitse Nimeä uudelleen](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.fi.png)

1. Nimeä toiminto seuraavasti,

    ```text
    Get Device
    ```

    ![Nimeä toiminto](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.fi.png)

1. **Sivuston osoite** -kentässä valitse **Contoso IT SharePoint -sivuston osoite**, joka luotiin kohdassa [Oppitunti 00 - Kurssin asennus - Vaihe 3: Luo uusi SharePoint-sivusto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    **Listan nimi** -kentässä valitse **Laitteet** SharePoint-lista.

    ![Syötä parametrit](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.fi.png)

1. **Id**-kentässä valitse **salaman kuvake** tai **fx kuvake** oikealla.

    ![Dynaamisen sisällön valitsin](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.fi.png)

1. **Dynaamisen sisällön** välilehdellä kirjoita seuraava,

    ```text
    sharepoint
    ```

    Hakutuloksissa näkyy syötteen parametrit, jotka vastaavat haettua arvoa. Valitse **DeviceSharePointId**-parametri laukaisimesta.

    Valitse **Lisää** lisätäksesi dynaamisen sisällön syötteen **Id**-parametriin toiminnossa.

    ![Valitse DeviceSharePointId syöte](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.fi.png)

1. Laukaisimen dynaaminen sisällön syöte on nyt viitattu toiminnon **Id**-parametrissa. Päivitämme seuraavaksi yhden edistyneistä parametreista. Valitse **Näytä kaikki** nähdäksesi edistyneet parametrit.

    ![Näytä edistyneet parametrit](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.fi.png)

1. **Rajoita sarakkeet näkymän mukaan** -parametri tulee näkyviin, ja oletuksena se on asetettu **Käytä kaikkia sarakkeita (Älä rajoita)**. Päivitämme tämän arvon näkymään rajoittaaksemme sarakkeet, jotka palautetaan toiminnon vastauksessa. Valitse **Rajoita sarakkeet näkymän mukaan** -parametri nähdäksesi näkymien listan.

    ![Valitse parametri](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.fi.png)

1. Valitse **Kaikki kohteet** -näkymä.

    ![Valitse Kaikki kohteet -näkymä](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.fi.png)

1. Valitse **plus + kuvake** _Hae laite_ -toiminnon alla lisätäksesi uuden toiminnon.

    ![Lisää uusi toiminto](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.fi.png)

1. Hakukenttään kirjoita seuraava,

    ```text
    send an email
    ```

    Hakutuloksissa näkyy lista toimintoja. Valitse **Lähetä sähköposti (V2)** -toiminto **Office 365 Outlook -liittimestä**.

    ![Lähetä sähköposti -toiminto](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.fi.png)

1. Seuraavaksi meidän täytyy luoda yhteys liittimen toiminnolle. Valitse **Kirjaudu sisään**.

    ![Luo yhteys](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.fi.png)

1. Valitse kirjautunut käyttäjätilisi.

    ![Valitse käyttäjätili](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.fi.png)

1. Valitse **Salli pääsy**. Yhteys on nyt luotu.

    ![Valitse salli pääsy](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.fi.png)

1. Nimeä toiminto seuraavasti,

    ```text
    Send an email to manager
    ```

    Määritellään seuraavaksi toiminnon syötteen parametrit.

    **Vastaanottaja**-syötteen parametriin valitse itsesi. Normaalisti tämä olisi esimiehesi tai käyttäisimme toista toimintoa, joka hakee esimiehesi Entra ID -profiilisi perusteella, mutta tämän oppitunnin tarkoitusta varten valitse itsesi.

    **Aihe**-syötteen parametriin kirjoita seuraava,

    ```text
    Request type: new device
    ```

    **Sisältö**-syötteen parametriin kirjoita seuraava,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Nimeä toiminto ja määritä syötteet](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.fi.png)

1. Seuraavaksi päivitämme **Sisältö**-syötteen parametrin viittaamaan dynaamiseen sisällön syötteeseen **laukaisimen** tai **Hae kohde** -toiminnon kautta. Kirjoita välilyönti toisen rivin jälkeen, sillä lisäämme käyttäjän nimen laukaisimen syötteestä, **User**.

    Valitse **salaman kuvake** tai **fx kuvake** oikealla.

    ![Lisää User syöte dynaamisena sisältönä](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.fi.png)

1. **Dynaamisen sisällön** välilehdellä valitse **User**-syöte laukaisimesta.

    Valitse **Lisää** lisätäksesi dynaamisen sisällön **User**-syötteen toiminnon **Sisältö**-parametriin.

    ![Valitse User syöte](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.fi.png)
1. Dynaaminen sisältö, joka saadaan liipaisimesta, viitataan nyt toiminnon **Body**-parametrissa. Toistamme saman sähköpostiviestin rungon jäljellä oleville riveille.

    ![Käyttäjän syöte lisätty](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.fi.png)

1. Klikkaa kohtaan `Manufacturer:` vieressä. Valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

    **Dynaaminen sisältö** -välilehdellä avautuvassa paneelissa kirjoita hakukenttään seuraava,

    ```text
    manufacturer
    ```

    Valitse liipaisimen **Manufacturer value** -syöte ja valitse **Add**.

    ![Lisää Manufacturer value syöte dynaamisena sisältönä](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.fi.png)

1. Klikkaa kohtaan `Model:` vieressä. Valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

    **Dynaaminen sisältö** -välilehdellä avautuvassa paneelissa kirjoita hakukenttään seuraava,

    ```text
    model
    ```

    Valitse **Model**-syöte **Get item** -toiminnosta ja valitse **Add**.

    ![Lisää Model syöte dynaamisena sisältönä](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.fi.png)

1. `Link to item in SharePoint` -tekstin kohdalla päivitämme sen hyperlinkiksi sähköpostiviestin rungossa. Klikkaa rivin alussa ja valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

    ![Lisää dynaaminen sisältö](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.fi.png)

1. Klikkaa HTML-ankkuritunnisteen jälkeen ja valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

    **Dynaaminen sisältö** -välilehdellä avautuvassa paneelissa kirjoita hakukenttään seuraava,

    ```text
    link to item
    ```

    Valitse **Link to item** -syöte **Get item** -toiminnosta ja valitse **Add**.

    ![Lisää Link to item dynaamisena sisältönä](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.fi.png)

1. Vaihda HTML-editoriin valitsemalla **&lt;/&gt;**-kuvake.

    ![Lisää käyttäjän syöte](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.fi.png)

1. HTML-editori on nyt käytössä. Klikkaa ennen `Link to item in SharePoint` -tekstiä ja lisää HTML-ankkuritunniste hyperlinkin luomiseksi. Kopioi ja liitä seuraava.

    ```text
    <a href="
    ```

    ![HTML-tunniste](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.fi.png)

1. **Link to item**-syötteen dynaaminen sisältö viitataan nyt **Body**-parametrissa. Klikkaa **Link to item**-syötteen jälkeen ja kopioi ja liitä seuraava.

    ```text
    ">
    ```

    ![HTML-tunniste](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.fi.png)

1. Klikkaa `Link to item in SharePoint` -tekstin jälkeen ja sulje HTML-ankkuritunniste. Kopioi ja liitä seuraava.

    ```text
    </a>
    ```

    ![HTML-tunniste](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.fi.png)

1. Valitse **&lt;/&gt;**-kuvake vaihtaaksesi koodinäkymän pois päältä.

    ![Poista koodinäkymä käytöstä](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.fi.png)

1. Valitse uudelleen **&lt;/&gt;**-kuvake vaihtaaksesi takaisin koodinäkymään.

    ![Vaihda takaisin koodinäkymään](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.fi.png)

1. Huomaa, että useita ylimääräisiä merkkejä `&lt;br&gt;` on lisätty. Poista nämä merkit.

    ![Poista merkit](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.fi.png)

1. Olemme nyt valmiita lisäämään hyperlinkin sähköpostiviestin runkoon 😎 Valitse **&lt;/&gt;**-kuvake vaihtaaksesi koodinäkymän pois päältä.

    ![HTML-tunniste siistitty](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.fi.png)

1. Klikkaa `Additional comments from` -tekstin jälkeen ennen kaksoispistettä ja valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

    ![Lisää käyttäjän parametri](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.fi.png)

1. **Dynaaminen sisältö** -välilehdellä avautuvassa paneelissa kirjoita hakukenttään seuraava,

    ```text
    user
    ```

    Valitse liipaisimen **User**-parametri ja valitse **Add**.

    ![Lisää User-parametri dynaamisena sisältönä](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.fi.png)

1. Aiomme nyt lisätä lausekkeen, joka näyttää käyttäjän antamat lisäkommentit **Ask an adaptive card** -solmussa, tai "None", jos käyttäjä ei anna kommentteja.

    Klikkaa kaksoispisteen jälkeen ja valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

    ![Lisää lauseke](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.fi.png)

1. **Function**-välilehdellä avautuvassa paneelissa ja lausekekentässä kirjoita seuraava,

    ```text
    if(empty())
    ```

    Tämä lauseke käyttää `if`-funktiota if-else-lauseena.

    Seuraava funktio on `empty`, joka tarkistaa, onko arvo olemassa vai ei merkkijonoparametrissa. Viitattava merkkijonoparametri on liipaisimen `AdditionalComments`-syöteparametrin arvo.

    ![Jos tyhjä](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.fi.png)

1. Klikkaa **sulkeiden sisään** `empty`-funktion jälkeen. Aiomme lisätä liipaisimen `AdditionalComments`-syöteparametrin.

    Valitse **Dynaaminen sisältö** -välilehti. Kirjoita hakukenttään seuraava,

    ```text
    Additional
    ```

    Vieritä paneelia alas ja valitse liipaisimen **AdditionalComments**-syöte. Parametri lisätään nyt lausekkeeseen merkkijonoparametrina.

    ![Lisää AdditionalComments dynaamisena sisältönä](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.fi.png)

1. Määritämme seuraavaksi **_true_**-logiikan, jossa jos `AdditionalComments`-merkkijonoparametri on tyhjä, haluamme näyttää tekstin `None`.

    Sulkeiden jälkeen, jotka sisältävät merkkijonoparametrin, kirjoita seuraava,

    ```text
    , 'None',
    ```

    ![True-logiikka](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.fi.png)

1. Lopuksi määritämme **_false_**-logiikan, jossa jos `AdditionalComments`-merkkijonoparametri ei ole tyhjä, haluamme näyttää liipaisimen **AdditionalComments**-syöteparametrin arvon.

    > Muistutus: tämä arvo tulee **Ask with adaptive card** -solmun lisäkommenttikentästä **Request device** -aiheessa.

    Pilkun jälkeen **_true_**-logiikan jälkeen valitse **Dynaaminen sisältö** -välilehti. Kirjoita hakukenttään seuraava,

    ```text
    Additional
    ```

    Vieritä paneelia alas ja valitse liipaisimen **AdditionalComments**-syöte. Parametri lisätään nyt lausekkeeseen merkkijonoparametrina.

    Lisää se **Body**-parametriin valitsemalla **Add**.

    ![False-logiikka](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.fi.png)

1. Erinomaista, lausekkeemme on valmis! Lauseke on nyt lisätty **Body**-parametriin. Lopuksi muotoile viimeinen rivi kursiiviksi.

    ![Kursiivi](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.fi.png)

1. Päivitämme nyt **Respond to the agent** -toiminnon lähettämään **Model value**-parametrin arvon **Get item** -toiminnosta takaisin agentille.

    Pidä hiiren vasenta painiketta painettuna ja siirry suunnittelutyökalussa ylöspäin nähdäksesi **Respond to the agent** -toiminnon.

    Valitse **Respond to the agent** -toiminto ja valitse **Text**-lähtötyyppi.

    ![Valitse Text-lähtö](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.fi.png)

1. Kirjoita seuraava lähtönimenä.

    ```text
    ModelValue
    ```

    ![ModelValue-lähtö](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.fi.png)

1. Valitse arvokenttä ja valitse oikealla oleva **salaman kuva** tai **fx-kuvake**.

    ![Lisää lauseke](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.fi.png)

1. **Dynaaminen sisältö** -välilehdellä avautuvassa paneelissa kirjoita hakukenttään seuraava,

    ```text
    model
    ```

    Valitse **Model**-parametri **Get item** -toiminnosta ja valitse **Add**.

    ![Lisää Model-parametri dynaamisena sisältönä](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.fi.png)

1. **Model**-parametri on nyt tekstilähdön arvo. Valitse **Save draft** tallentaaksesi agenttivirran.

    Olemme nyt valmiita agenttivirran kanssa 👏🏻

    ![Valitse Save draft](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.fi.png)

1. Tehdään vielä yksi päivitys agenttivirtaan ennen julkaisua. Valitse **Overview**-välilehti ja valitse **Edit**.

    ![Valitse Edit](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.fi.png)

1. Kopioi ja liitä seuraava **Flow name**-kenttään.

    ```text
    Send device request email
    ```

    **Description**-kenttään valitse **refresh-kuvake** käyttääksesi tekoälyä automaattisesti luomaan kuvauksen liipaisimen ja agenttivirran toimintojen perusteella.

    Valitse **Save** tallentaaksesi päivitetyn nimen ja kuvauksen agenttivirrasta.

    ![Nimeä uudelleen, lisää kuvaus ja tallenna tiedot](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.fi.png)

1. Valitse **Designer**-välilehti ja valitse **Publish** julkaistaksesi agenttivirran, jotta se voidaan lisätä solmuksi **Request device** -aiheeseen.

    ![Julkaise](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.fi.png)

1. Vahvistusviesti ilmestyy pian vahvistamaan, että agenttivirta on julkaistu.

    ![Vahvistusviesti](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.fi.png)

### 9.2 Lisää agenttivirta aiheeseen

Lisätään nyt agenttivirta **Request device** -aiheeseen.

1. Valitse **Agents** vasemmanpuoleisesta valikosta ja valitse **Contoso Helpdesk Agent**.

    ![Valitse Agents](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.fi.png)

1. Valitse **Topics**-välilehti.

    ![Valitse Topics-välilehti](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.fi.png)

1. Valitse **Request device** -aihe.

    ![Valitse Request device -aihe](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.fi.png)

1. Vieritä alas **Ask with adaptive card** -solmuun ja lisää uusi solmu.

    Valitse **Add a tool** ja **Basic tools**-välilehdellä avautuvassa paneelissa valitse äskettäin luotu ja julkaistu **Send device request email** -agenttivirta.

    ![Valitse agenttivirta](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.fi.png)

1. Agenttivirran liipaisinsyötteille meidän täytyy valita **Ask with adaptive card** -solmun muuttujalähdöt.

    Valitse **ellipsis (...) icon** **DeviceSharePointId**-syötteelle.

    ![Valitse muuttuja](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.fi.png)

1. Valitse **deviceSelectionId**-muuttuja, joka on yksi **Ask with adaptive card** -solmussa määritellyistä lähdöistä.

    ![Valitse deviceSelectionId-muuttuja](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.fi.png)

1. Seuraavaksi valitse **ellipsis (...) icon** **User**-syötteelle.

    ![Valitse muuttuja](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.fi.png)

1. Valitse **System**-välilehti avautuvassa muuttujapaneelissa ja valitse **User.DisplayName**. Tämä muuttuja tallentaa sisäisen käyttäjän näyttönimen, joka on vuorovaikutuksessa agentin kanssa.

    ![Valitse User.DisplayName-järjestelmämuuttuja](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.fi.png)

1. Seuraavaksi valitse **greater than icon** **Advanced inputs**-kohdassa laajentaaksesi ja nähdäksesi **AdditionalComments**-syötteen.

    ![Laajenna Advanced inputs](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.fi.png)

1. Valitse **ellipsis (...) icon** AdditionalComments-syötteelle.

    ![Valitse muuttuja](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.fi.png)

1. Valitse **Formula**-välilehti ja avautuvan muuttujapaneelin laajennuskuvake, sillä käytämme Power Fx -lauseketta.

    ![Formula-välilehti](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.fi.png)

1. Samankaltainen kuin agenttivirrassa käytetty lauseke, joka tekee ehdollisen tarkistuksen _if_-funktiolla, mutta tällä kertaa
    - käytämme Power Fx -funktioita,
    - ja lisäämme joko tyhjän arvon tai `commentsId`-lähtömuuttujan arvon **Ask with adaptive card** -solmusta.

    Kirjoita seuraavat funktiot Power Fx -kenttään,

    ```text
    If(IsBlank())
    ```

Tämä lause käyttää `If`-funktiota if-else-lauseessa.

Seuraava käytetty funktio on `IsBlank`, joka tarkistaa, onko merkkijonoparametrissa arvoa vai ei. Viitattava merkkijonoparametri on `commentsId`-ulostulomuuttuja **Ask with adaptive card** -solmusta.

![If- ja IsBlank-funktiot](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.fi.png)

1. Klikkaa seuraavaksi **sulkeiden sisälle** `IsBlank`-funktion jälkeen. Aiomme lisätä `commentsId`-ulostulomuuttujan **Ask with adaptive card** -solmusta.

    Syötä seuraava sulkeiden sisälle,

    ```text
    Topic.commentsId
    ```

    Ja lisää pilkku sulkeiden jälkeen.

    ![Viittaus commentsId-ulostuloon](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.fi.png)

1. Määritellään seuraavaksi logiikka

    - kun **_true_** - jos `Topic.commentsId`-merkkijonoparametri on tyhjä, emme halua lisätä arvoa.
    - kun **_false_** - jos `Topic.commentsId`-merkkijonoparametri ei ole tyhjä, lisää muuttujan commentsId arvo.

    Sulkeiden jälkeen, jotka sisältävät merkkijonoparametrin, syötä seuraava,

    ```text
    "", Topic.commentsId)
    ```

    Power Fx -lausekkeen tulisi olla seuraava,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

    Hienoa työtä, lauseke on valmis! 🙌🏻 Valitse nyt **Insert**, jotta agenttivirran syöttöparametri asetetaan Power Fx -lausekkeeseen.

    ![Power Fx -lauseke](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.fi.png)

1. **Tallenna** aihe.

### 9.3 Päivitä Request device -aihe useilla solmuilla paremman käyttäjäkokemuksen saavuttamiseksi

Lisätään seuraavaksi kaksi solmua:

- **Send a message** - toimii vahvistusviestinä, joka viittaa valittuun laitteeseen ja ilmoittaa, että pyyntö on lähetetty.

- **Topic management** - keskustelun lopettamiseksi ohjaamme käyttäjän **End of conversation** -solmuun.

Aloitetaan!

1. Valitse **plus + -kuvake** agenttivirran solmun alapuolella ja valitse **Send a message** -solmu.

    ![Lisää send a message -solmu](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.fi.png)

1. Syötä seuraava viestikenttään,

    ```text
    Thanks
    ```

    Valitse sitten **Insert variable**, sillä viittaamme käyttäjän nimeen.

    ![Lisää muuttuja](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.fi.png)

1. Valitse **System**-välilehti ja etsi `User` hakukentästä. Valitse **User.DisplayName**-muuttuja.

    ![Valitse järjestelmämuuttuja](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.fi.png)

1. Syötä seuraava viestikenttään,

    ```text
    . Your selected device,
    ```

    Valitse sitten **Insert variable** ja tällä kertaa **Custom**-välilehdeltä **ModelValue**-muuttuja.

    Syötä seuraava viestikenttään viestin viimeistelyä varten.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

    Viestin tulisi näyttää seuraavalta.

    ![Lähetä viesti](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.fi.png)

1. Lopuksi valitse **plus + -kuvake** **Send a message** -solmun alapuolella ja valitse **Topic management**, sitten **Go to another topic** ja valitse **End of Conversation**.

    ![Aiheen hallinta](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.fi.png)

1. **Tallenna** aihe.

    ![Tallenna](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.fi.png)

### 9.4 Testaa agenttia eri skenaarioilla

Hienoa työtä!!! 😁 Voimme nyt testata agenttiamme.

#### 9.4.1 Pyydä laitetta ja lisää kommentti mukautettuun korttiin

1. **Päivitä** testipaneeli, valitse **activity map** -kuvake ja syötä seuraava viesti agentille.

    ```text
    I need a laptop
    ```

    ![Testaa agenttia](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.fi.png)

1. Agentti käynnistää **Available devices** ja vastaa listalla saatavilla olevista laitteista. Syötämme seuraavan vastauksen kysymykseen, haluammeko pyytää laitetta.

    ```text
    Yes
    ```

    ![Kyllä](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.fi.png)

1. Huomaa, kuinka agentti käynnisti **Request device** agentin ohjeiden mukaisesti ja mukautettu kortti näkyy nyt agentin viestissä.

    Valitse **Surface Laptop 15** -laite ja lisää seuraava kommentti.

    ```text
    I need 16GB of RAM please
    ```

    ![Valitse laite ja lisää kommentti](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.fi.png)

1. Vieritä alas, kunnes näet **Submit Request** -painikkeen, ja valitse se lähettääksesi mukautetun kortin agentille.

    ![Lähetä pyyntö](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.fi.png)

1. Valitse **Allow**, jotta agentti voi käyttää tunnuksiasi kahden liittimen todennukseen.

    ![Salli](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.fi.png)

1. Agentti näyttää vahvistusviestin, joka sisältää valitun mallin, ja ohjaa sitten **End of Conversation** -aiheeseen. Hienoa!

    ![Pyyntö lähetetty](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.fi.png)

1. Valitse **Kyllä** vahvistaaksesi loput **End of Conversation** -aiheesta.

    ![Valitse Kyllä](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.fi.png)

1. Arvioi kokemus valitsemalla jokin tähdistä arviointikortissa.

    Agentti siirtyy sitten **End of Conversation** -aiheen viimeiseen **Question**-solmuun. Valitse **Ei**.

    ![End of conversation -aihe](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.fi.png)

1. Aihe päättyy, kun lopullinen viesti näytetään testipaneelissa.

    ![End of conversation -aihe](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.fi.png)

1. Tarkista sähköpostitilisi Saapuneet-kansio nähdäksesi agenttivirran lähettämän sähköpostin esimiehelle. Näet valitun laitteen tiedot ja mukautettuun korttiin syötetyn kommentin.

    ![Sähköposti vastaanotettu](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.fi.png)

1. Klikkaa hyperlinkkiä, ja selain lataa laitteen SharePoint-kohteen. Mahtavaa!

    ![Klikkaa hyperlinkkiä sähköpostissa](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.fi.png)

#### 9.4.2 Pyydä laitetta, mutta älä lisää kommenttia mukautettuun korttiin

Testataan nyt skenaariota, jossa kommenttia ei lisätä.

1. Toista samat vaiheet:

    - **Päivitä** testipaneeli ja valitse **activity map** -kuvake
    - Syötä viesti, `I need a laptop`
    - Vastaa `Yes` kysymykseen laitteen pyytämisestä

    ![Pyydä laitetta](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.fi.png)

1. Valitse tällä kertaa **Surface Laptop 13** laitteeksi, mutta älä lisää kommenttia.

    ![Valitse laite](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.fi.png)

1. **Lähetä** pyyntö valitsemalla **Submit Request** -painike.

    ![Lähetä pyyntö](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.fi.png)

1. Tällä kertaa sähköpostissa, jonka saat Saapuneet-kansioosi, kommenttina näkyy **None**.

    ![Sähköposti vastaanotettu](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.fi.png)

#### 9.4.3 Älä pyydä laitetta

Testataan viimeinen skenaario, jossa laitetta ei pyydetä, ja **Goodbye**-aiheen tulisi käynnistyä agentin ohjeiden mukaisesti.

1. Toista samat vaiheet:

    - **Päivitä** testipaneeli ja valitse **activity map** -kuvake
    - Syötä viesti, `I need a laptop`
    - Vastaa tällä kertaa `No` kysymykseen laitteen pyytämisestä

    ![Testaa agenttia](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.fi.png)

1. Agentti käynnisti **Goodbye**-aiheen, ja kysymys, joka on määritelty aiheessa, esitetään.

    ![Goodbye-aihe käynnistetty](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.fi.png)

## ✅ Tehtävä suoritettu

Onnittelut! 👏🏻 Olet oppinut, kuinka rakentaa agenttivirta ja lisätä se olemassa olevaan **Request device** -aiheeseen, sekä kuinka ohjata agentti toiseen aiheeseen.

Tämä oli **Lab 09 - Lisää agenttivirta automaatiota varten ja paranna aiheen ominaisuuksia** -osion loppu. Valitse alla oleva linkki siirtyäksesi seuraavaan oppituntiin. Laajennamme tämän osion käyttötapausta seuraavan oppitunnin laboratoriossa.

⏭️ [Siirry **Add Event Triggers - Enable autonomous agent capabilities** -oppituntiin](../10-add-event-triggers/README.md)

## 📚 Taktiset resurssit

🔗 [Introducing agent flows: Transforming automation with AI-first workflows](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Agent flows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Use agent flows with your agent](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [List of functions in the reference guide](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Agent Flows in Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.