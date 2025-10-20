<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-20T17:39:07+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "cs"
}
-->
# 🚨 Mise 12: Porozumění licencování

## 🕵️‍♂️ KRYCÍ NÁZEV: `OPERACE VĚDĚT, CO DLUŽÍTE`

> **⏱️ Časový rámec operace:** `~15 minut`

## 🎯 Úkol mise

Vítejte, rekrute. Než nasadíte své agenty do terénu, musíte vědět, **jak se měří, licencuje a účtuje používání**. Tato mise rozebírá model účtování na základě zpráv, vysvětluje, co zahrnují licence Microsoft 365 Copilot, a ukazuje, jak plánovat pomocí odhadovače.

---

## 🎯 Cíl: Pochopit model založený na zprávách

Copilot Studio neúčtuje poplatky za uživatele nebo funkce – účtuje se na základě **počtu zpráv, které vaši agenti spotřebují**. „Zpráva“ je interakce mezi vaším agentem a uživatelem (nebo systémem).

- 💬 Každá interakce uživatele s vaším agentem se počítá jako minimálně **1 zpráva**
- 🔄 Složité interakce (jako je grounding, generativní AI nebo toky) spotřebují **více zpráv**
- 💼 Za zprávy platíte buď prostřednictvím **předplacených balíčků** nebo **platby podle skutečné spotřeby (PAYGO)**

---

## Možnosti licencování

### 1. **Balíčky zpráv Copilot Studio**

- Předplacené: **25 000 zpráv/měsíc za 200 $**
- Nejlepší pro předvídatelné použití – kapacita je sdílena napříč tenantem

### 2. **Platba podle skutečné spotřeby (PAYGO)**

- Post-paid: **0,01 $ za zprávu**
- Žádný předběžný závazek; použití je účtováno na konci měsíce prostřednictvím Azure

---

## Co když máte licence M365 Copilot?

Pokud má váš tým **licence Microsoft 365 Copilot**, vaši agenti **mohou fungovat bez dalších poplatků pro klíčové scénáře**:

- Klasické odpovědi, generativní reakce, zprávy založené na grafu a základní akce agentů jsou **bez poplatků** pro ověřené uživatele M365 Copilot v aplikacích jako Teams a Outlook  
- Nicméně: pokud povolíte pokročilé funkce jako autonomní spouštěče, toky agentů nad rámec základních akcí nebo používáte externí kanály/API, tyto **spotřebují zpoplatněné zprávy**

| Scénář                                     | Další zpoplatněné zprávy?                  |
|-------------------------------------------|--------------------------------------------|
| Uživatel M365 Copilot se ptá agenta v Teams | ❌ Neúčtováno                               |
| Agent volá externí API nebo tok           | ✅ Účtováno (5 + zpráv)                     |
| Agent používá autonomní spouštěč nebo grounding | ✅ Účtováno                                 |

---

## 🧮 Plánujte přesně: Použijte odhadovač

Než spustíte svého agenta, použijte náš **Copilot Studio Usage Estimator** k předpovědi spotřeby zpráv v realistických scénářích:

[👉 Použijte Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Umožňuje vám:

- 🔢 Specifikovat **počet uživatelů**
- ⚙️ Vybrat **funkce agenta** (grounding, akce, toky, paměť)
- 📈 Odhadnout **celkový počet zpráv na agenta za měsíc**
- 🧠 Optimalizovat návrh a vyhnout se překvapením při účtování

!!! tip
    ✅ Spusťte ho brzy – a znovu po vytvoření – pro porovnání očekávané vs. skutečné spotřeby.

---

## 💼 Ukázkový scénář

**Prostředí**: Agent IT Help Desk s groundingem + jedním tokem Power Automate  
**Sezení**: 5 interakcí uživatele na sezení  
**Předpoklady**: grounding (10 zpráv) + akce (5 zpráv) + 5 generativních odpovědí (10 zpráv)  
**Celkem**: ~25 zpráv na sezení  
**Měřítko**: 500 sezení/měsíc = ~12 500 zpráv (½ balíčku zpráv)

---

## 🧠 Tipy pro kontrolu nákladů

- Sledujte spotřebu prostřednictvím Power Platform Admin Center
- Začněte v režimu vývoje/testování před spuštěním
- Deaktivujte nepoužívané akce a konektory
- Používejte **licence Microsoft 365 Copilot** pro interní použití, kdykoli je to možné
- Používejte balíčky zpráv, když se spotřeba stane předvídatelnou
- Používejte **Copilot Studio Usage Estimator** k předpovědi spotřeby

---

## 🏁 Mise dokončena

Nyní rozumíte:

- Jak se počítá a účtuje spotřeba
- Kdy M365 Copilot pokrývá spotřebu – a kdy ne
- Jak předpovědět a spravovat spotřebu zpráv

🎓 S těmito znalostmi jste připraveni pokračovat a nasadit své agenty **efektivně a chytře**

---

## 📚 Taktické zdroje

Zjistěte více o licencování a účtování v Copilot Studio

- 📄 [Licencování a sazby zpráv Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Průvodce licencováním Power Platform (červenec 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Správa zpráv a monitorování kapacity](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytika" />

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.