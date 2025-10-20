<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T00:29:04+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "ms"
}
-->
# Menyumbang kepada MCS Agent Academy

Terima kasih atas minat anda untuk menyumbang kepada MCS Agent Academy! Panduan ini akan membantu anda menyediakan persekitaran pembangunan dan memahami piawaian dokumentasi kami.

## Piawaian Dokumentasi

Kami mengikuti piawaian dokumentasi Microsoft untuk memastikan kandungan yang konsisten dan berkualiti tinggi. Untuk panduan lengkap tentang cara menulis dokumentasi yang berkesan, sila rujuk:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Panduan lengkap untuk menulis dokumentasi yang mengikuti gaya dan piawaian Microsoft.

Sumber ini merangkumi:

- Menulis kandungan yang jelas dan ringkas
- Menggunakan sintaks markdown yang betul
- Mengikuti terminologi yang konsisten
- Menyusun dokumentasi dengan berkesan
- Amalan terbaik untuk kebolehaksesan

## Linting Markdown

Kami menggunakan markdownlint untuk memastikan format dan kualiti yang konsisten di seluruh dokumentasi kami. Ini membantu mengekalkan kebolehbacaan dan piawaian profesional dalam repositori.

### Memasang markdownlint-cli2

Untuk menjalankan markdownlint secara tempatan dan sepadan dengan aliran kerja GitHub kami, pasang markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Menjalankan markdownlint secara tempatan

Setelah dipasang, anda boleh menjalankan markdownlint pada semua fail markdown dalam repositori:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfigurasi

Konfigurasi markdownlint kami ditakrifkan dalam `.markdownlint.jsonc` di akar repositori. Konfigurasi ini:

- Melumpuhkan pemeriksaan panjang baris (MD013) kerana kami belum menetapkan piawaian
- Membenarkan tajuk yang sama dalam bahagian bersaudara sahaja (MD024) untuk bahagian templat biasa
- Melumpuhkan pengesahan awalan senarai berurutan (MD029) secara global kerana kandungan berindentasi menetapkan semula penomboran
- Membenarkan blok kod digunakan untuk teks (MD046)

### Menambah pengecualian inline untuk peraturan markdownlint

Walaupun konfigurasi global kami menangani kebanyakan senario biasa, anda mungkin menghadapi situasi di mana anda perlu menambah pengecualian inline untuk peraturan markdownlint tertentu dalam fail individu. Berikut adalah contoh cara melakukannya:

#### Pilihan 1: Abaikan untuk baris seterusnya

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Pilihan 2: Abaikan untuk julat tertentu

```markdown
<!-- markdownlint-disable MD029 -->
1. First item
5. Fifth item (skips numbers but won't trigger MD029)
10. Tenth item
<!-- markdownlint-enable MD029 -->

<!-- markdownlint-disable MD013 -->
Multiple very long lines that exceed the character limit
can be placed between disable and enable comments
<!-- markdownlint-enable MD013 -->
```

#### Pilihan 3: Abaikan untuk keseluruhan fail

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Letakkan ini di bahagian atas fail markdown anda untuk melumpuhkan peraturan tertentu untuk keseluruhan dokumen

### Bila perlu menggunakan pengecualian inline

Anda mungkin memerlukan pengecualian untuk pelbagai peraturan markdownlint apabila:

1. **MD029 (Penomboran senarai berurutan)**: Meneruskan senarai bernombor selepas kandungan lain, penomboran sengaja yang tidak bermula dari 1, atau kandungan bersarang yang kompleks
2. **MD013 (Panjang baris)**: Contoh kod, URL, atau kandungan teknikal yang tidak boleh dipecahkan dengan wajar
3. **MD033 (HTML inline)**: Apabila anda memerlukan elemen HTML tertentu untuk format yang tidak dapat dicapai dengan markdown
4. **MD041 (Tajuk baris pertama)**: Fail templat atau dokumen yang sengaja tidak bermula dengan tajuk

### Amalan terbaik

