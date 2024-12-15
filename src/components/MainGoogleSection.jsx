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
    <div className="flex flex-col justify-center items-center ">
      <div className="text-4xl sm:text-6xl md:text-8xl mb-5 cursor-pointer select-none font-ibmPlexMono font-extralight">
        Google
      </div>

      <form
        onSubmit={searchQuery}
        className="relative border-2 border-transparent rounded-3xl flex w-11/12 lg:w-2/4 sm:w-3/4"
      >
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-3xl rounded-r-none w-full px-5 h-11 dark:border-none"
          placeholder="Search..."
        />

        <button
          type="submit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="grid place-items-center border-2 border-l-0 border-neutral-600 dark:border-none h-full rounded-l-none dark:bg-neutral-800 rounded-full px-2 pr-4 right-0 focus:outline-none"
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
