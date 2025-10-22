<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-22T00:12:37+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "lt"
}
-->
# Misija 03: Pridėti įvykių paleidiklius, kad agentai veiktų savarankiškai

--8<-- "disclaimer.md"

## 🕵️‍♂️ SLAPTAŽODIS: `OPERACIJA SIGNALO TAŠKAS`

> **⏱️ Operacijos trukmė:** `~45 minutės`

## 🎯 Misijos aprašymas

Sveiki sugrįžę, agente. [Misijoje 02](../02-multi-agent/README.md) jūs išmokote sukurti Vaiko agentą paraiškų priėmimui ir susijusį agentą interviu pasiruošimui, kad išplėstumėte pagrindinio Įdarbinimo agento galimybes.

Jūsų užduotis, jei nuspręsite ją priimti, yra **Operacija Signalo Taškas** - gilintis į **įvykių paleidiklius**, kad jūsų agentų sistema pereitų nuo reaktyvios prie **autonominės veiklos**. Jūs transformuosite savo agentus iš laukiančių žmogaus įvesties į proaktyviai reaguojančius į išorinius įvykius ir priimančius protingus sprendimus be priežiūros.

Pagalvokite apie tai kaip apie atnaujinimą nuo agentų, kurie _atsako į klausimus_, iki agentų, kurie _numato poreikius_ ir _veikia savarankiškai_. Naudodami įvykių paleidiklius ir automatizuotus darbo procesus, jūsų Įdarbinimo agentas aptiks gaunamus gyvenimo aprašymų el. laiškus, automatiškai apdoros priedus, saugos duomenis Dataverse ir praneš jūsų HR įdarbinimo komandai per Microsoft Teams - tuo metu jūs galėsite susitelkti į svarbesnes užduotis.

Sveiki atvykę į pasaulį, kuriame susitinka automatizacija ir intelektas.

## 🔎 Tikslai

Šioje misijoje jūs išmoksite:

1. Kaip įvykių paleidikliai leidžia agentams veikti savarankiškai be vartotojo sąveikos
1. Skirtumus tarp interaktyvių ir autonominių agentų Copilot Studio
1. Kaip sukurti įvykių paleidiklius, kurie automatiškai apdoroja el. laiškų priedus ir įkelia failus į Dataverse
1. Kaip sukurti agentų srautus, kurie skelbia adaptacines korteles Teams kanaluose pranešimams
1. Kaip perduoti duomenis tarp įvykių paleidiklių ir agentų srautų, kad būtų užtikrinta pilna automatizacija

## 🤔 Kas yra įvykių paleidiklis?

Anksčiau [Recruit](../../recruit/10-add-event-triggers/README.md) mes mokėmės apie įvykių paleidiklius. Greitai apžvelkime tai, jei praleidote.

**Įvykių paleidikliai** leidžia agentui _veikti_ savarankiškai, kai kažkas įvyksta kitoje sistemoje - nereikia vartotojo žinutės. Kai sukonfigūruotas įvykis įvyksta, pvz., „naujas SharePoint elementas“, „naujas el. laiškas“, „Planner užduotis priskirta“ ar net laiko pagrindu pasikartojantis įvykis, jungiklis siunčia paleidimo duomenis jūsų agentui. Tada agentas vykdo jūsų nurodymus, kad nuspręstų, kokius veiksmus ar temas vykdyti.

### Pagrindinės savybės

- **Autonominis aktyvavimas:**
      - Skirtingai nuo temų paleidiklių, kurie prasideda, kai vartotojas rašo agentui, įvykių paleidikliai aktyvuojami iš išorinių įvykių, leidžiant proaktyvų elgesį.

- **Duomenų pagrindu:**
      - Kiekvienas įvykis perduoda duomenis (kintamuosius + pasirinktinius nurodymus) per jungiklį. Agentas naudoja jūsų apibrėžtus nurodymus ir duomenis, kad nuspręstų, ką daryti toliau.
      - Pavyzdžiui, _paleisti temą_ arba _vykdyti veiksmus, apibrėžtus įrankiais_.

- **Pavyzdžiai iš karto:**
      - SharePoint/OneDrive failas ar elementas sukurtas
      - Planner užduotis užbaigta/priskirta
      - Microsoft Forms atsakymas pateiktas
      - Pasikartojimas/tvarkaraštis

    Prieinamumas priklauso nuo jūsų organizacijos duomenų politikos, sukonfigūruotos Power Automate.

- **Reikalinga generatyvinė orkestracija:**
      - Įvykių paleidikliai yra prieinami tik tada, kai generatyvinė orkestracija yra įjungta agentui.

- **Apmokėjimas/naudojimas:**
      - Kiekvienas paleidimo pristatymas skaičiuojamas kaip žinutė Copilot Studio pajėgumui.
      - Pavyzdžiui, 10 minučių pasikartojimas siunčia žinutę kas 10 minučių.

- **Autentifikacijos modelis ir nustatymas:**
      - Paleidiklius pridedate agento Apžvalgoje, skiltyje _Paleidikliai_. Jungiklio autentifikacija naudoja agento kūrėjo paskyrą („agentų autoriaus autentifikacija“).
      - Galite redaguoti paleidiklio parametrus ir duomenis Power Automate kūrėjo portale.

- **Testavimas ir stebėjimas:**
      - Galite testuoti paleidiklius iš agento testavimo skydelio ir stebėti elgesį veiklos žemėlapyje prieš publikavimą.

!!! info "Trumpai programuotojams"

    Įsivaizduokite įvykių paleidiklius kaip **webhook tipo signalus**, kurie perduoda struktūrizuotus duomenis jūsų agentui, leidžiant jam _pradėti_ darbą ir grandininius veiksmus tarp sistemų - nelaukiant vartotojo užklausos.

### Temų paleidikliai - kuo jie skiriasi

Anksčiau jūs mokėtės apie temų paleidiklius [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), tačiau vis dar galite stebėtis, kuo _Temų_ paleidikliai skiriasi nuo _Įvykių_ paleidiklių ir kodėl šis skirtumas yra svarbus suprantant, kas daro agentą autonominį.

Temų paleidikliai kontroliuoja _kada tema vykdoma_, paprastai reaguojant į vartotojo žinutę.

- Generatyvinėje orkestracijoje numatytasis paleidiklis yra **Agentas** - planuotojas pasirenka temą, kurios pavadinimas/aprašymas geriausiai atitinka vartotojo žinutę.
- Klasikinėje orkestracijoje numatytasis paleidiklis yra **Frazių** - planuotojas pasirenka temą, kai viena ar kelios paleidimo frazės geriausiai atitinka vartotojo žinutę.

Kiti paleidiklių tipai apima `Gauta žinutė`, `Gautas įvykis`, `Gauta veikla`, `Pokalbio atnaujinimas`, `Gautas kvietimas`, `Peradresavimas`, `Neaktyvumas` ir `Plano užbaigimas`.

!!! info "Pagrindinis skirtumas"

    Temų paleidikliai yra _pokalbio veiklos_ pradžia pokalbyje.
    
    Įvykių paleidikliai yra sistemos _įvykių_ pradžia, perduodami per jungiklius, kurie gali vykdyti agentą be jokio pokalbio.

### Greitas temų paleidiklio ir įvykių paleidiklio palyginimas

- **Temų paleidiklis:** Vartotojas (arba pokalbio veikla) pasakė/padarė X ➡️ vykdyti temą T.
- **Įvykių paleidiklis:** SharePoint/Planner/El. paštas/Laikmatis aktyvavo su duomenimis P ➡️ agentas įvertina nurodymus ➡️ vykdo veiksmus/temas pagal poreikį.

## 🏓 Interaktyvus agentas vs Autonominis agentas - palyginimas

Dabar, kai žinote skirtumą tarp įvykių paleidiklių ir temų paleidiklių, pereikime prie skirtumų tarp interaktyvaus agento ir autonominio agento.

Copilot Studio terminais, "interaktyvus" reiškia agentus, kurie daugiausia bendrauja per **temas** pokalbyje ar kanale. "Autonominis" reiškia agentus, kurie taip pat naudoja **įvykių paleidiklius**, kad veiktų be vartotojo įvesties.

