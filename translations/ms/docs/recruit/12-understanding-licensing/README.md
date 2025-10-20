<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-20T00:50:08+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "ms"
}
-->
# 🚨 Misi 12: Memahami Lesen

## 🕵️‍♂️ NAMA KOD: `OPERASI TAHU APA YANG ANDA TANGGUNG`

> **⏱️ Tempoh Operasi:** `~15 minit`

## 🎯 Ringkasan Misi

Selamat datang, Rekrut. Sebelum anda menghantar ejen anda ke lapangan, anda perlu tahu **bagaimana penggunaan diukur, dilesenkan, dan dikenakan bayaran**. Misi ini akan menerangkan model pengebilan berdasarkan mesej, menjelaskan apa yang termasuk dalam lesen Microsoft 365 Copilot, dan menunjukkan cara merancang dengan alat penganggar.

---

## 🎯 Objektif: Memahami Model Berdasarkan Mesej

Copilot Studio tidak mengenakan bayaran berdasarkan pengguna atau ciri—ia mengenakan bayaran berdasarkan **berapa banyak mesej yang digunakan oleh ejen anda**. "Mesej" adalah interaksi antara ejen anda dan pengguna (atau sistem).

- 💬 Setiap interaksi pengguna dengan ejen anda dikira sebagai sekurang-kurangnya **1 mesej**
- 🔄 Interaksi yang kompleks (seperti grounding, AI generatif, atau aliran) menggunakan **beberapa mesej**
- 💼 Anda membayar mesej sama ada melalui **pakej prabayar** atau **bayar mengikut penggunaan (PAYGO)**

---

## Pilihan Lesen

### 1. **Pakej Mesej Copilot Studio**

- Prabayar: **25,000 mesej/bulan untuk $200**
- Terbaik untuk penggunaan yang boleh diramal — kapasiti dikumpulkan di seluruh penyewa

### 2. **Bayar Mengikut Penggunaan (PAYGO)**

- Pasca bayar: **$0.01 setiap mesej**
- Tiada komitmen awal; penggunaan dikenakan bayaran pada akhir bulan melalui Azure

---

## Bagaimana jika anda mempunyai Lesen M365 Copilot?

Jika pasukan anda mempunyai **lesen Microsoft 365 Copilot**, ejen anda **boleh beroperasi tanpa pengebilan tambahan untuk senario utama**:

- Jawapan klasik, respons generatif, mesej yang berasaskan graf, dan tindakan ejen asas adalah **tidak dikenakan bayaran** untuk pengguna M365 Copilot yang diautentikasi dalam aplikasi seperti Teams dan Outlook  
- Walau bagaimanapun: jika anda mengaktifkan ciri lanjutan seperti pencetus autonomi, aliran ejen melebihi tindakan asas, atau menggunakan saluran/APIs luaran, ia akan **menggunakan mesej yang dikenakan bayaran**

| Senario                                     | Mesej Tambahan Dikenakan Bayaran?            |
|---------------------------------------------|----------------------------------------------|
| Pengguna M365 Copilot bertanya kepada ejen dalam Teams | ❌ Tidak dikenakan bayaran                   |
| Ejen memanggil API atau aliran luaran       | ✅ Dikenakan bayaran (5 + mesej)             |
| Ejen menggunakan pencetus autonomi atau grounding | ✅ Dikenakan bayaran                         |

---

## 🧮 Rancang dengan Tepat: Gunakan Penganggar

Sebelum melancarkan ejen anda, gunakan **Copilot Studio Usage Estimator** kami untuk meramalkan penggunaan mesej dalam senario yang realistik:

[👉 Gunakan Copilot Studio Usage Estimator](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Ia membolehkan anda:

- 🔢 Menentukan **bilangan pengguna**
- ⚙️ Memilih **ciri ejen** (grounding, tindakan, aliran, memori)
- 📈 Menganggarkan **jumlah mesej setiap ejen setiap bulan**
- 🧠 Mengoptimumkan reka bentuk dan mengelakkan kejutan pengebilan

!!! tip
    ✅ Gunakan alat ini lebih awal — dan sekali lagi selepas membina — untuk membandingkan penggunaan yang dijangka dengan penggunaan sebenar.

---

## 💼 Senario Contoh

**Persekitaran**: Ejen Meja Bantuan IT dengan grounding + satu aliran Power Automate  
**Sesi**: 5 giliran pengguna setiap sesi  
**Anggapan**: grounding (10 mesej) + tindakan (5 mesej) + 5 respons generatif (10 mesej)  
**Jumlah**: ~25 mesej setiap sesi  
**Skala**: 500 sesi/bulan = ~12,500 mesej (½ pakej mesej)

---

## 🧠 Petua Profesional untuk Kawalan Kos

- Pantau penggunaan melalui Power Platform Admin Center
- Mulakan di persekitaran pembangunan/ujian sebelum dilancarkan secara langsung
- Lumpuhkan tindakan dan penyambung yang tidak digunakan
- Gunakan **lesen Microsoft 365 Copilot** jika boleh untuk penggunaan dalaman
- Gunakan pakej mesej apabila skala menjadi boleh diramal
- Gunakan **Copilot Studio Usage Estimator** untuk meramalkan penggunaan

---

## 🏁 Misi Selesai

Anda kini memahami:

- Bagaimana penggunaan dikira dan dikenakan bayaran
- Bila M365 Copilot meliputi penggunaan — dan bila ia tidak
- Cara meramalkan dan menguruskan penggunaan mesej anda

🎓 Dengan pengetahuan ini, anda bersedia untuk maju dan melancarkan ejen anda **dengan cekap dan bijak**

---

## 📚 Sumber Taktikal

Ketahui lebih lanjut tentang lesen dan pengebilan dalam Copilot Studio

- 📄 [Lesen & Kadar Mesej Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Panduan Lesen Power Platform (Julai 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Pengurusan Mesej & Pemantauan Kapasiti](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analitik" />

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.