import { createSlice } from "@reduxjs/toolkit";
export const newSlice = createSlice({
  name: "news",
  initialState: { articles: [], publishers: [] },
  reducers: {
    fetchArticles: (state, action) => {
      state.articles = action.payload;
    },
    fetchPublisher: (state, action) => {
      state.publishers = action.payload;
    },
  },
});
export const { fetchArticles, fetchPublisher } = newSlice.actions;
export default newSlice.reducer;
