import React, { useRef } from "react";
import SongListElement from "./SongList/SongListElement";
import MiniListElement from "./MiniList/MiniListElement";
import ArtistListElement from "./ArtistList/ArtistListElement";
import ScrollButtons from "./ScrollButtons";
import musicList from "static/music";

function List(props) {
  const ref = useRef(0);
  const type = props.type;

  return (
    <div className="ytmedmax:w-[1264px] ytmedmin:w-[1489px] pt-8 mx-auto z-20">
      {props.strapline && (
        <div
          className={`${
            props.strapline.length === 0 ? "d-none" : ""
          } text-grey2 mb-[2px] text-[17px] p-1`}
        >
          {props.strapline}
        </div>
      )}
      <div className="flex justify-between">
        <h1 className="text-white text-[45px] font-bold">{props.header}</h1>
        <ScrollButtons
          element={ref}
          offsetNumber={type === "Mini" ? 3 : 6}
          elementNumber={type === "Mini" ? 13 : 18}
          marginValue={type === "Mini" ? 0 : 14}
        />
      </div>
      <div
        ref={ref}
        className="flex mylist w-full overflow-x-scroll box-border max-h-30 scroll-smooth mt-5"
      >
        {type === "Mini" ? (
          <>
            <div className="mylist flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="mylist flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
              <MiniListElement controls={props.controls} state={props.state} />
            </div>
          </>
        ) : (
          <>
            <div className="flex mylist justify-between flex-shrink-0">
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[0]}
              />
              <ArtistListElement />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[1]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[2]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[3]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[4]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[5]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[6]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[7]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[8]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[9]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[10]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[11]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[12]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[13]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[14]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[15]}
              />
              <SongListElement
                controls={props.controls}
                state={props.state}
                song={musicList[16]}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default List;
