import React, { useEffect, useState } from "react";

export default function GetExample() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setError(null);
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                setData(json);
            } catch (e) {
                console.error(e);
                setError(e.message);
            }
        };
        fetchPosts();
    }, []);

    if (error) return <p style={{ color: '#b91c1c' }}>Ошибка: {error}</p>;

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
