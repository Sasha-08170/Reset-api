// PUT — Полное обновление данных

function PutExample() {
    const updatePost = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 1,
          title: "Обновленный пост",
          body: "Новый текст",
          userId: 1,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Обновлено:", data))
        .catch((error) => console.error("Ошибка:", error));
    };
  
    return <button onClick={updatePost}>Обновить</button>;
  }
  
  export default PutExample;
