import React from "react";
// @ts-ignore
import {DimensionsProvider} from '../src/reducer/index.tsx'
import "./App.css";
// //components imports
// @ts-ignore
import Lobby from "./Components/Lobby/index.tsx";
// // import Grid from "./Components/Grid/index.tsx";

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
