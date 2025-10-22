<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-22T19:17:19+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "tl"
}
-->
# Misyon 03: Magdagdag ng Event Triggers para kumilos nang autonomously

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODENAME: `OPERATION SIGNAL POINT`

> **⏱️ Oras ng Operasyon:** `~45 minuto`

## 🎯 Maikling Misyon

Maligayang pagbabalik, Ahente. Sa [Misyon 02](../02-multi-agent/README.md) - natutunan mo kung paano bumuo ng Application Intake child agent at Interview Prep connected agent upang palawakin ang kakayahan ng iyong pangunahing Hiring Agent.

Ang iyong assignment, kung pipiliin mong tanggapin ito, ay **Operation Signal Point** - mas malalim na pag-aaral sa **event triggers** - pag-angat ng iyong sistema ng ahente mula sa pagiging reaktibo patungo sa **autonomous operation**. Babaguhin mo ang iyong mga ahente mula sa paghihintay ng input ng tao patungo sa proactive na pagtugon sa mga panlabas na pangyayari at paggawa ng matalinong aksyon nang walang pangangasiwa.

Isipin ito bilang pag-upgrade mula sa mga ahente na _sumasagot sa mga tanong_ patungo sa mga ahente na _inaasahan ang mga pangangailangan_ at _kumikilos nang mag-isa_. Sa pamamagitan ng event triggers at automated workflows, ang iyong Hiring Agent ay makakakita ng mga papasok na email ng resume, awtomatikong ipoproseso ang mga attachment, mag-iimbak ng data sa Dataverse, at magpapadala ng abiso sa iyong HR recruitment team sa pamamagitan ng Microsoft Teams - habang nakatuon ka sa mas mahalagang mga gawain.

Maligayang pagdating sa mundo kung saan nagtatagpo ang automation at katalinuhan.

## 🔎 Mga Layunin

Sa misyon na ito, matutunan mo:

1. Paano ang event triggers ay nagbibigay-daan sa autonomous na pag-uugali ng ahente nang walang interaksyon ng user
1. Ang mga pagkakaiba sa pagitan ng interactive at autonomous na mga ahente sa Copilot Studio
1. Paano gumawa ng event triggers na awtomatikong nagpoproseso ng email attachments at nag-a-upload ng mga file sa Dataverse
1. Paano bumuo ng agent flows na nagpo-post ng adaptive cards sa Teams channels para sa mga abiso
1. Paano ipasa ang data sa pagitan ng event triggers at agent flows para sa end-to-end automation

## 🤔 Ano ang Event trigger?

Noong nakaraan sa [Recruit](../../recruit/10-add-event-triggers/README.md), natutunan natin ang tungkol sa event triggers. Balikan natin ito kung sakaling hindi mo ito napansin.

Ang **Event triggers** ay nagbibigay-daan sa isang ahente na _kumilos_ nang _mag-isa_ kapag may nangyari sa ibang sistema - walang kinakailangang mensahe mula sa user. Kapag ang naka-configure na event ay naganap - tulad ng “bagong item sa SharePoint,” “bagong email,” “Planner task na na-assign,” o kahit isang time-based recurrence, ang isang connector ay nagpapadala ng trigger payload sa iyong ahente. Ang ahente ay susunod sa iyong mga tagubilin upang magpasya kung aling mga aksyon o paksa ang tatawagin.

### Mga Pangunahing Katangian

- **Autonomous activation:**
      - Hindi tulad ng topic triggers na nagsisimula kapag ang user ay nagta-type sa ahente, ang event triggers ay nagaganap mula sa mga panlabas na pangyayari, na nagbibigay-daan sa proactive na pag-uugali.

- **Payload-driven:**
      - Ang bawat event ay naghahatid ng payload (mga variable + opsyonal na tagubilin) sa pamamagitan ng connector. Ginagamit ng ahente ang iyong tinukoy na mga tagubilin at ang payload upang magpasya kung ano ang susunod na gagawin.
      - Halimbawa _tumawag ng isang paksa_ o _isagawa ang mga aksyon na tinukoy ng Tools_.

- **Mga Halimbawa na handa na:**
      - SharePoint/OneDrive file o item na nilikha
      - Planner task na natapos/na-assign
      - Microsoft Forms response na naisumite
      - Recurrence/schedule

    Ang availability ay nakadepende sa mga patakaran ng data ng iyong organisasyon na naka-configure sa Power Automate.

- **Kinakailangan ang generative orchestration:**
      - Ang event triggers ay available lamang kapag ang generative orchestration ay naka-enable para sa ahente.

- **Billing/usage:**
      - Ang bawat trigger delivery ay binibilang bilang isang mensahe patungo sa Copilot Studio capacity.
      - Halimbawa, ang 10-minutong recurrence ay nagpapadala ng mensahe bawat 10 minuto.

- **Auth model at setup:**
      - Nagdaragdag ka ng triggers sa loob ng agent Overview, sa ilalim ng _Triggers_. Ang authentication para sa trigger connector ay gumagamit ng account ng gumawa ng ahente (“agent author authentication”).
      - Maaari mong i-edit ang mga parameter ng trigger at payload sa Power Automate maker portal.

- **Testing & observability:**
      - Maaari mong subukan ang triggers mula sa test pane ng ahente at suriin ang pag-uugali gamit ang activity map bago i-publish.

!!! info "TL;DR para sa mga developer"

    Isipin ang event triggers bilang **webhook-like signals** na nagtutulak ng isang structured payload sa iyong ahente, na nagbibigay-daan dito na _magsimula_ ng trabaho at mag-chain ng mga aksyon sa iba't ibang sistema - nang hindi naghihintay ng tanong mula sa user.

### Topic triggers - paano sila naiiba

Noong nakaraan natutunan mo ang tungkol sa topic triggers sa [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), ngunit maaaring nagtataka ka pa rin kung paano naiiba ang _Topic_ triggers mula sa _Event_ triggers, at bakit mahalaga ang pagkakaibang ito para sa pag-unawa kung ano ang gumagawa ng isang ahente na autonomous.

Ang topic triggers ay nagkokontrol kung _kailan tumatakbo ang isang paksa_, kadalasan bilang tugon sa mensahe ng user.

- Sa generative orchestration, ang default na trigger ay **By agent** - pinipili ng planner ang isang paksa na ang pangalan/deskripsyon ay pinakamahusay na tumutugma sa mensahe ng user.
- Sa classic orchestration, ang default ay **Phrases** - pinipili ng planner ang isang paksa kapag ang isa o ilang trigger phrases ay pinakamahusay na tumutugma sa mensahe ng user.

Iba pang uri ng trigger ay kinabibilangan ng `Message received`, `Event received`, `Activity received`, `Conversation update`, `Invoke received`, `On redirect`, `Inactivity`, at `Plan complete`.

!!! info "Pangunahing Pagkakaiba"

    Ang topic triggers ay _conversation activity_ starters sa loob ng chat.
    
    Ang event triggers ay system _event_ starters na ipinapadala sa pamamagitan ng connectors na maaaring patakbuhin ang ahente nang walang anumang pag-uusap.

### Mabilis na gabay ng Topic trigger vs Event trigger

- **Topic trigger:** User (o chat activity) nagsabi/gumawa ng X ➡️ tumakbo ang Topic T.
- **Event trigger:** SharePoint/Planner/Email/Timer nag-trigger na may payload P ➡️ sinusuri ng ahente ang mga tagubilin ➡️ tumawag ng Actions/Topics nang naaayon.

## 🏓 Interactive agent vs Autonomous agent - paghahambing

Ngayon na alam mo ang pagkakaiba sa pagitan ng event triggers at topic triggers, susunod nating alamin ang pagkakaiba sa pagitan ng isang interactive agent vs isang autonomous agent.

