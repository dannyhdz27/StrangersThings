import post from "../API/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await post();
      setPosts(response.data.posts);
    }
    fetchPosts();
  }, []);
  console.log("posts", posts);
  return (
    <div>
      <div className="allPosts">
        {posts.map((post, idx) => {
          return (
            <div className="postCard" key={idx}>
              <div className="textInfo">
                <h2 className="postTitle">{post.title}</h2>

                <p>{post.description}</p>
              </div>

              {/* <button
                key={post.id}
                onClick={() => {
                  navigate(`/$(post.id)`);
                }}
              ></button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsComponent;
