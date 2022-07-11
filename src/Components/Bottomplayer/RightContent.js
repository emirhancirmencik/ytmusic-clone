import { Icon } from "image/Icons";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullScreen } from "redux/dom/domSlicer";
import { setCurrentSong, setLoop } from "redux/music/musicSlicer";
import MyRange from "./MyRange";

function RightContent({ audio, controls }) {
  const fullScreen = useSelector((state) => state.dom.fullScreen);
  const loop = useSelector((state) => state.music.loop);
  const currentSong = useSelector((state) => state.music.currentSong);
  const dispatch = useDispatch();

  const volumeIcon = useMemo(() => {
    if (audio?.volume === 0 || audio?.muted) {
      return "muted";
    }
    if (audio?.volume > 0) {
      return "volume";
    }
  }, [audio?.volume, audio?.muted]);

  function handleLoop() {
    if (loop === "off") {
      dispatch(setLoop("repeat"));
    } else if (loop === "repeat") {
      dispatch(setLoop("one"));
    } else {
      dispatch(setLoop("off"));
    }
  }

  return (
    <div className="flex items-center w-[292px] justify-end">
      <span className="group-volume w-full flex justify-end ">
        <span
          className="w-full hidden justify-center pt-[2px] pr-2 group-volume-hover:block transition-all"
          onClick={() => dispatch(setFullScreen())}
        >
          <MyRange
            step={0.01}
            min={0}
            max={1}
            value={audio?.muted ? 0 : audio.volume}
            onChange={(value) => {
              controls.volume(value);
              controls.unmute();
            }}
            colors={["#fff", "rgba(255,255,255,0.5)"]}
            styles={["", "rounded-full bg-white opacity-100"]}
          />
        </span>
        <span
          className="cursor-pointer w-10 h-10 p-2 mr-2 text-whitealpha1"
          onClick={() => {
            controls[audio.muted ? "unmute" : "mute"]();
            dispatch(setFullScreen());
          }}
        >
          <Icon name={volumeIcon} sizex="24px" className="" />
        </span>
      </span>
      <span
        className={`cursor-pointer w-10 h-10 ${
          loop === "off" && "text-whitealpha1"
        } p-2 mr-2`}
        onClick={() => {
          dispatch(setFullScreen());
          handleLoop();
          dispatch(setCurrentSong(currentSong));
        }}
      >
        <Icon
          name={loop === "one" ? "repeatOne" : "repeat"}
          sizex="24px"
          className=""
        />
      </span>
      <span
        className="cursor-pointer w-10 h-10 p-2 mr-2 text-whitealpha1"
        onClick={() => dispatch(setFullScreen())}
      >
        <Icon name="shuffle" sizex="24px" />
      </span>
      <span
        className={`cursor-pointer w-12 h-12 p-2 mr-2 text-whitealpha1 ${
          fullScreen && "rotate-180 text-white"
        }`}
      >
        <Icon name="fullscreen" sizex="32px" />
      </span>
    </div>
  );
}

export default RightContent;
