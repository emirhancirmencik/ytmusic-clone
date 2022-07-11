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
import FullScreen from "./FullScreen";

function BottomPlayer() {
  const currentSong = useSelector((state) => state.music.currentSong);
  const nextSong = useSelector((state) => state.music.nextSong);
  const isPaused = useSelector((state) => state.music.isPaused);
  const loop = useSelector((state) => state.music.loop);
  const fullScreen = useSelector((state) => state.dom.fullScreen);
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

  useEffect(() => {
    if (
      state?.duration - state?.time < 1 &&
      nextSong !== "" &&
      state?.duration !== 0 &&
      state?.paused === true
    ) {
      if (loop === "one") {
        state.duration = 0;
        controls.play();
      } else {
        dispatch(setCurrentSong(nextSong));
      }
    }
  }, [state.paused]);

  return (
    <>
      <div
        className="h-[72px] bg-black1 fixed w-full bottom-0 z-[1000] flex justify-between group-1"
        onClick={() => dispatch(setFullScreen())}
      >
        {audio}
        <ProgressBar controls={controls} audio={state} />
        <LeftContent />
        <CenterContent />
        <RightContent
          controls={controls}
          audio={state}
          fullScreenIcon={"fullscreen"}
        />
      </div>
      <FullScreen
        fullScreen={fullScreen}
        song={currentSong}
        controls={controls}
        state={state}
      />
    </>
  );
}

export default BottomPlayer;
