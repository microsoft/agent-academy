<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "610b0181a64c306bc9a853fd974bc924",
  "translation_date": "2025-10-20T01:19:11+00:00",
  "source_file": "docs/operative-preview/09-deep-reasoning/README.md",
  "language_code": "ms"
}
-->
# Mengaplikasikan Penalaran Mendalam untuk Menilai Kesesuaian Calon dan Persediaan Temuduga

--8<-- "disclaimer.md"

## Teori

- Terangkan apa itu penalaran mendalam
- Bincangkan cara untuk menggunakannya (dalam agen itu sendiri atau dalam prompt)
- Bincangkan bila anda akan menggunakannya

## Makmal

Untuk agen Persediaan Temuduga - kita akan menggunakan penalaran mendalam. Dalam kes ini, kita akan membuat penalaran terhadap perkara berikut:

- Soalan temuduga (adakah terdapat sebarang kekurangan yang perlu kita fokuskan semasa temuduga)
- Hasil Prompt mengenai kesesuaian dengan syarikat (teks tentang bagaimana calon ini selaras dengan nilai syarikat + skor)
- Hasil Prompt mengenai kesesuaian dengan peranan (teks tentang bagaimana calon ini selaras dengan keperluan peranan + skor)

Ini adalah masa yang sesuai untuk menerapkan arahan lanjutan yang telah dipelajari oleh pelajar dalam pelajaran sebelumnya.

[Tambahkan model penalaran mendalam untuk tugas kompleks (pratonton) - Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-reasoning-models)  
[https://learn.microsoft.com/ai-builder/prompt-modelsettings](https://learn.microsoft.com/ai-builder/prompt-modelsettings)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.