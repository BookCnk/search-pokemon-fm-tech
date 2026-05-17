import { Swords, Zap } from "lucide-react";
import { typeBadgeClassName } from "@/components/TypeBadge";
import type { PokemonAttackMove } from "@/types/pokemon";

type PokemonAttacksProps = {
  fastAttacks: PokemonAttackMove[];
  specialAttacks: PokemonAttackMove[];
};

type AttackListProps = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  attacks: PokemonAttackMove[];
};

function AttackList({ title, icon: Icon, attacks }: AttackListProps) {
  return (
    <div className="rounded-[0.375rem] border border-zinc-800 bg-zinc-950 p-4 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <div className="mt-3.5 space-y-2.5">
        {attacks.length > 0 ? (
          attacks.map((attack) => (
            <article
              key={`${title}-${attack.name}`}
              className="attack-card rounded-[0.25rem] p-3.5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-zinc-100">
                    {attack.name}
                  </p>
                  <div
                    className={`mt-1.5 inline-flex rounded-[0.25rem] border px-2 py-0.5 text-xs font-medium ${typeBadgeClassName(
                      attack.type,
                    )}`}>
                    {attack.type}
                  </div>
                </div>
                <div className="dmg-badge rounded-[0.25rem] px-2.5 py-0.5 text-xs font-semibold">
                  {attack.damage} DMG
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="rounded-[0.25rem] border border-dashed border-zinc-800 bg-zinc-900/50 p-4 text-xs text-zinc-500">
            ไม่มีข้อมูลท่าโจมตีในหมวดหมู่นี้
          </p>
        )}
      </div>
    </div>
  );
}

export default function PokemonAttacks({
  fastAttacks,
  specialAttacks,
}: PokemonAttacksProps) {
  return (
    <section className="panel rounded-[0.5rem] p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            รายการท่าโจมตี
          </p>
          <h2 className="mt-1 text-xl font-bold text-zinc-100">
            ชุดท่าโจมตีเร็วและท่าโจมตีพิเศษ
          </h2>
        </div>
        <p className="max-w-xl text-xs leading-relaxed text-zinc-400">
          ค่าความเสียหาย (DMG) ดึงมาจาก GraphQL API โดยตรง เพื่อความสะดวกในการเปรียบเทียบพลังโจมตี
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <AttackList title="ท่าโจมตีเร็ว" icon={Zap} attacks={fastAttacks} />
        <AttackList
          title="ท่าโจมตีพิเศษ"
          icon={Swords}
          attacks={specialAttacks}
        />
      </div>
    </section>
  );
}
