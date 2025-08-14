//PUT — Полное обновление данных 

function PutExampleAxios() {
    const updatePost = () => {
      axios.put("https://jsonplaceholder.typicode.com/posts/1", {
        id: 1,
        title: "Обновленный пост",
        body: "Новый текст",
        userId: 1,
      })
      .then((response) => console.log("Обновлено:", response.data))
      .catch((error) => console.error("Ошибка:", error));
    };
  
    return <button onClick={updatePost}>Обновить</button>;
  }

  export default PutExampleAxios;
  