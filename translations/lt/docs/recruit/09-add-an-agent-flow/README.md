<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-22T00:27:46+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "lt"
}
-->
# 🚨 Misija 09: Pridėkite agento srautą prie savo Temos automatizavimui

## 🕵️‍♂️ SLAPTAŽODIS: `OPERACIJA AUTOMATIZACIJOS GALIA`

> **⏱️ Operacijos laiko langas:** `~30 minučių`  

🎥 **Žiūrėkite vaizdo įrašą**

[![Agentų srauto vaizdo įrašo miniatiūra](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.lt.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Žiūrėkite vaizdo įrašą YouTube")

## 🎯 Misijos aprašymas

Jūsų agentas dabar gali bendrauti su vartotojais ir teikti informaciją, tačiau tikrasis veiklos efektyvumas reikalauja, kad jūsų agentas imtųsi veiksmų. Ši misija pavers jūsų pokalbių agentą automatizacijos galia, aprūpindama jį agentų srautais.

Misijos pabaigoje sukursite pilną įrenginio užklausos automatizaciją, kuri surinks vartotojo įvestį per adaptyvią kortelę, gaus duomenis iš SharePoint, siųs pranešimus vadovams el. paštu ir užtikrins sklandų vartotojo grįžtamąjį ryšį - visa tai bus koordinuojama jūsų agento per intelektualią darbo srautų automatizaciją.

## 🔎 Tikslai

Šios misijos metu išmoksite:

1. Suprasti, kas yra agentų srautai ir kaip jie skiriasi nuo Power Automate debesų srautų automatizacijai
1. Sužinoti pagrindines funkcijas, kurios daro agentų srautus galingus, įskaitant AI veiksmus ir natūralios kalbos kūrimą
1. Ištyrinėti agentų srauto dizainerį ir kaip naudoti išraiškas dinamiškam duomenų apdorojimui
1. Sukurti pilną įrenginio užklausos automatizaciją, integruojančią SharePoint duomenis ir el. pašto pranešimus

## 🤔 Kas yra agentų srautas?

Agentų srautai yra galingas būdas automatizuoti pasikartojančias užduotis ir integruoti jūsų programas bei paslaugas. Galvokite apie juos kaip apie struktūrizuotus, žingsnis po žingsnio darbo srautus, kuriuos jūsų agentas gali vykdyti, kad automatizuotų užduotis arba prisijungtų prie kitų programų ir paslaugų. Jie yra tarsi mini darbo srautai, padedantys jūsų agentui atlikti tokius veiksmus kaip pranešimų siuntimas, įrašų atnaujinimas ar įvykių reagavimas.

Skirtingai nuo autonominių agentų, kurie naudoja AI sprendimams priimti realiu laiku, agentų srautai yra **deterministiniai darbo srautai** - tai reiškia, kad jie visada seka tą patį kelią, užtikrindami nuoseklius ir patikimus rezultatus.

Paprasčiau tariant:

- Jie padeda jūsų agentui _daryti dalykus_, o ne tik _kalbėti_ su vartotojais.
- Jie yra pakartotinai naudojami įvairiose temose ir agentuose, ir gali būti paleisti vartotojo pranešimais, įvykiais ar kitomis programomis bei paslaugomis.

## 🙋🏽 Taip, bet kuo jie skiriasi nuo Power Automate debesų srautų?

Tiek agentų srautai, tiek Power Automate debesų srautai padeda automatizuoti užduotis. Jie sukurti skirtingiems tikslams ir veikia skirtingais būdais.

### 🤖 Agentų srautai Copilot Studio

**Kam jie skirti:**

- Sukurti pokalbių ir autonominiams agentams (per agentų instrukcijas) Copilot Studio.
- Orientuoti į išmanią, AI pagrįstą automatizaciją, kuri sąveikauja su verslo sistemomis.

**Kodėl jie naudingi:**

- Lengva kurti ir valdyti tiesiogiai Copilot Studio.
- Puikiai tinka automatizuoti užduotis, vykstančias _pokalbio metu_ su vartotojais, pvz., pateikiant prašymą dėl atostogų.
- Nereikia atskiros Power Automate licencijos, nes apmokestinimas grindžiamas naudojimu Copilot Studio. Tai gali sutaupyti laiko ir išlaidų įmonių komandoms.

**Ribojimai:**

- Jų negalima dalintis, kopijuoti ar priskirti bendrasavininkiams.
- Agentų srautai matomi ir naudojami tik Copilot Studio.
- Šiuo metu agentų įvykių paleidikliai gali būti redaguojami Power Automate kūrėjo portale.

### ☁️ Power Automate debesų srautai

**Kam jie skirti:**

- Sukurti bendros paskirties automatizacijai įvairiose programose ir paslaugose.
- Gali veikti savarankiškai arba kartu su agentų srautais.

**Kodėl jie naudingi:**

- Siūlo platų jungčių asortimentą.
- Idealiai tinka automatizuoti procesus už agentų ribų.
- Gali būti dalinami, pakartotinai naudojami ir valdomi komandoje.

**Reikalavimai:**

- Jums reikia Power Automate licencijos, kad galėtumėte juos naudoti.

### 📗 Santrauka

| Naudokite tai | Kai norite |
| :- | :- |
| Agentų srautai | Automatizuoti užduotis agento viduje, naudoti AI ir viską laikyti Copilot Studio |  
| Power Automate debesų srautai | Automatizuoti programose ir paslaugose arba kurti darbo srautus už agentų ribų |

## 👍🏻 Kodėl verta naudoti agentų srautus

Agentų srautai visada seka fiksuotą kelią - jie daro tą patį kiekvieną kartą, kai gauna tą pačią įvestį.

Tai daro juos:

- **Patikimus** - galite pasitikėti, kad jie elgsis taip pat kiekvieną kartą.
- **Nuspėjamus** - žinote, kokio rezultato tikėtis, kai srautas vykdomas.
- **Taisyklėmis pagrįstus** - jie seka jūsų apibrėžtus žingsnius.

Kiti privalumai:

- **Automatizacija** - leidžia jūsų agentui tvarkyti pasikartojančias užduotis, pvz., pateikti formas ar siųsti pranešimus.
- **Sujungimas** - prisijungia prie daugiau nei 1400 jungčių, tokių kaip ServiceNow, SharePoint, Salesforce. Taip pat galite sukurti savo pasirinktą jungtį.
- **Glaudi integracija** - agentų srautai yra agento logikos dalis, jie paleidžiami tiesiogiai vartotojo pranešimais ar veiksmais pokalbyje.
- **Mastelio keitimas** - srautus galima naudoti keliuose agentuose ar scenarijuose.
- **Be kodo arba mažai kodo** - galite kurti srautus naudodami natūralią kalbą arba vizualų dizainerį.
- **Viskas vienoje platformoje** - galite kurti, testuoti ir diegti agentų srautus vienoje vietoje - Copilot Studio. Nereikia perjungti platformų.

## 🏄🏻‍♂️ Kaip agentų srautai pagerina jūsų agentą?

Agentų srautai išplečia tai, ką jūsų agentas gali daryti, ne tik "kalbėti" su vartotojais. Jie leidžia jam imtis veiksmų ir sąveikauti su sistemomis.

Tarkime, dirbate finansų skyriuje ir gaunate daug sąskaitų iš tiekėjų. Paprastai kažkas turi perskaityti kiekvieną sąskaitą, ištraukti svarbią informaciją - sumą, datą, kas ją išsiuntė, ir patikrinti, ar viskas atitinka jūsų įrašus. Tada ją nusiųsti tinkamam asmeniui patvirtinimui. Tai užima laiko ir pastangų.

Naudodami agentų srautus Copilot Studio, galite automatizuoti šį procesą. Kai tik gaunama sąskaita, agentas:

1. Perskaito dokumentą naudodamas intelektualų dokumentų apdorojimą, kad rastų pagrindinę informaciją.
1. Patikrina duomenis pagal jūsų įmonės duomenis, kad įsitikintų, jog viskas atrodo teisingai.
1. Nukreipia ją patvirtinimui tinkamam asmeniui (-ims).

Tai taupo laiką, mažina klaidų skaičių ir daro visą procesą daug sklandesnį.

### Pagalvokite apie tai taip

- **Agentai**: išmanūs sprendimų priėmėjai
- **Agentų srautai**: patikimi vykdytojai

### Kodėl tai svarbu

- Gaunate geriausią iš abiejų pasaulių: patikimą automatizaciją ir lankstų AI.
- Lengva kurti ir atnaujinti srautus, kai keičiasi jūsų verslo poreikiai.
- Galite išplėsti automatizaciją visoje komandoje.

## 🔌 Pagrindinės funkcijos, kurios daro agentų srautus galingus

1. **Natūralios kalbos kūrimas**
    - Galite aprašyti, ką norite, kad srautas darytų, paprasta anglų kalba.
    - Copilot supranta jūsų ketinimą ir sukuria srautą už jus.
    - Nereikia rašyti kodo - tiesiog paaiškinkite savo idėją.

1. **AI veiksmai**

    Naudokite AI:

    - Skaityti ir suprasti dokumentus ar vaizdus.
    - Apibendrinti ilgą turinį į trumpus, naudingus atsakymus.
    - Pateikti išmanias rekomendacijas ar sprendimus.

1. **Generatyvūs veiksmai**
    - Leidžia srautui prisitaikyti realiu laiku.
    - Agentas gali planuoti ir koreguoti veiksmus pagal besikeičiančią informaciją.

1. **Integracijos veiksmai**
    - Prijunkite savo srautą prie kitų įrankių, tokių kaip Outlook, Microsoft Teams, ServiceNow, SharePoint ir kitų programų bei paslaugų, naudodami daugiau nei 1400 įmontuotų jungčių arba savo pasirinktą jungtį.
    - Tai padeda jūsų agentui dirbti su programomis, kurias jau naudoja jūsų komanda.

1. **Žmogus procese**
    - Pridėkite patvirtinimo žingsnius, kur asmuo turi peržiūrėti ar patvirtinti kažką.
    - [Išplėstiniai patvirtinimai](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) palaiko priminimus, delegavimą ir daugiapakopius patvirtinimus.

## ⚙️ Kaip jie veikia

1. **Paleidimas**

    Įvykis pradeda srautą - pvz., vartotojas užduoda klausimą, paleidžia srautą iš temos, suplanuotas laikas arba įvykis kitoje sistemoje.

1. **Veiksmai**

    Tai yra žingsniai, kuriuos agentas atlieka toliau - siunčia el. laišką, kviečia API, atnaujina bilietą ServiceNow.

## 🧶 Kaip sukurti agentų srautą

1. **Natūrali kalba**: aprašykite, ką norite, kad agentas darytų, ir Copilot tai sukurs už jus.
1. **Dizainerio drobė**: vilkite ir numeskite veiksmus, sąlygas ir ciklus agentų srauto dizaineryje, kad sukurtumėte savo agentų srautą.

## 🎨 Kas yra agentų srauto dizaineris?

Tai vizualus įrankis Copilot Studio, kuris padeda kurti, redaguoti ir valdyti agentų srautus, teikiančius žingsnis po žingsnio instrukcijas, kurių agentas laikosi, kad atliktų užduotis. Jis sukurtas taip, kad būtų paprastas naudoti, net jei esate naujokas agentų srautuose.

### Pagrindinės agentų srauto dizainerio funkcijos

1. **Vizualinė drobė**
    - Galite matyti visą savo srautą, išdėstytą kaip diagramą.
    - Lengvai priartinkite/atitolinkite, pritaikykite vaizdą arba naudokite mini žemėlapį dideliems srautams naršyti.

1. **Pridėti ir pašalinti veiksmus**
    - Spustelėkite _pliuso (+)_ mygtuką, kad pridėtumėte naują veiksmą, pvz., siųsti pranešimą arba atnaujinti elementą SharePoint sąraše.
    - Galite ieškoti veiksmų iš jungčių ir konfigūruoti juos per jų nustatymus.
    - Norėdami pašalinti veiksmą, spustelėkite _tris taškus (⋮)_ ir pasirinkite _Ištrinti_.

1. **Patikrinkite parametrus**
    - Spustelėkite bet kurį veiksmą, kad peržiūrėtumėte arba redaguotumėte jo nustatymus, vadinamus _parametrais_.
    - Galite rankiniu būdu įvesti reikšmes arba naudoti _išraiškas_, kad jos būtų dinamiškos.

1. **Versijų istorija**
    - Kiekvieną kartą išsaugant srautą, įrašoma versija.
    - Galite grįžti ir peržiūrėti arba atkurti ankstesnę versiją, jei reikia.

1. **Klaidų tikrinimas**
    - _Srauto tikrintuvas_ parodo visas klaidas.
    - Visos klaidos turi būti išspręstos prieš publikuojant srautą.

1. **Publikavimas ir testavimas**
    - Kai jūsų srautas be klaidų, publikuokite, kad jis būtų aktyvus.
    - Naudokite _Testavimo_ funkciją, kad paleistumėte savo srautą rankiniu būdu arba automatiškai ir patikrintumėte, ar jis veikia kaip tikėtasi.

### Kodėl verta naudoti agentų srauto dizainerį?

- **Vizualus ir intuityvus** - galite kurti srautus vilkdami ir spustelėdami.
- **Saugus eksperimentavimas** - versijų istorija leidžia atšaukti pakeitimus.
- **Integruotas testavimas** - padeda įsitikinti, kad viskas veikia prieš paleidžiant.

## 🔤 Minėjote _išraiškas_ - kas yra išraiškos?

Išraiškos yra mažos formulės arba komandos, kurios padeda jūsų agentų srautui dirbti su duomenimis. Jas naudojate norėdami apskaičiuoti reikšmes, formatuoti tekstą, priimti sprendimus arba išgauti konkrečią informaciją iš įvesties.

### Kodėl verta naudoti išraiškas?

Išraiškos leidžia:

- **Pritaikyti duomenų apdorojimą** - sujungti vardus, formatuoti datas.
- **Priimti sprendimus** - jei reikšmė didesnė nei 10, atlikti veiksmą.
- **Transformuoti duomenis** - pakeisti tekstą į mažąsias raides, išgauti dalį eilutės.
- **Automatizuoti logiką** - be pilno kodo rašymo.

### Kaip atrodo išraiškos?

Išraiškos naudoja funkcijas. Pasiskolinsiu paaiškinimą apie tai, kas yra funkcijos, iš buvusio Microsoft MVP, Jerry Weinstock.

!!! citata
    Funkcijos yra įmontuota logika, skirta transformuoti jūsų duomenis per paprastas arba sudėtingas operacijas jūsų išraiškoje.

Funkcijos leidžia kurti išraiškas, nereikalaujant rašyti kodo.

Man patinka apibūdinti, kad funkcija agentų srautuose yra panaši į Excel funkcijas. Galite atlikti operaciją su duomenimis, kad juos transformuotumėte į norimą rezultatą. Kurdamas formulę Excel, pasirenkate įvesties reikšmę iš lentelės langelių arba diapazono, o tada taikote funkcijas, kad manipuliuotumėte duomenų rezultatu. Pavyzdys yra naudojant `COUNT` funkciją, kad nustatytumėte langelių, kuriuose yra skaičiai, skaičių iš diapazono.

Agentų srautuose, vietoj duomenų iš lentelės langelių, jūs nurodote duomenų išvestis iš paleidiklio arba veiksmų, kurdami savo išraiškas.
- Pavyzdys: `addDays(utcNow(), 7)` rezultatas yra 7 dienos nuo dabar.

- `formatDateTime()` - Formatuoja datą į lengvai skaitomą tekstą.
      - Pavyzdys: Pirmadienis, liepos 7, 2025

#### ✅ Loginės funkcijos

- `if()` - Vykdo vieną reikšmę, jei sąlyga teisinga, kitą - jei klaidinga.
      - Pavyzdys: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - Tikrina, ar dvi reikšmės yra vienodos.

- `and()`, `or()`, `not()` - Kombinuoja kelias sąlygas.

#### 🪣 Kitos naudingos funkcijos

- `coalesce()` - Grąžina pirmąją ne tuščią reikšmę.
      - Naudinga kaip atsarginė/numatytoji reikšmė.

- `guid()` - Generuoja unikalų ID.
      - Naudinga sekimui ar registravimui.

- `length()` - Skaičiuoja, kiek simbolių ar elementų yra eilutėje ar masyve.

## ⭐ Geriausios praktikos

Štai keletas geriausių praktikų, kaip kurti agentų srautus Copilot Studio.

1. **Pradėkite nuo paprasto ir palaipsniui plėskite**

    - Pradėkite nuo mažos, aiškios užduoties, pvz., pranešimo siuntimo.
    - Pridėkite daugiau žingsnių po to, kai išbandysite pagrindinę automatizaciją.

1. **Naudokite aiškius ir aprašomuosius veiksmų pavadinimus**

    - Kiekvieną žingsnį pavadinkite aiškiai, kad jūs ir jūsų komanda suprastumėte, ką jis daro.
    - Pavyzdys: vietoj numatyto pavadinimo „Atnaujinti elementą“ SharePoint jungties veiksmui, pervadinkite jį į tai, ką jis atnaujina, pvz., „Atnaujinti įrenginio būseną“.

1. **Patikrinkite klaidas prieš publikuodami**

    - Naudokite **srauto tikrintuvą**, kad rastumėte ir ištaisytumėte problemas.
    - Negalite publikuoti srautų, jei yra klaidų, todėl stenkitės jas išspręsti, kai tik jos atsiranda.

1. **Išbandykite savo srautą kruopščiai**

    - Vien tai, kad jis išsaugomas ir publikuojamas, dar nereiškia, kad jis veikia kaip tikėtasi.
    - Naudokite _Testavimo_ funkciją, kad paleistumėte savo srautą rankiniu būdu ar automatiškai ir patikrintumėte rezultatus.

1. **Naudokite versijų istoriją**

    - Dažnai išsaugokite savo srautą, kad prireikus galėtumėte grįžti prie ankstesnių versijų.
    - Ankstesnes versijas galite peržiūrėti ir atkurti naudodami _Versijų istorijos_ skydelį.

1. **Naudokite parametrus ir išraiškas protingai**

    - Konfigūruodami veiksmus, naudokite parametrus, kad jūsų srautas būtų dinamiškas.
    - Galite įvesti reikšmes rankiniu būdu arba naudoti išraiškas jų apskaičiavimui, arba derinti jas su veiksmų rezultatais, naudodami _dinaminio turinio_ parinkiklį.

1. **Ištrinkite nenaudojamus veiksmus**

    - Jei pridėjote veiksmą ir vėliau nusprendėte, kad jo nereikia, pašalinkite jį, kad jūsų srautas būtų tvarkingas.

## 🧪 Laboratorija 09 - Pridėkite agento srautą automatizavimui ir pagerinkite temų funkcionalumą

Dabar išmoksime, kaip pagerinti mūsų temą naudojant adaptacines korteles ir pažangias temų bei mazgų funkcijas.

- [9.1 Sukurti agento srautą](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Pridėti agento srautą prie temos](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Atnaujinti „Prašyti įrenginio“ temą su keliais mazgais, kad pagerintume vartotojo patirtį](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Išbandyti agentą naudojant kelis scenarijus](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Naudojimo atvejis

**Kaip** darbuotojų vadovas

**Noriu** gauti įrenginių prašymus

**Kad galėčiau** peržiūrėti darbuotojo prašomą įrenginį.

Pradėkime!

### Būtinos sąlygos

1. **SharePoint sąrašas**

    Naudosime **Įrenginiai** SharePoint sąrašą iš [Pamoka 00 - Kurso nustatymas - 3 žingsnis: Sukurti naują SharePoint svetainę](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Jei dar nesukūrėte **Įrenginiai** SharePoint sąrašo, grįžkite į [Pamoka 00 - Kurso nustatymas - 3 žingsnis: Sukurti naują SharePoint svetainę](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Contoso Pagalbos tarnybos agentas**

    Naudosime tą patį agentą, sukurtą anksčiau [Pamoka 06 - Sukurti pasirinktą agentą naudojant natūralią kalbą su Copilot ir susiejant jį su jūsų duomenimis](../06-create-agent-from-conversation/README.md).

### 9.1 Sukurti agento srautą

Šioje užduotyje sukursime agento srautą, kuris gauna SharePoint elemento informaciją apie pasirinktą įrenginį ir siunčia el. laišką vadovui su įrenginio detalėmis.

1. Temoje **Prašyti įrenginio** slinkite žemyn iki mazgo **Klausti su adaptacine kortele** ir pridėkite naują mazgą. Pasirinkite **Pridėti įrankį** ir **Pagrindinių įrankių** skiltyje iššokančiame lange pasirinkite **Naujas agento srautas**.

    ![Pridėti naują agento srautą](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.lt.png)

1. Atsidarys Agentų srautų **Dizaineris** su trigeriu ir veiksmu.

    - **Trigeris** - Kai agentas kviečia srautą
        - Tai paleis srautą iš Copilot Studio agento.

    - **Veiksmas** - Atsakyti agentui
        - Tai siunčia atsakymą, kuris gali turėti išvesties reikšmes, atgal į Copilot Studio agentą.

    Pasirinkite trigerį.

    ![Pasirinkti trigerį](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.lt.png)

1. Toliau pridėsime kelis įvesties parametrus agento srautui.

    - `DeviceSharePointId` - saugos SharePoint elemento ID reikšmę. Šis ID yra išvestis iš mazgo „Klausti su adaptacine kortele“, kur vartotojas pasirinko įrenginį.

    - `User` - tai bus vartotojo vardas, kuris bus paimtas iš sistemos kintamojo agento.

    - `AdditionalComments` - tai bus vartotojo įvestas komentaras, kuris yra išvestis iš mazgo „Klausti su adaptacine kortele“.

    Pirmiausia pridėsime `DeviceSharePointId` kaip įvestį trigeriui. Pasirinkite **+ Pridėti įvestį**.

    ![Pridėti įvestį](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.lt.png)

1. Įvesties tipo pasirinkime pasirinkite **Tekstas**.

    ![Pasirinkti Tekstas](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.lt.png)

1. Įveskite šį pavadinimą įvesties laukui.

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId įvestis](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.lt.png)

1. Dabar pridėsime antrą įvestį, `User`. Pakartokite tuos pačius veiksmus, pasirinkite **+ Pridėti įvestį** ir pasirinkite **Tekstas**.

    ![Pridėti įvestį](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.lt.png)

1. Įveskite šį pavadinimą įvesties laukui.

    ```text
    User
    ```

    ![User įvestis](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.lt.png)

1. Dabar pridėsime trečią įvestį, `AdditionalComments`. Pakartokite tuos pačius veiksmus, pasirinkite **+ Pridėti įvestį** ir pasirinkite **Tekstas**.

    ![Pridėti įvestį](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.lt.png)

1. Įveskite šį pavadinimą įvesties laukui.

    ```text
    AdditionalComments
    ```

    ![AdditionalComments įvestis](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.lt.png)

1. `AdditionalComments` įvesties laukui atnaujinsime, kad jis būtų pasirenkamas. Pasirinkite **tritaškio (...) piktogramą** ir pasirinkite **Padaryti lauką pasirenkamu**.

    ![Padaryti lauką pasirenkamu](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.lt.png)

1. Puikus darbas! Trigeris dabar sukonfigūruotas, tęskime. Pasirinkite **pliuso + piktogramą** po trigeriu, kad įterptumėte naują veiksmą.

    ![Pridėti veiksmą](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.lt.png)

1. Atsidarys **Veiksmų skydelis**, kuriame galite peržiūrėti veiksmus iš daugiau nei 1400 įmontuotų jungčių su Microsoft ir trečiųjų šalių paslaugomis. Paieškos lauke įveskite:

    ```text
    Get item
    ```

    Paieškos rezultatuose bus rodomas veiksmų sąrašas. Pasirinkite **Gauti elementą** veiksmą iš **SharePoint jungties**.

    ![Gauti elementą veiksmą](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.lt.png)

1. Dabar galime pradėti konfigūruoti **Gauti elementą** veiksmą.

    Pasirinkite **Tritaškio (...) piktogramą** veiksmui **Gauti elementą**.

    ![Pasirinkti tritaškį](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.lt.png)

1. Pasirinkite **Pervadinti**.

    ![Pasirinkti Pervadinti](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.lt.png)

1. Pervadinkite veiksmą į:

    ```text
    Get Device
    ```

    ![Pervadinti veiksmą](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.lt.png)

1. Lauke **Svetainės adresas** pasirinkite **Contoso IT SharePoint svetainės adresą**, sukurtą [Pamoka 00 - Kurso nustatymas - 3 žingsnis: Sukurti naują SharePoint svetainę](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Lauke **Sąrašo pavadinimas** pasirinkite **Įrenginiai** SharePoint sąrašą.

    ![Įvesties parametrai](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.lt.png)

1. Lauke **Id** pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

    ![Dinaminio turinio parinkiklis](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.lt.png)

1. Skydelio **Dinaminis turinys** skiltyje įveskite:

    ```text
    sharepoint
    ```

    Paieškos rezultatuose bus rodomi įvesties parametrai, atitinkantys paieškos reikšmę. Pasirinkite **DeviceSharePointId** parametrą iš trigerio.

    Tada pasirinkite **Pridėti**, kad pridėtumėte dinaminio turinio įvestį į **Id** parametrą veiksmui.

    ![Pasirinkti DeviceSharePointId įvestį](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.lt.png)

1. Dinaminio turinio įvestis iš trigerio dabar yra nurodyta **Id** parametre veiksmui. Toliau atnaujinsime vieną iš pažangių parametrų. Pasirinkite **Rodyti viską**, kad peržiūrėtumėte pažangius parametrus.

    ![Peržiūrėti pažangius parametrus](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.lt.png)

1. Parametras **Apriboti stulpelius pagal rodinį** bus rodomas ir pagal numatytuosius nustatymus nustatytas į **Naudoti visus stulpelius (Neriboti)**. Atnaujinsime šią reikšmę į rodinį, kad apribotume stulpelius, grąžinamus veiksmų atsakyme. Pasirinkite **Apriboti stulpelius pagal rodinį** parametrą, kad peržiūrėtumėte rodinių sąrašą.

    ![Pasirinkti parametrą](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.lt.png)

1. Pasirinkite **Visų elementų** rodinį.

    ![Pasirinkti Visų elementų rodinį](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.lt.png)

1. Pasirinkite **pliuso + piktogramą** po veiksmu _Gauti įrenginį_, kad įterptumėte naują veiksmą.

    ![Pridėti naują veiksmą](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.lt.png)

1. Paieškos lauke įveskite:

    ```text
    send an email
    ```

    Paieškos rezultatuose bus rodomas veiksmų sąrašas. Pasirinkite **Siųsti el. laišką (V2)** veiksmą iš **Office 365 Outlook jungties**.

    ![Siųsti el. laišką veiksmą](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.lt.png)

1. Toliau turime sukurti ryšį su jungties veiksmu. Pasirinkite **Prisijungti**.

    ![Sukurti ryšį](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.lt.png)

1. Pasirinkite savo prisijungimo vartotojo paskyrą.

    ![Pasirinkti vartotojo paskyrą](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.lt.png)

1. Pasirinkite **Leisti prieigą**. Ryšys dabar sukurtas.

    ![Pasirinkti leisti prieigą](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.lt.png)

1. Pervadinkite veiksmą į:

    ```text
    Send an email to manager
    ```

    Toliau apibrėžkime veiksmų įvesties parametrus.

    Lauke **Kam** įveskite savo el. pašto adresą. Paprastai tai būtų jūsų vadovas arba naudotume kitą veiksmą, kuris surastų jūsų vadovą pagal jūsų Entra ID profilį, tačiau šios pamokos tikslams pasirinkite save.

    Lauke **Tema** įveskite:

    ```text
    Request type: new device
    ```

    Lauke **Turinys** įveskite:

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Pervadinti veiksmą ir konfigūruoti įvestis](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.lt.png)

1. Toliau atnaujinsime **Turinys** įvesties parametrą, pridėdami nuorodas į dinaminio turinio įvestį iš **trigerio** arba **Gauti elementą** veiksmą. Įveskite tarpą po antros eilutės, nes įterpsime vartotojo vardą iš trigerio įvesties, **User**.

    Pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

    ![Pridėti User įvestį kaip dinaminį turinį](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.lt.png)

1. Skydelio **Dinaminis turinys** skiltyje pasirinkite **User** įvestį iš trigerio.

    Pasirinkite **Pridėti**, kad pridėtumėte dinaminio turinio **User** įvestį į **Turinys** parametrą veiksmui.

    ![Pasirinkti User įvestį](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.lt.png)
1. Dinaminis turinys, gautas iš trigerio, dabar yra nurodytas veiksmo **Body** parametre. Tą patį pakartosime likusioms eilutėms el. laiško tekste.

    ![Pridėtas vartotojo įvestis](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.lt.png)

1. Spustelėkite vietą šalia `Manufacturer:`. Pasirinkite **žaibo ikoną** arba **fx ikoną** dešinėje.

    Skydelio **Dynamic content** skirtuke įveskite šią paieškos frazę,

    ```text
    manufacturer
    ```

    Pasirinkite **Manufacturer value** įvestį iš trigerio ir spustelėkite **Add**.

    ![Pridėta Manufacturer value įvestis kaip dinaminis turinys](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.lt.png)

1. Spustelėkite vietą šalia `Model:`. Pasirinkite **žaibo ikoną** arba **fx ikoną** dešinėje.

    Skydelio **Dynamic content** skirtuke įveskite šią paieškos frazę,

    ```text
    model
    ```

    Pasirinkite **Model** įvestį iš **Get item** veiksmo ir spustelėkite **Add**.

    ![Pridėta Model įvestis kaip dinaminis turinys](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.lt.png)

1. Tekstui `Link to item in SharePoint` atnaujinsime jį į hipersaitą el. laiško tekste. Spustelėkite eilutės pradžioje ir pasirinkite **žaibo ikoną** arba **fx ikoną** dešinėje.

    ![Pridėti dinaminį turinį](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.lt.png)

1. Spustelėkite po HTML inkaro žyma ir pasirinkite **žaibo ikoną** arba **fx ikoną** dešinėje.

    Skydelio **Dynamic content** skirtuke įveskite šią paieškos frazę,

    ```text
    link to item
    ```

    Pasirinkite **Link to item** įvestį iš **Get item** veiksmo ir spustelėkite **Add**.

    ![Pridėti Link to item kaip dinaminį turinį](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.lt.png)

1. Turime perjungti į HTML redaktorių, pasirinkdami **&lt;/&gt;** ikoną.

    ![Pridėti vartotojo įvestį](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.lt.png)

1. HTML redaktorius dabar įjungtas. Spustelėkite prieš `Link to item in SharePoint` tekstą, pridėkite HTML inkaro žymą, kad sukurtumėte hipersaitą. Nukopijuokite ir įklijuokite šį kodą.

    ```text
    <a href="
    ```

    ![HTML žyma](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.lt.png)

1. Dinaminis turinys **Link to item** dabar yra nurodytas **Body** parametre. Spustelėkite po **Link to item** įvesties, nukopijuokite ir įklijuokite šį kodą.

    ```text
    ">
    ```

    ![HTML žyma](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.lt.png)

1. Spustelėkite po `Link to item in SharePoint` teksto, uždarykite HTML inkaro žymą. Nukopijuokite ir įklijuokite šį kodą.

    ```text
    </a>
    ```

    ![HTML žyma](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.lt.png)

1. Pasirinkite **&lt;/&gt;** ikoną, kad perjungtumėte kodo peržiūrą.

    ![Išjungti kodo peržiūrą](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.lt.png)

1. Tada dar kartą pasirinkite **&lt;/&gt;** ikoną, kad vėl perjungtumėte kodo peržiūrą.

    ![Grįžti į kodo peržiūrą](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.lt.png)

1. Pastebėkite, kad yra keletas papildomų simbolių `&lt;br&gt;`. Ištrinkite šiuos simbolius.

    ![Ištrinti simbolius](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.lt.png)

1. Dabar baigėme pridėti hipersaitą į mūsų el. laiško tekstą 😎 Pasirinkite **&lt;/&gt;** ikoną, kad perjungtumėte kodo peržiūrą.

    ![HTML žyma sutvarkyta](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.lt.png)

1. Spustelėkite po `Additional comments from` teksto prieš dvitaškį ir pasirinkite **žaibo ikoną** arba **fx ikoną** dešinėje.

    ![Pridėti vartotojo parametrą](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.lt.png)

1. Skydelio **Dynamic content** skirtuke įveskite šią paieškos frazę,

    ```text
    user
    ```

    Pasirinkite **User** parametrą iš trigerio ir spustelėkite **Add**.

    ![Pridėti vartotojo parametrą kaip dinaminį turinį](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.lt.png)

1. Dabar įterpsime išraišką, kuri rodys papildomų komentarų vertę, jei vartotojas ją pateikė **Ask an adaptive card** mazge, arba rodys "None", jei vartotojas nepateikė jokių komentarų.

    Spustelėkite po dvitaškio ir pasirinkite **žaibo ikoną** arba **fx ikoną** dešinėje.

    ![Pridėti išraišką](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.lt.png)

1. Skydelio **Function** skirtuke ir išraiškos lauke viršuje įveskite šią išraišką,

    ```text
    if(empty())
    ```

    Ši išraiška naudoja `if` funkciją if-else sąlygai.

    Kita funkcija yra `empty`, kuri tikrina, ar vertė egzistuoja eilutės parametre. Eilutės parametras, kurį reikia nurodyti, yra `AdditionalComments` įvesties parametro vertė iš trigerio.

    ![Jei tuščia](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.lt.png)

1. Tada spustelėkite **skliaustelių viduje** po `empty` funkcijos. Įterpsime `AdditionalComments` įvesties parametrą iš trigerio.

    Pasirinkite **Dynamic content** skirtuką. Įveskite šią paieškos frazę,

    ```text
    Additional
    ```

    Slinkite žemyn skydelyje ir pasirinkite **AdditionalComments** įvestį iš trigerio. Parametras dabar bus pridėtas kaip eilutės parametras išraiškoje.

    ![Pridėti AdditionalComments kaip dinaminį turinį](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.lt.png)

1. Dabar apibrėžsime **_true_** logiką, kur jei `AdditionalComments` eilutės parametras yra tuščias, norime rodyti tekstą `None`.

    Po skliausto, kuris apima eilutės parametrą, įveskite šį kodą,

    ```text
    , 'None',
    ```

    ![True logika](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.lt.png)

1. Galiausiai apibrėžsime **_false_** logiką, kur jei `AdditionalComments` eilutės parametras nėra tuščias, norime rodyti **AdditionalComments** įvesties parametro vertę iš mūsų trigerio.

    > Primename, kad ši vertė bus iš papildomų komentarų lauko adaptacinėje kortelėje **Ask with adaptive card** mazge **Request device** temoje.

    Po kablelio po mūsų **_true_** logikos, pasirinkite **Dynamic content** skirtuką. Įveskite šią paieškos frazę,

    ```text
    Additional
    ```

    Slinkite žemyn skydelyje ir pasirinkite **AdditionalComments** įvestį iš trigerio. Parametras dabar bus pridėtas kaip eilutės parametras išraiškoje.

    Dabar pridėkite jį prie mūsų **Body** parametro, pasirinkdami **Add**.

    ![False logika](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.lt.png)

1. Puiku, mūsų išraiška baigta! Išraiška dabar pridėta prie **Body** parametro. Galiausiai suformatuokite paskutinę eilutę kursyvu.

    ![Kursyvas](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.lt.png)

1. Dabar atnaujinsime **Respond to the agent** veiksmą, kad išsiųstume **Model value** parametro vertę iš **Get item** veiksmo atgal agentui.

    Laikykite nuspaustą kairįjį pelės klavišą ir judėkite aukštyn dizainerio viduje, kad pamatytumėte **Respond to the agent** veiksmą.

    Pasirinkite **Respond to the agent** veiksmą ir pasirinkite **Text** išvestį kaip tipą.

    ![Pasirinkti Text išvestį](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.lt.png)

1. Įveskite šį pavadinimą išvesties laukui.

    ```text
    ModelValue
    ```

    ![ModelValue išvestis](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.lt.png)

1. Pasirinkite vertės lauką ir pasirinkite **žaibo ikoną** arba **fx ikoną** dešinėje.

    ![Įterpti išraišką](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.lt.png)

1. Skydelio **Dynamic content** skirtuke įveskite šią paieškos frazę,

    ```text
    model
    ```

    Pasirinkite **Model** parametrą iš **Get item** veiksmo ir spustelėkite **Add**.

    ![Pridėti Model parametrą kaip dinaminį turinį](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.lt.png)

1. **Model** parametras dabar yra teksto išvesties vertė. Pasirinkite **Save draft**, kad išsaugotumėte mūsų agento srautą.

    Dabar baigėme mūsų agento srautą 👏🏻

    ![Pasirinkti Save draft](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.lt.png)

1. Padarykime dar vieną atnaujinimą mūsų agento srautui prieš publikuojant. Pasirinkite **Overview** skirtuką ir pasirinkite **Edit**.

    ![Pasirinkti Edit](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.lt.png)

1. **Flow name** laukui nukopijuokite ir įklijuokite šį pavadinimą.

    ```text
    Send device request email
    ```

    **Description** laukui pasirinkite **refresh icon**, kad AI automatiškai sugeneruotų aprašymą pagal trigerį ir veiksmus agento sraute.

    Pasirinkite **Save**, kad išsaugotumėte atnaujintą pavadinimą ir aprašymą agento srautui.

    ![Pervadinti, pridėti aprašymą ir išsaugoti detales](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.lt.png)

1. Pasirinkite **Designer** skirtuką ir pasirinkite **Publish**, kad publikuotumėte agento srautą, jog jis galėtų būti pridėtas kaip mazgas **Request device** temoje.

    ![Publikuoti](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.lt.png)

1. Netrukus pasirodys patvirtinimo pranešimas, patvirtinantis, kad agento srautas buvo publikuotas.

    ![Patvirtinimo pranešimas](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.lt.png)

### 9.2 Pridėti agento srautą prie temos

Dabar pridėsime agento srautą prie **Request device** temos.

1. Pasirinkite **Agents** kairėje meniu pusėje ir pasirinkite **Contoso Helpdesk Agent**.

    ![Pasirinkti Agents](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.lt.png)

1. Pasirinkite **Topics** skirtuką.

    ![Pasirinkti Topics skirtuką](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.lt.png)

1. Pasirinkite **Request device** temą.

    ![Pasirinkti Request device temą](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.lt.png)

1. Slinkite žemyn iki **Ask with adaptive card** mazgo ir pridėkite naują mazgą.

    Pasirinkite **Add a tool** ir skydelio **Basic tools** skirtuke pasirinkite **Send device request email** agento srautą, kurį neseniai sukūrėme ir publikavome.

    ![Pasirinkti agento srautą](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.lt.png)

1. Mūsų agento srauto trigerio įvestims turime pasirinkti kintamųjų išvestis iš **Ask with adaptive card** mazgo.

    Pasirinkite **ellipsis (...) icon** **DeviceSharePointId** įvesties laukui.

    ![Pasirinkti kintamąjį](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.lt.png)

1. Pasirinkite **deviceSelectionId** kintamąjį, kuris yra viena iš išvesčių, apibrėžtų **Ask with adaptive card** mazge.

    ![Pasirinkti deviceSelectionId kintamąjį](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.lt.png)

1. Tada pasirinkite **ellipsis (...) icon** **User** įvesties laukui.

    ![Pasirinkti kintamąjį](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.lt.png)

1. Skydelio kintamųjų skirtuke pasirinkite **System** ir pasirinkite **User.DisplayName**. Šis kintamasis saugo vidinio vartotojo, sąveikaujančio su agentu, rodomą vardą.

    ![Pasirinkti User.DisplayName sistemos kintamąjį](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.lt.png)

1. Tada pasirinkite **greater than icon** **Advanced inputs** laukui, kad išplėstumėte ir pamatytumėte **AdditionalComments** įvestį.

    ![Išplėsti advanced inputs](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.lt.png)

1. Pasirinkite **ellipsis (...) icon** **AdditionalComments** įvesties laukui.

    ![Pasirinkti kintamąjį](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.lt.png)

1. Skydelio kintamųjų skirtuke pasirinkite **Formula** ir išplėtimo ikoną, nes naudosime Power Fx išraišką.

    ![Formula skirtukas](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.lt.png)

1. Panašiai kaip išraiška agento sraute, kuri atlieka sąlyginį patikrinimą naudojant _if_ funkciją, tačiau šį kartą
    - naudojant Power Fx funkcijas,
    - ir įterpiant arba jokios vertės, arba `commentsId` išvesties kintamojo vertę iš **Ask with adaptive card** mazgo.

    Įveskite šias funkcijas Power Fx lauke,

    ```text
    If(IsBlank())
    ```

Ši išraiška naudoja funkciją `If` sąlyginiam if-else teiginiui.

Kita naudojama funkcija yra `IsBlank`, kuri tikrina, ar reikšmė egzistuoja, ar neegzistuoja eilutės parametro viduje. Eilutės parametras, į kurį reikia atsižvelgti, yra kintamasis `commentsId`, gaunamas iš **Ask with adaptive card** mazgo.

![If ir IsBlank funkcijos](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.lt.png)

1. Toliau spustelėkite **skliaustelių viduje** po funkcija `IsBlank`. Mes įterpsime kintamąjį `commentsId`, gaunamą iš **Ask with adaptive card** mazgo.

   Įveskite šį kodą skliaustelių viduje,

    ```text
    Topic.commentsId
    ```

   Ir pridėkite kablelį po skliaustelio.

   ![Nuoroda į commentsId kintamąjį](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.lt.png)

1. Dabar apibrėšime logiką:

   - kai **_true_** - jei eilutės parametras `Topic.commentsId` yra tuščias, tada norime įterpti jokią reikšmę.
   - kai **_false_** - jei eilutės parametras `Topic.commentsId` nėra tuščias, tada įterpiame kintamojo commentsId reikšmę.

   Po skliaustelio, kuris apima eilutės parametrą, įveskite šį kodą,

    ```text
    "", Topic.commentsId)
    ```

   Power Fx išraiška turėtų būti tokia:

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   Puikus darbas, mūsų išraiška baigta! 🙌🏻 Dabar pasirinkite **Insert**, kad nustatytumėte agento srauto įvesties parametrą Power Fx išraiškai.

   ![Power Fx išraiška](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.lt.png)

1. **Išsaugokite** temą.

### 9.3 Atnaujinkite „Request device“ temą, pridėdami kelis mazgus geresnei vartotojo patirčiai

Toliau pridėsime dar du mazgus:

- **Send a message** - tai bus patvirtinimo pranešimas, kuriame nurodomas pasirinktas įrenginys ir kad jų užklausa buvo pateikta.
- **Topic management** - užbaigti pokalbį, nukreipiant į **End of conversation** mazgą.

Pradėkime!

1. Pasirinkite **pliuso + ikoną** po agento srauto mazgu ir pasirinkite **Send a message** mazgą.

   ![Pridėti „Send a message“ mazgą](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.lt.png)

1. Įveskite šį tekstą pranešimo lauke,

    ```text
    Thanks
    ```

   Tada pasirinkite **Insert variable**, nes nurodysime vartotojo vardą.

   ![Įterpti kintamąjį](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.lt.png)

1. Pasirinkite **System** skirtuką ir paieškos lauke suraskite `User`. Pasirinkite kintamąjį **User.DisplayName**.

   ![Pasirinkti sistemos kintamąjį](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.lt.png)

1. Įveskite šį tekstą pranešimo lauke,

    ```text
    . Your selected device,
    ```

   Tada pasirinkite **Insert variable**, šį kartą **Custom** skirtuke, pasirinkite kintamąjį **ModelValue**.

   Tada įveskite šį tekstą, kad užbaigtumėte pranešimą.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   Pranešimas turėtų atrodyti taip:

   ![Siųsti pranešimą](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.lt.png)

1. Galiausiai, pasirinkite **pliuso + ikoną** po **Send a message** mazgu ir pasirinkite **Topic management**, po to **Go to another topic** ir pasirinkite **End of Conversation**.

   ![Temos valdymas](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.lt.png)

1. **Išsaugokite** temą.

   ![Išsaugoti](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.lt.png)

### 9.4 Testuokite agentą naudodami kelis scenarijus

Puikus darbas!!! 😁 Dabar galime išbandyti savo agentą.

#### 9.4.1 Prašymas įrenginio ir komentaro įvedimas adaptacinėje kortelėje

1. **Atnaujinkite** testavimo langą, pasirinkite **activity map** ikoną ir įveskite šį tekstą kaip pranešimą agentui.

    ```text
    I need a laptop
    ```

   ![Testuoti agentą](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.lt.png)

1. Agentas aktyvuoja **Available devices** ir atsako su galimų įrenginių sąrašu. Įveskite šį atsakymą į klausimą, ar norite prašyti įrenginio.

    ```text
    Yes
    ```

   ![Taip](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.lt.png)

1. Pastebėkite, kaip agentas aktyvavo **Request device** pagal agento instrukcijas ir kad adaptacinė kortelė dabar rodoma agento pranešime.

   Pasirinkite įrenginį **Surface Laptop 15** ir pridėkite šį komentarą.

    ```text
    I need 16GB of RAM please
    ```

   ![Pasirinkti įrenginį ir įvesti komentarą](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.lt.png)

1. Slinkite žemyn, kol pamatysite mygtuką **Submit Request**, ir pasirinkite jį, kad pateiktumėte adaptacinę kortelę agentui.

   ![Pateikti užklausą](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.lt.png)

1. Pasirinkite **Allow**, kad agentas galėtų naudoti jūsų prisijungimo duomenis dviejų jungčių veiksmų autentifikavimui.

   ![Leisti](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.lt.png)

1. Tada agentas parodys patvirtinimo pranešimą, kuriame bus nurodytas pasirinktas modelis, po to nukreips į **End of Conversation** temą. Šaunu!

   ![Užklausa pateikta](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.lt.png)

1. Pasirinkite **Taip**, kad patvirtintumėte likusią **End of Conversation** temą.

   ![Pasirinkti Taip](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.lt.png)

1. Toliau įvertinkite patirtį pasirinkdami bet kurią žvaigždutę vertinimo skalės kortelėje.

   Tada agentas pereis prie paskutinio **Question** mazgo **End of Conversation** temoje. Pasirinkite **Ne**.

   ![End of conversation tema](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.lt.png)

1. Tema bus užbaigta, o galutinis pranešimas bus rodomas testavimo lange.

   ![End of conversation tema](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.lt.png)

1. Patikrinkite savo el. pašto dėžutę, kad peržiūrėtumėte agento srauto išsiųstą el. laišką vadovui. Galite matyti pasirinktą įrenginį ir adaptacinėje kortelėje įvestą pastabą.

   ![Gautas el. laiškas](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.lt.png)

1. Spustelėkite hipersaitą, ir naršyklė turėtų atidaryti „SharePoint“ elementą su įrenginiu. Puiku!

   ![Spustelėti hipersaitą el. laiške](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.lt.png)

#### 9.4.2 Prašymas įrenginio be komentaro adaptacinėje kortelėje

Dabar išbandykime scenarijų, kai komentaras nėra įvestas.

1. Pakartokite tuos pačius veiksmus:

   - **Atnaujinkite** testavimo langą ir pasirinkite **activity map** ikoną
   - Įveskite pranešimą, `I need a laptop`
   - Atsakykite `Yes` į klausimą apie įrenginio prašymą

   ![Prašymas įrenginio](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.lt.png)

1. Šį kartą pasirinkite **Surface Laptop 13** kaip įrenginį ir neįveskite komentaro.

   ![Pasirinkti įrenginį](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.lt.png)

1. **Pateikite** užklausą pasirinkdami mygtuką **Submit Request**.

   ![Pateikti užklausą](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.lt.png)

1. Šį kartą el. laiške, gautame jūsų el. pašto dėžutėje, bus rodoma **None** kaip komentaras.

   ![Gautas el. laiškas](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.lt.png)

#### 9.4.3 Neprašyti įrenginio

Išbandykime paskutinį scenarijų, kai įrenginys nėra prašomas, ir **Goodbye** tema turėtų būti aktyvuota pagal agento instrukcijas.

1. Pakartokite tuos pačius veiksmus:

   - **Atnaujinkite** testavimo langą ir pasirinkite **activity map** ikoną
   - Įveskite pranešimą, `I need a laptop`
   - Šį kartą atsakykite `No` į klausimą apie įrenginio prašymą

   ![Testuoti agentą](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.lt.png)

1. Agentas aktyvavo **Goodbye** temą, ir klausimas, apibrėžtas temoje, yra užduotas.

   ![Aktyvuota Goodbye tema](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.lt.png)

## ✅ Misija įvykdyta

Sveikiname! 👏🏻 Jūs išmokote, kaip sukurti agento srautą ir pridėti jį prie esamos **Request device** temos, taip pat kaip nukreipti agentą į kitą temą.

Tai yra **Lab 09 - Add an agent flow for automation and enhance topic capabilities** pabaiga, spustelėkite žemiau esančią nuorodą, kad pereitumėte į kitą pamoką. Šioje pamokoje išplėsime šio laboratorinio darbo atvejį.

⏭️ [Pereiti į **Add Event Triggers - Enable autonomous agent capabilities** pamoką](../10-add-event-triggers/README.md)

## 📚 Taktiniai ištekliai

🔗 [Agentų srautų pristatymas: automatizacijos transformavimas naudojant AI pagrįstus darbo srautus](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Agentų srautų apžvalga](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Naudokite agentų srautus su savo agentu](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Funkcijų sąrašas nuorodų vadove](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Agentų srautai Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analitika" />

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus aiškinimus, atsiradusius naudojant šį vertimą.