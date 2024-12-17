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
      className={`${
        showDrop
          ? "opacity-100 dark:text-neutral-600 select-none text-neutral-300 border-2 border-dashed text-center w-28 mr-3 flex-shrink-0 text-lg border-neutral-600 p-1.5 px-2 rounded-lg transition-all duration-500"
          : "opacity-0 text-xs"
      }`}
    >
      +
    </div>
  );
};

export default DropArea;
