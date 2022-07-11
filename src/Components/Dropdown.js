import React, { useEffect } from "react";
import DropdownElement from "./Dropdown/DropdownElement";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { setDropdownActive } from "redux/dom/domSlicer";

const dropDowns = {
  album: [
    {
      text: "Shuffle play",
      icon: "shuffle",
    },
    {
      text: "Start radio",
      icon: "chromecast",
    },
    {
      text: "Play next",
      icon: "playnext",
    },
    {
      text: "Add to queue",
      icon: "addQueue",
    },
    {
      text: "Add album to library",
      icon: "addToLibrary",
    },
    {
      text: "Add to playlist",
      icon: "addToPlayList",
    },
    {
      text: "Share",
      icon: "share",
    },
  ],
  mini: [
    {
      text: "Start radio",
      icon: "chromecast",
    },
    {
      text: "Play next",
      icon: "playnext",
    },
    {
      text: "Add to queue",
      icon: "addQueue",
    },
    {
      text: "Add album to library",
      icon: "addToLibrary",
    },
    {
      text: "Add to playlist",
      icon: "addToPlayList",
    },
    {
      text: "Go to album",
      icon: "goToAlbum",
    },
    {
      text: "Go to artist",
      icon: "goToArtist",
    },
    {
      text: "Share",
      icon: "share",
    },
  ],
};

function Dropdown() {
  const position = useSelector((state) => state.dom.settingButton);
  const isDropdownActive = useSelector((state) => state.dom.isDropdownActive);
  const dropDownElement = useSelector((state) => state.dom.dropDownElement);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setDropdownActive("mini"));
  }

  useEffect(() => {
    if (isDropdownActive) {
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = "12px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    }
  }, [isDropdownActive]);
  return (
    <div
      className={`w-full bg-transparent overflow-y-scroll h-screen left-0 top-0 z-50 ${
        isDropdownActive ? "fixed" : "hidden"
      } `}
      onClick={handleClick}
    >
      <div
        className={`absolute flex-col bg-black1 py-4  z-50 w-60 h-auto border-whitealpha1 border rounded-[2p]`}
        style={{ top: `${position.offsetY}px`, left: `${position.offsetX}px` }}
      >
        {dropDowns[dropDownElement].map((item, index) => {
          return (
            <DropdownElement text={item.text} icon={item.icon} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
