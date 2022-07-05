import React from "react";
import { Icon } from "../../../image/Icons";
import Cover from "./Cover";

function AlbumListElement() {
  return (
    <div className="group w-full flex flex-col mb-2 ml-7 relative">
      <Cover />
      <div className="flex mt-2 w-full font-light flex-col text-white ">
        <div className="hover:underline align-left cursor-pointer">
          {" "}
          Hip Hop Classics
        </div>
        <div className="flex text-whitealpha1">
          <span>Album</span>
          <div className="ml-1 cursor-default  select-none truncate">
            {" "}
            •{" "}
            <a
              href="#/"
              className=" whitespace-nowrap hover:underline truncate"
            >
              test test22
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumListElement;
