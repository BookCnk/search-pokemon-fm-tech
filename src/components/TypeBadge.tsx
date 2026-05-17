const typeClasses: Record<string, string> = {
  Bug: "bg-[#6D6A44]/25 text-[#F0E6C6] border-[#978F66]/35",
  Dark: "bg-[#622B14]/35 text-[#F0E6C6] border-[#995F2F]/35",
  Dragon: "bg-[#7E6F4D]/25 text-[#F0E6C6] border-[#978F66]/35",
  Electric: "bg-[#E4D6A9]/15 text-[#FBF5E0] border-[#E4D6A9]/30",
  Fairy: "bg-[#A67B64]/25 text-[#FBF5E0] border-[#E4D6A9]/25",
  Fighting: "bg-[#995F2F]/30 text-[#FBF5E0] border-[#E4D6A9]/25",
  Fire: "bg-[#995F2F]/35 text-[#FBF5E0] border-[#E4D6A9]/20",
  Flying: "bg-[#8D8460]/25 text-[#F0E6C6] border-[#C7BA90]/30",
  Ghost: "bg-[#5B4134]/35 text-[#E4D6A9] border-[#978F66]/25",
  Grass: "bg-[#798154]/25 text-[#F0E6C6] border-[#978F66]/30",
  Ground: "bg-[#8B744F]/28 text-[#FBF5E0] border-[#E4D6A9]/22",
  Ice: "bg-[#B8B08A]/20 text-[#FBF5E0] border-[#E4D6A9]/30",
  Normal: "bg-[#7A694E]/25 text-[#F0E6C6] border-[#978F66]/30",
  Poison: "bg-[#79584D]/28 text-[#F0E6C6] border-[#978F66]/28",
  Psychic: "bg-[#A06D57]/25 text-[#FBF5E0] border-[#E4D6A9]/25",
  Rock: "bg-[#746046]/30 text-[#F0E6C6] border-[#978F66]/30",
  Steel: "bg-[#8B846D]/24 text-[#FBF5E0] border-[#E4D6A9]/25",
  Water: "bg-[#6E7B73]/24 text-[#F0E6C6] border-[#978F66]/28",
};

export function typeBadgeClassName(type: string) {
  return typeClasses[type] ?? "bg-[#6B5846]/25 text-[#F0E6C6] border-[#978F66]/30";
}

type TypeBadgeProps = {
  type: string;
};

export default function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <span
      className={`rounded-[0.25rem] border px-2.5 py-0.5 text-xs font-medium ${typeBadgeClassName(
        type,
      )}`}>
      {type}
    </span>
  );
}
