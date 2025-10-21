<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-20T23:05:54+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "sl"
}
-->
# 🕵️‍♂️ Misija 04: Navodila za pisanje agentov

--8<-- "disclaimer.md"

## 🕵️‍♂️ KODNO IME: `OPERACIJA TAJNI UKAZ`

> **⏱️ Časovni okvir operacije:** `~45 minut`

## 🎯 Povzetek misije

Agent, vaša naslednja naloga je **Operacija Tajni Ukaz** - obvladovanje umetnosti komunikacije in nadzora agentov prek natančnih navodil in opisov.

Vaša naloga, če jo sprejmete, je pridobiti ključne veščine pisanja jasnih, izvedljivih navodil, ki usmerjajo vaše agente k sprejemanju inteligentnih odločitev, uporabi pravih orodij in virov znanja ter k brezhibnemu sodelovanju z drugimi agenti. Prav tako boste obvladali umetnost pisanja visokokakovostnih opisov, ki pomagajo agentom razumeti njihove vire in se z izjemno natančnostjo odzvati na uporabniške zahteve.

To je vaša napredna usposobitev v psihologiji agentov in spreminjanju vedenja. Tako kot terenski operativec potrebuje jasne parametre misije za uspeh, vaši AI agenti potrebujejo strokovno izdelana navodila, da lahko delujejo jasno, natančno in zagotavljajo dragocene informacije v resničnih scenarijih.

---

## 🔎 Cilji

Z dokončanjem te misije boste:

- **Obvladali pisanje navodil**: Razumeli umetnost in znanost pisanja navodil za agente v Copilot Studio
- **Strateško usmerjanje**: Naučili se, kako usmerjati agente k uporabi orodij, virov znanja in sodelovanju z drugimi agenti
- **Operativna jasnost**: Zagotovili, da vaši agenti delujejo natančno, transparentno in učinkovito

---

## 📝 Pisanje navodil za agente

Pisanje učinkovitih navodil za agente je ključ do uspešnega vedenja agentov. Navodila agenti uporabljajo za:

- Odločanje, katero orodje, temo ali vir znanja uporabiti za uporabniško vprašanje ali samodejni sprožilec
- Izpolnjevanje vnosov za katero koli orodje na podlagi razpoložljivega konteksta
- Generiranje odgovora za končnega uporabnika

### Kako delujejo navodila

Navodila morajo temeljiti na orodjih, temah in virih znanja, ki so konfigurirani za vašega agenta. Agenti ne morejo delovati na podlagi navodil za vire, ki jih nimajo. Na primer, če svojemu agentu naročite, naj poišče odgovore v FAQ na spletni strani, morate ta FAQ dodati kot vir znanja.

V svojih navodilih lahko sklicujete na specifična orodja, teme, spremenljivke ali izraze Power Fx z uporabo `/`. To pomaga agentu vedeti, kaj točno uporabiti in kdaj.

### Kaj vključiti v navodila

- Dodajte navodila za primere, kjer želite usmeriti izbire agenta, še posebej, kadar je možna nejasnost.
- Uporabite navodila za postavitev omejitev, kot so omejevanje tem ali določanje formatov odgovorov.
- Dajte namige za izpolnjevanje vnosov orodij, npr. "Uporabite e-poštni naslov iz polja za stik pri pomoči uporabniku pri sestavi e-pošte."
- Določite, kako naj bodo odgovori oblikovani, npr. "Vedno podajte odgovore o statusu naročila v obliki tabele."
- Uporabite omejitve za omejevanje dejanj agenta, npr. "Odgovarjajte samo na zahteve o ugodnostih za zaposlene."

### Praktični primeri

- "Uporabite dokumente FAQ samo, če vprašanje ni povezano z delovnim časom, sestanki ali obračunavanjem."
- "Uporabite temo za ustvarjanje vstopnic samo za ustvarjanje vstopnic; za druge zahteve, povezane z odpravljanjem težav, uporabite temo za odpravljanje težav."
- "Vedno podajte odgovore o statusu naročila v obliki tabele."

### Testiranje in izboljšave

- Po urejanju navodil uporabite testno okno za preverjanje vedenja agenta.
- Po potrebi posodobite in objavite spremembe.

### Napredno usmerjanje

- Oštevilčite ali uporabite seznam z oznakami za svoja navodila in določite, da jih je treba upoštevati po vrsti.
- Uporabite markdown formatiranje za boljšo berljivost in pomoč generativni AI pri obdelavi vaših navodil.
- Če želite, da je vaš agent zelo specifičen, razmislite o ustvarjanju teme za ta primer uporabe.
- Uporabite natančna imena za orodja in teme v navodilih, da se izognete zmedi.

