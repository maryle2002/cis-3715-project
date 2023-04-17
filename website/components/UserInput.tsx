import { useRef } from "react";
import Sketchpad from "./Sketchpad";
import Prediction from "./Prediction";
import SketchpadButtons from "./SketchpadButtons";
import { Text, VStack } from "@chakra-ui/react";

const UserInput = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <VStack>
      <Sketchpad
        canvasRef={canvasRef}
        id="image-drawer"
        width={256}
        height={256}
      />

      <Text textAlign="center" fontSize="40px" as="b">
        Draw a digit on the board
      </Text>

      <Prediction />
      <SketchpadButtons canvasRef={canvasRef} />
    </VStack>
  );
};

export default UserInput;
