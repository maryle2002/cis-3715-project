import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import * as tf from "@tensorflow/tfjs";
import React, { useRef, useState } from "react";
import argMax from "../utils/argMax";
import clearCanvas from "../utils/clearCanvas";
import Prediction from "./Prediction";
import Sketchpad from "./Sketchpad";
import SketchpadButtons from "./SketchpadButtons";

const UserInput = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [model, setModel] = useState<tf.LayersModel>(null);

  async function getModel() {
    return await tf.loadLayersModel("/assets/models/c1/model.json");
  }

  React.useEffect(() => {
    if (model == null) {
      clearCanvas(canvasRef);
      getModel().then((model: tf.LayersModel) => {
        setModel(model);
      });
    }
  });

  function handlePredictButtonClick() {
    const tensor = tf.browser
      .fromPixels(canvasRef.current)
      .resizeNearestNeighbor([28, 28])
      .mean(2)
      .expandDims(2)
      .expandDims()
      .toFloat()
      .div(255.0);
    const predictions = model.predict(tensor) as tf.Tensor<tf.Rank>;
    predictions.array().then((array) => {
      const confidenceLevels: number[] = array[0];
      setPrediction(argMax(confidenceLevels));
      setConfidence(confidenceLevels);
    });
  }

  function handleClearButtonClick() {
    setConfidence([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    clearCanvas(canvasRef);
  }

  return (
    <VStack spacing={10}>
      <HStack spacing="200">
        <Stack spacing={1.5} align={"center"}>
          <Text fontSize="30px" as="b">
            Input
          </Text>

          <Sketchpad
            canvasRef={canvasRef}
            id="image-drawer"
            width={256}
            height={256}
            onMouseUp={handlePredictButtonClick}
          />

          <Text>Draw a digit</Text>
        </Stack>

        <Prediction confidence={confidence} />
      </HStack>

      <SketchpadButtons handleClearButtonClick={handleClearButtonClick} />
    </VStack>
  );
};

export default UserInput;
