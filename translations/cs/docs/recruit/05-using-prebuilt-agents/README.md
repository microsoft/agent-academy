<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-20T17:06:18+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "cs"
}
-->
# 🧰 Mise 05: Použití předem vytvořeného agenta  

## 🕵️‍♂️ KRYCÍ NÁZEV: `OPERACE BEZPEČNÉ CESTOVÁNÍ`

> **⏱️ Časový rámec operace:** `~30 minut`

🎥 **Podívejte se na průvodce**

[![Náhled videa předem vytvořeného agenta](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.cs.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Podívejte se na průvodce na YouTube")

## 🎯 Popis mise

Vítejte na další misi v Copilot Studio Agent Academy. Chystáte se prozkoumat svět **předem vytvořených agentů**—inteligentních, účelově zaměřených agentů vytvořených společností Microsoft, které urychlují nasazení a zkracují dobu potřebnou k dosažení hodnoty.

Namísto vytváření od nuly vám předem vytvoření agenti (nazývaní také **šablony agentů**) poskytují náskok díky připraveným scénářům, které můžete přizpůsobit a nasadit během několika minut.

V této misi nasadíte agenta **Bezpečné cestování**—agenta, který pomáhá vašim uživatelům připravit se na služební cesty, porozumět firemním politikám a zjednodušit plánování.

---

## 🧭 Cíle

Vaše cíle pro tuto misi jsou:

1. Pochopit, co jsou předem vytvoření agenti a proč jsou důležití  
1. Nasadit šablonu agenta **Bezpečné cestování**  
1. Přizpůsobit odpovědi a obsah agenta  
1. Otestovat a publikovat agenta  

---

## 🧠 Co jsou předem vytvoření agenti?

Předem vytvoření agenti jsou hotoví AI agenti vytvoření společností Microsoft, kteří:

- Řeší běžné obchodní potřeby (například cestování, HR, IT podporu)
- Obsahují plně funkční témata, spouštěcí fráze, instrukce a ukázkové znalosti
- Mohou být upravováni, rozšiřováni a propojeni s vašimi vlastními daty

Tito agenti jsou ideální pro rychlý začátek nebo pro pochopení struktury agentů.

---

## 🧪 Laboratoř 05: Rychlý start s předem vytvořeným agentem

Nyní se naučíme, jak vybrat předem vytvořeného agenta a přizpůsobit ho.

- [5.1 Spuštění Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Výběr šablony agenta Bezpečné cestování](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Přizpůsobení agenta](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Testování a publikace](../../../../../docs/recruit/05-using-prebuilt-agents)

Budeme pokračovat v příkladu z dřívějška, kde vytvoříme řešení v dedikovaném prostředí Copilot Studio pro vytvoření našeho IT helpdesk agenta.

Začněme!

### 5.1 Spuštění Copilot Studio

1. Přejděte na [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Přihlaste se pomocí svého pracovního nebo školního účtu Microsoft 365

!!! warning
    Musíte být v tenantovi, kde je Copilot Studio povoleno. Pokud Copilot Studio nevidíte, vraťte se k [Misi 00](../00-course-setup/README.md) a dokončete nastavení.

### 5.2 Výběr šablony agenta Bezpečné cestování

1. Na domovské stránce Copilot Studio klikněte na **+ Vytvořit**
    ![Vytvořit agenta](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.cs.png)

1. Přejděte dolů do sekce **Začněte se šablonou agenta**

1. Najděte a vyberte **Bezpečné cestování**

    ![Vyberte šablonu Bezpečné cestování](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.cs.png)

1. Všimněte si, že šablona je předem naplněna popisem, instrukcemi a znalostmi.

    ![Prohlédněte si šablonu](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.cs.png)

1. Klikněte na **Vytvořit**

    ![Vytvořit agenta](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.cs.png)

Tím vytvoříte nového agenta ve vašem prostředí na základě konfigurace Bezpečné cestování.

### 5.3 Přizpůsobení agenta

Nyní, když je agent vytvořen, přizpůsobíme ho vaší organizaci:

1. Vyberte **Povolit generativní AI**, abyste zapnuli funkci generativní AI, která bude používat instrukce uvedené v šabloně.

    ![Povolit generativní odpovědi](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.cs.png)

1. Nyní vybavíme agenta dalším zdrojem znalostí, aby mohl odpovídat na otázky o cestování po Evropě. K tomu přejděte dolů do sekce **znalosti** a vyberte **Přidat znalosti**

    ![Přidat znalosti](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.cs.png)

1. Vyberte **Veřejné webové stránky**

    ![Přidat veřejnou webovou stránku](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.cs.png)

1. Do textového pole vložte **<https://european-union.europa.eu/>** a vyberte **Přidat**

    ![Přidat webovou stránku](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.cs.png)

1. Vyberte **Přidat k agentovi**

    ![Přidat k agentovi](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.cs.png)

### 5.4 Testování a publikace

1. Klikněte na **Testovat** v pravém horním rohu pro spuštění testovacího okna  

1. Vyzkoušejte fráze jako:

    - `“Potřebuji vízum pro cestu z USA do Amsterdamu?”`
    - `“Jak dlouho trvá získání pasu USA?”`
    - `“Kde je nejbližší americká ambasáda ve Valencii, Španělsko?”`

1. Ověřte, že agent odpovídá přesně a užitečně, a sledujte mapu aktivit, abyste viděli, odkud informace získal.

    ![Přidat k agentovi](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.cs.png)

1. Až budete připraveni, klikněte na **Publikovat**

    ![Přidat k agentovi](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.cs.png)

1. Znovu vyberte **Publikovat** v dialogovém okně
    ![Přidat k agentovi](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.cs.png)

1. Volitelně přidejte agenta do Microsoft Teams pomocí vestavěné funkce **Kanály**.

!!! note "🧳 Bonusový cíl"
    Zkuste propojit agenta Bezpečné cestování s webem SharePoint nebo souborem FAQ, aby byl více relevantní pro cestovní politiky vaší společnosti.

## ✅ Mise splněna

Nyní jste úspěšně:

- Nasadili předem vytvořeného agenta od Microsoftu  
- Přizpůsobili agenta
- Otestovali a publikovali vlastní verzi šablony agenta **Bezpečné cestování**

⏭️ [Přejděte na lekci **Vytvoření vlastního agenta od nuly**](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analytika" />

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.