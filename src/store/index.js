import { configureStore } from "@reduxjs/toolkit";
import chatroomReducer from "./chatroomReducer";

const store = configureStore({
  reducer: {
    chatroom: chatroomReducer,
  },
});

export default store;
