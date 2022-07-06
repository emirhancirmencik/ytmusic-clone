import React, { useEffect } from "react";
import { Icon } from "../image/Icons";
import DropdownElement from "./Dropdown/DropdownElement";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { setDropdownActive } from "redux/dom/domSlicer";

function Dropdown() {
  const position = useSelector((state) => state.dom.settingButton);
  const isDropdownActive = useSelector((state) => state.dom.isDropdownActive);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setDropdownActive());
  }

  useEffect(() => {
    if (isDropdownActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDropdownActive]);
  return (
    <div
      className={`w-screen bg-transparent h-screen left-0 top-0 z-50 ${
        isDropdownActive ? "fixed" : "hidden"
      } `}
      onClick={handleClick}
    >
      <div
        className={`absolute flex-col bg-black1 py-4  z-50 w-60 h-auto border-whitealpha1 border rounded-[2p]`}
        style={{ top: `${position.offsetY}px`, left: `${position.offsetX}px` }}
      >
        <DropdownElement />
        <DropdownElement />
        <DropdownElement />
      </div>
    </div>
  );
}

export default Dropdown;
