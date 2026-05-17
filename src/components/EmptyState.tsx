import { Compass, Link2, Sparkles } from "lucide-react";
import Link from "next/link";

type EmptyStateProps = {
  featuredPokemon: string[];
};

export default function EmptyState({ featuredPokemon }: EmptyStateProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
      <div className="panel rounded-[2rem] p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300">
          <Sparkles className="h-4 w-4" />
          เริ่มต้นด้วยการป้อนชื่อโปเกมอน
        </div>
        <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-100 sm:text-5xl">
          ระบบพร้อมแสดงผลทันทีที่มีชื่อโปเกมอนบน URL
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
          กรอกชื่อโปเกมอนในช่องค้นหา เปิดจากลิงก์ที่บันทึกไว้ หรือกดเลือกโปเกมอนแนะนำด้านล่างนี้ เพื่อแสดงผลลัพธ์ผ่าน GraphQL API
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {featuredPokemon.map((name) => (
            <Link
              key={name}
              href={`/?name=${name}`}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white">
              {name}
              <Compass className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>

      <div className="panel rounded-[2rem] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-400/70">
          ตัวอย่างลิงก์สำหรับแชร์
        </p>
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400">
          <div className="rounded-2xl border border-white/6 bg-white/3 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-200">
              <Link2 className="h-4 w-4 text-purple-400" />
              การค้นหาด้วยพารามิเตอร์ name
            </div>
            <code className="mt-3 block rounded-2xl bg-black/40 border border-white/6 px-4 py-3 text-xs text-purple-200">
              /?name=bulbasaur
            </code>
          </div>
          <div className="rounded-2xl border border-white/6 bg-white/3 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-200">
              <Link2 className="h-4 w-4 text-purple-400" />
              การค้นหาด้วยพารามิเตอร์ pokemon
            </div>
            <code className="mt-3 block rounded-2xl bg-black/40 border border-white/6 px-4 py-3 text-xs text-purple-200">
              /?pokemon=bulbasaur
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
