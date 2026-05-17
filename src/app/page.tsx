import {
  ArrowUpRight,
  BadgeInfo,
  Gauge,
  Orbit,
  SearchCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import EmptyState from "@/components/EmptyState";
import NotFoundState from "@/components/NotFoundState";
import PokemonDetails from "@/components/PokemonDetails";
import SearchForm from "@/components/SearchForm";
import { getPokemonByName, readPokemonSearchTerm } from "@/lib/pokemon";
import type { SearchParamsInput } from "@/types/pokemon";

type HomePageProps = {
  searchParams: Promise<SearchParamsInput>;
};

const featuredPokemon = ["bulbasaur", "charmander", "squirtle", "pikachu"];

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const searchTerm = readPokemonSearchTerm(params);

  let errorMessage: string | null = null;
  let pokemon = null;

  if (searchTerm) {
    try {
      pokemon = await getPokemonByName(searchTerm);
    } catch {
      errorMessage =
        "ระบบ API โปเกมอนไม่ตอบสนองในเวลาที่กำหนด กรุณาลองใหม่อีกครั้งในภายหลัง";
    }
  }

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6">
        <section className="w-full">
          <div className="panel overflow-hidden rounded-[0.5rem] border border-zinc-800 bg-zinc-900 shadow-sm">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-[0.25rem] border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-400">
                  Next.js 16 + TypeScript + GraphQL + Apollo Client
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
                    ค้นหาและตรวจสอบรายละเอียดของโปเกมอนทุกตัวได้ที่นี่
                  </h1>
                  <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
                    ระบบสืบค้นข้อมูลโปเกมอนที่เชื่อมโยงกับ URL คุยตรงกับ GraphQL API ของโปเกมอนผ่าน Apollo Client และแสดงผลลัพธ์อย่างเป็นระบบระเบียบในทุกหน้าจอ
                  </p>
                </div>

                <SearchForm initialValue={searchTerm} />
              </div>

              <aside className="rounded-[0.5rem] border border-zinc-800 bg-zinc-950 p-6 text-zinc-200 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  ค้นหาผ่าน URL
                </p>
                <div className="mt-4 space-y-4">
                  <div className="rounded-[0.375rem] border border-zinc-800 bg-zinc-900 p-4">
                    <p className="text-xs text-zinc-500">พารามิเตอร์ที่รองรับ</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      <code className="rounded-[0.25rem] bg-zinc-950 border border-zinc-850 px-2 py-0.5 text-xs text-zinc-300">
                        /?name=bulbasaur
                      </code>
                      <code className="rounded-[0.25rem] bg-zinc-950 border border-zinc-850 px-2 py-0.5 text-xs text-zinc-300">
                        /?pokemon=bulbasaur
                      </code>
                    </div>
                  </div>

                  <div className="rounded-[0.375rem] border border-zinc-800 bg-zinc-900 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                      <SearchCheck className="h-4 w-4 text-zinc-400" />
                      ตัวอย่างด่วน
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {featuredPokemon.map((name) => (
                        <Link
                          key={name}
                          href={`/?name=${name}`}
                          className="inline-flex items-center gap-1 rounded-[0.25rem] bg-zinc-950 border border-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition">
                          {name}
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 text-xs text-zinc-400">
                    <div className="rounded-[0.375rem] border border-zinc-800 bg-zinc-900 p-4">
                      <div className="flex items-center gap-2 font-semibold text-zinc-200">
                        <BadgeInfo className="h-4 w-4 text-blue-500" />
                        ข้อมูลที่มีในผลลัพธ์
                      </div>
                      <p className="mt-2 leading-relaxed">
                        การจัดกลุ่มโปเกมอน, การชนะ/แพ้ทางธาตุ, ขนาดส่วนสูงและน้ำหนักต่ำสุด/สูงสุด, ท่าโจมตีเร็ว, ท่าโจมตีพิเศษ, ข้อกำหนดวิวัฒนาการ, Max HP, Max CP และอื่น ๆ อีกมากมาย
                      </p>
                    </div>
                    <div className="rounded-[0.375rem] border border-zinc-800 bg-zinc-900 p-4">
                      <div className="flex items-center gap-2 font-semibold text-zinc-200">
                        <Gauge className="h-4 w-4 text-green-500" />
                        ระบบแคช Apollo
                      </div>
                      <p className="mt-2 leading-relaxed">
                        การค้นหาจะดึงข้อมูลผ่านนโยบาย Cache-First ของ Apollo เป็นหลัก และอัปเดตข้อมูลบน Next.js ฝั่งเซิร์ฟเวอร์อย่างมีประสิทธิภาพ
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {errorMessage ? (
          <section className="panel rounded-[0.5rem] border border-red-900/50 bg-red-950/20 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-400">
              ข้อผิดพลาดจาก GraphQL API
            </p>
            <h2 className="mt-2 text-2xl font-bold text-red-200">
              ไม่สามารถโหลดข้อมูลโปเกมอนได้ในขณะนี้
            </h2>
            <p className="mt-2 text-sm text-red-300/70">
              {errorMessage}
            </p>
          </section>
        ) : searchTerm ? (
          pokemon ? (
            <PokemonDetails pokemon={pokemon} searchTerm={searchTerm} />
          ) : (
            <NotFoundState searchTerm={searchTerm} />
          )
        ) : null}
      </div>
    </main>
  );
}
