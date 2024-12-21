import { useState, useEffect } from "react";
import LinksContext from "./LinksContext";

const LinksContextProvider = (props) => {
  const [links, setLinksData] = useState([]);

  const addLink = (link) => {
    setLinksData((prev) => [...prev, link]);
  };

  const updateLink = (id, link) => {
    setLinksData((prev) =>
      prev.map((prevLink) => (prevLink.id === id ? link : prevLink))
    );
  };

  const deleteLink = (id) => {
    setLinksData((prev) => prev.filter((prevLink) => prevLink.id !== id));
  };

  const replaceLink = (id, position) => {
    const replacingItemIndex = links.findIndex((item) => item.id === id);
    const copiedLinks = [...links];

    if (replacingItemIndex === -1 || position === replacingItemIndex || position === replacingItemIndex + 1) return;

    const [element] = copiedLinks.splice(replacingItemIndex, 1);
    copiedLinks.splice(
      position > replacingItemIndex ? position - 1 : position,
      0,
      element
    );

    setLinksData(copiedLinks);
  };

  useEffect(() => {
    const savedLinksFromLS = JSON.parse(localStorage.getItem("LinkData"));

    if (savedLinksFromLS && savedLinksFromLS.length > 0) {
      setLinksData(savedLinksFromLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("LinkData", JSON.stringify(links));
  }, [links]);

  return (
    <LinksContext.Provider
      value={{ links, addLink, updateLink, deleteLink, replaceLink }}
    >
      {props.children}
    </LinksContext.Provider>
  );
};

export default LinksContextProvider;
