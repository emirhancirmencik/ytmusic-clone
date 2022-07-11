import { createSlice } from "@reduxjs/toolkit";

export const musicSlicer = createSlice({
  name: "music",
  initialState: {
    currentSong: "",
    isPaused: false,
    list: [],
    prevSong: "",
    nextSong: "",
    loop: "off",
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;

      const index = state.list.findIndex((song) => {
        return song.src === state.currentSong.src;
      });

      const length = state.list.length;

      if (index + 1 > length - 1) {
        if (state.loop === "repeat") {
          state.nextSong = state.list[0];
          state.prevSong = state.list[index - 1];
        } else {
          state.nextSong = state.currentSong;
          state.prevSong = state.list[index - 1];
        }
      } else if (index - 1 < 0) {
        if (state.loop === "repeat") {
          state.nextSong = state.list[index + 1];
          state.prevSong = state.list[state.list.length - 1];
        } else {
          state.nextSong = state.list[index + 1];
          state.prevSong = state.list[0];
        }
      } else {
        state.nextSong = state.list[index + 1];
        state.prevSong = state.list[index - 1];
      }
    },
    setLoop: (state, action) => {
      state.loop = action.payload;
    },
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    shuffle: (state) => {
      const index = state.list.findIndex((song) => {
        return song.src === state.currentSong.src;
      });

      let myList = [];
      let _list = [...state.list];
      let song = _list.splice(index, 1);

      myList.push(song[0]);
      _list.sort(() => Math.random() - 0.5);
      myList.push(..._list);
      state.list = myList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentSong, setIsPaused, setList, setLoop, shuffle } =
  musicSlicer.actions;

export default musicSlicer.reducer;
