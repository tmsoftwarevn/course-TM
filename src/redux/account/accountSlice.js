import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: {
    email: "",
    fullName: "",
    id: "",
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,

  reducers: {
    doLoginAction: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    doGetAccountAction: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    doLogoutAction: (state, action) => {
      localStorage.removeItem("access_token");
      state.isAuthenticated = false;
      state.isLoading = true;
      state.user = {
        email: "",
        fullName: "",
        role: "",
        type: "",
        id: "",
      };
    },
    doUpdateFullname: (state, action) => {
      state.user.fullName = action.payload;
    },
  },
});

export const {
  doLoginAction,
  doGetAccountAction,
  doLogoutAction,
  doUpdateFullname,
} = accountSlice.actions;

export default accountSlice.reducer;
