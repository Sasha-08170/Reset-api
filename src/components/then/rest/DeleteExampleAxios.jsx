// DELETE — Удаление данных

function DeleteExampleAxios() {
    const deletePost = () => {
      axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then(() => console.log("Удалено"))
        .catch((error) => console.error("Ошибка:", error));
    };
  
    return <button onClick={deletePost}>Удалить</button>;
  }

  export default DeleteExampleAxios;
  
/*
  
📚 Рекомендации

Для сложных приложений использавать axios: 

Ошибки (try/catch или .catch()).

Храните базовый URL API в .env файле:

REACT_APP_API_URL=https://example.com/api
  
*/ 