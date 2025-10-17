<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-17T05:32:09+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "fi"
}
-->
# 🕵️‍♂️ Tehtävä 04: Agenttiohjeiden laatiminen

--8<-- "disclaimer.md"

## 🕵️‍♂️ Koodinimi: `OPERATION SECRET DIRECTIVE`

> **⏱️ Operaatioaikaikkuna:** `~45 minuuttia`

## 🎯 Tehtävän kuvaus

Agentti, seuraava tehtäväsi on **Operation Secret Directive** - hallitse agenttiviestinnän ja -ohjauksen taito tarkkojen ohjeiden ja kuvausten avulla.

Tehtäväsi, jos päätät hyväksyä sen, on oppia kriittiset taidot kirjoittaa selkeitä, toimivia ohjeita, jotka ohjaavat agenttejasi tekemään älykkäitä päätöksiä, käyttämään oikeita työkaluja ja tietolähteitä sekä tekemään saumatonta yhteistyötä muiden agenttien kanssa. Opit myös laatimaan korkealaatuisia kuvauksia, jotka auttavat agentteja ymmärtämään resurssejaan ja vastaamaan kirurgisella tarkkuudella käyttäjän kyselyihin.

Pidä tätä edistyneenä koulutuksena agenttien psykologiassa ja käyttäytymisen muokkaamisessa. Aivan kuten kenttäoperaattori tarvitsee selkeät tehtäväparametrit onnistuakseen, myös tekoälyagenttisi tarvitsevat asiantuntevasti laadittuja ohjeita toimiakseen selkeästi, tarkasti ja tuottaakseen arvokasta tiedustelutietoa todellisissa tilanteissa.

---

## 🔎 Tavoitteet

Tehtävän suorittamalla opit:

- **Ohjeiden hallinta**: Ymmärrät agenttiohjeiden kirjoittamisen taidon ja tieteen Copilot Studiossa
- **Strateginen ohjaus**: Opit ohjaamaan agentteja käyttämään työkaluja, tietolähteitä ja tekemään yhteistyötä muiden agenttien kanssa
- **Toiminnallinen selkeys**: Varmistat, että agenttisi toimivat tarkasti, läpinäkyvästi ja tehokkaasti

---

## 📝 Agenttiohjeiden kirjoittaminen

Tehokkaiden agenttiohjeiden kirjoittaminen on avain onnistuneeseen agenttikäyttäytymiseen. Ohjeita käytetään agenttien toiminnassa seuraavasti:

- Päätetään, mitä työkalua, aihetta tai tietolähdettä käytetään käyttäjän kyselyyn tai autonomiseen laukaisimeen
- Täytetään työkalujen syötteet saatavilla olevan kontekstin perusteella
- Luodaan vastaus loppukäyttäjälle

### Miten ohjeet toimivat

Ohjeiden tulee perustua agentille määritettyihin työkaluihin, aiheisiin ja tietolähteisiin. Agentit eivät voi toimia ohjeiden mukaan resursseilla, joita heillä ei ole. Esimerkiksi, jos ohjeistat agenttiasi etsimään verkkosivuston FAQ:sta, sinun on lisättävä kyseinen FAQ tietolähteeksi.

Voit viitata tiettyihin työkaluihin, aiheisiin, muuttujin tai Power Fx -ilmaisuun käyttämällä `/` ohjeissasi. Tämä auttaa agenttia tietämään tarkalleen, mitä käyttää ja milloin.

### Mitä ohjeisiin sisällytetään

- Lisää ohjeita tilanteisiin, joissa haluat ohjata agentin valintoja, erityisesti silloin, kun epäselvyyttä voi esiintyä.
- Käytä ohjeita asettaaksesi rajoja, kuten rajoittamalla aiheita tai määrittämällä vastausmuotoja.
- Anna vihjeitä työkalujen syötteiden täyttämiseen, esim. "Käytä sähköpostiosoitetta liidien yhteystietokentästä, kun autat käyttäjää sähköpostin luonnissa."
- Määritä, miten vastaukset tulisi muotoilla, esim. "Anna aina tilausstatusta koskevat vastaukset taulukkomuodossa."
- Käytä rajoituksia rajoittaaksesi agentin toimia, esim. "Vastaa vain työntekijäetuja koskeviin pyyntöihin."

### Käytännön esimerkkejä

- "Käytä FAQ-dokumentteja vain, jos kysymys ei liity aukioloaikoihin, tapaamisiin tai laskutukseen."
- "Käytä tiketin luomiseen vain tiketin luomiseen tarkoitettua aihetta; muihin korjauspyyntöihin käytä vianetsintäaihetta."
- "Anna aina tilausstatusta koskevat vastaukset taulukkomuodossa."

### Testaus ja hienosäätö

- Muokattuasi ohjeita, käytä testipaneelia agentin toiminnan validointiin.
- Päivitä ja julkaise muutokset tarpeen mukaan.

### Edistynyt ohjaus

- Numeroi tai luettele ohjeesi ja määritä, että ne on noudatettava järjestyksessä.
- Käytä markdown-muotoilua luettavuuden parantamiseksi ja generatiivisen tekoälyn ohjeiden käsittelyn helpottamiseksi.
- Jos haluat agenttisi olevan erittäin tarkka, harkitse aiheen luomista kyseistä käyttötapausta varten.
- Käytä ohjeissa tarkkoja työkalu- ja aiheiden nimiä välttääksesi sekaannusta.

