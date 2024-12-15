import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-[rgba(0,0,0,0.2)] rounded-full p-4 max-w-3xl mx-auto shadow-md"
    >
      <input
        type="text"
        placeholder="Search..."
        className="body-font-size bg-transparent flex-1  outline-none px-4 py-2 placeholder-gray-400 text-text-white"
      />
      <button
        type="button"
        className="rounded-full p-2 flex items-center justify-center bg-[linear-gradient(to_right,var(--color-primary-400),var(--color-primary-500))]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="20px"
          height="20px"
        >
          <path d="M10 2a8 8 0 105.3 14.3l5.4 5.4a1 1 0 001.4-1.4l-5.4-5.4A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
