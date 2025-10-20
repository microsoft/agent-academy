<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-20T00:31:25+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "ms"
}
-->
# 🧰 Misi 05: Menggunakan Ejen Sedia Ada  

## 🕵️‍♂️ NAMA KOD: `OPERASI PERJALANAN SELAMAT`

> **⏱️ Tempoh Operasi:** `~30 minit`

🎥 **Tonton Panduan**

[![Imej kecil video ejen sedia ada](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.ms.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Tonton panduan di YouTube")

## 🎯 Ringkasan Misi

Selamat datang ke misi seterusnya di Akademi Ejen Copilot Studio. Anda akan meneroka dunia **ejen sedia ada**—ejen pintar yang direka oleh Microsoft untuk mempercepatkan pelaksanaan dan mengurangkan masa untuk mencapai nilai.

Daripada membina dari awal, ejen sedia ada (juga dikenali sebagai **templat ejen**) memberikan anda permulaan dengan menyediakan senario siap guna yang boleh disesuaikan dan dilaksanakan dalam beberapa minit.

Dalam misi ini, anda akan melaksanakan ejen **Perjalanan Selamat**—ejen yang membantu pengguna anda bersedia untuk perjalanan perniagaan, memahami polisi syarikat, dan mempermudah perancangan.

---

## 🧭 Objektif

Matlamat anda untuk misi ini adalah:

1. Memahami apa itu ejen sedia ada dan mengapa ia penting  
1. Melaksanakan templat ejen **Perjalanan Selamat**  
1. Menyesuaikan respons dan kandungan ejen  
1. Menguji dan menerbitkan ejen  

---

## 🧠 Apa Itu Ejen Sedia Ada?

Ejen sedia ada adalah ejen AI siap guna yang dicipta oleh Microsoft yang:

- Menyelesaikan keperluan perniagaan biasa (seperti perjalanan, HR, sokongan IT)
- Termasuk topik, frasa pencetus, arahan, dan pengetahuan contoh yang berfungsi sepenuhnya.
- Boleh disunting, diperluas, dan disesuaikan dengan data anda sendiri

Ejen-ejen ini sangat sesuai untuk memulakan dengan cepat atau mempelajari bagaimana struktur ejen.

---

## 🧪 Makmal 05: Memulakan dengan cepat menggunakan ejen sedia ada

Sekarang kita akan belajar bagaimana memilih ejen sedia ada dan menyesuaikannya.

- [5.1 Lancarkan Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Pilih Templat Ejen Perjalanan Selamat](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Sesuaikan Ejen](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Uji dan Terbitkan](../../../../../docs/recruit/05-using-prebuilt-agents)

Kita akan menggunakan contoh dari sebelumnya, di mana kita akan mencipta penyelesaian dalam persekitaran Copilot Studio yang khusus untuk membina ejen meja bantuan IT kita.

Mari kita mulakan!

### 5.1 Lancarkan Copilot Studio

1. Navigasi ke [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Log masuk menggunakan akaun kerja atau sekolah Microsoft 365 anda

!!! warning
    Anda mesti berada dalam penyewa di mana Copilot Studio diaktifkan. Jika anda tidak melihat Copilot Studio, sila kembali ke [Misi 00](../00-course-setup/README.md) untuk melengkapkan persediaan anda.

### 5.2 Pilih Templat Ejen Perjalanan Selamat

1. Dari laman utama Copilot Studio, klik **+ Create**
    ![Cipta ejen](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.ms.png)

1. Skrol ke bawah ke bahagian **Start with an agent template**

1. Cari dan pilih **Safe Travels**

    ![Pilih templat perjalanan selamat](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.ms.png)

1. Perhatikan bahawa templat ini telah dimuatkan dengan penerangan, arahan, dan pengetahuan.

    ![Semak templat](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.ms.png)

1. Klik **Create**

    ![Cipta ejen](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.ms.png)

Ini akan mencipta ejen baru dalam persekitaran anda berdasarkan konfigurasi Perjalanan Selamat.

### 5.3 Sesuaikan Ejen

Sekarang ejen telah dicipta, mari kita sesuaikannya untuk organisasi anda:

1. Pilih **Enabled generative AI** untuk mengaktifkan ciri AI generatif supaya ia boleh menggunakan arahan yang disediakan dalam templat.

    ![Aktifkan Jawapan Generatif](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.ms.png)

1. Sekarang kita akan melengkapkan ejen dengan sumber pengetahuan tambahan supaya ia boleh menjawab soalan tentang perjalanan ke Eropah. Untuk melakukannya, skrol ke bahagian **knowledge** dan pilih **Add knowledge**

    ![Tambah Pengetahuan](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.ms.png)

1. Pilih **Public websites**

    ![Tambah laman web awam](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.ms.png)

1. Dalam input teks, tampal **<https://european-union.europa.eu/>** dan pilih **Add**

    ![Tambah laman web](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.ms.png)

1. Pilih **Add to agent**

    ![Tambah kepada Ejen](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.ms.png)

### 5.4 Uji dan Terbitkan

1. Klik **Test** di bahagian atas kanan untuk melancarkan tetingkap ujian  

1. Cuba frasa seperti:

    - `“Adakah saya memerlukan visa untuk perjalanan dari AS ke Amsterdam?”`
    - `“Berapa lama masa yang diperlukan untuk mendapatkan Pasport AS?”`
    - `“Di mana kedutaan AS terdekat di Valencia, Sepanyol?”`

1. Sahkan ejen memberikan respons yang tepat dan berguna serta perhatikan Peta Aktiviti untuk melihat dari mana ia mendapatkan maklumat.

    ![Tambah kepada Ejen](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.ms.png)

1. Apabila bersedia, klik **Publish**

    ![Tambah kepada Ejen](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.ms.png)

1. Pilih **Publish** sekali lagi dalam kotak dialog
    ![Tambah kepada Ejen](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.ms.png)

1. Secara pilihan, tambahkan ejen ke Microsoft Teams menggunakan ciri **Channels** yang terbina dalam.

!!! note "🧳 Objektif Bonus"
    Cuba sesuaikan ejen Perjalanan Selamat dengan laman SharePoint atau fail FAQ untuk menjadikannya lebih relevan dengan polisi perjalanan syarikat anda.

## ✅ Misi Selesai

Anda kini telah berjaya:

- Melaksanakan ejen sedia ada Microsoft  
- Menyesuaikan ejen  
- Menguji dan menerbitkan versi anda sendiri daripada templat ejen **Perjalanan Selamat**

⏭️ [Bergerak ke pelajaran **Mencipta ejen tersuai dari awal**](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.