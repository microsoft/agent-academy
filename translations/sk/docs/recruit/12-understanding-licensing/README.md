<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-20T17:39:20+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "sk"
}
-->
# 🚨 Misia 12: Pochopenie licencovania

## 🕵️‍♂️ KRYCÍ NÁZOV: `OPERÁCIA VEDZ, ČO DLHUJEŠ`

> **⏱️ Časový rámec operácie:** `~15 minút`

## 🎯 Misia: Zhrnutie

Vitajte, regrút. Predtým, než nasadíte svojich agentov do terénu, musíte vedieť, **ako sa meria používanie, licencuje a fakturuje**. Táto misia rozoberá model fakturácie na základe správ, vysvetľuje, čo zahŕňajú licencie Microsoft 365 Copilot, a ukazuje, ako plánovať pomocou odhadovača.

---

## 🎯 Cieľ: Pochopiť model založený na správach

Copilot Studio neúčtuje poplatky za používateľa alebo funkciu – fakturuje sa na základe **počtu správ, ktoré vaši agenti spotrebujú**. „Správa“ je interakcia medzi vaším agentom a používateľom (alebo systémom).

- 💬 Každá interakcia používateľa s vaším agentom sa počíta ako minimálne **1 správa**
- 🔄 Komplexné interakcie (ako napríklad grounding, generatívna AI alebo toky) spotrebujú **viacero správ**
- 💼 Za správy platíte buď prostredníctvom **predplatených balíkov** alebo **platby podľa spotreby (PAYGO)**

---

## Možnosti licencovania

### 1. **Balíky správ Copilot Studio**

- Predplatené: **25 000 správ/mesiac za 200 USD**
- Najlepšie pre predvídateľné používanie – kapacita je zdieľaná v rámci nájomníka

### 2. **Platba podľa spotreby (PAYGO)**

- Post-paid: **0,01 USD za správu**
- Žiadny počiatočný záväzok; používanie sa fakturuje na konci mesiaca prostredníctvom Azure

---

## Čo ak máte licencie M365 Copilot?

Ak má váš tím **licencie Microsoft 365 Copilot**, vaši agenti **môžu fungovať bez dodatočnej fakturácie pre kľúčové scenáre**:

- Klasické odpovede, generatívne odpovede, správy založené na grafoch a základné akcie agentov sú **bez poplatkov** pre autentifikovaných používateľov M365 Copilot v aplikáciách ako Teams a Outlook  
- Avšak: ak povolíte pokročilé funkcie ako autonómne spúšťače, toky agentov nad rámec základných akcií alebo použijete externé kanály/API, tie **spotrebujú fakturovateľné správy**

| Scenár                                     | Fakturované dodatočné správy?                |
|-------------------------------------------|----------------------------------------------|
| Používateľ M365 Copilot sa pýta agenta v Teams | ❌ Nie je fakturované                         |
| Agent volá externé API alebo tok          | ✅ Fakturované (5 + správ)                    |
| Agent používa autonómny spúšťač alebo grounding | ✅ Fakturované                                |

---

## 🧮 Plánujte presne: Použite odhadovač

Pred spustením vášho agenta použite **Copilot Studio Usage Estimator** na predpovedanie spotreby správ v realistických scenároch:

[👉 Použite Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Umožní vám:

- 🔢 Určiť **počet používateľov**
- ⚙️ Vybrať **funkcie agenta** (grounding, akcie, toky, pamäť)
- 📈 Odhadnúť **celkový počet správ na agenta za mesiac**
- 🧠 Optimalizovať návrh a vyhnúť sa prekvapeniam pri fakturácii

!!! tip
    ✅ Spustite ho včas – a znova po vytvorení – na porovnanie očakávaného a skutočného používania.

---

## 💼 Ukážkový scenár

**Prostredie**: Agent IT Help Desk s groundingom + jeden Power Automate tok  
**Sedenia**: 5 interakcií používateľa na jedno sedenie  
**Predpoklady**: grounding (10 správ) + akcia (5 správ) + 5 generatívnych odpovedí (10 správ)  
**Celkom**: ~25 správ na jedno sedenie  
**Rozsah**: 500 sedení/mesiac = ~12 500 správ (½ balíka správ)

---

## 🧠 Tipy na kontrolu nákladov

- Monitorujte používanie prostredníctvom Power Platform Admin Center
- Začnite v prostredí vývoja/testovania pred spustením naživo
- Deaktivujte nepoužívané akcie a konektory
- Používajte **licencie Microsoft 365 Copilot** tam, kde je to možné, na interné použitie
- Používajte balíky správ, keď sa používanie stane predvídateľným
- Používajte **Copilot Studio Usage Estimator** na predpovedanie používania

---

## 🏁 Misia dokončená

Teraz rozumiete:

- Ako sa vypočítava a fakturuje používanie
- Kedy M365 Copilot pokrýva používanie – a kedy nie
- Ako predpovedať a spravovať spotrebu správ

🎓 S týmito vedomosťami ste pripravení pokračovať a nasadiť svojich agentov **efektívne a inteligentne**

---

## 📚 Taktické zdroje

Zistite viac o licencovaní a fakturácii v Copilot Studio

- 📄 [Licencovanie a sadzby správ v Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Licenčný sprievodca Power Platform (júl 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Správa správ a monitorovanie kapacity](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytika" />

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.