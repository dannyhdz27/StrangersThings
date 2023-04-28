import React, { useState } from 'react';

function PostList({ posts }) {
  const [toggledPosts, setToggledPosts] = useState([]);

  const togglePost = (idx) => {
    const newToggledPosts = [...toggledPosts];
    if (newToggledPosts.includes(idx)) {
      newToggledPosts.splice(newToggledPosts.indexOf(idx), 1);
    } else {
      newToggledPosts.push(idx);
    }
    setToggledPosts(newToggledPosts);
  };

  return (
    <div className="allPosts">
      {posts.map((post, idx) => {
        const isToggled = toggledPosts.includes(idx);
        return (
          <div className="postCard" key={idx}>
            <div className="textInfo">
              <h2 className="postTitle">{post.title}</h2>
              <p>{post.description}</p>
            </div>
            <button onClick={() => togglePost(idx)}>
              {isToggled ? '-' : '+'}
            </button>
            {isToggled && (
              <div className="postDetails">
                {/* Render post details here */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
