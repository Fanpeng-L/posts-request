import { useState, useEffect } from "react";
import axios from "axios";

function Content() {
  const [data, setData] = useState([]);

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Select the Post</h1>
      <select></select>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
