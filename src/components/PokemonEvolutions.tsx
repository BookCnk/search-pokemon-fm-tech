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
        <p className="text-xs font-semibold uppercase tracking-wider text-[#978F66]">
          สายวิวัฒนาการ
        </p>
        <h2 className="mt-1 text-xl font-bold text-[#FBF5E0]">
          ไม่พบข้อมูลวิวัฒนาการขั้นถัดไป
        </h2>
        <p className="mt-2 text-sm text-[#C6B990]">
          GraphQL API ไม่มีข้อมูลวิวัฒนาการขั้นถัดไปของ{" "}
          {currentPokemonName}
        </p>
      </section>
    );
  }

  return (
    <section className="panel rounded-[0.5rem] p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#978F66]">
            สายวิวัฒนาการ
          </p>
          <h2 className="mt-1 text-xl font-bold text-[#FBF5E0]">
            วิวัฒนาการขั้นถัดไป
          </h2>
        </div>
        <p className="max-w-xl text-xs leading-relaxed text-[#C6B990]">
          การ์ดแต่ละใบเชื่อมโยงด้วย Next.js Link เพื่ออัปเดต URL
          และสลับข้อมูลโปเกมอนที่เลือกได้ทันที
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {evolutions.map((evolution) => (
          <Link
            key={evolution.id}
            href={buildPokemonHref(evolution.name)}
            className="evo-card group rounded-[0.375rem] p-4 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#978F66]">
                  ร่างถัดไป
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#FBF5E0]">
                  {evolution.name}
                </h3>
                {evolution.classification ? (
                  <p className="mt-1 text-xs text-[#C6B990]">
                    {evolution.classification}
                  </p>
                ) : null}
              </div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-[0.25rem] border border-[#6E472B]/50 bg-[#3D2618]/55 text-[#E4D6A9] transition group-hover:bg-[#6E472B]/45 group-hover:text-[#FBF5E0]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-[0.25rem] border border-[#6E472B]/45 bg-[#2F1C11]/45 p-4">
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

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-[0.25rem] border border-[#6E472B]/50 bg-[#3D2618]/55 px-2.5 py-1 text-xs font-medium text-[#E4D6A9] transition group-hover:bg-[#6E472B]/45">
              <Orbit className="h-3.5 w-3.5" />
              ดูรายละเอียด {evolution.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
