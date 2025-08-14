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
  const { data, loading, error } = useSubscription(POST_ADDED);

  if (loading) return <p style={styles.info}>⏳ Waiting for new posts...</p>;
  if (error) return <p style={styles.error}>❌ Error: {error.message}</p>;

  if (!data?.postAdded) {
    return <p style={styles.info}>ℹ No new posts yet.</p>;
  }

  const { title, body } = data.postAdded;

  return (
    <div style={styles.container}>
      <h4 style={styles.heading}>🆕 New Post:</h4>
      <p style={styles.title}><strong>{title}</strong></p>
      <p style={styles.body}>{body}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "12px",
    margin: "10px auto",
    maxWidth: "400px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    fontFamily: "sans-serif",
  },
  heading: {
    marginBottom: "6px",
  },
  title: {
    fontSize: "16px",
    margin: "4px 0",
  },
  body: {
    fontSize: "14px",
    color: "#333",
  },
  info: {
    color: "#555",
    fontStyle: "italic",
  },
  error: {
    color: "red",
  },
};

export default GraphQLSubscriptionExample;
