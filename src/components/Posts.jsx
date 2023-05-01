import post from "../API/api";
import { useEffect, useState } from "react";
import { deletePost } from "../API/api";
import useAuth from "../hooks/useAuth";
const PostsComponent = () => {
  const { token } = useAuth();
  async function handleDelete(id) {
    try {
      const result = await deletePost(token, post.id);
      console.log("deletePost result", result);
    } catch (error) {
      console.error(error);
    }

    // console.log("post ID to delete", postIdToDelete);
    // await deletePost(token);
  }
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
                <p>{post.price}</p>
              </div>

              <button key={post.id} onClick={handleDelete}>
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsComponent;
