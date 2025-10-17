<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-17T17:13:23+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "id"
}
-->
# 🚨 Misi 12: Memahami Lisensi

## 🕵️‍♂️ NAMA KODE: `OPERASI PAHAM APA YANG HARUS DIBAYAR`

> **⏱️ Jangka Waktu Operasi:** `~15 menit`

## 🎯 Penjelasan Misi

Selamat datang, Rekrut. Sebelum Anda mengirimkan agen ke lapangan, Anda perlu memahami **bagaimana penggunaan diukur, dilisensikan, dan ditagih**. Misi ini menjelaskan model penagihan berbasis pesan, apa saja yang termasuk dalam lisensi Microsoft 365 Copilot, dan cara merencanakan dengan estimator Anda.

---

## 🎯 Tujuan: Memahami Model Berbasis Pesan

Copilot Studio tidak mengenakan biaya per pengguna atau per fitur—penagihan dilakukan berdasarkan **berapa banyak pesan yang dikonsumsi oleh agen Anda**. Sebuah "pesan" adalah interaksi antara agen Anda dan pengguna (atau sistem).

- 💬 Setiap interaksi pengguna dengan agen Anda dihitung sebagai setidaknya **1 pesan**
- 🔄 Interaksi kompleks (seperti grounding, AI generatif, atau alur) mengonsumsi **beberapa pesan**
- 💼 Anda membayar pesan melalui **paket prabayar** atau **pay-as-you-go (PAYGO)**

---

## Opsi Lisensi

### 1. **Paket Pesan Copilot Studio**

- Prabayar: **25.000 pesan/bulan seharga $200**
- Terbaik untuk penggunaan yang dapat diprediksi — kapasitas dibagi di seluruh tenant

### 2. **Pay-As-You-Go (PAYGO)**

- Pasca bayar: **$0.01 per pesan**
- Tidak ada komitmen di awal; penggunaan ditagih di akhir bulan melalui Azure

---

## Bagaimana jika Anda memiliki Lisensi M365 Copilot?

Jika tim Anda memiliki **lisensi Microsoft 365 Copilot**, agen Anda **dapat berjalan tanpa biaya tambahan untuk skenario utama**:

- Jawaban klasik, respons generatif, pesan yang didasarkan pada grafik, dan tindakan agen dasar **tidak dikenakan biaya** untuk pengguna M365 Copilot yang terautentikasi di aplikasi seperti Teams dan Outlook  
- Namun: jika Anda mengaktifkan fitur lanjutan seperti pemicu otonom, alur agen di luar tindakan dasar, atau menggunakan saluran/API eksternal, itu **mengonsumsi pesan yang dapat ditagih**

| Skenario                                    | Pesan Tambahan Ditagih?                       |
|---------------------------------------------|----------------------------------------------|
| Pengguna M365 Copilot bertanya kepada agen di Teams | ❌ Tidak ditagih                              |
| Agen memanggil API eksternal atau alur      | ✅ Ditagih (5 + pesan)                        |
| Agen menggunakan pemicu otonom atau grounding | ✅ Ditagih                                   |

---

## 🧮 Rencanakan dengan Tepat: Gunakan Estimator

Sebelum meluncurkan agen Anda, gunakan **Copilot Studio Usage Estimator** untuk memperkirakan konsumsi pesan dalam skenario yang realistis:

[👉 Gunakan Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Estimator ini memungkinkan Anda:

- 🔢 Menentukan **jumlah pengguna**
- ⚙️ Memilih **fitur agen** (grounding, tindakan, alur, memori)
- 📈 Memperkirakan **total pesan per agen per bulan**
- 🧠 Mengoptimalkan desain dan menghindari kejutan tagihan

!!! tip
    ✅ Gunakan estimator ini sejak awal — dan ulangi setelah membangun — untuk membandingkan penggunaan yang diharapkan dengan yang sebenarnya.

---

## 💼 Contoh Skenario

**Lingkungan**: Agen Help Desk IT dengan grounding + satu alur Power Automate  
**Sesi**: 5 interaksi pengguna per sesi  
**Asumsi**: grounding (10 pesan) + tindakan (5 pesan) + 5 respons generatif (10 pesan)  
**Total**: ~25 pesan per sesi  
**Skala**: 500 sesi/bulan = ~12.500 pesan (½ paket pesan)

---

## 🧠 Tips Profesional untuk Mengontrol Biaya

- Pantau penggunaan melalui Power Platform Admin Center
- Mulai di lingkungan pengembangan/pengujian sebelum diluncurkan
- Nonaktifkan tindakan dan konektor yang tidak digunakan
- Gunakan **lisensi Microsoft 365 Copilot** jika memungkinkan untuk penggunaan internal
- Gunakan paket pesan saat skala menjadi lebih dapat diprediksi
- Gunakan **Copilot Studio Usage Estimator** untuk memperkirakan penggunaan

---

## 🏁 Misi Selesai

Anda sekarang memahami:

- Bagaimana penggunaan dihitung dan ditagih
- Kapan M365 Copilot mencakup penggunaan — dan kapan tidak
- Cara memperkirakan dan mengelola konsumsi pesan Anda

🎓 Dengan pengetahuan ini, Anda siap untuk maju dan mengirimkan agen Anda **secara efisien dan cerdas**

---

## 📚 Sumber Daya Taktis

Pelajari lebih lanjut tentang lisensi dan penagihan di Copilot Studio

- 📄 [Lisensi & Tarif Pesan Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Panduan Lisensi Power Platform (Juli 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Manajemen Pesan & Pemantauan Kapasitas](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.