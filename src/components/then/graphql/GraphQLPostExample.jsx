import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

// Запрос вынесен, чтобы легко менять при использовании
const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
      title
      body
    }
  }
`;

// Универсальный компонент формы
function GraphQLPostExample() {
  const [formData, setFormData] = useState({ title: "", body: "" });

  const [createPost, { loading, error, data }] = useMutation(CREATE_POST, {
    onCompleted: () => setFormData({ title: "", body: "" }),
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.body.trim()) return;
    createPost({ variables: formData });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a New Post</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          style={styles.textarea}
          name="body"
          placeholder="Body"
          value={formData.body}
          onChange={handleChange}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Submitting..." : "Create"}
        </button>
      </form>

      {error && <p style={styles.error}>❌ Error: {error.message}</p>}
      {data && <p style={styles.success}>✅ Post created successfully!</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "20px",
    marginBottom: "12px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
  },
  textarea: {
    padding: "8px",
    fontSize: "14px",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "14px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "8px",
  },
  success: {
    color: "green",
    marginTop: "8px",
  },
};

export default GraphQLPostExample;
