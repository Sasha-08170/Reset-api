import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetExampleAxios() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setError(null);
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(res.data);
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
