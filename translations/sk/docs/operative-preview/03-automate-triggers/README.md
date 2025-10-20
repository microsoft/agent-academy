<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T18:23:48+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "sk"
}
-->
# Misia 03: Pridanie spúšťačov udalostí na autonómne fungovanie

--8<-- "disclaimer.md"

## 🕵️‍♂️ KRYCIE MENO: `OPERÁCIA SIGNAL POINT`

> **⏱️ Časový rámec operácie:** `~45 minút`

## 🎯 Zhrnutie misie

Vitajte späť, agent. V [Misia 02](../02-multi-agent/README.md) - ste sa naučili, ako vytvoriť podriadeného agenta na príjem žiadostí a prepojeného agenta na prípravu na pohovor, aby ste rozšírili schopnosti vášho hlavného agenta na nábor.

Vaša úloha, ak sa ju rozhodnete prijať, je **Operácia Signal Point** - hlbšie sa ponoriť do **spúšťačov udalostí** - povýšiť váš systém agentov z reaktívneho na **autonómne fungovanie**. Transformujete svojich agentov z čakania na vstup od človeka na proaktívne reagovanie na externé udalosti a vykonávanie inteligentných akcií bez dozoru.

Predstavte si to ako upgrade z agentov, ktorí _odpovedajú na otázky_, na agentov, ktorí _predvídajú potreby_ a _konajú nezávisle_. Prostredníctvom spúšťačov udalostí a automatizovaných pracovných postupov váš náborový agent rozpozná prichádzajúce e-maily s životopismi, automaticky spracuje prílohy, uloží údaje do Dataverse a upozorní váš HR tím na nábor prostredníctvom Microsoft Teams - zatiaľ čo vy sa sústredíte na úlohy s vyššou hodnotou.

Vitajte vo svete, kde sa automatizácia stretáva s inteligenciou.

## 🔎 Ciele

V tejto misii sa naučíte:

1. Ako spúšťače udalostí umožňujú autonómne správanie agenta bez interakcie používateľa
1. Rozdiely medzi interaktívnymi a autonómnymi agentmi v Copilot Studio
1. Ako vytvoriť spúšťače udalostí, ktoré automaticky spracujú e-mailové prílohy a nahrajú súbory do Dataverse
1. Ako vytvoriť pracovné postupy agentov, ktoré posielajú adaptívne karty do kanálov Teams na upozornenia
1. Ako prenášať údaje medzi spúšťačmi udalostí a pracovnými postupmi agentov na automatizáciu od začiatku do konca

## 🤔 Čo je spúšťač udalostí?

Predtým v [Recruit](../../recruit/10-add-event-triggers/README.md), sme sa naučili o spúšťačoch udalostí. Urobme si rýchle zhrnutie, ak ste to zmeškali.

**Spúšťače udalostí** umožňujú agentovi _konať_ samostatne, keď sa niečo stane v inom systéme - bez potreby správy od používateľa. Keď sa spustená udalosť aktivuje - ako napríklad „nová položka v SharePoint“, „nový e-mail“, „priradená úloha v Planner“ alebo dokonca časovo založená opakovanosť, konektor pošle spúšťací balík vášmu agentovi. Agent potom nasleduje vaše pokyny, aby rozhodol, ktoré akcie alebo témy má vykonať.

### Kľúčové charakteristiky

- **Autonómna aktivácia:**
      - Na rozdiel od spúšťačov tém, ktoré sa aktivujú, keď používateľ píše agentovi, spúšťače udalostí sa aktivujú na základe externých udalostí, čo umožňuje proaktívne správanie.

- **Riadené balíkom:**
      - Každá udalosť doručuje balík (premenné + voliteľné pokyny) prostredníctvom konektora. Agent používa vaše definované pokyny a balík na rozhodnutie, čo robiť ďalej.
      - Napríklad _spustiť tému_ alebo _vykonať akcie definované nástrojmi_.

- **Príklady pripravené na použitie:**
      - Súbor alebo položka vytvorená v SharePoint/OneDrive
      - Úloha v Planner dokončená/priradená
      - Odpoveď na Microsoft Forms odoslaná
      - Opakovanie/plán

    Dostupnosť závisí od dátových politík vašej organizácie nakonfigurovaných v Power Automate.

- **Vyžaduje generatívnu orchestráciu:**
      - Spúšťače udalostí sú dostupné iba vtedy, keď je pre agenta povolená generatívna orchestrácia.

- **Fakturácia/použitie:**
      - Každé doručenie spúšťača sa počíta ako správa v rámci kapacity Copilot Studio.
      - Napríklad 10-minútová opakovanosť posiela správu každých 10 minút.

- **Model autentifikácie a nastavenie:**
      - Spúšťače pridávate v prehľade agenta, v sekcii _Triggers_. Autentifikácia pre konektor spúšťača používa účet autora agenta („autentifikácia autora agenta“).
      - Parametre spúšťača a balík môžete upraviť v portáli Power Automate maker.

- **Testovanie a pozorovateľnosť:**
      - Spúšťače môžete testovať z testovacieho panela agenta a sledovať správanie pomocou mapy aktivít pred publikovaním.

!!! info "TL;DR pre vývojárov"

    Predstavte si spúšťače udalostí ako **signály podobné webhookom**, ktoré posúvajú štruktúrovaný balík do vášho agenta, čo mu umožňuje _iniciovať_ prácu a reťaziť akcie naprieč systémami - bez čakania na požiadavku od používateľa.

### Spúšťače tém - ako sa líšia

Predtým ste sa naučili o spúšťačoch tém v [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), avšak možno stále premýšľate, ako sa _spúšťače tém_ líšia od _spúšťačov udalostí_ a prečo tento rozdiel je dôležitý pre pochopenie toho, čo robí agenta autonómnym.

Spúšťače tém kontrolujú _kedy sa téma spustí_, zvyčajne ako odpoveď na správu používateľa.

- V generatívnej orchestrácii je predvolený spúšťač **By agent** - plánovač vyberie tému, ktorej názov/popis najlepšie zodpovedá správe používateľa.
- V klasickej orchestrácii je predvolený spúšťač **Phrases** - plánovač vyberie tému, keď jedna alebo niekoľko spúšťacích fráz najlepšie zodpovedá správe používateľa.

Iné typy spúšťačov zahŕňajú `Message received`, `Event received`, `Activity received`, `Conversation update`, `Invoke received`, `On redirect`, `Inactivity`, a `Plan complete`.

!!! info "Hlavný rozdiel"

    Spúšťače tém sú _začiatky konverzačných aktivít_ v rámci chatu.
    
    Spúšťače udalostí sú _začiatky systémových udalostí_ doručené prostredníctvom konektorov, ktoré môžu spustiť agenta bez akejkoľvek konverzácie.

### Rýchly prehľad spúšťačov tém vs spúšťačov udalostí

- **Spúšťač témy:** Používateľ (alebo aktivita v chate) povedal/urobil X ➡️ spustiť tému T.
- **Spúšťač udalosti:** SharePoint/Planner/E-mail/Časovač spustil balík P ➡️ agent vyhodnotí pokyny ➡️ vykoná akcie/témy podľa potreby.

## 🏓 Porovnanie interaktívneho agenta vs autonómneho agenta

Teraz, keď poznáte rozdiel medzi spúšťačmi udalostí a spúšťačmi tém, poďme sa naučiť rozdiel medzi interaktívnym agentom a autonómnym agentom.

