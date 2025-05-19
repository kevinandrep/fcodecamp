import "../estilos/panels.css";
import { Button } from "./button";

export function PanelNumbers() {
  return (
    <div className="panel-numeros">
      <Button valor={"1"} classN={"button-number"}>
        1
      </Button>
      <Button valor={"2"} classN={"button-number"}>
        2
      </Button>
      <Button valor={"3"} classN={"button-number"}>
        3
      </Button>
      <Button valor={"4"} classN={"button-number"}>
        4
      </Button>
      <Button valor={"5"} classN={"button-number"}>
        5
      </Button>
      <Button valor={"6"} classN={"button-number"}>
        6
      </Button>
      <Button valor={"7"} classN={"button-number"}>
        7
      </Button>
      <Button valor={"8"} classN={"button-number"}>
        8
      </Button>
      <Button valor={"9"} classN={"button-number"}>
        9
      </Button>
      <Button valor={"="} classN={"button-number"}>
        {" "}
        =
      </Button>
      <Button valor={"0"} classN={"button-number"}>
        0
      </Button>
      <Button valor={"."} classN={"button-number"}>
        .
      </Button>
    </div>
  );
}
