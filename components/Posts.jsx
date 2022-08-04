import { useEffect, useState } from "react";
import Post from "/components/Post";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "/firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs);
    });
    return unsubscribe;
  }, [db]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.data().id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
