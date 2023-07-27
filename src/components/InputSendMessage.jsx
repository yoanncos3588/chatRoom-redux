import { Form } from "semantic-ui-react";
import { addMessage } from "../store/chatroomReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";


const InputSendMessage = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  /**
   * Handle : Envoie du message par l'user
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // annule si message vide
    if (message !== "") {
      const messageObj = {
        user: "UserNameXX",
        message: message,
        date: new Date().toLocaleString() + "",
      };
      dispatch(addMessage(messageObj));
      clearInput();
    }
  };

  /**
   * Vide input message et vide state message
   */
  const clearInput = () => {
    const input = document.getElementById("message");
    if (input) {
      input.value = "";
      // important vide state
      setMessage("");
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Field>
        <Form.Group widths="equal">
          <Form.Input
            action={"Envoyer"}
            fluid={false}
            id="message"
            placeholder="Votre message…"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Form.Group>
      </Form.Field>
    </Form>
  );
};

export default InputSendMessage;
