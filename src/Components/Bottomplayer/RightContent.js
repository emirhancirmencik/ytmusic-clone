import { Icon } from "image/Icons";
import React from "react";

function RightContent() {
  return (
    <div className="flex items-center w-[292px] justify-end">
      <span className="cursor-pointer w-10 h-10 p-2 mr-2 text-whitealpha1">
        <Icon name="volume" sizex="24px" className="" />
      </span>
      <span className="cursor-pointer w-10 h-10 text-whitealpha1 p-2 mr-2">
        <Icon name="repeat" sizex="24px" className="" />
      </span>
      <span className="cursor-pointer w-10 h-10 p-2 mr-2 text-whitealpha1">
        <Icon name="shuffle" sizex="24px" />
      </span>
      <span className="cursor-pointer w-12 h-12 p-2 mr-2 text-whitealpha1">
        <Icon name="fullscreen" sizex="32px" />
      </span>
    </div>
  );
}

export default RightContent;
