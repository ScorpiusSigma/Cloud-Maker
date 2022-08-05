import { useState } from "react";

export default function AdjustSquare(props) {
  const {
    ew,
    ns,
    nesw,
    nwse,
    posMidX,
    posMidY,
    posTop,
    posBot,
    posLeft,
    posRight,
  } = props;

  const cursorResizeDir = () => {
    if (ew) return "cursor-ew-resize";
    if (ns) return "cursor-ns-resize";
    if (nesw) return "cursor-nesw-resize";
    if (nwse) return "cursor-nwse-resize";
  };

  const cursorResizePos = () => {
    let pos = "";
    if (posTop) pos += " top-0 -translate-y-2";
    if (posBot) pos += " bottom-0 translate-y-2";
    if (posLeft) pos += " -translate-x-2";
    if (posRight) pos += " right-0 translate-x-2";
    if (posMidX) pos += " left-1/2 -translate-x-2";
    if (posMidY) pos += " top-1/2 -translate-y-2";
    return pos;
  };

  const handleMouseDown = (e) => {
    addEventListener("mousemove", handleMouseDrag);
    addEventListener("touchmove", handleMouseDrag);
    addEventListener("mouseup", handleMouseUp);
    addEventListener("touchend", handleMouseUp);
  };

  const handleMouseUp = (e) => {
    removeEventListener("mousemove", handleMouseDrag);
    removeEventListener("touchmove", handleMouseDrag);
  };

  const handleMouseDrag = (e) => {
    const frame = document.getElementById("frame");
    const rect = frame.getBoundingClientRect();
    const { left, right, top, bottom } = rect;
    const midpoint = [
      Math.ceil((left + right) / 2),
      Math.ceil((top + bottom) / 2),
    ];

    let signX = 1;
    let signY = 1;

    if (posLeft || posTop) signX = signY = -1;

    if (posTop && posRight) {
      signX = 1;
      signY = -1;
    }

    if (posBot && posLeft) {
      signX = -1;
      signY = 1;
    }

    const editor = document.getElementById("editor");
    const editorWidth = editor.offsetWidth;
    const editorHeight = editor.offsetHeight;
    const height =
      signY * ((e.clientY || e.touches[0].clientY) - midpoint[1]) * 2;
    const width =
      signX * ((e.clientX || e.touches[0].clientX) - midpoint[0]) * 2;

    if (nesw || nwse) {
      frame.style.width = (width > editorWidth ? editorWidth : width) + "px";
      frame.style.height =
        (height > editorHeight ? editorHeight : height) + "px";
      return;
    }

    if (ew) {
      frame.style.width = (width > editorWidth ? editorWidth : width) + "px";
      return;
    }

    if (ns) {
      frame.style.height =
        (height > editorHeight ? editorHeight : height) + "px";
      return;
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      className={`absolute z-20 bg-black border-2 w-[14px] h-[14px] ${cursorResizeDir()} ${cursorResizePos()} touch-none`}
    />
  );
}
