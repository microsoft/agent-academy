<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-20T23:05:36+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "hr"
}
-->
# 🕵️‍♂️ Misija 04: Pisanje uputa za agente

--8<-- "disclaimer.md"

## 🕵️‍♂️ KODNO IME: `OPERACIJA TAJNA DIREKTIVA`

> **⏱️ Vremenski okvir operacije:** `~45 minuta`

## 🎯 Kratak opis misije

Agente, vaš sljedeći zadatak je **Operacija Tajna Direktiva** - savladavanje umjetnosti komunikacije i kontrole agenata kroz precizne upute i opise.

Vaša misija, ako je odlučite prihvatiti, jest naučiti ključne vještine pisanja jasnih, djelotvornih uputa koje će voditi vaše agente da donose inteligentne odluke, koriste odgovarajuće alate i izvore informacija te besprijekorno surađuju s drugim agentima. Također ćete savladati vještinu pisanja visokokvalitetnih opisa koji pomažu agentima da razumiju svoje resurse i odgovore s preciznošću na korisničke upite.

Smatrajte ovo naprednom obukom iz psihologije agenata i modifikacije ponašanja. Baš kao što terenski operativac treba jasne parametre misije za uspjeh, vaši AI agenti zahtijevaju stručno izrađene upute kako bi djelovali s jasnoćom, preciznošću i pružili vrijedne informacije u stvarnim scenarijima.

---

## 🔎 Ciljevi

Završetkom ove misije, naučit ćete:

- **Majstorstvo uputa**: Razumjeti umjetnost i znanost pisanja uputa za agente u Copilot Studio
- **Strateško usmjeravanje**: Naučiti kako usmjeriti agente da koriste alate, izvore informacija i surađuju s drugim agentima
- **Operativna jasnoća**: Osigurati da vaši agenti djeluju s preciznošću, transparentnošću i učinkovitošću

---

## 📝 Pisanje uputa za agente

Pisanje učinkovitih uputa za agente ključ je uspješnog ponašanja agenata. Upute se koriste kako bi agenti mogli:

- Odlučiti koji alat, temu ili izvor informacija koristiti za korisnički upit ili autonomni okidač
- Popuniti ulazne podatke za bilo koji alat na temelju dostupnog konteksta
- Generirati odgovor za krajnjeg korisnika

### Kako funkcioniraju upute

Upute moraju biti temeljene na alatima, temama i izvorima informacija konfiguriranim za vašeg agenta. Agenti ne mogu djelovati prema uputama za resurse koje nemaju. Na primjer, ako svom agentu date uputu da pretraži FAQ web stranice, morate dodati taj FAQ kao izvor informacija.

Možete referencirati specifične alate, teme, varijable ili Power Fx izraze koristeći `/` u svojim uputama. To pomaže agentu da točno zna što koristiti i kada.

### Što uključiti u upute

- Dodajte upute za slučajeve u kojima želite usmjeriti izbor agenta, posebno kada postoji mogućnost nejasnoće.
- Koristite upute za postavljanje ograničenja, poput ograničavanja tema ili specificiranja formata odgovora.
- Dajte smjernice za popunjavanje ulaznih podataka alata, npr. "Koristite e-mail adresu iz polja za kontakt potencijalnog klijenta kada pomažete korisniku u sastavljanju e-maila."
- Navedite kako bi odgovori trebali biti formatirani, npr. "Uvijek dajte odgovore o statusu narudžbe u formatu tablice."
- Koristite ograničenja za ograničavanje radnji agenta, npr. "Odgovarajte samo na zahtjeve vezane uz beneficije zaposlenika."

### Praktični primjeri

- "Koristite samo FAQ dokumente ako pitanje nije vezano uz radno vrijeme, termine ili naplatu."
- "Koristite temu za kreiranje tiketa samo za kreiranje tiketa; za ostale zahtjeve vezane uz rješavanje problema koristite temu za otklanjanje poteškoća."
- "Uvijek dajte odgovore o statusu narudžbe u formatu tablice."

### Testiranje i usavršavanje

- Nakon uređivanja uputa, koristite testni panel za provjeru ponašanja agenta.
- Ažurirajte i objavite promjene prema potrebi.

### Napredne smjernice

- Numerirajte ili koristite popis za svoje upute i navedite da se moraju slijediti redoslijedom.
- Koristite markdown formatiranje radi preglednosti i kako biste pomogli generativnom AI-u da obradi vaše upute.
- Ako želite da vaš agent bude vrlo specifičan, razmislite o kreiranju teme za taj slučaj upotrebe.
- Koristite točne nazive alata i tema u uputama kako biste izbjegli zabunu.

