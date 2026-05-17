import { Compass, Link2, Sparkles } from "lucide-react";
import Link from "next/link";

type EmptyStateProps = {
  featuredPokemon: string[];
};

export default function EmptyState({ featuredPokemon }: EmptyStateProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
      <div className="panel rounded-[2rem] p-6 sm:p-8">
        <div className="theme-badge-strong inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
          <Sparkles className="h-4 w-4" />
          เริ่มค้นหาด้วยชื่อโปเกมอน
        </div>
        <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[#FBF5E0] sm:text-5xl">
          พร้อมแสดงผลทันทีเมื่อมีชื่อโปเกมอนใน URL
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#C6B990]">
          พิมพ์ชื่อโปเกมอนในช่องค้นหา เปิดผ่านลิงก์ที่บันทึกไว้
          หรือเลือกจากรายชื่อแนะนำด้านล่าง
          เพื่อดึงข้อมูลผ่าน GraphQL API
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {featuredPokemon.map((name) => (
            <Link
              key={name}
              href={`/?name=${name}`}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
              {name}
              <Compass className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>

      <div className="panel rounded-[2rem] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#978F66]">
          ตัวอย่างลิงก์สำหรับแชร์
        </p>
        <div className="mt-5 space-y-4 text-sm leading-7 text-[#C6B990]">
          <div className="rounded-2xl border border-[#6E472B]/45 bg-[#2F1C11]/35 p-4">
            <div className="flex items-center gap-2 font-semibold text-[#F0E6C6]">
              <Link2 className="h-4 w-4 text-[#E4D6A9]" />
              การค้นหาด้วยพารามิเตอร์ name
            </div>
            <code className="theme-code mt-3 block rounded-2xl px-4 py-3 text-xs">
              /?name=bulbasaur
            </code>
          </div>
          <div className="rounded-2xl border border-[#6E472B]/45 bg-[#2F1C11]/35 p-4">
            <div className="flex items-center gap-2 font-semibold text-[#F0E6C6]">
              <Link2 className="h-4 w-4 text-[#E4D6A9]" />
              การค้นหาด้วยพารามิเตอร์ pokemon
            </div>
            <code className="theme-code mt-3 block rounded-2xl px-4 py-3 text-xs">
              /?pokemon=bulbasaur
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
