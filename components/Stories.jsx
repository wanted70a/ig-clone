import minifaker from "minifaker";
import "minifaker/locales/en";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const { data: session } = useSession();
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
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border-1 overflow-x-scroll rounded-sm">
      {session && (
        <Story
          username={session?.user?.name}
          img={session?.user?.image}
          isUser
        />
      )}
      {storyUsers.map(({ username, img, id }) => (
        <Story key={id} username={username} img={img} />
      ))}
    </div>
  );
};

export default Stories;
