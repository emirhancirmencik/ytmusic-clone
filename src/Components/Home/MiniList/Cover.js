import React from "react";
import cover from "../../../image/cover.jpg";
import { Icon } from "../../../image/Icons";

function Cover() {
  return (
    <div className="flex cursor-pointer">
      <div className="relative pt-[100%] w-12 h-12">
        <img
          src={cover}
          alt="cover"
          className="inset-0 absolute object-cover w-full h-full"
        />
      </div>

      <div className="w-12 h-12 bg-opacity-90 absolute hidden items-center justify-center bg-black group-hover:flex">
        <div className="text-white absolute w-12 h-12 hidden items-center justify-center group-hover:flex">
          <Icon name="play" sizex="20px" />
        </div>
      </div>
    </div>
  );
}

export default Cover;
