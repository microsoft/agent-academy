<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-20T00:42:05+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "ms"
}
-->
# 🚨 Misi 09: Tambahkan aliran ejen ke Topik anda untuk automasi

## 🕵️‍♂️ NAMA KOD: `OPERASI AUTOMATION POWERHOUSE`

> **⏱️ Tempoh Operasi:** `~30 minit`  

🎥 **Tonton Panduan**

[![Gambar kecil video aliran ejen](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.ms.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Tonton panduan di YouTube")

## 🎯 Ringkasan Misi

Ejen anda kini boleh berkomunikasi dengan pengguna dan memberikan maklumat, tetapi kecemerlangan operasi sebenar memerlukan ejen anda untuk bertindak. Misi ini akan mengubah ejen perbualan anda menjadi kuasa automasi dengan melengkapkannya dengan aliran ejen.

Pada akhir misi ini, anda akan mencipta automasi permintaan peranti hujung ke hujung yang menangkap input pengguna melalui kad adaptif, mendapatkan data daripada SharePoint, menghantar notifikasi kepada pengurus melalui e-mel, dan memberikan maklum balas pengguna yang lancar - semuanya diatur oleh ejen anda melalui automasi aliran kerja pintar.

## 🔎 Objektif

Dalam misi ini, anda akan belajar:

1. Memahami apa itu aliran ejen dan bagaimana ia berbeza daripada aliran awan Power Automate untuk automasi
1. Mempelajari ciri utama yang menjadikan aliran ejen berkuasa termasuk tindakan AI dan pengarang bahasa semula jadi
1. Meneroka pereka aliran ejen dan cara menggunakan ekspresi untuk pengendalian data dinamik
1. Mencipta automasi permintaan peranti lengkap yang mengintegrasikan data SharePoint dan notifikasi e-mel

## 🤔 Apa itu aliran ejen?

Aliran ejen adalah cara yang berkuasa untuk mengautomasi tugas berulang dan mengintegrasikan aplikasi serta perkhidmatan anda. Anggap ia sebagai aliran kerja berstruktur, langkah demi langkah yang boleh dilaksanakan oleh ejen anda untuk mengautomasi tugas atau berhubung dengan aplikasi dan perkhidmatan lain. Anda boleh menganggapnya sebagai aliran mini yang membantu ejen anda melakukan perkara seperti menghantar notifikasi, mengemas kini rekod, atau bertindak balas terhadap acara.

Berbeza dengan ejen autonomi yang menggunakan AI untuk membuat keputusan secara spontan, aliran ejen adalah **aliran kerja deterministik** - bermaksud ia mengikuti laluan yang sama setiap kali, memastikan hasil yang konsisten dan boleh dipercayai.

Secara ringkas:

- Ia membantu ejen anda _melakukan sesuatu_, bukan hanya _bercakap sesuatu_ kepada pengguna.
- Ia boleh digunakan semula di seluruh topik dan ejen, dan boleh dicetuskan oleh mesej pengguna, acara, atau aplikasi dan perkhidmatan lain.

## 🙋🏽 Ya, tetapi bagaimana ia berbeza dengan aliran awan Power Automate?

Kedua-dua aliran ejen dan aliran awan Power Automate membantu mengautomasi tugas. Ia direka untuk tujuan yang berbeza dan berfungsi dengan cara yang berbeza.

### 🤖 Aliran ejen dalam Copilot Studio

**Untuk apa mereka:**

- Dibina untuk ejen perbualan dan autonomi (melalui arahan ejen) dalam Copilot Studio.
- Fokus pada automasi pintar yang didorong oleh AI yang berinteraksi dengan sistem perniagaan.

**Mengapa ia berguna:**

- Mudah dibina dan diuruskan secara langsung dalam Copilot Studio.
- Hebat untuk mengautomasi tugas yang berlaku _semasa perbualan_ dengan pengguna seperti menghantar permintaan cuti.
- Anda tidak memerlukan lesen Power Automate yang berasingan kerana pengebilan berdasarkan penggunaan dalam Copilot Studio. Ini boleh menjimatkan masa dan kos untuk pasukan perusahaan.

**Keterbatasan:**

- Anda tidak boleh berkongsi, menyalin, atau menetapkan pemilik bersama.
- Aliran ejen hanya boleh dilihat dan digunakan dalam Copilot Studio.
- Pada masa ini, pencetus acara untuk ejen boleh diedit di portal pembuat Power Automate.

### ☁️ Aliran awan Power Automate

**Untuk apa mereka:**

- Direka untuk automasi tujuan umum di seluruh banyak aplikasi dan perkhidmatan.
- Boleh berjalan secara bebas atau berfungsi bersama aliran ejen.

**Mengapa ia berguna:**

- Menawarkan pelbagai penyambung.
- Ideal untuk mengautomasi proses di luar ejen.
- Boleh dikongsi, digunakan semula, dan diuruskan di seluruh pasukan.

**Keperluan:**

- Anda memerlukan lesen Power Automate untuk menggunakannya.

### 📗 Ringkasan

| Gunakan ini | Apabila anda mahu |
| :- | :- |
| Aliran ejen | Mengautomasi tugas dalam ejen, menggunakan AI, dan menyimpan semuanya dalam Copilot Studio |  
| Aliran awan Power Automate | Mengautomasi di seluruh aplikasi dan perkhidmatan, atau membina aliran kerja di luar ejen |

## 👍🏻 Mengapa menggunakan aliran ejen

Aliran ejen sentiasa mengikuti laluan tetap - ia melakukan perkara yang sama setiap kali apabila diberikan input yang sama.

Ini menjadikannya:

- **Boleh dipercayai** - anda boleh mempercayai bahawa ia akan berkelakuan sama setiap kali.
- **Boleh diramal** - anda tahu apa hasil yang diharapkan apabila aliran dijalankan.
- **Berdasarkan peraturan** - ia mengikuti langkah-langkah yang anda tentukan.

Manfaat lain adalah:

- **Automasi** - membolehkan ejen anda mengendalikan tugas berulang seperti menghantar borang atau notifikasi.
- **Bersambung** - berhubung dengan lebih daripada 1400 penyambung seperti ServiceNow, SharePoint, Salesforce. Jika tidak, anda boleh membina penyambung tersuai anda sendiri.
- **Terintegrasi rapat** - aliran ejen adalah sebahagian daripada logik ejen, ia dicetuskan secara langsung oleh mesej pengguna atau tindakan dalam perbualan.
- **Skalabiliti** - menggunakan semula aliran di seluruh ejen atau senario.
- **Tanpa kod atau kod rendah** - anda boleh membina aliran menggunakan bahasa semula jadi atau pereka visual.
- **Platform serba lengkap** - anda boleh mereka bentuk, menguji dan melancarkan aliran ejen di satu tempat - Copilot Studio. Tidak perlu beralih antara platform.

## 🏄🏻‍♂️ Bagaimana aliran ejen meningkatkan ejen anda?

Aliran ejen memperluaskan apa yang ejen anda boleh lakukan selain "berbual" dengan pengguna. Ia membolehkan ejen bertindak dan berinteraksi dengan sistem.

Katakan anda bekerja di jabatan kewangan dan menerima banyak invois daripada vendor. Biasanya, seseorang perlu membaca setiap invois, mengeluarkan maklumat penting - jumlah, tarikh, siapa pengirimnya, dan memeriksa jika semuanya sepadan dengan rekod anda. Kemudian menghantarnya kepada orang yang sesuai untuk kelulusan. Ini memerlukan masa dan usaha.

Dengan aliran ejen dalam Copilot Studio, anda boleh mengautomasi proses ini. Sebaik sahaja invois diterima, ejen:

1. Membaca dokumen menggunakan pemprosesan dokumen pintar untuk mencari maklumat penting.
1. Memeriksa butiran terhadap data perusahaan anda untuk memastikan semuanya kelihatan betul.
1. Menghantarnya untuk kelulusan kepada orang yang sesuai.

Ini menjimatkan masa, mengurangkan kesilapan dan menjadikan keseluruhan proses lebih lancar.

### Fikirkan begini

- **Ejen**: pembuat keputusan pintar
- **Aliran ejen**: pelaksana yang boleh dipercayai

### Mengapa ia penting

- Anda mendapat yang terbaik dari kedua-dua dunia: automasi yang boleh dipercayai dan AI yang fleksibel.
- Mudah untuk membina dan mengemas kini aliran mengikut perubahan keperluan perniagaan anda.
- Anda boleh menskalakan automasi di seluruh pasukan.

## 🔌 Ciri utama yang menjadikan aliran ejen berkuasa

1. **Pengarang bahasa semula jadi**
    - Anda boleh menerangkan apa yang anda mahu aliran lakukan dalam bahasa Inggeris biasa.
    - Copilot memahami niat anda dan membina aliran untuk anda.
    - Tidak perlu menulis kod - hanya terangkan idea anda.

1. **Tindakan AI**

    Gunakan AI untuk:

    - Membaca dan memahami dokumen atau imej.
    - Merumuskan kandungan panjang menjadi jawapan pendek yang berguna.
    - Memberikan cadangan atau keputusan yang bijak.

1. **Tindakan generatif**
    - Ini membolehkan aliran menyesuaikan diri secara langsung.
    - Ejen boleh merancang dan menyesuaikan langkah berdasarkan maklumat yang berubah.

1. **Tindakan integrasi**
    - Sambungkan aliran anda ke alat lain seperti Outlook, Microsoft Teams, ServiceNow, SharePoint dan aplikasi serta perkhidmatan lain, melalui lebih daripada 1400 penyambung terbina dalam atau penyambung tersuai anda sendiri.
    - Ini membantu ejen anda bekerja dengan aplikasi yang sudah digunakan oleh pasukan anda.

1. **Manusia dalam gelung**
    - Tambahkan langkah kelulusan di mana seseorang perlu menyemak atau mengesahkan sesuatu.
    - [Kelulusan lanjutan](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) menyokong peringatan, delegasi, dan kelulusan berperingkat.

## ⚙️ Bagaimana ia berfungsi

1. **Pencetus**

    Satu acara memulakan aliran - seperti pengguna bertanya soalan, mencetuskan aliran dari topik, waktu yang dijadualkan, atau acara yang berlaku dalam sistem lain.

1. **Tindakan**

    Ini adalah langkah-langkah yang diikuti oleh ejen seterusnya - menghantar e-mel, memanggil API, mengemas kini tiket dalam ServiceNow.

## 🧶 Cara mencipta aliran ejen

1. **Bahasa semula jadi**: terangkan apa yang anda mahu ejen lakukan, dan Copilot membinanya untuk anda.
1. **Kanvas pereka**: seret dan lepaskan tindakan, syarat, dan gelung dalam pereka aliran ejen untuk membina aliran ejen anda.

## 🎨 Apa itu pereka aliran ejen?

Ia adalah alat visual dalam Copilot Studio yang membantu anda membina, mengedit, dan mengurus aliran ejen yang memberikan arahan langkah demi langkah yang diikuti oleh ejen anda untuk menyelesaikan tugas. Ia direka untuk mudah digunakan, walaupun anda baru dalam aliran ejen.

### Ciri utama pereka aliran ejen

1. **Kanvas visual**
    - Anda boleh melihat keseluruhan aliran anda seperti diagram.
    - Mudah untuk zoom masuk/keluar, menyesuaikan pandangan atau menggunakan peta mini untuk menavigasi aliran yang besar.

1. **Tambah dan buang tindakan**
    - Klik butang _plus (+)_ untuk menambah tindakan baru seperti menghantar mesej atau mengemas kini item dalam senarai SharePoint.
    - Anda boleh mencari tindakan daripada penyambung, dan mengkonfigurasinya melalui tetapan.
    - Untuk membuang tindakan, klik _tiga titik (⋮)_ dan pilih _Delete_.

1. **Semak parameter**
    - Klik pada mana-mana tindakan untuk melihat atau mengedit tetapan yang dipanggil _parameter_.
    - Anda boleh memasukkan nilai secara manual atau menggunakan _ekspresi_ untuk menjadikannya dinamik.

1. **Sejarah versi**
    - Setiap kali anda menyimpan aliran anda, satu versi direkodkan.
    - Anda boleh kembali dan melihat atau memulihkan versi sebelumnya jika diperlukan.

1. **Pemeriksaan ralat**
    - _Flow Checker_ menyoroti sebarang ralat.
    - Semua ralat perlu diselesaikan sebelum menerbitkan aliran anda.

1. **Terbitkan dan uji**
    - Setelah aliran anda bebas ralat, terbitkan untuk menjadikannya aktif.
    - Gunakan ciri _Test_ untuk menjalankan aliran anda secara manual atau automatik, dan periksa jika ia berfungsi seperti yang diharapkan.

### Mengapa menggunakan pereka aliran ejen?

- **Visual dan intuitif** - anda boleh membina aliran dengan menyeret dan mengklik.
- **Selamat untuk bereksperimen** - sejarah versi membolehkan anda membatalkan perubahan.
- **Ujian terbina dalam** - membantu anda memastikan semuanya berfungsi sebelum dilancarkan.

## 🔤 Anda menyebut _ekspresi_ - apa itu ekspresi?

Ekspresi adalah formula kecil atau arahan yang membantu aliran ejen anda bekerja dengan data. Anda menggunakannya untuk mengira nilai, memformat teks, membuat keputusan, atau menarik maklumat tertentu daripada input.

### Mengapa menggunakan ekspresi?

Ekspresi membolehkan anda:

- **Menyesuaikan cara data dikendalikan** - menggabungkan nama, memformat tarikh.
- **Membuat keputusan** - jika nilai lebih besar daripada 10, lakukan sesuatu.
- **Mengubah data** - ubah teks kepada huruf kecil, ekstrak sebahagian daripada string.
- **Mengautomasi logik** - tanpa menulis kod penuh.

### Bagaimana rupa ekspresi?

Ekspresi menggunakan fungsi. Saya akan meminjam penjelasan tentang apa itu fungsi daripada bekas Microsoft MVP, Jerry Weinstock.

!!! quote
    Fungsi adalah logik terbina dalam untuk mengubah data anda sama ada melalui operasi mudah atau kompleks dalam ekspresi anda.

Fungsi membolehkan anda membina ekspresi tanpa perlu menulis sebarang kod.

Cara saya suka menerangkannya, adalah bahawa fungsi dalam aliran ejen serupa dengan fungsi Excel. Anda boleh melakukan operasi pada data untuk mengubahnya menjadi output yang diinginkan. Apabila membina formula anda dalam Excel, anda memilih nilai input anda daripada sel dalam jadual atau julat, dan kemudian menggunakan fungsi untuk memanipulasi output data. Contohnya adalah menggunakan fungsi `COUNT` untuk mengetahui bilangan sel yang mengandungi nombor daripada julat.

Dalam aliran ejen, bukannya merujuk data daripada sel dalam jadual, anda merujuk output data daripada pencetus atau tindakan semasa membina ekspresi anda. Meneruskan contoh sebelumnya, gunakan fungsi `length` untuk mendapatkan bilangan item yang dikembalikan daripada tindakan penyambung _Get items_ SharePoint.

### Mengapa fungsi penting?

Menggunakan fungsi menjadikan aliran ejen anda:

- **Lebih pintar** - ia boleh bertindak balas terhadap input atau syarat yang berbeza.
- **Fleksibel** - anda boleh menyesuaikan cara data dikendalikan.
- **Cekap** - anda mengelakkan langkah manual dengan mengautomasi logik.

### Fungsi yang paling berguna

Berikut adalah fungsi biasa yang digunakan dalam aliran ejen. Untuk senarai penuh fungsi, pergi ke [panduan rujukan](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Teks

- `concat()` - Menggabungkan dua atau lebih bahagian teks bersama.
      - Contoh: `concat('Hello ', firstName)` → “Hello John”

- `toLower()` / `toUpper()` - Menukar teks kepada huruf kecil atau huruf besar.
      - Berguna untuk menyeragamkan input.

- `substring()` - Mengekstrak sebahagian daripada string.
      - Contoh: Dapatkan 3 huruf pertama daripada nama.

- `trim()` - Menghapuskan ruang dari awal dan akhir teks.

#### 🔢 Matematik dan nombor

- `add()`, `sub()`, `mul()`, `div()` - Operasi matematik asas.
      - Contoh: `add(5, 3)` - hasilnya adalah 8

#### 📅 Tarikh dan masa

- `utcNow()` - Mendapatkan tarikh dan masa semasa dalam UTC.
      - Hebat untuk cap masa.

- `addDays()`, `addHours()` - Menambah masa kepada tarikh.
- Contoh: `addDays(utcNow(), 7)` menghasilkan 7 hari dari sekarang.

- `formatDateTime()` - Memformat tarikh ke dalam bentuk teks yang mudah dibaca.
  - Contoh: Isnin, 7 Julai 2025

#### ✅ Logik

- `if()` - Menjalankan satu nilai jika benar, nilai lain jika salah.
  - Contoh: `if(score > 50, 'Lulus', 'Gagal')`

- `equals()` - Memeriksa sama ada dua nilai adalah sama.

- `and()`, `or()`, `not()` - Menggabungkan pelbagai syarat.

#### 🪣 Fungsi lain yang berguna

- `coalesce()` - Mengembalikan nilai pertama yang tidak kosong.
  - Berguna untuk nilai sandaran/default.

- `guid()` - Menjana ID unik.
  - Berguna untuk penjejakan atau log.

- `length()` - Mengira berapa banyak aksara atau item dalam teks atau senarai.

## ⭐ Amalan terbaik

Berikut adalah beberapa amalan terbaik untuk membina aliran agen di Copilot Studio.

1. **Mulakan dengan mudah dan bina secara beransur-ansur**

   - Mulakan dengan tugas kecil dan jelas seperti menghantar mesej.
   - Tambahkan lebih banyak langkah selepas menguji asas automasi anda.

1. **Gunakan nama tindakan yang jelas dan deskriptif**

   - Labelkan setiap langkah dengan jelas supaya anda dan pasukan anda memahami apa yang dilakukan.
   - Contoh: daripada nama lalai "Kemas kini item" untuk tindakan penyambung SharePoint, tukar nama kepada apa yang dikemas kini, seperti "Kemas kini status peranti."

1. **Periksa kesilapan sebelum menerbitkan**

   - Gunakan **pemeriksa aliran** untuk mencari dan membetulkan sebarang isu.
   - Anda tidak boleh menerbitkan aliran jika terdapat kesilapan, jadi cuba selesaikan apabila ia berlaku.

1. **Uji aliran anda dengan teliti**

   - Hanya kerana ia disimpan dan diterbitkan, tidak bermakna ia berfungsi seperti yang diharapkan.
   - Gunakan ciri _Uji_ untuk menjalankan aliran anda secara manual atau automatik, dan periksa hasilnya.

1. **Gunakan Sejarah Versi**

   - Simpan aliran anda dengan kerap supaya anda boleh kembali ke versi terdahulu jika diperlukan.
   - Anda boleh melihat dan memulihkan versi sebelumnya menggunakan panel _Sejarah Versi_.

1. **Gunakan parameter dan ekspresi dengan bijak**

   - Apabila mengkonfigurasi tindakan, gunakan parameter untuk menjadikan aliran anda dinamik.
   - Anda boleh memasukkan nilai secara manual atau menggunakan ekspresi untuk mengiranya, atau menggabungkannya dengan nilai dari tindakan sebelumnya menggunakan pemilih _kandungan dinamik_.

1. **Padamkan tindakan yang tidak digunakan**

   - Jika anda menambah tindakan dan kemudian memutuskan anda tidak memerlukannya, buang untuk memastikan aliran anda bersih.

## 🧪 Makmal 09 - Tambahkan aliran agen untuk automasi dan tingkatkan keupayaan topik

Sekarang kita akan belajar bagaimana meningkatkan topik kita dengan kad adaptif dan menggunakan fungsi lanjutan topik dan nod.

- [9.1 Buat aliran agen](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Tambahkan aliran agen ke topik](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Kemas kini topik Permintaan peranti dengan beberapa nod untuk pengalaman pengguna yang lebih baik](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Uji agen menggunakan beberapa senario](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Kes penggunaan

**Sebagai** pengurus pekerja

**Saya mahu** menerima permintaan peranti

**Supaya saya** boleh menyemak peranti yang diminta oleh pekerja.

Mari kita mulakan!

### Prasyarat

1. **Senarai SharePoint**

   Kita akan menggunakan senarai SharePoint **Peranti** dari [Pelajaran 00 - Persediaan Kursus - Langkah 3: Buat laman SharePoint baru](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

   Jika anda belum menyediakan senarai SharePoint **Peranti**, sila kembali ke [Pelajaran 00 - Persediaan Kursus - Langkah 3: Buat laman SharePoint baru](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agen Meja Bantuan Contoso**

   Kita akan menggunakan agen yang sama yang dibuat sebelumnya dalam [Pelajaran 06 - Buat agen khusus menggunakan bahasa semula jadi dengan Copilot dan menghubungkannya dengan data anda](../06-create-agent-from-conversation/README.md).

### 9.1 Buat aliran agen

Dalam latihan ini, kita akan membuat aliran agen yang mengambil item SharePoint bagi peranti yang dipilih dan menghantar e-mel kepada pengurus dengan butiran peranti.

1. Dalam topik **Permintaan peranti**, tatal ke bawah ke nod **Tanya dengan kad adaptif** dan tambahkan nod baru. Pilih **Tambah alat** dan dalam tab **Alat Asas** pada panel yang muncul, pilih **Aliran Agen Baru**.

    ![Tambah Aliran Agen Baru](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.ms.png)

1. **Pereka Aliran Agen** akan dimuatkan dengan pencetus dan tindakan.

    - **Pencetus** - Apabila agen memanggil aliran
        - Ini akan mencetuskan aliran dari agen Copilot Studio.

    - **Tindakan** - Memberi respons kepada agen
        - Ini menghantar respons yang boleh mengandungi nilai output kembali kepada agen Copilot Studio.

    Pilih pencetus.

    ![Pilih pencetus](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.ms.png)

1. Seterusnya, kita akan menambah beberapa input untuk aliran agen.

    - `DeviceSharePointId` - ini akan menyimpan nilai, ID, item SharePoint. Nilai ID ini adalah output dari nod Tanya dengan kad adaptif di mana pengguna memilih peranti.

    - `User` - ini akan menjadi nama pengguna yang berasal dari pemboleh ubah sistem agen.

    - `AdditionalComments` - ini akan menjadi komen yang dimasukkan oleh pengguna, yang merupakan output dari nod Tanya dengan kad adaptif.

    Kita akan mula menambah `DeviceSharePointId` sebagai input untuk pencetus kita. Pilih **+ Tambah input**.

    ![Tambah input](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.ms.png)

1. Untuk jenis input pengguna, pilih **Teks**.

    ![Pilih Teks](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.ms.png)

1. Untuk nama input, masukkan yang berikut.

    ```text
    DeviceSharePointId
    ```

    ![Input DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.ms.png)

1. Sekarang kita akan menambah input kedua, `User`. Ulangi langkah yang sama, pilih **+ Tambah input** dan pilih **Teks**.

    ![Tambah input](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.ms.png)

1. Untuk nama input, masukkan yang berikut.

    ```text
    User
    ```

    ![Input User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.ms.png)

1. Sekarang kita akan menambah input ketiga, `AdditionalComments`. Ulangi langkah yang sama, pilih **+ Tambah input** dan pilih **Teks**.

    ![Tambah input](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.ms.png)

1. Untuk nama input, masukkan yang berikut.

    ```text
    AdditionalComments
    ```

    ![Input AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.ms.png)

1. Untuk input `AdditionalComments`, kita akan mengemaskini supaya ia menjadi pilihan. Pilih **ikon elipsis (...)** dan pilih **Jadikan medan pilihan**.

    ![Jadikan medan pilihan](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.ms.png)

1. Kerja yang bagus! Pencetus kini telah dikonfigurasi, mari kita teruskan. Pilih **ikon tambah +** di bawah pencetus untuk memasukkan tindakan baru.

    ![Tambah tindakan](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.ms.png)

1. **Panel Tindakan** akan muncul di mana anda boleh melihat tindakan dari lebih 1400 penyambung terbina dalam ke perkhidmatan Microsoft dan pihak ketiga. Dalam **medan carian**, masukkan yang berikut,

    ```text
    Get item
    ```

    Senarai tindakan akan dipaparkan dalam hasil carian. Pilih tindakan **Dapatkan item** dari penyambung **SharePoint**.

    ![Tindakan Dapatkan item](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.ms.png)

1. Kita kini boleh mula mengkonfigurasi tindakan **Dapatkan item**.

    Pilih **ikon elipsis (...)** dalam tindakan **Dapatkan item**.

    ![Pilih elipsis](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.ms.png)

1. Pilih **Namakan semula**.

    ![Pilih Namakan semula](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.ms.png)

1. Namakan semula tindakan kepada,

    ```text
    Get Device
    ```

    ![Namakan semula tindakan](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.ms.png)

1. Dalam medan **Alamat Laman**, pilih **Alamat Laman** laman SharePoint Contoso IT yang dibuat dalam [Pelajaran 00 - Persediaan Kursus - Langkah 3: Buat laman SharePoint baru](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Dalam medan **Nama Senarai**, pilih senarai SharePoint **Peranti**.

    ![Parameter input](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.ms.png)

1. Dalam medan **Id**, pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

    ![Pemilih kandungan dinamik](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.ms.png)

1. Dalam tab **Kandungan Dinamik** pada panel yang muncul, masukkan yang berikut,

    ```text
    sharepoint
    ```

    Hasil carian akan menunjukkan parameter input yang sepadan dengan nilai yang dicari. Pilih parameter **DeviceSharePointId** dari pencetus.

    Seterusnya, pilih **Tambah** untuk menambah input kandungan dinamik ke dalam parameter **Id** tindakan.

    ![Pilih input DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.ms.png)

1. Input kandungan dinamik dari pencetus kini dirujuk dalam parameter **Id** tindakan. Seterusnya, kita akan mengemaskini salah satu parameter lanjutan. Pilih **Tunjukkan semua** untuk melihat parameter lanjutan.

    ![Lihat parameter lanjutan](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.ms.png)

1. Parameter **Hadkan Lajur mengikut Paparan** akan dipaparkan dan secara lalai ia ditetapkan kepada **Gunakan semua lajur (Jangan hadkan)**. Kita akan mengemaskini nilai ini kepada paparan untuk menghadkan lajur yang dikembalikan dalam respons tindakan. Pilih parameter **Hadkan Lajur mengikut Paparan** untuk melihat senarai paparan.

    ![Pilih parameter](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.ms.png)

1. Pilih paparan **Semua Item**.

    ![Pilih paparan Semua Item](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.ms.png)

1. Pilih **ikon tambah +** di bawah tindakan _Dapatkan Peranti_ untuk memasukkan tindakan baru.

    ![Tambah tindakan baru](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.ms.png)

1. Dalam medan carian masukkan yang berikut,

    ```text
    send an email
    ```

    Senarai tindakan akan dipaparkan dalam hasil carian. Pilih tindakan **Hantar e-mel (V2)** dari penyambung **Office 365 Outlook**.

    ![Tindakan Hantar e-mel](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.ms.png)

1. Seterusnya, kita perlu membuat sambungan untuk tindakan penyambung. Pilih **Log masuk**.

    ![Buat sambungan](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.ms.png)

1. Pilih akaun pengguna yang telah log masuk.

    ![Pilih akaun pengguna](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.ms.png)

1. Pilih **Benarkan akses**. Sambungan kini telah dibuat.

    ![Pilih benarkan akses](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.ms.png)

1. Namakan semula tindakan kepada yang berikut,

    ```text
    Send an email to manager
    ```

    Seterusnya, mari kita tentukan parameter input tindakan kita.

    Untuk parameter input **Kepada**, pilih diri anda. Biasanya ini adalah pengurus anda atau kita akan menggunakan tindakan lain yang menarik pengurus anda berdasarkan profil Entra ID anda tetapi untuk tujuan pelajaran ini, pilih diri anda.

    Untuk parameter input **Subjek**, masukkan yang berikut,

    ```text
    Request type: new device
    ```

    Untuk parameter input **Badan**, masukkan yang berikut,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Namakan semula tindakan dan konfigurasi input](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.ms.png)

1. Seterusnya, kita akan mengemaskini parameter input **Badan** dengan rujukan kepada input kandungan dinamik dari **pencetus** atau tindakan **Dapatkan item**. Masukkan ruang selepas baris kedua kerana kita akan memasukkan nama pengguna dari input pencetus, **User**.

    Pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

    ![Tambah input User sebagai kandungan dinamik](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.ms.png)

1. Dalam tab **Kandungan Dinamik** pada panel yang muncul, pilih input **User** dari pencetus.

    Pilih **Tambah** untuk menambah input kandungan dinamik **User** ke dalam parameter **Badan** tindakan.

    ![Pilih input User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.ms.png)
1. Kandungan dinamik yang dimasukkan dari pencetus kini dirujuk dalam parameter **Body** tindakan. Kami akan ulang langkah yang sama untuk baris-baris lain dalam badan mesej e-mel.

    ![Input pengguna ditambah](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.ms.png)

1. Klik pada ruang di sebelah `Manufacturer:`. Pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    Dalam tab **Dynamic content** pada panel terbang, masukkan perkara berikut dalam medan carian,

    ```text
    manufacturer
    ```

    Pilih input **Manufacturer value** dari pencetus dan pilih **Add**.

    ![Tambah input Manufacturer value sebagai kandungan dinamik](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.ms.png)

1. Klik pada ruang di sebelah `Model:`. Pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    Dalam tab **Dynamic content** pada panel terbang, masukkan perkara berikut dalam medan carian,

    ```text
    model
    ```

    Pilih input **Model** dari tindakan **Get item** dan pilih **Add**.

    ![Tambah input Model sebagai kandungan dinamik](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.ms.png)

1. Untuk teks `Link to item in SharePoint`, kita akan mengemas kini ini menjadi pautan dalam badan mesej e-mel. Klik pada permulaan baris dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    ![Tambah kandungan dinamik](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.ms.png)

1. Klik selepas tag anchor HTML dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    Dalam tab **Dynamic content** pada panel terbang, masukkan perkara berikut dalam medan carian,

    ```text
    link to item
    ```

    Pilih input **Link to item** dari tindakan **Get item** dan pilih **Add**.

    ![Tambah Link to item sebagai kandungan dinamik](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.ms.png)

1. Kita perlu beralih ke editor HTML dengan memilih ikon **&lt;/&gt;**.

    ![Tambah input pengguna](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.ms.png)

1. Editor HTML kini diaktifkan. Klik sebelum teks `Link to item in SharePoint`, tambahkan tag anchor HTML untuk mencipta pautan. Salin dan tampal perkara berikut.

    ```text
    <a href="
    ```

    ![Tag HTML](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.ms.png)

1. Input kandungan dinamik **Link to item** kini dirujuk dalam parameter **Body**. Klik selepas input **Link to item**, salin dan tampal perkara berikut.

    ```text
    ">
    ```

    ![Tag HTML](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.ms.png)

1. Klik selepas teks `Link to item in SharePoint`, tutup tag anchor HTML. Salin dan tampal perkara berikut.

    ```text
    </a>
    ```

    ![Tag HTML](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.ms.png)

1. Pilih ikon **&lt;/&gt;** untuk beralih pandangan kod.

    ![Matikan pandangan kod](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.ms.png)

1. Kemudian pilih semula ikon **&lt;/&gt;** untuk beralih kembali ke pandangan kod.

    ![Kembali ke pandangan kod](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.ms.png)

1. Perhatikan bagaimana terdapat beberapa watak tambahan `&lt;br&gt;`. Padamkan watak-watak ini.

    ![Padam watak](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.ms.png)

1. Kini kita telah selesai menambah pautan pada badan mesej e-mel 😎 Pilih ikon **&lt;/&gt;** untuk beralih pandangan kod.

    ![Tag HTML dikemas kini](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.ms.png)

1. Klik selepas teks `Additional comments from` sebelum watak titik dua dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    ![Tambah parameter pengguna](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.ms.png)

1. Dalam tab **Dynamic content** pada panel terbang, masukkan perkara berikut dalam medan carian,

    ```text
    user
    ```

    Pilih parameter **User** dari pencetus dan pilih **Add**.

    ![Tambah parameter pengguna sebagai kandungan dinamik](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.ms.png)

1. Kini kita akan memasukkan ekspresi yang akan memaparkan nilai Additional Comments jika disediakan oleh pengguna dalam nod **Ask an adaptive card**, atau memaparkan "None" jika pengguna tidak memberikan sebarang komen.

    Klik selepas titik dua dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    ![Tambah ekspresi](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.ms.png)

1. Dalam tab **Function** pada panel terbang dan dalam medan ekspresi di atas, masukkan perkara berikut,

    ```text
    if(empty())
    ```

    Ekspresi ini menggunakan fungsi `if` untuk pernyataan if-else.

    Fungsi seterusnya yang digunakan ialah `empty` yang memeriksa sama ada nilai wujud atau tidak dalam parameter string. Parameter string yang dirujuk ialah nilai parameter input `AdditionalComments` dari pencetus.

    ![Jika kosong](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.ms.png)

1. Seterusnya, klik **di dalam kurungan** selepas fungsi `empty`. Kita akan memasukkan parameter input `AdditionalComments` dari pencetus.

    Pilih tab **Dynamic content**. Masukkan perkara berikut dalam medan carian,

    ```text
    Additional
    ```

    Skrol ke bawah panel dan pilih input **AdditionalComments** dari pencetus. Parameter kini akan ditambah sebagai parameter string dalam ekspresi.

    ![Tambah AdditionalComments sebagai kandungan dinamik](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.ms.png)

1. Seterusnya kita akan menentukan logik **_true_**, di mana jika parameter string `AdditionalComments` kosong, maka kita ingin memaparkan string (teks) `None`.

    Selepas kurungan yang melingkupi parameter string, masukkan perkara berikut,

    ```text
    , 'None',
    ```

    ![Logik benar](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.ms.png)

1. Akhirnya kita akan menentukan logik **_false_**, di mana jika parameter string `AdditionalComments` tidak kosong, maka kita ingin memaparkan nilai parameter input **AdditionalComments** dari pencetus kita.

    > Ingat bahawa nilai ini akan berasal dari medan Additional Comments pada kad adaptif dalam nod **Ask with adaptive card** dalam topik **Request device**.

    Selepas koma selepas logik **_true_** kita, pilih tab **Dynamic content**. Masukkan perkara berikut dalam medan carian,

    ```text
    Additional
    ```

    Skrol ke bawah panel dan pilih input **AdditionalComments** dari pencetus. Parameter kini akan ditambah sebagai parameter string dalam ekspresi.

    Kini tambahkan pada parameter **Body** kita dengan memilih **Add**.

    ![Logik palsu](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.ms.png)

1. Hebat, ekspresi kita telah selesai! Ekspresi kini telah ditambah pada parameter **Body**. Akhir sekali, formatkan baris terakhir dalam Italic.

    ![Italic](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.ms.png)

1. Kini kita akan mengemas kini tindakan **Respond to the agent** untuk menghantar nilai parameter **Model value** dari tindakan **Get item** kembali kepada agen.

    Tekan dan tahan kekunci kiri tetikus anda dan gerakkan ke atas dalam reka bentuk untuk melihat tindakan **Respond to the agent**.

    Pilih tindakan **Respond to the agent** dan pilih output **Text** sebagai jenisnya.

    ![Pilih output Text](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.ms.png)

1. Masukkan perkara berikut sebagai nama output.

    ```text
    ModelValue
    ```

    ![Output ModelValue](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.ms.png)

1. Pilih medan nilai dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

    ![Masukkan ekspresi](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.ms.png)

1. Dalam tab **Dynamic content** pada panel terbang, masukkan perkara berikut dalam medan carian,

    ```text
    model
    ```

    Pilih parameter **Model** dari tindakan **Get item** dan pilih **Add**.

    ![Tambah parameter Model sebagai kandungan dinamik](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.ms.png)

1. Parameter **Model** kini menjadi nilai output teks. Pilih **Save draft** untuk menyimpan aliran agen kita.

    Kita telah selesai membuat aliran agen kita 👏🏻

    ![Pilih save draft](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.ms.png)

1. Mari kita buat satu lagi kemas kini pada aliran agen kita sebelum menerbitkan. Pilih tab **Overview** dan pilih **Edit**.

    ![Pilih Edit](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.ms.png)

1. Untuk **Flow name**, salin dan tampal perkara berikut.

    ```text
    Send device request email
    ```

    Untuk **Description**, pilih ikon **refresh** untuk menggunakan AI bagi menjana deskripsi secara automatik berdasarkan pencetus dan tindakan dalam aliran agen.

    Pilih **Save** untuk menyimpan nama dan deskripsi yang dikemas kini untuk aliran agen.

    ![Namakan semula, tambah deskripsi, dan simpan butiran](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.ms.png)

1. Pilih tab **Designer** dan pilih **Publish** untuk menerbitkan aliran agen supaya ia boleh ditambah sebagai nod dalam topik **Request device**.

    ![Terbitkan](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.ms.png)

1. Mesej pengesahan akan muncul tidak lama lagi untuk mengesahkan bahawa aliran agen telah diterbitkan.

    ![Mesej pengesahan](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.ms.png)

### 9.2 Tambah aliran agen ke topik

Mari kita tambahkan aliran agen ke topik **Request device**.

1. Pilih **Agents** dalam menu di sebelah kiri dan pilih **Contoso Helpdesk Agent**.

    ![Pilih Agents](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.ms.png)

1. Pilih tab **Topics**.

    ![Pilih tab Topics](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.ms.png)

1. Pilih topik **Request device**.

    ![Pilih topik Request device](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.ms.png)

1. Skrol ke bawah ke nod **Ask with adaptive card** dan tambahkan nod baru.

    Pilih **Add a tool** dan dalam tab **Basic tools** pada panel terbang, pilih aliran agen **Send device request email** yang baru kita buat dan terbitkan.

    ![Pilih aliran agen](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.ms.png)

1. Untuk input pencetus aliran agen kita, kita perlu memilih output pemboleh ubah dari nod **Ask with adaptive card**.

    Pilih ikon **ellipsis (...)** untuk input **DeviceSharePointId**.

    ![Pilih pemboleh ubah](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.ms.png)

1. Pilih pemboleh ubah **deviceSelectionId** yang merupakan salah satu output yang ditentukan dalam nod **Ask with adaptive card**.

    ![Pilih pemboleh ubah deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.ms.png)

1. Seterusnya, pilih ikon **ellipsis (...)** untuk input **User**.

    ![Pilih Pemboleh ubah](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.ms.png)

1. Pilih tab **System** dalam panel pemboleh ubah terbang dan pilih **User.DisplayName**. Pemboleh ubah ini menyimpan nama paparan pengguna dalaman yang berinteraksi dengan agen.

    ![Pilih pemboleh ubah sistem User.DisplayName](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.ms.png)

1. Seterusnya, pilih ikon **greater than** untuk **Advanced inputs** untuk mengembangkan dan melihat input **AdditionalComments**.

    ![Kembangkan input lanjutan](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.ms.png)

1. Pilih ikon **ellipsis (...)** untuk input AdditionalComments.

    ![Pilih Pemboleh ubah](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.ms.png)

1. Pilih tab **Formula** dan ikon kembangkan dalam panel pemboleh ubah terbang kerana kita akan menggunakan ekspresi Power Fx.

    ![Tab Formula](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.ms.png)

1. Sama seperti ekspresi dalam aliran agen yang melakukan pemeriksaan bersyarat menggunakan fungsi _if_, tetapi kali ini
    - menggunakan fungsi Power Fx,
    - dan memasukkan sama ada tiada nilai, atau nilai pemboleh ubah output `commentsId` dari nod **Ask with adaptive card**.

    Masukkan fungsi berikut dalam medan Power Fx,

    ```text
    If(IsBlank())
    ```

Ungkapan ini menggunakan fungsi `If` untuk pernyataan if-else.

Fungsi seterusnya yang digunakan ialah `IsBlank` yang memeriksa sama ada nilai wujud atau tidak wujud dalam parameter string. Parameter string yang dirujuk ialah pemboleh ubah output `commentsId` daripada nod **Ask with adaptive card**.

![Fungsi If dan IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.ms.png)

1. Seterusnya, klik **di dalam kurungan** selepas fungsi `IsBlank`. Kita akan memasukkan pemboleh ubah output `commentsId` daripada nod **Ask with adaptive card**.

   Masukkan perkara berikut di dalam kurungan,

    ```text
    Topic.commentsId
    ```

   Dan tambahkan koma selepas kurungan.

   ![Rujuk pemboleh ubah output commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.ms.png)

1. Seterusnya kita akan menentukan logik

   - apabila **_true_** - jika parameter string `Topic.commentsId` kosong, maka kita tidak mahu memasukkan sebarang nilai.
   - apabila **_false_** - jika parameter string `Topic.commentsId` tidak kosong, maka masukkan nilai pemboleh ubah commentsId.

   Selepas kurungan yang melampirkan parameter string, masukkan perkara berikut,

    ```text
    "", Topic.commentsId)
    ```

   Ungkapan Power Fx sepatutnya seperti berikut,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   Kerja yang bagus, ungkapan kita telah lengkap! 🙌🏻 Sekarang pilih **Insert** untuk menetapkan parameter input aliran ejen kepada ungkapan Power Fx.

   ![Ungkapan Power Fx](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.ms.png)

1. **Simpan** topik tersebut.

### 9.3 Kemas kini topik Permintaan Peranti dengan beberapa nod untuk pengalaman pengguna yang lebih baik

Seterusnya kita akan menambah dua nod lagi:

- **Send a message** - ini akan bertindak sebagai mesej pengesahan yang merujuk kepada peranti yang dipilih dan bahawa permintaan mereka telah dihantar.

- **Topic management** - untuk menutup perbualan, kita akan mengalihkan kepada nod **End of conversation**.

Mari kita mulakan!

1. Pilih **ikon tambah +** di bawah nod aliran ejen dan pilih nod **Send a message**.

   ![Tambah nod send a message](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.ms.png)

1. Masukkan perkara berikut di bawah dalam medan mesej,

    ```text
    Thanks
    ```

   Kemudian pilih **Insert variable** kerana kita akan merujuk kepada nama pengguna.

   ![Insert variable](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.ms.png)

1. Pilih tab **System** dan cari `User` dalam medan carian. Pilih pemboleh ubah **User.DisplayName**.

   ![Pilih pemboleh ubah sistem](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.ms.png)

1. Masukkan perkara berikut di bawah dalam medan mesej,

    ```text
    . Your selected device,
    ```

   Kemudian pilih **Insert variable** dan kali ini dalam tab **Custom**, pilih pemboleh ubah **ModelValue**.

   Kemudian masukkan perkara berikut di bawah untuk melengkapkan mesej.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   Mesej sepatutnya kelihatan seperti berikut.

   ![Send message](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.ms.png)

1. Akhir sekali, pilih **ikon tambah +** di bawah nod **Send a message** dan pilih **Topic management**, diikuti dengan **Go to another topic** dan pilih **End of Conversation**.

   ![Topic management](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.ms.png)

1. **Simpan** topik tersebut.

   ![Simpan](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.ms.png)

### 9.4 Uji ejen menggunakan beberapa senario

Kerja yang bagus!!! 😁 Kita kini boleh menguji ejen kita.

#### 9.4.1 Meminta peranti dan memasukkan komen dalam kad adaptif

1. **Segarkan semula** panel ujian, pilih ikon **activity map** dan masukkan perkara berikut sebagai mesej kepada ejen.

    ```text
    I need a laptop
    ```

   ![Uji ejen](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.ms.png)

1. Ejen mencetuskan **Available devices** dan membalas dengan senarai peranti yang tersedia. Kita akan masukkan perkara berikut sebagai jawapan kepada soalan sama ada kita ingin meminta peranti.

    ```text
    Yes
    ```

   ![Ya](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.ms.png)

1. Perhatikan bagaimana ejen memanggil **Request device** mengikut arahan ejen dan kad adaptif kini dipaparkan dalam mesej ejen.

   Pilih peranti **Surface Laptop 15** dan tambahkan perkara berikut sebagai komen.

    ```text
    I need 16GB of RAM please
    ```

   ![Pilih peranti dan masukkan komen](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.ms.png)

1. Skrol ke bawah sehingga anda melihat butang **Submit Request** dan pilih untuk menghantar kad adaptif kepada ejen.

   ![Hantar permintaan](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.ms.png)

1. Pilih **Allow** untuk ejen menggunakan kelayakan anda bagi pengesahan sambungan dua tindakan penyambung.

   ![Allow](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.ms.png)

1. Ejen kemudian akan memaparkan mesej pengesahan yang termasuk model yang dipilih, diikuti dengan pengalihan kepada topik **End of Conversation**. Hebat!

   ![Permintaan dihantar](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.ms.png)

1. Pilih **Yes** untuk mengesahkan selebihnya topik **End of Conversation**.

   ![Pilih Ya](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.ms.png)

1. Seterusnya, nilai pengalaman dengan memilih mana-mana bintang dalam kad skala penilaian.

   Ejen kemudian akan meneruskan ke nod **Question** terakhir dalam topik **End of Conversation**. Pilih **No**.

   ![Topik akhir perbualan](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.ms.png)

1. Topik kemudian akan selesai apabila mesej akhir dipaparkan dalam panel ujian.

   ![Topik akhir perbualan](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.ms.png)

1. Periksa Inbox akaun e-mel anda untuk menyemak e-mel yang dihantar kepada pengurus oleh aliran ejen. Anda boleh melihat butiran peranti yang dipilih, dan nota yang dimasukkan dalam kad adaptif.

   ![E-mel diterima](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.ms.png)

1. Klik pautan dan pelayar sepatutnya memuatkan item SharePoint peranti tersebut. Hebat!

   ![Klik pautan dalam e-mel](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.ms.png)

#### 9.4.2 Meminta peranti dan tidak memasukkan komen dalam kad adaptif

Sekarang mari kita uji senario apabila komen tidak dimasukkan.

1. Ulangi langkah yang sama

   - **Segarkan semula** panel ujian dan pilih ikon **activity map**
   - Masukkan mesej, `I need a laptop`
   - Balas dengan `Yes` kepada soalan meminta peranti

   ![Meminta peranti](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.ms.png)

1. Kali ini pilih **Surface Laptop 13** sebagai peranti dan jangan masukkan komen.

   ![Pilih peranti](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.ms.png)

1. **Hantar** permintaan dengan memilih butang **Submit Request**.

   ![Hantar Permintaan](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.ms.png)

1. Kali ini e-mel yang diterima dalam Inbox anda akan memaparkan **None** sebagai komen.

   ![E-mel diterima](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.ms.png)

#### 9.4.3 Tidak meminta peranti

Mari kita uji senario terakhir iaitu tidak meminta peranti, dan topik **Goodbye** sepatutnya dipanggil mengikut arahan ejen.

1. Ulangi langkah yang sama

   - **Segarkan semula** panel ujian dan pilih ikon **activity map**
   - Masukkan mesej, `I need a laptop`
   - Kali ini balas dengan `No` kepada soalan meminta peranti

   ![Uji ejen](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.ms.png)

1. Ejen memanggil topik **Goodbye** dan soalan seperti yang ditakrifkan dalam topik ditanya.

   ![Topik Goodbye dipanggil](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.ms.png)

## ✅ Misi Selesai

Tahniah! 👏🏻 Anda telah belajar cara membina aliran ejen anda dan menambahkannya kepada topik **Request device** yang sedia ada, serta cara mengalihkan ejen kepada topik lain.

Ini adalah penghujung **Lab 09 - Tambah aliran ejen untuk automasi dan tingkatkan keupayaan topik**, pilih pautan di bawah untuk bergerak ke pelajaran seterusnya. Kita akan mengembangkan kes penggunaan dalam lab pelajaran berikutnya.

⏭️ [Bergerak ke pelajaran **Tambah Pencetus Acara - Aktifkan keupayaan ejen autonomi**](../10-add-event-triggers/README.md)

## 📚 Sumber Taktikal

🔗 [Memperkenalkan aliran ejen: Mengubah automasi dengan aliran kerja berasaskan AI](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Gambaran keseluruhan aliran ejen](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Gunakan aliran ejen dengan ejen anda](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Senarai fungsi dalam panduan rujukan](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Aliran Ejen dalam Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.