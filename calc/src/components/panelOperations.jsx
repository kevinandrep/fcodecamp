import { Button } from "./button";
import "../estilos/panels.css";

export function PanelOperations() {
  return (
    <div className="panel-operations">
      <Button classN={"button-operation"}>+</Button>
      <Button classN={"button-operation"}>-</Button>
      <Button classN={"button-operation"}>*</Button>
      <Button classN={"button-operation"}>/</Button>
    </div>
  );
}