### Sigurnost i moderacija

- Ograničite koje alate agent treba koristiti prilikom referenciranja izvora informacija.
- Ograničite koje parametre treba koristiti za alate (npr. slanje e-maila samo određenoj listi osoba).
- Koristite upute za zaštitu od neželjenog ponašanja ili problema s filtriranjem sadržaja.

---

## ✍️ Pisanje opisa za alate, teme i agente

Visokokvalitetni opisi ključni su za generativnu orkestraciju. Vaš agent koristi ove opise kako bi odabrao prave alate, teme i agente za odgovaranje na korisničke upite i okidače. Slijedite ove najbolje prakse:

- **Koristite jednostavan, direktan jezik**: Izbjegavajte žargon, sleng ili pretjerano tehničke izraze. Pišite u aktivnom glasu i sadašnjem vremenu.
- **Budite specifični i relevantni**: Uključite ključne riječi povezane s funkcionalnošću i namjerom korisnika. Osigurajte da opisi jasno razlikuju slične alate ili teme kako biste izbjegli nejasnoće.
- **Kratko i informativno**: Ograničite opise na jednu ili dvije rečenice. Sažmite što alat, tema ili agent radi i kako koristi korisniku.
- **Koristite jedinstvena, opisna imena**: Izbjegavajte generička imena. Na primjer, koristite "Prognoza vremena za sutra" umjesto samo "Vrijeme".
- **Navedite radnje ili razmatranja**: Koristite popise s točkama ili brojevima za jasnoću prilikom opisivanja više značajki ili koraka.
- **Testirajte za preklapanje**: Ako više tema ima slične opise, vaš agent može pozvati sve njih. Testirajte i revidirajte kako biste spriječili preklapanje.

!!! example "Primjeri dobrih i loših opisa"
    **Dobro:** Ova tema pruža informacije o vremenu za bilo koju lokaciju u svijetu za sljedeći dan. Pruža temperaturu. Ne prikazuje trenutno vrijeme za danas.  
    **Loše:** Ovaj alat može odgovarati na pitanja. *(Previše nejasno)*

---

## 🛠️ Najbolje prakse za upute i opise

Kako biste svoje upute i opise učinili zaista učinkovitim, imajte na umu ove principe:

- Koristite aktivni glas i sadašnje vrijeme (npr. "Ovaj alat pruža informacije o vremenu").
- Izbjegavajte žargon, sleng ili nepotrebne tehničke izraze osim ako su nužni za publiku.
- Koristite popise s točkama ili brojevima za odvajanje radnji, značajki ili razmatranja.
- Uključite ključne riječi koje odgovaraju namjeri korisnika i funkcionalnosti alata ili teme.
- Osigurajte jedinstvena imena i opise za slične resurse kako biste izbjegli zabunu i preklapanje.

---

## 🗂️ Primjer strukture uputa

Prilikom pisanja uputa, razmotrite sljedeću strukturu za jasnoću i cjelovitost:

1. **Pregled**: Ukratko opišite misiju i ulogu agenta  
1. **Koraci procesa**: Navedite glavne korake koje agent treba slijediti  
1. **Točke suradnje**: Naznačite kada treba pozvati druge agente ili koristiti specifične alate  
1. **Sigurnost i moderacija**: Uključite sve zahtjeve za usklađenost ili sigurnost  
1. **Povratna informacija**: Navedite kako agent treba prikupljati povratne informacije ili eskalirati probleme  

---

## 🧪 Laboratorij: Pisanje uputa za agente

*Sadržaj laboratorija uskoro...*

---

## 🎉 Misija završena

Misija 04 je završena! Sada ste stekli:

✅ **Majstorstvo uputa**: Naučili ste kako pisati jasne, djelotvorne upute za agente  
✅ **Strateško usmjeravanje**: Usmjerili ste agente na korištenje alata i učinkovitu suradnju  
✅ **Operativna jasnoća**: Osigurali ste da agenti djeluju s preciznošću i transparentnošću  

Sljedeće je [Misija 05](../05-agent-responses/README.md): Prilagodba odgovora agenata za maksimalan učinak.

---

## 📚 Taktički resursi

📖 [Microsoft Copilot Studio - Pisanje uputa](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Smjernice za generativni način rada](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.