import React, { useState } from "react";
import Input from "./Input";
import { Search } from "lucide-react";

const MainGoogleSection = () => {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(false);

  const searchQuery = (e) => {
    e.preventDefault();
    if (search.trim().length > 0) {
      const url = `https://www.google.com/search?q=${encodeURIComponent(
        search
      )}`;
      window.open(url, "_self");
      setSearch("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-6xl md:text-8xl mb-5 cursor-pointer select-none font-ibmPlexMono font-extralight">
        Google
      </div>

      <form
        onSubmit={searchQuery}
        className="relative border-2 border-transparent h-16 sm:h-11 mb-8 rounded-full sm:rounded-3xl flex w-full lg:w-2/4 sm:w-3/4"
      >
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full sm:rounded-3xl rounded-r-none sm:rounded-r-none w-full h-full pl-8 sm:pl-5 dark:border-none"
          placeholder="Search..."
        />

        <button
          type="submit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="grid place-items-center border-2 border-l-0 border-neutral-600 dark:border-none h-full rounded-l-none dark:bg-neutral-800 rounded-full sm:px-4 px-8 right-0 focus:outline-none"
        >
          <Search
            size={20}
            className={`${hovered ? "opacity-100" : "opacity-50"}`}
          />
        </button>
      </form>
    </div>
  );
};

export default MainGoogleSection;
