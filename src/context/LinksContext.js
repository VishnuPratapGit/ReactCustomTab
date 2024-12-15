import { createContext, useContext } from "react";

const LinksContext = createContext({
    links: [
        {
            id: 1,
            linkName: "YouTube",
            linkUrl: "https://www.youtube.com/",
            photoUrl: ""
        }
    ],

    addLink: (link) => { },
    updateLink: (id, link) => { },
    deleteLink: (id) => { }

});

export const useLinksContext = () => {
    return useContext(LinksContext);
}

export default LinksContext;