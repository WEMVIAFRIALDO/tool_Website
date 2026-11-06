import { HashLink } from "@/components/ui/hash-link";

const isi = [
  ["Next.js + Tailwind 4", "App Router, TypeScript, dan token warna siap pakai."],
  ["motion + Lenis", "Scroll halus yang sinkron dengan motion dan menghormati prefers-reduced-motion."],
  ["Magic UI + React Bits", "Registry sudah terpasang di components.json: npx shadcn add @magicui/... atau @react-bits/..."],
  ["MCP 21st", "Membaca API key dari environment variable API_KEY_21ST."],
  ["Plugin Claude Code", "frontend-design dan ui-ux-pro-max aktif untuk proyek ini."],
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-24">
      <p className="text-sm text-muted-foreground">Starter template</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        Template frontend siap pakai
      </h1>
      <p className="mt-4 max-w-[60ch] text-muted-foreground">
        Fondasi untuk proyek frontend berikutnya. Ganti halaman ini, lalu mulai
        merancang dengan alur kerja yang sudah disiapkan.
      </p>
      <HashLink
        href="/#isi"
        className="mt-8 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Lihat isi template
      </HashLink>

      <section id="isi" className="mt-24 scroll-mt-8">
        <h2 className="text-2xl font-semibold">Isi template</h2>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {isi.map(([judul, deskripsi]) => (
            <li key={judul} className="py-4">
              <h3 className="font-medium">{judul}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{deskripsi}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          Panduan lengkap ada di README.md dan aturan kerja di CLAUDE.md.
        </p>
      </section>
    </main>
  );
}
