import { Message } from "semantic-ui-react";

const MessageItem = ({ user, message, date }) => {
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