### Turvallisuus ja moderointi

- Rajoita, mitä työkaluja agentin tulisi käyttää viitatessaan tietolähteisiin.
- Rajoita, mitä parametreja tulisi käyttää työkaluissa (esim. lähetä sähköpostia vain määritetylle henkilölistalle).
- Käytä ohjeita suojautuaksesi ei-toivotulta käyttäytymiseltä tai sisällön suodatusongelmilta.

---

## ✍️ Työkalujen, aiheiden ja agenttien kuvausten laatiminen

Korkealaatuiset kuvaukset ovat välttämättömiä generatiivisessa orkestroinnissa. Agenttisi käyttää näitä kuvauksia valitakseen oikeat työkalut, aiheet ja agentit vastatakseen käyttäjän kyselyihin ja laukaisimiin. Noudata näitä parhaita käytäntöjä:

- **Käytä yksinkertaista, suoraa kieltä**: Vältä ammattijargonia, slangia tai liian teknisiä termejä. Kirjoita aktiivisessa muodossa ja preesensissä.
- **Ole tarkka ja relevantti**: Sisällytä avainsanoja, jotka liittyvät toiminnallisuuteen ja käyttäjän tarkoitukseen. Varmista, että kuvaukset erottavat samankaltaiset työkalut tai aiheet selkeästi epäselvyyden välttämiseksi.
- **Pidä lyhyenä ja informatiivisena**: Rajoita kuvaukset yhteen tai kahteen lauseeseen. Tiivistä, mitä työkalu, aihe tai agentti tekee ja miten se hyödyttää käyttäjää.
- **Käytä ainutlaatuisia, kuvaavia nimiä**: Vältä yleisiä nimiä. Esimerkiksi käytä "Sääennuste huomiselle" sen sijaan, että käyttäisit vain "Sää".
- **Listaa toiminnot tai huomioitavat asiat**: Käytä selkeyden vuoksi luetteloita tai numeroituja listoja kuvatessasi useita ominaisuuksia tai vaiheita.
- **Testaa päällekkäisyyttä**: Jos useilla aiheilla on samankaltaisia kuvauksia, agenttisi saattaa käyttää niitä kaikkia. Testaa ja muokkaa päällekkäisyyden estämiseksi.

!!! example "Hyvät ja huonot kuvausesimerkit"
    **Hyvä:** Tämä aihe tarjoaa säätietoja mistä tahansa maailman sijainnista seuraavalle päivälle. Se antaa lämpötilan. Se ei anna nykyistä säätietoa tälle päivälle.  
    **Huono:** Tämä työkalu voi vastata kysymyksiin. *(Liian epämääräinen)*

---

## 🛠️ Parhaat käytännöt ohjeille ja kuvauksille

Jotta ohjeesi ja kuvauksesi olisivat todella tehokkaita, pidä mielessä nämä periaatteet:

- Käytä aktiivista muotoa ja preesenssiä (esim. "Tämä työkalu tarjoaa säätietoja").
- Vältä ammattijargonia, slangia tai tarpeettomia teknisiä termejä, ellei se ole välttämätöntä kohdeyleisölle.
- Käytä luetteloita tai numeroituja listoja erottamaan toiminnot, ominaisuudet tai huomioitavat asiat.
- Sisällytä avainsanoja, jotka vastaavat käyttäjän tarkoitusta ja työkalun tai aiheen toiminnallisuutta.
- Varmista, että samankaltaisilla resursseilla on erottuvat nimet ja kuvaukset sekaannuksen ja päällekkäisyyden välttämiseksi.

---

## 🗂️ Esimerkkirakenne ohjeille

Kun kirjoitat ohjeita, harkitse seuraavaa rakennetta selkeyden ja kattavuuden varmistamiseksi:

1. **Yleiskatsaus**: Kuvaa lyhyesti agentin tehtävä ja rooli  
1. **Prosessivaiheet**: Luettele päävaiheet, joita agentin tulisi noudattaa  
1. **Yhteistyöpisteet**: Ilmoita, milloin kutsua muita agentteja tai käyttää tiettyjä työkaluja  
1. **Turvallisuus ja moderointi**: Sisällytä vaatimustenmukaisuus- tai turvallisuusvaatimukset  
1. **Palaute**: Määritä, miten agentin tulisi kerätä palautetta tai eskaloida ongelmia  

---

## 🧪 Laboratorio: Agenttiohjeiden laatiminen

*Laboratoriomateriaali tulossa pian...*

---

## 🎉 Tehtävä suoritettu

Tehtävä 04 on suoritettu! Nyt sinulla on:

✅ **Ohjeiden hallinta**: Opit kirjoittamaan selkeitä, toimivia agenttiohjeita  
✅ **Strateginen ohjaus**: Ohjasit agentteja käyttämään työkaluja ja tekemään yhteistyötä tehokkaasti  
✅ **Toiminnallinen selkeys**: Varmistit, että agentit toimivat tarkasti ja läpinäkyvästi  

Seuraavaksi [Tehtävä 05](../05-agent-responses/README.md): Agenttivastausten räätälöinti maksimaalisen vaikutuksen saavuttamiseksi.

---

## 📚 Taktiset resurssit

📖 [Microsoft Copilot Studio - Ohjeiden laatiminen](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Generatiivisen tilan ohjeistus](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.