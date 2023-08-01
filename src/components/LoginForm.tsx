import { Button, Divider, Form, Message } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { login } from "../store/userReducer";
import { useEffect, useState } from "react";
import React from "react";

export interface LoginPropsInterface {
  setModalLoginOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const LoginForm = ({ setModalLoginOpen = undefined }: LoginPropsInterface) => {
  const [formHasError, setformHasError] = useState<boolean>(false);
  const [firstTry, setFirstTry] = useState<boolean>(true);

  // recupère les infos de l'utilisateur ou celles par défaut
  const [userInfos, setUserInfos] = useState({
    email: "bouclierman@herocorp.io",
    password: "jennifer",
  });

  const isLoggedIn = useAppSelector((state) => {
    return state.user.isLoggedIn;
  });

  useEffect(() => {
    // ferme la modal si user connecté
    if (isLoggedIn && typeof setModalLoginOpen !== "undefined") {
      setModalLoginOpen(false);
    }
  });

  const dispatch = useAppDispatch();

  /**
   * Submit : Update les infos utilisateurs dans le store
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    if (areFieldsOk()) {
      dispatch(login(userInfos));
      setFirstTry(false);
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
   * Verifie si les inputs sont valides pour envoie API
   * @returns {boolean}
   */
  const areFieldsOk = () => {
    if (userInfos.email === "" || userInfos.password === "") {
      setformHasError(true);
      return false;
    } else {
      return true;
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} error={!isLoggedIn}>
      <Form.Field>
        <label>Email</label>
        <Form.Input
          error={
            userInfos.email === "" && formHasError
              ? { content: "Merci de remplir ce champ", pointing: "below" }
              : null
          }
          placeholder="mon@email.com"
          onChange={(e) => {
            setUserInfos((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          value={userInfos.email}
        />
      </Form.Field>
      <Form.Field>
        <label>Mot de passe</label>
        <Form.Input
          error={
            userInfos.email === "" && formHasError
              ? { content: "Merci de remplir ce champ", pointing: "below" }
              : null
          }
          placeholder="******"
          onChange={(e) => {
            setUserInfos((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          value={userInfos.password}
        />
      </Form.Field>
      {}
      {!isLoggedIn && !firstTry && (
        <Message
          error
          header="Erreur de connexion"
          content="Nous n'avons pas réussi à vous identifier"
        />
      )}
      <Divider hidden />
      <Button positive type="submit" disabled={formHasError ? true : false}>
        Valider
      </Button>
      <Button onClick={(e) => handleCancel(e)}>Annuler</Button>
    </Form>
  );
};

export default LoginForm;
