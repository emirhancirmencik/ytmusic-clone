import React, { useRef } from "react";
import AlbumListElement from "./AlbumList/AlbumListElement";
import MiniListElement from "./MiniList/MiniListElement";
import ArtistListElement from "./ArtistList/ArtistListElement";
import ScrollButtons from "./ScrollButtons";

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
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="mylist flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
          </>
        ) : (
          <>
            <div className="flex mylist justify-between flex-shrink-0">
              <AlbumListElement />
              <ArtistListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default List;
