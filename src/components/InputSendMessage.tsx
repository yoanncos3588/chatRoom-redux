import { Form } from "semantic-ui-react";
import { addMessage } from "../store/chatroomReducer";
import { useState } from "react";
import { MessageInterface } from "../interfaces";
import { useAppDispatch } from "../hooks/reduxHooks";

const InputSendMessage = () => {
  const [message, setMessage] = useState<string>("");
  const dispatch = useAppDispatch();

  /**
   * Handle : Envoie du message par l'user
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // annule si message vide
    if (message !== "") {
      const messageObj: MessageInterface = {
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
    const input = document.getElementById("message") as HTMLInputElement | null;
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
