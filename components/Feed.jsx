import MiniProfile from "/components/MiniProfile";
import Posts from "/components/Posts";
import Stories from "/components/Stories";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* STORIES */}
        <Stories />
        {/* POSTS */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        {/* Mini Profile */}
        <div className="fixed w-[380px]">
          <MiniProfile />
        </div>
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
