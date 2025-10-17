<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "750f3ea8a94930439ebd8a10871b1d73",
  "translation_date": "2025-10-17T05:23:05+00:00",
  "source_file": "docs/operative-preview/08-dataverse-grounding/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 08: Parannellut kehotteet Dataverse-pohjaisella tietojen yhdistämisellä

--8<-- "disclaimer.md"

## 🕵️‍♂️ Koodinimi: `OPERATIIVINEN TIETOJEN YHDISTÄMINEN`

> **⏱️ Operaatioaika:** `~60 minuuttia`

## 🎯 Tehtävän kuvaus

Tervetuloa takaisin, Operatiivinen. Moniagenttinen rekrytointijärjestelmäsi toimii, mutta kriittinen parannus on tarpeen **tietojen yhdistämisessä** – AI-mallisi tarvitsevat reaaliaikaista pääsyä organisaatiosi jäsenneltyihin tietoihin tehdäkseen älykkäitä päätöksiä.

Tällä hetkellä tiivistelmää tekevä ansioluettelokehotteesi toimii staattisella tiedolla. Mutta entä jos se voisi dynaamisesti käyttää työroolien tietokantaa tarjotakseen tarkkoja ja ajantasaisia ehdotuksia? Entä jos se ymmärtäisi arviointikriteerisi ilman, että niitä tarvitsee kovakoodata?

Tässä tehtävässä parannat mukautettua kehotettasi **Dataverse-pohjaisella tietojen yhdistämisellä** – yhdistämällä kehotteesi suoraan reaaliaikaisiin tietolähteisiin. Tämä muuttaa agenttisi staattisista vastaajista dynaamisiksi, dataohjatuiksi järjestelmiksi, jotka mukautuvat muuttuviin liiketoiminnan tarpeisiin.

Tehtäväsi: integroi reaaliaikaiset työrooli- ja arviointikriteeritiedot ansioluetteloanalyysityönkulkuusi, luoden itseään päivittävän järjestelmän, joka pysyy ajan tasalla organisaatiosi rekrytointivaatimusten kanssa.

## 🔎 Tavoitteet

Tässä tehtävässä opit:

1. Kuinka **Dataverse-pohjainen tietojen yhdistäminen** parantaa mukautettuja kehotteita
1. Milloin käyttää tietojen yhdistämistä staattisten ohjeiden sijaan
1. Kehottamisen suunnittelua, joka dynaamisesti sisältää reaaliaikaisia tietoja
1. Tiivistelmää tekevien kehotteiden parantamista työroolien yhdistämisellä

## 🧠 Dataverse-pohjaisen tietojen yhdistämisen ymmärtäminen kehotteille

**Dataverse-pohjainen tietojen yhdistäminen** mahdollistaa mukautettujen kehotteiden pääsyn reaaliaikaisiin tietoihin Dataverse-taulukoista pyyntöjä käsiteltäessä. Staattisten ohjeiden sijaan kehotteesi voivat sisältää reaaliaikaista tietoa tehdäkseen perusteltuja päätöksiä.

### Miksi Dataverse-pohjainen tietojen yhdistäminen on tärkeää

Perinteiset kehotteet toimivat kiinteillä ohjeilla:

```text
Match this candidate to these job roles: Developer, Manager, Analyst
```

Dataverse-pohjaisella tietojen yhdistämisellä kehotteesi käyttää ajankohtaista tietoa:

```text
Match this candidate to available job roles from the Job Roles table, 
considering current evaluation criteria and requirements
```

Tämä lähestymistapa tarjoaa useita keskeisiä etuja:

- **Dynaamiset päivitykset:** Työroolit ja kriteerit muuttuvat ilman kehotteiden muokkausta
- **Johdonmukaisuus:** Kaikki agentit käyttävät samoja ajankohtaisia tietolähteitä
- **Skaalautuvuus:** Uudet roolit ja kriteerit ovat automaattisesti saatavilla
- **Tarkkuus:** Reaaliaikaiset tiedot varmistavat, että päätökset heijastavat nykyisiä tarpeita

