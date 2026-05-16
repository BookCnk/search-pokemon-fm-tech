import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Compass,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    title: "Brand-ready foundation",
    body: "วางโครงไว้ให้พร้อมสำหรับเปลี่ยนสี ฟอนต์ และข้อความ โดยไม่ต้องแกะ logic เก่าของระบบจัดการรถบัส",
    icon: Layers3,
  },
  {
    title: "Fast launch surface",
    body: "เริ่มจาก landing page ที่อ่านง่าย และค่อยแตก route, form หรือ CMS เพิ่มเมื่อโปรเจกต์จริงเริ่มชัด",
    icon: Rocket,
  },
  {
    title: "Flexible section blocks",
    body: "ฮีโร่, feature cards, ขั้นตอนทำงาน และ CTA ถูกจัดเป็นบล็อกที่ย้ายหรือแทนที่ได้ง่าย",
    icon: Blocks,
  },
];

const steps = [
  "เปลี่ยนชื่อแบรนด์, headline และข้อความแนะนำให้ตรงกับเว็บไซต์ใหม่",
  "เติม section เฉพาะธุรกิจ เช่น portfolio, pricing, testimonial หรือ contact form",
  "เชื่อม data source หรือ backend ภายหลัง เมื่อ requirement ของงานจริงเริ่มนิ่ง",
];

const quickStart = [
  "หน้าแรกถูกรีเซ็ตให้เป็น template กลาง ไม่ redirect ไป dashboard เดิมแล้ว",
  "เอา auth, API, Prisma และ schema เฉพาะงานเดิมออก เพื่อลดภาระ config ตอนเริ่มโปรเจกต์",
  "ยังคง Next.js 16, Tailwind CSS 4 และ standalone output ไว้สำหรับต่อยอดและ deploy",
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <Link
            href="#top"
            className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-950 text-stone-50">
              S
            </span>
            Studio Starter Template
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-stone-700 md:flex">
            <Link href="#features">Features</Link>
            <Link href="#process">Process</Link>
            <Link href="#launch">Launch</Link>
          </nav>
        </header>

        <section
          id="top"
          className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50/80 px-4 py-2 text-sm font-medium text-emerald-950 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Clean slate for your next website
            </div>

            <div className="space-y-5">
              <p className="font-display text-5xl font-semibold leading-none tracking-[-0.05em] text-stone-950 sm:text-6xl lg:text-7xl">
                รีเซ็ตโปรเจกต์เดิม ให้กลายเป็น template ที่พร้อมขึ้นเว็บใหม่
              </p>
              <p className="max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
                เว็บนี้ถูกจัดใหม่ให้เป็นฐานเริ่มต้นสำหรับงาน marketing site หรือ
                corporate site โดยตัดส่วนที่ผูกกับระบบจัดการรถบัสออก
                และเหลือเฉพาะโครงที่ต่อยอดง่ายกว่าเดิม
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#launch"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800">
                เริ่มแต่ง template นี้
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-900/10 bg-white/65 px-6 py-3 text-sm font-semibold text-stone-900 backdrop-blur transition hover:bg-white">
                ดูโครงสร้างที่เหลือไว้
                <Compass className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="panel rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
                    Template status
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-stone-950">
                    Ready to customize
                  </p>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-800">
                  Live base
                </div>
              </div>

              <div className="grid gap-3">
                {quickStart.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/60 bg-white/70 p-4 text-sm leading-7 text-stone-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="features" className="space-y-6 py-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                Core blocks
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-4xl">
                สิ่งที่คงไว้เพื่อให้เริ่มงานต่อได้เร็ว
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
              โครงใหม่ตั้งใจให้เบาพอสำหรับเริ่มโปรเจกต์ใหม่
              แต่ยังดูพร้อมใช้งานและต่อยอดได้จริงตั้งแต่วันแรก
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {highlights.map(({ title, body, icon: Icon }) => (
              <article
                key={title}
                className="panel rounded-[1.75rem] p-6 transition hover:-translate-y-1">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-stone-50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-stone-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-700 sm:text-base">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="grid gap-6 py-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="panel rounded-[2rem] p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              Suggested flow
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-stone-950">
              วิธีใช้งาน template นี้ต่อ
            </h2>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-3xl border border-white/60 bg-white/70 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-semibold text-stone-50">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-stone-700 sm:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="launch"
            className="rounded-[2rem] border border-stone-900/10 bg-stone-950 p-7 text-stone-50 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">
              Next move
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em]">
              ใช้หน้านี้เป็นฐาน แล้วค่อยแตก feature ตาม requirement จริง
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
              แนวทางนี้ช่วยให้เราไม่แบก schema, auth flow, proxy rule และ API
              เก่าที่ไม่เกี่ยวกับเว็บใหม่ติดไปด้วยตั้งแต่ต้น
            </p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                เปลี่ยน metadata ใน <code>src/app/layout.tsx</code>{" "}
                ให้ตรงแบรนด์ใหม่
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                เพิ่ม route ใหม่ใน <code>src/app</code> เมื่อ structure
                เว็บเริ่มชัด
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                ถ้าต้องมี backend ค่อยเพิ่ม service
                เฉพาะงานจริงกลับเข้ามาอย่างตั้งใจ
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
