import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { cache } from "react";

const endpoint =
  process.env.POKEMON_GRAPHQL_ENDPOINT ??
  "https://graphql-pokemon2.vercel.app/";

export const getApolloClient = cache(
  () =>
    new ApolloClient({
      link: new HttpLink({
        uri: endpoint,
        fetch,
      }),
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              pokemon: {
                keyArgs: ["name"],
              },
            },
          },
        },
      }),
      defaultOptions: {
        query: {
          fetchPolicy: "cache-first",
          errorPolicy: "all",
        },
        watchQuery: {
          fetchPolicy: "cache-first",
          errorPolicy: "all",
        },
      },
    }),
);
