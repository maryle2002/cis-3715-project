import { Text, VStack } from "@chakra-ui/react";

interface PredictionProps {
  confidence: number[];
}

const Prediction = ({ confidence }: PredictionProps) => {
  return (
    <VStack spacing={1.5} align={"center"}>
      <Text fontSize="30px" as="b">
        Prediction
      </Text>

      <>
        {confidence &&
          confidence.map((item, index) => {
            const isMax = Math.max(...confidence) == item;
            return (
              <Text
                fontWeight={isMax ? "bold" : "medium"}
                fontSize={isMax ? "bold" : "medium"}
              >
                {index}: {`${Math.round(item * 100)}%`}
              </Text>
            );
          })}
      </>
    </VStack>
  );
};
export default Prediction;
