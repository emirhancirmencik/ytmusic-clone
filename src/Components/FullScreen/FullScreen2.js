import React from "react";
import { Icon } from "image/Icons";
import ProgressBar from "Components/Bottomplayer/ProgressBar";
import LeftContent from "Components/Bottomplayer/LeftContent";
import CenterContent from "Components/Bottomplayer/CenterContent";
import RightContent from "Components/Bottomplayer/RightContent";
import { secondsToTime } from "utils";
function FullScreen2({ song, controls, state, handle }) {
  return (
    <div className="relative pt-[100%] flex items-center h-full w-full group">
      <img
        src={song.coverb}
        alt="cover"
        className="absolute inset-0 w-screen h-screen object-cover"
      />
      {state && (
        <div className="h-[72px] bg-transparent fixed w-full bottom-0 z-[1000] flex justify-between group-1">
          <ProgressBar controls={controls} audio={state} />
          <LeftContent
            controls={controls}
            duration={secondsToTime(state?.duration) || 1}
            time={secondsToTime(state?.time)}
            audio={state}
          />
          <CenterContent />
          <RightContent
            controls={controls}
            audio={state}
            fullScreenIcon={"fullscreen2"}
            handle={handle}
          />
        </div>
      )}
    </div>
  );
}

export default FullScreen2;
