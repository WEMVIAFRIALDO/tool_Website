# Starter Template Frontend

Template Next.js (App Router, TypeScript, Tailwind 4) untuk proyek frontend berikutnya, lengkap dengan animasi, scroll halus, registry komponen, dan pengaturan Claude Code.

## Tools dan kegunaannya

| Tool | Kegunaan |
| --- | --- |
| Next.js 16 + React 19 | Kerangka aplikasi |
| Tailwind CSS 4 | Styling berbasis utility dan token CSS variable |
| motion (`motion/react`) | Animasi komponen |
| Lenis | Scroll halus, sinkron dengan motion, menghormati `prefers-reduced-motion` |
| shadcn (`components.json`) | CLI untuk memasang komponen ke `components/` |
| Magic UI (`@magicui`) | Registry komponen animasi |
| React Bits (`@react-bits`) | Registry komponen dan efek visual |
| lucide-react, clsx, tailwind-merge, cva | Ikon dan helper `cn()` untuk class |
| MCP 21st | Mencari dan mengambil komponen dari 21st.dev lewat Claude Code |
| Playwright MCP | Claude membuka browser untuk memeriksa tampilan |
| Plugin `frontend-design` | Panduan desain visual yang tidak generik |
| Plugin `ui-ux-pro-max` | Pembuatan design system dan panduan UI/UX |

Aturan kerja untuk Claude ada di `CLAUDE.md`.

## Membuat proyek baru dari template ini

Opsi 1, lewat GitHub: buka repo template, klik **Use this template** (aktifkan dulu di Settings > Template repository), lalu clone repo baru.

Opsi 2, lewat terminal:

```bash
git clone https://github.com/WEMVIAFRIALDO/tool_Website.git nama-proyek
cd nama-proyek
rm -rf .git && git init   # PowerShell: Remove-Item -Recurse -Force .git; git init
npm install
```

Lalu ubah `name` di `package.json` dan ganti isi `app/page.tsx`.

## Setup

1. Pasang dependensi: `npm install`
2. Simpan API key 21st sebagai environment variable (Windows PowerShell atau CMD), lalu **tutup dan buka ulang terminal serta Claude Code**:

   ```
   setx API_KEY_21ST "isi-key-anda"
   ```

   Key dibaca `.mcp.json` lewat `${API_KEY_21ST}`. Jangan menuliskannya di file mana pun.
3. Pasang Playwright MCP:

   ```
   claude mcp add -s user playwright -- cmd /c npx @playwright/mcp@latest
   ```

   Di Windows, `cmd /c` diperlukan agar `npx` bisa dijalankan. Opsi `-s user` memasangnya sekali untuk semua proyek.

4. Buka Claude Code di folder proyek. Setujui marketplace dan plugin `frontend-design` serta `ui-ux-pro-max` saat diminta (sudah diatur di `.claude/settings.json`), dan setujui server MCP `21st`.
5. Jalankan `npm run dev`.

## Memasang komponen

```bash
npx shadcn add @magicui/marquee
npx shadcn add @react-bits/blur-text
```

Periksa impor animasi pada komponen React Bits dan sesuaikan ke `motion/react`.

## Skrip

- `npm run dev` menjalankan server pengembangan
- `npm run build` build produksi
- `npm run lint` pemeriksaan ESLint
