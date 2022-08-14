import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const resizeIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDQiIGhlaWdodD0iMTA0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI5IDE3aDZ2NmgtNnptNDAgMGg2djZoLTZ6bS0yMCAwaDZ2NmgtNnptMyAxOHYxMG0tNS01aDEwTTI5IDU3aDZ2NmgtNnptMC0yMGg2djZoLTZ6bTQwIDIwaDZ2NmgtNnptMC0yMGg2djZoLTZ6TTQ5IDU3aDZ2NmgtNnpNMzUgMjBoMTNtNyAwaDEzTTM1IDYwaDEzbS0xNi0zVjQ0bTAtN1YyNG00MCAzM1Y0NG0wLTdWMjRNNTUgNjBoMTMiLz48L3N2Zz4=";
const filtersIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDQiIGhlaWdodD0iMTA0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSI1Mi41IiBjeT0iMzEiIHI9IjEyLjUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNDEuNSIgY3k9IjQ5IiByPSIxMi41IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjYyLjUiIGN5PSI0OSIgcj0iMTIuNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=";
const adjustmentIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDQiIGhlaWdodD0iMTA0IiBmaWxsPSJub25lIj48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMyIDE1aDEwdjEwSDMyem0zNiAzNmgxMHYxMEg2OHpNNTAgMzNoMTB2MTBINTB6bS04LTEzaDM3TTMxIDU2aDM3TTMxIDM4aDE5bTEwIDBoMTkiLz48L3N2Zz4=";
const watermarkIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDQiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgMTA0IDEwNCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMTApIj48Y2lyY2xlIGN4PSIyMyIgY3k9IjIzIiByPSIyMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjcuNjcgMTVhOSA5IDAgMCAwLTguNSA1LjI2IDEyLjg2IDEyLjg2IDAgMCAwLTEuMTcgNS42djMuNmExMi42OTMgMTIuNjkzIDAgMCAwIDEuMjEgNS41NyA5LjAzIDkuMDMgMCAwIDAgOC40NiA1LjE3IDEwLjA0MyAxMC4wNDMgMCAwIDAgNi42NS0yLjA3IDguNTQzIDguNTQzIDAgMCAwIDIuODgtNS45NS41LjUgMCAwIDAtLjEzLS4zOGwtLjEtLjExYS41LjUgMCAwIDAtLjM3LS4xN2gtLjkzYS41LjUgMCAwIDAtLjMzLjEzbC0uMS4xYS41LjUgMCAwIDAtLjE3LjMgNi40NTIgNi40NTIgMCAwIDEtMi4xNiA0LjU3IDguMDYxIDguMDYxIDAgMCAxLTUuMjQgMS41MSA3LjIgNy4yIDAgMCAxLTMuOTYtMS4wOSA3LjEgNy4xIDAgMCAxLTIuNjQtMy4wNiAxMC43NyAxMC43NyAwIDAgMS0uOTQtNC42M3YtMy40M2E5LjU0NCA5LjU0NCAwIDAgMSAyLjEtNi41IDYuODYgNi44NiAwIDAgMSA1LjQ0LTIuMzUgNy44ODYgNy44ODYgMCAwIDEgNS4yIDEuNTMgNi42MjMgNi42MjMgMCAwIDEgMi4yIDQuNTIuNS41IDAgMCAwIC4xNy4zMWwuMS4wOWEuNS41IDAgMCAwIC4zMy4xMmguOTNhLjUuNSAwIDAgMCAuMzctLjE2bC4xLS4xMWEuNS41IDAgMCAwIC4xMy0uMzkgOC40NzEgOC40NzEgMCAwIDAtMi45LTUuOTJBMTAuMDkxIDEwLjA5MSAwIDAgMCAyNy42NyAxNVoiLz48L2c+PC9zdmc+";

const Slider = ({ onChange, value, max, step = 1 }) => {
  return (
    <div className="relative w-full flex justify-center items-center my-2">
      <span className="absolute left-1/2 h-2 border -z-[1]" />
      <input
        onChange={onChange}
        className="appearance-none bg-white h-0.5 w-full m-0 p-0"
        type="range"
        min="0"
        max={max || 900}
        value={value}
        step={step}
      />
    </div>
  );
};

const DropDown = ({ children, onChange, value }) => {
  return (
    <select
      id="resize"
      name="resize"
      className="bg-transparent border-2 p-2 focus-within:bg-slate-900"
      onChange={onChange}
      value={value}
    >
      {children}
    </select>
  );
};

