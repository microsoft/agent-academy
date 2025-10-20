<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-20T18:14:22+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "cs"
}
-->
# 🕵️‍♂️ Mise 04: Psaní pokynů pro agenty

--8<-- "disclaimer.md"

## 🕵️‍♂️ KRYCÍ JMÉNO: `OPERACE TAJNÁ SMĚRNICE`

> **⏱️ Časový rámec operace:** `~45 minut`

## 🎯 Stručný popis mise

Agente, vaším dalším úkolem je **Operace Tajná Směrnice** - zvládnutí umění komunikace a řízení agentů prostřednictvím přesných pokynů a popisů.

Vaším úkolem, pokud se rozhodnete jej přijmout, je naučit se klíčové dovednosti psaní jasných, akčních pokynů, které povedou vaše agenty k inteligentnímu rozhodování, využívání správných nástrojů a zdrojů informací a bezproblémové spolupráci s ostatními agenty. Zároveň se naučíte umění vytváření kvalitních popisů, které pomohou agentům pochopit jejich zdroje a reagovat s chirurgickou přesností na dotazy uživatelů.

Považujte to za pokročilý výcvik v psychologii agentů a modifikaci jejich chování. Stejně jako terénní operativci potřebují jasné parametry mise, vaši AI agenti vyžadují odborně vytvořené pokyny, aby mohli jednat s jasností, přesností a poskytovat cenné informace v reálných situacích.

---

## 🔎 Cíle

Po splnění této mise budete schopni:

- **Mistrovství v pokynech**: Porozumět umění a vědě psaní pokynů pro agenty v Copilot Studio  
- **Strategické vedení**: Naučit se, jak vést agenty k využívání nástrojů, zdrojů informací a spolupráci s ostatními agenty  
- **Operační jasnost**: Zajistit, aby vaši agenti jednali s přesností, transparentností a efektivitou  

---

## 📝 Psaní pokynů pro agenty

Efektivní psaní pokynů pro agenty je klíčem k úspěšnému chování agentů. Pokyny slouží agentům k:

- Rozhodování, který nástroj, téma nebo zdroj informací použít pro dotaz uživatele nebo autonomní spuštění  
- Vyplnění vstupů pro jakýkoli nástroj na základě dostupného kontextu  
- Generování odpovědí pro koncového uživatele  

### Jak pokyny fungují

Pokyny musí být založeny na nástrojích, tématech a zdrojích informací, které jsou pro vašeho agenta nakonfigurovány. Agenti nemohou jednat na základě pokynů pro zdroje, které nemají. Například pokud instruujete svého agenta, aby prohledal FAQ na webu, musíte tento FAQ přidat jako zdroj informací.

Ve svých pokynech můžete odkazovat na konkrétní nástroje, témata, proměnné nebo výrazy Power Fx pomocí `/`. To pomáhá agentovi přesně vědět, co použít a kdy.

### Co zahrnout do pokynů

- Přidejte pokyny pro případy, kdy chcete vést volby agenta, zejména pokud může dojít k nejasnostem.  
- Použijte pokyny k nastavení mantinelů, například omezení témat nebo specifikaci formátů odpovědí.  
- Poskytněte nápovědu pro vyplnění vstupů nástrojů, např. "Použijte e-mailovou adresu z pole kontaktu leadu při pomoci uživateli s návrhem e-mailu."  
- Specifikujte, jak by měly být odpovědi formátovány, např. "Vždy poskytujte odpovědi o stavu objednávky ve formátu tabulky."  
- Použijte omezení k omezení akcí agenta, např. "Reagujte pouze na dotazy týkající se zaměstnaneckých benefitů."  

### Praktické příklady

- "Použijte dokumenty FAQ pouze v případě, že otázka nesouvisí s hodinami, schůzkami nebo fakturací."  
- "Používejte téma vytvoření ticketu pouze pro vytváření ticketů; pro jiné požadavky týkající se řešení problémů použijte téma troubleshooting."  
- "Vždy poskytujte odpovědi o stavu objednávky ve formátu tabulky."  

### Testování a zdokonalování

- Po úpravě pokynů použijte testovací panel k ověření chování agenta.  
- Aktualizujte a publikujte změny podle potřeby.  

### Pokročilé vedení

- Číslujte nebo používejte seznamy s odrážkami pro své pokyny a specifikujte, že musí být dodržovány v pořadí.  
- Používejte formátování markdown pro čitelnost a pro usnadnění zpracování generativní AI.  
- Pokud chcete, aby byl váš agent velmi specifický, zvažte vytvoření tématu pro daný případ použití.  
- Používejte přesné názvy nástrojů a témat v pokynech, abyste předešli nejasnostem.  