### Kuinka Dataverse-pohjainen tietojen yhdistäminen toimii

Kun otat Dataverse-pohjaisen tietojen yhdistämisen käyttöön mukautetussa kehotteessa:

1. **Tietojen valinta:** Valitse tietyt Dataverse-taulukot ja sarakkeet, jotka haluat sisällyttää. Voit myös valita liittyvät taulukot, joita järjestelmä suodattaa haettujen päärekisterien perusteella.
1. **Kontekstin lisääminen:** Kehote sisältää automaattisesti haetut tiedot kontekstiinsa
1. **Älykäs suodatus:** Järjestelmä sisältää vain pyynnön kannalta olennaiset tiedot, jos määrität suodatuksen.
1. **Jäsennelty ulostulo:** Kehote voi viitata haettuihin tietoihin ja tehdä päätelmiä haetuista rekistereistä luodakseen ulostulon.

### Staattisesta dynaamiseen: Yhdistämisen etu

Tarkastellaan nykyistä Tiivistelmää tekevien kehotteiden työnkulkua Tehtävässä 07 ja nähdään, kuinka Dataverse-pohjainen tietojen yhdistäminen muuttaa sen staattisesta dynaamiseen älykkyyteen.

**Nykyinen staattinen lähestymistapa:**
Nykyinen kehotteesi sisältää kovakoodatut arviointikriteerit ja ennalta määrätyn yhdistämislogiikan. Tämä lähestymistapa toimii, mutta vaatii manuaalisia päivityksiä aina, kun lisäät uusia työrooleja, muutat arviointikriteerejä tai siirrät yrityksen painopisteitä.

**Dataverse-pohjainen tietojen yhdistämisen muutos:**
Lisäämällä Dataverse-pohjaisen tietojen yhdistämisen Tiivistelmää tekevien kehotteiden työnkulkuun:

- **Pääsy ajankohtaisiin työrooleihin** Job Roles -taulukosta
- **Käytä reaaliaikaisia arviointikriteerejä** staattisten kuvausten sijaan  
- **Tarjoa tarkkoja yhdistämisiä** ajankohtaisten vaatimusten perusteella

## 🎯 Miksi omat kehotteet vs agenttikeskustelut

Tehtävässä 02 koit, kuinka Haastatteluagentti pystyi yhdistämään ehdokkaita työrooleihin, mutta vaati monimutkaisia käyttäjäkehotteita, kuten:

```text
Upload this resume, then show me open job roles,
each with a description of the evaluation criteria, 
then use this to match the resume to at least one suitable
job role even if not a perfect match.
```

Vaikka tämä toimi, omat kehotteet Dataverse-pohjaisella tietojen yhdistämisellä tarjoavat merkittäviä etuja tiettyihin tehtäviin:

### Omien kehotteiden keskeiset edut

| Ominaisuus | Agenttikeskustelut | Omat kehotteet |
|------------|--------------------|----------------|
| **Johdonmukaisuus** | Tulokset vaihtelevat käyttäjän kehotteen muotoilutaitojen mukaan | Vakioitu käsittely joka kerta |
| **Erikoistuminen** | Yleiskäyttöinen päättely voi ohittaa liiketoiminnan vivahteet | Tarkoitukseen suunniteltu optimoidulla liiketoimintalogiikalla |
| **Automaatio** | Vaatii ihmisen vuorovaikutusta ja tulkintaa | Käynnistyy automaattisesti jäsennellyllä JSON-ulostulolla |

## 🧪 Labra 8: Lisää Dataverse-pohjainen tietojen yhdistäminen kehotteisiin

Aika päivittää ansioluetteloanalyysisi! Parannat olemassa olevaa Tiivistelmää tekevien kehotteiden työnkulkua dynaamisella työroolien yhdistämisellä.

### Esivaatimukset tehtävän suorittamiseksi

