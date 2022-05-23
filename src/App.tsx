// @ts-nocheck
import React from "react";
import { DimensionsProvider } from "../src/reducer/index.tsx";
import "./App.css";
// //components imports
// @ts-ignore
import Lobby from "./Components/Lobby/index.tsx";
// @ts-ignore
import Grid from "./Components/Grid/index.tsx";
import Logo from "./Components/Logo/index.tsx";
import PlayerTurn from "./Components/PlayersTurn/index.tsx";

const App = () => {
  return (
    <DimensionsProvider>
      <div className="App-header">
        <Logo />
        <Lobby />
        <PlayerTurn />
        <Grid />
      </div>
    </DimensionsProvider>
  );
};

export default App;
