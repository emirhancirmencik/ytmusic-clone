import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setIsPaused } from "redux/music/musicSlicer";
import { Icon } from "../../../image/Icons";
import Buttons from "./Buttons";
import Cover from "./Cover";

function MiniListElement({ song }) {
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
  }
  return (
    <div className="group w-full flex mb-2 ml-7 pl-1 z-10 relative">
      <Cover song={song} handlePlayButton={handlePlayButton} />
      <div className="flex ml-3 w-2/3 font-light flex-col text-white group-hover:w-1/3 whitespace-nowrap text-ellipsis overflow-clip">
        <div className="hover:underline cursor-pointer">{song.name}</div>
        <div className="inline-flex w-full items-center text-whitealpha1">
          <Icon name="cast" sizex="20px" />
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
      <Buttons />
    </div>
  );
}

export default MiniListElement;
