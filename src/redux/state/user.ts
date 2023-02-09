import { createSlice, Slice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user.model";

const userInitialState: User = {
  username: "",
};

export const userSlice: Slice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUsername: (state, action: PayloadAction<User>) => action.payload,
    resetUserData: (state) => userInitialState,
  },
});

export const { setUsername, resetUserData } = userSlice.actions;

export default userSlice.reducer;
