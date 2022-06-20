import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://dfl5mg39.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});
