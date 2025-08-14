export default function PatchExample() {
    const patchPost = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: "Частично обновлено" }),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        console.log("Частично обновлено:", data)
        alert("Частичное обновление выполнено")
      } catch (e) {
        console.error(e)
        alert(`Ошибка при частичном обновлении запроса: ${e instanceof Error ? e.message : "Неизвестная ошибка"}`)
      }
    }
  
    return (
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">PATCH Request Example</h2>
        <button
          onClick={patchPost}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
        >
          Выполнить PATCH запрос
        </button>
      </div>
    )
}