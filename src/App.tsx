import "./App.css";
import React, {createContext, useContext, useState, useReducer} from "react";

//components imports
// @ts-ignore
import Lobby from "./Components/Lobby/index.tsx";
// import Grid from "./Components/Grid/index.tsx";


const DEFAULT_ROWS_VALUE: number = 10;
const DEFAULT_COLUMNS_VALUE: number = 10;

// Create Dimensions type to setup global state
export type Dimensions = {
  dimensions: {
    rows?: number,
    columns?: number
  },
}

// useContext: Creation of the global state with Dimensions type and null value
export const DimensionsContext = createContext<Dimensions | null>(null)

// useContext : Create initial value of Dimensions type to
// inject in the global context
export const initialDimensions:Dimensions = {
  dimensions: {
    rows:10,
    columns:10
  }
}

// An interface for our actions
type CountAction = {
  type: string;
  rows?: number;
  columns?: number;
};

// An interface for our state

const reducer = (state: Dimensions, action: CountAction) => {
  const { type, rows, columns } = action;
  switch (type) {
    case "SETDIMENSIONS":
      return {
        ...state,
        columns: columns,
        rows: rows
      };
    case "RESET":
      return {
        columns: 3,
        rows: 3,
      };
    default:
      return state;
  }
};

const App: React.FC = () => { 
  
  return (
    //wrap up the app with the DimensionsContext
    <DimensionsContext.Provider value={initialDimensions}>
    <div className="App-header">
     <Lobby/>
      {/* {generateGrid && dimensions.rows !== 0 && dimensions.columns !== 0 ? (
        <Grid dimensions={dimensions} />
      ) : null} */}
    </div>
    </DimensionsContext.Provider>
  );
};

export default App;
