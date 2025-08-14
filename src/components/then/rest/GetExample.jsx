// GET — Получение данных

import React, { useEffect, useState } from "react";

function GetExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Ошибка запроса:", error));
  }, []);

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default GetExample;
