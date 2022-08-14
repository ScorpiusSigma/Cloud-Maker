import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [url, setURL] = useState("");
  const [maxDimension, setMaxDimension] = useState({
    width: "",
    height: "",
  });

  const [effect, setEffect] = useState({
    // rs:%resizing_type:%width:%height:1
    resize: "fill",
    width: "",
    height: "",
    // g:%type
    gravity: "ce",
    // bl:%sigma
    blur: 0,
    // sh:%sigma
    sharpen: 0,
    // pix:%size
    pixelate: 0,
    // br:%brightness
    brightness: 0,
    // co:%contrast
    contrast: 1,
    // sa:%saturation
    saturation: 1,
    // wm:%opacity:%position:0:0:%scale
    opacity: 0.5,
    position: "ce",
    scale: 0.2,
  });

  useEffect(() => {
    const update = {
      width: document.getElementById("editor").clientWidth,
      height: document.getElementById("editor").clientHeight,
    };

    setEffect({ ...effect, ...update });
    setMaxDimension(update);
  }, []);

  useEffect(() => {
    if (effect.width && effect.height) {
      const baseURL = "https://imgproxy.evilmartians.com";
      const signature = "/ute9wKpSvhW-PyCnJMxZNdZOhHNwudqEs3zn6Kdg8j0";
      const WatermarkURL = `/wmu:aHR0cHM6Ly9pbWdwcm94eS5uZXQvd2F0ZXJtYXJrLnN2Zw/plain`;
      const imageURL = `/${encodeURIComponent(
        "https://www.nasa.gov/sites/default/files/thumbnails/image/pia22228.jpg"
      )}`;
      const rs = `/rs:${effect.resize}:${effect.width}:${effect.height}:1`;
      const g = `/g:${effect.gravity}`;
      const bl = effect.blur ? `/bl:${effect.blur}` : "";
      const sh = effect.sharpen ? `/sh:${effect.sharpen}` : "";
      const pix = effect.pixelate ? `/pix:${effect.pixelate}` : "";
      const br = effect.brightness ? `/br:${effect.brightness}` : "";
      const co = `/co:${effect.contrast}`;
      const sa = `/sa:${effect.saturation}`;
      const wm = `/wm:${effect.opacity}:${effect.position}:0:0:${effect.scale}`;
      const cloudMakerURLArray = [
        baseURL,
        signature,
        rs,
        g,
        bl,
        sh,
        pix,
        br,
        co,
        sa,
        wm,
        WatermarkURL,
        imageURL,
      ];
      const cloudMakerURL = cloudMakerURLArray.reduce((x, y) => x + y, "");
      setURL(cloudMakerURL);
    }
  }, [effect]);

  return (
    <AppContext.Provider
      value={{
        url,
        setURL,
        effect,
        setEffect,
        maxDimension,
        setMaxDimension,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
