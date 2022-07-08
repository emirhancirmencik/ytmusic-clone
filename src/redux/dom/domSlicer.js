import { createSlice } from "@reduxjs/toolkit";

export const domSlicer = createSlice({
  name: "dom",
  initialState: {
    settingButton: { offsetX: 0, offsetY: 0 },
    isDropdownActive: false,
    dropDownElement: "mini",
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
  },
});

// Action creators are generated for each case reducer function
export const { setButtonPosition, setDropdownActive } = domSlicer.actions;

export default domSlicer.reducer;
