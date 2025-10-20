<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-20T18:13:58+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "hu"
}
-->
# 🕵️‍♂️ Küldetés 04: Ügynökutasítások megírása

--8<-- "disclaimer.md"

## 🕵️‍♂️ KÓDNEVE: `TITKOS IRÁNYELV MŰVELET`

> **⏱️ Műveleti időkeret:** `~45 perc`

## 🎯 Küldetés összefoglaló

Ügynök, a következő feladatod a **Titkos Irányelv Művelet** - a pontos utasítások és leírások segítségével történő ügynökkommunikáció és irányítás művészetének elsajátítása.

A küldetésed, ha elfogadod, az, hogy megtanuld a világos, cselekvésre ösztönző utasítások megírásának kritikus készségeit, amelyek segítik az ügynököket intelligens döntések meghozatalában, a megfelelő eszközök és tudásforrások használatában, valamint zökkenőmentes együttműködésben más ügynökökkel. Emellett elsajátítod a magas színvonalú leírások készítésének művészetét, amelyek segítik az ügynököket erőforrásaik megértésében és a felhasználói kérdésekre precíz válaszok adásában.

Tekintsd ezt haladó képzésnek az ügynökpszichológia és viselkedésmódosítás terén. Ahogyan egy terepen dolgozó operatív munkatársnak egyértelmű küldetési paraméterekre van szüksége a sikerhez, úgy az AI ügynökeidnek is szakértői módon megírt utasításokra van szükségük, hogy tisztán, precízen cselekedjenek, és értékes információkat szolgáltassanak valós helyzetekben.

---

## 🔎 Célkitűzések

A küldetés teljesítésével:

- **Utasítások mestersége**: Megérted az ügynökutasítások megírásának művészetét és tudományát a Copilot Studio-ban
- **Stratégiai iránymutatás**: Megtanulod, hogyan irányítsd az ügynököket eszközök, tudásforrások használatára és más ügynökökkel való együttműködésre
- **Műveleti tisztaság**: Biztosítod, hogy az ügynökök precízen, átláthatóan és hatékonyan cselekedjenek

---

## 📝 Ügynökutasítások megírása

A hatékony ügynökutasítások megírása kulcsfontosságú az ügynökök sikeres működéséhez. Az utasításokat az ügynökök az alábbiakra használják:

- Eldönteni, hogy melyik eszközt, témát vagy tudásforrást használják egy felhasználói kérdés vagy autonóm trigger esetén
- Kitölteni az eszközök bemeneti mezőit az elérhető kontextus alapján
- Választ generálni a végfelhasználó számára

### Hogyan működnek az utasítások

Az utasításoknak az ügynök számára konfigurált eszközökön, témákon és tudásforrásokon kell alapulniuk. Az ügynökök nem tudnak olyan utasításokat végrehajtani, amelyekhez nem rendelkeznek erőforrásokkal. Például, ha arra utasítod az ügynököt, hogy keressen egy weboldal GYIK-jében, akkor hozzá kell adnod azt a GYIK-et tudásforrásként.

Az utasításokban hivatkozhatsz konkrét eszközökre, témákra, változókra vagy Power Fx kifejezésekre a `/` használatával. Ez segít az ügynöknek pontosan tudni, mit és mikor kell használni.

### Mit tartalmazzanak az utasítások

- Adj utasításokat olyan esetekre, amikor az ügynök választásait szeretnéd irányítani, különösen, ha fennáll az egyértelműség hiánya.
- Használj utasításokat korlátok beállítására, például témák korlátozására vagy válaszformátumok meghatározására.
- Adj tippeket az eszközök bemeneti mezőinek kitöltéséhez, pl. "Használja az e-mail címet a lead kapcsolati mezőjéből, amikor segít a felhasználónak e-mailt megfogalmazni."
- Határozd meg, hogyan kell formázni a válaszokat, pl. "Mindig táblázatos formátumban adjon válaszokat a rendelési állapotról."
- Használj korlátozásokat az ügynök cselekvéseinek korlátozására, pl. "Csak az alkalmazotti juttatásokkal kapcsolatos kérésekre válaszoljon."

### Gyakorlati példák

- "Csak akkor használja a GYIK dokumentumokat, ha a kérdés nem kapcsolódik a Nyitvatartási időkhöz, Időpontokhoz vagy Számlázáshoz."
- "Csak a jegy létrehozási témát használja jegyek létrehozására; más, problémák megoldásával kapcsolatos kérések esetén használja a hibaelhárítási témát."
- "Mindig táblázatos formátumban adjon válaszokat a rendelési állapotról."

### Tesztelés és finomítás

- Az utasítások szerkesztése után használd a tesztpanelt az ügynök viselkedésének ellenőrzésére.
- Frissítsd és publikáld a változtatásokat szükség szerint.

### Haladó iránymutatás

- Számozd vagy pontozd az utasításokat, és határozd meg, hogy azokat sorrendben kell követni.
- Használj markdown formázást az olvashatóság érdekében, és hogy segítsd a generatív AI-t az utasítások feldolgozásában.
- Ha azt szeretnéd, hogy az ügynök nagyon specifikus legyen, fontold meg egy téma létrehozását az adott esethez.
- Használj pontos neveket az eszközök és témák esetében az utasításokban, hogy elkerüld a félreértéseket.

