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
  const [draggableId, setDraggableId] = useState(null);

  return (
    <LinksContextProvider>
      <div className="flex flex-col h-full justify-between items-center overflow-visible">
        <Navbar
          setEditLinkID={setEditLinkID}
          setDraggableId={setDraggableId}
          draggableId={draggableId}
        />
        <MainGoogleSection />
        <div className="relative flex self-start items-center w-full">
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
