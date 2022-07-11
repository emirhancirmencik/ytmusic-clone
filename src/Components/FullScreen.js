import { Icon } from "image/Icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setIsPaused } from "redux/music/musicSlicer";
import FullScreenList from "./FullScreen/FullScreenList";

function FullScreen({ fullScreen, song }) {
  const [iconHidden, setIconHidden] = useState(true);
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.music.currentSong);
  const isPaused = useSelector((state) => state.music.isPaused);
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
      <div className="flex flex-shrink-0 w-full h-full items-center">
        <div
          className="flex-1 flex-shrink-0 mb-16 mt-8 flex items-center ytmedmax:px-[7%] ytmedmin:px-[10%]"
          onClick={handlePlayButton}
        >
          <div className="relative pt-[100%] flex items-center h-full w-full group">
            <img
              src={song.coverb}
              alt="cover"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 w-full h-full hidden items-center justify-center  group-hover:flex"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))",
              }}
            >
              <span
                className={` bg-black rounded-full ${
                  iconHidden
                    ? "opacity-75 scale-0"
                    : "transition duration-500 opacity-0  scale-[4]"
                }`}
              >
                <Icon
                  name={
                    currentSong.src !== song.src
                      ? "play"
                      : isPaused
                      ? "pause"
                      : "play"
                  }
                  sizex="50px"
                />
              </span>
            </div>
          </div>
        </div>
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
          <FullScreenList song={song} />
        </div>
      </div>
    </div>
  );
}

export default FullScreen;
