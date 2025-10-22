<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-22T00:06:33+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "lt"
}
-->
# 🕵️‍♂️ Misija 04: Agentų instrukcijų kūrimas

--8<-- "disclaimer.md"

## 🕵️‍♂️ SLAPTAŽODIS: `OPERACIJA SLAPTA DIREKTYVA`

> **⏱️ Operacijos laiko langas:** `~45 minutės`

## 🎯 Misijos aprašymas

Agentai, jūsų kitas užduotis yra **Operacija Slapta Direktyva** - įvaldyti agentų komunikacijos ir kontrolės meną per tikslias instrukcijas ir aprašymus.

Jūsų misija, jei nuspręsite ją priimti, yra išmokti esminius įgūdžius, kaip rašyti aiškias, veiksmingas instrukcijas, kurios padės jūsų agentams priimti protingus sprendimus, naudoti tinkamus įrankius ir žinių šaltinius bei sklandžiai bendradarbiauti su kitais agentais. Taip pat įvaldysite aukštos kokybės aprašymų kūrimo meną, kuris padės agentams suprasti jų išteklius ir tiksliai reaguoti į vartotojų užklausas.

Laikykite tai savo pažangiu mokymu apie agentų psichologiją ir elgesio modifikavimą. Kaip ir lauko operatyvininkui reikia aiškių misijos parametrų, kad pasisektų, jūsų dirbtinio intelekto agentams reikia meistriškai parengtų instrukcijų, kad jie veiktų aiškiai, tiksliai ir pateiktų vertingą informaciją realiame pasaulyje.

---

## 🔎 Tikslai

Atlikę šią misiją, jūs:

- **Instrukcijų meistriškumas**: Suprasite agentų instrukcijų rašymo meną ir mokslą Copilot Studio
- **Strateginis vadovavimas**: Išmoksite nukreipti agentus naudoti įrankius, žinių šaltinius ir bendradarbiauti su kitais agentais
- **Operacinis aiškumas**: Užtikrinsite, kad jūsų agentai veiktų tiksliai, skaidriai ir efektyviai

---

## 📝 Agentų instrukcijų rašymas

Efektyvių agentų instrukcijų rašymas yra raktas į sėkmingą agentų elgesį. Instrukcijos naudojamos agentams:

- Nuspręsti, kurį įrankį, temą ar žinių šaltinį naudoti vartotojo užklausai ar autonominiam veiksmui
- Užpildyti įrankių įvestis pagal turimą kontekstą
- Generuoti atsakymą galutiniam vartotojui

### Kaip veikia instrukcijos

Instrukcijos turi būti pagrįstos įrankiais, temomis ir žinių šaltiniais, sukonfigūruotais jūsų agentui. Agentai negali veikti pagal instrukcijas, susijusias su ištekliais, kurių jie neturi. Pavyzdžiui, jei nurodote savo agentui ieškoti svetainės DUK, turite pridėti tą DUK kaip žinių šaltinį.

Galite nurodyti konkrečius įrankius, temas, kintamuosius ar Power Fx išraiškas naudodami `/` savo instrukcijose. Tai padeda agentui tiksliai žinoti, ką naudoti ir kada.

### Ką įtraukti į instrukcijas

- Pridėkite instrukcijas tais atvejais, kai norite nukreipti agento pasirinkimus, ypač kai gali kilti dviprasmybių.
- Naudokite instrukcijas, kad nustatytumėte ribas, pvz., apribotumėte temas ar nurodytumėte atsakymų formatus.
- Pateikite užuominas, kaip užpildyti įrankių įvestis, pvz., "Naudokite el. pašto adresą iš kontaktų lauko, kai padedate vartotojui parengti el. laišką."
- Nurodykite, kaip turėtų būti formatuojami atsakymai, pvz., "Visada pateikite atsakymus apie užsakymo būseną lentelės formatu."
- Naudokite apribojimus, kad ribotumėte agento veiksmus, pvz., "Atsakykite tik į užklausas apie darbuotojų naudą."

### Praktiniai pavyzdžiai

- "Naudokite DUK dokumentus tik tuo atveju, jei klausimas nesusijęs su Darbo valandomis, Susitikimais ar Sąskaitomis."
- "Naudokite bilietų kūrimo temą tik bilietų kūrimui; kitoms užklausoms, susijusioms su problemų sprendimu, naudokite trikčių šalinimo temą."
- "Visada pateikite atsakymus apie užsakymo būseną lentelės formatu."

### Testavimas ir tobulinimas

- Po instrukcijų redagavimo naudokite testavimo langą, kad patikrintumėte agento elgesį.
- Atnaujinkite ir publikuokite pakeitimus, kai reikia.

### Pažangus vadovavimas

- Numeruokite arba naudokite sąrašus savo instrukcijoms ir nurodykite, kad jos turi būti vykdomos iš eilės.
- Naudokite markdown formatavimą, kad būtų lengviau skaityti ir generatyvus DI galėtų apdoroti jūsų instrukcijas.
- Jei norite, kad jūsų agentas būtų labai konkretus, apsvarstykite galimybę sukurti temą tam naudojimo atvejui.
- Naudokite tikslius įrankių ir temų pavadinimus instrukcijose, kad išvengtumėte painiavos.

