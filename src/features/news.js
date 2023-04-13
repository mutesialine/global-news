import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  articles: [],
  publishers: [],
  selectedPublisher: null,
  search: [],
  inputValue: "",
  loading: true,
};
export const newSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    updateArticles: (state, action) => {
      state.articles = action.payload;
    },
    updatePublisher: (state, action) => {
      state.publishers = action.payload;
    },
    choosePublisher: (state, action) => {
      state.inputValue = null;
      state.selectedPublisher = action.payload;
    },
    searchCategory: (state, action) => {
      state.search = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    loadingData: (state, action) => {
      state.loading = action.payload;
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
} = newSlice.actions;
export default newSlice.reducer;
