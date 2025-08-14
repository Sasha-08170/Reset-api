import React from "react";
import axios from "axios";

export default function PutExampleAxios() {
  const updatePost = async () => {
    try {
      const res = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {
        id: 1,
        title: "Обновленный пост",
        body: "Новый текст",
        userId: 1,
      });
      console.log("Обновлено:", res.data);
      alert("Полностью обновлено (Axios)");
    } catch (e) {
      console.error(e);
      alert(`Ошибка при обновлении: ${e.message}`);
    }
  };

  return <button onClick={updatePost}>PUT — Обновить (Axios)</button>;
}
