import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";

const Post = ({ username, userImg, img, caption }) => {
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
      <div className="flex justify-between px-4 pt-14">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
    </div>
  );
};

export default Post;
