import { Container, Divider, Segment } from "semantic-ui-react";
import ChatRoom from "./components/ChatRoom";
import InputSendMessage from "./components/InputSendMessage";

function App() {
  return (
    <>
      <Divider hidden />
      <Container>
        <Segment padded>
          <ChatRoom />
          <Divider hidden />
          <InputSendMessage />
        </Segment>
      </Container>
    </>
  );
}

export default App;
