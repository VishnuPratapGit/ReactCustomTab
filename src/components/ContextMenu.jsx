import React from "react";
import { Edit, Trash2 } from "lucide-react";

const ContextMenu = ({ menuPosition, delLink, editLink }) => {
  return (
    <div
      className="cursor-pointer absolute grid text-sm text-center bg-neutral-900 font-quicksand font-bold place-items-center lineheight-none w-max h-max border-2"
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
  );
};

export default ContextMenu;
