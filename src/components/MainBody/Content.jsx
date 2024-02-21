import Context from "./Context";

function Content({ data, selectedPost, showAllPosts }) {
  return (
    <div>
      <div className="">
        {selectedPost && !showAllPosts ? (
          <div>
            <h3>Title: {selectedPost.title}</h3>
            <button className="userId">UserID: {selectedPost.userId}</button>
            <p>
              <b>Content:</b> {selectedPost.body}
            </p>
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
    </div>
  );
}

export default Content;
