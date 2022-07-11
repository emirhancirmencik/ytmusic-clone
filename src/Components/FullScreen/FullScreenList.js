import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "image/Icons";
import { useDispatch } from "react-redux";
import { setCurrentSong, setIsPaused } from "redux/music/musicSlicer";
import { nanoid } from "@reduxjs/toolkit";

const FullScreenList = React.memo(function FullScreenList({ currentSong }) {
  const musicList = useSelector((state) => state.music.list);
  const isPaused = useSelector((state) => state.music.isPaused);
  const dispatch = useDispatch();

  function handlePlayButton(song) {
    if (currentSong?.src !== song?.src) {
      dispatch(setCurrentSong(song));
      dispatch(setIsPaused(false));
    } else {
      dispatch(setIsPaused(!isPaused));
    }
  }

  return (
    <div className="w-full overflow-y-scroll flex flex-col fullscreen-scrollbar">
      {musicList &&
        musicList.map((song) => {
          return (
            <div
              className={`group w-full flex pl-3 z-10 relative py-1 border-b-[1px] items-center border-whitealpha3 ${
                song.src === currentSong.src && "bg-whitealpha3"
              }`}
              key={nanoid()}
            >
              <div className="flex cursor-pointer items-center">
                <div className="relative pt-[100%] w-8 h-8">
                  <img
                    src={song.cover}
                    alt="cover"
                    className="inset-0 absolute object-cover w-full h-full"
                  />
                </div>

                <div className="w-8 h-8 bg-opacity-90 absolute hidden items-center justify-center bg-black group-hover:flex">
                  <div
                    className="text-white absolute w-8 h-8 hidden items-center justify-center group-hover:flex"
                    onClick={() => handlePlayButton(song)}
                  >
                    <Icon
                      name={
                        currentSong.src !== song.src
                          ? "play"
                          : isPaused
                          ? "play"
                          : "pause"
                      }
                      sizex="20px"
                    />
                  </div>
                </div>
              </div>
              <div className="flex ml-3 w-2/3 flex-col font-bold text-white whitespace-nowrap text-ellipsis overflow-clip">
                <div
                  className="hover:underline cursor-pointer"
                  onClick={() => handlePlayButton(song)}
                >
                  {song.name}
                </div>
                <div className="inline-flex w-full items-center text-whitealpha1">
                  <div href="#/" className="ml-1 hover:underline ">
                    {song.artist}
                  </div>
                  <div className="ml-1 cursor-default select-none truncate">
                    •
                    <span href="#/" className="ml-1 whitespace-nowrap truncate">
                      9999 Like
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
});

export default FullScreenList;
