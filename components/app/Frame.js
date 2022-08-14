import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import AdjustSquare from "./AdjustSquares";

export default function Frame() {
  const { effect } = useContext(AppContext);

  useEffect(() => {
    // Get frame element
    const frame = document.getElementById("frame");

    // instantiate Resize obeserver and determine action on resize
    const observer = new ResizeObserver((entries) => {
      const e = entries[0];
      const { width, height } = e.contentRect;
    });

    // observer frame
    observer.observe(frame);
  }, []);

  return (
    <div
      id="frame"
      className={"relative border border-gray-800 select-none"}
      style={{
        width: effect.width !== "" ? effect.width : "100%",
        height: effect.height !== "" ? effect.height : "100%",
      }}
    >
      <div className="absolute w-full h-full overflow-hidden">
        <img src="/imgProxy.jpg" className="w-full" />
        {/* <div className="flex justify-center items-center w-full h-full">
          {frameDimension[0] + " X " + frameDimension[1]}
        </div> */}
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
