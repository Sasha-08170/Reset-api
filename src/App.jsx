import React from "react";
import GetExample from "./components/then/rest/GetExample";
import GetExampleAxios from "./components/then/rest/GetExampleAxios";
import PostExample from "./components/rest/then/PostExample";
import PostExampleAxios from "./components/then/rest/PatchExampleAxios";
import PutExample from "./components/rest/then/PutExample";
import PutExampleAxios from "./components/then/rest/PutExampleAxios";
import PatchExample from "./components/then/rest/PatchExample";
import PatchExampleAxios from "./components/then/rest/PatchExampleAxios";
import DeleteExample from "./components/then/rest/DeleteExample";
import DeleteExampleAxios from "./components/then/rest/DeleteExampleAxios";

import GraphQLGetExample from "./components/graphql/then/GraphQLGetExample";
import GraphQLPostExample from "./components/graphql/then/GraphQLPostExample";
import GraphQLSubscriptionExample from "./components/then/graphql/GraphQLSubscriptionExample";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Примеры с then в React</h1>

      {/* REST API */}
      <section>
        <h2>REST API — Fetch</h2>
        <h3>GET</h3>
        <GetExample />
        <h3>POST</h3>
        <PostExample />
        <h3>PUT</h3>
        <PutExample />
        <h3>PATCH</h3>
        <PatchExample />
        <h3>DELETE</h3>
        <DeleteExample />
      </section>

      <section>
        <h2>REST API — Axios</h2>
        <h3>GET</h3>
        <GetExampleAxios />
        <h3>POST</h3>
        <PostExampleAxios />
        <h3>PUT</h3>
        <PutExampleAxios />
        <h3>PATCH</h3>
        <PatchExampleAxios />
        <h3>DELETE</h3>
        <DeleteExampleAxios />
      </section>

      {/* GraphQL */}
      <section>
        <h2>GraphQL — Apollo Client</h2>
        <h3>Query (GET)</h3>
        <GraphQLGetExample />
        <h3>Mutation (POST)</h3>
        <GraphQLPostExample />
        <h3>Subscription (Live updates)</h3>
        <GraphQLSubscriptionExample />
      </section>
    </div>
  );
}

export default App;

