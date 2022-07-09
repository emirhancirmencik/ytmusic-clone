import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import MyRange from "./MyRange";
function ProgressBar({ audio, controls }) {
  const STEP = 0.1;
  const MIN = 0;
  return (
    <div className="absolute w-full top-[-17px] group">
      <MyRange
        step={0.1}
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