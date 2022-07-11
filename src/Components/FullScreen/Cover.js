import { Icon } from "image/Icons";
import React from "react";

const Cover = React.memo(function Cover({
  currentSong,
  handle,
  handlePlayButton,
  iconHidden,
  isPaused,
}) {
  return (
    <div className="flex-1 flex-shrink-0 mb-16 mt-8 flex items-center ytmedmax:px-[7%] ytmedmin:px-[10%]">
      <div className="relative pt-[100%] flex items-center h-full w-full group">
        <img
          src={currentSong.coverb}
          alt="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span
          className="top-3 right-3 absolute text-white z-20 hidden group-hover:flex cursor-pointer"
          onClick={handle.enter}
        >
          <Icon name={"fullscreen2"} sizex="30px" />
        </span>
        <div
          className="absolute inset-0 w-full h-full hidden items-center justify-center group-hover:flex"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))",
          }}
          onClick={handlePlayButton}
          onDoubleClick={handle.enter}
        >
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
    </div>
  );
});

export default Cover;
