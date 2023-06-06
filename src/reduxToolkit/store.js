import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import carSlice from "./carSlice";
import carInfo from "./carInfo";

const store = configureStore({
  reducer: {
    categorySlice,
    carSlice,
    carInfo,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
