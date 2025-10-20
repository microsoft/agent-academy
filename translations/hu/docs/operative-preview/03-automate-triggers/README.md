<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T18:17:58+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "hu"
}
-->
# Küldetés 03: Eseményindítók hozzáadása az autonóm működéshez

--8<-- "disclaimer.md"

## 🕵️‍♂️ KÓDNEVE: `SIGNAL POINT MŰVELET`

> **⏱️ Műveleti időablak:** `~45 perc`

## 🎯 Küldetés összefoglaló

Üdv újra, Ügynök! A [Küldetés 02](../02-multi-agent/README.md) során megtanultad, hogyan hozhatsz létre egy Jelentkezési Ügynököt és egy Interjú Felkészítő Ügynököt, hogy bővítsd a fő Toborzó Ügynök képességeit.

A feladatod, ha elfogadod, a **Signal Point Művelet** - mélyebben belemerülni az **eseményindítók** világába, és a reakcióalapú ügynökrendszert **autonóm működésre** emelni. Átalakítod az ügynökeidet, hogy ne csak kérdésekre válaszoljanak, hanem előre lássák az igényeket és önállóan cselekedjenek. 

Gondolj rá úgy, mint egy frissítésre, amely az ügynököket a _kérdések megválaszolásától_ a _szükségletek előrejelzéséig_ és _önálló cselekvésig_ emeli. Az eseményindítók és automatizált munkafolyamatok révén a Toborzó Ügynök képes lesz észlelni a beérkező önéletrajzokat tartalmazó e-maileket, automatikusan feldolgozni a csatolmányokat, adatokat tárolni a Dataverse-ben, és értesíteni az HR toborzó csapatot a Microsoft Teams-en keresztül - miközben te a magasabb értékű feladatokra koncentrálsz.

Üdvözlünk az automatizáció és intelligencia világában.

## 🔎 Célkitűzések

Ebben a küldetésben megtanulod:

1. Hogyan teszik lehetővé az eseményindítók az autonóm ügynöki viselkedést felhasználói interakció nélkül
1. Az interaktív és autonóm ügynökök közötti különbségeket a Copilot Studio-ban
1. Hogyan hozhatsz létre eseményindítókat, amelyek automatikusan feldolgozzák az e-mail csatolmányokat és feltöltik a fájlokat a Dataverse-be
1. Hogyan építhetsz ügynöki folyamatokat, amelyek adaptív kártyákat küldenek a Teams csatornákra értesítésként
1. Hogyan lehet adatokat átadni az eseményindítók és ügynöki folyamatok között az end-to-end automatizáció érdekében

## 🤔 Mi az az eseményindító?

Korábban a [Recruit](../../recruit/10-add-event-triggers/README.md) részben tanultunk az eseményindítókról. Gyorsan összefoglaljuk, ha esetleg lemaradtál róla.

Az **eseményindítók** lehetővé teszik, hogy egy ügynök _önállóan cselekedjen_, amikor valami történik egy másik rendszerben - felhasználói üzenet nélkül. Amikor a konfigurált esemény bekövetkezik - például „új SharePoint elem,” „új e-mail,” „Planner feladat kiosztva,” vagy akár időalapú ismétlődés, egy csatlakozó indító adatcsomagot küld az ügynöknek. Az ügynök ezután követi az utasításaidat, hogy eldöntse, melyik műveleteket vagy témákat hívja meg.

### Fő jellemzők

- **Autonóm aktiválás:**
      - Ellentétben a témák indítóival, amelyek akkor indulnak, amikor egy felhasználó üzenetet küld az ügynöknek, az eseményindítók külső eseményekből indulnak, lehetővé téve a proaktív viselkedést.

- **Adatcsomag-alapú:**
      - Minden esemény egy adatcsomagot (változók + opcionális utasítások) küld egy csatlakozón keresztül. Az ügynök az általad meghatározott utasításokat és az adatcsomagot használja, hogy eldöntse, mi legyen a következő lépés.
      - Például _hívjon meg egy témát_ vagy _hajtson végre eszközök által meghatározott műveleteket_.

- **Példák készen:**
      - SharePoint/OneDrive fájl vagy elem létrehozva
      - Planner feladat befejezve/kiosztva
      - Microsoft Forms válasz beküldve
      - Ismétlődés/ütemezés

    Az elérhetőség az adott szervezet adatpolitikájától függ, amelyet a Power Automate-ben konfiguráltak.

- **Generatív orkestráció szükséges:**
      - Az eseményindítók csak akkor érhetők el, ha az ügynök számára engedélyezve van a generatív orkestráció.

- **Számlázás/használat:**
      - Minden indító adatcsomag egy üzenetként számít a Copilot Studio kapacitásába.
      - Például egy 10 perces ismétlődés minden 10 percben küld egy üzenetet.

- **Hitelesítési modell és beállítás:**
      - Az indítókat az ügynök Áttekintés részében, a _Triggers_ alatt adhatod hozzá. Az indító csatlakozó hitelesítése az ügynök készítőjének fiókját használja („ügynök szerző hitelesítés”).
      - Az indító paramétereit és adatcsomagját a Power Automate készítői portálon szerkesztheted.

- **Tesztelés és megfigyelhetőség:**
      - Az indítókat tesztelheted az ügynök tesztpaneljén, és az aktivitási térképen ellenőrizheted a viselkedést a publikálás előtt.

!!! info "Fejlesztőknek röviden"

    Gondolj az eseményindítókra úgy, mint **webhook-szerű jelekre**, amelyek strukturált adatcsomagot küldenek az ügynöknek, lehetővé téve, hogy _munkát kezdeményezzen_ és műveleteket láncoljon össze rendszerek között - anélkül, hogy egy felhasználó kérné.

### Témaindítók - miben különböznek?

Korábban tanultál a témaindítókról a [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md) részben, de lehet, hogy még mindig nem világos, miben különböznek a _Téma_ indítók az _Esemény_ indítóktól, és miért fontos ez a különbség az autonóm ügynök megértéséhez.

A témaindítók szabályozzák, hogy _mikor fut egy téma_, általában egy felhasználói üzenet hatására.

- A generatív orkestrációban az alapértelmezett indító a **By agent** - a tervező kiválasztja azt a témát, amelynek neve/leírása legjobban illeszkedik a felhasználó üzenetéhez.
- A klasszikus orkestrációban az alapértelmezett a **Kifejezések** - a tervező kiválasztja azt a témát, amelynek egy vagy több indító kifejezése legjobban illeszkedik a felhasználó üzenetéhez.

Egyéb indítótípusok: `Üzenet érkezett`, `Esemény érkezett`, `Tevékenység érkezett`, `Beszélgetés frissítése`, `Hívás érkezett`, `Átirányítás`, `Tétlenség`, és `Terv befejezése`.

!!! info "Alapvető különbség"

    A témaindítók a csevegésen belüli _beszélgetési tevékenységek_ indítói.
    
    Az eseményindítók a rendszer _eseményeinek_ indítói, amelyeket csatlakozók küldenek, és amelyek az ügynököt bármilyen beszélgetés nélkül futtathatják.

### Gyors útmutató a Témaindító és Eseményindító közötti különbségekről

- **Témaindító:** Felhasználó (vagy csevegési tevékenység) mondta/tette X ➡️ futtatja T témát.
- **Eseményindító:** SharePoint/Planner/E-mail/Időzítő adatcsomagot küldött P ➡️ ügynök értékeli az utasításokat ➡️ ennek megfelelően hívja meg a Műveleteket/Témákat.

## 🏓 Interaktív ügynök vs Autonóm ügynök - összehasonlítás

Most, hogy tudod, mi a különbség az eseményindítók és a témaindítók között, nézzük meg az interaktív ügynök és az autonóm ügynök közötti különbségeket.

