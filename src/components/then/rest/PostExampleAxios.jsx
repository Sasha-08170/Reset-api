import axios from "axios";

function PostExampleAxios() {
  const createPost = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Новый пост",
      body: "Текст поста",
      userId: 1,
    })
    .then((response) => console.log("Создано:", response.data))
    .catch((error) => console.error("Ошибка:", error));
  };

  return <button onClick={createPost}>Создать пост</button>;
}

export default PostExampleAxios;