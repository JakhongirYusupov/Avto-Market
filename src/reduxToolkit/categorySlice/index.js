import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "./extraReducer";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const categorySlice = createSlice({
  name: "Get all category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action);
        state.data = action.payload.data.data.getCategory.data;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
