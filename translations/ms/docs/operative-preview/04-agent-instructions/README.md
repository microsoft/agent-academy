<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-20T01:10:51+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "ms"
}
-->
# 🕵️‍♂️ Misi 04: Menulis Arahan untuk Ejen

--8<-- "disclaimer.md"

## 🕵️‍♂️ NAMA KOD: `OPERASI ARAHAN RAHSIA`

> **⏱️ Tempoh Operasi:** `~45 minit`

## 🎯 Ringkasan Misi

Ejen, tugasan anda seterusnya adalah **Operasi Arahan Rahsia** - menguasai seni komunikasi dan kawalan ejen melalui arahan dan penerangan yang tepat.

Misi anda, jika anda memilih untuk menerimanya, adalah mempelajari kemahiran kritikal dalam menulis arahan yang jelas dan boleh dilaksanakan untuk membimbing ejen anda membuat keputusan yang bijak, menggunakan alat dan sumber pengetahuan yang betul, serta bekerjasama dengan ejen lain secara lancar. Anda juga akan menguasai seni menulis penerangan berkualiti tinggi yang membantu ejen memahami sumber mereka dan memberikan respons yang tepat kepada pertanyaan pengguna.

Anggap ini sebagai latihan lanjutan dalam psikologi ejen dan pengubahsuaian tingkah laku. Sama seperti seorang operatif lapangan memerlukan parameter misi yang jelas untuk berjaya, ejen AI anda memerlukan arahan yang direka dengan mahir untuk bertindak dengan jelas, tepat, dan memberikan maklumat berharga dalam situasi dunia sebenar.

---

## 🔎 Objektif

Dengan menyelesaikan misi ini, anda akan:

- **Penguasaan Arahan**: Memahami seni dan sains menulis arahan ejen dalam Copilot Studio
- **Panduan Strategik**: Belajar bagaimana mengarahkan ejen untuk menggunakan alat, sumber pengetahuan, dan bekerjasama dengan ejen lain
- **Kejelasan Operasi**: Memastikan ejen anda bertindak dengan tepat, telus, dan cekap

---

## 📝 Menulis Arahan untuk Ejen

Menulis arahan ejen yang berkesan adalah kunci kepada tingkah laku ejen yang berjaya. Arahan digunakan oleh ejen untuk:

- Memutuskan alat, topik, atau sumber pengetahuan mana yang perlu digunakan untuk pertanyaan pengguna atau pencetus autonomi
- Mengisi input untuk sebarang alat berdasarkan konteks yang tersedia
- Menjana respons kepada pengguna akhir

### Bagaimana Arahan Berfungsi

Arahan mesti berdasarkan alat, topik, dan sumber pengetahuan yang dikonfigurasi untuk ejen anda. Ejen tidak boleh bertindak berdasarkan arahan untuk sumber yang tidak dimilikinya. Sebagai contoh, jika anda mengarahkan ejen anda untuk mencari FAQ laman web, anda mesti menambah FAQ tersebut sebagai sumber pengetahuan.

Anda boleh merujuk alat tertentu, topik, pembolehubah, atau ekspresi Power Fx menggunakan `/` dalam arahan anda. Ini membantu ejen mengetahui dengan tepat apa yang perlu digunakan dan bila.

### Apa yang Perlu Disertakan dalam Arahan

- Tambahkan arahan untuk kes di mana anda ingin membimbing pilihan ejen, terutamanya apabila terdapat kemungkinan kekaburan.
- Gunakan arahan untuk menetapkan panduan, seperti mengehadkan topik atau menentukan format respons.
- Berikan petunjuk untuk mengisi input alat, contohnya, "Gunakan alamat e-mel dari medan kenalan prospek semasa membantu pengguna merangka e-mel."
- Tentukan bagaimana respons harus diformat, contohnya, "Sentiasa berikan respons tentang status pesanan dalam format jadual."
- Gunakan kekangan untuk mengehadkan tindakan ejen, contohnya, "Hanya balas permintaan tentang faedah pekerja."

### Contoh Praktikal

- "Gunakan dokumen FAQ hanya jika soalan tidak berkaitan dengan Waktu, Janji Temu, atau Pengebilan."
- "Hanya gunakan topik penciptaan tiket untuk mencipta tiket; untuk permintaan lain berkaitan dengan membaiki masalah, gunakan topik penyelesaian masalah."
- "Sentiasa berikan respons tentang status pesanan dalam format jadual."

### Ujian dan Penambahbaikan

- Selepas mengedit arahan, gunakan panel ujian untuk mengesahkan tingkah laku ejen.
- Kemas kini dan terbitkan perubahan mengikut keperluan.

### Panduan Lanjutan

- Nomborkan atau senaraikan arahan anda dan nyatakan bahawa ia mesti diikuti mengikut urutan.
- Gunakan format markdown untuk kebolehbacaan dan membantu AI generatif memproses arahan anda.
- Jika anda mahu ejen anda menjadi sangat spesifik, pertimbangkan untuk mencipta topik untuk kes penggunaan tersebut.
- Gunakan nama tepat untuk alat dan topik dalam arahan untuk mengelakkan kekeliruan.

