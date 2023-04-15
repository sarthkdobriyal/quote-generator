import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../slices/bookmarkSlice";

//Global Store setup
export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
  },
});