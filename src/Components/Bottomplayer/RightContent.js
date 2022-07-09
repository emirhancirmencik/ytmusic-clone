import { Icon } from "image/Icons";
import React, { useMemo } from "react";
import MyRange from "./MyRange";

function RightContent({ audio, controls }) {
  const volumeIcon = useMemo(() => {
    if (audio?.volume === 0 || audio?.muted) {
      return "muted";
    }
    if (audio?.volume > 0) {
      return "volume";
    }
  }, [audio?.volume, audio?.muted]);
  return (
    <div className="flex items-center w-[292px] justify-end">
      <span className="w-full group-volume-hover:opacity-100">
        <MyRange
          step={0.01}
          min={0}
          max={1}
          value={audio.muted ? 0 : audio.volume}
          onChange={(value) => {
            controls.volume(value);
            controls.unmute();
          }}
          colors={["#fff", "rgba(255,255,255,0.5)"]}
          styles={["", "rounded-full bg-white opacity-100"]}
        />
      </span>
      <span
        className="cursor-pointer w-10 h-10 p-2 mr-2 text-whitealpha1 group-volume"
        onClick={controls[audio.muted ? "unmute" : "mute"]}
      >
        <Icon name={volumeIcon} sizex="24px" className="" />
      </span>
      <span className="cursor-pointer w-10 h-10 text-whitealpha1 p-2 mr-2">
        <Icon name="repeat" sizex="24px" className="" />
      </span>
      <span className="cursor-pointer w-10 h-10 p-2 mr-2 text-whitealpha1">
        <Icon name="shuffle" sizex="24px" />
      </span>
      <span className="cursor-pointer w-12 h-12 p-2 mr-2 text-whitealpha1">
        <Icon name="fullscreen" sizex="32px" />
      </span>
    </div>
  );
}

export default RightContent;
