import React, { useRef } from "react";
import cover from "../../../image/cover.jpg";
import { Icon } from "../../../image/Icons";
import { useDispatch } from "react-redux";
import {
  setButtonPosition,
  setDropdownActive,
} from "../../../redux/dom/domSlicer";
import { useRect, useScroll } from "../../../hooks/useWindowDimensions";
function Cover() {
  const myref = useRef(0);
  const dispatch = useDispatch();
  const pos = useRect(myref);
  const scroll = useScroll();
  function handleClick() {
    dispatch(
      setButtonPosition({
        x:
          pos.x -
          myref.current.parentElement.parentElement.parentElement.scrollLeft +
          210,
        y: pos.y - (isNaN(scroll.y) ? 0 : scroll.y) + 42,
        scroll: pos.y,
      })
    );

    dispatch(setDropdownActive());
  }

  return (
    <div ref={myref} className="flex cursor-pointer relative">
      <img
        src={cover}
        alt="cover"
        width="100%"
        height="100%"
        className={`w-56 h-56 rounded object-cover`}
      />

      <>
        <div
          className="w-56 h-56 absolute hidden items-center justify-center rounded group-hover:flex"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))",
          }}
        ></div>

        <div
          onClick={handleClick}
          className="text-white overflow absolute hidden w-12 h-12 items-center right-0 top-0 justify-center group-hover:flex before:contents-[''] before:w-0 before:h-0 active:before:w-10 active:before:h-10 before:absolute before:bg-black before:opacity-0 before:rounded-full active:before:opacity-20 active:before:transition-all"
        >
          <Icon name="settings" sizex="25px" />
        </div>

        <div className="w-12 h-12 bg-opacity-50 bottom-4 rounded-full right-4 absolute hidden items-center justify-center hover:scale-110 transition-all hover:bg-opacity-80  bg-black group-hover:flex">
          <div className="text-white absolute hidden items-center justify-center group-hover:flex">
            <Icon name="play" sizex="20px" />
          </div>
        </div>
      </>
    </div>
  );
}

export default Cover;
