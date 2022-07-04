import React from "react";
import { Icon } from "../../../image/Icons";
import cover from "../../../image/cover.jpg";

function MiniListElement() {
  return (
    <div className="group w-full flex mb-2">
      <img
        src={cover}
        alt="cover"
        width="100%"
        height="100%"
        className="w-12 h-12"
      />
      <div className="flex ml-3 w-2/3 font-light flex-col text-white group-hover:w-1/3 ">
        <div>test</div>
        <div className="inline-flex w-full items-center text-whitealpha1">
          <Icon name="cast" sizex="20px" />
          <a href="#/" className="ml-1 hover:underline ">
            test
          </a>
          <div className="ml-1 cursor-default select-none truncate  ">
            {" "}
            •
            <a
              href="#/"
              className="ml-1 hover:underline whitespace-nowrap truncate   "
            >
              test test22
            </a>
          </div>
        </div>
      </div>
      <div className="hidden ml-auto pr-5 mr-5 w-1/3 justify-between items-center text-whitealpha1 group-hover:inline-flex">
        {" "}
        <span className="cursor-pointer">
          <Icon name="like" sizex="20px" className="" />
        </span>
        <span className="cursor-pointer rotate-180">
          <Icon name="like" sizex="20px" className="" />
        </span>
        <span className="cursor-pointer">
          <Icon name="settings" sizex="20px" />
        </span>
      </div>
    </div>
  );
}

export default MiniListElement;
