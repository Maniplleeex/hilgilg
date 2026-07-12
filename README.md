# Elfaria — fullstack

## Struktur project (penting untuk Vercel)

```
index.html          <- halaman utama
assets/images/*      <- gambar
assets/audio/*        <- lagu (mp3)
api/track.js          <- GET  /api/track   → info lagu yang lagi diputar
api/cards.js           <- GET  /api/cards   → data kartu showcase
api/visit.js             <- GET/POST /api/visit → counter kunjungan
server.js                 <- HANYA untuk jalanin lokal (npm start), tidak dipakai di Vercel
package.json
```

**PENTING:** `index.html`, folder `assets/`, dan folder `api/` harus ada
persis di **root repo GitHub** kamu (bukan di dalam sub-folder apapun).
Vercel otomatis mendeteksi ini tanpa perlu `vercel.json` sama sekali:
- semua file statis di root (index.html, assets/) otomatis di-serve sebagai website
- semua file di dalam `api/` otomatis jadi serverless function

Kalau nge-upload manual lewat GitHub web (Add files via upload), pastikan
kamu drag **isi** folder hasil extract langsung (bukan folder pembungkusnya),
dan cek lagi di github.com bahwa `index.html` ada tepat di root repo, folder
`assets` dan `api` juga ada di root — bukan kenested di dalam folder lain.
Upload manual lewat browser sering gagal bawa struktur folder yang dalam;
kalau bisa, pakai GitHub Desktop atau `git push` biar lebih pasti utuh.

## Jalanin lokal

```bash
npm install
npm start
```

Buka `http://localhost:3000`.

## Deploy ke Vercel

1. Pastikan struktur repo GitHub persis seperti di atas (index.html, assets/,
   api/, package.json di root repo).
2. Import repo ke Vercel — Root Directory biarkan `./`, tidak perlu ubah
   apapun, tidak perlu Build Command. Vercel otomatis mengenali ini sebagai
   project statis + serverless functions.
3. Deploy.

Kalau masih "Cannot GET /" walau Deployment status Ready, cek dulu di
github.com apakah `index.html` benar-benar ada di root repo (klik ke repo-nya
langsung), bukan di dalam folder lain.
