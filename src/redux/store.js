import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";

const store = configureStore({
  reducer: userReducer,
});

export default store;
