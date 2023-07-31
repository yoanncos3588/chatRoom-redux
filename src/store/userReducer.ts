import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";
import { UserInterface } from "../interfaces";

const initialState = {
  pseudo: "Anon",
  email: "anon@email.com",
};

export const saveUserInfos = createAction<UserInterface>("user/saveUserInfos");

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    saveUserInfos,
    (state, action: PayloadAction<UserInterface>) => {
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
    }
  );
});

export default userReducer;
