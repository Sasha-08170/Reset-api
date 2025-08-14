import React from "react";

export default function PostExample() {
    const createPost = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: "Новый пост", body: "Текст поста", userId: 1 }),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            console.log("Создано:", data);
            alert(`Создан пост #${data.id}`);
        } catch (e) {
            console.error(e);
            alert(`Ошибка при создании: ${e.message}`);
        }
    };

    return <button onClick={createPost}>Создать пост</button>;
}
