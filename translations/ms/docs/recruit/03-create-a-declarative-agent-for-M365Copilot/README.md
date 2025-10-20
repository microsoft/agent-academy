<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T00:33:58+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "ms"
}
-->
# 🚨 Misi 03: Melancarkan Ejen Deklaratif untuk Microsoft 365 Copilot

## 🕵️‍♂️ NAMA KOD: `OPERASI PENAMBAHAN COPILOT`

> **⏱️ Tempoh Operasi:** `~60 minit`

🎥 **Tonton Panduan**

[![Thumbnail video Buat Ejen Deklaratif](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.ms.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Tonton panduan di YouTube")

## 🎯 Ringkasan Misi

Selamat datang ke tugasan lapangan pertama anda, Pembuat Ejen. Anda telah dipilih untuk mereka bentuk, melengkapkan, dan melancarkan Ejen Deklaratif—seorang operatif khusus yang tertanam secara langsung ke dalam Microsoft 365 Copilot dan Microsoft Teams.

Tidak seperti ejen tradisional, ejen deklaratif beroperasi dengan misi yang ditentukan (arahan), alat (prompt/penyambung), dan akses strategik kepada kecerdasan dalaman (sumber pengetahuan seperti SharePoint, Dataverse, dan lain-lain). Tugas anda adalah untuk membina ejen ini menggunakan Microsoft Copilot Studio—pusat arahan tanpa kod di mana kemahiran dan tujuan ejen anda menjadi kenyataan.

Mari kita mulakan.

## 🔎 Objektif

Dalam misi ini, anda akan belajar:

1. Memahami apa itu ejen deklaratif dan bagaimana ia memperluaskan Microsoft 365 Copilot dengan keupayaan tersuai
1. Membandingkan Microsoft Copilot Studio vs. pembina ejen Copilot Studio untuk membina ejen deklaratif
1. Membuat ejen deklaratif menggunakan bahasa semula jadi melalui pengalaman penciptaan perbualan
1. Menambah prompt AI sebagai alat untuk meningkatkan pengetahuan khusus dan kebolehan menyelesaikan masalah ejen anda
1. Menerbitkan dan menguji ejen deklaratif anda dalam Microsoft 365 Copilot dan Microsoft Teams

## 🕵🏻‍♀️ Apa itu ejen deklaratif untuk Microsoft 365 Copilot?

Ejen deklaratif adalah versi tersuai Microsoft 365 Copilot. Anda boleh menyesuaikan Microsoft 365 Copilot untuk memenuhi keperluan perniagaan tertentu dengan memberikannya arahan untuk menyokong proses tertentu, menghubungkannya dengan pengetahuan perusahaan, dan menggunakan alat untuk memperluaskan keupayaannya. Ini membolehkan organisasi mencipta pengalaman yang diperibadikan dengan fungsi yang lebih besar untuk pengguna mereka.

## 🤔 Mengapa saya menggunakan Microsoft Copilot Studio untuk membina ejen deklaratif?

Sebagai pembuat, mungkin anda telah meneroka [pembina ejen Copilot Studio](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) dalam Microsoft 365 Copilot dan anda mungkin tertanya-tanya _mengapa membina ejen deklaratif dalam Microsoft Copilot Studio?_

Microsoft Copilot Studio menawarkan set alat dan ciri yang komprehensif untuk ejen deklaratif yang melangkaui batasan pembina ejen Copilot Studio. Sama seperti pembina ejen Copilot Studio, anda tidak perlu tahu pengaturcaraan atau pembangunan perisian untuk membina dalam Microsoft Copilot Studio. Mari kita pecahkan ini lebih lanjut untuk memahami perbezaan antara pembina ejen Copilot Studio dan Copilot Studio untuk membina ejen deklaratif.

### Perbandingan Ciri

Jadual berikut menonjolkan perbezaan apabila membina ejen deklaratif dalam pembina ejen Copilot Studio dan Copilot Studio.

| Ciri                   | Pembina ejen Copilot Studio dalam Microsoft 365 Copilot                          | Memperluaskan Microsoft 365 Copilot dalam Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Pengetahuan**       | Web, SharePoint, sembang Microsoft Teams, e-mel Outlook, penyambung Copilot     | Carian web (melalui Bing), SharePoint, Dataverse, Dynamics 365, penyambung Copilot  |
| **Alat**       | Penterjemah kod, penjana imej     | 1400+ penyambung Power Platform, penyambung tersuai, prompt, penggunaan komputer, REST API, Protokol Konteks Model   |
| **Prompt permulaan**         | Konfigurasi prompt untuk pengguna memulakan dengan cepat   | Konfigurasi prompt untuk pengguna memulakan dengan cepat  |
| **Saluran**           | Ejen hanya diterbitkan ke Microsoft 365 Copilot     | Ejen diterbitkan ke Microsoft 365 Copilot dan Microsoft Teams      |
| **Kebenaran perkongsian**         | Pengguna hanya sebagai penonton    | Pengguna boleh menjadi editor atau penonton   |

Terdapat lebih banyak keupayaan yang ditawarkan untuk ejen deklaratif yang dibina dalam Microsoft Copilot Studio yang akan kita pelajari seterusnya.

!!! tip
    - Untuk mengetahui lebih lanjut tentang pembina ejen Copilot Studio, pergi ke [Copilot Developer Camp: Lab MAB1 - Bina ejen pertama anda](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Untuk pembangunan pro dalam memperluaskan ejen deklaratif melangkaui pembina ejen Copilot Studio untuk Microsoft 365 Copilot, pergi ke [Copilot Developer Camp: Lab MAB1 - Bina ejen pertama anda](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Memperluaskan Microsoft 365 Copilot dengan ejen deklaratif yang dibina dalam Copilot Studio

Mari kita kembangkan apa yang telah kita pelajari daripada jadual perbandingan ciri.

#### Penyesuaian

- **Arahan Terperinci**: Anda boleh memberikan arahan dan keupayaan terperinci untuk menentukan tujuan dan tingkah laku ejen dengan tepat.
  - Ini termasuk memanggil alat hanya dengan menggunakan bahasa semula jadi.

- **Akses Pengetahuan Perusahaan**: Membolehkan akses kepada pengetahuan perusahaan yang menghormati kebenaran pengguna.
  - Integrasi SharePoint
  - Integrasi Dataverse
  - Integrasi Dynamics 365
  - Penyambung Microsoft 365 Copilot yang diaktifkan oleh pentadbir organisasi anda

   ![Penyesuaian](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.ms.png)

#### Keupayaan Lanjutan

- **Integrasi dengan Perkhidmatan Luaran**: Membolehkan anda memilih daripada 1400+ penyambung Power Platform yang berintegrasi dengan perkhidmatan luaran, menyediakan fungsi yang lebih kompleks dan berkuasa.
  - Contoh termasuk [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) dan banyak lagi
  - Sebagai alternatif, anda juga boleh menggunakan pelayan Protokol Konteks Model dan REST API secara langsung dalam ejen deklaratif anda

- **Prompt AI**: Gunakan prompt untuk menganalisis dan mengubah teks, dokumen, imej dan data dengan bahasa semula jadi dan penaakulan AI.
  - Pilih model sembang, pilih daripada Basic (Default), Standard, Premium
  - Pilihan untuk membawa model Azure AI Foundry anda sendiri untuk mengasaskan prompt anda

- **Lebih banyak pilihan konfigurasi penerbitan**: Pilih saluran dan tentukan kebenaran pengguna.
  - Terbitkan ke Microsoft Teams, antara muka pengguna yang biasa untuk pengguna anda bagi penerimaan yang lebih cepat
  - Kebenaran pengguna boleh dikongsi untuk mengelakkan pergantungan tunggal pada pemilik ejen

   ![Penyesuaian](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.ms.png)

Secara ringkas, ejen deklaratif dalam Microsoft Copilot Studio membolehkan penyesuaian Microsoft 365 Copilot untuk memenuhi keperluan perniagaan melalui integrasi sistem pengetahuan perusahaan, alat untuk berhubung dengan perkhidmatan luaran atau model AI GPT.

## 🧪 Lab 03: Bina ejen deklaratif dalam Microsoft Copilot Studio untuk Microsoft 365 Copilot

Seterusnya kita akan belajar bagaimana membina ejen deklaratif untuk kes penggunaan "Business-to-Employee" yang akan bertindak sebagai **ejen meja bantuan IT**.

- [3.1 Buat ejen deklaratif](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Buat dan tambah prompt untuk ejen deklaratif anda](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Kemas kini arahan dan uji ejen deklaratif anda](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Terbitkan ejen deklaratif anda ke Microsoft 365 Copilot dan Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Lab ini akan menggariskan langkah-langkah untuk menambah Prompt sebagai alat. Pelajaran berikut akan mendalami penambahan sumber pengetahuan dan alat lain yang tersedia. Menjadikannya mudah untuk pembelajaran anda 😊

### 👩🏻‍💼 Memahami Business-to-Employee (B2E)

Business-to-Employee (B2E) merujuk kepada interaksi dan perkhidmatan yang disediakan oleh perniagaan secara langsung kepada pekerjanya. Dalam konteks ejen, ia bermaksud menggunakan keupayaan maju Copilot Studio untuk menyokong dan meningkatkan pengalaman kerja pekerja dalam organisasi.

### ✨ Senario kes penggunaan

**Sebagai** pekerja

**Saya mahu** mendapatkan bantuan cepat dan tepat daripada ejen meja bantuan IT untuk isu seperti masalah peranti, penyelesaian masalah rangkaian, pemasangan pencetak

**Supaya saya boleh** kekal produktif dan menyelesaikan isu teknikal tanpa kelewatan

Mari kita mulakan!

### Prasyarat

- Pembuat mesti mempunyai kebenaran untuk mencipta dan mempunyai akses ke persekitaran Copilot Studio.

!!! note "Nota Lesen"
    Lab ini akan menggariskan langkah-langkah untuk menambah Prompt sebagai alat. Pelajaran berikut akan mendalami penambahan sumber pengetahuan dan alat lain yang tersedia. Menjadikannya mudah untuk pembelajaran anda 😊
  
    Anda tidak memerlukan lesen pengguna Microsoft 365 Copilot untuk menerbitkan ejen deklaratif anda yang dibina dalam Copilot Studio ke Microsoft 365 Copilot. Walau bagaimanapun **pengguna** ejen deklaratif yang _diterbitkan_ dalam Microsoft 365 Copilot memerlukan lesen pengguna Microsoft 365 Copilot.

### 3.1 Buat ejen deklaratif

!!! warning "Soalan Copilot mungkin berbeza antara sesi"

    Pengalaman penciptaan perbualan Copilot boleh berbeza setiap kali di mana soalan yang diberikan untuk panduan mungkin sedikit berbeza daripada sebelumnya.

1. Navigasi ke [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) dan log masuk menggunakan kelayakan anda. Pastikan anda menukar ke persekitaran yang anda gunakan untuk lab ini.

1. Pilih **Ejen** dari menu dan pilih **Copilot untuk Microsoft 365**.

       ![Copilot untuk Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.ms.png)

1. Seterusnya, kita akan membuat ejen deklaratif dengan memilih **+ Tambah** ejen.

       ![Tambah Ejen](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.ms.png)

1. Kemudian kita akan melihat pengalaman penciptaan perbualan dimuatkan di mana kita boleh berbual dalam bahasa semula jadi dengan Copilot untuk menerangkan ejen deklaratif yang ingin kita bina, dan menggunakan soalan yang diberikan untuk panduan.

       Mari masukkan penerangan terperinci yang merangkumi perkara berikut,  
       - tugas ejen  
       - jenis pertanyaan yang boleh ditangani  
       - format responsnya  
       - matlamat ejen  
    
       ```text
       Anda adalah seorang profesional IT yang sangat mahir dan berpengalaman dalam pelbagai sistem komputer, rangkaian, dan keselamatan siber. Anda mampu mendiagnosis dan menyelesaikan isu teknikal, menerangkan penyelesaian dengan cara yang jelas dan mudah difahami untuk pengguna dari semua tahap teknikal, dan memberikan panduan tentang amalan terbaik. Anda harus ringkas dan informatif, menggunakan arahan langkah demi langkah dengan poin-poin apabila sesuai. Matlamat anda adalah untuk membantu pengguna memahami masalah dan bagaimana menyelesaikannya dengan berkesan.
       ```
    
       ![Buat Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.ms.png)

1. Selepas menghantar prompt, kemas kini yang ketara akan muncul di panel sebelah kanan dengan butiran dan arahan ejen seperti yang ditentukan oleh prompt. Seterusnya anda akan diminta untuk mengesahkan nama ejen anda dan Copilot akan mencadangkan nama.

       Sama ada masukkan `ya` untuk menerima nama yang dicadangkan atau masukkan nama lain seperti berikut,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Arahan dikemas kini](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.ms.png)

    !!! warning "Peringatan: Soalan Copilot mungkin berbeza antara sesi"

        Pengalaman penciptaan perbualan Copilot boleh berbeza setiap kali di mana soalan yang diberikan untuk panduan mungkin sedikit berbeza daripada sebelumnya.

1. Nama ejen kini telah dikemas kini seperti yang dilihat di panel sebelah kanan. Kita kini diminta untuk memperhalusi arahan untuk ejen. Apa yang dicadangkan oleh Copilot kedengaran hebat jadi kita akan memintanya menggunakan cadangannya sendiri. Kita akan masukkan yang berikut,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Nama dikemas kini](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.ms.png)

1. Seterusnya kita akan ditanya sama ada kita mahu menambah mana-mana laman web atau pengetahuan yang boleh diakses secara umum. Kita akan menjawab `Tidak` kerana kita hanya akan menambah prompt untuk ejen deklaratif kita dalam lab ini. Lab seterusnya dalam pelajaran akan datang akan merangkumi sumber pengetahuan.

      ![Tiada laman web atau sumber pengetahuan ditambah](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.ms.png)

1. Kita kemudian akan melihat respons daripada Copilot bahawa kita kini telah selesai mengkonfigurasi ejen kita menggunakan pengalaman penciptaan perbualan Copilot. Walau bagaimanapun mari kita perhalusi lagi dengan menggariskan bahawa ia harus ringkas dan informatif dengan poin-poin, menggunakan empati dalam komunikasi, dan meminta maklum balas selepas memberikan penyelesaian.

    ```text
    Concise and Informative:
    - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
    - Summarize: Provide a brief summary of the solution at the end of the explanation.
   
    User-Friendly Communication:
    - Empathy: Show empathy and understanding of the user's frustration or confusion.
    - Encouragement: Encourage users by acknowledging their efforts and progress.
   
    Interactive and Engaging:
    - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
    ```

      ![Kemas kini arahan ejen](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.ms.png)

1. Copilot mengesahkan arahan telah dikemas kini. Klik **Buat** untuk menyediakan ejen deklaratif untuk Microsoft 365 Copilot.

      ![Buat ejen](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.ms.png)

    !!! warning "Peringatan: Soalan Copilot mungkin berbeza antara sesi"

        Pengalaman penciptaan perbualan Copilot boleh berbeza setiap kali di mana soalan yang diberikan untuk panduan mungkin sedikit berbeza daripada sebelumnya.

1. Setelah ejen telah disediakan, anda akan melihat butiran ejen yang mengandungi penerangan dan arahan yang ditentukan semasa pengalaman penciptaan perbualan Copilot.
![Maklumat Ejen](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.ms.png)

Skrol ke bawah panel dan anda juga akan melihat keupayaan untuk menambah pengetahuan, mengaktifkan carian web (melalui Bing), arahan permulaan dan maklumat penerbitan ejen deklaratif untuk Microsoft 365 Copilot. Arahan permulaan juga akan dipaparkan di panel ujian di sebelah kanan. Pengguna boleh memilih arahan permulaan ini untuk mula berinteraksi dengan ejen.

![Arahan yang disyorkan](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.ms.png)

1. Dalam bahagian Maklumat ejen, anda juga boleh menukar ikon ejen. Pilih **Edit**.

![Edit maklumat](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.ms.png)

Di sini anda boleh menukar ikon dan warna latar belakang. Pilih **Save** dan kemudian pilih **Save** sekali lagi untuk mengemas kini maklumat ejen.

![Tukar ikon](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.ms.png)

1. Mari kita lakukan ujian pantas terhadap ejen yang telah kita cipta. Pilih salah satu **Arahan Permulaan** di panel ujian di sebelah kanan.

![Uji arahan permulaan](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.ms.png)

1. Ejen kita kemudian akan memberikan respons. Perhatikan bagaimana ia mematuhi arahan dengan memberikan poin-poin penting dalam bahagian yang mudah difahami, dan menggunakan empati dalam responsnya.

Jika anda skrol ke bawah mesej, perhatikan bagaimana ia juga meminta maklum balas selepas memberikan penyelesaian seperti yang diarahkan.

![Respons daripada ujian](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.ms.png)

Dalam beberapa minit sahaja, anda telah menambah ejen deklaratif untuk Microsoft 365 Copilot dalam Copilot Studio 🙌🏻

Seterusnya kita akan belajar bagaimana menambah alat kepada ejen kita, kita akan mencipta arahan.

### 3.2 Cipta dan tambah arahan untuk ejen deklaratif anda

1. Skrol ke bawah ke bahagian **Tools** dan pilih **+ Add tool**

![Tambah alat](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.ms.png)

1. Mod alat akan muncul dan senarai penyambung Power Platform dipaparkan. Untuk menambah Arahan, pilih **+ New tool**.

![Alat baru](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.ms.png)

1. Senarai alat lain dipaparkan - Arahan, Penyambung tersuai, REST API dan Model Context Protocol. Jika organisasi anda memenuhi [keperluan Penggunaan Komputer](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), ini juga akan muncul dalam senarai. Pilih **Prompt**.

![Pilih arahan](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.ms.png)

1. Masukkan nama untuk arahan. Mari namakan arahan kita `IT Expert`.

![Masukkan nama](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.ms.png)

1. Pilih **ikon chevron** di sebelah **Model** untuk melihat model chat yang boleh anda pilih. Secara lalai, model **Basic GPT-4.1 mini** dipilih dan anda juga mempunyai pilihan untuk menggunakan model anda sendiri melalui Azure AI Foundry Models. Kita akan kekal dengan model lalai yang dipilih.

![Tukar model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.ms.png)

1. Seterusnya, kita akan memberikan arahan kepada arahan kita. Terdapat 3 kaedah yang boleh anda pilih:

   - Gunakan Copilot untuk menjana arahan berdasarkan penerangan tentang apa yang anda mahu arahan lakukan.
   - Gunakan templat pratetap dari perpustakaan arahan untuk mencipta arahan.
   - Masukkan arahan anda sendiri secara manual.

1. Mari kita cuba menggunakan Copilot untuk menjana arahan berdasarkan penerangan yang dimasukkan. Masukkan perkara berikut ke dalam medan Copilot dan hantar.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Mulakan dengan Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.ms.png)

1. Copilot kemudian akan mula menjana arahan untuk kita.

![Copilot menjana arahan](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.ms.png)

1. Arahan draf yang dijana oleh Copilot kemudian akan muncul.

![Arahan draf yang dijana oleh Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.ms.png)

1. Skrol ke bawah arahan dan anda akan melihat parameter input pengguna yang telah ditentukan oleh Copilot. Anda kemudian mempunyai pilihan untuk:
   - Menyimpan arahan draf yang dijana.
   - Menyegarkan arahan draf menggunakan Copilot.
   - Mengosongkan arahan draf.

   Kosongkan arahan draf dengan memilih ikon **tong sampah** dan kita akan cuba perpustakaan arahan seterusnya.

![Arahan arahan](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.ms.png)

1. Pilih pautan **templat arahan**.

![Pilih templat arahan](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.ms.png)

1. Anda akan melihat senarai templat arahan untuk dipilih. Ini adalah dari [Perpustakaan Arahan Power Platform](https://aka.ms/power-prompts).

![Perpustakaan arahan](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.ms.png)

1. Cari arahan `IT expert` dan pilihnya.

![Pilih arahan IT expert](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.ms.png)

1. Arahan kemudian akan ditambah sebagai arahan dengan parameter input seperti yang ditentukan oleh templat arahan. Sama seperti pendekatan yang kita ambil semasa memberikan arahan kepada ejen kita semasa pengalaman penciptaan perbualan dengan Copilot, templat arahan ini menggariskan:
   - tugas,
   - jenis pertanyaan yang boleh ditangani,
   - dan format respons serta matlamat arahan.

![Arahan arahan](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.ms.png)

1. Kosongkan arahan dan kita akan cuba memasukkan arahan secara manual. Kita akan menggunakan [Arahan IT Expert](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) dari [Perpustakaan Arahan Power Platform](https://aka.ms/power-prompts). Salin dan tampal arahan.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Arahan arahan](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.ms.png)

1. Seterusnya, kita boleh menentukan parameter input pengguna untuk arahan kita. Ini boleh berupa teks dan imej, serta data sampel untuk diuji. Terdapat juga keupayaan untuk menghubungkan arahan dengan pengetahuan dari jadual Dataverse. Untuk latihan ini, kita hanya mempunyai satu input pengguna untuk ditentukan iaitu input masalah. Ini kini adalah pemegang tempat dalam arahan kita sebagai `[Problem]`. Kita akan mengkonfigurasi input ini dengan memasukkan aksara `/` atau memilih **+Add content** dan kemudian pilih **Text**.

![Input teks](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.ms.png)

1. Kita kini boleh memasukkan nama untuk parameter input kita dan data sampel.

   Masukkan perkara berikut sebagai nama:

    ```text
    problem input
    ```

   Masukkan perkara berikut sebagai data sampel:

    ```text
    My laptop gets an error with a blue screen
    ```

   Kemudian pilih **Close**.

![Konfigurasi input masalah](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.ms.png)

1. Parameter input masalah kini akan ditambah kepada arahan dengan data sampel yang dikonfigurasi. Kita kini boleh menguji arahan kita!

![Input masalah ditambah](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.ms.png)

1. Pilih **Test** untuk menguji arahan.

![Arahan ujian](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.ms.png)

1. Respons kemudian akan dipaparkan. Perhatikan bagaimana respons memberikan tajuk dengan poin-poin penting seperti yang diarahkan. Skrol ke bawah dan semak baki respons model.

![Respons model](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.ms.png)

1. Sebelum kita menyimpan arahan kita, mari kita belajar tentang tetapan yang boleh dikonfigurasi untuk arahan ini. Pilih ikon **ellipsis (...)**.

![Tetapan arahan](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.ms.png)

1. Di sini kita akan melihat tiga tetapan yang boleh dikonfigurasi.

   - **Temperature**: Suhu yang lebih rendah menghasilkan hasil yang boleh diramal, manakala suhu yang lebih tinggi membolehkan respons yang lebih pelbagai atau kreatif.
   - **Record retrieval**: Tentukan bilangan rekod yang diambil untuk sumber pengetahuan anda.
   - **Include links in the response**: Apabila dipilih, respons termasuk pautan sitasi untuk rekod yang diambil.

   Pilih ikon **X** untuk keluar dari Tetapan.

![Konfigurasi tetapan](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.ms.png)

1. Pilih **Save** untuk menyimpan arahan.

![Simpan arahan](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.ms.png)

1. Seterusnya, pilih **Add to agent** untuk menambah arahan kepada ejen deklaratif kita.

![Arahan arahan](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.ms.png)

1. Arahan kini akan muncul di bawah Tools 🙌🏻

![Arahan ditambah](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.ms.png)

Kita akan mengemas kini arahan kita untuk memanggil arahan dan menguji ejen deklaratif kita.

### 3.3 Kemas kini arahan dan uji ejen deklaratif anda

1. Skrol ke atas ke bahagian **Details** dan pilih **Edit**. Ini akan membolehkan medan diedit.

![Pilih Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.ms.png)

1. Kita kini boleh mengemas kini arahan kita untuk memanggil arahan dengan merujuk kepada nama arahan. Kosongkan arahan, kemudian salin dan tampal perkara berikut.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

   Perhatikan bagaimana ayat terakhir mengarahkan ejen untuk menggunakan soalan yang ditanya oleh pengguna sebagai nilai untuk parameter input masalah. Ejen akan menggunakan soalan sebagai input masalah untuk arahan. Seterusnya, pilih **Save**.

![Kemas kini arahan untuk memanggil arahan](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.ms.png)

1. Kita kini bersedia untuk menguji arahan yang dikemas kini untuk ejen deklaratif kita. Pilih ikon **refresh** di panel ujian.

![Pilih ikon refresh](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.ms.png)

1. Seterusnya, masukkan arahan berikut di bawah dan hantar.

```text
Bolehkah anda membantu saya, komputer riba saya mengalami skrin biru
```

![Lakukan ujian](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.ms.png)

1. Ejen memanggil arahan dan memberikan respons.

![Arahan arahan](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.ms.png)

Mari kita terbitkan ejen deklaratif kita 😃

### 3.4 Terbitkan ejen deklaratif anda ke Microsoft 365 Copilot dan Microsoft Teams

1. Pilih **Publish**.

![Terbitkan ejen](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.ms.png)

1. Mod akan muncul yang memaparkan Saluran dan maklumat penerbitan yang boleh dikemas kini.

   - Saluran: Ejen akan diterbitkan ke Microsoft 365 Copilot dan Microsoft Teams.
   - Maklumat aplikasi ejen: Ini adalah apa yang akan dipaparkan apabila pengguna menambah ejen ke Microsoft 365 Copilot atau dalam Microsoft Teams. Ini adalah medan yang boleh dikemas kini mengikut keperluan.

![Maklumat aplikasi ejen](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.ms.png)

1. Sebagai contoh, anda boleh mengemas kini **Short description**, **Long description**, **Developer name** dengan nama anda.

!!! tip
Jika anda tidak melihat semua medan dipaparkan pada pelayar anda, cuba kecilkan zoom contohnya 75%

Pilih **Publish**. Copilot Studio kemudian akan mula menerbitkan ejen.

![Menerbitkan ejen](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.ms.png)

1. Apabila penerbitan selesai, kita akan melihat [Pilihan Ketersediaan](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) untuk ejen.

| Pilihan Ketersediaan | Penerangan |
| ---------- | ---------- |
| Share Link | Salin pautan untuk diedarkan kepada pengguna yang dikongsi untuk membuka ejen dalam Microsoft 365 Copilot |
| Show to my teammates and shared users | Membolehkan anda memberikan akses kepada orang lain untuk mengambil bahagian dalam pengarang ejen, atau kepada kumpulan keselamatan untuk memberikan mereka akses menggunakan ejen dalam Microsoft 365 Chat atau Microsoft Teams. |
| Show to everyone in my org | Hantar kepada pentadbir penyewa untuk ditambah ke katalog organisasi untuk semua pengguna penyewa menambah ejen. Ejen akan muncul di bawah Dibina oleh organisasi anda dalam Microsoft 365 Copilot dan dalam Microsoft Teams |
| Download as a .zip | Muat turun sebagai fail zip untuk dimuat naik sebagai aplikasi tersuai dalam Microsoft Teams |

![Pilihan ketersediaan](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.ms.png)

1. Mari kita lihat perkongsian ejen. Pilih **Show to my teammates and shared users**. Panel akan muncul di mana anda boleh mencari pengguna yang ingin anda kongsi ejen dengan sama ada dengan memasukkan nama mereka, e-mel atau kumpulan keselamatan. Anda boleh menyemak senarai ini pada bila-bila masa untuk mengedit siapa yang mempunyai akses kepada ejen.

   Terdapat juga dua kotak semak:
   - _Send an email invitation to new users_ - pengguna baru akan menerima jemputan e-mel.
   - _Visible Built with Power Platform_ - ejen menjadi tersedia dalam bahagian Dibina dengan Power Platform di kedai aplikasi Teams.
Untuk maklumat lanjut, rujuk kepada [Sambung dan konfigurasikan ejen untuk Teams dan Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Pilih **Cancel** atau ikon **X** untuk keluar dari panel.

![Kongsi ejen](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.ms.png)

1. Pilih **Copy** dan tampal pautan tersebut dalam tab pelayar baru.

![Salin pautan](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.ms.png)

1. Microsoft 365 Copilot akan dimuatkan dan satu modal akan muncul dengan butiran aplikasi ejen. Perhatikan bagaimana nama pembangun, penerangan ringkas dan penerangan panjang dipaparkan. Ini adalah daripada butiran penerbitan yang dikemas kini dalam langkah sebelumnya.

Pilih **Add**.

![Pilihan ketersediaan](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.ms.png)

1. Ejen deklaratif kita akan dimuatkan seterusnya. Kita dapat melihat permulaan prompt untuk dipilih yang membolehkan pengguna mendapatkan bantuan segera dengan cepat.

Pilih salah satu permulaan prompt. Dalam permulaan prompt saya, saya akan memilih prompt **Software Installation Help** yang secara automatik akan mengisi medan mesej Copilot. Hantar soalan kepada Copilot.

![Pilih permulaan prompt](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.ms.png)

1. Pilih **Always allow** untuk memberikan ejen deklaratif anda kebenaran untuk memanggil prompt IT Expert.

![Pilih sentiasa benarkan](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.ms.png)

1. Ejen kemudian akan memanggil prompt **IT Expert** kita dan kita akan melihat respons model yang dikembalikan sebagai mesej dalam ejen deklaratif kita.

![Respons](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.ms.png)

Tatal ke bawah untuk melihat butiran penuh respons.

![Respons](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.ms.png)

1. Tetapi _bagaimana kita tahu_ ejen deklaratif memanggil prompt? 👀 Nah, berikut adalah tip!

!!! tip
    Anda boleh menguji dan menyahpepijat ejen dalam Microsoft 365 Copilot dengan mengaktifkan [mod pembangun](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Masukkan perkara berikut dalam medan mesej Copilot dan hantar.

    ```text
    -developer on
    ```

Mesej pengesahan akan muncul untuk memberitahu anda bahawa mod pembangun kini diaktifkan.

![Mod pembangun diaktifkan](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.ms.png)

1. Hantar soalan berikut untuk memanggil prompt.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Masukkan soalan](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.ms.png)

1. Kita akan melihat respons model daripada prompt **IT Expert** kita sekali lagi dikembalikan sebagai mesej. Tatal ke bawah ke bahagian bawah mesej dan kad dengan maklumat penyahpepijatan dipaparkan.

Kembangkan **Agent Debug Info** dengan memilihnya.

![Maklumat penyahpepijatan ejen](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.ms.png)

1. Di sini anda akan menemui maklumat tentang metadata ejen yang berlaku semasa runtime.

![Maklumat penyahpepijatan ejen diperluas](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.ms.png)

Dalam kes penggunaan kita, kita akan memberi tumpuan kepada bahagian _Actions_

- **Matched actions** menonjolkan status semasa fungsi yang ditemui semasa carian aplikasi.
- **Selected actions** menonjolkan status semasa fungsi yang dipilih untuk dijalankan berdasarkan proses membuat keputusan aplikasi.

![Maklumat penyahpepijatan ejen diperluas](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.ms.png)

Jadi di sini kita dapat melihat pengatur ejen memilih untuk memanggil prompt IT Expert mengikut arahan ejen deklaratif kita. Ini dijelaskan lebih lanjut dalam bahagian _Executed Actions_ yang juga memberitahu kita bahawa ia berjaya memanggil prompt.

![Semak maklumat penyahpepijatan ejen](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.ms.png)

1. Untuk mematikan mod pembangun, masukkan perkara berikut dalam medan mesej Copilot dan hantar.

    ```text
    -developer off
    ```

Mesej pengesahan akan muncul untuk memberitahu anda bahawa mod pembangun telah dilumpuhkan. Hebat, sekarang anda tahu cara mengesahkan sama ada ejen deklaratif anda dalam Microsoft 365 Copilot memanggil prompt anda 🌞

![Mod pembangun dilumpuhkan](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.ms.png)

1. Kita sekarang akan menguji ejen kita dalam Microsoft Teams. Navigasi ke **Apps** menggunakan menu di sebelah kiri dan pilih **Teams** di bawah bahagian _Apps_.

![Pilih Teams dalam Apps](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.ms.png)

1. Microsoft Teams kemudian akan dimuatkan dalam tab pelayar baru dan kita akan disajikan dengan terma penggunaan untuk Microsoft 365 Copilot, pilih **Agree**.

![Pilih Agree](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.ms.png)

1. Microsoft 365 Copilot kemudian akan dimuatkan secara lalai, dengan panel di sebelah kanan menyenaraikan semua ejen yang tersedia, termasuk ejen deklaratif **Contoso Tech Support Pro**.

![Microsoft 365 Copilot dalam Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.ms.png)

1. Pilih **ikon elipsis (...)** pada menu di sebelah kiri. Sama ada cari **Contoso Tech Support Pro** dalam medan carian atau jika anda melihat ejen tersebut, pilihlah.

Anda juga boleh klik kanan pada tetikus anda untuk **Pin** ejen tersebut bagi akses cepat pada menu di sebelah kiri dalam Microsoft Teams.

![Pilih dan pin ejen](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.ms.png)

1. Kita kemudian akan melihat ejen kita dimuatkan. 1. Mari kita uji ejen kita. Masukkan prompt berikut dan hantar.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Pin ejen](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.ms.png)

1. Respons model daripada prompt kita kemudian akan dipaparkan.

![Respons dalam Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.ms.png)

Dalam beberapa minit, anda telah belajar cara menerbitkan ejen deklaratif anda dan mengujinya dalam Microsoft 365 Copilot dan Microsoft Teams 😊

## ✅ Misi Selesai

Tahniah! 👏🏻 Anda telah membina ejen deklaratif dalam Copilot Studio di mana anda menambah Prompt, mengarahkan ejen untuk menggunakan Prompt dan cara menguji + menerbitkan ejen anda ke Microsoft 365 Copilot dan Microsoft Teams.

Ejen anda kini bersedia untuk berkhidmat, menyelesaikan masalah, dan membantu pengguna dalaman bila-bila masa diperlukan.

Ini adalah penghujung **Lab 03 - Membina ejen deklaratif dalam Microsoft Copilot Studio untuk Microsoft 365 Copilot**, pilih pautan di bawah untuk bergerak ke pelajaran seterusnya.

⏭️ [Bergerak ke pelajaran **Mencipta Penyelesaian Baru**](../04-creating-a-solution/README.md)

Sehingga kita bertemu lagi, teruskan menjadi hebat. Masa depan kerja perusahaan bergantung kepada ejen—dan sekarang anda tahu cara membinanya.

## 📚 Sumber Taktikal

🔗 [Membina ejen deklaratif dalam Microsoft Copilot Studio untuk Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Tambah prompt](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Kongsi ejen dengan pengguna lain](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Membina prompt untuk ejen anda](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.