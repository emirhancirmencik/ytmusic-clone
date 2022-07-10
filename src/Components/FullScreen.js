import React from "react";

function FullScreen({ fullScreen, song }) {
  return (
    <div
      className={`w-full fullscreen top-full px-16 py-12 content bg-black transition fixed flex z-[999] ${
        fullScreen && "fullscreen-transform"
      }`}
    >
      <div className="flex flex-shrink-0 w-full h-full items-center">
        <div className="flex-1 flex-shrink-0 mb-16 flex items-center ytmedmax:px-[7%] ytmedmin:px-[10%]">
          <div className="relative pt-[100%] flex items-center h-full w-full group">
            <img
              src={song.coverb}
              alt="cover"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 w-full h-full hidden items-center justify-center  group-hover:flex"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))",
              }}
            ></div>
          </div>
        </div>
        <div className="bg-pink-900 w-[36%] h-full max-w-[800] ml-24"></div>
      </div>
    </div>
  );
}

export default FullScreen;
