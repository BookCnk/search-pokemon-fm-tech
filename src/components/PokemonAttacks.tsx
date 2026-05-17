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
    <div className="rounded-[1.75rem] border border-white/6 bg-white/3 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <div className="mt-4 space-y-3">
        {attacks.length > 0 ? (
          attacks.map((attack) => (
            <article
              key={`${title}-${attack.name}`}
              className="attack-card rounded-[1.25rem] p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-slate-100">
                    {attack.name}
                  </p>
                  <div
                    className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${typeBadgeClassName(
                      attack.type,
                    )}`}>
                    {attack.type}
                  </div>
                </div>
                <div className="dmg-badge rounded-full px-3 py-1 text-sm font-semibold">
                  {attack.damage} DMG
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="rounded-[1.25rem] border border-dashed border-white/8 bg-white/3 p-4 text-sm leading-7 text-slate-600">
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
    <section className="panel rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-purple-400/70">
            รายการท่าโจมตี
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-100">
            ชุดท่าโจมตีเร็วและท่าโจมตีพิเศษ
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-500">
          ค่าความเสียหาย (DMG) ดึงมาจาก GraphQL API โดยตรง เพื่อความสะดวกในการเปรียบเทียบพลังโจมตี
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
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
