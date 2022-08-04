import { useEffect, useState } from "react";
import AdjustSquare from "./AdjustSquares";

export default function Frame() {
  const [frameDimension, setFrameDimension] = useState([]);

  useEffect(() => {
    // Get frame element
    const frame = document.getElementById("frame");

    // instantiate Resize obeserver and determine action on resize
    const observer = new ResizeObserver((entries) => {
      const e = entries[0];
      const { width, height } = e.contentRect;
      setFrameDimension([Math.ceil(width), Math.ceil(height)]);
    });

    // observer frame
    observer.observe(frame);
  }, []);

  return (
    <div id="frame" className="relative border w-full h-full select-none">
      <div className="absolute w-full h-full overflow-hidden">
        {/* <img src="/imgProxy.jpg" className="w-full" /> */}
        <div className="flex justify-center items-center w-full h-full">
          {frameDimension[0] + " X " + frameDimension[1]}
        </div>
      </div>

      <AdjustSquare nwse posTop posLeft />
      <AdjustSquare ns posTop posMidX />
      <AdjustSquare nesw posTop posRight />
      <AdjustSquare ew posMidY posLeft />
      <AdjustSquare ew posMidY posRight />
      <AdjustSquare nesw posBot posLeft />
      <AdjustSquare ns posBot posMidX />
      <AdjustSquare nwse posBot posRight />
    </div>
  );
}
