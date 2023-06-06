import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../utils/api";

const getQuery = `query ($categoryId: Int!){
  getCars(category_id: $categoryId) {
    status
    message
    data
  }
}`;

export const getCars = createAsyncThunk("getCars", async (id) => {
  return await axios.post(serverUrl, {
    query: getQuery,
    variables: { categoryId: +id },
  });
});
