// @ts-nocheck
import React, { useContext } from "react";
import {
  DimensionsContext,
  DimensionsProvider,
} from "../src/reducer/index.tsx";
import "./App.css";
// //components imports
// @ts-ignore
import Lobby from "./Components/Lobby/index.tsx";
// @ts-ignore
import Grid from "./Components/Grid/index.tsx";
import Logo from "./Components/Logo/index.tsx";

const App = () => {
  const { state } = useContext(DimensionsContext);
  return (
    <DimensionsProvider>
      <div className="App-header">
        <Logo />
        <Lobby />
        {/*<Grid /> */}
      </div>
    </DimensionsProvider>
  );
};

export default App;
