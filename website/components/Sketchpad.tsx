import React from "react";

const Sketchpad = ({ canvasRef, id, width, height }) => {
  const lineWidth = 20;

  let lastX = 0;
  let lastY = 0;

  let mouseX = 0;
  let mouseY = 0;

  let touchX = 0;
  let touchY = 0;

  let mouseDown = 0;

  function draw(ctx, x, y, size, isDown) {
    if (isDown) {
      ctx.strokeStyle = "white";
      ctx.lineWidth = size;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
    }

    lastX = x;
    lastY = y;
  }

  function handleMouseDown() {
    const ctx = canvasRef.current.getContext("2d");
    mouseDown = 1;
    draw(ctx, mouseX, mouseY, lineWidth, false);
  }

  function handleMouseUp() {
    mouseDown = 0;
  }

  function handleMouseMove(e) {
    const ctx = canvasRef.current.getContext("2d");
    getMousePos(e);
    if (mouseDown == 1) {
      draw(ctx, mouseX, mouseY, lineWidth, true);
    }
  }

  function getMousePos(e) {
    mouseX = e.clientX - canvasRef.current.getBoundingClientRect().x;
    mouseY = e.clientY - canvasRef.current.getBoundingClientRect().y;
  }

  function handleTouchStart(e) {
    const ctx = canvasRef.current.getContext("2d");
    getTouchPos(e);
    draw(ctx, touchX, touchY, lineWidth, false);
  }

  function handleTouchMove(e) {
    const ctx = canvasRef.current.getContext("2d");
    getTouchPos(e);
    draw(ctx, touchX, touchY, lineWidth, true);
  }

  function getTouchPos(e) {
    if (e.touches) {
      if (e.touches.length == 1) {
        const touch = e.touches[0];
        touchX = touch.pageX - touch.target.offsetLeft;
        touchY = touch.pageY - touch.target.offsetTop;
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      id={id}
      width={width}
      height={height}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{
        border: "solid 1px black",
      }}
    />
  );
};

export default Sketchpad;