1. **Gunakan pengecualian dengan berhati-hati**: Hanya tambah pengecualian apabila perlu untuk kejelasan dokumentasi
2. **Berikan komen pada pengecualian anda**: Apabila menggunakan pengecualian, pertimbangkan untuk menambah komen ringkas yang menerangkan sebabnya
3. **Utamakan `markdownlint-disable-next-line`**: Ini lebih tepat daripada melumpuhkan untuk keseluruhan bahagian
4. **Jalankan linter sebelum membuat komit**: Sentiasa jalankan `markdownlint-cli2 "**/*.md"` sebelum menghantar perubahan

> **Tip:** Anda boleh dengan cepat menjalankan pemeriksaan markdownlint dan cSpell pada fail markdown anda menggunakan skrip PowerShell `scripts/validate-markdown.ps1` yang disediakan. Skrip ini membantu mengautomasi pemeriksaan format dan ejaan biasa untuk memastikan sumbangan anda memenuhi garis panduan kami.

Anda boleh menjalankannya dari akar repositori menggunakan PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Kesalahan markdownlint biasa dan cara membetulkannya

- **MD036**: Gunakan tajuk yang betul (`## Tajuk`) dan bukannya penekanan (`**Teks Tebal**`)
- **MD007**: Betulkan indentasi senarai tidak berurutan (gunakan 2 ruang, bukan 4)
- **MD022**: Tambah baris kosong sebelum dan selepas tajuk
- **MD032**: Tambah baris kosong sebelum dan selepas senarai
- **MD009**: Buang ruang kosong di hujung baris

### Aliran kerja GitHub

Repositori kami termasuk aliran kerja GitHub yang secara automatik menjalankan markdownlint pada semua permintaan tarik. Aliran kerja ini:

- Menggunakan alat markdownlint-cli2 yang sama yang boleh anda jalankan secara tempatan
- Mengecualikan fail `SUPPORT.md`, `SECURITY.md`, dan `CODE_OF_CONDUCT.md`
- Menggunakan konfigurasi `.markdownlint.jsonc` kami
- Melaporkan isu sebagai amaran, membolehkan PR digabungkan sambil menonjolkan peluang format

### Sambungan markdownlint VS Code

Jika anda menggunakan VS Code, kami mengesyorkan memasang [sambungan markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) untuk linting markdown secara langsung:

1. **Pasang sambungan** - Cari "markdownlint" oleh David Anson di pasaran sambungan VS Code
2. **Konfigurasi automatik** - Sambungan akan secara automatik menggunakan fail konfigurasi `.markdownlint.jsonc` anda
3. **Maklum balas masa nyata** - Lihat garis bawah bergelombang pada isu format markdown semasa anda menaip
4. **Pembaikan cepat** - Gunakan `Ctrl+.` (Cmd+. pada Mac) untuk melihat pembaikan automatik yang tersedia untuk banyak isu
5. **Panel Masalah** - Lihat semua isu markdown dalam panel Masalah VS Code

Ini memberikan maklum balas segera semasa menulis, menjadikannya lebih mudah untuk mengikuti piawaian markdown sebelum membuat komit perubahan anda.

## Pemeriksaan Ejaan

Kami menggunakan cSpell (Code Spell Checker) untuk mengekalkan ejaan yang konsisten di seluruh dokumentasi kami. Ini membantu memastikan kualiti profesional dan mengurangkan kesalahan ejaan dalam repositori.

### Memasang cSpell

Untuk menjalankan cSpell secara tempatan, pasang secara global:

```powershell
npm install -g cspell
```

### Menjalankan cSpell secara tempatan

Setelah dipasang, anda boleh menjalankan cSpell untuk memeriksa ejaan dalam dokumentasi:

```powershell
# Check all markdown files in the docs folder
cspell "docs/**/*.md"

# Check all markdown files in the repository
cspell "**/*.md"

# Check a specific file
cspell "docs/recruit/README.md"

# Show suggestions for misspelled words
cspell --show-suggestions "docs/**/*.md"

# Check with minimal output (cleaner display)
cspell --no-progress --no-summary "docs/**/*.md"
```

### Konfigurasi

Konfigurasi cSpell kami ditakrifkan dalam `cspell.json` di akar repositori. Konfigurasi ini:

- Termasuk perkataan khusus domain kami (Copilot, SharePoint, Dataverse, dll.)
- Mengabaikan jenis fail biasa yang tidak memerlukan pemeriksaan ejaan (imej, fail binaan)
- Menetapkan bahasa kepada Bahasa Inggeris untuk pemeriksaan ejaan

