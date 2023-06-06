import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/api";
import axios from "axios";

const getQuery = `query{
  getCategory {
    status
    message
    data
  }
}`;

export const getCategory = createAsyncThunk("getCategory", async () => {
  return await axios.post(serverUrl, {
    query: getQuery,
  });
});

const postQuery = `mutation ($category: String!, $image: Image!){
  createCategory(category: $category, image: $image) {
    status
    message
    data
  }
}`;

export const postCategory = createAsyncThunk(
  "postCategory",
  async (payload) => {
    console.log(JSON.stringify(payload));
    return await axios.post(serverUrl, {
      query: postQuery,
      variables: payload,
    });
  }
);
