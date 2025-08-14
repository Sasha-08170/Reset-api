import React from "react";
import { gql, useSubscription } from "@apollo/client";

const POST_ADDED = gql`
  subscription OnPostAdded {
    postAdded {
      id
      title
      body
    }
  }
`;

function GraphQLSubscriptionExample() {
  const { data, loading } = useSubscription(POST_ADDED);

  if (loading) return <p>Ожидание событий...</p>;

  return (
    <div>
      <h4>Новый пост:</h4>
      <p>{data.postAdded.title}</p>
    </div>
  );
}

export default GraphQLSubscriptionExample;
