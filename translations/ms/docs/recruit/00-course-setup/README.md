<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9cd8cd1a4fbd8915171a2ed972cc322",
  "translation_date": "2025-10-20T00:38:51+00:00",
  "source_file": "docs/recruit/00-course-setup/README.md",
  "language_code": "ms"
}
-->
# 🚨 Misi 00: Persediaan Kursus

## 🕵️‍♂️ NAMA KOD: `OPERASI SIAP SEDIA PELANCARAN`

> **⏱️ Tempoh Operasi:** `~30 minit`  

## 🎯 Ringkasan Misi

Selamat datang ke misi pertama dalam latihan anda sebagai Ejen Copilot Studio.  
Sebelum anda boleh mula membina ejen AI pertama anda, anda perlu menyediakan **persekitaran pembangunan yang sedia untuk digunakan**.

Ringkasan ini menerangkan sistem, kelayakan akses, dan langkah-langkah persediaan yang diperlukan untuk beroperasi dengan jayanya dalam ekosistem Microsoft 365.

## 🔎 Objektif

Misi anda termasuk:

1. Mendapatkan akaun Microsoft 365  
1. Mendapat akses ke Microsoft Copilot Studio  
1. (Pilihan) Mendapatkan lesen Microsoft 365 Copilot untuk penerbitan produksi
1. Mewujudkan persekitaran pembangun sebagai persekitaran Copilot Studio anda untuk membina  
1. Mewujudkan laman SharePoint untuk digunakan sebagai sumber data anda dalam misi seterusnya

---

## 🔍 Prasyarat

Sebelum anda bermula, pastikan anda mempunyai:

1. **Alamat e-mel kerja atau sekolah** (e-mel peribadi seperti @outlook.com, @gmail.com, dll., tidak disokong).
1. Akses kepada internet dan pelayar moden (Edge, Chrome, atau Firefox disyorkan).  
1. Pengetahuan asas tentang Microsoft 365 (contohnya, log masuk ke aplikasi Office atau Teams).  
1. (Pilihan) Kad kredit atau kaedah pembayaran jika anda bercadang untuk membeli lesen berbayar.

---

## Langkah 1: Dapatkan Akaun Microsoft 365

Copilot Studio terletak dalam Microsoft 365, jadi anda memerlukan akaun Microsoft 365 untuk mengaksesnya. Anda boleh menggunakan akaun sedia ada jika anda sudah memilikinya atau ikuti langkah-langkah ini untuk mendapatkan lesen yang sesuai:

