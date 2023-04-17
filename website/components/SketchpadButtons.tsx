import { Stack, Button } from "@chakra-ui/react";
import clearCanvas from "../utils/clearCanvas";

const SketchpadButtons = ({ canvasRef }) => {
  function handleClearButtonClick() {
    clearCanvas(canvasRef);
  }

  return (
    <Stack direction="row" spacing={4} align="center">
      <Button colorScheme="gray" variant="solid" height="48px" width="100px">
        Predict
      </Button>
      <Button
        colorScheme="gray"
        variant="solid"
        height="48px"
        width="100px"
        onClick={handleClearButtonClick}
      >
        Clear
      </Button>
    </Stack>
  );
};
export default SketchpadButtons;
