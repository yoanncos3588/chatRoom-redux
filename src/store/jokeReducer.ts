import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { JokeInterface } from "../interfaces";

export const getJoke = createAsyncThunk("joke/getJoke", async () => {
  const { data } = await axios.get<JokeInterface>(
    "https://api.chucknorris.io/jokes/random"
  );
  return data.value;
});

const initialState = {
  content: "",
};

const jokeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getJoke.fulfilled, (state, action) => {
      state.content = action.payload;
    })
    .addCase(getJoke.rejected, (state) => {
      state.content = "Aucune blague trouvée !";
    });
});

export default jokeReducer;
