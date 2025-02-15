import React, { useEffect, useState } from "react";
import Links from "./Links";
import { useLinksContext } from "../context/LinksContext";

import { ContextMenu, DropArea, NoLinksGuid } from "./index";

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
    <div className="flex flex-wrap gap-y-4 scrollbar-hidden overflow-auto w-full max-h-1/2">
      {links.length > 0 ? (
        links.map((data, index) => (
          <div className="flex items-center" key={index}>
            <Links
              contextMenu={contextMenu}
              data={data}
              setDraggableId={setDraggableId}
            />
            <DropArea
              draggableId={draggableId}
              position={index}
              setDraggableId={setDraggableId}
            />
          </div>
        ))
      ) : (
        <NoLinksGuid />
      )}

      {showMenu && (
        <ContextMenu
          menuPosition={menuPosition}
          delLink={delLink}
          editLink={editLink}
        />
      )}
    </div>
  );
};

export default Navbar;