Sa Copilot Studio terms, "interactive" ay tumutukoy sa mga ahente na pangunahing nakikipag-ugnayan sa pamamagitan ng **topics** sa isang chat o channel. "Autonomous" ay tumutukoy sa mga ahente na gumagamit din ng **event triggers** upang tumakbo nang walang input ng user.

Ang sumusunod na talahanayan ay nagbubuod ng kanilang mga pagkakaiba at pagkakatulad.

| Dimensyon                           | Interactive agent     | Autonomous agent                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Paano ito nagsisimula               | User (o chat activity) nag-trigger ng isang paksa. Halimbawa: By agent, Phrases, Message received.   | Panlabas na event trigger nagpapadala ng payload sa pamamagitan ng connector sa ahente. Halimbawa: SharePoint, Planner, email, schedule, atbp. |
| Pangunahing gamit                   | Q&A, guided workflows, request-driven actions sa chat - Teams, web, atbp.  | Proactive operations at background automation - tumugon sa mga pagbabago sa sistema at pagkatapos mag-abiso, mag-file, o mag-orchestrate ng mga gawain. |
| Trigger surface                     | Topic triggers: By agent / Phrases / Message received / Activity types / Invoke / Inactivity / Plan complete | Event triggers library sa pamamagitan ng connectors; ang payload ay naglalaman ng data ng event + opsyonal na tagubilin. |
| Planner (generative orchestration)  | Malakas na ginagamit para sa By agent at Plan complete triggers upang pumili/sekwensyahin ang mga paksa. | Kinakailangan para sa event triggers; ginagamit ng ahente ang mga tagubilin + payload upang magpasya kung aling mga aksyon/topics ang tatawagin. |
| Karaniwang halimbawa                | User nagtanong "Ano ang aming refund policy?" → Tumakbo ang Topic, nag-query ng knowledge, nagbigay ng sagot. | Bagong Planner task na-assign → Nag-trigger ang Event → Nag-post ang Ahente ng Teams message, nag-update ng record, o tumawag ng topic. |
| Setup path                          | Gumawa ng topics, tukuyin ang uri ng trigger, gumawa ng dialog/actions; i-publish sa mga channel. | Magdagdag ng event trigger (Overview → Triggers), i-authenticate ang connector gamit ang mga kredensyal ng gumawa ng ahente, i-configure ang payload/tagubilin; subukan sa test pane; i-publish. |
| Auth at pamamahala                  | Tumatakbo sa ilalim ng channel/auth context; ang topic triggers ay tumutugon sa mga chat activities sa mga pinapayagang channel. | Ang availability ng trigger ay nakadepende sa mga patakaran ng data ng Power Automate; ang mga connectors ay tumatakbo sa ilalim ng account ng gumawa ng ahente. |
| Observability                       | Subukan ang topics sa loob ng Copilot Studio, suriin ang mga transcript/activities ng pag-uusap. | Gamitin ang Test trigger at activity map upang i-validate ang execution bago i-publish, subaybayan ang aktibidad pagkatapos i-publish. |
| Epekto sa kapasidad                 | Ang bawat mensahe ng user/response ng ahente ay isang mensahe na kumokonsumo ng kapasidad. | Ang bawat event delivery ay isa ring mensahe, kasama ang anumang kasunod na mga aksyon. Halimbawa: isang 10-minutong recurrence = 6 na mensahe/oras |

### Kailan gagamitin ang alin?

- Pumili ng **topic triggers (interactive)** kapag ang mga user ang nagsisimula ng pag-uusap sa ahente - FAQ, guided intake, o command-style tasks sa loob ng chat. Ang By agent trigger ng planner ay binabawasan ang manual na pag-curate ng phrase.
- Magdagdag ng **event triggers (autonomous)** kapag ang ahente ang dapat magsimula ng pag-uusap o gumawa ng aksyon nang mag-isa - sa mga update sa SharePoint/Dataverse, papasok na email, o sa isang schedule. Ito ay naglilipat sa iyo mula sa reaktibo patungo sa proactive na operasyon.

## Mga tip sa developer at mga dapat tandaan

1. **I-enable ang generative orchestration** para sa anumang ahente na nais mong gawing autonomous. Ang event triggers ay hindi lalabas kung hindi ito naka-enable.

1. **I-model ang payload nang maaga.** Tukuyin kung anong minimal na fields ang kailangan ng iyong ahente mula sa trigger tulad ng `itemId`, `assignedTo`, `dueDate` at magdagdag ng maikling tagubilin na nagsasabi sa ahente kung aling aksyon/paksa ang tatawagin batay sa mga halaga ng payload.

1. **Mahalaga ang auth scope.** Ang triggers ay nag-a-authenticate gamit ang account ng gumawa ng ahente. Siguraduhing ang account na iyon ay may tamang mga pahintulot sa connector at sumusunod sa mga patakaran ng data ng Power Automate.

1. **Kontrolin ang gastos at ingay.** Ang mataas na frequency recurrences o sobrang aktibong mga source ay maaaring mabilis na magdulot ng mataas na konsumo ng mensahe - bawasan kung maaari o magdagdag ng mga kondisyon sa trigger upang i-filter ang mga pangyayari.

1. **Subukan bago mag-publish.** Gamitin ang **Test trigger** at ang activity map upang panoorin ang plano at mga tinawag na aksyon - ulitin ang mga tagubilin/payload hanggang sa maging stable ang pag-uugali.

## 🧪 Lab 03 - Pag-automate ng mga email ng aplikasyon ng kandidato

Susunod nating idadagdag ang isang event trigger sa **Hiring Agent** at bubuo ng agent flow sa child **Application Intake Agent** upang pangasiwaan ang karagdagang pagproseso para sa autonomy.

### ✨ Scenario ng Paggamit

!!! info ""

    **Bilang isang** HR Recruiter

    **Gusto kong** maabisuhan kapag may email na may resume na dumating sa aking Inbox na awtomatikong na-upload sa Dataverse

    **Upang** manatiling abisado sa mga resume na ipinadala sa pamamagitan ng email para sa mga aplikasyon na awtomatikong na-upload sa Dataverse

Makakamit natin ito gamit ang dalawang teknika:

1. Isang event trigger para sa kapag dumating ang email,
    1. Suriin ang `contentType` ng file kung katumbas ng `PDF` bilang format type.
    1. I-extract ang file at i-upload sa Dataverse gamit ang mga aksyon sa pamamagitan ng Dataverse connector.
    1. Pagkatapos magpadala ng prompt sa ahente para sa karagdagang pagproseso sa pamamagitan ng pagpasa ng input parameters mula sa Dataverse actions.

1. Isang agent flow ang idadagdag sa child **Application Intake Agent** na na-trigger ng prompt sa event trigger.
    1. Gamitin ang input parameters na ipinasa mula sa prompt ng event trigger sa isang adaptive card na ipo-post sa isang channel sa Microsoft Teams upang abisuhan ang HR Recruitment team. Ang adaptive card ay magkakaroon ng link sa row sa Dataverse na makikita sa **Hiring Agent**.

Simulan na natin!

### ✨ Mga Prerequisite para makumpleto ang misyon

Kailangan mo **alinman sa**:

