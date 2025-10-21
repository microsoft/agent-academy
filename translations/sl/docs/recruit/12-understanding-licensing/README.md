<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-21T00:04:15+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "sl"
}
-->
# 🚨 Misija 12: Razumevanje licenciranja

## 🕵️‍♂️ KODNO IME: `OPERACIJA VEŠČINA OBVEZNOSTI`

> **⏱️ Časovni okvir operacije:** `~15 minut`

## 🎯 Povzetek misije

Dobrodošli, rekrut. Preden pošljete svoje agente na teren, morate vedeti **kako se meri uporaba, licencira in zaračunava**. Ta misija razčlenjuje model obračunavanja na podlagi sporočil, pojasnjuje, kaj vključujejo licence za Microsoft 365 Copilot, in vam pokaže, kako načrtovati z ocenjevalnikom.

---

## 🎯 Cilj: Razumevanje modela na podlagi sporočil

Copilot Studio ne zaračunava na podlagi uporabnikov ali funkcij—obračunava se na podlagi **števila sporočil, ki jih porabijo vaši agenti**. "Sporočilo" je interakcija med vašim agentom in uporabnikom (ali sistemom).

- 💬 Vsaka interakcija uporabnika z vašim agentom šteje kot vsaj **1 sporočilo**
- 🔄 Kompleksne interakcije (kot so utemeljitve, generativna umetna inteligenca ali tokovi) porabijo **več sporočil**
- 💼 Za sporočila plačate bodisi prek **vnaprej plačanih paketov** bodisi po sistemu **plačaj po porabi (PAYGO)**

---

## Možnosti licenciranja

### 1. **Paketi sporočil Copilot Studio**

- Vnaprej plačano: **25.000 sporočil/mesec za 200 $**
- Najboljše za predvidljivo uporabo — zmogljivost se deli med najemniki

### 2. **Plačaj po porabi (PAYGO)**

- Plačilo po porabi: **0,01 $ na sporočilo**
- Brez predhodne obveznosti; uporaba se obračuna ob koncu meseca prek Azure

---

## Kaj pa, če imate licence za M365 Copilot?

Če ima vaša ekipa **licence za Microsoft 365 Copilot**, lahko vaši agenti **delujejo brez dodatnih stroškov za ključne scenarije**:

- Klasični odgovori, generativni odgovori, sporočila, ki temeljijo na grafih, in osnovna dejanja agentov so **brezplačna** za avtenticirane uporabnike M365 Copilot v aplikacijah, kot sta Teams in Outlook  
- Vendar: če omogočite napredne funkcije, kot so samodejni sprožilci, tokovi agentov, ki presegajo osnovna dejanja, ali uporabljate zunanje kanale/API-je, ta **porabijo obračunljiva sporočila**

| Scenarij                                    | Dodatna obračunana sporočila?                |
|---------------------------------------------|----------------------------------------------|
| Uporabnik M365 Copilot postavi vprašanje agentu v Teams | ❌ Ne obračunano                              |
| Agent kliče zunanji API ali tok             | ✅ Obračunano (5 + sporočil)                  |
| Agent uporablja samodejni sprožilec ali utemeljitev | ✅ Obračunano                                 |

---

## 🧮 Načrtujte natančno: Uporabite ocenjevalnik

Preden zaženete svojega agenta, uporabite naš **Copilot Studio Usage Estimator**, da predvidite porabo sporočil v realističnih scenarijih:

[👉 Uporabite Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Omogoča vam:

- 🔢 Določiti **število uporabnikov**
- ⚙️ Izbrati **funkcije agenta** (utemeljitev, dejanja, tokovi, pomnilnik)
- 📈 Oceniti **skupno število sporočil na agenta na mesec**
- 🧠 Optimizirati zasnovo in se izogniti nepričakovanim stroškom

!!! tip
    ✅ Uporabite ga zgodaj — in ponovno po izdelavi — za primerjavo pričakovane in dejanske porabe.

---

## 💼 Vzorec scenarija

**Okolje**: Agent za pomoč IT z utemeljitvijo + enim Power Automate tokom  
**Seje**: 5 uporabniških interakcij na sejo  
**Predpostavke**: utemeljitev (10 sporočil) + dejanje (5 sporočil) + 5 generativnih odgovorov (10 sporočil)  
**Skupaj**: ~25 sporočil na sejo  
**Obseg**: 500 sej/mesec = ~12.500 sporočil (½ paketa sporočil)

---

## 🧠 Nasveti za nadzor stroškov

- Spremljajte porabo prek Power Platform Admin Center
- Začnite v razvojnem/testnem okolju, preden greste v živo
- Onemogočite neuporabljena dejanja in konektorje
- Uporabite **licence Microsoft 365 Copilot**, kadar je to mogoče za interno uporabo
- Uporabite pakete sporočil, ko postane obseg predvidljiv
- Uporabite **Copilot Studio Usage Estimator**, da predvidite porabo

---

## 🏁 Misija zaključena

Zdaj razumete:

- Kako se poraba izračuna in obračuna
- Kdaj M365 Copilot pokriva porabo — in kdaj ne
- Kako predvideti in upravljati porabo sporočil

🎓 S tem znanjem ste pripravljeni napredovati in svoje agente **učinkovito in pametno** razporediti.

---

## 📚 Taktični viri

Več o licenciranju in obračunavanju v Copilot Studio

- 📄 [Licenciranje in cene sporočil Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Vodnik za licenciranje Power Platform (julij 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Upravljanje sporočil in spremljanje zmogljivosti](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analitika" />

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.