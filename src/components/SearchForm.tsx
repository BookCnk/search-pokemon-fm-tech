"use client";

import { useEffect, useState, useTransition } from "react";
import { History, LoaderCircle, Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SearchFormProps = {
  initialValue: string;
};

const RECENT_SEARCHES_KEY = "search-pokemon-fm-tech:recent-searches";
const sampleNames = ["bulbasaur", "charmander", "squirtle", "pikachu"];

function normalizePokemonName(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function readRecentSearches() {
  try {
    const stored = window.localStorage.getItem(RECENT_SEARCHES_KEY);
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((value): value is string => typeof value === "string");
  } catch {
    return [];
  }
}

export default function SearchForm({ initialValue }: SearchFormProps) {
  const [draft, setDraft] = useState(initialValue);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setDraft(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setRecentSearches(readRecentSearches());
  }, []);

  const writeRecentSearches = (value: string) => {
    setRecentSearches((current) => {
      const nextSearches = [value, ...current.filter((item) => item !== value)]
        .slice(0, 6);

      try {
        window.localStorage.setItem(
          RECENT_SEARCHES_KEY,
          JSON.stringify(nextSearches),
        );
      } catch {
        // Ignore localStorage write issues and keep the search working.
      }

      return nextSearches;
    });
  };

  const removeRecentSearch = (value: string) => {
    setRecentSearches((current) => {
      const nextSearches = current.filter((item) => item !== value);

      try {
        window.localStorage.setItem(
          RECENT_SEARCHES_KEY,
          JSON.stringify(nextSearches),
        );
      } catch {
        // Ignore localStorage write issues and keep the search working.
      }

      return nextSearches;
    });
  };

  const pushSearch = (rawValue: string) => {
    const normalizedValue = normalizePokemonName(rawValue);
    const params = new URLSearchParams(searchParams.toString());

    if (!normalizedValue) {
      params.delete("name");
      params.delete("pokemon");
      const nextUrl = params.toString() ? `${pathname}?${params}` : pathname;

      startTransition(() => {
        router.push(nextUrl);
      });

      return;
    }

    params.set("name", normalizedValue);
    params.delete("pokemon");
    writeRecentSearches(normalizedValue);

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="space-y-4">
      <form
        className="panel rounded-[0.5rem] p-5 shadow-sm"
        onSubmit={(event) => {
          event.preventDefault();
          pushSearch(draft);
        }}>
        <label
          htmlFor="pokemon-name"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#978F66]">
          ค้นหาโปเกมอน
        </label>
        <div className="flex flex-col gap-2.5 md:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#978F66]" />
            <input
              id="pokemon-name"
              name="pokemon-name"
              value={draft}
              onChange={(event) => {
                setDraft(event.target.value);
              }}
              placeholder="ลองพิมพ์ bulbasaur, charmander, squirtle หรือ pikachu..."
              className="search-glow h-11 w-full rounded-[0.375rem] border border-[#7A5133] bg-[#2B190F]/80 pl-10 pr-4 text-sm text-[#FBF5E0] outline-none transition placeholder:text-[#A79870] focus:border-[#E4D6A9]"
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="btn-primary inline-flex h-11 items-center justify-center gap-2 rounded-[0.375rem] px-5 text-sm font-medium transition">
            {isPending ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
            {isPending ? "กำลังค้นหา..." : "ค้นหา"}
          </button>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        {sampleNames.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => {
              setDraft(name);
              pushSearch(name);
            }}
            className="quick-tag rounded-[0.375rem] px-2.5 py-1 text-xs font-medium transition">
            {name}
          </button>
        ))}
      </div>

      {recentSearches.length > 0 ? (
        <div className="panel rounded-[0.5rem] p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#978F66]">
            <History className="h-3.5 w-3.5" />
            ประวัติการค้นหาล่าสุด
          </div>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {recentSearches.map((name) => (
              <div
                key={name}
                className="recent-chip inline-flex items-center rounded-[0.375rem] pr-1 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setDraft(name);
                    pushSearch(name);
                  }}
                  className="px-2.5 py-1 font-medium text-[#E4D6A9] transition hover:text-[#FBF5E0]">
                  {name}
                </button>
                <button
                  type="button"
                  aria-label={`ลบ ${name} ออกจากประวัติการค้นหาล่าสุด`}
                  onClick={() => {
                    removeRecentSearch(name);
                  }}
                  className="rounded-[0.25rem] p-0.5 text-[#A79870] transition hover:bg-[#6E472B]/45 hover:text-[#E4D6A9]">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