A Copilot Studio terminológiájában az "interaktív" azokra az ügynökökre vonatkozik, amelyek elsősorban **témákon** keresztül kommunikálnak egy csevegésben vagy csatornán. Az "autonóm" azokra az ügynökökre vonatkozik, amelyek **eseményindítókat** is használnak, hogy felhasználói bemenet nélkül működjenek.

Az alábbi táblázat összefoglalja a különbségeket és hasonlóságokat.

| Dimenzió                            | Interaktív ügynök     | Autonóm ügynök                                                                                              |
|-------------------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------|
| Hogyan indul                       | Felhasználó (vagy csevegési tevékenység) indít egy témát. Példa: By agent, Kifejezések, Üzenet érkezett.   | Külső eseményindító adatcsomagot küld egy csatlakozón keresztül az ügynöknek. Példa: SharePoint, Planner, e-mail, ütemezés stb. |
| Elsődleges használat               | Kérdések és válaszok, irányított munkafolyamatok, kérés-alapú műveletek csevegésben - Teams, web stb.  | Proaktív műveletek és háttér automatizáció - reagál a rendszer változásaira, majd értesít, fájlt ment vagy feladatokat szervez. |
| Indító felület                     | Témaindítók: By agent / Kifejezések / Üzenet érkezett / Tevékenységtípusok / Hívás / Tétlenség / Terv befejezése | Eseményindítók könyvtára csatlakozókon keresztül; az adatcsomag tartalmazza az eseményadatokat + opcionális utasításokat. |
| Tervező (generatív orkestráció)    | Erősen használva a By agent és Terv befejezése indítókhoz, hogy témákat válasszon/sorrendbe állítson. | Szükséges az eseményindítókhoz; az ügynök az utasításokat + adatcsomagot használja, hogy eldöntse, mely műveleteket/témákat hívja meg. |
| Tipikus példa                     | Felhasználó kérdezi: "Mi a visszatérítési politikánk?" → Téma fut, lekérdezés tudásbázisból, válasz. | Új Planner feladat kiosztva → Eseményindító indul → Ügynök Teams üzenetet küld, rekordot frissít vagy témát hív meg. |
| Beállítási útvonal                | Témák létrehozása, indítótípus meghatározása, párbeszéd/műveletek szerkesztése; publikálás csatornákra. | Eseményindító hozzáadása (Áttekintés → Triggers), csatlakozó hitelesítése az ügynök szerzői hitelesítési adataival, adatcsomag/utasítások konfigurálása; tesztelés tesztpanelen; publikálás. |
| Hitelesítés és irányítás          | Csatorna/hitelesítési kontextusban fut; témaindítók válaszolnak a csevegési tevékenységekre az engedélyezett csatornákban. | Az indítók elérhetősége a Power Automate adatpolitikáitól függ; csatlakozók az ügynök készítőjének fiókján futnak. |
| Megfigyelhetőség                 | Témák tesztelése a Copilot Studio-ban, beszélgetési átiratok/tevékenységek ellenőrzése. | Teszt indító és aktivitási térkép használata a végrehajtás validálására publikálás előtt, aktivitás figyelése publikálás után. |
| Kapacitás hatás                  | Minden felhasználói üzenet/ügynöki válasz egy üzenetként fogyaszt kapacitást. | Minden esemény kézbesítése szintén egy üzenet, plusz bármely további művelet. Példa: egy 10 perces ismétlődés = 6 üzenet/óra |

### Mikor melyiket használjuk?

- Válaszd a **témaindítókat (interaktív)**, amikor a felhasználók kezdeményezik az ügynök beszélgetést - GYIK, irányított jelentkezés vagy parancs-stílusú feladatok csevegésen belül. A tervező By agent indítója csökkenti a kézi kifejezés-kurációt.
- Adj hozzá **eseményindítókat (autonóm)**, amikor az ügynöknek kell kezdeményeznie a beszélgetést vagy önállóan cselekednie - frissítések esetén a SharePoint/Dataverse-ben, beérkező e-mail esetén vagy ütemezés alapján. Ez a reaktív működésről a proaktív műveletekre váltást jelenti.

## Fejlesztői tippek és buktatók

1. **Engedélyezd a generatív orkestrációt** minden ügynöknél, amelyet autonóm működésre szeretnél állítani. Az eseményindítók nem jelennek meg másképp.

1. **Modellezd az adatcsomagot korán.** Döntsd el, hogy az ügynöknek milyen minimális mezőkre van szüksége az indítóból, például `itemId`, `assignedTo`, `dueDate`, és adj meg tömör utasításokat, amelyek megmondják az ügynöknek, mely műveletet/témát hívja meg az adatcsomag értékei alapján.

1. **Hitelesítési hatókör számít.** Az indítók az ügynök készítőjének fiókját használják hitelesítésre. Győződj meg róla, hogy a fiók rendelkezik a megfelelő csatlakozó engedélyekkel és megfelel a Power Automate adatpolitikáinak.

1. **Költség és zaj kontrollálása.** A magas frekvenciájú ismétlődések vagy nagyon aktív források gyorsan növelhetik az üzenetfogyasztást - korlátozd, ahol lehetséges, vagy adj feltételeket az indítóban az események szűrésére.

1. **Tesztelj publikálás előtt.** Használd a **Teszt indítót** és az aktivitási térképet, hogy figyeld a tervet és a meghívott műveleteket - iterálj az utasításokon/adatcsomagon, amíg a viselkedés stabil nem lesz.

## 🧪 Labor 03 - Jelentkezési e-mailek automatizálása

Most hozzáadunk egy eseményindítót a **Toborzó Ügynökhöz**, és létrehozunk egy ügynöki folyamatot a gyermek **Jelentkezési Ügynökben**, hogy további feldolgozást végezzen az autonóm működés érdekében.

### ✨ Használati forgatókönyv

!!! info ""

    **Mint** HR toborzó

    **Azt szeretném**, hogy értesítést kapjak, amikor egy önéletrajzot tartalmazó e-mail érkezik a Beérkező levelek mappámba, amely automatikusan feltöltésre kerül a Dataverse-be

    **Azért, hogy** értesüljek az e-mailben küldött jelentkezésekről, amelyek automatikusan feltöltésre kerülnek a Dataverse-be

Ezt két technika segítségével érjük el:

1. Egy eseményindító, amely az e-mail érkezésekor aktiválódik,
    1. Ellenőrzi, hogy a
Most már frissíteni fogjuk az eseményindítót, hogy további automatizálási funkciókat adjunk hozzá. Válassza ki az **ellipsis (...)** ikont az indítónál, majd válassza az **Edit in Power Automate** lehetőséget.

![Válassza az Edit in Power Automate lehetőséget](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.hu.png)

1. Az indító betöltődik egy folyamatként a Power Automate készítői portálján. Amit lát, az a Power Automate készítői portáljának folyamattervezője. Itt adhatunk hozzá további logikát és műveleteket az automatizálás fokozásához. Az indító a tetején jelenik meg, majd a **Sends a prompt to the specified copilot for processing** lesz a folyamat utolsó művelete.

![Folyamattervező a Power Automate készítői portálján](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.hu.png)

1. Alapértelmezés szerint a Power Automate **When a new email arrives** indítója egyszerre több e-mailt is feldolgozhat, ha több érkezik egyszerre, és csak egyszer futtatja a folyamatot az egész csoportra.

   Annak érdekében, hogy a folyamat külön-külön fusson minden egyes e-mailre, engedélyezze a **Split On** beállítást az indító beállításaiban, és válassza ki a `@triggerOutputs()?['body/value']` értéket a legördülő tömb mezőben.

   A **Split On** bekapcsolásával és a tömb mező beállításával `@triggerOutputs()?['body/value']` értékre, a folyamat külön-külön fog futni minden üzenetre, még akkor is, ha egyszerre sok érkezik.

![Kapcsolja be a Split On beállítást az indítóban](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.hu.png)

