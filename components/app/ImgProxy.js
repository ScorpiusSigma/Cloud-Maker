import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Frame from "./Frame";
import FrameConfig from "./FrameConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function ImgProxy() {
  const { url } = useContext(AppContext);

  return (
    <>
      <div className="relative select-none flex justify-center items-center w-full max-w-7xl h-full mx-20">
        <div className="absolute border-t-2 border-l-2 top-0 left-0 w-5 h-5 -translate-x-4 -translate-y-4">
          <span className="absolute text-md w-[70px] text-[16px] leading-none right-0 -translate-y-full text-right py-2 hidden 2xl:flex">
            Drag the corner to resize me
          </span>
        </div>
        <FrameConfig>
          <Frame />
        </FrameConfig>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-7xl min-h-[160px] h-max">
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold text-lg">Cloud Maker URL</span>
          <button
            className="p-2 w-10 h-10"
            onClick={() => navigator.clipboard.writeText(url)}
          >
            <FontAwesomeIcon icon={faCopy} className="w-full h-full" />
          </button>
        </div>
        <textarea
          readOnly
          className="w-full h-40 border border-gray-600 rounded-md text-xl bg-transparent resize-none flex p-5"
          value={url}
        />
      </div>
    </>
  );
}
