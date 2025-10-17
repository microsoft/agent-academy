<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-17T17:07:05+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "id"
}
-->
# Berkontribusi ke MCS Agent Academy

Terima kasih atas minat Anda untuk berkontribusi ke MCS Agent Academy! Panduan ini akan membantu Anda menyiapkan lingkungan pengembangan dan memahami standar dokumentasi kami.

## Standar Dokumentasi

Kami mengikuti standar dokumentasi Microsoft untuk memastikan konten yang konsisten dan berkualitas tinggi. Untuk panduan lengkap tentang cara menulis dokumentasi yang efektif, silakan merujuk ke:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Panduan lengkap untuk menulis dokumentasi sesuai gaya dan standar Microsoft.

Sumber ini mencakup:

- Menulis konten yang jelas dan ringkas
- Menggunakan sintaks markdown yang benar
- Mengikuti terminologi yang konsisten
- Menyusun dokumentasi secara efektif
- Praktik terbaik untuk aksesibilitas

## Linting Markdown

Kami menggunakan markdownlint untuk memastikan format dan kualitas yang konsisten di seluruh dokumentasi kami. Ini membantu menjaga keterbacaan dan standar profesional di seluruh repositori.

### Menginstal markdownlint-cli2

Untuk menjalankan markdownlint secara lokal dan mencocokkan alur kerja GitHub kami, instal markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Menjalankan markdownlint secara lokal

Setelah diinstal, Anda dapat menjalankan markdownlint pada semua file markdown di repositori:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Konfigurasi

Konfigurasi markdownlint kami didefinisikan dalam `.markdownlint.jsonc` di root repositori. Konfigurasi ini:

- Menonaktifkan pemeriksaan panjang baris (MD013) karena kami belum mendefinisikan standar
- Mengizinkan judul duplikat hanya pada saudara (MD024) untuk bagian template umum
- Menonaktifkan validasi prefix daftar berurutan (MD029) secara global karena konten yang diindentasi mereset penomoran
- Mengizinkan blok kode digunakan untuk teks (MD046)

### Menambahkan pengecualian inline untuk aturan markdownlint

Meskipun konfigurasi global kami menangani sebagian besar skenario umum, Anda mungkin menemukan situasi di mana Anda perlu menambahkan pengecualian inline untuk aturan markdownlint tertentu dalam file individual. Berikut adalah contoh cara melakukannya:

#### Opsi 1: Abaikan untuk baris berikutnya

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Opsi 2: Abaikan untuk rentang tertentu

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

#### Opsi 3: Abaikan untuk seluruh file

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Tempatkan ini di bagian paling atas file markdown Anda untuk menonaktifkan aturan tertentu untuk seluruh dokumen

### Kapan menggunakan pengecualian inline

Anda mungkin memerlukan pengecualian untuk berbagai aturan markdownlint ketika:

1. **MD029 (Penomoran daftar berurutan)**: Melanjutkan daftar bernomor setelah konten lain, penomoran yang sengaja tidak dimulai dari 1, atau konten bersarang yang kompleks
2. **MD013 (Panjang baris)**: Contoh kode, URL, atau konten teknis yang tidak dapat dibagi secara wajar di beberapa baris
3. **MD033 (HTML inline)**: Ketika Anda memerlukan elemen HTML tertentu untuk format yang tidak dapat dicapai dengan markdown
4. **MD041 (Judul baris pertama)**: File template atau dokumen yang sengaja tidak dimulai dengan judul

### Praktik terbaik

1. **Gunakan pengecualian dengan hemat**: Tambahkan pengecualian hanya jika diperlukan untuk kejelasan dokumentasi
2. **Komentari pengecualian Anda**: Saat menggunakan pengecualian, pertimbangkan untuk menambahkan komentar singkat yang menjelaskan alasannya
3. **Lebih suka `markdownlint-disable-next-line`**: Ini lebih tepat daripada menonaktifkan untuk seluruh bagian
4. **Jalankan linter sebelum melakukan commit**: Selalu jalankan `markdownlint-cli2 "**/*.md"` sebelum mengirimkan perubahan

