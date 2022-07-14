import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    initialState: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = true;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailure: (state, action) => {
      state.isFetching = true;
      state.error = false;
      state.errorMessage = action.payload;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;
