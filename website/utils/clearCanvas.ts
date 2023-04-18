import { MutableRefObject } from "react";

function clearCanvas(canvasRef: MutableRefObject<HTMLCanvasElement>) {
  const ctx = canvasRef.current.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

export default clearCanvas;
