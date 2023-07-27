import MessageItem from "./Message";
import { MessageListType } from "../interfaces";
import { useAppSelector } from "../hooks/reduxHooks";

const ChatRoom = () => {
  const messages: MessageListType = useAppSelector(
    (state) => state.chatroom.messages
  );

  return (
    <>
      {messages.map((m, index) => (
        <MessageItem
          key={index}
          user={m.user}
          message={m.message}
          date={m.date}
        />
      ))}
    </>
  );
};

export default ChatRoom;
