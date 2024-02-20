import { useState, useEffect } from "react";
import axios from "axios";

function Content() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showAllPosts, setShowAllPosts] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePostSelect = (event) => {
    const postId = parseInt(event.target.value);
    // find the post id with the selected option id
    const post = data.find((post) => post.id === postId);
    setShowAllPosts(false);
    console.log(post);
    setSelectedPost(post);
  };

  const handleShowAllButton = () => {
    setShowAllPosts(true);
  };

  return (
    <div>
      <h1>Select the Post based on UserID:</h1>
      <div className="select-box">
        <select onChange={handlePostSelect}>
          {[...Array(100)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              Post {index + 1}
            </option>
          ))}
        </select>
        <button className="showAll-btn" onClick={handleShowAllButton}>
          Show All Posts
        </button>
      </div>

      {selectedPost && !showAllPosts ? (
        <div>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.body}</p>
        </div>
      ) : (
        <div>
          <h2>Posts</h2>
          <ul>
            {data.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Content;
