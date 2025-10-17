<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9cd8cd1a4fbd8915171a2ed972cc322",
  "translation_date": "2025-10-17T17:10:00+00:00",
  "source_file": "docs/recruit/00-course-setup/README.md",
  "language_code": "id"
}
-->
# 🚨 Misi 00: Pengaturan Kursus

## 🕵️‍♂️ NAMA KODE: `OPERASI SIAP DEPLOY`

> **⏱️ Waktu Operasi:** `~30 menit`  

## 🎯 Ringkasan Misi

Selamat datang di misi pertama pelatihan Anda sebagai Agen Copilot Studio.  
Sebelum Anda mulai membangun agen AI pertama Anda, Anda perlu menyiapkan **lingkungan pengembangan siap lapangan**.

Briefing ini menjelaskan sistem, kredensial akses, dan langkah-langkah pengaturan yang diperlukan untuk beroperasi dengan sukses di ekosistem Microsoft 365.

## 🔎 Tujuan

Misi Anda meliputi:

1. Mendapatkan akun Microsoft 365  
1. Mendapatkan akses ke Microsoft Copilot Studio  
1. (Opsional) Mendapatkan lisensi Microsoft 365 Copilot untuk publikasi produksi  
1. Membuat lingkungan pengembang sebagai lingkungan Copilot Studio Anda untuk membangun  
1. Membuat situs SharePoint untuk digunakan sebagai sumber data dalam misi berikutnya  

---

## 🔍 Prasyarat

Sebelum memulai, pastikan Anda memiliki:

1. **Alamat email kerja atau sekolah** (email pribadi seperti @outlook.com, @gmail.com, dll., tidak didukung).  
1. Akses ke internet dan browser modern (disarankan Edge, Chrome, atau Firefox).  
1. Pemahaman dasar tentang Microsoft 365 (misalnya, masuk ke aplikasi Office atau Teams).  
1. (Opsional) Kartu kredit atau metode pembayaran jika Anda berencana membeli lisensi berbayar.

---

## Langkah 1: Dapatkan Akun Microsoft 365

Copilot Studio berada di dalam Microsoft 365, jadi Anda memerlukan akun Microsoft 365 untuk mengaksesnya. Anda dapat menggunakan akun yang sudah ada jika Anda memilikinya atau mengikuti langkah-langkah ini untuk mendapatkan lisensi yang sesuai:

