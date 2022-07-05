import React, { useState } from "react";
import { Icon } from "../../image/Icons";

function ScrollButtons(props) {
  const [scrollElement, setScroll] = useState(0);
  const scroll = (scrollOffset) => {
    props.element.current.scrollLeft += scrollOffset;
    setScroll(scrollOffset);
  };
  return (
    <div className="w-24 flex mt-auto justify-between">
      <div
        className={`border border-whitealpha2 rounded-full w-10 h-10 p-2  cursor-pointer transition-colors ease-in ${
          scrollElement < 400
            ? "opacity-40 cursor-default"
            : "hover:bg-whitealpha2 "
        }`}
        onClick={() => scroll(-496.33)}
      >
        <Icon name="prev" sizex="22px" />
      </div>
      <div
        className={`border rotate-180 border-whitealpha2 rounded-full w-10 h-10 p-2  cursor-pointer transition-colors ease-in ${
          scrollElement >= 400
            ? "opacity-40 cursor-default"
            : "hover:bg-whitealpha2 "
        }`}
        onClick={() => scroll(496.33)}
      >
        <Icon name="prev" sizex="22px" />
      </div>
    </div>
  );
}

export default ScrollButtons;
