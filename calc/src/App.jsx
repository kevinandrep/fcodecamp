import "./App.css";
import "./estilos/button.css";
import { Button } from "./components/button";
import { PanelNumbers } from "./components/panelNumbers";
import { PanelOperations } from "./components/panelOperations";

function App() {
  return (
    <div>
      <div>
        <input className="input-container"></input>
      </div>
      <div className="panel-calculadora">
        <PanelNumbers></PanelNumbers>
        <PanelOperations></PanelOperations>
        <Button classN={"boton-clear"}>Clear</Button>
      </div>
    </div>
  );
}

export default App;