### Biztonság és moderáció

- Korlátozd, hogy az ügynök milyen eszközöket használhat, amikor tudásforrásokra hivatkozik.
- Korlátozd, hogy milyen paramétereket használhat az eszközökhöz (pl. csak egy meghatározott személyek listájára küldjön e-mailt).
- Használj utasításokat a nem kívánt viselkedés vagy tartalomszűrési problémák elleni védelem érdekében.

---

## ✍️ Eszközök, témák és ügynökök leírásának megírása

A magas színvonalú leírások elengedhetetlenek a generatív koordinációhoz. Az ügynök ezeket a leírásokat használja, hogy kiválassza a megfelelő eszközöket, témákat és ügynököket a felhasználói kérdésekre és triggerekre való válaszadáshoz. Kövesd ezeket a legjobb gyakorlatokat:

- **Használj egyszerű, közvetlen nyelvezetet**: Kerüld a szakzsargont, szlenget vagy túl technikai kifejezéseket. Írj aktív hangnemben és jelen időben.
- **Légy konkrét és releváns**: Tartalmazz kulcsszavakat, amelyek kapcsolódnak a funkcióhoz és a felhasználói szándékhoz. Győződj meg róla, hogy a leírások egyértelműen megkülönböztetik a hasonló eszközöket vagy témákat, hogy elkerüld a félreértéseket.
- **Tartsd röviden és informatívan**: Korlátozd a leírásokat egy-két mondatra. Foglald össze, mit csinál az eszköz, téma vagy ügynök, és hogyan segíti a felhasználót.
- **Használj egyedi, leíró neveket**: Kerüld az általános neveket. Például használj "Időjárás-előrejelzés holnapra" nevet a "Időjárás" helyett.
- **Sorold fel a műveleteket vagy szempontokat**: Használj pontozott vagy számozott listákat, ha több funkciót vagy lépést írsz le.
- **Teszteld az átfedéseket**: Ha több témának hasonló leírása van, az ügynök mindet aktiválhatja. Teszteld és módosítsd, hogy elkerüld az átfedéseket.

!!! példa "Jó és rossz leírási példák"
    **Jó:** Ez a téma időjárási információkat nyújt a világ bármely pontjára a következő napra. Megadja a hőmérsékletet. Nem adja meg a mai időjárást.
    **Rossz:** Ez az eszköz válaszol kérdésekre. *(Túl általános)*

---

## 🛠️ Legjobb gyakorlatok utasításokhoz és leírásokhoz

Ahhoz, hogy az utasítások és leírások valóban hatékonyak legyenek, tartsd szem előtt ezeket az alapelveket:

- Használj aktív hangnemet és jelen időt (pl. "Ez az eszköz időjárási információkat nyújt").
- Kerüld a szakzsargont, szlenget vagy szükségtelen technikai kifejezéseket, hacsak nem szükséges a célközönség számára.
- Használj pontozott vagy számozott listákat a műveletek, funkciók vagy szempontok elkülönítésére.
- Tartalmazz kulcsszavakat, amelyek megfelelnek a felhasználói szándéknak és az eszköz vagy téma funkcióinak.
- Biztosítsd, hogy a hasonló erőforrásoknak különböző nevei és leírásai legyenek, hogy elkerüld a zavarokat és átfedéseket.

---

## 🗂️ Példa utasításstruktúra

Amikor utasításokat írsz, fontold meg az alábbi struktúrát a tisztaság és teljesség érdekében:

1. **Áttekintés**: Röviden írd le az ügynök küldetését és szerepét  
1. **Folyamatlépések**: Sorold fel az ügynök által követendő fő lépéseket  
1. **Együttműködési pontok**: Jelezd, mikor kell más ügynököket hívni vagy konkrét eszközöket használni  
1. **Biztonság és moderáció**: Tüntesd fel az esetleges megfelelőségi vagy biztonsági követelményeket  
1. **Visszacsatolási folyamat**: Határozd meg, hogyan gyűjtsön visszajelzést vagy hogyan eszkalálja a problémákat az ügynök  

---

## 🧪 Labor: Ügynökutasítások megírása

*A labor tartalma hamarosan...*

---

## 🎉 Küldetés teljesítve

A 04-es küldetést teljesítetted! Most már:

✅ **Utasítások mestersége**: Megtanultad, hogyan írj világos, cselekvésre ösztönző ügynökutasításokat  
✅ **Stratégiai iránymutatás**: Sikeresen irányítottad az ügynököket eszközök használatára és hatékony együttműködésre  
✅ **Műveleti tisztaság**: Biztosítottad, hogy az ügynökök precízen és átláthatóan cselekedjenek  

Következik [Küldetés 05](../05-agent-responses/README.md): Ügynökválaszok testreszabása a maximális hatás érdekében.

---

## 📚 Taktikai források

📖 [Microsoft Copilot Studio - Utasítások megírása](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Útmutató a generatív módhoz](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.