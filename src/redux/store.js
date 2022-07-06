import { configureStore } from "@reduxjs/toolkit";
import domReducer from "./dom/domSlicer";

export default configureStore({
  reducer: { dom: domReducer },
});
