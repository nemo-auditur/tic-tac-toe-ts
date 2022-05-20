import React, { createContext, useReducer } from "react";

const DEFAULT_ROWS_VALUE: number = 10;
const DEFAULT_COLUMNS_VALUE: number = 10;

const initialState = {
  dimensions: {
    rows: DEFAULT_ROWS_VALUE,
    columns: DEFAULT_COLUMNS_VALUE,
  },
  displayGrid: false,
  players: {
    player1: {
      name: "",
      color: "",
    },
    player2: {
      name: "",
      color: "",
    },
  },
};

type AppState = typeof initialState;

type Action = {
  type: string;
  payload: {
    rows?: number;
    columns?: number;
    player1?: {
      name: string;
      color: string;
    };
    player2?: {
      name: string;
      color: string;
    };
  };
};

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
  const { type, payload } = action;
  switch (type) {
    case "SETDIMENSIONS":
      return {
        ...state,
        displayGrid: true,
        dimensions: {
          rows: payload.rows,
          columns: payload.columns,
        },
      };
    case "SETPLAYERS":
      return {
        ...state,
        players: {
          player1: payload.player1,
          player2: payload.player2,
        },
      };
    case "RESET":
      return {
        dimensions: {
          rows: DEFAULT_ROWS_VALUE,
          columns: DEFAULT_COLUMNS_VALUE,
        },
        displayGrid: false,
        players: {
          player1: "",
          player2: "",
        },
      };
    default:
      return state;
  }
}

export const [ctx, DimensionsProvider] = createCtx(reducer, initialState);

export const DimensionsContext = ctx;
