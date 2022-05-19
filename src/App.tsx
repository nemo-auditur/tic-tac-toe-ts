import React, { createContext, useContext, useReducer } from "react";
import "./App.css";
// //components imports
// @ts-ignore
import Lobby from "./Components/Lobby/index.tsx";
// // import Grid from "./Components/Grid/index.tsx";

const DEFAULT_ROWS_VALUE: number = 10;
const DEFAULT_COLUMNS_VALUE: number = 10;

export function createCtx<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {

  const defaultDispatch: React.Dispatch<ActionType> = () => initialState
  const ctx = createContext({
    state: initialState,
    dispatch: defaultDispatch
  })

  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState)
    return <ctx.Provider value={{state, dispatch}} {...props}/>
  }

  return [ctx, Provider] as const
}

const initialState = {
  dimensions : {
    rows : DEFAULT_ROWS_VALUE,
    columns: DEFAULT_COLUMNS_VALUE
  }
}

type AppState = typeof initialState

type Action = {
  type: string;
  payload: {
    rows: number,
    columns: number
  }
};

function reducer(state: AppState, action: Action):AppState {
  const { type, payload } = action;
  switch (type) {
    case "SETDIMENSIONS":
      return {
        ...state,
        dimensions: {
          rows: payload.rows,
          columns: payload.columns
        }
      };
    case "RESET":
      return {
       dimensions : {
         rows : 10,
         columns: 10
       }
      };
    default:
      return state;
  }
}

const [ctx, DimensionsProvider] = createCtx(reducer, initialState)

export const DimensionsContext = ctx

const App = () => {
  return(
    <DimensionsProvider>
      <div className="App-header">
      <Lobby/>
      </div>
    </DimensionsProvider>
  )
}

export default App
