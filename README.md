# ToolVerse — Green Glass Toolkit

Starter website statis berisi katalog 50 tools, UI green/white glassmorphism, bubble ambience, animasi ringan, pencarian, filter kategori, favorit sesi, modal tools, dan mode gelap.

## Deploy ke Vercel
1. Ekstrak ZIP ini.
2. Upload folder project ke repository GitHub.
3. Di Vercel pilih **Add New → Project**, lalu import repository.
4. Framework preset: **Other**. Build Command dan Output Directory bisa dikosongkan (atau Output Directory `.`).
5. Deploy.

Alternatif: jalankan `npx vercel` dari folder project jika Vercel CLI sudah terpasang.

## Catatan fitur
- Banyak tool browser sudah memiliki fungsi dasar; beberapa kartu merupakan starter/roadmap dan ditandai di panelnya.
- Direct Video Downloader hanya mendukung direct URL file video publik yang memang bisa diakses, bukan ekstraksi dari URL halaman TikTok/Instagram/YouTube/Facebook.
- Jangan melewati login, DRM, paywall, atau batasan platform. Pastikan kamu memiliki hak/izin atas konten.
- QR generator memakai layanan pihak ketiga dan mengirim teks/URL yang dimasukkan ke layanan tersebut. Jangan masukkan informasi sensitif.
- Google Fonts dan QR generator memerlukan koneksi internet.
- Tidak ada backend/database dalam starter statis ini. Untuk fitur server-side/API, tambahkan backend dan ikuti aturan platform serta hukum yang berlaku.

## Struktur
- `index.html` — struktur halaman
- `style.css` — gaya glassmorphism, responsive layout, animasi
- `app.js` — katalog 50 tools dan fungsi browser
- `vercel.json` — header keamanan dasar untuk Vercel

## Versi 2.0
- Total katalog: 150 tool (kategori Media, Teks, Developer, Utilitas).
- Banyak tool memproses data langsung di browser; tool yang membutuhkan provider eksternal/CORS dijelaskan di panel.
- Contoh endpoint API Vercel: `GET /api/health` (file `api/health.js`).
- `API Request Builder` dan `API JSON Viewer` membantu menguji endpoint publik. Endpoint target harus mengizinkan CORS.

## Catatan downloader video
Downloader browser hanya dapat menyimpan direct URL file media yang bisa diakses dan diizinkan oleh server sumber. Link halaman YouTube/TikTok/Instagram bukan direct file URL; untuk mendukung platform tertentu, integrasikan provider API yang memiliki izin dan dokumentasi yang sesuai lewat backend Vercel. Simpan API key di Vercel Project → Settings → Environment Variables, jangan pernah di `app.js`. Jangan melewati login, DRM, paywall, atau pembatasan akses.

## Deploy ke Vercel
1. Ekstrak ZIP lalu import folder/repository ke Vercel.
2. Framework preset: Other; root directory adalah folder proyek.
3. Deploy. Tes endpoint `/api/health`.
4. Jika menambahkan provider API, buat fungsi di folder `api/` dan simpan rahasia pada Environment Variables.

Catatan: katalog berisi 150 entri, tetapi sebagian helper merupakan referensi/template dan bukan pengganti layanan backend penuh. Panel akan menjelaskan bila sebuah fitur memerlukan API eksternal.
