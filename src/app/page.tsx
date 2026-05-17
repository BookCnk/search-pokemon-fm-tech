import { ArrowUpRight, BadgeInfo, Gauge, SearchCheck } from "lucide-react";
import Link from "next/link";
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
        "ระบบ GraphQL API ของโปเกมอนไม่ตอบสนองภายในเวลาที่กำหนด กรุณาลองใหม่อีกครั้งในภายหลัง";
    }
  }

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6">
        <section className="w-full">
          <div className="panel overflow-hidden rounded-[0.5rem] shadow-sm">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tight text-[#FBF5E0] sm:text-4xl">
                    ค้นหาและดูรายละเอียดโปเกมอนได้ทุกตัวในที่เดียว
                  </h1>
                  <p className="max-w-2xl text-sm leading-relaxed text-[#C6B990]">
                    ระบบค้นหานี้เชื่อมคำค้นกับ URL โดยตรง ดึงข้อมูลจาก GraphQL
                    API ของโปเกมอนผ่าน Apollo Client
                    และสรุปผลให้อ่านง่ายบนทุกขนาดหน้าจอ
                  </p>
                </div>
                <SearchForm initialValue={searchTerm} />
              </div>
            </div>
          </div>
        </section>

        {errorMessage ? (
          <section className="error-panel rounded-[0.5rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E4D6A9]">
              ข้อผิดพลาดจาก GraphQL API
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#FBF5E0]">
              ยังไม่สามารถโหลดข้อมูลโปเกมอนได้ในขณะนี้
            </h2>
            <p className="mt-2 text-sm text-[#E4D6A9]/80">{errorMessage}</p>
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
