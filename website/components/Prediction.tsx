import { Center, Text, VStack } from "@chakra-ui/react";

const Prediction = ({ prediction, confidence }) => {
  return (
    <VStack spacing={1.5} align={"center"}>
      <Text fontSize="30px" as="b">
        Prediction
      </Text>

      <Center
        h="256px"
        w="256px"
        boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
        borderRadius="20px"
        bg="orange.50"
        color="black"
        textAlign="center"
        as="b"
        fontSize={165}
      >
        {prediction}
      </Center>

      <Text>
        {confidence &&
          "(" + Math.round(confidence * 100) + "% confidence" + ")"}
      </Text>
    </VStack>
  );
};
export default Prediction;
