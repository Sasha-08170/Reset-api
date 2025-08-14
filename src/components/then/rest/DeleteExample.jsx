// DELETE — Удаление данных

function DeleteExample() {
    const deletePost = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      })
        .then(() => console.log("Удалено"))
        .catch((error) => console.error("Ошибка:", error));
    };
  
    return <button onClick={deletePost}>Удалить</button>;
  }

  export default DeleteExample;
  