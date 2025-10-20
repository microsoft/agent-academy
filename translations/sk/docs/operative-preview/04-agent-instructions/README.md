<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-20T18:14:40+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "sk"
}
-->
# 🕵️‍♂️ Misia 04: Písanie pokynov pre agenta

--8<-- "disclaimer.md"

## 🕵️‍♂️ KRYCÍ NÁZOV: `OPERÁCIA TAJNÁ SMERNICA`

> **⏱️ Časový rámec operácie:** `~45 minút`

## 🎯 Stručný prehľad misie

Agent, vašou ďalšou úlohou je **Operácia Tajná Smernica** - zvládnutie umenia komunikácie a riadenia agentov prostredníctvom presných pokynov a popisov.

Vašou misiou, ak sa ju rozhodnete prijať, je naučiť sa kľúčové zručnosti písania jasných, akčných pokynov, ktoré vedú vašich agentov k inteligentným rozhodnutiam, správnemu používaniu nástrojov a zdrojov informácií a bezproblémovej spolupráci s ostatnými agentmi. Zároveň zvládnete umenie vytvárania kvalitných popisov, ktoré pomáhajú agentom pochopiť ich zdroje a reagovať s chirurgickou presnosťou na požiadavky používateľov.

Považujte to za pokročilý tréning v oblasti psychológie agentov a modifikácie ich správania. Rovnako ako terénny operatívec potrebuje jasné parametre misie na úspech, vaši AI agenti vyžadujú odborné pokyny, aby mohli konať s jasnosťou, presnosťou a poskytovať hodnotné informácie v reálnych situáciách.

---

## 🔎 Ciele

Po splnení tejto misie budete:

- **Majster pokynov**: Porozumieť umeniu a vede písania pokynov pre agentov v Copilot Studio  
- **Strategické vedenie**: Naučiť sa, ako usmerniť agentov pri používaní nástrojov, zdrojov informácií a spolupráci s ostatnými agentmi  
- **Prevádzková jasnosť**: Zabezpečiť, aby vaši agenti konali s presnosťou, transparentnosťou a efektivitou  

---

## 📝 Písanie pokynov pre agentov

Efektívne písanie pokynov pre agentov je kľúčom k úspešnému správaniu agentov. Pokyny sa používajú na:

- Rozhodovanie, ktorý nástroj, tému alebo zdroj informácií použiť na požiadavku používateľa alebo autonómny spúšťač  
- Vyplnenie vstupov pre akýkoľvek nástroj na základe dostupného kontextu  
- Generovanie odpovede pre koncového používateľa  

### Ako fungujú pokyny

Pokyny musia byť založené na nástrojoch, témach a zdrojoch informácií nakonfigurovaných pre vášho agenta. Agent nemôže konať na základe pokynov pre zdroje, ktoré nemá. Napríklad, ak inštruujete svojho agenta, aby vyhľadal FAQ na webovej stránke, musíte pridať toto FAQ ako zdroj informácií.

V pokynoch môžete odkazovať na konkrétne nástroje, témy, premenné alebo výrazy Power Fx pomocou `/`. To pomáha agentovi presne vedieť, čo použiť a kedy.

### Čo zahrnúť do pokynov

- Pridajte pokyny pre prípady, keď chcete usmerniť voľby agenta, najmä keď je možná nejednoznačnosť.  
- Použite pokyny na nastavenie mantinelov, ako je obmedzenie tém alebo špecifikácia formátov odpovedí.  
- Dajte tipy na vyplnenie vstupov nástrojov, napr. "Použite e-mailovú adresu z kontaktného poľa leadu pri pomoci používateľovi s návrhom e-mailu."  
- Špecifikujte, ako by mali byť odpovede formátované, napr. "Vždy poskytujte odpovede o stave objednávky vo formáte tabuľky."  
- Použite obmedzenia na obmedzenie akcií agenta, napr. "Reagujte iba na požiadavky týkajúce sa zamestnaneckých výhod."  

### Praktické príklady

- "Použite dokumenty FAQ iba v prípade, že otázka nesúvisí s Otváracími hodinami, Schôdzkami alebo Fakturáciou."  
- "Tému vytvárania tiketov používajte iba na vytváranie tiketov; na ostatné požiadavky týkajúce sa riešenia problémov použite tému odstraňovania problémov."  
- "Vždy poskytujte odpovede o stave objednávky vo formáte tabuľky."  

### Testovanie a zdokonaľovanie

- Po úprave pokynov použite testovací panel na overenie správania agenta.  
- Podľa potreby aktualizujte a publikujte zmeny.  

### Pokročilé usmernenia

- Číslujte alebo používajte odrážky vo svojich pokynoch a špecifikujte, že sa musia dodržiavať v poradí.  
- Používajte formátovanie markdown pre lepšiu čitateľnosť a na pomoc generatívnej AI pri spracovaní vašich pokynov.  
- Ak chcete, aby bol váš agent veľmi špecifický, zvážte vytvorenie témy pre daný prípad použitia.  
- Používajte presné názvy nástrojov a tém v pokynoch, aby ste predišli zmätku.  

