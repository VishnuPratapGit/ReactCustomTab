import { useEffect, useState } from "react";
import Input from "./Input";
import { Search } from "lucide-react";

const MainGoogleSection = () => {
  const [search, setSearch] = useState("");
  const [selectInput, setSelectInput] = useState(false);

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
    <div className="flex flex-col justify-center items-center w-full mb-8 mt-4">
      <form
        onSubmit={searchQuery}
        className={`${
          selectInput ? "rainbow-bg" : "hover:bg-neutral-700"
        } relative border-2 border-transparent h-16 sm:h-12 rounded-full flex w-full lg:w-2/4 sm:w-3/4 transition-colors duration-300`}
      >
        <Input
          onFocus={() => setSelectInput(true)}
          onBlur={() => setSelectInput(false)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full rounded-r-none sm:rounded-r-none w-full h-full pl-8 sm:pl-5 dark:border-none pb-2"
          placeholder="search..."
        />

        <button
          type="submit"
          className="grid place-items-center group border-2 border-l-0 border-neutral-600 dark:border-none h-full rounded-l-none dark:bg-neutral-800 rounded-full sm:pr-4 pr-6 pl-0 right-0 focus:outline-none"
        >
          <Search size={20} className="opacity-50 group-hover:opacity-100" />
        </button>
      </form>

      <p className="mt-4 text-sm text-neutral-400/80 animate-pulse">
        Press Enter to search • Ctrl+K to focus
      </p>
    </div>
  );
};

export default MainGoogleSection;
