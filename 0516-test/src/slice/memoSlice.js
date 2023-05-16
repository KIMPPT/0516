import { createSlice } from "@reduxjs/toolkit";
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let now = `${year}-${month}-${day}`;
let id = 2;
export let memoSlice = createSlice({
  name: "memo",
  initialState: [
    {
      text: "메모입니다",
      date: now,
      id: 1,
      heart: false,
    },
  ],
  reducers: {
    addmemo: (state, action) => {
      let newMemo = { ...action.payload, id: id, heart: false };
      id++;
      state.push(newMemo);
    },
    deletememo: (state, action) => {
      state.splice(action.payload, 1);
    },
    changeheart: (state, action) => {
      state.splice(action.payload, 1, {
        ...state[action.payload],
        heart: !(state.heart),
      });
    },
  },
});
export let { addmemo, deletememo, changeheart } = memoSlice.actions;
export default memoSlice.reducer;
