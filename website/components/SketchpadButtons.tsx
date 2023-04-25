import { Button } from "@chakra-ui/react";

const SketchpadButtons = ({ handleClearButtonClick }) => {
  return (
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
  );
};
export default SketchpadButtons;