### Bezpečnost a moderace

- Omezte, jaké nástroje by měl agent používat při odkazování na zdroje informací.  
- Omezte, jaké parametry by měly být použity pro nástroje (např. e-mail pouze na specifikovaný seznam osob).  
- Použijte pokyny k ochraně před nežádoucím chováním nebo problémy s filtrováním obsahu.  

---

## ✍️ Psaní popisů pro nástroje, témata a agenty

Kvalitní popisy jsou nezbytné pro generativní orchestraci. Váš agent používá tyto popisy k výběru správných nástrojů, témat a agentů pro odpovědi na dotazy uživatelů a spouštěče. Dodržujte tyto osvědčené postupy:

- **Používejte jednoduchý, přímý jazyk**: Vyhněte se žargonu, slangovým výrazům nebo příliš technickým termínům. Pište v aktivním hlasu a přítomném čase.  
- **Buďte konkrétní a relevantní**: Zahrňte klíčová slova související s funkcionalitou a záměrem uživatele. Ujistěte se, že popisy jasně odlišují podobné nástroje nebo témata, aby nedocházelo k nejasnostem.  
- **Buďte struční a informativní**: Omezte popisy na jednu nebo dvě věty. Shrňte, co nástroj, téma nebo agent dělá a jak to uživateli prospívá.  
- **Používejte unikátní, popisné názvy**: Vyhněte se obecným názvům. Například použijte "Předpověď počasí na zítřek" místo pouze "Počasí".  
- **Seznamte akce nebo úvahy**: Používejte seznamy s odrážkami nebo číslované seznamy pro jasnost při popisu více funkcí nebo kroků.  
- **Testujte překryvy**: Pokud mají podobné popisy více témat, váš agent může vyvolat všechna. Testujte a upravujte, abyste zabránili překryvům.  

!!! example "Příklady dobrých a špatných popisů"
    **Dobré:** Toto téma poskytuje informace o počasí pro jakékoli místo na světě na následující den. Poskytuje teplotu. Nezískává aktuální počasí pro dnešek.  
    **Špatné:** Tento nástroj může odpovídat na otázky. *(Příliš vágní)*  

---

## 🛠️ Osvědčené postupy pro pokyny a popisy

Aby byly vaše pokyny a popisy skutečně efektivní, mějte na paměti tyto zásady:

- Používejte aktivní hlas a přítomný čas (např. "Tento nástroj poskytuje informace o počasí").  
- Vyhněte se žargonu, slangovým výrazům nebo zbytečně technickým termínům, pokud nejsou nezbytné pro cílovou skupinu.  
- Používejte seznamy s odrážkami nebo číslované seznamy k oddělení akcí, funkcí nebo úvah.  
- Zahrňte klíčová slova, která odpovídají záměru uživatele a funkcionalitě nástroje nebo tématu.  
- Zajistěte odlišné názvy a popisy pro podobné zdroje, abyste předešli nejasnostem a překryvům.  

---

## 🗂️ Struktura příkladu pokynů

Při psaní pokynů zvažte následující strukturu pro jasnost a úplnost:

1. **Přehled**: Stručně popište misi a roli agenta  
1. **Kroky procesu**: Uveďte hlavní kroky, které by měl agent následovat  
1. **Body spolupráce**: Uveďte, kdy má agent kontaktovat jiné agenty nebo použít konkrétní nástroje  
1. **Bezpečnost a moderace**: Zahrňte jakékoli požadavky na dodržování pravidel nebo bezpečnost  
1. **Zpětná vazba**: Specifikujte, jak by měl agent sbírat zpětnou vazbu nebo eskalovat problémy  

---

## 🧪 Laboratoř: Psaní pokynů pro agenty

*Obsah laboratoře brzy dostupný...*

---

## 🎉 Mise dokončena

Mise 04 je splněna! Nyní máte:

✅ **Mistrovství v pokynech**: Naučili jste se psát jasné, akční pokyny pro agenty  
✅ **Strategické vedení**: Naučili jste agenty používat nástroje a efektivně spolupracovat  
✅ **Operační jasnost**: Zajistili jste, aby agenti jednali s přesností a transparentností  

Další na řadě je [Mise 05](../05-agent-responses/README.md): Přizpůsobení odpovědí agentů pro maximální dopad.

---

## 📚 Taktické zdroje

📖 [Microsoft Copilot Studio - Psaní pokynů](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Pokyny pro generativní režim](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Nejsme odpovědní za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.