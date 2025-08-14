// POST — Отправка данных

function PostExample() {
  const createPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Новый пост",
        body: "Текст поста",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Создано:", data))
      .catch((error) => console.error("Ошибка:", error));
  };

  return <button onClick={createPost}>Создать пост</button>;
}

export default PostExample;