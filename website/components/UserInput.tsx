import { Text, VStack } from "@chakra-ui/react";
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
  const [confidence, setConfidence] = useState(null);
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
      setConfidence(Math.max(...array[0]));
    });
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

      <Prediction prediction={prediction} confidence={confidence} />
      <SketchpadButtons
        handlePredictButtonClick={handlePredictButtonClick}
        handleClearButtonClick={handleClearButtonClick}
      />
    </VStack>
  );
};

export default UserInput;
