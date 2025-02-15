import { createContext, useContext } from "react";

const LinksContext = createContext({
  links: [],
  addLink: (link) => {},
  updateLink: (id, link) => {},
  deleteLink: (id) => {},
});

export const useLinksContext = () => {
  return useContext(LinksContext);
};

export default LinksContext;