1. Ezután adjunk hozzá némi logikát az e-mail mellékletek fájltípusának ellenőrzéséhez. Csak .PDF fájlokat szeretnénk feltölteni, nem pedig képeket (ezek e-mail aláírásokból származhatnak). Válassza ki az indító alatti **+** ikont, majd válassza a **Control** lehetőséget a **Built in tools** szekcióban.

![Válassza a Control lehetőséget](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.hu.png)

1. Válassza a **Condition** műveletet.

![Válassza a Condition műveletet](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.hu.png)

1. Most konfiguráljuk a feltételt, hogy ellenőrizze, a fájl melléklet típusa .PDF-e. A **Choose a value** mezőben válassza a **villám ikon** vagy **fx ikon** lehetőséget a jobb oldalon.

   1. A **Search** mezőbe írja be a következőt:

      ```text
      content type
      ```

   1. Ezután válassza ki az indító **Attachments Content-Type** paraméterét.

   1. Végül válassza az **Add** lehetőséget, hogy hozzáadja a dinamikus tartalom bemenetet az akció **Id** paraméteréhez.

![Konfigurálja a Condition műveletet](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.hu.png)

1. Álljunk meg egy pillanatra, valószínűleg észrevette, hogy a **For each** művelet automatikusan megjelent.

   Válassza ki a **For each** műveletet. Ez a művelet az e-mail minden mellékletén végigmegy, mivel az indító **Attachments Content-Type** paramétere minden melléklethez kapcsolódik.

   A háttérben ez egy tömb, ezért a **For each** művelet automatikusan hozzáadódott, amikor a **Attachments Content-Type** paramétert választottuk a **Condition** műveletben.

   További információért bontsa ki az alábbi tanulási blokkot.

??? info "További tanulás: For each művelet automatikus megjelenése"

   🤔 **Miért jelenik meg automatikusan az "Apply to each" vagy "For each"?**
   
   Amikor kiválaszt egy paramétert (dinamikus tartalmat), amely egy elemek listáját vagy tömbjét képviseli - például mellékletek, e-mailek vagy sorok listáját -, a Power Automate felismeri, hogy valószínűleg minden elemet külön-külön szeretne feldolgozni.
   
   Ennek megkönnyítése érdekében a Power Automate automatikusan hozzáad egy **“Apply to each”** (vagy **For each**) ciklust az akció köré. Ez biztosítja, hogy az akció minden elemre külön-külön fusson, ahelyett, hogy megpróbálná az egész listát egyszerre feldolgozni (ami hibákat okozhat).

   🦋 **Példa**
   
   - Ha kiválasztja a "Attachments" elemet egy korábbi műveletből (ami egy tömb), és megpróbálja használni egy olyan műveletben, amely egyetlen fájlt vár, a Power Automate az akciót egy **"Apply to each"** (vagy **For each**) ciklusba csomagolja. 
   - Így az akció minden **mellékletre** lefut - egyenként.
      
   💡 **Fontos pontok**
   
   - **Automatikus:** A ciklus automatikusan megjelenik, hogy segítsen minden elemet feldolgozni a gyűjteményben.
   - **Hibák megelőzése:** Ciklus nélkül az akció sikertelen lehet, mert nem tud több elemet egyszerre kezelni.
   - **Vizualizáció:** Ez vizuálisan mutatja, hogy a folyamat minden elemre ismételni fogja az akciót a listában.

![For Each művelet magyarázata](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.hu.png)

1. Ezután a másik **Choose a value** mezőbe írja be a következőt:

   ```text
   application/pdf
   ```

   Ez biztosítja, hogy minden fájl melléklet esetében ellenőrizze, hogy a fájl kiterjesztése .PDF-e.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.hu.png)

1. Most konfiguráljuk a **True** útvonalat, hogy kinyerjük a fájlt az e-mailből, és feltöltsük a **Resume** Dataverse táblába.

   Adjon hozzá egy új műveletet a **True** útvonal alá, és keressen `html to text` kifejezést. Válassza a **Html to text** műveletet.

   További információért a **Html to text** műveletről bontsa ki az alábbi tanulási blokkot.

??? info "További tanulás: Html to text művelet"

   🤔 **Mi az a "HTML to text" művelet?**
   
   A **HTML to text** művelet a Power Automate-ben HTML-formázott tartalmat alakít át egyszerű szöveggé. Ez különösen hasznos, ha olyan adatokat kap (például e-maileket, webes tartalmakat vagy API válaszokat), amelyek HTML címkéket tartalmaznak, és csak az olvasható szöveget szeretné kinyerni formázás vagy kód nélkül.

   ⚙️ **Hogyan működik?**
   
   - **Bemenet:** HTML tartalom sztringet ad meg (például egy e-mail szövegét).
   - **Kimenet:** A művelet eltávolítja az összes HTML címkét, és csak az egyszerű szöveget adja vissza.
   
   👍🏻 **Mikor érdemes használni?**
   
   - Ha olvasható szöveget szeretne kinyerni e-mailekből, weboldalakról vagy API válaszokból, amelyek HTML-t tartalmaznak.
   - Mielőtt olyan rendszereknek küldene tartalmat, amelyek nem támogatják a HTML formázást (például SMS, Teams üzenetek vagy adatbázisok).
   - Az adatok tisztításához további feldolgozás vagy elemzés előtt.

   🔭 **Hol található?**
   
   - A Power Automate-ben az Agent Flows-ban keresse meg a `HTML to text` nevű műveletet. Ez a **Data Operations** csatlakozó alatt található.
      
   💡 **Fontos pontok**
   
   - Eltávolítja az összes HTML címkét, és csak a szöveget hagyja meg.
   - Nem értelmezi vagy hajt végre szkripteket/stílusokat - csak eltávolítja a címkéket.
   - Hasznos az adatok tisztításához és az egyszerű szöveges kimenetek előkészítéséhez.

![Adja hozzá a HTML to text műveletet](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.hu.png)

1. Ezután új kapcsolat referenciát kell létrehoznunk a **Html to text** művelethez az **Add new** kiválasztásával.

![Új kapcsolat referencia hozzáadása](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.hu.png)

1. Most konfigurálhatjuk a műveletet. Adjuk hozzá az indító **Body** paraméterét. A **Content** mezőben válassza a **villám ikon** vagy **fx ikon** lehetőséget a jobb oldalon.

![Dinamikus tartalom hozzáadása](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.hu.png)

1. A **Dynamic content** fülön keressen `body` kifejezést, és válassza az indító **Body** paraméterét, majd válassza az **Add** lehetőséget.

![Body paraméter hozzáadása](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.hu.png)

1. Befejeztük ennek a műveletnek a konfigurálását, ezért lépjünk ki a műveletből a balra mutató két szögletes zárójel («) kiválasztásával, hogy összehúzzuk a panelt.

![Akció panel összehúzása](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.hu.png)

1. Adjon hozzá egy új műveletet a **Html to text** művelet alá az **+ ikon** kiválasztásával, amely betölti az akciók hozzáadására szolgáló panelt. Válassza a **Microsoft Dataverse** csatlakozót.

![Új művelet hozzáadása](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.hu.png)

1. Válassza az **Add a new row** műveletet.

![Új sor hozzáadása művelet](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.hu.png)

1. Nevezze át a műveletet az **Ellipsis (...)** kiválasztásával, másolja és illessze be a következőt névként:

```text
Add a new Resume row
```

A **Table name** paraméterhez keressen `res` kifejezést, és válassza a **Resumes** táblát.

![Művelet átnevezése és a Table name paraméter konfigurálása](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.hu.png)

1. Válassza a **Resume Title** mezőt, majd válassza a **villám ikon** vagy **fx ikon** lehetőséget a jobb oldalon.

![Resume Title paraméter konfigurálása](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.hu.png)

1. A **Function tab** fülön írja be a következő kifejezést, amely az `item()` függvényt használja:

