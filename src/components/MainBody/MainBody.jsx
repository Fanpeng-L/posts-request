import { useEffect, useState } from "react";
import Content from "./Content";
import Context from "./Context";
import axios from "axios";

function MainBody() {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showAllPosts, setShowAllPosts] = useState(false);

  const [userPosts, setUserPosts] = useState([]);

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

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

  useEffect(() => {
    if (selectedPost) {
      const filteredPosts = data.filter(
        (post) => post.userId === selectedPost.userId
      );
      setUserPosts(filteredPosts);
    } else {
      setUserPosts(data);
    }
  }, [selectedPost, data]);

  const handlePostSelect = (event) => {
    const postId = parseInt(event.target.value);
    const post = data.find((post) => post.id === postId);
    setShowAllPosts(false);
    setSelectedPost(post);
  };

  const handleShowAllButton = () => {
    setShowAllPosts(true);
    setSelectedPost(null); // Clear selected post when showing all posts
  };

  return (
    <div className="mainbody">
      <section className="content">
        <h1>Select the Post with the ID:</h1>
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
          <Content
            data={data}
            selectedPost={selectedPost}
            showAllPosts={showAllPosts}
          />
        </div>
      </section>

      <Context userPosts={userPosts} selectedPost={selectedPost} />
    </div>
  );
}

export default MainBody;
