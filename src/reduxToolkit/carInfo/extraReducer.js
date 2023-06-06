import axios from "axios";
import { serverUrl } from "../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getInfoQuery = `query ($categoryId: Int!, $carId: Int!){
  getCarInfo(category_id: $categoryId, car_id: $carId) {
    status
    message
    data
  }
}`;

export const getCarInfo = createAsyncThunk("getCarsInfo", async (payload) => {
  return await axios.post(serverUrl, {
    query: getInfoQuery,
    variables: payload,
  });
});
