import { useSession } from "next-auth/react";
import Suggestions from "./Suggestions";
import MiniProfile from "/components/MiniProfile";
import Posts from "/components/Posts";
import Stories from "/components/Stories";

const Feed = () => {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1  mx-auto ${
        session ? "md:grid-cols-3 md:max-w-6xl" : "md:grid-cols-2 md:max-w-3xl"
      }`}
    >
      <section className="md:col-span-2">
        {/* STORIES */}
        <Stories />
        {/* POSTS */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          {/* Mini Profile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;