1. Sinulla tulee olla **joko**:

    - **Suorittanut Tehtävä 07** ja valmiina ansioluetteloanalyysijärjestelmäsi, **TAI**
    - **Tuonut Tehtävä 08 aloitusratkaisun**, jos aloitat alusta tai tarvitset apua. [Lataa Tehtävä 08 aloitusratkaisu](https://aka.ms/agent-academy)

1. Esimerkkiasiakirjoja ansioluetteloista [test Resumes](https://download-directory.github.io/?url=https://github.com/microsoft/agent-academy/tree/main/operative/sample-data/resumes&filename=operative_sampledata)

!!! note "Ratkaisun tuonti ja esimerkkidata"
    Jos käytät aloitusratkaisua, katso [Tehtävä 01](../01-get-started/README.md) yksityiskohtaiset ohjeet ratkaisujen ja esimerkkidatan tuomisesta ympäristöösi.

### 8.1 Lisää Dataverse-pohjainen tietojen yhdistäminen kehotteeseesi

Rakennat Tiivistelmää tekevien kehotteiden työnkulkua, jonka loit Tehtävässä 07. Tällä hetkellä se vain tiivistää ansioluettelon, mutta nyt yhdistät sen Dataversen työrooleihin, pitäen sen aina ajankohtaisena.

Ensiksi tarkastellaan Dataverse-taulukoita, joita yhdistät:

1. **Siirry** [Power Apps](https://make.powerapps.com) -sivustolle ja valitse ympäristösi **Ympäristön valitsimella** navigointipalkin oikeasta yläkulmasta.

1. Valitse **Taulukot** ja etsi **Job Roles** -taulukko

1. Tarkista keskeiset sarakkeet, joita käytät yhdistämiseen:

    | Sarake | Tarkoitus |
    |--------|----------|
    | **Job Role Number** | Uniikki tunniste roolien yhdistämiseen |
    | **Job Title** | Roolin näyttönimi |
    | **Description** | Yksityiskohtaiset roolivaatimukset |

1. Samoin tarkista muut taulukot, kuten **Evaluation Criteria** -taulukko.

### 8.2 Lisää Dataverse-pohjaiset tiedot kehotteeseesi

1. **Siirry** Copilot Studioon ja valitse ympäristösi **Ympäristön valitsimella** navigointipalkin oikeasta yläkulmasta.

1. Valitse **Työkalut** vasemmanpuoleisesta navigointipalkista.

1. Valitse **Kehote** ja etsi **Tiivistelmää tekevä kehote** Tehtävästä 07.  
    ![Valitse kehote](../../../../../translated_images/8-select-prompt.d66a248a6d11fce2b4bc149422eb2722736c972185bca613c849e74011411941.fi.png)

1. Valitse **Muokkaa** muokataksesi kehotetta ja korvaa se alla olevalla parannetulla versiolla:

    !!! important
        Varmista, että Ansioluettelo- ja Hakemuskirje-parametrit säilyvät parametreina.

    ```text
    You are tasked with extracting key candidate information from a resume and cover letter to facilitate matching with open job roles and creating a summary for application review.
    
    ### Instructions:
    1. **Extract Candidate Details:**
       - Identify and extract the candidate's full name.
       - Extract contact information, specifically the email address.
    
    2. **Analyze Resume and Cover Letter:**
       - Review the resume content to identify relevant skills, experience, and qualifications.
       - Review the cover letter to understand the candidate's motivation and suitability for the roles.
    
    3. **Match Against Open Job Roles:**
       - Compare the extracted candidate information with the requirements and descriptions of the provided open job roles.
       - Use the job descriptions to assess potential fit.
       - Identify all roles that align with the candidate's cover letter and profile. You don't need to assess perfect suitability.
       - Provide reasoning for each match based on the specific job requirements.
    
    4. **Create Candidate Summary:**
       - Summarize the candidate's profile as multiline text with the following sections:
          - Candidate name
          - Role(s) applied for if present
          - Contact and location
          - One-paragraph summary
          - Top skills (8–10)
          - Experience snapshot (last 2–3 roles with outcomes)
          - Key projects (1–3 with metrics)
          - Education and certifications
          - Availability and work authorization
    
    ### Output Format
    
    Provide the output in valid JSON format with the following structure:
    
    {
      "CandidateName": "string",
      "Email": "string",
      "MatchedRoles": [
        {
          "JobRoleNumber": "ppa_jobrolenumber from grounded data",
          "RoleName": "ppa_jobtitle from grounded data",
          "Reasoning": "Detailed explanation based on job requirements"
        }
      ],
      "Summary": "string"
    }
    
    ### Guidelines
    
    - Extract information only from the provided resume and cover letter documents.
    - Ensure accuracy in identifying contact details.
    - Use the available job role data for matching decisions.
    - The summary should be concise but informative, suitable for quick application review.
    - If no suitable matches are found, indicate an empty list for MatchedRoles and explain briefly in the summary.
    
    ### Input Data
    Open Job Roles (ppa_jobrolenumber, ppa_jobtitle): /Job Role 
    Resume: {Resume}
    Cover Letter: {CoverLetter}
    ```

1. Kehoteditorissa korvaa `/Job Role` valitsemalla **+ Lisää sisältö**, valitsemalla **Dataverse** → **Job Role** ja valitse seuraavat sarakkeet, ja valitse sitten **Lisää**:

    1. **Job Role Number**

    1. **Job Title**

    1. **Description**

    !!! tip
        Voit kirjoittaa taulukon nimen hakua varten.

1. **Job Role** -valintaikkunassa valitse **Suodatin**-attribuutti, valitse **Status**, ja kirjoita **Active** **Suodatin**-arvoksi.  
    ![Lisää Dataverse-yhdistäminen](../../../../../translated_images/8-add-grounding.e377b283acb2087f784ce1440bc65b57de1af7d8d9334ee116bf06095dd813c8.fi.png)

    !!! tip
        Voit käyttää **Lisää arvo**-toimintoa lisätäksesi syöttöparametrin – esimerkiksi jos sinulla olisi kehote tiivistämään olemassa oleva rekisteri, voisit antaa Ansioluettelon numeron parametrina suodatusta varten.

1. Seuraavaksi lisäät liittyvän Dataverse-taulukon **Evaluation Criteria**, valitsemalla jälleen **+ Lisää sisältö**, etsimällä **Job Roles**, ja sen sijaan että valitsisit sarakkeet Job Role -taulukosta, laajenna **Job Role (Evaluation Criteria)** ja valitse seuraavat sarakkeet, ja valitse sitten **Lisää**:

    1. **Criteria Name**

    1. **Description**  
        ![Lisää liittyvät arviointikriteerit](../../../../../translated_images/8-add-eval-criteria.1c2ceb2e208ff3e5c6fd33ef3aad30f0ea545505e6bcc98a0f30c373574525fa.fi.png)

        ![Valmiit kehoteparametrit ja yhdistäminen](../../../../../translated_images/8-all-prompt-parameters.6c8d5d173ce4e3f93d78a371474dace6279f85ecae867863249e68c3ad35f668.fi.png)

    !!! tip
        On tärkeää valita liittyvät arviointikriteerit ensin valitsemalla Job Role ja navigoimalla sitten valikossa Job Role (Evaluation Criteria) -kohtaan. Tämä varmistaa, että vain Job Roleen liittyvät rekisterit ladataan.

1. Valitse **Asetukset** ja säädä **Rekisterien haku** arvoon 1000 – tämä mahdollistaa maksimaalisen määrän Job Roleja ja arviointikriteerejä kehotteeseesi.  
    ![Kehotteen asetukset](../../../../../translated_images/8-prompt-settings.267982cf4eb45cff839bb2f3e370611411a9702e6eb2414445090d0d5b1dc38b.fi.png)

### 8.3 Testaa paranneltua kehotetta

1. Valitse **Ansioluettelo**-parametri ja lataa esimerkkiasiakirja, jota käytit Tehtävässä 07.
1. Valitse **Testaa**.
1. Kun testi on suoritettu, huomaa että JSON-ulostulo sisältää nyt **Yhdistetyt roolit**.
1. Valitse **Käytetyt tiedot**-välilehti nähdäksesi Dataverse-tiedot, jotka yhdistettiin kehotteeseesi ennen suoritusta.
1. **Tallenna** päivitetty kehotteesi. Järjestelmä sisällyttää nyt automaattisesti nämä Dataverse-tiedot kehotteeseesi, kun olemassa oleva Tiivistelmää tekevä agenttityönkulku kutsuu sitä.  
    ![Yhdistetyt roolit JSON:ssa](../../../../../translated_images/8-matched-roles-json.54b557423d26864f65873170adaac04f5cb5d4ce4cccf65e5b695d9a128a79b3.fi.png)

### 8.4 Lisää Työhakemus-agenttityönkulku

Jotta Hakemusten vastaanottoagentti voi luoda Työrooleja ehdotettujen roolien perusteella, meidän täytyy luoda agenttityönkulku. Agentti kutsuu tätä työkalua jokaiselle ehdotetulle työroolille, josta ehdokas on kiinnostunut.

!!! tip "Agenttityönkulun lausekkeet"
    On erittäin tärkeää, että noudatat ohjeita solmujen nimeämisestä ja lausekkeiden syöttämisestä tarkasti, koska lausekkeet viittaavat aiempiin solmuihin niiden nimien avulla! Katso [Agenttityönkulun tehtävä Rekrytoinnissa](../../recruit/09-add-an-agent-flow/README.md#you-mentioned-expressions-what-are-expressions) nopea kertaus!

1. **Rekrytointiajan agentissa** valitse **Agentit**-välilehti ja avaa **Hakemusten vastaanottoagentti**-alagentti.

1. **Työkalut**-paneelissa valitse **+ Lisää** → **+ Uusi työkalu** → **Agenttityönkulku**

1. Valitse **Kun agentti kutsuu työnkulun**-solmu, käytä **+ Lisää syöte** lisätäksesi seuraavat parametrit:

    | Tyyppi | Nimi            | Kuvaus                                                  |
    |--------|-----------------|---------------------------------------------------------|
    | Teksti | `ResumeNumber`  | Varmista, että käytät vain [ResumeNumber] - sen TÄYTYY alkaa kirjaimella R |
    | Teksti | `JobRoleNumber` | Varmista, että käytät vain [JobRoleNumber] - sen TÄYTYY alkaa kirjaimella J |

    ![Kun agentti kutsuu työnkulun](../../../../../translated_images/8-add-application-1.ef0ec277dd86df0e8145aca278fdae1aff1a959711781eb59dc63f4ab0785686.fi.png)

1. Valitse **+** Lisää toiminto -kuvake ensimmäisen solmun alapuolella, etsi **Dataverse**, valitse **Näytä lisää**, ja etsi **Listaa rivit**-toiminto.

1. **Nimeä** solmu `Get Resume` ja aseta seuraavat parametrit:

    | Ominaisuus        | Kuinka asettaa               | Arvo                                                        |
    |-------------------|------------------------------|-------------------------------------------------------------|
    | **Taulukon nimi** | Valitse                     | Resumes                                                     |
    | **Suodata rivit** | Dynaaminen data (salamaikoni)| `ppa_resumenumber eq 'ResumeNumber'` Valitse ja korvaa **ResumeNumber** kohdasta **Kun agentti kutsuu työnkulun** → **ResumeNumber** |
    | **Rivien määrä**  | Syötä                       | 1                                                           |

    ![Get Resume](../../../../../translated_images/8-add-application-2.4bc386154caec8bc5deba81c6f0f90f1762719ee213aa664b004091034286338.fi.png)

1. Nyt valitse **+** Lisää toiminto -kuvake Get Resume -solmun alapuolella, etsi **Dataverse**, valitse **Näytä lisää**, ja etsi **Listaa rivit**-toiminto.

1. **Nimeä** solmu `Get Job Role` ja aseta seuraavat parametrit:

    | Ominaisuus        | Kuinka asettaa               | Arvo                                                        |
    |-------------------|------------------------------|-------------------------------------------------------------|
    | **Taulukon nimi** | Valitse                     | Job Roles                                                   |
    | **Suodata rivit** | Dynaaminen data (salamaikoni)| `ppa_jobrolenumber eq 'JobRoleNumber'` Valitse ja korvaa **JobRoleNumber** kohdasta **Kun agentti kutsuu työnkulun** → **JobRoleNumber** |
    | **Rivien määrä**  | Syötä                       | 1                                                           |

    ![Get Job Role](../../../../../translated_images/8-add-application-3.07a9c42e27bd2875ec91a4c9e4a78d185644d945ca54c0e8a2d9a9a092c0b872.fi.png)

1. Nyt valitse **+** Lisää toiminto -kuvake Get Job Role -solmun alapuolella, etsi **Dataverse**, valitse **Näytä lisää**, ja etsi **Lisää uusi rivi**-toiminto.

1. **Nimeä** solmu `Add Application` ja aseta seuraavat parametrit:

    | Ominaisuus                          
| **Työrooli (Työroolit)**               | Lauseke (fx-kuvake) | `concat('ppa_jobroles/',first(outputs('Get_Job_Role')?['body/value'])?['ppa_jobroleid'])` |
| **Ansioluettelo (Ansioluettelot)**     | Lauseke (fx-kuvake) | `concat('ppa_resumes/', first(outputs('Get_Resume')?['body/value'])?['ppa_resumeid'])` |
| **Hakupäivämäärä** (käytä **Näytä kaikki**) | Lauseke (fx-kuvake) | `utcNow()`                                                   |

![Lisää hakemus](../../../../../translated_images/8-add-application-4.68b07059f373c4ef5dc5078da3ae5690525a352a88d0a5bc8de4edf0ce7d4d72.fi.png)

1. Valitse **Vastaa agentille -solmu** ja valitse sitten **+ Lisää lähtö**

     | Ominaisuus        | Miten asetetaan                | Tiedot                                         |
     | ----------------- | ------------------------------ | ---------------------------------------------- |
     | **Tyyppi**        | Valitse                        | `Teksti`                                       |
     | **Nimi**          | Kirjoita                       | `Hakemusnumero`                                |
     | **Arvo**          | Dynaaminen data (salama-kuvake) | *Lisää hakemus → Näytä lisää → Hakemusnumero* |
     | **Kuvaus**        | Kirjoita                       | `Luodun työhakemuksen [Hakemusnumero]`        |

![Vastaa agentille](../../../../../translated_images/8-add-application-5.718d76f32b1a11f1d636fc1561cbfd21f5f475192f3a64ad682ad0d400a6b8f4.fi.png)

1. Valitse **Tallenna luonnos** oikeasta yläkulmasta.

1. Valitse **Yleiskatsaus**-välilehti, valitse **Muokkaa** kohdassa **Tiedot**-paneeli.

   - **Virtausnimi**: `Luo työhakemus`
   - **Kuvaus**: `Luo uuden työhakemuksen, kun [Ansioluettelonumero] ja [Työroolinumero] on annettu`
   - **Tallenna**

1. Valitse uudelleen **Suunnittelija**-välilehti ja valitse **Julkaise**.

### 8.5 Lisää Luo työhakemus agentille

Nyt yhdistät julkaistun virtauksen hakemusagenttiin.

1. Siirry takaisin **Rekrytointiagenttiin** ja valitse **Agentit**-välilehti. Avaa **Hakemusagentti** ja etsi **Työkalut**-paneeli.

1. Valitse **+ Lisää**

1. Valitse **Virtaus**-suodatin ja etsi `Luo työhakemus`. Valitse **Luo työhakemus**-virtaus ja sitten **Lisää ja määritä**.

1. Aseta seuraavat parametrit:

    | Parametri                                           | Arvo                                                        |
    | --------------------------------------------------- | ----------------------------------------------------------- |
    | **Kuvaus**                                          | `Luo uuden työhakemuksen, kun [Ansioluettelonumero] ja [Työroolinumero] on annettu` |
    | **Lisätiedot → Milloin tätä työkalua voidaan käyttää** | `Vain kun viitataan aiheisiin tai agenteihin`               |

1. Valitse **Tallenna**  
![Lisää agenttivirtaus agentille](../../../../../translated_images/8-add-application-6.40c79eb32d0c682a29becf59f08aec0f492780c326256602c3359ba97e370c44.fi.png)

### 8.6 Määritä agentin ohjeet

Työhakemusten luomiseksi sinun täytyy kertoa agentille, milloin käyttää uutta työkalua. Tässä tapauksessa pyydät käyttäjää vahvistamaan, mihin ehdotettuihin työrooleihin halutaan hakea, ja ohjeistat agenttia käyttämään työkalua kunkin roolin kohdalla.

1. Siirry takaisin **Hakemusagenttiin** ja etsi **Ohjeet**-paneeli.

1. **Ohjeet**-kentässä **lisää** seuraavat selkeät ohjeet lapsiagentillesi **olemassa olevien ohjeiden loppuun**:

    ```text
    3. Post Resume Upload
       - Respond with a formatted bullet list of [SuggestedJobRoles] the candidate could apply for.  
       - Use the format: [JobRoleNumber] - [RoleDescription]
       - Ask the user to confirm which Job Roles to create applications for the candidate.
       - When the user has confirmed a set of [JobRoleNumber]s, move to the next step.
    
    4. Post Upload - Application Creation
        - After the user confirms which [SuggestedJobRoles] for a specific [ResumeNumber]:
        E.g. "Apply [ResumeNumber] for the Job Roles [JobRoleNumber], [JobRoleNumber], [JobRoleNumber]
        E.g. "apply to all suggested job roles" - this implies use all the [JobRoleNumbers] 
         - Loop over each [JobRoleNumber] and send with [ResumeNumber] to /Create Job Application   
         - Summarize the Job Applications Created
    
    Strict Rules (that must never be broken)
    You must always follow these rules and never break them:
    1. The only valid identifiers are:
      - ResumeNumber (ppa_resumenumber)→ format R#####
      - CandidateNumber (ppa_candidatenumber)→ format C#####
      - ApplicationNumber (ppa_applicationnumber)→ format A#####
      - JobRoleNumber (ppa_jobrolenumber)→ format J#####
    2. Never guess or invent these values.
    3. Always extract identifiers from the current context (conversation, data, or system output). 
    ```

1. Kun ohjeissa on kauttaviiva (/), valitse teksti kauttaviivan jälkeen ja valitse **Luo työhakemus**-työkalu.

1. Valitse **Tallenna**  
![Luo työhakemus -ohjeet](../../../../../translated_images/8-add-application-7.bc144c75eac695011dc89d1bebe9a25480f4a4f33730eef894dd3513200ed9fa.fi.png)

!!! tip "Iterointi useiden kohteiden yli generatiivisessa orkestroinnissa"
    Nämä ohjeet hyödyntävät generatiivisen orkestroinnin kykyä iteroida useiden rivien yli päätöksiä tehtäessä siitä, mitä vaiheita ja työkaluja käytetään. Vastaavat työroolit luetaan automaattisesti, ja Hakemusagentti suoritetaan kullekin riville. Tervetuloa generatiivisen orkestroinnin maagiseen maailmaan!

### 8.7 Testaa agenttisi

1. Avaa **Rekrytointiagentti** Copilot Studiossa.

1. **Lataa** esimerkkian­sioluettelo keskusteluun ja kirjoita:

    ```text
    This is a new resume for the Power Platform Developer Role.
    ```

1. Huomaa, kuinka agentti tarjoaa listan ehdotetuista työrooleista - jokaisella on työroolinumero.  
![Testitulokset ehdotetuilla rooleilla](../../../../../translated_images/8-test-1.3a67b59f169aeb1b04a810dc15c78146ea70418ce977f2da3ed3cdf78bdbc9df.fi.png)

1. Voit sitten ilmoittaa, mihin näistä haluat lisätä ansioluettelon työhakemuksena.
   **Esimerkkejä:**

    ```text
    "Apply for all of those job roles"
    "Apply for the J10009 Power Platform Developer role"
    "Apply for the Developer and Architect roles"
    ```

![Testitulokset työhakemusten luomisessa](../../../../../translated_images/8-test-2.b385c7ca9f4cc82b0a22f7090b25a1bad6dc88a119f362de21df0246f64d9911.fi.png)

1. **Luo työhakemus -työkalu** suoritetaan sitten kullekin työroolille, jonka pyysit luomaan hakemuksen. Aktiviteettikartassa näet, kuinka Luo työhakemus -työkalu suoritetaan kullekin työroolille:  
![Luo työhakemus aktiviteettikartassa](../../../../../translated_images/8-create-job-application-activity-map.11d9f307a0055ffb7a97fbe8f8488932420cdb8d25f9a90e5609f3bcc95fdfb9.fi.png)

## 🎉 Tehtävä suoritettu

Loistavaa työtä, Operatiivinen! **Operaatio Grounding Control** on nyt valmis. Olet onnistuneesti parantanut tekoälysi kyvykkyyksiä dynaamisella datan pohjautuvuudella, luoden aidosti älykkään rekrytointijärjestelmän.

Tässä on, mitä olet saavuttanut tässä tehtävässä:

**✅ Dataversen pohjautuvuuden hallinta**  
Ymmärrät nyt, kuinka yhdistää mukautetut kehotteet reaaliaikaisiin tietolähteisiin dynaamisen älykkyyden saavuttamiseksi.

**✅ Parannettu ansioluetteloanalyysi**  
Tiivistä ansioluettelo -virtaus käyttää nyt reaaliaikaista työroolidataa ja arviointikriteerejä tarkkaan vastaavuuteen.

**✅ Dataan perustuva päätöksenteko**  
Rekrytointiagenttisi voivat nyt mukautua automaattisesti muuttuviin työvaatimuksiin ilman manuaalisia kehotepäivityksiä.

**✅ Työhakemusten luominen**  
Parannettu järjestelmäsi voi nyt luoda työhakemuksia ja on valmis entistä monimutkaisempaan työnkulkujen orkestrointiin.

🚀 **Seuraavaksi:** Seuraavassa tehtävässä opit toteuttamaan syvällisiä päättelykykyjä, jotka auttavat agenttejasi tekemään monimutkaisia päätöksiä ja antamaan yksityiskohtaisia selityksiä suosituksilleen.

⏩ [Siirry tehtävään 09: Syvällinen päättely](../09-deep-reasoning/README.md)

## 📚 Taktiset resurssit

📖 [Käytä omaa dataasi kehotteessa](https://learn.microsoft.com/ai-builder/use-your-own-prompt-data?WT.mc_id=power-182762-scottdurow)

📖 [Luo mukautettu kehotus](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?WT.mc_id=power-182762-scottdurow)

📖 [Työskentele Dataversen kanssa Copilot Studiossa](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse?WT.mc_id=power-182762-scottdurow)

📖 [AI Builder mukautettujen kehotusten yleiskatsaus](https://learn.microsoft.com/ai-builder/prompts-overview?WT.mc_id=power-182762-scottdurow)

📖 [Power Platform AI Builder -dokumentaatio](https://learn.microsoft.com/ai-builder/?WT.mc_id=power-182762-scottdurow)

📖 [Koulutus: Luo AI Builder -kehotteita käyttäen omaa Dataverse-dataasi](https://learn.microsoft.com/training/modules/ai-builder-grounded-prompts/?WT.mc_id=power-182762-scottdurow)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.