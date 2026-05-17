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
      <section className="panel rounded-[0.5rem] p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          สายวิวัฒนาการ
        </p>
        <h2 className="mt-1 text-xl font-bold text-zinc-100">
          ไม่พบร่างวิวัฒนาการขั้นถัดไป
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          ระบบ API ไม่พบข้อมูลการวิวัฒนาการขั้นถัดไปของ {currentPokemonName}
        </p>
      </section>
    );
  }

  return (
    <section className="panel rounded-[0.5rem] p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            สายวิวัฒนาการ
          </p>
          <h2 className="mt-1 text-xl font-bold text-zinc-100">
            วิวัฒนาการร่างถัดไป
          </h2>
        </div>
        <p className="max-w-xl text-xs leading-relaxed text-zinc-400">
          การ์ดแต่ละใบเชื่อมโยงผ่านระบบ Next.js Link ซึ่งจะอัปเดต URL เพื่อสลับข้อมูลร่างถัดไปในทันทีที่กดเลือก
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {evolutions.map((evolution) => (
          <Link
            key={evolution.id}
            href={buildPokemonHref(evolution.name)}
            className="evo-card group rounded-[0.375rem] border border-zinc-800 bg-zinc-950 p-4 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  ร่างพัฒนาถัดไป
                </p>
                <h3 className="mt-1 text-lg font-bold text-zinc-100">
                  {evolution.name}
                </h3>
                {evolution.classification ? (
                  <p className="mt-1 text-xs text-zinc-400">
                    {evolution.classification}
                  </p>
                ) : null}
              </div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-[0.25rem] bg-zinc-900 border border-zinc-800 text-zinc-300 transition group-hover:bg-zinc-800 group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-[0.25rem] bg-zinc-900 border border-zinc-850 p-4">
              <div className="relative mx-auto aspect-square max-w-[160px]">
                <Image
                  src={evolution.image}
                  alt={evolution.name}
                  fill
                  sizes="(max-width: 768px) 60vw, 160px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {evolution.types.map((type) => (
                <span
                  key={`${evolution.id}-${type}`}
                  className={`rounded-[0.25rem] border px-2 py-0.5 text-xs font-medium ${typeBadgeClassName(
                    type,
                  )}`}>
                  {type}
                </span>
              ))}
            </div>

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-[0.25rem] bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 group-hover:bg-zinc-800 transition">
              <Orbit className="h-3.5 w-3.5" />
              ดูข้อมูล {evolution.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
