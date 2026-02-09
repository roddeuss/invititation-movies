# 5 Centimeters Per Second - Invitation Website

Website undangan nonton film yang romantis dan interaktif dengan tema Cherry Blossom.

## Fitur

- **Animasi Sakura**: Efek kelopak bunga jatuh yang aesthetic.
- **Kartu Undangan**: Pesan puitis dengan desain glassmorphism.
- **Interaktif**: Tombol "No" yang kabur saat didekati.
- **WhatsApp Integration**: Langsung redirect ke chat WA dengan pesan yang sudah disiapkan (Tanggal & Jam).

## Cara Menjalankan (Local)

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Jalankan server development:
    ```bash
    npm run dev
    ```
3.  Buka browser di `http://localhost:5173`.

## Cara Deploy ke Vercel

1.  **Push ke GitHub**:
    - Buat repository baru di GitHub.
    - Jalankan command berikut di terminal:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git branch -M main
      git remote add origin <URL_REPO_GITHUB_KAMU>
      git push -u origin main
      ```

2.  **Deploy di Vercel**:
    - Buka [Vercel.com](https://vercel.com) dan login/signup.
    - Klik **"Add New..."** -> **"Project"**.
    - Pilih repository GitHub yang baru dibuat.
    - Klik **"Deploy"**.
    - Tunggu sebentar, dan website kamu sudah online! 🎉

## Customization

- **Ubah Nomor WA**: Edit file `src/components/InvitationCard.tsx` di bagian `phoneNumber`.
- **Ubah Pesan**: Edit variabale `message` di file yang sama.

Selamat mencoba! Semoga diterima! 😉🌸
