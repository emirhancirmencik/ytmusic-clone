/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Icon } from "../../image/Icons";

function ScrollButtons(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const slideScroll = () => {
    const position = props.element.current.scrollLeft;
    setScrollPosition(position);
  };

  useEffect(() => {
    props.element.current.addEventListener("scroll", slideScroll);
  }, []);

  function handleScroll(raise) {
    props.element.current.scrollLeft += Math.round(
      raise *
        ((props.element.current.scrollWidth / props.elementNumber) *
          props.offsetNumber +
          props.marginValue / 2)
    );
  }
  return (
    <div className="w-24 flex mt-auto justify-between">
      <button
        className={`border border-whitealpha2 rounded-full w-10 h-10 p-2  cursor-pointer transition-colors ease-in ${
          scrollPosition === 0
            ? "opacity-40 cursor-default"
            : "hover:bg-whitealpha2 active:scale-90"
        }`}
        onClick={() => handleScroll(-1)}
      >
        <Icon name="prev" sizex="22px" />
      </button>
      <div
        className={`border rotate-180 border-whitealpha2 rounded-full w-10 h-10 p-2  cursor-pointer transition-colors ease-in ${
          scrollPosition ===
          Math.floor(
            (props.elementNumber - props.offsetNumber) *
              (props.element.current.scrollWidth / props.elementNumber)
          ) +
            props.marginValue
            ? "opacity-40 cursor-default"
            : "hover:bg-whitealpha2 active:scale-90"
        }`}
        onClick={() => handleScroll(+1)}
      >
        <Icon name="prev" sizex="22px" />
      </div>
    </div>
  );
}

export default ScrollButtons;
