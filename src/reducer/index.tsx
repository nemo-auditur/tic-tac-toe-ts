import React, { createContext, useReducer } from "react";

// const declarations
const DEFAULT_ROWS_VALUE: number = 10;
const DEFAULT_COLUMNS_VALUE: number = 10;

// Types declarations

type Cells = {
  row: number;
  colum: number;
};
// Type of the global
interface AppState {
  dimensions: {
    rows: number;
    columns: number;
  };
  displayGrid: boolean;
  players: {
    player1: {
      name: string;
      cells: Array<Cells>;
    };
    player2: {
      name: string;
      cells: Array<Cells>;
    };
  };
  playersTurn: string;
}
// Types of the reducer actions
type Action =
  | {
      type: "SETDIMENSIONS";
      dimensions: { rows: number; columns: number };
      players: { player1: { name: string }; player2: { name: string } };
    }
  | {
      type: "SETPLAYER1CELLS";
      cells: Array<Cells>;
    }
  | {
      type: "SETPLAYER2CELLS";
      cells: Array<Cells>;
    }
  | { type: "RESET" };

// Used to initialize the reducer state
const initialState = {
  dimensions: {
    rows: DEFAULT_ROWS_VALUE,
    columns: DEFAULT_COLUMNS_VALUE,
  },
  // modify to reset
  displayGrid: true,
  players: {
    player1: {
      name: "a",
      cells: [] as Cells[],
    },
    player2: {
      name: "b",
      cells: [] as Cells[],
    },
  },
  playersTurn: "player1",
};

// Construct the store and the reducer
export function createCtx<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState;
  const ctx = createContext({
    state: initialState,
    dispatch: defaultDispatch,
  });

  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(
      reducer,
      initialState
    );
    return <ctx.Provider value={{ state, dispatch }} {...props} />;
  }

  return [ctx, Provider] as const;
}

export function reducer(state: AppState, action: Action): AppState {
  const { type } = action;
  switch (type) {
    case "SETDIMENSIONS":
      return {
        ...state,
        displayGrid: true,
        dimensions: {
          rows: action.dimensions.rows,
          columns: action.dimensions.columns,
        },
        players: {
          player1: {
            name: action.players.player1.name,
            cells: state.players.player1.cells,
          },
          player2: {
            name: action.players.player2.name,
            cells: state.players.player2.cells,
          },
        },
      };
    case "SETPLAYER1CELLS":
      return {
        ...state,
        players: {
          player1: {
            cells: action.cells,
            name: state.players.player1.name,
          },
          player2: {
            cells: state.players.player2.cells,
            name: state.players.player2.name,
          },
        },
        playersTurn: "player2",
      };

    case "SETPLAYER2CELLS":
      return {
        ...state,
        players: {
          player1: {
            cells: state.players.player1.cells,
            name: state.players.player1.name,
          },
          player2: {
            cells: action.cells,
            name: state.players.player2.name,
          },
        },
        playersTurn: "player1",
      };
    case "RESET":
      return {
        dimensions: {
          rows: DEFAULT_ROWS_VALUE,
          columns: DEFAULT_COLUMNS_VALUE,
        },
        displayGrid: false,
        players: {
          player1: {
            name: "",
            cells: [
              {
                row: null,
                colum: null,
              },
            ],
          },
          player2: {
            name: "",
            cells: [
              {
                row: null,
                colum: null,
              },
            ],
          },
        },
        playersTurn: "player1",
      };
    default:
      return state;
  }
}

export const [ctx, DimensionsProvider] = createCtx(reducer, initialState);

export const DimensionsContext = ctx;