- **Natapos ang Misyon 01 at Misyon 02** at handa na ang iyong Hiring Agent, **O**
- **I-import ang Mission 03 starter solution** kung nagsisimula ka pa lang o kailangang makahabol. [I-download ang Mission 03 Starter Solution](https://aka.ms/agent-academy)

!!! note "Solution Import at Sample Data"
    Kung ginagamit mo ang starter solution, sumangguni sa [Mission 01](../01-get-started/README.md) para sa detalyadong mga tagubilin kung paano mag-import ng mga solusyon at sample data sa iyong environment.

Kailangan mo rin ng access sa **Microsoft Teams** upang makumpleto ang pangalawang lab exercise ng pagpo-post ng adaptive card sa Microsoft Teams.

### Lab 3.1 - Pag-automate ng pag-upload ng mga resume sa Dataverse na natanggap sa pamamagitan ng email

1. Sa Hiring Agent, mag-scroll pababa sa **Overview tab** at piliin ang **+ Add trigger**.

       ![Magdagdag ng trigger sa ahente](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.tl.png)

1. Lalabas ang listahan ng mga triggers. Piliin ang **When a new email arrives (V3)** at piliin ang **Next**.

       ![Piliin ang When a new email arrives (V3) trigger](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.tl.png)

1. Makikita natin ngayon ang **Trigger name** at ang **Sign in** connection references para sa mga apps na nakalista.

       Palitan ang pangalan ng trigger sa sumusunod,
    
       ```text
       When a new email arrives from an applicant
       ```

       Siguraduhing makikita mo ang berdeng check sa bawat connection references ng mga apps na nakalista. Kung hindi mo makita ang berdeng check, mag-sign in sa pamamagitan ng ellipsis (...) at piliin ang **+ New connection reference** upang lumikha ng bagong connection reference.

       ![I-update ang mga detalye para sa trigger name at suriin ang connection references](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.tl.png)

1. Ang huling hakbang ay itakda ang input properties ng trigger. I-update ang mga sumusunod na properties sa mga sumusunod,

     | Property | Paano Itakda | Detalye |
     |----------|--------------|---------|
     | **Include Attachments (Optional)** | Dropdown | Yes |
     | **Subject Filter (Optional)** | Type/Enter gamit ang keyboard | Application |
     | **Only with Attachments (Optional)** | Dropdown | Yes |

       Piliin ang **Create trigger**.

       ![I-configure ang trigger inputs](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.tl.png)

1. Kapag nagawa na, lilitaw ang isang kumpirmasyon na ang trigger ay naidagdag sa ahente. Piliin ang **Close** at ang trigger ay nakalista na sa **Triggers** section.
Ngayon, ia-update natin ang event trigger upang magdagdag ng mas maraming kakayahan sa automation. Piliin ang **ellipsis (...)** sa trigger at piliin ang **Edit in Power Automate**.

![Piliin ang Edit in Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.tl.png)

1. Ang trigger ay maglo-load bilang isang flow sa Power Automate maker portal. Ang nakikita mo ay ang flow designer sa Power Automate maker portal. Dito natin maaaring magdagdag ng karagdagang lohika at mga aksyon para sa mas maraming automation. Ang trigger ay lilitaw sa itaas, kasunod ng **Sends a prompt to the specified copilot for processing** bilang huling aksyon sa flow.

![Flow designer sa Power Automate maker portal](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.tl.png)

1. Sa default, ang **When a new email arrives** trigger sa Power Automate ay maaaring magproseso ng maraming email nang sabay-sabay kung maraming dumating nang sabay, na pinapatakbo ang flow nang isang beses lamang para sa batch.

Upang matiyak na ang flow ay tumatakbo nang hiwalay para sa bawat email, i-enable ang **Split On** setting sa mga setting ng trigger at piliin ang `@triggerOutputs()?['body/value']` sa dropdown array field.

Kapag naka-on ang **Split On** at ang array field ay nakatakda sa `@triggerOutputs()?['body/value']`, ang flow ay tatakbo nang paisa-isa para sa bawat mensahe, kahit na maraming dumating nang sabay-sabay.

![I-on ang Split On settings sa trigger](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.tl.png)

1. Susunod, magdagdag tayo ng lohika upang suriin ang uri ng file ng attachment. Gusto lang natin mag-upload ng mga .PDF file attachments at hindi mga imahe (maaaring galing ito sa mga email signature). Piliin ang **+** icon sa ibaba ng trigger at piliin ang **Control** sa ilalim ng **Built in tools** section.

![Piliin ang Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.tl.png)

1. Piliin ang **Condition** action.

![Piliin ang Condition action](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.tl.png)

1. Ngayon, i-configure natin ang condition upang suriin kung ang uri ng file attachment ay .PDF. Sa **Choose a value** field, piliin ang **lightning bolt icon** o **fx icon** sa kanan.

1. Sa **Search** field, i-type ang sumusunod,

```text
content type
```

1. Pagkatapos, piliin ang **Attachments Content-Type** parameter mula sa trigger.

1. Susunod, piliin ang **Add** upang idagdag ang dynamic content input sa **Id** parameter ng action.

![I-configure ang Condition action](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.tl.png)

1. Mag-pause muna tayo dito, marahil napansin mo na ang **For each** action ay awtomatikong lumitaw.

Piliin ang **For each** action. Ang action na ito ay kumakatawan sa pag-loop sa bawat attachment sa email, dahil ang **Attachments Content-Type** parameter mula sa trigger ay konektado sa bawat attachment.

Sa ilalim ng hood, ito ay isang array kaya't ang **For each** action ay awtomatikong idinagdag nang pinili natin ang **Attachments Content-Type** parameter sa **Condition** action.

Upang matuto pa tungkol dito, i-expand ang sumusunod na karagdagang learning block.

??? info "Karagdagang Pag-aaral: For each action na awtomatikong lumilitaw"

🤔 **Bakit Awtomatikong Lumilitaw ang "Apply to each" o "For each"?**

Kapag pumili ka ng parameter (dynamic content) na kumakatawan sa isang listahan o array ng mga item - halimbawa, isang listahan ng mga attachment, email, o mga row - kinikilala ng Power Automate na maaaring gusto mong iproseso ang bawat item nang paisa-isa.

Upang matulungan kang gawin ito, awtomatikong idinadagdag ng Power Automate ang **“Apply to each”** (o **For each**) loop sa paligid ng iyong action. Tinitiyak nito na ang iyong action ay tatakbo nang isang beses para sa bawat item sa listahan, sa halip na subukang iproseso ang buong listahan nang sabay-sabay (na maaaring magdulot ng error).

🦋 **Halimbawa**

- Kung pipiliin mo ang "Attachments" mula sa isang nakaraang action (na isang array), at susubukang gamitin ito sa isang action na inaasahan ang isang solong file, i-wrap ng Power Automate ang iyong action sa isang **"Apply to each"** (o **For each**) loop.
- Sa ganitong paraan, ang iyong action ay tatakbo para sa **bawat attachment** - isa-isa.

💡 **Mga Pangunahing Punto**

- **Awtomatiko:** Ang loop ay awtomatikong lumilitaw upang matulungan kang iproseso ang bawat item sa isang koleksyon.
- **Pinipigilan ang error:** Kung wala ang loop, maaaring mabigo ang iyong action dahil hindi nito kayang hawakan ang maraming item nang sabay-sabay.
- **Visual na palatandaan:** Ito ay isang visual na paraan upang ipakita na ang iyong flow ay uulit ng action para sa bawat item sa listahan.

![Paliwanag sa For Each action](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.tl.png)

1. Susunod, sa isa pang **Choose a value** field, i-type ang sumusunod,

```text
application/pdf
```

Ito ay magtitiyak na para sa bawat file attachment, susuriin nito kung ang format ng file extension ay .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.tl.png)

1. Ngayon, i-configure natin ang **True** path upang kunin ang file mula sa email at i-upload ito sa **Resume** Dataverse table.

Magdagdag ng bagong action sa ibaba ng **True** path at maghanap ng `html to text`. Piliin ang **Html to text** action.

Upang matuto pa tungkol sa **Html to text** action, i-expand ang sumusunod na karagdagang learning block.

??? info "Karagdagang Pag-aaral: Html to text action"

