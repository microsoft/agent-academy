<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-17T01:14:27+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "fi"
}
-->
# 🧰 Tehtävä 05: Valmiin agentin käyttö  

## 🕵️‍♂️ Koodinimi: `OPERAATIO TURVALLISET MATKAT`

> **⏱️ Operaation kesto:** `~30 minuuttia`

🎥 **Katso opastusvideo**

[![Valmiin agentin video thumbnail](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.fi.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Katso opastusvideo YouTubessa")

## 🎯 Tehtävän kuvaus

Tervetuloa seuraavaan tehtävääsi Copilot Studio Agent Academyn parissa. Olet siirtymässä **valmiiden agenttien** maailmaan—Microsoftin luomia älykkäitä, tarkoituksenmukaisia agentteja, jotka nopeuttavat käyttöönottoa ja vähentävät aikaa arvon tuottamiseen.

Sen sijaan, että rakentaisit agentin alusta alkaen, valmiit agentit (joita kutsutaan myös **agenttipohjiksi**) antavat sinulle etulyöntiaseman tarjoamalla valmiita skenaarioita, joita voit mukauttaa ja ottaa käyttöön muutamassa minuutissa.

Tässä tehtävässä otat käyttöön **Safe Travels** -agentin—agentin, joka auttaa käyttäjiä valmistautumaan työmatkoihin, ymmärtämään yrityksen politiikkoja ja tehostamaan suunnittelua.

---

## 🧭 Tavoitteet

Tehtävän tavoitteet ovat:

1. Ymmärtää, mitä valmiit agentit ovat ja miksi ne ovat tärkeitä  
1. Ottaa käyttöön **Safe Travels** -agenttipohja  
1. Mukauttaa agentin vastauksia ja sisältöä  
1. Testata ja julkaista agentti  

---

## 🧠 Mitä ovat valmiit agentit?

Valmiit agentit ovat Microsoftin luomia käyttövalmiita tekoälyagentteja, jotka:

- Ratkaisevat yleisiä liiketoiminnan tarpeita (kuten matkustaminen, HR, IT-tuki)
- Sisältävät täysin toimivia aiheita, avainsanoja, ohjeita ja esimerkkitietoa
- Voidaan muokata, laajentaa ja yhdistää omaan dataan

Nämä agentit ovat täydellisiä nopeaan alkuun pääsemiseen tai oppimiseen, miten agentit rakentuvat.

---

## 🧪 Labra 05: Nopeasti alkuun valmiin agentin kanssa

Nyt opimme, kuinka valita valmis agentti ja mukauttaa sitä.

- [5.1 Käynnistä Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Valitse Safe Travels -agenttipohja](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Mukauta agenttia](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Testaa ja julkaise](../../../../../docs/recruit/05-using-prebuilt-agents)

Pysymme aiemmassa esimerkissä, jossa luomme ratkaisun omassa Copilot Studio -ympäristössä IT-tukipisteagentin rakentamiseksi.

Aloitetaan!

### 5.1 Käynnistä Copilot Studio

1. Siirry osoitteeseen [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Kirjaudu sisään Microsoft 365 -työ- tai koulutililläsi

!!! warning
    Sinun täytyy olla vuokraajassa, jossa Copilot Studio on käytössä. Jos et näe Copilot Studiota, palaa [Tehtävä 00](../00-course-setup/README.md) -osioon ja suorita asennus.

### 5.2 Valitse Safe Travels -agenttipohja

1. Copilot Studion etusivulta, klikkaa **+ Luo**
    ![Luo agentti](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.fi.png)

1. Vieritä alas kohtaan **Aloita agenttipohjalla**

1. Etsi ja valitse **Safe Travels**

    ![Valitse Safe Travels -pohja](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.fi.png)

1. Huomaa, että pohja sisältää valmiiksi kuvauksen, ohjeet ja tietoa.

    ![Tarkista pohja](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.fi.png)

1. Klikkaa **Luo**

    ![Luo agentti](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.fi.png)

Tämä luo uuden agentin ympäristöösi Safe Travels -konfiguraation pohjalta.

### 5.3 Mukauta agenttia

Kun agentti on luotu, mukautetaan se organisaatiollesi:

1. Valitse **Generatiivinen AI käytössä** ottaaksesi generatiivisen AI-ominaisuuden käyttöön, jotta se voi hyödyntää pohjassa annettuja ohjeita.

    ![Ota generatiiviset vastaukset käyttöön](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.fi.png)

1. Nyt varustamme agentin lisätietolähteellä, jotta se voi vastata Euroopan matkustamista koskeviin kysymyksiin. Vieritä alas kohtaan **tieto** ja valitse **Lisää tietoa**

    ![Lisää tietoa](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.fi.png)

1. Valitse **Julkiset verkkosivustot**

    ![Lisää julkinen verkkosivusto](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.fi.png)

1. Tekstikenttään liitä **<https://european-union.europa.eu/>** ja valitse **Lisää**

    ![Lisää verkkosivusto](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.fi.png)

1. Valitse **Lisää agenttiin**

    ![Lisää agenttiin](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.fi.png)

### 5.4 Testaa ja julkaise

1. Klikkaa **Testaa** oikeasta yläkulmasta avataksesi testausikkunan  

1. Kokeile seuraavia lauseita:

    - `“Tarvitsenko viisumin matkustaakseni Yhdysvalloista Amsterdamiin?”`
    - `“Kuinka kauan kestää saada Yhdysvaltain passi?”`
    - `“Missä on lähin Yhdysvaltain suurlähetystö Valenciassa, Espanjassa?”`

1. Varmista, että agentti vastaa tarkasti ja hyödyllisesti, ja tarkkaile Aktiviteettikarttaa nähdäksesi, mistä tiedot on haettu.

    ![Lisää agenttiin](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.fi.png)

1. Kun olet valmis, klikkaa **Julkaise**

    ![Lisää agenttiin](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.fi.png)

1. Valitse **Julkaise** uudelleen valintaikkunassa
    ![Lisää agenttiin](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.fi.png)

1. Halutessasi voit lisätä agentin Microsoft Teamsiin sisäänrakennetun **Kanavat**-ominaisuuden avulla.

!!! note "🧳 Bonus-tavoite"
    Kokeile yhdistää Safe Travels -agentti SharePoint-sivustoon tai FAQ-tiedostoon, jotta se olisi relevantimpi yrityksesi matkustuskäytännöille.

## ✅ Tehtävä suoritettu

Olet nyt onnistuneesti:

- Ottanut käyttöön Microsoftin valmiin agentin  
- Mukauttanut agenttia
- Testannut ja julkaissut oman version **Safe Travels** -agenttipohjasta

⏭️ [Siirry **Oman agentin luominen alusta alkaen** -osioon](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.