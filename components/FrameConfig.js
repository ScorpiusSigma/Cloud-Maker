import { useState } from "react";

export default function FrameConfig({ children }) {
  const [selection, setSelection] = useState(0);

  const effects = [
    {
      name: "Resize",
      icon: "",
      settings: [
        { name: "Width", component: <input type="range" /> },
        { name: "Height", component: <input type="range" /> },
        { name: "Resize", component: <input type="range" /> },
        { name: "Gravity", component: <input type="range" /> },
      ],
    },
    {
      name: "Filters",
      icon: "",
      settings: [
        { name: "Blur", component: <input type="range" /> },
        { name: "Sharpen", component: <input type="range" /> },
        { name: "Pixelate", component: <input type="range" /> },
      ],
    },
    {
      name: "Adjustment",
      icon: "",
      settings: [
        { name: "Brightness", component: <input type="range" /> },
        { name: "Contrast", component: <input type="range" /> },
        { name: "Saturation", component: <input type="range" /> },
      ],
    },
    {
      name: "Watermark",
      icon: "",
      settings: [
        { name: "Opacity", component: <input type="range" /> },
        { name: "Scale", component: <input type="range" /> },
        { name: "Position", component: <input type="range" /> },
      ],
    },
  ];

  return (
    <div className="relative flex flex-row items-center justify-center w-full h-full">
      <div className="absolute flex flex-col left-0 border border-red-600 w-1/4 h-full p-10">
        {effects.map((effect, index) => (
          <button
            key={index}
            onClick={() => setSelection(index)}
            className="border flex flex-col items-center justify-center bg-red-600 h-full w-full"
          >
            <img src={effect.icon} />
            {effect.name}
          </button>
        ))}
      </div>
      <>{children}</>
      <div className="absolute right-0 border border-red-600 w-1/4 h-full">
        {
          <div>
            {effects[selection]?.settings?.map((setting) => (
              <div className="flex flex-col">
                {setting.name}
                {setting.component}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