### Bezpečnosť a moderovanie

- Obmedzte, aké nástroje by mal agent používať pri odkazovaní na zdroje informácií.  
- Obmedzte, aké parametre by sa mali používať pre nástroje (napr. posielajte e-mail iba na určený zoznam osôb).  
- Použite pokyny na ochranu pred nežiaducim správaním alebo problémami s filtrovaním obsahu.  

---

## ✍️ Písanie popisov pre nástroje, témy a agentov

Kvalitné popisy sú nevyhnutné pre generatívnu orchestráciu. Váš agent používa tieto popisy na výber správnych nástrojov, tém a agentov na odpovedanie na požiadavky a spúšťače používateľov. Dodržiavajte tieto osvedčené postupy:

- **Používajte jednoduchý, priamy jazyk**: Vyhnite sa žargónu, slangovým výrazom alebo príliš technickým termínom. Píšte v aktívnom hlase a prítomnom čase.  
- **Buďte konkrétny a relevantný**: Zahrňte kľúčové slová súvisiace s funkciou a zámerom používateľa. Uistite sa, že popisy jasne odlišujú podobné nástroje alebo témy, aby sa predišlo nejednoznačnosti.  
- **Buďte stručný a informatívny**: Obmedzte popisy na jednu alebo dve vety. Zhrňte, čo nástroj, téma alebo agent robí a ako to prospieva používateľovi.  
- **Používajte jedinečné, popisné názvy**: Vyhnite sa všeobecným názvom. Napríklad použite "Predpoveď počasia na zajtra" namiesto "Počasie".  
- **Uvádzajte akcie alebo úvahy**: Používajte odrážky alebo číslované zoznamy pre jasnosť pri popise viacerých funkcií alebo krokov.  
- **Testujte na prekrývanie**: Ak majú viaceré témy podobné popisy, váš agent ich môže všetky aktivovať. Testujte a upravujte, aby ste predišli prekrývaniu.  

!!! example "Príklady dobrých a zlých popisov"
    **Dobrý:** Táto téma poskytuje informácie o počasí pre akékoľvek miesto na svete na nasledujúci deň. Poskytuje teplotu. Nezískava aktuálne počasie na dnešok.  
    **Zlý:** Tento nástroj dokáže odpovedať na otázky. *(Príliš všeobecné)*  

---

## 🛠️ Osvedčené postupy pre pokyny a popisy

Aby boli vaše pokyny a popisy skutočne efektívne, majte na pamäti tieto zásady:

- Používajte aktívny hlas a prítomný čas (napr. "Tento nástroj poskytuje informácie o počasí").  
- Vyhnite sa žargónu, slangovým výrazom alebo zbytočne technickým termínom, pokiaľ to nie je nevyhnutné pre publikum.  
- Používajte odrážky alebo číslované zoznamy na oddelenie akcií, funkcií alebo úvah.  
- Zahrňte kľúčové slová, ktoré zodpovedajú zámeru používateľa a funkčnosti nástroja alebo témy.  
- Zabezpečte odlišné názvy a popisy pre podobné zdroje, aby sa predišlo zmätku a prekrývaniu.  

---

## 🗂️ Príklad štruktúry pokynov

Pri písaní pokynov zvážte nasledujúcu štruktúru pre jasnosť a úplnosť:

1. **Prehľad**: Stručne opíšte misiu a úlohu agenta  
1. **Kroky procesu**: Uveďte hlavné kroky, ktoré by mal agent dodržiavať  
1. **Body spolupráce**: Uveďte, kedy má agent kontaktovať iných agentov alebo použiť konkrétne nástroje  
1. **Bezpečnosť a moderovanie**: Zahrňte akékoľvek požiadavky na súlad alebo bezpečnosť  
1. **Spätná väzba**: Špecifikujte, ako by mal agent zbierať spätnú väzbu alebo eskalovať problémy  

---

## 🧪 Laboratórium: Písanie pokynov pre agenta

*Obsah laboratória čoskoro...*

---

## 🎉 Misia splnená

Misia 04 je dokončená! Teraz máte:

✅ **Majster pokynov**: Naučili ste sa písať jasné, akčné pokyny pre agentov  
✅ **Strategické vedenie**: Usmernili ste agentov pri používaní nástrojov a efektívnej spolupráci  
✅ **Prevádzková jasnosť**: Zabezpečili ste, aby agenti konali s presnosťou a transparentnosťou  

Ďalšia misia je [Misia 05](../05-agent-responses/README.md): Prispôsobenie odpovedí agentov pre maximálny dopad.

---

## 📚 Taktické zdroje

📖 [Microsoft Copilot Studio - Písanie pokynov](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Usmernenia pre generatívny režim](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.