### Menambah perkataan baru

Jika anda menemui perkataan yang ditandai oleh cSpell sebagai salah ejaan tetapi sebenarnya betul (seperti nama produk, istilah teknikal, atau nama khas), anda boleh menambahnya ke array `words` dalam `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Sambungan cSpell VS Code

Jika anda menggunakan VS Code dengan [sambungan Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), anda boleh dengan cepat menambah perkataan ke konfigurasi anda:

1. **Lihat kesalahan ejaan** - Cari garis bawah bergelombang pada perkataan yang salah ejaan
1. **Gunakan Pembaikan Cepat** - Klik kanan pada perkataan yang digaris bawah atau gunakan `Ctrl+.` (Cmd+. pada Mac)
1. **Tambah ke konfigurasi** - Pilih "Spelling -> Add to cSpell configuration" dari menu konteks
1. **Pilih lokasi** - Sambungan akan secara automatik menambah perkataan ke fail `cspell.json` anda

Ini jauh lebih cepat daripada mengedit fail konfigurasi secara manual untuk perkataan individu.

### Amalan terbaik untuk ejaan

1. **Jalankan pemeriksaan ejaan sebelum membuat komit**: Sentiasa jalankan `cspell "docs/**/*.md"` sebelum menghantar perubahan
1. **Betulkan kesalahan ejaan daripada mengabaikannya**: Jika boleh, betulkan kesalahan ejaan sebenar daripada menambahnya ke senarai perkataan
1. **Gunakan terminologi yang konsisten**: Kekalkan nama produk dan istilah teknikal yang telah ditetapkan

## Pratonton Dokumentasi Tempatan dengan MkDocs

Kami menggunakan MkDocs dengan tema Material untuk menghasilkan laman dokumentasi kami. Anda boleh menjalankannya secara tempatan untuk melihat pratonton perubahan anda sebelum menghantar permintaan tarik.

📖 **Ketahui lebih lanjut**: [Dokumentasi MkDocs](https://www.mkdocs.org/) | [Material untuk MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Menyediakan Persekitaran Python dalam VS Code

Kami mengesyorkan menggunakan persekitaran maya untuk mengasingkan kebergantungan bagi projek ini. VS Code menjadikan proses ini lancar dan akan menguruskan pemasangan Python jika diperlukan.

> **GitHub Codespaces**: Arahan ini berfungsi dengan sempurna dalam GitHub Codespaces, yang dilengkapi dengan Python yang telah dipasang dan persekitaran VS Code yang sedia digunakan.

📖 **Ketahui lebih lanjut**: [Python dalam VS Code](https://code.visualstudio.com/docs/languages/python) | [Persekitaran Python dalam VS Code](https://code.visualstudio.com/docs/python/environments)

#### Prasyarat

**Pasang Sambungan Python**: Pasang [sambungan Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) oleh Microsoft dari pasaran VS Code jika anda belum melakukannya.

#### Persediaan dalam VS Code

1. **Buat persekitaran maya**:
   - Buka Command Palette (`Ctrl+Shift+P` pada Windows/Linux, `Cmd+Shift+P` pada Mac)
   - Taip "Python: Create Environment" dan pilih
   - Pilih "Venv" (persekitaran maya)
   - Jika tiada interpreter Python tersedia, VS Code akan membimbing anda melalui pemasangan Python
   - Pilih interpreter Python anda (Python 3.8+)
   - VS Code akan membuat folder `.venv` dan mengaktifkannya secara automatik

2. **Sahkan persediaan**:
   - Buka terminal bersepadu baru (`` Ctrl+Shift+` `` pada Windows/Linux, `` Cmd+Shift+` `` pada Mac, atau `View > Terminal`)
   - Anda sepatutnya melihat `(.venv)` dalam prompt terminal
   - Jalankan: `python --version` untuk mengesahkan

> **Nota**: Membuka terminal baru memastikan persekitaran Python diaktifkan dengan betul. Jika anda lebih suka menggunakan persekitaran Python yang sedia ada daripada membuat persekitaran maya baru, anda boleh menggunakan "Python: Select Interpreter" dari Command Palette dan memilih persekitaran pilihan anda.

### Memasang MkDocs dalam VS Code

Dengan persekitaran Python anda disediakan dalam VS Code, pasang MkDocs dan tema Material:

1. **Buka terminal bersepadu VS Code** (`Ctrl+`` ` atau `View > Terminal`)
2. **Pastikan persekitaran maya anda aktif** (anda sepatutnya melihat `(.venv)` dalam prompt)
3. **Pasang pakej**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Menjalankan MkDocs dalam VS Code

Untuk memulakan pelayan pembangunan tempatan dengan hot reload:

1. **Dalam terminal bersepadu VS Code**, jalankan:

   ```bash
   mkdocs serve
   ```

2. **Laman akan tersedia di**: `http://127.0.0.1:8000/agent-academy/`

