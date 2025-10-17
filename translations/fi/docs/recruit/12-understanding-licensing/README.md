<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-17T01:33:19+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 12: Ymmärrä lisensointi

## 🕵️‍♂️ Koodinimi: `OPERATION TIEDÄ MITÄ OLET VELKAA`

> **⏱️ Tehtävän kesto:** `~15 minuuttia`

## 🎯 Tehtävän kuvaus

Tervetuloa, Rekrytoitu. Ennen kuin lähetät agenttisi kentälle, sinun täytyy tietää **miten käyttöä mitataan, lisensoidaan ja laskutetaan**. Tämä tehtävä selittää viestipohjaisen laskutusmallin, kertoo mitä Microsoft 365 Copilot -lisenssit sisältävät ja opastaa sinua suunnittelemaan arviointityökalun avulla.

---

## 🎯 Tavoite: Ymmärrä viestipohjainen malli

Copilot Studio ei laskuta käyttäjien tai ominaisuuksien perusteella—laskutus perustuu siihen, **kuinka monta viestiä agenttisi kuluttavat**. "Viesti" tarkoittaa vuorovaikutusta agenttisi ja käyttäjän (tai järjestelmän) välillä.

- 💬 Jokainen käyttäjän vuorovaikutus agenttisi kanssa lasketaan vähintään **1 viestiksi**
- 🔄 Monimutkaiset vuorovaikutukset (kuten grounding, generatiivinen AI tai flow't) kuluttavat **useita viestejä**
- 💼 Maksat viesteistä joko **ennakkoon ostetuilla paketeilla** tai **käytön mukaan (PAYGO)**

---

## Lisensointivaihtoehdot

### 1. **Copilot Studio -viestipaketit**

- Ennakkoon maksettu: **25 000 viestiä/kuukausi hintaan $200**
- Paras ennakoitavalle käytölle — kapasiteetti jaetaan vuokraajan kesken

### 2. **Käytön mukaan (PAYGO)**

- Jälkikäteen maksettu: **$0.01 per viesti**
- Ei etukäteissitoumusta; käyttö laskutetaan kuukauden lopussa Azure-palvelun kautta

---

## Entä jos sinulla on M365 Copilot -lisenssejä?

Jos tiimilläsi on **Microsoft 365 Copilot -lisenssejä**, agenttisi voivat **toimia ilman lisälaskutusta keskeisissä skenaarioissa**:

- Klassiset vastaukset, generatiiviset vastaukset, graafiin perustuvat viestit ja perusagenttitoiminnot ovat **ilmaisia** M365 Copilot -käyttäjille, jotka ovat kirjautuneet sovelluksiin kuten Teams ja Outlook  
- Huomio: Jos otat käyttöön edistyneitä ominaisuuksia, kuten autonomiset laukaisut, agenttitoiminnot perustoimintojen ulkopuolella tai käytät ulkoisia kanavia/API:ita, nämä **kuluttavat laskutettavia viestejä**

| Skenaario                                   | Laskutetaanko lisäviestejä?                  |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot -käyttäjä kysyy agentilta Teamsissa | ❌ Ei laskuteta                              |
| Agentti kutsuu ulkoista API:ta tai flow'ta | ✅ Laskutetaan (5 + viestiä)                 |
| Agentti käyttää autonomista laukaisua tai groundingia | ✅ Laskutetaan                              |

---

## 🧮 Suunnittele tarkasti: Käytä arviointityökalua

Ennen kuin käynnistät agenttisi, käytä **Copilot Studio Usage Estimator** -työkalua arvioidaksesi viestikulutusta realistisissa skenaarioissa:

[👉 Käytä Copilot Studio Usage Estimator -työkalua](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Työkalu mahdollistaa:

- 🔢 Käyttäjämäärän määrittämisen  
- ⚙️ Agenttitoimintojen valinnan (grounding, toiminnot, flow't, muisti)  
- 📈 Arvioi **kokonaisviestien määrä per agentti kuukaudessa**  
- 🧠 Optimoi suunnittelu ja vältä laskutuksen yllätykset  

!!! tip
    ✅ Käytä työkalua aikaisin — ja uudelleen rakentamisen jälkeen — vertaillaksesi odotettua ja toteutunutta käyttöä.

---

## 💼 Esimerkkiskenaario

**Ympäristö**: IT-tukipalveluagentti groundingilla + yksi Power Automate -flow  
**Istunnot**: 5 käyttäjän vuoroa per istunto  
**Oletukset**: grounding (10 viestiä) + toiminto (5 viestiä) + 5 generatiivista vastausta (10 viestiä)  
**Yhteensä**: ~25 viestiä per istunto  
**Laajuus**: 500 istuntoa/kuukausi = ~12 500 viestiä (½ viestipaketti)

---

## 🧠 Vinkkejä kustannusten hallintaan

- Seuraa käyttöä Power Platform Admin Centerissä  
- Aloita kehitys/testausvaiheessa ennen tuotantokäyttöä  
- Poista käyttämättömät toiminnot ja liitännät käytöstä  
- Käytä **Microsoft 365 Copilot -lisenssejä** sisäiseen käyttöön mahdollisuuksien mukaan  
- Käytä viestipaketteja, kun käyttöaste muuttuu ennakoitavaksi  
- Käytä **Copilot Studio Usage Estimator** -työkalua arvioidaksesi käyttöä  

---

## 🏁 Tehtävä suoritettu

Nyt ymmärrät:

- Miten käyttö lasketaan ja laskutetaan  
- Milloin M365 Copilot kattaa käytön — ja milloin ei  
- Miten arvioida ja hallita viestikulutusta  

🎓 Tämän tiedon avulla olet valmis etenemään ja ottamaan agenttisi käyttöön **tehokkaasti ja fiksusti**

---

## 📚 Taktiset resurssit

Lisätietoja Copilot Studion lisensoinnista ja laskutuksesta:

- 📄 [Copilot Studio Licensing & Message Rates](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)  
- 📘 [Power Platform Licensing Guide (heinäkuu 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)  
- 📊 [Viestien hallinta ja kapasiteetin seuranta](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)  

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.