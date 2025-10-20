<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T01:15:08+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "ms"
}
-->
# Misi 03: Tambah Pencetus Acara untuk bertindak secara autonomi

--8<-- "disclaimer.md"

## 🕵️‍♂️ NAMA KOD: `OPERASI SIGNAL POINT`

> **⏱️ Tempoh Operasi:** `~45 minit`

## 🎯 Ringkasan Misi

Selamat kembali, Ejen. Dalam [Misi 02](../02-multi-agent/README.md) - anda telah belajar cara membina ejen anak untuk Pengambilan Permohonan dan ejen bersambung Persediaan Temuduga untuk memperluaskan keupayaan Ejen Pengambilan utama anda.

Tugasan anda, jika anda memilih untuk menerimanya, adalah **Operasi Signal Point** - mendalami **pencetus acara** - meningkatkan sistem ejen anda daripada reaktif kepada **operasi autonomi**. Anda akan mengubah ejen anda daripada menunggu input manusia kepada bertindak balas secara proaktif terhadap acara luaran dan mengambil tindakan pintar tanpa pengawasan.

Anggaplah ia sebagai peningkatan daripada ejen yang _menjawab soalan_ kepada ejen yang _menjangka keperluan_ dan _bertindak secara bebas_. Melalui pencetus acara dan aliran kerja automatik, Ejen Pengambilan anda akan mengesan e-mel resume yang masuk, memproses lampiran secara automatik, menyimpan data dalam Dataverse, dan memberitahu pasukan pengambilan HR anda melalui Microsoft Teams - semuanya sementara anda fokus pada tugas bernilai tinggi.

Selamat datang ke dunia di mana automasi bertemu kecerdasan.

## 🔎 Objektif

Dalam misi ini, anda akan belajar:

1. Bagaimana pencetus acara membolehkan tingkah laku ejen autonomi tanpa interaksi pengguna
1. Perbezaan antara ejen interaktif dan autonomi dalam Copilot Studio
1. Cara mencipta pencetus acara yang secara automatik memproses lampiran e-mel dan memuat naik fail ke Dataverse
1. Cara membina aliran ejen yang menghantar kad adaptif ke saluran Teams untuk pemberitahuan
1. Cara menghantar data antara pencetus acara dan aliran ejen untuk automasi hujung ke hujung

## 🤔 Apa itu Pencetus Acara?

Sebelumnya dalam [Recruit](../../recruit/10-add-event-triggers/README.md), kita telah belajar tentang pencetus acara. Mari kita buat ulang kaji ringkas tentang ini sekiranya anda terlepas.

**Pencetus acara** membolehkan ejen _bertindak_ sendiri apabila sesuatu berlaku dalam sistem lain - tanpa memerlukan mesej pengguna. Apabila acara yang dikonfigurasi berlaku - seperti "item SharePoint baru," "e-mel baru," "tugas Planner diberikan," atau bahkan pengulangan berdasarkan masa, penyambung menghantar muatan pencetus kepada ejen anda. Ejen kemudian mengikuti arahan anda untuk memutuskan tindakan atau topik mana yang perlu dipanggil.

### Ciri-ciri utama

- **Aktivasi autonomi:**
      - Tidak seperti pencetus topik yang bermula apabila pengguna menaip kepada ejen, pencetus acara berlaku daripada acara luaran, membolehkan tingkah laku proaktif.

- **Dikuasakan oleh muatan:**
      - Setiap acara menghantar muatan (pembolehubah + arahan pilihan) melalui penyambung. Ejen menggunakan arahan yang anda tentukan dan muatan untuk memilih tindakan seterusnya.
      - Contohnya _memanggil topik_ atau _melaksanakan tindakan yang ditentukan oleh Alat_.

- **Contoh sedia ada:**
      - Fail atau item SharePoint/OneDrive dicipta
      - Tugas Planner selesai/diberikan
      - Respons Microsoft Forms dihantar
      - Pengulangan/jadual

    Ketersediaan bergantung pada dasar data organisasi anda yang dikonfigurasi dalam Power Automate.

- **Memerlukan orkestrasi generatif:**
      - Pencetus acara hanya tersedia apabila orkestrasi generatif diaktifkan untuk ejen.

- **Penagihan/penggunaan:**
      - Setiap penghantaran pencetus dikira sebagai mesej terhadap kapasiti Copilot Studio.
      - Contohnya, pengulangan 10 minit menghantar mesej setiap 10 minit.

- **Model pengesahan dan persediaan:**
      - Anda menambah pencetus dalam Gambaran Keseluruhan ejen, di bawah _Triggers_. Pengesahan untuk penyambung pencetus menggunakan akaun pembuat ejen (“pengesahan pembuat ejen”).
      - Anda boleh mengedit parameter pencetus dan muatan dalam portal pembuat Power Automate.

- **Ujian & pemerhatian:**
      - Anda boleh menguji pencetus dari panel ujian ejen dan memeriksa tingkah laku dengan peta aktiviti sebelum menerbitkan.

!!! info "Ringkasan untuk pembangun"

    Anggap pencetus acara sebagai **isyarat seperti webhook** yang menghantar muatan berstruktur ke dalam ejen anda, membolehkan ia _memulakan_ kerja dan menghubungkan tindakan di seluruh sistem - tanpa menunggu pengguna untuk bertanya.

### Pencetus topik - bagaimana ia berbeza

Sebelumnya anda telah belajar tentang pencetus topik dalam [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), namun anda mungkin masih tertanya-tanya bagaimana pencetus _Topik_ berbeza daripada pencetus _Acara_, dan mengapa perbezaan itu penting untuk memahami apa yang menjadikan ejen itu autonomi.

Pencetus topik mengawal _bila topik dijalankan_, biasanya sebagai tindak balas kepada mesej pengguna.

- Dalam orkestrasi generatif, pencetus lalai adalah **Oleh ejen** - perancang memilih topik yang nama/penerangannya paling sesuai dengan mesej pengguna.
- Dalam orkestrasi klasik, pencetus lalai adalah **Frasa** - perancang memilih topik apabila satu atau beberapa frasa pencetus paling sesuai dengan mesej pengguna.

Jenis pencetus lain termasuk `Mesej diterima`, `Acara diterima`, `Aktiviti diterima`, `Kemas kini perbualan`, `Invoke diterima`, `Pengalihan`, `Tidak aktif`, dan `Pelan selesai`.

!!! info "Perbezaan utama"

    Pencetus topik adalah pemula _aktiviti perbualan_ di dalam chat.
    
    Pencetus acara adalah pemula _acara sistem_ yang dihantar melalui penyambung yang boleh menjalankan ejen tanpa sebarang perbualan sama sekali.

### Panduan ringkas Pencetus topik vs Pencetus acara

- **Pencetus topik:** Pengguna (atau aktiviti chat) berkata/melakukan X ➡️ jalankan Topik T.
- **Pencetus acara:** SharePoint/Planner/E-mel/Timer berlaku dengan muatan P ➡️ ejen menilai arahan ➡️ panggil Tindakan/Topik yang sesuai.

## 🏓 Perbandingan ejen interaktif vs ejen autonomi

Sekarang anda tahu perbezaan antara pencetus acara dan pencetus topik, mari kita pelajari perbezaan antara ejen interaktif vs ejen autonomi.

Dalam istilah Copilot Studio, "interaktif" merujuk kepada ejen yang terutamanya berinteraksi melalui **topik** dalam chat atau saluran. "Autonomi" merujuk kepada ejen yang juga menggunakan **pencetus acara** untuk berjalan tanpa input pengguna.

