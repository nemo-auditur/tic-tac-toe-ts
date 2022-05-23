import { useContext } from "react";
import "./index.css";
// @ts-ignore
import { DimensionsContext } from "../../reducer/index.tsx";

// Use: display the tic tac toe grid
const Grid: React.FC = () => {
  // get props more readable
  const { state, dispatch } = useContext(DimensionsContext);

  // Activated: when a cell is clicked
  // Assert the cell's placement to the player state
  // and change the player turn
  const handleCellSelection = (row: number, column: number) => {
    let cellsCopy: Object[];
    if (state.playersTurn === "player1") {
      cellsCopy = [...state.players.player1.cells];
      cellsCopy.push({ row: row, column: column });
      dispatch({
        type: "SETPLAYER1CELLS",
        cells: cellsCopy,
      });
      dispatch({});
    } else {
      cellsCopy = [...state.players.player2.cells];
      cellsCopy.push({ row: row, column: column });
      dispatch({
        type: "SETPLAYER2CELLS",
        cells: cellsCopy,
      });
    }
  };

  return (
    <>
      {state.displayGrid === true ? (
        <>
          {[...Array(state.dimensions.rows)].map((x, rowIndex) => {
            return (
              // construct a row
              <span key={rowIndex} style={{ display: "flex" }}>
                {/* construct the columns in one row */}
                {[...Array(state.dimensions.columns)].map((x, column) => {
                  return (
                    <span
                      className="gridItem"
                      key={column}
                      onClick={() => {
                        handleCellSelection(rowIndex, column);
                      }}
                    ></span>
                  );
                })}
              </span>
            );
          })}
        </>
      ) : null}
    </>
  );
};
export default Grid;
