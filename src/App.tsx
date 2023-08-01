import {
  Button,
  Container,
  Divider,
  Icon,
  Modal,
  Segment,
} from "semantic-ui-react";
import ChatRoom from "./components/ChatRoom";
import InputSendMessage from "./components/InputSendMessage";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import Joke from "./components/Joke";

function App() {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);

  return (
    <>
      <Divider hidden />
      <Container>
        <Segment padded>
          <Modal
            onClose={() => setModalLoginOpen(false)}
            onOpen={() => setModalLoginOpen(true)}
            open={modalLoginOpen}
            header="Changer mon pseudo"
            trigger={
              <Button icon labelPosition="left" color="teal">
                <Icon name="user" />
                Changer mon pseudo
              </Button>
            }
            content={
              <Modal.Content>
                <LoginForm setModalLoginOpen={setModalLoginOpen} />
              </Modal.Content>
            }
          />
          <Divider />
          <ChatRoom />
          <Divider hidden />
          <Divider />
          <Joke />
          <Divider />
          <InputSendMessage />
        </Segment>
      </Container>
    </>
  );
}

export default App;
