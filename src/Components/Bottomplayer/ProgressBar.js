import React from "react";
import { useDispatch } from "react-redux";
import { setFullScreen } from "redux/dom/domSlicer";
import MyRange from "./MyRange";
function ProgressBar({ audio, controls }) {
  const dispatch = useDispatch();
  return (
    <div
      className="absolute w-full top-[-17px] group z-[1000]"
      onClick={() => dispatch(setFullScreen())}
    >
      <MyRange
        step={0.001}
        min={0}
        max={audio?.duration || 1}
        value={audio?.time}
        onChange={(value) => controls.seek(value)}
        colors={["#f00", "#4c4c4c"]}
        styles={[
          "group-hover:h-1",
          "group-hover:h-4 group-hover:w-4 rounded-full bg-youtubered group-1-hover:opacity-100",
        ]}
      />
    </div>
  );
}

export default ProgressBar;
