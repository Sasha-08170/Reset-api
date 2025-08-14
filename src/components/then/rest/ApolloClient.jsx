import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://example.com/graphql", // URL твоего GraphQL API
  cache: new InMemoryCache(),
});

export default client;
