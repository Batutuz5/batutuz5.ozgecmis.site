# Batuhan Demirkol — Portfolyo

MBP 206 Sistem Analizi ve Tasarımı final projesi için hazırlanmış kişisel portfolyo web sitesi.

## Özellikler

- Bölümler: Ana Sayfa, Hakkımda, Beceriler, CV, İletişim (GitHub ana sayfadaki butondan)
- Türkçe / İngilizce dil geçişi (sağ üst **EN** / **TR**)
- Mobil uyumlu (responsive) tasarım
- CV: `turkce_cv.docx` ve `ing_cv.docx` (site kök dizininde)

## Yerel çalıştırma

```bash
# Python
python -m http.server 8080

# veya Node
npx serve .
```

Tarayıcıda: http://localhost:8080

## GitHub Pages ile yayınlama

1. GitHub’da yeni repo: `portfolio` (veya `Batutuz5.github.io` kullanıcı sitesi için)
2. Bu klasördeki tüm dosyaları push edin
3. **Settings → Pages → Source:** `main` branch, folder `/ (root)`
4. Site adresi: `https://Batutuz5.github.io/portfolio/` (repo adına göre değişir)

`js/main.js` içindeki proje GitHub linklerini kendi repolarınızla güncelleyin.

## CV dosyaları

`turkce_cv.docx` ve `ing_cv.docx` dosyalarını `index.html` ile aynı klasöre koyun. Blackboard için bu dosyaları PDF’e çevirip ZIP olarak yükleyebilirsiniz.
