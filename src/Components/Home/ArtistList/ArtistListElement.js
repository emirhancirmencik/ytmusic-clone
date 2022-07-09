import React from "react";
import cover from "../../../image/cover.jpg";

function ArtistListElement() {
  return (
    <div className="group w-full flex flex-col mb-2 ml-7 ytmedmax:pl-1 relative items-center text-[17px]">
      <div className="ytmedmax:w-[182px] ytmedmax:h-[182px] ytmedmin:w-56 ytmedmin:h-56 pt-[100%] relative flex items-center justify-center cursor-pointer ">
        <img
          src={cover}
          alt="cover"
          className={`absolute inset-0 rounded-full w-full h-full  object-cover`}
        />
      </div>
      <div className="flex mt-2 w-full font-light flex-col text-white items-center ">
        <div className="hover:underline align-left cursor-pointer">
          Hip Hop Classics
        </div>
        <div className="flex text-whitealpha1">
          <div className="ml-1 cursor-default  select-none truncate">
            <span href="#/" className=" whitespace-nowrap truncate">
              22222K subscribers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistListElement;
