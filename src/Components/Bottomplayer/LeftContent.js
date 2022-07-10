import { Icon } from "image/Icons";
import React from "react";
import { setIsPaused } from "../../redux/music/musicSlicer";
import { useDispatch } from "react-redux";
import { setFullScreen } from "redux/dom/domSlicer";

function LeftContent({ duration, time, controls, audio }) {
  const dispatch = useDispatch();

  function handleClick() {
    if (audio?.paused) {
      dispatch(setIsPaused(false));
    } else {
      dispatch(setIsPaused(true));
    }
    dispatch(setFullScreen());
  }

  return (
    <div className="flex items-center w-[292px]">
      <div className="flex text-white items-center">
        <div
          className="ml-2 p-2 items-center w-10 h-10 cursor-pointer"
          onClick={() => dispatch(setFullScreen())}
        >
          <Icon sizex="24" name="prevSong" />
        </div>
        <div
          className="ml-2 w-14 h-14 p-2 cursor-pointer"
          onClick={handleClick}
        >
          <Icon sizex="40" name={audio?.paused ? "play" : "pause"} />
        </div>
        <div
          className="ml-2 p-2 rotate-180 w-10 h-10 cursor-pointer"
          onClick={() => dispatch(setFullScreen())}
        >
          <Icon sizex="24" name="prevSong" />
        </div>
      </div>
      <div
        className="flex text-xs text-whitealpha1 ml-2 mr-4"
        onClick={() => dispatch(setFullScreen())}
      >
        {" "}
        {time[0] === "0" ? time.substr(1, 4) : time} /{" "}
        {duration[0] === "0" ? duration.substr(1, 4) : duration}
      </div>
    </div>
  );
}

export default LeftContent;
