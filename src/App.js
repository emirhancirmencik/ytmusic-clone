import Content from "Components/Content";
import BottomPlayer from "Components/BottomPlayer";
import Dropdown from "Components/Dropdown";

function App() {
  return (
    <>
      <Dropdown />
      <div className="content">
        <Content />
      </div>
      <BottomPlayer />
    </>
  );
}

export default App;
