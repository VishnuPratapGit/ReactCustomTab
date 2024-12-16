import { Plus } from "lucide-react";
import React, { useState } from "react";

const AddButton = ({ visible, setVisible }) => {
  return (
    <div
      onClick={() => setVisible(!visible)}
      className={`grid border-2 text-white border-transparent place-items-center p-1 transition-all duration-300 rounded-full bg-neutral-700 w-max cursor-pointer hover:opacity-100 ${
        visible ? "opacity-100 rotate-45" : "dark:opacity-40"
      }`}
    >
      <Plus size={30} />
    </div>
  );
};

export default AddButton;
