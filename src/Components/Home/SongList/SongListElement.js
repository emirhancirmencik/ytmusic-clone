import React from "react";
import Cover from "./Cover";

function SongElement({ song }) {
  return (
    <div className="group w-full flex mylistelement flex-col ytmedmax:pl-1 mb-2 ml-7">
      <Cover song={song} />
      <div className="flex mt-2 ytmedmax:w-[182px] ytmedmin:w-56  font-light flex-col text-white ">
        <div className="hover:underline align-left cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden">
          {song.name}
        </div>
        <div className="flex text-whitealpha1">
          <span>Song</span>
          <div className="ml-1 cursor-default  select-none truncate">
            {" "}
            •{" "}
            <div
              href="#/"
              className=" whitespace-nowrap hover:underline truncate inline cursor-pointer"
            >
              {song.artist}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongElement;
