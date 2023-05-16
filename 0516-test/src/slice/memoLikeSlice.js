import { createSlice } from "@reduxjs/toolkit";
let id = 2;
export let memoLikeSlice = createSlice({
  name: "memoLike",
  initialState: [{}],
  reducers: {
    addlikememo: (state, action) => {
      let newAdd = {
        ...action.payload,
        id: id,
      };
      id++;
      state.push(newAdd);
    },
    deletelikememo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});
export let { addlikememo, deletelikememo } = memoLikeSlice.actions;
export default memoLikeSlice.reducer;
