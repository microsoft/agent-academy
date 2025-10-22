<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-22T01:00:42+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "lt"
}
-->
# 🚨 Misija 12: Licencijavimo supratimas

## 🕵️‍♂️ SLAPTAŽODIS: `OPERACIJA ŽINOK, KĄ SKOLINGAS`

> **⏱️ Operacijos laiko langas:** `~15 minučių`

## 🎯 Misijos aprašymas

Sveiki atvykę, naujokai. Prieš išsiųsdami savo agentus į lauką, turite suprasti, **kaip naudojimas yra matuojamas, licencijuojamas ir apmokestinamas**. Ši misija paaiškina pranešimų pagrindu veikiančio apmokestinimo modelį, kas įtraukta į Microsoft 365 Copilot licencijas, ir kaip planuoti naudojant skaičiuoklę.

---

## 🎯 Tikslas: Suprasti pranešimų pagrindu veikiančio modelio esmę

Copilot Studio neapmokestina pagal vartotojų skaičių ar funkcijas – mokestis skaičiuojamas pagal tai, **kiek pranešimų jūsų agentai sunaudoja**. „Pranešimas“ – tai sąveika tarp jūsų agento ir vartotojo (arba sistemos).

- 💬 Kiekviena vartotojo sąveika su jūsų agentu skaičiuojama kaip bent **1 pranešimas**
- 🔄 Sudėtingos sąveikos (pvz., pagrindimas, generatyvus AI ar srautai) sunaudoja **kelis pranešimus**
- 💼 Už pranešimus mokate arba per **išankstinio apmokėjimo paketus**, arba **mokėdami už naudojimą (PAYGO)**

---

## Licencijavimo galimybės

### 1. **Copilot Studio pranešimų paketai**

- Išankstinis apmokėjimas: **25,000 pranešimų/mėn už $200**
- Geriausia numatomam naudojimui – talpa dalinama visame nuomininke

### 2. **Mokėjimas už naudojimą (PAYGO)**

- Po apmokėjimo: **$0.01 už pranešimą**
- Nėra išankstinio įsipareigojimo; naudojimas apmokestinamas mėnesio pabaigoje per Azure

---

## Ką daryti, jei turite M365 Copilot licencijas?

Jei jūsų komanda turi **Microsoft 365 Copilot licencijas**, jūsų agentai **gali veikti be papildomo apmokestinimo pagrindinėse situacijose**:

- Klasikiniai atsakymai, generatyvūs atsakymai, grafu pagrįsti pranešimai ir pagrindiniai agento veiksmai yra **neapmokestinami** autentifikuotiems M365 Copilot vartotojams programose, tokiose kaip Teams ir Outlook  
- Tačiau: jei įjungiate pažangias funkcijas, pvz., autonominius trigerius, agento srautus, viršijančius pagrindinius veiksmus, arba naudojate išorinius kanalus/API, tie **sunaudoja apmokestinamus pranešimus**

| Scenarijus                                   | Papildomi apmokestinami pranešimai?          |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot vartotojas klausia agento Teams | ❌ Neapmokestinama                           |
| Agentas kviečia išorinį API ar srautą       | ✅ Apmokestinama (5 + pranešimai)            |
| Agentas naudoja autonominį trigerį ar pagrindimą | ✅ Apmokestinama                           |

---

## 🧮 Planuokite tiksliai: naudokite skaičiuoklę

Prieš paleisdami savo agentą, naudokite mūsų **Copilot Studio naudojimo skaičiuoklę**, kad prognozuotumėte pranešimų sunaudojimą realistiškose situacijose:

[👉 Naudokite Copilot Studio naudojimo skaičiuoklę](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Ji leidžia:

- 🔢 Nurodyti savo **vartotojų skaičių**
- ⚙️ Pasirinkti **agentų funkcijas** (pagrindimas, veiksmai, srautai, atmintis)
- 📈 Prognozuoti **bendrą pranešimų skaičių per agentą per mėnesį**
- 🧠 Optimizuoti dizainą ir išvengti netikėtų sąskaitų

!!! tip
    ✅ Naudokite anksti – ir dar kartą po kūrimo – kad palygintumėte numatomą ir faktinį naudojimą.

---

## 💼 Pavyzdinis scenarijus

**Aplinka**: IT pagalbos tarnybos agentas su pagrindimu + vienu Power Automate srautu  
**Sesijos**: 5 vartotojo posūkiai per sesiją  
**Prielaidos**: pagrindimas (10 pranešimų) + veiksmas (5 pranešimai) + 5 generatyvūs atsakymai (10 pranešimų)  
**Iš viso**: ~25 pranešimai per sesiją  
**Mastelis**: 500 sesijų/mėn = ~12,500 pranešimų (½ pranešimų paketo)

---

## 🧠 Patarimai, kaip kontroliuoti išlaidas

- Stebėkite naudojimą per Power Platform administravimo centrą
- Pradėkite nuo kūrimo/testavimo prieš paleidžiant
- Išjunkite nenaudojamus veiksmus ir jungtis
- Naudokite **Microsoft 365 Copilot licencijas**, kai įmanoma, vidiniam naudojimui
- Naudokite pranešimų paketus, kai mastelis tampa numatomas
- Naudokite **Copilot Studio naudojimo skaičiuoklę**, kad prognozuotumėte naudojimą

---

## 🏁 Misija baigta

Dabar jūs suprantate:

- Kaip skaičiuojamas ir apmokestinamas naudojimas
- Kada M365 Copilot padengia naudojimą – ir kada ne
- Kaip prognozuoti ir valdyti savo pranešimų sunaudojimą

🎓 Su šiuo žinojimu, jūs pasiruošę judėti į priekį ir efektyviai bei protingai diegti savo agentus

---

## 📚 Taktiniai ištekliai

Sužinokite daugiau apie licencijavimą ir apmokestinimą Copilot Studio

- 📄 [Copilot Studio licencijavimas ir pranešimų tarifai](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform licencijavimo vadovas (2025 m. liepa)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Pranešimų valdymas ir talpos stebėjimas](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analitika" />

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus interpretavimus, atsiradusius naudojant šį vertimą.