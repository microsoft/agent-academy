<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-17T17:19:13+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "id"
}
-->
# Misi 03: Tambahkan Pemicu Acara untuk bertindak secara mandiri

--8<-- "disclaimer.md"

## 🕵️‍♂️ NAMA KODE: `OPERASI TITIK SINYAL`

> **⏱️ Waktu Operasi:** `~45 menit`

## 🎯 Ringkasan Misi

Selamat datang kembali, Agen. Dalam [Misi 02](../02-multi-agent/README.md) - Anda telah belajar cara membangun agen anak untuk Penerimaan Aplikasi dan agen terhubung untuk Persiapan Wawancara guna memperluas kemampuan Agen Perekrutan utama Anda.

Tugas Anda, jika Anda memilih untuk menerimanya, adalah **Operasi Titik Sinyal** - mendalami **pemicu acara** - meningkatkan sistem agen Anda dari reaktif menjadi **operasi mandiri**. Anda akan mengubah agen Anda dari menunggu input manusia menjadi merespons secara proaktif terhadap acara eksternal dan mengambil tindakan cerdas tanpa pengawasan.

Anggaplah ini sebagai peningkatan dari agen yang _menjawab pertanyaan_ menjadi agen yang _mengantisipasi kebutuhan_ dan _bertindak secara mandiri_. Melalui pemicu acara dan alur kerja otomatis, Agen Perekrutan Anda akan mendeteksi email resume yang masuk, memproses lampiran secara otomatis, menyimpan data di Dataverse, dan memberi tahu tim rekrutmen HR Anda melalui Microsoft Teams - semuanya sementara Anda fokus pada tugas yang lebih bernilai tinggi.

Selamat datang di dunia di mana otomatisasi bertemu dengan kecerdasan.

## 🔎 Tujuan

Dalam misi ini, Anda akan belajar:

1. Bagaimana pemicu acara memungkinkan perilaku agen mandiri tanpa interaksi pengguna
1. Perbedaan antara agen interaktif dan mandiri di Copilot Studio
1. Cara membuat pemicu acara yang secara otomatis memproses lampiran email dan mengunggah file ke Dataverse
1. Cara membangun alur agen yang memposting kartu adaptif ke saluran Teams untuk pemberitahuan
1. Cara meneruskan data antara pemicu acara dan alur agen untuk otomatisasi ujung ke ujung

## 🤔 Apa itu Pemicu Acara?

Sebelumnya dalam [Recruit](../../recruit/10-add-event-triggers/README.md), kita telah belajar tentang pemicu acara. Mari kita lakukan rekap cepat tentang ini jika Anda melewatkannya.

**Pemicu acara** memungkinkan agen _bertindak_ sendiri ketika sesuatu terjadi di sistem lain - tidak diperlukan pesan pengguna. Ketika acara yang dikonfigurasi terjadi - seperti “item baru di SharePoint,” “email baru,” “tugas Planner ditugaskan,” atau bahkan pengulangan berbasis waktu, konektor mengirimkan payload pemicu ke agen Anda. Agen kemudian mengikuti instruksi Anda untuk memutuskan tindakan atau topik mana yang akan dipanggil.

### Karakteristik Utama

- **Aktivasi mandiri:**
      - Tidak seperti pemicu topik yang dimulai ketika pengguna mengetik ke agen, pemicu acara terjadi dari acara eksternal, memungkinkan perilaku proaktif.

- **Berbasis payload:**
      - Setiap acara mengirimkan payload (variabel + instruksi opsional) melalui konektor. Agen menggunakan instruksi yang Anda tentukan dan payload untuk memilih apa yang harus dilakukan selanjutnya.
      - Misalnya _memanggil topik_ atau _menjalankan tindakan yang ditentukan oleh Tools_.

- **Contoh bawaan:**
      - File atau item SharePoint/OneDrive dibuat
      - Tugas Planner selesai/diberikan
      - Respons Microsoft Forms dikirimkan
      - Pengulangan/jadwal

    Ketersediaan tergantung pada kebijakan data organisasi Anda yang dikonfigurasi di Power Automate.

- **Memerlukan orkestrasi generatif:**
      - Pemicu acara hanya tersedia ketika orkestrasi generatif diaktifkan untuk agen.

- **Penagihan/penggunaan:**
      - Setiap pengiriman pemicu dihitung sebagai pesan terhadap kapasitas Copilot Studio.
      - Misalnya pengulangan 10 menit mengirimkan pesan setiap 10 menit.

- **Model otentikasi dan pengaturan:**
      - Anda menambahkan pemicu dalam Ikhtisar agen, di bawah _Triggers_. Otentikasi untuk konektor pemicu menggunakan akun pembuat agen (“otentikasi penulis agen”).
      - Anda dapat mengedit parameter pemicu dan payload di portal pembuat Power Automate.

- **Pengujian & observabilitas:**
      - Anda dapat menguji pemicu dari panel uji agen dan memeriksa perilaku dengan peta aktivitas sebelum menerbitkan.

!!! info "TL;DR untuk pengembang"

    Anggaplah pemicu acara sebagai **sinyal mirip webhook** yang mendorong payload terstruktur ke agen Anda, memungkinkan agen _memulai_ pekerjaan dan menghubungkan tindakan di seluruh sistem - tanpa menunggu pengguna untuk bertanya.

### Pemicu topik - bagaimana mereka berbeda

Sebelumnya Anda telah belajar tentang pemicu topik dalam [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), namun Anda mungkin masih bertanya-tanya bagaimana _Pemicu Topik_ berbeda dari _Pemicu Acara_, dan mengapa perbedaan itu penting untuk memahami apa yang membuat agen mandiri.

Pemicu topik mengontrol _kapan topik berjalan_, biasanya sebagai respons terhadap pesan pengguna.

- Dalam orkestrasi generatif, pemicu default adalah **Oleh agen** - perencana memilih topik yang nama/deskripsinya paling cocok dengan pesan pengguna.
- Dalam orkestrasi klasik, default adalah **Frasa** - perencana memilih topik ketika satu atau beberapa frasa pemicu paling cocok dengan pesan pengguna.

Jenis pemicu lainnya termasuk `Pesan diterima`, `Acara diterima`, `Aktivitas diterima`, `Pembaruan percakapan`, `Invoke diterima`, `Pengalihan`, `Tidak aktif`, dan `Rencana selesai`.

!!! info "Perbedaan inti"

    Pemicu topik adalah pemula _aktivitas percakapan_ di dalam obrolan.
    
    Pemicu acara adalah pemula _acara sistem_ yang dikirimkan melalui konektor yang dapat menjalankan agen tanpa percakapan sama sekali.

### Panduan cepat Pemicu Topik vs Pemicu Acara

- **Pemicu topik:** Pengguna (atau aktivitas obrolan) mengatakan/melakukan X ➡️ jalankan Topik T.
- **Pemicu acara:** SharePoint/Planner/Email/Timer terjadi dengan payload P ➡️ agen mengevaluasi instruksi ➡️ memanggil Tindakan/Topik sesuai.

## 🏓 Agen interaktif vs Agen mandiri - perbandingan

Sekarang Anda tahu perbedaan antara pemicu acara dan pemicu topik, mari kita pelajari perbedaan antara agen interaktif vs agen mandiri.

Dalam istilah Copilot Studio, "interaktif" merujuk pada agen yang terutama berinteraksi melalui **topik** dalam obrolan atau saluran. "Mandiri" merujuk pada agen yang juga memanfaatkan **pemicu acara** untuk berjalan tanpa input pengguna.

