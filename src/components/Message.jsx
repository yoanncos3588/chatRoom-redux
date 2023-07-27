import { Message } from "semantic-ui-react";
import PropTypes from "prop-types";

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

MessageItem.PropTypes = {
  user: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
};

export default MessageItem;
