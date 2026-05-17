export type SearchParamsInput = Record<
  string,
  string | string[] | undefined
> & {
  name?: string | string[] | undefined;
  pokemon?: string | string[] | undefined;
};

export type PokemonDimension = {
  minimum: string | null;
  maximum: string | null;
};

export type PokemonAttackMove = {
  name: string;
  type: string;
  damage: number;
};

export type PokemonAttacks = {
  fast: PokemonAttackMove[];
  special: PokemonAttackMove[];
};

export type PokemonEvolutionRequirement = {
  amount: number;
  name: string;
};

export type PokemonEvolution = {
  id: string;
  number: string;
  name: string;
  image: string;
  classification: string | null;
  types: string[];
};

export type Pokemon = {
  id: string;
  number: string;
  name: string;
  image: string;
  classification: string | null;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number | null;
  maxCP: number | null;
  maxHP: number | null;
  height: PokemonDimension | null;
  weight: PokemonDimension | null;
  evolutionRequirements: PokemonEvolutionRequirement | null;
  attacks: PokemonAttacks | null;
  evolutions: PokemonEvolution[] | null;
};