🤔 **Ano ang "HTML to text" Action?**

Ang **HTML to text** action sa Power Automate ay ginagamit upang i-convert ang HTML-formatted content sa plain text. Ito ay partikular na kapaki-pakinabang kapag nakakatanggap ka ng data (tulad ng mga email, web content, o API responses) na naglalaman ng HTML tags, at nais mong kunin lamang ang nababasang text nang walang anumang formatting o code.

⚙️ **Paano ito gumagana?**

- **Input:** Magbibigay ka ng string ng HTML content (halimbawa, ang body ng isang email).
- **Output:** Inaalis ng action ang lahat ng HTML tags at ibinabalik lamang ang plain text.

👍🏻 **Kailan mo ito gagamitin?**

- Kapag nais mong kunin ang nababasang text mula sa mga email, web pages, o API responses na naglalaman ng HTML.
- Bago magpadala ng content sa mga system na hindi sumusuporta sa HTML formatting (tulad ng SMS, Teams messages, o databases).
- Upang linisin ang data para sa karagdagang pagproseso o pagsusuri.

🔭 **Saan ito matatagpuan?**

- Sa Power Automate para sa Agent Flows, hanapin ang action na tinatawag na `HTML to text`. Ito ay nasa ilalim ng **Data Operations** connector.

💡 **Mga Pangunahing Punto**

- Inaalis nito ang lahat ng HTML tags at iniiwan lamang ang text.
- Hindi nito ini-interpret o ine-execute ang scripts/styles - tinatanggal lamang ang tags.
- Kapaki-pakinabang para sa paglilinis ng data at paghahanda ng content para sa plain-text outputs.

![Magdagdag ng HTML to text action](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.tl.png)

1. Susunod, kailangan nating gumawa ng bagong connection reference para sa **Html to text** action sa pamamagitan ng pagpili sa **Add new**.

![Magdagdag ng bagong connection reference](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.tl.png)

1. Ang action ay maaari nang i-configure. Magdagdag ng **Body** parameter mula sa trigger. Sa **Content** field, piliin ang **lightning bolt icon** o **fx icon** sa kanan.

![Magdagdag ng Dynamic Content](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.tl.png)

1. Sa **Dynamic content** tab, maghanap ng `body` at piliin ang **Body** parameter, pagkatapos ay piliin ang **Add**.

![Magdagdag ng Body parameter](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.tl.png)

1. Natapos na natin ang pag-configure ng action na ito kaya lumabas mula sa action sa pamamagitan ng pagpili sa dalawang angle brackets («) na nakaturo sa kaliwa upang i-collapse ang panel.

![I-collapse ang action panel](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.tl.png)

1. Magdagdag ng bagong action sa pamamagitan ng pagpili sa **+ icon** sa ilalim ng **Html to text** action na maglo-load ng panel upang magdagdag ng mga action. Piliin ang **Microsoft Dataverse** connector.

![Magdagdag ng bagong action](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.tl.png)

1. Piliin ang **Add a new row** action.

![Magdagdag ng bagong row action](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.tl.png)

1. Palitan ang pangalan ng action sa pamamagitan ng pagpili sa **Ellipsis (...)**, kopyahin at i-paste ang sumusunod bilang pangalan,

```text
Add a new Resume row
```

Para sa **Table name** parameter, maghanap ng `res` at piliin ang **Resumes** table.

![Palitan ang pangalan ng action at i-configure ang Table name parameter](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.tl.png)

1. Piliin ang **Resume Title** field at piliin ang **lightning bolt icon** o **fx icon** sa kanan.

![I-configure ang Resume Title parameter](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.tl.png)

1. Sa **Function tab**, ilagay ang sumusunod na expression na gumagamit ng `item()` function.

```text
item()?['name']
```

Upang matuto pa tungkol sa `item()` function, i-expand ang sumusunod na karagdagang learning block.

??? info "Karagdagang Pag-aaral: `item()` function"

🤔 **Ano ang `item()` function?**

- Kapag gumamit ka ng **Apply to each** action, ang Power Automate ay dumadaan sa bawat elemento sa isang koleksyon (array).
- Kadalasan itong ginagamit sa loob ng mga action tulad ng **Apply to each** (o **For each**), **Select**, o **Filter array**.

⚙️ **Paano ito gumagana?**

- Ang `item()` ay isang function na nagbabalik ng kasalukuyang item na pinoproseso sa isang loop o array operation.
- Sa loob ng loop, ang `item()` ay tumutukoy sa _kasalukuyang elemento_ na pinoproseso.

📌 **Saan mo ito ginagamit?**

- **Apply to each:** upang ma-access ang mga properties ng kasalukuyang item.
- **Select:** upang baguhin ang bawat item sa isang array.
- **Filter array:** upang tukuyin ang kasalukuyang item na sinusuri.

🦋 **Halimbawa**

- Expression sa loob ng loop:
       -  `item()?['Email']`
- Kinukuha nito ang `Email` property ng kasalukuyang item.

💡 **Mga Pangunahing Punto**

- Ang `item()` ay _context-sensitive_: palaging tumutukoy sa kasalukuyang item sa loop o array operation na iyong kinaroroonan.
- Kung mag-nest ka ng mga loop, maaari mong gamitin ang `items('LoopName')` upang tukuyin ang mga item sa isang partikular na loop.

Piliin ang **Add** upang idagdag ang expression sa **Resume Title** parameter.

![Magdagdag ng expression para sa Resume Title parameter](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.tl.png)

1. Kailangan pa nating i-configure ang ilang mga parameter, piliin ang **Show all** at sa **Cover Letter** field, piliin ang **lightning bolt icon** o **fx icon** sa kanan.

