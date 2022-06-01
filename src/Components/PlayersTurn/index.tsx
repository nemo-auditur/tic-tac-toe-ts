import { useContext } from "react";
import "./index.css";
// @ts-ignore
import { DimensionsContext } from "../../reducer/index.tsx";

// Component: Display who's turn
const PlayerTurn: React.FC = () => {
  //get the global state
  const { state } = useContext(DimensionsContext);
  return (
    <>
      {state.displayGrid === true ? (
        <>
          {state.playersTurn === "player1" ? (
            <div className="sentence">
              It's up to{" "}
              <span className="playerName blue">
                {state.players.player1.name}
              </span>{" "}
              to play
            </div>
          ) : (
            <div className="sentence">
              It's up to{" "}
              <span className="playerName green">
                {state.players.player2.name}
              </span>{" "}
              to play
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default PlayerTurn;
