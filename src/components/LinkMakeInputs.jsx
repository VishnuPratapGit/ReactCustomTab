import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import { useLinksContext } from "../context/LinksContext";

const LinkMakeInputs = ({ visible, setVisible, editLinkID, setEditLinkID }) => {
  const { links, addLink, updateLink } = useLinksContext();
  const [isUpdate, setIsUpdate] = useState(false);
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUpdate) {
      const linkUpdateData = {
        id: editLinkID,
        linkName,
        linkUrl,
        photoUrl,
      };

      updateLink(editLinkID, linkUpdateData);
      setIsUpdate(false);
      setEditLinkID(null);
    } else {
      const linkID = uuidv4();

      const linkInputData = {
        id: linkID,
        linkName,
        linkUrl,
        photoUrl,
      };

      addLink(linkInputData);
    }

    setLinkName("");
    setLinkUrl("");
    setPhotoUrl("");
    setVisible(false);
  };

  const cancel = () => {
    setIsUpdate(false);
    setEditLinkID(null);
    setVisible(false);
    setLinkName("");
    setLinkUrl("");
    setPhotoUrl("");
  };

  useEffect(() => {
    if (!editLinkID) return;
    setVisible(true);

    const editableLink = links.find((link) => link.id === editLinkID);
    if (editableLink) {
      setLinkName(editableLink.linkName || "");
      setLinkUrl(editableLink.linkUrl || "");
      setPhotoUrl(editableLink.photoUrl || "");
    }
    setIsUpdate(true);
  }, [editLinkID]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-1 p-2 rounded-2xl border-2 opacity-0 origin-bottom-left absolute bottom-16 dark:bg-neutral-950 transition-all duration-500 border-neutral-700 hover:border-neutral-500 w-4/5 sm:w-1/5 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <Input
        className="rounded-xl h-9 text-sm hover:border-neutral-700"
        type="text"
        placeholder="link name"
        required
        value={linkName || ""}
        onChange={(e) => setLinkName(e.target.value)}
      />

      <Input
        className="rounded-xl h-9 text-sm hover:border-neutral-700"
        type="url"
        placeholder="link url"
        required
        value={linkUrl || ""}
        onChange={(e) => setLinkUrl(e.target.value)}
      />

      <Input
        className="rounded-xl h-9 text-sm hover:border-neutral-700"
        type="url"
        placeholder="icon url (optional)"
        value={photoUrl || ""}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />

      <div className="flex gap-1 mt-1">
        <button
          className="font-montserrat p-2 w-full bg-emerald-600 hover:bg-emerald-700 border-none text-sm font-semibold"
          type="submit"
        >
          {isUpdate ? "Update Link" : "Add Link"}
        </button>

        <button
          onClick={cancel}
          className="font-montserrat p-2 bg-rose-600 hover:bg-rose-700 border-none text-sm font-semibold"
          type="reset"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default LinkMakeInputs;
