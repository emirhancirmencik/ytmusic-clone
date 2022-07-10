import { createSlice } from "@reduxjs/toolkit";

export const musicSlicer = createSlice({
  name: "music",
  initialState: {
    currentSong: "",
    isPaused: false,
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentSong, setIsPaused } = musicSlicer.actions;

export default musicSlicer.reducer;
