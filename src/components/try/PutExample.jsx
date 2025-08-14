import React from "react";

export default function PutExample() {
  const updatePost = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: 1, title: "Обновленный пост", body: "Новый текст", userId: 1 }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      console.log("Обновлено:", data);
      alert("Полностью обновлено");
    } catch (e) {
      console.error(e);
      alert(`Ошибка при обновлении: ${e.message}`);
    }
  };

  return <button onClick={updatePost}>PUT — Обновить пост</button>;
}
