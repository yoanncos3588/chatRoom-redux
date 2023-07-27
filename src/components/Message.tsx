import { Message } from "semantic-ui-react";
import { MessageInterface } from "../interfaces";

const MessageItem = ({ user, message, date }: MessageInterface) => {
  return (
    <>
      <Message pointing="left" color="violet">
        <Message.Header>{message}</Message.Header>
        <br />
        <div>
          <i>{user}</i> à {date}
        </div>
      </Message>
    </>
  );
};

export default MessageItem;
