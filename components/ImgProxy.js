import Frame from "./Frame";
import FrameConfig from "./FrameConfig";

export default function ImgProxy() {
  return (
    <div className="relative select-none flex justify-center items-center w-full max-w-7xl h-full mx-20">
      <div className="absolute border-t-2 border-l-2 top-0 left-0 w-5 h-5 -translate-x-4 -translate-y-4 hidden md:flex">
        <span className="absolute text-md w-[70px] text-[16px] leading-none right-0 -translate-y-full text-right py-2">
          Drag the corner to resize me
        </span>
      </div>
      <FrameConfig>
        <Frame />
      </FrameConfig>
    </div>
  );
}
