// PATCH — Частичное обновление данных

function PatchExampleAxios() {
    const patchPost = () => {
      axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
        title: "Частично обновлено",
      })
      .then((response) => console.log("Частично обновлено:", response.data))
      .catch((error) => console.error("Ошибка:", error));
    };
  
    return <button onClick={patchPost}>Обновить заголовок</button>;
  }
  
  export default PatchExampleAxios;
