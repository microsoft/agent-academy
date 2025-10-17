<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-17T01:18:18+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 07: Lisää uusi aihe, jossa on laukaisin ja solmuja

## 🕵️‍♂️ Koodinimi: `OPERATIIVINEN PYSY AIHEESSA`

> **⏱️ Operaatioaikaikkuna:** `~60 minuuttia`

🎥 **Katso opastusvideo**

[![Laukaisuvideon pikkukuva](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.fi.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Katso opastus YouTubessa")

## 🎯 Tehtävän kuvaus

Olet rakentanut agentin. Se kuuntelee, oppii ja vastaa kysymyksiin - mutta nyt on aika toimia tarkemmin. Tässä tehtävässä sukellat syvälle ja opetat agenttiasi vastaamaan tarkasti tiettyihin kysymyksiin.

Aiheiden ja laukaisimien avulla agenttisi voi:

- Tunnistaa tarkoituksen

- Ohjata keskusteluja loogisesti

- Kerätä ja tallentaa muuttujia

- Laukaista prosesseja ja ryhtyä toimiin

Et vain rakenna dialogia, vaan kytket sen päätöksentekokeskuksen. Tervetuloa Neuraaliseen Nexus-maailmaan.

## 🔎 Tavoitteet

Tässä tehtävässä opit:

1. Ymmärtämään, mitä aiheet ovat ja niiden roolin agentin rakenteellisessa keskustelussa
1. Oppimaan aiheiden anatomian, mukaan lukien laukaisulauseet ja keskustelusolmut
1. Tutustumaan erilaisiin keskustelusolmuihin ja käyttämään Power Fx:ää dynaamiseen logiikkaan
1. Luomaan räätälöityjä aiheita alusta alkaen käyttäjän pyyntöjen ja tehtävien käsittelyyn
1. Rakentamaan toimivan aiheen, joka yhdistyy SharePoint-dataan liittimien ja työkalujen avulla

## 🤔 Mikä on aihe?

Aihe on rakenteellinen keskustelu, joka auttaa agenttiasi vastaamaan tiettyihin käyttäjän kysymyksiin tai tehtäviin. Ajattele aihetta mini-keskusteluna tai tehtävänä, jonka agenttisi voi hoitaa. Jokainen aihe on suunniteltu vastaamaan tiettyyn käyttäjän kysymykseen tai pyyntöön.

### 🌌 Aiheen tarkoitus

Aiheilla on kolme yleistä tarkoitusta käyttäjien tarpeiden mukaan:

**Informatiivinen** - vastaa kysymyksiin, kuten:

- `Mikä on …?`
- `Milloin …?`
- `Miksi …?`
- `Voitko kertoa minulle …?`

**Tehtävän suorittaminen** - auttaa käyttäjiä _tekemään_ jotain:

- `"Haluan …"`
- `"Kuinka voin …?"`
- `"Tarvitsen …?"`

**Vianetsintä** - ratkaisee ongelmia:

- `Jokin ei toimi …`
- `Kohtaan virheilmoituksen …`
- `Näen jotain odottamatonta …?`

Voit myös luoda aiheita epäselville kysymyksille, kuten `Tarvitsen apua`, jotka pyytävät käyttäjältä lisätietoja ennen jatkamista.

## 🐦 Miksi aiheet ovat hyödyllisiä?

Aiheet auttavat sinua:

- Järjestämään agenttisi tiedot.

- Tekemään keskusteluista luonnollisempia.

- Ratkaisemaan käyttäjän ongelmat tehokkaasti.

## 🪺 Aiheiden tyypit

1. **Järjestelmäaiheet** - nämä ovat sisäänrakennettuja ja käsittelevät yleisiä tapahtumia, kuten:
    - Keskustelun aloittaminen
    - Keskustelun lopettaminen
    - Virheiden käsittely
    - Käyttäjien kirjautumisen pyytäminen
    - Eskalointi ihmiskäsittelijälle

1. **Räätälöidyt aiheet** - nämä luodaan käsittelemään tiettyjä tehtäviä tai kysymyksiä, kuten:
    - Työntekijän lomapyyntö
    - Uuden tai korvaavan laitteen pyytäminen

![Aiheiden tyypit](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.fi.png)

## 🧬 Aiheen anatomia

Jokainen aihe sisältää yleensä seuraavat osat.

### 🗣️ Laukaisulauseet

Nämä ovat sanoja tai lauseita, joita käyttäjät voivat sanoa aloittaakseen aiheen.

**Esimerkkejä:**

Lomapyyntöaiheelle laukaisulauseet voivat olla

- `Haluan pitää lomaa`
- `Pyydä lomaa`
- `Hae vapaata`
- `Kuinka voin tehdä lomapyynnön?`

Laitteen pyyntöaiheelle laukaisulauseet voivat olla

- `Tarvitsen uuden laitteen`
- `Voinko pyytää laitetta?`
- `Voitko auttaa laitteen pyynnössä?`

### 💬 Keskustelusolmut

Aihe koostuu solmuista, jotka ovat askeleita, joita agentti seuraa, kun aihe laukaistaan. Näitä askeleita yhdistämällä rakennetaan keskusteluvirta, jota agentti seuraa vuorovaikutuksessa käyttäjien kanssa.

Ajattele näitä ohjeina tai toimintoina, kuten:

- Käyttäjän kysymysten esittäminen
- Viestien lähettäminen
- Ulkoisen palvelun, kuten lomahallintajärjestelmän, kutsuminen
- Muuttujien asettaminen tai tarkistaminen
- Ehtojen käyttäminen keskustelun haaroittamiseen
- Ohjaaminen toiseen aiheeseen

![Keskustelusolmut](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.fi.png)

Seuraavat ovat päätyypit solmuista, joita voit lisätä agenttiin:

#### Lähetä viesti

- **Tarkoitus** - lähettää viesti käyttäjälle.
- **Esimerkki** - `Kiitos pyynnöstäsi! Autan sinua siinä.`

Tämä solmu antaa agenttisi lähettää viestejä käyttäjille, jotka voivat olla yksinkertaista tekstiä tai rikasta sisältöä, kuten kuvia, videoita, kortteja, pikavastauksia ja mukautettuja kortteja.

Voit personoida viestejä muuttujien avulla, lisätä useita viestivaihtoehtoja vaihtelun vuoksi ja jopa mukauttaa puhetta ääniaktivoiduilla kanavilla.

!!! tip
    Ajattele tätä "sano jotain" -blokiksi, joka auttaa agenttiasi kommunikoimaan selkeästi ja vuorovaikutteisesti käyttäjien kanssa.

#### Kysy kysymys

- **Tarkoitus** - kysyy käyttäjältä kysymyksen ja odottaa vastausta.
- **Esimerkki** - `Mitkä ovat lomapäiväsi?`

Tämä solmu käytetään kysymään käyttäjiltä tiettyä tietoa keskustelun aikana ja tallentamaan heidän vastauksensa muuttujiksi myöhempää käyttöä varten.

Voit mukauttaa kysymyksen tyyppiä, kuten tekstisyötettä, tai käyttää entiteettejä määritellyn arvolistan kanssa, josta käyttäjä valitsee, ja määrittää, miten agentti käyttäytyy, jos käyttäjä antaa virheellisen vastauksen tai ohittaa kysymyksen.

Se tukee myös rikasta sisältöä, kuten kuvia ja pikavastauksia, ja antaa sinun hienosäätää validointia, uudelleenkysymistä ja keskeytysasetuksia, jotta keskustelu sujuu sujuvasti.

!!! tip
    Ajattele tätä "kysy ja kuuntele" -blokiksi, joka auttaa agenttiasi vuorovaikuttamaan käyttäjien kanssa rakenteellisella tavalla, jonka sinä määrität.

#### Kysy mukautetulla kortilla

- **Tarkoitus** - lähettää rikastettu, vuorovaikutteinen kortti JSON:n avulla.
- **Esimerkki** - kortti, joka näyttää kalenterin päivämäärän valitsimen käyttäjälle päivämäärän valitsemiseksi.

Tämä solmu näyttää rikastettuja, vuorovaikutteisia kortteja, joita käyttäjät voivat täyttää ja lähettää, kuten lomakkeita tekstikentillä, painikkeilla ja kuvilla. Se tallentaa käyttäjän syötteen muuttujiksi, joita agenttisi voi käyttää myöhemmin keskustelussa.

!!! tip
    Ajattele tätä mukautettavana "lomakkeen rakentaja" -blokiksi, joka tekee agentistasi kiinnostavamman ja kykenevämmän keräämään yksityiskohtaista tietoa käyttäjiltä.

#### Lisää ehto

- **Tarkoitus** - lisää logiikkaa keskusteluun. Tarkistaa jotain ja päättää, mitä tehdä seuraavaksi.
- **Esimerkki** - jos käyttäjä sanoo `Kyllä`, siirry seuraavaan vaiheeseen. Jos `Ei`, lopeta keskustelu.

Tämä solmu luo päätöspisteitä agenttisi keskusteluvirtaan tarkistamalla, täyttääkö muuttuja tietyt kriteerit. Jos ehto on tosi tai epätosi, agentti seuraa eri polkuja.

!!! tip
    Ajattele tätä "jos-else" -blokiksi, joka auttaa agenttiasi tekemään päätöksiä käyttäjän syötteen tai tallennetun datan perusteella.

#### Muuttujien hallinta

- **Tarkoitus** - tallentaa tai tyhjentää tietoa (kutsutaan muuttujiksi) keskustelun aikana.
- **Esimerkki** - tallentaa päivämäärän, jonka käyttäjä valitsi Kysy kysymys -solmussa, joka näyttää mukautetun kortin.

Tämä solmu antaa sinun tallentaa ja hallita tietoa keskustelun aikana, kuten käyttäjän nimen, vastauksen tai mieltymykset. Voit käyttää erilaisia muuttujatyyppejä, kuten tekstiä, numeroita tai päivämääriä, ja ne voivat olla rajattuja yhteen aiheeseen, jaettuja aiheiden välillä (globaalit) tai jopa haettuja järjestelmästä tai ympäristöstä.

!!! tip
    Ajattele tätä "muistilaatikkona", joka auttaa agenttiasi muistamaan tietoa ja käyttämään sitä keskustelun edetessä käyttäjän kanssa.

#### Aiheen hallinta

- **Tarkoitus** - siirtää keskustelu toiseen aiheeseen tai askeleeseen aiheen sisällä, siirtää keskustelu tai lopettaa aiheen tai keskustelun.
- **Esimerkki** - ohjaa "Lomapolitiikka" -aiheeseen.

Tämä solmu antaa agenttisi siirtyä aiheesta toiseen ilman, että keskustelu alkaa alusta, lopettaa aiheen, siirtää tai lopettaa keskustelun tai siirtyä eri askeleeseen saman aiheen sisällä. Se auttaa ohjaamaan käyttäjiä keskustelun eri osien läpi sujuvasti siirtymällä aiheiden välillä, ja voit välittää muuttujia niiden välillä säilyttääksesi kontekstin.

!!! tip
    Ajattele tätä "siirry toiseen osioon/askeleeseen" -blokiksi, joka auttaa agenttiasi olemaan joustava keskustelussa käyttäjien kanssa.

#### Lisää työkalu

- **Tarkoitus** - yhdistää työkaluihin, kuten liittimiin, agenttiprosesseihin, kehotteisiin, mukautettuun hakuun, hakukyselyyn, taitoihin, mallikontekstiprotokollaan.
- **Esimerkki** - Agenttiprosessi suoritetaan sen jälkeen, kun käyttäjä lähettää lomapyyntönsä.

Tämä solmu antaa agenttisi mahdollisuuden olla vuorovaikutuksessa ulkoisten järjestelmien kanssa tai suorittaa tiettyjä tehtäviä, kuten lähettää sähköposteja, tarkistaa säätä tai käyttää tietokantoja. Voit lisätä työkaluja sisäänrakennettujen liittimien, mukautettujen API:iden, agenttiprosessien, kehotteiden tai yhdistää mallikontekstiprotokollan (MCP) palvelimiin ja jopa graafisen käyttöliittymän automaation työpöytäsovelluksille tietokoneen käyttötyökalun avulla.

!!! tip
    Ajattele työkaluja "toimintablokkeina", jotka antavat agentillesi supervoimia tehdä asioita _keskustelun_ ulkopuolella, kuten kutsua API:ta, suorittaa prosessi tai kerätä käyttäjän syötettä automaattisesti.

#### Generatiivinen vastaussolmu

- **Tarkoitus** - käyttää suurta kielimallia tuottamaan luonnollisia, ihmismäisiä vastauksia käyttäjän kysymyksen ja mahdollisten liitettyjen tietojen perusteella.
- **Esimerkki** - käyttää liitettyä tietolähdettä, joka sisältää tietoa lomaoikeuksista, vastatakseen käyttäjän kysymyksiin lomapyynnöistä.

Tämä solmu mahdollistaa agenttisi vastaamaan käyttäjän kysymyksiin eri tietolähteistä, kuten verkkosivustoista, asiakirjoista, SharePointista tai mukautetusta datasta. Sitä voidaan käyttää varajärjestelmänä, kun sopivaa aihetta ei löydy, tai aiheen sisällä antamaan yksityiskohtaisempia, dynaamisia vastauksia määrittelemiisi lähteisiin perustuen.

!!! tip
    Ajattele tätä "älykäs vastausblokki", joka auttaa agenttiasi antamaan hyödyllisiä, tarkkoja vastauksia etsimällä luotettavaa sisältöä, jonka olet määritellyt.

#### HTTP-pyyntösolmu

- **Tarkoitus** - yhdistää agenttisi ulkoisiin järjestelmiin lähettämällä API-kutsuja (esimerkiksi `GET` tai `POST`) tietojen hakemiseksi tai päivittämiseksi.
- **Esimerkki** - kun käyttäjä kysyy lomapäivien saldoaan, agentti suorittaa `GET`-pyynnön lomahallintajärjestelmään, hakee `remainingLeaveDays` API-vastauksesta ja vastaa käyttäjälle arvolla.

Tämä solmu antaa agenttisi yhdistää ulkoisiin järjestelmiin lähettämällä REST API -kutsuja, kuten `GET`- tai `POST`-pyyntöjä. Voit mukauttaa pyyntöä otsikoilla, sisällöllä ja jopa käyttää Power Fx:ää sisällyttääksesi dynaamisia tietoja, ja tallentaa vastauksen muuttujiksi myöhempää käyttöä varten keskustelussa.

!!! tip
    Ajattele tätä "hanki tietoa" -blokiksi, joka auttaa agenttiasi kommunikoimaan muiden palveluiden kanssa, kuten käyttäjätietojen hakeminen tai datan lähettäminen toiseen järjestelmään.

#### Lähetä tapahtuma

- **Tarkoitus** - antaa agenttisi lähettää ei-viestitoimintoja, kuten järjestelmäpäivityksiä tai työkalujen laukaisuja - asiakkaalle tai kanavalle, auttaen sitä suorittamaan tehtäviä.
- **Esimerkki** - reagoi käyttäjän liittymiseen keskusteluun näyttämällä tervetuloviestin.

Tämä solmu antaa agenttisi lähettää ei-viestitoimintoja ulkoisiin järjestelmiin tai kanaviin, jotka voivat sitten päättää, miten reagoida. Annat jokaiselle tapahtumalle nimen ja liität siihen arvon, joka voi olla yksinkertainen numero tai teksti, muuttuja tai Power Fx -kaava, ja se lähetetään JSON-objektina.

!!! tip
    Ajattele tätä "hiljainen laukaisin" -blokiksi, joka auttaa agenttiasi tekemään asioita kulissien takana tai kommunikoimaan ulkoisten työkalujen kanssa ilman, että käyttäjän tarvitsee sanoa mitään.

## 🏋🏻‍♀️ Power Fx:n käyttö solmuissasi

Copilot Studiossa Power Fx on matalan koodin ohjelmointikieli, jota käytetään lisäämään logiikkaa ja dynaamista käyttäytymistä agenttiisi. Se on sama kieli, jota käytetään Microsoft Power Appsissa, ja se on suunniteltu yksinkertaiseksi ja Excel-tyyliseksi, mikä tekee siitä helppokäyttöisen kehittäjille ja ei-kehittäjille.

![Power Fx -kaava](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.fi.png)

### Mitä Power Fx voi tehdä aiheissa

- Asettaa ja käsitellä muuttujia
      - Esimerkki: `Set(userName, "Adele Vance")`
- Luoda ehtoja
      - Esimerkki: `If(score > 80, "Hyväksytty", "Hylätty")`
- Muotoilla ja muuntaa dataa
      - Esimerkki: `Text(DateValue, "pp/kk/vvvv")`

### Miksi käyttää Power Fx:ää?

- **Joustava:** voit rakentaa logiikkaa ilman täysiä koodirivejä.

- **Tuttu:** jos olet käyttänyt Excel-kaavoja, se tuntuu hyvin samankaltaiselta.

- **Tehokas:** se antaa sinun personoida keskusteluja, validoida syötteitä ja hallita, miten agenttisi käyttäytyy käyttäjädatan perusteella.

## 🏗️ Kuinka luon ja muokkaan aiheita?

On kaksi tapaa, joilla voit luoda ja muokata aiheita agenteillesi.

### 1. Luo tyhjästä

Tämä antaa sinun rakentaa räätälöityjä keskusteluvirtoja alusta alkaen, ja voit lisätä tai poistaa solmuja tarpeen mukaan, kun muokkaat aihetta.

![Lisää aihe](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.fi.png)

#### Miksi tämä on hyödyllistä

- Se antaa sinulle täyden hallinnan siitä, miten agenttisi vastaa
Tämä mahdollistaa sen, että voit kuvata haluamasi asiat luonnollisella kielellä, ja Copilot rakentaa keskustelun puolestasi. Sama pätee myös aiheen muokkaamiseen – käytä luonnollista kieltä, ja Copilot tarkistaa ja muokkaa aiheen puolestasi.

#### Mitä Copilot tukee

- Voi luoda ja muokata:
      - Viestisolmuja
      - Kysymyssolmuja
      - Ehtosolmuja
- Ei tue edistyneitä asetuksia, kuten miten käyttäjää kehotetaan vastaamaan uudelleen, jos hän ei vastaa, tai miten keskeytyksiä hallitaan kysymyksen aikana. Voit silti säätää näitä asetuksia manuaalisesti tarvittaessa.

#### Miksi tämä on hyödyllistä

- Nopeuttaa kehitystä tekoälyavustuksella.
- Mahdollistaa keskittymisen logiikkaan ja käyttäjäkokemukseen toistuvan asetuksen sijaan.
- Helpottaa keskustelujen kulkujen iterointia ja parantamista vähäisellä vaivalla.

#### ✨ Esimerkkikehotteet

- **Luo aihe**
      - `Hyväksy käyttäjän nimi, ikä ja syntymäaika ja toista sitten heidän vastauksensa takaisin heille`
      - `Kerää käyttäjän katuosoite, osavaltio ja postinumero. Käyttäjän tulisi voida yrittää uudelleen jokaista kysymystä enintään 4 kertaa`

- **Muokkaa aihetta**
      - `Lisää kysymys käyttäjän syntymäajan kysymiseksi`
      - `Yhteenveto kerätystä tiedosta Adaptive Cardissa.`

## 👩🏻‍🎨 OK, miten suunnittelen aiheet agentilleni?

### 🧙🏻‍♂️ Vaihe 1 - ymmärrä, mitä käyttäjät tarvitsevat

Aloita tunnistamalla yleiset kysymykset tai tehtävät, joita käyttäjät kysyvät agentiltasi. Nämä voivat olla:

- Kysymyksiä, joita käyttäjät kysyvät usein, kuten `mitkä ovat oikeuteni sairauslomiin?`
- Yleisiä tehtäviä, joita käyttäjät haluavat suorittaa, kuten lomakkeen lähettäminen
- Ongelmia, joita käyttäjät usein kohtaavat, kuten kirjautumisongelmat

### 📦 Vaihe 2 - Ryhmittele skenaariot

Järjestä käyttäjien tarpeet kolmeen kategoriaan aiheen tarkoituksen perusteella:

- Tiedottaminen - käyttäjä haluaa tietää jotain
- Tehtävän suorittaminen - käyttäjä haluaa tehdä jotain
- Ongelmanratkaisu - käyttäjä tarvitsee apua ongelman ratkaisemiseksi

### 🗺️ Vaihe 3 - Suunnittele keskustelu

Piirrä yksinkertainen keskustelun kulku siitä, miten agentin tulisi vastata

- Aloita tervehdyksellä tai vahvistuksella
- Kysy jatkokysymyksiä saadaksesi lisätietoja
- Anna vastauksia tai suorita toimintoja

!!! tip
    Pidä keskustelu lyhyenä ja keskittyneenä. Kysy vain, mitä on tarpeen.

### 🔀 Vaihe 4 - Käsittele erilaisia keskustelutyyppejä

Suunnittele molempia varten:

- **Yksivaiheinen** - yksi kysymys, yksi vastaus

- **Monivaiheinen** - edestakainen keskustelu jatkokysymyksineen

Esimerkki:

- Käyttäjä: `Haluan hakea lomaa.`

- Agentti: `Selvä! Milloin haluaisit aloittaa lomasi?`

- Käyttäjä: `15. heinäkuuta`

- Agentti: `Selvä. Ja milloin lomasi päättyy?`

- Käyttäjä: `22. heinäkuuta.`

- Agentti: `Kiitos! Mikä on lomasi syy?`

- Käyttäjä: `Perheloma.`

- Agentti: `Kiitos tiedoista. Olen lähettänyt lomapyyntösi 15.–22. heinäkuuta perhelomaa varten. Saat pian vahvistuksen.`

### 🤖 Vaihe 5 - Käytä tekoälyä odottamattomiin kysymyksiin

Vaikka olisit suunnitellut aiheen lomapyyntöjä varten, käyttäjät saattavat esittää kysymyksiä, jotka eivät suoraan liity aiheeseen. Tässä tekoälyominaisuudet, kuten _Conversational boosting_ -järjestelmäaihe, ovat hyödyllisiä.

Tämä aihe sisältää generatiivisten vastausten solmun, jonka avulla agenttisi voi käyttää yhdistettyjä tietolähteitä heti. Kaikki agenttitasolla lisätyt tietolähteet sisältyvät automaattisesti generatiivisten vastausten solmuun _Conversational boosting_ -järjestelmäaiheessa.

#### Esimerkki

- Käyttäjä: `Voinko siirtää käyttämättömät lomapäivät ensi vuoteen?`

Tämä kysymys ei ehkä ole osa ennalta määriteltyä aiheen kulkua, varsinkin jos aihe käsittelee vain lomapyyntöjen lähettämistä.

#### Miten tekoäly auttaa

Jos agenttisi on yhdistetty yrityksesi HR-politiikkadokumentteihin tai sisäiseen verkkosivustoon, tekoäly voi:

- Etsiä asiaankuuluvan lomapolitiikan
- Ymmärtää ja tiivistää säännöt
- Agentti vastaa: `HR-politiikan mukaan voit siirtää käyttämättömät lomapäivät seuraavaan kalenterivuoteen. Lisätietoja löydät HR-portaalin lomapolitiikkaosiosta.`

#### Miksi tämä on hyödyllistä

- Sinun ei tarvitse manuaalisesti luoda aihetta jokaiselle politiikkaan liittyvälle kysymykselle.
- Tekoäly voi hakea tarkkoja vastauksia luotettavista tietolähteistä.
- Parantaa käyttäjäkokemusta tekemällä agentista älykkäämmän ja reagoivamman.

### 🔬 Vaihe 6 - Testaa aihe, keskustelun kulku

Ennen aiheen julkaisemista:

- Testaa käyttämällä oikeita kysymyksiä tai oikeita esimerkkisyötteitä.
- Varmista, että se kuulostaa luonnolliselta ja hyödylliseltä.

!!! tip
    Tee aiheeseesi parannuksia testauksen perusteella, kuten lisäämällä solmuja tai poistamalla solmuja ja ohjaamalla toiseen aiheeseen.

### ⚠️ Vaihe 7 - Vältä verkkosivuston sisällön kopioimista

Älä kopioi sisältöä, joka on jo verkkosivustollasi.

- Keskity aiheisiin, joista käyttäjät kysyvät usein.
- Lisää uusia aiheita chat-historian tai tukipyyntöjen perusteella.

### ✨ Esimerkki keskustelun kulusta

Alla on esimerkki aiheesta, joka käsittelee lomapyyntöjä.

#### Vaihe 1: Laukaisulause

Käyttäjä kirjoittaa,

`Haluan hakea lomaa`

#### Vaihe 2: Agentti kysyy lisätietoja Adaptive Cardin avulla

Agentti kysyy,

`Selvä! Mitkä päivämäärät haluaisit ottaa vapaaksi?`

Adaptive Card sisältää aloituspäivän ja lopetuspäivän kalenterivalintakontrollin.

#### Vaihe 3: Käyttäjä antaa päivämäärät

Käyttäjä valitsee aloituspäiväksi 5. elokuuta 2025 ja lopetuspäiväksi 10. elokuuta 2025 ja lähettää kortin. Päivämääräarvot tallennetaan Adaptive Cardin tuloksiin muuttujina.

#### Vaihe 4: Pilvivirtaus suoritetaan

Power Automate -pilvivirtaus suoritetaan, joka luo uuden pyynnön lomahallintajärjestelmään ja lähettää sähköpostin ilmoittaakseen esimiehelle lomapyynnöstä.

#### Vaihe 5: Lähetä vahvistusviesti käyttäjälle

Agentti vastaa,

`Lomapyyntösi ajalle 5.–10. elokuuta on lähetetty. Esimiehesi tarkistaa sen ja palaa asiaan pian.`

## 🧪 Labra 07 - Lisää uusi aihe keskustelusolmuilla

Nyt opimme, kuinka lisätä uusi aihe laukaisimella ja työkaluilla. Tässä labrassa käsitellään aiheen luomista tyhjästä, jotta ymmärrät, kuinka mukauttaa aiheet tarpeisiisi.

- [7.1 Lisää uusi aihe tyhjästä](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Määritä laukaisimen syötteet ja tulosteet](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Lisää työkalu liittimen avulla](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Käyttötapaus

**Minä työntekijänä**

**Haluan** tietää, mitkä laitteet ovat saatavilla

**Jotta** minulla olisi lista saatavilla olevista laitteista

Aloitetaan!

### Esivaatimukset

1. **SharePoint-lista**

    Käytämme **Devices**-SharePoint-listaa [Lesson 00 - Kurssin asetukset - Vaihe 3: Luo uusi SharePoint-sivusto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Jos et ole vielä luonut **Devices**-SharePoint-listaa, palaa kohtaan [Lesson 00 - Kurssin asetukset - Vaihe 3: Luo uusi SharePoint-sivusto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Helpdesk Agent**

    Käytämme aiemmin luotua agenttia kohdasta [Lesson 06 - Luo mukautettu agentti luonnollisella kielellä Copilotin avulla ja yhdistä se tietoihisi](../06-create-agent-from-conversation/README.md).

### 7.1 Lisää uusi aihe tyhjästä

1. Valitse **Topics-välilehti** agentin nimen lähellä. Jos et näe sitä näkyvissä, valitse **+6**, jolloin näet **Topics**-listauksen.

    ![Valitse Topics](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.fi.png)

1. **Topics-välilehti** latautuu, ja oletuksena _Custom_-aiheet näytetään. Voit suodattaa aiheet All, Custom ja System. Custom- ja System-aiheet, jotka näet tällä hetkellä, luotiin automaattisesti, kun agentti otettiin käyttöön.

    Valitse **+ Add a topic** ja valitse **From blank**.

    ![Luo aihe tyhjästä](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.fi.png)

1. Anna aiheelle nimi. Kopioi ja liitä seuraava.

    ```text
    Available devices
    ```

    ![Nimeä aihe](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.fi.png)

1. Anna laukaisukuvauksen, joka kuvaa, mitä aihe tekee. Kopioi ja liitä seuraava.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Anna nimi ja kuvaus laukaisimelle](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.fi.png)

### 7.2 Määritä laukaisimen syötteet ja tulosteet

1. Seuraavaksi lisäämme uuden syöttömuuttujan, jota generatiivinen tekoäly käyttää orkesteroinnissaan saadakseen laitetyypin arvon käyttäjän viestistä. Valitse aiheen **More ellipsis (...)** ja valitse **Details**, jotta näet aiheen yksityiskohdat.

    ![Valitse aiheen yksityiskohdat](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.fi.png)

1. **Topic details**-paneeli on nyt latautunut. Valitse **Input**-välilehti.

    ![Input-välilehti](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.fi.png)

1. Valitse **Create a new variable**.

    ![Luo uusi syöttömuuttuja](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.fi.png)

1. Anna muuttujalle nimi. Kopioi ja liitä seuraava.

    ```text
    VarDeviceType
    ```

    ![Syöttömuuttujan nimi](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.fi.png)

1. Nyt meidän täytyy määrittää syöttö- ja tulostemuuttujamme. Seuraavat ovat ominaisuuksia, jotka voidaan määrittää aiheen syötteille ja tulosteille.

    | Kenttä    | Arvo |
    | ---------- | :--------- |
    | Miten agentti täyttää tämän syötteen? | Määrittää, miten agentti täyttää tämän muuttujan arvolla ennen aiheen suorittamista. Oletuksena se on asetettu _Täytä dynaamisesti parhaalla vaihtoehdolla_. Muuten voit ohittaa syötteen arvolla kysymättä käyttäjältä|
    | Muuttujan tietotyyppi  | Muuttujan tietotyyppi. Tuetut tietotyypit ovat `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Näyttönimi   | Muuttujan nimi   |
    | Tunnista nimellä  | Entiteettityyppi, jotta agentti voi tunnistaa oikean arvotyypin  |
    | Kuvaus    | Kuvaus auttaa agenttia täyttämään syötteet automaattisesti ennen aiheen suorittamista tai luomaan kysymyksiä arvojen kysymiseksi   |

    _Miten agentti täyttää tämän syötteen?_, _Muuttujan tietotyyppi_ ja _Näyttönimi_ voivat pysyä ennallaan. Päivitä **Tunnista nimellä**-ominaisuus **Käyttäjän koko vastaus**.

    ![Päivitä Tunnista nimellä](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.fi.png)

1. Kopioi ja liitä seuraava kuvaukseksi.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Kuvaus](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.fi.png)

1. Seuraavaksi määritellään aiheen tuloste. Valitse **Output**-välilehti.

    ![Valitse Output-välilehti](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.fi.png)

1. Valitse **Create a new variable**.

    ![Luo uusi tulostemuuttuja](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.fi.png)

1. Päivitä seuraavat ominaisuudet.

    **Muuttujan nimi** - Kopioi ja liitä seuraava.

    ```text
    VarAvailableDevices
    ```

    **Muuttujan tietotyyppi** - Valitse **Table** tietotyypiksi.

    **Muuttujan kuvaus** - Kopioi ja liitä seuraava.

    ```text
    List of available devices by device type
    ```

    ![Tulosteen ominaisuudet](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.fi.png)

1. Olemme nyt määrittäneet aiheen syötteet ja tulosteet. Valitse **X-ikoni** poistuaksesi **Topic details**-paneelista.

    ![Poistu aiheen yksityiskohtien paneelista.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.fi.png)

### 7.3 Lisää työkalu liittimen avulla

1. Seuraavaksi lisätään solmu, joka mahdollistaa agentin hakea laitelistauksen **Devices**-SharePoint-listasta. Valitse **+ ikoni** laukaisimen alapuolella.

    ![Lisää työkalu](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.fi.png)

1. Valitse **Add a tool**-solmu ja sitten **Connector**-välilehti. Etsi `Get items` ja valitse **Get items** SharePoint-liittimen toiminto.

    ![Valitse get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.fi.png)

1. Liittimelle täytyy luoda uusi yhteys. Valitse **chevron**-ikoni ja valitse **Create new connection**.

    ![Lisää työkalu](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.fi.png)

1. Näytetään kaksi vaihtoehtoa, joiden avulla voit yhdistää suoraan SharePoint Onlineen tai paikalliseen SharePointiin. Oletuksena **Connect directly (cloud-services)**-vaihtoehto on valittuna, ja sitä käytämme yhteyden luomiseen.
Valitse **Luo**.

![Valitse Luo](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.fi.png)

1. Valitse kirjautunut käyttäjätilisi.

![Valitse kirjautunut käyttäjätili](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.fi.png)

1. Seuraavaksi sinun täytyy vahvistaa, että käyttäjätiliäsi voidaan käyttää SharePoint-liittimen yhteyteen. Valitse **Salli pääsy**.

![Valitse salli pääsy](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.fi.png)

1. Valitse **Lähetä**, jotta **Hae kohteet** SharePoint-liittimen toiminto lisätään solmuksi aiheeseen.

![Lähetä](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.fi.png)

1. **Hae kohteet** SharePoint-liittimen toiminto on nyt lisätty aiheeseen. Voimme nyt aloittaa toiminnon syötteiden määrittämisen. Valitse **kolmen pisteen (...) kuvake** ja valitse **Ominaisuudet**.

![Valitse Ominaisuudet](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.fi.png)

1. **Hae kohteet** -määrittelypaneeli avautuu, ja oletuksena näet **Syötteet**-välilehden. Valitse **Aloitus**-välilehti ja kirjoita kuvaus **Käyttökuvaus**-kenttään. Kopioi ja liitä seuraava.

    ```text
    Retrieves devices from SharePoint list
    ```

> Tämä on hyödyllistä, kun tarkastelemme agentin _Hallitse yhteyksiäsi_ -sivua. Palaamme tähän pian.

![Hae kohteet kuvaus](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.fi.png)

1. Valitse **Syötteet**-välilehti ja valitse **Contoso IT** -sivusto ja **Laitteet**-lista, jonka loit [Oppitunti 00 - Kurssin asennus - Vaihe 3: Luo uusi SharePoint-sivusto](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Määritä Hae kohteet syötteet](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.fi.png)

1. Nyt, jotta näytetään vain laitteet SharePoint-listasta seuraavien perusteella:
   - valittu arvo,
   - ja vain laitteet, joiden tila on _Saatavilla_,

   meidän täytyy soveltaa suodatinta. Tämä tehdään syöttämällä suodatuskysely Power Fx:n avulla. Valitse **kolmen pisteen (...) kuvake**.

![Valitse kolmen pisteen kuvake](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.fi.png)

1. Oletuksena olet **Mukautettu**-välilehdellä. Valitse **Kaava**-välilehti.

![Valitse Kaava-välilehti](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.fi.png)

1. Valitse **laajenna**-kuvake suurentaaksesi **Kaava**-kenttää. Kopioi ja liitä seuraava Power Fx -lauseke.

Käytämme `Concatenate`-funktiota luodaksemme lausekkeen, joka suodattaa:
   - SharePoint-sarakkeen **Tila** yhtä kuin _Saatavilla_,
   - ja SharePoint-sarakkeen **Omaisuustyyppi** yhtä kuin _valittu laite kysymyssolmusta_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Valitse **Lisää**.

![Syötä Power Fx -lauseke ja valitse lisää](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.fi.png)

1. Power Fx -lauseke sovelletaan nyt **Hae kohteet** -toiminnon Suodatuskysely-syöteparametriin. Seuraavaksi valitse **Kaikki kohteet** -näkymä **Rajoita sarakkeet näkymän mukaan** -kohdassa. Tämä hakee vain listan sarakkeet valitun näkymän perusteella.

![Listaa sarakkeet näkymän mukaan](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.fi.png)

1. Seuraavaksi päivitämme muuttujan nimen tulosteelle. Valitse **Tulosteet**-välilehti ja valitse `GetItems`-muuttuja.

![Päivitä muuttuja](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.fi.png)

1. Päivitä nimi seuraavaksi.

    ```text
    VarDevices
    ```

![Päivitä muuttujan nimi](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.fi.png)

1. Vieritä alas ja valitse **Käyttö**-osiossa **Globaali**. Tämä tekee muuttujasta käytettävissä olevan kaikille aiheille.

![Päivitä globaaliksi muuttujaksi](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.fi.png)

1. **Sulje** **Muuttujan ominaisuudet** -paneeli.

![Sulje Muuttujan ominaisuudet -paneeli](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.fi.png)

1. Valitse **plus +** -kuvake lisätäksesi uuden solmun, valitse **Muuttujan hallinta** ja sen jälkeen **Aseta muuttujan arvo**.

![Lisää Aseta muuttujan arvo -solmu](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.fi.png)

1. Valitse **suurempi kuin** -kuvake **Aseta muuttuja** -syöteparametrille.

![Aseta muuttuja](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.fi.png)

1. Valitse aiemmin luotu aiheen tuloste muuttujaksi, **VarAvailableDevices**.

![Tallenna aihe](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.fi.png)

1. Seuraavaksi valitse **kolmen pisteen (...) kuvake** määrittääksesi muuttujan arvon.

![Valitse muuttujan arvo](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.fi.png)

1. Käytämme nyt PowerFx-lauseketta asettaaksemme muuttujan arvoksi `value`-ominaisuuden, joka palautetaan **Hae kohteet** -vastauksessa, ja teemme [muuttujan laajuuden](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) globaaliksi lisäämällä etuliitteen `Global`.

Valitse **Lisää** ja **tallenna** aihe.

![Power Fx -kaava muuttujan arvolle](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.fi.png)

1. Seuraavaksi meidän täytyy päivittää agentin ohjeet. Valitse **Yleiskatsaus**-välilehti ja valitse **Muokkaa**.

![Muokkaa ohjeita](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.fi.png)

1. Lisää uusi rivi ohjeisiin, kopioi ja liitä seuraava.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Tämä ohje opastaa generatiivista tekoälyä käyttämään **Saatavilla olevat laitteet** -laukaisinta näyttääkseen listan saatavilla olevista laitteista **Laitteet** SharePoint-listasta. Valitse koko aiheen paikkamerkki hakasuluissa.

![Lisää ohjeet](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.fi.png)

1. Kirjoita eteenpäin vinoviiva `/` ja lista aiheista ilmestyy. Valitse **Saatavilla olevat laitteet** -aihe.

![Viittaa laukaisimeen](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.fi.png)

1. **Tallenna** päivitetyt ohjeet.

![Tallenna ohjeet](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.fi.png)

1. Nyt testaamme päivitettyä agenttia. Valitse **Testaa** oikeasta yläkulmasta näyttääksesi testipaneelin ja **päivitä** testipaneeli. Syötä seuraava viesti agentille.

    ```text
    I need a laptop
    ```

![Testaa](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.fi.png)

1. Ennen kuin agentti voi jatkaa, käyttäjän täytyy vahvistaa, että heidän yhteyttään voidaan käyttää. Valitse **Salli**.

![Valitse salli](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.fi.png)

1. Agentti suorittaa SharePoint-työkalun, joka hakee suodatetun listan laitteista, joissa laitetyyppi on "kannettava" ja tila on "saatavilla", Power Fx -lausekkeen avulla. Vastaus palautetaan käyttäjälle luettelomuodossa.

![Testin vastaus](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.fi.png)

1. Viimeinen asia, jonka opimme, on tarkastella käytettyjä yhteyksiä agentin _Hallitse yhteyksiäsi_ -sivulla. Valitse **kolmen pisteen (...)** ja valitse **Hallitse yhteyttä**.

![Hallitse yhteyttä](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.fi.png)

1. Tällä sivulla näemme kaikki agentin käyttämät yhteydet. Tällä hetkellä listattuna on vain yksi yhteys, joka liittyy SharePoint-työkaluun, joka lisättiin aiheeseen. Valitse **1 työkalu** **Käytössä**-sarakkeessa.

![Käytössä](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.fi.png)

1. Täällä näemme yksityiskohdat Hae kohteet -toiminnosta ja muistamme aiemmin syötetyn _käyttökuvauksen_. Tämä on paikka, jossa näemme käyttökuvauksen. Valitse **Sulje**.

> Tämä kertoo meille, mitä toimintoja käytetään ja niiden tarkoituksen. Tämä auttaa pitämään yhteydet järjestyksessä 📁.

![Käyttökuvaus](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.fi.png)

1. Palaa Copilot Studion selaimen välilehteen ja **päivitä** testipaneeli tyhjentääksesi testin.

## ✅ Tehtävä suoritettu

Onnittelut! 👏🏻 Olet oppinut, kuinka lisätä uusi aihe alusta alkaen, kuinka lisätä työkalu, joka kutsuu Hae kohteet SharePoint-liittimen toiminnon, ja käyttää Power Fx:ää suodattamaan vastausta niin, että palautetaan vain laitteet, joiden tila on saatavilla ja laitetyyppi on kannettava. 🙌🏻

Tämä on **Lab 07 - Lisää uusi aihe keskustelusolmuilla** loppu, valitse alla oleva linkki siirtyäksesi seuraavaan oppituntiin. Laajennamme tämän laboratorion käyttötapausta seuraavan oppitunnin laboratoriossa.

⏭️ [Siirry **Paranna käyttäjävuorovaikutusta mukautetuilla korteilla** -oppituntiin](../08-add-adaptive-card/README.md)

## 📚 Taktiset resurssit

🔗 [Käytä järjestelmäaiheita](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Aiheet Microsoft Copilot Studiossa](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Aiheiden laukaisimien asettaminen](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Agenttiaiheiden määrittäminen](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Luo lausekkeita Power Fx:llä](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Luo aiheita luonnollisella kielellä](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Lisää toimintoja agenteille liittimien avulla](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.