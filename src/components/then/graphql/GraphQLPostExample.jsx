import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
      title
      body
    }
  }
`;

function GraphQLPostExample() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createPost, { loading, error }] = useMutation(CREATE_POST);

  const handleSubmit = () => {
    createPost({ variables: { title, body } })
      .then((res) => console.log("Создано:", res.data.createPost))
      .catch((err) => console.error("Ошибка:", err));
  };

  return (
    <div>
      <input
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Текст"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Отправка..." : "Создать"}
      </button>
      {error && <p>Ошибка: {error.message}</p>}
    </div>
  );
}

export default GraphQLPostExample;
