import { createSlice } from "@reduxjs/toolkit";
import { getCarInfo } from "./extraReducer";

const initialState = {
  info: [],
  infoLoading: true,
  infoError: null,
};

const carInfoSlice = createSlice({
  name: "carinfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarInfo.pending, (state) => {
        state.infoLoading = true;
      })
      .addCase(getCarInfo.fulfilled, (state, action) => {
        state.infoLoading = false;
        state.info = action.payload.data.data.getCarInfo.data;
      })
      .addCase(getCarInfo.rejected, (state, action) => {
        state.infoLoading = false;
        state.infoError = action.error.message;
      });
  },
});

export default carInfoSlice.reducer;
