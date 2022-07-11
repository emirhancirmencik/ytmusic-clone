import Content from "Components/Content";
import BottomPlayer from "Components/BottomPlayer";
import Dropdown from "Components/Dropdown";
import FullScreen from "Components/FullScreen";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const currentSong = useSelector((state) => state.music.currentSong);
  const fullScreen = useSelector((state) => state.dom.fullScreen);

  useEffect(() => {
    if (fullScreen) {
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = "12px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    }
  }, [fullScreen]);

  return (
    <>
      <Dropdown />
      {currentSong !== "" && <BottomPlayer />}
      <div className="content">
        <Content />
      </div>
    </>
  );
}

export default App;
