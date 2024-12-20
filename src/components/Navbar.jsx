import React, { useEffect, useState } from "react";
import Links from "./Links";
import { useLinksContext } from "../context/LinksContext";
import { Edit, Trash2 } from "lucide-react";
import { DropArea } from "./index";

const Navbar = ({ setEditLinkID, setDraggableId, draggableId }) => {
  const { links, deleteLink } = useLinksContext();
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [linkItemID, setLinkItemID] = useState();

  const contextMenu = (e, linkID) => {
    e.preventDefault();
    setShowMenu(true);
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setLinkItemID(linkID);
  };

  const delLink = () => {
    deleteLink(linkItemID);
    setShowMenu(false);
  };

  const editLink = () => {
    setEditLinkID(linkItemID);
  };

  useEffect(() => {
    const handleClick = () => setShowMenu(false);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex rounded-sm items-center scrollbar-hidden overflow-x-auto w-full cursor-pointer">
      {links.map((data, index) => (
        <>
          <DropArea draggableId={draggableId} position={index} />
          <Links
            contextMenu={contextMenu}
            key={data.id}
            data={data}
            setDraggableId={setDraggableId}
          />
        </>
      ))}
      <DropArea draggableId={draggableId} position={links.length} />

      {showMenu && (
        <div
          className="absolute grid text-sm text-center bg-neutral-900 font-quicksand font-bold place-items-center lineheight-none w-max h-max border-2"
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          <div
            className="flex items-center gap-2 p-2 border-b-2 w-full hover:bg-rose-600"
            onClick={delLink}
          >
            <Trash2 size={18} />
            Delete Link
          </div>
          <div
            className="flex items-center gap-2 p-2 w-full hover:bg-blue-600"
            onClick={editLink}
          >
            <Edit size={18} />
            Update Link
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