Tabel berikut merangkum perbedaan dan kesamaan mereka.

| Dimensi                             | Agen interaktif       | Agen mandiri                                                                                                  |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Bagaimana memulai                   | Pengguna (atau aktivitas obrolan) memicu topik. Contoh: Oleh agen, Frasa, Pesan diterima.   | Pemicu acara eksternal mengirimkan payload melalui konektor ke agen. Contoh: SharePoint, Planner, email, jadwal, dll. |
| Penggunaan utama                    | Tanya jawab, alur kerja terpandu, tindakan berbasis permintaan dalam obrolan - Teams, web, dll.  | Operasi proaktif dan otomatisasi latar belakang - bereaksi terhadap perubahan sistem lalu memberi tahu, mengarsipkan, atau mengatur tugas. |
| Permukaan pemicu                    | Pemicu topik: Oleh agen / Frasa / Pesan diterima / Jenis aktivitas / Invoke / Tidak aktif / Rencana selesai | Perpustakaan pemicu acara melalui konektor; payload mencakup data acara + instruksi opsional. |
| Perencana (orkestrasi generatif)    | Sangat digunakan untuk pemicu Oleh agen dan Rencana selesai untuk memilih/mengurutkan topik. | Diperlukan untuk pemicu acara; agen menggunakan instruksi + payload untuk memutuskan tindakan/topik mana yang akan dipanggil. |
| Contoh khas                         | Pengguna bertanya "Apa kebijakan pengembalian dana kita?" → Topik berjalan, kueri pengetahuan, respons. | Tugas Planner baru ditugaskan → Pemicu acara terjadi → Agen memposting pesan Teams, memperbarui catatan, atau memanggil topik. |
| Jalur pengaturan                    | Buat topik, tentukan jenis pemicu, buat dialog/tindakan; terbitkan ke saluran. | Tambahkan pemicu acara (Ikhtisar → Triggers), otentikasi konektor dengan kredensial penulis agen, konfigurasikan payload/instruksi; uji melalui panel uji; terbitkan. |
| Otentikasi dan tata kelola          | Berjalan di bawah konteks saluran/otentikasi; pemicu topik merespons aktivitas obrolan di saluran yang diizinkan. | Ketersediaan pemicu tergantung pada kebijakan data Power Automate; konektor berjalan di bawah akun pembuat agen. |
| Observabilitas                      | Uji topik dalam Copilot Studio, periksa transkrip percakapan/aktivitas. | Gunakan Uji pemicu dan peta aktivitas untuk memvalidasi eksekusi sebelum menerbitkan, pantau aktivitas setelah menerbitkan. |
| Dampak kapasitas                    | Setiap pesan pengguna/respons agen adalah pesan yang mengonsumsi kapasitas. | Setiap pengiriman acara juga merupakan pesan, ditambah tindakan berikutnya. Contoh: pengulangan 10 menit = 6 pesan/jam |

### Kapan menggunakan yang mana?

- Pilih **pemicu topik (interaktif)** ketika pengguna memulai percakapan agen - FAQ, penerimaan terpandu, atau tugas gaya perintah di dalam obrolan. Pemicu Oleh agen perencana mengurangi kurasi frasa manual.
- Tambahkan **pemicu acara (mandiri)** ketika agen harus memulai percakapan atau mengambil tindakan sendiri - pada pembaruan di SharePoint/Dataverse, email masuk, atau pada jadwal. Ini mengubah Anda dari operasi reaktif menjadi proaktif.

## Tips & perhatian untuk pengembang

1. **Aktifkan orkestrasi generatif** untuk agen apa pun yang ingin Anda buat mandiri. Pemicu acara tidak akan muncul jika tidak diaktifkan.

1. **Model payload lebih awal.** Tentukan bidang minimal apa yang dibutuhkan agen Anda dari pemicu seperti `itemId`, `assignedTo`, `dueDate` dan tambahkan instruksi ringkas yang memberi tahu agen tindakan/topik mana yang harus dipanggil berdasarkan nilai payload.

1. **Lingkup otentikasi penting.** Pemicu mengotentikasi menggunakan akun pembuat agen. Pastikan akun tersebut memiliki izin konektor yang tepat dan mematuhi kebijakan data Power Automate.

1. **Kontrol biaya dan kebisingan.** Pengulangan frekuensi tinggi atau sumber yang sangat aktif dapat dengan cepat meningkatkan konsumsi pesan - batasi jika memungkinkan atau tambahkan kondisi dalam pemicu untuk menyaring acara.

1. **Uji sebelum menerbitkan.** Gunakan **Uji pemicu** dan peta aktivitas untuk melihat rencana dan tindakan yang dipanggil - iterasi pada instruksi/payload hingga perilaku stabil.

## 🧪 Lab 03 - Mengotomatisasi email aplikasi kandidat

Selanjutnya kita akan menambahkan pemicu acara ke **Agen Perekrutan** dan membangun alur agen di agen anak **Penerimaan Aplikasi** untuk menangani pemrosesan lebih lanjut secara mandiri.

### ✨ Skenario penggunaan

!!! info ""

    **Sebagai** Perekrut HR

    **Saya ingin** diberi tahu ketika email dengan resume tiba di Inbox saya yang telah diunggah secara otomatis ke Dataverse

    **Sehingga saya dapat** tetap diberi tahu tentang resume yang dikirim melalui email untuk aplikasi yang diunggah secara otomatis ke Dataverse

Kita akan mencapai ini menggunakan dua teknik

1. Pemicu acara untuk ketika email tiba,
    1. Periksa `contentType` file sama dengan `PDF` sebagai format tipe.
    1. Ekstrak file dan unggah ke Dataverse menggunakan tindakan melalui konektor Dataverse.
    1. Kemudian kirimkan prompt ke agen untuk pemrosesan lebih lanjut dengan meneruskan parameter input dari tindakan Dataverse.

1. Alur agen akan ditambahkan ke agen anak **Penerimaan Aplikasi** yang dipanggil oleh prompt dalam pemicu acara.
    1. Gunakan parameter input yang diteruskan dari prompt pemicu acara dalam kartu adaptif yang diposting ke saluran di Microsoft Teams untuk memberi tahu tim Rekrutmen HR. Kartu adaptif akan memiliki tautan ke baris di Dataverse yang akan dilihat di **Agen Perekrutan**.

Mari kita mulai!

### ✨ Prasyarat untuk menyelesaikan misi ini

Anda perlu **salah satu**:

