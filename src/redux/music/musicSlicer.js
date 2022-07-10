import { createSlice } from "@reduxjs/toolkit";

export const musicSlicer = createSlice({
  name: "music",
  initialState: {
    currentSong: "",
    isPaused: false,
    list: [],
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
      console.log(state.list);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentSong, setIsPaused, setList } = musicSlicer.actions;

export default musicSlicer.reducer;
