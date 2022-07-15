import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    const fakeUsersData = minifaker.array(20, (i) => ({
      username: minifaker.username(),
      img: `https://i.pravatar.cc/150?img=${i + 1}`,
      id: i,
    }));
    setStoryUsers(fakeUsersData);
  }, []);
  return (
    <div>
      {storyUsers.map(({ username, img, id }) => (
        <Story key={id} username={username} img={img} />
      ))}
    </div>
  );
};

export default Stories;
