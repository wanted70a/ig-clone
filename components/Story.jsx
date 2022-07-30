import { PlusIcon } from "@heroicons/react/solid";

const Story = ({ username, img, isUser }) => {
  return (
    <div className="relative cursor-pointer hover:scale-110 transition-transform duration-200 ease-out">
      <img
        src={img}
        alt="avatar"
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2"
      />
      {isUser && <PlusIcon className="h-6 absolute top-4 left-4 text-white" />}
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
