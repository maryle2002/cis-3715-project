import { useRef } from "react";
import Sketchpad from "./Sketchpad";

const UserInput = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Sketchpad
      canvasRef={canvasRef}
      id="image-drawer"
      width={256}
      height={256}
    />
  );
};

export default UserInput;
