import { useState } from "react";

const Links = ({ data, contextMenu, setDraggableId }) => {
  const [dragged, setDragged] = useState(false);

  const onDragStart = () => {
    setDragged(true);
    setDraggableId(data.id);
  }

  const onDragEnd = () => {
    setDragged(false);
    setDraggableId(null)
  }

  return (
    <a
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onContextMenu={(e) => contextMenu(e, data.id)}
      href={data.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${dragged ? 'opacity-10 scale-90 dark:bg-white dark:text-black bg-black text-white' : ''} rounded-lg overflow-hidden`}
    >
      <div className="flex justify-center items-center w-max gap-2 flex-shrink-0 p-1 px-2 h-min transition-all duration-300 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
        {data.photoUrl.length === 0 ? (
          <img className="h-8 sm:h-6" src={`${data.linkUrl}/favicon.ico`} />
        ) : (
          <img className="h-8 sm:h-6" src={data.photoUrl} />
        )}

        <div className="font-quicksand text-lg sm:text-sm font-semibold">
          {data.linkName}
        </div>
      </div>
    </a>
  );
};

export default Links;
