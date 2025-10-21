<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9dceeba2eae2bb73e328602a060eddab",
  "translation_date": "2025-10-20T23:54:13+00:00",
  "source_file": "docs/recruit/11-publish-your-agent/README.md",
  "language_code": "sl"
}
-->
# 🚨 Misija 11: Objavi svojega agenta

## 🕵️‍♂️ KODNO IME: `OPERACIJA OBJAVI OBJAVI OBJAVI`

> **⏱️ Časovni okvir operacije:** `~30 minut`

🎥 **Oglejte si navodila**

[![Sličica videa za objavo agenta](../../../../../translated_images/video-thumbnail.cb69abce792f4bd310436e8b46ebbfcada62f60c636bb894e4077046131f7023.sl.jpg)](https://www.youtube.com/watch?v=eVZmljhYlSI "Oglejte si navodila na YouTubu")

## 🎯 Povzetek misije

Po zaključku serije zahtevnih modulov, Agent Maker, ste zdaj pripravljeni na svoj najpomembnejši korak doslej: objavo svojega agenta. Čas je, da svojo stvaritev omogočite uporabnikom v Microsoft Teams in Microsoft 365 Copilot.

Vaš agent—opremljen z jasno nalogo, zmogljivimi orodji in dostopom do ključnih virov znanja—je pripravljen na delo. Z uporabo Microsoft Copilot Studio boste svojega agenta uvedli, da bo lahko začel pomagati resničnim uporabnikom tam, kjer delajo.

Zaženimo vašega agenta v akcijo.

## 🔎 Cilji

📖 Ta lekcija zajema:

1. Zakaj je pomembno objaviti svojega agenta
1. Kaj se zgodi, ko objavite svojega agenta
1. Kako dodati kanal (Microsoft Teams & Microsoft 365 Copilot)
1. Kako dodati agenta v Microsoft Teams
1. Kako omogočiti agenta v Microsoft Teams za celotno organizacijo

## 🚀 Objavi agenta

Vsakič, ko delate na agentu v Copilot Studio, ga lahko posodobite z dodajanjem znanja ali orodij. Ko ste pripravljeni z vsemi spremembami in ste jih temeljito preizkusili, ste pripravljeni na objavo. Objava zagotavlja, da so najnovejše posodobitve na voljo. Če posodobite svojega agenta z novimi orodji, vendar ne pritisnete gumba za objavo, posodobitve še ne bodo na voljo končnim uporabnikom.

Vedno se prepričajte, da pritisnete gumb za objavo, ko želite posodobitve posredovati uporabnikom svojega agenta. Vaš agent ima morda dodane kanale, in ko pritisnete objavi, so posodobitve na voljo za vse kanale, ki ste jih dodali agentu.

## ⚙️ Konfigurirajte kanale

Kanali določajo, kje lahko vaši uporabniki dostopajo do vašega agenta in komunicirajo z njim. Ko objavite svojega agenta, ga lahko omogočite v več kanalih. Vsak kanal lahko prikazuje vsebino vašega agenta drugače.

Svojega agenta lahko dodate v naslednje kanale:

- **Microsoft Teams in Microsoft 365 Copilot** - Omogočite svojega agenta v klepetih in sestankih Teams ter v izkušnjah Microsoft 365 Copilot ([Več informacij](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams))
- **Demo spletna stran** - Preizkusite svojega agenta na demo spletni strani, ki jo zagotavlja Copilot Studio ([Več informacij](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **Prilagojena spletna stran** - Vdelajte svojega agenta neposredno na svojo spletno stran ([Več informacij](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **Mobilna aplikacija** - Integrirajte svojega agenta v prilagojeno mobilno aplikacijo ([Več informacij](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-custom-application))
- **SharePoint** - Dodajte svojega agenta na SharePoint strani za pomoč pri dokumentih in straneh ([Več informacij](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-sharepoint))
- **Facebook Messenger** - Povežite se z uporabniki prek Facebookove platforme za sporočanje ([Več informacij](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-facebook))
- **Power Pages** - Integrirajte svojega agenta v spletne strani Power Pages ([Več informacij](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-power-pages))
- **Kanali storitve Azure Bot Service** - Dostopajte do dodatnih kanalov, vključno s Slack, Telegram, Twilio SMS in drugimi ([Več informacij](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-azure-bot-service-channels))

Za dodajanje kanala pojdite na zavihek **Kanali** v svojem agentu in izberite kanal, ki ga želite konfigurirati. Vsak kanal ima specifične zahteve za nastavitev in lahko zahteva dodatno avtentikacijo ali korake konfiguracije.

![Zavihek Kanali v agentu](../../../../../translated_images/channels.01b4185735e1147c56dd9c6a9d33a751cdf45e44b3b8515b21e2c57a9c1fe9b8.sl.png)

## 📺 Izkušnje s kanali

Različni kanali ponujajo različne uporabniške izkušnje. Ko ustvarjate agenta za več kanalov, se prepričajte, da ste seznanjeni z razlikami med kanali. Vedno je dobra strategija, da svojega agenta preizkusite v več kanalih, da preverite, ali resnično deluje tako, kot ste si zamislili.

| Izkušnja                        | Spletna stran | Teams in Microsoft 365 Copilot         | Facebook                 | Dynamics Omnichannel za storitve za stranke                   |
| -------------------------------- | ------------- | --------------------------------------- | ------------------------ | ------------------------------------------------------------- |
| [Anketa o zadovoljstvu strank][1] | Prilagodljiva kartica | Samo besedilo                               | Samo besedilo                | Samo besedilo                                                   |
| [Možnosti večkratne izbire][1]      | Podprto     | [Podprto do šest (kot hero kartica)][4] | [Podprto do 13][6]  | [Delno podprto][8]                                    |
| [Markdown][2]                     | Podprto     | [Delno podprto][5]                | [Delno podprto][7] | [Delno podprto][9]                                    |
| [Pozdravno sporočilo][1]              | Podprto     | Podprto                               | Ni podprto            | Podprto za [Klepet][10]. Ni podprto za druge kanale. |
| [Ali ste mislili][3]                 | Podprto     | Podprto                               | Podprto                | Podprto za [Microsoft Teams][11], [Klepet][10], Facebook in kanale samo za besedilo (kratka sporočila (SMS) prek [TeleSign][12] in [Twilio][13], [WhatsApp][14], [WeChat][15] in [Twitter][16]). Predlagana dejanja so predstavljena kot seznam samo za besedilo; uporabniki morajo ponovno vnesti možnost za odgovor. |

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
> Obstajajo nekateri primeri, kjer lahko uporabite različno logiko za različne kanale. Primer tega lahko najdete v repozitoriju Power Platform Snippets:
>
> Henry Jammes je delil primer, kako prikazati drugačno prilagodljivo kartico, ko je kanal Microsoft Teams. ([Povezava do primera](https://github.com/pnp/powerplatform-snippets/blob/main/copilot-studio/multiple-topics-matched-topic/source/multiple-topics-matched.yaml#L40))

## 🧪 Laboratorij 11: Objavite svojega agenta v Teams in Microsoft 365 Copilot

### 🎯 Primer uporabe

Vaš agent za pomoč uporabnikom Contoso IT je zdaj popolnoma konfiguriran z zmogljivimi funkcijami—ima dostop do virov znanja na SharePointu, lahko ustvarja podporne zahtevke, pošilja proaktivna obvestila in inteligentno odgovarja na vprašanja uporabnikov. Vendar so vse te funkcije trenutno na voljo le v razvojnem okolju, kjer ste jih ustvarili.

**Izziv:** Končni uporabniki ne morejo izkoristiti zmogljivosti vašega agenta, dokler ni pravilno objavljen in omogočen prek kanalov, kjer dejansko delajo.

**Rešitev:** Objava vašega agenta zagotavlja, da je najnovejša različica—z vsemi vašimi nedavnimi posodobitvami, novimi temami, izboljšanimi viri znanja in konfiguriranimi tokovi—na voljo resničnim uporabnikom. Brez objave bi uporabniki še vedno komunicirali s starejšo različico vašega agenta, ki morda nima ključnih funkcionalnosti.

Dodajanje kanala Teams in Microsoft 365 Copilot je prav tako ključnega pomena, ker:

- **Integracija s Teams**: Zaposleni v vaši organizaciji večino dneva preživijo v Microsoft Teams za sodelovanje, sestanke in komunikacijo. Z dodajanjem vašega agenta v Teams lahko uporabniki dobijo IT podporo, ne da bi zapustili svoje primarno delovno okolje.

- **Microsoft 365 Copilot**: Uporabniki lahko dostopajo do vašega specializiranega agenta za pomoč IT neposredno v svoji izkušnji Microsoft 365 Copilot, kar omogoča brezhibno integracijo v njihov vsakdanji delovni tok v aplikacijah Office.

- **Centraliziran dostop**: Namesto da si zapomnijo ločene spletne strani ali aplikacije, lahko uporabniki dostopajo do IT podpore prek platform, ki jih že uporabljajo, kar zmanjšuje ovire in povečuje sprejemanje.

Ta misija pretvori vaše razvojno delo v rešitev, pripravljeno za produkcijo, ki prinaša resnično vrednost končnim uporabnikom vaše organizacije.

### Predpogoji

Pred začetkom tega laboratorija se prepričajte, da imate:

- ✅ Zaključene prejšnje laboratorije in popolnoma konfiguriran agent za pomoč uporabnikom Contoso
- ✅ Vaš agent je bil preizkušen in je pripravljen za uporabo v produkciji
- ✅ Dovoljenja v vašem okolju Copilot Studio za objavo agentov
- ✅ Dostop do Microsoft Teams v vaši organizaciji

### 11.1 Objavite svojega agenta

Zdaj, ko je vse naše delo na agentu končano, moramo poskrbeti, da bo vse naše delo na voljo končnim uporabnikom, ki bodo uporabljali našega agenta. Da zagotovimo, da je vsebina na voljo vsem uporabnikom, moramo objaviti našega agenta.

1. Pojdite na Contoso Helpdesk Agent v Copilot Studio (prek [portala Copilot Studio maker](https://copilotstudio.microsoft.com))

    V Copilot Studio je enostavno objaviti svojega agenta. Preprosto izberite gumb za objavo na vrhu pregleda agenta.

    ![Pregled objave agenta](../../../../../translated_images/publish.0ea13d92c5642af915bb3340c95d21fc560314f4df9de212039a9bfc90b91789.sl.png)

1. Izberite gumb **Objavi** v svojem agentu

    Odpre se pojavno okno za potrditev, da res želite objaviti svojega agenta.

    ![Potrditev objave](../../../../../translated_images/publish-popup.5c81be18b2a810270303f4020b0469152a40e006d26cb4aa50373ecaf5033777.sl.png)

1. Izberite **Objavi**, da potrdite objavo svojega agenta

    Zdaj se prikaže sporočilo, da se vaš agent objavlja. Ni vam treba pustiti odprtega pojavnega okna. Obveščeni boste, ko bo agent objavljen.

    ![Agent se objavlja](../../../../../translated_images/publishing.a459aaf38bc05b77198534174dc726b598c5270c5474227933f6a0f1a1efb299.sl.png)

    Ko je agent objavljen, se na vrhu strani agenta prikaže obvestilo.

    ![Obvestilo o zaključeni objavi](../../../../../translated_images/publish-notification.19af02a64b396fb845fa86917f97f165bb2098b76de97cb039c6a9547323eee1.sl.png)

Ampak - objavili smo le agenta, še ga nismo dodali v kanal, zato to zdaj uredimo!

### 11.2 Dodajte kanal Teams in Microsoft 365 Copilot

1. Za dodajanje kanala Teams in Microsoft 365 Copilot našemu agentu moramo izbrati **Kanal** v zgornji navigaciji agenta

    ![Zavihek Kanali](../../../../../translated_images/channels-tab.c0e6f94aec1578072eee8efd47e461d58cd685799de84a4ddc18cb418886f834.sl.png)

    Tukaj lahko vidimo vse kanale, ki jih lahko dodamo temu agentu.

1. Izberite **Teams in Microsoft 365**

    ![Izberite Teams in Microsoft 365](../../../../../translated_images/teams-m365-copilot.f0893e75ed6cfa7e41d8beb6b0131114d29a1b71dab2b2d888bde406d30fcff0.sl.png)

1. Izberite **Dodaj kanal**, da dokončate čarovnika in dodate kanal agentu

    ![Izberite dodaj kanal](../../../../../translated_images/add-channel.5fd407ac747e713cea43d87cfdc015c5d203a70e729619ca01a67e6868afdb03.sl.png)

    To bo trajalo nekaj časa, dokler ne bo dodano. Ko bo dodano, se bo na vrhu stranske vrstice prikazalo zeleno obvestilo.

    ![Kanal dodan](../../../../../translated_images/channel-added.ce9c58eff88524ba2a74c37c7939350303e650d93f34c753dfe9636226e197f1.sl.png)

1. Izberite **Oglejte si agenta v Teams**, da odprete nov zavihek

    ![Oglejte si agenta v Teams](../../../../../translated_images/see-agent-teams.5f265c0babfccbe4ef18fbe6259df04ec8649d48fed94d42b3c330e37ca0a9d5.sl.png)

1. Izberite **Dodaj**, da dodate Contoso Helpdesk Agent v Teams

    ![Dodajte agenta v Teams](../../../../../translated_images/add-teams.645ddf3b6719bd7edfcf453d77481c18afb7df478a4f655ef2452a0b77ab6944.sl.png)

    To bo trajalo nekaj časa. Po tem se mora prikazati naslednji zaslon:

    ![Agent uspešno dodan](../../../../../translated_images/teams-added.3cafc77c56381bdd977ea80a117795c6ea677b2d86568cd5da24338e3958f7ce.sl.png)

1. Izberite **Odpri**, da odprete agenta v Teams

    To bo odprlo agenta v Teams kot aplikacijo Teams

    ![Agent odprt v Microsoft Teams](../../../../../translated_images/agent-teams-open.5a83151f38b31ebeccf7cabf36f2bfd03e7045bb902b4103f1d2126c6aec9498.sl.png)

Zdaj smo objavili agenta, da deluje za vas v Microsoft Teams, vendar boste morda želeli to omogočiti za več ljudi.

### 11.3 Omogočite agenta za vse uporabnike v najemniku

1. Zaprite zavihek brskalnika, kjer je bil odprt Contoso Helpdesk Agent

    To vas mora vrniti v Copilot Studio, kjer je stranska plošča Teams in Microsoft 365 Copilot še vedno odprta. Zdaj smo agenta odprli le v Teams, vendar lahko tukaj storimo še veliko več. Lahko uredimo podrobnosti agenta, ga uvedemo za več uporabnikov in še več.

1. Izberite **Uredi podrobnosti**

    ![Uredi podrobnosti](../../../../../translated_images/m365-teams-edit-details.317ee562b1b2aa75c093f2833b793610c3445f69dada7163f164674bad173ab5.sl.png)
To bo odprlo podokno, kjer lahko spremenimo številne podrobnosti in nastavitve agenta. Spremenimo lahko osnovne podrobnosti, kot so ikona, barva ozadja ikone in opisi. Prav tako lahko tukaj spremenimo nastavitve za Teams (na primer omogočimo uporabniku, da doda agenta v ekipo, ali omogočimo uporabo tega agenta v skupinskih in sestankovnih klepetih). Ko izberete *več*, lahko spremenite tudi podrobnosti razvijalca, kot so ime razvijalca, spletna stran, izjava o zasebnosti in pogoji uporabe.

![Podokno za urejanje podrobnosti](../../../../../translated_images/edit-details.216f5c77105e190ca504c4c21152f32b0965450427d7cc175df370935b715510.sl.png)

1. Izberite **Prekliči**, da zaprete podokno za urejanje podrobnosti.

1. Izberite **Možnosti razpoložljivosti**.

![Možnosti razpoložljivosti](../../../../../translated_images/m365-teams-availability-options.0ab161ab446293ef5c8f877df3457b87c8a02f5c9df21dc735fb9cddc6b58ed1.sl.png)

To bo odprlo podokno možnosti razpoložljivosti, kjer lahko kopirate povezavo za pošiljanje uporabnikom, da uporabijo tega agenta (bodite pozorni, agenta morate deliti tudi z uporabnikom) in prenesete datoteko za dodajanje agenta v Microsoft Teams ali Microsoft 365 trgovino. Za prikaz agenta v trgovini imate tudi druge možnosti: lahko ga prikažete svojim sodelavcem in deljenim uporabnikom (za prikaz v razdelku *Zgrajeno s Power Platform*) ali pa ga prikažete vsem v vaši organizaciji (to zahteva odobritev skrbnika).

1. Izberite **Prikaži vsem v moji organizaciji**.

![Možnosti razpoložljivosti](../../../../../translated_images/availability-options.a7043460dcbbcdbb6981c86cae687b0d4ecd3d7a8ef709dd267684b17d4a7b8e.sl.png)

1. Izberite **Pošlji v odobritev skrbniku**.

![Pošlji v odobritev](../../../../../translated_images/submit-for-approval.6c7cfa08ed2637c8e0219dde1d69ac7e62e81b32289e77ff5b6cdeb730ab5e0b.sl.png)

Zdaj mora vaš skrbnik odobriti oddajo agenta. To lahko stori tako, da odpre Teams Admin Center in poišče Contoso Helpdesk Agent v aplikacijah. Na posnetku zaslona lahko vidite, kaj bi skrbnik videl v Teams Admin Center.

![Teams aplikacija čaka na odobritev](../../../../../translated_images/pending-approval.ec9b6ebcdd1c9a8ca8f9bf20148ffa97e40d16720779c14f106dc3ddda170202.sl.png)

Skrbnik mora izbrati Contoso Helpdesk Agent in izbrati *Objavi*, da objavi Contoso Helpdesk Agent za vse.

![Objava Teams aplikacije](../../../../../translated_images/teams-apps-publish.cccbf85984750c60cc7cc27fc20c152ef14d21e3dacb6fa3df01c024ac5fe7ad.sl.png)

Ko skrbnik objavi oddajo agenta, boste lahko osvežili Copilot Studio in videli banner *na voljo v trgovini aplikacij* v možnostih razpoložljivosti.

![Na voljo v trgovini aplikacij](../../../../../translated_images/available-in-app-store.aeb2a875a164b537ee62d0ece51399e94986393837a1c6eec544b81c673e23b0.sl.png)

Tu so še dodatne možnosti. Vaš skrbnik lahko spremeni globalno politiko nastavitve in samodejno namesti Contoso Helpdesk Agent za vse v najemniku. Poleg tega lahko agenta Contoso Helpdesk pripnete na levi meni, da bo dostop do njega enostaven za vse.

## ✅ Misija zaključena

🎉 **Čestitke!** Uspešno ste objavili svojega agenta in ga dodali v Teams ter Microsoft 365 Copilot! Naslednja naloga je zadnja misija tečaja: Razumevanje licenciranja.

⏭️ [Premakni se na lekcijo **Razumevanje licenciranja**](../12-understanding-licensing/README.md)

## 📚 Taktični viri

🔗 [Dokumentacija o kanalih za objavo](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/11-publish-your-agent" alt="Analitika" />

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatski prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.