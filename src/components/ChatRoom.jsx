import MessageItem from "./Message";
import { useSelector } from "react-redux";

const ChatRoom = () => {
  const messages = useSelector((state) => state.chatroom.messages);

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
