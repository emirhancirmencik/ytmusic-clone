import React from "react";
import LeftContent from "./Bottomplayer/LeftContent";
import RightContent from "./Bottomplayer/RightContent";
import CenterContent from "./Bottomplayer/CenterContent";
import ProgressBar from "./Bottomplayer/ProgressBar";
import { useAudio } from "react-use";
import { secondsToTime } from "utils";

function BottomPlayer() {
  const [audio, state, controls, ref] = useAudio({
    src: "https://cdn.freesound.org/previews/634/634642_11861866-lq.mp3",
  });
  return (
    <div className="h-[72px] bg-black1 fixed w-full bottom-0 z-30 flex justify-between group-1">
      {audio}

      <ProgressBar controls={controls} audio={state} />
      <LeftContent
        controls={controls}
        duration={secondsToTime(state?.duration)}
        time={secondsToTime(state?.time)}
        audio={state}
      />
      <CenterContent />
      <RightContent controls={controls} audio={state} />
    </div>
  );
}

export default BottomPlayer;
