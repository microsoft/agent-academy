<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-22T19:57:09+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "tl"
}
-->
# 🚨 Misyon 12: Pag-unawa sa Lisensya

## 🕵️‍♂️ CODENAME: `OPERATION KNOW WHAT YOU OWE`

> **⏱️ Oras ng Operasyon:** `~15 minuto`

## 🎯 Misyon Brief

Maligayang pagdating, Rekruto. Bago mo ipadala ang iyong mga ahente sa field, kailangan mong malaman **kung paano sinusukat, nililisensyahan, at sinisingil ang paggamit**. Ang misyon na ito ay nagpapaliwanag ng modelo ng pagsingil batay sa mensahe, kung ano ang kasama sa mga lisensya ng Microsoft 365 Copilot, at kung paano magplano gamit ang iyong estimator.

---

## 🎯 Layunin: Maunawaan ang Modelo Batay sa Mensahe

Ang Copilot Studio ay hindi naniningil batay sa bawat user o bawat feature—sinisingil ka nito batay sa **kung ilang mensahe ang ginagamit ng iyong mga ahente**. Ang “mensaheng” ito ay isang interaksyon sa pagitan ng iyong ahente at ng user (o isang sistema).

- 💬 Ang bawat interaksyon ng user sa iyong ahente ay binibilang bilang hindi bababa sa **1 mensahe**
- 🔄 Ang mga kumplikadong interaksyon (tulad ng grounding, generative AI, o flows) ay gumagamit ng **maraming mensahe**
- 💼 Nagbabayad ka para sa mga mensahe alinman sa pamamagitan ng **prepaid packs** o **pay-as-you-go (PAYGO)**

---

## Mga Opsyon sa Lisensya

### 1. **Copilot Studio Message Packs**

- Prepaid tick-box: **25,000 mensahe/buwan para sa $200**
- Pinakamainam para sa predictable na paggamit — ang kapasidad ay pinagsama-sama sa tenant

### 2. **Pay-As-You-Go (PAYGO)**

- Post-paid: **$0.01 bawat mensahe**
- Walang paunang commitment; ang paggamit ay sinisingil sa katapusan ng buwan sa pamamagitan ng Azure

---

## Paano Kung Mayroon Kang M365 Copilot Licenses?

Kung ang iyong team ay may **Microsoft 365 Copilot licenses**, ang iyong mga ahente ay **maaaring gumana nang walang karagdagang pagsingil para sa mga pangunahing senaryo**:

- Ang mga klasikong sagot, generative na tugon, graph-grounded na mga mensahe, at mga pangunahing aksyon ng ahente ay **zero-rated** para sa mga authenticated na M365 Copilot users sa mga app tulad ng Teams at Outlook  
- Gayunpaman: kung i-enable mo ang mga advanced na feature tulad ng autonomous triggers, agent flows na lampas sa mga pangunahing aksyon, o gumamit ng external channels/APIs, ang mga iyon ay **kumokonsumo ng billable messages**

| Senaryo                                     | Karagdagang Mensahe na Sinisingil?           |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot user na nagtatanong sa ahente sa Teams | ❌ Hindi sinisingil                           |
| Ahente na tumatawag sa external API o flow | ✅ Sinisingil (5 + mensahe)                   |
| Ahente na gumagamit ng autonomous trigger o grounding | ✅ Sinisingil                                 |

---

## 🧮 Magplano nang May Katumpakan: Gamitin ang Estimator

Bago ilunsad ang iyong ahente, gamitin ang aming **Copilot Studio Usage Estimator** upang mag-forecast ng konsumo ng mensahe sa ilalim ng mga realistic na senaryo:

[👉 Gamitin ang Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Ito ay nagbibigay-daan sa iyo na:

- 🔢 Tukuyin ang iyong **bilang ng user**
- ⚙️ Piliin ang **mga feature ng ahente** (grounding, actions, flows, memory)
- 📈 Tantiya ang **kabuuang mensahe bawat ahente bawat buwan**
- 🧠 I-optimize ang disenyo at iwasan ang mga sorpresa sa pagsingil

!!! tip
    ✅ Gamitin ito nang maaga — at muli pagkatapos magtayo — upang ihambing ang inaasahan laban sa aktwal na paggamit.

---

## 💼 Halimbawang Senaryo

**Kapaligiran**: IT Help Desk ahente na may grounding + isang Power Automate flow  
**Mga Session**: 5 user turns bawat session  
**Mga Palagay**: grounding (10 msgs) + action (5 msgs) + 5 generative responses (10 msgs)  
**Kabuuan**: ~25 mensahe bawat session  
**Saklaw**: 500 session/buwan = ~12,500 mensahe (½ message pack)

---

## 🧠 Mga Pro Tips para sa Kontrol ng Gastos

- Subaybayan ang paggamit sa pamamagitan ng Power Platform Admin Center
- Magsimula sa dev/test bago mag-live
- I-disable ang mga hindi ginagamit na aksyon at konektor
- Gamitin ang **Microsoft 365 Copilot licenses** hangga't maaari para sa internal na paggamit
- Gumamit ng message packs kapag ang saklaw ay nagiging predictable
- Gamitin ang **Copilot Studio Usage Estimator** upang mag-forecast ng paggamit

---

## 🏁 Misyon Kumpleto

Ngayon ay nauunawaan mo na:

- Paano kinakalkula at sinisingil ang paggamit
- Kailan saklaw ng M365 Copilot ang paggamit — at kailan hindi
- Paano mag-forecast at pamahalaan ang iyong konsumo ng mensahe

🎓 Sa kaalamang ito, ikaw ay handa nang magpatuloy at mag-deploy ng iyong mga ahente **nang mahusay at matalino**

---

## 📚 Mga Taktikal na Resources

Alamin ang higit pa tungkol sa lisensya at pagsingil sa Copilot Studio

- 📄 [Copilot Studio Licensing & Message Rates](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform Licensing Guide (July 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Message Management & Capacity Monitoring](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analytics" />

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.