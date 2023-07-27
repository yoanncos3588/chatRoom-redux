export interface MessageInterface {
  user: string;
  message: string;
  date: string;
}

export interface MessagesListInterface {
  messages: Array<MessageInterface>;
}

export type MessageListType = Array<MessageInterface>;