1. **Dapatkan Langganan Microsoft 365 Business Berbayar**  
   1. Kunjungi [Halaman Rencana dan Harga Microsoft 365 Business](https://www.microsoft.com/microsoft-365/business/microsoft-365-plans-and-pricing)  
   1. Pilihan termurah untuk memulai adalah paket Microsoft 365 Business Basic. Pilih `Coba gratis` dan ikuti formulir panduan untuk mengisi detail langganan, detail akun, dan informasi pembayaran Anda.  
   ![Microsoft 365 Signup](../../../../../translated_images/m365-freetrial.985b49b07afc5be89598349721f6e4edbb248680f884831f63915c151668855a.id.png)  
   1. Setelah Anda memiliki akun baru, masuklah.

    !!! Tip
        Jika Anda berencana untuk menerbitkan agen ke Microsoft 365 Copilot Chat atau menghubungkan ke data organisasi (SharePoint, OneDrive, Dataverse), diperlukan lisensi Microsoft 365 Copilot. Ini adalah lisensi tambahan yang dapat Anda pelajari lebih lanjut [di situs lisensi](https://www.microsoft.com/microsoft-365/copilot#plans).

---

## Langkah 2: Mulai Uji Coba Copilot Studio

Setelah Anda memiliki Tenant Microsoft 365, Anda perlu mendapatkan akses ke Copilot Studio. Anda dapat mencoba gratis selama 30 hari dengan mengikuti langkah-langkah ini:

1. Kunjungi [aka.ms/TryCopilotStudio](https://aka.ms/TryCopilotStudio).  
1. Masukkan alamat email dari akun baru yang Anda konfigurasikan pada langkah sebelumnya dan pilih `Next`.  
![Microsoft 365 Signup](../../../../../translated_images/mcs-trial-screen.bc9d7566637fa38274735f903d9c71bf437994568e08e3a1eada35b0b8c1fb04.id.png)  
1. Sistem akan mengenali akun Anda. Pilih `Sign In`.  
![Microsoft 365 Signup](../../../../../translated_images/mcs-trial-signin.fe3992c64f2fbdf891ac3377acfa07b4af40cfe90cb19f8ee36b5f2db8fc15e5.id.png)  
1. Pilih `Start Free Trial`.  
![Microsoft 365 Signup](../../../../../translated_images/mcs-start-trial.cbbdd739179130bc78a620b62c7904819ec4453f4b91d1bd585725b2b69762bc.id.png)

!!! info "Catatan Uji Coba"  
     1. Uji coba gratis menyediakan **kemampuan penuh Copilot Studio**.  
     1. Anda akan menerima notifikasi email tentang masa berlaku uji coba Anda. Anda dapat memperpanjang uji coba dalam interval 30 hari (hingga 90 hari runtime agen).  
     1. Jika administrator tenant Anda menonaktifkan pendaftaran mandiri, Anda akan melihat kesalahan—hubungi admin Microsoft 365 Anda untuk mengaktifkannya kembali.

---

## Langkah 3: Buat lingkungan pengembang baru

### Daftar untuk Rencana Pengembang Power Apps

Menggunakan tenant Microsoft 365 yang sama dari Langkah 1, daftar untuk Rencana Pengembang Power Apps untuk membuat lingkungan pengembangan gratis untuk membangun dan menguji dengan Copilot Studio.

1. Daftar di [situs web Rencana Pengembang Power Apps](https://aka.ms/PowerAppsDevPlan).

    - Masukkan alamat email Anda  
    - Centang kotak  
    - Pilih **Mulai gratis**  

    ![Sign up for Power Apps Developer Plan](../../../../../translated_images/0.3_01_SignUp.0a30494c83195125a818282a3efd38bb973ead548e3c071757f6313440e0e4ce.id.png)

1. Setelah mendaftar untuk Rencana Pengembang, Anda akan diarahkan ke [Power Apps](https://make.powerapps.com/). Lingkungan menggunakan nama Anda, misalnya **Lingkungan Adele Vance**. Jika sudah ada lingkungan dengan nama tersebut, lingkungan pengembang baru diberi nama **Lingkungan Adele Vance (1)**.

    Gunakan lingkungan pengembang ini di Copilot Studio saat menyelesaikan lab.

!!! Note
    Jika Anda menggunakan akun Microsoft 365 yang sudah ada dan tidak membuatnya di Langkah 1, misalnya - menggunakan akun Anda sendiri di organisasi kerja Anda, tim administrator IT Anda (atau yang setara) yang mengelola tenant/lingkungan Anda mungkin telah menonaktifkan proses pendaftaran. Dalam hal ini, silakan hubungi administrator Anda, atau buat tenant uji coba sesuai Langkah 1.

---

## Langkah 4: Buat situs SharePoint baru

Sebuah situs SharePoint baru perlu dibuat yang akan digunakan dalam [Pelajaran 06 - Membuat agen kustom menggunakan pengalaman pembuatan percakapan dengan Copilot dan menghubungkannya dengan data Anda](../06-create-agent-from-conversation/README.md#62-add-an-internal-knowledge-source-using-a-sharepoint-site).

1. Pilih ikon waffle di sisi kiri atas Microsoft Copilot Studio untuk melihat menu. Pilih SharePoint dari menu.

    ![Select SharePoint](../../../../../translated_images/0.4_01_SelectSharePoint.39fd392919f757fa669d75b9d1a76f576df793e054a173fe0298e93060e1cebb.id.png)

1. SharePoint akan dimuat. Pilih **+ Buat situs** untuk membuat situs SharePoint baru.

    ![Create site](../../../../../translated_images/0.4_02_CreateSite.df162f5889236f2fb08f3290a069a49872f1360265f9ef39818b2bfed02e06f3.id.png)

1. Sebuah dialog akan muncul untuk memandu Anda dalam membuat situs SharePoint baru. Pilih **Situs tim**.

    ![Team site](../../../../../translated_images/0.4_03_SelectTeamOrCommunicationSite.b9620d158c751320104ad2e3da48f14751e8b674dc00dad0bdf7f57642ad712e.id.png)

1. Pada langkah berikutnya, daftar template Microsoft akan dimuat secara default. Gulir ke bawah dan pilih template **IT help desk**.

    ![IT help desk template](../../../../../translated_images/0.4_04_SelectITHelpDeskTemplate.a391090ba69a7ddcf4423179bf14a421dfdc1279359badfba71645bde97d62a6.id.png)

1. Pilih **Gunakan template** untuk membuat situs SharePoint baru menggunakan template IT help desk.

    ![Use template](../../../../../translated_images/0.4_05_SelectUseTemplate.380fb401b622efb6e14f6d283bf75342d86422820253e32180461208feeaeae4.id.png)

1. Masukkan informasi untuk situs Anda. Berikut adalah contoh:

    | Field | Value |
    | --- | --- |
    | Nama situs | Contoso IT |
    | Deskripsi situs | Copilot Studio untuk Pemula |
    | Alamat situs | ContosoIT |

    ![Site information](../../../../../translated_images/0.4_06_SiteDetails.a0a8d49f3df370e8663f49927f0b4416ab154f5bf9495bf7b84b070111db0a0c.id.png)

1. Pada langkah terakhir, bahasa dapat dipilih untuk situs SharePoint. Secara default akan menjadi **Bahasa Inggris**. Biarkan Bahasa sebagai **Bahasa Inggris** dan pilih **Buat situs**.

    ![Language and other options](../../../../../translated_images/0.4_07_LanguageOtherOptions.256f55ab0ef024b41fe6816d309a6713aa78daa6f45938b90f3bdd71938fb163.id.png)

1. Situs SharePoint akan diproses selama beberapa detik. Sementara itu, Anda dapat memilih untuk menambahkan pengguna lain ke situs Anda dengan memasukkan alamat email mereka di bidang **Tambahkan anggota**. Setelah selesai, pilih **Selesai**.

    ![Select finish](../../../../../translated_images/0.4_08_SelectFinish.473163c547450b362c6b0c872d061a7aa438116d8b498f0356180aa8a1a20a88.id.png)

1. Halaman utama situs SharePoint akan dimuat berikutnya. **Salin** URL situs SharePoint.

1. Template ini menyediakan halaman dengan data contoh tentang berbagai kebijakan IT dan dua daftar contoh (Tiket dan Perangkat).

### Gunakan daftar SharePoint Perangkat

Kita akan menggunakan daftar **Perangkat** dalam [Misi 07 - Tambahkan topik baru dengan pemicu dan node](../07-add-new-topic-with-trigger/README.md#73-add-a-tool-using-a-connector).

### Tambahkan kolom baru

Gulir ke paling kanan dalam daftar dan pilih tombol **+ Tambahkan kolom**. Pilih tipe **hyperlink**, masukkan **Gambar** untuk nama kolom, dan pilih tambahkan.

### Buat data contoh dalam daftar SharePoint Perangkat

Anda perlu memastikan bahwa Anda mengisi daftar ini dengan setidaknya 4 item data contoh dan menambahkan satu kolom tambahan ke daftar ini.  

Saat menambahkan data contoh, pastikan bahwa bidang berikut diisi:

- Foto perangkat - gunakan gambar dari [folder gambar perangkat](https://github.com/microsoft/agent-academy/tree/main/docs/recruit/00-course-setup/images/device-images)  
- Judul  
- Status  
- Produsen  
- Model  
- Jenis aset  
- Warna  
- Nomor seri  
- Tanggal pembelian  
- Harga pembelian  
- Nomor pesanan  
- Gambar - gunakan tautan berikut  

|Perangkat  |URL  |
|---------|---------|
|Surface Laptop 13     | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-13.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-13.png)        |
|Surface Laptop 15     | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-15.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-15.png)        |
|Surface Pro    | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Pro-12.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Pro-12.png)        |
|Surface Studio    | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Studio.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Studio.png)        |

---

## ✅ Misi Selesai

Anda telah berhasil:

- Menyiapkan lingkungan pengembang Microsoft 365  
- Mengaktifkan uji coba Copilot Studio Anda  
- Membuat situs SharePoint untuk menghubungkan agen  
- Mengisi daftar Perangkat untuk digunakan dalam misi mendatang  

Anda secara resmi siap untuk memulai pelatihan agen tingkat **Rekrut** di [Pelajaran 01](../01-introduction-to-agents/README.md).  

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/00-course-setup" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.