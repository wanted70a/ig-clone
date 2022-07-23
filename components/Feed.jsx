import Posts from "/components/Posts";
import Stories from "/components/Stories";

const Feed = () => {
  return (
    <main>
      <section>
        {/* STORIES */}
        <Stories />
        {/* POSTS */}
        <Posts />
      </section>
      <section>
        {/* Mini Profile */}

        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
