import { Activity, Gauge, Shield, Sword, Weight } from "lucide-react";
import Image from "next/image";
import PokemonAttacks from "@/components/PokemonAttacks";
import PokemonEvolutions from "@/components/PokemonEvolutions";
import TypeBadge from "@/components/TypeBadge";
import { formatFleeRate, formatStat } from "@/lib/pokemon";
import type { Pokemon } from "@/types/pokemon";

type PokemonDetailsProps = {
  pokemon: Pokemon;
  searchTerm: string;
};

type InfoListProps = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  values: string[];
  emptyLabel: string;
};

function InfoList({ title, icon: Icon, values, emptyLabel }: InfoListProps) {
  return (
    <article className="info-card rounded-[0.375rem] p-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        <Icon className="h-3.5 w-3.5" />
        {title}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {values.length > 0 ? (
          values.map((value) => (
            <span
              key={`${title}-${value}`}
              className="rounded-[0.25rem] bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300">
              {value}
            </span>
          ))
        ) : (
          <span className="text-xs text-zinc-650">{emptyLabel}</span>
        )}
      </div>
    </article>
  );
}

export default function PokemonDetails({
  pokemon,
  searchTerm,
}: PokemonDetailsProps) {
  const fastAttacks = pokemon.attacks?.fast ?? [];
  const specialAttacks = pokemon.attacks?.special ?? [];
  const evolutions = pokemon.evolutions ?? [];

  return (
    <div className="space-y-6">
      <section className="panel overflow-hidden rounded-[0.5rem] shadow-sm">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div className="rounded-[0.375rem] border border-zinc-800 bg-zinc-950 p-5 flex items-center justify-center shadow-inner">
            <div className="relative aspect-square w-full max-w-[240px]">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 240px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-[0.25rem] border border-zinc-850 bg-zinc-950 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                โปเกมอนหมายเลข #{pokemon.number}
              </span>
              <span className="rounded-[0.25rem] border border-emerald-950 bg-emerald-950/20 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-emerald-450">
                ตรงกับคำค้นหา &quot;{searchTerm}&quot;
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {pokemon.name}
              </h2>
              {pokemon.classification ? (
                <p className="mt-1 text-sm text-zinc-400">
                  {pokemon.classification}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {pokemon.types.map((type) => (
                <TypeBadge key={`${pokemon.id}-${type}`} type={type} />
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  ส่วนสูง
                </p>
                <p className="mt-2 text-xl font-bold text-zinc-100">
                  {pokemon.height?.minimum ?? "ไม่ระบุ"}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  สูงสุด {pokemon.height?.maximum ?? "ไม่ระบุ"}
                </p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  น้ำหนัก
                </p>
                <p className="mt-2 text-xl font-bold text-zinc-100">
                  {pokemon.weight?.minimum ?? "ไม่ระบุ"}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  สูงสุด {pokemon.weight?.maximum ?? "ไม่ระบุ"}
                </p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Max CP
                </p>
                <p className="mt-2 text-xl font-bold text-zinc-100">
                  {formatStat(pokemon.maxCP)}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">ขีดจำกัดพลังต่อสู้สูงสุด</p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Max HP
                </p>
                <p className="mt-2 text-xl font-bold text-zinc-100">
                  {formatStat(pokemon.maxHP)}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">ขีดจำกัดพลังชีวิตสูงสุด</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="dark-stat-card rounded-[0.375rem] p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-zinc-400">
                  <Gauge className="h-4 w-4" />
                  อัตราการหนี
                </div>
                <p className="mt-2 text-2xl font-bold text-white">
                  {formatFleeRate(pokemon.fleeRate)}
                </p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  <Weight className="h-4 w-4" />
                  ค่าใช้จ่ายวิวัฒนาการ
                </div>
                <p className="mt-2 text-sm font-semibold text-zinc-300">
                  {pokemon.evolutionRequirements
                    ? `${pokemon.evolutionRequirements.amount} ${pokemon.evolutionRequirements.name}`
                    : "ไม่มีเงื่อนไขกำหนด"}
                </p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  <Activity className="h-4 w-4" />
                  จำนวนท่าโจมตี
                </div>
                <p className="mt-2 text-sm font-semibold text-zinc-300">
                  ท่าเร็ว {fastAttacks.length} / ท่าพิเศษ {specialAttacks.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="space-y-6">
          <PokemonAttacks
            fastAttacks={fastAttacks}
            specialAttacks={specialAttacks}
          />
          <PokemonEvolutions
            currentPokemonName={pokemon.name}
            evolutions={evolutions}
          />
        </div>

        <div className="space-y-6">
          <div className="panel rounded-[0.5rem] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              ตารางความได้เปรียบธาตุ
            </p>
            <h2 className="mt-1.5 text-xl font-bold text-zinc-100">
              การต้านทานและจุดอ่อนทางธาตุ
            </h2>

            <div className="mt-5 space-y-4">
              <InfoList
                title="การต้านทานธาตุ"
                icon={Shield}
                values={pokemon.resistant}
                emptyLabel="ไม่มีข้อมูลการต้านทานธาตุจาก API"
              />
              <InfoList
                title="จุดอ่อน (แพ้ทางธาตุ)"
                icon={Sword}
                values={pokemon.weaknesses}
                emptyLabel="ไม่มีข้อมูลจุดอ่อนทางธาตุจาก API"
              />
            </div>
          </div>

          <div className="panel rounded-[0.5rem] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              สถิติเชิงขนาดและระบบ
            </p>
            <div className="mt-4 grid gap-4">
              <div className="info-card rounded-[0.375rem] p-4 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  <Activity className="h-3.5 w-3.5" />
                  สัดส่วนและมิติตัว
                </div>
                <dl className="mt-3.5 grid gap-2.5 text-xs text-zinc-400">
                  <div className="flex items-center justify-between rounded-[0.25rem] bg-zinc-950 px-3 py-2">
                    <dt>ช่วงส่วนสูง</dt>
                    <dd className="font-semibold text-zinc-200">
                      {pokemon.height?.minimum ?? "ไม่ระบุ"} ถึง{" "}
                      {pokemon.height?.maximum ?? "ไม่ระบุ"}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between rounded-[0.25rem] bg-zinc-950 px-3 py-2">
                    <dt>ช่วงน้ำหนัก</dt>
                    <dd className="font-semibold text-zinc-200">
                      {pokemon.weight?.minimum ?? "ไม่ระบุ"} ถึง{" "}
                      {pokemon.weight?.maximum ?? "ไม่ระบุ"}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="info-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  ขอบเขตการดึงข้อมูลจาก API
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                  ส่วนนี้แสดงผลข้อมูลคุณลักษณะทั้งหมดที่สมบูรณ์จาก API ได้แก่ รหัสโปเกมอน, ภาพอาร์ตเวิร์กอย่างเป็นทางการ, ขนาดน้ำหนักส่วนสูง, การแบ่งสายพันธุ์, การแพ้ชนะทางธาตุ, รายการท่าโจมตี, ขั้นตอนการวิวัฒนาการ, พลังโจมตี CP สูงสุด, พลังชีวิต HP สูงสุด และโอกาสหลบหนี
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
