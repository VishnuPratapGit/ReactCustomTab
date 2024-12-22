import React, { useEffect, useState } from "react";
import { useLinksContext } from "../context/LinksContext";

const DropArea = ({ draggableId, setDraggableId, position, ...others }) => {
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
      {...others}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`${display ? "opacity-50" : ""} ${showDrop
        ? "w-28 rounded-lg scale-100"
        : "opacity-0 w-8 scale-90 border-transparent"
        } flex items-center justify-center origin-left flex-shrink-0 h-max p-1.5 px-2 transition-all font-quicksand duration-300 mx-1 border-dashed border select-none text-neutral-300`}
    >
      {position + 1}
    </div>
  );
};

export default DropArea;
