<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-17T17:10:19+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "id"
}
-->
# 🚨 Misi 09: Tambahkan alur agen ke Topik Anda untuk otomatisasi

## 🕵️‍♂️ NAMA KODE: `OPERASI AUTOMATION POWERHOUSE`

> **⏱️ Jangka Waktu Operasi:** `~30 menit`  

🎥 **Tonton Panduan**

[![Thumbnail video alur agen](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.id.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Tonton panduan di YouTube")

## 🎯 Ringkasan Misi

Agen Anda sekarang dapat berkomunikasi dengan pengguna dan memberikan informasi, tetapi keunggulan operasional sejati membutuhkan agen Anda untuk mengambil tindakan. Misi ini akan mengubah agen percakapan Anda menjadi pusat otomatisasi dengan melengkapi agen Anda dengan alur agen.

Pada akhir misi, Anda akan membuat otomatisasi permintaan perangkat end-to-end yang menangkap input pengguna melalui kartu adaptif, mengambil data dari SharePoint, mengirim notifikasi kepada manajer melalui email, dan memberikan umpan balik pengguna yang mulus - semuanya diatur oleh agen Anda melalui otomatisasi alur kerja yang cerdas.

## 🔎 Tujuan

Dalam misi ini, Anda akan belajar:

1. Memahami apa itu alur agen dan bagaimana mereka berbeda dari alur cloud Power Automate untuk otomatisasi
1. Mempelajari fitur utama yang membuat alur agen kuat termasuk tindakan AI dan penulisan bahasa alami
1. Mengeksplorasi desainer alur agen dan cara menggunakan ekspresi untuk menangani data secara dinamis
1. Membuat otomatisasi permintaan perangkat lengkap yang mengintegrasikan data SharePoint dan notifikasi email

## 🤔 Apa itu alur agen?

Alur agen adalah cara yang kuat untuk mengotomatisasi tugas berulang dan mengintegrasikan aplikasi serta layanan Anda. Anggap mereka sebagai alur kerja terstruktur, langkah demi langkah yang dapat dijalankan oleh agen Anda untuk mengotomatisasi tugas atau terhubung dengan aplikasi dan layanan lainnya. Anda dapat menganggap mereka sebagai alur mini yang membantu agen Anda melakukan hal-hal seperti mengirim notifikasi, memperbarui catatan, atau merespons peristiwa.

Berbeda dengan agen otonom yang menggunakan AI untuk membuat keputusan secara langsung, alur agen adalah **alur kerja deterministik** - artinya mereka mengikuti jalur yang sama setiap kali, memastikan hasil yang konsisten dan dapat diandalkan.

Secara sederhana:

- Mereka membantu agen Anda _melakukan sesuatu_, bukan hanya _mengatakan sesuatu_ kepada pengguna.
- Mereka dapat digunakan kembali di berbagai topik dan agen, dan dapat dipicu oleh pesan pengguna, peristiwa, atau aplikasi dan layanan lainnya.

## 🙋🏽 Ya, tapi bagaimana bedanya dengan alur cloud Power Automate?

Baik alur agen maupun alur cloud Power Automate membantu mengotomatisasi tugas. Mereka dirancang untuk tujuan yang berbeda dan bekerja dengan cara yang berbeda.

### 🤖 Alur agen di Copilot Studio

**Untuk apa mereka:**

- Dibangun untuk agen percakapan dan otonom (melalui instruksi agen) di Copilot Studio.
- Berfokus pada otomatisasi cerdas berbasis AI yang berinteraksi dengan sistem bisnis.

**Mengapa mereka berguna:**

- Mudah dibuat dan dikelola langsung di Copilot Studio.
- Sangat baik untuk mengotomatisasi tugas yang terjadi _selama percakapan_ dengan pengguna seperti mengajukan permintaan cuti.
- Anda tidak memerlukan lisensi Power Automate terpisah karena penagihan didasarkan pada penggunaan di dalam Copilot Studio. Ini dapat menghemat waktu dan biaya untuk tim perusahaan.

**Keterbatasan:**

- Anda tidak dapat membagikan, menyalin, atau menetapkan pemilik bersama.
- Alur agen hanya terlihat dan dapat digunakan di dalam Copilot Studio.
- Saat ini, pemicu peristiwa untuk agen dapat diedit di portal pembuat Power Automate.

### ☁️ Alur cloud Power Automate

**Untuk apa mereka:**

- Dirancang untuk otomatisasi tujuan umum di berbagai aplikasi dan layanan.
- Dapat berjalan secara independen atau bekerja bersama alur agen.

**Mengapa mereka berguna:**

- Menawarkan berbagai konektor.
- Ideal untuk mengotomatisasi proses di luar agen.
- Dapat dibagikan, digunakan kembali, dan dikelola di seluruh tim.

**Persyaratan:**

- Anda memerlukan lisensi Power Automate untuk menggunakannya.

### 📗 Ringkasan

| Gunakan ini | Ketika Anda ingin |
| :- | :- |
| Alur agen | Mengotomatisasi tugas di dalam agen, menggunakan AI, dan menjaga semuanya di Copilot Studio |  
| Alur cloud Power Automate | Mengotomatisasi di berbagai aplikasi dan layanan, atau membangun alur kerja di luar agen |

## 👍🏻 Mengapa menggunakan alur agen

Alur agen selalu mengikuti jalur tetap - mereka melakukan hal yang sama setiap kali diberikan input yang sama.

Ini membuat mereka:

- **Dapat diandalkan** - Anda dapat mempercayai bahwa mereka akan berperilaku sama setiap kali.
- **Dapat diprediksi** - Anda tahu hasil apa yang diharapkan saat alur berjalan.
- **Berbasis aturan** - mereka mengikuti langkah-langkah yang Anda tentukan.

Manfaat lainnya adalah:

- **Otomatisasi** - memungkinkan agen Anda menangani tugas berulang seperti mengirimkan formulir atau mengirim notifikasi.
- **Terhubung** - terhubung dengan lebih dari 1400 konektor seperti ServiceNow, SharePoint, Salesforce. Atau Anda dapat membuat konektor kustom sendiri.
- **Terintegrasi erat** - alur agen adalah bagian dari logika agen, mereka dipicu langsung oleh pesan pengguna atau tindakan dalam percakapan.
- **Skalabilitas** - menggunakan kembali alur di berbagai agen atau skenario.
- **Tanpa kode atau kode rendah** - Anda dapat membangun alur menggunakan bahasa alami atau desainer visual.
- **Platform all-in-one** - Anda dapat merancang, menguji, dan menerapkan alur agen di satu tempat - Copilot Studio. Tidak perlu beralih antar platform.

## 🏄🏻‍♂️ Bagaimana alur agen meningkatkan agen Anda?

Alur agen memperluas apa yang dapat dilakukan agen Anda di luar "mengobrol" dengan pengguna. Mereka memungkinkan agen untuk mengambil tindakan dan berinteraksi dengan sistem.

Misalnya, Anda bekerja di departemen keuangan dan menerima banyak faktur dari vendor. Biasanya, seseorang harus membaca setiap faktur, mengambil detail penting - jumlah, tanggal, siapa pengirimnya, dan memeriksa apakah semuanya sesuai dengan catatan Anda. Kemudian mengirimkannya kepada orang yang tepat untuk persetujuan. Ini memakan waktu dan tenaga.

Dengan alur agen di Copilot Studio, Anda dapat mengotomatisasi proses ini. Begitu faktur masuk, agen:

1. Membaca dokumen menggunakan pemrosesan dokumen cerdas untuk menemukan informasi penting.
1. Memeriksa detail terhadap data perusahaan Anda untuk memastikan semuanya terlihat benar.
1. Mengarahkan untuk persetujuan kepada orang yang tepat.

Ini menghemat waktu, mengurangi kesalahan, dan membuat seluruh proses lebih lancar.

### Pikirkan seperti ini

- **Agen**: pengambil keputusan yang cerdas
- **Alur agen**: pelaksana yang dapat diandalkan

### Mengapa ini penting

- Anda mendapatkan yang terbaik dari kedua dunia: otomatisasi yang dapat diandalkan dan AI yang fleksibel.
- Mudah untuk membangun dan memperbarui alur sesuai kebutuhan bisnis Anda.
- Anda dapat meningkatkan otomatisasi di seluruh tim.

## 🔌 Fitur utama yang membuat alur agen kuat

1. **Penulisan bahasa alami**
    - Anda dapat menjelaskan apa yang ingin dilakukan alur dalam bahasa sederhana.
    - Copilot memahami maksud Anda dan membangun alur untuk Anda.
    - Tidak perlu menulis kode - cukup jelaskan ide Anda.

1. **Tindakan AI**

    Gunakan AI untuk:

    - Membaca dan memahami dokumen atau gambar.
    - Merangkum konten panjang menjadi jawaban singkat yang berguna.
    - Memberikan rekomendasi atau keputusan yang cerdas.

1. **Tindakan generatif**
    - Ini memungkinkan alur beradaptasi secara real-time.
    - Agen dapat merencanakan dan menyesuaikan langkah berdasarkan informasi yang berubah.

1. **Tindakan integrasi**
    - Hubungkan alur Anda ke alat lain seperti Outlook, Microsoft Teams, ServiceNow, SharePoint, dan aplikasi serta layanan lainnya, melalui lebih dari 1400 konektor bawaan atau konektor kustom Anda sendiri.
    - Ini membantu agen Anda bekerja dengan aplikasi yang sudah digunakan tim Anda.

1. **Manusia dalam proses**
    - Tambahkan langkah persetujuan di mana seseorang perlu meninjau atau mengonfirmasi sesuatu.
    - [Persetujuan lanjutan](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) mendukung pengingat, delegasi, dan persetujuan multi-tahap.

## ⚙️ Bagaimana cara kerjanya

1. **Pemicu**

    Sebuah peristiwa memulai alur - seperti pengguna mengajukan pertanyaan, memanggil alur dari topik, waktu yang dijadwalkan, atau peristiwa yang terjadi di sistem lain.

1. **Tindakan**

    Ini adalah langkah-langkah yang diikuti agen berikutnya - mengirim email, memanggil API, memperbarui tiket di ServiceNow.

## 🧶 Cara membuat alur agen

1. **Bahasa alami**: jelaskan apa yang ingin dilakukan agen, dan Copilot membangunnya untuk Anda.
1. **Kanvas desainer**: seret dan lepas tindakan, kondisi, dan loop di desainer alur agen untuk membangun alur agen Anda.

## 🎨 Apa itu desainer alur agen?

Ini adalah alat visual di Copilot Studio yang membantu Anda membangun, mengedit, dan mengelola alur agen yang memberikan instruksi langkah demi langkah yang diikuti agen Anda untuk menyelesaikan tugas. Dirancang agar mudah digunakan, bahkan jika Anda baru mengenal alur agen.

### Fitur utama desainer alur agen

1. **Kanvas visual**
    - Anda dapat melihat seluruh alur Anda yang ditata seperti diagram.
    - Mudah memperbesar/memperkecil, menyesuaikan tampilan, atau menggunakan peta mini untuk menavigasi alur besar.

1. **Menambahkan dan menghapus tindakan**
    - Klik tombol _plus (+)_ untuk menambahkan tindakan baru seperti mengirim pesan atau memperbarui item dalam daftar SharePoint.
    - Anda dapat mencari tindakan dari konektor, dan mengonfigurasinya melalui pengaturan.
    - Untuk menghapus tindakan, klik _tiga titik (⋮)_ dan pilih _Hapus_.

1. **Memeriksa parameter**
    - Klik pada tindakan apa pun untuk melihat atau mengedit pengaturannya yang disebut _parameter_.
    - Anda dapat memasukkan nilai secara manual atau menggunakan _ekspresi_ untuk membuatnya dinamis.

1. **Riwayat versi**
    - Setiap kali Anda menyimpan alur Anda, versi dicatat.
    - Anda dapat kembali dan melihat atau memulihkan versi sebelumnya jika diperlukan.

1. **Pemeriksaan kesalahan**
    - _Flow Checker_ menyoroti kesalahan apa pun.
    - Semua kesalahan harus diselesaikan sebelum menerbitkan alur Anda.

1. **Publikasikan dan uji**
    - Setelah alur Anda bebas dari kesalahan, terbitkan untuk membuatnya aktif.
    - Gunakan fitur _Test_ untuk menjalankan alur Anda secara manual atau otomatis, dan memeriksa apakah alur bekerja seperti yang diharapkan.

### Mengapa menggunakan desainer alur agen?

- **Visual dan intuitif** - Anda dapat membangun alur dengan menyeret dan mengklik.
- **Aman untuk bereksperimen** - riwayat versi memungkinkan Anda membatalkan perubahan.
- **Pengujian bawaan** - membantu Anda memastikan semuanya berfungsi sebelum aktif.

## 🔤 Anda menyebutkan _ekspresi_ - apa itu ekspresi?

Ekspresi adalah rumus kecil atau perintah yang membantu alur agen Anda bekerja dengan data. Anda menggunakannya untuk menghitung nilai, memformat teks, membuat keputusan, atau mengambil informasi spesifik dari input.

### Mengapa menggunakan ekspresi?

Ekspresi memungkinkan Anda:

- **Menyesuaikan cara data ditangani** - menggabungkan nama, memformat tanggal.
- **Membuat keputusan** - jika nilai lebih besar dari 10, lakukan sesuatu.
- **Mengubah data** - ubah teks menjadi huruf kecil, ambil bagian dari string.
- **Mengotomatisasi logika** - tanpa menulis kode lengkap.

### Seperti apa ekspresi itu?

Ekspresi menggunakan fungsi. Saya akan meminjam penjelasan tentang apa itu fungsi dari mantan Microsoft MVP, Jerry Weinstock.

!!! kutipan
    Fungsi adalah logika bawaan untuk mengubah data Anda baik melalui operasi sederhana atau kompleks dalam ekspresi Anda.

Fungsi memungkinkan Anda membangun ekspresi tanpa perlu menulis kode.

Cara saya menjelaskannya, fungsi dalam alur agen mirip dengan fungsi Excel. Anda dapat melakukan operasi pada data untuk mengubahnya menjadi output yang diinginkan. Saat membangun rumus Anda di Excel, Anda memilih nilai input dari sel dalam tabel atau rentang, lalu menerapkan fungsi untuk memanipulasi output data. Contohnya adalah menggunakan fungsi `COUNT` untuk menghitung jumlah sel yang berisi angka dari rentang.

Dalam alur agen, alih-alih merujuk data dari sel dalam tabel, Anda merujuk output data dari pemicu atau tindakan saat membangun ekspresi Anda. Melanjutkan contoh sebelumnya, gunakan fungsi `length` untuk mengambil jumlah item yang dikembalikan dari tindakan konektor _Get items_ SharePoint.

### Mengapa fungsi penting?

Menggunakan fungsi membuat alur agen Anda:

- **Lebih pintar** - mereka dapat bereaksi terhadap input atau kondisi yang berbeda.
- **Fleksibel** - Anda dapat menyesuaikan cara data ditangani.
- **Efisien** - Anda menghindari langkah manual dengan mengotomatisasi logika.

### Fungsi yang paling berguna

Berikut adalah fungsi umum yang digunakan dalam alur agen. Untuk daftar lengkap fungsi, kunjungi [panduan referensi](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Teks

- `concat()` - Menggabungkan dua atau lebih bagian teks.
      - Contoh: `concat('Halo ', firstName)` → “Halo John”

- `toLower()` / `toUpper()` - Mengubah teks menjadi huruf kecil atau huruf besar.
      - Berguna untuk standarisasi input.

- `substring()` - Mengambil bagian dari string.
      - Contoh: Ambil 3 huruf pertama dari nama.

- `trim()` - Menghapus spasi dari awal dan akhir teks.

#### 🔢 Matematika dan angka

- `add()`, `sub()`, `mul()`, `div()` - Operasi matematika dasar.
      - Contoh: `add(5, 3)` - outputnya adalah 8

#### 📅 Tanggal dan waktu

- `utcNow()` - Mengambil tanggal dan waktu saat ini dalam UTC.
      - Sangat baik untuk penanda waktu.

- `addDays()`, `addHours()` - Menambahkan waktu ke tanggal.
- Contoh: `addDays(utcNow(), 7)` menghasilkan 7 hari dari sekarang.

- `formatDateTime()` - Memformat tanggal menjadi string yang mudah dibaca.
      - Contoh: Senin, 7 Juli 2025

#### ✅ Logika

- `if()` - Menjalankan satu nilai jika benar, nilai lain jika salah.
      - Contoh: `if(score > 50, 'Lulus', 'Gagal')`

- `equals()` - Memeriksa apakah dua nilai sama.

- `and()`, `or()`, `not()` - Menggabungkan beberapa kondisi.

#### 🪣 Fungsi lain yang berguna

- `coalesce()` - Mengembalikan nilai pertama yang tidak kosong.
      - Berguna untuk nilai cadangan/default.

- `guid()` - Menghasilkan ID unik.
      - Berguna untuk pelacakan atau pencatatan.

- `length()` - Menghitung jumlah karakter atau item dalam string atau array.

## ⭐ Praktik terbaik

Berikut adalah beberapa praktik terbaik untuk membangun alur agen di Copilot Studio.

1. **Mulai dengan sederhana dan bangun secara bertahap**

    - Mulailah dengan tugas kecil dan jelas seperti mengirim pesan.
    - Tambahkan langkah-langkah lebih lanjut setelah menguji dasar-dasar otomatisasi Anda.

1. **Gunakan nama tindakan yang jelas dan deskriptif**

    - Beri label setiap langkah dengan jelas sehingga Anda dan tim Anda memahami apa yang dilakukan.
    - Contoh: daripada menggunakan nama default "Update item" untuk tindakan konektor SharePoint, ubah namanya menjadi apa yang diperbarui, seperti "Update device status."

1. **Periksa kesalahan sebelum mempublikasikan**

    - Gunakan **flow checker** untuk menemukan dan memperbaiki masalah apa pun.
    - Anda tidak dapat mempublikasikan alur jika ada kesalahan, jadi coba selesaikan saat terjadi.

1. **Uji alur Anda secara menyeluruh**

    - Hanya karena alur disimpan dan dipublikasikan, bukan berarti alur bekerja seperti yang diharapkan.
    - Gunakan fitur _Test_ untuk menjalankan alur Anda secara manual atau otomatis, dan periksa hasilnya.

1. **Gunakan Riwayat Versi**

    - Simpan alur Anda sering kali sehingga Anda dapat kembali ke versi sebelumnya jika diperlukan.
    - Anda dapat melihat dan memulihkan versi sebelumnya menggunakan panel _Version History_.

1. **Gunakan parameter dan ekspresi dengan bijak**

    - Saat mengonfigurasi tindakan, gunakan parameter untuk membuat alur Anda dinamis.
    - Anda dapat memasukkan nilai secara manual atau menggunakan ekspresi untuk menghitungnya, atau menggabungkannya dengan nilai dari tindakan sebelumnya menggunakan pemilih _dynamic content_.

1. **Hapus tindakan yang tidak digunakan**

    - Jika Anda menambahkan tindakan dan kemudian memutuskan tidak membutuhkannya, hapus untuk menjaga alur Anda tetap rapi.

## 🧪 Lab 09 - Tambahkan alur agen untuk otomatisasi dan tingkatkan kemampuan topik

Sekarang kita akan belajar bagaimana meningkatkan topik kita dengan kartu adaptif dan menggunakan fungsi lanjutan dari topik dan node.

- [9.1 Buat alur agen](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Tambahkan alur agen ke topik](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Perbarui topik Permintaan perangkat dengan beberapa node untuk pengalaman pengguna yang lebih baik](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Uji agen menggunakan beberapa skenario](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Kasus penggunaan

**Sebagai** manajer karyawan

**Saya ingin** menerima permintaan perangkat

**Sehingga saya** dapat meninjau perangkat yang diminta oleh karyawan.

Mari kita mulai!

### Prasyarat

1. **Daftar SharePoint**

    Kita akan menggunakan daftar SharePoint **Devices** dari [Pelajaran 00 - Penyiapan Kursus - Langkah 3: Buat situs SharePoint baru](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Jika Anda belum menyiapkan daftar SharePoint **Devices**, silakan kembali ke [Pelajaran 00 - Penyiapan Kursus - Langkah 3: Buat situs SharePoint baru](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agen Bantuan Contoso**

    Kita akan menggunakan agen yang sama yang dibuat sebelumnya di [Pelajaran 06 - Buat agen kustom menggunakan bahasa alami dengan Copilot dan menghubungkannya dengan data Anda](../06-create-agent-from-conversation/README.md).

### 9.1 Buat alur agen

Dalam latihan ini, kita akan membuat alur agen yang mengambil item SharePoint dari perangkat yang dipilih dan mengirim email kepada manajer dengan detail perangkat.

1. Di topik **Permintaan perangkat**, gulir ke bawah ke node **Ask with adaptive card** dan tambahkan node baru. Pilih **Add a tool** dan di tab **Basic tools** pada panel yang muncul, pilih **New Agent flow**.

    ![Tambahkan alur Agen baru](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.id.png)

1. **Designer** alur Agen akan dimuat dengan pemicu dan tindakan.

    - **Trigger** - Saat agen memanggil alur
        - Ini akan memicu alur dari agen Copilot Studio.

    - **Action** - Merespons agen
        - Ini mengirimkan respons yang dapat berisi nilai output kembali ke agen Copilot Studio.

    Pilih pemicu.

    ![Pilih pemicu](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.id.png)

1. Selanjutnya, kita akan menambahkan beberapa input untuk alur agen.

    - `DeviceSharePointId` - ini akan menyimpan nilai, ID, dari item SharePoint. Nilai ID ini adalah output dari node Ask with adaptive card di mana pengguna memilih perangkat.

    - `User` - ini akan menjadi nama pengguna yang berasal dari variabel sistem agen.

    - `AdditionalComments` - ini akan menjadi komentar yang dimasukkan oleh pengguna, yang merupakan output dari node Ask with adaptive card.

    Pertama-tama kita akan menambahkan `DeviceSharePointId` sebagai input untuk pemicu kita. Pilih **+ Add an input**.

    ![Tambahkan input](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.id.png)

1. Untuk jenis input pengguna, pilih **Text**.

    ![Pilih Text](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.id.png)

1. Untuk nama input, masukkan berikut ini.

    ```text
    DeviceSharePointId
    ```

    ![Input DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.id.png)

1. Sekarang kita akan menambahkan input kedua, `User`. Ulangi langkah yang sama, pilih **+ Add an input** dan pilih **Text**.

    ![Tambahkan input](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.id.png)

1. Untuk nama input, masukkan berikut ini.

    ```text
    User
    ```

    ![Input User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.id.png)

1. Sekarang kita akan menambahkan input ketiga, `AdditionalComments`. Ulangi langkah yang sama, pilih **+ Add an input** dan pilih **Text**.

    ![Tambahkan input](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.id.png)

1. Untuk nama input, masukkan berikut ini.

    ```text
    AdditionalComments
    ```

    ![Input AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.id.png)

1. Untuk input `AdditionalComments`, kita akan memperbaruinya agar menjadi opsional. Pilih **ikon elipsis (...)** dan pilih **Make the field optional**.

    ![Jadikan field opsional](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.id.png)

1. Kerja bagus! Pemicu sekarang telah dikonfigurasi, mari lanjutkan. Pilih **ikon plus +** di bawah pemicu untuk menyisipkan tindakan baru.

    ![Tambahkan tindakan](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.id.png)

1. **Panel Tindakan** akan muncul di mana Anda dapat melihat tindakan dari lebih dari 1400+ konektor bawaan ke layanan Microsoft dan pihak ketiga. Di **field pencarian** masukkan berikut ini,

    ```text
    Get item
    ```

    Daftar tindakan akan ditampilkan dalam hasil pencarian. Pilih tindakan **Get item** dari konektor **SharePoint**.

    ![Tindakan Get item](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.id.png)

1. Kita sekarang dapat mulai mengonfigurasi tindakan **Get item**.

    Pilih **ikon elipsis (...)** di tindakan **Get item**.

    ![Pilih elipsis](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.id.png)

1. Pilih **Rename**.

    ![Pilih Rename](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.id.png)

1. Ubah nama tindakan menjadi,

    ```text
    Get Device
    ```

    ![Ubah nama tindakan](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.id.png)

1. Di field **Site Address**, pilih **Alamat situs** dari situs SharePoint Contoso IT yang dibuat di [Pelajaran 00 - Penyiapan Kursus - Langkah 3: Buat situs SharePoint baru](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Di field **List Name**, pilih daftar SharePoint **Devices**.

    ![Parameter input](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.id.png)

1. Di field **Id**, pilih **ikon petir** atau **ikon fx** di sebelah kanan.

    ![Pemilih konten dinamis](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.id.png)

1. Di tab **Dynamic content** pada panel yang muncul, masukkan berikut ini,

    ```text
    sharepoint
    ```

    Hasil pencarian akan menunjukkan parameter input yang cocok dengan nilai yang dicari. Pilih parameter **DeviceSharePointId** dari pemicu.

    Selanjutnya, pilih **Add** untuk menambahkan input konten dinamis ke parameter **Id** dari tindakan.

    ![Pilih input DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.id.png)

1. Input konten dinamis dari pemicu sekarang dirujuk dalam parameter **Id** dari tindakan. Kita akan memperbarui salah satu parameter lanjutan berikutnya. Pilih **Show all** untuk melihat parameter lanjutan.

    ![Lihat parameter lanjutan](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.id.png)

1. Parameter **Limit Columns by View** akan ditampilkan dan secara default diatur ke **Use all columns (Do not limit)**. Kita akan memperbarui nilai ini ke tampilan untuk membatasi kolom yang dikembalikan dalam respons tindakan. Pilih parameter **Limit Columns by View** untuk melihat daftar tampilan.

    ![Pilih parameter](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.id.png)

1. Pilih tampilan **All Items**.

    ![Pilih tampilan All Items](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.id.png)

1. Pilih **ikon plus +** di bawah tindakan _Get Device_ untuk menyisipkan tindakan baru.

    ![Tambahkan tindakan baru](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.id.png)

1. Di field pencarian masukkan berikut ini,

    ```text
    send an email
    ```

    Daftar tindakan akan ditampilkan dalam hasil pencarian. Pilih tindakan **Send an email (V2)** dari konektor **Office 365 Outlook**.

    ![Tindakan Send an email](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.id.png)

1. Selanjutnya kita perlu membuat koneksi untuk tindakan konektor. Pilih **Sign in**.

    ![Buat koneksi](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.id.png)

1. Pilih akun pengguna yang sudah masuk.

    ![Pilih akun pengguna](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.id.png)

1. Pilih **Allow access**. Koneksi sekarang telah dibuat.

    ![Pilih allow access](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.id.png)

1. Ubah nama tindakan menjadi berikut ini,

    ```text
    Send an email to manager
    ```

    Selanjutnya mari kita definisikan parameter input dari tindakan kita.

    Untuk parameter input **To**, pilih diri Anda sendiri. Biasanya ini akan menjadi manajer Anda atau kita akan menggunakan tindakan lain yang menarik manajer Anda berdasarkan profil Entra ID Anda, tetapi untuk tujuan pelajaran ini, pilih diri Anda sendiri.

    Untuk parameter input **Subject**, masukkan berikut ini,

    ```text
    Request type: new device
    ```

    Untuk parameter input **Body**, masukkan berikut ini,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Ubah nama tindakan dan konfigurasi input](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.id.png)

1. Selanjutnya, kita akan memperbarui parameter input **Body** dengan referensi ke input konten dinamis dari **pemicu** atau tindakan **Get item**. Masukkan spasi setelah baris kedua karena kita akan menyisipkan nama pengguna dari input pemicu, **User**.

    Pilih **ikon petir** atau **ikon fx** di sebelah kanan.

    ![Tambahkan input User sebagai konten dinamis](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.id.png)

1. Di tab **Dynamic content** pada panel yang muncul, pilih input **User** dari pemicu.

    Pilih **Add** untuk menambahkan input konten dinamis **User** ke parameter **Body** dari tindakan.

    ![Pilih input User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.id.png)
1. Input konten dinamis dari pemicu sekarang dirujuk dalam parameter **Body** pada aksi. Kita akan mengulangi langkah yang sama untuk baris-baris lainnya di badan pesan email.

    ![Input pengguna ditambahkan](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.id.png)

1. Klik pada ruang di sebelah `Manufacturer:`. Pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    Pada tab **Dynamic content** di panel yang muncul, masukkan berikut ini di kolom pencarian,

    ```text
    manufacturer
    ```

    Pilih input **Manufacturer value** dari pemicu dan klik **Add**.

    ![Tambahkan input nilai Manufacturer sebagai konten dinamis](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.id.png)

1. Klik pada ruang di sebelah `Model:`. Pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    Pada tab **Dynamic content** di panel yang muncul, masukkan berikut ini di kolom pencarian,

    ```text
    model
    ```

    Pilih input **Model** dari aksi **Get item** dan klik **Add**.

    ![Tambahkan input Model sebagai konten dinamis](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.id.png)

1. Untuk teks `Link to item in SharePoint`, kita akan memperbaruinya menjadi hyperlink di badan pesan email. Klik di awal baris dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    ![Tambahkan konten dinamis](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.id.png)

1. Klik setelah tag anchor HTML dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    Pada tab **Dynamic content** di panel yang muncul, masukkan berikut ini di kolom pencarian,

    ```text
    link to item
    ```

    Pilih input **Link to item** dari aksi **Get item** dan klik **Add**.

    ![Tambahkan Link to item sebagai konten dinamis](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.id.png)

1. Kita perlu beralih ke editor HTML dengan memilih ikon **&lt;/&gt;**.

    ![Tambahkan input pengguna](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.id.png)

1. Editor HTML sekarang diaktifkan. Klik sebelum teks `Link to item in SharePoint`, tambahkan tag anchor HTML untuk membuat hyperlink. Salin dan tempel berikut ini.

    ```text
    <a href="
    ```

    ![Tag HTML](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.id.png)

1. Input konten dinamis **Link to item** sekarang dirujuk dalam parameter **Body**. Klik setelah input **Link to item**, salin dan tempel berikut ini.

    ```text
    ">
    ```

    ![Tag HTML](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.id.png)

1. Klik setelah teks `Link to item in SharePoint`, tutup tag anchor HTML. Salin dan tempel berikut ini.

    ```text
    </a>
    ```

    ![Tag HTML](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.id.png)

1. Pilih ikon **&lt;/&gt;** untuk beralih tampilan kode.

    ![Nonaktifkan tampilan kode](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.id.png)

1. Kemudian pilih kembali ikon **&lt;/&gt;** untuk beralih kembali ke tampilan kode.

    ![Kembali ke tampilan kode](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.id.png)

1. Perhatikan ada beberapa karakter tambahan `&lt;br&gt;`. Hapus karakter-karakter ini.

    ![Hapus karakter](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.id.png)

1. Kita telah selesai menambahkan hyperlink ke badan pesan email 😎 Pilih ikon **&lt;/&gt;** untuk beralih tampilan kode.

    ![Tag HTML dirapikan](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.id.png)

1. Klik setelah teks `Additional comments from` sebelum karakter titik dua dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    ![Tambahkan parameter pengguna](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.id.png)

1. Pada tab **Dynamic content** di panel yang muncul, masukkan berikut ini di kolom pencarian,

    ```text
    user
    ```

    Pilih parameter **User** dari pemicu dan klik **Add**.

    ![Tambahkan parameter pengguna sebagai konten dinamis](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.id.png)

1. Sekarang kita akan memasukkan ekspresi yang akan menampilkan nilai Additional Comments jika diberikan oleh pengguna di node **Ask an adaptive card**, atau menampilkan "None" jika pengguna tidak memberikan komentar.

    Klik setelah titik dua dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    ![Tambahkan ekspresi](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.id.png)

1. Pada tab **Function** di panel yang muncul dan di kolom ekspresi di atas, masukkan berikut ini,

    ```text
    if(empty())
    ```

    Ekspresi ini menggunakan fungsi `if` untuk pernyataan if-else.

    Fungsi berikutnya yang digunakan adalah `empty` yang memeriksa apakah ada nilai atau tidak dalam parameter string. Parameter string yang dirujuk adalah nilai parameter input `AdditionalComments` dari pemicu.

    ![Jika kosong](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.id.png)

1. Selanjutnya, klik **di dalam tanda kurung** setelah fungsi `empty`. Kita akan memasukkan parameter input `AdditionalComments` dari pemicu.

    Pilih tab **Dynamic content**. Masukkan berikut ini di kolom pencarian,

    ```text
    Additional
    ```

    Gulir ke bawah panel dan pilih input **AdditionalComments** dari pemicu. Parameter sekarang akan ditambahkan sebagai parameter string dalam ekspresi.

    ![Tambahkan AdditionalComments sebagai konten dinamis](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.id.png)

1. Selanjutnya kita akan mendefinisikan logika **_true_**, di mana jika parameter string `AdditionalComments` kosong, maka kita ingin menampilkan string (teks) `None`.

    Setelah tanda kurung yang menutup parameter string, masukkan berikut ini,

    ```text
    , 'None',
    ```

    ![Logika true](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.id.png)

1. Akhirnya kita akan mendefinisikan logika **_false_**, di mana jika parameter string `AdditionalComments` tidak kosong, maka kita ingin menampilkan nilai parameter input **AdditionalComments** dari pemicu kita.

    > Pengingat bahwa nilai ini akan berasal dari kolom Additional Comments pada kartu adaptif di node **Ask with adaptive card** dalam topik **Request device**.

    Setelah koma setelah logika **_true_**, pilih tab **Dynamic content**. Masukkan berikut ini di kolom pencarian,

    ```text
    Additional
    ```

    Gulir ke bawah panel dan pilih input **AdditionalComments** dari pemicu. Parameter sekarang akan ditambahkan sebagai parameter string dalam ekspresi.

    Sekarang tambahkan ke parameter **Body** kita dengan memilih **Add**.

    ![Logika false](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.id.png)

1. Bagus, ekspresi kita sudah selesai! Ekspresi sekarang telah ditambahkan ke parameter **Body**. Terakhir, format baris terakhir dalam Italic.

    ![Italic](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.id.png)

1. Sekarang kita akan memperbarui aksi **Respond to the agent** untuk mengirimkan nilai parameter **Model value** dari aksi **Get item** kembali ke agen.

    Tahan tombol kiri mouse dan gerakkan ke atas dalam desain untuk melihat aksi **Respond to the agent**.

    Pilih aksi **Respond to the agent** dan pilih output **Text** sebagai tipe.

    ![Pilih output Text](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.id.png)

1. Masukkan berikut ini sebagai nama output.

    ```text
    ModelValue
    ```

    ![Output ModelValue](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.id.png)

1. Pilih kolom nilai dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    ![Masukkan ekspresi](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.id.png)

1. Pada tab **Dynamic content** di panel yang muncul, masukkan berikut ini di kolom pencarian,

    ```text
    model
    ```

    Pilih parameter **Model** dari aksi **Get item** dan klik **Add**.

    ![Tambahkan parameter Model sebagai konten dinamis](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.id.png)

1. Parameter **Model** sekarang menjadi nilai output teks. Pilih **Save draft** untuk menyimpan alur agen kita.

    Kita telah menyelesaikan alur agen kita 👏🏻

    ![Pilih save draft](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.id.png)

1. Mari kita lakukan satu pembaruan lagi pada alur agen kita sebelum mempublikasikan. Pilih tab **Overview** dan pilih **Edit**.

    ![Pilih Edit](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.id.png)

1. Untuk **Flow name**, salin dan tempel berikut ini.

    ```text
    Send device request email
    ```

    Untuk **Description**, pilih ikon **refresh** untuk menggunakan AI untuk secara otomatis menghasilkan deskripsi berdasarkan pemicu dan aksi dalam alur agen.

    Pilih **Save** untuk menyimpan nama dan deskripsi yang diperbarui dari alur agen.

    ![Ganti nama, tambahkan deskripsi, dan simpan detail](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.id.png)

1. Pilih tab **Designer** dan pilih **Publish** untuk mempublikasikan alur agen sehingga dapat ditambahkan sebagai node dalam topik **Request device**.

    ![Publikasikan](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.id.png)

1. Pesan konfirmasi akan muncul sebentar lagi untuk mengonfirmasi bahwa alur agen telah dipublikasikan.

    ![Pesan konfirmasi](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.id.png)

### 9.2 Tambahkan alur agen ke topik

Sekarang mari tambahkan alur agen ke topik **Request device**.

1. Pilih **Agents** di menu sisi kiri dan pilih **Contoso Helpdesk Agent**.

    ![Pilih Agents](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.id.png)

1. Pilih tab **Topics**.

    ![Pilih tab Topics](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.id.png)

1. Pilih topik **Request device**.

    ![Pilih topik Request device](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.id.png)

1. Gulir ke bawah ke node **Ask with adaptive card** dan tambahkan node baru.

    Pilih **Add a tool** dan pada tab **Basic tools** di panel yang muncul, pilih alur agen **Send device request email** yang baru saja kita buat dan publikasikan.

    ![Pilih alur agen](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.id.png)

1. Untuk input pemicu dari alur agen kita, kita perlu memilih output variabel dari node **Ask with adaptive card**.

    Pilih ikon **ellipsis (...)** untuk input **DeviceSharePointId**.

    ![Pilih variabel](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.id.png)

1. Pilih variabel **deviceSelectionId** yang merupakan salah satu output yang didefinisikan di node **Ask with adaptive card**.

    ![Pilih variabel deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.id.png)

1. Selanjutnya, pilih ikon **ellipsis (...)** untuk input **User**.

    ![Pilih Variabel](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.id.png)

1. Pilih tab **System** di panel variabel yang muncul dan pilih **User.DisplayName**. Variabel ini menyimpan nama tampilan pengguna internal yang berinteraksi dengan agen.

    ![Pilih variabel sistem User.DisplayName](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.id.png)

1. Selanjutnya, pilih ikon **greater than** untuk **Advanced inputs** untuk memperluas dan melihat input **AdditionalComments**.

    ![Perluas input lanjutan](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.id.png)

1. Pilih ikon **ellipsis (...)** untuk input AdditionalComments.

    ![Pilih Variabel](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.id.png)

1. Pilih tab **Formula** dan ikon perluas di panel variabel yang muncul karena kita akan menggunakan ekspresi Power Fx.

    ![Tab Formula](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.id.png)

1. Mirip dengan ekspresi dalam alur agen yang melakukan pemeriksaan kondisi menggunakan fungsi _if_, tetapi kali ini
    - menggunakan fungsi Power Fx,
    - dan memasukkan baik nilai kosong, atau nilai variabel output `commentsId` dari node **Ask with adaptive card**.

    Masukkan fungsi berikut di kolom Power Fx,

    ```text
    If(IsBlank())
    ```

Ekspresi ini menggunakan fungsi `If` untuk pernyataan if-else.

Fungsi berikutnya yang digunakan adalah `IsBlank` yang memeriksa apakah sebuah nilai ada atau tidak ada dalam parameter string. Parameter string yang akan dirujuk adalah variabel output `commentsId` dari node **Ask with adaptive card**.

![Fungsi If dan IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.id.png)

1. Selanjutnya, klik **di dalam tanda kurung** setelah fungsi `IsBlank`. Kita akan memasukkan variabel output `commentsId` dari node **Ask with adaptive card**.

   Masukkan berikut ini di dalam tanda kurung,

    ```text
    Topic.commentsId
    ```

   Dan tambahkan koma setelah tanda kurung.

   ![Referensi variabel output commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.id.png)

1. Selanjutnya kita akan mendefinisikan logika

   - ketika **_true_** - jika parameter string `Topic.commentsId` kosong, maka kita ingin memasukkan nilai kosong.
   - ketika **_false_** - jika parameter string `Topic.commentsId` tidak kosong, maka masukkan nilai dari variabel commentsId.

   Setelah tanda kurung yang menutup parameter string, masukkan berikut ini,

    ```text
    "", Topic.commentsId)
    ```

   Ekspresi Power Fx seharusnya seperti berikut ini,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   Kerja bagus, ekspresi kita sudah selesai! 🙌🏻 Sekarang pilih **Insert** untuk menetapkan parameter input alur agen ke ekspresi Power Fx.

   ![Ekspresi Power Fx](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.id.png)

1. **Simpan** topik.

### 9.3 Perbarui topik Permintaan perangkat dengan beberapa node untuk pengalaman pengguna yang lebih baik

Selanjutnya kita akan menambahkan dua node lagi:

- **Send a message** - ini akan berfungsi sebagai pesan konfirmasi yang merujuk perangkat yang dipilih dan bahwa permintaan mereka telah diajukan.

- **Topic management** - untuk menutup percakapan, kita akan mengarahkan ke node **End of conversation**.

Mari kita mulai!

1. Pilih **ikon plus +** di bawah node alur agen dan pilih node **Send a message**.

   ![Tambahkan node send a message](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.id.png)

1. Masukkan berikut ini di bawah bidang pesan,

    ```text
    Thanks
    ```

   Kemudian pilih **Insert variable** karena kita akan merujuk nama pengguna.

   ![Masukkan variabel](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.id.png)

1. Pilih tab **System** dan cari `User` di bidang pencarian. Pilih variabel **User.DisplayName**.

   ![Pilih variabel sistem](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.id.png)

1. Masukkan berikut ini di bawah bidang pesan,

    ```text
    . Your selected device,
    ```

   Kemudian pilih **Insert variable** dan kali ini di tab **Custom**, pilih variabel **ModelValue**.

   Kemudian masukkan berikut ini di bawah untuk melengkapi pesan.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   Pesan seharusnya terlihat seperti berikut ini.

   ![Kirim pesan](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.id.png)

1. Terakhir, pilih **ikon plus +** di bawah node **Send a message** dan pilih **Topic management**, diikuti dengan **Go to another topic** dan pilih **End of Conversation**.

   ![Manajemen topik](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.id.png)

1. **Simpan** topik.

   ![Simpan](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.id.png)

### 9.4 Uji agen menggunakan beberapa skenario

Kerja bagus!!! 😁 Sekarang kita bisa menguji agen kita.

#### 9.4.1 Meminta perangkat dan memasukkan komentar di kartu adaptif

1. **Refresh** panel uji, pilih ikon **activity map** dan masukkan berikut ini sebagai pesan ke agen.

    ```text
    I need a laptop
    ```

   ![Uji agen](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.id.png)

1. Agen memicu **Available devices** dan merespons dengan daftar perangkat yang tersedia. Kita akan memasukkan berikut ini sebagai jawaban atas pertanyaan apakah kita ingin meminta perangkat.

    ```text
    Yes
    ```

   ![Ya](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.id.png)

1. Perhatikan bagaimana agen memanggil **Request device** sesuai instruksi agen dan bahwa kartu adaptif sekarang ditampilkan dalam pesan agen.

   Pilih perangkat **Surface Laptop 15** dan tambahkan berikut ini sebagai komentar.

    ```text
    I need 16GB of RAM please
    ```

   ![Pilih perangkat dan masukkan komentar](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.id.png)

1. Gulir ke bawah hingga Anda melihat tombol **Submit Request** dan pilih untuk mengirimkan kartu adaptif ke agen.

   ![Kirim permintaan](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.id.png)

1. Pilih **Allow** agar agen menggunakan kredensial Anda untuk autentikasi koneksi dari dua tindakan konektor.

   ![Izinkan](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.id.png)

1. Agen kemudian akan menampilkan pesan konfirmasi yang mencakup model yang dipilih, diikuti dengan pengalihan ke topik **End of Conversation**. Keren!

   ![Permintaan diajukan](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.id.png)

1. Pilih **Yes** untuk memverifikasi sisa topik **End of Conversation**.

   ![Pilih Ya](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.id.png)

1. Selanjutnya, beri penilaian pengalaman dengan memilih salah satu bintang di kartu skala penilaian.

   Agen kemudian akan melanjutkan ke node **Question** terakhir di topik **End of Conversation**. Pilih **No**.

   ![Topik akhir percakapan](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.id.png)

1. Topik kemudian akan selesai karena pesan akhir akan ditampilkan di panel uji.

   ![Topik akhir percakapan](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.id.png)

1. Periksa kotak masuk email Anda untuk meninjau email yang dikirim ke manajer oleh alur agen. Anda dapat melihat detail perangkat yang dipilih, dan catatan yang dimasukkan di kartu adaptif.

   ![Email diterima](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.id.png)

1. Klik hyperlink dan browser seharusnya memuat item SharePoint dari perangkat tersebut. Hebat!

   ![Klik hyperlink di email](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.id.png)

#### 9.4.2 Meminta perangkat dan tidak memasukkan komentar di kartu adaptif

Sekarang mari kita uji skenario ketika komentar tidak dimasukkan.

1. Ulangi langkah-langkah yang sama yaitu

   - **Refresh** panel uji dan pilih ikon **activity map**
   - Masukkan pesan, `I need a laptop`
   - Jawab dengan `Yes` untuk pertanyaan tentang meminta perangkat

   ![Meminta perangkat](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.id.png)

1. Kali ini pilih **Surface Laptop 13** sebagai perangkat dan jangan masukkan komentar.

   ![Pilih perangkat](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.id.png)

1. **Kirimkan** permintaan dengan memilih tombol **Submit Request**.

   ![Kirim Permintaan](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.id.png)

1. Kali ini email yang diterima di kotak masuk Anda akan menampilkan **None** sebagai komentar.

   ![Email diterima](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.id.png)

#### 9.4.3 Tidak meminta perangkat

Mari kita uji skenario terakhir yaitu tidak meminta perangkat, dan topik **Goodbye** seharusnya dipanggil sesuai instruksi agen.

1. Ulangi langkah-langkah yang sama yaitu

   - **Refresh** panel uji dan pilih ikon **activity map**
   - Masukkan pesan, `I need a laptop`
   - Kali ini jawab dengan `No` untuk pertanyaan tentang meminta perangkat

   ![Uji agen](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.id.png)

1. Agen memanggil topik **Goodbye** dan pertanyaan seperti yang didefinisikan dalam topik ditanyakan.

   ![Topik Goodbye dipanggil](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.id.png)

## ✅ Misi Selesai

Selamat! 👏🏻 Anda telah belajar cara membangun alur agen dan menambahkannya ke topik **Request device** yang sudah ada, serta cara mengarahkan agen ke topik lain.

Ini adalah akhir dari **Lab 09 - Tambahkan alur agen untuk otomatisasi dan tingkatkan kemampuan topik**, pilih tautan di bawah untuk melanjutkan ke pelajaran berikutnya. Kita akan memperluas kasus penggunaan dalam lab pelajaran berikutnya.

⏭️ [Lanjut ke pelajaran **Add Event Triggers - Enable autonomous agent capabilities**](../10-add-event-triggers/README.md)

## 📚 Sumber Daya Taktis

🔗 [Memperkenalkan alur agen: Mengubah otomatisasi dengan alur kerja berbasis AI](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Ikhtisar alur agen](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Gunakan alur agen dengan agen Anda](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Daftar fungsi dalam panduan referensi](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Alur Agen di Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang salah yang timbul dari penggunaan terjemahan ini.