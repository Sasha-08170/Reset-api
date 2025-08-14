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
    const [createPost, { loading }] = useMutation(CREATE_POST);

    const handleSubmit = async () => {
        try {
            const res = await createPost({ variables: { title, body } });
            console.log("Создано:", res.data.createPost);
        } catch (error) {
            console.error("Ошибка GraphQL:", error.message);
        }
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
        </div>
    );
}

export default GraphQLPostExample;
