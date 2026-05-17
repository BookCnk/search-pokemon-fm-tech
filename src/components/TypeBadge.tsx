const typeClasses: Record<string, string> = {
  Bug: "bg-lime-500/15 text-lime-300 border-lime-500/25",
  Dark: "bg-slate-500/15 text-slate-200 border-slate-400/25",
  Dragon: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
  Electric: "bg-yellow-500/15 text-yellow-300 border-yellow-500/25",
  Fairy: "bg-pink-500/15 text-pink-300 border-pink-500/25",
  Fighting: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  Fire: "bg-rose-500/15 text-rose-300 border-rose-500/25",
  Flying: "bg-sky-500/15 text-sky-300 border-sky-500/25",
  Ghost: "bg-violet-500/15 text-violet-300 border-violet-500/25",
  Grass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  Ground: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  Ice: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  Normal: "bg-stone-500/15 text-stone-300 border-stone-400/25",
  Poison: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/25",
  Psychic: "bg-pink-500/15 text-pink-300 border-pink-500/25",
  Rock: "bg-stone-500/15 text-stone-200 border-stone-400/25",
  Steel: "bg-slate-400/15 text-slate-200 border-slate-400/25",
  Water: "bg-blue-500/15 text-blue-300 border-blue-500/25",
};

export function typeBadgeClassName(type: string) {
  return typeClasses[type] ?? "bg-slate-500/15 text-slate-300 border-slate-400/25";
}

type TypeBadgeProps = {
  type: string;
};

export default function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <span
      className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${typeBadgeClassName(
        type,
      )}`}>
      {type}
    </span>
  );
}
