import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beers: [],
  isLoading: false,
  error: null,
};

const beerSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {
    uploadBeersRequest(state, actions) {
      state.isLoading = true;
      
    },
    uploadBeersSuccess(state, actions) {
      state.isLoading = false;
      state.beers = [...actions.payload];
    },
    uploadBeersError(state, actions) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const {uploadBeersRequest, uploadBeersError, uploadBeersSuccess} = beerSlice.actions;
export default beerSlice.reducer;
