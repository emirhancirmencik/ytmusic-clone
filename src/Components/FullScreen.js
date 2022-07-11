import { Icon } from "image/Icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setIsPaused } from "redux/music/musicSlicer";
import FullScreenList from "./FullScreen/FullScreenList";
import {
  FullScreen as GetFullScreen,
  useFullScreenHandle,
} from "react-full-screen";
import FullScreen2 from "./FullScreen/FullScreen2";
import Cover from "./FullScreen/Cover";

function FullScreen({ fullScreen, song, controls, state }) {
  const [iconHidden, setIconHidden] = useState(true);
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.music.currentSong);
  const isPaused = useSelector((state) => state.music.isPaused);
  const handle = useFullScreenHandle();
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
    <div
      className={`w-full fullscreen top-full px-16 py-12 content bg-black transition fixed flex z-[999] ${
        fullScreen && "fullscreen-transform"
      }`}
    >
      <GetFullScreen handle={handle}>
        <div className={`${handle.active ? "block" : "hidden"}`}>
          <FullScreen2
            song={song}
            controls={controls}
            state={state}
            handle={handle}
            iconHidden={iconHidden}
          />
        </div>
      </GetFullScreen>
      <div className="flex flex-shrink-0 w-full h-full items-center">
        <Cover
          currentSong={currentSong}
          handle={handle}
          handlePlayButton={handlePlayButton}
          iconHidden={iconHidden}
          isPaused={isPaused}
        />
        <div className="bg-black w-[36%] h-full max-w-[800px] ml-24 flex flex-col">
          <div className="w-full justify-between flex">
            <div className="text-white border-b-2 text-center text-sm w-1/3 py-2 font-bold border-white cursor-pointer select-none">
              UP NEXT
            </div>
            <div className="text-whitealpha1 text-sm text-center w-1/3 py-2 font-bold cursor-default select-none">
              LYRICS
            </div>
            <div className="text-whitealpha1 text-sm text-center w-1/3 py-2 font-semibold cursor-default select-none">
              RELATED
            </div>
          </div>
          <FullScreenList currentSong={currentSong} />
        </div>
      </div>
    </div>
  );
}

export default FullScreen;
