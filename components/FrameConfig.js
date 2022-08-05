import { useState } from "react";

const resizeIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDQiIGhlaWdodD0iMTA0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI5IDE3aDZ2NmgtNnptNDAgMGg2djZoLTZ6bS0yMCAwaDZ2NmgtNnptMyAxOHYxMG0tNS01aDEwTTI5IDU3aDZ2NmgtNnptMC0yMGg2djZoLTZ6bTQwIDIwaDZ2NmgtNnptMC0yMGg2djZoLTZ6TTQ5IDU3aDZ2NmgtNnpNMzUgMjBoMTNtNyAwaDEzTTM1IDYwaDEzbS0xNi0zVjQ0bTAtN1YyNG00MCAzM1Y0NG0wLTdWMjRNNTUgNjBoMTMiLz48L3N2Zz4=";
const filtersIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDQiIGhlaWdodD0iMTA0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSI1Mi41IiBjeT0iMzEiIHI9IjEyLjUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNDEuNSIgY3k9IjQ5IiByPSIxMi41IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjYyLjUiIGN5PSI0OSIgcj0iMTIuNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=";
const adjustmentIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDQiIGhlaWdodD0iMTA0IiBmaWxsPSJub25lIj48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMyIDE1aDEwdjEwSDMyem0zNiAzNmgxMHYxMEg2OHpNNTAgMzNoMTB2MTBINTB6bS04LTEzaDM3TTMxIDU2aDM3TTMxIDM4aDE5bTEwIDBoMTkiLz48L3N2Zz4=";
const watermarkIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDQiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgMTA0IDEwNCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMTApIj48Y2lyY2xlIGN4PSIyMyIgY3k9IjIzIiByPSIyMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjcuNjcgMTVhOSA5IDAgMCAwLTguNSA1LjI2IDEyLjg2IDEyLjg2IDAgMCAwLTEuMTcgNS42djMuNmExMi42OTMgMTIuNjkzIDAgMCAwIDEuMjEgNS41NyA5LjAzIDkuMDMgMCAwIDAgOC40NiA1LjE3IDEwLjA0MyAxMC4wNDMgMCAwIDAgNi42NS0yLjA3IDguNTQzIDguNTQzIDAgMCAwIDIuODgtNS45NS41LjUgMCAwIDAtLjEzLS4zOGwtLjEtLjExYS41LjUgMCAwIDAtLjM3LS4xN2gtLjkzYS41LjUgMCAwIDAtLjMzLjEzbC0uMS4xYS41LjUgMCAwIDAtLjE3LjMgNi40NTIgNi40NTIgMCAwIDEtMi4xNiA0LjU3IDguMDYxIDguMDYxIDAgMCAxLTUuMjQgMS41MSA3LjIgNy4yIDAgMCAxLTMuOTYtMS4wOSA3LjEgNy4xIDAgMCAxLTIuNjQtMy4wNiAxMC43NyAxMC43NyAwIDAgMS0uOTQtNC42M3YtMy40M2E5LjU0NCA5LjU0NCAwIDAgMSAyLjEtNi41IDYuODYgNi44NiAwIDAgMSA1LjQ0LTIuMzUgNy44ODYgNy44ODYgMCAwIDEgNS4yIDEuNTMgNi42MjMgNi42MjMgMCAwIDEgMi4yIDQuNTIuNS41IDAgMCAwIC4xNy4zMWwuMS4wOWEuNS41IDAgMCAwIC4zMy4xMmguOTNhLjUuNSAwIDAgMCAuMzctLjE2bC4xLS4xMWEuNS41IDAgMCAwIC4xMy0uMzkgOC40NzEgOC40NzEgMCAwIDAtMi45LTUuOTJBMTAuMDkxIDEwLjA5MSAwIDAgMCAyNy42NyAxNVoiLz48L2c+PC9zdmc+";

const Slider = ({ onChange }) => {
  return (
    <div className="relative w-full flex justify-center items-center my-2">
      <span className="absolute left-1/2 h-2 border -z-[1]" />
      <input
        onChange={onChange}
        className="appearance-none bg-white h-0.5 w-full m-0 p-0"
        type="range"
        min="0"
        max="900"
      />
    </div>
  );
};

const DropDown = ({ children }) => {
  return (
    <select
      id="resize"
      name="resize"
      className="bg-transparent border-2 p-2 focus-within:bg-slate-900"
    >
      {children}
    </select>
  );
};

export default function FrameConfig({ children }) {
  const [selection, setSelection] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const effects = [
    {
      name: "Resize",
      icon: resizeIcon,
      settings: [
        {
          name: "Width",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{width}</span>
              <Slider
                onChange={(e) => {
                  document.getElementById("frame").style.width = Math.ceil(
                    e.target.value
                  );
                  console.log(e.target.value);
                }}
              />
            </div>
          ),
        },
        {
          name: "Height",
          component: (
            <div className="flex flex-col">
              <span className="text-right">{height}</span>
              <Slider onChange={() => {}} />
            </div>
          ),
        },
        {
          name: "Resize",
          component: (
            <DropDown>
              <option value="fill" selected>
                Fill
              </option>
              <option value="fit">Fit</option>
            </DropDown>
          ),
        },
        {
          name: "Gravity",
          component: (
            <DropDown>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="top_right">Top Right</option>
              <option value="top_left">Top Left</option>
              <option value="bottom_right">Bottom Right</option>
              <option value="bottom_left">Bottom Left</option>
              <option value="center" selected>
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
        { name: "Blur", component: <Slider /> },
        { name: "Sharpen", component: <Slider /> },
        { name: "Pixelate", component: <Slider /> },
      ],
    },
    {
      name: "Adjustment",
      icon: adjustmentIcon,
      settings: [
        { name: "Brightness", component: <Slider /> },
        { name: "Contrast", component: <Slider /> },
        { name: "Saturation", component: <Slider /> },
      ],
    },
    {
      name: "Watermark",
      icon: watermarkIcon,
      settings: [
        { name: "Opacity", component: <Slider /> },
        { name: "Scale", component: <Slider /> },
        {
          name: "Position",
          component: (
            <DropDown>
              <option value="top_edge">Top edge</option>
              <option value="bottom_edge">Bottom edge</option>
              <option value="right_edge">Right edge</option>
              <option value="left_edge">Left edge</option>
              <option value="top_right_corner">Top right corner</option>
              <option value="top_left_corner">Top left corner</option>
              <option value="bottom_right_corner" selected>
                Bottom right corner
              </option>
              <option value="bottom_left_corner">Bottom left corner</option>
              <option value="center">Center</option>
              <option value="replicate">Replicate</option>
            </DropDown>
          ),
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-row items-center justify-center w-full h-full">
      <div className="absolute z-10 flex flex-col left-0 w-max gap-3 h-full p-10">
        {effects.map((effect, index) => (
          <button
            key={index}
            onClick={() => setSelection(index)}
            className={`flex flex-col relative items-center justify-center h-[108px] w-[108px] ${
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

      <>{children}</>

      <div className="absolute right-0 w-1/4 h-full p-10 flex flex-col gap-5">
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
