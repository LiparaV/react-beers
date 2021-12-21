import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beers: [],
  isLoading: false,
  error: null,
  id: null,
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
    uploadPizzaRequest(state, actions) {
      state.isLoading = true
    },
    uploadSteakRequest(state, actions) {
      state.isLoading = true
    },
    beerSorterAsc(state, actions) {
      state.beers = state.beers.sort((a,b) => a.abv - b.abv)
    },
    beerSorterDes(state, actions) {
      state.beers = state.beers.sort((a,b) => b.abv - a.abv)
    },
    beerSorterNameAsc(state, actions) {
      state.beers = state.beers.sort((a,b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0)
    },
    beerSorterNameDes(state, actions) {
      state.beers = state.beers.sort((a,b) => a.name !== b.name ? b.name < a.name ? -1 : 1 : 0)
    },
  },
});


export const {uploadBeersRequest, uploadBeersError, uploadBeersSuccess, uploadPizzaRequest, uploadSteakRequest, beerSorterAsc, beerSorterDes, beerSorterNameAsc, beerSorterNameDes} = beerSlice.actions;
export default beerSlice.reducer;
