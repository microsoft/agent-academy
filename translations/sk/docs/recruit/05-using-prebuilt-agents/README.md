<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-20T17:06:32+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "sk"
}
-->
# 🧰 Misia 05: Použitie predpripraveného agenta  

## 🕵️‍♂️ KRYCÍ NÁZOV: `OPERÁCIA BEZPEČNÉ CESTOVANIE`

> **⏱️ Časový rámec operácie:** `~30 minút`

🎥 **Pozrite si prehľad**

[![Náhľad videa predpripraveného agenta](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.sk.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Pozrite si prehľad na YouTube")

## 🎯 Misia

Vitajte na ďalšej misii v Copilot Studio Agent Academy. Chystáte sa preskúmať svet **predpripravených agentov**—inteligentných, účelovo zameraných agentov vytvorených spoločnosťou Microsoft na urýchlenie nasadenia a zníženie času potrebného na dosiahnutie hodnoty.

Namiesto vytvárania od začiatku vám predpripravení agenti (nazývaní aj **šablóny agentov**) poskytujú náskok tým, že ponúkajú pripravené scenáre, ktoré môžete prispôsobiť a nasadiť za pár minút.

V tejto misii nasadíte agenta **Bezpečné cestovanie**—agenta, ktorý pomáha vašim používateľom pripraviť sa na služobné cesty, pochopiť firemné politiky a zjednodušiť plánovanie.

---

## 🧭 Ciele

Vaše ciele pre túto misiu sú:

1. Pochopiť, čo sú predpripravení agenti a prečo sú dôležití  
1. Nasadiť šablónu agenta **Bezpečné cestovanie**  
1. Prispôsobiť odpovede a obsah agenta  
1. Otestovať a publikovať agenta  

---

## 🧠 Čo sú predpripravení agenti?

Predpripravení agenti sú hotoví AI agenti vytvorení spoločnosťou Microsoft, ktorí:

- Riešia bežné obchodné potreby (ako cestovanie, HR, IT podpora)
- Obsahujú plne funkčné témy, spúšťacie frázy, pokyny a ukážkové znalosti.
- Môžu byť upravovaní, rozširovaní a prepojení s vašimi vlastnými údajmi

Títo agenti sú ideálni na rýchly začiatok alebo na učenie sa, ako sú agenti štruktúrovaní.

---

## 🧪 Laboratórium 05: Rýchly začiatok s predpripraveným agentom

Teraz sa naučíme, ako vybrať predpripraveného agenta a prispôsobiť ho.

- [5.1 Spustenie Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Výber šablóny agenta Bezpečné cestovanie](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Prispôsobenie agenta](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Testovanie a publikovanie](../../../../../docs/recruit/05-using-prebuilt-agents)

Budeme pokračovať v príklade z predchádzajúcej časti, kde vytvoríme riešenie v dedikovanom prostredí Copilot Studio na vytvorenie nášho IT helpdesk agenta.

Začnime!

### 5.1 Spustenie Copilot Studio

1. Prejdite na [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Prihláste sa pomocou svojho pracovného alebo školského účtu Microsoft 365

!!! warning
    Musíte byť v tenante, kde je Copilot Studio povolené. Ak nevidíte Copilot Studio, vráťte sa k [Misii 00](../00-course-setup/README.md) a dokončite nastavenie.

### 5.2 Výber šablóny agenta Bezpečné cestovanie

1. Na domovskej stránke Copilot Studio kliknite na **+ Vytvoriť**
    ![Vytvoriť agenta](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.sk.png)

1. Posuňte sa nadol do sekcie **Začať so šablónou agenta**

1. Nájdite a vyberte **Bezpečné cestovanie**

    ![Vybrať šablónu Bezpečné cestovanie](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.sk.png)

1. Všimnite si, že šablóna je prednastavená s popisom, pokynmi a znalosťami.

    ![Preskúmať šablónu](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.sk.png)

1. Kliknite na **Vytvoriť**

    ![Vytvoriť agenta](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.sk.png)

Týmto sa vo vašom prostredí vytvorí nový agent na základe konfigurácie Bezpečné cestovanie.

### 5.3 Prispôsobenie agenta

Teraz, keď je agent vytvorený, prispôsobme ho vašej organizácii:

1. Vyberte **Povolené generatívne AI**, aby ste zapli funkciu generatívneho AI, ktorá bude používať pokyny uvedené v šablóne.

    ![Povoliť generatívne odpovede](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.sk.png)

1. Teraz vybavíme agenta ďalším zdrojom znalostí, aby mohol odpovedať na otázky o cestovaní po Európe. Na tento účel prejdite do sekcie **znalosti** a vyberte **Pridať znalosti**

    ![Pridať znalosti](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.sk.png)

1. Vyberte **Verejné webové stránky**

    ![Pridať verejnú webovú stránku](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.sk.png)

1. Do textového poľa vložte **<https://european-union.europa.eu/>** a vyberte **Pridať**

    ![Pridať webovú stránku](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.sk.png)

1. Vyberte **Pridať k agentovi**

    ![Pridať k agentovi](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.sk.png)

### 5.4 Testovanie a publikovanie

1. Kliknite na **Testovať** v pravom hornom rohu na spustenie testovacieho okna  

1. Vyskúšajte frázy ako:

    - `„Potrebujem víza na cestu z USA do Amsterdamu?“`
    - `„Ako dlho trvá získanie pasu USA?“`
    - `„Kde je najbližšie veľvyslanectvo USA vo Valencii, Španielsko?“`

1. Overte, či agent odpovedá presne a užitočne, a sledujte mapu aktivity, aby ste videli, odkiaľ získal informácie.

    ![Pridať k agentovi](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.sk.png)

1. Keď budete pripravení, kliknite na **Publikovať**

    ![Pridať k agentovi](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.sk.png)

1. Znova vyberte **Publikovať** v dialógovom okne
    ![Pridať k agentovi](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.sk.png)

1. Voliteľne pridajte agenta do Microsoft Teams pomocou zabudovanej funkcie **Kanály**.

!!! note "🧳 Bonusový cieľ"
    Skúste prepojiť agenta Bezpečné cestovanie so SharePoint stránkou alebo súborom FAQ, aby bol relevantnejší pre cestovné politiky vašej spoločnosti.

## ✅ Misia splnená

Teraz ste úspešne:

- Nasadili predpripraveného agenta od Microsoftu  
- Prispôsobili agenta
- Otestovali a publikovali vlastnú verziu šablóny agenta **Bezpečné cestovanie**

⏭️ [Prejdite na lekciu **Vytvorenie vlastného agenta od začiatku**](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analytika" />

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.