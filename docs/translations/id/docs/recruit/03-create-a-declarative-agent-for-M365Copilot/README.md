<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-17T17:08:07+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "id"
}
-->
# 🚨 Misi 03: Menyebarkan Agen Deklaratif untuk Microsoft 365 Copilot

## 🕵️‍♂️ NAMA KODE: `OPERASI PERLUASAN COPILOT`

> **⏱️ Waktu Operasi:** `~60 menit`

🎥 **Tonton Panduan**

[![Thumbnail video Buat Agen Deklaratif](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.id.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Tonton panduan di YouTube")

## 🎯 Ringkasan Misi

Selamat datang di tugas lapangan pertama Anda, Pembuat Agen. Anda telah dipilih untuk merancang, melengkapi, dan menyebarkan Agen Deklaratif—seorang operatif khusus yang terintegrasi langsung ke dalam Microsoft 365 Copilot dan Microsoft Teams.

Berbeda dengan agen tradisional, agen deklaratif beroperasi dengan misi yang ditentukan (instruksi), alat (prompt/konektor), dan akses strategis ke intelijen internal (sumber pengetahuan seperti SharePoint, Dataverse, dan lainnya). Tugas Anda adalah membangun agen ini menggunakan Microsoft Copilot Studio—pusat kendali tanpa kode di mana keterampilan dan tujuan agen Anda menjadi nyata.

Mari kita mulai.

## 🔎 Tujuan

Dalam misi ini, Anda akan mempelajari:

1. Memahami apa itu agen deklaratif dan bagaimana mereka memperluas Microsoft 365 Copilot dengan kemampuan khusus
1. Membandingkan Microsoft Copilot Studio vs. pembuat agen Copilot Studio untuk membangun agen deklaratif
1. Membuat agen deklaratif menggunakan bahasa alami melalui pengalaman pembuatan percakapan
1. Menambahkan prompt AI sebagai alat untuk meningkatkan pengetahuan khusus dan kemampuan pemecahan masalah agen Anda
1. Menerbitkan dan menguji agen deklaratif Anda di Microsoft 365 Copilot dan Microsoft Teams

## 🕵🏻‍♀️ Apa itu agen deklaratif untuk Microsoft 365 Copilot?

Agen deklaratif adalah versi yang disesuaikan dari Microsoft 365 Copilot. Anda dapat menyesuaikan Microsoft 365 Copilot untuk memenuhi kebutuhan bisnis tertentu dengan memberikannya instruksi untuk mendukung proses tertentu, menghubungkannya dengan pengetahuan perusahaan, dan memanfaatkan alat untuk memperluas fungsionalitas. Hal ini memungkinkan organisasi menciptakan pengalaman yang dipersonalisasi dengan fungsi yang lebih besar untuk pengguna mereka.

## 🤔 Mengapa saya menggunakan Microsoft Copilot Studio untuk membangun agen deklaratif?

Sebagai pembuat, mungkin Anda sudah menjelajahi [pembuat agen Copilot Studio](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) di Microsoft 365 Copilot dan Anda mungkin bertanya-tanya _mengapa membangun agen deklaratif di Microsoft Copilot Studio?_

Microsoft Copilot Studio menawarkan serangkaian alat dan fitur yang komprehensif untuk agen deklaratif yang melampaui batasan pembuat agen Copilot Studio. Mirip dengan pembuat agen Copilot Studio, Anda tidak perlu mengetahui pemrograman atau pengembangan perangkat lunak untuk membangun di Microsoft Copilot Studio. Mari kita uraikan lebih lanjut untuk memahami perbedaan antara pembuat agen Copilot Studio dan Copilot Studio untuk membangun agen deklaratif.

### Perbandingan fitur

Tabel berikut menyoroti perbedaan saat membangun agen deklaratif di pembuat agen Copilot Studio dan Copilot Studio.

| Fitur                   | Pembuat agen Copilot Studio di Microsoft 365 Copilot                          | Perluas Microsoft 365 Copilot di Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Pengetahuan**       | Web, SharePoint, obrolan Microsoft Teams, email Outlook, konektor Copilot     | Pencarian web (melalui Bing), SharePoint, Dataverse, Dynamics 365, konektor Copilot  |
| **Alat**       | Interpreter kode, generator gambar     | 1400+ konektor Power Platform, konektor khusus, prompt, penggunaan komputer, REST API, Model Context Protocol   |
| **Prompt awal**         | Konfigurasikan prompt untuk pengguna agar memulai dengan cepat   | Konfigurasikan prompt untuk pengguna agar memulai dengan cepat  |
| **Saluran**           | Agen hanya diterbitkan ke Microsoft 365 Copilot     | Agen diterbitkan ke Microsoft 365 Copilot dan Microsoft Teams      |
| **Izin berbagi**         | Pengguna hanya sebagai penonton    | Pengguna dapat menjadi editor atau penonton   |

Ada lebih banyak kemampuan yang ditawarkan untuk agen deklaratif yang dibangun di Microsoft Copilot Studio yang akan kita pelajari selanjutnya.

!!! tip
    - Untuk mempelajari lebih lanjut tentang pembuat agen Copilot Studio, kunjungi [Copilot Developer Camp: Lab MAB1 - Bangun agen pertama Anda](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Untuk pengembangan lanjutan memperluas agen deklaratif di luar pembuat agen Copilot Studio untuk Microsoft 365 Copilot, kunjungi [Copilot Developer Camp: Lab MAB1 - Bangun agen pertama Anda](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Memperluas Microsoft 365 Copilot dengan agen deklaratif yang dibangun di Copilot Studio

Mari kita perluas apa yang telah kita pelajari dari tabel perbandingan fitur.

#### Kustomisasi

- **Instruksi Terperinci**: Anda dapat memberikan instruksi dan kemampuan terperinci untuk mendefinisikan tujuan dan perilaku agen dengan tepat.
  - Ini termasuk memanggil alat hanya dengan menggunakan bahasa alami.

- **Akses Pengetahuan Perusahaan**: Memungkinkan akses ke pengetahuan perusahaan yang menghormati izin pengguna.
  - Integrasi SharePoint
  - Integrasi Dataverse
  - Integrasi Dynamics 365
  - Konektor Microsoft 365 Copilot yang diaktifkan oleh administrator organisasi Anda

   ![Kustomisasi](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.id.png)

#### Kemampuan Lanjutan

- **Integrasi dengan Layanan Eksternal**: Memungkinkan Anda memilih dari 1400+ konektor Power Platform yang terintegrasi dengan layanan eksternal, memberikan fungsionalitas yang lebih kompleks dan kuat.
  - Contohnya termasuk [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) dan lainnya
  - Sebagai alternatif, Anda juga dapat memanfaatkan server Model Context Protocol dan REST API langsung dalam agen deklaratif Anda

- **Prompt AI**: Gunakan prompt untuk menganalisis dan mengubah teks, dokumen, gambar, dan data dengan bahasa alami dan penalaran AI.
  - Pilih model obrolan, pilih dari Basic (Default), Standard, Premium
  - Opsi untuk membawa model Azure AI Foundry Anda sendiri untuk mendukung prompt Anda

- **Opsi konfigurasi penyebaran lebih banyak**: Pilih saluran dan tentukan izin pengguna.
  - Terbitkan ke Microsoft Teams, antarmuka pengguna yang sudah dikenal untuk pengguna Anda agar adopsi lebih cepat
  - Izin pengeditan pengguna dapat dibagikan untuk mencegah ketergantungan pada satu pemilik agen

   ![Kemampuan Lanjutan](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.id.png)

Singkatnya, agen deklaratif di Microsoft Copilot Studio memungkinkan kustomisasi Microsoft 365 Copilot untuk memenuhi kebutuhan bisnis melalui integrasi sistem pengetahuan perusahaan, alat untuk terhubung ke layanan eksternal atau model GPT AI.

## 🧪 Lab 03: Bangun agen deklaratif di Microsoft Copilot Studio untuk Microsoft 365 Copilot

Selanjutnya kita akan belajar bagaimana membangun agen deklaratif untuk kasus penggunaan "Business-to-Employee" yang akan bertindak sebagai **agen helpdesk IT**.

- [3.1 Buat agen deklaratif](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Buat dan tambahkan prompt untuk agen deklaratif Anda](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Perbarui instruksi dan uji agen deklaratif Anda](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Terbitkan agen deklaratif Anda ke Microsoft 365 Copilot dan Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Lab ini akan menguraikan langkah-langkah untuk menambahkan Prompt sebagai alat. Pelajaran berikutnya akan membahas penambahan sumber pengetahuan dan alat lainnya yang tersedia. Tetap sederhana untuk pembelajaran Anda 😊

### 👩🏻‍💼 Memahami Business-to-Employee (B2E)

Business-to-Employee (B2E) mengacu pada interaksi dan layanan yang diberikan bisnis langsung kepada karyawannya. Dalam konteks agen, ini berarti menggunakan kemampuan canggih Copilot Studio untuk mendukung dan meningkatkan pengalaman kerja karyawan dalam organisasi.

### ✨ Skenario kasus penggunaan

**Sebagai** karyawan

**Saya ingin** mendapatkan bantuan cepat dan akurat dari agen helpdesk IT untuk masalah seperti masalah perangkat, pemecahan masalah jaringan, pengaturan printer

**Sehingga saya dapat** tetap produktif dan menyelesaikan masalah teknis tanpa penundaan

Mari kita mulai!

### Prasyarat

- Pembuat harus memiliki izin untuk membuat dan memiliki akses ke lingkungan Copilot Studio.

!!! note "Catatan lisensi"
    Lab ini akan menguraikan langkah-langkah untuk menambahkan Prompt sebagai alat. Pelajaran berikutnya akan membahas penambahan sumber pengetahuan dan alat lainnya yang tersedia. Tetap sederhana untuk pembelajaran Anda 😊
  
    Anda tidak memerlukan lisensi pengguna Microsoft 365 Copilot untuk menerbitkan agen deklaratif Anda yang dibangun di Copilot Studio ke Microsoft 365 Copilot. Namun **pengguna** dari _agen deklaratif yang diterbitkan_ di Microsoft 365 Copilot memerlukan lisensi pengguna Microsoft 365 Copilot.

### 3.1 Buat agen deklaratif

!!! warning "Pertanyaan Copilot dapat berbeda di setiap sesi"

    Pengalaman pembuatan percakapan Copilot dapat bervariasi setiap kali di mana pertanyaan yang diberikan untuk panduan mungkin sedikit berbeda dari sebelumnya.

1. Navigasikan ke [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) dan masuk menggunakan kredensial Anda. Pastikan untuk beralih ke lingkungan yang Anda gunakan untuk lab ini.

1. Pilih **Agen** dari menu dan pilih **Copilot untuk Microsoft 365**.

       ![Copilot untuk Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.id.png)

1. Selanjutnya, kita akan membuat agen deklaratif dengan memilih **+ Tambahkan** agen.

       ![Tambahkan Agen](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.id.png)

1. Kemudian kita akan melihat pengalaman pembuatan percakapan dimuat di mana kita dapat berbicara dalam bahasa alami dengan Copilot untuk menggambarkan agen deklaratif yang ingin kita bangun, dan menggunakan pertanyaan yang diberikan untuk panduan.

       Masukkan deskripsi terperinci yang menguraikan hal berikut,  
       - tugas agen  
       - jenis pertanyaan yang dapat ditangani  
       - format responsnya  
       - tujuan agen  
    
       ```text
       Anda adalah seorang profesional IT yang sangat terampil dan berpengalaman yang mengkhususkan diri dalam berbagai sistem komputer, jaringan, dan keamanan siber. Anda mampu mendiagnosis dan menyelesaikan masalah teknis, menjelaskan solusi dengan cara yang jelas dan mudah dipahami untuk pengguna dari semua tingkat teknis, dan memberikan panduan tentang praktik terbaik. Anda harus ringkas dan informatif, menggunakan instruksi langkah demi langkah dengan poin-poin saat diperlukan. Tujuan Anda adalah membantu pengguna memahami masalah dan cara menyelesaikannya secara efektif.
       ```
    
       ![Buat Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.id.png)

1. Setelah mengirimkan prompt, pembaruan yang terlihat akan muncul di panel sisi kanan dengan detail dan instruksi agen seperti yang didefinisikan oleh prompt. Selanjutnya Anda akan diminta untuk mengonfirmasi nama agen Anda dan Copilot akan menyarankan nama.

       Masukkan `ya` untuk menerima nama yang disarankan atau masukkan nama lain seperti berikut,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instruksi diperbarui](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.id.png)

    !!! warning "Pengingat: Pertanyaan Copilot dapat berbeda di setiap sesi"

        Pengalaman pembuatan percakapan Copilot dapat bervariasi setiap kali di mana pertanyaan yang diberikan untuk panduan mungkin sedikit berbeda dari sebelumnya.

1. Nama agen sekarang telah diperbarui seperti yang terlihat di panel sisi kanan. Kita sekarang diminta untuk menyempurnakan instruksi untuk agen. Apa yang disarankan Copilot terdengar bagus jadi kita akan memintanya menggunakan saran sendiri. Masukkan yang berikut,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Nama diperbarui](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.id.png)

1. Selanjutnya kita akan ditanya apakah kita ingin menambahkan situs web atau pengetahuan yang dapat diakses publik. Kita akan menjawab `Tidak` karena kita hanya akan menambahkan prompt untuk agen deklaratif kita di lab ini. Lab berikutnya dalam pelajaran mendatang akan membahas sumber pengetahuan.

      ![Tidak ada situs web atau sumber pengetahuan yang ditambahkan](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.id.png)

1. Kemudian kita akan melihat respons dari Copilot bahwa kita telah selesai mengonfigurasi agen kita menggunakan pengalaman pembuatan percakapan Copilot. Namun mari kita menyempurnakannya lebih lanjut dengan menguraikan bahwa ia harus ringkas dan informatif dengan poin-poin, menggunakan empati dalam komunikasi, dan meminta umpan balik setelah memberikan solusi.

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

      ![Perbarui instruksi agen](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.id.png)

1. Copilot mengonfirmasi bahwa instruksi telah diperbarui. Klik **Buat** untuk menyediakan agen deklaratif untuk Microsoft 365 Copilot.

      ![Buat agen](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.id.png)

    !!! warning "Pengingat: Pertanyaan Copilot dapat berbeda di setiap sesi"

        Pengalaman pembuatan percakapan Copilot dapat bervariasi setiap kali di mana pertanyaan yang diberikan untuk panduan mungkin sedikit berbeda dari sebelumnya.

1. Setelah agen telah disediakan, Anda akan melihat detail agen yang berisi deskripsi dan instruksi yang didefinisikan selama pengalaman pembuatan percakapan Copilot.
![Detail Agen](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.id.png)

Gulir ke bawah panel dan Anda juga akan melihat kemampuan untuk menambahkan pengetahuan, mengaktifkan pencarian web (melalui Bing), prompt awal, dan detail publikasi agen deklaratif untuk Microsoft 365 Copilot. Prompt awal juga akan ditampilkan di panel uji di sisi kanan. Pengguna dapat memilih prompt awal ini untuk mulai berinteraksi dengan agen.

![Prompt yang Disarankan](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.id.png)

1. Di bagian Detail agen, Anda juga memiliki kemampuan untuk mengubah ikon agen. Pilih **Edit**.

![Edit Detail](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.id.png)

Di sini Anda dapat mengubah ikon dan warna latar belakang. Pilih **Save** lalu pilih **Save** lagi untuk memperbarui detail agen.

![Ubah Ikon](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.id.png)

1. Mari kita lakukan uji coba cepat pada agen yang telah kita buat. Pilih salah satu **Prompt Awal** di panel uji di sisi kanan.

![Uji Prompt Awal](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.id.png)

1. Agen kita kemudian akan merespons. Perhatikan bagaimana ia mengikuti instruksi dengan memberikan poin-poin dalam bagian yang mudah dipahami, dan menggunakan empati dalam responsnya.

Jika Anda menggulir ke bagian bawah pesan, perhatikan bagaimana ia juga meminta umpan balik setelah memberikan solusi sesuai instruksi.

![Respons dari Pengujian](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.id.png)

Dalam beberapa menit, Anda telah menambahkan agen deklaratif untuk Microsoft 365 Copilot di Copilot Studio 🙌🏻

Selanjutnya kita akan belajar cara menambahkan alat ke agen kita, kita akan membuat sebuah prompt.

### 3.2 Membuat dan Menambahkan Prompt untuk Agen Deklaratif Anda

1. Gulir ke bawah ke bagian **Tools** dan pilih **+ Add tool**

![Tambahkan Alat](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.id.png)

1. Modal Tools akan muncul dan daftar konektor Power Platform ditampilkan. Untuk menambahkan Prompt, pilih **+ New tool**.

![Alat Baru](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.id.png)

1. Daftar alat lain akan ditampilkan - Prompt, Custom connector, REST API, dan Model Context Protocol. Jika organisasi Anda memenuhi [persyaratan untuk Penggunaan Komputer](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), ini juga akan muncul dalam daftar. Pilih **Prompt**.

![Pilih Prompt](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.id.png)

1. Masukkan nama untuk prompt. Mari kita beri nama prompt kita `IT Expert`.

![Masukkan Nama](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.id.png)

1. Pilih **ikon chevron** di sebelah **Model** untuk melihat berbagai model chat yang dapat Anda pilih. Secara default, model **Basic GPT-4.1 mini** dipilih dan Anda juga memiliki opsi untuk menggunakan model Anda sendiri dengan Azure AI Foundry Models. Kita akan tetap menggunakan model default yang dipilih.

![Ubah Model](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.id.png)

1. Selanjutnya, kita akan memberikan instruksi untuk prompt kita. Ada 3 metode yang dapat Anda pilih:

   - Gunakan Copilot untuk menghasilkan instruksi berdasarkan deskripsi tentang apa yang Anda ingin prompt lakukan.
   - Gunakan template preset dari pustaka prompt untuk membuat prompt.
   - Masukkan instruksi Anda sendiri secara manual.

1. Mari kita coba menggunakan Copilot untuk menghasilkan instruksi berdasarkan deskripsi yang dimasukkan. Masukkan berikut ini ke dalam bidang Copilot dan kirimkan.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Mulai dengan Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.id.png)

1. Copilot kemudian akan mulai menghasilkan prompt untuk kita.

![Copilot Menyusun Prompt](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.id.png)

1. Instruksi draf yang dihasilkan oleh Copilot kemudian akan muncul.

![Instruksi Draf yang Dihasilkan oleh Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.id.png)

1. Gulir ke bagian bawah instruksi dan Anda akan melihat parameter input pengguna yang sudah didefinisikan oleh Copilot. Anda kemudian memiliki opsi untuk:
   - Menyimpan instruksi draf yang dihasilkan.
   - Menyegarkan instruksi draf menggunakan Copilot.
   - Menghapus instruksi draf.

Hapus instruksi draf dengan memilih ikon **tempat sampah** dan kita akan mencoba pustaka prompt berikutnya.

![Instruksi Prompt](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.id.png)

1. Pilih tautan **template prompt**.

![Pilih Template Prompt](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.id.png)

1. Anda akan melihat daftar template prompt untuk dipilih. Ini berasal dari [Pustaka Prompt Power Platform](https://aka.ms/power-prompts).

![Pustaka Prompt](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.id.png)

1. Cari prompt `IT expert` dan pilih.

![Pilih Prompt IT Expert](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.id.png)

1. Prompt kemudian akan ditambahkan sebagai instruksi dengan parameter input seperti yang didefinisikan oleh template prompt. Mirip dengan pendekatan yang kita gunakan saat memberikan instruksi untuk agen kita selama pengalaman pembuatan percakapan dengan Copilot, template prompt ini merinci:
   - sebuah tugas,
   - jenis pertanyaan yang dapat ditangani,
   - dan format respons serta tujuan dari prompt.

![Instruksi Prompt](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.id.png)

1. Hapus instruksi dan kita akan mencoba memasukkan instruksi secara manual. Kita akan menggunakan [Prompt IT Expert](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) dari [Pustaka Prompt Power Platform](https://aka.ms/power-prompts). Salin dan tempel prompt.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Instruksi Prompt](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.id.png)

1. Selanjutnya, kita dapat mendefinisikan parameter input pengguna untuk prompt kita. Ini bisa berupa teks dan gambar, serta data sampel untuk diuji. Ada juga kemampuan untuk menghubungkan prompt dengan pengetahuan dari tabel Dataverse. Untuk latihan ini, kita hanya memiliki satu input pengguna untuk didefinisikan yaitu input masalah. Ini saat ini adalah placeholder dalam prompt kita sebagai `[Problem]`. Kita akan mengonfigurasi input ini dengan memasukkan karakter `/` atau memilih **+Add content** lalu pilih **Text**.

![Input Teks](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.id.png)

1. Kita sekarang dapat memasukkan nama untuk parameter input kita dan data sampel.

Masukkan berikut ini sebagai nama

    ```text
    problem input
    ```

Masukkan berikut ini sebagai data sampel

    ```text
    My laptop gets an error with a blue screen
    ```

Lalu pilih **Close**.

![Konfigurasi Input Masalah](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.id.png)

1. Parameter input masalah sekarang akan ditambahkan ke instruksi dengan data sampel yang dikonfigurasi. Kita sekarang dapat menguji prompt kita!

![Input Masalah Ditambahkan](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.id.png)

1. Pilih **Test** untuk menguji prompt.

![Instruksi Uji](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.id.png)

1. Respons kemudian akan ditampilkan. Perhatikan bagaimana respons memberikan judul dengan poin-poin sesuai instruksi. Gulir ke bawah dan tinjau sisa respons model.

![Respons Model](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.id.png)

1. Sebelum kita menyimpan prompt kita, mari kita pelajari tentang pengaturan yang dapat dikonfigurasi untuk prompt ini. Pilih ikon **ellipsis (...)**.

![Pengaturan Prompt](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.id.png)

1. Di sini kita akan melihat tiga pengaturan yang dapat dikonfigurasi:

   - **Temperature**: Suhu yang lebih rendah menghasilkan hasil yang dapat diprediksi, sementara suhu yang lebih tinggi memungkinkan respons yang lebih beragam atau kreatif.
   - **Record retrieval**: Tentukan jumlah catatan yang diambil untuk sumber pengetahuan Anda.
   - **Include links in the response**: Ketika dipilih, respons menyertakan kutipan tautan untuk catatan yang diambil.

Pilih ikon **X** untuk keluar dari Pengaturan.

![Konfigurasi Pengaturan](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.id.png)

1. Pilih **Save** untuk menyimpan prompt.

![Simpan Prompt](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.id.png)

1. Selanjutnya, pilih **Add to agent** untuk menambahkan prompt ke agen deklaratif kita.

![Instruksi Prompt](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.id.png)

1. Prompt sekarang akan muncul di bawah Tools 🙌🏻

![Prompt Ditambahkan](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.id.png)

Selanjutnya kita akan memperbarui instruksi kita untuk memanggil prompt dan menguji agen deklaratif kita.

### 3.3 Perbarui Instruksi dan Uji Agen Deklaratif Anda

1. Gulir ke atas ke bagian **Details** dan pilih **Edit**. Ini akan memungkinkan bidang-bidang untuk diedit.

![Pilih Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.id.png)

1. Kita sekarang dapat memperbarui instruksi kita untuk memanggil prompt dengan merujuk pada nama prompt. Hapus instruksi, lalu salin dan tempel berikut ini.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Perhatikan bagaimana kalimat terakhir menginstruksikan agen untuk menggunakan pertanyaan yang diajukan oleh pengguna sebagai nilai untuk parameter input masalah. Agen akan menggunakan pertanyaan sebagai input masalah untuk prompt. Selanjutnya, pilih **Save**.

![Perbarui Instruksi untuk Memanggil Prompt](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.id.png)

1. Kita sekarang siap untuk menguji instruksi yang diperbarui dari agen deklaratif kita. Pilih ikon **refresh** di panel uji.

![Pilih Ikon Refresh](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.id.png)

1. Selanjutnya, masukkan prompt berikut ini dan kirimkan.

```text
Bisakah Anda membantu saya, laptop saya mengalami layar biru
```

![Lakukan Uji](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.id.png)

1. Agen memanggil prompt dan merespons.

![Instruksi Prompt](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.id.png)

Sekarang mari kita publikasikan agen deklaratif kita 😃

### 3.4 Publikasikan Agen Deklaratif Anda ke Microsoft 365 Copilot dan Microsoft Teams

1. Pilih **Publish**.

![Publikasikan Agen](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.id.png)

1. Sebuah modal akan muncul yang menampilkan Saluran dan detail publikasi yang dapat diperbarui.

   - Saluran: Agen akan dipublikasikan ke Microsoft 365 Copilot dan Microsoft Teams.
   - Informasi aplikasi agen: Ini adalah apa yang akan ditampilkan ketika pengguna menambahkan agen ke Microsoft 365 Copilot atau di Microsoft Teams. Ini adalah bidang yang dapat diperbarui sesuai kebutuhan.

![Detail Aplikasi Agen](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.id.png)

1. Sebagai contoh, Anda dapat memperbarui **Deskripsi Singkat**, **Deskripsi Panjang**, **Nama Pengembang** dengan nama Anda.

!!! tip
Jika Anda tidak melihat semua bidang yang ditampilkan di browser Anda, coba perkecil tampilan misalnya menjadi 75%.

Pilih **Publish**. Copilot Studio kemudian akan mulai mempublikasikan agen.

![Memublikasikan Agen](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.id.png)

1. Ketika publikasi selesai, kita akan melihat [Opsi Ketersediaan](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) dari agen.

| Opsi Ketersediaan | Deskripsi |
| ------------------ | ---------- |
| Share Link | Salin tautan untuk mendistribusikannya kepada pengguna yang dibagikan untuk membuka agen di Microsoft 365 Copilot |
| Show to my teammates and shared users | Memungkinkan Anda memberikan akses kepada orang lain untuk berpartisipasi dalam pembuatan agen, atau kepada grup keamanan untuk memberikan mereka akses menggunakan agen di Microsoft 365 Chat atau Microsoft Teams. |
| Show to everyone in my org | Kirimkan ke admin tenant untuk ditambahkan ke katalog organisasi untuk semua pengguna tenant agar dapat menambahkan agen. Agen akan muncul di bawah Dibuat oleh organisasi Anda di Microsoft 365 Copilot dan di Microsoft Teams |
| Download as a .zip | Unduh sebagai file zip untuk diunggah sebagai aplikasi kustom di Microsoft Teams |

![Opsi Ketersediaan](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.id.png)

1. Mari kita lihat cara berbagi agen. Pilih **Show to my teammates and shared users**. Sebuah panel akan muncul di mana Anda dapat mencari pengguna yang ingin Anda bagikan agen dengan mereka, baik dengan memasukkan nama mereka, email, atau grup keamanan. Anda dapat meninjau daftar ini kapan saja untuk mengedit siapa yang memiliki akses ke agen.

Ada juga dua kotak centang:
- _Kirim undangan email kepada pengguna baru_ - pengguna baru akan menerima undangan email.
- _Terlihat Dibuat dengan Power Platform_ - agen menjadi tersedia di bagian Dibuat dengan Power Platform di toko aplikasi Teams.
Untuk detail lebih lanjut, lihat [Hubungkan dan konfigurasikan agen untuk Teams dan Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Pilih **Cancel** atau ikon **X** untuk keluar dari panel.

![Bagikan agen](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.id.png)

1. Pilih **Copy** dan di tab browser baru, tempel tautannya.

![Salin tautan](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.id.png)

1. Microsoft 365 Copilot akan dimuat dan sebuah modal akan muncul dengan detail aplikasi agen. Perhatikan bagaimana nama pengembang, deskripsi singkat, dan deskripsi panjang ditampilkan. Ini berasal dari detail publikasi yang diperbarui pada langkah sebelumnya.

Pilih **Add**.

![Opsi ketersediaan](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.id.png)

1. Agen deklaratif kita akan dimuat berikutnya. Kita dapat melihat prompt awal untuk dipilih yang memungkinkan pengguna mendapatkan bantuan langsung dengan cepat.

Pilih salah satu prompt awal. Dalam prompt awal saya, saya akan memilih prompt **Software Installation Help** yang secara otomatis akan mengisi bidang pesan Copilot. Kirimkan pertanyaan ke Copilot.

![Pilih prompt awal](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.id.png)

1. Pilih **Always allow** untuk memberikan izin kepada agen deklaratif Anda untuk memanggil prompt IT Expert.

![Pilih selalu izinkan](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.id.png)

1. Agen kemudian akan memanggil prompt **IT Expert** kita dan kita akan melihat respons model yang dikembalikan sebagai pesan di agen deklaratif kita.

![Respons](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.id.png)

Gulir ke bawah untuk melihat detail lengkap dari respons tersebut.

![Respons](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.id.png)

1. Tapi _bagaimana kita tahu_ agen deklaratif memanggil prompt? 👀 Nah, berikut adalah sebuah tip!

!!! tip
    Anda dapat menguji dan debug agen di Microsoft 365 Copilot dengan mengaktifkan [mode pengembang](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Masukkan yang berikut ini di bidang pesan Copilot dan kirimkan.

    ```text
    -developer on
    ```

Pesan konfirmasi akan muncul untuk memberi tahu Anda bahwa mode pengembang sekarang diaktifkan.

![Mode pengembang diaktifkan](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.id.png)

1. Kirimkan pertanyaan berikut untuk memanggil prompt.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Masukkan pertanyaan](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.id.png)

1. Kita akan melihat respons model dari prompt **IT Expert** kita lagi yang dikembalikan sebagai pesan. Gulir ke bawah ke bagian bawah pesan dan sebuah kartu dengan informasi debug ditampilkan.

Perluas **Agent Debug Info** dengan memilihnya.

![Info debug agen](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.id.png)

1. Di sini Anda akan menemukan informasi tentang metadata agen yang terjadi saat runtime.

![Info debug agen diperluas](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.id.png)

Dalam kasus penggunaan kita, kita akan fokus pada bagian _Actions_

- **Matched actions** menyoroti status saat ini dari fungsi yang ditemukan selama pencarian aplikasi.
- **Selected actions** menyoroti status saat ini dari fungsi yang dipilih untuk dijalankan berdasarkan proses pengambilan keputusan aplikasi.

![Info debug agen diperluas](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.id.png)

Jadi di sini kita dapat melihat orkestrator agen memilih untuk memanggil prompt IT Expert sesuai dengan instruksi agen deklaratif kita. Hal ini dijelaskan lebih lanjut di bagian _Executed Actions_ yang juga memberi tahu kita bahwa prompt berhasil dipanggil.

![Tinjau info debug agen](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.id.png)

1. Untuk mematikan mode pengembang, masukkan yang berikut ini di bidang pesan Copilot dan kirimkan.

    ```text
    -developer off
    ```

Pesan konfirmasi akan muncul untuk memberi tahu Anda bahwa mode pengembang dinonaktifkan. Keren, sekarang Anda tahu cara memverifikasi apakah agen deklaratif Anda di Microsoft 365 Copilot memanggil prompt Anda 🌞

![Mode pengembang dinonaktifkan](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.id.png)

1. Kita sekarang akan menguji agen kita di Microsoft Teams. Navigasikan ke **Apps** menggunakan menu sisi kiri dan pilih **Teams** di bawah bagian _Apps_.

![Pilih Teams di Apps](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.id.png)

1. Microsoft Teams kemudian akan dimuat di tab browser baru dan kita akan disajikan dengan syarat penggunaan untuk Microsoft 365 Copilot, pilih **Agree**.

![Pilih Agree](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.id.png)

1. Microsoft 365 Copilot kemudian akan dimuat secara default, dengan panel sisi kanan mencantumkan semua agen Anda yang tersedia, termasuk agen deklaratif **Contoso Tech Support Pro**.

![Microsoft 365 Copilot di Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.id.png)

1. Pilih **ikon elipsis (...)** di menu sisi kiri. Cari **Contoso Tech Support Pro** di bidang pencarian atau jika Anda melihat agen tersebut, pilihlah.

Anda juga dapat mengklik kanan pada mouse Anda untuk **Pin** agen tersebut agar mudah diakses di menu sisi kiri di Microsoft Teams.

![Pilih dan pin agen](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.id.png)

1. Kita kemudian akan melihat agen kita dimuat. 1. Selanjutnya, mari kita uji agen kita. Masukkan prompt berikut dan kirimkan.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Pin agen](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.id.png)

1. Respons model dari prompt kita kemudian akan ditampilkan.

![Respons di Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.id.png)

Dalam beberapa menit, Anda telah belajar cara mempublikasikan agen deklaratif Anda dan mengujinya di Microsoft 365 Copilot dan Microsoft Teams 😊

## ✅ Misi Selesai

Selamat! 👏🏻 Anda telah membangun agen deklaratif di Copilot Studio di mana Anda menambahkan Prompt, menginstruksikan agen untuk menggunakan Prompt, dan cara menguji + mempublikasikan agen Anda ke Microsoft 365 Copilot dan Microsoft Teams.

Agen Anda sekarang siap bertugas—siap membantu, memecahkan masalah, dan melayani pengguna internal sesuai permintaan.

Ini adalah akhir dari **Lab 03 - Membangun agen deklaratif di Microsoft Copilot Studio untuk Microsoft 365 Copilot**, pilih tautan di bawah untuk melanjutkan ke pelajaran berikutnya.

⏭️ [Lanjut ke pelajaran **Membuat Solusi Baru**](../04-creating-a-solution/README.md)

Sampai jumpa lagi, tetap tajam. Masa depan pekerjaan perusahaan berjalan melalui agen—dan sekarang Anda tahu cara membangunnya.

## 📚 Sumber Daya Taktis

🔗 [Membangun agen deklaratif di Microsoft Copilot Studio untuk Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Menambahkan prompt](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Bagikan agen dengan pengguna lain](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Membangun prompt untuk agen Anda](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.