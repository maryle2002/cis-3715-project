import { Text, VStack } from "@chakra-ui/react";

const Prediction = ({ prediction, confidence }) => {
  return (
    <VStack>
      <Text textAlign="center" fontSize="30px" as="b">
        Prediction: {prediction}
      </Text>
      <Text>
        {confidence &&
          "(" + Math.round(confidence * 100) + "% confidence" + ")"}
      </Text>
    </VStack>
  );
};
export default Prediction;
