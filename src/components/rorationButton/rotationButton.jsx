import { useContext } from "react";
import "./rotationButton.css"
import { Context } from "../context/context";

function RotationButton() {
  const { rotationEnabled, setRotationEnabled } = useContext(Context);
  return (
    <button className="button-rotation" onClick={() => setRotationEnabled(!rotationEnabled)}>
      {rotationEnabled ? "Parar Rotação" : "Ativar Rotação"}
    </button>
  );
}

export default RotationButton;