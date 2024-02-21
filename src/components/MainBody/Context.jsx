// function Context({ selectedPost, data }) {
//   // console.log(selectedPost.userId);
//   // const postCount = data.filter(
//   //   (post) => post.userId === selectedPost.userId
//   // ).length;

//   return (
//     <section className="context">
//       {selectedPost && (
//         <div>
//           <h4>UserID {selectedPost.userId}</h4>
//           {/* <p>Posts: {postCount}</p> */}
//         </div>
//       )}
//     </section>
//   );
// }

// export default Context;

import React from "react";

function Context({ userPosts, selectedPost }) {
  const posts = userPosts.map((post) => post.id);
  const postsCount = posts.length;
  console.log(postsCount);

  return (
    <section className="context">
      <p className="userid">
        UserID: {selectedPost ? selectedPost.userId : "All"}
      </p>
      <p className="postsCount">Posts count: {postsCount}</p>
    </section>
  );
}

export default Context;
