import React, { useEffect, useRef, useState } from "react";
import SongListElement from "./SongList/SongListElement";
import MiniListElement from "./MiniList/MiniListElement";
import ScrollButtons from "./ScrollButtons";
import musicList from "static/music";
import artistList from "static/artist";
import ArtistListElement from "./ArtistList/ArtistListElement";
import { nanoid } from "@reduxjs/toolkit";

function List(props) {
  const ref = useRef(0);
  const type = props.type;
  const _map = Array(5);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...musicList].sort(() => Math.random() - 0.5));
  }, []);

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
          elementNumber={type === "Mini" ? _map.length : musicList.length}
          marginValue={type === "Mini" ? 0 : 14}
        />
      </div>
      <div
        ref={ref}
        className="flex mylist w-full overflow-x-scroll box-border max-h-30 scroll-smooth mt-5"
      >
        {type === "Mini" ? (
          <>
            {[..._map].map((_, i) => {
              return (
                <div
                  className="mylist flex flex-col w-1/3 flex-shrink-0"
                  key={nanoid()}
                >
                  {list?.map((song, j) => {
                    if (j >= i * 4 && j <= (i + 1) * 4 - 1)
                      return <MiniListElement song={song} key={nanoid()} />;
                    return "";
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div className="flex mylist justify-between flex-shrink-0">
              {list.map((song, index) => {
                if (index !== 3 && index !== 6 && index !== 9)
                  return <SongListElement song={song} key={nanoid()} />;
                else {
                  return (
                    <ArtistListElement
                      artist={artistList[index / 3 - 1]}
                      key={nanoid()}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default List;
