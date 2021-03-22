import { useState } from "react";
import logo from "./logo.svg";
import "./styles/style.css";
import ModalDialog from "./components/dialogs/dialog";

function App() {
  const [pShow, setPrimaryShow] = useState(true);
  const [sShow, setSecondaryShow] = useState(false);
  const [dShow, setDefaultShow] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-button">
          <button className="primary" onClick={() => setPrimaryShow(true)}>
            Primary
          </button>
          <ModalDialog
            id="dialog-primary"
            title="Primary title"
            isShow={pShow}
            onShow={setPrimaryShow}
          >
            Content primary
          </ModalDialog>
          <button className="secondary" onClick={() => setSecondaryShow(true)}>
            Secondary
          </button>
          <ModalDialog
            id="dialog-secondary"
            title="Secondary title"
            isShow={sShow}
            onShow={setSecondaryShow}
          >
            Content secondary
          </ModalDialog>
          <button className="default" onClick={() => setDefaultShow(true)}>
            Default
          </button>
          <ModalDialog
            id="dialog-default"
            title="Default title"
            isShow={dShow}
            onShow={setDefaultShow}
          >
            Content default
          </ModalDialog>
        </div>
      </header>
    </div>
  );
}

export default App;