> **Tip:** Anda dapat dengan cepat menjalankan pemeriksaan markdownlint dan cSpell pada file markdown Anda menggunakan skrip PowerShell `scripts/validate-markdown.ps1` yang disediakan. Skrip ini membantu mengotomatisasi pemeriksaan format dan ejaan umum untuk memastikan kontribusi Anda sesuai dengan panduan kami.

Anda dapat menjalankannya dari root repositori menggunakan PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Kesalahan markdownlint umum dan perbaikannya

- **MD036**: Gunakan judul yang benar (`## Judul`) daripada penekanan (`**Teks Tebal**`)
- **MD007**: Perbaiki indentasi daftar tidak berurutan (gunakan 2 spasi, bukan 4)
- **MD022**: Tambahkan baris kosong sebelum dan sesudah judul
- **MD032**: Tambahkan baris kosong sebelum dan sesudah daftar
- **MD009**: Hapus spasi yang tertinggal di akhir baris

### Alur kerja GitHub

Repositori kami mencakup alur kerja GitHub yang secara otomatis menjalankan markdownlint pada semua pull request. Alur kerja ini:

- Menggunakan alat markdownlint-cli2 yang sama yang dapat Anda jalankan secara lokal
- Mengecualikan file `SUPPORT.md`, `SECURITY.md`, dan `CODE_OF_CONDUCT.md`
- Menggunakan konfigurasi `.markdownlint.jsonc` kami
- Melaporkan masalah sebagai peringatan, memungkinkan PR untuk digabungkan sambil menyoroti peluang format

### Ekstensi markdownlint untuk VS Code

Jika Anda menggunakan VS Code, kami merekomendasikan untuk menginstal [ekstensi markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) untuk linting markdown secara real-time:

1. **Instal ekstensi** - Cari "markdownlint" oleh David Anson di marketplace ekstensi VS Code
2. **Konfigurasi otomatis** - Ekstensi akan secara otomatis menggunakan file konfigurasi `.markdownlint.jsonc` Anda
3. **Umpan balik real-time** - Lihat garis bawah bergelombang pada masalah format markdown saat Anda mengetik
4. **Perbaikan cepat** - Gunakan `Ctrl+.` (Cmd+. di Mac) untuk melihat perbaikan otomatis yang tersedia untuk banyak masalah
5. **Panel Masalah** - Lihat semua masalah markdown di panel Masalah VS Code

Ini memberikan umpan balik langsung saat menulis, membuatnya lebih mudah untuk mengikuti standar markdown sebelum melakukan perubahan.

## Pemeriksaan Ejaan

Kami menggunakan cSpell (Code Spell Checker) untuk menjaga konsistensi ejaan di seluruh dokumentasi kami. Ini membantu memastikan kualitas profesional dan mengurangi kesalahan ketik di seluruh repositori.

### Menginstal cSpell

Untuk menjalankan cSpell secara lokal, instal secara global:

```powershell
npm install -g cspell
```

### Menjalankan cSpell secara lokal

Setelah diinstal, Anda dapat menjalankan cSpell untuk memeriksa ejaan dalam dokumentasi:

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

Konfigurasi cSpell kami didefinisikan dalam `cspell.json` di root repositori. Konfigurasi ini:

- Termasuk kata-kata khusus yang spesifik untuk domain kami (Copilot, SharePoint, Dataverse, dll.)
- Mengabaikan jenis file umum yang tidak perlu diperiksa ejaannya (gambar, file build)
- Mengatur bahasa ke Inggris untuk pemeriksaan ejaan

### Menambahkan kata baru

