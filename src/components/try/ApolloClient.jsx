import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

// Заменить эти адреса на реальные для твоего бэкенда
const HTTP_URL = process.env.REACT_APP_GRAPHQL_HTTP || "http://localhost:4000/graphql";
const WS_URL = process.env.REACT_APP_GRAPHQL_WS || "ws://localhost:4000/graphql";

// HTTP линк для query/mutation
const httpLink = new HttpLink({ uri: HTTP_URL });

// WS линк для subscription (если не нужен — удали всё, что связано с GraphQLWsLink, и используй просто httpLink)
const wsLink = new GraphQLWsLink(
    createClient({
        url: WS_URL,
        retryAttempts: 5,
        // Передача токена при необходимости
        connectionParams: async () => {
            try {
                const token = localStorage.getItem("token");
                return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            } catch (e) {
                console.error("WS connection params error:", e);
                return {};
            }
        },
    })
);

// Разделяем трафик: subscriptions -> ws, остальное -> http
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;
