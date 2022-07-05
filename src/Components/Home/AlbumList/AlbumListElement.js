import React from "react";
import { Icon } from "../../../image/Icons";
import Cover from "./Cover";

function AlbumListElement() {
  return (
    <div className="group w-full flex flex-col mb-2 mr-7 relative">
      <Cover />
      <div className="flex ml-3 w-2/3 font-light flex-col text-white group-hover:w-1/3 ">
        <div>test</div>
        <div className="inline-flex w-full items-center text-whitealpha1">
          <Icon name="cast" sizex="20px" />
          <a href="#/" className="ml-1 hover:underline ">
            test
          </a>
          <div className="ml-1 cursor-default select-none truncate">
            {" "}
            •
            <span href="#/" className="ml-1 whitespace-nowrap truncate">
              test test22
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumListElement;
