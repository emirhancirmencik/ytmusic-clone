import { createSlice } from "@reduxjs/toolkit";

export const domSlicer = createSlice({
  name: "dom",
  initialState: {
    settingButton: { offsetX: 0, offsetY: 0 },
    isDropdownActive: false,
    dropDownElement: "mini",
    fullScreen: false,
  },
  reducers: {
    setButtonPosition: (state, action) => {
      const coordinates = action.payload;
      state.settingButton.offsetX = coordinates.x;
      state.settingButton.offsetY = coordinates.y;
    },
    setDropdownActive: (state, action) => {
      state.isDropdownActive = !state.isDropdownActive;
      state.dropDownElement = action.payload;
    },
    setFullScreen: (state, action) => {
      state.fullScreen = !state.fullScreen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setButtonPosition, setDropdownActive, setFullScreen } =
  domSlicer.actions;

export default domSlicer.reducer;
