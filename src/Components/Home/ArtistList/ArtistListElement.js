import React from "react";
import cover from "../../../image/cover.jpg";

function ArtistListElement() {
  return (
    <div className="group w-full flex flex-col mb-2 ml-7 relative text-[17px]">
      <div className="flex cursor-pointer relative">
        <img
          src={cover}
          alt="cover"
          width="100%"
          height="100%"
          className={`w-56 h-56 rounded-full object-cover`}
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
