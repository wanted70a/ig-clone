import minifaker from "minifaker";
import { useEffect, useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fakerSuggestions = minifaker.array(5, (index) => {
      return {
        id: index,
        username: minifaker.username().toLocaleLowerCase(),
        jobTitle: minifaker.jobTitle().toLocaleLowerCase(),
      };
    });
    setSuggestions(fakerSuggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-300">Suggested for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map(({ id, username, jobTitle }) => (
        <div key={id} className="flex items-center justify-between mt-3">
          <img
            className="h-10 rounded-full border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${id + 1}`}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{username}</h2>
            <h3 className="font-bold text-gray-400 text-sm truncate w-[230px]">
              {jobTitle}
            </h3>
          </div>
          <button className="semibold text-blue-400 text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
