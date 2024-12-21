import React from "react";

const Links = ({ data, contextMenu, setDraggableId }) => {
  const getFaviconUrl = `${data.linkUrl}/favicon.ico`;

  return (
    <a
      draggable
      onDragStart={() => setDraggableId(data.id)}
      onDragEnd={() => setDraggableId(null)}
      onContextMenu={(e) => contextMenu(e, data.id)}
      href={data.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="dark:text-white text-black dark:hover:text-white border-2 border-transparent flex justify-center items-center w-max gap-2 flex-shrink-0 hover:border-neutral-600 p-1 px-2 h-min rounded-lg transition-all duration-500"
    >
      {data.photoUrl.length === 0 ? (
        <img className="h-8 sm:h-6" src={getFaviconUrl} />
      ) : (
        <img className="h-8 sm:h-6" src={data.photoUrl} />
      )}

      <div className="font-quicksand text-lg sm:text-sm font-semibold">
        {data.linkName}
      </div>
    </a>
  );
};

export default Links;
