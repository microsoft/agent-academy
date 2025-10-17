<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9dceeba2eae2bb73e328602a060eddab",
  "translation_date": "2025-10-17T05:58:17+00:00",
  "source_file": "docs/recruit/11-publish-your-agent/README.md",
  "language_code": "fi"
}
-->
# 🚨 Tehtävä 11: Julkaise agenttisi

## 🕵️‍♂️ Koodinimi: `OPERAATIO JULKAISU JULKAISU JULKAISU`

> **⏱️ Operaatioaika:** `~30 minuuttia`  

🎥 **Katso opastusvideo**

[![Julkaise agentti -videon pikkukuva](../../../../../translated_images/video-thumbnail.cb69abce792f4bd310436e8b46ebbfcada62f60c636bb894e4077046131f7023.fi.jpg)](https://www.youtube.com/watch?v=eVZmljhYlSI "Katso opastus YouTubessa")

## 🎯 Tehtävän kuvaus

Agenttien luomisen haastavien moduulien jälkeen olet nyt valmis tärkeimpään vaiheeseen: agenttisi julkaisemiseen. On aika tehdä luomuksesi saataville Microsoft Teamsin ja Microsoft 365 Copilotin käyttäjille.

Agenttisi—varustettuna selkeällä tehtävällä, tehokkailla työkaluilla ja pääsyllä keskeisiin tietolähteisiin—on valmis palvelemaan. Microsoft Copilot Studion avulla voit ottaa agenttisi käyttöön, jotta se voi alkaa auttaa oikeita käyttäjiä heidän työympäristössään.

Lähdetään käynnistämään agenttisi toimintaan.

## 🔎 Tavoitteet

📖 Tämä osio kattaa:

1. Miksi agenttisi julkaiseminen on tärkeää
1. Mitä tapahtuu, kun julkaiset agenttisi
1. Kuinka lisätä kanava (Microsoft Teams & Microsoft 365 Copilot)
1. Kuinka lisätä agentti Microsoft Teamsiin
1. Kuinka tehdä agentti saataville koko organisaatiollesi Microsoft Teamsissa

## 🚀 Julkaise agentti

Joka kerta, kun työskentelet agentin parissa Copilot Studiossa, saatat päivittää sitä lisäämällä tietoa tai työkaluja. Kun olet valmis kaikkien muutosten kanssa ja testannut perusteellisesti, olet valmis julkaisemaan sen. Julkaiseminen varmistaa, että viimeisimmät päivitykset ovat käytössä. Jos päivität agenttiasi uusilla työkaluilla etkä paina julkaise-painiketta, päivitykset eivät ole vielä loppukäyttäjien saatavilla.

Muista aina painaa julkaise-painiketta, kun haluat siirtää päivitykset agenttisi käyttäjille. Agentillasi voi olla lisättyjä kanavia, ja kun painat julkaise-painiketta, päivitykset tulevat saataville kaikille agenttiin lisätyille kanaville.

## ⚙️ Kanavien määrittäminen

Kanavat määrittävät, missä käyttäjäsi voivat käyttää ja olla vuorovaikutuksessa agenttisi kanssa. Kun olet julkaissut agenttisi, voit tehdä sen saataville useissa kanavissa. Jokainen kanava voi näyttää agenttisi sisällön eri tavalla.

Voit lisätä agenttisi seuraaviin kanaviin:

- **Microsoft Teams ja Microsoft 365 Copilot** - Tee agenttisi saataville Teams-keskusteluissa ja -kokouksissa sekä Microsoft 365 Copilot -kokemuksissa ([Lisätietoja](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams))
- **Demo-sivusto** - Testaa agenttiasi Copilot Studion tarjoamalla demo-sivustolla ([Lisätietoja](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **Oma verkkosivusto** - Upota agenttisi suoraan omaan verkkosivustoosi ([Lisätietoja](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **Mobiilisovellus** - Integroi agenttisi mukautettuun mobiilisovellukseen ([Lisätietoja](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-custom-application))
- **SharePoint** - Lisää agenttisi SharePoint-sivustoille dokumentti- ja sivuavuksi ([Lisätietoja](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-sharepoint))
- **Facebook Messenger** - Yhdistä käyttäjiin Facebookin viestintäalustan kautta ([Lisätietoja](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-facebook))
- **Power Pages** - Integroi agenttisi Power Pages -verkkosivustoihin ([Lisätietoja](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-power-pages))
- **Azure Bot Service -kanavat** - Käytä lisäkanavia, kuten Slack, Telegram, Twilio SMS ja muita ([Lisätietoja](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-azure-bot-service-channels))

Lisätäksesi kanavan, siirry agenttisi **Kanavat**-välilehdelle ja valitse kanava, jonka haluat määrittää. Jokaisella kanavalla on omat asetusvaatimuksensa ja se saattaa vaatia lisäautentikointia tai konfigurointivaiheita.

![Kanavat-välilehti agentissa](../../../../../translated_images/channels.01b4185735e1147c56dd9c6a9d33a751cdf45e44b3b8515b21e2c57a9c1fe9b8.fi.png)

## 📺 Kanavakokemukset

Eri kanavilla on erilaisia käyttäjäkokemuksia. Kun rakennat agenttia useille kanaville, varmista, että olet tietoinen kanavakohtaisista eroista. On aina hyvä strategia testata agenttiasi useilla kanavilla varmistaaksesi, että se toimii haluamallasi tavalla.

| Kokemus                          | Verkkosivusto | Teams ja Microsoft 365 Copilot         | Facebook                 | Dynamics Omnichannel asiakaspalvelulle                     |
| -------------------------------- | ------------- | --------------------------------------- | ------------------------ | ---------------------------------------------------------- |
| [Asiakastyytyväisyyskysely][1]   | Adaptive-kortti | Vain teksti                            | Vain teksti              | Vain teksti                                                |
| [Monivalintavaihtoehdot][1]      | Tuettu        | [Tuettu enintään kuusi (hero-korttina)][4] | [Tuettu enintään 13][6] | [Osittain tuettu][8]                                       |
| [Markdown][2]                    | Tuettu        | [Osittain tuettu][5]                   | [Osittain tuettu][7]     | [Osittain tuettu][9]                                       |
| [Tervetuloviesti][1]             | Tuettu        | Tuettu                                 | Ei tuettu                | Tuettu [Chatissa][10]. Ei tuettu muilla kanavilla.         |
| [Did-You-Mean][3]                | Tuettu        | Tuettu                                 | Tuettu                   | Tuettu [Microsoft Teamsissa][11], [Chatissa][10], Facebookissa ja tekstipohjaisissa kanavissa (lyhytsanomapalvelu (SMS) [TeleSignin][12] ja [Twilion][13], [WhatsAppin][14], [WeChatin][15] ja [Twitterin][16] kautta). Ehdotetut toiminnot esitetään vain tekstilistana; käyttäjien on kirjoitettava vaihtoehto uudelleen vastatakseen. |

[1]: https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics
[2]: https://daringfireball.net/projects/markdown/
[3]: https://learn.microsoft.com/microsoft-copilot-studio/advanced-ai-features
[4]: https://learn.microsoft.com/microsoftteams/platform/concepts/cards/cards-reference#hero-card
[5]: https://learn.microsoft.com/microsoftteams/platform/bots/how-to/format-your-bot-messages#text-only-messages
[6]: https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies/
[7]: https://www.facebook.com/help/147348452522644?helpref=related
[8]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#suggested-actions-support
[9]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#preview-support-for-formatted-messages
[10]: https://learn.microsoft.com/dynamics365/customer-service/set-up-chat-widget
[11]: https://learn.microsoft.com/dynamics365/customer-service/configure-microsoft-teams
[12]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel
[13]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel-twilio
[14]: https://learn.microsoft.com/dynamics365/customer-service/configure-whatsapp-channel
[15]: https://learn.microsoft.com/dynamics365/customer-service/configure-wechat-channel
[16]: https://learn.microsoft.com/dynamics365/customer-service/configure-twitter-channel

> [!NOTE]
> Tässä on esimerkkejä siitä, miten voit käyttää erilaista logiikkaa eri kanavilla. Esimerkki löytyy Power Platform Snippets -repositorystä:
>
> Henry Jammes jakoi esimerkin siitä, miten näyttää erilainen adaptive-kortti, kun kanava on Microsoft Teams. ([Linkki esimerkkiin](https://github.com/pnp/powerplatform-snippets/blob/main/copilot-studio/multiple-topics-matched-topic/source/multiple-topics-matched.yaml#L40))

## 🧪 Labra 11: Julkaise agenttisi Teamsiin ja Microsoft 365 Copilotiin

### 🎯 Käyttötapaus

Contoso IT Help Desk -agenttisi on nyt täysin konfiguroitu tehokkailla ominaisuuksilla—se voi käyttää SharePoint-tietolähteitä, luoda tukipyyntöjä, lähettää proaktiivisia ilmoituksia ja vastata älykkäästi käyttäjien kysymyksiin. Kaikki nämä ominaisuudet ovat kuitenkin tällä hetkellä saatavilla vain kehitysympäristössä, jossa ne on rakennettu.

**Haaste:** Loppukäyttäjät eivät voi hyödyntää agenttisi ominaisuuksia, ennen kuin se on asianmukaisesti julkaistu ja tehty saataville kanavissa, joissa he työskentelevät.

**Ratkaisu:** Agenttisi julkaiseminen varmistaa, että uusin versio—kaikkien viimeaikaisten päivitysten, uusien aiheiden, parannettujen tietolähteiden ja konfiguroitujen toimintojen kanssa—on saatavilla oikeille käyttäjille. Ilman julkaisemista käyttäjät olisivat edelleen vuorovaikutuksessa agenttisi vanhemman version kanssa, josta saattaa puuttua kriittisiä toimintoja.

Teamsin ja Microsoft 365 Copilot -kanavan lisääminen on yhtä tärkeää, koska:

- **Teams-integraatio**: Organisaatiosi työntekijät viettävät suurimman osan päivästä Microsoft Teamsissa yhteistyön, kokousten ja viestinnän parissa. Lisäämällä agenttisi Teamsiin käyttäjät voivat saada IT-tukea poistumatta ensisijaisesta työympäristöstään.

- **Microsoft 365 Copilot**: Käyttäjät voivat käyttää erikoistunutta IT Help Desk -agenttiasi suoraan Microsoft 365 Copilot -kokemuksessaan, jolloin se integroidaan saumattomasti heidän päivittäiseen työnkulkuunsa Office-sovelluksissa.

- **Keskitetty pääsy**: Sen sijaan, että käyttäjien pitäisi muistaa erilliset verkkosivustot tai sovellukset, he voivat käyttää IT-tukea alustoilla, joita he jo käyttävät, vähentäen kitkaa ja lisäten käyttöönottoa.

Tämä tehtävä muuttaa kehitystyösi tuotantovalmiiksi ratkaisuksi, joka tuottaa todellista arvoa organisaatiosi loppukäyttäjille.

### Esivaatimukset

Ennen kuin aloitat tämän labran, varmista, että sinulla on:

- ✅ Suoritettu aiemmat labrat ja täysin konfiguroitu Contoso Helpdesk Agent
- ✅ Agenttisi on testattu ja valmis tuotantokäyttöön
- ✅ Oikeudet Copilot Studio -ympäristössä agenttien julkaisemiseen
- ✅ Pääsy Microsoft Teamsiin organisaatiossasi

### 11.1 Julkaise agenttisi

Nyt kun kaikki työt agentin parissa on tehty, meidän on varmistettava, että kaikki työmme on saatavilla loppukäyttäjille, jotka tulevat käyttämään agenttiamme. Jotta sisältö olisi saatavilla kaikille käyttäjille, meidän on julkaistava agenttimme.

1. Siirry Contoso Helpdesk Agenttiin Copilot Studiossa (kautta [Copilot Studio maker -portaali](https://copilotstudio.microsoft.com))

    Copilot Studiossa agenttisi julkaiseminen on helppoa. Voit vain valita julkaise-painikkeen agentin yleiskatsauksessa.

    ![Julkaise agentti -yleiskatsaus](../../../../../translated_images/publish.0ea13d92c5642af915bb3340c95d21fc560314f4df9de212039a9bfc90b91789.fi.png)

1. Valitse **Julkaise**-painike agentissasi

    Tämä avaa julkaisu-popupin, jossa vahvistat, että haluat todella julkaista agenttisi.

    ![Julkaisun vahvistus](../../../../../translated_images/publish-popup.5c81be18b2a810270303f4020b0469152a40e006d26cb4aa50373ecaf5033777.fi.png)

1. Valitse **Julkaise** vahvistaaksesi agenttisi julkaisemisen

    Nyt näytölle ilmestyy viesti, joka kertoo, että agenttisi julkaistaan. Popupia ei tarvitse pitää auki. Saat ilmoituksen, kun agentti on julkaistu.

    ![Agentti julkaistaan](../../../../../translated_images/publishing.a459aaf38bc05b77198534174dc726b598c5270c5474227933f6a0f1a1efb299.fi.png)

    Kun agentti on julkaistu, näet ilmoituksen agenttisivun yläosassa.

    ![Ilmoitus julkaisu valmis](../../../../../translated_images/publish-notification.19af02a64b396fb845fa86917f97f165bb2098b76de97cb039c6a9547323eee1.fi.png)

Mutta - olemme vasta julkaisseet agentin, emme ole vielä lisänneet sitä kanavaan, joten korjataan se nyt!

### 11.2 Lisää Teamsin ja Microsoft 365 Copilotin kanava

1. Lisätäksesi Teamsin ja Microsoft 365 Copilotin kanavan agenttiimme, meidän täytyy valita **Kanava** agentin ylävalikosta

    ![Kanavat-välilehti](../../../../../translated_images/channels-tab.c0e6f94aec1578072eee8efd47e461d58cd685799de84a4ddc18cb418886f834.fi.png)

    Täällä näemme kaikki kanavat, jotka voimme lisätä tähän agenttiin.

1. Valitse **Teams ja Microsoft 365**

    ![Valitse Teams ja Microsoft 365](../../../../../translated_images/teams-m365-copilot.f0893e75ed6cfa7e41d8beb6b0131114d29a1b71dab2b2d888bde406d30fcff0.fi.png)

1. Valitse **Lisää kanava** viimeistelläksesi ohjatun toiminnon ja lisätäksesi kanavan agenttiin

    ![Valitse lisää kanava](../../../../../translated_images/add-channel.5fd407ac747e713cea43d87cfdc015c5d203a70e729619ca01a67e6868afdb03.fi.png)

    Tämä kestää hetken, kunnes se on lisätty. Kun se on lisätty, vihreä ilmoitus ilmestyy sivupalkin yläosaan.

    ![Kanava lisätty](../../../../../translated_images/channel-added.ce9c58eff88524ba2a74c37c7939350303e650d93f34c753dfe9636226e197f1.fi.png)

1. Valitse **Näytä agentti Teamsissa** avataksesi uuden välilehden

    ![Näytä agentti Teamsissa](../../../../../translated_images/see-agent-teams.5f265c0babfccbe4ef18fbe6259df04ec8649d48fed94d42b3c330e37ca0a9d5.fi.png)

1. Valitse **Lisää** lisätäksesi Contoso Helpdesk Agentin Teamsiin

    ![Lisää agentti Teamsiin](../../../../../translated_images/add-teams.645ddf3b6719bd7edfcf453d77481c18afb7df478a4f655ef2452a0b77ab6944.fi.png)

    Tämä kestää hetken. Tämän jälkeen pitäisi näkyä seuraava näyttö:

    ![Agentti lisätty onnistuneesti](../../../../../translated_images/teams-added.3cafc77c56381bdd977ea80a117795c6ea677b2d86568cd5da24338e3958f7ce.fi.png)

1. Valitse **Avaa** avataksesi agentin Teamsissa

    Tämä avaa agentin Teamsissa Teams-sovelluksena

    ![Agentti avattu Microsoft Teamsissa](../../../../../translated_images/agent-teams-open.5a83151f38b31ebeccf7cabf36f2bfd03e7045bb902b4103f1d2126c6aec9498.fi.png)

Nyt olemme julkaisseet agentin toimimaan sinulle Microsoft Teamsissa, mutta saatat haluta tehdä sen saataville useammille ihmisille.

### 11.3 Tee agentti saataville kaikille käyttäjille vuokraajassa

1. Sulje selainvälilehti, jossa Contoso Helpdesk Agent on avattu

    Tämä tuo sinut takaisin Copilot Studioon, jossa Teamsin ja Microsoft 365 Copilotin sivupaneeli on edelleen auki. Olemme nyt vain avanneet agentin Teamsissa, mutta voimme tehdä paljon enemmän täällä. Voimme muokata agentin tietoja, voimme ottaa agentin käyttöön useammille käyttäjille ja paljon muuta.

1. Valitse **Muokkaa tietoja**

    ![Muokkaa tietoja](../../../../../translated_images/m365-teams-edit-details.317ee562b1b2aa75c093f2833b793610c3445f69dada7163f164674bad173ab5.fi.png)
Tämä avaa paneelin, jossa voimme muuttaa agentin yksityiskohtia ja asetuksia. Voimme muuttaa perusasioita, kuten kuvaketta, kuvakkeen taustaväriä ja kuvauksia. Lisäksi voimme muuttaa Teams-asetuksia (esimerkiksi sallia käyttäjän lisätä agentin tiimiin tai käyttää agenttia ryhmä- ja kokouskeskusteluissa). Kun valitset *lisää*, voit myös muuttaa kehittäjän tietoja, kuten kehittäjän nimeä, verkkosivustoa, tietosuojalausuntoa ja käyttöehtoja.

![Muokkaa tietoja -paneeli](../../../../../translated_images/edit-details.216f5c77105e190ca504c4c21152f32b0965450427d7cc175df370935b715510.fi.png)

1. Valitse **Peruuta** sulkeaksesi Muokkaa tietoja -paneelin.

1. Valitse **Saatavuusasetukset**.

![Saatavuusasetukset](../../../../../translated_images/m365-teams-availability-options.0ab161ab446293ef5c8f877df3457b87c8a02f5c9df21dc735fb9cddc6b58ed1.fi.png)

Tämä avaa saatavuusasetusten paneelin, jossa voit kopioida linkin ja lähettää sen käyttäjille agentin käyttöä varten (huomaa, että sinun täytyy jakaa agentti käyttäjälle myös). Voit myös ladata tiedoston lisätäksesi agenttisi Microsoft Teams- tai Microsoft 365 -kauppaan. Agentin näyttämiseksi kaupassa sinulla on muitakin vaihtoehtoja: voit näyttää sen tiimikavereillesi ja jaetuille käyttäjille (*Rakennettu Power Platformilla* -osiossa) tai voit näyttää sen kaikille organisaatiossasi (tämä vaatii järjestelmänvalvojan hyväksynnän).

1. Valitse **Näytä kaikille organisaatiossani**.

![Saatavuusasetukset](../../../../../translated_images/availability-options.a7043460dcbbcdbb6981c86cae687b0d4ecd3d7a8ef709dd267684b17d4a7b8e.fi.png)

1. Valitse **Lähetä järjestelmänvalvojan hyväksyttäväksi**.

![Lähetä hyväksyttäväksi](../../../../../translated_images/submit-for-approval.6c7cfa08ed2637c8e0219dde1d69ac7e62e81b32289e77ff5b6cdeb730ab5e0b.fi.png)

Nyt järjestelmänvalvojan täytyy hyväksyä agenttisi lähetys. Hän voi tehdä sen siirtymällä Teamsin hallintakeskukseen ja etsimällä Contoso Helpdesk Agentin sovelluksista. Kuvakaappauksessa näet, miltä järjestelmänvalvojan näkymä näyttää Teamsin hallintakeskuksessa.

![Teams-sovellus odottaa hyväksyntää](../../../../../translated_images/pending-approval.ec9b6ebcdd1c9a8ca8f9bf20148ffa97e40d16720779c14f106dc3ddda170202.fi.png)

Järjestelmänvalvojan täytyy valita Contoso Helpdesk Agent ja valita *Julkaise* julkaistakseen Contoso Helpdesk Agentin kaikille.

![Teams-sovelluksen julkaisu](../../../../../translated_images/teams-apps-publish.cccbf85984750c60cc7cc27fc20c152ef14d21e3dacb6fa3df01c024ac5fe7ad.fi.png)

Kun järjestelmänvalvoja on julkaissut agentin lähetyksen, voit päivittää Copilot Studion ja sinun pitäisi nähdä *saatavilla sovelluskaupassa* -banneri saatavuusasetuksissa.

![Saatavilla sovelluskaupassa](../../../../../translated_images/available-in-app-store.aeb2a875a164b537ee62d0ece51399e94986393837a1c6eec544b81c673e23b0.fi.png)

Täällä on vielä enemmän mahdollisuuksia. Järjestelmänvalvoja voi muuttaa globaalia asennuskäytäntöä ja asentaa Contoso Helpdesk Agentin automaattisesti kaikille vuokraajassa. Lisäksi voit kiinnittää Contoso Helpdesk Agentin vasempaan valikkoon, jotta kaikilla on helppo pääsy siihen.

## ✅ Tehtävä suoritettu

🎉 **Onnittelut!** Olet onnistuneesti julkaissut agenttisi ja lisännyt sen Teamsiin ja Microsoft 365 Copilotiin! Seuraavaksi on kurssin viimeinen tehtävä: Lisensoinnin ymmärtäminen.

⏭️ [Siirry **Lisensoinnin ymmärtäminen** -osioon](../12-understanding-licensing/README.md)

## 📚 Taktiset resurssit

🔗 [Julkaisukanavien dokumentaatio](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/11-publish-your-agent" alt="Analytiikka" />

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi katsoa ensisijaiseksi lähteeksi. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.