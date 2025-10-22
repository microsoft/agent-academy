<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-22T19:08:19+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "tl"
}
-->
# 🕵️‍♂️ Misyon 04: Pagsulat ng Mga Instruksyon para sa Ahente

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION SECRET DIRECTIVE`

> **⏱️ Oras ng Operasyon:** `~45 minuto`

## 🎯 Maikling Misyon

Ahente, ang iyong susunod na gawain ay **Operation Secret Directive** - pag-master sa sining ng komunikasyon at kontrol ng ahente sa pamamagitan ng malinaw na mga instruksiyon at deskripsyon.

Ang iyong misyon, kung pipiliin mong tanggapin ito, ay matutunan ang mahahalagang kasanayan sa pagsulat ng malinaw at maaksiyong mga instruksiyon na gagabay sa iyong mga ahente upang gumawa ng matalinong desisyon, gumamit ng tamang mga tool at mapagkukunan ng kaalaman, at makipagtulungan nang maayos sa iba pang mga ahente. Matutunan mo rin ang sining ng pagsulat ng de-kalidad na mga deskripsyon na tumutulong sa mga ahente na maunawaan ang kanilang mga mapagkukunan at tumugon nang may eksaktong katumpakan sa mga tanong ng user.

Isaalang-alang ito bilang iyong advanced na pagsasanay sa sikolohiya ng ahente at pagbabago ng kanilang pag-uugali. Tulad ng isang operatibo sa field na nangangailangan ng malinaw na mga parameter ng misyon upang magtagumpay, ang iyong mga AI ahente ay nangangailangan ng maingat na isinulat na mga instruksiyon upang kumilos nang may kalinawan, katumpakan, at maghatid ng mahalagang impormasyon sa mga totoong sitwasyon.

---

## 🔎 Mga Layunin

Sa pagtatapos ng misyon na ito, ikaw ay:

- **Pag-master ng Instruksyon**: Maunawaan ang sining at agham ng pagsulat ng mga instruksiyon para sa ahente sa Copilot Studio  
- **Estratehikong Gabay**: Matutunan kung paano gabayan ang mga ahente sa paggamit ng mga tool, mapagkukunan ng kaalaman, at makipagtulungan sa iba pang mga ahente  
- **Kalinawan sa Operasyon**: Siguraduhin na ang iyong mga ahente ay kumilos nang may katumpakan, transparency, at kahusayan  

---

## 📝 Pagsulat ng Mga Instruksyon para sa Ahente

Ang pagsulat ng epektibong mga instruksiyon para sa ahente ay susi sa matagumpay na pag-uugali ng ahente. Ang mga instruksiyon ay ginagamit ng mga ahente upang:

- Magpasya kung aling tool, paksa, o mapagkukunan ng kaalaman ang gagamitin para sa tanong ng user o awtonomong trigger  
- Punan ang mga input para sa anumang tool batay sa magagamit na konteksto  
- Bumuo ng tugon para sa end user  

### Paano Gumagana ang Mga Instruksyon

Ang mga instruksiyon ay dapat na nakabatay sa mga tool, paksa, at mapagkukunan ng kaalaman na naka-configure para sa iyong ahente. Hindi maaaring kumilos ang mga ahente sa mga instruksiyon para sa mga mapagkukunan na wala sila. Halimbawa, kung inutusan mo ang iyong ahente na maghanap sa FAQ ng website, dapat mong idagdag ang FAQ bilang isang mapagkukunan ng kaalaman.

Maaari mong banggitin ang mga partikular na tool, paksa, variable, o Power Fx expressions gamit ang `/` sa iyong mga instruksiyon. Nakakatulong ito sa ahente na malaman kung ano ang eksaktong gagamitin at kailan.

### Ano ang Dapat Isama sa Mga Instruksyon

- Magdagdag ng mga instruksiyon para sa mga kaso kung saan nais mong gabayan ang mga pagpipilian ng ahente, lalo na kung may posibilidad ng kalituhan.  
- Gamitin ang mga instruksiyon upang magtakda ng mga limitasyon, tulad ng paghihigpit sa mga paksa o pagtukoy ng mga format ng tugon.  
- Magbigay ng mga pahiwatig para sa pagpuno ng mga input ng tool, hal., "Gamitin ang email address mula sa contact field ng lead kapag tumutulong sa user na gumawa ng email."  
- Tukuyin kung paano dapat i-format ang mga tugon, hal., "Laging magbigay ng mga tugon tungkol sa status ng order sa format na table."  
- Gumamit ng mga limitasyon upang pigilan ang mga aksyon ng ahente, hal., "Tugunan lamang ang mga kahilingan tungkol sa mga benepisyo ng empleyado."  

### Mga Praktikal na Halimbawa

- "Gamitin lamang ang mga dokumento ng FAQ kung ang tanong ay hindi nauugnay sa Oras, Appointment, o Pagsingil."  
- "Gamitin lamang ang paksa ng paglikha ng ticket para sa paggawa ng mga ticket; para sa iba pang mga kahilingan na may kaugnayan sa pag-aayos ng mga isyu, gamitin ang paksa ng troubleshooting."  
- "Laging magbigay ng mga tugon tungkol sa status ng order sa format na table."  

### Pagsubok at Pagpapabuti

- Pagkatapos i-edit ang mga instruksiyon, gamitin ang test pane upang i-validate ang pag-uugali ng ahente.  
- I-update at i-publish ang mga pagbabago kung kinakailangan.  

### Advanced na Gabay

- Ilista ang iyong mga instruksiyon gamit ang numero o bullet points at tukuyin na dapat itong sundin nang sunod-sunod.  
- Gumamit ng markdown formatting para sa mas malinaw na pagbabasa at upang matulungan ang generative AI na iproseso ang iyong mga instruksiyon.  
- Kung nais mong maging napaka-espesipiko ang iyong ahente, isaalang-alang ang paggawa ng paksa para sa partikular na kaso.  
- Gumamit ng eksaktong mga pangalan para sa mga tool at paksa sa mga instruksiyon upang maiwasan ang kalituhan.  

### Kaligtasan at Moderasyon

- Limitahan kung anong mga tool ang dapat gamitin ng ahente kapag tumutukoy sa mga mapagkukunan ng kaalaman.  
- Limitahan kung anong mga parameter ang dapat gamitin para sa mga tool (hal., mag-email lamang sa isang tinukoy na listahan ng mga indibidwal).  
- Gamitin ang mga instruksiyon upang protektahan laban sa hindi kanais-nais na pag-uugali o mga isyu sa pag-filter ng nilalaman.  

---

## ✍️ Pagsulat ng Deskripsyon para sa Mga Tool, Paksa, at Ahente

Ang de-kalidad na mga deskripsyon ay mahalaga para sa generative orchestration. Ginagamit ng iyong ahente ang mga deskripsyon na ito upang piliin ang tamang mga tool, paksa, at ahente upang tumugon sa mga tanong ng user at mga trigger. Sundin ang mga pinakamahusay na kasanayan na ito:

- **Gumamit ng Simple at Direktang Wika**: Iwasan ang jargon, slang, o sobrang teknikal na mga termino. Gumamit ng active voice at present tense.  
- **Maging Espesipiko at Nauugnay**: Isama ang mga keyword na may kaugnayan sa functionality at layunin ng user. Siguraduhing malinaw na naiiba ang mga deskripsyon ng magkatulad na mga tool o paksa upang maiwasan ang kalituhan.  
- **Panatilihing Maikli at Impormatibo**: Limitahan ang mga deskripsyon sa isa o dalawang pangungusap. Ibuod kung ano ang ginagawa ng tool, paksa, o ahente at kung paano ito nakakatulong sa user.  
- **Gumamit ng Natatangi at Deskriptibong Pangalan**: Iwasan ang mga generic na pangalan. Halimbawa, gamitin ang "Weather Forecast for Tomorrow" sa halip na "Weather".  
- **Ilista ang Mga Aksyon o Pagsasaalang-alang**: Gumamit ng mga bullet o numero para sa kalinawan kapag naglalarawan ng maraming tampok o hakbang.  
- **Subukan ang Overlap**: Kung ang maraming paksa ay may magkatulad na mga deskripsyon, maaaring gamitin ng iyong ahente ang lahat ng ito. Subukan at baguhin upang maiwasan ang overlap.  

!!! example "Magandang at Hindi Magandang Halimbawa ng Deskripsyon"
    **Maganda:** Ang paksa na ito ay nagbibigay ng impormasyon sa panahon para sa anumang lokasyon sa mundo para sa susunod na araw. Nagbibigay ito ng temperatura. Hindi nito nakukuha ang kasalukuyang panahon para sa araw na ito.  
    **Hindi Maganda:** Ang tool na ito ay maaaring sumagot ng mga tanong. *(Masyadong malabo)*  

---

## 🛠️ Mga Pinakamahusay na Kasanayan para sa Mga Instruksyon at Deskripsyon

Upang gawing tunay na epektibo ang iyong mga instruksiyon at deskripsyon, tandaan ang mga prinsipyong ito:

- Gumamit ng active voice at present tense (hal., "Ang tool na ito ay nagbibigay ng impormasyon sa panahon").  
- Iwasan ang jargon, slang, o hindi kailangang teknikal na mga termino maliban kung kinakailangan para sa audience.  
- Gumamit ng mga bullet o numero upang paghiwalayin ang mga aksyon, tampok, o pagsasaalang-alang.  
- Isama ang mga keyword na tumutugma sa layunin ng user at functionality ng tool o paksa.  
- Siguraduhin ang natatanging mga pangalan at deskripsyon para sa magkatulad na mga mapagkukunan upang maiwasan ang kalituhan at overlap.  

---

## 🗂️ Halimbawa ng Estruktura ng Instruksyon

Kapag nagsusulat ng mga instruksiyon, isaalang-alang ang sumusunod na estruktura para sa kalinawan at pagiging kumpleto:

1. **Pangkalahatang-ideya**: Maikling ilarawan ang misyon at papel ng ahente  
1. **Mga Hakbang sa Proseso**: Ilista ang mga pangunahing hakbang na dapat sundin ng ahente  
1. **Mga Punto ng Pakikipagtulungan**: Tukuyin kung kailan tatawag ng ibang ahente o gagamit ng partikular na mga tool  
1. **Kaligtasan at Moderasyon**: Isama ang anumang kinakailangan sa pagsunod o kaligtasan  
1. **Feedback Loop**: Tukuyin kung paano dapat mangolekta ng feedback o mag-escalate ng mga isyu ang ahente  

---

## 🧪 Lab: Pagsulat ng Mga Instruksyon para sa Ahente

*Ang nilalaman ng lab ay darating sa lalong madaling panahon...*

---

## 🎉 Misyon Kumpleto

Natapos na ang Misyon 04! Ngayon ay mayroon ka na:

✅ **Pag-master ng Instruksyon**: Natutunan kung paano magsulat ng malinaw at maaksiyong mga instruksiyon para sa ahente  
✅ **Estratehikong Gabay**: Napag-aralan kung paano gabayan ang mga ahente sa paggamit ng mga tool at makipagtulungan nang epektibo  
✅ **Kalinawan sa Operasyon**: Natiyak na ang mga ahente ay kumilos nang may katumpakan at transparency  

Ang susunod ay [Misyon 05](../05-agent-responses/README.md): Pag-customize ng mga tugon ng ahente para sa maximum na epekto.

---

## 📚 Mga Taktikal na Mapagkukunan

📖 [Microsoft Copilot Studio - Pagsulat ng Instruksyon](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Gabay para sa Generative Mode](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.