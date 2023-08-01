import { configureStore } from "@reduxjs/toolkit";
import chatroomReducer from "./chatroomReducer";
import userReducer from "./userReducer";
import jokeReducer from "./jokeReducer";

const store = configureStore({
  reducer: {
    chatroom: chatroomReducer,
    user: userReducer,
    joke: jokeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
