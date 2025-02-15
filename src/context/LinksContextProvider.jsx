import { useState, useEffect } from "react";
import LinksContext from "./LinksContext";

const LinksContextProvider = ({ children }) => {
  const getStoredLinks = () => {
    try {
      return JSON.parse(localStorage.getItem("LinkData")) || [];
    } catch {
      return [];
    }
  };

  const [links, setLinks] = useState(getStoredLinks);

  const addLink = (link) => {
    setLinks((prev) => [...prev, link]);
  };

  const updateLink = (id, updatedLink) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? updatedLink : link))
    );
  };

  const deleteLink = (id) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  const replaceLink = (id, newPosition) => {
    setLinks((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1 || newPosition < 0 || newPosition >= prev.length)
        return prev;

      const updatedLinks = [...prev];
      const [movedItem] = updatedLinks.splice(index, 1);
      updatedLinks.splice(newPosition, 0, movedItem);

      return updatedLinks;
    });
  };

  useEffect(() => {
    localStorage.setItem("LinkData", JSON.stringify(links));
  }, [links]);

  return (
    <LinksContext.Provider
      value={{ links, addLink, updateLink, deleteLink, replaceLink }}
    >
      {children}
    </LinksContext.Provider>
  );
};

export default LinksContextProvider;
