<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-21T00:04:03+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "hr"
}
-->
# 🚨 Misija 12: Razumijevanje licenciranja

## 🕵️‍♂️ KODNO IME: `OPERACIJA ZNAJ ŠTO DUGUJEŠ`

> **⏱️ Vrijeme trajanja operacije:** `~15 minuta`

## 🎯 Kratak opis misije

Dobrodošli, regrute. Prije nego što pošaljete svoje agente na teren, morate znati **kako se korištenje mjeri, licencira i naplaćuje**. Ova misija objašnjava model naplate temeljen na porukama, što uključuju Microsoft 365 Copilot licence i kako planirati pomoću procjenitelja.

---

## 🎯 Cilj: Razumjeti model temeljen na porukama

Copilot Studio ne naplaćuje po korisniku ili po funkciji—naplaćuje se na temelju **broja poruka koje vaši agenti koriste**. "Poruka" je interakcija između vašeg agenta i korisnika (ili sustava).

- 💬 Svaka interakcija korisnika s vašim agentom računa se kao najmanje **1 poruka**
- 🔄 Složenije interakcije (poput uzemljenja, generativne AI ili tokova) troše **više poruka**
- 💼 Poruke plaćate putem **prepaid paketa** ili **plaćanja po korištenju (PAYGO)**

---

## Opcije licenciranja

### 1. **Copilot Studio paketi poruka**

- Prepaid opcija: **25,000 poruka/mjesečno za $200**
- Najbolje za predvidivo korištenje — kapacitet se dijeli unutar tenanta

### 2. **Plaćanje po korištenju (PAYGO)**

- Postpaid opcija: **$0.01 po poruci**
- Bez unaprijed obveze; korištenje se naplaćuje na kraju mjeseca putem Azurea

---

## Što ako imate M365 Copilot licence?

Ako vaš tim ima **Microsoft 365 Copilot licence**, vaši agenti **mogu raditi bez dodatne naplate za ključne scenarije**:

- Klasični odgovori, generativni odgovori, poruke uzemljene na grafu i osnovne radnje agenta su **bez naplate** za autentificirane M365 Copilot korisnike u aplikacijama poput Teamsa i Outlooka  
- Međutim: ako omogućite napredne značajke poput autonomnih okidača, tokova agenta izvan osnovnih radnji ili koristite vanjske kanale/API-je, te **poruke se naplaćuju**

| Scenarij                                    | Dodatne poruke naplaćene?                     |
|---------------------------------------------|-----------------------------------------------|
| M365 Copilot korisnik postavlja pitanje agentu u Teamsu | ❌ Nije naplaćeno                              |
| Agent poziva vanjski API ili tok            | ✅ Naplaćeno (5 + poruka)                      |
| Agent koristi autonomni okidač ili uzemljenje | ✅ Naplaćeno                                   |

---

## 🧮 Planirajte precizno: Koristite procjenitelj

Prije nego što pokrenete svog agenta, koristite naš **Copilot Studio procjenitelj korištenja** za predviđanje potrošnje poruka u realnim scenarijima:

[👉 Koristite Copilot Studio procjenitelj korištenja](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Omogućuje vam:

- 🔢 Odrediti broj **korisnika**
- ⚙️ Odabrati **značajke agenta** (uzemljenje, radnje, tokovi, memorija)
- 📈 Procijeniti **ukupan broj poruka po agentu mjesečno**
- 🧠 Optimizirati dizajn i izbjeći iznenađenja u naplati

!!! tip
    ✅ Koristite ga rano — i ponovno nakon izrade — za usporedbu očekivanog i stvarnog korištenja.

---

## 💼 Primjer scenarija

**Okruženje**: IT Help Desk agent s uzemljenjem + jedan Power Automate tok  
**Sesije**: 5 korisničkih interakcija po sesiji  
**Pretpostavke**: uzemljenje (10 poruka) + radnja (5 poruka) + 5 generativnih odgovora (10 poruka)  
**Ukupno**: ~25 poruka po sesiji  
**Skala**: 500 sesija/mjesečno = ~12,500 poruka (½ paketa poruka)

---

## 🧠 Savjeti za kontrolu troškova

- Pratite korištenje putem Power Platform Admin Center
- Započnite u razvojnom/testnom okruženju prije pokretanja uživo
- Onemogućite neiskorištene radnje i konektore
- Koristite **Microsoft 365 Copilot licence** kad god je moguće za internu upotrebu
- Koristite pakete poruka kad korištenje postane predvidivo
- Koristite **Copilot Studio procjenitelj korištenja** za predviđanje potrošnje

---

## 🏁 Misija završena

Sada razumijete:

- Kako se korištenje računa i naplaćuje
- Kada M365 Copilot pokriva korištenje — i kada ne
- Kako predvidjeti i upravljati potrošnjom poruka

🎓 S ovim znanjem, spremni ste napredovati i implementirati svoje agente **učinkovito i pametno**

---

## 📚 Taktički resursi

Saznajte više o licenciranju i naplati u Copilot Studiju

- 📄 [Licenciranje i cijene poruka u Copilot Studiju](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Vodič za licenciranje Power Platforme (srpanj 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Upravljanje porukama i praćenje kapaciteta](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analitika" />

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.