```text
item()?['name']
```

További információért az `item()` függvényről bontsa ki az alábbi tanulási blokkot.

??? info "További tanulás: `item()` függvény"

   🤔 **Mi az az `item()` függvény?**
   
   - Amikor az **Apply to each** műveletet használja, a Power Automate végigmegy a gyűjtemény (tömb) minden elemén.
   - Leggyakrabban olyan műveletekben használják, mint az **Apply to each** (vagy **For each**), **Select**, vagy **Filter array**.

   ⚙️ **Hogyan működik?**
   
   - Az `item()` egy olyan függvény, amely visszaadja az aktuálisan feldolgozott elemet egy ciklusban vagy tömb műveletben.
   - A cikluson belül az `item()` az éppen feldolgozott _aktuális elemre_ utal.
   
   📌 **Hol használható?**
   
   - **Apply to each:** az aktuális elem tulajdonságainak eléréséhez.
   - **Select:** az elemek átalakításához egy tömbben.
   - **Filter array:** az aktuálisan értékelt elem hivatkozásához.

   🦋 **Példa**
   
   - Kifejezés egy ciklusban:
          -  `item()?['Email']`
   - Ez az aktuális elem `Email` tulajdonságát adja vissza.
      
   💡 **Fontos pontok**
   
   - Az `item()` _kontekstszenzitív_: mindig az aktuális elemre utal a ciklusban vagy tömb műveletben, amelyben van.
   - Ha egymásba ágyazott ciklusokat használ, az `items('LoopName')` segítségével hivatkozhat egy adott ciklus elemeire.

Válassza az **Add** lehetőséget, hogy hozzáadja a kifejezést a **Resume Title** paraméterhez.

![Kifejezés hozzáadása a Resume Title paraméterhez](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.hu.png)

1. Még több paramétert kell konfigurálnunk, válassza a **Show all** lehetőséget, majd a **Cover Letter** mezőben válassza a **villám ikon** vagy **fx ikon** lehetőséget a jobb oldalon.

   A **Function tab** fülön írja be a következő kifejezést, amely ugyanazt a kifejezést használja, mint az előző [küldetésben](../02-multi-agent/README.md):

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Ez a kifejezés ellenőrzi, hogy a **Html to text** műveletből származó _szöveg_ hosszabb-e 2000 karakternél, és ha igen, csak az első 2000 karaktert adja vissza; ellenkező esetben a teljes szöveget adja vissza.

![Kifejezés hozzáadása a Cover Letter paraméterhez](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.hu.png)

1. A kifejezés most hozzáadódik a **Cover Letter** mezőhöz.

![Kifejezés hozzáadva a Cover Letter paraméterhez](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.hu.png)

1. A **Source Email Address** mezőhöz keressen `from` kifejezést, és válassza az indító **From** paraméterét, mivel ez tartalmazza az e-mail cím értékét.

![Source Email Address paraméter](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.hu.png)

1. Az **Upload Date** mezőhöz válassza a **villám ikon** vagy **fx ikon** lehetőséget a jobb oldalon. A **Function tab** fülön írja be a következő kifejezést, amely az `utcNow()` függvényt használja:

```text
utcNow()
```

További információért az `utcNow` függvényről bontsa ki az alábbi tanulási blokkot.

??? info "További tanulás: `utcNow` függvény"

   🤔 **Mi az az `utcNow()` függvény?**
   
   - Az utcnow() függvény a Power Automate-ben visszaadja az aktuális dátumot és időt az Egyezményes Világidő (UTC) szerint ISO 8601 formátumban, például: `2025-09-23T04:32:14Z`
   
   🦋 **Példa**
   
   - Kifejezés:
          -  `concat('Jelentés generálva ekkor: ', utcnow())`
   - Kimenet:
          - Jelentés generálva ekkor: `2025-09-23T04:32:14Z`
      
   💡 **Fontos pontok**

- **Nincs szükség argumentumokra (bemeneti paraméterekre):** mindig az aktuális UTC időbélyeget adja vissza.
   - **Felhasználási esetek**
       - Időbélyegek hozzáadása naplókhoz vagy fájlnevekhez
       - Az aktuális idő összehasonlítása más dátumokkal
       - Ütemezés vagy időalapú feltételek

![Feltöltési dátum paraméter](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.hu.png)

1. Most befejeztük az **Új önéletrajz sor hozzáadása** művelet konfigurálását, így kiléphetünk a panelből annak összecsukásával.

![Kilépés a műveleti panelből](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.hu.png)

1. Új műveletet fogunk hozzáadni az **+ ikon** kiválasztásával az **Új önéletrajz sor hozzáadása** művelet alatt, amely betölti a műveletek hozzáadására szolgáló panelt. Válassza újra a **Microsoft Dataverse** csatlakozót.

![Dataverse művelet hozzáadása](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.hu.png)

1. Válassza ki a **Fájl vagy kép feltöltése** műveletet.

![Fájl vagy kép feltöltése művelet hozzáadása](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.hu.png)

1. Nevezze át a műveletet az **Ellipszis (...)** kiválasztásával, másolja és illessze be az alábbi nevet:

```text
Önéletrajz fájl feltöltése
```

![Művelet átnevezése](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.hu.png)

1. Ezután válassza ki a **Tartalom neve** mezőt, és válassza ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

A **Funkciók fülön** írja be az alábbi kifejezést, amely az `item ()` függvényt használja. Ez az aktuális elem (a csatolt fájl) `name` tulajdonságát kapja meg.

```text
item()?['name']
```

![Tartalom név paraméter konfigurálása](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.hu.png)

1. A **Táblanév** paraméterhez keressen rá a `res` szóra, és válassza ki a **Önéletrajzok** táblát.

![Táblanév paraméter konfigurálása](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.hu.png)

1. Ezután válassza ki a **Sorazonosító** mezőt, és válassza ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

Keressen rá az `ID` szóra, és válassza ki az **Önéletrajz** paramétert az _Új sor hozzáadása_ Dataverse műveletből, mivel ez tartalmazza a PDF fájl feltöltéséhez szükséges sor azonosítóját.

Válassza a **Hozzáadás** lehetőséget.

![Sorazonosító kiválasztása](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.hu.png)

1. Válassza ki az **Oszlopnév** mezőt, és válassza ki a **Önéletrajz PDF** opciót.

![Oszlopnév paraméter konfigurálása](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.hu.png)

1. Válassza ki a **Tartalom** mezőt, és válassza ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

A **Funkciók fülön** írja be az alábbi kifejezést, amely az `item ()` függvényt használja. Ez az aktuális elem (a csatolt fájl) `contentBytes` tulajdonságát kapja meg. A `contentBytes` egy fájl vagy csatolmány nyers bináris adatait jelenti, Base64 karakterláncként kódolva.

```text
item()?['contentBytes']
```

1. Befejeztük ennek a műveletnek a konfigurálását, így kiléphetünk a műveletből a balra mutató két szögletes zárójel («) kiválasztásával, hogy összecsukjuk a panelt.

![Műveleti panel összecsukása](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.hu.png)

1. Ezután válassza ki a **Feldolgozásra küld egy kérést a megadott copilotnak**, majd húzza és ejtse ezt a műveletet az **Önéletrajz fájl feltöltése** művelet alá a feltétel _Igaz_ útvonalán.

![Művelet húzása és ejtése az Igaz útvonalon](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.hu.png)

1. Válassza ki a **Feldolgozásra küld egy kérést a megadott copilotnak** műveletet a konfiguráláshoz.

![Művelet kiválasztása](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.hu.png)

1. A **Törzs/üzenet** mezőben válassza ki az összes mezőtartalmat, és törölje.

![Törzs paraméter törlése](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.hu.png)

1. Másolja és illessze be az alábbi szöveget a **Törzs/üzenet** mezőbe, és emelje ki a `ÖNÉLETRAJZ AZONOSÍTÓ HELYŐR` szöveget.

