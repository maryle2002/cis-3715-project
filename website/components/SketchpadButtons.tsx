import { Stack, Button } from "@chakra-ui/react";

const SketchpadButtons = ({
  handlePredictButtonClick,
  handleClearButtonClick,
}) => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Button
        colorScheme="gray"
        variant="solid"
        height="48px"
        width="100px"
        onClick={handlePredictButtonClick}
      >
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
