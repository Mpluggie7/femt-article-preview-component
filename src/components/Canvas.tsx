import { useEffect } from "react";
import "../App.css";

const Canvas = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      if (ctx != null) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(10, 10);
        ctx.lineTo(20, 0);
        ctx.fillStyle = "hsl(217, 19%, 35%)";
        ctx.fill();
      }
    }
  }, []);

  return (
    <div className="tooltipTail absolute hidden md:block top-0 left-0 bottom-0 right-0">
      <canvas
        className="h-fit absolute top-[100%] left-[50%] -translate-x-[50%]"
        id="canvas"
        width="20"
        height="20"
      ></canvas>
    </div>
  );
};

export default Canvas;