```text
Küldje el [ÖnéletrajzAzonosító (szöveg)] = "ÖNÉLETRAJZ AZONOSÍTÓ HELYŐR" és [ÖnéletrajzCím (szöveg_1)] = "ÖNÉLETRAJZ CÍM HELYŐR" és [ÖnéletrajzSzám (szöveg_2)] = "ÖNÉLETRAJZ SZÁM HELYŐR" a "Notify Teams Applicant channel" eszköznek a "Application Intake Agent" gyermekügynökben
```

![Önéletrajz azonosító helyőrszöveg cseréje](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.hu.png)

1. Válassza ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

Keressen rá az `önéletrajz` szóra, és válassza ki az **Önéletrajz** paramétert az _Új sor hozzáadása Dataverse_ műveletből, mivel ez tartalmazza az **Önéletrajz** sor létrehozott azonosítóját.

Válassza a **Hozzáadás** lehetőséget.

![Önéletrajz paraméter kiválasztása](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.hu.png)

1. Emelje ki az `ÖNÉLETRAJZ CÍM HELYŐR` szöveget. Válassza ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

Keressen rá a `cím` szóra, és válassza ki az **Önéletrajz cím** paramétert az _Új sor hozzáadása Dataverse_ műveletből, mivel ez tartalmazza az **Önéletrajz cím** értékét a létrehozott Önéletrajz sorból.

Válassza a **Hozzáadás** lehetőséget.

![Önéletrajz paraméter kiválasztása](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.hu.png)

1. Emelje ki az `ÖNÉLETRAJZ SZÁM HELYŐR` szöveget. Válassza ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

Keressen rá az `önéletrajz szám` szóra, és válassza ki az **Önéletrajz szám** paramétert az _Új sor hozzáadása Dataverse_ műveletből, mivel ez tartalmazza az **Önéletrajz szám** értékét a létrehozott Önéletrajz sorból.

Válassza a **Hozzáadás** lehetőséget.

![Önéletrajz paraméter kiválasztása](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.hu.png)

1. Befejeztük ennek a műveletnek és az ügynök folyamatának a konfigurálását 🙌🏻 Nagyszerűen haladsz! Most mentsük el az eseményindító folyamatot a **Vázlat mentése** kiválasztásával.

![Vázlat mentése](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.hu.png)

1. Most szerkesztenünk kell az ügynök folyamatának részleteit, válassza a **Vissza** lehetőséget.

![Vissza gomb kiválasztása](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.hu.png)

1. Válassza a **Szerkesztés** lehetőséget a **Részletek** szakaszban, és frissítse a **Tervet** a **Copilot Studio** opcióra.

Válassza a **Mentés** lehetőséget.

![Copilot Studio terv módosítása](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.hu.png)

1. Egy modális ablak jelenik meg, amelyben megerősítést kérnek a Copilot Studio tervre való váltáshoz. Válassza a **Megerősítés** lehetőséget.

![Copilot Studio terv módosításának megerősítése](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.hu.png)

1. A terv most frissült **Copilot Studio**-ra. Válassza a **Szerkesztés** lehetőséget, mivel közzé kell tennünk az eseményindító folyamatot az ügynökünk számára.

![Folyamat szerkesztése](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.hu.png)

1. Válassza a **Közzététel** lehetőséget.

![Közzététel](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.hu.png)

Hurrá! Az eseményindító folyamat most közzé van téve 😃

![Közzétéve](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.hu.png)

Folytassuk egy új ügynök folyamat létrehozásával, amelyet a **Application Intake Agent** gyermekügynök fog meghívni.

### 3.2. labor - Értesítés küldése egy Teams csatornára adaptív kártya segítségével

Most egy új ügynök folyamatot fogunk létrehozni a **Application Intake Agent** gyermekügynök számára, amely az eseményindító által átadott értékeket használja, hogy egy adaptív kártyát küldjön egy Teams csatornára. Ez az adaptív kártya értesíti a HR toborzási csapatot az automatikusan feltöltött PDF-ről, hogy át tudják nézni.

Kezdjük!

1. A **Felvételi ügynök** alkalmazásban válassza az **Ügynökök** fület, majd válassza ki az **Application Intake Agent** ügynököt.

![Application Intake Agent kiválasztása](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.hu.png)

1. Görgessen le a **Eszközök** szakaszhoz, és válassza a **+ Hozzáadás** lehetőséget.

![Új eszköz hozzáadása](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.hu.png)

1. Megjelenik az **Eszköz hozzáadása** modális ablak. Válassza a **+ Új eszköz** lehetőséget.

![Új eszköz kiválasztása](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.hu.png)

1. Válassza az **Ügynök folyamat** lehetőséget.

![Ügynök folyamat kiválasztása](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.hu.png)

1. Ezután betöltődik az **ügynök folyamat tervezője**. Az **Amikor egy ügynök hívja a folyamatot** triggerben válassza a **+ Bemenet hozzáadása** lehetőséget.

![Bemenet hozzáadása kiválasztása](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.hu.png)

1. Válassza a **Szöveg** lehetőséget a felhasználói bemenet típusaként.

![Szöveg kiválasztása](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.hu.png)

1. A bemeneti szövegmezőbe másolja és illessze be az alábbiakat a bemeneti paraméter nevéhez:

```text
ÖnéletrajzAzonosító
```

![ÖnéletrajzAzonosító bemenet](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.hu.png)

1. Ismételje meg ugyanazokat a lépéseket egy második szöveges bemenet hozzáadásához. Másolja és illessze be az alábbiakat a bemeneti paraméter nevéhez:

```text
ÖnéletrajzCím
```

![ÖnéletrajzCím bemenet](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.hu.png)

1. Ismételje meg ugyanazokat a lépéseket egy harmadik szöveges bemenet hozzáadásához. Másolja és illessze be az alábbiakat a bemeneti paraméter nevéhez:

```text
ÖnéletrajzSzám
```
![ÖnéletrajzSzám bemenet](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.hu.png)

1. Emlékszik, hogyan adtunk hozzá egy adaptív kártyát a [Toborzás](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) során egy témán belül az ügynökünk számára? Ezúttal egy adaptív kártyát fogunk hozzáadni egy ügynök folyamatban. Most hozzáadunk egy másik műveletet az ügynök folyamatunkhoz, amely egy adaptív kártyát küld egy Teams csatornára.

Válassza a **+ ikon** lehetőséget a trigger alatt.

![Új művelet hozzáadása](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.hu.png)

1. Válassza a **Kártya közzététele csevegésben vagy csatornában** műveletet.

![Kártya közzététele csevegésben vagy csatornában művelet kiválasztása](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.hu.png)

1. Microsoft Teams kapcsolat referencia létrehozása szükséges a bejelentkezett felhasználói fiókjával. Válassza a **Bejelentkezés** lehetőséget.

![Bejelentkezés kiválasztása](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.hu.png)

1. Válassza ki a felhasználói fiókját, majd válassza az **Hozzáférés engedélyezése** lehetőséget.

![Hozzáférés engedélyezése kiválasztása](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.hu.png)

1. Az alábbi bemeneti paraméterekhez:

| Paraméter | Beállítás módja | Részletek |
|----------|------------|---------|
| **Közzététel mint** | Legördülő | Válassza a `Flow bot` opciót |
| **Közzététel helye** | Legördülő | Válassza a `Csatorna` opciót |
| **Csapat** | Legördülő | Válasszon egy csapatot, amely elérhető a környezetében, és amelyhez hozzáférése van a labor gyakorlat elvégzéséhez |
| **Csatorna** | Legördülő | Válasszon egy csatornát, amely elérhető a környezetében, és amelyhez hozzáférése van a labor gyakorlat elvégzéséhez |

![Bemeneti paraméterek konfigurálása](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.hu.png)

