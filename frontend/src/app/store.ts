import { configureStore } from "@reduxjs/toolkit";
import spaceSlice from "./slices/spaceSlice";

const store = configureStore({
  reducer: {
    space: spaceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
