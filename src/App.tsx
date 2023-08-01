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
import { useAppSelector } from "./hooks/reduxHooks";

function App() {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);

  const userLoggedIn = useAppSelector((state) => {
    return state.user.isLoggedIn;
  });

  const userPseudo = useAppSelector((state) => {
    return state.user.pseudo;
  });

  return (
    <>
      <Divider hidden />
      <Container>
        <Segment padded>
          {!userLoggedIn ? (
            <Modal
              onClose={() => setModalLoginOpen(false)}
              onOpen={() => setModalLoginOpen(true)}
              open={modalLoginOpen}
              header="Se connecter"
              trigger={
                <Button icon labelPosition="left" color="teal">
                  <Icon name="user" />
                  Se connecter
                </Button>
              }
              content={
                <Modal.Content>
                  <LoginForm setModalLoginOpen={setModalLoginOpen} />
                </Modal.Content>
              }
            />
          ) : (
            <h3>Bonjour {userPseudo}</h3>
          )}
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