Sa **Function tab**, ilagay ang sumusunod na expression na gumagamit ng parehong expression sa nakaraang [mission](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Ang expression na ito ay sinusuri kung ang _text_ mula sa **Html to text** action ay mas mahaba sa 2000 characters, at kung oo, ibinabalik lamang ang unang 2000 characters; kung hindi, ibinabalik ang buong text.

![Magdagdag ng expression para sa Cover Letter parameter](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.tl.png)

1. Ang expression ay ngayon idinagdag sa **Cover Letter** field.

![Expression na idinagdag sa Cover Letter parameter](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.tl.png)

1. Para sa **Source Email Address** field, maghanap ng `from` at piliin ang **From** parameter mula sa trigger dahil naglalaman ito ng email address value.

![Source Email Address parameter](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.tl.png)

1. Para sa **Upload Date** field, piliin ang **lightning bolt icon** o **fx icon** sa kanan. Sa **Function tab**, ilagay ang sumusunod na expression na gumagamit ng `utcNow()` function.

```text
utcNow()
```

Upang matuto pa tungkol sa `utcNow` function, i-expand ang sumusunod na karagdagang learning block.

??? info "Karagdagang Pag-aaral: `utcNow` function"

🤔 **Ano ang `utcNow()` function?**

- Ang `utcNow()` function sa Power Automate ay nagbabalik ng kasalukuyang petsa at oras sa Coordinated Universal Time (UTC) sa isang ISO 8601 format, tulad ng: `2025-09-23T04:32:14Z`

🦋 **Halimbawa**

- Expression:
       -  `concat('Report generated on ', utcNow())`
- Output ay:
       - Report generated on `2025-09-23T04:32:14Z`

💡 **Mga Pangunahing Punto**
- **Walang kinakailangang argumento (input parameters):** palaging nagbibigay ito ng kasalukuyang UTC timestamp.
   - **Mga Halimbawa ng Paggamit**
       - Pagdaragdag ng timestamp sa mga log o pangalan ng file
       - Paghahambing ng kasalukuyang oras sa ibang mga petsa
       - Pag-iiskedyul o mga kondisyon na nakabatay sa oras

![Upload Date Parameter](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.tl.png)

1. Natapos na natin ang pag-configure ng **Add a new Resume row** na aksyon kaya't lumabas na tayo sa panel sa pamamagitan ng pag-collapse nito.

![Exit from action panel](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.tl.png)

1. Magdagdag tayo ng bagong aksyon sa pamamagitan ng pagpili sa **+ icon** sa ilalim ng **Add a new Resume row** na aksyon na maglo-load ng panel para magdagdag ng mga aksyon. Piliin muli ang **Microsoft Dataverse** connector.

![Add Dataverse action](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.tl.png)

1. Piliin ang **Upload a file or an image** na aksyon.

![Add the Upload a file or an image action](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.tl.png)

1. Palitan ang pangalan ng aksyon sa pamamagitan ng pagpili sa **Ellipsis (...)**, kopyahin at i-paste ang sumusunod bilang pangalan,

```text
Upload Resume File
```

![Rename action](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.tl.png)

1. Piliin ang **Content name** na field at piliin ang **lightning bolt icon** o **fx icon** sa kanan.

Sa **Function tab**, ilagay ang sumusunod na expression na gumagamit ng `item ()` function. Kinukuha nito ang `name` property ng kasalukuyang item (ang attachment file).

```text
item()?['name']
```

![Configure Content name parameter](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.tl.png)

1. Para sa **Table name** parameter, maghanap ng `res` at piliin ang **Resumes** na table.

![Configure Table name parameter](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.tl.png)

1. Piliin ang **Row ID** na field at piliin ang **lightning bolt icon** o **fx icon** sa kanan.

Maghanap ng `ID` at piliin ang **Resume** parameter mula sa _Add a new row_ Dataverse action dahil naglalaman ito ng ID value ng row kung saan ia-upload ang PDF file.

Piliin ang **Add**.

![Select Row ID](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.tl.png)

1. Piliin ang **Column name** na field at piliin ang **Resume PDF** na opsyon.

![Configure Column name parameter](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.tl.png)

1. Piliin ang **Content** na field at piliin ang **lightning bolt icon** o **fx icon** sa kanan.

Sa **Function tab**, ilagay ang sumusunod na expression na gumagamit ng `item ()` function. Kinukuha nito ang `contentBytes` property ng kasalukuyang item (ang attachment file). Ang `contentBytes` ay tumutukoy sa raw binary data ng isang file o attachment, na naka-encode bilang Base64 string.

```text
item()?['contentBytes']
```

1. Natapos na natin ang pag-configure ng aksyon na ito kaya't lumabas na tayo sa aksyon sa pamamagitan ng pagpili sa dalawang angle brackets («) na nakaturo sa kaliwa upang i-collapse ang panel.

![Collapse action panel](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.tl.png)

1. Susunod, piliin ang **Sends a prompt to the specified copilot for processing**, pagkatapos i-drag at i-drop ang aksyon na ito sa ilalim ng **Upload Resume File** na aksyon sa _True_ path ng kondisyon.

![Drag and drop action in True path](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.tl.png)

1. Piliin ang **Sends a prompt to the specified copilot for processing** upang i-configure ito.

![Select action](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.tl.png)

1. Sa **Body/message** na field, piliin ang lahat ng nilalaman ng field at i-clear/i-delete ito.

![Clear Body parameter](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.tl.png)

1. Kopyahin at i-paste ang sumusunod na teksto sa **Body/message** na field at i-highlight ang `RESUME ID PLACEHOLDER`.

```text
Send [ResumeId (text)] = "RESUME ID PLACEHOLDER" and [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" and [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" to the Tool "Notify Teams Applicant channel" in the child agent "Application Intake Agent"
```

![Replace Resume ID Placeholder text](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.tl.png)

1. Piliin ang **lightning bolt icon** o **fx icon** sa kanan.

Maghanap ng `resume` at piliin ang **Resume** parameter mula sa _Add a new row Dataverse_ action dahil naglalaman ito ng `ID` value ng Resume row na ginawa.

Piliin ang **Add**.

![Select Resume parameter](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.tl.png)

1. I-highlight ang `RESUME TITLE PLACEHOLDER`. Piliin ang **lightning bolt icon** o **fx icon** sa kanan.

Maghanap ng `title` at piliin ang **Resume Title** parameter mula sa _Add a new row Dataverse_ action dahil naglalaman ito ng `resume title` value ng Resume row na ginawa.

Piliin ang **Add**.

![Select Resume parameter](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.tl.png)

1. I-highlight ang `RESUME NUMBER PLACEHOLDER`. Piliin ang **lightning bolt icon** o **fx icon** sa kanan.

Maghanap ng `resume number` at piliin ang **Resume Number** parameter mula sa _Add a new row Dataverse_ action dahil naglalaman ito ng `Resume Number` value ng Resume row na ginawa.

Piliin ang **Add**.

![Select Resume parameter](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.tl.png)

1. Natapos na natin ang pag-configure ng aksyon na ito at ang ating agent flow 🙌🏻 Ang galing mo! Ngayon, i-save natin ang ating event trigger flow sa pamamagitan ng pagpili sa **Save draft**.

![Save draft](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.tl.png)

1. Kailangan na nating i-edit ang mga detalye ng agent flow, piliin ang **Back**.

![Select Back](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.tl.png)

1. Piliin ang **Edit** sa **Details** section at i-update ang **Plan** sa **Copilot Studio** na opsyon.

Piliin ang **Save**.

![Change Copilot Studio plan](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.tl.png)

1. Lalabas ang isang modal upang kumpirmahin ang paglipat sa Copilot Studio plan. Piliin ang **Confirm**.

![Confirm Copilot Studio plan change](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.tl.png)

1. Ang plan ay na-update na sa **Copilot Studio**. Piliin ang **Edit** dahil kailangan nating i-publish ang event trigger flow para sa ating agent.

![Edit flow](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.tl.png)

1. Piliin ang **Publish**.

![Publish](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.tl.png)

Hooray! Ang event trigger flow ay Published na 😃

![Published](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.tl.png)

Magpatuloy tayo sa paggawa ng bagong agent flow na tatawagin ng child **Intake Application Agent**.

### Lab 3.2 - Mag-notify sa isang Teams channel gamit ang adaptive card

Gagawa tayo ng bagong agent flow para sa child **Intake Application Agent** na gumagamit ng mga value na ipinasa ng event trigger, upang mag-post ng adaptive card sa isang Teams channel. Ang adaptive card na ito ay mag-aalerto sa HR recruitment team tungkol sa PDF na awtomatikong na-upload upang ma-review nila ito.

Simulan na natin!

1. Sa **Hiring Agent** piliin ang **Agents** tab at piliin ang **Application Intake Agent**.

![Select Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.tl.png)

1. Mag-scroll pababa sa **Tools** at piliin ang **+ Add**.

![Add Tool](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.tl.png)

1. Lalabas ang **Add tool** na modal. Piliin ang **+ New tool**.

![Select New Tool](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.tl.png)

1. Piliin ang **Agent flow**.

![Select Agent flow](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.tl.png)

1. Maglo-load ang **agent flow designer**. Sa **When an agent calls the flow** trigger, piliin ang **+ Add an input**.

![Select add an input](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.tl.png)

1. Piliin ang **Text** bilang uri ng user input.

![Select Text](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.tl.png)

1. Sa input text field, kopyahin at i-paste ang sumusunod para sa pangalan ng input parameter.

```text
ResumeId
```

![ResumeId input](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.tl.png)

1. Ulitin ang parehong mga hakbang upang magdagdag ng pangalawang text input. Kopyahin at i-paste ang sumusunod para sa pangalan ng input parameter.

```text
ResumeTitle
```

![ResumeTitle input](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.tl.png)

1. Ulitin ang parehong mga hakbang upang magdagdag ng pangatlong text input. Kopyahin at i-paste ang sumusunod para sa pangalan ng input parameter.

```text
ResumeNumber
```
![ResumeNumber input](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.tl.png)

1. Naalala mo ba kung paano sa [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) nagdagdag tayo ng adaptive card sa loob ng isang Topic para sa ating agent? Sa pagkakataong ito, magdadagdag tayo ng adaptive card sa isang agent flow. Magdagdag tayo ng isa pang aksyon sa ating agent flow na magpo-post ng adaptive card sa isang Teams channel.

Piliin ang **+ icon** sa ilalim ng trigger.

![Add new action](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.tl.png)

1. Piliin ang **Post card in a chat or channel** na aksyon.

![Select post card in a chat or channel action](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.tl.png)

1. Kailangan ng connection reference sa Microsoft Teams gamit ang iyong naka-sign in na user account. Piliin ang **Sign in**.

![Select sign in](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.tl.png)

1. Piliin ang iyong user account at pagkatapos ay piliin ang **Allow access**.

![Select Allow access](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.tl.png)

1. Para sa mga sumusunod na input parameters,

| Parameter | Paano I-set | Detalye |
|----------|------------|---------|
| **Post as** | Dropdown | Piliin ang opsyon na `Flow bot` |
| **Post in** | Dropdown | Piliin ang opsyon na `Channel` |
| **Team** | Dropdown | Piliin ang team na available sa iyong environment na may access ka para sa layunin ng pagsasagawa ng lab exercise na ito |
| **Team** | Dropdown | Piliin ang channel na available sa iyong environment na may access ka para sa layunin ng pagsasagawa ng lab exercise na ito |

![Configure input parameters](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.tl.png)

1. Susunod, i-configure natin ang **Adaptive Card** na field. Piliin ang **Adaptive Card** na field.

![Select Adaptive Card field](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.tl.png)

1. Buksan ang [Resume Table Updated JSON file](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), kopyahin ang buong nilalaman nito, at i-paste sa Adaptive Card field.

![Copy and paste JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.tl.png)

1. Katulad ng ginawa natin sa [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), papalitan natin ang mga kasalukuyang value sa JSON payload ng mga aktwal na value o dynamic content.

Una, i-update natin ang URL para sa `url` property sa loob ng `selectAction` property. Ang URL na ito ay papalitan ng URL ng Resumes system view sa **Hiring Hub** model-driven app. Papayagan nito ang Recruiter na piliin ang aksyon at ma-direkta sa Resumes system view sa model-driven app.

I-highlight ang kasalukuyang URL value at i-delete ito.

![Select URL value](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.tl.png)

1. Sa **Hiring Hub** model-driven app, mag-navigate sa **Resumes** system view gamit ang menu sa kaliwang bahagi at kopyahin ang URL. Pagkatapos, mag-navigate pabalik sa agent flow, at i-paste ang nakopyang URL sa **url** property sa loob ng `selectAction property`.

![Copy Resumes system view URL](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.tl.png)
1. Makikita mo ang sumusunod kung saan naka-highlight sa dilaw ang mga detalye ng iyong environment para sa **Hiring Hub** model-driven app.

     | Parameter | Halaga | Paliwanag |
     |----------|------------|---------|
     | **Organization URI** | GUID | Ang URL ng Dataverse/Dynamics 365 environment organization |
     | **appid** | GUID | Para buksan ang isang partikular na model-driven app, ginagamit ang query parameter na appid o appname. Sa kasong ito, ginagamit ang appid |
     | **viewid** | GUID | Ang query parameter na id ng view |

       ![I-paste ang URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.tl.png)

1. Susunod, magdadagdag tayo ng mga dynamic content values para sa ilang properties. Magsimula tayo sa text na magpapakita ng Resume Number reference ng row na awtomatikong ginawa ng event trigger.

      Piliin ang **panel** icon para i-load ang action panel.

       ![Piliin ang panel icon](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.tl.png)

1. Mag-scroll pababa sa linya kung saan makikita ang `text` property para sa `RESUME NUMBER PLACEHOLDER`. I-highlight ang placeholder value at burahin ito.

       ![Burahin ang placeholder](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.tl.png)

1. Mag-click sa pagitan ng double quotation marks at piliin ang **lightning bolt icon** o **fx icon** sa kanan.

      Sa **Dynamic Content** tab, piliin ang **ResumeNumber** parameter at piliin ang **Add**.

       ![Magdagdag ng ResumeNumber parameter](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.tl.png)

1. Ang **ResumeNumber** parameter ay idadagdag bilang dynamic content sa `text` property.

       ![ResumeNumber dynamic content](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.tl.png)

1. Ulitin natin ang parehong hakbang para sa `RESUME NAME PLACEHOLDER`. Mag-scroll pababa sa linya kung saan makikita ang `text` property para sa `RESUME NAME PLACEHOLDER`. I-highlight ang placeholder value at burahin ito.

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.tl.png)

