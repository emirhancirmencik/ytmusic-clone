/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Icon } from "../../image/Icons";

function ScrollButtons(props) {
  const [scrollElement, setScroll] = useState(0);

  useEffect(() => {
    props.element.current.scrollLeft =
      scrollElement *
      ((props.element.current.scrollWidth / props.elementNumber) *
        props.offsetNumber);
  }, [scrollElement]);

  function handleScroll(raise) {
    if (raise < 0 && scrollElement > 0) {
      setScroll(scrollElement - 1);
    } else if (
      raise > 0 &&
      scrollElement < Math.floor(props.elementNumber / props.offsetNumber) - 1
    ) {
      setScroll(scrollElement + 1);
    }
  }
  return (
    <div className="w-24 flex mt-auto justify-between">
      <div
        className={`border border-whitealpha2 rounded-full w-10 h-10 p-2  cursor-pointer transition-colors ease-in ${
          scrollElement === 0
            ? "opacity-40 cursor-default"
            : "hover:bg-whitealpha2 "
        }`}
        onClick={() => handleScroll(-1)}
      >
        <Icon name="prev" sizex="22px" />
      </div>
      <div
        className={`border rotate-180 border-whitealpha2 rounded-full w-10 h-10 p-2  cursor-pointer transition-colors ease-in ${
          scrollElement ===
          Math.floor(props.elementNumber / props.offsetNumber) - 1
            ? "opacity-40 cursor-default"
            : "hover:bg-whitealpha2 "
        }`}
        onClick={() => handleScroll(+1)}
      >
        <Icon name="prev" sizex="22px" />
      </div>
    </div>
  );
}

export default ScrollButtons;
