<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-20T23:47:49+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "sl"
}
-->
# 🧰 Misija 05: Uporaba vnaprej pripravljenega agenta  

## 🕵️‍♂️ KODNO IME: `OPERACIJA VARNA POTOVANJA`

> **⏱️ Časovni okvir operacije:** `~30 minut`

🎥 **Oglejte si predstavitev**

[![Sličica videa vnaprej pripravljenega agenta](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.sl.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Oglejte si predstavitev na YouTubu")

## 🎯 Povzetek misije

Dobrodošli v vaši naslednji misiji v Copilot Studio Agent Academy. Raziskali boste svet **vnaprej pripravljenih agentov**—inteligentnih, namensko zasnovanih agentov, ki jih je ustvaril Microsoft za pospešitev vaše implementacije in zmanjšanje časa do vrednosti.

Namesto da bi gradili od začetka, vam vnaprej pripravljeni agenti (imenovani tudi **predloge agentov**) omogočajo hiter začetek z že pripravljenimi scenariji, ki jih lahko prilagodite in implementirate v nekaj minutah.

V tej misiji boste implementirali agenta **Varna potovanja**—agenta, ki pomaga vašim uporabnikom pri pripravi na poslovna potovanja, razumevanju politik podjetja in poenostavitvi načrtovanja.

---

## 🧭 Cilji

Vaši cilji za to misijo so:

1. Razumeti, kaj so vnaprej pripravljeni agenti in zakaj so pomembni  
1. Implementirati predlogo agenta **Varna potovanja**  
1. Prilagoditi odgovore in vsebino agenta  
1. Testirati in objaviti agenta  

---

## 🧠 Kaj so vnaprej pripravljeni agenti?

Vnaprej pripravljeni agenti so pripravljeni AI agenti, ki jih je ustvaril Microsoft in:

- Naslavljajo pogoste poslovne potrebe (kot so potovanja, kadrovske zadeve, IT podpora)
- Vključujejo popolnoma funkcionalne teme, sprožilne fraze, navodila in vzorčno znanje.
- Se lahko urejajo, razširjajo in povezujejo z vašimi lastnimi podatki

Ti agenti so popolni za hiter začetek ali učenje o strukturi agentov.

---

## 🧪 Laboratorij 05: Hiter začetek z vnaprej pripravljenim agentom

Zdaj se bomo naučili, kako izbrati vnaprej pripravljenega agenta in ga prilagoditi.

- [5.1 Zaženite Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Izberite predlogo agenta Varna potovanja](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Prilagodite agenta](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Testirajte in objavite](../../../../../docs/recruit/05-using-prebuilt-agents)

Ostali bomo pri prejšnjem primeru, kjer bomo ustvarili rešitev v namenskem okolju Copilot Studio za gradnjo našega IT helpdesk agenta.

Začnimo!

### 5.1 Zaženite Copilot Studio

1. Pojdite na [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Prijavite se z Microsoft 365 službenim ali šolskim računom

!!! warning
    Morate biti v najemniku, kjer je Copilot Studio omogočen. Če Copilot Studio ni viden, ponovno obiščite [Misijo 00](../00-course-setup/README.md) za dokončanje nastavitve.

### 5.2 Izberite predlogo agenta Varna potovanja

1. Na domači strani Copilot Studio kliknite **+ Ustvari**
    ![Ustvari agenta](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.sl.png)

1. Pomaknite se navzdol do razdelka **Začni s predlogo agenta**

1. Poiščite in izberite **Varna potovanja**

    ![Izberite predlogo Varna potovanja](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.sl.png)

1. Opazite, da je predloga že naložena z opisom, navodili in znanjem.

    ![Preglejte predlogo](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.sl.png)

1. Kliknite **Ustvari**

    ![Ustvari agenta](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.sl.png)

To bo ustvarilo novega agenta v vašem okolju na podlagi konfiguracije Varna potovanja.

### 5.3 Prilagodite agenta

Zdaj, ko je agent ustvarjen, ga prilagodimo vaši organizaciji:

1. Izberite **Omogoči generativno AI**, da vklopite funkcijo generativne AI, ki bo uporabljala navodila iz predloge.

    ![Omogoči generativne odgovore](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.sl.png)

1. Zdaj bomo agenta opremili z dodatnim virom znanja, da bo lahko odgovarjal na vprašanja o potovanjih po Evropi. Za to se pomaknite navzdol do razdelka **znanje** in izberite **Dodaj znanje**

    ![Dodaj znanje](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.sl.png)

1. Izberite **Javne spletne strani**

    ![Dodaj javno spletno stran](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.sl.png)

1. V besedilno polje prilepite **<https://european-union.europa.eu/>** in izberite **Dodaj**

    ![Dodaj spletno stran](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.sl.png)

1. Izberite **Dodaj agentu**

    ![Dodaj agentu](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.sl.png)

### 5.4 Testirajte in objavite

1. Kliknite **Testiraj** v zgornjem desnem kotu za zagon testnega okna  

1. Preizkusite fraze, kot so:

    - `“Ali potrebujem vizum za potovanje iz ZDA v Amsterdam?”`
    - `“Kako dolgo traja pridobitev ameriškega potnega lista?”`
    - `“Kje je najbližja ameriška ambasada v Valenciji, Španija?”`

1. Preverite, ali agent odgovarja z natančnimi in koristnimi informacijami ter opazujte zemljevid aktivnosti, da vidite, od kod je pridobil informacije.

    ![Dodaj agentu](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.sl.png)

1. Ko ste pripravljeni, kliknite **Objavi**

    ![Dodaj agentu](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.sl.png)

1. V pogovornem oknu ponovno izberite **Objavi**
    ![Dodaj agentu](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.sl.png)

1. Po želji dodajte agenta v Microsoft Teams z vgrajeno funkcijo **Kanali**.

!!! note "🧳 Dodatni cilj"
    Poskusite povezati agenta Varna potovanja s SharePoint stranjo ali datoteko s pogostimi vprašanji, da bo bolj relevanten za politike potovanj vašega podjetja.

## ✅ Misija zaključena

Zdaj ste uspešno:

- Implementirali Microsoftovega vnaprej pripravljenega agenta  
- Prilagodili agenta
- Testirali in objavili svojo različico predloge agenta **Varna potovanja**

⏭️ [Nadaljujte z lekcijo **Ustvarjanje agenta od začetka**](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analitika" />

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.