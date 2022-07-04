import React, { useRef, useState } from "react";
import { Icon } from "../../image/Icons";
import cover from "../../image/cover.jpg";
import MiniListElement from "./Lists/MiniListElement";

function MiniList(props) {
  const [scrollElement, setScroll] = useState(0);
  const ref = useRef(0);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setScroll(scrollOffset);
  };

  return (
    <div className="w-[1200px] pt-[32px] mx-auto">
      <div
        className={`${
          props.strapline.length === 0 ? "d-none" : ""
        } text-grey2 mb-[2px] text-[17px]`}
      >
        {props.strapline}
      </div>
      <div className="flex justify-between">
        <h1 className="text-white text-[45px] font-bold">{props.header}</h1>
        <div className="w-24 flex mt-auto justify-between">
          <div
            className={`border border-whitealpha2 rounded-full w-10 h-10 p-2  cursor-pointer transition-colors ease-in ${
              scrollElement < 400
                ? "opacity-40 cursor-default"
                : "hover:bg-whitealpha2 "
            }`}
            onClick={() => scroll(-400)}
          >
            <Icon name="prev" sizex="22px" />
          </div>
          <div
            className={`border rotate-180 border-whitealpha2 rounded-full w-10 h-10 p-2  cursor-pointer transition-colors ease-in ${
              scrollElement >= 400
                ? "opacity-40 cursor-default"
                : "hover:bg-whitealpha2 "
            }`}
            onClick={() => scroll(400)}
          >
            <Icon name="prev" sizex="22px" />
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="flex w-full overflow-x-hidden scroll-smooth mt-5"
      >
        <div className="flex flex-col w-[400px] flex-shrink-0">
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
        </div>
        <div className="flex flex-col  w-[400px] flex-shrink-0">
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
        </div>
        <div className="flex flex-col w-[400px] flex-shrink-0">
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
        </div>
        <div className="flex flex-col w-[400px] flex-shrink-0">
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
          <MiniListElement />
        </div>
      </div>
    </div>
  );
}

export default MiniList;
