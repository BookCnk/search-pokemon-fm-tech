import { CircleAlert } from "lucide-react";
import Link from "next/link";

type NotFoundStateProps = {
  searchTerm: string;
};

const fallbackPokemon = ["bulbasaur", "charmander", "squirtle", "pikachu"];

export default function NotFoundState({ searchTerm }: NotFoundStateProps) {
  return (
    <section className="error-panel rounded-[0.5rem] p-6 shadow-sm">
      <div className="error-badge inline-flex items-center gap-1.5 rounded-[0.25rem] px-2.5 py-1 text-xs font-semibold">
        <CircleAlert className="h-4 w-4" />
        ไม่พบข้อมูลโปเกมอน
      </div>

      <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#FBF5E0]">
        ไม่พบข้อมูลของ &quot;{searchTerm}&quot; ใน GraphQL API ของโปเกมอน
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#E4D6A9]/85">
        ลองค้นหาด้วยชื่ออื่น ใช้ตัวพิมพ์เล็ก
        หรือเลือกโปเกมอนแนะนำด้านล่าง
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {fallbackPokemon.map((name) => (
          <Link
            key={name}
            href={`/?name=${name}`}
            className="quick-tag rounded-[0.25rem] px-3 py-1.5 text-xs font-medium">
            {name}
          </Link>
        ))}
      </div>
    </section>
  );
}
