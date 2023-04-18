import { Text } from "@chakra-ui/react";

const Prediction = ({ prediction }) => {
  return (
    <Text textAlign="center" fontSize="30px" as="b">
      Prediction: {prediction}
    </Text>
  );
};
export default Prediction;
