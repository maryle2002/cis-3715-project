import { useRef, useState } from "react";
import Sketchpad from "./Sketchpad";
import Prediction from "./Prediction";
import SketchpadButtons from "./SketchpadButtons";
import { Text, VStack } from "@chakra-ui/react";
import clearCanvas from "../utils/clearCanvas";
import * as tf from "@tensorflow/tfjs";
import React from "react";

const UserInput = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prediction, setPrediction] = useState(null);
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
      setPrediction(argMax(array[0]));
    });
  }

  function argMax(array) {
    if (array.length === 0) {
      return -1;
    }

    let max = array[0];
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        maxIndex = i;
        max = array[i];
      }
    }

    return maxIndex;
  }

  function handleClearButtonClick() {
    clearCanvas(canvasRef);
  }

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

      <Prediction prediction={prediction} />
      <SketchpadButtons
        handlePredictButtonClick={handlePredictButtonClick}
        handleClearButtonClick={handleClearButtonClick}
      />
    </VStack>
  );
};

export default UserInput;
