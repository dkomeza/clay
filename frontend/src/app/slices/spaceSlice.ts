import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SpaceState {
  name: string;
}

const initialState: SpaceState = {
  name: "",
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    setSpace: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setSpace } = spaceSlice.actions;
export const selectSpace = (state: { space: SpaceState }) => state.space.name;

export default spaceSlice.reducer;
