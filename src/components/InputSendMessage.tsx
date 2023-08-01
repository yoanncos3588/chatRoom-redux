import { Form } from "semantic-ui-react";
import { addMessage } from "../store/chatroomReducer";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { UserInterface } from "../interfaces";

const InputSendMessage = () => {
  const user = useAppSelector<UserInterface>((state) => state.user);
  const joke = useAppSelector((state) => state.joke.content);
  const [message, setMessage] = useState<string>("");
  const dispatch = useAppDispatch();

  /** Si une blague est chargée dans le store on l'affiche dans l'input */
  useEffect(() => {
    setMessage(joke);
  }, [joke]);

  /**
   * Handle : Envoie du message par l'user
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // annule si message vide
    if (message !== "") {
      const messageWithUser = { message, user };
      dispatch(addMessage(messageWithUser));
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
            value={message}
          />
        </Form.Group>
      </Form.Field>
    </Form>
  );
};

export default InputSendMessage;
