import styled from "styled-components";
import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import useXXO from "./hooks/useXXO";

const App = () => {
  const game = useXXO(); //custom hook with game logic
  return (
    <AppContainer>
      {game.status === "created" && <Start handleStart={game.handleStart} />}
      {game.status === "finished" && (
        <Finished name={game.winner} handleRestart={game.handleRestart} />
      )}
      {game.status === "started" && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}
    </AppContainer>
  );
};
export default App;

const AppContainer = styled.div`
  padding: 4em;
  background: papayawhip;
`;