Šioje lentelėje apibendrinti jų skirtumai ir panašumai.

| Matmuo                              | Interaktyvus agentas  | Autonominis agentas                                                                                           |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Kaip jis prasideda                  | Vartotojas (arba pokalbio veikla) aktyvuoja temą. Pavyzdys: Agentas, Frazių, Gauta žinutė. | Išorinis įvykių paleidiklis siunčia duomenis per jungiklį agentui. Pavyzdys: SharePoint, Planner, el. paštas, tvarkaraštis ir kt. |
| Pagrindinis naudojimas              | Klausimų ir atsakymų, vadovaujami darbo procesai, užklausų pagrindu veiksmai pokalbyje - Teams, web ir kt. | Proaktyvios operacijos ir foninė automatizacija - reaguoti į sistemos pokyčius ir tada pranešti, saugoti ar organizuoti užduotis. |
| Paleidiklio paviršius               | Temų paleidikliai: Agentas / Frazių / Gauta žinutė / Veiklos tipai / Kvietimas / Neaktyvumas / Plano užbaigimas | Įvykių paleidiklių biblioteka per jungiklius; duomenys apima įvykio informaciją + pasirinktinius nurodymus. |
| Planavimo priemonė (generatyvinė orkestracija) | Stipriai naudojama Agentas ir Plano užbaigimo paleidikliams, kad būtų pasirinktos/sujungtos temos. | Reikalinga įvykių paleidikliams; agentas naudoja nurodymus + duomenis, kad nuspręstų, kokius veiksmus/temas vykdyti. |
| Tipinis pavyzdys                    | Vartotojas klausia „Kokia mūsų grąžinimo politika?“ → Tema vykdoma, užklausiama žinių bazė, atsakoma. | Nauja Planner užduotis priskirta → Įvykių paleidiklis aktyvuojamas → Agentas skelbia Teams žinutę, atnaujina įrašą arba vykdo temą. |
| Nustatymo kelias                   | Sukurti temas, apibrėžti paleidiklio tipą, kurti dialogą/veiksmus; publikuoti į kanalus. | Pridėti įvykių paleidiklį (Apžvalga → Paleidikliai), autentifikuoti jungiklį su agento autoriaus kredencialais, konfigūruoti duomenis/nurodymus; testuoti per testavimo skydelį; publikuoti. |
| Autentifikacija ir valdymas         | Veikia pagal kanalo/autentifikacijos kontekstą; temų paleidikliai reaguoja į pokalbio veiklas leistinuose kanaluose. | Paleidiklio prieinamumas priklauso nuo Power Automate duomenų politikos; jungikliai veikia pagal agento kūrėjo paskyrą. |
| Stebėjimas                          | Testuoti temas Copilot Studio, analizuoti pokalbio transkriptus/veiklas. | Naudoti Testavimo paleidiklį ir veiklos žemėlapį, kad patikrintumėte vykdymą prieš publikavimą, stebėti veiklą po publikavimo. |
| Pajėgumo poveikis                   | Kiekviena vartotojo žinutė/agentų atsakymas yra žinutė, sunaudojanti pajėgumą. | Kiekvienas įvykio pristatymas taip pat yra žinutė, plius bet kokie tolesni veiksmai. Pavyzdys: 10 minučių pasikartojimas = 6 žinutės/valandą |

### Kada naudoti kurį?

- Pasirinkite **temų paleidiklius (interaktyvius)**, kai vartotojai inicijuoja agento pokalbį - DUK, vadovaujamas priėmimas ar komandų tipo užduotys pokalbyje. Planavimo priemonės Agentas paleidiklis sumažina rankinį frazių kūrimą.
- Pridėkite **įvykių paleidiklius (autonominius)**, kai agentas turėtų pradėti pokalbį arba veikti pats - atnaujinus SharePoint/Dataverse, gavus el. laišką arba pagal tvarkaraštį. Tai leidžia pereiti nuo reaktyvių prie proaktyvių operacijų.

## Programuotojų patarimai ir įspėjimai

1. **Įjunkite generatyvinę orkestraciją** bet kuriam agentui, kurį norite padaryti autonominiu. Įvykių paleidikliai kitaip nebus rodomi.

1. **Modeliuokite duomenis anksti.** Nuspręskite, kokių minimalių laukų jūsų agentui reikia iš paleidiklio, pvz., `itemId`, `assignedTo`, `dueDate`, ir pridėkite aiškius nurodymus, kurie pasakytų agentui, kokį veiksmą/temą vykdyti pagal duomenų reikšmes.

1. **Autentifikacijos apimtis yra svarbi.** Paleidikliai autentifikuojami naudojant agento kūrėjo paskyrą. Įsitikinkite, kad paskyra turi tinkamus jungiklio leidimus ir atitinka Power Automate duomenų politiką.

1. **Kontroliuokite išlaidas ir triukšmą.** Didelio dažnio pasikartojimai arba labai aktyvūs šaltiniai gali greitai padidinti žinučių sunaudojimą - ribokite, kur įmanoma, arba pridėkite sąlygas paleidiklyje, kad filtruotumėte įvykius.

1. **Testuokite prieš publikavimą.** Naudokite **Testavimo paleidiklį** ir veiklos žemėlapį, kad stebėtumėte planą ir vykdomus veiksmus - koreguokite nurodymus/duomenis, kol elgesys taps stabilus.

## 🧪 Laboratorija 03 - Kandidatų paraiškų el. laiškų automatizavimas

Toliau pridėsime įvykių paleidiklį prie **Įdarbinimo agento** ir sukursime agento srautą vaiko **Paraiškų priėmimo agente**, kad būtų užtikrintas tolesnis apdorojimas autonomiškai.

### ✨ Naudojimo scenarijus

!!! info ""

    **Kaip** HR įdarbinimo specialistas

    **Noriu** būti informuotas, kai mano pašto dėžutėje gaunamas el. laiškas su gyvenimo aprašymu, kuris automatiškai įkeliamas į Dataverse

    **Kad galėčiau** būti informuotas apie gyvenimo aprašymus, siunčiamus el. paštu, kurie automatiškai įkeliami į Dataverse

Tai pasieksime naudodami du metodus:

1. Įvykių paleidiklį, kai atkeliauja el. laiškas,
    1. Patikrinti, ar failo `contentType` yra `PDF` kaip formato tipas.
    1. Išgauti failą ir įkelti į Dataverse naudojant veiksmus per Dataverse jungiklį.
    1. Tada išsiųsti agentui užklausą tolesniam apdorojimui, perduodant įvesties parametrus iš Dataverse veiksmų.

1. Pridėti agento srautą vaiko **Paraiškų priėmimo agente**, kuris bus aktyvuojamas užklausos įvykių paleidiklyje.
    1. Naudoti įvesties parametrus, perduotus iš įvykių paleidiklio užklausos, adaptacinėje kortelėje, paskelbtoje Microsoft Teams kanale, kad informuotų HR įdarbinimo komandą. Adaptacinė kortelė turės nuorodą į eilutę Dataverse, kuri bus peržiūrėta **Įdarbinimo agente**.

Pradėkime!

### ✨ Būtinos sąlygos misijai užbaigti

Jums reikės **arba**:

- **Užbaigti Misiją 01 ir Misiją 02** ir turėti paruoštą Įdarbinimo agentą, **ARBA**
-
Dabar atnaujinsime įvykio paleidiklį, kad pridėtume daugiau automatizavimo galimybių. Pasirinkite **tritaškį (...)** šalia paleidiklio ir pasirinkite **Redaguoti Power Automate**.

![Pasirinkite Redaguoti Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.lt.png)

1. Paleidiklis bus įkeltas kaip srautas Power Automate kūrimo portale. Tai, ką matote, yra srauto dizaineris Power Automate kūrimo portale. Čia galime pridėti papildomą logiką ir veiksmus, kad padidintume automatizavimą. Paleidiklis bus viršuje, o **Siunčia užklausą nurodytam kopilotui apdoroti** bus paskutinis veiksmas sraute.

