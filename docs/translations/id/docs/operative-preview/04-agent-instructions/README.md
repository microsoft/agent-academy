<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-17T17:18:52+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "id"
}
-->
# 🕵️‍♂️ Misi 04: Menulis Instruksi Agen

--8<-- "disclaimer.md"

## 🕵️‍♂️ NAMA KODE: `OPERASI ARAHAN RAHASIA`

> **⏱️ Waktu Operasi:** `~45 menit`

## 🎯 Ringkasan Misi

Agen, tugas Anda berikutnya adalah **Operasi Arahan Rahasia** - menguasai seni komunikasi dan pengendalian agen melalui instruksi dan deskripsi yang tepat.

Misi Anda, jika Anda memilih untuk menerimanya, adalah mempelajari keterampilan penting dalam menulis instruksi yang jelas dan dapat ditindaklanjuti untuk membimbing agen Anda membuat keputusan cerdas, menggunakan alat dan sumber pengetahuan yang tepat, serta berkolaborasi dengan agen lain secara mulus. Anda juga akan menguasai seni menulis deskripsi berkualitas tinggi yang membantu agen memahami sumber daya mereka dan merespons dengan presisi terhadap pertanyaan pengguna.

Anggap ini sebagai pelatihan lanjutan dalam psikologi agen dan modifikasi perilaku. Sama seperti seorang operatif lapangan membutuhkan parameter misi yang jelas untuk berhasil, agen AI Anda memerlukan instruksi yang dirancang dengan ahli agar dapat bertindak dengan kejelasan, presisi, dan memberikan intelijen yang berharga dalam skenario dunia nyata.

---

## 🔎 Tujuan

Dengan menyelesaikan misi ini, Anda akan:

- **Penguasaan Instruksi**: Memahami seni dan ilmu menulis instruksi agen di Copilot Studio  
- **Panduan Strategis**: Belajar bagaimana mengarahkan agen untuk menggunakan alat, sumber pengetahuan, dan berkolaborasi dengan agen lain  
- **Kejelasan Operasional**: Memastikan agen Anda bertindak dengan presisi, transparansi, dan efisiensi  

---

## 📝 Menulis Instruksi Agen

Menulis instruksi agen yang efektif adalah kunci keberhasilan perilaku agen. Instruksi digunakan oleh agen untuk:

- Memutuskan alat, topik, atau sumber pengetahuan mana yang akan digunakan untuk pertanyaan pengguna atau pemicu otomatis  
- Mengisi input untuk alat berdasarkan konteks yang tersedia  
- Menghasilkan respons untuk pengguna akhir  

### Cara Kerja Instruksi

Instruksi harus didasarkan pada alat, topik, dan sumber pengetahuan yang dikonfigurasi untuk agen Anda. Agen tidak dapat bertindak berdasarkan instruksi untuk sumber daya yang tidak mereka miliki. Misalnya, jika Anda menginstruksikan agen Anda untuk mencari FAQ situs web, Anda harus menambahkan FAQ tersebut sebagai sumber pengetahuan.

Anda dapat merujuk alat, topik, variabel, atau ekspresi Power Fx tertentu menggunakan `/` dalam instruksi Anda. Ini membantu agen mengetahui apa yang harus digunakan dan kapan.

### Apa yang Harus Disertakan dalam Instruksi

- Tambahkan instruksi untuk kasus di mana Anda ingin membimbing pilihan agen, terutama ketika ambiguitas mungkin terjadi.  
- Gunakan instruksi untuk menetapkan batasan, seperti membatasi topik atau menentukan format respons.  
- Berikan petunjuk untuk mengisi input alat, misalnya, "Gunakan alamat email dari bidang kontak prospek saat membantu pengguna menyusun email."  
- Tentukan bagaimana respons harus diformat, misalnya, "Selalu berikan respons tentang status pesanan dalam format tabel."  
- Gunakan batasan untuk membatasi tindakan agen, misalnya, "Hanya tanggapi permintaan tentang manfaat karyawan."  

### Contoh Praktis

- "Gunakan dokumen FAQ hanya jika pertanyaan tidak relevan dengan Jam Kerja, Janji Temu, atau Penagihan."  
- "Hanya gunakan topik pembuatan tiket untuk membuat tiket; untuk permintaan lain terkait perbaikan masalah, gunakan topik pemecahan masalah."  
- "Selalu berikan respons tentang status pesanan dalam format tabel."  

### Pengujian dan Penyempurnaan

- Setelah mengedit instruksi, gunakan panel uji untuk memvalidasi perilaku agen.  
- Perbarui dan publikasikan perubahan sesuai kebutuhan.  

### Panduan Lanjutan

- Nomori atau buat daftar instruksi Anda dan tentukan bahwa instruksi tersebut harus diikuti secara berurutan.  
- Gunakan format markdown untuk keterbacaan dan membantu AI generatif memproses instruksi Anda.  
- Jika Anda ingin agen Anda sangat spesifik, pertimbangkan untuk membuat topik untuk kasus penggunaan tersebut.  
- Gunakan nama yang tepat untuk alat dan topik dalam instruksi untuk menghindari kebingungan.  

