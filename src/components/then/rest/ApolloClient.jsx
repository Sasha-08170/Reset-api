import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// Базовый URL GraphQL API (можно вынести в .env)
const GRAPHQL_URI = process.env.REACT_APP_GRAPHQL_URI || "https://example.com/graphql";

// Логирование ошибок
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// HTTP-ссылка
const httpLink = new HttpLink({ uri: GRAPHQL_URI });

// Apollo Client с поддержкой цепочек линков
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === "development",
});

export default client;