Jika Anda menemukan kata yang ditandai cSpell sebagai salah eja tetapi sebenarnya benar (seperti nama produk, istilah teknis, atau nama diri), Anda dapat menambahkannya ke array `words` dalam `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Ekstensi cSpell untuk VS Code

Jika Anda menggunakan VS Code dengan [ekstensi Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), Anda dapat dengan cepat menambahkan kata ke konfigurasi Anda:

1. **Lihat kesalahan ejaan** - Cari garis bawah bergelombang pada kata yang salah eja
1. **Gunakan Perbaikan Cepat** - Klik kanan pada kata yang digarisbawahi atau gunakan `Ctrl+.` (Cmd+. di Mac)
1. **Tambahkan ke konfigurasi** - Pilih "Spelling -> Add to cSpell configuration" dari menu konteks
1. **Pilih lokasi** - Ekstensi akan secara otomatis menambahkan kata ke file `cspell.json` Anda

Ini jauh lebih cepat daripada mengedit file konfigurasi secara manual untuk kata-kata individual.

### Praktik terbaik untuk ejaan

1. **Jalankan pemeriksaan ejaan sebelum melakukan commit**: Selalu jalankan `cspell "docs/**/*.md"` sebelum mengirimkan perubahan
1. **Perbaiki kesalahan ketik daripada mengabaikannya**: Jika memungkinkan, perbaiki kesalahan ejaan yang sebenarnya daripada menambahkannya ke daftar kata
1. **Gunakan terminologi yang konsisten**: Gunakan nama produk dan istilah teknis yang sudah ada

## Pratinjau Dokumentasi Lokal dengan MkDocs

Kami menggunakan MkDocs dengan tema Material untuk menghasilkan situs dokumentasi kami. Anda dapat menjalankannya secara lokal untuk melihat pratinjau perubahan Anda sebelum mengirimkan pull request.

📖 **Pelajari lebih lanjut**: [Dokumentasi MkDocs](https://www.mkdocs.org/) | [Material untuk MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Menyiapkan Lingkungan Python di VS Code

Kami merekomendasikan menggunakan lingkungan virtual untuk mengisolasi dependensi proyek ini. VS Code membuat proses ini menjadi mudah dan akan menangani instalasi Python jika diperlukan.

> **GitHub Codespaces**: Instruksi ini bekerja dengan sempurna di GitHub Codespaces, yang sudah dilengkapi dengan Python yang telah diinstal dan lingkungan VS Code yang siap digunakan.

📖 **Pelajari lebih lanjut**: [Python di VS Code](https://code.visualstudio.com/docs/languages/python) | [Lingkungan Python di VS Code](https://code.visualstudio.com/docs/python/environments)

#### Prasyarat

**Instal Ekstensi Python**: Instal [ekstensi Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) oleh Microsoft dari marketplace VS Code jika Anda belum melakukannya.

#### Pengaturan di VS Code

1. **Buat lingkungan virtual**:
   - Buka Command Palette (`Ctrl+Shift+P` di Windows/Linux, `Cmd+Shift+P` di Mac)
   - Ketik "Python: Create Environment" dan pilih
   - Pilih "Venv" (lingkungan virtual)
   - Jika tidak ada interpreter Python yang tersedia, VS Code akan memandu Anda untuk menginstal Python
   - Pilih interpreter Python Anda (Python 3.8+)
   - VS Code akan membuat folder `.venv` dan secara otomatis mengaktifkannya

2. **Verifikasi pengaturan**:
   - Buka terminal terintegrasi baru (`` Ctrl+Shift+` `` di Windows/Linux, `` Cmd+Shift+` `` di Mac, atau `View > Terminal`)
   - Anda harus melihat `(.venv)` di prompt terminal
   - Jalankan: `python --version` untuk memverifikasi

> **Catatan**: Membuka terminal baru memastikan lingkungan Python diaktifkan dengan benar. Jika Anda lebih suka menggunakan lingkungan Python yang sudah ada daripada membuat lingkungan virtual baru, Anda dapat menggunakan "Python: Select Interpreter" dari Command Palette dan memilih lingkungan yang Anda inginkan.

### Menginstal MkDocs di VS Code

Dengan lingkungan Python Anda yang sudah diatur di VS Code, instal MkDocs dan tema Material:

1. **Buka terminal terintegrasi VS Code** (`Ctrl+`` ` atau `View > Terminal`)
2. **Pastikan lingkungan virtual Anda aktif** (Anda harus melihat `(.venv)` di prompt)
3. **Instal paket-paket**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Menjalankan MkDocs di VS Code

Untuk memulai server pengembangan lokal dengan hot reload:

1. **Di terminal terintegrasi VS Code**, jalankan:

   ```bash
   mkdocs serve
   ```

2. **Situs akan tersedia di**: `http://127.0.0.1:8000/agent-academy/`

