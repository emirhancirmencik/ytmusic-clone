import { Icon } from "image/Icons";
import React from "react";

function NavButtons() {
  return (
    <div className="ytmedmax:w-[1264px] ytmedmin:w-[1489px] mx-auto z-20 mt-10 mb-14">
      <div className="flex w-full h-full">
        <div className="bg-whitealpha5 hover:bg-black1 flex mr-6 w-full items-center text-2xl py-2 rounded pl-3 font-bold cursor-pointer">
          <span className="p-3 text-grey2">
            <Icon name={"musicicon"} sizex={"24px"} />
          </span>
          <span>New releases</span>
        </div>
        <div className="bg-whitealpha5 hover:bg-black1 flex mr-6 w-full items-center text-2xl py-2 rounded pl-3 font-bold cursor-pointer">
          <span className="p-3 text-grey2">
            <Icon name={"chart"} sizex={"24px"} />
          </span>
          <span>Charts</span>
        </div>
        <div className="bg-whitealpha5 hover:bg-black1 flex mr-6 w-full items-center text-2xl py-2 rounded pl-3 font-bold cursor-pointer">
          <span className="p-3 text-grey2">
            <Icon name={"smiley"} sizex={"24px"} />
          </span>
          <span>Moods & Genres</span>
        </div>
      </div>
    </div>
  );
}

export default NavButtons;
