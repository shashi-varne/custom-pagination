import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              {post.id} {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
