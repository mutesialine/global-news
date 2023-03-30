import { createSlice } from "@reduxjs/toolkit";
export const newSlice = createSlice({
  name: "news",
  initialState: { value: [] },
  reducers: {
    fetchArticles: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fetchArticles } = newSlice.actions;
export default newSlice.reducer;