export default function FrameConfig({ children }) {
  const [selection, setSelection] = useState(0);
  const { maxDimension } = useContext(AppContext);
  const { effect, setEffect } = useContext(AppContext);

  const effects = [
    {
      name: "Resize",
      icon: resizeIcon,
      settings: [
        {
          name: "Width",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.width}</span>
              <Slider
                value={effect.width}
                onChange={(e) =>
                  setEffect({ ...effect, width: parseInt(e.target.value) })
                }
                max={maxDimension.width}
              />
            </div>
          ),
        },
        {
          name: "Height",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.height}</span>
              <Slider
                value={effect.height}
                onChange={(e) =>
                  setEffect({ ...effect, height: parseInt(e.target.value) })
                }
                max={maxDimension.height}
              />
            </div>
          ),
        },
        {
          name: "Resize",
          component: (
            <DropDown
              onChange={(e) => setEffect({ ...effect, resize: e.target.value })}
              value={effect.resize}
            >
              <option value="fill" defaultValue>
                Fill
              </option>
              <option value="fit">Fit</option>
            </DropDown>
          ),
        },
        {
          name: "Gravity",
          component: (
            <DropDown
              onChange={(e) =>
                setEffect({ ...effect, gravity: e.target.value })
              }
              value={effect.gravity}
            >
              <option value="no">Top</option>
              <option value="so">Bottom</option>
              <option value="we">Left</option>
              <option value="ea">Right</option>
              <option value="noea">Top Right</option>
              <option value="nowe">Top Left</option>
              <option value="soea">Bottom Right</option>
              <option value="sowe">Bottom Left</option>
              <option value="ce" defaultValue>
                Center
              </option>
            </DropDown>
          ),
        },
      ],
    },
    {
      name: "Filters",
      icon: filtersIcon,
      settings: [
        {
          name: "Blur",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.blur}</span>
              <Slider
                value={effect.blur}
                onChange={(e) =>
                  setEffect({ ...effect, blur: parseInt(e.target.value) })
                }
                max={10}
              />
            </div>
          ),
        },
        {
          name: "Sharpen",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.sharpen}</span>
              <Slider
                value={effect.sharpen}
                onChange={(e) =>
                  setEffect({ ...effect, sharpen: parseFloat(e.target.value) })
                }
                max={1}
                step={"0.1"}
              />
            </div>
          ),
        },
        {
          name: "Pixelate",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.pixelate}</span>
              <Slider
                value={effect.pixelate}
                onChange={(e) =>
                  setEffect({ ...effect, pixelate: parseInt(e.target.value) })
                }
                max={10}
              />
            </div>
          ),
        },
      ],
    },
    {
      name: "Adjustment",
      icon: adjustmentIcon,
      settings: [
        {
          name: "Brightness",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.brightness}</span>
              <Slider
                value={effect.brightness}
                onChange={(e) =>
                  setEffect({ ...effect, brightness: parseInt(e.target.value) })
                }
                max={50}
              />
            </div>
          ),
        },
        {
          name: "Contrast",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.contrast}</span>
              <Slider
                value={effect.contrast}
                onChange={(e) =>
                  setEffect({ ...effect, contrast: parseFloat(e.target.value) })
                }
                max={2}
                step={"0.1"}
              />
            </div>
          ),
        },
        {
          name: "Saturation",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.saturation}</span>
              <Slider
                value={effect.saturation}
                onChange={(e) =>
                  setEffect({
                    ...effect,
                    saturation: parseFloat(e.target.value),
                  })
                }
                max={2}
                step={"0.1"}
              />
            </div>
          ),
        },
      ],
    },
    {
      name: "Watermark",
      icon: watermarkIcon,
      settings: [
        {
          name: "Opacity",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.opacity}</span>
              <Slider
                value={effect.opacity}
                onChange={(e) =>
                  setEffect({ ...effect, opacity: parseFloat(e.target.value) })
                }
                max={1}
                step={"0.1"}
              />
            </div>
          ),
        },
        {
          name: "Scale",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{effect.scale}</span>
              <Slider
                value={effect.scale}
                onChange={(e) =>
                  setEffect({ ...effect, scale: parseFloat(e.target.value) })
                }
                max={1}
                step={"0.1"}
              />
            </div>
          ),
        },
        {
          name: "Position",
          component: (
            <DropDown
              onChange={(e) =>
                setEffect({ ...effect, position: e.target.value })
              }
              value={effect.position}
            >
              <option value="no">Top edge</option>
              <option value="so">Bottom edge</option>
              <option value="ea">Right edge</option>
              <option value="we">Left edge</option>
              <option value="noea">Top right corner</option>
              <option value="nowe">Top left corner</option>
              <option value="soea" defaultValue>
                Bottom right corner
              </option>
              <option value="sowe">Bottom left corner</option>
              <option value="ce">Center</option>
              <option value="re">Replicate</option>
            </DropDown>
          ),
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col gap-5 md:flex-row items-center justify-center w-full">
      <div
        id="editor"
        className="w-full h-[532px] flex justify-center items-center"
      >
        {children}
      </div>

      <div className="md:absolute z-10 flex flex-row justify-center md:flex-col md:left-0 py-5 md:p-10 gap-3 h-max w-full md:h-full overflow-x-auto text-xs md:text-md">
        {effects.map((effect, index) => (
          <button
            key={index}
            onClick={() => setSelection(index)}
            className={`flex flex-col relative items-center justify-center w-[108px] truncate ${
              selection === index
                ? "bg-gradient-to-b from-blue-500 to-blue-800"
                : "border-2"
            }`}
          >
            <img src={effect.icon} />
            <span className="absolute bottom-0 mb-2">{effect.name}</span>
          </button>
        ))}
      </div>

      <div className="md:absolute z-10 right-0 w-full md:w-1/4 h-max md:h-full py-5 md:p-10 flex flex-col gap-5">
        {effects[selection]?.settings?.map((setting, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-semibold">{setting.name}</span>
            {setting.component}
          </div>
        ))}
      </div>
    </div>
  );
}
