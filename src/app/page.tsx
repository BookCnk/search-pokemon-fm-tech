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
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8">
        <section className="w-full">
          <div className="panel pokeball-bg overflow-hidden rounded-[2rem]">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:p-10">
              <div className="space-y-7">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/8 px-4 py-2 text-sm font-semibold text-purple-300">
                  <Sparkles className="h-4 w-4" />
                  Next.js 16 + TypeScript + GraphQL + Apollo Client
                </div>

                <div className="space-y-4">
                  <h1 className="font-display text-5xl font-semibold leading-none tracking-[-0.06em] sm:text-6xl shimmer-text">
                    ค้นหาและตรวจสอบรายละเอียดของโปเกมอนทุกตัวได้ที่นี่
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                    ระบบสืบค้นข้อมูลโปเกมอนที่เชื่อมโยงกับ URL คุยตรงกับ GraphQL API ของโปเกมอนผ่าน Apollo Client และแสดงผลลัพธ์อย่างเป็นระบบระเบียบในทุกหน้าจอ
                  </p>
                </div>

                <SearchForm initialValue={searchTerm} />
              </div>

              <aside className="rounded-[1.75rem] border border-purple-500/15 bg-gradient-to-b from-purple-950/40 to-slate-950/60 p-6 text-slate-200 shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-purple-300/80">
                  ค้นหาผ่าน URL
                </p>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl border border-white/6 bg-white/4 p-4">
                    <p className="text-sm text-slate-400">พารามิเตอร์ที่รองรับ</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <code className="rounded-full bg-white/8 px-3 py-1 text-xs text-purple-200">
                        /?name=bulbasaur
                      </code>
                      <code className="rounded-full bg-white/8 px-3 py-1 text-xs text-purple-200">
                        /?pokemon=bulbasaur
                      </code>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/6 bg-white/4 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <SearchCheck className="h-4 w-4 text-purple-400" />
                      ตัวอย่างด่วน
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {featuredPokemon.map((name) => (
                        <Link
                          key={name}
                          href={`/?name=${name}`}
                          className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400/90 to-yellow-400/90 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:from-amber-300 hover:to-yellow-300 hover:shadow-[0_4px_20px_rgba(250,204,21,0.3)]">
                          {name}
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 text-sm text-slate-400">
                    <div className="rounded-2xl border border-white/6 bg-white/4 p-4">
                      <div className="flex items-center gap-2 font-semibold text-slate-200">
                        <BadgeInfo className="h-4 w-4 text-blue-400" />
                        ข้อมูลที่มีในผลลัพธ์
                      </div>
                      <p className="mt-2 leading-7">
                        การจัดกลุ่มโปเกมอน, การชนะ/แพ้ทางธาตุ, ขนาดส่วนสูงและน้ำหนักต่ำสุด/สูงสุด, ท่าโจมตีเร็ว, ท่าโจมตีพิเศษ, ข้อกำหนดวิวัฒนาการ, Max HP, Max CP และอื่น ๆ อีกมากมาย
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/6 bg-white/4 p-4">
                      <div className="flex items-center gap-2 font-semibold text-slate-200">
                        <Gauge className="h-4 w-4 text-green-400" />
                        ระบบแคช Apollo
                      </div>
                      <p className="mt-2 leading-7">
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
          <section className="panel rounded-[2rem] border border-red-500/20 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">
              ข้อผิดพลาดจาก GraphQL API
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-red-200">
              ไม่สามารถโหลดข้อมูลโปเกมอนได้ในขณะนี้
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-red-300/70 sm:text-base">
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
