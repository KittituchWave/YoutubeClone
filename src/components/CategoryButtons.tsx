import React from "react";

const categories = [
  "All",
  "Gaming",
  "War Thunder",
  "Live",
  "Science fiction",
  "Music",
  "Audio commentaries",
  "Dramedy",
  "Mods",
  "Meow",
  "Mixes",
  "Sketch comedy",
];

const CategoryButtons: React.FC = () => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide space-x-2 py-2 px-4 bg-transparent">
      {categories.map((category, idx) => (
        <button
          key={idx}
          className={`
            flex-shrink-0 
            px-4 py-1.5 
            text-sm font-medium 
            rounded-full 
            ${category === "All" ? "bg-white text-black" : "bg-[#272727] text-white"}
            hover:bg-gray-600
            transition-colors
          `}
        >
          {category}
        </button>
      ))}
      <button
        className="
          flex-shrink-0 
          px-4 py-1.5 
          text-sm font-medium 
          rounded-full 
          bg-[#272727] text-white
          hover:bg-gray-600
          transition-colors
        "
      >
        <span>&gt;</span>
      </button>
    </div>
  );
};

export default CategoryButtons;
