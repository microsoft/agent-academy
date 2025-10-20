<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-20T17:22:21+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "hu"
}
-->
# 🚨 Küldetés 09: Adj hozzá egy ügynökfolyamatot a Témádhoz az automatizálás érdekében

## 🕵️‍♂️ KÓDNEVE: `MŰVELET AUTOMATIZÁLÁSI ERŐMŰ`

> **⏱️ Műveleti időablak:** `~30 perc`  

🎥 **Nézd meg az útmutatót**

[![Ügynökfolyamat videó előnézet](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.hu.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Nézd meg az útmutatót a YouTube-on")

## 🎯 Küldetés összefoglaló

Az ügynököd már képes kommunikálni a felhasználókkal és információt nyújtani, de az igazi működési kiválóság érdekében az ügynöknek cselekednie is kell. Ez a küldetés átalakítja a beszélgető ügynöködet egy automatizálási erőművé, amely ügynökfolyamatokkal van felszerelve.

A küldetés végére létrehozol egy teljes körű eszköz igénylési automatizációt, amely adaptív kártyán keresztül gyűjti be a felhasználói adatokat, SharePointból adatokat nyer ki, e-mailben értesítéseket küld a vezetőknek, és zökkenőmentes visszajelzést nyújt a felhasználóknak - mindezt az ügynököd intelligens munkafolyamat-automatizációval irányítja.

## 🔎 Célok

Ebben a küldetésben megtanulod:

1. Megérteni, mik azok az ügynökfolyamatok, és miben különböznek a Power Automate felhőfolyamataitól az automatizáció terén.
1. Megismerni az ügynökfolyamatok erőteljes funkcióit, beleértve az AI műveleteket és a természetes nyelvi szerkesztést.
1. Felfedezni az ügynökfolyamat-tervezőt és az kifejezések használatát a dinamikus adatkezeléshez.
1. Létrehozni egy teljes eszköz igénylési automatizációt, amely integrálja a SharePoint adatokat és az e-mail értesítéseket.

## 🤔 Mi az az ügynökfolyamat?

Az ügynökfolyamatok hatékony eszközt kínálnak az ismétlődő feladatok automatizálására és az alkalmazások, szolgáltatások integrálására. Gondolj rájuk úgy, mint strukturált, lépésről lépésre haladó munkafolyamatokra, amelyeket az ügynököd végrehajthat a feladatok automatizálása vagy más alkalmazásokkal és szolgáltatásokkal való kapcsolódás érdekében. Ezek mini munkafolyamatok, amelyek segítik az ügynököt például értesítések küldésében, rekordok frissítésében vagy eseményekre való reagálásban.

Az autonóm ügynökökkel ellentétben, amelyek mesterséges intelligenciát használnak a döntések meghozatalához, az ügynökfolyamatok **determinista munkafolyamatok** - vagyis mindig ugyanazt az utat követik, biztosítva a következetes és megbízható eredményeket.

Egyszerűen fogalmazva:

- Segítenek az ügynöködnek _cselekedni_, nem csak _beszélni_ a felhasználókkal.
- Újrahasználhatók különböző témák és ügynökök között, és aktiválhatók felhasználói üzenetek, események vagy más alkalmazások és szolgáltatások által.

## 🙋🏽 Igen, de miben különbözik a Power Automate felhőfolyamataitól?

Mind az ügynökfolyamatok, mind a Power Automate felhőfolyamatok segítenek a feladatok automatizálásában. Különböző célokra készültek, és eltérő módon működnek.

### 🤖 Ügynökfolyamatok a Copilot Studio-ban

**Mire valók:**

- Beszélgető és autonóm ügynökök számára készültek (ügynöki utasításokon keresztül) a Copilot Studio-ban.
- Az üzleti rendszerekkel való interakcióra összpontosítanak intelligens, AI-vezérelt automatizációval.

**Miért hasznosak:**

- Könnyen építhetők és kezelhetők közvetlenül a Copilot Studio-ban.
- Kiválóan alkalmasak olyan feladatok automatizálására, amelyek _beszélgetés közben_ történnek a felhasználókkal, például szabadságigénylés benyújtása.
- Nincs szükség külön Power Automate licencre, mivel a számlázás a Copilot Studio-n belüli használaton alapul. Ez időt és költséget takaríthat meg a vállalati csapatok számára.

**Korlátozások:**

- Nem oszthatók meg, másolhatók vagy rendelhetők hozzá társtulajdonosok.
- Az ügynökfolyamatok csak a Copilot Studio-ban láthatók és használhatók.
- Jelenleg az ügynökök eseményindítói szerkeszthetők a Power Automate készítői portálon.

### ☁️ Power Automate felhőfolyamatok

**Mire valók:**

- Általános célú automatizációra tervezték, amely számos alkalmazás és szolgáltatás között működik.
- Függetlenül futtathatók, vagy együttműködhetnek az ügynökfolyamatokkal.

**Miért hasznosak:**

- Széles körű csatlakozók kínálata.
- Ideális az ügynökökön kívüli folyamatok automatizálására.
- Megoszthatók, újrahasználhatók és kezelhetők csapatok között.

**Követelmények:**

- Power Automate licencre van szükség a használatukhoz.

### 📗 Összefoglaló

| Ezt használd | Amikor azt szeretnéd, hogy |
| :- | :- |
| Ügynökfolyamatok | Automatizálj feladatokat egy ügynökön belül, használj AI-t, és tartsd mindent a Copilot Studio-ban |  
| Power Automate felhőfolyamatok | Automatizálj alkalmazások és szolgáltatások között, vagy építs munkafolyamatokat ügynökökön kívül |

## 👍🏻 Miért érdemes ügynökfolyamatokat használni

Az ügynökfolyamatok mindig egy fix útvonalat követnek - ugyanazt teszik minden alkalommal, ha ugyanazt a bemenetet kapják.

Ezáltal:

- **Megbízhatóak** - biztos lehetsz benne, hogy minden alkalommal ugyanúgy működnek.
- **Kiszámíthatóak** - tudod, milyen eredményt várhatsz, amikor a folyamat fut.
- **Szabályalapúak** - az általad meghatározott lépéseket követik.

További előnyök:

- **Automatizáció** - lehetővé teszi az ügynök számára, hogy ismétlődő feladatokat kezeljen, például űrlapok benyújtását vagy értesítések küldését.
- **Kapcsolódás** - több mint 1400 csatlakozóval, mint például ServiceNow, SharePoint, Salesforce. Vagy készíthetsz saját egyedi csatlakozót.
- **Szorosan integrált** - az ügynökfolyamatok az ügynök logikájának részei, közvetlenül a felhasználói üzenetek vagy beszélgetésben történő műveletek indítják el őket.
- **Skálázhatóság** - folyamatok újrahasználata több ügynök vagy forgatókönyv között.
- **Kódmentes vagy alacsony kódú** - természetes nyelv vagy vizuális tervező segítségével építhetsz folyamatokat.
- **Minden egy platformon** - az ügynökfolyamatokat egy helyen tervezheted, tesztelheted és telepítheted - a Copilot Studio-ban. Nincs szükség platformok közötti váltásra.

## 🏄🏻‍♂️ Hogyan javítják az ügynökfolyamatok az ügynöködet?

Az ügynökfolyamatok lehetővé teszik, hogy az ügynököd többet tegyen annál, mint hogy "beszélget" a felhasználókkal. Lehetővé teszik, hogy cselekedjen és kapcsolatba lépjen rendszerekkel.

Tegyük fel, hogy egy pénzügyi osztályon dolgozol, és sok számlát kapsz a beszállítóktól. Általában valakinek el kell olvasnia minden számlát, ki kell emelnie a fontos részleteket - az összeget, dátumot, kitől érkezett -, ellenőriznie kell, hogy minden egyezik-e a nyilvántartásoddal, majd elküldeni a megfelelő személynek jóváhagyásra. Ez időigényes és fárasztó.

A Copilot Studio ügynökfolyamataival automatizálhatod ezt a folyamatot. Amint a számla beérkezik, az ügynök:

1. Elolvassa a dokumentumot intelligens dokumentumfeldolgozással, hogy megtalálja a kulcsfontosságú információkat.
1. Ellenőrzi az adatokat a vállalati nyilvántartásod alapján, hogy minden rendben van-e.
1. Jóváhagyásra továbbítja a megfelelő személy(ek)nek.

Ez időt takarít meg, csökkenti a hibák számát, és sokkal gördülékenyebbé teszi az egész folyamatot.

### Gondolj rá így

- **Ügynökök**: az okos döntéshozók
- **Ügynökfolyamatok**: a megbízható végrehajtók

### Miért fontos ez?

- A legjobb mindkét világból: megbízható automatizáció és rugalmas AI.
- Könnyen építhetsz és frissíthetsz folyamatokat, ahogy az üzleti igények változnak.
- Az automatizációt skálázhatod csapatok között.

## 🔌 Kulcsfunkciók, amelyek erőteljessé teszik az ügynökfolyamatokat

1. **Természetes nyelvi szerkesztés**
    - Leírhatod, mit szeretnél, hogy a folyamat tegyen, egyszerű hétköznapi nyelven.
    - A Copilot megérti a szándékodat, és létrehozza a folyamatot neked.
    - Nem kell kódot írnod - csak magyarázd el az ötletedet.

1. **AI műveletek**

    Használj AI-t:

    - Dokumentumok vagy képek olvasására és megértésére.
    - Hosszú tartalmak összefoglalására rövid, hasznos válaszokká.
    - Okos ajánlások vagy döntések meghozatalára.

1. **Generatív műveletek**
    - Ezek lehetővé teszik, hogy a folyamat valós időben alkalmazkodjon.
    - Az ügynök megtervezheti és módosíthatja a lépéseket a változó információk alapján.

1. **Integrációs műveletek**
    - Kapcsold össze a folyamatot más eszközökkel, mint például Outlook, Microsoft Teams, ServiceNow, SharePoint és más alkalmazások és szolgáltatások, több mint 1400 beépített csatlakozón keresztül, vagy saját egyedi csatlakozón keresztül.
    - Ez segíti az ügynököt, hogy együttműködjön a csapatod által már használt alkalmazásokkal.

1. **Ember a folyamatban**
    - Adj hozzá jóváhagyási lépéseket, ahol egy személynek kell átnéznie vagy megerősítenie valamit.
    - [Haladó jóváhagyások](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) támogatják az emlékeztetőket, delegálást és többlépcsős jóváhagyásokat.

## ⚙️ Hogyan működnek

1. **Indítás**

    Egy esemény indítja el a folyamatot - például egy felhasználó kérdést tesz fel, a folyamatot egy témából indítják, egy ütemezett időpontban, vagy egy másik rendszerben történő esemény.

1. **Műveletek**

    Ezek azok a lépések, amelyeket az ügynök követ - e-mail küldése, API hívása, jegy frissítése a ServiceNow-ban.

## 🧶 Hogyan hozz létre ügynökfolyamatot

1. **Természetes nyelv**: írd le, mit szeretnél, hogy az ügynök tegyen, és a Copilot megépíti neked.
1. **Tervező vászon**: húzd és ejtsd a műveleteket, feltételeket és ciklusokat az ügynökfolyamat-tervezőben, hogy létrehozd a folyamatot.

## 🎨 Mi az ügynökfolyamat-tervező?

Ez egy vizuális eszköz a Copilot Studio-ban, amely segít ügynökfolyamatokat építeni, szerkeszteni és kezelni, amelyek lépésről lépésre utasításokat adnak az ügynöködnek a feladatok elvégzéséhez. Úgy tervezték, hogy könnyen használható legyen, még akkor is, ha új vagy az ügynökfolyamatok terén.

### Az ügynökfolyamat-tervező kulcsfunkciói

1. **Vizuális vászon**
    - Az egész folyamatot diagramként láthatod.
    - Könnyen nagyíthatsz/kicsinyíthetsz, illesztheted a nézetet vagy használhatsz minitérképet nagy folyamatok navigálásához.

1. **Műveletek hozzáadása és eltávolítása**
    - Kattints a _plusz (+)_ gombra, hogy új műveletet adj hozzá, például üzenet küldése vagy elem frissítése egy SharePoint listában.
    - Kereshetsz műveleteket csatlakozókból, és beállíthatod őket a beállításokon keresztül.
    - Egy művelet eltávolításához kattints a _három pont (⋮)_ gombra, és válaszd a _Törlés_ opciót.

1. **Paraméterek ellenőrzése**
    - Kattints bármelyik műveletre, hogy megtekintsd vagy szerkeszd a beállításait, amelyeket _paramétereknek_ neveznek.
    - Manuálisan megadhatsz értékeket, vagy használhatsz _kifejezéseket_, hogy dinamikussá tedd őket.

1. **Verziótörténet**
    - Minden alkalommal, amikor elmented a folyamatot, egy verzió rögzítésre kerül.
    - Visszatérhetsz, megtekintheted vagy visszaállíthatod a korábbi verziót, ha szükséges.

1. **Hibakeresés**
    - A _Folyamatellenőrző_ kiemeli az esetleges hibákat.
    - Minden hibát meg kell oldani a folyamat közzététele előtt.

1. **Közzététel és tesztelés**
    - Miután a folyamat hibamentes, tedd közzé, hogy élő legyen.
    - Használd a _Teszt_ funkciót, hogy manuálisan vagy automatikusan futtasd a folyamatot, és ellenőrizd, hogy működik-e a vártak szerint.

### Miért érdemes az ügynökfolyamat-tervezőt használni?

- **Vizuális és intuitív** - folyamatokat építhetsz húzással és kattintással.
- **Biztonságos kísérletezés** - a verziótörténet lehetővé teszi a változtatások visszavonását.
- **Beépített tesztelés** - segít megbizonyosodni arról, hogy minden működik, mielőtt élővé válik.

## 🔤 Említetted a _kifejezéseket_ - mik azok a kifejezések?

A kifejezések kis formulák vagy parancsok, amelyek segítenek az ügynökfolyamatnak az adatok kezelésében. Ezeket használhatod értékek kisz
- Példa: `addDays(utcNow(), 7)` kimenete 7 nappal későbbi dátum.

- `formatDateTime()` - Formázza a dátumot olvasható szöveggé.
      - Példa: Hétfő, 2025. július 7.

#### ✅ Logikai

- `if()` - Egy értéket futtat, ha igaz, másikat, ha hamis.
      - Példa: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - Ellenőrzi, hogy két érték megegyezik-e.

- `and()`, `or()`, `not()` - Több feltétel kombinálása.

#### 🪣 Egyéb hasznos függvények

- `coalesce()` - Az első nem üres értéket adja vissza.
      - Hasznos tartalék/előre beállított értékekhez.

- `guid()` - Egyedi azonosítót generál.
      - Hasznos nyomon követéshez vagy naplózáshoz.

- `length()` - Megszámolja, hány karakter vagy elem van egy szövegben vagy tömbben.

## ⭐ Legjobb gyakorlatok

Íme néhány legjobb gyakorlat a Copilot Studio-ban történő ügynökfolyamatok létrehozásához.

1. **Kezdje egyszerűen, és építse fokozatosan**

    - Kezdjen egy kis, egyértelmű feladattal, például egy üzenet küldésével.
    - Adjon hozzá további lépéseket, miután tesztelte az automatizálás alapjait.

1. **Használjon egyértelmű és leíró műveletneveket**

    - Nevezze el egyértelműen az egyes lépéseket, hogy Ön és csapata is megértse, mit csinálnak.
    - Példa: a SharePoint csatlakozó művelet alapértelmezett "Elem frissítése" neve helyett nevezze át arra, amit frissít, például "Eszköz állapotának frissítése".

1. **Ellenőrizze a hibákat a közzététel előtt**

    - Használja a **folyamatellenőrzőt**, hogy megtalálja és kijavítsa az esetleges problémákat.
    - Nem tudja közzétenni a folyamatokat, ha hibák vannak, ezért próbálja meg azokat azonnal megoldani.

1. **Tesztelje alaposan a folyamatot**

    - Csak azért, mert elmenti és közzéteszi, még nem biztos, hogy úgy működik, ahogy várja.
    - Használja a _Teszt_ funkciót, hogy manuálisan vagy automatikusan futtassa a folyamatot, és ellenőrizze az eredményeket.

1. **Használja a verzióelőzményeket**

    - Gyakran mentse a folyamatot, hogy szükség esetén visszatérhessen korábbi verziókhoz.
    - A _Verzióelőzmények_ panelen megtekintheti és visszaállíthatja a korábbi verziókat.

1. **Használja bölcsen a paramétereket és kifejezéseket**

    - A műveletek konfigurálásakor használjon paramétereket, hogy a folyamat dinamikus legyen.
    - Értékeket kézzel is megadhat, vagy kifejezéseket használhat azok kiszámításához, illetve kombinálhatja azokat a korábbi műveletek értékeivel a _dinamikus tartalom_ választó segítségével.

1. **Törölje a nem használt műveleteket**

    - Ha hozzáad egy műveletet, de később úgy dönt, hogy nincs rá szüksége, távolítsa el, hogy a folyamata tiszta maradjon.

## 🧪 Labor 09 - Ügynökfolyamat hozzáadása automatizáláshoz és a témaképességek fejlesztése

Most megtanuljuk, hogyan fejleszthetjük a témánkat adaptív kártyák segítségével, valamint a témák és csomópontok fejlettebb funkcióinak használatával.

- [9.1 Ügynökfolyamat létrehozása](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Ügynökfolyamat hozzáadása a témához](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Kérés eszköz téma frissítése több csomóponttal a jobb felhasználói élmény érdekében](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Ügynök tesztelése több forgatókönyvvel](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Használati eset

**Mint** egy alkalmazott vezetője

**Azt szeretném**, hogy eszközökre vonatkozó kérelmeket kapjak

**Hogy** át tudjam tekinteni az alkalmazott által kért eszközt.

Kezdjük!

### Előfeltételek

1. **SharePoint lista**

    A **Devices** SharePoint listát fogjuk használni a [00. lecke - Kurzus beállítása - 3. lépés: Új SharePoint webhely létrehozása](../00-course-setup/README.md#step-4-create-new-sharepoint-site) alapján.

    Ha még nem állította be a **Devices** SharePoint listát, térjen vissza a [00. lecke - Kurzus beállítása - 3. lépés: Új SharePoint webhely létrehozása](../00-course-setup/README.md#step-4-create-new-sharepoint-site) részhez.

1. **Contoso Helpdesk Agent**

    Az előzőekben létrehozott ügynököt fogjuk használni a [06. lecke - Egyedi ügynök létrehozása természetes nyelv használatával a Copilotban és az adatokkal való alapozás](../06-create-agent-from-conversation/README.md) alapján.

### 9.1 Ügynökfolyamat létrehozása

Ebben a gyakorlatban létrehozunk egy ügynökfolyamatot, amely lekéri a SharePoint elemét a kiválasztott eszközről, és e-mailt küld egy vezetőnek az eszköz részleteivel.

1. A **Kérés eszköz** témában görgessen le az **Adaptív kártyával kérdezés** csomóponthoz, és adjon hozzá egy új csomópontot. Válassza a **Eszköz hozzáadása** lehetőséget, majd a megjelenő panel **Alapvető eszközök** fülén válassza az **Új ügynökfolyamat** lehetőséget.

    ![Új ügynökfolyamat hozzáadása](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.hu.png)

1. Az Ügynökfolyamatok **Tervezője** betöltődik egy triggerrel és egy művelettel.

    - **Trigger** - Amikor egy ügynök elindítja a folyamatot
        - Ez elindítja a folyamatot egy Copilot Studio ügynöktől.

    - **Művelet** - Válasz az ügynöknek
        - Ez egy választ küld, amely tartalmazhat kimeneti értékeket vissza a Copilot Studio ügynöknek.

    Válassza ki a triggert.

    ![Trigger kiválasztása](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.hu.png)

1. Ezután több bemenetet fogunk hozzáadni az ügynökfolyamathoz.

    - `DeviceSharePointId` - Ez fogja tárolni a SharePoint elem értékét, az ID-t. Ez az ID érték az Adaptív kártyával kérdezés csomópont kimenete, ahol a felhasználó kiválasztotta az eszközt.

    - `User` - Ez lesz a felhasználó neve, amely az ügynök rendszer változójából származik.

    - `AdditionalComments` - Ez lesz a felhasználó által megadott megjegyzés, amely az Adaptív kártyával kérdezés csomópont kimenete.

    Először hozzáadjuk a `DeviceSharePointId` bemenetet a triggerhez. Válassza a **+ Bemenet hozzáadása** lehetőséget.

    ![Bemenet hozzáadása](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.hu.png)

1. A felhasználói bemenet típusához válassza a **Szöveg** lehetőséget.

    ![Szöveg kiválasztása](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.hu.png)

1. A bemenet nevéhez írja be a következőt.

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId bemenet](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.hu.png)

1. Most hozzáadjuk a második bemenetet, `User`. Ismételje meg ugyanazokat a lépéseket, válassza a **+ Bemenet hozzáadása** lehetőséget, majd válassza a **Szöveg** lehetőséget.

    ![Bemenet hozzáadása](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.hu.png)

1. A bemenet nevéhez írja be a következőt.

    ```text
    User
    ```

    ![User bemenet](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.hu.png)

1. Most hozzáadjuk a harmadik bemenetet, `AdditionalComments`. Ismételje meg ugyanazokat a lépéseket, válassza a **+ Bemenet hozzáadása** lehetőséget, majd válassza a **Szöveg** lehetőséget.

    ![Bemenet hozzáadása](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.hu.png)

1. A bemenet nevéhez írja be a következőt.

    ```text
    AdditionalComments
    ```

    ![AdditionalComments bemenet](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.hu.png)

1. Az `AdditionalComments` bemenetet frissítjük, hogy opcionális legyen. Válassza a **három pont (...) ikont**, majd válassza a **Mező opcionálissá tétele** lehetőséget.

    ![Mező opcionálissá tétele](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.hu.png)

1. Szép munka! A trigger most már konfigurálva van, folytassuk. Válassza a **plusz + ikont** a trigger alatt, hogy új műveletet illesszen be.

    ![Művelet hozzáadása](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.hu.png)

1. Megjelenik az **Műveletek panel**, ahol megtekintheti a Microsoft és harmadik fél szolgáltatások több mint 1400 beépített csatlakozójának műveleteit. A **keresőmezőbe** írja be a következőt,

    ```text
    Get item
    ```

    A keresési eredményekben megjelenik a műveletek listája. Válassza a **Get item** műveletet a **SharePoint csatlakozóból**.

    ![Get item művelet](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.hu.png)

1. Most elkezdhetjük konfigurálni a **Get item** műveletet.

    Válassza a **Három pont (...)** ikont a **Get item** műveletben.

    ![Három pont kiválasztása](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.hu.png)

1. Válassza a **Átnevezés** lehetőséget.

    ![Átnevezés kiválasztása](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.hu.png)

1. Nevezze át a műveletet a következőre,

    ```text
    Get Device
    ```

    ![Művelet átnevezése](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.hu.png)

1. A **Webhely címe** mezőben válassza ki a Contoso IT SharePoint webhely **Webhely címét**, amelyet a [00. lecke - Kurzus beállítása - 3. lépés: Új SharePoint webhely létrehozása](../00-course-setup/README.md#step-4-create-new-sharepoint-site) során hozott létre.

    A **Lista neve** mezőben válassza ki a **Devices** SharePoint listát.

    ![Paraméterek megadása](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.hu.png)

1. Az **Id** mezőben válassza a **villám ikon** vagy **fx ikon** lehetőséget a jobb oldalon.

    ![Dinamikus tartalom választó](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.hu.png)

1. A megjelenő **Dinamikus tartalom** panelen írja be a következőt,

    ```text
    sharepoint
    ```

    A keresési eredményekben megjelennek a bemeneti paraméterek, amelyek megfelelnek a keresett értéknek. Válassza a **DeviceSharePointId** paramétert a triggerből.

    Ezután válassza a **Hozzáadás** lehetőséget, hogy a dinamikus tartalom bemenetet hozzáadja a művelet **Id** paraméteréhez.

    ![DeviceSharePointId bemenet kiválasztása](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.hu.png)

1. A triggerből származó dinamikus tartalom bemenet most már hivatkozva van a művelet **Id** paraméterében. Most frissítjük az egyik haladó paramétert. Válassza a **Mindet megjelenít** lehetőséget, hogy megtekintse a haladó paramétereket.

    ![Haladó paraméterek megtekintése](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.hu.png)

1. A **Limit Columns by View** paraméter megjelenik, és alapértelmezés szerint **Minden oszlop használata (Ne korlátozz)** értékre van állítva. Frissítjük ezt az értéket egy nézetre, hogy korlátozzuk az oszlopokat, amelyeket a művelet válaszában visszaad. Válassza a **Limit Columns by View** paramétert, hogy megtekintse a nézetek listáját.

    ![Paraméter kiválasztása](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.hu.png)

1. Válassza az **All Items** nézetet.

    ![All Items nézet kiválasztása](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.hu.png)

1. Válassza a **plusz + ikont** a _Get Device_ művelet alatt, hogy új műveletet illesszen be.

    ![Új művelet hozzáadása](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.hu.png)

1. A keresőmezőbe írja be a következőt,

    ```text
    send an email
    ```

    A keresési eredményekben megjelenik a műveletek listája. Válassza a **Send an email (V2)** műveletet az **Office 365 Outlook csatlakozóból**.

    ![Send an email művelet](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.hu.png)

1. Ezután létre kell hoznunk egy kapcsolatot a csatlakozó művelethez. Válassza a **Bejelentkezés** lehetőséget.

    ![Kapcsolat létrehozása](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.hu.png)

1. Válassza ki a bejelentkezett felhasználói fiókját.

    ![Felhasználói fiók kiválasztása](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.hu.png)

1. Válassza az **Hozzáférés engedélyezése** lehetőséget. Most létrejött a kapcsolat.

    ![Hozzáférés engedélyezése](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.hu.png)

1. Nevezze át a műveletet a következőre,

    ```text
    Send an email to manager
    ```

    Ezután határozzuk meg a művelet bemeneti paramétereit.

    A **Címzett** bemeneti paraméterhez válassza ki saját magát. Normál esetben ez az Ön vezetője lenne, vagy egy másik műveletet használnánk, amely az Entra ID profilja alapján hozza át a vezetőjét, de ennek a leckének a céljából válassza ki saját magát.

    A **Tárgy** bemeneti paraméterhez írja be a következőt,

    ```text
    Request type: new device
    ```

    A **Tartalom** bemeneti paraméterhez írja be a következőt,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Művelet átnevezése és bemenetek konfigurálása](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.hu.png)

1. Ezután frissítjük a **Tartalom** bemeneti paramétert, hogy hivatkozzon a dinamikus tartalom bemenetre a **triggerből** vagy a **Get item** műveletből. Írjon egy szóközt a második sor után, mivel beillesztjük a felhasználó nevét a trigger bemenetből, **User**.

    Válassza a **villám ikon** vagy **fx ikon** lehetőséget a jobb oldalon.

    ![User bemenet dinamik
1. A triggerből származó dinamikus tartalom bemenete most az akció **Body** paraméterében van hivatkozva. Ugyanezt megismételjük az e-mail üzenet szövegének fennmaradó soraira.

    ![Felhasználói bemenet hozzáadva](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.hu.png)

1. Kattints a `Manufacturer:` melletti helyre. Válaszd ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

    A felugró ablak **Dynamic content** fülén írd be a következőt a keresőmezőbe,

    ```text
    manufacturer
    ```

    Válaszd ki a triggerből származó **Manufacturer value** bemenetet, majd kattints az **Add** gombra.

    ![Manufacturer value bemenet hozzáadása dinamikus tartalomként](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.hu.png)

1. Kattints a `Model:` melletti helyre. Válaszd ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

    A felugró ablak **Dynamic content** fülén írd be a következőt a keresőmezőbe,

    ```text
    model
    ```

    Válaszd ki a **Model** bemenetet a **Get item** akcióból, majd kattints az **Add** gombra.

    ![Model bemenet hozzáadása dinamikus tartalomként](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.hu.png)

1. A `Link to item in SharePoint` szöveghez frissítést végzünk, hogy hiperhivatkozás legyen az e-mail üzenet szövegében. Kattints a sor elejére, majd válaszd ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

    ![Dinamikus tartalom hozzáadása](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.hu.png)

1. Kattints a HTML horgonycímke után, majd válaszd ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

    A felugró ablak **Dynamic content** fülén írd be a következőt a keresőmezőbe,

    ```text
    link to item
    ```

    Válaszd ki a **Link to item** bemenetet a **Get item** akcióból, majd kattints az **Add** gombra.

    ![Link to item hozzáadása dinamikus tartalomként](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.hu.png)

1. Váltanunk kell a HTML szerkesztőre, ehhez válaszd ki a **&lt;/&gt;** ikont.

    ![Felhasználói bemenet hozzáadása](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.hu.png)

1. A HTML szerkesztő most engedélyezve van. Kattints a `Link to item in SharePoint` szöveg elé, és adj hozzá egy HTML horgonycímkét, hogy létrehozz egy hiperhivatkozást. Másold és illeszd be a következőt.

    ```text
    <a href="
    ```

    ![HTML címke](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.hu.png)

1. A **Link to item** dinamikus tartalom bemenete most az **Body** paraméterben van hivatkozva. Kattints a **Link to item** bemenet után, másold és illeszd be a következőt.

    ```text
    ">
    ```

    ![HTML címke](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.hu.png)

1. Kattints a `Link to item in SharePoint` szöveg után, és zárd be a HTML horgonycímkét. Másold és illeszd be a következőt.

    ```text
    </a>
    ```

    ![HTML címke](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.hu.png)

1. Válaszd ki a **&lt;/&gt;** ikont a kódnézet váltásához.

    ![Kódnézet letiltása](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.hu.png)

1. Ezután válaszd ki újra a **&lt;/&gt;** ikont a kódnézet visszakapcsolásához.

    ![Visszakapcsolás kódnézetre](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.hu.png)

1. Vedd észre, hogy több extra karakter, például `&lt;br&gt;` van jelen. Töröld ezeket a karaktereket.

    ![Karakterek törlése](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.hu.png)

1. Most befejeztük a hiperhivatkozás hozzáadását az e-mail üzenet szövegéhez 😎 Válaszd ki a **&lt;/&gt;** ikont a kódnézet váltásához.

    ![HTML címke rendbe téve](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.hu.png)

1. Kattints az `Additional comments from` szöveg után, a kettőspont karakter előtt, majd válaszd ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

    ![Felhasználói paraméter hozzáadása](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.hu.png)

1. A felugró ablak **Dynamic content** fülén írd be a következőt a keresőmezőbe,

    ```text
    user
    ```

    Válaszd ki a triggerből származó **User** paramétert, majd kattints az **Add** gombra.

    ![Felhasználói paraméter hozzáadása dinamikus tartalomként](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.hu.png)

1. Most beillesztünk egy kifejezést, amely megjeleníti az Additional Comments értékét, ha a felhasználó megadta az **Ask an adaptive card** csomópontban, vagy "None"-t jelenít meg, ha a felhasználó nem adott meg megjegyzéseket.

    Kattints a kettőspont után, majd válaszd ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

    ![Kifejezés hozzáadása](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.hu.png)

1. A felugró ablak **Function** fülén és a kifejezés mezőben fent írd be a következőt,

    ```text
    if(empty())
    ```

    Ez a kifejezés az `if` függvényt használja egy if-else állításhoz.

    A következő függvény az `empty`, amely ellenőrzi, hogy létezik-e érték egy string paraméterben. A hivatkozott string paraméter a triggerből származó `AdditionalComments` bemenet paraméter értéke.

    ![Ha üres](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.hu.png)

1. Ezután kattints **a zárójelek belsejébe** az `empty` függvény után. Beillesztjük a triggerből származó `AdditionalComments` bemenet paramétert.

    Válaszd ki a **Dynamic content** fület. Írd be a következőt a keresőmezőbe,

    ```text
    Additional
    ```

    Görgess le a panelen, és válaszd ki a triggerből származó **AdditionalComments** bemenetet. A paraméter most hozzáadódik a kifejezés string paramétereként.

    ![AdditionalComments hozzáadása dinamikus tartalomként](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.hu.png)

1. Ezután meghatározzuk a **_true_** logikát, ahol ha az `AdditionalComments` string paraméter üres, akkor egy `None` szöveget (stringet) szeretnénk megjeleníteni.

    A string paramétert záró zárójel után írd be a következőt,

    ```text
    , 'None',
    ```

    ![True logika](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.hu.png)

1. Végül meghatározzuk a **_false_** logikát, ahol ha az `AdditionalComments` string paraméter nem üres, akkor az **AdditionalComments** bemenet paraméter értékét szeretnénk megjeleníteni a triggerből.

    > Emlékeztető: ez az érték az adaptív kártya Additional Comments mezőjéből származik az **Ask with adaptive card** csomópontban a **Request device** témában.

    A **_true_** logika utáni vessző után válaszd ki a **Dynamic content** fület. Írd be a következőt a keresőmezőbe,

    ```text
    Additional
    ```

    Görgess le a panelen, és válaszd ki a triggerből származó **AdditionalComments** bemenetet. A paraméter most hozzáadódik a kifejezés string paramétereként.

    Most add hozzá az **Body** paraméterhez az **Add** gomb kiválasztásával.

    ![False logika](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.hu.png)

1. Kiváló, a kifejezésünk elkészült! A kifejezés most hozzáadódott az **Body** paraméterhez. Végül formázd az utolsó sort dőlt betűvel.

    ![Dőlt betű](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.hu.png)

1. Most frissítjük a **Respond to the agent** akciót, hogy visszaküldje az ügynöknek a **Model value** paraméter értékét a **Get item** akcióból.

    Tartsd lenyomva az egér bal gombját, és mozgasd felfelé a tervezőben, hogy megtekintsd a **Respond to the agent** akciót.

    Válaszd ki a **Respond to the agent** akciót, majd válaszd ki a **Text** kimenetet típusnak.

    ![Text kimenet kiválasztása](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.hu.png)

1. Írd be a következőt a kimenet nevének.

    ```text
    ModelValue
    ```

    ![ModelValue kimenet](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.hu.png)

1. Válaszd ki az érték mezőt, majd válaszd ki a jobb oldalon található **villám ikon** vagy **fx ikon** lehetőséget.

    ![Kifejezés beillesztése](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.hu.png)

1. A felugró ablak **Dynamic content** fülén írd be a következőt a keresőmezőbe,

    ```text
    model
    ```

    Válaszd ki a **Model** paramétert a **Get item** akcióból, majd kattints az **Add** gombra.

    ![Model paraméter hozzáadása dinamikus tartalomként](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.hu.png)

1. A **Model** paraméter most a szöveg kimenetének értéke. Válaszd ki a **Save draft** lehetőséget az ügynökfolyamat mentéséhez.

    Most befejeztük az ügynökfolyamatot 👏🏻

    ![Vázlat mentése](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.hu.png)

1. Tegyünk még egy frissítést az ügynökfolyamatunkon a közzététel előtt. Válaszd ki az **Overview** fület, majd válaszd ki az **Edit** lehetőséget.

    ![Szerkesztés kiválasztása](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.hu.png)

1. Az **Flow name** mezőbe másold és illeszd be a következőt.

    ```text
    Send device request email
    ```

    Az **Description** mezőben válaszd ki a **refresh icon** lehetőséget, hogy AI segítségével automatikusan generálj leírást a trigger és az ügynökfolyamatban lévő akciók alapján.

    Válaszd ki a **Save** lehetőséget az ügynökfolyamat frissített nevének és leírásának mentéséhez.

    ![Átnevezés, leírás hozzáadása és mentés](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.hu.png)

1. Válaszd ki a **Designer** fület, majd válaszd ki a **Publish** lehetőséget az ügynökfolyamat közzétételéhez, hogy hozzáadható legyen a **Request device** témában csomópontként.

    ![Közzététel](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.hu.png)

1. Rövidesen megjelenik egy megerősítő üzenet, amely megerősíti, hogy az ügynökfolyamat közzétéve lett.

    ![Megerősítő üzenet](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.hu.png)

### 9.2 Ügynökfolyamat hozzáadása a témához

Most adjuk hozzá az ügynökfolyamatot a **Request device** témához.

1. Válaszd ki a bal oldali menüben az **Agents** lehetőséget, majd válaszd ki a **Contoso Helpdesk Agent** ügynököt.

    ![Ügynökök kiválasztása](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.hu.png)

1. Válaszd ki a **Topics** fület.

    ![Topics fül kiválasztása](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.hu.png)

1. Válaszd ki a **Request device** témát.

    ![Request device téma kiválasztása](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.hu.png)

1. Görgess le az **Ask with adaptive card** csomóponthoz, és adj hozzá egy új csomópontot.

    Válaszd ki az **Add a tool** lehetőséget, majd a felugró ablak **Basic tools** fülén válaszd ki a nemrég létrehozott és közzétett **Send device request email** ügynökfolyamatot.

    ![Ügynökfolyamat kiválasztása](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.hu.png)

1. Az ügynökfolyamat trigger bemeneteihez ki kell választanunk az **Ask with adaptive card** csomópontból származó változó kimeneteket.

    Válaszd ki a **három pont (...) ikont** a **DeviceSharePointId** bemenethez.

    ![Változó kiválasztása](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.hu.png)

1. Válaszd ki a **deviceSelectionId** változót, amely az **Ask with adaptive card** csomópontban meghatározott kimenetek egyike.

    ![deviceSelectionId változó kiválasztása](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.hu.png)

1. Ezután válaszd ki a **három pont (...) ikont** a **User** bemenethez.

    ![Változó kiválasztása](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.hu.png)

1. Válaszd ki a felugró változó panel **System** fület, majd válaszd ki a **User.DisplayName** lehetőséget. Ez a változó tárolja az ügynökkel interakcióba lépő belső felhasználó megjelenítési nevét.

    ![User.DisplayName rendszer változó kiválasztása](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.hu.png)

1. Ezután válaszd ki a **nagyobb mint ikon** lehetőséget az **Advanced inputs** kibővítéséhez, hogy látható legyen az **AdditionalComments** bemenet.

    ![Haladó bemenetek kibővítése](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.hu.png)

1. Válaszd ki a **három pont (...) ikont** az AdditionalComments bemenethez.

    ![Változó kiválasztása](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.hu.png)

1. Válaszd ki a **Formula** fület, majd a felugró változó panelen a kibővítés ikont, mivel Power Fx kifejezést fogunk használni.

    ![Formula fül](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.hu.png)

1. Hasonlóan az ügynökfolyamatban lévő kifejezéshez, amely feltételes ellenőrzést végez az _if_ függvény használatával, de ezúttal
    - Power Fx függvényeket használva,
    - és vagy nem adunk meg értéket, vagy a `commentsId` kimeneti változó értékét adjuk meg az **Ask with adaptive card** csomópontból.

    Írd be a következő függvényeket a Power Fx mezőbe,

    ```text
    If(IsBlank())
    ```

Ez a kifejezés az `If` függvényt használja egy if-else állításhoz.

A következő használt függvény az `IsBlank`, amely ellenőrzi, hogy létezik-e vagy sem egy érték egy szöveges paraméterben. A hivatkozott szöveges paraméter a **Kérdezés adaptív kártyával** csomópont `commentsId` kimeneti változója.

![If és IsBlank függvények](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.hu.png)

1. Ezután kattints **a zárójelek belsejébe** az `IsBlank` függvény után. Be fogjuk illeszteni a **Kérdezés adaptív kártyával** csomópont `commentsId` kimeneti változóját.

   Írd be a következőt a zárójelek közé:

    ```text
    Topic.commentsId
    ```

   És adj hozzá egy vesszőt a zárójel után.

   ![Hivatkozás a commentsId kimenetre](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.hu.png)

1. Ezután meghatározzuk a logikát:

   - amikor **_igaz_** - ha a `Topic.commentsId` szöveges paraméter üres, akkor nem akarunk értéket beilleszteni.
   - amikor **_hamis_** - ha a `Topic.commentsId` szöveges paraméter nem üres, akkor illesszük be a commentsId változó értékét.

   A szöveges paramétert lezáró zárójel után írd be a következőt:

    ```text
    "", Topic.commentsId)
    ```

   A Power Fx kifejezés a következő lesz:

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   Nagyszerű munka, a kifejezésünk elkészült! 🙌🏻 Most válaszd a **Beszúrás** lehetőséget, hogy beállítsd az ügynökfolyamat bemeneti paraméterét a Power Fx kifejezésre.

   ![Power Fx kifejezés](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.hu.png)

1. **Mentsd el** a témát.

### 9.3 Frissítsd a Kérés eszköz témát több csomóponttal a jobb felhasználói élmény érdekében

Ezután hozzáadunk két további csomópontot:

- **Üzenet küldése** - ez egy megerősítő üzenetként fog működni, amely hivatkozik a kiválasztott eszközre, és jelzi, hogy a kérésüket benyújtották.

- **Téma kezelése** - a beszélgetés lezárásához átirányítunk a **Beszélgetés vége** csomópontra.

Kezdjük el!

1. Válaszd ki az **plusz + ikont** az ügynökfolyamat csomópont alatt, és válaszd az **Üzenet küldése** csomópontot.

   ![Üzenet küldése csomópont hozzáadása](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.hu.png)

1. Írd be a következőt az üzenet mezőbe:

    ```text
    Thanks
    ```

   Ezután válaszd a **Változó beszúrása** lehetőséget, mivel hivatkozni fogunk a felhasználó nevére.

   ![Változó beszúrása](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.hu.png)

1. Válaszd ki a **Rendszer** fület, és keresd meg a `User` kifejezést a keresőmezőben. Válaszd ki a **User.DisplayName** változót.

   ![Rendszerváltozó kiválasztása](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.hu.png)

1. Írd be a következőt az üzenet mezőbe:

    ```text
    . Your selected device,
    ```

   Ezután válaszd a **Változó beszúrása** lehetőséget, és ezúttal a **Egyéni** fülön válaszd ki a **ModelValue** változót.

   Ezután írd be a következőt az üzenet mezőbe a befejezéshez:

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   Az üzenetnek így kell kinéznie:

   ![Üzenet küldése](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.hu.png)

1. Végül válaszd ki az **plusz + ikont** az **Üzenet küldése** csomópont alatt, és válaszd a **Téma kezelése**, majd a **Másik témára ugrás** lehetőséget, és válaszd a **Beszélgetés vége** lehetőséget.

   ![Téma kezelése](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.hu.png)

1. **Mentsd el** a témát.

   ![Mentés](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.hu.png)

### 9.4 Az ügynök tesztelése több forgatókönyvvel

Nagyszerű munka!!! 😁 Most már tesztelhetjük az ügynökünket.

#### 9.4.1 Kérj egy eszközt, és adj meg egy megjegyzést az adaptív kártyán

1. **Frissítsd** a tesztpanelt, válaszd ki a **tevékenységtérkép** ikont, és írd be a következőt üzenetként az ügynöknek:

    ```text
    I need a laptop
    ```

   ![Ügynök tesztelése](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.hu.png)

1. Az ügynök elindítja az **Elérhető eszközök** témát, és válaszol az elérhető eszközök listájával. Írd be a következőt válaszként arra a kérdésre, hogy szeretnél-e eszközt kérni:

    ```text
    Yes
    ```

   ![Igen](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.hu.png)

1. Figyeld meg, hogy az ügynök a **Kérés eszköz** témát indította el az ügynök utasításai szerint, és hogy az adaptív kártya most megjelenik az ügynök üzenetében.

   Válaszd ki a **Surface Laptop 15** eszközt, és adj meg a következőt megjegyzésként:

    ```text
    I need 16GB of RAM please
    ```

   ![Eszköz kiválasztása és megjegyzés megadása](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.hu.png)

1. Görgess le, amíg meg nem látod a **Kérés benyújtása** gombot, és válaszd ki, hogy benyújtsd az adaptív kártyát az ügynöknek.

   ![Kérés benyújtása](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.hu.png)

1. Válaszd az **Engedélyezés** lehetőséget, hogy az ügynök használhassa a hitelesítési adataidat a két csatlakozó művelethez.

   ![Engedélyezés](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.hu.png)

1. Az ügynök ezután megjeleníti a megerősítő üzenetet, amely tartalmazza a kiválasztott modellt, majd átirányít a **Beszélgetés vége** témára. Szuper!

   ![Kérés benyújtva](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.hu.png)

1. Válaszd az **Igen** lehetőséget, hogy ellenőrizd a **Beszélgetés vége** téma többi részét.

   ![Igen kiválasztása](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.hu.png)

1. Ezután értékeld az élményt az értékelési skála kártyán bármelyik csillag kiválasztásával.

   Az ügynök ezután a **Beszélgetés vége** téma utolsó **Kérdés** csomópontjára lép. Válaszd a **Nem** lehetőséget.

   ![Beszélgetés vége téma](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.hu.png)

1. A téma ezután befejeződik, és egy záró üzenet jelenik meg a tesztpanelen.

   ![Beszélgetés vége téma](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.hu.png)

1. Ellenőrizd az e-mail fiókod beérkező leveleit, hogy megtekintsd az ügynökfolyamat által a menedzsernek küldött e-mailt. Láthatod a kiválasztott eszköz részleteit és az adaptív kártyán megadott megjegyzést.

   ![E-mail érkezett](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.hu.png)

1. Kattints a hiperhivatkozásra, és a böngészőnek be kell töltenie az eszköz SharePoint elemét. Szuper!

   ![Kattints a hivatkozásra az e-mailben](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.hu.png)

#### 9.4.2 Kérj egy eszközt, és ne adj meg megjegyzést az adaptív kártyán

Most teszteljük azt a forgatókönyvet, amikor nem adunk meg megjegyzést.

1. Ismételd meg ugyanazokat a lépéseket:

   - **Frissítsd** a tesztpanelt, és válaszd ki a **tevékenységtérkép** ikont
   - Írd be az üzenetet: `Szükségem van egy laptopra`
   - Válaszolj `Igen`-nel az eszközkérés kérdésére

   ![Eszköz kérése](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.hu.png)

1. Ezúttal válaszd a **Surface Laptop 13** eszközt, és ne adj meg megjegyzést.

   ![Eszköz kiválasztása](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.hu.png)

1. **Nyújtsd be** a kérést a **Kérés benyújtása** gomb kiválasztásával.

   ![Kérés benyújtása](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.hu.png)

1. Ezúttal az e-mail, amelyet a beérkező leveleidben kapsz, **Nincs** megjegyzést fog mutatni.

   ![E-mail érkezett](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.hu.png)

#### 9.4.3 Ne kérj eszközt

Teszteljük az utolsó forgatókönyvet, amelyben nem kérünk eszközt, és a **Viszlát** téma kerül elő az ügynök utasításai szerint.

1. Ismételd meg ugyanazokat a lépéseket:

   - **Frissítsd** a tesztpanelt, és válaszd ki a **tevékenységtérkép** ikont
   - Írd be az üzenetet: `Szükségem van egy laptopra`
   - Ezúttal válaszolj `Nem`-mel az eszközkérés kérdésére

   ![Ügynök tesztelése](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.hu.png)

1. Az ügynök a **Viszlát** témát indította el, és a témában meghatározott kérdést tette fel.

   ![Viszlát téma elindítva](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.hu.png)

## ✅ Küldetés Teljesítve

Gratulálunk! 👏🏻 Megtanultad, hogyan építsd fel az ügynökfolyamatot, és hogyan add hozzá a meglévő **Kérés eszköz** témához, valamint hogyan irányítsd át az ügynököt egy másik témára.

Ez a vége a **9. labor - Ügynökfolyamat hozzáadása az automatizáláshoz és a téma képességeinek bővítéséhez** című résznek. Kattints az alábbi linkre, hogy továbblépj a következő leckére. A következő lecke laborjában tovább bővítjük az itt bemutatott felhasználási esetet.

⏭️ [Tovább az **Eseményindítók hozzáadása - Az autonóm ügynök képességeinek engedélyezése** leckére](../10-add-event-triggers/README.md)

## 📚 Taktikai Források

🔗 [Ügynökfolyamatok bemutatása: Az automatizálás átalakítása AI-első munkafolyamatokkal](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Ügynökfolyamatok áttekintése](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Ügynökfolyamatok használata az ügynököddel](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Függvények listája a referencia útmutatóban](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Ügynökfolyamatok a Copilot Stúdióban](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analitika" />

---

**Felelősségi nyilatkozat**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.