import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  newsArticle: [],
  newsPublisher: [],
  selectedPublisher: null,
  searchArticles: [],
  inputValue: "",
  loading: true,
  localLoading: false,
};
export const newSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    updateArticles: (state, action) => {
      state.newsArticle = action.payload;
    },
    updatePublisher: (state, action) => {
      state.newsPublisher = action.payload;
    },
    choosePublisher: (state, action) => {
      state.inputValue = null;
      state.selectedPublisher = action.payload;
    },
    searchCategory: (state, action) => {
      state.searchArticles = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    loadingData: (state, action) => {
      state.loading = action.payload;
    },

    setLocalLoading: (state, action) => {
      state.localLoading = action.payload;
    },
  },
});

export const {
  updateArticles,
  updatePublisher,
  choosePublisher,
  searchCategory,
  setInputValue,
  loadingData,
  setLocalLoading,
} = newSlice.actions;
export default newSlice.reducer;
