import { useState } from "react";
import {
  AddButton,
  LinkMakeInputs,
  MainGoogleSection,
  Navbar,
} from "./components";
import LinksContextProvider from "./context/LinksContextProvider";
import "./App.css";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [editLinkID, setEditLinkID] = useState(null);

  return (
    <LinksContextProvider>
      <div className="flex flex-col justify-between h-svh overflow-hidden">
        <Navbar setEditLinkID={setEditLinkID} />
        <MainGoogleSection />
        <div className="relative flex items-center bottom-5">
          <LinkMakeInputs
            visible={visible}
            setVisible={setVisible}
            editLinkID={editLinkID}
            setEditLinkID={setEditLinkID}
          />
          <AddButton visible={visible} setVisible={setVisible} />
        </div>
      </div>
    </LinksContextProvider>
  );
};

export default App;