![Srauto dizaineris Power Automate kūrimo portale](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.lt.png)

1. Pagal numatymą, **Kai atvyksta naujas el. laiškas** paleidiklis Power Automate gali apdoroti kelis el. laiškus kartu, jei keli atvyksta vienu metu, vykdydamas srautą tik vieną kartą visam paketui.

Norėdami užtikrinti, kad srautas būtų vykdomas atskirai kiekvienam el. laiškui, įjunkite **Split On** nustatymą paleidiklio nustatymuose ir pasirinkite `@triggerOutputs()?['body/value']` išskleidžiamame masyvo lauke.

Įjungus **Split On** ir nustatant masyvo lauką į `@triggerOutputs()?['body/value']`, srautas bus vykdomas atskirai kiekvienai žinutei, net jei jos atvyksta vienu metu.

![Įjunkite Split On nustatymus paleidiklyje](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.lt.png)

1. Toliau pridėsime logiką, kad patikrintume priedo failo tipą. Norime įkelti tik .PDF failų priedus, o ne vaizdus (jie gali būti iš el. pašto parašų). Pasirinkite **+** piktogramą po paleidikliu ir pasirinkite **Control** skiltyje **Built in tools**.

![Pasirinkite Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.lt.png)

1. Pasirinkite **Condition** veiksmą.

![Pasirinkite Condition veiksmą](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.lt.png)

1. Dabar sukonfigūruosime sąlygą, kad patikrintume, ar failo priedo tipas yra .PDF. Lauke **Choose a value** pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

1. Paieškos lauke įveskite:

```text
content type
```

1. Tada pasirinkite **Attachments Content-Type** parametrą iš paleidiklio.

1. Tada pasirinkite **Pridėti**, kad pridėtumėte dinaminio turinio įvestį į **Id** parametrą veiksme.

![Konfigūruokite Condition veiksmą](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.lt.png)

1. Sustokime čia trumpam, tikriausiai pastebėjote, kad automatiškai atsirado **For each** veiksmas.

Pasirinkite **For each** veiksmą. Šis veiksmas reiškia, kad bus kilpa per kiekvieną priedą el. laiške, nes **Attachments Content-Type** parametras iš paleidiklio yra susietas su kiekvienu priedu.

Viduje tai yra masyvas, todėl **For each** veiksmas buvo automatiškai pridėtas, kai pasirinkome **Attachments Content-Type** parametrą **Condition** veiksme.

Norėdami sužinoti daugiau apie tai, išplėskite šį papildomą mokymosi bloką.

??? info "Papildomas mokymasis: automatiškai atsirandantis For each veiksmas"

🤔 **Kodėl automatiškai atsiranda "Apply to each" arba "For each"?**

Kai pasirenkate parametrą (dinaminį turinį), kuris atspindi elementų sąrašą arba masyvą - pavyzdžiui, priedų, el. laiškų ar eilučių sąrašą - Power Automate atpažįsta, kad galbūt norėsite apdoroti kiekvieną elementą atskirai.

Kad padėtų tai padaryti, Power Automate automatiškai prideda **“Apply to each”** (arba **For each**) kilpą aplink jūsų veiksmą. Tai užtikrina, kad jūsų veiksmas bus vykdomas vieną kartą kiekvienam sąrašo elementui, o ne bandant apdoroti visą sąrašą vienu metu (kas galėtų sukelti klaidų).

🦋 **Pavyzdys**

- Jei pasirinksite "Attachments" iš ankstesnio veiksmo (kuris yra masyvas) ir bandysite jį naudoti veiksme, kuris tikisi vieno failo, Power Automate apgaubia jūsų veiksmą **"Apply to each"** (arba **For each**) kilpa.
- Tokiu būdu jūsų veiksmas bus vykdomas **kiekvienam priedui** - po vieną kartą.

💡 **Svarbiausi punktai**

- **Automatiškai:** Kilpa atsiranda automatiškai, kad padėtų apdoroti kiekvieną elementą kolekcijoje.
- **Apsaugo nuo klaidų:** Be kilpos jūsų veiksmas gali nepavykti, nes negali apdoroti kelių elementų vienu metu.
- **Vizualinis ženklas:** Tai vizualinis būdas parodyti, kad jūsų srautas pakartos veiksmą kiekvienam sąrašo elementui.

![Paaiškintas For Each veiksmas](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.lt.png)

1. Toliau, kitame **Choose a value** lauke, įveskite:

```text
application/pdf
```

Tai užtikrins, kad kiekvienam failo priedui bus patikrinta, ar failo plėtinys yra .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.lt.png)

1. Dabar sukonfigūruosime **True** kelią, kad išgautume failą iš el. laiško ir įkeltume jį į **Resume** Dataverse lentelę.

Pridėkite naują veiksmą žemiau **True** kelio ir ieškokite `html to text`. Pasirinkite **Html to text** veiksmą.

Norėdami sužinoti daugiau apie **Html to text** veiksmą, išplėskite šį papildomą mokymosi bloką.

??? info "Papildomas mokymasis: Html to text veiksmas"

🤔 **Kas yra "HTML to text" veiksmas?**

**HTML to text** veiksmas Power Automate naudojamas HTML formatuoto turinio konvertavimui į paprastą tekstą. Tai ypač naudinga, kai gaunate duomenis (pvz., el. laiškus, interneto turinį ar API atsakymus), kuriuose yra HTML žymų, ir norite išgauti tik skaitomą tekstą be jokio formatavimo ar kodo.

⚙️ **Kaip tai veikia?**

- **Įvestis:** Jūs pateikiate HTML turinio eilutę (pvz., el. laiško turinį).
- **Išvestis:** Veiksmas pašalina visas HTML žymas ir grąžina tik paprastą tekstą.

👍🏻 **Kada jį naudoti?**

- Kai norite išgauti skaitomą tekstą iš el. laiškų, interneto puslapių ar API atsakymų, kuriuose yra HTML.
- Prieš siunčiant turinį sistemoms, kurios nepalaiko HTML formatavimo (pvz., SMS, Teams žinutės ar duomenų bazės).
- Norint išvalyti duomenis tolimesniam apdorojimui ar analizei.

🔭 **Kur jį rasti?**

- Power Automate agentų srautuose ieškokite veiksmo pavadinimu `HTML to text`. Jis yra **Data Operations** jungiklyje.

💡 **Svarbiausi punktai**

- Pašalina visas HTML žymas ir palieka tik tekstą.
- Neinterpretuoja ar nevykdo skriptų/stilių - tiesiog pašalina žymas.
- Naudinga duomenų valymui ir turinio paruošimui paprasto teksto išvestims.

![Pridėkite HTML to text veiksmą](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.lt.png)

1. Toliau turime sukurti naują ryšio nuorodą **Html to text** veiksmui, pasirinkdami **Pridėti naują**.

![Pridėkite naują ryšio nuorodą](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.lt.png)

1. Veiksmas dabar gali būti sukonfigūruotas. Pridėkime **Body** parametrą iš paleidiklio. Lauke **Content** pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

![Pridėkite dinaminį turinį](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.lt.png)

1. Dinaminio turinio skirtuke ieškokite `body` ir pasirinkite **Body** parametrą, tada pasirinkite **Pridėti**.

![Pridėkite Body parametrą](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.lt.png)

1. Baigėme konfigūruoti šį veiksmą, todėl išeikime iš veiksmo, pasirinkdami dvi kampines skliaustelius («), nukreiptus į kairę, kad suskleistume panelę.

![Suskleiskite veiksmo panelę](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.lt.png)

1. Pridėsime naują veiksmą, pasirinkdami **+ piktogramą** po **Html to text** veiksmu, kuris įkels panelę veiksmams pridėti. Pasirinkite **Microsoft Dataverse** jungiklį.

![Pridėkite naują veiksmą](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.lt.png)

1. Pasirinkite **Pridėti naują eilutę** veiksmą.

![Pridėkite naują eilutę veiksmą](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.lt.png)

1. Pervadinkite veiksmą, pasirinkdami **Tritaškį (...)**, nukopijuokite ir įklijuokite šį pavadinimą:

