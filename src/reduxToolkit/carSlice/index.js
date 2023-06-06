import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./extraReducer";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const carSlice = createSlice({
  name: "all cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data.data.getCars.data;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default carSlice.reducer;
