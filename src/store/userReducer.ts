import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { UserLoginAxiosResult, UserLoginPayloadInterface } from "../interfaces";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  pseudo: "Anonymous",
  color: "#32a852",
};

export const login = createAsyncThunk(
  "user/login",
  async (payload: UserLoginPayloadInterface) => {
    const { email, password } = payload;
    const { data } = await axios.post<UserLoginAxiosResult>(
      "http://localhost:3001/login",
      {
        email,
        password,
      }
    );
    return data.pseudo;
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.pseudo = action.payload;
      state.isLoggedIn = true;
    })
    .addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
    });
});

// export const saveUserInfos = createAction<UserInterface>("user/saveUserInfos");

// const userReducer = createReducer(initialState, (builder) => {
//   builder.addCase(
//     saveUserInfos,
//     (state, action: PayloadAction<UserInterface>) => {
//       state.pseudo = action.payload.pseudo;
//       state.email = action.payload.email;
//     }
//   );
// });

export default userReducer;
