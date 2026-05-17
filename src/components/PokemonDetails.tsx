import { Activity, Gauge, Shield, Sparkles, Sword, Weight } from "lucide-react";
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
    <article className="info-card rounded-[1.5rem] p-5">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {values.length > 0 ? (
          values.map((value) => (
            <span
              key={`${title}-${value}`}
              className="rounded-full bg-white/6 border border-white/8 px-3 py-1.5 text-sm font-medium text-slate-300">
              {value}
            </span>
          ))
        ) : (
          <span className="text-sm leading-7 text-slate-600">{emptyLabel}</span>
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
    <div className="space-y-8">
      <section className="panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:p-10">
          <div className="rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.18),transparent_46%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_42%),linear-gradient(180deg,rgba(22,22,34,0.9)_0%,rgba(18,18,28,0.7)_100%)] border border-white/6 p-5">
            <div className="pokemon-float relative mx-auto aspect-square max-w-[320px]">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                fill
                preload
                sizes="(max-width: 768px) 80vw, 320px"
                className="object-contain drop-shadow-[0_28px_38px_rgba(167,139,250,0.2)]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                โปเกมอนหมายเลข #{pokemon.number}
              </span>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
                ตรงกับคำค้นหา &quot;{searchTerm}&quot;
              </span>
            </div>

            <div>
              <h2 className="font-display text-5xl font-semibold tracking-[-0.06em] gradient-text sm:text-6xl">
                {pokemon.name}
              </h2>
              {pokemon.classification ? (
                <p className="mt-3 text-lg text-slate-400">
                  {pokemon.classification}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2">
              {pokemon.types.map((type) => (
                <TypeBadge key={`${pokemon.id}-${type}`} type={type} />
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="stat-card rounded-[1.5rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  ส่วนสูง
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">
                  {pokemon.height?.minimum ?? "ไม่ระบุ"}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  สูงสุด {pokemon.height?.maximum ?? "ไม่ระบุ"}
                </p>
              </div>
              <div className="stat-card rounded-[1.5rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  น้ำหนัก
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">
                  {pokemon.weight?.minimum ?? "ไม่ระบุ"}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  สูงสุด {pokemon.weight?.maximum ?? "ไม่ระบุ"}
                </p>
              </div>
              <div className="stat-card rounded-[1.5rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Max CP
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">
                  {formatStat(pokemon.maxCP)}
                </p>
                <p className="mt-1 text-sm text-slate-500">ขีดจำกัดพลังต่อสู้สูงสุด</p>
              </div>
              <div className="stat-card rounded-[1.5rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Max HP
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">
                  {formatStat(pokemon.maxHP)}
                </p>
                <p className="mt-1 text-sm text-slate-500">ขีดจำกัดพลังชีวิตสูงสุด</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="dark-stat-card rounded-[1.5rem] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  <Gauge className="h-4 w-4" />
                  อัตราการหนี
                </div>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {formatFleeRate(pokemon.fleeRate)}
                </p>
              </div>
              <div className="stat-card rounded-[1.5rem] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <Weight className="h-4 w-4" />
                  ค่าใช้จ่ายวิวัฒนาการ
                </div>
                <p className="mt-3 text-lg font-semibold text-slate-200">
                  {pokemon.evolutionRequirements
                    ? `${pokemon.evolutionRequirements.amount} ${pokemon.evolutionRequirements.name}`
                    : "ไม่มีเงื่อนไขกำหนด"}
                </p>
              </div>
              <div className="stat-card rounded-[1.5rem] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <Sparkles className="h-4 w-4" />
                  จำนวนท่าโจมตี
                </div>
                <p className="mt-3 text-lg font-semibold text-slate-200">
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
          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-400/70">
              ตารางความได้เปรียบธาตุ
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-100">
              การต้านทานและจุดอ่อนทางธาตุ
            </h2>

            <div className="mt-6 space-y-4">
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

          <div className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-400/70">
              สถิติเชิงขนาดและระบบ
            </p>
            <div className="mt-5 grid gap-4">
              <div className="info-card rounded-[1.5rem] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <Activity className="h-4 w-4" />
                  สัดส่วนและมิติตัว
                </div>
                <dl className="mt-4 grid gap-3 text-sm text-slate-400">
                  <div className="flex items-center justify-between rounded-2xl bg-white/3 px-4 py-3">
                    <dt>ช่วงส่วนสูง</dt>
                    <dd className="font-semibold text-slate-200">
                      {pokemon.height?.minimum ?? "ไม่ระบุ"} ถึง{" "}
                      {pokemon.height?.maximum ?? "ไม่ระบุ"}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/3 px-4 py-3">
                    <dt>ช่วงน้ำหนัก</dt>
                    <dd className="font-semibold text-slate-200">
                      {pokemon.weight?.minimum ?? "ไม่ระบุ"} ถึง{" "}
                      {pokemon.weight?.maximum ?? "ไม่ระบุ"}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="info-card rounded-[1.5rem] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  ขอบเขตการดึงข้อมูลจาก API
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
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
