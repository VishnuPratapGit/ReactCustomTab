import React, { useEffect, useState } from "react";
import { useLinksContext } from "../context/LinksContext";

const DropArea = ({ draggableId, setDraggableId, position }) => {
  const [showDrop, setShowDrop] = useState(false);
  const [display, setDisplay] = useState(false);
  const { replaceLink } = useLinksContext();

  const handleDrop = (e) => {
    e.preventDefault();
    replaceLink(draggableId, position);
    setShowDrop(false);
    setDraggableId(null);
  };

  useEffect(() => {
    draggableId ? setDisplay(true) : setDisplay(false);
    return () => {
      setDisplay(false);
    };
  }, [draggableId])

  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`${display ? "opacity-25" : ""} ${showDrop
        ? "opacity-25 w-28 rounded-lg scale-100"
        : "opacity-0 w-10 scale-90"
        } flex items-center justify-center font-serif origin-left flex-shrink-0 h-max p-1.5 px-2 transition-all duration-300 border-dashed border-2 select-none text-neutral-300`}
    >
      +
    </div>
  );
};

export default DropArea;
