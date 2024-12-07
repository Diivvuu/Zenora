import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const primaryColor = "#00afa7";

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div
          className="flex items-center border-2 rounded-full overflow-hidden shadow-md transition-all duration-300 ease-in-out"
          style={{
            borderColor: primaryColor,
            backgroundColor: "white",
          }}
        >
          <input
            type="text"
            placeholder="Search healthcare services, resources, and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full body-font-size px-6 py-3 outline-none"
          />

          {/* Clear button */}
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="mr-2 hover:bg-gray-100 rounded-full p-1 transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          )}

          {/* Search button */}
          <button
            type="submit"
            className="p-3 transition-colors duration-300"
            style={{
              backgroundColor: primaryColor,
              color: "white",
            }}
          >
            <Search size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
