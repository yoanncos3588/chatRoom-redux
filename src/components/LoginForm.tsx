import { Button, Divider, Form } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { saveUserInfos } from "../store/userReducer";
import { useState } from "react";
import { UserInterface } from "../interfaces";
import React from "react";

export interface LoginPropsInterface {
  setModalLoginOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const LoginForm = ({ setModalLoginOpen = undefined }: LoginPropsInterface) => {
  const [formHasError, setformHasError] = useState<boolean>(false);

  // recupère les infos de l'utilisateur ou celles par défaut
  const [userInfos, setUserInfos] = useState<UserInterface>({
    pseudo: useAppSelector((state) => state.user.pseudo),
    email: useAppSelector((state) => state.user.email),
  });
  const dispatch = useAppDispatch();

  /**
   * Submit : Update les infos utilisateurs dans le store
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    if (!formHasError) {
      dispatch(saveUserInfos(userInfos));
      // pour modal login
      if (setModalLoginOpen !== undefined) {
        setModalLoginOpen(false);
      }
    }
  };

  /**
   * Cancel : Click sur bouton annuler du formulaire
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    if (setModalLoginOpen !== undefined) {
      setModalLoginOpen(false);
    }
  };

  /**
   * Validation d'un input
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const validateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setformHasError(true);
    } else {
      setformHasError(false);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Field>
        <label>Pseudo</label>
        <Form.Input
          error={
            userInfos.pseudo === ""
              ? { content: "Merci de remplir ce champ", pointing: "below" }
              : null
          }
          placeholder="Mon pseudo !"
          onChange={(e) => {
            validateField(e);
            setUserInfos((prev) => ({
              ...prev,
              pseudo: e.target.value,
            }));
          }}
          value={userInfos.pseudo}
        />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Form.Input
          error={
            userInfos.email === ""
              ? { content: "Merci de remplir ce champ", pointing: "below" }
              : null
          }
          placeholder="mon@email.com"
          onChange={(e) => {
            validateField(e);
            setUserInfos((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          value={userInfos.email}
        />
      </Form.Field>
      <Divider hidden />
      <Button positive type="submit" disabled={formHasError ? true : false}>
        Valider
      </Button>
      <Button onClick={(e) => handleCancel(e)}>Annuler</Button>
    </Form>
  );
};

export default LoginForm;
