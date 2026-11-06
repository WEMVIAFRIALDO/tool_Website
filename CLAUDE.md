# Aturan kerja desain

Baca juga `AGENTS.md`: versi Next.js di proyek ini punya perubahan besar, jadi cek `node_modules/next/dist/docs/` sebelum menulis kode.

## Desain
- Mulai setiap halaman atau fitur baru dengan skill **ui-ux-pro-max** untuk menyusun design system (warna, tipografi, spasi) sebelum menulis komponen. Simpan hasilnya di `design-system/` dan jadikan acuan.
- Gunakan skill **frontend-design** supaya tampilan punya arah visual yang jelas, bukan default template.
- Token warna ada di `app/globals.css` sebagai CSS variable. Ubah di sana, jangan hard-code warna di komponen.

## Motion
- Impor animasi dari `motion/react`, bukan `framer-motion`.
- Scroll halus lewat Lenis di `components/smooth-scroll.tsx`, sudah disinkronkan dengan loop frame motion. Jangan menambah loop `requestAnimationFrame` kedua.
- Hormati `prefers-reduced-motion`. `MotionProvider` sudah memakai `reducedMotion="user"`.

## Komponen
- **React Bits**: banyak komponen mengimpor `framer-motion`, `motion`, atau `gsap`. Sebelum dipasang, cek impornya dan sesuaikan ke `motion/react` (versi motion di `package.json`). Jangan menurunkan versi motion demi satu komponen.
- Jangan overwrite komponen yang sudah disesuaikan. Sebelum menjalankan `npx shadcn add ...` pada komponen yang sudah ada, cek `git diff` atau jawab "tidak" saat diminta menimpa, lalu gabungkan perubahan secara manual.
- Link ke section (`/#nama-section`) pakai `HashLink` dari `components/ui/hash-link.tsx`, bukan `<a>` atau `Link` biasa, agar scroll lewat Lenis.

## Verifikasi
- Cek tampilan dengan **Playwright MCP** (screenshot desktop dan mobile) sebelum menyatakan selesai.
- Jalankan `npm run build` sebelum commit.

## Keamanan
- Jangan menulis API key di file mana pun. Key 21st dibaca dari environment variable `API_KEY_21ST`.
