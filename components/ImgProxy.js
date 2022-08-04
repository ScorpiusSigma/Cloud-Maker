import Frame from "./Frame";
import FrameConfig from "./FrameConfig";

export default function ImgProxy() {
  return (
    <div
      id="editor"
      className="flex justify-center items-center border border-blue-500 w-full max-w-7xl h-[532px] mx-20 "
    >
      <FrameConfig>
        <Frame />
      </FrameConfig>
    </div>
  );
}