- **Telah menyelesaikan Misi 01 dan Misi 02** dan memiliki Agen Perekrutan Anda siap, **ATAU**
- **Impor solusi awal Misi 03** jika Anda memulai dari awal atau perlu mengejar ketinggalan. [Unduh Solusi Awal Misi 03](https://aka.ms/agent-academy)

!!! note "Impor Solusi dan Data Contoh"
    Jika Anda menggunakan solusi awal, lihat [Misi 01](../01-get-started/README.md) untuk instruksi rinci tentang cara mengimpor solusi dan data contoh ke lingkungan Anda.

Anda juga memerlukan akses ke **Microsoft Teams** untuk menyelesaikan latihan lab kedua memposting kartu adaptif ke Microsoft Teams.

### Lab 3.1 - Mengotomatisasi pengunggahan resume ke Dataverse yang diterima melalui email

1. Di Agen Perekrutan, gulir ke bawah di **tab Ikhtisar** dan pilih **+ Tambahkan pemicu**.

       ![Tambahkan pemicu ke agen](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.id.png)

1. Daftar pemicu akan muncul. Pilih **Ketika email baru tiba (V3)** dan pilih **Berikutnya**.

       ![Pilih pemicu Ketika email baru tiba (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.id.png)

1. Sekarang kita akan melihat **Nama Pemicu** dan referensi koneksi **Masuk** untuk aplikasi yang terdaftar.

       Ubah nama pemicu menjadi berikut ini,
    
       ```text
       Ketika email baru tiba dari pelamar
       ```

       Pastikan Anda melihat tanda centang hijau di setiap referensi koneksi aplikasi yang terdaftar. Jika Anda tidak melihat tanda centang hijau, masuk melalui elipsis (...) dan pilih **+ Referensi koneksi baru** untuk membuat referensi koneksi baru.

       ![Perbarui detail untuk nama pemicu dan periksa referensi koneksi](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.id.png)

1. Langkah terakhir adalah mengatur properti input pemicu. Perbarui properti berikut ke nilai berikut,

     | Properti | Cara Mengatur | Detail |
     |----------|---------------|--------|
     | **Sertakan Lampiran (Opsional)** | Dropdown | Ya |
     | **Filter Subjek (Opsional)** | Ketik/Masukkan dengan keyboard | Aplikasi |
     | **Hanya dengan Lampiran (Opsional)** | Dropdown | Ya |

       Pilih **Buat pemicu**.

       ![Konfigurasikan input pemicu](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.id.png)

1. Setelah dibuat, pesan konfirmasi akan muncul bahwa pemicu telah ditambahkan ke agen. Pilih **Tutup** dan pemicu akan terdaftar di bagian **Triggers**.
Sekarang kita akan memperbarui pemicu acara untuk menambahkan beberapa kemampuan otomatisasi lebih lanjut. Pilih **ellipsis (...)** pada pemicu dan pilih **Edit in Power Automate**.

![Pilih Edit in Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.id.png)

1. Pemicu kemudian akan dimuat sebagai alur di portal pembuat Power Automate. Apa yang Anda lihat adalah desainer alur di portal pembuat Power Automate. Di sinilah kita dapat menambahkan logika dan tindakan lebih lanjut untuk otomatisasi tambahan. Pemicu akan muncul di bagian atas, diikuti oleh **Mengirimkan prompt ke copilot yang ditentukan untuk diproses** sebagai tindakan terakhir dalam alur.

![Desainer alur di portal pembuat Power Automate](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.id.png)

1. Secara default, pemicu **Ketika email baru tiba** di Power Automate dapat memproses beberapa email sekaligus jika beberapa email tiba bersamaan, menjalankan alur hanya sekali untuk batch tersebut.

Untuk memastikan alur berjalan secara terpisah untuk setiap email, aktifkan pengaturan **Split On** di pengaturan pemicu dan pilih `@triggerOutputs()?['body/value']` di bidang array dropdown.

Dengan **Split On** diaktifkan dan bidang array diatur ke `@triggerOutputs()?['body/value']`, alur akan berjalan secara individual untuk setiap pesan, bahkan jika banyak pesan tiba secara bersamaan.

![Aktifkan pengaturan Split On di pemicu](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.id.png)

1. Selanjutnya, kita akan menambahkan logika untuk memeriksa jenis file lampiran, kita hanya ingin mengunggah lampiran file .PDF dan bukan gambar (ini bisa berasal dari tanda tangan email). Pilih ikon **+** di bawah pemicu dan pilih **Control** di bagian **Built in tools**.

![Pilih Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.id.png)

1. Pilih tindakan **Condition**.

![Pilih tindakan Condition](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.id.png)

1. Sekarang kita mengonfigurasi kondisi untuk memeriksa apakah jenis file lampiran adalah .PDF. Di bidang **Choose a value**, pilih **ikon petir** atau **ikon fx** di sebelah kanan.

1. Di bidang **Search**, ketik berikut ini,

```text
content type
```

1. Kemudian pilih parameter **Attachments Content-Type** dari pemicu.

1. Selanjutnya, pilih **Add** untuk menambahkan input konten dinamis ke parameter **Id** dari tindakan.

![Konfigurasi tindakan Condition](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.id.png)

1. Mari kita berhenti sejenak di sini, Anda mungkin memperhatikan bahwa tindakan **For each** secara otomatis muncul.

Pilih tindakan **For each**. Tindakan ini mewakili pengulangan melalui setiap lampiran dalam email, karena parameter **Attachments Content-Type** dari pemicu terikat pada setiap lampiran.

Di balik layar, ini adalah array dan itulah mengapa tindakan **For each** secara otomatis ditambahkan ketika kita memilih parameter **Attachments Content-Type** di tindakan **Condition**.

Untuk mempelajari lebih lanjut tentang ini, perluas blok pembelajaran tambahan berikut.

??? info "Pembelajaran Tambahan: Tindakan For each secara otomatis muncul"

🤔 **Mengapa "Apply to each" atau "For each" Muncul Secara Otomatis?**

Ketika Anda memilih parameter (konten dinamis) yang mewakili daftar atau array item - misalnya, daftar lampiran, email, atau baris - Power Automate mengenali bahwa Anda mungkin ingin memproses setiap item secara individual.

Untuk membantu Anda melakukan ini, Power Automate secara otomatis menambahkan loop **“Apply to each”** (atau **For each**) di sekitar tindakan Anda. Ini memastikan bahwa tindakan Anda akan berjalan sekali untuk setiap item dalam daftar, daripada mencoba memproses seluruh daftar sekaligus (yang dapat menyebabkan kesalahan).

🦋 **Contoh**

- Jika Anda memilih "Attachments" dari tindakan sebelumnya (yang merupakan array), dan mencoba menggunakannya dalam tindakan yang mengharapkan satu file, Power Automate membungkus tindakan Anda dalam loop **"Apply to each"** (atau **For each**). 
- Dengan cara ini, tindakan Anda akan berjalan untuk **setiap lampiran** - satu per satu.

💡 **Poin Penting**

- **Otomatis:** Loop muncul secara otomatis untuk membantu Anda memproses setiap item dalam koleksi.
- **Mencegah kesalahan:** Tanpa loop, tindakan Anda mungkin gagal karena tidak dapat menangani beberapa item sekaligus.
- **Petunjuk visual:** Ini adalah cara visual untuk menunjukkan bahwa alur Anda akan mengulangi tindakan untuk setiap item dalam daftar.

![Penjelasan tindakan For Each](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.id.png)

1. Selanjutnya, di bidang **Choose a value** lainnya, ketik berikut ini,

```text
application/pdf
```

Ini akan memastikan bahwa untuk setiap lampiran file, akan memeriksa format ekstensi file adalah .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.id.png)

1. Sekarang kita akan mengonfigurasi jalur **True** untuk mengekstrak file dari email dan mengunggahnya ke tabel **Resume** di Dataverse.

Tambahkan tindakan baru di bawah jalur **True** dan cari `html to text`. Pilih tindakan **Html to text**.

Untuk mempelajari lebih lanjut tentang tindakan **Html to text**, perluas blok pembelajaran tambahan berikut.

??? info "Pembelajaran Tambahan: Tindakan Html to text"

🤔 **Apa itu Tindakan "HTML to text"?**

Tindakan **HTML to text** di Power Automate digunakan untuk mengonversi konten yang diformat HTML menjadi teks biasa. Ini sangat berguna ketika Anda menerima data (seperti email, konten web, atau respons API) yang berisi tag HTML, dan Anda ingin mengekstrak hanya teks yang dapat dibaca tanpa format atau kode.

⚙️ **Bagaimana cara kerjanya?**

- **Input:** Anda memberikan string konten HTML (misalnya, isi email).
- **Output:** Tindakan menghapus semua tag HTML dan hanya mengembalikan teks biasa.

👍🏻 **Kapan Anda harus menggunakannya?**

- Ketika Anda ingin mengekstrak teks yang dapat dibaca dari email, halaman web, atau respons API yang berisi HTML.
- Sebelum mengirimkan konten ke sistem yang tidak mendukung format HTML (seperti SMS, pesan Teams, atau database).
- Untuk membersihkan data untuk pemrosesan atau analisis lebih lanjut.

🔭 **Di mana menemukannya?**

- Di Power Automate untuk Agent Flows, cari tindakan yang disebut `HTML to text`. Ini berada di bawah konektor **Data Operations**.

💡 **Poin Penting**

- Menghapus semua tag HTML dan hanya menyisakan teks.
- Tidak menafsirkan atau menjalankan skrip/gaya - hanya menghapus tag.
- Berguna untuk membersihkan data dan menyiapkan konten untuk output teks biasa.

![Tambahkan tindakan HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.id.png)

1. Selanjutnya, kita perlu membuat referensi koneksi baru untuk tindakan **Html to text** dengan memilih **Add new**.

![Tambahkan referensi koneksi baru](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.id.png)

1. Tindakan sekarang dapat dikonfigurasi. Mari kita tambahkan parameter **Body** dari pemicu. Di bidang **Content**, pilih **ikon petir** atau **ikon fx** di sebelah kanan.

![Tambahkan Konten Dinamis](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.id.png)

1. Di tab **Dynamic content**, cari `body` dan pilih parameter **Body**, lalu pilih **Add**.

![Tambahkan parameter Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.id.png)

1. Kita telah selesai mengonfigurasi tindakan ini, jadi mari keluar dari tindakan dengan memilih dua tanda sudut («) yang mengarah ke kiri untuk menutup panel.

![Tutup panel tindakan](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.id.png)

1. Kita akan menambahkan tindakan baru dengan memilih **ikon +** di bawah tindakan **Html to text** yang akan memuat panel untuk menambahkan tindakan. Pilih konektor **Microsoft Dataverse**.

![Tambahkan tindakan baru](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.id.png)

1. Pilih tindakan **Add a new row**.

![Tambahkan tindakan Add a new row](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.id.png)

1. Ubah nama tindakan dengan memilih **Ellipsis (...)**, salin dan tempelkan berikut ini sebagai nama,

```text
Add a new Resume row
```

Untuk parameter **Table name**, cari `res` dan pilih tabel **Resumes**.

![Ubah nama tindakan dan konfigurasi parameter Table name](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.id.png)

1. Pilih bidang **Resume Title** berikutnya dan pilih **ikon petir** atau **ikon fx** di sebelah kanan.

![Konfigurasi parameter Resume Title](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.id.png)

1. Di tab **Function**, masukkan ekspresi berikut yang menggunakan fungsi `item()`.

```text
item()?['name']
```

Untuk mempelajari lebih lanjut tentang fungsi `item()`, perluas blok pembelajaran tambahan berikut.

??? info "Pembelajaran Tambahan: Fungsi `item()`"

🤔 **Apa itu fungsi `item()`?**

- Ketika Anda menggunakan tindakan **Apply to each**, Power Automate akan melalui setiap elemen dalam koleksi (array).
- Ini paling sering digunakan di dalam tindakan seperti **Apply to each** (atau **For each**), **Select**, atau **Filter array**.

⚙️ **Bagaimana cara kerjanya?**

- `item()` adalah fungsi yang mengembalikan item saat ini yang sedang diproses dalam loop atau operasi array.
- Di dalam loop itu, `item()` merujuk pada _elemen saat ini_ yang sedang diproses.

📌 **Di mana Anda menggunakannya?**

- **Apply to each:** untuk mengakses properti dari item saat ini.
- **Select:** untuk mengubah setiap item dalam array.
- **Filter array:** untuk merujuk item saat ini yang sedang dievaluasi.

🦋 **Contoh**

- Ekspresi di dalam loop:
       -  `item()?['Email']`
- Ini mengambil properti `Email` dari item saat ini.

💡 **Poin Penting**

- `item()` bersifat _konteks-sensitif_: selalu merujuk pada item saat ini dalam loop atau operasi array yang Anda gunakan.
- Jika Anda membuat loop bersarang, Anda dapat menggunakan `items('LoopName')` untuk merujuk pada item dalam loop tertentu.

Pilih **Add** untuk menambahkan ekspresi ke parameter **Resume Title**.

![Tambahkan ekspresi untuk parameter Resume Title](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.id.png)

1. Kita masih perlu mengonfigurasi beberapa parameter lagi, pilih **Show all** dan di bidang **Cover Letter**, pilih **ikon petir** atau **ikon fx** di sebelah kanan.

Di tab **Function**, masukkan ekspresi berikut yang menggunakan ekspresi yang sama dalam [misi sebelumnya](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Ekspresi ini memeriksa apakah _teks_ dari tindakan **Html to text** lebih panjang dari 2000 karakter, dan jika ya, hanya mengembalikan 2000 karakter pertama; jika tidak, mengembalikan teks penuh.

![Tambahkan ekspresi untuk parameter Cover Letter](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.id.png)

1. Ekspresi sekarang akan ditambahkan ke bidang **Cover Letter**.

![Ekspresi ditambahkan ke parameter Cover Letter](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.id.png)

1. Untuk bidang **Source Email Address**, cari `from` dan pilih parameter **From** dari pemicu karena ini berisi nilai alamat email.

![Parameter Source Email Address](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.id.png)

1. Untuk bidang **Upload Date**, pilih **ikon petir** atau **ikon fx** di sebelah kanan. Di tab **Function**, masukkan ekspresi berikut yang menggunakan fungsi `utcNow()`.

```text
utcNow()
```

Untuk mempelajari lebih lanjut tentang fungsi `utcNow`, perluas blok pembelajaran tambahan berikut.

??? info "Pembelajaran Tambahan: Fungsi `utcNow`"

🤔 **Apa itu fungsi `utcNow()`?**

- Fungsi utcnow() di Power Automate mengembalikan tanggal dan waktu saat ini dalam Waktu Universal Terkoordinasi (UTC) dalam format ISO 8601, seperti: `2025-09-23T04:32:14Z`

🦋 **Contoh**

- Ekspresi:
       -  `concat('Laporan dibuat pada ', utcnow())`
- Output adalah:
       - Laporan dibuat pada `2025-09-23T04:32:14Z`

💡 **Poin Penting**
- **Tidak memerlukan argumen (parameter input):** selalu memberikan stempel waktu UTC saat ini.
   - **Kasus penggunaan**
       - Menambahkan stempel waktu ke log atau nama file
       - Membandingkan waktu saat ini dengan tanggal lainnya
       - Penjadwalan atau kondisi berbasis waktu

![Parameter Tanggal Unggah](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.id.png)

1. Kita telah selesai mengonfigurasi aksi **Tambahkan baris Resume baru**, jadi mari keluar dari panel dengan mengecilkannya.

![Keluar dari panel aksi](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.id.png)

1. Kita akan menambahkan aksi baru dengan memilih **ikon +** di bawah aksi **Tambahkan baris Resume baru** yang akan memuat panel untuk menambahkan aksi. Pilih konektor **Microsoft Dataverse** lagi.

![Tambahkan aksi Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.id.png)

1. Pilih aksi **Unggah file atau gambar**.

![Tambahkan aksi Unggah file atau gambar](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.id.png)

1. Ubah nama aksi dengan memilih **Ellipsis (...)**, salin dan tempel teks berikut sebagai nama,

```text
Unggah File Resume
```

![Ubah nama aksi](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.id.png)

1. Pilih bidang **Nama Konten** berikutnya dan pilih **ikon petir** atau **ikon fx** di sebelah kanan.

Di tab **Fungsi**, masukkan ekspresi berikut yang menggunakan fungsi `item ()`. Ini mengambil properti `name` dari item saat ini (file lampiran).

```text
item()?['name']
```

![Konfigurasi parameter Nama Konten](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.id.png)

1. Untuk parameter **Nama Tabel**, cari `res` dan pilih tabel **Resumes**.

![Konfigurasi parameter Nama Tabel](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.id.png)

1. Pilih bidang **ID Baris** berikutnya dan pilih **ikon petir** atau **ikon fx** di sebelah kanan.

Cari `ID` dan pilih parameter **Resume** dari aksi _Tambahkan baris baru_ Dataverse karena ini berisi nilai ID dari baris tempat file PDF akan diunggah.

Pilih **Tambahkan**.

![Pilih parameter ID Baris](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.id.png)

1. Pilih bidang **Nama Kolom** dan pilih opsi **Resume PDF**.

![Konfigurasi parameter Nama Kolom](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.id.png)

1. Pilih bidang **Konten** dan pilih **ikon petir** atau **ikon fx** di sebelah kanan.

Di tab **Fungsi**, masukkan ekspresi berikut yang menggunakan fungsi `item ()`. Ini mengambil properti `contentBytes` dari item saat ini (file lampiran). `contentBytes` mengacu pada data biner mentah dari file atau lampiran, yang dikodekan sebagai string Base64.

```text
item()?['contentBytes']
```

1. Kita telah selesai mengonfigurasi aksi ini, jadi mari keluar dari aksi dengan memilih dua tanda kurung sudut («) yang mengarah ke kiri untuk mengecilkan panel.

![Kecilkan panel aksi](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.id.png)

1. Selanjutnya, pilih **Mengirimkan prompt ke copilot yang ditentukan untuk diproses**, lalu seret dan letakkan aksi ini di bawah aksi **Unggah File Resume** di jalur _True_ dari kondisi.

![Seret dan letakkan aksi di jalur True](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.id.png)

1. Pilih **Mengirimkan prompt ke copilot yang ditentukan untuk diproses** untuk mengonfigurasinya.

![Pilih aksi](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.id.png)

1. Di bidang **Isi/Pesan**, pilih semua konten bidang dan hapus.

![Hapus parameter Isi](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.id.png)

1. Salin dan tempel teks berikut ke dalam bidang **Isi/Pesan** dan sorot `RESUME ID PLACEHOLDER`.

```text
Kirim [ResumeId (text)] = "RESUME ID PLACEHOLDER" dan [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" dan [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" ke Alat "Notify Teams Applicant channel" di agen anak "Application Intake Agent"
```

![Ganti teks Resume ID Placeholder](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.id.png)

1. Pilih **ikon petir** atau **ikon fx** di sebelah kanan.

Cari `resume` dan pilih parameter **Resume** dari aksi _Tambahkan baris baru Dataverse_ karena ini berisi nilai `ID` dari baris Resume yang dibuat.

Pilih **Tambahkan**.

![Pilih parameter Resume](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.id.png)

1. Sorot `RESUME TITLE PLACEHOLDER`. Pilih **ikon petir** atau **ikon fx** di sebelah kanan.

Cari `title` dan pilih parameter **Resume Title** dari aksi _Tambahkan baris baru Dataverse_ karena ini berisi nilai `resume title` dari baris Resume yang dibuat.

Pilih **Tambahkan**.

![Pilih parameter Resume](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.id.png)

1. Sorot `RESUME NUMBER PLACEHOLDER`. Pilih **ikon petir** atau **ikon fx** di sebelah kanan.

Cari `resume number` dan pilih parameter **Resume Number** dari aksi _Tambahkan baris baru Dataverse_ karena ini berisi nilai `Resume Number` dari baris Resume yang dibuat.

Pilih **Tambahkan**.

![Pilih parameter Resume](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.id.png)

1. Kita telah selesai mengonfigurasi aksi ini dan alur agen kita 🙌🏻 Kamu hebat! Sekarang mari simpan alur pemicu acara kita dengan memilih **Simpan draf**.

![Simpan draf](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.id.png)

1. Sekarang kita perlu mengedit detail alur agen, pilih **Kembali**.

![Pilih Kembali](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.id.png)

1. Pilih **Edit** di bagian **Detail** dan perbarui **Rencana** ke opsi **Copilot Studio**.

Pilih **Simpan**.

![Ubah rencana Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.id.png)

1. Sebuah modal akan muncul untuk meminta konfirmasi untuk beralih ke rencana Copilot Studio. Pilih **Konfirmasi**.

![Konfirmasi perubahan rencana Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.id.png)

1. Rencana sekarang diperbarui ke **Copilot Studio**. Pilih **Edit** karena kita perlu mempublikasikan alur pemicu acara untuk agen kita.

![Edit alur](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.id.png)

1. Pilih **Publikasikan**.

![Publikasikan](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.id.png)

Hore! Alur pemicu acara sekarang telah dipublikasikan 😃

![Dipublikasikan](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.id.png)

Mari lanjutkan membuat alur agen baru yang akan dipanggil oleh agen anak **Intake Application Agent**.

### Lab 3.2 - Memberi tahu saluran Teams menggunakan kartu adaptif

Sekarang kita akan membuat alur agen baru untuk agen anak **Intake Application Agent** yang menggunakan nilai-nilai yang diteruskan oleh pemicu acara, untuk memposting kartu adaptif ke saluran Teams. Kartu adaptif ini akan memberi tahu tim rekrutmen HR tentang PDF yang diunggah secara otomatis sehingga mereka dapat meninjaunya.

Mari kita mulai!

1. Di **Hiring Agent** pilih tab **Agen** dan pilih **Application Intake Agent**.

![Pilih Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.id.png)

1. Gulir ke bawah ke **Alat** dan pilih **+ Tambahkan**.

![Tambahkan Alat](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.id.png)

1. Modal **Tambahkan alat** akan muncul. Pilih **+ Alat baru**.

![Pilih Alat Baru](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.id.png)

1. Pilih **Alur agen**.

![Pilih Alur agen](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.id.png)

1. **Desainer alur agen** akan dimuat berikutnya. Di pemicu **Ketika agen memanggil alur**, pilih **+ Tambahkan input**.

![Pilih tambahkan input](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.id.png)

1. Pilih **Teks** sebagai jenis input pengguna.

![Pilih Teks](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.id.png)

1. Di bidang teks input, salin dan tempel teks berikut untuk nama parameter input.

```text
ResumeId
```

![Input ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.id.png)

1. Ulangi langkah yang sama untuk menambahkan input teks kedua. Salin dan tempel teks berikut untuk nama parameter input.

```text
ResumeTitle
```

![Input ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.id.png)

1. Ulangi langkah yang sama untuk menambahkan input teks ketiga. Salin dan tempel teks berikut untuk nama parameter input.

```text
ResumeNumber
```
![Input ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.id.png)

1. Ingat bagaimana di [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) kita menambahkan kartu adaptif dalam Topik untuk agen kita? Kali ini, kita akan menambahkan kartu adaptif dalam alur agen. Sekarang kita akan menambahkan aksi lain ke alur agen kita yang akan memposting kartu adaptif ke saluran Teams.

Pilih **ikon +** di bawah pemicu.

![Tambahkan aksi baru](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.id.png)

1. Pilih aksi **Post card in a chat or channel**.

![Pilih aksi post card in a chat or channel](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.id.png)

1. Referensi koneksi ke Microsoft Teams perlu dibuat dengan akun pengguna yang masuk. Pilih **Masuk**.

![Pilih masuk](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.id.png)

1. Pilih akun pengguna Anda dan kemudian pilih **Izinkan akses**.

![Pilih Izinkan akses](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.id.png)

1. Untuk parameter input berikut,

| Parameter | Cara Mengatur | Detail |
|----------|------------|---------|
| **Post as** | Dropdown | Pilih opsi `Flow bot` |
| **Post in** | Dropdown | Pilih opsi `Channel` |
| **Team** | Dropdown | Pilih tim yang tersedia di lingkungan Anda yang Anda miliki akses untuk tujuan menyelesaikan latihan lab ini |
| **Team** | Dropdown | Pilih saluran yang tersedia di lingkungan Anda yang Anda miliki akses untuk tujuan menyelesaikan latihan lab ini |

![Konfigurasi parameter input](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.id.png)

1. Selanjutnya, kita akan mengonfigurasi bidang **Kartu Adaptif**. Pilih bidang **Kartu Adaptif**.

![Pilih bidang Kartu Adaptif](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.id.png)

1. Buka [Resume Table Updated JSON file](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), salin seluruh isinya, dan tempelkan ke dalam bidang Kartu Adaptif.

![Salin dan tempel JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.id.png)

1. Mirip dengan apa yang kita lakukan di [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), kita akan mengganti nilai yang ada di payload JSON dengan nilai aktual atau konten dinamis.

Pertama, mari kita perbarui URL untuk properti `url` dalam properti `selectAction`. URL ini akan diganti dengan URL tampilan sistem Resumes di aplikasi model-driven **Hiring Hub**. Ini akan memungkinkan Perekrut untuk memilih aksi dan diarahkan ke tampilan sistem Resumes di aplikasi model-driven.

Sorot nilai URL saat ini dan hapus.

![Pilih nilai URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.id.png)

1. Di aplikasi model-driven **Hiring Hub**, navigasikan ke tampilan sistem **Resumes** menggunakan menu sisi kiri dan salin URL. Kemudian navigasikan kembali ke alur agen, dan tempelkan URL yang disalin ke properti **url** dalam properti `selectAction`.

![Salin URL tampilan sistem Resumes](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.id.png)
1. Anda seharusnya melihat hal berikut di mana yang disorot dengan warna kuning adalah detail lingkungan Anda dari aplikasi berbasis model **Hiring Hub**.

     | Parameter | Nilai | Penjelasan |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organisasi lingkungan Dataverse/Dynamics 365 |
     | **appid** | GUID | Untuk membuka aplikasi berbasis model tertentu, parameter kueri appid atau appname digunakan. Dalam kasus ini, appid digunakan |
     | **viewid** | GUID | Parameter kueri yang merupakan id dari tampilan |

       ![Tempel URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.id.png)

1. Selanjutnya, kita akan menambahkan nilai konten dinamis untuk beberapa properti. Mari kita mulai dengan teks yang akan menampilkan referensi Nomor Resume dari baris yang dibuat oleh pemicu acara secara otomatis.

      Pilih ikon **panel** untuk memuat panel tindakan.

       ![Pilih ikon panel](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.id.png)

1. Gulir ke bawah ke baris di mana Anda melihat properti `text` untuk `RESUME NUMBER PLACEHOLDER`. Sorot nilai placeholder dan hapus.

       ![Hapus placeholder](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.id.png)

1. Klik di antara tanda kutip ganda dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

      Di tab **Konten Dinamis**, pilih parameter **ResumeNumber** dan pilih **Tambahkan**.

       ![Tambahkan parameter ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.id.png)

1. Parameter **ResumeNumber** sekarang akan ditambahkan sebagai konten dinamis ke properti `text`.

       ![Konten dinamis ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.id.png)

1. Kita akan mengulangi langkah yang sama untuk `RESUME NAME PLACEHOLDER`. Gulir ke bawah ke baris di mana Anda melihat properti `text` untuk `RESUME NAME PLACEHOLDER`. Sorot nilai placeholder dan hapus.

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.id.png)

1. Klik di antara tanda kutip ganda dan pilih ikon **petir** atau ikon **fx** di sebelah kanan.

      Di tab **Konten Dinamis**, pilih parameter **ResumeTitle** dan pilih **Tambahkan**.

       ![Tambahkan parameter ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.id.png)

1. Parameter **ResumeTitle** sekarang akan ditambahkan sebagai konten dinamis ke properti `text`.

       ![Konten dinamis ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.id.png)

1. Kita akan mengulangi langkah yang sama untuk nilai **Due Date** yang mewakili kapan perekrut harus meninjau resume. Gulir ke bawah ke baris di mana Anda melihat properti `text` untuk `May 21, 2023`.

       ![Pilih Izinkan akses](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.id.png)

1. Hapus nilai placeholder tanggal ini dan klik di antara tanda kutip ganda.

       ![Hapus](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.id.png)

1. Pilih ikon **petir** atau ikon **fx** di sebelah kanan dan di tab **Fungsi**, masukkan ekspresi berikut dan pilih **Tambahkan**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Ekspresi ini menggunakan dua fungsi.

     | Fungsi | Penjelasan |
     |----------|------------|
     | **addDays** | Menambahkan sejumlah hari tertentu ke tanggal yang diberikan dan mengembalikan tanggal hasil dalam format string |
     | **utcNow** | Mengembalikan tanggal dan waktu saat ini dalam format Waktu Universal Terkoordinasi (UTC) sebagai string. |

      Untuk nilai utcNow, kami memformat tanggal menjadi bulan dan tanggal, diikuti oleh tahun.

       ![Ekspresi Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.id.png)

      Ekspresi sekarang akan ditambahkan ke properti `text`.

       ![Ekspresi Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.id.png)

1. Terakhir, kita akan memperbarui URL untuk properti `url` dalam properti array `actions` di bagian bawah payload JSON. Placeholder URL saat ini akan diganti dengan URL baris Resume di aplikasi berbasis model **Hiring Hub**. Ini akan memungkinkan Perekrut untuk memilih tindakan `Action.OpenURL` dari kartu adaptif dan diarahkan ke Resume di aplikasi berbasis model.

       ![Hapus placeholder URL View Resume](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.id.png)

1. Di aplikasi berbasis model **Hiring Hub**, buka baris di tampilan sistem **Resumes** menggunakan menu sisi kiri. Baris resume akan dimuat sebagai formulir di aplikasi berbasis model.

      Salin URL untuk baris Resume.

    ??? info "Cara kembali ke aplikasi berbasis model **Hiring Hub** jika Anda keluar/menutupnya"

        1. Jelajahi ke [https://make.powerapps.com](https://make.powerapps.com) dan pastikan Anda berada di lingkungan pengembang yang Anda gunakan untuk latihan lab ini, jika tidak, beralihlah ke sana.
        
        ![Jelajahi ke make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.id.png)

        1. Pilih **Apps** di panel menu sisi kiri dan untuk aplikasi berbasis model **Hiring Hub**, pilih ikon **Play** untuk memuatnya di browser Anda.
        
        ![Pilih aplikasi berbasis model Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.id.png)

       ![Salin URL baris Resume](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.id.png)

1. Kemudian navigasikan kembali ke alur agen, sorot nilai placeholder URL saat ini dan hapus.

       ![Hapus placeholder URL baris Resume](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.id.png)

1. Kemudian tempelkan URL yang disalin ke properti **url** dalam properti `url`.

       ![Tempelkan URL baris Resume yang disalin](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.id.png)

1. Anda seharusnya melihat hal berikut. Hapus nilai id `GUID` di akhir. Kita akan mengganti konten dinamis ini - parameter **ResumeId**.

       ![Hapus placeholder URL View Resume](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.id.png)

1. Pilih ikon **petir** atau ikon **fx** di sebelah kanan.

      Di tab **Konten Dinamis**, pilih parameter **ResumeId** dan pilih **Tambahkan**.

       ![Parameter ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.id.png)

1. **ResumeId** akan ditambahkan sebagai konten dinamis. Berikut yang disorot dengan warna kuning adalah detail lingkungan Anda dari aplikasi berbasis model **Hiring Hub**.

     | Parameter | Nilai | Penjelasan |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organisasi lingkungan Dataverse/Dynamics 365 |
     | **appid** | GUID | Untuk membuka aplikasi berbasis model tertentu, parameter kueri appid atau appname digunakan. Dalam kasus ini, appid digunakan |
     | **id** | GUID | Parameter kueri yang merupakan id dari baris Resume |

       ![Konten dinamis ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.id.png)

1. Kita telah selesai mengonfigurasi tindakan **Post card in a chat or channel** 👏🏻 Keluar dari panel konfigurasi tindakan dengan memilih ikon **x**.

       ![Tutup panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.id.png)

1. Akhirnya, kita akan mengonfigurasi tindakan terakhir, **Respond to the agent** dengan mengirimkan teks kembali ke agen untuk mengakhiri pemrosesan.

      Di tindakan **Respond to the agent**, pilih **+Tambahkan output**.

       ![Pilih Tambahkan output](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.id.png)

1. Pilih **Text** sebagai jenis output.

       ![Pilih teks sebagai jenis output](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.id.png)

1. Masukkan hal berikut sebagai nama output.

       ![Output Akhiri Percakapan](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.id.png)

1. Masukkan hal berikut sebagai nilai untuk output.

       ```text
       Finished
       ```

       ![Nilai Output Akhiri Percakapan](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.id.png)

1. Kita sekarang telah selesai mengonfigurasi alur agen. Pilih **Save draft** untuk menyimpan alur agen. Pesan konfirmasi akan muncul setelah disimpan.

       ![Simpan draft](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.id.png)

1. Sebelum mempublikasikan alur agen, kita perlu memperbarui detail untuk alur agen. Pilih tab **Overview** dan pilih **Edit**.

      Di bidang nama alur, masukkan hal berikut.

       ```text
       Notify Teams Applicant channel
       ```      

      Setelah itu, pilih ikon **Refresh** untuk memperbarui deskripsi alur agen menggunakan AI.

      Kemudian pilih **Save** untuk menyimpan detail yang diperbarui untuk alur agen.

       ![Edit dan simpan detail](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.id.png)

1. Navigasikan kembali ke tab **Designer** dan pilih **Publish** untuk mempublikasikan alur agen. Pesan konfirmasi akan muncul setelah disimpan.

       ![Publikasikan alur agen](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.id.png)

1. Alur agen sekarang perlu ditambahkan sebagai alat di **Application Intake Agent**. Navigasikan kembali ke **Hiring Agent** dan pilih tab **Agents**, lalu pilih **Application Intake Agent**.

       ![Pilih Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.id.png)

1. Di bagian **Details** dari agen, kita akan memperbarui bidang **Description**. Salin hal berikut dan tempelkan di akhir teks deskripsi.

       ```text
       and also notify the Teams Applicant channel
       ```

       ![Perbarui Deskripsi Agen](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.id.png)

1. Selanjutnya, kita akan menambahkan alur agen sebagai alat. Gulir ke bawah dan pilih **+ Tambahkan**.

       ![Pilih Tambahkan](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.id.png)

1. Pilih alur agen yang dibuat sebelumnya, **Notify Teams Applicant Channel**.

       ![Pilih alur agen](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.id.png)

1. Pilih **Tambahkan dan konfigurasikan** selanjutnya.

       ![Pilih Tambahkan dan konfigurasikan](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.id.png)

1. Di bagian **Inputs** dari alur agen, tiga input yang kita konfigurasi sebelumnya di alur agen terlihat. Secara default, konfigurasi **Fill using** diatur ke **Dynamically fill with AI**. Kita akan mempertahankan pengaturan ini karena prompt dari pemicu acara (di tindakan terakhir, **Mengirimkan prompt ke copilot yang ditentukan untuk diproses** - ini adalah langkah 38-44 dari **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) akan berisi nilai parameter yang akan diekstrak oleh AI.

       ![Input alur agen alat](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.id.png)

1. Sekarang alat telah ditambahkan ke **Application Intake Agent**, instruksi agen perlu diperbarui. Pilih ikon **panah kembali** untuk kembali ke daftar agen.

       ![Pilih ikon panah kembali](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.id.png)

1. Pilih **Application Intake Agent** di tab **Agents** dari **Hiring Agent**.

       ![Pilih Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.id.png)

1. Di bidang **Instructions**, masukkan baris baru setelah instruksi `2.Post-Upload`. Salin dan tempelkan instruksi berikut.

       ```text
       Process for Resume Upload via Email
       1. When you receive a message, **Send [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" and [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" and [ResumeNumber (text_2)]= "R01026" to the Tool "Notify Teams Applicant channel"** in the child agent "Application Intake Agent", call [AGENT FLOW PLACEHOLDER]
       ```

       ![Perbarui instruksi Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.id.png)

1. Sorot teks `[AGENT FLOW PLACEHOLDER`.

       ![Sorot placeholder](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.id.png)

1. Masukkan karakter garis miring, `/`, dan pilih alat **Notify Teams Applicant Channel**.

       ![Pilih alat Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.id.png)
1. Alur agen sekarang akan dijalankan oleh **Application Intake Agent** sesuai dengan instruksi, setelah tindakan terakhir (**Mengirimkan prompt ke copilot yang ditentukan untuk diproses**) dalam pemicu acara mengirimkan prompt yang berisi nilai parameter kembali ke agen.

      Pilih **Save** untuk menyimpan instruksi yang diperbarui untuk **Application Intake Agent**.

       ![Pilih Save](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.id.png)

1. Instruksi sekarang akan diperbarui setelah agen disimpan.

       ![Instruksi diperbarui](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.id.png)

1. Sekarang kita perlu **Publish** **Hiring Agent**. Pilih **Publish** di kanan atas, dan dalam _modal Publish this agent_ yang muncul, pilih **Publish**.

       ![Publish Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.id.png)

1. Setelah dipublikasikan, pesan konfirmasi akan muncul bahwa agen telah dipublikasikan.

       ![Pesan konfirmasi](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.id.png)

Sekarang kita bisa menguji agen!

### Lab 3.3 - Uji pemicu acara

1. Untuk menjalankan pemicu acara, email perlu dikirim dengan file pdf Resume. Di Outlook, buat pesan email baru.

     | Komponen Email | Detail |
     |----------|------------|
     | **Penerima** | Gunakan akun pengguna yang Anda gunakan untuk masuk sebagai nilai |
     | **Lampiran file** | Unggah file [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Isi email** | Salin dan tempel teks berikut sebagai isi email |

       ```text
       Dear Hiring Manager,

       Saya menulis untuk menyampaikan minat saya pada posisi Senior Power Platform Engineer di organisasi Anda. Dengan pengalaman lebih dari sembilan tahun dalam memberikan solusi yang aman dan skalabel di platform cloud Microsoft, saya yakin dapat berkontribusi secara efektif pada tim Anda.

       Dalam peran saya yang terakhir sebagai Lead Power Platform Engineer, saya mengembangkan pipeline penerimaan resume otomatis, mengurangi triase manual dan meningkatkan kemampuan pencarian. Saya telah memberikan aplikasi manajemen kasus HR, memperkenalkan alur yang sadar solusi, dan menerapkan pemeriksaan PR untuk meningkatkan waktu penyebaran. Keahlian saya mencakup Power Apps, Power Automate, Power Pages, Dataverse, dan berbagai layanan Microsoft 365, serta integrasi dengan Graph/REST API dan Azure Functions.

       Sebelumnya, saya mengembangkan persetujuan Teams dengan kartu adaptif, mempercepat waktu persetujuan hingga hari yang sama, dan menciptakan kerangka kerja penanganan kesalahan yang kuat. Latar belakang saya juga mencakup migrasi alur kerja lama ke Power Automate dan membangun portal layanan mandiri yang diadopsi oleh ratusan karyawan.

       Saya memiliki gelar B.Sc. dalam Ilmu Komputer dan bersertifikat sebagai Power Platform Developer (PL-400) dan Solution Architect (PL-600). Saya juga memiliki semangat untuk membimbing dan telah menjadi sukarelawan di kelompok pembuat lokal.

       Mohon temukan CV saya terlampir untuk pertimbangan Anda. Saya akan sangat senang untuk mendiskusikan bagaimana keterampilan dan pengalaman saya sesuai dengan kebutuhan Anda.

       Terima kasih atas waktu dan perhatian Anda.

       Salam hangat,  
       Taylor Testperson
       ```

       **Kirimkan** email setelah selesai dibuat.

       ![Buat email dengan lampiran file PDF](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.id.png)

1. Di portal pembuat Power Automate untuk alur pemicu acara, pilih ikon **Refresh** untuk melihat alur yang berhasil dijalankan untuk email yang dikirim.

       ![Pilih ikon refresh untuk melihat alur](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.id.png)

1. Kembali ke Copilot Studio di **Hiring Agent**, pilih tab **Activity**.

       ![Pilih tab Activity](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.id.png)

1. Tab **Activity** akan dimuat yang menampilkan semua aktivitas dari **Hiring Agent**. Akan ada aktivitas dengan nama **Automated** yang memiliki status **Complete**. Aktivitas ini mewakili pemicu acara dan alur agen yang dijalankan.

       ![Aktivitas selesai](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.id.png)

1. Pilih aktivitas tersebut, dan pilih pemicu acara di peta aktivitas. Di panel sisi kanan, perhatikan bagaimana parameter input dalam prompt berisi nilai parameter `Resume Id`, `Resume Title`, dan `Resume Number` dari baris **Dataverse** yang dibuat. Ini berasal dari nilai konten dinamis yang dikonfigurasi sebelumnya di langkah 18 - 27 dari **Lab 3.1 - Automate uploading resumes to Dataverse received by email**.

       ![Pemicu acara](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.id.png)

1. Kembali ke aplikasi model-driven **Hiring Hub** dan di tampilan sistem **Resumes**, pilih **Refresh** untuk memperbarui tampilan. Baris baru untuk resume yang dikirim melalui email sekarang akan terdaftar karena dibuat melalui pemicu acara.

       ![Baris resume dibuat](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.id.png)

1. Kembali ke Copilot Studio dan pilih alur agen **Notify Teams Applicant Channel** dalam **Application Intake Agent** di peta aktivitas. Di panel sisi kanan, perhatikan bagaimana input memiliki nilai dari baris Dataverse. Ini berasal dari prompt yang dikirim oleh tindakan terakhir (**Mengirimkan prompt ke copilot yang ditentukan untuk diproses**) dalam pemicu acara yang berisi nilai parameter dari baris Dataverse yang baru dibuat. Inilah cara kita dapat meneruskan nilai parameter dari pemicu acara ke alur agen.

       ![Pilih alur agen](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.id.png)

1. Akhirnya, mari kita lihat kartu adaptif yang diposting ke saluran di **Microsoft Teams**. Di saluran tersebut, kita akan melihat kartu adaptif yang menampilkan informasi tentang baris Resume yang baru dibuat di Dataverse. Arahkan kursor ke hyperlink di awal kartu adaptif, perhatikan bagaimana URL adalah URL tampilan sistem Resumes yang kita konfigurasi sebelumnya dalam payload JSON (langkah 15 - 19 dari **Lab 3.2 - Notify a Teams channel using an adaptive card**) kartu adaptif.

       ![URL tampilan sistem tabel Resume pada kartu adaptif](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.id.png)

1. Pilih hyperlink tersebut, dan Anda akan diarahkan ke tampilan sistem Resumes di aplikasi model-driven **Hiring Hub** di browser Anda.

       ![Tampilan sistem Resume di aplikasi model-driven Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.id.png)

1. Kembali ke kartu adaptif yang diposting ke saluran di Microsoft Teams. Kali ini, arahkan kursor ke **View Resume** yang merupakan tindakan `Action.OpenURL` dari kartu adaptif. Perhatikan bagaimana URL adalah baris Resume yang kita konfigurasi sebelumnya dalam payload JSON (langkah 30 - 36 dari **Lab 3.2 - Notify a Teams channel using an adaptive card**) kartu adaptif.

       ![URL baris Resume pada kartu adaptif](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.id.png)

1. Pilih tindakan tersebut, dan Anda akan diarahkan ke formulir baris Resume di aplikasi model-driven **Hiring Hub** di browser Anda.

       ![Baris Resume di aplikasi model-driven Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.id.png)

## ✅ Misi Selesai

Selamat! 👏🏻 Kerja luar biasa, Operative.

✅ Pemicu acara: Anda telah membuat pemicu acara yang meneruskan nilai parameter Dataverse ke alur agen.  
✅ Membangun alur agen: menggunakan nilai parameter Dataverse untuk memposting kartu adaptif ke saluran di Microsoft Teams untuk memberi tahu tim rekrutmen HR.  
✅ Memperbarui instruksi agen anak: untuk menjalankan alur setelah pemicu acara selesai.

Ini memungkinkan **Hiring Agent** bekerja secara otomatis setiap kali resume diterima sebagai lampiran email dan memberi tahu tim rekrutmen HR untuk tinjauan manual.

Ini adalah akhir dari **Lab 03 - Automating candidate application emails**, pilih tautan di bawah untuk melanjutkan ke pelajaran berikutnya.

⏭️ [Lanjut ke pelajaran **Authoring Agent Instructions**](../04-agent-instructions/README.md)

## 📚 Sumber Daya Taktis

📖 [Buat agen Anda bekerja secara otomatis di Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Tambahkan pemicu acara](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Gunakan alur agen dengan agen Anda](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Pengantar pemicu Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Menggunakan alur Power Automate dengan agen](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Pencegahan kehilangan data untuk Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.