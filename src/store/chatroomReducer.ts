import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";
import { MessageInterface, MessagesListInterface } from "../interfaces";

const initialState = {
  messages: [
    {
      user: { pseudo: "Admin", color: "#a83289" },
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
      state.messages.push({
        user: action.payload.user,
        message: action.payload.message,
        date: new Date().toLocaleString() + "",
      });
    }
  );
});

export default chatroomReducer;
