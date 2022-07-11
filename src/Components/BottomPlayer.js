/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import LeftContent from "./Bottomplayer/LeftContent";
import RightContent from "./Bottomplayer/RightContent";
import CenterContent from "./Bottomplayer/CenterContent";
import ProgressBar from "./Bottomplayer/ProgressBar";
import { useAudio } from "react-use";
import { secondsToTime } from "utils";
import { useDispatch, useSelector } from "react-redux";
import { setFullScreen } from "redux/dom/domSlicer";
import { setCurrentSong, setList } from "redux/music/musicSlicer";
import musicList from "static/music";

function BottomPlayer() {
  const currentSong = useSelector((state) => state.music.currentSong);
  const isPaused = useSelector((state) => state.music.isPaused);
  const dispatch = useDispatch();

  const [audio, state, controls, ref] = useAudio({
    src: currentSong.src || "",
    autoPlay: true,
  });

  useEffect(() => {
    if (isPaused) {
      controls.pause();
    } else {
      controls.play();
    }
  }, [isPaused]);

  useEffect(() => {
    dispatch(setList(musicList));
    dispatch(setCurrentSong(currentSong));
  }, []);

  return (
    <div
      className="h-[72px] bg-black1 fixed w-full bottom-0 z-[1000] flex justify-between group-1"
      onClick={() => dispatch(setFullScreen())}
    >
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
