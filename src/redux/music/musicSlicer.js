import { createSlice } from "@reduxjs/toolkit";

export const musicSlicer = createSlice({
  name: "music",
  initialState: {
    currentSong: "",
    controls: "",
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },

    setControls: (state, action) => {
      state.controls = action.payload;
      console.log(state.controls);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentSong, setIsPaused, setControls } = musicSlicer.actions;

export default musicSlicer.reducer;
