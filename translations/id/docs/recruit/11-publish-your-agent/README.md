<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9dceeba2eae2bb73e328602a060eddab",
  "translation_date": "2025-10-17T17:11:47+00:00",
  "source_file": "docs/recruit/11-publish-your-agent/README.md",
  "language_code": "id"
}
-->
# 🚨 Misi 11: Publikasikan Agen Anda

## 🕵️‍♂️ NAMA KODE: `OPERASI PUBLIKASI PUBLIKASI PUBLIKASI`

> **⏱️ Waktu Operasi:** `~30 menit`  

🎥 **Tonton Panduan**

[![Thumbnail video publikasi agen](../../../../../translated_images/video-thumbnail.cb69abce792f4bd310436e8b46ebbfcada62f60c636bb894e4077046131f7023.id.jpg)](https://www.youtube.com/watch?v=eVZmljhYlSI "Tonton panduan di YouTube")

## 🎯 Ringkasan Misi

Setelah menyelesaikan serangkaian modul yang menantang, Pembuat Agen, Anda kini siap untuk langkah paling penting: mempublikasikan agen Anda. Saatnya membuat kreasi Anda tersedia bagi pengguna di Microsoft Teams dan Microsoft 365 Copilot.

Agen Anda—dilengkapi dengan misi yang jelas, alat yang kuat, dan akses ke sumber pengetahuan utama—siap melayani. Dengan menggunakan Microsoft Copilot Studio, Anda dapat menerapkan agen Anda sehingga dapat mulai membantu pengguna nyata di tempat mereka bekerja.

Mari luncurkan agen Anda ke dalam aksi.

## 🔎 Tujuan

📖 Pelajaran ini mencakup:

1. Mengapa penting untuk mempublikasikan agen Anda
1. Apa yang terjadi saat Anda mempublikasikan agen Anda
1. Cara menambahkan saluran (Microsoft Teams & Microsoft 365 Copilot)
1. Cara menambahkan agen di Microsoft Teams
1. Cara membuat agen tersedia di Microsoft Teams untuk seluruh organisasi Anda

## 🚀 Publikasikan agen

Setiap kali Anda bekerja pada agen di Copilot Studio, Anda mungkin memperbaruinya dengan menambahkan pengetahuan atau alat. Ketika Anda sudah siap dengan semua perubahan dan telah menguji dengan cermat, Anda siap untuk mempublikasikannya. Publikasi memastikan bahwa pembaruan terbaru tersedia secara langsung. Jika Anda memperbarui agen Anda dengan alat baru dan tidak menekan tombol publikasi, pembaruan tersebut belum tersedia untuk pengguna akhir.

Pastikan selalu menekan tombol publikasi ketika Anda ingin mendorong pembaruan kepada pengguna agen Anda. Agen Anda mungkin memiliki saluran yang ditambahkan padanya, dan ketika Anda menekan tombol publikasi, pembaruan tersedia untuk semua saluran yang telah Anda tambahkan ke agen.

## ⚙️ Konfigurasi saluran

Saluran menentukan di mana pengguna Anda dapat mengakses dan berinteraksi dengan agen Anda. Setelah Anda mempublikasikan agen Anda, Anda dapat membuatnya tersedia di beberapa saluran. Setiap saluran mungkin menampilkan konten agen Anda dengan cara yang berbeda.

Anda dapat menambahkan agen Anda ke saluran berikut:

- **Microsoft Teams dan Microsoft 365 Copilot** - Buat agen Anda tersedia di obrolan dan rapat Teams, serta dalam pengalaman Microsoft 365 Copilot ([Pelajari lebih lanjut](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams))
- **Situs demo** - Uji agen Anda di situs demo yang disediakan oleh Copilot Studio ([Pelajari lebih lanjut](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **Situs kustom** - Sematkan agen Anda langsung ke situs web Anda sendiri ([Pelajari lebih lanjut](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **Aplikasi seluler** - Integrasikan agen Anda ke aplikasi seluler kustom ([Pelajari lebih lanjut](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-custom-application))
- **SharePoint** - Tambahkan agen Anda ke situs SharePoint untuk bantuan dokumen dan situs ([Pelajari lebih lanjut](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-sharepoint))
- **Facebook Messenger** - Terhubung dengan pengguna melalui platform pesan Facebook ([Pelajari lebih lanjut](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-facebook))
- **Power Pages** - Integrasikan agen Anda ke situs web Power Pages ([Pelajari lebih lanjut](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-power-pages))
- **Saluran Azure Bot Service** - Akses saluran tambahan termasuk Slack, Telegram, Twilio SMS, dan lainnya ([Pelajari lebih lanjut](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-azure-bot-service-channels))

Untuk menambahkan saluran, navigasikan ke tab **Channels** di agen Anda dan pilih saluran yang ingin Anda konfigurasi. Setiap saluran memiliki persyaratan pengaturan khusus dan mungkin memerlukan langkah autentikasi atau konfigurasi tambahan.

![Tab Channels di agen](../../../../../translated_images/channels.01b4185735e1147c56dd9c6a9d33a751cdf45e44b3b8515b21e2c57a9c1fe9b8.id.png)

## 📺 Pengalaman saluran

Saluran yang berbeda memiliki pengalaman pengguna yang berbeda. Saat membangun agen untuk beberapa saluran, pastikan untuk menyadari perbedaan di setiap saluran. Strategi yang baik adalah menguji agen Anda di beberapa saluran untuk memastikan bahwa agen tersebut benar-benar berfungsi sesuai yang Anda inginkan.

| Pengalaman                        | Situs web     | Teams dan Microsoft 365 Copilot         | Facebook                 | Dynamics Omnichannel untuk Layanan Pelanggan                |
| --------------------------------- | ------------- | --------------------------------------- | ------------------------ | ----------------------------------------------------------- |
| [Survei kepuasan pelanggan][1]    | Kartu adaptif | Hanya teks                              | Hanya teks               | Hanya teks                                                  |
| [Pilihan ganda][1]                | Didukung      | [Didukung hingga enam (sebagai kartu hero)][4] | [Didukung hingga 13][6]  | [Sebagian didukung][8]                                      |
| [Markdown][2]                     | Didukung      | [Sebagian didukung][5]                  | [Sebagian didukung][7]   | [Sebagian didukung][9]                                      |
| [Pesan selamat datang][1]         | Didukung      | Didukung                                | Tidak didukung           | Didukung untuk [Chat][10]. Tidak didukung untuk saluran lainnya. |
| [Did-You-Mean][3]                 | Didukung      | Didukung                                | Didukung                 | Didukung untuk [Microsoft Teams][11], [Chat][10], Facebook, dan saluran hanya teks (pesan singkat (SMS) melalui [TeleSign][12] dan [Twilio][13], [WhatsApp][14], [WeChat][15], dan [Twitter][16]). Tindakan yang disarankan disajikan sebagai daftar hanya teks; pengguna harus mengetik ulang opsi untuk merespons. |

[1]: https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics  
[2]: https://daringfireball.net/projects/markdown/  
[3]: https://learn.microsoft.com/microsoft-copilot-studio/advanced-ai-features  
[4]: https://learn.microsoft.com/microsoftteams/platform/concepts/cards/cards-reference#hero-card  
[5]: https://learn.microsoft.com/microsoftteams/platform/bots/how-to/format-your-bot-messages#text-only-messages  
[6]: https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies/  
[7]: https://www.facebook.com/help/147348452522644?helpref=related  
[8]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#suggested-actions-support  
[9]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#preview-support-for-formatted-messages  
[10]: https://learn.microsoft.com/dynamics365/customer-service/set-up-chat-widget  
[11]: https://learn.microsoft.com/dynamics365/customer-service/configure-microsoft-teams  
[12]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel  
[13]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel-twilio  
[14]: https://learn.microsoft.com/dynamics365/customer-service/configure-whatsapp-channel  
[15]: https://learn.microsoft.com/dynamics365/customer-service/configure-wechat-channel  
[16]: https://learn.microsoft.com/dynamics365/customer-service/configure-twitter-channel  

> [!NOTE]  
> Ada beberapa contoh di mana Anda dapat menggunakan logika yang berbeda untuk saluran yang berbeda. Contohnya dapat ditemukan di repositori Power Platform Snippets:  
>  
> Henry Jammes membagikan contoh cara menampilkan kartu adaptif yang berbeda ketika salurannya adalah Microsoft Teams. ([Tautan ke contoh](https://github.com/pnp/powerplatform-snippets/blob/main/copilot-studio/multiple-topics-matched-topic/source/multiple-topics-matched.yaml#L40))

## 🧪 Lab 11: Publikasikan agen Anda ke Teams dan Microsoft 365 Copilot

### 🎯 Kasus penggunaan

Agen Bantuan IT Contoso Anda kini telah sepenuhnya dikonfigurasi dengan kemampuan yang kuat—agen ini dapat mengakses sumber pengetahuan SharePoint, membuat tiket dukungan, mengirim notifikasi proaktif, dan merespons pertanyaan pengguna dengan cerdas. Namun, semua fitur ini saat ini hanya tersedia di lingkungan pengembangan tempat Anda membangunnya.

**Tantangan:** Pengguna akhir tidak dapat memanfaatkan kemampuan agen Anda hingga agen tersebut dipublikasikan dengan benar dan dibuat dapat diakses melalui saluran tempat mereka bekerja.

**Solusi:** Memublikasikan agen Anda memastikan bahwa versi terbaru—dengan semua pembaruan terbaru, topik baru, sumber pengetahuan yang ditingkatkan, dan alur yang dikonfigurasi—tersedia untuk pengguna nyata. Tanpa publikasi, pengguna masih akan berinteraksi dengan versi lama agen Anda yang mungkin kehilangan fungsi penting.

Menambahkan saluran Teams dan Microsoft 365 Copilot sama pentingnya karena:

- **Integrasi Teams**: Karyawan organisasi Anda menghabiskan sebagian besar waktu mereka di Microsoft Teams untuk kolaborasi, rapat, dan komunikasi. Dengan menambahkan agen Anda ke Teams, pengguna dapat mendapatkan dukungan IT tanpa meninggalkan lingkungan kerja utama mereka.

- **Microsoft 365 Copilot**: Pengguna dapat mengakses agen bantuan IT khusus Anda langsung dalam pengalaman Microsoft 365 Copilot mereka, membuatnya terintegrasi dengan mulus ke dalam alur kerja harian mereka di aplikasi Office.

- **Akses Terpusat**: Alih-alih mengingat situs web atau aplikasi terpisah, pengguna dapat mengakses dukungan IT melalui platform yang sudah mereka gunakan, mengurangi hambatan dan meningkatkan adopsi.

Misi ini mengubah pekerjaan pengembangan Anda menjadi solusi siap produksi yang memberikan nilai nyata bagi pengguna akhir organisasi Anda.

### Prasyarat

Sebelum memulai lab ini, pastikan Anda memiliki:

- ✅ Menyelesaikan lab sebelumnya dan memiliki Agen Bantuan Contoso yang sepenuhnya dikonfigurasi
- ✅ Agen Anda telah diuji dan siap digunakan di produksi
- ✅ Izin di lingkungan Copilot Studio Anda untuk mempublikasikan agen
- ✅ Akses ke Microsoft Teams di organisasi Anda

### 11.1 Publikasikan agen Anda

Sekarang semua pekerjaan kita pada agen telah selesai, kita harus memastikan semua pekerjaan kita tersedia untuk pengguna akhir yang akan menggunakan agen kita. Untuk memastikan konten tersedia untuk semua pengguna, kita perlu mempublikasikan agen kita.

1. Pergi ke Agen Bantuan Contoso di Copilot Studio (melalui [portal pembuat Copilot Studio](https://copilotstudio.microsoft.com))

    Di Copilot Studio, mudah untuk mempublikasikan agen Anda. Anda hanya perlu memilih tombol publikasi di bagian atas tampilan agen.

    ![Tampilan Publikasi Agen](../../../../../translated_images/publish.0ea13d92c5642af915bb3340c95d21fc560314f4df9de212039a9bfc90b91789.id.png)

1. Pilih tombol **Publish** di agen Anda

    Ini akan membuka pop-up publikasi - untuk mengonfirmasi bahwa Anda benar-benar ingin mempublikasikan agen Anda.

    ![Konfirmasi Publikasi](../../../../../translated_images/publish-popup.5c81be18b2a810270303f4020b0469152a40e006d26cb4aa50373ecaf5033777.id.png)

1. Pilih **Publish** untuk mengonfirmasi publikasi agen Anda

    Sekarang pesan akan muncul bahwa agen Anda sedang dipublikasikan. Anda tidak perlu menjaga pop-up itu tetap terbuka. Anda akan diberi tahu ketika agen telah dipublikasikan.

    ![Agen sedang dipublikasikan](../../../../../translated_images/publishing.a459aaf38bc05b77198534174dc726b598c5270c5474227933f6a0f1a1efb299.id.png)

    Ketika agen selesai dipublikasikan, Anda akan melihat notifikasi di bagian atas halaman agen.

    ![Notifikasi publikasi selesai](../../../../../translated_images/publish-notification.19af02a64b396fb845fa86917f97f165bb2098b76de97cb039c6a9547323eee1.id.png)

Namun - kita hanya mempublikasikan agen, kita belum menambahkannya ke saluran, jadi mari kita perbaiki sekarang!

### 11.2 Tambahkan saluran Teams dan Microsoft 365 Copilot

1. Untuk menambahkan saluran Teams dan Microsoft 365 Copilot ke agen kita, kita perlu memilih **Channel** di navigasi atas agen

    ![Tab Channels](../../../../../translated_images/channels-tab.c0e6f94aec1578072eee8efd47e461d58cd685799de84a4ddc18cb418886f834.id.png)

    Di sini kita dapat melihat semua saluran yang dapat kita tambahkan ke agen ini.

1. Pilih **Teams dan Microsoft 365**

    ![Pilih Teams dan Microsoft 365](../../../../../translated_images/teams-m365-copilot.f0893e75ed6cfa7e41d8beb6b0131114d29a1b71dab2b2d888bde406d30fcff0.id.png)

1. Pilih **Add channel** untuk menyelesaikan wizard dan menambahkan saluran ke agen

    ![Pilih tambahkan saluran](../../../../../translated_images/add-channel.5fd407ac747e713cea43d87cfdc015c5d203a70e729619ca01a67e6868afdb03.id.png)

    Ini akan memakan waktu sebentar hingga ditambahkan. Setelah ditambahkan, notifikasi hijau akan muncul di bagian atas sidebar.

    ![Saluran ditambahkan](../../../../../translated_images/channel-added.ce9c58eff88524ba2a74c37c7939350303e650d93f34c753dfe9636226e197f1.id.png)

1. Pilih **See agent in Teams** untuk membuka tab baru

    ![Lihat agen di Teams](../../../../../translated_images/see-agent-teams.5f265c0babfccbe4ef18fbe6259df04ec8649d48fed94d42b3c330e37ca0a9d5.id.png)

1. Pilih **Add** untuk menambahkan Agen Bantuan Contoso ke Teams

    ![Tambahkan agen ke Teams](../../../../../translated_images/add-teams.645ddf3b6719bd7edfcf453d77481c18afb7df478a4f655ef2452a0b77ab6944.id.png)

    Ini akan memakan waktu sebentar. Setelah selesai, layar berikut akan muncul:

    ![Agen berhasil ditambahkan](../../../../../translated_images/teams-added.3cafc77c56381bdd977ea80a117795c6ea677b2d86568cd5da24338e3958f7ce.id.png)

1. Pilih **Open** untuk membuka agen di Teams

    Ini akan membuka agen di Teams sebagai aplikasi Teams

    ![Agen terbuka di Microsoft Teams](../../../../../translated_images/agent-teams-open.5a83151f38b31ebeccf7cabf36f2bfd03e7045bb902b4103f1d2126c6aec9498.id.png)

Sekarang kita telah mempublikasikan agen untuk bekerja di Microsoft Teams, tetapi Anda mungkin ingin membuatnya tersedia untuk lebih banyak orang.

### 11.3 Buat agen tersedia untuk semua pengguna di tenant

1. Tutup tab browser tempat Agen Bantuan Contoso dibuka

    Ini akan membawa Anda kembali ke Copilot Studio di mana panel samping Teams dan Microsoft 365 Copilot masih terbuka. Kita hanya membuka agen di Teams sekarang, tetapi kita dapat melakukan lebih banyak hal di sini. Kita dapat mengedit detail agen, kita dapat menerapkan agen ke lebih banyak pengguna, dan lainnya.

1. Pilih **Edit details**

    ![Edit details](../../../../../translated_images/m365-teams-edit-details.317ee562b1b2aa75c093f2833b793610c3445f69dada7163f164674bad173ab5.id.png)
Ini akan membuka panel tempat kita dapat mengubah berbagai detail dan pengaturan agen. Kita dapat mengubah detail dasar seperti ikon, warna latar belakang ikon, dan deskripsi. Kita juga dapat mengubah pengaturan Teams (misalnya, memungkinkan pengguna untuk menambahkan agen ke tim, atau menggunakan agen ini dalam obrolan grup dan rapat) di sini. Saat Anda memilih *lebih banyak*, Anda juga dapat mengubah detail pengembang seperti nama pengembang, situs web, pernyataan privasi, dan syarat penggunaan.

![Panel Edit details](../../../../../translated_images/edit-details.216f5c77105e190ca504c4c21152f32b0965450427d7cc175df370935b715510.id.png)

1. Pilih **Cancel** untuk menutup panel Edit details

1. Pilih **Availability options**

    ![Opsi ketersediaan](../../../../../translated_images/m365-teams-availability-options.0ab161ab446293ef5c8f877df3457b87c8a02f5c9df21dc735fb9cddc6b58ed1.id.png)

    Ini akan membuka panel opsi ketersediaan, di mana Anda dapat menyalin tautan untuk dikirimkan kepada pengguna agar mereka dapat menggunakan agen ini (perlu diingat, Anda juga harus membagikan agen dengan pengguna tersebut) dan Anda dapat mengunduh file untuk menambahkan agen Anda ke Microsoft Teams atau Microsoft 365 store. Untuk menampilkan agen di store, Anda memiliki opsi lain juga: Anda dapat menampilkannya kepada rekan tim dan pengguna yang dibagikan (untuk ditampilkan di bagian *Built with Power Platform*) atau Anda dapat menampilkannya kepada semua orang di organisasi Anda (ini memerlukan persetujuan administrator).

1. Pilih **Show to everyone in my org**

    ![Opsi ketersediaan](../../../../../translated_images/availability-options.a7043460dcbbcdbb6981c86cae687b0d4ecd3d7a8ef709dd267684b17d4a7b8e.id.png)

1. Pilih **Submit for admin approval**

    ![Ajukan untuk persetujuan](../../../../../translated_images/submit-for-approval.6c7cfa08ed2637c8e0219dde1d69ac7e62e81b32289e77ff5b6cdeb730ab5e0b.id.png)

    Sekarang, administrator Anda harus menyetujui pengajuan agen Anda. Mereka dapat melakukannya dengan pergi ke Teams Admin Center dan mencari Contoso Helpdesk Agent di Apps. Pada tangkapan layar, Anda dapat melihat apa yang akan dilihat oleh administrator di Teams Admin Center.

    ![Aplikasi Teams menunggu persetujuan](../../../../../translated_images/pending-approval.ec9b6ebcdd1c9a8ca8f9bf20148ffa97e40d16720779c14f106dc3ddda170202.id.png)

    Administrator harus memilih Contoso Helpdesk Agent dan memilih *Publish* untuk mempublikasikan Contoso Helpdesk Agent kepada semua orang.

    ![Publikasikan aplikasi Teams](../../../../../translated_images/teams-apps-publish.cccbf85984750c60cc7cc27fc20c152ef14d21e3dacb6fa3df01c024ac5fe7ad.id.png)

    Ketika administrator telah mempublikasikan pengajuan agen, Anda akan dapat menyegarkan Copilot Studio dan Anda seharusnya melihat banner *available in app store* di opsi ketersediaan.

    ![Tersedia di App Store](../../../../../translated_images/available-in-app-store.aeb2a875a164b537ee62d0ece51399e94986393837a1c6eec544b81c673e23b0.id.png)

Ada lebih banyak kemungkinan di sini. Administrator Anda dapat mengubah kebijakan pengaturan global dan secara otomatis menginstal Contoso Helpdesk Agent untuk semua orang di tenant. Selain itu, Anda dapat menyematkan Contoso Helpdesk Agent ke panel kiri sehingga semua orang memiliki akses mudah ke sana.

## ✅ Misi Selesai

🎉 **Selamat!** Anda berhasil mempublikasikan agen Anda dan menambahkannya ke Teams dan Microsoft 365 Copilot! Selanjutnya adalah misi terakhir dari kursus ini: Memahami lisensi.

⏭️ [Lanjut ke pelajaran **Memahami lisensi**](../12-understanding-licensing/README.md)

## 📚 Sumber Daya Taktis

🔗 [Dokumentasi saluran publikasi](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/11-publish-your-agent" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.