1. Mag-click sa pagitan ng double quotation marks at piliin ang **lightning bolt icon** o **fx icon** sa kanan.

      Sa **Dynamic Content** tab, piliin ang **ResumeTitle** parameter at piliin ang **Add**.

       ![Magdagdag ng ResumeTitle parameter](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.tl.png)

1. Ang **ResumeTitle** parameter ay idadagdag bilang dynamic content sa `text` property.

       ![ResumeTitle dynamic content](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.tl.png)

1. Ulitin natin ang parehong hakbang para sa **Due Date** value na kumakatawan kung kailan dapat suriin ng recruiter ang resume. Mag-scroll pababa sa linya kung saan makikita ang `text` property para sa `May 21, 2023`.

       ![Piliin ang Allow access](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.tl.png)

1. Burahin ang placeholder value ng petsa at mag-click sa pagitan ng double quotation marks.

       ![Burahin](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.tl.png)

1. Piliin ang **lightning bolt icon** o **fx icon** sa kanan at sa **Function** tab, ilagay ang sumusunod na expression at piliin ang **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Ginagamit ng expression na ito ang dalawang functions.

     | Function | Paliwanag |
     |----------|------------|
     | **addDays** | Nagdadagdag ng tinukoy na bilang ng araw sa isang petsa at ibinabalik ang resulta bilang string format |
     | **utcNow** | Nagbabalik ng kasalukuyang petsa at oras sa Coordinated Universal Time (UTC) format bilang string. |

      Para sa utcNow value, ina-format natin ang petsa bilang buwan at araw, kasunod ang taon.

       ![Expression Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.tl.png)

      Ang expression ay idadagdag sa `text` property.

       ![Expression Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.tl.png)

1. Panghuli, i-update natin ang URL para sa `url` property sa loob ng `actions` array property sa ibaba ng JSON payload. Ang kasalukuyang placeholder URL ay papalitan ng URL ng Resume row sa **Hiring Hub** model-driven app. Papayagan nito ang Recruiter na piliin ang `Action.OpenURL` action ng adaptive card at ma-direkta sa Resume sa model-driven app.

       ![Burahin ang View Resume URL placeholder](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.tl.png)

