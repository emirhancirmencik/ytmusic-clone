import { Icon } from "image/Icons";
import React from "react";
import cover from "../../image/cover.jpg";

function CenterContent() {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 relative">
        <img
          src={cover}
          alt="cover"
          width="40px"
          height="40px"
          className={`absolute inset-0 rounded-sm w-full h-full object-cover`}
        />
      </div>
      <div className="flex flex-col ml-4 mr-2">
        <div className="text-white whitespace-nowrap text-ellipsis flex  align-center">
          Song Name
        </div>
        <div className="flex text-whitealpha1  text-ellipsis whitespace-pre">
          <span className="hover:underline cursor-pointer">Artist Name</span>
          <span> • </span>
          <span className="hover:underline cursor-pointer">Album Name</span>
          <span> • </span>
          <span>2000</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="cursor-pointer w-10 h-10 p-2 mr-2">
          <Icon name="like" sizex="24px" className="" />
        </span>
        <span className="cursor-pointer w-10 h-10 rotate-180 p-2 mr-2">
          <Icon name="like" sizex="24px" className="" />
        </span>
        <span className="cursor-pointer w-10 h-10 p-2 text-whitealpha1">
          <Icon name="settings" sizex="24px" />
        </span>
      </div>
    </div>
  );
}

export default CenterContent;