### Pratonton dalam Simple Browser VS Code

Untuk pengalaman pembangunan terbaik tanpa meninggalkan VS Code:

1. **Mulakan pelayan MkDocs** dalam terminal bersepadu (seperti yang ditunjukkan di atas)
2. **Buka Simple Browser**:
   - **Kaedah 1**: Buka Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Taip "Simple Browser: Show" dan pilih
   - Masukkan URL: `http://127.0.0.1:8000/agent-academy/`

   - **Kaedah 2**: Klik kanan pada URL dalam output terminal dan pilih "Follow Link"

   - **Kaedah 3**: Gunakan `Ctrl+Click` (Windows) atau `Cmd+Click` (Mac) pada URL dalam terminal

3. **Posisikan pelayar**: Anda boleh meletakkan Simple Browser di sebelah editor anda untuk penyuntingan dan pratonton secara serentak

### Kelebihan Ruang Kerja VS Code

Bekerja sepenuhnya dalam VS Code memberikan kelebihan berikut:

- **Terminal bersepadu**: Tidak perlu beralih antara aplikasi
- **Pratonton sebelah-menyebelah**: Edit markdown dan lihat perubahan secara serentak  
- **Navigasi pautan**: Klik URL terminal secara langsung untuk membuka Simple Browser
- **Integrasi sambungan**: Sambungan Python, markdownlint, dan cSpell berfungsi bersama
- **Integrasi Git**: Panel kawalan sumber terbina dalam untuk komit dan permintaan tarik

### Ciri hot reload

Apabila menjalankan `mkdocs serve`, anda mendapat:

- **Auto-refresh**: Perubahan pada mana-mana fail `.md` dalam folder `docs/` secara automatik memuat semula pelayar
- **Kemas kini konfigurasi**: Perubahan pada `mkdocs.yml` juga mencetuskan pembinaan semula
- **Pratonton masa nyata**: Lihat format, pautan, dan perubahan kandungan anda dengan segera
- **Pengesahan pautan**: MkDocs akan memberi amaran tentang pautan dalaman yang rosak

### Perintah MkDocs berguna dalam VS Code

Jalankan perintah ini dalam terminal bersepadu VS Code:

```bash
# Start development server
mkdocs serve

# Build static site (for production)
mkdocs build

# Serve with strict mode (treats warnings as errors)
mkdocs serve --strict

# Show version
mkdocs --version
```

> **Tip:** Untuk melihat dokumentasi secara tempatan dengan semua kebergantungan diperiksa, gunakan skrip PowerShell `scripts/serve-docs.ps1`.

### Kelebihan pratonton tempatan

- **Maklum balas segera**: Lihat bagaimana markdown anda dirender dengan tema Material
- **Pengesahan pautan**: Tangkap pautan yang rosak sebelum ia disiarkan
- **Ujian navigasi**: Sahkan kandungan anda muncul di bahagian yang betul
- **Pratonton mudah alih**: Uji bagaimana kandungan anda kelihatan pada pelbagai saiz skrin
- **Pemeriksaan prestasi**: Pastikan imej dan aset dimuatkan dengan betul

## Ada Soalan?

Jika anda mempunyai soalan tentang format markdown atau garis panduan sumbangan, sila:

1. Semak panduan sumbangan ini
1. Periksa isu sedia ada untuk soalan serupa
1. Buka isu baru

Selamat menyumbang! 🚀

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.