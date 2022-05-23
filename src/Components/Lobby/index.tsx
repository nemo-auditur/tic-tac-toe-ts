import { useContext, useState } from "react";
import "./index.css";
import { motion } from "framer-motion";

// Imports mandatory TSX stuffs in order to make useContext working
// @ts-ignore
import { DimensionsContext } from "../../reducer/index.tsx";

//Use: Display at the first start of the App
// allowing users to setup the game and choose
// names players and the size of the grid
const Lobby: React.FC = () => {
  const { state, dispatch } = useContext(DimensionsContext);
  const [player1, setPlayer1] = useState<string>(state.players.player1);
  const [player2, setPlayer2] = useState<string>(state.players.player2);
  const [step, setStep] = useState<number>(1);

  return (
    <>
      {state.displayGrid === false && (
        <div className="lobbyContainer">
          {step === 1 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
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
            </motion.div>
          ) : null}

          {step === 2 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
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
            </motion.div>
          ) : null}

          {step === 3 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
              <span>Select the dimensions of your grid</span>
              <div className="numberSelectorContainer">
                {[...Array(10)].map((value, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        dispatch({
                          type: "SETDIMENSIONS",
                          dimensions: {
                            rows: index + 1,
                            columns: index + 1,
                          },
                          players: {
                            player1: { name: player1 },
                            player2: { name: player2 },
                          },
                        });
                      }}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
          {step !== 3 ? (
            <motion.div
              className="buttonContainer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
              {step !== 1 ? (
                <button onClick={() => setStep(step - 1)}>Back</button>
              ) : null}
              <button onClick={() => setStep(step + 1)}>Next</button>
            </motion.div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Lobby;
