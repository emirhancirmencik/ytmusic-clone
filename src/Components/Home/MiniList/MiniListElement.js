import React from "react";
import { Icon } from "../../../image/Icons";
import Buttons from "./Buttons";
import Cover from "./Cover";

function MiniListElement() {
  return (
    <div className="group w-full flex mb-2 ml-7 pl-1 z-10 relative">
      <Cover />
      <div className="flex ml-3 w-2/3 font-light flex-col text-white group-hover:w-1/3 ">
        <a href="#/" className="hover:underline ">
          test
        </a>
        <div className="inline-flex w-full items-center text-whitealpha1">
          <Icon name="cast" sizex="20px" />
          <a href="#/" className="ml-1 hover:underline ">
            test
          </a>
          <div className="ml-1 cursor-default select-none truncate">
            •
            <span href="#/" className="ml-1 whitespace-nowrap truncate">
              test test22
            </span>
          </div>
        </div>
      </div>
      <Buttons />
    </div>
  );
}

export default MiniListElement;
