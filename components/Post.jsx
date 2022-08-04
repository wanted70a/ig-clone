import { useSession } from "next-auth/react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

const Post = ({ username, userImg, img, caption }) => {
  const { data: session } = useSession();

  return (
    <div className="bg-white my-7 border rounded-md">
      {/* POST HEADER */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="avatar"
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      {/* POST IMG */}
      <img src={img} alt="" className="object-cover w-full" />
      {/* POST BUTTONS */}
      {session && (
        <div className="flex justify-between px-4 pt-14">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* {COMMETNS} */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        <span>{caption}</span>
      </p>
      {/* Input Box */}
      {session && (
        <form action="" className="flex items-center">
          <EmojiHappyIcon className="h-7" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="enter your comment..."
          />
          <button className="font-blue text-bold">Post</button>
        </form>
      )}
    </div>
  );
};

export default Post;
