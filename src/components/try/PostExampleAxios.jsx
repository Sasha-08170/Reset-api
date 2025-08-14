import React from "react";
import axios from "axios";

export default function PostExampleAxios() {
    const createPost = async () => {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: "Новый пост",
                body: "Текст поста",
                userId: 1,
            });
            console.log("Создано:", res.data);
            alert(`Создан пост #${res.data.id}`);
        } catch (e) {
            console.error(e);
            alert(`Ошибка при создании: ${e.message}`);
        }
    };

    return <button onClick={createPost}>Создать пост (Axios)</button>;
};