1. **Dapatkan Langganan Perniagaan Microsoft 365 Berbayar**  
   1. Pergi ke [Halaman Pelan dan Harga Microsoft 365 Business](https://www.microsoft.com/microsoft-365/business/microsoft-365-plans-and-pricing)
   1. Pilihan termurah untuk memulakan adalah pelan Microsoft 365 Business Basic. Pilih `Cuba secara percuma` dan ikuti borang panduan untuk mengisi butiran langganan, akaun, dan maklumat pembayaran anda.
   ![Microsoft 365 Signup](../../../../../translated_images/m365-freetrial.985b49b07afc5be89598349721f6e4edbb248680f884831f63915c151668855a.ms.png)
   1. Setelah anda mempunyai akaun baru, log masuk.

    !!! Tip
        Jika anda bercadang untuk menerbitkan ejen ke dalam Microsoft 365 Copilot Chat atau menyambung ke data organisasi (SharePoint, OneDrive, Dataverse), lesen Microsoft 365 Copilot diperlukan. Ini adalah lesen tambahan yang boleh anda pelajari lebih lanjut [di laman web lesen](https://www.microsoft.com/microsoft-365/copilot#plans)

---

## Langkah 2: Mulakan Percubaan Copilot Studio

Setelah anda mempunyai Tenant Microsoft 365, anda perlu mendapatkan akses ke Copilot Studio. Anda boleh mendapatkan percubaan percuma selama 30 hari dengan mengikuti langkah-langkah ini:

1. Navigasi ke [aka.ms/TryCopilotStudio](https://aka.ms/TryCopilotStudio).  
1. Masukkan alamat e-mel dari akaun baru yang anda konfigurasikan dalam langkah sebelumnya dan pilih `Seterusnya`.  
![Microsoft 365 Signup](../../../../../translated_images/mcs-trial-screen.bc9d7566637fa38274735f903d9c71bf437994568e08e3a1eada35b0b8c1fb04.ms.png)
1. Ia akan mengenali akaun anda. Pilih `Log Masuk`.
![Microsoft 365 Signup](../../../../../translated_images/mcs-trial-signin.fe3992c64f2fbdf891ac3377acfa07b4af40cfe90cb19f8ee36b5f2db8fc15e5.ms.png)  
1. Pilih `Mulakan Percubaan Percuma`.
![Microsoft 365 Signup](../../../../../translated_images/mcs-start-trial.cbbdd739179130bc78a620b62c7904819ec4453f4b91d1bd585725b2b69762bc.ms.png)

!!! info "Nota Percubaan"  
     1. Percubaan percuma menyediakan **keupayaan penuh Copilot Studio**.
     1. Anda akan menerima pemberitahuan e-mel tentang tarikh tamat percubaan anda. Anda boleh melanjutkan percubaan dalam tempoh 30 hari tambahan (sehingga 90 hari masa operasi ejen).  
     1. Jika pentadbir tenant anda telah mematikan pendaftaran sendiri, anda akan melihat ralat—hubungi pentadbir Microsoft 365 anda untuk mengaktifkannya semula.

---

## Langkah 3: Buat persekitaran pembangun baru

### Daftar untuk Pelan Pembangun Power Apps

Menggunakan tenant Microsoft 365 yang sama dalam Langkah 1, daftar untuk Pelan Pembangun Power Apps untuk membuat persekitaran pembangunan percuma untuk membina dan menguji dengan Copilot Studio.

1. Daftar di laman web [Pelan Pembangun Power Apps](https://aka.ms/PowerAppsDevPlan).

    - Masukkan alamat e-mel anda
    - Tandakan kotak semak
    - Pilih **Mulakan percuma**

    ![Sign up for Power Apps Developer Plan](../../../../../translated_images/0.3_01_SignUp.0a30494c83195125a818282a3efd38bb973ead548e3c071757f6313440e0e4ce.ms.png)

1. Selepas mendaftar untuk Pelan Pembangun, anda akan diarahkan ke [Power Apps](https://make.powerapps.com/). Persekitaran menggunakan nama anda, contohnya **Persekitaran Adele Vance**. Jika sudah ada persekitaran dengan nama itu, persekitaran pembangun baru akan dinamakan **Persekitaran Adele Vance (1)**.

    Gunakan persekitaran pembangun ini dalam Copilot Studio semasa melengkapkan makmal.

!!! Note
    Jika anda menggunakan akaun Microsoft 365 sedia ada dan tidak membuat satu dalam Langkah 1, contohnya - menggunakan akaun anda sendiri dalam organisasi kerja anda, pentadbir IT anda (atau pasukan yang setara) yang menguruskan tenant/persekitaran anda mungkin telah mematikan proses pendaftaran. Dalam kes ini, sila hubungi pentadbir anda, atau buat tenant ujian seperti yang dinyatakan dalam Langkah 1.

---

## Langkah 4: Buat laman SharePoint baru

Laman SharePoint baru perlu dibuat yang akan digunakan dalam [Pelajaran 06 - Buat ejen tersuai menggunakan pengalaman penciptaan perbualan dengan Copilot dan menghubungkannya dengan data anda](../06-create-agent-from-conversation/README.md#62-add-an-internal-knowledge-source-using-a-sharepoint-site).

1. Pilih ikon waffle di bahagian kiri atas Microsoft Copilot Studio untuk melihat menu. Pilih SharePoint dari menu.

    ![Select SharePoint](../../../../../translated_images/0.4_01_SelectSharePoint.39fd392919f757fa669d75b9d1a76f576df793e054a173fe0298e93060e1cebb.ms.png)

1. SharePoint akan dimuatkan. Pilih **+ Buat laman** untuk membuat laman SharePoint baru.

    ![Create site](../../../../../translated_images/0.4_02_CreateSite.df162f5889236f2fb08f3290a069a49872f1360265f9ef39818b2bfed02e06f3.ms.png)

1. Dialog akan muncul untuk membimbing anda dalam membuat laman SharePoint baru. Pilih **Laman pasukan**.

    ![Team site](../../../../../translated_images/0.4_03_SelectTeamOrCommunicationSite.b9620d158c751320104ad2e3da48f14751e8b674dc00dad0bdf7f57642ad712e.ms.png)

1. Dalam langkah seterusnya, senarai templat Microsoft akan dimuatkan secara lalai. Skrol ke bawah dan pilih templat **Meja bantuan IT**.

    ![IT help desk template](../../../../../translated_images/0.4_04_SelectITHelpDeskTemplate.a391090ba69a7ddcf4423179bf14a421dfdc1279359badfba71645bde97d62a6.ms.png)

1. Pilih **Gunakan templat** untuk membuat laman SharePoint baru menggunakan templat meja bantuan IT.

    ![Use template](../../../../../translated_images/0.4_05_SelectUseTemplate.380fb401b622efb6e14f6d283bf75342d86422820253e32180461208feeaeae4.ms.png)

1. Masukkan maklumat untuk laman anda. Berikut adalah contoh:

    | Medan | Nilai |
    | --- | --- |
    | Nama laman | Contoso IT |
    | Penerangan laman | Copilot Studio untuk Pemula |
    | Alamat laman | ContosoIT |

    ![Site information](../../../../../translated_images/0.4_06_SiteDetails.a0a8d49f3df370e8663f49927f0b4416ab154f5bf9495bf7b84b070111db0a0c.ms.png)

1. Dalam langkah terakhir, bahasa boleh dipilih untuk laman SharePoint. Secara lalai ia akan menjadi **Bahasa Inggeris**. Biarkan Bahasa sebagai **Bahasa Inggeris** dan pilih **Buat laman**.

    ![Language and other options](../../../../../translated_images/0.4_07_LanguageOtherOptions.256f55ab0ef024b41fe6816d309a6713aa78daa6f45938b90f3bdd71938fb163.ms.png)

1. Laman SharePoint akan disediakan dalam beberapa saat. Sementara itu, anda boleh memilih untuk menambah pengguna lain ke laman anda dengan memasukkan alamat e-mel mereka dalam medan **Tambah ahli**. Apabila selesai, pilih **Selesai**.

    ![Select finish](../../../../../translated_images/0.4_08_SelectFinish.473163c547450b362c6b0c872d061a7aa438116d8b498f0356180aa8a1a20a88.ms.png)

1. Halaman utama laman SharePoint akan dimuatkan seterusnya. **Salin** URL laman SharePoint.

1. Templat ini menyediakan halaman dengan data contoh tentang pelbagai polisi IT dan dua senarai contoh (Tiket dan Peranti).

### Gunakan senarai Peranti SharePoint

Kita akan menggunakan senarai **Peranti** dalam [Misi 07 - Tambah topik baru dengan pencetus dan nod](../07-add-new-topic-with-trigger/README.md#73-add-a-tool-using-a-connector).

### Tambah lajur baru

Skrol ke sebelah kanan dalam senarai dan pilih butang **+ Tambah lajur**. Pilih jenis **hiperpautan**, masukkan **Imej** untuk nama lajur, dan pilih tambah.

### Buat data contoh dalam senarai Peranti SharePoint

Anda perlu memastikan anda mengisi senarai ini dengan sekurang-kurangnya 4 item data contoh dan menambah satu lajur tambahan ke senarai ini.  

Apabila menambah data contoh, pastikan medan berikut diisi:

- Foto peranti - gunakan imej dari [folder imej peranti](https://github.com/microsoft/agent-academy/tree/main/docs/recruit/00-course-setup/images/device-images)
- Tajuk
- Status
- Pengeluar
- Model
- Jenis Aset
- Warna
- Nombor Siri
- Tarikh Pembelian
- Harga Pembelian,
- Nombor Pesanan
- Imej - gunakan pautan berikut

|Peranti  |URL  |
|---------|---------|
|Surface Laptop 13     | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-13.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-13.png)        |
|Surface Laptop 15     | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-15.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Laptop-15.png)        |
|Surface Pro    | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Pro-12.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Pro-12.png)        |
|Surface Studio    | [https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Studio.png](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/recruit/00-course-setup/images/device-images/Surface-Studio.png)        |

---

## ✅ Misi Selesai

Anda telah berjaya:

- Menyediakan persekitaran pembangunan Microsoft 365  
- Mengaktifkan percubaan Copilot Studio anda  
- Mewujudkan laman SharePoint untuk menghubungkan ejen  
- Mengisi senarai Peranti untuk digunakan dalam misi masa depan

Anda kini secara rasmi bersedia untuk memulakan **latihan ejen peringkat Rekrut** dalam [Pelajaran 01](../01-introduction-to-agents/README.md).  

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/00-course-setup" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.