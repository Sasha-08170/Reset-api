function PatchExample() {
    const patchPost = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Частично обновлено" }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Частично обновлено:", data))
        .catch((error) => console.error("Ошибка:", error));
    };
  
    return <button onClick={patchPost}>Обновить заголовок</button>;
  }
  
  export default PatchExample;
  