// GET — Получение данных

import React, { useEffect, useState } from "react";
import axios from "axios";

function GetExampleAxios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
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

export default GetExampleAxios;
