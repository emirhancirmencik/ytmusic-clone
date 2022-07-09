import { configureStore } from "@reduxjs/toolkit";
import domReducer from "./dom/domSlicer";
import musicReducer from "./music/musicSlicer";

export default configureStore({
  reducer: { dom: domReducer, music: musicReducer },
});