V Copilot Studio termínoch, "interaktívny" sa vzťahuje na agentov, ktorí primárne komunikujú prostredníctvom **tém** v chate alebo kanáli. "Autonómny" sa vzťahuje na agentov, ktorí tiež využívajú **spúšťače udalostí**, aby fungovali bez vstupu používateľa.

Nasledujúca tabuľka sumarizuje ich rozdiely a podobnosti.

| Rozmer                              | Interaktívny agent    | Autonómny agent                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Ako začína                          | Používateľ (alebo aktivita v chate) spustí tému. Príklad: By agent, Phrases, Message received.   | Externý spúšťač udalosti pošle balík prostredníctvom konektora agentovi. Príklad: SharePoint, Planner, e-mail, plán, atď. |
| Primárne použitie                   | Otázky a odpovede, vedené pracovné postupy, akcie na požiadanie v chate - Teams, web, atď.  | Proaktívne operácie a automatizácia na pozadí - reagovať na zmeny v systéme a potom upozorniť, uložiť alebo zorganizovať úlohy. |
| Povrch spúšťača                     | Spúšťače tém: By agent / Phrases / Message received / Typy aktivít / Invoke / Inactivity / Plan complete | Knižnica spúšťačov udalostí prostredníctvom konektorov; balík obsahuje údaje udalosti + voliteľné pokyny. |
| Plánovač (generatívna orchestrácia) | Silne využívaný pre spúšťače By agent a Plan complete na výber/sekvenciu tém. | Vyžaduje sa pre spúšťače udalostí; agent používa pokyny + balík na rozhodnutie, ktoré akcie/témy vykonať. |
| Typický príklad                     | Používateľ sa pýta "Aká je naša politika vrátenia peňazí?" → Téma sa spustí, vyhľadá informácie, odpovie. | Nová úloha v Planner priradená → Spúšťač udalosti sa aktivuje → Agent pošle správu do Teams, aktualizuje záznam alebo spustí tému. |
| Cesta nastavenia                    | Vytvorte témy, definujte typ spúšťača, napíšte dialóg/akcie; publikujte do kanálov. | Pridajte spúšťač udalosti (Overview → Triggers), autentifikujte konektor pomocou poverení autora agenta, nakonfigurujte balík/pokyny; testujte prostredníctvom testovacieho panela; publikujte. |
| Autentifikácia a správa             | Funguje v kontexte kanála/autentifikácie; spúšťače tém reagujú na aktivity chatu v povolených kanáloch. | Dostupnosť spúšťačov závisí od dátových politík Power Automate; konektory fungujú pod účtom autora agenta. |
| Pozorovateľnosť                     | Testujte témy v Copilot Studio, sledujte prepisy konverzácií/aktivity. | Použite Test trigger a mapu aktivít na overenie vykonania pred publikovaním, monitorujte aktivitu po publikovaní. |
| Dopad na kapacitu                   | Každá správa používateľa/odpoveď agenta je správa, ktorá spotrebováva kapacitu. | Každé doručenie udalosti je tiež správa, plus akékoľvek následné akcie. Príklad: 10-minútová opakovanosť = 6 správ/hodina |

### Kedy použiť ktorý?

- Vyberte **spúšťače tém (interaktívne)**, keď používatelia iniciujú konverzáciu s agentom - FAQ, vedený príjem alebo úlohy v štýle príkazov v rámci chatu. Spúšťač By agent plánovača znižuje manuálnu kuráciu fráz.
- Pridajte **spúšťače udalostí (autonómne)**, keď by mal agent začať konverzáciu alebo konať sám - pri aktualizáciách v SharePoint/Dataverse, prichádzajúcom e-maile alebo podľa plánu. To vás posúva z reaktívnych na proaktívne operácie.

## Tipy pre vývojárov a upozornenia

1. **Povoľte generatívnu orchestráciu** pre akéhokoľvek agenta, ktorého chcete urobiť autonómnym. Spúšťače udalostí sa inak nezobrazia.

1. **Modelujte balík včas.** Rozhodnite sa, aké minimálne polia váš agent potrebuje zo spúšťača, ako napríklad `itemId`, `assignedTo`, `dueDate` a pridajte stručné pokyny, ktoré agentovi povedia, akú akciu/tému má spustiť na základe hodnôt balíka.

1. **Rozsah autentifikácie je dôležitý.** Spúšťače autentifikujú pomocou účtu autora agenta. Uistite sa, že tento účet má správne povolenia konektora a je v súlade s dátovými politikami Power Automate.

1. **Kontrolujte náklady a šum.** Vysokofrekvenčné opakovania alebo veľmi časté zdroje môžu rýchlo zvýšiť spotrebu správ - obmedzte, kde je to možné, alebo pridajte podmienky do spúšťača na filtrovanie udalostí.

1. **Testujte pred publikovaním.** Použite **Test trigger** a mapu aktivít na sledovanie plánu a vykonaných akcií - iterujte pokyny/balík, kým nebude správanie stabilné.

## 🧪 Laboratórium 03 - Automatizácia e-mailov s prihláškami kandidátov

Ďalej pridáme spúšťač udalosti do **Náborového agenta** a vytvoríme pracovný postup agenta v podriadenom **Agentovi na príjem žiadostí**, aby sme zabezpečili ďalšie spracovanie pre autonómiu.

### ✨ Scenár použitia

!!! info ""

    **Ako** HR náborár

    **Chcem byť** upozornený, keď e-mail s životopisom dorazí do mojej schránky a automaticky sa nahraje do Dataverse

    **Aby som mohol** byť informovaný o životopisoch zaslaných e-mailom na prihlášky automaticky nahrané do Dataverse

Dosiahneme to pomocou dvoch techník:

1. Spúšťač udalosti pre príchod e-mailu,
    1. Skontrolujte, či `contentType` súboru je `PDF` ako formát.
    1. Extrahujte súbor a nahrajte ho do Dataverse pomocou akcií cez konektor Dataverse.
    1. Potom pošlite výzvu agentovi na ďalšie spracovanie prenesením vstupných parametrov z akcií Dataverse.

1. Pridáme pracovný postup agenta do podriadeného **Agenta na príjem žiadostí**, ktorý je vyvolaný výzvou v spúšťači udalosti.
    1. Použite vstupné parametre prenesené z výzvy spúšťača udalosti v adaptívnej karte zverejnenej v kanáli Microsoft Teams na upozornenie HR náborového tímu. Adaptívna karta bude obsahovať odkaz na riadok v Dataverse, ktorý bude zobrazený v **Náborovom agentovi**.

Začnime!

### ✨ Predpoklady na splnenie tejto misie

Budete potrebovať **buď**:

