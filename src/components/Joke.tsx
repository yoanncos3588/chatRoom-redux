import { Button, Icon } from "semantic-ui-react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getJoke } from "../store/jokeReducer";

const Joke = () => {
  const dispatch = useAppDispatch();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      // enregistre une blague depuis API vers le store
      await dispatch(getJoke());
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <Button onClick={(e) => handleClick(e)} icon labelPosition="left">
      <Icon name="smile" />
      Envoyer une blague
    </Button>
  );
};

export default Joke;
