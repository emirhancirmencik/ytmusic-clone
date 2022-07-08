import { Icon } from "image/Icons";
import React from "react";

function LeftContent() {
  return (
    <div className="flex items-center w-[292px]">
      <div className="flex text-white items-center">
        <div className="ml-2 p-2 items-center w-10 h-10 ">
          <Icon sizex="24" name="prevSong" />
        </div>
        <div className="ml-2 w-14 h-14 p-2">
          <Icon sizex="40" name="play" />
        </div>
        <div className="ml-2 p-2 rotate-180 w-10 h-10">
          <Icon sizex="24" name="prevSong" />
        </div>
      </div>
      <div className="flex text-xs text-whitealpha1 ml-2 mr-4">
        {" "}
        0:00 / 0:00
      </div>
    </div>
  );
}

export default LeftContent;
