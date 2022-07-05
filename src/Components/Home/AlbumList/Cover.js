import React from "react";
import cover from "../../../image/cover.jpg";
import { Icon } from "../../../image/Icons";

function Cover() {
  return (
    <div className="flex cursor-pointer relative">
      <img
        src={cover}
        alt="cover"
        width="100%"
        height="100%"
        className="w-56 h-56 rounded"
      />
      <div
        className="w-56 h-56 absolute hidden items-center justify-center group-hover:flex"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))",
        }}
      ></div>

      <div className="w-12 h-12 bg-opacity-50 bottom-4 rounded-full right-4 absolute hidden items-center justify-center hover:scale-110 transition-all hover:bg-opacity-80  bg-black group-hover:flex">
        <div className="text-white absolute hidden items-center justify-center group-hover:flex">
          <Icon name="play" sizex="20px" />
        </div>
      </div>
    </div>
  );
}

export default Cover;
