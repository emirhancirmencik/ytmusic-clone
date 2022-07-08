import React, { useRef } from "react";
import cover from "../../../image/cover.jpg";
import { Icon } from "../../../image/Icons";
import { useDispatch } from "react-redux";
import {
  setButtonPosition,
  setDropdownActive,
} from "../../../redux/dom/domSlicer";
import {
  useRect,
  useWindowDimensions,
} from "../../../hooks/useWindowDimensions";
function Cover() {
  const myref = useRef(0);
  const dispatch = useDispatch();
  const pos = useRect(myref);
  const windowDimension = useWindowDimensions();
  function handleClick() {
    let x = pos.x + 30;
    let y = pos.y + 24;

    if (y + 370 >= windowDimension.height) {
      y += -370;
    }

    if (x + 250 >= windowDimension.width) {
      x += -250;
    }
    dispatch(
      setButtonPosition({
        x: x,
        y: y,
      })
    );

    dispatch(setDropdownActive("album"));
  }

  return (
    <div className="flex w-full cursor-pointer relative">
      <img
        src={cover}
        alt="cover"
        width="100%"
        height="100%"
        className={`ytmedmax:w-[182px] ytmedmax:h-[182px] ytmedmin:w-56 ytmedmin:h-56 rounded object-cover`}
      />

      <>
        <div
          className="ytmedmax:w-[182px] ytmedmax:h-[182px] ytmedmin:w-56 ytmedmin:h-56  absolute hidden items-center justify-center rounded group-hover:flex"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))",
          }}
        ></div>

        <div
          onClick={handleClick}
          ref={myref}
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
