import { CircleAlert } from "lucide-react";
import Link from "next/link";

type NotFoundStateProps = {
  searchTerm: string;
};

const fallbackPokemon = ["bulbasaur", "charmander", "squirtle", "pikachu"];

export default function NotFoundState({ searchTerm }: NotFoundStateProps) {
  return (
    <section className="panel rounded-[0.5rem] border border-red-950 bg-red-950/20 p-6 shadow-sm">
      <div className="inline-flex items-center gap-1.5 rounded-[0.25rem] border border-red-900 bg-red-950/40 px-2.5 py-1 text-xs font-semibold text-red-300">
        <CircleAlert className="h-4 w-4" />
        ไม่พบข้อมูลโปเกมอน
      </div>

      <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">
        ไม่พบข้อมูลของ &quot;{searchTerm}&quot; ในระบบ Pokemon GraphQL API
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        กรุณาลองใช้ชื่ออื่น ค้นหาด้วยตัวพิมพ์เล็ก หรือเลือกดูข้อมูลของโปเกมอนแนะนำด้านล่างนี้
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
