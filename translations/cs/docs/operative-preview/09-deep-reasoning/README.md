<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "610b0181a64c306bc9a853fd974bc924",
  "translation_date": "2025-10-20T18:31:47+00:00",
  "source_file": "docs/operative-preview/09-deep-reasoning/README.md",
  "language_code": "cs"
}
-->
# Použití hlubokého uvažování k hodnocení vhodnosti kandidáta a přípravě na pohovor

--8<-- "disclaimer.md"

## Teorie

- Vysvětlete, co je hluboké uvažování
- Popište způsoby, jak jej využít (v samotném agentovi nebo v promptu)
- Uveďte, kdy byste jej použili

## Praktická část

Pro agenta na přípravu pohovorů použijeme hluboké uvažování. V tomto případě budeme uvažovat nad následujícími věcmi:

- Otázky na pohovor (existují nějaké mezery, na které bychom se měli během pohovoru zaměřit)
- Výsledek promptu na vhodnost pro firmu (text o tom, jak tento kandidát odpovídá hodnotám společnosti + skóre)
- Výsledek promptu na vhodnost pro roli (text o tom, jak tento kandidát odpovídá požadavkům na roli + skóre)

Toto je skvělý okamžik k aplikaci pokročilých instrukcí, které se studenti naučili v předchozí lekci.

[Add a deep reasoning model for complex tasks (preview) - Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-reasoning-models)  
[https://learn.microsoft.com/ai-builder/prompt-modelsettings](https://learn.microsoft.com/ai-builder/prompt-modelsettings)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.