import React, { useEffect, useState } from "react";
import Links from "./Links";
import { useLinksContext } from "../context/LinksContext";
import { Edit, Heading1, Trash2 } from "lucide-react";
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
      {links.length === 0 && <div>
        <h1 className="font-quicksand text-neutral-400 text-xl font-bold">FUNCTIONALITIES</h1>

        <li className="text-neutral-400 font-semibold font-quicksand">Click on <span className="text-amber-400">Add Link</span> button to add your first Link.</li>

        <li className="text-neutral-400 font-semibold font-quicksand">Right Click on any Link to <span className="text-sky-400">Edit</span> or <span className="text-red-500">Delete</span> any Link.</li>

        <li className="text-neutral-400 font-semibold font-quicksand">Drag and Drop any link to change positions</li>
      </div>}

      {
        links.map((data, index) => (
          <div className="flex items-center" key={index}>
            <Links
              contextMenu={contextMenu}
              data={data}
              setDraggableId={setDraggableId}
            />
            <DropArea draggableId={draggableId} position={index} setDraggableId={setDraggableId} />
          </div>
        ))
      }

      {
        showMenu && (
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
        )
      }
    </div >
  );
};

export default Navbar;
