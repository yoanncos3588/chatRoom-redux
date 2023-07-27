import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      user: "Super Chat",
      message: "initial message",
      date: new Date().toLocaleString() + "",
    },
  ],
};

export const addMessage = createAction("chatroom/addMessage");

const chatroomReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, action) => {
    state.messages.push(action.payload);
  });
});

export default chatroomReducer;
