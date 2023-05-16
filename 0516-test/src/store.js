import { configureStore } from "@reduxjs/toolkit";
import memoSlice from "./slice/memoSlice";
import memoLikeSlice from "./slice/memoLikeSlice";
export default configureStore({
  reducer: { memo: memoSlice, memolike: memoLikeSlice },
});
