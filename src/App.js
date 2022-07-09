import Content from "Components/Content";
import BottomPlayer from "Components/BottomPlayer";
import Dropdown from "Components/Dropdown";
import { useSelector } from "react-redux";
import { useAudio } from "react-use";

function App() {
  const currentSong = useSelector((state) => state.music.currentSong);

  const [audio, state, controls, ref] = useAudio({
    src: currentSong.src || "",
    autoPlay: true,
  });

  return (
    <>
      {audio}
      <Dropdown />
      <div className="content">
        <Content controls={controls} state={state} />
      </div>
      {currentSong !== "" && <BottomPlayer controls={controls} state={state} />}
    </>
  );
}

export default App;
