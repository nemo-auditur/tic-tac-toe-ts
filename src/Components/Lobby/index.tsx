import { useContext, useState } from "react";
import "./index.css";

// Imports mandatory TSX stuffs in order to make useContext working
// @ts-ignore
import { DimensionsContext } from "../../reducer/index.tsx";

const Lobby: React.FC = () => {
  //useContext: to get the value from the store.
  const { state, dispatch } = useContext(DimensionsContext);
  const [rows, setRows] = useState<number>(state.dimensions.rows);
  const [columns, setColumns] = useState<number>(state.dimensions.columns);
  const [player1, setPlayer1] = useState<string>(state.players.player1);
  const [player2, setPlayer2] = useState<string>(state.players.player2);
  const [step, setStep] = useState<number>(1);

  return (
    <>
      {state.displayGrid === false && (
        <div className="lobbyContainer">
          {step === 1 ? (
            <>
              <span>Choose names for players</span>
              <div className="playerSelecterContainerBlue">
                <label className="blue">Player 1</label>
                <input
                  autoFocus
                  className="blue"
                  onChange={(e) => {
                    if (typeof e.target.value === "string") {
                      setPlayer1(e.target.value);
                    }
                  }}
                />
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <span>Choose names for players</span>
              <div className="playerSelecterContainerGreen">
                <label className="green">Player 2</label>
                <input
                  autoFocus
                  className="green"
                  onChange={(e) => {
                    if (typeof e.target.value === "string") {
                      setPlayer2(e.target.value);
                    }
                  }}
                />
              </div>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <input
                onChange={(e) => {
                  setRows(parseInt(e.target.value));
                }}
              />
              <input
                onChange={(e) => {
                  setColumns(parseInt(e.target.value));
                }}
              />
            </>
          ) : null}
          <div className="buttonContainer">
            <button onClick={() => setStep(step - 1)}>Back</button>
            <button
              onClick={() =>
                step === 4
                  ? dispatch({
                      type: "SETDIMENSIONS",
                      payload: { rows: rows, columns: columns },
                    })
                  : setStep(step + 1)
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Lobby;
