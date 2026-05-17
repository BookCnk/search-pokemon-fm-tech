# search-pokemon-fm-tech

A Pokemon search application built with Next.js 16, TypeScript, Apollo Client, and GraphQL.

## Features

- Search Pokemon by name from the UI
- Read search state from `?name=` or `?pokemon=` URL query params
- Display Pokemon artwork, classification, types, height, weight, max HP, max CP, flee rate, resistances, weaknesses, attacks, and evolution requirements
- Navigate between evolutions with Next.js routing
- Handle missing Pokemon with a clean not-found state
- Store recent searches in `localStorage`

## Stack

- Next.js 16 App Router
- TypeScript
- Apollo Client
- Pokemon GraphQL API: `https://graphql-pokemon2.vercel.app/`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Example URLs:

- `http://localhost:3000/?name=bulbasaur`
- `http://localhost:3000/?pokemon=pikachu`

## Environment

The app works out of the box with the public Pokemon GraphQL endpoint.

If you want to override it, copy `.env.example` and set:

```bash
POKEMON_GRAPHQL_ENDPOINT="https://graphql-pokemon2.vercel.app/"
```

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy

The project is ready for Vercel deployment.

Recommended submission flow:

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Verify the public deployment in Incognito Mode.
4. Submit the GitHub repo URL and Vercel URL.
