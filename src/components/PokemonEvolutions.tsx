import { ArrowRight, Orbit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { typeBadgeClassName } from "@/components/TypeBadge";
import { buildPokemonHref } from "@/lib/pokemon";
import type { PokemonEvolution } from "@/types/pokemon";

type PokemonEvolutionsProps = {
  currentPokemonName: string;
  evolutions: PokemonEvolution[];
};

export default function PokemonEvolutions({
  currentPokemonName,
  evolutions,
}: PokemonEvolutionsProps) {
  if (evolutions.length === 0) {
    return (
      <section className="panel rounded-[2rem] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-400/70">
          สายวิวัฒนาการ
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-100">
          ไม่พบร่างวิวัฒนาการขั้นถัดไป
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          ระบบ API ไม่พบข้อมูลการวิวัฒนาการขั้นถัดไปของ {currentPokemonName}
        </p>
      </section>
    );
  }

  return (
    <section className="panel rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-400/70">
            สายวิวัฒนาการ
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-100">
            วิวัฒนาการร่างถัดไป
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-500">
          การ์ดแต่ละใบเชื่อมโยงผ่านระบบ Next.js Link ซึ่งจะอัปเดต URL เพื่อสลับข้อมูลร่างถัดไปในทันทีที่กดเลือก
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {evolutions.map((evolution) => (
          <Link
            key={evolution.id}
            href={buildPokemonHref(evolution.name)}
            className="evo-card group rounded-[1.75rem] border border-white/6 bg-white/3 p-5 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  ร่างพัฒนาถัดไป
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-100">
                  {evolution.name}
                </h3>
                {evolution.classification ? (
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {evolution.classification}
                  </p>
                ) : null}
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white transition group-hover:from-purple-400 group-hover:to-blue-400 group-hover:shadow-[0_4px_20px_rgba(167,139,250,0.4)]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.12),transparent_48%),linear-gradient(180deg,rgba(22,22,34,0.8)_0%,rgba(18,18,28,0.6)_100%)] border border-white/4 p-4">
              <div className="pokemon-float relative mx-auto aspect-square max-w-[220px]">
                <Image
                  src={evolution.image}
                  alt={evolution.name}
                  fill
                  sizes="(max-width: 768px) 60vw, 220px"
                  className="object-contain drop-shadow-[0_16px_26px_rgba(167,139,250,0.2)]"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {evolution.types.map((type) => (
                <span
                  key={`${evolution.id}-${type}`}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${typeBadgeClassName(
                    type,
                  )}`}>
                  {type}
                </span>
              ))}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/15 px-3 py-1.5 text-xs font-semibold text-purple-300">
              <Orbit className="h-3.5 w-3.5" />
              ดูข้อมูล {evolution.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