```text
Pridėti naują Resume eilutę
```

Lauke **Table name** ieškokite `res` ir pasirinkite **Resumes** lentelę.

![Pervadinkite veiksmą ir sukonfigūruokite Table name parametrą](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.lt.png)

1. Pasirinkite **Resume Title** lauką ir pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

![Konfigūruokite Resume Title parametrą](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.lt.png)

1. Funkcijų skirtuke įveskite šią išraišką, naudojančią `item()` funkciją:

```text
item()?['name']
```

Norėdami sužinoti daugiau apie `item()` funkciją, išplėskite šį papildomą mokymosi bloką.

??? info "Papildomas mokymasis: `item()` funkcija"

🤔 **Kas yra `item()` funkcija?**

- Kai naudojate **Apply to each** veiksmą, Power Automate pereina per kiekvieną elementą kolekcijoje (masyve).
- Dažniausiai naudojama veiksmuose, tokiuose kaip **Apply to each** (arba **For each**), **Select** arba **Filter array**.

⚙️ **Kaip tai veikia?**

- `item()` yra funkcija, kuri grąžina dabartinį elementą, apdorojamą kilpoje arba masyvo operacijoje.
- Viduje kilpos `item()` reiškia _dabartinį elementą_, kuris yra apdorojamas.

📌 **Kur ją naudoti?**

- **Apply to each:** norint pasiekti dabartinio elemento savybes.
- **Select:** norint transformuoti kiekvieną masyvo elementą.
- **Filter array:** norint nurodyti dabartinį elementą, kuris yra vertinamas.

🦋 **Pavyzdys**

- Išraiška kilpoje:
       -  `item()?['Email']`
- Tai gauna dabartinio elemento `Email` savybę.

💡 **Svarbiausi punktai**

- `item()` yra _konteksto jautri_: ji visada nurodo dabartinį elementą kilpoje arba masyvo operacijoje, kurioje esate.
- Jei kilpos yra įdėtos, galite naudoti `items('LoopName')`, kad nurodytumėte elementus konkrečioje kilpoje.

Pasirinkite **Pridėti**, kad pridėtumėte išraišką į **Resume Title** parametrą.

![Pridėkite išraišką Resume Title parametrui](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.lt.png)

1. Dar reikia sukonfigūruoti kelis parametrus, pasirinkite **Rodyti viską** ir lauke **Cover Letter** pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

