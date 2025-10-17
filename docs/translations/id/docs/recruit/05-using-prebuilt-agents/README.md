<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-17T17:07:55+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "id"
}
-->
# 🧰 Misi 05: Menggunakan Agen yang Sudah Dibangun  

## 🕵️‍♂️ NAMA KODE: `OPERASI PERJALANAN AMAN`

> **⏱️ Waktu Operasi:** `~30 menit`

🎥 **Tonton Panduan**

[![Thumbnail video agen yang sudah dibangun](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.id.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Tonton panduan di YouTube")

## 🎯 Ringkasan Misi

Selamat datang di misi berikutnya di Copilot Studio Agent Academy. Anda akan menjelajahi dunia **agen yang sudah dibangun**—agen cerdas yang dirancang khusus oleh Microsoft untuk mempercepat penerapan dan mengurangi waktu hingga mendapatkan hasil.

Alih-alih membangun dari awal, agen yang sudah dibangun (juga disebut **template agen**) memberikan Anda awal yang cepat dengan menyediakan skenario siap pakai yang dapat Anda sesuaikan dan terapkan dalam hitungan menit.

Dalam misi ini, Anda akan menerapkan agen **Safe Travels**—agen yang membantu pengguna Anda mempersiapkan perjalanan bisnis, memahami kebijakan perusahaan, dan menyederhanakan perencanaan.

---

## 🧭 Tujuan

Tujuan Anda dalam misi ini adalah:

1. Memahami apa itu agen yang sudah dibangun dan mengapa itu penting  
1. Menerapkan template agen **Safe Travels**  
1. Menyesuaikan respons dan konten agen  
1. Menguji dan menerbitkan agen  

---

## 🧠 Apa Itu Agen yang Sudah Dibangun?

Agen yang sudah dibangun adalah agen AI siap pakai yang dibuat oleh Microsoft yang:

- Menjawab kebutuhan bisnis umum (seperti perjalanan, HR, dukungan IT)
- Termasuk topik yang berfungsi penuh, frasa pemicu, instruksi, dan contoh pengetahuan.
- Dapat diedit, diperluas, dan disesuaikan dengan data Anda sendiri

Agen ini sangat cocok untuk memulai dengan cepat atau mempelajari bagaimana struktur agen dibuat.

---

## 🧪 Lab 05: Memulai dengan cepat menggunakan agen yang sudah dibangun

Sekarang kita akan belajar bagaimana memilih agen yang sudah dibangun dan menyesuaikannya.

- [5.1 Meluncurkan Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Memilih Template Agen Safe Travels](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Menyesuaikan Agen](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Menguji dan Menerbitkan](../../../../../docs/recruit/05-using-prebuilt-agents)

Kita akan tetap menggunakan contoh sebelumnya, di mana kita akan membuat solusi di lingkungan Copilot Studio khusus untuk membangun agen helpdesk IT kita.

Mari kita mulai!

### 5.1 Meluncurkan Copilot Studio

1. Buka [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Masuk dengan akun kerja atau sekolah Microsoft 365 Anda

!!! warning
    Anda harus berada di tenant di mana Copilot Studio diaktifkan. Jika Anda tidak melihat Copilot Studio, kunjungi kembali [Misi 00](../00-course-setup/README.md) untuk menyelesaikan pengaturan Anda.

### 5.2 Memilih Template Agen Safe Travels

1. Dari halaman utama Copilot Studio, klik **+ Create**
    ![Buat agen](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.id.png)

1. Gulir ke bawah ke bagian **Start with an agent template**

1. Temukan dan pilih **Safe Travels**

    ![Pilih template Safe Travels](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.id.png)

1. Perhatikan bahwa template ini sudah dilengkapi dengan deskripsi, instruksi, dan pengetahuan.

    ![Tinjau template](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.id.png)

1. Klik **Create**

    ![Buat agen](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.id.png)

Ini akan membuat agen baru di lingkungan Anda berdasarkan konfigurasi Safe Travels.

### 5.3 Menyesuaikan Agen

Sekarang agen telah dibuat, mari kita sesuaikan dengan organisasi Anda:

1. Pilih **Enabled generative AI** untuk mengaktifkan fitur AI generatif sehingga dapat menggunakan instruksi yang disediakan dalam template.

    ![Aktifkan Jawaban Generatif](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.id.png)

1. Sekarang kita akan melengkapi agen dengan sumber pengetahuan tambahan sehingga dapat menjawab pertanyaan tentang perjalanan di Eropa. Untuk melakukannya, gulir ke bawah ke bagian **knowledge** dan pilih **Add knowledge**

    ![Tambahkan Pengetahuan](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.id.png)

1. Pilih **Public websites**

    ![Tambahkan situs web publik](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.id.png)

1. Di input teks, tempelkan **<https://european-union.europa.eu/>** dan pilih **Add**

    ![Tambahkan situs web](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.id.png)

1. Pilih **Add to agent**

    ![Tambahkan ke Agen](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.id.png)

### 5.4 Menguji dan Menerbitkan

1. Klik **Test** di kanan atas untuk meluncurkan jendela pengujian  

1. Coba frasa seperti:

    - `“Apakah saya memerlukan visa untuk bepergian dari AS ke Amsterdam?”`
    - `“Berapa lama waktu yang dibutuhkan untuk mendapatkan Paspor AS?”`
    - `“Di mana kedutaan AS terdekat di Valencia, Spanyol?”`

1. Pastikan agen merespons dengan informasi yang akurat dan bermanfaat serta amati Peta Aktivitas untuk melihat dari mana informasi tersebut diambil.

    ![Tambahkan ke Agen](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.id.png)

1. Saat siap, klik **Publish**

    ![Tambahkan ke Agen](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.id.png)

1. Pilih **Publish** lagi di kotak dialog
    ![Tambahkan ke Agen](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.id.png)

1. Opsional, tambahkan agen ke Microsoft Teams menggunakan fitur bawaan **Channels**.

!!! note "🧳 Tujuan Bonus"
    Cobalah menghubungkan agen Safe Travels dengan situs SharePoint atau file FAQ untuk membuatnya lebih relevan dengan kebijakan perjalanan perusahaan Anda.

## ✅ Misi Selesai

Anda sekarang telah berhasil:

- Menerapkan agen yang sudah dibangun oleh Microsoft  
- Menyesuaikan agen
- Menguji dan menerbitkan versi Anda sendiri dari template agen **Safe Travels**

⏭️ [Lanjut ke pelajaran **Membuat agen khusus dari awal**](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.