- **Dokončiť Misia 01 a Misia 02** a mať pripraveného svojho Náborového agenta, **ALEBO**
- **Importovať štartovacie riešenie Misia 03**, ak začínate od začiatku alebo potrebujete dobehnúť. [Stiahnuť štartovacie riešenie Misia 03](https://aka.ms/agent-academy)

!!! note "Import riešenia a vzorové údaje"
    Ak používate štartovacie riešenie, pozrite si [Misia 01](../01-get-started/README.md) pre podrobné pokyny, ako importovať riešenia a vzorové údaje do vášho prostredia.

Budete tiež potrebovať prístup k **Microsoft Teams**, aby ste dokončili druhé cvičenie laboratória o zverejnení adaptívnej karty do Microsoft Teams.

### Laboratórium 3.1 - Automatizácia nahrávania životopisov do Dataverse prijatých e-mailom

1. V Náborovom agentovi, prejdite na **Prehľad** a vyberte **+ Pridať spúšťač**.

       ![Pridať spúšťač do agenta](assets/3.1_01_Add
Teraz aktualizujeme spúšťač udalostí, aby sme pridali ďalšie možnosti automatizácie. Vyberte **tri bodky (...)** pri spúšťači a zvoľte **Upraviť v Power Automate**.

![Vyberte Upraviť v Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.sk.png)

1. Spúšťač sa načíta ako tok v portáli Power Automate maker. To, čo vidíte, je návrhár tokov v portáli Power Automate maker. Tu môžeme pridať ďalšiu logiku a akcie pre väčšiu automatizáciu. Spúšťač sa zobrazí na vrchu, nasledovaný **Odoslaním výzvy určenému copilotovi na spracovanie** ako poslednou akciou v toku.

![Návrhár tokov v portáli Power Automate maker](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.sk.png)

1. Predvolene môže spúšťač **Keď príde nový e-mail** v Power Automate spracovať viacero e-mailov naraz, ak ich príde viac súčasne, pričom tok sa spustí iba raz pre celú dávku.

   Aby sa tok spustil samostatne pre každý e-mail, aktivujte nastavenie **Rozdelenie** v nastaveniach spúšťača a vyberte `@triggerOutputs()?['body/value']` v poli pre pole typu pole.

   S aktivovaným nastavením **Rozdelenie** a nastaveným poľom na `@triggerOutputs()?['body/value']` sa tok spustí individuálne pre každú správu, aj keď ich príde naraz veľa.

![Zapnite nastavenie Rozdelenie v spúšťači](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.sk.png)

1. Ďalej pridáme logiku na kontrolu typu súboru prílohy, chceme nahrať iba prílohy vo formáte .PDF a nie obrázky (tie by mohli pochádzať z podpisov e-mailov). Vyberte ikonu **+** pod spúšťačom a zvoľte **Ovládanie** v sekcii **Vstavané nástroje**.

![Vyberte Ovládanie](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.sk.png)

1. Vyberte akciu **Podmienka**.

![Vyberte akciu Podmienka](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.sk.png)

1. Teraz nakonfigurujeme podmienku na kontrolu, či je typ súboru prílohy .PDF. V poli **Vyberte hodnotu** vyberte **ikonu blesku** alebo **ikonu fx** napravo.

   1. Do poľa **Vyhľadávanie** zadajte nasledujúce,

      ```text
      content type
      ```

   1. Potom vyberte parameter **Attachments Content-Type** zo spúšťača.

   1. Ďalej vyberte **Pridať**, aby ste pridali dynamický obsah do parametra **Id** akcie.

![Konfigurácia akcie Podmienka](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.sk.png)

1. Zastavme sa tu na chvíľu, pravdepodobne ste si všimli, že sa automaticky objavila akcia **Pre každú**.

   Vyberte akciu **Pre každú**. Táto akcia predstavuje prechádzanie každou prílohou v e-maile, pretože parameter **Attachments Content-Type** zo spúšťača je viazaný na každú prílohu.

   Pod povrchom je to pole, a preto bola akcia **Pre každú** automaticky pridaná, keď sme vybrali parameter **Attachments Content-Type** v akcii **Podmienka**.

   Ak sa chcete dozvedieť viac o tomto, rozbaľte nasledujúci blok ďalšieho učenia.

??? info "Ďalšie učenie: Automatické objavenie akcie Pre každú"

🤔 **Prečo sa automaticky objaví "Použiť na každú" alebo "Pre každú"?**

Keď vyberiete parameter (dynamický obsah), ktorý predstavuje zoznam alebo pole položiek - napríklad zoznam príloh, e-mailov alebo riadkov - Power Automate rozpozná, že by ste mohli chcieť spracovať každú položku individuálne.

Aby vám s tým pomohol, Power Automate automaticky pridá slučku **“Použiť na každú”** (alebo **Pre každú**) okolo vašej akcie. To zaisťuje, že vaša akcia sa vykoná raz pre každú položku v zozname, namiesto toho, aby sa pokúšala spracovať celý zoznam naraz (čo by mohlo spôsobiť chyby).

🦋 **Príklad**

- Ak vyberiete "Prílohy" z predchádzajúcej akcie (ktoré sú poľom), a pokúsite sa ich použiť v akcii, ktorá očakáva jeden súbor, Power Automate obalí vašu akciu slučkou **"Použiť na každú"** (alebo **Pre každú**). 
- Týmto spôsobom sa vaša akcia vykoná pre **každú prílohu** - jednu po druhej.

💡 **Kľúčové body**

- **Automatické:** Slučka sa objaví automaticky, aby vám pomohla spracovať každú položku v kolekcii.
- **Predchádza chybám:** Bez slučky by vaša akcia mohla zlyhať, pretože by nedokázala spracovať viacero položiek naraz.
- **Vizualizácia:** Je to vizuálny spôsob, ako ukázať, že váš tok bude opakovať akciu pre každú položku v zozname.

![Vysvetlenie akcie Pre každú](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.sk.png)

1. Ďalej, v druhom poli **Vyberte hodnotu**, zadajte nasledujúce,

```text
application/pdf
```

Tým sa zabezpečí, že pre každú prílohu sa skontroluje, či je formát súboru .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.sk.png)

1. Teraz nakonfigurujeme cestu **Pravda**, aby sme extrahovali súbor z e-mailu a nahrali ho do tabuľky **Resume** v Dataverse.

   Pridajte novú akciu nižšie v ceste **Pravda** a vyhľadajte `html to text`. Vyberte akciu **Html to text**.

   Ak sa chcete dozvedieť viac o akcii **Html to text**, rozbaľte nasledujúci blok ďalšieho učenia.

??? info "Ďalšie učenie: Akcia Html to text"

🤔 **Čo je akcia "HTML to text"?**

Akcia **HTML to text** v Power Automate sa používa na konverziu obsahu vo formáte HTML na obyčajný text. To je obzvlášť užitočné, keď dostanete údaje (ako e-maily, webový obsah alebo odpovede API), ktoré obsahujú HTML značky, a chcete extrahovať iba čitateľný text bez akéhokoľvek formátovania alebo kódu.

⚙️ **Ako to funguje?**

- **Vstup:** Poskytnete reťazec obsahu vo formáte HTML (napríklad telo e-mailu).
- **Výstup:** Akcia odstráni všetky HTML značky a vráti iba obyčajný text.

👍🏻 **Kedy by ste to mali použiť?**

- Keď chcete extrahovať čitateľný text z e-mailov, webových stránok alebo odpovedí API, ktoré obsahujú HTML.
- Pred odoslaním obsahu do systémov, ktoré nepodporujú HTML formátovanie (ako SMS, správy v Teams alebo databázy).
- Na vyčistenie údajov pre ďalšie spracovanie alebo analýzu.

🔭 **Kde to nájdete?**

- V Power Automate pre Agent Flows, vyhľadajte akciu nazvanú `HTML to text`. Nachádza sa pod konektorom **Data Operations**.

💡 **Kľúčové body**

- Odstraňuje všetky HTML značky a ponecháva iba text.
- Neinterpretuje ani nevykonáva skripty/štýly - iba odstraňuje značky.
- Užitočné na čistenie údajov a prípravu obsahu na výstupy vo formáte obyčajného textu.

![Pridajte akciu HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.sk.png)

1. Ďalej musíme vytvoriť nové referenčné pripojenie pre akciu **Html to text** výberom **Pridať nové**.

![Pridať nové referenčné pripojenie](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.sk.png)

1. Akcia môže byť teraz nakonfigurovaná. Pridajme parameter **Body** zo spúšťača. V poli **Obsah** vyberte **ikonu blesku** alebo **ikonu fx** napravo.

![Pridať dynamický obsah](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.sk.png)

1. Na karte **Dynamický obsah** vyhľadajte `body` a vyberte parameter **Body**, potom vyberte **Pridať**.

![Pridať parameter Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.sk.png)

1. Dokončili sme konfiguráciu tejto akcie, takže ukončíme akciu výberom dvoch šikmých zátvoriek («) smerujúcich doľava na zbalenie panelu.

![Zbaliť panel akcie](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.sk.png)

1. Pridáme novú akciu výberom **+ ikony** pod akciou **Html to text**, ktorá načíta panel na pridanie akcií. Vyberte konektor **Microsoft Dataverse**.

![Pridať novú akciu](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.sk.png)

1. Vyberte akciu **Pridať nový riadok**.

![Pridať akciu Pridať nový riadok](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.sk.png)

1. Premenujte akciu výberom **Troch bodiek (...)**, skopírujte a vložte nasledujúce ako názov,

```text
Pridať nový riadok životopisu
```

Pre parameter **Názov tabuľky** vyhľadajte `res` a vyberte tabuľku **Resumes**.

![Premenujte akciu a nakonfigurujte parameter Názov tabuľky](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.sk.png)

1. Vyberte pole **Názov životopisu** a vyberte **ikonu blesku** alebo **ikonu fx** napravo.

![Konfigurácia parametra Názov životopisu](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.sk.png)

1. Na karte **Funkcia** zadajte nasledujúci výraz, ktorý používa funkciu `item()`.

```text
item()?['name']
```

Ak sa chcete dozvedieť viac o funkcii `item ()`, rozbaľte nasledujúci blok ďalšieho učenia.

??? info "Ďalšie učenie: Funkcia `item()`"

🤔 **Čo je funkcia `item()`?**

- Keď použijete akciu **Použiť na každú**, Power Automate prechádza každým prvkom v kolekcii (poli).
- Najčastejšie sa používa v akciách ako **Použiť na každú** (alebo **Pre každú**), **Vybrať** alebo **Filtrovať pole**.

⚙️ **Ako to funguje?**

- `item()` je funkcia, ktorá vráti aktuálnu položku spracovávanú v slučke alebo operácii poľa.
- V rámci tejto slučky `item()` odkazuje na _aktuálny prvok_, ktorý sa spracováva.

📌 **Kde ju použijete?**

- **Použiť na každú:** na prístup k vlastnostiam aktuálnej položky.
- **Vybrať:** na transformáciu každej položky v poli.
- **Filtrovať pole:** na odkazovanie na aktuálnu položku, ktorá sa hodnotí.

🦋 **Príklad**

- Výraz v slučke:
       -  `item()?['Email']`
- Toto získa vlastnosť `Email` aktuálnej položky.

💡 **Kľúčové body**

- `item()` je _citlivá na kontext_: vždy odkazuje na aktuálnu položku v slučke alebo operácii poľa, v ktorej sa nachádzate.
- Ak vnoríte slučky, môžete použiť `items('LoopName')` na odkazovanie na položky v konkrétnej slučke.

Vyberte **Pridať**, aby ste pridali výraz do parametra **Názov životopisu**.

![Pridať výraz pre parameter Názov životopisu](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.sk.png)

1. Stále musíme nakonfigurovať niekoľko ďalších parametrov, vyberte **Zobraziť všetko** a v poli **Motivačný list** vyberte **ikonu blesku** alebo **ikonu fx** napravo.

Na karte **Funkcia** zadajte nasledujúci výraz, ktorý používa rovnaký výraz ako v predchádzajúcej [misii](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Tento výraz kontroluje, či je _text_ z akcie **Html to text** dlhší ako 2000 znakov, a ak áno, vráti iba prvých 2000 znakov; inak vráti celý text.

![Pridať výraz pre parameter Motivačný list](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.sk.png)

1. Výraz bude teraz pridaný do poľa **Motivačný list**.

![Výraz pridaný do parametra Motivačný list](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.sk.png)

1. Pre pole **Zdrojová e-mailová adresa** vyhľadajte `from` a vyberte parameter **From** zo spúšťača, pretože obsahuje hodnotu e-mailovej adresy.

![Parameter Zdrojová e-mailová adresa](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.sk.png)

1. Pre pole **Dátum nahrania** vyberte **ikonu blesku** alebo **ikonu fx** napravo. Na karte **Funkcia** zadajte nasledujúci výraz, ktorý používa funkciu `utcNow()`.

```text
utcNow()
```

Ak sa chcete dozvedieť viac o funkcii `utcNow`, rozbaľte nasledujúci blok ďalšieho učenia.

??? info "Ďalšie učenie: Funkcia `utcNow`"

🤔 **Čo je funkcia `utcNow()`?**

- Funkcia utcnow() v Power Automate vráti aktuálny dátum a čas v koordinovanom univerzálnom čase (UTC) vo formáte ISO 8601, napríklad: `2025-09-23T04:32:14Z`

🦋 **Príklad**

- Výraz:
       -  `concat('Správa generovaná dňa ', utcnow())`
- Výstup je:
       - Správa generovaná dňa `2025-09-23T04:32:14Z`

💡 **Kľúčové body**
- **Žiadne argumenty (vstupné parametre) nie sú potrebné:** vždy poskytuje aktuálny UTC časový pečiatok.
   - **Použitie**
       - Pridávanie časových pečiatok do logov alebo názvov súborov
       - Porovnávanie aktuálneho času s inými dátumami
       - Plánovanie alebo podmienky založené na čase

![Parameter dátumu nahrania](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.sk.png)

1. Dokončili sme konfiguráciu akcie **Pridať nový riadok životopisu**, takže opustíme panel jeho zbalením.

![Opustiť panel akcie](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.sk.png)

1. Pridáme novú akciu výberom **+ ikony** pod akciou **Pridať nový riadok životopisu**, čo načíta panel na pridanie akcií. Znovu vyberte konektor **Microsoft Dataverse**.

![Pridať akciu Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.sk.png)

1. Vyberte akciu **Nahrať súbor alebo obrázok**.

![Pridať akciu Nahrať súbor alebo obrázok](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.sk.png)

1. Premenujte akciu výberom **trojbodky (...)**, skopírujte a vložte nasledujúce ako názov:

```text
Nahrať súbor životopisu
```

![Premenovať akciu](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.sk.png)

1. Ďalej vyberte pole **Názov obsahu** a vyberte **ikonu blesku** alebo **fx ikonu** napravo.

V **karte Funkcia** zadajte nasledujúci výraz, ktorý používa funkciu `item ()`. Tým sa získa vlastnosť `name` aktuálnej položky (príloha súboru).

```text
item()?['name']
```

![Konfigurovať parameter názvu obsahu](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.sk.png)

1. Pre parameter **Názov tabuľky** vyhľadajte `res` a vyberte tabuľku **Životopisy**.

![Konfigurovať parameter názvu tabuľky](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.sk.png)

1. Ďalej vyberte pole **ID riadku** a vyberte **ikonu blesku** alebo **fx ikonu** napravo.

Vyhľadajte `ID` a vyberte parameter **Životopis** z akcie _Pridať nový riadok_ Dataverse, pretože obsahuje hodnotu ID riadku, do ktorého sa má nahrať PDF súbor.

Vyberte **Pridať**.

![Vybrať parameter ID riadku](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.sk.png)

1. Vyberte pole **Názov stĺpca** a vyberte možnosť **PDF životopisu**.

![Konfigurovať parameter názvu stĺpca](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.sk.png)

1. Vyberte pole **Obsah** a vyberte **ikonu blesku** alebo **fx ikonu** napravo.

V **karte Funkcia** zadajte nasledujúci výraz, ktorý používa funkciu `item ()`. Tým sa získa vlastnosť `contentBytes` aktuálnej položky (príloha súboru). `contentBytes` odkazuje na surové binárne údaje súboru alebo prílohy, kódované ako Base64 reťazec.

```text
item()?['contentBytes']
```

1. Dokončili sme konfiguráciu tejto akcie, takže opustíme akciu výberom dvoch šípok («) smerujúcich doľava na zbalenie panelu.

![Zbaliť panel akcie](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.sk.png)

1. Ďalej vyberte **Odoslať výzvu určenému copilotovi na spracovanie**, potom presuňte a pustite túto akciu pod akciu **Nahrať súbor životopisu** v _True_ ceste podmienky.

![Presunúť akciu do True cesty](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.sk.png)

1. Vyberte **Odoslať výzvu určenému copilotovi na spracovanie** na jej konfiguráciu.

![Vybrať akciu](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.sk.png)

1. V poli **Telo/správa** vyberte celý obsah poľa a vymažte/odstráňte ho.

![Vymazať parameter Telo](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.sk.png)

1. Skopírujte a vložte nasledujúci text do poľa **Telo/správa** a zvýraznite `RESUME ID PLACEHOLDER`.

```text
Odoslať [ResumeId (text)] = "RESUME ID PLACEHOLDER" a [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" a [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" do nástroja "Notify Teams Applicant channel" v podriadenom agentovi "Application Intake Agent"
```

![Nahradiť text zástupného symbolu ID životopisu](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.sk.png)

1. Vyberte **ikonu blesku** alebo **fx ikonu** napravo.

Vyhľadajte `resume` a vyberte parameter **Životopis** z akcie _Pridať nový riadok Dataverse_, pretože obsahuje hodnotu `ID` riadku životopisu, ktorý bol vytvorený.

Vyberte **Pridať**.

![Vybrať parameter životopisu](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.sk.png)

1. Zvýraznite `RESUME TITLE PLACEHOLDER`. Vyberte **ikonu blesku** alebo **fx ikonu** napravo.

Vyhľadajte `title` a vyberte parameter **Názov životopisu** z akcie _Pridať nový riadok Dataverse_, pretože obsahuje hodnotu `názvu životopisu` riadku životopisu, ktorý bol vytvorený.

Vyberte **Pridať**.

![Vybrať parameter názvu životopisu](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.sk.png)

1. Zvýraznite `RESUME NUMBER PLACEHOLDER`. Vyberte **ikonu blesku** alebo **fx ikonu** napravo.

Vyhľadajte `resume number` a vyberte parameter **Číslo životopisu** z akcie _Pridať nový riadok Dataverse_, pretože obsahuje hodnotu `Číslo životopisu` riadku životopisu, ktorý bol vytvorený.

Vyberte **Pridať**.

![Vybrať parameter čísla životopisu](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.sk.png)

1. Dokončili sme konfiguráciu tejto akcie a náš tok agenta 🙌🏻 Skvelá práca! Teraz uložme náš tok udalostí výberom **Uložiť návrh**.

![Uložiť návrh](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.sk.png)

1. Teraz musíme upraviť detaily toku agenta, vyberte **Späť**.

![Vybrať Späť](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.sk.png)

1. Vyberte **Upraviť** v sekcii **Detaily** a aktualizujte **Plán** na možnosť **Copilot Studio**.

Vyberte **Uložiť**.

![Zmeniť plán Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.sk.png)

1. Zobrazí sa modálne okno, ktoré vás požiada o potvrdenie pre prepnutie na plán Copilot Studio. Vyberte **Potvrdiť**.

![Potvrdiť zmenu plánu Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.sk.png)

1. Plán je teraz aktualizovaný na **Copilot Studio**. Vyberte **Upraviť**, pretože potrebujeme publikovať tok udalostí pre nášho agenta.

![Upraviť tok](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.sk.png)

1. Vyberte **Publikovať**.

![Publikovať](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.sk.png)

Hurá! Tok udalostí je teraz publikovaný 😃

![Publikované](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.sk.png)

Pokračujme v vytváraní nového toku agenta, ktorý bude vyvolaný podriadeným **Intake Application Agent**.

### Lab 3.2 - Upozorniť kanál Teams pomocou adaptívnej karty

Teraz vytvoríme nový tok agenta pre podriadeného **Intake Application Agent**, ktorý použije hodnoty odovzdané spúšťačom udalostí na zverejnenie adaptívnej karty do kanála Teams. Táto adaptívna karta upozorní tím náboru HR na PDF, ktoré bolo automaticky nahrané, aby ho mohli preskúmať.

Začnime!

1. V **Hiring Agent** vyberte kartu **Agenti** a vyberte **Application Intake Agent**.

![Vybrať Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.sk.png)

1. Posuňte sa nadol na **Nástroje** a vyberte **+ Pridať**.

![Pridať nástroj](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.sk.png)

1. Zobrazí sa modálne okno **Pridať nástroj**. Vyberte **+ Nový nástroj**.

![Vybrať Nový nástroj](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.sk.png)

1. Vyberte **Tok agenta**.

![Vybrať Tok agenta](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.sk.png)

1. Následne sa načíta **návrhár toku agenta**. V spúšťači **Keď agent zavolá tok** vyberte **+ Pridať vstup**.

![Vybrať pridať vstup](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.sk.png)

1. Vyberte **Text** ako typ vstupu používateľa.

![Vybrať Text](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.sk.png)

1. Do textového poľa vstupu skopírujte a vložte nasledujúce ako názov vstupného parametra.

```text
ResumeId
```

![Vstup ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.sk.png)

1. Opakujte rovnaké kroky na pridanie druhého textového vstupu. Skopírujte a vložte nasledujúce ako názov vstupného parametra.

```text
ResumeTitle
```

![Vstup ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.sk.png)

1. Opakujte rovnaké kroky na pridanie tretieho textového vstupu. Skopírujte a vložte nasledujúce ako názov vstupného parametra.

```text
ResumeNumber
```
![Vstup ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.sk.png)

1. Pamätáte si, ako sme v [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) pridali adaptívnu kartu do Témy pre nášho agenta? Tentokrát pridáme adaptívnu kartu do toku agenta. Teraz pridáme ďalšiu akciu do nášho toku agenta, ktorá zverejní adaptívnu kartu do kanála Teams.

Vyberte **+ ikonu** pod spúšťačom.

![Pridať novú akciu](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.sk.png)

1. Vyberte akciu **Zverejniť kartu v chate alebo kanáli**.

![Vybrať akciu Zverejniť kartu v chate alebo kanáli](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.sk.png)

1. Referencia pripojenia k Microsoft Teams musí byť vytvorená s vaším prihláseným používateľským účtom. Vyberte **Prihlásiť sa**.

![Vybrať prihlásenie](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.sk.png)

1. Vyberte svoj používateľský účet a potom vyberte **Povoliť prístup**.

![Vybrať Povoliť prístup](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.sk.png)

1. Pre nasledujúce vstupné parametre:

| Parameter | Ako nastaviť | Detaily |
|----------|------------|---------|
| **Zverejniť ako** | Rozbaľovacie menu | Vyberte možnosť `Flow bot` |
| **Zverejniť v** | Rozbaľovacie menu | Vyberte možnosť `Kanál` |
| **Tím** | Rozbaľovacie menu | Vyberte tím, ktorý je dostupný vo vašom prostredí a ku ktorému máte prístup na účely dokončenia tohto cvičenia |
| **Kanál** | Rozbaľovacie menu | Vyberte kanál, ktorý je dostupný vo vašom prostredí a ku ktorému máte prístup na účely dokončenia tohto cvičenia |

![Konfigurovať vstupné parametre](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.sk.png)

1. Ďalej nakonfigurujeme pole **Adaptívna karta**. Vyberte pole **Adaptívna karta**.

![Vybrať parameter Adaptívna karta](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.sk.png)

1. Otvorte [JSON súbor aktualizovanej tabuľky životopisov](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), skopírujte celý jeho obsah a vložte ho do poľa Adaptívna karta.

![Skopírovať a vložiť JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.sk.png)

1. Podobne ako sme to urobili v [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), nahradíme existujúce hodnoty v JSON payload skutočnými hodnotami alebo dynamickým obsahom.

Najprv aktualizujeme URL pre vlastnosť `url` v rámci vlastnosti `selectAction`. Táto URL bude nahradená URL systémového zobrazenia Životopisy v modelovej aplikácii **Hiring Hub**. To umožní náborovému pracovníkovi vybrať akciu a byť presmerovaný na systémové zobrazenie Životopisy v modelovej aplikácii.

Zvýraznite aktuálnu hodnotu URL a odstráňte ju.

![Vybrať hodnotu URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.sk.png)

1. V modelovej aplikácii **Hiring Hub** prejdite na systémové zobrazenie **Životopisy** pomocou menu na ľavej strane a skopírujte URL. Potom sa vráťte späť do toku agenta a vložte skopírovanú URL do vlastnosti **url** v rámci vlastnosti `selectAction`.

![Skopírovať URL systémového zobrazenia Životopisy](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.sk.png)
1. Mali by ste vidieť nasledujúce, kde žltou farbou sú zvýraznené detaily vášho prostredia modelovej aplikácie **Hiring Hub**.

     | Parameter | Hodnota | Vysvetlenie |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organizácie prostredia Dataverse/Dynamics 365 |
     | **appid** | GUID | Na otvorenie konkrétnej modelovej aplikácie sa používa parameter dotazu buď appid alebo appname. V tomto prípade sa používa appid |
     | **viewid** | GUID | Parameter dotazu, ktorý je ID zobrazenia |

       ![Vložiť URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.sk.png)

1. Ďalej pridáme hodnoty dynamického obsahu pre niekoľko vlastností. Začneme textom, ktorý zobrazí referenciu na číslo životopisu riadku, ktorý bol autonómne vytvorený spúšťačom udalosti.

      Vyberte ikonu **panel** na načítanie akčného panela.

       ![Vybrať ikonu panelu](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.sk.png)

1. Posuňte sa nadol na riadok, kde vidíte vlastnosť `text` pre `RESUME NUMBER PLACEHOLDER`. Zvýraznite hodnotu zástupného symbolu a vymažte ju.

       ![Vymazať zástupný symbol](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.sk.png)

1. Kliknite medzi dvojité úvodzovky a vyberte ikonu **blesku** alebo **fx ikonu** napravo.

      Na karte **Dynamic Content** vyberte parameter **ResumeNumber** a kliknite na **Add**.

       ![Pridať parameter ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.sk.png)

1. Parameter **ResumeNumber** bude teraz pridaný ako dynamický obsah do vlastnosti `text`.

       ![Dynamický obsah ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.sk.png)

1. Rovnaké kroky zopakujeme pre `RESUME NAME PLACEHOLDER`. Posuňte sa nadol na riadok, kde vidíte vlastnosť `text` pre `RESUME NAME PLACEHOLDER`. Zvýraznite hodnotu zástupného symbolu a vymažte ju.

       ![Zástupný symbol názvu životopisu](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.sk.png)

1. Kliknite medzi dvojité úvodzovky a vyberte ikonu **blesku** alebo **fx ikonu** napravo.

      Na karte **Dynamic Content** vyberte parameter **ResumeTitle** a kliknite na **Add**.

       ![Pridať parameter ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.sk.png)

1. Parameter **ResumeTitle** bude teraz pridaný ako dynamický obsah do vlastnosti `text`.

       ![Dynamický obsah názvu životopisu](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.sk.png)

1. Rovnaké kroky zopakujeme pre hodnotu **Due Date**, ktorá predstavuje termín, do ktorého by mal náborový pracovník životopis skontrolovať. Posuňte sa nadol na riadok, kde vidíte vlastnosť `text` pre `May 21, 2023`.

       ![Vybrať Povoliť prístup](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.sk.png)

1. Vymažte hodnotu zástupného symbolu dátumu a kliknite medzi dvojité úvodzovky.

       ![Vymazať](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.sk.png)

1. Vyberte ikonu **blesku** alebo **fx ikonu** napravo a na karte **Function** zadajte nasledujúci výraz a kliknite na **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Tento výraz využíva dve funkcie.

     | Funkcia | Vysvetlenie |
     |----------|------------|
     | **addDays** | Pridá určený počet dní k danému dátumu a vráti výsledný dátum vo formáte reťazca |
     | **utcNow** | Vráti aktuálny dátum a čas vo formáte Coordinated Universal Time (UTC) ako reťazec. |

      Pre hodnotu utcNow formátujeme dátum tak, aby obsahoval mesiac a deň, nasledovaný rokom.

       ![Výraz pre termín](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.sk.png)

      Výraz bude teraz pridaný do vlastnosti `text`.

       ![Výraz pre termín](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.sk.png)

1. Nakoniec aktualizujeme URL pre vlastnosť `url` v rámci vlastnosti `actions` array na konci JSON payloadu. Aktuálny zástupný URL bude nahradený URL riadku životopisu v modelovej aplikácii **Hiring Hub**. To umožní náborovému pracovníkovi vybrať akciu `Action.OpenURL` adaptívnej karty a byť presmerovaný na životopis v modelovej aplikácii.

       ![Vymazať zástupný symbol URL pre zobrazenie životopisu](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.sk.png)

1. V modelovej aplikácii **Hiring Hub** otvorte riadok v systémovom zobrazení **Resumes** pomocou menu na ľavej strane. Riadok životopisu sa načíta ako formulár v modelovej aplikácii.

      Skopírujte URL pre riadok životopisu.

    ??? info "Ako sa vrátiť späť do modelovej aplikácie **Hiring Hub**, ak ste ju opustili/zavreli"

        1. Prejdite na [https://make.powerapps.com](https://make.powerapps.com) a uistite sa, že ste vo svojom vývojárskom prostredí, ktoré používate pre tieto cvičenia, inak sa do neho prepnite.
        
        ![Prejsť na make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.sk.png)

        1. Vyberte **Apps** v menu na ľavej strane a pre modelovú aplikáciu **Hiring Hub** vyberte ikonu **Play**, aby sa načítala vo vašom prehliadači.
        
        ![Vybrať modelovú aplikáciu Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.sk.png)

       ![Skopírovať URL riadku životopisu](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.sk.png)

1. Potom sa vráťte späť do toku agenta, zvýraznite aktuálnu hodnotu zástupného URL a vymažte ju.

       ![Vymazať zástupný symbol URL riadku životopisu](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.sk.png)

1. Potom vložte skopírované URL do vlastnosti **url** v rámci vlastnosti `url`.

       ![Vložiť skopírované URL riadku životopisu](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.sk.png)

1. Mali by ste vidieť nasledujúce. Vymažte hodnotu ID `GUID` na konci. Nahradíme ju dynamickým obsahom - parametrom **ResumeId**.

       ![Vymazať zástupný symbol URL pre zobrazenie životopisu](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.sk.png)

1. Vyberte ikonu **blesku** alebo **fx ikonu** napravo.

      Na karte **Dynamic Content** vyberte parameter **ResumeId** a kliknite na **Add**.

       ![Parameter ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.sk.png)

1. Parameter **ResumeId** bude pridaný ako dynamický obsah. Nasledujúce zvýraznené žltou farbou sú detaily vášho prostredia modelovej aplikácie **Hiring Hub**.

     | Parameter | Hodnota | Vysvetlenie |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organizácie prostredia Dataverse/Dynamics 365 |
     | **appid** | GUID | Na otvorenie konkrétnej modelovej aplikácie sa používa parameter dotazu buď appid alebo appname. V tomto prípade sa používa appid |
     | **id** | GUID | Parameter dotazu, ktorý je ID riadku životopisu |

       ![Dynamický obsah ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.sk.png)

1. Dokončili sme konfiguráciu akcie **Post card in a chat or channel** 👏🏻 Ukončite konfiguračný panel akcie výberom ikony **x**.

       ![Zatvoriť panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.sk.png)

1. Nakoniec nakonfigurujeme poslednú akciu, **Respond to the agent**, odoslaním textu späť agentovi na ukončenie spracovania.

      V akcii **Respond to the agent** vyberte **+Add an output**.

       ![Vybrať Pridať výstup](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.sk.png)

1. Vyberte **Text** ako typ výstupu.

       ![Vybrať text ako typ výstupu](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.sk.png)

1. Zadajte nasledujúce ako názov výstupu.

       ![Výstup ukončenia konverzácie](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.sk.png)

1. Zadajte nasledujúce ako hodnotu výstupu.

       ```text
       Finished
       ```

       ![Hodnota výstupu ukončenia konverzácie](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.sk.png)

1. Teraz sme dokončili konfiguráciu toku agenta. Vyberte **Save draft** na uloženie toku agenta. Po uložení sa zobrazí potvrdzujúca správa.

       ![Uložiť návrh](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.sk.png)

1. Pred publikovaním toku agenta musíme aktualizovať detaily toku agenta. Vyberte kartu **Overview** a kliknite na **Edit**.

      Do poľa názvu toku zadajte nasledujúce.

       ```text
       Notify Teams Applicant channel
       ```      

      Potom vyberte ikonu **Refresh** na aktualizáciu popisu toku agenta pomocou AI.

      Následne kliknite na **Save** na uloženie aktualizovaných detailov toku agenta.

       ![Upraviť a uložiť detaily](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.sk.png)

1. Vráťte sa späť na kartu **Designer** a kliknite na **Publish** na publikovanie toku agenta. Po uložení sa zobrazí potvrdzujúca správa.

       ![Publikovať tok agenta](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.sk.png)

1. Tok agenta teraz musí byť pridaný ako nástroj v **Application Intake Agent**. Vráťte sa späť do **Hiring Agent** a vyberte kartu **Agents**, potom vyberte **Application Intake Agent**.

       ![Vybrať Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.sk.png)

1. V sekcii **Details** agenta aktualizujeme pole **Description**. Skopírujte nasledujúce a vložte na koniec textu popisu.

       ```text
       and also notify the Teams Applicant channel
       ```

       ![Aktualizovať popis agenta](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.sk.png)

1. Ďalej pridáme tok agenta ako nástroj. Posuňte sa nadol a kliknite na **+ Add**.

       ![Vybrať Pridať](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.sk.png)

1. Vyberte tok agenta vytvorený skôr, **Notify Teams Applicant Channel**.

       ![Vybrať tok agenta](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.sk.png)

1. Kliknite na **Add and configure**.

       ![Vybrať Pridať a konfigurovať](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.sk.png)

1. V sekcii **Inputs** toku agenta sú viditeľné tri vstupy, ktoré sme skôr nakonfigurovali. Predvolene je konfigurácia **Fill using** nastavená na **Dynamically fill with AI**. Túto nastavenie ponecháme, pretože výzva zo spúšťača udalosti (v poslednej akcii, **Sends a prompt to the specified copilot for processing** - to sú kroky 38-44 z **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) bude obsahovať hodnoty parametrov, ktoré AI extrahuje.

       ![Vstupy nástroja toku agenta](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.sk.png)

1. Teraz, keď bol nástroj pridaný do **Application Intake Agent**, je potrebné aktualizovať pokyny agenta. Kliknite na ikonu **back arrow**, aby ste sa vrátili na zoznam agentov.

       ![Vybrať ikonu späť](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.sk.png)

1. Vyberte **Application Intake Agent** na karte **Agents** v **Hiring Agent**.

       ![Vybrať Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.sk.png)

1. V poli **Instructions** pridajte nový riadok po pokynoch `2.Post-Upload`. Skopírujte a vložte nasledujúce pokyny.

       ```text
       Process for Resume Upload via Email
       1. When you receive a message, **Send [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" and [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" and [ResumeNumber (text_2)]= "R01026" to the Tool "Notify Teams Applicant channel"** in the child agent "Application Intake Agent", call [AGENT FLOW PLACEHOLDER]
       ```

       ![Aktualizovať pokyny Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.sk.png)

1. Zvýraznite text `[AGENT FLOW PLACEHOLDER`.

       ![Zvýrazniť zástupný symbol](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.sk.png)

1. Zadajte znak lomky, `/`, a vyberte nástroj **Notify Teams Applicant Channel**.

       ![Vybrať nástroj Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.sk.png)
1. Tok agenta bude teraz spustený **Application Intake Agent** podľa pokynov, po poslednej akcii (**Odosiela výzvu určenému copilotovi na spracovanie**) v spúšťači udalosti, ktorá odosiela výzvu obsahujúcu hodnoty parametrov späť agentovi.

      Vyberte **Uložiť**, aby ste uložili aktualizované pokyny pre **Application Intake Agent**.

       ![Vyberte Uložiť](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.sk.png)

1. Pokyny budú teraz aktualizované po tom, čo bol agent uložený.

       ![Pokyny aktualizované](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.sk.png)

1. Teraz musíme **Publikovať** **Hiring Agent**. Vyberte **Publikovať** v pravom hornom rohu a v modálnom okne _Publikovať tohto agenta_, ktoré sa zobrazí, vyberte **Publikovať**.

       ![Publikovať Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.sk.png)

1. Po publikovaní sa zobrazí potvrdzujúca správa, že agent bol publikovaný.

       ![Potvrdzujúca správa](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.sk.png)

Teraz môžeme otestovať agenta!

### Lab 3.3 - Testovanie spúšťača udalostí

1. Na vykonanie spúšťača udalostí je potrebné odoslať e-mail s priloženým súborom PDF životopisu. V Outlooku vytvorte novú e-mailovú správu.

     | Komponent e-mailu | Podrobnosti |
     |-------------------|-------------|
     | **Príjemca** | Použite svoj prihlásený používateľský účet ako hodnotu |
     | **Príloha súboru** | Nahrajte súbor [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Telo správy** | Skopírujte a vložte nasledujúci text ako telo e-mailu  |

       ```text
       Vážený manažér náboru,

       Píšem, aby som vyjadril svoj záujem o pozíciu Senior Power Platform Engineer vo vašej organizácii. S viac ako deviatimi rokmi skúseností s poskytovaním bezpečných a škálovateľných riešení na platformách Microsoft cloud som presvedčený o svojej schopnosti efektívne prispieť vášmu tímu.

       Vo svojej poslednej pozícii ako Lead Power Platform Engineer som vyvinul automatizovaný pipeline na spracovanie životopisov, čím som znížil manuálne triedenie a zlepšil vyhľadávanie. Dodal som aplikácie na správu HR prípadov, zaviedol riešenia-aware flows a implementoval PR kontroly na zlepšenie času nasadenia. Moje odborné znalosti zahŕňajú Power Apps, Power Automate, Power Pages, Dataverse a rôzne služby Microsoft 365, ako aj integráciu s Graph/REST API a Azure Functions.

       Predtým som vyvinul schvaľovania v Teams s adaptívnymi kartami, čím som znížil čas schvaľovania na rovnaký deň, a vytvoril robustné rámce na spracovanie chýb. Moje skúsenosti zahŕňajú aj migráciu starších pracovných postupov na Power Automate a budovanie samoobslužných portálov, ktoré si osvojili stovky zamestnancov.

       Mám titul B.Sc. v odbore informatika a som certifikovaný ako Power Platform Developer (PL-400) a Solution Architect (PL-600). Som tiež vášnivý mentor a dobrovoľne som pracoval s miestnymi skupinami tvorcov.

       Prosím, nájdete môj životopis priložený na zváženie. Rád by som diskutoval o tom, ako moje schopnosti a skúsenosti zodpovedajú vašim potrebám.

       Ďakujem za váš čas a pozornosť.

       S úctou,
       Taylor Testperson
       ```

       **Odoslať** e-mail po jeho vytvorení.

       ![Vytvorte e-mail s priloženým PDF súborom](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.sk.png)

1. V Power Automate maker portáli pre tok spúšťača udalostí vyberte ikonu **Obnoviť**, aby ste zobrazili úspešný beh toku pre odoslaný e-mail.

       ![Vyberte ikonu obnoviť na zobrazenie behu toku](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.sk.png)

1. Späť v Copilot Studio v **Hiring Agent** vyberte kartu **Aktivita**.

       ![Vyberte kartu Aktivita](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.sk.png)

1. Karta **Aktivita** sa načíta a zobrazí všetky aktivity **Hiring Agent**. Bude tam aktivita s názvom **Automated**, ktorá má stav **Complete**. Táto aktivita predstavuje spúšťač udalostí a tok agenta, ktorý bol spustený.

       ![Aktivita dokončená](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.sk.png)

1. Vyberte aktivitu a v mape aktivity vyberte spúšťač udalostí. Na paneli na pravej strane si všimnite, ako vstupné parametre vo výzve obsahujú hodnoty parametrov `Resume Id`, `Resume Title` a `Resume Number` z riadku **Dataverse**, ktorý bol vytvorený. Toto pochádza z dynamických hodnôt obsahu nakonfigurovaných skôr v krokoch 18 - 27 **Lab 3.1 - Automatizácia nahrávania životopisov do Dataverse prijatých e-mailom**.

       ![Spúšťač udalostí](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.sk.png)

1. Prejdite späť do modelom riadenej aplikácie **Hiring Hub** a v zobrazení systému **Resumes** vyberte **Obnoviť**, aby ste obnovili zobrazenie. Novovytvorený riadok pre životopis, ktorý bol odoslaný e-mailom, bude teraz uvedený, pretože bol vytvorený prostredníctvom spúšťača udalostí.

       ![Riadok životopisu vytvorený](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.sk.png)

1. Prejdite späť do Copilot Studio a vyberte tok agenta **Notify Teams Applicant Channel** v rámci **Application Intake Agent** v mape aktivity. Na paneli na pravej strane si všimnite, ako vstupy majú hodnoty z riadku Dataverse. Toto pochádza z výzvy odoslanej poslednou akciou (**Odosiela výzvu určenému copilotovi na spracovanie**) v spúšťači udalostí, ktorá obsahuje hodnoty parametrov z novovytvoreného riadku Dataverse. Takto môžeme prenášať hodnoty parametrov zo spúšťačov udalostí do tokov agentov.

       ![Vyberte tok agenta](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.sk.png)

1. Nakoniec sa pozrime na adaptívnu kartu zverejnenú v kanáli **Microsoft Teams**. V kanáli uvidíme adaptívnu kartu, ktorá zobrazuje informácie o novovytvorenom riadku životopisu v Dataverse. Prejdite kurzorom nad hypertextový odkaz na začiatku adaptívnej karty, všimnite si, ako URL je URL zobrazenia systému Resumes, ktoré sme skôr nakonfigurovali v JSON (kroky 15 - 19 **Lab 3.2 - Oznámenie kanálu Teams pomocou adaptívnej karty**) payload adaptívnej karty.

       ![Adaptívna karta URL zobrazenia tabuľky životopisov](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.sk.png)

1. Vyberte hypertextový odkaz a budete presmerovaní na zobrazenie systému Resumes v modelom riadenej aplikácii **Hiring Hub** vo vašom prehliadači.

       ![Zobrazenie systému životopisov v modelom riadenej aplikácii Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.sk.png)

1. Prejdite späť na adaptívnu kartu zverejnenú v kanáli Microsoft Teams. Tentokrát prejdite kurzorom nad **Zobraziť životopis**, čo je akcia `Action.OpenURL` adaptívnej karty. Všimnite si, ako URL je riadok životopisu, ktorý sme skôr nakonfigurovali v JSON (kroky 30 - 36 **Lab 3.2 - Oznámenie kanálu Teams pomocou adaptívnej karty**) payload adaptívnej karty.

       ![Adaptívna karta URL riadku životopisu](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.sk.png)

1. Vyberte akciu a budete presmerovaní na formulár riadku životopisu v modelom riadenej aplikácii **Hiring Hub** vo vašom prehliadači.

       ![Riadok životopisu v modelom riadenej aplikácii Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.sk.png)

## ✅ Misia splnená

Gratulujeme! 👏🏻 Skvelá práca, Operatívny.

✅ Spúšťač udalostí: vytvorili ste spúšťač udalostí, ktorý prenáša hodnoty parametrov Dataverse do toku agenta.  
✅ Vytvorili ste tok agenta: spotrebováva hodnoty parametrov Dataverse na zverejnenie adaptívnej karty do kanála v Microsoft Teams na upozornenie HR tímu náboru.  
✅ Aktualizovali ste pokyny pre podriadeného agenta: na spustenie toku po dokončení spúšťača udalostí.

Toto umožňuje **Hiring Agent** pracovať autonómne vždy, keď sú životopisy prijaté ako prílohy e-mailov a upozorniť HR tím náboru na manuálnu kontrolu.

Toto je koniec **Lab 03 - Automatizácia e-mailov s kandidátskymi aplikáciami**, vyberte odkaz nižšie na presun do ďalšej lekcie.

⏭️ [Presun do lekcie **Authoring Agent Instructions**](../04-agent-instructions/README.md)

## 📚 Taktické zdroje

📖 [Urobte svojho agenta autonómnym v Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  
📖 [Pridanie spúšťača udalostí](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  
📖 [Použitie tokov agentov s vaším agentom](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  
📖 [Úvod do spúšťačov Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  
📖 [Používanie tokov Power Automate s agentmi](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  
📖 [Prevencia straty dát pre Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.