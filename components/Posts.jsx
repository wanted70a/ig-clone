import Post from "/components/Post";

const Posts = () => {
  const dummyPosts = [
    {
      id: "1",
      username: "John Doe",
      userImg: "https://i.pravatar.cc/150?img=1",
      img: "https://images.unsplash.com/photo-1657879005719-2ad0567f9f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      caption: "Nice Picture 1",
    },
    {
      id: "2",
      username: "Markus Maximus",
      userImg: "https://i.pravatar.cc/150?img=2",
      img: "https://images.unsplash.com/photo-1657879005719-2ad0567f9f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      caption: "Nice Picture 2",
    },
    {
      id: "3",
      username: "Helen Morris",
      userImg: "https://i.pravatar.cc/150?img=3",
      img: "https://images.unsplash.com/photo-1657879005719-2ad0567f9f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      caption: "Nice Picture 3",
    },
  ];
  return (
    <div>
      {dummyPosts.map(({ id, username, userImg, img, caption }) => {
        return (
          <Post
            key={id}
            username={username}
            userImg={userImg}
            img={img}
            caption={caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
