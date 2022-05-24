import React from "react";
import { DimensionsProvider } from "../src/reducer/";
import "./App.css";
// //components imports
import Lobby from "./Components/Lobby/";
import Grid from "./Components/Grid/";
import Logo from "./Components/Logo/";
import PlayerTurn from "./Components/PlayersTurn/";

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