### Keamanan dan Moderasi

- Batasi alat apa yang harus digunakan agen saat merujuk sumber pengetahuan.  
- Batasi parameter apa yang harus digunakan untuk alat (misalnya, hanya mengirim email ke daftar individu tertentu).  
- Gunakan instruksi untuk melindungi dari perilaku yang tidak diinginkan atau masalah penyaringan konten.  

---

## ✍️ Menulis Deskripsi untuk Alat, Topik, dan Agen

Deskripsi berkualitas tinggi sangat penting untuk orkestrasi generatif. Agen Anda menggunakan deskripsi ini untuk memilih alat, topik, dan agen yang tepat untuk merespons pertanyaan dan pemicu pengguna. Ikuti praktik terbaik berikut:

- **Gunakan Bahasa Sederhana dan Langsung**: Hindari jargon, slang, atau istilah teknis yang berlebihan. Tulis dalam suara aktif dan waktu sekarang.  
- **Spesifik dan Relevan**: Sertakan kata kunci terkait fungsi dan tujuan pengguna. Pastikan deskripsi dengan jelas membedakan alat atau topik serupa untuk menghindari ambiguitas.  
- **Singkat dan Informatif**: Batasi deskripsi hingga satu atau dua kalimat. Ringkas apa yang dilakukan alat, topik, atau agen dan bagaimana manfaatnya bagi pengguna.  
- **Gunakan Nama yang Unik dan Deskriptif**: Hindari nama generik. Misalnya, gunakan "Prakiraan Cuaca untuk Besok" daripada hanya "Cuaca".  
- **Daftar Tindakan atau Pertimbangan**: Gunakan daftar berpoin atau bernomor untuk kejelasan saat menjelaskan beberapa fitur atau langkah.  
- **Uji untuk Tumpang Tindih**: Jika beberapa topik memiliki deskripsi serupa, agen Anda mungkin memanggil semuanya. Uji dan revisi untuk mencegah tumpang tindih.  

!!! example "Contoh Deskripsi Baik dan Buruk"
    **Baik:** Topik ini menyediakan informasi cuaca untuk lokasi mana pun di dunia untuk hari berikutnya. Ini memberikan suhu. Tidak mendapatkan cuaca saat ini untuk hari ini.  
    **Buruk:** Alat ini dapat menjawab pertanyaan. *(Terlalu samar)*  

---

## 🛠️ Praktik Terbaik untuk Instruksi dan Deskripsi

Untuk membuat instruksi dan deskripsi Anda benar-benar efektif, ingat prinsip-prinsip berikut:

- Gunakan suara aktif dan waktu sekarang (misalnya, "Alat ini menyediakan informasi cuaca").  
- Hindari jargon, slang, atau istilah teknis yang tidak perlu kecuali diperlukan untuk audiens.  
- Gunakan daftar berpoin atau bernomor untuk memisahkan tindakan, fitur, atau pertimbangan.  
- Sertakan kata kunci yang sesuai dengan tujuan pengguna dan fungsi alat atau topik.  
- Pastikan nama dan deskripsi yang berbeda untuk sumber daya serupa untuk menghindari kebingungan dan tumpang tindih.  

---

## 🗂️ Struktur Contoh Instruksi

Saat menulis instruksi, pertimbangkan struktur berikut untuk kejelasan dan kelengkapan:

1. **Gambaran Umum**: Jelaskan secara singkat misi dan peran agen  
1. **Langkah Proses**: Daftar langkah utama yang harus diikuti agen  
1. **Poin Kolaborasi**: Tunjukkan kapan harus memanggil agen lain atau menggunakan alat tertentu  
1. **Keamanan dan Moderasi**: Sertakan persyaratan kepatuhan atau keamanan  
1. **Umpan Balik**: Tentukan bagaimana agen harus mengumpulkan umpan balik atau meningkatkan masalah  

---

## 🧪 Lab: Menulis Instruksi Agen

*Konten lab segera hadir...*

---

## 🎉 Misi Selesai

Misi 04 selesai! Anda sekarang memiliki:

✅ **Penguasaan Instruksi**: Belajar cara menulis instruksi agen yang jelas dan dapat ditindaklanjuti  
✅ **Panduan Strategis**: Mengarahkan agen untuk menggunakan alat dan berkolaborasi secara efektif  
✅ **Kejelasan Operasional**: Memastikan agen bertindak dengan presisi dan transparansi  

Selanjutnya adalah [Misi 05](../05-agent-responses/README.md): Menyesuaikan respons agen untuk dampak maksimal.

---

## 📚 Sumber Daya Taktis

📖 [Microsoft Copilot Studio - Menulis Instruksi](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Panduan untuk Mode Generatif](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.