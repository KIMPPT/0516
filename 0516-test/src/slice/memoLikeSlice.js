import { createSlice } from "@reduxjs/toolkit";
let likeid = 1;
export let memoLikeSlice = createSlice({
  name: "memoLike",
  initialState: [],
  reducers: {
    addlikelist: (state, action) => {
      let newlikelist = {
        ...action.payload,
        likeid: likeid,
      };
      likeid++;
      state.push(newlikelist);
    },
    deletelikelist: (state, action) => {
      let newlikelist = state.filter((m) => m.text !== action.payload);
      return newlikelist;
    },
  },
});
export let { addlikelist, deletelikelist } = memoLikeSlice.actions;
export default memoLikeSlice.reducer;
