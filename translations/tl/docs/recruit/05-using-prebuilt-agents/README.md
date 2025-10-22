<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-22T19:44:02+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "tl"
}
-->
# 🧰 Misyon 05: Paggamit ng Pre-Built Agent  

## 🕵️‍♂️ CODENAME: `OPERASYON LIGTAS NA PAGLALAKBAY`

> **⏱️ Oras ng Operasyon:** `~30 minuto`

🎥 **Panoorin ang Walkthrough**

[![Thumbnail ng video ng pre-built agent](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.tl.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Panoorin ang walkthrough sa YouTube")

## 🎯 Misyon Brief

Maligayang pagdating sa iyong susunod na misyon sa Copilot Studio Agent Academy. Tuklasin mo ang mundo ng **pre-built agents**—mga matatalinong agent na may tiyak na layunin na ginawa ng Microsoft upang mapabilis ang deployment at mabawasan ang oras ng pag-abot sa layunin.

Sa halip na magsimula mula sa simula, ang mga pre-built agents (tinatawag ding **agent templates**) ay nagbibigay sa iyo ng panimulang hakbang sa pamamagitan ng mga handa nang gamitin na senaryo na maaari mong i-customize at i-deploy sa loob ng ilang minuto.

Sa misyon na ito, magde-deploy ka ng **Safe Travels** agent—isang agent na tumutulong sa mga user na maghanda para sa business travel, maunawaan ang mga polisiya ng kumpanya, at mapadali ang pagpaplano.

---

## 🧭 Mga Layunin

Ang mga layunin mo para sa misyon na ito ay:

1. Maunawaan kung ano ang pre-built agents at bakit ito mahalaga  
1. I-deploy ang **Safe Travels** agent template  
1. I-customize ang mga sagot at nilalaman ng agent  
1. Subukan at i-publish ang agent  

---

## 🧠 Ano ang Pre-Built Agents?

Ang pre-built agents ay mga AI agent na handa nang gamitin na ginawa ng Microsoft na:

- Tumutugon sa mga karaniwang pangangailangan ng negosyo (tulad ng travel, HR, IT support)
- May kasamang ganap na gumaganang mga topic, trigger phrases, mga instruksyon, at sample na kaalaman.
- Maaaring i-edit, palawakin, at i-ground gamit ang sarili mong data

Ang mga agent na ito ay perpekto para sa mabilisang pagsisimula o pag-aaral kung paano istruktura ang mga agent.

---

## 🧪 Lab 05: Mabilis na magsimula gamit ang pre-built agent

Ngayon ay matututo tayo kung paano pumili ng pre-built agent at i-customize ito.

- [5.1 I-launch ang Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Piliin ang Safe Travels Agent Template](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 I-customize ang Agent](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Subukan at I-publish](../../../../../docs/recruit/05-using-prebuilt-agents)

Mananatili tayo sa halimbawa mula kanina, kung saan gagawa tayo ng solusyon sa dedikadong Copilot Studio environment upang bumuo ng IT helpdesk agent.

Simulan na natin!

### 5.1 I-launch ang Copilot Studio

1. Pumunta sa [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Mag-sign in gamit ang iyong Microsoft 365 work o school account

!!! warning
    Dapat kang nasa tenant kung saan naka-enable ang Copilot Studio. Kung hindi mo makita ang Copilot Studio, balikan ang [Misyon 00](../00-course-setup/README.md) upang kumpletuhin ang iyong setup.

### 5.2 Piliin ang Safe Travels Agent Template

1. Mula sa homepage ng Copilot Studio, i-click ang **+ Create**
    ![Gumawa ng agent](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.tl.png)

1. Mag-scroll pababa sa seksyong **Start with an agent template**

1. Hanapin at piliin ang **Safe Travels**

    ![Piliin ang safe travels template](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.tl.png)

1. Mapapansin na ang template ay may kasamang description, mga instruksyon, at kaalaman.

    ![I-review ang template](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.tl.png)

1. I-click ang **Create**

    ![Gumawa ng agent](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.tl.png)

Ito ay gagawa ng bagong agent sa iyong environment base sa Safe Travels configuration.

### 5.3 I-customize ang Agent

Ngayon na nagawa na ang agent, i-tailor ito para sa iyong organisasyon:

1. Piliin ang **Enabled generative AI** upang i-on ang generative AI feature para magamit nito ang mga instruksyon sa template.

    ![I-enable ang Generative Answers](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.tl.png)

1. Ngayon ay bibigyan natin ang agent ng karagdagang source ng kaalaman upang makasagot ito sa mga tanong tungkol sa paglalakbay sa Europa. Upang gawin ito, mag-scroll pababa sa seksyong **knowledge** at piliin ang **Add knowledge**

    ![Magdagdag ng Kaalaman](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.tl.png)

1. Piliin ang **Public websites**

    ![Magdagdag ng pampublikong website](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.tl.png)

1. Sa text input, i-paste ang **<https://european-union.europa.eu/>** at piliin ang **Add**

    ![I-paste at idagdag ang website](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.tl.png)

1. Piliin ang **Add to agent**

    ![Idagdag sa Agent](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.tl.png)

### 5.4 Subukan at I-publish

1. I-click ang **Test** sa kanang itaas upang i-launch ang test window  

1. Subukan ang mga parirala tulad ng:

    - `“Kailangan ko ba ng visa para maglakbay mula US papuntang Amsterdam?”`
    - `“Gaano katagal bago makakuha ng US Passport?”`
    - `“Nasaan ang pinakamalapit na US embassy sa Valencia, Spain?”`

1. Kumpirmahin na ang agent ay nagbibigay ng tamang at kapaki-pakinabang na impormasyon at obserbahan ang Activity Map upang makita kung saan nito nakuha ang impormasyon.

    ![Idagdag sa Agent](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.tl.png)

1. Kapag handa na, i-click ang **Publish**

    ![Idagdag sa Agent](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.tl.png)

1. Piliin ang **Publish** muli sa dialog box
    ![Idagdag sa Agent](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.tl.png)

1. Opsyonal, idagdag ang agent sa Microsoft Teams gamit ang built-in na **Channels** feature.

!!! note "🧳 Bonus na Layunin"
    Subukang i-ground ang Safe Travels agent gamit ang SharePoint site o FAQ file upang mas maging relevant ito sa travel policies ng iyong kumpanya.

## ✅ Misyon Kumpleto

Matagumpay mong:

- Na-deploy ang Microsoft pre-built agent  
- Na-customize ang agent  
- Nasubukan at na-publish ang sarili mong bersyon ng **Safe Travels** agent template

⏭️ [Pumunta sa **Paglikha ng custom agent mula sa simula** na aralin](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analytics" />

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi eksaktong impormasyon. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.