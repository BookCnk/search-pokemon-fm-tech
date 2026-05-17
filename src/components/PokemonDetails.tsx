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
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#978F66]">
        <Icon className="h-3.5 w-3.5" />
        {title}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {values.length > 0 ? (
          values.map((value) => (
            <span
              key={`${title}-${value}`}
              className="rounded-[0.25rem] border border-[#6E472B]/45 bg-[#2F1C11]/55 px-2.5 py-1 text-xs font-medium text-[#E4D6A9]">
              {value}
            </span>
          ))
        ) : (
          <span className="text-xs text-[#C6B990]">{emptyLabel}</span>
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
          <div className="flex items-center justify-center rounded-[0.375rem] border border-[#6E472B]/50 bg-[#2F1C11]/50 p-5 shadow-inner">
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
              <span className="theme-badge rounded-[0.25rem] px-2.5 py-1 text-xs font-medium uppercase tracking-wider">
                โปเกมอนหมายเลข #{pokemon.number}
              </span>
              <span className="rounded-[0.25rem] border border-[#E4D6A9]/20 bg-[#995F2F]/24 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#F7EFD4]">
                ตรงกับคำค้น &quot;{searchTerm}&quot;
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#FBF5E0] sm:text-4xl">
                {pokemon.name}
              </h2>
              {pokemon.classification ? (
                <p className="mt-1 text-sm text-[#C6B990]">
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
                <p className="text-xs font-medium uppercase tracking-wider text-[#978F66]">
                  ส่วนสูงขั้นต่ำ
                </p>
                <p className="mt-2 text-xl font-bold text-[#FBF5E0]">
                  {pokemon.height?.minimum ?? "ไม่ระบุ"}
                </p>
                <p className="mt-0.5 text-xs text-[#B9AB83]">
                  สูงสุด {pokemon.height?.maximum ?? "ไม่ระบุ"}
                </p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-[#978F66]">
                  น้ำหนักขั้นต่ำ
                </p>
                <p className="mt-2 text-xl font-bold text-[#FBF5E0]">
                  {pokemon.weight?.minimum ?? "ไม่ระบุ"}
                </p>
                <p className="mt-0.5 text-xs text-[#B9AB83]">
                  สูงสุด {pokemon.weight?.maximum ?? "ไม่ระบุ"}
                </p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-[#978F66]">
                  Max CP
                </p>
                <p className="mt-2 text-xl font-bold text-[#FBF5E0]">
                  {formatStat(pokemon.maxCP)}
                </p>
                <p className="mt-0.5 text-xs text-[#B9AB83]">ขีดจำกัดพลังต่อสู้สูงสุด</p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-[#978F66]">
                  Max HP
                </p>
                <p className="mt-2 text-xl font-bold text-[#FBF5E0]">
                  {formatStat(pokemon.maxHP)}
                </p>
                <p className="mt-0.5 text-xs text-[#B9AB83]">ขีดจำกัดพลังชีวิตสูงสุด</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="dark-stat-card rounded-[0.375rem] p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#E4D6A9]">
                  <Gauge className="h-4 w-4" />
                  โอกาสหลบหนี
                </div>
                <p className="mt-2 text-2xl font-bold text-[#FBF5E0]">
                  {formatFleeRate(pokemon.fleeRate)}
                </p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#978F66]">
                  <Weight className="h-4 w-4" />
                  เงื่อนไขการวิวัฒนาการ
                </div>
                <p className="mt-2 text-sm font-semibold text-[#E4D6A9]">
                  {pokemon.evolutionRequirements
                    ? `${pokemon.evolutionRequirements.amount} ${pokemon.evolutionRequirements.name}`
                    : "ไม่มีข้อมูลเงื่อนไข"}
                </p>
              </div>
              <div className="stat-card rounded-[0.375rem] p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#978F66]">
                  <Activity className="h-4 w-4" />
                  จำนวนท่าโจมตี
                </div>
                <p className="mt-2 text-sm font-semibold text-[#E4D6A9]">
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
            <p className="text-xs font-semibold uppercase tracking-wider text-[#978F66]">
              ข้อมูลด้านธาตุ
            </p>
            <h2 className="mt-1.5 text-xl font-bold text-[#FBF5E0]">
              การต้านทานและจุดอ่อนทางธาตุ
            </h2>

            <div className="mt-5 space-y-4">
              <InfoList
                title="ธาตุที่ต้านทาน"
                icon={Shield}
                values={pokemon.resistant}
                emptyLabel="ไม่มีข้อมูลการต้านทานธาตุจาก API"
              />
              <InfoList
                title="ธาตุที่แพ้ทาง"
                icon={Sword}
                values={pokemon.weaknesses}
                emptyLabel="ไม่มีข้อมูลจุดอ่อนทางธาตุจาก API"
              />
            </div>
          </div>

          <div className="panel rounded-[0.5rem] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#978F66]">
              ข้อมูลขนาดและรายละเอียดจากระบบ
            </p>
            <div className="mt-4 grid gap-4">
              <div className="info-card rounded-[0.375rem] p-4 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#978F66]">
                  <Activity className="h-3.5 w-3.5" />
                  ช่วงขนาดตัว
                </div>
                <dl className="mt-3.5 grid gap-2.5 text-xs text-[#C6B990]">
                  <div className="flex items-center justify-between rounded-[0.25rem] bg-[#2F1C11]/55 px-3 py-2">
                    <dt>ช่วงส่วนสูง</dt>
                    <dd className="font-semibold text-[#F0E6C6]">
                      {pokemon.height?.minimum ?? "ไม่ระบุ"} ถึง{" "}
                      {pokemon.height?.maximum ?? "ไม่ระบุ"}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between rounded-[0.25rem] bg-[#2F1C11]/55 px-3 py-2">
                    <dt>ช่วงน้ำหนัก</dt>
                    <dd className="font-semibold text-[#F0E6C6]">
                      {pokemon.weight?.minimum ?? "ไม่ระบุ"} ถึง{" "}
                      {pokemon.weight?.maximum ?? "ไม่ระบุ"}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="info-card rounded-[0.375rem] p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#978F66]">
                  ข้อมูลที่ดึงจาก API
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-[#C6B990]">
                  ส่วนนี้สรุปข้อมูลหลักที่ระบบได้รับจาก API เช่น
                  หมายเลขโปเกมอน ภาพอย่างเป็นทางการ ประเภท ขนาด ท่าโจมตี
                  วิวัฒนาการ ค่าสูงสุดของ CP และ HP รวมถึงโอกาสหลบหนี
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
