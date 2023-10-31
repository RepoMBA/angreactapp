import React, { useState } from "react";
import { useOnDraw } from "./Hooks";

const Canvas = ({ width, height }) => {
  const [currentColor, setCurrentColor] = useState("#000000");
  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, currentColor, 5);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  const clearCanvas = () => {
    const canvas = setCanvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the entire canvas by filling it with a transparent color
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleColorChange = (event) => {
    setCurrentColor(event.target.value);
  };

  return (
    <div
      style={{
        border: "1px solid #E4E4E4",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
      }}
    >
      <div className="flex justify-between px-4 py-2 border-b-[1px] items-center">
        <input
          type="color"
          value={currentColor}
          onChange={handleColorChange}
          className="w-8 h-8 rounded-full focus:outline-none"
        />
        <button onClick={clearCanvas} className="text-[14px]">
          Clear
        </button>
      </div>
      <canvas
        width={width}
        height={height}
        onMouseDown={onCanvasMouseDown}
        style={canvasStyle}
        ref={setCanvasRef}
      />
    </div>
  );
};

export default Canvas;

const canvasStyle = {};