### Keselamatan dan Moderasi

- Hadkan alat yang harus digunakan oleh ejen semasa merujuk sumber pengetahuan.
- Hadkan parameter yang harus digunakan untuk alat (contohnya, hanya e-mel kepada senarai individu tertentu).
- Gunakan arahan untuk melindungi daripada tingkah laku yang tidak diingini atau isu penapisan kandungan.

---

## ✍️ Menulis Penerangan untuk Alat, Topik, dan Ejen

Penerangan berkualiti tinggi adalah penting untuk orkestrasi generatif. Ejen anda menggunakan penerangan ini untuk memilih alat, topik, dan ejen yang sesuai untuk menjawab pertanyaan dan pencetus pengguna. Ikuti amalan terbaik ini:

- **Gunakan Bahasa Mudah dan Langsung**: Elakkan jargon, slang, atau istilah teknikal yang berlebihan. Tulis dalam suara aktif dan masa kini.
- **Spesifik dan Relevan**: Sertakan kata kunci berkaitan dengan fungsi dan niat pengguna. Pastikan penerangan membezakan alat atau topik yang serupa untuk mengelakkan kekeliruan.
- **Pendek dan Informatif**: Hadkan penerangan kepada satu atau dua ayat. Ringkaskan apa yang dilakukan oleh alat, topik, atau ejen dan bagaimana ia memberi manfaat kepada pengguna.
- **Gunakan Nama Unik dan Deskriptif**: Elakkan nama generik. Contohnya, gunakan "Ramalan Cuaca untuk Esok" dan bukannya hanya "Cuaca".
- **Senaraikan Tindakan atau Pertimbangan**: Gunakan senarai berbutir atau bernombor untuk kejelasan semasa menerangkan ciri atau langkah berganda.
- **Uji untuk Pertindihan**: Jika beberapa topik mempunyai penerangan yang serupa, ejen anda mungkin memanggil semuanya. Uji dan semak semula untuk mengelakkan pertindihan.

!!! example "Contoh Penerangan Baik dan Buruk"
    **Baik:** Topik ini menyediakan maklumat cuaca untuk mana-mana lokasi di dunia untuk hari berikutnya. Ia menyediakan suhu. Ia tidak mendapatkan cuaca semasa untuk hari ini.  
    **Buruk:** Alat ini boleh menjawab soalan. *(Terlalu kabur)*

---

## 🛠️ Amalan Terbaik untuk Arahan dan Penerangan

Untuk menjadikan arahan dan penerangan anda benar-benar berkesan, ingat prinsip ini:

- Gunakan suara aktif dan masa kini (contohnya, "Alat ini menyediakan maklumat cuaca").
- Elakkan jargon, slang, atau istilah teknikal yang tidak perlu kecuali diperlukan untuk audiens.
- Gunakan senarai berbutir atau bernombor untuk memisahkan tindakan, ciri, atau pertimbangan.
- Sertakan kata kunci yang sepadan dengan niat pengguna dan fungsi alat atau topik.
- Pastikan nama dan penerangan yang berbeza untuk sumber yang serupa untuk mengelakkan kekeliruan dan pertindihan.

---

## 🗂️ Struktur Contoh Arahan

Semasa menulis arahan, pertimbangkan struktur berikut untuk kejelasan dan kelengkapan:

1. **Gambaran Keseluruhan**: Terangkan secara ringkas misi dan peranan ejen  
1. **Langkah Proses**: Senaraikan langkah utama yang harus diikuti oleh ejen  
1. **Titik Kerjasama**: Nyatakan bila perlu memanggil ejen lain atau menggunakan alat tertentu  
1. **Keselamatan dan Moderasi**: Sertakan sebarang keperluan pematuhan atau keselamatan  
1. **Gelung Maklum Balas**: Nyatakan bagaimana ejen harus mengumpul maklum balas atau meningkatkan isu  

---

## 🧪 Makmal: Menulis Arahan untuk Ejen

*Kandungan makmal akan datang...*

---

## 🎉 Misi Selesai

Misi 04 telah selesai! Anda kini mempunyai:

✅ **Penguasaan Arahan**: Belajar cara menulis arahan ejen yang jelas dan boleh dilaksanakan  
✅ **Panduan Strategik**: Mengarahkan ejen untuk menggunakan alat dan bekerjasama dengan berkesan  
✅ **Kejelasan Operasi**: Memastikan ejen bertindak dengan tepat dan telus  

Seterusnya adalah [Misi 05](../05-agent-responses/README.md): Menyesuaikan respons ejen untuk impak maksimum.

---

## 📚 Sumber Taktikal

📖 [Microsoft Copilot Studio - Menulis Arahan](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Panduan untuk Mod Generatif](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.