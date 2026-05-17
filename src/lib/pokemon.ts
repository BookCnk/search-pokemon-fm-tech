import { cache } from "react";
import { getApolloClient } from "@/graphql/apollo-client";
import { GET_POKEMON_BY_NAME } from "@/graphql/queries";
import type { Pokemon, SearchParamsInput } from "@/types/pokemon";

function readQueryValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export function normalizePokemonName(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

export function readPokemonSearchTerm(searchParams: SearchParamsInput) {
  const name = readQueryValue(searchParams.name);
  const pokemon = readQueryValue(searchParams.pokemon);

  return normalizePokemonName(name || pokemon);
}

export function buildPokemonHref(name: string) {
  return `/?name=${encodeURIComponent(normalizePokemonName(name))}`;
}

export function formatStat(value: number | null | undefined) {
  return typeof value === "number" ? value.toLocaleString("en-US") : "Unknown";
}

export function formatFleeRate(value: number | null | undefined) {
  return typeof value === "number"
    ? `${Math.round(value * 100)}%`
    : "Unknown";
}

type PokemonQueryResult = {
  pokemon: Pokemon | null;
};

export const getPokemonByName = cache(async (name: string) => {
  const normalizedName = normalizePokemonName(name);

  if (!normalizedName) {
    return null;
  }

  const client = getApolloClient();
  const { data } = await client.query<PokemonQueryResult>({
    query: GET_POKEMON_BY_NAME,
    variables: { name: normalizedName },
    context: {
      fetchOptions: {
        next: {
          revalidate: 3600,
        },
      },
    },
  });

  return data?.pokemon ?? null;
});
