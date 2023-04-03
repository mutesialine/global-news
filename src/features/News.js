import { createSlice } from "@reduxjs/toolkit";
export const newSlice = createSlice({
  name: "news",
  initialState: { articles: [], publishers: [], selected: null },
  reducers: {
    fetchArticles: (state, action) => {
      state.articles = action.payload;
    },
    fetchPublisher: (state, action) => {
      state.publishers = action.payload;
    },
    clickedPublisher: (state, action) => {
      state.selected = action.payload;
    },
  },
});
export const { fetchArticles, fetchPublisher, clickedPublisher } =
  newSlice.actions;
export default newSlice.reducer;
