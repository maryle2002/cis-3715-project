import { Button, Stack } from "@chakra-ui/react";

const SketchpadButtons = ({
  handlePredictButtonClick,
  handleClearButtonClick,
}) => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Button
        boxShadow="3px 3px gray"
        fontSize={18}
        bg="white"
        variant="solid"
        height="48px"
        width="100px"
        onClick={handlePredictButtonClick}
      >
        Predict
      </Button>
      <Button
        boxShadow="3px 3px gray"
        fontSize={18}
        bg="white"
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
