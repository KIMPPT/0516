import { configureStore } from "@reduxjs/toolkit";
import memoSlice from "./slice/memoSlice";
export default configureStore({
  reducer: {memo:memoSlice},
});