### Saugumas ir moderavimas

- Apribokite, kokius įrankius agentas turėtų naudoti, kai nurodomi žinių šaltiniai.
- Apribokite, kokius parametrus turėtų naudoti įrankiai (pvz., siųsti el. laiškus tik nurodytam asmenų sąrašui).
- Naudokite instrukcijas, kad apsaugotumėte nuo nepageidaujamo elgesio ar turinio filtravimo problemų.

---

## ✍️ Įrankių, temų ir agentų aprašymų kūrimas

Aukštos kokybės aprašymai yra būtini generatyviai orkestracijai. Jūsų agentas naudoja šiuos aprašymus, kad pasirinktų tinkamus įrankius, temas ir agentus, reaguodamas į vartotojų užklausas ir veiksmus. Laikykitės šių geriausių praktikų:

- **Naudokite paprastą, tiesioginę kalbą**: Venkite žargono, slengo ar pernelyg techninių terminų. Rašykite aktyviu balsu ir esamuoju laiku.
- **Būkite konkretūs ir aktualūs**: Įtraukite raktinius žodžius, susijusius su funkcionalumu ir vartotojo ketinimu. Užtikrinkite, kad aprašymai aiškiai atskirtų panašius įrankius ar temas, kad išvengtumėte dviprasmybių.
- **Laikykite trumpus ir informatyvius**: Apribokite aprašymus iki vieno ar dviejų sakinių. Apibendrinkite, ką įrankis, tema ar agentas daro ir kaip tai naudinga vartotojui.
- **Naudokite unikalius, aprašomuosius pavadinimus**: Venkite bendrinių pavadinimų. Pavyzdžiui, naudokite "Rytojaus orų prognozė" vietoj tiesiog "Oras".
- **Išvardykite veiksmus ar svarstymus**: Naudokite sąrašus aiškumui, kai aprašote kelias funkcijas ar veiksmus.
- **Testuokite dėl persidengimo**: Jei kelios temos turi panašius aprašymus, jūsų agentas gali jas visas įtraukti. Testuokite ir koreguokite, kad išvengtumėte persidengimo.

!!! example "Geri ir blogi aprašymų pavyzdžiai"
    **Geras:** Ši tema teikia orų informaciją bet kuriai pasaulio vietai kitai dienai. Ji pateikia temperatūrą. Ji negauna dabartinių šiandienos orų.
    **Blogas:** Šis įrankis gali atsakyti į klausimus. *(Per daug neaišku)*

---

## 🛠️ Geriausios instrukcijų ir aprašymų praktikos

Kad jūsų instrukcijos ir aprašymai būtų tikrai veiksmingi, laikykitės šių principų:

- Naudokite aktyvų balsą ir esamąjį laiką (pvz., "Šis įrankis teikia orų informaciją").
- Venkite žargono, slengo ar nereikalingų techninių terminų, nebent tai būtina auditorijai.
- Naudokite sąrašus, kad atskirtumėte veiksmus, funkcijas ar svarstymus.
- Įtraukite raktinius žodžius, atitinkančius vartotojo ketinimą ir įrankio ar temos funkcionalumą.
- Užtikrinkite aiškius pavadinimus ir aprašymus panašiems ištekliams, kad išvengtumėte painiavos ir persidengimo.

---

## 🗂️ Instrukcijų struktūros pavyzdys

Rašydami instrukcijas, apsvarstykite šią struktūrą aiškumui ir išsamumui:

1. **Apžvalga**: Trumpai aprašykite agento misiją ir vaidmenį
1. **Proceso žingsniai**: Išvardykite pagrindinius žingsnius, kuriuos agentas turėtų atlikti
1. **Bendradarbiavimo taškai**: Nurodykite, kada kreiptis į kitus agentus ar naudoti konkrečius įrankius
1. **Saugumas ir moderavimas**: Įtraukite bet kokius atitikties ar saugumo reikalavimus
1. **Grįžtamojo ryšio ciklas**: Nurodykite, kaip agentas turėtų rinkti grįžtamąjį ryšį ar eskaluoti problemas

---

## 🧪 Laboratorija: Agentų instrukcijų kūrimas

*Laboratorijos turinys netrukus...*

---

## 🎉 Misija baigta

Misija 04 baigta! Dabar jūs turite:

✅ **Instrukcijų meistriškumas**: Išmokote rašyti aiškias, veiksmingas agentų instrukcijas  
✅ **Strateginis vadovavimas**: Nukreipėte agentus naudoti įrankius ir efektyviai bendradarbiauti  
✅ **Operacinis aiškumas**: Užtikrinote, kad agentai veiktų tiksliai ir skaidriai

Toliau [Misija 05](../05-agent-responses/README.md): Agentų atsakymų pritaikymas maksimaliam poveikiui.

---

## 📚 Taktiniai ištekliai

📖 [Microsoft Copilot Studio - Instrukcijų kūrimas](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Generatyvaus režimo gairės](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus aiškinimus, atsiradusius naudojant šį vertimą.