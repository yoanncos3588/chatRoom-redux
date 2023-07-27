import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";
import { MessageInterface, MessagesListInterface } from "../interfaces";

const initialState = {
  messages: [
    {
      user: "Super Chat",
      message: "initial message",
      date: new Date().toLocaleString() + "",
    },
  ],
} as MessagesListInterface;

export const addMessage = createAction<MessageInterface>("chatroom/addMessage");

const chatroomReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    addMessage,
    (state, action: PayloadAction<MessageInterface>) => {
      state.messages.push(action.payload);
    }
  );
});

export default chatroomReducer;