1. Ezután konfiguráljuk az **Adaptív kártya** mezőt. Válassza az **Adaptív kártya** mezőt.

![Adaptív kártya mező kiválasztása](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.hu.png)

1. Nyissa meg a [Önéletrajz Táblázat Frissített JSON fájlt](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), másolja ki annak teljes tartalmát, és illessze be az Adaptív kártya mezőbe.

![JSON másolása és beillesztése](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.hu.png)

1. Hasonlóan ahhoz, amit a [Toborzás](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) során tettünk, frissíteni fogjuk a JSON payload meglévő értékeit tényleges értékekkel vagy dinamikus tartalommal.

Először frissítsük az URL-t a `url` tulajdonsághoz a `selectAction` tulajdonságon belül. Ezt az URL
1. A következőket kell látnod, ahol sárgával kiemelve találhatók a **Hiring Hub** modellvezérelt alkalmazás környezeti adatai.

     | Paraméter | Érték | Magyarázat |
     |----------|------------|---------|
     | **Szervezet URI** | GUID | A Dataverse/Dynamics 365 környezet szervezeti URL-je |
     | **appid** | GUID | Egy adott modellvezérelt alkalmazás megnyitásához az appid vagy appname lekérdezési paramétert használják. Ebben az esetben az appid van használatban |
     | **viewid** | GUID | A nézet azonosítóját tartalmazó lekérdezési paraméter |

       ![URL beillesztése](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.hu.png)

1. Ezután dinamikus tartalomértékeket adunk hozzá több tulajdonsághoz. Kezdjük azzal a szöveggel, amely megjeleníti az eseményindító által automatikusan létrehozott sor Önéletrajz szám hivatkozását.

      Válaszd ki a **panel** ikont az akciópanel betöltéséhez.

       ![Panel ikon kiválasztása](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.hu.png)

1. Görgess le arra a sorra, ahol a `text` tulajdonságot látod a `RESUME NUMBER PLACEHOLDER` esetében. Jelöld ki a helyőrző értéket, majd töröld.

       ![Helyőrző törlése](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.hu.png)

1. Kattints az idézőjelek közé, majd válaszd ki a **villám ikon** vagy **fx ikon** gombot jobbra.

      A **Dinamikus tartalom** fülön válaszd ki a **ResumeNumber** paramétert, majd kattints a **Hozzáadás** gombra.

       ![ResumeNumber paraméter hozzáadása](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.hu.png)

1. A **ResumeNumber** paraméter most dinamikus tartalomként hozzá lesz adva a `text` tulajdonsághoz.

       ![ResumeNumber dinamikus tartalom](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.hu.png)

1. Ugyanezeket a lépéseket megismételjük a `RESUME NAME PLACEHOLDER` esetében. Görgess le arra a sorra, ahol a `text` tulajdonságot látod a `RESUME NAME PLACEHOLDER` esetében. Jelöld ki a helyőrző értéket, majd töröld.

       ![Önéletrajz név helyőrző](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.hu.png)

1. Kattints az idézőjelek közé, majd válaszd ki a **villám ikon** vagy **fx ikon** gombot jobbra.

      A **Dinamikus tartalom** fülön válaszd ki a **ResumeTitle** paramétert, majd kattints a **Hozzáadás** gombra.

       ![ResumeTitle paraméter hozzáadása](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.hu.png)

1. A **ResumeTitle** paraméter most dinamikus tartalomként hozzá lesz adva a `text` tulajdonsághoz.

       ![ResumeTitle dinamikus tartalom](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.hu.png)

1. Ugyanezeket a lépéseket megismételjük a **Határidő** érték esetében, amely azt jelzi, hogy a toborzónak mikorra kell átnéznie az önéletrajzot. Görgess le arra a sorra, ahol a `text` tulajdonságot látod a `2023. május 21.` esetében.

       ![Hozzáférés engedélyezése kiválasztása](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.hu.png)

1. Töröld ezt a dátum helyőrző értéket, majd kattints az idézőjelek közé.

       ![Törlés](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.hu.png)

1. Válaszd ki a **villám ikon** vagy **fx ikon** gombot jobbra, majd a **Funkció** fülön írd be a következő kifejezést, és kattints a **Hozzáadás** gombra.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Ez a kifejezés két funkciót használ.

     | Funkció | Magyarázat |
     |----------|------------|
     | **addDays** | Hozzáad egy megadott számú napot egy adott dátumhoz, és visszaadja az eredményül kapott dátumot sztring formátumban |
     | **utcNow** | Visszaadja az aktuális dátumot és időt az egyezményes világidő (UTC) formátumban sztringként. |

      Az utcNow érték esetében a dátumot hónap és nap, majd év formátumban formázzuk.

       ![Határidő kifejezés](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.hu.png)

      A kifejezés most hozzá lesz adva a `text` tulajdonsághoz.

       ![Határidő kifejezés](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.hu.png)

1. Végül frissítjük az URL-t az `url` tulajdonságban az `actions` tömb tulajdonságának alján a JSON payloadban. A jelenlegi helyőrző URL-t lecseréljük az Önéletrajz sor URL-jére a **Hiring Hub** modellvezérelt alkalmazásban. Ez lehetővé teszi a toborzó számára, hogy kiválassza az adaptív kártya `Action.OpenURL` akcióját, és az önéletrajzra irányítsa a modellvezérelt alkalmazásban.

       ![Önéletrajz URL helyőrző törlése](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.hu.png)