Funkcijų skirtuke įveskite šią išraišką, naudojančią tą pačią išraišką, kaip ir ankstesnėje [misijoje](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Ši išraiška patikrina, ar tekstas iš **Html to text** veiksmo yra ilgesnis nei 2000 simbolių, ir jei taip, grąžina tik pirmuosius 2000 simbolių; kitaip grąžina visą tekstą.

![Pridėkite išraišką Cover Letter parametrui](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.lt.png)

1. Išraiška dabar bus pridėta prie **Cover Letter** lauko.

![Išraiška pridėta prie Cover Letter parametro](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.lt.png)

1. Lauke **Source Email Address** ieškokite `from` ir pasirinkite **From** parametrą iš paleidiklio, nes jis turi el. pašto adreso reikšmę.

![Source Email Address parametras](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.lt.png)

1. Lauke **Upload Date** pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje. Funkcijų skirtuke įveskite šią išraišką, naudojančią `utcNow()` funkciją.

```text
utcNow()
```

Norėdami sužinoti daugiau apie `utcNow` funkciją, išplėskite šį papildomą mokymosi bloką.

??? info "Papildomas mokymasis: `utcNow` funkcija"

🤔 **Kas yra `utcNow()` funkcija?**

- `utcNow()` funkcija Power Automate grąžina dabartinę datą ir laiką koordinuoto universalaus laiko (UTC) formatu ISO 8601, pvz.: `2025-09-23T04:32:14Z`

🦋 **Pavyzdys**

- Išraiška:
       -  `concat('Ataskaita sukurta ', utcNow())`
- Rezultatas:
       - Ataskaita sukurta `2025-09-23T04:32:14Z`

💡 **Svarbiausi punktai**
- **Argumentų (įvesties parametrų) nereikia:** visada pateikia dabartinį UTC laiko žymą.
   - **Naudojimo atvejai**
       - Laiko žymų pridėjimas prie žurnalų ar failų pavadinimų
       - Dabartinio laiko palyginimas su kitomis datomis
       - Planavimas ar sąlygos, susijusios su laiku

![Įkėlimo datos parametras](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.lt.png)

1. Dabar baigėme konfigūruoti veiksmą **Pridėti naują gyvenimo aprašymo eilutę**, todėl išeikime iš skydelio jį suskleidę.

![Išeiti iš veiksmo skydelio](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.lt.png)

1. Pridėsime naują veiksmą pasirinkdami **+ piktogramą** po veiksmu **Pridėti naują gyvenimo aprašymo eilutę**, kuris įkels skydelį veiksmams pridėti. Vėl pasirinkite **Microsoft Dataverse** jungtį.

![Pridėti Dataverse veiksmą](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.lt.png)

1. Pasirinkite veiksmą **Įkelti failą ar vaizdą**.

![Pridėti veiksmą Įkelti failą ar vaizdą](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.lt.png)

1. Pervadinkite veiksmą pasirinkdami **Tris taškus (...)**, nukopijuokite ir įklijuokite šį pavadinimą:

```text
Įkelti gyvenimo aprašymo failą
```

![Pervadinti veiksmą](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.lt.png)

1. Tada pasirinkite lauką **Turinio pavadinimas** ir dešinėje pusėje pasirinkite **žaibo piktogramą** arba **fx piktogramą**.

   Skiltyje **Funkcijos**, įveskite šią išraišką, kuri naudoja funkciją `item()`. Tai gauna dabartinio elemento (priedų failo) `name` savybę.

```text
item()?['name']
```

![Konfigūruoti turinio pavadinimo parametrą](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.lt.png)

1. Dėl parametro **Lentelės pavadinimas** ieškokite `res` ir pasirinkite lentelę **Gyvenimo aprašymai**.

![Konfigūruoti lentelės pavadinimo parametrą](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.lt.png)

1. Tada pasirinkite lauką **Eilutės ID** ir dešinėje pusėje pasirinkite **žaibo piktogramą** arba **fx piktogramą**.

   Ieškokite `ID` ir pasirinkite parametrą **Gyvenimo aprašymas** iš _Pridėti naują eilutę_ Dataverse veiksmo, nes jame yra ID reikšmė, į kurią reikia įkelti PDF failą.

   Pasirinkite **Pridėti**.

![Pasirinkti Eilutės ID](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.lt.png)

1. Pasirinkite lauką **Stulpelio pavadinimas** ir pasirinkite parinktį **Gyvenimo aprašymo PDF**.

![Konfigūruoti stulpelio pavadinimo parametrą](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.lt.png)

1. Pasirinkite lauką **Turinys** ir dešinėje pusėje pasirinkite **žaibo piktogramą** arba **fx piktogramą**.

   Skiltyje **Funkcijos**, įveskite šią išraišką, kuri naudoja funkciją `item()`. Tai gauna dabartinio elemento (priedų failo) `contentBytes` savybę. `contentBytes` reiškia neapdorotus failo ar priedo dvejetainius duomenis, užkoduotus Base64 formatu.

```text
item()?['contentBytes']
```

1. Baigėme konfigūruoti šį veiksmą, todėl išeikime iš veiksmo pasirinkdami dvi kampines skliaustelius («), nukreiptus į kairę, kad suskleistume skydelį.

![Suskleisti veiksmo skydelį](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.lt.png)

1. Tada pasirinkite **Siunčia užklausą nurodytam copilot apdorojimui**, tada vilkite ir numeskite šį veiksmą po veiksmu **Įkelti gyvenimo aprašymo failą** _True_ sąlygos kelyje.

![Vilkite ir numeskite veiksmą True kelyje](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.lt.png)

1. Pasirinkite **Siunčia užklausą nurodytam copilot apdorojimui**, kad jį sukonfigūruotumėte.

![Pasirinkti veiksmą](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.lt.png)

1. Lauke **Kūnas/žinutė** pasirinkite visą lauko turinį ir jį ištrinkite.

![Išvalyti Kūno parametrą](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.lt.png)

1. Nukopijuokite ir įklijuokite šį tekstą į lauką **Kūnas/žinutė** ir pažymėkite `GYVENIMO APRAŠYMO ID VIETOS LAIKIKLIS`.

```text
Siųsti [GyvenimoAprašymoId (tekstas)] = "GYVENIMO APRAŠYMO ID VIETOS LAIKIKLIS" ir [GyvenimoAprašymoPavadinimas (tekstas_1)] = "GYVENIMO APRAŠYMO PAVADINIMO VIETOS LAIKIKLIS" ir [GyvenimoAprašymoNumeris (tekstas_2)] = "GYVENIMO APRAŠYMO NUMERIO VIETOS LAIKIKLIS" į Įrankį "Pranešti Teams Kandidatų kanalui" vaikų agentui "Paraiškų priėmimo agentas"
```

![Pakeisti Gyvenimo aprašymo ID vietos laikiklio tekstą](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.lt.png)

1. Pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

   Ieškokite `gyvenimo aprašymas` ir pasirinkite parametrą **Gyvenimo aprašymas** iš _Pridėti naują eilutę Dataverse_ veiksmo, nes jame yra sukurtos gyvenimo aprašymo eilutės `ID` reikšmė.

   Pasirinkite **Pridėti**.

![Pasirinkti Gyvenimo aprašymo parametrą](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.lt.png)

1. Pažymėkite `GYVENIMO APRAŠYMO PAVADINIMO VIETOS LAIKIKLIS`. Pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

   Ieškokite `pavadinimas` ir pasirinkite parametrą **Gyvenimo aprašymo pavadinimas** iš _Pridėti naują eilutę Dataverse_ veiksmo, nes jame yra sukurtos gyvenimo aprašymo eilutės `gyvenimo aprašymo pavadinimas` reikšmė.

   Pasirinkite **Pridėti**.

![Pasirinkti Gyvenimo aprašymo parametrą](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.lt.png)

1. Pažymėkite `GYVENIMO APRAŠYMO NUMERIO VIETOS LAIKIKLIS`. Pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

   Ieškokite `gyvenimo aprašymo numeris` ir pasirinkite parametrą **Gyvenimo aprašymo numeris** iš _Pridėti naują eilutę Dataverse_ veiksmo, nes jame yra sukurtos gyvenimo aprašymo eilutės `Gyvenimo aprašymo numeris` reikšmė.

   Pasirinkite **Pridėti**.

![Pasirinkti Gyvenimo aprašymo parametrą](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.lt.png)

1. Baigėme konfigūruoti šį veiksmą ir mūsų agento srautą 🙌🏻 Puikiai sekasi! Dabar išsaugokime mūsų įvykio paleidimo srautą pasirinkdami **Išsaugoti juodraštį**.

![Išsaugoti juodraštį](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.lt.png)

1. Dabar turime redaguoti agento srauto detales, pasirinkite **Atgal**.

![Pasirinkti Atgal](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.lt.png)

1. Pasirinkite **Redaguoti** skiltyje **Detalės** ir atnaujinkite **Planą** į parinktį **Copilot Studio**.

   Pasirinkite **Išsaugoti**.

![Keisti Copilot Studio planą](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.lt.png)

1. Atsiras modalas, prašantis patvirtinti perėjimą prie Copilot Studio plano. Pasirinkite **Patvirtinti**.

![Patvirtinti Copilot Studio plano pakeitimą](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.lt.png)

1. Planas dabar atnaujintas į **Copilot Studio**. Pasirinkite **Redaguoti**, nes turime paskelbti įvykio paleidimo srautą mūsų agentui.

![Redaguoti srautą](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.lt.png)

1. Pasirinkite **Paskelbti**.

![Paskelbti](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.lt.png)

   Valio! Įvykio paleidimo srautas dabar paskelbtas 😃

![Paskelbta](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.lt.png)

Tęskime kurdami naują agento srautą, kuris bus iškviečiamas vaikų **Paraiškų priėmimo agento**.

### Laboratorija 3.2 - Pranešimas Teams kanalui naudojant adaptacinę kortelę

Dabar kursime naują agento srautą vaikų **Paraiškų priėmimo agentui**, kuris naudos įvykio paleidimo perduotas reikšmes, kad paskelbtų adaptacinę kortelę Teams kanale. Ši adaptacinė kortelė informuos HR atrankos komandą apie automatiškai įkeltą PDF, kad jie galėtų jį peržiūrėti.

Pradėkime!

1. **Įdarbinimo agento** skiltyje pasirinkite **Agentai** ir pasirinkite **Paraiškų priėmimo agentą**.

![Pasirinkti Paraiškų priėmimo agentą](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.lt.png)

1. Slinkite žemyn iki **Įrankiai** ir pasirinkite **+ Pridėti**.

![Pridėti įrankį](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.lt.png)

1. Atsiras modalas **Pridėti įrankį**. Pasirinkite **+ Naujas įrankis**.

![Pasirinkti Naujas įrankis](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.lt.png)

1. Pasirinkite **Agentų srautas**.

![Pasirinkti Agentų srautas](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.lt.png)

1. Tada bus įkeltas **agentų srauto dizaineris**. Trigerio **Kai agentas iškviečia srautą** skiltyje pasirinkite **+ Pridėti įvestį**.

![Pasirinkti pridėti įvestį](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.lt.png)

1. Pasirinkite **Tekstas** kaip vartotojo įvesties tipą.

![Pasirinkti Tekstas](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.lt.png)

1. Įveskite šį tekstą kaip įvesties parametro pavadinimą.

```text
GyvenimoAprašymoId
```

![GyvenimoAprašymoId įvestis](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.lt.png)

1. Pakartokite tuos pačius veiksmus, kad pridėtumėte antrą teksto įvestį. Įveskite šį tekstą kaip įvesties parametro pavadinimą.

```text
GyvenimoAprašymoPavadinimas
```

![GyvenimoAprašymoPavadinimas įvestis](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.lt.png)

1. Pakartokite tuos pačius veiksmus, kad pridėtumėte trečią teksto įvestį. Įveskite šį tekstą kaip įvesties parametro pavadinimą.

```text
GyvenimoAprašymoNumeris
```
![GyvenimoAprašymoNumeris įvestis](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.lt.png)

1. Ar prisimenate, kaip [Įdarbinime](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) pridėjome adaptacinę kortelę temoje mūsų agentui? Šį kartą mes pridėsime adaptacinę kortelę agento sraute. Dabar pridėsime kitą veiksmą mūsų agento srautui, kuris paskelbs adaptacinę kortelę Teams kanale.

   Pasirinkite **+ piktogramą** po trigeriu.

![Pridėti naują veiksmą](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.lt.png)

1. Pasirinkite veiksmą **Paskelbti kortelę pokalbyje ar kanale**.

![Pasirinkti veiksmą Paskelbti kortelę pokalbyje ar kanale](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.lt.png)

1. Reikia sukurti Microsoft Teams prisijungimo nuorodą su jūsų prisijungimo paskyra. Pasirinkite **Prisijungti**.

![Pasirinkti Prisijungti](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.lt.png)

1. Pasirinkite savo vartotojo paskyrą ir tada pasirinkite **Leisti prieigą**.

![Pasirinkti Leisti prieigą](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.lt.png)

1. Šiems įvesties parametrams:

   | Parametras | Kaip nustatyti | Detalės |
   |------------|----------------|---------|
   | **Paskelbti kaip** | Išskleidžiamasis meniu | Pasirinkite parinktį `Flow bot` |
   | **Paskelbti į** | Išskleidžiamasis meniu | Pasirinkite parinktį `Kanalas` |
   | **Komanda** | Išskleidžiamasis meniu | Pasirinkite komandą, kuri yra prieinama jūsų aplinkoje ir prie kurios turite prieigą, kad užbaigtumėte šį laboratorinį pratimą |
   | **Kanalas** | Išskleidžiamasis meniu | Pasirinkite kanalą, kuris yra prieinamas jūsų aplinkoje ir prie kurio turite prieigą, kad užbaigtumėte šį laboratorinį pratimą |

![Konfigūruoti įvesties parametrus](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.lt.png)

1. Tada konfigūruosime lauką **Adaptacinė kortelė**. Pasirinkite lauką **Adaptacinė kortelė**.

![Pasirinkti Adaptacinės kortelės lauką](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.lt.png)

1. Atidarykite [Gyvenimo aprašymo lentelės atnaujintą JSON failą](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), nukopijuokite visą jo turinį ir įklijuokite jį į Adaptacinės kortelės lauką.

![Nukopijuoti ir įklijuoti JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.lt.png)

1. Kaip ir [Įdarbinime](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), mes pakeisime esamas reikšmes JSON duomenų rinkinyje tikromis reikšmėmis arba dinamišku turiniu.

   Pirmiausia atnaujinkime URL `url` savybei, esančiai `selectAction` savybėje. Šis URL bus pakeistas į Gyvenimo aprašymų sistemos peržiūros URL **Įdarbinimo centre** modeliu pagrįstoje programoje. Tai leis atrankos specialistui pasirinkti veiksmą ir būti nukreiptam į Gyvenimo aprašymų sistemos peržiūrą modeliu pagrįstoje programoje.

   Pažymėkite dabartinę URL reikšmę ir ją ištrinkite.

![Pasirinkti URL reikšmę](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.lt.png)

1. **Įdarbinimo centre** modeliu pagrįstoje programoje, naudodamiesi kairės pusės meniu, eikite į **Gyvenimo aprašymų** sistemos peržiūrą ir nukopijuokite URL. Tada grįžkite į agento srautą ir įklijuokite nukopijuotą URL į **url** savybę, esančią `selectAction` savybėje.

![Nukopijuoti Gyvenimo aprašymų sistemos per
1. Turėtumėte matyti šiuos duomenis, kur geltonai pažymėta jūsų aplinkos informacija apie **Hiring Hub** modeliu pagrįstą programą.

     | Parametras | Vertė | Paaiškinimas |
     |----------|------------|---------|
     | **Organizacijos URI** | GUID | Dataverse/Dynamics 365 aplinkos organizacijos URL |
     | **appid** | GUID | Norint atidaryti konkrečią modeliu pagrįstą programą, naudojamas užklausos parametras appid arba appname. Šiuo atveju naudojamas appid |
     | **viewid** | GUID | Užklausos parametras, kuris yra peržiūros ID |

       ![Įklijuoti URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.lt.png)

1. Toliau pridėsime dinaminio turinio reikšmes kelioms savybėms. Pradėkime nuo teksto, kuris parodys autonomiškai įvykio trigerio sukurtos eilutės Reziumė numerio nuorodą.

      Pasirinkite **panelės** piktogramą, kad įkeltumėte veiksmų panelę.

       ![Pasirinkti panelės piktogramą](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.lt.png)

1. Slinkite žemyn iki eilutės, kur matote `text` savybę `RESUME NUMBER PLACEHOLDER`. Pažymėkite vietos rezervavimo reikšmę ir ištrinkite ją.

       ![Ištrinti vietos rezervavimą](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.lt.png)

1. Spustelėkite tarp dvigubų kabučių ir pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

      Skiltyje **Dynamic Content** pasirinkite parametrą **ResumeNumber** ir spustelėkite **Add**.

       ![Pridėti ResumeNumber parametrą](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.lt.png)

1. Parametras **ResumeNumber** dabar bus pridėtas kaip dinaminis turinys prie `text` savybės.

       ![ResumeNumber dinaminis turinys](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.lt.png)

1. Pakartosime tuos pačius veiksmus `RESUME NAME PLACEHOLDER`. Slinkite žemyn iki eilutės, kur matote `text` savybę `RESUME NAME PLACEHOLDER`. Pažymėkite vietos rezervavimo reikšmę ir ištrinkite ją.

       ![Reziumė vardo vietos rezervavimas](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.lt.png)

1. Spustelėkite tarp dvigubų kabučių ir pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

      Skiltyje **Dynamic Content** pasirinkite parametrą **ResumeTitle** ir spustelėkite **Add**.

       ![Pridėti ResumeTitle parametrą](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.lt.png)

1. Parametras **ResumeTitle** dabar bus pridėtas kaip dinaminis turinys prie `text` savybės.

       ![ResumeTitle dinaminis turinys](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.lt.png)

1. Pakartosime tuos pačius veiksmus **Due Date** reikšmei, kuri nurodo, kada personalo atrankos specialistas turėtų peržiūrėti reziumė. Slinkite žemyn iki eilutės, kur matote `text` savybę `May 21, 2023`.

       ![Pasirinkti Leisti prieigą](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.lt.png)

1. Ištrinkite šią datos vietos rezervavimo reikšmę ir spustelėkite tarp dvigubų kabučių.

       ![Ištrinti](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.lt.png)

1. Pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje ir skiltyje **Function** įveskite šią išraišką ir spustelėkite **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Ši išraiška naudoja dvi funkcijas.

     | Funkcija | Paaiškinimas |
     |----------|------------|
     | **addDays** | Prideda nurodytą dienų skaičių prie pateiktos datos ir grąžina gautą datą kaip tekstą |
     | **utcNow** | Grąžina dabartinę datą ir laiką koordinuoto pasaulinio laiko (UTC) formatu kaip tekstą. |

      utcNow reikšmei mes formatuojame datą kaip mėnesį ir dieną, po to metus.

       ![Išraiška Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.lt.png)

      Išraiška dabar bus pridėta prie `text` savybės.

       ![Išraiška Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.lt.png)

1. Galiausiai, atnaujinsime URL `url` savybei, esančiai `actions` masyvo savybėje JSON duomenyse. Dabartinis vietos rezervavimo URL bus pakeistas reziumė eilutės URL **Hiring Hub** modeliu pagrįstoje programoje. Tai leis personalo atrankos specialistui pasirinkti adaptacinės kortelės veiksmą `Action.OpenURL` ir būti nukreiptam į reziumė modeliu pagrįstoje programoje.

       ![Ištrinti Peržiūrėti Reziumė URL vietos rezervavimą](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.lt.png)

1. **Hiring Hub** modeliu pagrįstoje programoje, atidarykite eilutę **Resumes** sistemos peržiūroje naudodami kairės pusės meniu. Reziumė eilutė bus įkelta kaip forma modeliu pagrįstoje programoje.

      Nukopijuokite reziumė eilutės URL.

    ??? info "Kaip grįžti į **Hiring Hub** modeliu pagrįstą programą, jei ją uždarėte/išėjote"

        1. Naršykite į [https://make.powerapps.com](https://make.powerapps.com) ir įsitikinkite, kad esate savo kūrėjo aplinkoje, kurią naudojate šiems laboratoriniams pratimams, kitaip perjunkite į ją.
        
        ![Naršyti į make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.lt.png)

        1. Pasirinkite **Apps** kairės pusės meniu skydelyje ir **Hiring Hub** modeliu pagrįstai programai pasirinkite **Play** piktogramą, kad ją įkeltumėte į savo naršyklę.
        
        ![Pasirinkti Hiring Hub modeliu pagrįstą programą](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.lt.png)

       ![Nukopijuoti Reziumė eilutės URL](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.lt.png)

1. Tada grįžkite į agento srautą, pažymėkite dabartinę vietos rezervavimo URL reikšmę ir ištrinkite ją.

       ![Ištrinti Reziumė eilutės URL vietos rezervavimą](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.lt.png)

1. Tada įklijuokite nukopijuotą URL į `url` savybę.

       ![Įklijuoti nukopijuotą Reziumė eilutės URL](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.lt.png)

1. Turėtumėte matyti šiuos duomenis. Ištrinkite `GUID` ID reikšmę pabaigoje. Mes pakeisime šį dinaminį turinį - **ResumeId** parametrą.

       ![Ištrinti Peržiūrėti Reziumė URL vietos rezervavimą](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.lt.png)

1. Pasirinkite **žaibo piktogramą** arba **fx piktogramą** dešinėje.

      Skiltyje **Dynamic Content** pasirinkite parametrą **ResumeId** ir spustelėkite **Add**.

       ![ResumeId parametras](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.lt.png)

1. **ResumeId** bus pridėtas kaip dinaminis turinys. Šie duomenys, pažymėti geltonai, yra jūsų aplinkos informacija apie **Hiring Hub** modeliu pagrįstą programą.

     | Parametras | Vertė | Paaiškinimas |
     |----------|------------|---------|
     | **Organizacijos URI** | GUID | Dataverse/Dynamics 365 aplinkos organizacijos URL |
     | **appid** | GUID | Norint atidaryti konkrečią modeliu pagrįstą programą, naudojamas užklausos parametras appid arba appname. Šiuo atveju naudojamas appid |
     | **id** | GUID | Užklausos parametras, kuris yra Reziumė eilutės ID |

       ![ResumeId dinaminis turinys](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.lt.png)

1. Baigėme konfigūruoti veiksmą **Post card in a chat or channel** 👏🏻 Išeikite iš veiksmo konfigūracijos panelės pasirinkdami **x** piktogramą.

       ![Uždaryti panelę](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.lt.png)

1. Galiausiai, konfigūruosime paskutinį veiksmą, **Respond to the agent**, siųsdami tekstą agentui, kad užbaigtume apdorojimą.

      Veiksme **Respond to the agent** pasirinkite **+Add an output**.

       ![Pasirinkti Pridėti išvestį](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.lt.png)

1. Pasirinkite **Text** kaip išvesties tipą.

       ![Pasirinkti tekstą kaip išvesties tipą](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.lt.png)

1. Įveskite šį pavadinimą kaip išvesties pavadinimą.

       ![Pabaigos pokalbio išvestis](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.lt.png)

1. Įveskite šią reikšmę kaip išvesties reikšmę.

       ```text
       Finished
       ```

       ![Pabaigos pokalbio išvesties reikšmė](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.lt.png)

1. Dabar baigėme konfigūruoti agento srautą. Pasirinkite **Save draft**, kad išsaugotumėte agento srautą. Patvirtinimo pranešimas pasirodys, kai bus išsaugota.

       ![Išsaugoti juodraštį](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.lt.png)

1. Prieš publikuodami agento srautą, turime atnaujinti agento srauto detales. Pasirinkite **Overview** skirtuką ir pasirinkite **Edit**.

      Lauke srauto pavadinimas įveskite šį tekstą.

       ```text
       Notify Teams Applicant channel
       ```      

      Po to pasirinkite **Refresh** piktogramą, kad atnaujintumėte agento srauto aprašymą naudodami AI.

      Tada pasirinkite **Save**, kad išsaugotumėte atnaujintas agento srauto detales.

       ![Redaguoti ir išsaugoti detales](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.lt.png)

1. Grįžkite į **Designer** skirtuką ir pasirinkite **Publish**, kad publikuotumėte agento srautą. Patvirtinimo pranešimas pasirodys, kai bus išsaugota.

       ![Publikuoti agento srautą](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.lt.png)

1. Agentų srautą dabar reikia pridėti kaip įrankį **Application Intake Agent**. Grįžkite į **Hiring Agent** ir pasirinkite **Agents** skirtuką, tada pasirinkite **Application Intake Agent**.

       ![Pasirinkti Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.lt.png)

1. Agentų **Details** skiltyje atnaujinsime **Description** lauką. Nukopijuokite šį tekstą ir įklijuokite pabaigoje aprašymo teksto.

       ```text
       ir taip pat pranešti Teams Applicant kanalui
       ```

       ![Atnaujinti Agent Description](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.lt.png)

1. Toliau pridėsime agento srautą kaip įrankį. Slinkite žemyn ir pasirinkite **+ Add**.

       ![Pasirinkti Pridėti](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.lt.png)

1. Pasirinkite anksčiau sukurtą agento srautą, **Notify Teams Applicant Channel**.

       ![Pasirinkti agento srautą](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.lt.png)

1. Tada pasirinkite **Add and configure**.

       ![Pasirinkti Pridėti ir konfigūruoti](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.lt.png)

1. Agentų srauto **Inputs** skiltyje matomi trys anksčiau konfigūruoti įvesties parametrai. Pagal numatymą **Fill using** konfigūracija nustatyta kaip **Dynamically fill with AI**. Paliksime šį nustatymą, nes įvykio trigerio pranešimas (paskutiniame veiksme, **Sends a prompt to the specified copilot for processing** - tai yra 38-44 žingsniai **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) turės parametrų reikšmes, kurias AI ištrauks.

       ![Įrankio agento srauto įvestys](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.lt.png)

1. Dabar, kai įrankis buvo pridėtas prie **Application Intake Agent**, reikia atnaujinti agento instrukcijas. Pasirinkite **atgal rodyklės** piktogramą, kad grįžtumėte į agentų sąrašą.

       ![Pasirinkti atgal rodyklės piktogramą](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.lt.png)

1. Pasirinkite **Application Intake Agent** **Agents** skirtuke **Hiring Agent**.

       ![Pasirinkti Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.lt.png)

1. Lauke **Instructions** įveskite naują eilutę po `2.Post-Upload` instrukcijomis. Nukopijuokite ir įklijuokite šias instrukcijas.

       ```text
       Procesas Reziumė įkėlimui per el. paštą
       1. Kai gaunate pranešimą, **Siųsti [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" ir [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" ir [ResumeNumber (text_2)]= "R01026" į įrankį "Notify Teams Applicant channel"** vaiko agente "Application Intake Agent", iškviesti [AGENT FLOW PLACEHOLDER]
       ```

       ![Atnaujinti Application Intake Agent instrukcijas](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.lt.png)

1. Pažymėkite `[AGENT FLOW PLACEHOLDER` tekstą.

       ![Pažymėti vietos rezervavimą](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.lt.png)

1. Įveskite pasvirąjį brūkšnį, `/`, ir pasirinkite **Notify Teams Applicant Channel** įrankį.

       ![Pasirinkti Notify Teams Applicant Channel įrankį](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.lt.png)
1. Agentų srautas dabar bus paleistas **Application Intake Agent** pagal instrukcijas, po paskutinio veiksmo (**Siunčia užklausą nurodytam copilot apdorojimui**) įvykio paleidiklyje, kuris siunčia užklausą su parametrų reikšmėmis atgal agentui.

      Pasirinkite **Save**, kad išsaugotumėte atnaujintas instrukcijas **Application Intake Agent**.

       ![Pasirinkite Save](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.lt.png)

1. Instrukcijos bus atnaujintos, kai agentas bus išsaugotas.

       ![Instrukcijos atnaujintos](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.lt.png)

1. Dabar reikia **Publish** **Hiring Agent**. Pasirinkite **Publish** viršutiniame dešiniajame kampe, o atsiradusiame _Publish this agent modal_ lange pasirinkite **Publish**.

       ![Publikuoti Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.lt.png)

1. Kai publikuojama, pasirodys patvirtinimo pranešimas, kad agentas buvo publikuotas.

       ![Patvirtinimo pranešimas](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.lt.png)

Dabar galime išbandyti agentą!

### Laboratorija 3.3 - Testuoti įvykio paleidiklį

1. Norint paleisti įvykio paleidiklį, reikia išsiųsti el. laišką su pridėtu CV PDF failu. Outlook programoje sukurkite naują el. laišką.

     | El. laiško komponentas | Informacija |
     |------------------------|-------------|
     | **Kam (To)** | Naudokite savo prisijungimo vartotojo paskyrą kaip reikšmę |
     | **Failo priedas** | Įkelkite [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) failą |
     | **Tekstas** | Nukopijuokite ir įklijuokite žemiau pateiktą tekstą kaip el. laiško turinį |

       ```text
       Gerbiamas personalo vadove,

       Rašau norėdamas išreikšti savo susidomėjimą vyresniojo Power Platform inžinieriaus pozicija jūsų organizacijoje. Turėdamas daugiau nei devynerių metų patirtį kuriant saugius ir mastelio keičiamus sprendimus Microsoft debesų platformose, esu įsitikinęs, kad galėsiu efektyviai prisidėti prie jūsų komandos.

       Paskutinėje mano pozicijoje kaip pagrindinis Power Platform inžinierius sukūriau automatizuotą CV priėmimo procesą, sumažinant rankinį rūšiavimą ir pagerinant paieškos galimybes. Sukūriau HR bylų valdymo programas, įdiegiau sprendimų sąmoningus srautus ir įgyvendinau PR patikrinimus, kad pagerinčiau diegimo laiką. Mano kompetencijos apima Power Apps, Power Automate, Power Pages, Dataverse ir įvairias Microsoft 365 paslaugas, taip pat integraciją su Graph/REST API ir Azure Functions.

       Anksčiau sukūriau Teams patvirtinimus su adaptacinėmis kortelėmis, sumažindamas patvirtinimo laiką iki tos pačios dienos, ir sukūriau patikimas klaidų tvarkymo sistemas. Mano patirtis taip pat apima senų darbo eigų perkėlimą į Power Automate ir savitarnos portalų kūrimą, kuriuos naudoja šimtai darbuotojų.

       Turiu kompiuterių mokslo bakalauro laipsnį ir esu sertifikuotas kaip Power Platform Developer (PL-400) ir Solution Architect (PL-600). Taip pat esu aistringas mentorius ir savanoriavau vietinėse kūrėjų grupėse.

       Prašome peržiūrėti mano CV, pridėtą prie šio laiško. Būčiau dėkingas už galimybę aptarti, kaip mano įgūdžiai ir patirtis atitinka jūsų poreikius.

       Dėkoju už jūsų laiką ir dėmesį.

       Pagarbiai,
       Taylor Testperson
       ```

       **Siųsti** el. laišką, kai jis bus paruoštas.

       ![Sukurti el. laišką su PDF failo priedu](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.lt.png)

1. Power Automate kūrimo portale, skirtame įvykio paleidiklio srautui, pasirinkite **Refresh** piktogramą, kad peržiūrėtumėte srauto vykdymą, kuris buvo sėkmingai atliktas išsiuntus el. laišką.

       ![Pasirinkite atnaujinimo piktogramą, kad peržiūrėtumėte srauto vykdymą](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.lt.png)

1. Grįžkite į Copilot Studio, **Hiring Agent** ir pasirinkite **Activity** skirtuką.

       ![Pasirinkite Activity skirtuką](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.lt.png)

1. **Activity** skirtukas bus įkeltas, kuriame bus rodomos visos **Hiring Agent** veiklos. Bus veikla su pavadinimu **Automated**, kurios būsena yra **Complete**. Ši veikla atspindi įvykio paleidiklį ir agentų srautą, kuris buvo paleistas.

       ![Veikla baigta](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.lt.png)

1. Pasirinkite veiklą ir veiklos žemėlapyje pasirinkite įvykio paleidiklį. Dešinėje pusėje esančiame skydelyje pastebėkite, kaip užklausos įvesties parametrai apima `Resume Id`, `Resume Title` ir `Resume Number` parametrų reikšmes iš **Dataverse** eilutės, kuri buvo sukurta. Tai buvo iš dinaminio turinio reikšmių, sukonfigūruotų anksčiau 18 - 27 žingsniuose **Laboratorija 3.1 - Automatinis CV įkėlimas į Dataverse, gautas el. paštu**.

       ![Įvykio paleidiklis](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.lt.png)

1. Grįžkite į **Hiring Hub** modeliu pagrįstą programą ir **Resumes system view** pasirinkite **Refresh**, kad atnaujintumėte vaizdą. Nauja eilutė su CV, kuris buvo išsiųstas el. paštu, dabar bus įtraukta, nes ji buvo sukurta per įvykio paleidiklį.

       ![CV eilutė sukurta](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.lt.png)

1. Grįžkite į Copilot Studio ir pasirinkite **Notify Teams Applicant Channel** agentų srautą **Application Intake Agent** veiklos žemėlapyje. Dešinėje pusėje esančiame skydelyje pastebėkite, kaip įvestys turi reikšmes iš Dataverse eilutės. Tai buvo iš užklausos, išsiųstos paskutiniu veiksmu (**Siunčia užklausą nurodytam copilot apdorojimui**) įvykio paleidiklyje, kuriame yra parametrų reikšmės iš naujai sukurtos Dataverse eilutės. Taip galime perduoti parametrų reikšmes iš įvykio paleidiklių į agentų srautus.

       ![Pasirinkite agentų srautą](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.lt.png)

1. Galiausiai, pažvelkime į adaptacinę kortelę, paskelbtą kanale **Microsoft Teams**. Kanale matysime adaptacinę kortelę, kurioje pateikiama informacija apie naujai sukurtą CV eilutę Dataverse. Užveskite pelės žymeklį ant hipersaitų adaptacinės kortelės pradžioje, pastebėkite, kaip URL yra Resumes sistemos vaizdo URL, kurį sukonfigūravome anksčiau JSON (žingsniai 15 - 19 **Laboratorija 3.2 - Pranešimas Teams kanalui naudojant adaptacinę kortelę**) adaptacinės kortelės naštos.

       ![Adaptacinė kortelė CV lentelės sistemos vaizdo URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.lt.png)

1. Pasirinkite hipersaitą ir būsite nukreipti į Resumes sistemos vaizdą **Hiring Hub** modeliu pagrįstoje programoje savo naršyklėje.

       ![CV sistemos vaizdas Hiring Hub modeliu pagrįstoje programoje](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.lt.png)

1. Grįžkite į adaptacinę kortelę, paskelbtą kanale Microsoft Teams. Šį kartą užveskite pelės žymeklį ant **View Resume**, kuris yra `Action.OpenURL` adaptacinės kortelės veiksmas. Pastebėkite, kaip URL yra CV eilutė, kurią sukonfigūravome anksčiau JSON (žingsniai 30 - 36 **Laboratorija 3.2 - Pranešimas Teams kanalui naudojant adaptacinę kortelę**) adaptacinės kortelės naštos.

       ![Adaptacinė kortelė CV eilutės URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.lt.png)

1. Pasirinkite veiksmą ir būsite nukreipti į CV eilutės formą **Hiring Hub** modeliu pagrįstoje programoje savo naršyklėje.

       ![CV eilutė Hiring Hub modeliu pagrįstoje programoje](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.lt.png)

## ✅ Misija įvykdyta

Sveikiname! 👏🏻 Puikus darbas, Operatyve.

✅ Įvykio paleidiklis: sukūrėte įvykio paleidiklį, kuris perduoda Dataverse parametrų reikšmes agentų srautui.  
✅ Sukurtas agentų srautas: naudoja Dataverse parametrų reikšmes, kad paskelbtų adaptacinę kortelę kanale Microsoft Teams, informuodamas HR atrankos komandą.  
✅ Atnaujintos antrinių agentų instrukcijos: paleisti srautą, kai įvykio paleidiklis baigtas.

Tai leidžia **Hiring Agent** veikti savarankiškai, kai CV gaunami kaip el. laiško priedai, ir informuoti HR atrankos komandą apie rankinę peržiūrą.

Tai yra **Laboratorijos 03 - Kandidatų paraiškų el. laiškų automatizavimas** pabaiga, pasirinkite žemiau esančią nuorodą, kad pereitumėte prie kitos pamokos.

⏭️ [Pereiti prie **Agentų instrukcijų kūrimo** pamokos](../04-agent-instructions/README.md)

## 📚 Taktiniai ištekliai

📖 [Padarykite savo agentą savarankišku Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  
📖 [Pridėti įvykio paleidiklį](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  
📖 [Naudoti agentų srautus su savo agentu](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  
📖 [Power Automate paleidiklių įvadas](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  
📖 [Naudojant Power Automate srautus su agentais](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  
📖 [Duomenų praradimo prevencija Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus interpretavimus, atsiradusius naudojant šį vertimą.