1. Sa **Hiring Hub** model-driven app, buksan ang isang row sa **Resumes** system view gamit ang menu sa kaliwang bahagi. Ang resume row ay maglo-load bilang form sa model-driven app.

      Kopyahin ang URL para sa Resume row.

    ??? info "Paano bumalik sa **Hiring Hub** model-driven app kung sakaling lumabas/isinara ito"

        1. Mag-browse sa [https://make.powerapps.com](https://make.powerapps.com) at tiyaking nasa developer environment ka na ginagamit mo para sa mga lab exercises na ito, kung hindi, magpalit dito.
        
        ![Mag-browse sa make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.tl.png)

        1. Piliin ang **Apps** sa kaliwang bahagi ng menu pane at para sa **Hiring Hub** model-driven app, piliin ang **Play** icon para i-load ito sa iyong browser.
        
        ![Piliin ang Hiring Hub model-driven app](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.tl.png)

       ![Kopyahin ang Resume row URL](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.tl.png)

1. Pagkatapos, bumalik sa agent flow, i-highlight ang kasalukuyang placeholder URL value at burahin ito.

       ![Burahin ang Resume row URL placeholder](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.tl.png)

1. Pagkatapos, i-paste ang nakopyang URL sa **url** property sa loob ng `url property`.

       ![I-paste ang nakopyang Resume row URL](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.tl.png)

1. Makikita mo ang sumusunod. Burahin ang `GUID` id value sa dulo. Papalitan natin ito ng dynamic content - ang **ResumeId** parameter.

       ![Burahin ang View Resume URL placeholder](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.tl.png)

1. Piliin ang **lightning bolt icon** o **fx icon** sa kanan.

      Sa **Dynamic Content** tab, piliin ang **ResumeId** parameter at piliin ang **Add**.

       ![ResumeId parameter](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.tl.png)

1. Ang **ResumeId** ay idadagdag bilang dynamic content. Ang sumusunod na naka-highlight sa dilaw ay ang mga detalye ng iyong environment para sa **Hiring Hub** model-driven app.

     | Parameter | Halaga | Paliwanag |
     |----------|------------|---------|
     | **Organization URI** | GUID | Ang URL ng Dataverse/Dynamics 365 environment organization |
     | **appid** | GUID | Para buksan ang isang partikular na model-driven app, ginagamit ang query parameter na appid o appname. Sa kasong ito, ginagamit ang appid |
     | **id** | GUID | Ang query parameter na id ng Resume row |

       ![ResumeId dynamic content](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.tl.png)

1. Natapos na natin ang pag-configure ng **Post card in a chat or channel** action 👏🏻 Lumabas mula sa action configuration panel sa pamamagitan ng pagpili sa **x** icon.

       ![Isara ang panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.tl.png)

1. Panghuli, i-configure natin ang huling action, **Respond to the agent** sa pamamagitan ng pagpapadala ng text pabalik sa agent para tapusin ang proseso.

      Sa **Respond to the agent** action, piliin ang **+Add an output**.

       ![Piliin ang Add an output](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.tl.png)

1. Piliin ang **Text** bilang uri ng output.

       ![Piliin ang text bilang uri ng output](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.tl.png)

1. Ilagay ang sumusunod bilang pangalan ng output.

       ![End Conversation Output](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.tl.png)

1. Ilagay ang sumusunod bilang halaga para sa output.

       ```text
       Finished
       ```

       ![End Conversation Output value](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.tl.png)

1. Natapos na natin ang pag-configure ng agent flow. Piliin ang **Save draft** para i-save ang agent flow. Lalabas ang confirmation message kapag na-save na.

       ![I-save ang draft](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.tl.png)

1. Bago i-publish ang agent flow, kailangan nating i-update ang mga detalye para sa agent flow. Piliin ang **Overview** tab at piliin ang **Edit**.

      Sa field ng pangalan ng flow, ilagay ang sumusunod.

       ```text
       Notify Teams Applicant channel
       ```      

      Pagkatapos, piliin ang **Refresh** icon para i-update ang description ng agent flow gamit ang AI.

      Pagkatapos, piliin ang **Save** para i-save ang na-update na mga detalye para sa agent flow.

       ![I-edit at i-save ang mga detalye](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.tl.png)

1. Bumalik sa **Designer** tab at piliin ang **Publish** para i-publish ang agent flow. Lalabas ang confirmation message kapag na-save na.

       ![I-publish ang agent flow](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.tl.png)

1. Ang agent flow ay kailangang idagdag bilang tool sa **Application Intake Agent**. Bumalik sa **Hiring Agent** at piliin ang **Agents** tab, pagkatapos piliin ang **Application Intake Agent**.

       ![Piliin ang Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.tl.png)

1. Sa **Details** section ng agent, i-update natin ang **Description** field. Kopyahin ang sumusunod at i-paste sa dulo ng description text.

       ```text
       and also notify the Teams Applicant channel
       ```

       ![I-update ang Agent Description](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.tl.png)

1. Susunod, idagdag natin ang agent flow bilang tool. Mag-scroll pababa at piliin ang **+ Add**.

       ![Piliin ang Add](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.tl.png)

1. Piliin ang agent flow na ginawa kanina, **Notify Teams Applicant Channel**.

       ![Piliin ang agent flow](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.tl.png)

1. Piliin ang **Add and configure** pagkatapos.

       ![Piliin ang Add and configure](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.tl.png)

1. Sa **Inputs** section ng agent flow, makikita ang tatlong inputs na na-configure natin kanina sa agent flow. Sa default, ang **Fill using** configuration ay nakatakda sa **Dynamically fill with AI**. Panatilihin natin ang setting na ito dahil ang prompt mula sa event trigger (sa huling action, **Sends a prompt to the specified copilot for processing** - ito ay mga hakbang 38-44 ng **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) ay maglalaman ng parameter values na kukunin ng AI.

       ![Tool agent flow inputs](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.tl.png)

1. Ngayon na ang tool ay naidagdag sa **Application Intake Agent**, kailangang i-update ang mga instructions ng agent. Piliin ang **back arrow** icon para bumalik sa listahan ng mga agents.

       ![Piliin ang back arrow icon](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.tl.png)

1. Piliin ang **Application Intake Agent** sa **Agents** tab ng **Hiring Agent**.

       ![Piliin ang Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.tl.png)

1. Sa **Instructions** field, maglagay ng bagong linya pagkatapos ng `2.Post-Upload` instructions. Kopyahin at i-paste ang sumusunod na instructions.

       ```text
       Process for Resume Upload via Email
       1. When you receive a message, **Send [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" and [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" and [ResumeNumber (text_2)]= "R01026" to the Tool "Notify Teams Applicant channel"** in the child agent "Application Intake Agent", call [AGENT FLOW PLACEHOLDER]
       ```

       ![I-update ang instructions ng Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.tl.png)

1. I-highlight ang `[AGENT FLOW PLACEHOLDER` text.

       ![I-highlight ang placeholder](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.tl.png)

1. Ilagay ang forward slash character, `/`, at piliin ang **Notify Teams Applicant Channel** tool.

       ![Piliin ang Notify Teams Applicant Channel tool](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.tl.png)
1. Ang daloy ng ahente ay tatawagin na ngayon ng **Application Intake Agent** ayon sa mga tagubilin, pagkatapos ng huling aksyon (**Nagpapadala ng prompt sa tinukoy na copilot para sa pagproseso**) sa event trigger na nagpapadala ng prompt na naglalaman ng mga halaga ng parameter pabalik sa ahente.

      Piliin ang **Save** upang mai-save ang na-update na mga tagubilin para sa **Application Intake Agent**.

       ![Piliin ang Save](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.tl.png)

1. Ang mga tagubilin ay maa-update na ngayon kapag na-save na ang ahente.

       ![Na-update ang mga tagubilin](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.tl.png)

1. Kailangan na nating **I-publish** ang **Hiring Agent**. Piliin ang **Publish** sa kanang itaas, at sa _Publish this agent modal_ na lilitaw, piliin ang **Publish**.

       ![I-publish ang Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.tl.png)

1. Kapag na-publish na, lilitaw ang kumpirmasyon na na-publish na ang ahente.

       ![Kumpirmasyon ng pag-publish](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.tl.png)

Maaari na nating subukan ang ahente!

### Lab 3.3 - Subukan ang event trigger

1. Upang maisagawa ang event trigger, kailangang magpadala ng email na may kalakip na Resume pdf file. Sa Outlook, gumawa ng bagong email message.

     | Bahagi ng Email | Detalye |
     |----------|------------|
     | **Sa tatanggap** | Gamitin ang naka-sign in na user account bilang halaga |
     | **Kalakip na file** | I-upload ang [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) file  |
     | **Nilalaman** | Kopyahin at i-paste ang sumusunod sa ibaba bilang nilalaman ng email  |

       ```text
       Mahal na Hiring Manager,

       Ako po ay sumusulat upang ipahayag ang aking interes sa posisyon bilang Senior Power Platform Engineer sa inyong organisasyon. Sa mahigit siyam na taon ng karanasan sa pagbuo ng mga secure at scalable na solusyon sa Microsoft cloud platforms, kumpiyansa akong makakapag-ambag ako nang epektibo sa inyong koponan.

       Sa aking pinakahuling posisyon bilang Lead Power Platform Engineer, nakabuo ako ng automated resume-intake pipeline, na nagbawas ng manual triage at nagpa-improve ng searchability. Nakapag-deliver ako ng HR case management applications, nagpakilala ng solution-aware flows, at nagpatupad ng PR checks upang mapabilis ang deployment lead times. Ang aking expertise ay kinabibilangan ng Power Apps, Power Automate, Power Pages, Dataverse, at iba't ibang Microsoft 365 services, pati na rin ang integration sa Graph/REST APIs at Azure Functions.

       Dati, nakabuo ako ng Teams approvals gamit ang adaptive cards, na nagpaikli ng approval times sa parehong araw, at nakagawa ng matibay na error-handling frameworks. Ang aking background ay kinabibilangan din ng pag-migrate ng legacy workflows sa Power Automate at pagbuo ng self-service portals na ginagamit ng daan-daang empleyado.

       Ako ay may B.Sc. sa Computer Science at certified bilang Power Platform Developer (PL-400) at Solution Architect (PL-600). Ako rin ay may passion sa mentoring at nag-volunteer sa mga lokal na maker groups.

       Pakitingnan ang aking CV na nakalakip para sa inyong konsiderasyon. Ikinalulugod kong talakayin kung paano ang aking mga kakayahan at karanasan ay naaayon sa inyong pangangailangan.

       Salamat sa inyong oras at konsiderasyon.

       Lubos na gumagalang,
       Taylor Testperson
       ```

       **Ipadala** ang email kapag natapos na.

       ![Gumawa ng email na may kalakip na PDF file](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.tl.png)

1. Sa Power Automate maker portal para sa event trigger flow, piliin ang **Refresh** icon upang makita ang flow run na nagtagumpay para sa ipinadalang email.

       ![Piliin ang refresh icon upang makita ang flow run](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.tl.png)

1. Bumalik sa Copilot Studio sa **Hiring Agent** at piliin ang **Activity** tab.

       ![Piliin ang Activity tab](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.tl.png)

1. Ang **Activity** tab ay maglo-load na magpapakita ng lahat ng aktibidad ng **Hiring Agent**. Magkakaroon ng aktibidad na may pangalan na **Automated** na may status na **Complete**. Ang aktibidad na ito ay kumakatawan sa event trigger at sa agent flow na tinawag.

       ![Natapos ang aktibidad](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.tl.png)

1. Piliin ang aktibidad, at piliin ang event trigger sa activity map. Sa kanang bahagi ng panel, mapapansin ang input parameters sa prompt na naglalaman ng `Resume Id`, `Resume Title` at `Resume Number` parameter values mula sa **Dataverse** row na ginawa. Ito ay mula sa dynamic content values na na-configure noong mga hakbang 18 - 27 ng **Lab 3.1 - Automate uploading resumes to Dataverse received by email**.

       ![Event trigger](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.tl.png)

1. Mag-navigate pabalik sa **Hiring Hub** model-driven app at sa **Resumes system view**, piliin ang **Refresh** upang i-refresh ang view. Ang bagong row para sa resume na ipinadala sa email ay makikita na ngayon dahil ito ay ginawa sa pamamagitan ng event trigger.

       ![Resume row na ginawa](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.tl.png)

1. Mag-navigate pabalik sa Copilot Studio at piliin ang **Notify Teams Applicant Channel** agent flow sa loob ng **Application Intake Agent** sa activity map. Sa kanang bahagi ng panel, mapapansin ang mga input na may mga halaga mula sa Dataverse row. Ito ay mula sa prompt na ipinadala ng huling aksyon (**Nagpapadala ng prompt sa tinukoy na copilot para sa pagproseso**) sa event trigger na naglalaman ng mga halaga ng parameter mula sa bagong Dataverse row na ginawa. Ganito natin maipapasa ang mga halaga ng parameter mula sa event triggers patungo sa agent flows.

       ![Piliin ang agent flow](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.tl.png)

1. Sa wakas, tingnan natin ang adaptive card na na-post sa channel sa **Microsoft Teams**. Sa channel, makikita natin ang adaptive card na nagpapakita ng impormasyon tungkol sa bagong Resume row na ginawa sa Dataverse. I-hover ang mouse sa hyperlink sa simula ng adaptive card, mapapansin na ang URL ay ang Resumes system view URL na na-configure natin noong mga hakbang 15 - 19 ng **Lab 3.2 - Notify a Teams channel using an adaptive card** payload ng adaptive card.

       ![Adaptive Card Resume Table system view URL](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.tl.png)

1. Piliin ang hyperlink, at dadalhin ka sa Resumes system view sa **Hiring Hub** model-driven app sa iyong browser.

       ![Resume system view sa Hiring Hub model-driven app](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.tl.png)

1. Mag-navigate pabalik sa adaptive card na na-post sa channel sa Microsoft Teams. Sa pagkakataong ito, i-hover ang mouse sa **View Resume** na siyang `Action.OpenURL` action ng adaptive card. Mapapansin na ang URL ay ang Resumes row na na-configure natin noong mga hakbang 30 - 36 ng **Lab 3.2 - Notify a Teams channel using an adaptive card** payload ng adaptive card.

       ![Adaptive Card Resume row URL](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.tl.png)

1. Piliin ang action, at dadalhin ka sa Resume row form sa **Hiring Hub** model-driven app sa iyong browser.

       ![Resume row sa Hiring Hub model-driven app](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.tl.png)

## ✅ Mission Complete

Binabati kita! 👏🏻 Mahusay na trabaho, Operative.

✅ Event trigger: nakagawa ka ng event trigger na nagpapasa ng Dataverse parameter values sa isang agent flow.  
✅ Nakabuo ng agent flow: gumagamit ng Dataverse parameter values upang mag-post ng adaptive card sa isang channel sa Microsoft Teams para i-alert ang HR recruitment team.  
✅ Na-update ang mga tagubilin ng child agent: upang tawagin ang flow kapag natapos na ang event trigger.

Pinapagana nito ang **Hiring Agent** na magtrabaho nang autonomously tuwing may natatanggap na resume bilang email attachment at i-notify ang HR recruitment team para sa manual review.

Ito ang katapusan ng **Lab 03 - Automating candidate application emails**, piliin ang link sa ibaba upang magpatuloy sa susunod na aralin.

⏭️ [Magpatuloy sa **Authoring Agent Instructions** lesson](../04-agent-instructions/README.md)

## 📚 Tactical Resources

📖 [Gawing autonomous ang iyong ahente sa Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  
📖 [Magdagdag ng event trigger](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  
📖 [Gamitin ang agent flows sa iyong ahente](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  
📖 [Panimula sa Power Automate triggers](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  
📖 [Paggamit ng Power Automate flows sa mga ahente](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  
📖 [Data loss prevention para sa Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.