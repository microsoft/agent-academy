<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-17T17:08:56+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "id"
}
-->
# 🚨 Misi 07: Tambahkan topik baru dengan pemicu dan node

## 🕵️‍♂️ NAMA KODE: `OPERASI TETAP PADA TOPIK`

> **⏱️ Jangka Waktu Operasi:** `~60 menit`

🎥 **Tonton Panduan**

[![Thumbnail video pemicu](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.id.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Tonton panduan di YouTube")

## 🎯 Penjelasan Misi

Anda telah membangun agen. Agen tersebut mendengarkan, belajar, dan menjawab pertanyaan - tetapi sekarang saatnya untuk menjadi lebih taktis. Dalam misi ini, Anda akan mendalami cara mengajarkan agen Anda merespons permintaan tertentu dengan presisi.

Dengan Topik dan Pemicu, agen Anda dapat:

- Mengenali maksud

- Mengarahkan percakapan dengan logika

- Mengumpulkan dan menyimpan variabel

- Memicu alur dan mengambil tindakan

Anda tidak hanya membangun dialog, tetapi juga menghubungkan pusat pengambilan keputusan agen Anda. Selamat datang di Neural Nexus.

## 🔎 Tujuan

Dalam misi ini, Anda akan belajar:

1. Memahami apa itu topik dan perannya dalam menciptakan percakapan terstruktur untuk agen Anda
1. Mempelajari anatomi topik termasuk frasa pemicu dan node percakapan
1. Mengeksplorasi berbagai jenis node percakapan dan cara menggunakan Power Fx untuk logika dinamis
1. Membuat topik khusus dari awal untuk menangani permintaan dan tugas pengguna tertentu
1. Membangun topik fungsional yang terhubung ke data SharePoint menggunakan konektor dan alat

## 🤔 Apa itu Topik?

Topik adalah percakapan terstruktur yang membantu agen Anda merespons pertanyaan atau tugas pengguna tertentu. Anggaplah topik sebagai percakapan mini atau tugas yang dapat ditangani oleh agen Anda. Setiap topik dirancang untuk merespons pertanyaan atau permintaan pengguna tertentu.

### 🌌 Tujuan topik

Ada tiga tujuan umum untuk topik berdasarkan kebutuhan pengguna:

**Informasi** - menjawab pertanyaan seperti berikut:

- `Apa itu …?`
- `Kapan …?`
- `Mengapa …?`
- `Bisakah Anda memberi tahu saya …?`

**Penyelesaian tugas** - membantu pengguna _melakukan_ sesuatu:

- `"Saya ingin …"`
- `"Bagaimana cara …?"`
- `"Saya butuh …?"`

**Pemecahan masalah** - menyelesaikan masalah:

- `Ada sesuatu yang tidak berfungsi …`
- `Saya mengalami pesan kesalahan …`
- `Saya melihat sesuatu yang tidak terduga …?`

Anda juga dapat membuat topik untuk pertanyaan ambigu seperti `Saya butuh bantuan`, yang meminta pengguna memberikan lebih banyak detail sebelum melanjutkan.

## 🐦 Mengapa topik berguna?

Topik membantu Anda,

- Mengorganisasi pengetahuan agen Anda.

- Membuat percakapan terasa alami.

- Menyelesaikan masalah pengguna secara efektif.

## 🪺 Jenis topik

1. **Topik sistem** - ini adalah bawaan dan menangani acara umum seperti:
    - Memulai percakapan
    - Mengakhiri percakapan
    - Menangani kesalahan
    - Meminta pengguna untuk masuk
    - Meningkatkan ke agen manusia

1. **Topik khusus** - Anda membuat ini untuk menangani tugas atau pertanyaan tertentu seperti:
    - Permintaan cuti karyawan
    - Permintaan perangkat baru atau pengganti

![Jenis topik](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.id.png)

## 🧬 Anatomi topik

Setiap topik biasanya berisi hal berikut.

### 🗣️ Frasa pemicu

Ini adalah kata atau kalimat yang mungkin diucapkan pengguna untuk memulai topik.

**Contoh:**

Untuk topik permintaan cuti, frasa pemicu bisa berupa

- `Saya ingin mengambil cuti`
- `Permintaan cuti`
- `Ajukan permintaan cuti`
- `Bagaimana cara mengajukan permintaan cuti?`

Untuk topik permintaan perangkat, frasa pemicu bisa berupa

- `Saya butuh perangkat baru`
- `Bisakah saya meminta perangkat?`
- `Bisakah Anda membantu saya dengan permintaan perangkat`

### 💬 Node percakapan

Topik terdiri dari node yang merupakan langkah-langkah yang diikuti agen setelah topik dipicu. Anda menghubungkan langkah-langkah ini untuk membangun alur percakapan yang diikuti agen Anda saat berinteraksi dengan pengguna.

Anggaplah ini sebagai instruksi atau tindakan seperti berikut:

- Menanyakan pertanyaan kepada pengguna
- Mengirim pesan
- Memanggil layanan eksternal seperti sistem manajemen cuti
- Menetapkan atau memeriksa variabel
- Menggunakan kondisi untuk bercabang dalam percakapan
- Mengarahkan ke topik lain

![Node percakapan](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.id.png)

Berikut adalah jenis utama node yang dapat Anda tambahkan ke agen:

#### Kirim pesan

- **Tujuan** - mengirim pesan kepada pengguna.
- **Contoh** - `Terima kasih atas permintaan Anda! Saya akan membantu Anda dengan itu.`

Node ini memungkinkan agen Anda mengirim pesan kepada pengguna, yang bisa berupa teks sederhana atau konten kaya seperti gambar, video, kartu, balasan cepat, dan kartu adaptif.

Anda dapat mempersonalisasi pesan menggunakan variabel, menambahkan beberapa variasi pesan untuk variasi, dan bahkan menyesuaikan output suara untuk saluran yang mendukung suara.

!!! tip
    Anggaplah ini sebagai blok "katakan sesuatu" yang membantu agen Anda berkomunikasi dengan jelas dan interaktif dengan pengguna.

#### Ajukan pertanyaan

- **Tujuan** - menanyakan pertanyaan kepada pengguna dan menunggu jawabannya.
- **Contoh** - `Apa tanggal cuti Anda?`

Node ini digunakan untuk meminta informasi spesifik dari pengguna selama percakapan dan menyimpan jawabannya dalam variabel untuk digunakan nanti.

Anda dapat menyesuaikan jenis pertanyaan seperti input teks atau menggunakan entitas untuk daftar nilai yang ditentukan yang dipilih pengguna, serta menentukan bagaimana agen harus berperilaku jika pengguna memberikan jawaban yang tidak valid atau melewatkan pertanyaan.

Node ini juga mendukung konten kaya seperti gambar dan balasan cepat, serta memungkinkan Anda menyempurnakan pengaturan validasi, pengulangan, dan interupsi untuk membuat alur percakapan berjalan lancar.

!!! tip
    Anggaplah ini sebagai blok "tanya dan dengarkan" yang membantu agen Anda berinteraksi dengan pengguna dengan cara yang terstruktur sesuai definisi Anda.

#### Tanya dengan kartu adaptif

- **Tujuan** - mengirim kartu interaktif yang kaya menggunakan JSON.
- **Contoh** - kartu yang menampilkan pemilih tanggal kalender untuk pengguna memilih tanggal.

Node ini menampilkan kartu interaktif yang kaya yang dapat diisi dan dikirimkan oleh pengguna seperti formulir dengan kotak teks, tombol, dan gambar. Node ini menangkap input pengguna dan menyimpannya dalam variabel, yang dapat digunakan agen Anda nanti dalam percakapan.

!!! tip
    Anggaplah ini sebagai blok "pembangun formulir" yang dapat disesuaikan yang membuat agen Anda lebih menarik dan mampu mengumpulkan informasi rinci dari pengguna.

#### Tambahkan kondisi

- **Tujuan** - menambahkan logika ke percakapan. Node ini memeriksa sesuatu dan memutuskan apa yang harus dilakukan selanjutnya.
- **Contoh** - jika pengguna mengatakan `Ya`, lanjutkan ke langkah berikutnya. Jika `Tidak`, akhiri percakapan.

Node ini menciptakan titik keputusan dalam alur percakapan agen Anda dengan memeriksa apakah variabel memenuhi kriteria tertentu. Berdasarkan apakah kondisi tersebut benar atau salah, agen mengikuti jalur yang berbeda.

!!! tip
    Anggaplah ini sebagai blok "jika-else" yang membantu agen Anda membuat keputusan tergantung pada input pengguna atau data yang disimpan dalam variabel.

#### Manajemen variabel

- **Tujuan** - menyimpan atau menghapus informasi (disebut variabel) selama percakapan.
- **Contoh** - menyimpan tanggal yang dipilih pengguna dalam node Ajukan pertanyaan yang menampilkan kartu adaptif.

Node ini memungkinkan Anda menyimpan dan mengelola informasi selama percakapan, seperti nama pengguna, jawaban, atau preferensi. Anda dapat menggunakan berbagai jenis variabel seperti teks, angka, atau tanggal, dan variabel tersebut dapat bersifat lokal untuk satu topik, dibagikan di seluruh topik (global), atau bahkan diambil dari sistem atau lingkungan.

!!! tip
    Anggaplah ini sebagai "kotak memori" yang membantu agen Anda mengingat informasi dan menggunakannya saat percakapan berlanjut dengan pengguna.

#### Manajemen topik

- **Tujuan** - memindahkan percakapan ke topik lain atau langkah dalam topik, mentransfer percakapan, atau mengakhiri topik atau percakapan.
- **Contoh** - mengarahkan ke topik "Kebijakan Cuti".

Node ini memungkinkan agen Anda melompat dari satu topik ke topik lain tanpa memulai ulang percakapan, mengakhiri topik, mentransfer atau mengakhiri percakapan, atau pergi ke langkah berbeda dalam topik yang sama. Node ini membantu membimbing pengguna melalui berbagai bagian alur percakapan dengan transisi yang lancar antar topik, dan Anda dapat meneruskan variabel di antara mereka untuk menjaga konteks.

!!! tip
    Anggaplah ini sebagai blok "pergi ke bagian/langkah lain" yang membantu agen Anda lebih fleksibel dalam berbicara dengan pengguna.

#### Tambahkan alat

- **Tujuan** - terhubung ke alat seperti konektor, alur agen, prompt, pencarian khusus, kueri pencarian, keterampilan, protokol konteks model.
- **Contoh** - Alur agen dieksekusi setelah pengguna mengirimkan permintaan cuti mereka.

Node ini memberikan kemampuan kepada agen Anda untuk berinteraksi dengan sistem eksternal atau melakukan tugas tertentu, seperti mengirim email, memeriksa cuaca, atau mengakses basis data. Anda dapat menambahkan alat menggunakan konektor bawaan, API khusus, alur agen, prompt, atau terhubung ke server Protokol Konteks Model (MCP), dan bahkan _antarmuka pengguna grafis_ otomatis untuk aplikasi desktop melalui alat penggunaan komputer.

!!! tip
    Anggaplah alat sebagai "blok aksi" yang memberikan kekuatan super kepada agen Anda untuk melakukan hal-hal di luar _mengobrol_, seperti memanggil API, menjalankan proses, atau mengumpulkan input pengguna secara otomatis.

#### Node jawaban generatif

- **Tujuan** - menggunakan model bahasa besar untuk menghasilkan respons alami seperti manusia berdasarkan pertanyaan pengguna dan data yang terhubung.
- **Contoh** - menggunakan sumber pengetahuan yang terhubung yang berisi informasi tentang hak cuti untuk menjawab pertanyaan pengguna mengenai permintaan cuti.

Node ini memungkinkan agen Anda merespons pertanyaan pengguna menggunakan informasi dari berbagai sumber pengetahuan, seperti situs web, dokumen, SharePoint, atau data khusus. Node ini dapat digunakan sebagai cadangan ketika tidak ada topik yang cocok ditemukan, atau dalam topik untuk memberikan jawaban yang lebih rinci dan dinamis berdasarkan sumber spesifik yang telah Anda konfigurasi untuk digunakan oleh agen Anda.

!!! tip
    Anggaplah ini sebagai "blok jawaban pintar" yang membantu agen Anda memberikan respons yang bermanfaat dan akurat dengan mencari konten terpercaya yang Anda tentukan.

#### Node permintaan HTTP

- **Tujuan** - menghubungkan agen Anda ke sistem eksternal dengan mengirimkan panggilan API (misalnya `GET` atau `POST`) untuk mengambil atau memperbarui data.
- **Contoh** - ketika pengguna meminta saldo hari cuti mereka, agen melakukan permintaan `GET` ke sistem manajemen cuti dan mengekstrak `remainingLeaveDays` dari respons API dan membalas pengguna dengan nilai tersebut.

Node ini memungkinkan agen Anda terhubung ke sistem eksternal dengan mengirimkan panggilan REST API, seperti permintaan `GET` atau `POST`. Anda dapat menyesuaikan permintaan dengan header, konten body, dan bahkan menggunakan Power Fx untuk menyertakan data dinamis, lalu menyimpan respons dalam variabel untuk digunakan nanti dalam percakapan.

!!! tip
    Anggaplah ini sebagai "mengambil informasi" yang membantu agen Anda berbicara dengan layanan lain seperti mengambil detail pengguna atau mengirim data ke sistem lain.

#### Kirim acara

- **Tujuan** - memungkinkan agen Anda mengirim tindakan non-pesan, seperti pembaruan sistem atau pemicu alat - ke klien atau saluran, membantu agen melakukan tugas.
- **Contoh** - bereaksi terhadap pengguna yang bergabung dalam obrolan dengan menampilkan pesan selamat datang.

Node ini memungkinkan agen Anda mengirim tindakan non-pesan ke sistem eksternal atau saluran, yang kemudian dapat memutuskan bagaimana merespons. Anda memberikan setiap acara nama dan melampirkan nilai, yang bisa berupa angka atau teks sederhana, variabel, atau rumus Power Fx, dan dikirimkan sebagai objek JSON.

!!! tip
    Anggaplah ini sebagai "pemicu diam" yang membantu agen Anda melakukan hal-hal di belakang layar atau berkomunikasi dengan alat eksternal tanpa memerlukan pengguna untuk mengatakan apa pun.

## 🏋🏻‍♀️ Menggunakan Power Fx dalam node Anda

Di Copilot Studio, Power Fx adalah bahasa pemrograman low-code yang digunakan untuk menambahkan logika dan perilaku dinamis ke agen Anda. Bahasa ini sama dengan yang digunakan di Microsoft Power Apps, dan dirancang agar sederhana dan mirip Excel, sehingga mudah digunakan oleh pengembang maupun non-pengembang.

![Ekspresi Power Fx](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.id.png)

### Apa yang dapat dilakukan Power Fx dalam topik

- Menetapkan dan memanipulasi variabel
      - Contoh: `Set(userName, "Adele Vance")`
- Membuat kondisi
      - Contoh: `If(score > 80, "Lulus", "Gagal")`
- Memformat dan mengubah data
      - Contoh: `Text(DateValue, "dd/mm/yyyy")`

### Mengapa menggunakan Power Fx?

- **Fleksibel:** Anda dapat membangun logika tanpa menulis baris kode penuh.

- **Mudah dipahami:** jika Anda pernah menggunakan rumus Excel, ini terasa sangat mirip.

- **Kuat:** memungkinkan Anda mempersonalisasi percakapan, memvalidasi input, dan mengontrol bagaimana agen Anda berperilaku berdasarkan data pengguna.

## 🏗️ Bagaimana cara membuat dan mengedit topik?

Ada dua cara Anda dapat membuat dan mengedit topik untuk agen Anda.

### 1. Buat dari awal

Ini memungkinkan Anda membangun alur percakapan khusus dari awal, dan Anda dapat menambahkan atau menghapus node sesuai kebutuhan saat mengedit topik Anda.

![Tambahkan topik](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.id.png)

#### Mengapa ini berguna

- Memberikan Anda kendali penuh atas bagaimana agen Anda merespons.
- Anda dapat menyesuaikan logika menggunakan variabel, Power Fx, dan kondisi.
- Sangat cocok untuk membangun pengalaman yang disesuaikan untuk kebutuhan bisnis tertentu.

### 2. Buat dengan Copilot
Ini memungkinkan Anda untuk menjelaskan apa yang Anda inginkan menggunakan bahasa alami, dan Copilot akan membangun percakapan untuk Anda. Hal yang sama berlaku saat mengedit topik Anda, gunakan bahasa alami dan Copilot akan meninjau serta memodifikasi topik untuk Anda.

#### Apa yang didukung oleh Copilot

- Dapat membuat dan mengedit:
      - Node pesan
      - Node pertanyaan
      - Node kondisi
- Tidak mendukung pengaturan lanjutan seperti cara mengingatkan ulang pengguna jika mereka tidak merespons atau cara mengelola gangguan selama pertanyaan. Anda masih dapat menyesuaikan pengaturan tersebut secara manual jika diperlukan.

#### Mengapa ini berguna

- Mempercepat pengembangan dengan bantuan AI.
- Membantu Anda fokus pada logika dan pengalaman pengguna daripada pengaturan yang berulang.
- Mempermudah iterasi dan peningkatan alur percakapan dengan usaha minimal.

#### ✨ Contoh prompt

- **Buat topik**
      - `Terima nama, usia, dan tanggal lahir pengguna lalu ulangi respons mereka kembali kepada mereka`
      - `Kumpulkan alamat jalan, negara bagian, dan kode pos pengguna. Pengguna harus dapat mencoba ulang setiap pertanyaan hingga 4 kali`

- **Edit topik**
      - `Tambahkan pertanyaan yang meminta tanggal lahir pengguna`
      - `Ringkas informasi yang dikumpulkan dalam Adaptive Card.`

## 👩🏻‍🎨 Oke, bagaimana cara saya merancang topik untuk agen saya?

### 🧙🏻‍♂️ Langkah 1 - pahami apa yang dibutuhkan pengguna

Mulailah dengan mengidentifikasi pertanyaan umum atau tugas yang akan ditanyakan pengguna kepada agen Anda. Ini bisa berupa:

- Pertanyaan yang sering ditanyakan pengguna seperti, `apa hak saya untuk cuti sakit?`
- Tugas umum yang ingin diselesaikan pengguna seperti mengirimkan formulir
- Masalah yang sering dihadapi pengguna seperti masalah login

### 📦 Langkah 2 - Kelompokkan skenario

Organisasikan kebutuhan pengguna ke dalam tiga kategori berdasarkan apa yang telah kita pelajari sebelumnya - tujuan dari sebuah topik:

- Informasi - pengguna ingin mengetahui sesuatu
- Penyelesaian tugas - pengguna ingin melakukan sesuatu
- Pemecahan masalah - pengguna membutuhkan bantuan untuk menyelesaikan masalah

### 🗺️ Langkah 3 - Petakan percakapan

Buat sketsa alur percakapan sederhana tentang bagaimana agen harus merespons

- Mulai dengan sapaan atau konfirmasi
- Ajukan pertanyaan lanjutan untuk mendapatkan detail
- Berikan jawaban atau lakukan tindakan

!!! tip
    Jaga percakapan tetap singkat dan fokus. Hanya tanyakan yang diperlukan.

### 🔀 Langkah 4 - Tangani berbagai jenis percakapan

Rancang untuk:

- **Single-turn** - satu pertanyaan, satu jawaban

- **Multi-turn** - percakapan bolak-balik dengan pertanyaan lanjutan

Contoh:

- Pengguna: `Saya ingin mengajukan cuti liburan.`

- Agen: `Tentu! Tanggal berapa Anda ingin memulai cuti Anda?`

- Pengguna: `15 Juli`

- Agen: `Baik. Dan kapan cuti Anda akan berakhir?`

- Pengguna: `22 Juli.`

- Agen: `Terima kasih! Apa alasan cuti Anda?`

- Pengguna: `Liburan keluarga.`

- Agen: `Terima kasih atas detailnya. Saya telah mengajukan permintaan cuti Anda dari 15 Juli hingga 22 Juli untuk liburan keluarga. Anda akan segera mendapatkan konfirmasi.`

### 🤖 Langkah 5 - Gunakan AI untuk pertanyaan tak terduga

Meskipun Anda telah merancang topik untuk permintaan cuti, pengguna mungkin mengajukan pertanyaan yang tidak secara langsung tercakup. Di sinilah fitur AI seperti topik sistem _Conversational boosting_ sangat berguna.

Topik ini mencakup node jawaban generatif, yang memungkinkan agen Anda mulai menggunakan sumber pengetahuan yang terhubung secara langsung. Sumber pengetahuan apa pun yang ditambahkan di tingkat agen secara otomatis disertakan dalam node jawaban generatif dalam topik sistem _Conversational boosting_.

#### Contoh

- Pengguna: `Bisakah saya membawa hari libur yang tidak terpakai ke tahun depan?`

Pertanyaan ini mungkin tidak menjadi bagian dari alur topik yang telah Anda tentukan sebelumnya, terutama jika topik Anda hanya menangani pengajuan permintaan cuti.

#### Bagaimana AI membantu

Jika agen Anda terhubung ke dokumen kebijakan HR perusahaan Anda atau situs internal, AI dapat:

- Mencari kebijakan cuti yang relevan
- Memahami dan merangkum aturan
- Agen merespons dengan: `Menurut kebijakan HR, Anda dapat membawa hari libur yang tidak terpakai ke tahun kalender berikutnya. Untuk detail lebih lanjut, periksa bagian kebijakan cuti di portal HR.`

#### Mengapa ini berguna

- Anda tidak perlu secara manual membuat topik untuk setiap pertanyaan terkait kebijakan.
- AI dapat menarik jawaban yang akurat dari sumber pengetahuan terpercaya.
- Ini meningkatkan pengalaman pengguna dengan membuat agen terasa lebih pintar dan responsif.

### 🔬 Langkah 6 - Uji topik, alur percakapan

Sebelum menerbitkan topik Anda:

- Uji menggunakan pertanyaan nyata atau input sampel nyata.
- Pastikan terdengar alami dan membantu.

!!! tip
    Terapkan perbaikan pada topik Anda sesuai dengan pengujian, seperti menambahkan lebih banyak node atau menghapus node untuk mengarahkan ke topik lain.

### ⚠️ Langkah 7 - Hindari menduplikasi konten situs web

Jangan salin apa yang sudah ada di situs web Anda.

- Fokus pada topik yang sering ditanyakan pengguna.
- Tambahkan topik baru berdasarkan riwayat obrolan atau permintaan dukungan.

### ✨ Contoh alur percakapan

Berikut adalah contoh topik yang menangani permintaan cuti.

#### Langkah 1: Frasa pemicu

Pengguna mengetik,

`Saya ingin mengajukan cuti liburan`

#### Langkah 2: Agen meminta detail menggunakan Adaptive card

Agen bertanya,

`Tentu! Tanggal berapa Anda ingin mengambil cuti?`

Adaptive card memiliki kontrol pemilih kalender untuk tanggal mulai dan tanggal akhir.

#### Langkah 3: Pengguna memberikan tanggal

Pengguna memilih tanggal mulai sebagai 5 Agustus 2025 dan tanggal akhir 10 Agustus 2025, lalu mengirimkan kartu. Nilai tanggal disimpan dalam output dari adaptive card sebagai variabel.

#### Langkah 4: Cloud flow dieksekusi

Cloud flow Power Automate telah dieksekusi yang membuat permintaan baru di sistem manajemen cuti dan mengirim email untuk memberi tahu manajer tentang permintaan cuti.

#### Langkah 5: Kirim pesan konfirmasi kepada pengguna

Agen merespons dengan,

`Permintaan cuti liburan Anda dari 5 Agustus hingga 10 Agustus telah diajukan. Manajer Anda akan meninjau dan segera menghubungi Anda.`

## 🧪 Lab 07 - Tambahkan topik baru dengan node percakapan

Sekarang kita akan belajar cara menambahkan topik baru dengan pemicu dan alat. Lab ini akan mencakup pembuatan topik dari awal sehingga Anda memahami cara menyesuaikan topik sesuai kebutuhan Anda.

- [7.1 Tambahkan topik baru dari awal](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Tentukan input dan output pemicu](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Tambahkan alat menggunakan konektor](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Kasus penggunaan

**Sebagai** karyawan

**Saya ingin** mengetahui perangkat apa yang tersedia

**Agar saya** memiliki daftar perangkat yang tersedia

Mari kita mulai!

### Prasyarat

1. **Daftar SharePoint**

    Kita akan menggunakan daftar SharePoint **Devices** dari [Pelajaran 00 - Penyiapan Kursus - Langkah 3: Buat situs SharePoint baru](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Jika Anda belum menyiapkan daftar SharePoint **Devices**, silakan kembali ke [Pelajaran 00 - Penyiapan Kursus - Langkah 3: Buat situs SharePoint baru](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agen Bantuan Contoso**

    Kita akan menggunakan agen yang sama yang dibuat sebelumnya di [Pelajaran 06 - Buat agen kustom menggunakan bahasa alami dengan Copilot dan menghubungkannya dengan data Anda](../06-create-agent-from-conversation/README.md).

### 7.1 Tambahkan topik baru dari awal

1. Pilih **Tab Topik** di dekat nama agen. Jika Anda tidak melihatnya, pilih **+6** dan Anda akan melihat **Topik** terdaftar.

    ![Pilih Topik](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.id.png)

1. Tab **Topik** akan dimuat dan secara default topik _Custom_ akan ditampilkan. Anda dapat memfilter topik berdasarkan Semua, Custom, dan Sistem. Topik custom dan sistem yang saat ini Anda lihat dibuat secara otomatis saat agen disiapkan.

    Pilih **+ Tambahkan topik** dan pilih **Dari awal**.

    ![Buat topik dari awal](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.id.png)

1. Masukkan nama untuk topik. Salin dan tempel berikut ini.

    ```text
    Available devices
    ```

    ![Nama topik](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.id.png)

1. Masukkan deskripsi pemicu yang menjelaskan apa yang dilakukan topik. Salin dan tempel berikut ini.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Masukkan nama dan deskripsi untuk pemicu](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.id.png)

### 7.2 Tentukan input dan output pemicu

1. Selanjutnya, kita akan menambahkan variabel input baru yang akan digunakan AI generatif dalam orkestrasinya untuk mengekstrak jenis perangkat dari pesan pengguna. Pilih **More ellipsis (...)** di topik dan pilih **Details** untuk melihat panel detail topik.

    ![Pilih Detail Topik](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.id.png)

1. Panel **Detail Topik** sekarang telah dimuat. Pilih tab **Input**.

    ![Tab Input](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.id.png)

1. Pilih **Buat variabel baru**.

    ![Buat variabel input baru](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.id.png)

1. Masukkan nama untuk variabel. Salin dan tempel berikut ini.

    ```text
    VarDeviceType
    ```

    ![Nama variabel input](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.id.png)

1. Kita sekarang perlu menentukan variabel input dan output kita. Berikut adalah properti yang dapat ditentukan untuk input dan output topik.

    | Field    | Value |
    | ---------- | :--------- |
    | Bagaimana agen akan mengisi input ini? | Menentukan bagaimana agen mengisi variabel ini dengan nilai sebelum menjalankan topik. Secara default diatur ke _Dynamically fill with the best option_. Anda juga dapat mengganti input dengan nilai daripada bertanya kepada pengguna |
    | Tipe data variabel  | Tipe data variabel. Tipe data yang didukung adalah `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Nama tampilan   | Nama variabel   |
    | Identifikasi sebagai  | Tipe entitas untuk agen agar menangkap tipe nilai yang benar  |
    | Deskripsi    | Deskripsi membantu agen secara otomatis mengisi input sebelum menjalankan topik atau menghasilkan pertanyaan untuk meminta nilai   |

    Properti _Bagaimana agen akan mengisi input ini?_, _Tipe data variabel_, dan _Nama tampilan_ dapat tetap seperti apa adanya. Perbarui properti **Identifikasi sebagai** menjadi **Respons seluruh pengguna**.

    ![Perbarui Identifikasi sebagai](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.id.png)

1. Salin dan tempel berikut ini sebagai deskripsi.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Deskripsi](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.id.png)

1. Selanjutnya, mari kita tentukan output untuk topik. Pilih tab **Output**.

    ![Pilih tab Output](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.id.png)

1. Pilih **Buat variabel baru**.

    ![Buat variabel output baru](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.id.png)

1. Perbarui properti berikut.

    **Nama variabel** - Salin dan tempel berikut ini.

    ```text
    VarAvailableDevices
    ```

    **Tipe data variabel** - Pilih **Table** sebagai tipe data.

    **Deskripsi variabel** - Salin dan tempel berikut ini.

    ```text
    List of available devices by device type
    ```

    ![Properti output](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.id.png)

1. Kita telah menyelesaikan penentuan input dan output dari topik. Pilih **Ikon X** untuk keluar dari panel **Detail Topik**.

    ![Keluar dari panel detail topik.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.id.png)

### 7.3 Tambahkan alat menggunakan konektor

1. Selanjutnya, mari tambahkan node yang memungkinkan agen untuk mengambil daftar perangkat dari daftar SharePoint **Devices**. Pilih **Ikon +** di bawah pemicu.

    ![Tambahkan alat](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.id.png)

1. Pilih node **Tambahkan alat**, lalu pilih tab **Konektor**. Cari `Get items` dan pilih tindakan konektor SharePoint **Get items**.

    ![Pilih get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.id.png)

1. Koneksi baru perlu dibuat untuk konektor. Pilih ikon **chevron** dan pilih **Buat koneksi baru**.

    ![Tambahkan alat](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.id.png)

1. Dua opsi akan ditampilkan yang memungkinkan Anda terhubung langsung ke SharePoint Online atau ke SharePoint lokal. Secara default opsi **Connect directly (cloud-services)** akan dipilih, yang akan kita gunakan untuk koneksi kita.
Pilih **Create**.

![Pilih Create](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.id.png)

1. Pilih akun pengguna yang sudah masuk.

![Pilih akun pengguna yang sudah masuk](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.id.png)

1. Selanjutnya, Anda perlu mengonfirmasi bahwa akun pengguna Anda dapat digunakan untuk koneksi ke konektor SharePoint. Pilih **Allow access**.

![Pilih allow access](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.id.png)

1. Pilih **Submit** untuk menambahkan tindakan konektor SharePoint **Get items** sebagai node ke topik.

![Submit](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.id.png)

1. Tindakan konektor SharePoint **Get items** sekarang telah ditambahkan ke topik. Kita sekarang dapat mulai mengonfigurasi input dari tindakan tersebut. Pilih **ikon elipsis (...)** dan pilih **Properties**.

![Pilih Properties](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.id.png)

1. Panel konfigurasi **Get items** akan muncul dan secara default, Anda akan melihat tab **Inputs**. Pilih tab **Initiation** dan masukkan deskripsi di bidang **Usage Description**. Salin dan tempel berikut ini.

    ```text
    Retrieves devices from SharePoint list
    ```

> Ini akan berguna saat kita melihat halaman _Manage your connections_ dari agen kita. Kita akan kembali ke ini sebentar lagi.

![Deskripsi Get items](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.id.png)

1. Pilih tab **Inputs** dan pilih situs **Contoso IT** serta daftar **Devices** yang telah Anda siapkan di [Lesson 00 - Course Setup - Step 3: Create new SharePoint site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Konfigurasi input Get items](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.id.png)

1. Sekarang, untuk hanya menampilkan perangkat dari daftar SharePoint berdasarkan
   - nilai yang dipilih,
   - dan hanya perangkat dengan status _Available_,

   kita perlu menerapkan filter. Ini dilakukan dengan memasukkan kueri filter menggunakan Power Fx. Pilih **ikon elipsis (...)**.

![Pilih ikon elipsis](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.id.png)

1. Secara default, Anda akan berada di tab **Custom**. Pilih tab **Formula**.

![Pilih tab Formula](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.id.png)

1. Pilih ikon **expand** untuk memperbesar bidang **Formula**. Salin dan tempel ekspresi Power Fx berikut.

   Kita menggunakan fungsi `Concatenate` untuk membuat ekspresi yang akan memfilter
   - kolom SharePoint **Status** yang sama dengan _Available_
   - dan kolom SharePoint **Asset type** yang sama dengan _perangkat yang dipilih dari node pertanyaan_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Pilih **Insert**.

![Masukkan ekspresi Power Fx dan pilih insert](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.id.png)

1. Ekspresi Power Fx sekarang akan diterapkan pada parameter input Filter Query dari tindakan **Get items**. Selanjutnya, pilih tampilan **All items** di **Limit Columns by View**. Ini hanya akan mengambil kolom dalam daftar berdasarkan tampilan yang dipilih.

![List Columns by View](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.id.png)

1. Selanjutnya, kita akan memperbarui nama variabel untuk output. Pilih tab **Outputs** dan pilih variabel `GetItems`.

![Perbarui variabel](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.id.png)

1. Perbarui nama menjadi berikut ini.

    ```text
    VarDevices
    ```

![Perbarui nama variabel](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.id.png)

1. Gulir ke bawah dan di bagian **Usage**, pilih **Global**. Ini akan membuat variabel dapat diakses oleh topik mana pun.

![Perbarui ke variabel Global](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.id.png)

1. **Tutup** panel **Variable properties**.

![Tutup panel Variable properties](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.id.png)

1. Pilih ikon **plus +** untuk memasukkan node baru, pilih **Variable management** diikuti dengan memilih **Set a variable value**.

![Tambahkan node Set a variable value](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.id.png)

1. Pilih ikon **greater than** untuk parameter input **Set variable**.

![Set variable](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.id.png)

1. Pilih output topik yang dibuat sebelumnya sebagai variabel, **VarAvailableDevices**.

![Simpan topik](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.id.png)

1. Selanjutnya, pilih **ikon elipsis (...)** untuk mendefinisikan nilai variabel.

![Pilih nilai variabel](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.id.png)

1. Kita sekarang akan menggunakan ekspresi PowerFx untuk menetapkan nilai variabel sebagai properti `value` yang dikembalikan dalam respons **Get items**, dan membuat [cakupan variabel](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) global dengan menambahkan awalan `Global`.

   Pilih **Insert** dan **save** topik.

![Formula Power Fx untuk nilai variabel](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.id.png)

1. Selanjutnya kita perlu memperbarui instruksi agen. Pilih tab **Overview** dan pilih **Edit**.

![Edit instruksi](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.id.png)

1. Tambahkan baris baru dalam instruksi, salin dan tempel berikut ini.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Instruksi ini akan memandu AI generatif untuk memicu **Available devices** guna menampilkan daftar perangkat yang tersedia dari daftar **Devices** di SharePoint. Pilih placeholder topik secara keseluruhan dalam tanda kurung siku.

![Tambahkan instruksi](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.id.png)

1. Ketik karakter garis miring `/` dan daftar topik akan muncul. Pilih topik **Available devices**.

![Referensi trigger](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.id.png)

1. **Simpan** instruksi yang diperbarui.

![Simpan instruksi](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.id.png)

1. Sekarang kita akan menguji agen yang telah diperbarui. Pilih **Test** di kanan atas untuk menampilkan panel uji dan **refresh** panel uji. Masukkan pesan berikut ke agen.

    ```text
    I need a laptop
    ```

![Test](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.id.png)

1. Sebelum agen dapat melanjutkan, pengguna perlu memverifikasi bahwa koneksi mereka dapat digunakan. Pilih **Allow**.

![Pilih allow](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.id.png)

1. Agen akan menjalankan alat SharePoint yang mengambil daftar perangkat yang difilter di mana jenis perangkat sama dengan "laptop" dan status sama dengan "available," dari ekspresi Power Fx yang digunakan. Respons yang diformat dalam bentuk poin-poin akan dikembalikan untuk dibaca pengguna.

![Respons dari tes](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.id.png)

1. Hal terakhir yang perlu dipelajari adalah melihat koneksi yang digunakan dengan melihat halaman _Manage your connections_ dari agen. Pilih **ikon elipsis (...)** dan pilih **Manage Connection**.

![Manage connection](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.id.png)

1. Halaman ini adalah tempat kita dapat melihat semua koneksi yang digunakan oleh agen. Saat ini, hanya satu koneksi yang terdaftar yang terkait dengan alat SharePoint yang ditambahkan ke Topik. Pilih **1 tool** di kolom **Used By**.

![Used By](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.id.png)

1. Di sinilah kita dapat melihat detail tindakan Get items dan ingat _usage description_ yang kita masukkan sebelumnya? Di sinilah kita akan melihat deskripsi penggunaan. Pilih **Close**.

> Ini memberi tahu kita tindakan apa yang digunakan dan tujuannya. Ini menjaga koneksi kita tetap terorganisir 📁.

![Deskripsi penggunaan](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.id.png)

1. Kembali ke tab browser Anda dengan Copilot Studio dan **refresh** panel uji untuk menghapus tes.

## ✅ Misi Selesai

Selamat! 👏🏻 Anda telah belajar cara menambahkan topik baru dari awal, cara menambahkan alat yang memanggil tindakan konektor SharePoint Get items, dan menggunakan Power Fx untuk memfilter respons agar hanya mengembalikan perangkat dengan status available dan jenis perangkat laptop. 🙌🏻

Ini adalah akhir dari **Lab 07 - Add a new topic with conversation nodes**, pilih tautan di bawah untuk melanjutkan ke pelajaran berikutnya. Kita akan memperluas kasus penggunaan dalam lab ini di lab pelajaran berikutnya.

⏭️ [Lanjut ke pelajaran **Enhance user interactions with Adaptive Cards**](../08-add-adaptive-card/README.md)

## 📚 Sumber Daya Taktis

🔗 [Gunakan topik sistem](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Topik di Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Set topic triggers](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Mendefinisikan topik agen](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Buat ekspresi menggunakan Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Membuat topik menggunakan bahasa alami](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Tambahkan tindakan ke agen menggunakan konektor](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytics" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang salah yang timbul dari penggunaan terjemahan ini.