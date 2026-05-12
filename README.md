# 💕 Website Permintaan Maaf 💕

Website permintaan maaf spesial untuk pasanganmu dengan tema pink cinta yang indah.

## 📱 Fitur Website

✨ **Pesan Permintaan Maaf** - Pesan romantis dan tulus untuk pasanganmu
🎵 **Musik Spesial** - Audio player dengan lagu Shape My Heart
💗 **Tema Pink Cinta** - Desain dengan warna pink yang romantis
🎨 **Animasi Cantik** - Hati dan bunga yang bergerak indah
📱 **Responsive Mobile** - Sempurna untuk dibuka di HP/Android
💕 **Efek Interaktif** - Klik tombol untuk efek yang menyentuh hati

## 📂 File-file Website

- **index.html** - File utama website
- **style.css** - Styling dan desain (responsive untuk mobile)
- **script.js** - Efek interaktif dan animasi
- **README.md** - File panduan ini

## 🚀 Cara Membuka di HP/Android

### Metode 1: Langsung dari File Explorer
1. Hubungkan HP ke komputer dengan USB cable
2. Copy folder "Permintaan Maaf" ke HP/Android
3. Di HP, buka File Manager/Explorer
4. Navigasi ke folder "Permintaan Maaf"
5. Tap pada file "index.html"
6. Pilih "Buka dengan" dan pilih Browser (Chrome, Firefox, dll)

### Metode 2: Menggunakan Server Lokal (Recommended)
1. **Install Python** (jika belum ada)
   - Download dari python.org
   - Buat sure untuk check "Add Python to PATH"

2. **Buka Command Prompt/Terminal** di folder project
   - Shift + Click kanan di folder "Permintaan Maaf"
   - Pilih "Open PowerShell window here" atau "Open command window here"

3. **Jalankan Server** dengan salah satu perintah:
   ```
   Python 3:
   python -m http.server 8000
   
   Python 2:
   python -m SimpleHTTPServer 8000
   ```

4. **Buka di Browser PC**:
   - Ketik di address bar: `http://localhost:8000`
   - Tekan Enter

5. **Akses dari HP (di WiFi yang sama)**:
   - Ketahui IP address PC: Buka Command Prompt, ketik `ipconfig`
   - Cari "IPv4 Address" (misal: 192.168.1.100)
   - Di HP, buka browser dan ketik: `http://192.168.1.100:8000`
   - Tekan Enter, website terbuka di HP!

### Metode 3: Menggunakan Google Drive
1. Upload folder ke Google Drive
2. Buka file index.html dari Google Drive
3. Download atau preview di mobile browser

### Metode 4: Menggunakan Web Hosting Gratis
1. Upload ke Netlify, Vercel, atau GitHub Pages
2. Dapatkan link yang bisa diakses dimana saja
3. Buka di HP/Android dengan link tersebut

## 🎵 Tentang Lagu

Lagu "Shape My Heart" dimainkan dari audio player di website. Anda bisa:
- Replace URL di `index.html` dengan file musik lokal
- Atau upload file mp3 ke folder yang sama

Untuk mengganti lagu:
1. Letakkan file lagu (shape-my-heart.mp3) di folder yang sama
2. Edit line di index.html dari:
   ```html
   <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
   ```
   Menjadi:
   ```html
   <source src="shape-my-heart.mp3" type="audio/mpeg">
   ```

## 🎨 Cara Mengubah Tema Warna

Edit file `style.css`:
- **Pink utama**: Cari `#ff1493` dan ganti dengan warna hex pilihan Anda
- **Background gradient**: Cari `linear-gradient` dan ubah warna
- **Latar pesan**: Ubah warna di `.message-box`

## 💡 Tips Penggunaan

1. **Untuk Pengalaman Terbaik**:
   - Buka di HP dalam mode potrait (tegak)
   - Gunakan browser terbaru (Chrome, Firefox, Safari)
   - Aktifkan volume untuk mendengarkan lagu

2. **Personalisasi**:
   - Edit teks di bagian `.message` untuk pesan personal
   - Tambahkan foto pasangan dengan menambahkan `<img>` tag
   - Ubah emoji sesuai selera

3. **Test di Desktop terlebih dahulu**:
   - Buka index.html di browser PC
   - Pastikan semua berfungsi dengan baik sebelum dibuka di HP

## 🔧 Troubleshooting

**Lagu tidak terputar:**
- Check koneksi internet
- Coba dengan browser berbeda
- Ganti URL dengan file lokal

**Tidak responsive di HP:**
- Refresh halaman (pull down untuk iOS, atau F5 di Android)
- Clear browser cache
- Coba browser berbeda

**Tombol tidak bekerja:**
- Enable JavaScript di browser
- Clear cache browser
- Coba incognito/private mode

## 📞 Support

Jika ada masalah, coba:
1. Check Console (F12 → Console tab)
2. Coba di browser berbeda
3. Restart komputer atau HP

---

Dibuat dengan ❤️ untuk pasangan terkasih.
Semoga website ini membantu Anda mengungkapkan maaf yang tulus! 💕
