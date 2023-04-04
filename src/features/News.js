import { createSlice } from "@reduxjs/toolkit";
export const newSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    publishers: [],
    selectedPublisher: null,
    search: "",
    inputValue: "",
  },
  reducers: {
    fetchArticles: (state, action) => {
      state.articles = action.payload;
    },
    fetchPublisher: (state, action) => {
      state.publishers = action.payload;
    },
    choosePublisher: (state, action) => {
      state.selectedPublisher = action.payload;
    },
    searchCategory: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const {
  fetchArticles,
  fetchPublisher,
  choosePublisher,
  searchCategory,
  setInputValue,
} = newSlice.actions;
export default newSlice.reducer;
