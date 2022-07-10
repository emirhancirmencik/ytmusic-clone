import { Icon } from "image/Icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullScreen } from "redux/dom/domSlicer";

function CenterContent() {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.music.currentSong);
  return (
    <div className="flex items-center font-bold leading-[18px]">
      <div className="w-10 h-10 relative">
        <img
          src={currentSong.cover}
          alt="cover"
          width="40px"
          height="40px"
          className={`absolute inset-0 rounded-sm w-full h-full object-cover`}
        />
      </div>
      <div className="flex flex-col ml-4 mr-2">
        <div className="text-white whitespace-nowrap text-ellipsis flex  align-center">
          {currentSong.name}
        </div>
        <div className="flex text-whitealpha1  text-ellipsis whitespace-pre">
          <span className="hover:underline cursor-pointer">
            {currentSong.artist}
          </span>
          <span> • </span>
          <span>Album • </span>
          <span>99999 Likes</span>
        </div>
      </div>
      <div className="flex items-center">
        <span
          className="cursor-pointer w-10 h-10 p-2 mr-2"
          onClick={() => dispatch(setFullScreen())}
        >
          <Icon name="like" sizex="24px" className="" />
        </span>
        <span
          className="cursor-pointer w-10 h-10 rotate-180 p-2 mr-2"
          onClick={() => dispatch(setFullScreen())}
        >
          <Icon name="like" sizex="24px" className="" />
        </span>
        <span
          className="cursor-pointer w-10 h-10 p-2 text-whitealpha1"
          onClick={() => dispatch(setFullScreen())}
        >
          <Icon name="settings" sizex="24px" />
        </span>
      </div>
    </div>
  );
}

export default CenterContent;
