import React, { useState } from "react";
import { useLinksContext } from "../context/LinksContext";

const DropArea = ({ draggableId, position }) => {
  const [showDrop, setShowDrop] = useState(false);
  const { replaceLink } = useLinksContext();

  const handleDrop = (e) => {
    e.preventDefault();
    replaceLink(draggableId, position);
    setShowDrop(false);
  };

  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`${showDrop
        ? "opacity-100 w-28 text-lg rounded-lg "
        : "opacity-0"
        } flex items-center justify-center flex-shrink-0 h-max  p-1.5 px-2 transition-all duration-500 border-dashed border-2 dark:text-neutral-600 select-none text-neutral-300 border-neutral-600`}
    >
      +
    </div>
  );
};

export default DropArea;
