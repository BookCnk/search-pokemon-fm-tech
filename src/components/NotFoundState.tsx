import { CircleAlert } from "lucide-react";
import Link from "next/link";

type NotFoundStateProps = {
  searchTerm: string;
};

const fallbackPokemon = ["bulbasaur", "charmander", "squirtle", "pikachu"];

export default function NotFoundState({ searchTerm }: NotFoundStateProps) {
  return (
    <section className="panel rounded-[2rem] border border-red-500/20 p-6 sm:p-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
        <CircleAlert className="h-4 w-4" />
        ไม่พบข้อมูลโปเกมอน
      </div>

      <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-100">
        ไม่พบข้อมูลของ &quot;{searchTerm}&quot; ในระบบ Pokemon GraphQL API
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
        กรุณาลองใช้ชื่ออื่น ค้นหาด้วยตัวพิมพ์เล็ก หรือเลือกดูข้อมูลของโปเกมอนแนะนำด้านล่างนี้
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {fallbackPokemon.map((name) => (
          <Link
            key={name}
            href={`/?name=${name}`}
            className="quick-tag rounded-full px-4 py-2 text-sm font-semibold">
            {name}
          </Link>
        ))}
      </div>
    </section>
  );
}