Jadual berikut merangkum perbezaan dan persamaan mereka.

| Dimensi                              | Ejen interaktif       | Ejen autonomi                                                                                                 |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Bagaimana ia bermula                | Pengguna (atau aktiviti chat) mencetuskan topik. Contoh: Oleh ejen, Frasa, Mesej diterima. | Pencetus acara luaran menghantar muatan melalui penyambung kepada ejen. Contoh: SharePoint, Planner, e-mel, jadual, dll. |
| Penggunaan utama                    | Soal jawab, aliran kerja berpandu, tindakan berdasarkan permintaan dalam chat - Teams, web, dll. | Operasi proaktif dan automasi latar belakang - bertindak balas terhadap perubahan sistem dan kemudian memberitahu, menyimpan, atau mengatur tugas. |
| Permukaan pencetus                  | Pencetus topik: Oleh ejen / Frasa / Mesej diterima / Jenis aktiviti / Invoke / Tidak aktif / Pelan selesai | Perpustakaan pencetus acara melalui penyambung; muatan termasuk data acara + arahan pilihan. |
| Perancang (orkestrasi generatif)    | Sangat digunakan untuk pencetus Oleh ejen dan Pelan selesai untuk memilih/menyusun topik. | Diperlukan untuk pencetus acara; ejen menggunakan arahan + muatan untuk memutuskan tindakan/topik mana yang akan dipanggil. |
| Contoh biasa                        | Pengguna bertanya "Apakah polisi bayaran balik kami?" → Topik dijalankan, pertanyaan pengetahuan, respons. | Tugas Planner baru diberikan → Pencetus acara berlaku → Ejen menghantar mesej Teams, mengemas kini rekod, atau memanggil topik. |
| Laluan persediaan                   | Cipta topik, tentukan jenis pencetus, tulis dialog/tindakan; terbitkan ke saluran. | Tambah pencetus acara (Gambaran Keseluruhan → Triggers), sahkan penyambung dengan kelayakan pembuat ejen, konfigurasikan muatan/arahan; uji melalui panel ujian; terbitkan. |
| Pengesahan dan tadbir urus          | Berjalan di bawah konteks saluran/pengesahan; pencetus topik bertindak balas terhadap aktiviti chat dalam saluran yang dibenarkan. | Ketersediaan pencetus bergantung pada dasar data Power Automate; penyambung berjalan di bawah akaun pembuat ejen. |
| Pemerhatian                         | Uji topik dalam Copilot Studio, periksa transkrip perbualan/aktiviti. | Gunakan Uji pencetus dan peta aktiviti untuk mengesahkan pelaksanaan sebelum menerbitkan, pantau aktiviti selepas menerbitkan. |
| Kesan kapasiti                      | Setiap mesej pengguna/respons ejen adalah mesej yang menggunakan kapasiti. | Setiap penghantaran acara juga adalah mesej, ditambah sebarang tindakan berikutnya. Contoh: pengulangan 10 minit = 6 mesej/jam |

### Bila untuk menggunakan yang mana?

- Pilih **pencetus topik (interaktif)** apabila pengguna memulakan perbualan ejen - FAQ, pengambilan berpandu, atau tugas gaya perintah dalam chat. Pencetus Oleh ejen perancang mengurangkan kurasi frasa secara manual.
- Tambah **pencetus acara (autonomi)** apabila ejen harus memulakan perbualan atau mengambil tindakan sendiri - pada kemas kini dalam SharePoint/Dataverse, e-mel masuk, atau pada jadual. Ini mengubah anda daripada operasi reaktif kepada proaktif.

## Petua & perkara penting untuk pembangun

1. **Aktifkan orkestrasi generatif** untuk mana-mana ejen yang anda ingin jadikan autonomi. Pencetus acara tidak akan muncul jika tidak.

1. **Modelkan muatan lebih awal.** Tentukan medan minimum yang diperlukan oleh ejen anda daripada pencetus seperti `itemId`, `assignedTo`, `dueDate` dan tambah arahan ringkas yang memberitahu ejen tindakan/topik mana yang perlu dipanggil berdasarkan nilai muatan.

1. **Skop pengesahan penting.** Pencetus disahkan menggunakan akaun pembuat ejen. Pastikan akaun tersebut mempunyai kebenaran penyambung yang betul dan mematuhi dasar data Power Automate.

1. **Kawal kos dan gangguan.** Pengulangan frekuensi tinggi atau sumber yang terlalu banyak berbual boleh meningkatkan penggunaan mesej dengan cepat - kawal di mana mungkin atau tambah syarat dalam pencetus untuk menapis acara.

1. **Uji sebelum menerbitkan.** Gunakan **Uji pencetus** dan peta aktiviti untuk memantau pelan dan tindakan yang dipanggil - ulangi arahan/muatan sehingga tingkah laku stabil.

## 🧪 Makmal 03 - Mengautomasi e-mel permohonan calon

Seterusnya kita akan menambah pencetus acara kepada **Ejen Pengambilan** dan membina aliran ejen dalam ejen anak **Ejen Pengambilan Permohonan** untuk mengendalikan pemprosesan lanjut secara autonomi.

### ✨ Senario penggunaan

!!! info ""

    **Sebagai seorang** Perekrut HR

    **Saya mahu** diberitahu apabila e-mel dengan resume tiba di Inbox saya yang telah dimuat naik secara automatik ke Dataverse

    **Supaya saya boleh** sentiasa diberitahu tentang resume yang dihantar melalui e-mel untuk permohonan yang dimuat naik secara automatik ke Dataverse

Kita akan mencapai ini menggunakan dua teknik

1. Pencetus acara untuk apabila e-mel tiba,
    1. Periksa `contentType` fail sama dengan `PDF` sebagai jenis format.
    1. Ekstrak fail dan muat naik ke Dataverse menggunakan tindakan melalui penyambung Dataverse.
    1. Kemudian hantar arahan kepada ejen untuk pemprosesan lanjut dengan menghantar parameter input daripada tindakan Dataverse.

1. Aliran ejen akan ditambah kepada ejen anak **Ejen Pengambilan Permohonan** yang dipanggil oleh arahan dalam pencetus acara.
    1. Gunakan parameter input yang dihantar daripada arahan pencetus acara dalam kad adaptif yang diposkan ke saluran dalam Microsoft Teams untuk memberitahu pasukan Pengambilan HR. Kad adaptif akan mempunyai pautan ke baris dalam Dataverse yang akan dilihat dalam **Ejen Pengambilan**.

Mari kita mulakan!

### ✨ Prasyarat untuk menyelesaikan misi ini

Anda perlu **sama ada**:

- **Telah menyelesaikan Misi 01 dan Misi 02** dan mempunyai Ejen Pengambilan anda sedia, **ATAU**
- **Import penyelesaian permulaan Misi 03** jika anda baru bermula atau perlu mengejar. [Muat turun Penyelesaian Permulaan Misi 03](https://aka.ms/agent-academy)

!!! note "Import Penyelesaian dan Data Contoh"
    Jika anda menggunakan penyelesaian permulaan, rujuk [Misi 01](../01-get-started/README.md) untuk arahan terperinci tentang cara mengimport penyelesaian dan data contoh ke dalam persekitaran anda.

Anda juga memerlukan akses kepada **Microsoft Teams** untuk menyelesaikan latihan makmal kedua memposkan kad adaptif ke Microsoft Teams.

### Makmal 3.1 - Automasi memuat naik resume ke Dataverse yang diterima melalui e-mel

1. Dalam Ejen Pengambilan, tatal ke bawah dalam **tab Gambaran Keseluruhan** dan pilih **+ Tambah pencetus**.

       ![Tambah pencetus kepada ejen](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.ms.png)

1. Senarai pencetus akan muncul. Pilih **Apabila e-mel baru tiba (V3)** dan pilih **Seterusnya**.

       ![Pilih pencetus Apabila e-mel baru tiba (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.ms.png)

1. Kita kini akan melihat **Nama Pencetus** dan rujukan sambungan **Log masuk** untuk aplikasi yang disenaraikan.

       Namakan semula nama pencetus kepada yang berikut,
    
       ```text
       Apabila e-mel baru tiba daripada pemohon
       ```

       Pastikan anda melihat tanda hijau di setiap rujukan sambungan aplikasi yang disenaraikan. Jika anda tidak melihat tanda hijau, log masuk melalui elipsis (...) dan pilih **+ Rujukan sambungan baru** untuk mencipta rujukan sambungan baru.

       ![Kemas kini butiran untuk nama pencetus dan periksa rujukan sambungan](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.ms.png)

1. Langkah terakhir adalah menetapkan sifat input pencetus. Kemas kini sifat berikut kepada yang berikut,

     | Sifat | Cara Menetapkan | Butiran |
     |-------|-----------------|---------|
     | **Sertakan Lampiran (Pilihan)** | Dropdown | Ya |
     | **Penapis Subjek (Pilihan)** | Taip/Masukkan dengan papan kekunci | Permohonan |
     | **Hanya dengan Lampiran (Pilihan)** | Dropdown | Ya |

       Pilih **Cipta pencetus**.

       ![Konfigurasi input pencetus](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.ms.png)

1. Setelah dicipta, mesej pengesahan akan muncul bahawa pencetus telah ditambah kepada ejen. Pilih **Tutup** dan pencetus akan disenaraikan dalam bahagian **Triggers**.
Sekarang kita akan mengemas kini pencetus acara untuk menambah lebih banyak keupayaan automasi. Pilih **ellipsis (...)** pada pencetus dan pilih **Edit in Power Automate**.

![Pilih Edit in Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.ms.png)

1. Pencetus akan dimuatkan sebagai aliran dalam portal pembuat Power Automate. Apa yang anda lihat adalah reka bentuk aliran dalam portal pembuat Power Automate. Di sinilah kita boleh menambah logik dan tindakan tambahan untuk lebih banyak automasi. Pencetus akan muncul di bahagian atas, diikuti dengan **Menghantar arahan kepada copilot yang ditentukan untuk diproses** sebagai tindakan terakhir dalam aliran.

![Reka bentuk aliran dalam portal pembuat Power Automate](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.ms.png)

1. Secara lalai, pencetus **Apabila e-mel baru tiba** dalam Power Automate mungkin memproses beberapa e-mel secara bersama jika beberapa e-mel tiba serentak, menjalankan aliran hanya sekali untuk kumpulan tersebut.

   Untuk memastikan aliran berjalan secara berasingan untuk setiap e-mel, aktifkan tetapan **Split On** dalam tetapan pencetus dan pilih `@triggerOutputs()?['body/value']` dalam medan dropdown array.

   Dengan **Split On** diaktifkan dan medan array ditetapkan kepada `@triggerOutputs()?['body/value']`, aliran akan berjalan secara individu untuk setiap mesej, walaupun banyak tiba serentak.

![Aktifkan tetapan Split On dalam pencetus](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.ms.png)

1. Seterusnya, mari kita tambahkan logik untuk memeriksa jenis fail lampiran, kita hanya mahu memuat naik lampiran fail .PDF dan bukan imej (ini mungkin datang dari tandatangan e-mel). Pilih ikon **+** di bawah pencetus dan pilih **Control** di bawah bahagian **Built in tools**.

![Pilih Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.ms.png)

1. Pilih tindakan **Condition**.

![Pilih tindakan Condition](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.ms.png)

1. Sekarang kita konfigurasikan syarat untuk memeriksa jika jenis fail lampiran adalah .PDF. Dalam medan **Choose a value**, pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

   1. Dalam medan **Search**, taipkan perkara berikut,

      ```text
      content type
      ```

   1. Kemudian pilih parameter **Attachments Content-Type** dari pencetus.

   1. Seterusnya, pilih **Add** untuk menambah input kandungan dinamik ke dalam parameter **Id** tindakan.

![Konfigurasikan tindakan Condition](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.ms.png)

1. Mari kita berhenti sejenak, anda mungkin perasan bahawa tindakan **For each** muncul secara automatik.

   Pilih tindakan **For each**. Tindakan ini mewakili pengulangan melalui setiap lampiran dalam e-mel, kerana parameter **Attachments Content-Type** dari pencetus berkaitan dengan setiap lampiran.

   Di bawah permukaan, ia adalah array dan itulah sebabnya tindakan **For each** ditambahkan secara automatik apabila kita memilih parameter **Attachments Content-Type** dalam tindakan **Condition**.

   Untuk mengetahui lebih lanjut tentang ini, kembangkan blok pembelajaran tambahan berikut.

??? info "Pembelajaran Tambahan: Tindakan For each muncul secara automatik"

🤔 **Mengapa "Apply to each" atau "For each" Muncul Secara Automatik?**

Apabila anda memilih parameter (kandungan dinamik) yang mewakili senarai atau array item - contohnya, senarai lampiran, e-mel, atau baris - Power Automate mengenali bahawa anda mungkin ingin memproses setiap item secara individu.

Untuk membantu anda melakukan ini, Power Automate secara automatik menambahkan **“Apply to each”** (atau **For each**) loop di sekitar tindakan anda. Ini memastikan bahawa tindakan anda akan berjalan sekali untuk setiap item dalam senarai, bukannya cuba memproses keseluruhan senarai sekaligus (yang boleh menyebabkan kesilapan).

🦋 **Contoh**

- Jika anda memilih "Attachments" dari tindakan sebelumnya (yang merupakan array), dan cuba menggunakannya dalam tindakan yang mengharapkan satu fail, Power Automate membungkus tindakan anda dalam **"Apply to each"** (atau **For each**) loop.
- Dengan cara ini, tindakan anda akan berjalan untuk **setiap lampiran** - satu demi satu.

💡 **Poin Penting**

- **Automatik:** Loop muncul secara automatik untuk membantu anda memproses setiap item dalam koleksi.
- **Mencegah kesilapan:** Tanpa loop, tindakan anda mungkin gagal kerana tidak dapat menangani banyak item sekaligus.
- **Petunjuk visual:** Ia adalah cara visual untuk menunjukkan bahawa aliran anda akan mengulangi tindakan untuk setiap item dalam senarai.

![Tindakan For Each dijelaskan](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.ms.png)

1. Seterusnya, dalam medan **Choose a value** yang lain, taipkan perkara berikut,

```text
application/pdf
```

Ini akan memastikan bahawa untuk setiap lampiran fail, ia akan memeriksa format sambungan fail adalah .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.ms.png)

1. Sekarang kita akan konfigurasikan laluan **True** untuk mengekstrak fail dari e-mel dan memuat naiknya ke dalam jadual **Resume** Dataverse.

   Tambahkan tindakan baru di bawah laluan **True** dan cari `html to text`. Pilih tindakan **Html to text**.

   Untuk mengetahui lebih lanjut tentang tindakan **Html to text**, kembangkan blok pembelajaran tambahan berikut.

??? info "Pembelajaran Tambahan: Tindakan Html to text"

🤔 **Apa itu Tindakan "HTML to text"?**

Tindakan **HTML to text** dalam Power Automate digunakan untuk menukar kandungan yang diformatkan HTML kepada teks biasa. Ini sangat berguna apabila anda menerima data (seperti e-mel, kandungan web, atau respons API) yang mengandungi tag HTML, dan anda ingin mengekstrak hanya teks yang boleh dibaca tanpa sebarang format atau kod.

⚙️ **Bagaimana ia berfungsi?**

- **Input:** Anda memberikan string kandungan HTML (contohnya, badan e-mel).
- **Output:** Tindakan ini menghapus semua tag HTML dan hanya mengembalikan teks biasa.

👍🏻 **Bila anda harus menggunakannya?**

- Apabila anda ingin mengekstrak teks yang boleh dibaca dari e-mel, laman web, atau respons API yang mengandungi HTML.
- Sebelum menghantar kandungan ke sistem yang tidak menyokong format HTML (seperti SMS, mesej Teams, atau pangkalan data).
- Untuk membersihkan data bagi pemprosesan atau analisis lanjut.

🔭 **Di mana untuk mencarinya?**

- Dalam Power Automate untuk Agent Flows, cari tindakan yang dipanggil `HTML to text`. Ia berada di bawah penyambung **Data Operations**.

💡 **Poin Penting**

- Ia menghapus semua tag HTML dan hanya meninggalkan teks.
- Ia tidak mentafsir atau melaksanakan skrip/gaya - hanya menghapus tag.
- Berguna untuk pembersihan data dan menyediakan kandungan untuk output teks biasa.

![Tambah tindakan HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.ms.png)

1. Seterusnya, kita perlu membuat rujukan sambungan baru untuk tindakan **Html to text** dengan memilih **Add new**.

![Tambah rujukan sambungan baru](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.ms.png)

1. Tindakan kini boleh dikonfigurasikan. Mari kita tambahkan parameter **Body** dari pencetus. Dalam medan **Content**, pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

![Tambah Kandungan Dinamik](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.ms.png)

1. Dalam tab **Dynamic content**, cari `body` dan pilih parameter **Body**, diikuti dengan memilih **Add**.

![Tambah parameter Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.ms.png)

1. Kami telah selesai mengkonfigurasi tindakan ini jadi mari keluar dari tindakan dengan memilih dua tanda sudut («) yang menunjuk ke kiri untuk menutup panel.

![Tutup panel tindakan](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.ms.png)

1. Kami akan menambah tindakan baru dengan memilih **ikon +** di bawah tindakan **Html to text** yang akan memuatkan panel untuk menambah tindakan. Pilih penyambung **Microsoft Dataverse**.

![Tambah tindakan baru](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.ms.png)

1. Pilih tindakan **Add a new row**.

![Tambah tindakan Add a new row](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.ms.png)

1. Namakan semula tindakan dengan memilih **Ellipsis (...)**, salin dan tampal perkara berikut sebagai nama,

```text
Add a new Resume row
```

Untuk parameter **Table name**, cari `res` dan pilih jadual **Resumes**.

![Namakan semula tindakan dan konfigurasikan parameter Table name](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.ms.png)

1. Pilih medan **Resume Title** seterusnya dan pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

![Konfigurasikan parameter Resume Title](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.ms.png)

1. Dalam tab **Function**, masukkan ekspresi berikut yang menggunakan fungsi `item()`.

```text
item()?['name']
```

Untuk mengetahui lebih lanjut tentang fungsi `item()`, kembangkan blok pembelajaran tambahan berikut.

??? info "Pembelajaran Tambahan: Fungsi `item()`"

🤔 **Apa itu fungsi `item()`?**

- Apabila anda menggunakan tindakan **Apply to each**, Power Automate akan melalui setiap elemen dalam koleksi (array).
- Ia paling kerap digunakan dalam tindakan seperti **Apply to each** (atau **For each**), **Select**, atau **Filter array**.

⚙️ **Bagaimana ia berfungsi?**

- `item()` adalah fungsi yang mengembalikan item semasa yang sedang diproses dalam operasi loop atau array.
- Di dalam loop itu, `item()` merujuk kepada _elemen semasa_ yang sedang diproses.

📌 **Di mana anda menggunakannya?**

- **Apply to each:** untuk mengakses sifat item semasa.
- **Select:** untuk mengubah setiap item dalam array.
- **Filter array:** untuk merujuk kepada item semasa yang sedang dinilai.

🦋 **Contoh**

- Ekspresi dalam loop:
       -  `item()?['Email']`
- Ini mendapatkan sifat `Email` dari item semasa.

💡 **Poin Penting**

- `item()` adalah _konteks-sensitif_: ia sentiasa merujuk kepada item semasa dalam loop atau operasi array yang anda berada.
- Jika anda menyarangkan loop, anda boleh menggunakan `items('LoopName')` untuk merujuk kepada item dalam loop tertentu.

Pilih **Add** untuk menambah ekspresi ke parameter **Resume Title**.

![Tambah ekspresi untuk parameter Resume Title](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.ms.png)

1. Kita masih perlu mengkonfigurasi beberapa parameter lagi, pilih **Show all** dan dalam medan **Cover Letter**, pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

   Dalam tab **Function**, masukkan ekspresi berikut yang menggunakan ekspresi yang sama dalam [misi](../02-multi-agent/README.md) sebelumnya.

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Ekspresi ini memeriksa jika _teks_ dari tindakan **Html to text** lebih panjang daripada 2000 aksara, dan jika ya, hanya mengembalikan 2000 aksara pertama; jika tidak, ia mengembalikan teks penuh.

![Tambah ekspresi untuk parameter Cover Letter](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.ms.png)

1. Ekspresi kini akan ditambahkan ke medan **Cover Letter**.

![Ekspresi ditambahkan ke parameter Cover Letter](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.ms.png)

1. Untuk medan **Source Email Address**, cari `from` dan pilih parameter **From** dari pencetus kerana ini mengandungi nilai alamat e-mel.

![Parameter Source Email Address](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.ms.png)

1. Untuk medan **Upload Date**, pilih **ikon kilat** atau **ikon fx** di sebelah kanan. Dalam tab **Function**, masukkan ekspresi berikut yang menggunakan fungsi `utcNow()`.

```text
utcNow()
```

Untuk mengetahui lebih lanjut tentang fungsi `utcNow`, kembangkan blok pembelajaran tambahan berikut.

??? info "Pembelajaran Tambahan: Fungsi `utcNow`"

🤔 **Apa itu fungsi `utcNow()`?**

- Fungsi utcnow() dalam Power Automate mengembalikan tarikh dan masa semasa dalam Waktu Universal Terkoordinasi (UTC) dalam format ISO 8601, seperti: `2025-09-23T04:32:14Z`

🦋 **Contoh**

- Ekspresi:
       -  `concat('Laporan dijana pada ', utcnow())`
- Output adalah:
       - Laporan dijana pada `2025-09-23T04:32:14Z`

💡 **Poin Penting**
- **Tiada argumen (parameter input) diperlukan:** ia sentiasa memberikan cap waktu UTC semasa.
   - **Kegunaan**
       - Menambah cap waktu pada log atau nama fail
       - Membandingkan waktu semasa dengan tarikh lain
       - Menjadualkan atau menetapkan syarat berdasarkan waktu

![Parameter Tarikh Muat Naik](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.ms.png)

1. Kita telah selesai mengkonfigurasi tindakan **Tambah baris Resume baru**, jadi mari keluar dari panel dengan mengecilkannya.

![Keluar dari panel tindakan](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.ms.png)

1. Kita akan menambah tindakan baru dengan memilih **ikon +** di bawah tindakan **Tambah baris Resume baru** yang akan memuatkan panel untuk menambah tindakan. Pilih penyambung **Microsoft Dataverse** sekali lagi.

![Tambah tindakan Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.ms.png)

1. Pilih tindakan **Muat naik fail atau imej**.

![Tambah tindakan Muat naik fail atau imej](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.ms.png)

1. Namakan semula tindakan dengan memilih **Ellipsis (...)**, salin dan tampal teks berikut sebagai nama,

```text
Muat Naik Fail Resume
```

![Namakan semula tindakan](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.ms.png)

1. Seterusnya, pilih medan **Nama Kandungan** dan pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

   Dalam **tab Fungsi**, masukkan ekspresi berikut yang menggunakan fungsi `item ()`. Ini akan mendapatkan sifat `name` dari item semasa (fail lampiran).

```text
item()?['name']
```

![Konfigurasi parameter Nama Kandungan](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.ms.png)

1. Untuk parameter **Nama Jadual**, cari `res` dan pilih jadual **Resumes**.

![Konfigurasi parameter Nama Jadual](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.ms.png)

1. Pilih medan **ID Baris** seterusnya dan pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

   Cari `ID` dan pilih parameter **Resume** dari tindakan Dataverse _Tambah baris baru_ kerana ini mengandungi nilai ID baris untuk memuat naik fail PDF.

   Pilih **Tambah**.

![Pilih parameter ID Baris](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.ms.png)

1. Pilih medan **Nama Kolum** dan pilih pilihan **Resume PDF**.

![Konfigurasi parameter Nama Kolum](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.ms.png)

1. Pilih medan **Kandungan** dan pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

   Dalam **tab Fungsi**, masukkan ekspresi berikut yang menggunakan fungsi `item ()`. Ini akan mendapatkan sifat `contentBytes` dari item semasa (fail lampiran). `contentBytes` merujuk kepada data binari mentah fail atau lampiran, yang dikodkan sebagai string Base64.

```text
item()?['contentBytes']
```

1. Kita telah selesai mengkonfigurasi tindakan ini, jadi mari keluar dari tindakan dengan memilih dua tanda kurung sudut («) yang menunjuk ke kiri untuk mengecilkan panel.

![Kecilkan panel tindakan](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.ms.png)

1. Seterusnya, pilih **Menghantar arahan kepada copilot yang ditentukan untuk diproses**, kemudian seret dan lepaskan tindakan ini di bawah tindakan **Muat Naik Fail Resume** dalam laluan _True_ syarat.

![Seret dan lepaskan tindakan dalam laluan True](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.ms.png)

1. Pilih **Menghantar arahan kepada copilot yang ditentukan untuk diproses** untuk mengkonfigurasinya.

![Pilih tindakan](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.ms.png)

1. Dalam medan **Badan/Mesej**, pilih semua kandungan medan dan kosongkan/hapuskan.

![Kosongkan parameter Badan](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.ms.png)

1. Salin dan tampal teks berikut ke dalam medan **Badan/Mesej** dan sorot `RESUME ID PLACEHOLDER`.

```text
Hantar [ResumeId (text)] = "RESUME ID PLACEHOLDER" dan [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" dan [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" kepada Alat "Notify Teams Applicant channel" dalam agen anak "Application Intake Agent"
```

![Ganti teks Placeholder ID Resume](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.ms.png)

1. Pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

   Cari `resume` dan pilih parameter **Resume** dari tindakan _Tambah baris baru Dataverse_ kerana ini mengandungi nilai `ID` dari baris Resume yang dibuat.

   Pilih **Tambah**.

![Pilih parameter Resume](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.ms.png)

1. Sorot `RESUME TITLE PLACEHOLDER`. Pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

   Cari `title` dan pilih parameter **Resume Title** dari tindakan _Tambah baris baru Dataverse_ kerana ini mengandungi nilai `resume title` dari baris Resume yang dibuat.

   Pilih **Tambah**.

![Pilih parameter Resume](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.ms.png)

1. Sorot `RESUME NUMBER PLACEHOLDER`. Pilih **ikon kilat** atau **ikon fx** di sebelah kanan.

   Cari `resume number` dan pilih parameter **Resume Number** dari tindakan _Tambah baris baru Dataverse_ kerana ini mengandungi nilai `Resume Number` dari baris Resume yang dibuat.

   Pilih **Tambah**.

![Pilih parameter Resume](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.ms.png)

1. Kita telah selesai mengkonfigurasi tindakan ini dan aliran agen kita 🙌🏻 Anda melakukan yang terbaik! Sekarang mari simpan aliran pencetus acara kita dengan memilih **Simpan draf**.

![Simpan draf](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.ms.png)

1. Sekarang kita perlu mengedit butiran aliran agen, pilih **Kembali**.

![Pilih Kembali](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.ms.png)

1. Pilih **Edit** dalam bahagian **Butiran** dan kemas kini **Pelan** kepada pilihan **Copilot Studio**.

   Pilih **Simpan**.

![Tukar pelan Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.ms.png)

1. Modal akan muncul untuk meminta anda mengesahkan pertukaran kepada pelan Copilot Studio. Pilih **Sahkan**.

![Sahkan pertukaran pelan Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.ms.png)

1. Pelan kini dikemas kini kepada **Copilot Studio**. Pilih **Edit** kerana kita perlu menerbitkan aliran pencetus acara untuk agen kita.

![Edit aliran](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.ms.png)

1. Pilih **Terbitkan**.

![Terbitkan](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.ms.png)

   Hooray! Aliran pencetus acara kini telah diterbitkan 😃

![Diterbitkan](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.ms.png)

Mari teruskan dengan mencipta aliran agen baru yang akan dipanggil oleh agen anak **Intake Application Agent**.

### Lab 3.2 - Memaklumkan saluran Teams menggunakan kad adaptif

Kita kini akan mencipta aliran agen baru untuk agen anak **Intake Application Agent** yang menggunakan nilai yang dihantar oleh pencetus acara, untuk menghantar kad adaptif ke saluran Teams. Kad adaptif ini akan memberi amaran kepada pasukan pengambilan HR tentang PDF yang dimuat naik secara automatik supaya mereka dapat menyemaknya.

Mari mulakan!

1. Dalam **Hiring Agent** pilih tab **Agents** dan pilih **Application Intake Agent**.

![Pilih Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.ms.png)

1. Skrol ke bawah ke **Tools** dan pilih **+ Add**.

![Tambah Alat](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.ms.png)

1. Modal **Tambah alat** akan muncul. Pilih **+ Alat baru**.

![Pilih Alat Baru](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.ms.png)

1. Pilih **Aliran agen**.

![Pilih Aliran agen](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.ms.png)

1. **Pereka aliran agen** akan dimuatkan seterusnya. Dalam pencetus **Apabila agen memanggil aliran**, pilih **+ Tambah input**.

![Pilih tambah input](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.ms.png)

1. Pilih **Teks** sebagai jenis input pengguna.

![Pilih Teks](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.ms.png)

1. Dalam medan teks input, salin dan tampal berikut untuk nama parameter input.

```text
ResumeId
```

![Input ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.ms.png)

1. Ulang langkah yang sama untuk menambah input teks kedua. Salin dan tampal berikut untuk nama parameter input.

```text
ResumeTitle
```

![Input ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.ms.png)

1. Ulang langkah yang sama untuk menambah input teks ketiga. Salin dan tampal berikut untuk nama parameter input.

```text
ResumeNumber
```
![Input ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.ms.png)

1. Ingat bagaimana dalam [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) kita menambah kad adaptif dalam Topik untuk agen kita? Kali ini, kita akan menambah kad adaptif dalam aliran agen. Kita kini akan menambah tindakan lain kepada aliran agen kita yang akan menghantar kad adaptif ke saluran Teams.

   Pilih **ikon +** di bawah pencetus.

![Tambah tindakan baru](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.ms.png)

1. Pilih tindakan **Hantar kad dalam sembang atau saluran**.

![Pilih tindakan Hantar kad dalam sembang atau saluran](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.ms.png)

1. Rujukan sambungan ke Microsoft Teams perlu dibuat dengan akaun pengguna yang anda log masuk. Pilih **Log masuk**.

![Pilih log masuk](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.ms.png)

1. Pilih akaun pengguna anda dan kemudian pilih **Benarkan akses**.

![Pilih Benarkan akses](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.ms.png)

1. Untuk parameter input berikut,

   | Parameter | Cara Tetapkan | Butiran |
   |----------|------------|---------|
   | **Hantar sebagai** | Dropdown | Pilih pilihan `Flow bot` |
   | **Hantar dalam** | Dropdown | Pilih pilihan `Channel` |
   | **Pasukan** | Dropdown | Pilih pasukan yang tersedia dalam persekitaran anda yang anda mempunyai akses untuk tujuan melengkapkan latihan ini |
   | **Saluran** | Dropdown | Pilih saluran yang tersedia dalam persekitaran anda yang anda mempunyai akses untuk tujuan melengkapkan latihan ini |

![Konfigurasi parameter input](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.ms.png)

1. Seterusnya, kita akan mengkonfigurasi medan **Kad Adaptif**. Pilih medan **Kad Adaptif**.

![Pilih medan Kad Adaptif](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.ms.png)

1. Buka [Fail JSON Resume Table Updated](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), salin keseluruhan kandungannya, dan tampal ke dalam medan Kad Adaptif.

![Salin dan tampal JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.ms.png)

1. Sama seperti yang kita lakukan dalam [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), kita akan menggantikan nilai sedia ada dalam payload JSON dengan nilai sebenar atau kandungan dinamik.

   Pertama, mari kita kemas kini URL untuk sifat `url` dalam sifat `selectAction`. URL ini akan digantikan dengan URL pandangan sistem Resumes dalam aplikasi model-driven **Hiring Hub**. Ini akan membolehkan Pengambilan memilih tindakan dan diarahkan ke pandangan sistem Resumes dalam aplikasi model-driven.

   Sorot nilai URL semasa dan hapuskannya.

![Pilih nilai URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.ms.png)

1. Dalam aplikasi model-driven **Hiring Hub**, navigasi ke pandangan sistem **Resumes** menggunakan menu di sebelah kiri dan salin URL. Kemudian navigasi kembali ke aliran agen, dan tampal URL yang disalin ke dalam sifat **url** dalam sifat `selectAction`.

![Salin URL pandangan sistem Resumes](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.ms.png)
1. Anda sepatutnya melihat perkara berikut di mana yang disorot dengan warna kuning adalah butiran persekitaran aplikasi model-driven **Hiring Hub**.

     | Parameter | Nilai | Penjelasan |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organisasi persekitaran Dataverse/Dynamics 365 |
     | **appid** | GUID | Untuk membuka aplikasi model-driven tertentu, parameter query sama ada appid atau appname digunakan. Dalam kes ini, appid digunakan |
     | **viewid** | GUID | Parameter query yang merupakan id pandangan |

       ![Tampal URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.ms.png)

1. Seterusnya, kita akan menambah nilai kandungan dinamik untuk beberapa sifat. Mari kita mulakan dengan teks yang akan memaparkan rujukan Nombor Resume bagi baris yang dicipta oleh pencetus acara secara automatik.

      Pilih ikon **panel** untuk memuatkan panel tindakan.

       ![Pilih ikon panel](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.ms.png)

1. Skrol ke bawah ke baris di mana anda melihat sifat `text` untuk `RESUME NUMBER PLACEHOLDER`. Sorot nilai tempat letak dan padamkannya.

       ![Padam tempat letak](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.ms.png)

1. Klik di antara tanda petikan berganda dan pilih ikon **kilat** atau ikon **fx** di sebelah kanan.

      Dalam tab **Dynamic Content**, pilih parameter **ResumeNumber** dan pilih **Add**.

       ![Tambah parameter ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.ms.png)

1. Parameter **ResumeNumber** kini akan ditambah sebagai kandungan dinamik kepada sifat `text`.

       ![Kandungan dinamik ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.ms.png)

1. Kita akan ulang langkah yang sama untuk `RESUME NAME PLACEHOLDER`. Skrol ke bawah ke baris di mana anda melihat sifat `text` untuk `RESUME NAME PLACEHOLDER`. Sorot nilai tempat letak dan padamkannya.

       ![Tempat letak Nama Resume](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.ms.png)

1. Klik di antara tanda petikan berganda dan pilih ikon **kilat** atau ikon **fx** di sebelah kanan.

      Dalam tab **Dynamic Content**, pilih parameter **ResumeTitle** dan pilih **Add**.

       ![Tambah parameter ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.ms.png)

1. Parameter **ResumeTitle** kini akan ditambah sebagai kandungan dinamik kepada sifat `text`.

       ![Kandungan dinamik ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.ms.png)

1. Kita akan ulang langkah yang sama untuk nilai **Due Date** yang mewakili tarikh akhir untuk perekrut menyemak resume. Skrol ke bawah ke baris di mana anda melihat sifat `text` untuk `May 21, 2023`.

       ![Pilih Benarkan akses](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.ms.png)

1. Padam nilai tempat letak tarikh ini dan klik di antara tanda petikan berganda.

       ![Padam](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.ms.png)

1. Pilih ikon **kilat** atau ikon **fx** di sebelah kanan dan dalam tab **Function**, masukkan ungkapan berikut dan pilih **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Ungkapan ini menggunakan dua fungsi.

     | Fungsi | Penjelasan |
     |----------|------------|
     | **addDays** | Menambah bilangan hari tertentu kepada tarikh yang diberikan dan mengembalikan tarikh yang terhasil dalam format string |
     | **utcNow** | Mengembalikan tarikh dan masa semasa dalam format Waktu Universal Terkoordinasi (UTC) sebagai string. |

      Untuk nilai utcNow, kita memformatkan tarikh untuk menjadi bulan dan tarikh, diikuti oleh tahun.

       ![Ungkapan Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.ms.png)

      Ungkapan kini akan ditambah kepada sifat `text`.

       ![Ungkapan Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.ms.png)

1. Akhir sekali, kita akan mengemas kini URL untuk sifat `url` dalam harta array `actions` di bahagian bawah payload JSON. URL tempat letak semasa ini akan digantikan dengan URL baris Resume dalam aplikasi model-driven **Hiring Hub**. Ini akan membolehkan Perekrut memilih tindakan `Action.OpenURL` kad adaptif dan diarahkan ke Resume dalam aplikasi model-driven.

       ![Padam tempat letak URL Lihat Resume](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.ms.png)

1. Dalam aplikasi model-driven **Hiring Hub**, buka satu baris dalam pandangan sistem **Resumes** menggunakan menu di sebelah kiri. Baris resume akan dimuatkan sebagai borang dalam aplikasi model-driven.

      Salin URL untuk baris Resume.

    ??? info "Cara untuk kembali ke aplikasi model-driven **Hiring Hub** jika anda keluar/menutupnya"

        1. Layari [https://make.powerapps.com](https://make.powerapps.com) dan pastikan anda berada dalam persekitaran pembangun yang anda gunakan untuk latihan makmal ini, jika tidak, tukar kepada persekitaran tersebut.
        
        ![Layari make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.ms.png)

        1. Pilih **Apps** dalam panel menu sebelah kiri dan untuk aplikasi model-driven **Hiring Hub**, pilih ikon **Play** untuk memuatkannya dalam pelayar anda.
        
        ![Pilih aplikasi model-driven Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.ms.png)

       ![Salin URL baris Resume](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.ms.png)

1. Kemudian kembali ke aliran ejen, sorot nilai URL tempat letak semasa dan padamkannya.

       ![Padam tempat letak URL baris Resume](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.ms.png)

1. Kemudian tampal URL yang disalin ke dalam sifat **url** dalam `url property`.

       ![Tampal URL baris Resume yang disalin](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.ms.png)

1. Anda sepatutnya melihat perkara berikut. Padam nilai id `GUID` di hujungnya. Kita akan menggantikan kandungan dinamik ini - parameter **ResumeId**.

       ![Padam tempat letak URL Lihat Resume](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.ms.png)

1. Pilih ikon **kilat** atau ikon **fx** di sebelah kanan.

      Dalam tab **Dynamic Content**, pilih parameter **ResumeId** dan pilih **Add**.

       ![Parameter ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.ms.png)

1. **ResumeId** akan ditambah sebagai kandungan dinamik. Perkara berikut yang disorot dengan warna kuning adalah butiran persekitaran aplikasi model-driven **Hiring Hub**.

     | Parameter | Nilai | Penjelasan |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL organisasi persekitaran Dataverse/Dynamics 365 |
     | **appid** | GUID | Untuk membuka aplikasi model-driven tertentu, parameter query sama ada appid atau appname digunakan. Dalam kes ini, appid digunakan |
     | **id** | GUID | Parameter query yang merupakan id baris Resume |

       ![Kandungan dinamik ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.ms.png)

1. Kita telah selesai mengkonfigurasi tindakan **Post card in a chat or channel** 👏🏻 Keluar dari panel konfigurasi tindakan dengan memilih ikon **x**.

       ![Tutup panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.ms.png)

1. Akhir sekali, kita akan mengkonfigurasi tindakan terakhir, **Respond to the agent** dengan menghantar teks kembali kepada ejen untuk menamatkan pemprosesan.

      Dalam tindakan **Respond to the agent**, pilih **+Add an output**.

       ![Pilih Tambah output](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.ms.png)

1. Pilih **Text** sebagai jenis output.

       ![Pilih teks sebagai jenis output](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.ms.png)

1. Masukkan perkara berikut sebagai nama output.

       ![Output Tamatkan Perbualan](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.ms.png)

1. Masukkan perkara berikut sebagai nilai untuk output.

       ```text
       Finished
       ```

       ![Nilai Output Tamatkan Perbualan](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.ms.png)

1. Kita kini telah selesai mengkonfigurasi aliran ejen. Pilih **Save draft** untuk menyimpan aliran ejen. Mesej pengesahan akan muncul setelah disimpan.

       ![Simpan draf](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.ms.png)

1. Sebelum menerbitkan aliran ejen, kita perlu mengemas kini butiran untuk aliran ejen. Pilih tab **Overview** dan pilih **Edit**.

      Dalam medan nama aliran, masukkan perkara berikut.

       ```text
       Notify Teams Applicant channel
       ```      

      Selepas itu, pilih ikon **Refresh** untuk mengemas kini penerangan aliran ejen menggunakan AI.

      Kemudian pilih **Save** untuk menyimpan butiran yang dikemas kini untuk aliran ejen.

       ![Edit dan simpan butiran](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.ms.png)

1. Navigasi kembali ke tab **Designer** dan pilih **Publish** untuk menerbitkan aliran ejen. Mesej pengesahan akan muncul setelah disimpan.

       ![Terbitkan aliran ejen](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.ms.png)

1. Aliran ejen kini perlu ditambah sebagai alat dalam **Application Intake Agent**. Navigasi kembali ke **Hiring Agent** dan pilih tab **Agents**, kemudian pilih **Application Intake Agent**.

       ![Pilih Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.ms.png)

1. Dalam bahagian **Details** ejen, kita akan mengemas kini medan **Description**. Salin perkara berikut dan tampal di hujung teks penerangan.

       ```text
       dan juga memberitahu saluran Teams Applicant
       ```

       ![Kemas kini Penerangan Ejen](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.ms.png)

1. Seterusnya, kita akan menambah aliran ejen sebagai alat. Skrol ke bawah dan pilih **+ Add**.

       ![Pilih Tambah](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.ms.png)

1. Pilih aliran ejen yang telah dibuat sebelum ini, **Notify Teams Applicant Channel**.

       ![Pilih aliran ejen](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.ms.png)

1. Seterusnya, pilih **Add and configure**.

       ![Pilih Tambah dan konfigurasikan](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.ms.png)

1. Dalam bahagian **Inputs** aliran ejen, tiga input yang kita konfigurasikan sebelum ini dalam aliran ejen adalah kelihatan. Secara lalai, konfigurasi **Fill using** ditetapkan kepada **Dynamically fill with AI**. Kita akan mengekalkan tetapan ini kerana prompt dari pencetus acara (dalam tindakan terakhir, **Sends a prompt to the specified copilot for processing** - ini adalah langkah 38-44 dari **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) akan mengandungi nilai parameter yang akan diekstrak oleh AI.

       ![Input aliran ejen alat](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.ms.png)

1. Sekarang alat telah ditambah kepada **Application Intake Agent**, arahan ejen perlu dikemas kini. Pilih ikon **back arrow** untuk kembali ke senarai ejen.

       ![Pilih ikon back arrow](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.ms.png)

1. Pilih **Application Intake Agent** dalam tab **Agents** di **Hiring Agent**.

       ![Pilih Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.ms.png)

1. Dalam medan **Instructions**, masukkan baris baru selepas arahan `2.Post-Upload`. Salin dan tampal arahan berikut.

       ```text
       Proses untuk Muat Naik Resume melalui Email
       1. Apabila anda menerima mesej, **Hantar [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" dan [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" dan [ResumeNumber (text_2)]= "R01026" kepada Alat "Notify Teams Applicant channel"** dalam ejen anak "Application Intake Agent", panggil [AGENT FLOW PLACEHOLDER]
       ```

       ![Kemas kini arahan Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.ms.png)

1. Sorot teks `[AGENT FLOW PLACEHOLDER`.

       ![Sorot tempat letak](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.ms.png)

1. Masukkan watak garis miring, `/`, dan pilih alat **Notify Teams Applicant Channel**.

       ![Pilih alat Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.ms.png)
1. Aliran ejen kini akan diaktifkan oleh **Application Intake Agent** mengikut arahan, selepas tindakan terakhir (**Menghantar arahan kepada copilot yang ditentukan untuk diproses**) dalam pencetus acara menghantar arahan yang mengandungi nilai parameter kembali kepada ejen.

      Pilih **Save** untuk menyimpan arahan yang telah dikemas kini untuk **Application Intake Agent**.

       ![Pilih Save](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.ms.png)

1. Arahan kini akan dikemas kini setelah ejen disimpan.

       ![Arahan dikemas kini](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.ms.png)

1. Kita kini perlu **Publish** **Hiring Agent**. Pilih **Publish** di bahagian atas kanan, dan dalam _Publish this agent modal_ yang muncul, pilih **Publish**.

       ![Publish Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.ms.png)

1. Setelah diterbitkan, mesej pengesahan akan muncul bahawa ejen telah diterbitkan.

       ![Mesej pengesahan](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.ms.png)

Kita kini boleh menguji ejen!

### Lab 3.3 - Uji pencetus acara

1. Untuk melaksanakan pencetus acara, e-mel perlu dihantar bersama fail PDF Resume. Dalam Outlook, tulis mesej e-mel baru.

     | Komponen E-mel | Butiran |
     |----------|------------|
     | **Kepada penerima** | Gunakan akaun pengguna yang telah anda log masuk sebagai nilai |
     | **Lampiran fail** | Muat naik fail [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Isi kandungan** | Salin dan tampal teks berikut sebagai isi kandungan e-mel |

       ```text
       Dear Hiring Manager,

       I am writing to express my interest in the Senior Power Platform Engineer position at your organization. With over nine years of experience delivering secure and scalable solutions on Microsoft cloud platforms, I am confident in my ability to contribute effectively to your team.

       In my most recent role as Lead Power Platform Engineer, I developed an automated resume-intake pipeline, reducing manual triage and improving searchability. I have delivered HR case management applications, introduced solution-aware flows, and implemented PR checks to enhance deployment lead times. My expertise includes Power Apps, Power Automate, Power Pages, Dataverse, and a range of Microsoft 365 services, as well as integration with Graph/REST APIs and Azure Functions.

       Previously, I developed Teams approvals with adaptive cards, cutting approval times to the same day, and created robust error-handling frameworks. My background also includes migrating legacy workflows to Power Automate and building self-service portals adopted by hundreds of employees.

       I hold a B.Sc. in Computer Science and am certified as a Power Platform Developer (PL-400) and Solution Architect (PL-600). I am also passionate about mentoring and have volunteered with local maker groups.

       Please find my CV attached for your consideration. I would welcome the opportunity to discuss how my skills and experience align with your needs.

       Thank you for your time and consideration.

       Kind regards,
       Taylor Testperson
       ```

       **Hantar** e-mel setelah selesai ditulis.

       ![Tulis e-mel dengan lampiran fail PDF](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.ms.png)

1. Dalam portal pembuat Power Automate untuk aliran pencetus acara, pilih ikon **Refresh** untuk melihat aliran yang berjaya dijalankan untuk e-mel yang dihantar.

       ![Pilih ikon refresh untuk melihat aliran yang dijalankan](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.ms.png)

1. Kembali ke Copilot Studio dalam **Hiring Agent**, pilih tab **Activity**.

       ![Pilih tab Activity](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.ms.png)

1. Tab **Activity** akan dimuatkan yang akan memaparkan semua aktiviti **Hiring Agent**. Akan ada aktiviti dengan nilai nama **Automated** yang mempunyai status **Complete**. Aktiviti ini mewakili pencetus acara dan aliran ejen yang telah diaktifkan.

       ![Aktiviti selesai](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.ms.png)

1. Pilih aktiviti tersebut, dan pilih pencetus acara dalam peta aktiviti. Pada panel sebelah kanan, perhatikan bagaimana parameter input dalam arahan mengandungi nilai parameter `Resume Id`, `Resume Title` dan `Resume Number` dari baris **Dataverse** yang telah dibuat. Ini berasal dari nilai kandungan dinamik yang dikonfigurasi sebelumnya dalam langkah 18 - 27 **Lab 3.1 - Automate uploading resumes to Dataverse received by email**.

       ![Pencetus acara](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.ms.png)

1. Navigasi kembali ke aplikasi model-driven **Hiring Hub** dan dalam **Resumes system view**, pilih **Refresh** untuk menyegarkan paparan. Baris baru untuk resume yang dihantar melalui e-mel kini akan disenaraikan kerana ia telah dibuat melalui pencetus acara.

       ![Baris resume dibuat](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.ms.png)

1. Navigasi kembali ke Copilot Studio dan pilih aliran ejen **Notify Teams Applicant Channel** dalam **Application Intake Agent** di peta aktiviti. Pada panel sebelah kanan, perhatikan bagaimana input mempunyai nilai dari baris Dataverse. Ini berasal dari arahan yang dihantar oleh tindakan terakhir (**Menghantar arahan kepada copilot yang ditentukan untuk diproses**) dalam pencetus acara yang mengandungi nilai parameter dari baris Dataverse yang baru dibuat. Inilah cara kita boleh menghantar nilai parameter dari pencetus acara ke aliran ejen.

       ![Pilih aliran ejen](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.ms.png)

1. Akhirnya, mari kita lihat kad adaptif yang diposkan ke saluran dalam **Microsoft Teams**. Dalam saluran tersebut, kita akan melihat kad adaptif yang memaparkan maklumat tentang baris Resume yang baru dibuat dalam Dataverse. Arahkan kursor ke hyperlink di awal kad adaptif, perhatikan bagaimana URL adalah URL paparan sistem Resumes yang telah kita konfigurasi sebelumnya dalam payload JSON (langkah 15 - 19 dari **Lab 3.2 - Notify a Teams channel using an adaptive card**) kad adaptif.

       ![Kad Adaptif URL paparan sistem Resume Table](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.ms.png)

1. Pilih hyperlink tersebut, dan anda akan diarahkan ke paparan sistem Resumes dalam aplikasi model-driven **Hiring Hub** di pelayar anda.

       ![Paparan sistem Resume dalam aplikasi model-driven Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.ms.png)

1. Navigasi kembali ke kad adaptif yang diposkan ke saluran dalam Microsoft Teams. Kali ini, arahkan kursor ke **View Resume** yang merupakan tindakan `Action.OpenURL` dari kad adaptif. Perhatikan bagaimana URL adalah baris Resume yang telah kita konfigurasi sebelumnya dalam payload JSON (langkah 30 - 36 dari **Lab 3.2 - Notify a Teams channel using an adaptive card**) kad adaptif.

       ![Kad Adaptif URL baris Resume](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.ms.png)

1. Pilih tindakan tersebut, dan anda akan diarahkan ke borang baris Resume dalam aplikasi model-driven **Hiring Hub** di pelayar anda.

       ![Baris Resume dalam aplikasi model-driven Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.ms.png)

## ✅ Misi Selesai

Tahniah! 👏🏻 Kerja yang cemerlang, Operatif.

✅ Pencetus acara: anda telah mencipta pencetus acara yang menghantar nilai parameter Dataverse ke aliran ejen.  
✅ Membina aliran ejen: menggunakan nilai parameter Dataverse untuk memaparkan kad adaptif ke saluran dalam Microsoft Teams bagi memberi amaran kepada pasukan pengambilan HR.  
✅ Mengemas kini arahan ejen anak: untuk mengaktifkan aliran setelah pencetus acara selesai.

Ini membolehkan **Hiring Agent** berfungsi secara autonomi setiap kali resume diterima sebagai lampiran e-mel dan memberitahu pasukan pengambilan HR untuk semakan manual.

Ini adalah penghujung **Lab 03 - Automating candidate application emails**, pilih pautan di bawah untuk bergerak ke pelajaran seterusnya.

⏭️ [Bergerak ke pelajaran **Authoring Agent Instructions**](../04-agent-instructions/README.md)

## 📚 Sumber Taktikal

📖 [Jadikan ejen anda autonomi dalam Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Tambah pencetus acara](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Gunakan aliran ejen dengan ejen anda](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Pengenalan pencetus Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Menggunakan aliran Power Automate dengan ejen](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Pencegahan kehilangan data untuk Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.