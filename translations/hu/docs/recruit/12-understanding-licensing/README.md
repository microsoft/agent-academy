<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-20T17:38:52+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "hu"
}
-->
# 🚨 Küldetés 12: A licencelés megértése

## 🕵️‍♂️ KÓDNEVE: `TUDD, MIT FIZETSZ`

> **⏱️ Küldetés időtartama:** `~15 perc`

## 🎯 Küldetés összefoglaló

Üdvözlünk, Újonc. Mielőtt ügynökeidet bevetnéd a terepen, tudnod kell, **hogyan mérik, licencelik és számlázzák a használatot**. Ez a küldetés bemutatja az üzenet-alapú számlázási modellt, elmagyarázza, mit tartalmaznak a Microsoft 365 Copilot licencek, és megmutatja, hogyan tervezhetsz az előrejelző eszközzel.

---

## 🎯 Célkitűzés: Az üzenet-alapú modell megértése

A Copilot Studio nem felhasználónként vagy funkciónként számláz—hanem az alapján, hogy **mennyi üzenetet fogyasztanak az ügynökeid**. Egy „üzenet” az ügynök és a felhasználó (vagy egy rendszer) közötti interakció.

- 💬 Minden felhasználói interakció az ügynököddel legalább **1 üzenetnek** számít
- 🔄 Összetett interakciók (például grounding, generatív AI vagy folyamatok) **több üzenetet** fogyasztanak
- 💼 Az üzenetekért vagy **előre fizetett csomagokkal**, vagy **fizetés használat alapján (PAYGO)** fizetsz

---

## Licencelési lehetőségek

### 1. **Copilot Studio üzenetcsomagok**

- Előre fizetett opció: **25,000 üzenet/hónap $200-ért**
- Ideális előre látható használathoz — a kapacitás megosztott a bérlőn belül

### 2. **Fizetés használat alapján (PAYGO)**

- Utólagos fizetés: **$0.01 üzenetenként**
- Nincs előzetes kötelezettségvállalás; a használatot a hónap végén számlázzák az Azure-on keresztül

---

## Mi van, ha van M365 Copilot licenced?

Ha a csapatodnak van **Microsoft 365 Copilot licencje**, az ügynökeid **további számlázás nélkül működhetnek bizonyos kulcsfontosságú forgatókönyvekben**:

- Klasszikus válaszok, generatív válaszok, grafikon-alapú üzenetek és alapvető ügynöki műveletek **nem kerülnek számlázásra** hitelesített M365 Copilot felhasználók számára olyan alkalmazásokban, mint a Teams és az Outlook  
- Azonban: ha engedélyezed az olyan fejlett funkciókat, mint az autonóm triggerek, az alapvető műveleteken túli ügynöki folyamatok, vagy külső csatornákat/API-kat használsz, azok **számlázható üzeneteket fogyasztanak**

| Forgatókönyv                                | További számlázott üzenetek?                 |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot felhasználó kérdez az ügynöktől a Teams-ben | ❌ Nem számlázott                              |
| Ügynök külső API-t vagy folyamatot hív      | ✅ Számlázott (5 + üzenet)                    |
| Ügynök autonóm triggert vagy groundingot használ | ✅ Számlázott                                 |

---

## 🧮 Pontos tervezés: Használd az előrejelzőt

Mielőtt elindítanád az ügynöködet, használd a **Copilot Studio Usage Estimator** eszközt, hogy valós forgatókönyvek alapján előre jelezd az üzenetfogyasztást:

[👉 Használd a Copilot Studio Usage Estimator eszközt](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Ez lehetővé teszi:

- 🔢 A **felhasználói létszám** megadását
- ⚙️ Az **ügynöki funkciók** kiválasztását (grounding, műveletek, folyamatok, memória)
- 📈 Az **összes üzenet becslését ügynökönként havonta**
- 🧠 A tervezés optimalizálását és a számlázási meglepetések elkerülését

!!! tip
    ✅ Futtasd korán — és ismét az építés után — hogy összehasonlíthasd a várható és tényleges használatot.

---

## 💼 Példa forgatókönyv

**Környezet**: IT Help Desk ügynök groundinggal + egy Power Automate folyamattal  
**Munkamenetek**: 5 felhasználói lépés munkamenetenként  
**Feltételezések**: grounding (10 üzenet) + művelet (5 üzenet) + 5 generatív válasz (10 üzenet)  
**Összesen**: ~25 üzenet munkamenetenként  
**Skála**: 500 munkamenet/hónap = ~12,500 üzenet (½ üzenetcsomag)

---

## 🧠 Profi tippek a költségek kontrollálásához

- Kövesd a használatot a Power Platform Admin Centerben
- Kezdd fejlesztési/tesztelési környezetben, mielőtt élesítenéd
- Kapcsold ki a nem használt műveleteket és csatlakozókat
- Használj **Microsoft 365 Copilot licenceket**, amikor csak lehetséges belső használatra
- Használj üzenetcsomagokat, amikor a skála előre láthatóvá válik
- Használd a **Copilot Studio Usage Estimator** eszközt a használat előrejelzéséhez

---

## 🏁 Küldetés teljesítve

Most már érted:

- Hogyan számítják és számlázzák a használatot
- Mikor fedezi az M365 Copilot a használatot — és mikor nem
- Hogyan lehet előre jelezni és kezelni az üzenetfogyasztást

🎓 Ezzel a tudással készen állsz arra, hogy ügynökeidet **hatékonyan és okosan** bevesd

---

## 📚 Taktikai források

Tudj meg többet a Copilot Studio licenceléséről és számlázásáról

- 📄 [Copilot Studio Licencelés és Üzenetdíjak](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform Licencelési Útmutató (2025. július)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Üzenetkezelés és Kapacitásfigyelés](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analitika" />

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.