### Pratinjau di Simple Browser VS Code

Untuk pengalaman pengembangan terbaik tanpa meninggalkan VS Code:

1. **Mulai server MkDocs** di terminal terintegrasi (seperti yang ditunjukkan di atas)
2. **Buka Simple Browser**:
   - **Metode 1**: Buka Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Ketik "Simple Browser: Show" dan pilih
   - Masukkan URL: `http://127.0.0.1:8000/agent-academy/`

   - **Metode 2**: Klik kanan pada URL di output terminal dan pilih "Follow Link"

   - **Metode 3**: Gunakan `Ctrl+Click` (Windows) atau `Cmd+Click` (Mac) pada URL di terminal

3. **Posisikan browser**: Anda dapat menempatkan Simple Browser di samping editor Anda untuk pengeditan dan pratinjau secara berdampingan

### Manfaat Workspace VS Code

Bekerja sepenuhnya dalam VS Code memberikan keuntungan berikut:

- **Terminal terintegrasi**: Tidak perlu beralih antar aplikasi
- **Pratinjau berdampingan**: Edit markdown dan lihat perubahan secara bersamaan  
- **Navigasi tautan**: Klik URL terminal langsung untuk membuka Simple Browser
- **Integrasi ekstensi**: Ekstensi Python, markdownlint, dan cSpell bekerja bersama
- **Integrasi Git**: Panel kontrol sumber bawaan untuk commit dan pull request

### Fitur hot reload

Saat menjalankan `mkdocs serve`, Anda mendapatkan:

- **Penyegaran otomatis**: Perubahan pada file `.md` di folder `docs/` secara otomatis memuat ulang browser
- **Pembaruan konfigurasi**: Perubahan pada `mkdocs.yml` juga memicu rebuild
- **Pratinjau real-time**: Lihat format, tautan, dan perubahan konten Anda secara instan
- **Validasi tautan**: MkDocs akan memperingatkan Anda tentang tautan internal yang rusak

### Perintah MkDocs yang berguna di VS Code

Jalankan perintah ini di terminal terintegrasi VS Code:

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

> **Tip:** Untuk melihat pratinjau dokumentasi secara lokal dengan semua dependensi diperiksa, gunakan skrip PowerShell `scripts/serve-docs.ps1`.

### Manfaat pratinjau lokal

- **Umpan balik langsung**: Lihat bagaimana markdown Anda dirender dengan tema Material
- **Validasi tautan**: Temukan tautan yang rusak sebelum tayang
- **Pengujian navigasi**: Verifikasi konten Anda muncul di bagian yang benar
- **Pratinjau seluler**: Uji bagaimana konten Anda terlihat di berbagai ukuran layar
- **Pemeriksaan kinerja**: Pastikan gambar dan aset dimuat dengan benar

## Pertanyaan?

Jika Anda memiliki pertanyaan tentang format markdown atau panduan kontribusi, silakan:

1. Tinjau panduan kontribusi ini
1. Periksa masalah yang ada untuk pertanyaan serupa
1. Buka masalah baru

Selamat berkontribusi! 🚀

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang salah yang timbul dari penggunaan terjemahan ini.