### Varnost in moderacija

- Omejite, katera orodja naj agent uporablja pri sklicevanju na vire znanja.
- Omejite, katere parametre naj uporablja za orodja (npr. pošiljanje e-pošte samo določenemu seznamu posameznikov).
- Uporabite navodila za zaščito pred neželenim vedenjem ali težavami pri filtriranju vsebine.

---

## ✍️ Pisanje opisov za orodja, teme in agente

Visokokakovostni opisi so ključni za generativno orkestracijo. Vaš agent uporablja te opise za izbiro pravih orodij, tem in agentov za odziv na uporabniške zahteve in sprožilce. Upoštevajte te najboljše prakse:

- **Uporabite preprost, neposreden jezik**: Izogibajte se žargonu, slengu ali pretirano tehničnim izrazom. Pišite v aktivni obliki in sedanjiku.
- **Bodite specifični in relevantni**: Vključite ključne besede, povezane s funkcionalnostjo in uporabniškim namenom. Poskrbite, da opisi jasno razlikujejo podobna orodja ali teme, da se izognete nejasnostim.
- **Naj bo kratko in informativno**: Omejite opise na eno ali dve povedi. Povzemite, kaj orodje, tema ali agent počne in kako koristi uporabniku.
- **Uporabite unikatna, opisna imena**: Izogibajte se generičnim imenom. Na primer, uporabite "Vremenska napoved za jutri" namesto samo "Vreme".
- **Navedite dejanja ali premisleke**: Uporabite seznam z oznakami ali številkami za jasnost pri opisovanju več funkcij ali korakov.
- **Preverite prekrivanje**: Če imajo več tem podobne opise, jih lahko vaš agent vse uporabi. Testirajte in popravite, da preprečite prekrivanje.

!!! example "Primeri dobrih in slabih opisov"
    **Dober:** Ta tema zagotavlja vremenske informacije za katero koli lokacijo na svetu za naslednji dan. Ponuja temperaturo. Ne pridobi trenutnega vremena za danes.  
    **Slab:** To orodje lahko odgovarja na vprašanja. *(Preveč nejasno)*

---

## 🛠️ Najboljše prakse za navodila in opise

Da bodo vaša navodila in opisi resnično učinkoviti, upoštevajte ta načela:

- Uporabite aktivno obliko in sedanjik (npr. "To orodje zagotavlja vremenske informacije").
- Izogibajte se žargonu, slengu ali nepotrebnim tehničnim izrazom, razen če so nujni za občinstvo.
- Uporabite seznam z oznakami ali številkami za ločevanje dejanj, funkcij ali premislekov.
- Vključite ključne besede, ki ustrezajo uporabniškemu namenu in funkcionalnosti orodja ali teme.
- Poskrbite za različna imena in opise za podobne vire, da se izognete zmedi in prekrivanju.

---

## 🗂️ Primer strukture navodil

Pri pisanju navodil upoštevajte naslednjo strukturo za jasnost in popolnost:

1. **Pregled**: Na kratko opišite misijo in vlogo agenta  
1. **Koraki procesa**: Naštejte glavne korake, ki jih mora agent slediti  
1. **Točke sodelovanja**: Navedite, kdaj naj agent pokliče druge agente ali uporabi določena orodja  
1. **Varnost in moderacija**: Vključite zahteve glede skladnosti ali varnosti  
1. **Povratna zanka**: Določite, kako naj agent zbira povratne informacije ali eskalira težave  

---

## 🧪 Laboratorij: Pisanje navodil za agente

*Vsebina laboratorija kmalu na voljo...*

---

## 🎉 Misija zaključena

Misija 04 je zaključena! Zdaj imate:

✅ **Obvladanje pisanja navodil**: Naučili ste se pisati jasna, izvedljiva navodila za agente  
✅ **Strateško usmerjanje**: Usmerili ste agente k učinkoviti uporabi orodij in sodelovanju  
✅ **Operativna jasnost**: Zagotovili ste, da agenti delujejo natančno in transparentno  

Naslednja je [Misija 05](../05-agent-responses/README.md): Prilagajanje odgovorov agentov za največji učinek.

---

## 📚 Taktični viri

📖 [Microsoft Copilot Studio - Pisanje navodil](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Smernice za generativni način](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije je priporočljivo profesionalno človeško prevajanje. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.