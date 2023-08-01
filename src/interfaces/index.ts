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
  color: string;
}

export interface UserLoginPayloadInterface {
  email: string;
  password: string;
}

export interface UserLoginAxiosResult {
  pseudo: string;
}

export interface JokeInterface {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}
