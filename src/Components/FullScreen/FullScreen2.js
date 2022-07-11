import React, { useState } from "react";
import ProgressBar from "Components/Bottomplayer/ProgressBar";
import LeftContent from "Components/Bottomplayer/LeftContent";
import CenterContent from "Components/Bottomplayer/CenterContent";
import RightContent from "Components/Bottomplayer/RightContent";
import { secondsToTime } from "utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setIsPaused } from "redux/music/musicSlicer";
import { Icon } from "image/Icons";
function FullScreen2({ song, controls, state, handle }) {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.music.currentSong);
  const isPaused = useSelector((state) => state.music.isPaused);
  const [iconHidden, setIconHidden] = useState(true);

  function handlePlayButton() {
    if (currentSong?.src !== song?.src) {
      dispatch(setCurrentSong(song));
      dispatch(setIsPaused(false));
    } else {
      dispatch(setIsPaused(!isPaused));
    }
    setTimeout(() => {
      setIconHidden(true);
    }, 600);
    setIconHidden(false);
  }
  return (
    <>
      <div
        className="relative pt-[100%] flex items-center h-screen w-screen group"
        onClick={handlePlayButton}
        onDoubleClick={handle.exit}
      >
        <img
          src={currentSong.coverb}
          alt="cover"
          className="absolute inset-0 w-screen h-screen object-cover"
        />

        <div className="absolute inset-0 w-screen h-screen hidden items-center justify-center group-hover:flex">
          <span
            className={` bg-black rounded-full ${
              iconHidden
                ? "opacity-75 scale-0"
                : "transition duration-500 opacity-0  scale-[4]"
            }`}
          >
            <Icon name={isPaused ? "pause" : "play"} sizex="50px" />
          </span>
        </div>
      </div>
      {state && (
        <div className="h-[72px] bg-transparent fixed w-full bottom-0 z-[1000] flex justify-between group-1">
          <ProgressBar controls={controls} audio={state} />
          <LeftContent />
          <CenterContent />
          <RightContent
            controls={controls}
            audio={state}
            fullScreenIcon={"fullscreen2"}
            handle={handle}
          />
        </div>
      )}
    </>
  );
}

export default FullScreen2;