1. A **Hiring Hub** modellvezérelt alkalmazásban nyiss meg egy sort az **Önéletrajzok** rendszer nézetben a bal oldali menü segítségével. Az önéletrajz sor formaként fog betöltődni a modellvezérelt alkalmazásban.

      Másold ki az Önéletrajz sor URL-jét.

    ??? info "Hogyan navigálj vissza a **Hiring Hub** modellvezérelt alkalmazásba, ha kiléptél/bezártad"

        1. Nyisd meg a [https://make.powerapps.com](https://make.powerapps.com) oldalt, és győződj meg róla, hogy abban a fejlesztői környezetben vagy, amelyet ezekhez a laborfeladatokhoz használsz, különben válts át rá.
        
        ![Navigálj a make.powerapps.com oldalra](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.hu.png)

        1. Válaszd ki az **Alkalmazások** opciót a bal oldali menüpanelen, majd a **Hiring Hub** modellvezérelt alkalmazásnál válaszd ki a **Lejátszás** ikont, hogy betöltsd azt a böngésződben.
        
        ![Hiring Hub modellvezérelt alkalmazás kiválasztása](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.hu.png)

       ![Önéletrajz sor URL másolása](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.hu.png)

1. Ezután navigálj vissza az ügynökfolyamathoz, jelöld ki a jelenlegi helyőrző URL értéket, majd töröld.

       ![Önéletrajz sor URL helyőrző kiválasztása](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.hu.png)

1. Ezután illeszd be a másolt URL-t az `url` tulajdonságba.

       ![Másolt Önéletrajz sor URL beillesztése](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.hu.png)

1. A következőket kell látnod. Töröld a `GUID` azonosító értéket a végéről. Ezt dinamikus tartalommal fogjuk helyettesíteni - a **ResumeId** paraméterrel.

       ![Önéletrajz URL helyőrző törlése](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.hu.png)

1. Válaszd ki a **villám ikon** vagy **fx ikon** gombot jobbra.

      A **Dinamikus tartalom** fülön válaszd ki a **ResumeId** paramétert, majd kattints a **Hozzáadás** gombra.

       ![ResumeId paraméter](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.hu.png)

1. A **ResumeId** most dinamikus tartalomként hozzá lesz adva. A következő sárgával kiemelve található a **Hiring Hub** modellvezérelt alkalmazás környezeti adatai.

     | Paraméter | Érték | Magyarázat |
     |----------|------------|---------|
     | **Szervezet URI** | GUID | A Dataverse/Dynamics 365 környezet szervezeti URL-je |
     | **appid** | GUID | Egy adott modellvezérelt alkalmazás megnyitásához az appid vagy appname lekérdezési paramétert használják. Ebben az esetben az appid van használatban |
     | **id** | GUID | Az Önéletrajz sor azonosítóját tartalmazó lekérdezési paraméter |

       ![ResumeId dinamikus tartalom](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.hu.png)

1. Befejeztük a **Kártya közzététele csevegésben vagy csatornában** akció konfigurálását 👏🏻 Lépj ki az akciókonfigurációs panelből az **x** ikon kiválasztásával.

       ![Panel bezárása](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.hu.png)

1. Végül konfiguráljuk az utolsó akciót, **Válasz az ügynöknek**, amely egy szöveget küld vissza az ügynöknek a feldolgozás befejezéséhez.

      A **Válasz az ügynöknek** akcióban válaszd ki a **+Kimenet hozzáadása** opciót.

       ![Kimenet hozzáadása kiválasztása](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.hu.png)

1. Válaszd ki a **Szöveg** opciót a kimenet típusaként.

       ![Szöveg kiválasztása kimenet típusaként](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.hu.png)

1. Írd be a következőt a kimenet nevének.

       ![Beszélgetés vége kimenet](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.hu.png)

1. Írd be a következőt a kimenet értékeként.

       ```text
       Finished
       ```

       ![Beszélgetés vége kimenet értéke](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.hu.png)

1. Most befejeztük az ügynökfolyamat konfigurálását. Válaszd ki a **Vázlat mentése** opciót az ügynökfolyamat mentéséhez. Mentés után megerősítő üzenet jelenik meg.

       ![Vázlat mentése](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.hu.png)

1. Az ügynökfolyamat közzététele előtt frissítenünk kell az ügynökfolyamat részleteit. Válaszd ki az **Áttekintés** fület, majd kattints a **Szerkesztés** gombra.

      Az folyamat neve mezőbe írd be a következőt.

       ```text
       Notify Teams Applicant channel
       ```      

      Ezután válaszd ki a **Frissítés** ikont az ügynökfolyamat leírásának AI segítségével történő frissítéséhez.

      Majd kattints a **Mentés** gombra az ügynökfolyamat frissített részleteinek mentéséhez.

       ![Részletek szerkesztése és mentése](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.hu.png)

1. Navigálj vissza a **Tervező** fülre, majd válaszd ki a **Közzététel** opciót az ügynökfolyamat közzétételéhez. Mentés után megerősítő üzenet jelenik meg.

       ![Ügynökfolyamat közzététele](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.hu.png)

1. Az ügynökfolyamatot most hozzá kell adni eszközként az **Application Intake Agent**-hez. Navigálj vissza a **Hiring Agent**-hez, majd válaszd ki az **Ügynökök** fület, és az **Application Intake Agent**-et.

       ![Application Intake Agent kiválasztása](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.hu.png)

1. Az ügynök **Részletek** szekciójában frissítsük a **Leírás** mezőt. Másold ki a következőt, majd illeszd be a leírás szövegének végére.

       ```text
       és értesítse a Teams Applicant csatornát is
       ```

       ![Ügynök leírásának frissítése](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.hu.png)

1. Ezután hozzáadjuk az ügynökfolyamatot eszközként. Görgess le, majd válaszd ki a **+ Hozzáadás** opciót.

       ![Hozzáadás kiválasztása](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.hu.png)

1. Válaszd ki a korábban létrehozott ügynökfolyamatot, **Notify Teams Applicant Channel**.

       ![Ügynökfolyamat kiválasztása](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.hu.png)

1. Ezután válaszd ki a **Hozzáadás és konfigurálás** opciót.

       ![Hozzáadás és konfigurálás kiválasztása](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.hu.png)

1. Az ügynökfolyamat **Bemenetek** szekciójában láthatóak a korábban konfigurált három bemenetek. Alapértelmezés szerint a **Kitöltés módja** beállítás **Dinamikus kitöltés AI-val** értékre van állítva. Ezt a beállítást változatlanul hagyjuk, mivel az eseményindítóból érkező prompt (az utolsó akcióban, **Küldjön egy promptot a megadott copilotnak feldolgozásra** - ez a **Lab 3.1 - Önéletrajzok feltöltésének automatizálása Dataverse-be e-mailben kapott önéletrajzok alapján** 38-44 lépése) tartalmazni fogja az AI által kinyert paraméterértékeket.

       ![Eszköz ügynökfolyamat bemenetek](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.hu.png)

1. Most, hogy az eszköz hozzá lett adva az **Application Intake Agent**-hez, frissíteni kell az ügynök utasításait. Válaszd ki a **vissza nyíl** ikont az ügynökök listájához való visszatéréshez.

       ![Vissza nyíl ikon kiválasztása](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.hu.png)

1. Válaszd ki az **Application Intake Agent**-et az **Ügynökök** fülön a **Hiring Agent**-ben.

       ![Application Intake Agent kiválasztása](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.hu.png)

1. Az **Utasítások** mezőben adj hozzá egy új sort a `2.Post-Upload` utasítások után. Másold és illeszd be a következő utasításokat.

       ```text
       Önéletrajz feltöltési folyamat e-mailen keresztül
       1. Amikor üzenetet kapsz, **Küldj [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" és [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" és [ResumeNumber (text_2)]= "R01026" az "Notify Teams Applicant channel" eszköznek a "Application Intake Agent" alügynökben, hívd meg [AGENT FLOW PLACEHOLDER]
       ```

       ![Application Intake Agent utasítások frissítése](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.hu.png)

1. Jelöld ki az `[AGENT FLOW PLACEHOLDER` szöveget.

       ![Helyőrző kiemelése](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.hu.png)

1. Írd be a perjel karaktert, `/`, majd válaszd ki a **Notify Teams Applicant Channel** eszközt.

       ![Notify Teams Applicant Channel eszköz kiválasztása](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.hu.png)
1. Az ügynök folyamatot mostantól a **Jelentkezési Ügynök** fogja elindítani az utasításoknak megfelelően, miután az utolsó művelet (**Feldolgozásra küld egy promptot a megadott copilotnak**) az eseményindítóban visszaküldi a paraméterértékeket tartalmazó promptot az ügynöknek.

      Válassza a **Mentés** lehetőséget, hogy elmentse a frissített utasításokat a **Jelentkezési Ügynök** számára.

       ![Mentés kiválasztása](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.hu.png)

1. Az utasítások frissítve lesznek, miután az ügynököt elmentették.

       ![Utasítások frissítve](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.hu.png)

1. Most publikálnunk kell a **Felvételi Ügynököt**. Válassza a **Publikálás** lehetőséget a jobb felső sarokban, majd a megjelenő _Publikálja ezt az ügynököt_ modális ablakban válassza a **Publikálás** lehetőséget.

       ![Felvételi Ügynök publikálása](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.hu.png)

1. A publikálás után megjelenik egy megerősítő üzenet, amely jelzi, hogy az ügynök publikálva lett.

       ![Megerősítő üzenet](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.hu.png)

Most már tesztelhetjük az ügynököt!

### 3.3. labor - Eseményindító tesztelése

1. Az eseményindító végrehajtásához egy e-mailt kell küldeni egy PDF formátumú önéletrajzzal. Az Outlookban hozzon létre egy új e-mail üzenetet.

     | E-mail komponens | Részletek |
     |----------|------------|
     | **Címzett** | Használja a bejelentkezett felhasználói fiókját értékként |
     | **Fájl csatolmány** | Töltse fel a [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) fájlt |
     | **Szövegtörzs** | Másolja és illessze be az alábbi szöveget az e-mail szövegtörzsébe |

       ```text
       Tisztelt Felvételi Menedzser!

       Azért írok, hogy kifejezzem érdeklődésemet az Önök szervezeténél meghirdetett Senior Power Platform Engineer pozíció iránt. Több mint kilenc év tapasztalattal rendelkezem a Microsoft felhőalapú platformjain biztonságos és skálázható megoldások szállításában, és biztos vagyok benne, hogy hatékonyan tudok hozzájárulni az Önök csapatához.

       Legutóbbi pozíciómban, mint vezető Power Platform mérnök, kifejlesztettem egy automatizált önéletrajz-beviteli folyamatot, amely csökkentette a manuális osztályozást és javította a kereshetőséget. HR-esetkezelő alkalmazásokat szállítottam, bevezettem megoldás-tudatos folyamatokat, és PR-ellenőrzéseket valósítottam meg a telepítési idők javítása érdekében. Szakértelmem kiterjed a Power Apps, Power Automate, Power Pages, Dataverse és számos Microsoft 365 szolgáltatásra, valamint a Graph/REST API-k és az Azure Functions integrációjára.

       Korábban Teams jóváhagyásokat fejlesztettem adaptív kártyákkal, amelyek azonos napi jóváhagyási időket eredményeztek, és robusztus hibakezelési keretrendszereket hoztam létre. Háttérmunkám magában foglalja a régi munkafolyamatok migrálását Power Automate-re és önkiszolgáló portálok építését, amelyeket több száz alkalmazott fogadott el.

       Számítástechnikai B.Sc. diplomával rendelkezem, valamint Power Platform fejlesztői (PL-400) és megoldás-architektúra (PL-600) tanúsítvánnyal. Szenvedélyesen mentorálok, és önkéntesként tevékenykedtem helyi alkotói csoportokban.

       Mellékelten csatoltam önéletrajzomat az Önök figyelmébe. Örömmel venném a lehetőséget, hogy megbeszéljük, hogyan illeszkednek képességeim és tapasztalataim az Önök igényeihez.

       Köszönöm az idejét és figyelmét.

       Üdvözlettel,
       Taylor Testperson
       ```

       **Küldje el** az e-mailt, miután megírta.

       ![E-mail írása PDF fájl csatolmánnyal](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.hu.png)

1. A Power Automate készítői portálján az eseményindító folyamathoz válassza a **Frissítés** ikont, hogy megtekintse a sikeresen lefutott folyamatot a küldött e-mailhez.

       ![Frissítés ikon kiválasztása a folyamat megtekintéséhez](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.hu.png)

1. Térjen vissza a Copilot Studio-ba, és válassza ki a **Felvételi Ügynök** **Tevékenység** lapját.

       ![Tevékenység lap kiválasztása](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.hu.png)

1. A **Tevékenység** lap betöltődik, amely megjeleníti a **Felvételi Ügynök** összes tevékenységét. Lesz egy tevékenység **Automatikus** névértékkel, amelynek állapota **Befejezett**. Ez a tevékenység az eseményindítót és az ügynök folyamatot képviseli, amelyet elindítottak.

       ![Tevékenység befejezve](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.hu.png)

1. Válassza ki a tevékenységet, majd válassza ki az eseményindítót a tevékenységtérképen. A jobb oldali panelen vegye észre, hogy a prompt bemeneti paraméterei tartalmazzák a `Resume Id`, `Resume Title` és `Resume Number` paraméterértékeket a **Dataverse** sorból, amelyet létrehoztak. Ez a dinamikus tartalomértékekből származik, amelyeket korábban a **3.1. labor - Önéletrajzok feltöltésének automatizálása e-mailben** 18-27. lépéseiben konfiguráltunk.

       ![Eseményindító](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.hu.png)

1. Térjen vissza a **Felvételi Központ** modellvezérelt alkalmazásba, és a **Önéletrajzok rendszer nézetében** válassza a **Frissítés** lehetőséget a nézet frissítéséhez. Az e-mailben küldött önéletrajzhoz létrehozott új sor most már megjelenik, mivel az eseményindító létrehozta.

       ![Önéletrajz sor létrehozva](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.hu.png)

1. Térjen vissza a Copilot Studio-ba, és válassza ki a **Notify Teams Applicant Channel** ügynök folyamatot a **Jelentkezési Ügynök** tevékenységtérképén. A jobb oldali panelen vegye észre, hogy a bemenetek értékei a Dataverse sorból származnak. Ez a promptból származik, amelyet az eseményindító utolsó művelete (**Feldolgozásra küld egy promptot a megadott copilotnak**) küldött, és amely tartalmazza a paraméterértékeket az újonnan létrehozott Dataverse sorból. Így tudjuk átadni az eseményindítók paraméterértékeit az ügynök folyamatoknak.

       ![Ügynök folyamat kiválasztása](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.hu.png)

1. Végül nézzük meg az adaptív kártyát, amelyet a **Microsoft Teams** csatornába posztoltak. A csatornában látni fogjuk az adaptív kártyát, amely megjeleníti az újonnan létrehozott Dataverse önéletrajz sor információit. Vigye az egeret az adaptív kártya elején található hiperhivatkozás fölé, és vegye észre, hogy az URL az Önéletrajzok rendszer nézet URL-je, amelyet korábban konfiguráltunk az adaptív kártya JSON (a **3.2. labor - Teams csatorna értesítése adaptív kártyával** 15-19. lépései) payloadjában.

       ![Adaptív kártya Önéletrajzok Táblázat rendszer nézet URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.hu.png)

1. Válassza ki a hiperhivatkozást, és átirányítják az Önéletrajzok rendszer nézetére a **Felvételi Központ** modellvezérelt alkalmazásban a böngészőjében.

       ![Önéletrajzok rendszer nézet a Felvételi Központ modellvezérelt alkalmazásban](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.hu.png)

1. Térjen vissza az adaptív kártyához, amelyet a Microsoft Teams csatornába posztoltak. Ezúttal vigye az egeret a **View Resume** fölé, amely az adaptív kártya `Action.OpenURL` művelete. Vegye észre, hogy az URL az Önéletrajz sor, amelyet korábban konfiguráltunk az adaptív kártya JSON (a **3.2. labor - Teams csatorna értesítése adaptív kártyával** 30-36. lépései) payloadjában.

       ![Adaptív kártya Önéletrajz sor URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.hu.png)

1. Válassza ki a műveletet, és átirányítják az Önéletrajz sor űrlapjára a **Felvételi Központ** modellvezérelt alkalmazásban a böngészőjében.

       ![Önéletrajz sor a Felvételi Központ modellvezérelt alkalmazásban](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.hu.png)

## ✅ Küldetés Teljesítve

Gratulálunk! 👏🏻 Kiváló munka, Operatív.

✅ Eseményindító: létrehozott egy eseményindítót, amely Dataverse paraméterértékeket ad át egy ügynök folyamatnak.  
✅ Ügynök folyamat létrehozása: a Dataverse paraméterértékeket felhasználva adaptív kártyát posztol egy Microsoft Teams csatornába, hogy értesítse a HR toborzó csapatot.  
✅ Gyermek ügynök utasításainak frissítése: a folyamat elindításához, miután az eseményindító befejeződött.

Ez lehetővé teszi a **Felvételi Ügynök** számára, hogy önállóan működjön, amikor önéletrajzokat kap e-mail csatolmányként, és értesítse a HR toborzó csapatot manuális áttekintés céljából.

Ez a **03. labor - Jelentkezési e-mailek automatizálása** vége, válassza az alábbi linket a következő leckére való továbblépéshez.

⏭️ [Lépjen a **Ügynök utasítások szerkesztése** leckére](../04-agent-instructions/README.md)

## 📚 Taktikai Források

📖 [Tegye ügynökét önállóvá a Copilot Studio-ban](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Eseményindító hozzáadása](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Ügynök folyamatok használata az ügynökével](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Power Automate indítók bevezetése](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Power Automate folyamatok használata ügynökökkel](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Adatvesztés megelőzése a Copilot Studio-ban](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.