export interface MessageInterface {
  message: string;
  user: UserInterface;
  date?: string;
}

export interface MessagesListInterface {
  messages: Array<MessageInterface>;
}

export type MessageListType = Array<MessageInterface>;

export interface UserInterface {
  pseudo: string;
  email: string;
}
