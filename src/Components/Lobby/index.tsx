import React, { useContext, useReducer, useState } from "react";

// Imports mandatory TSX stuffs in order to make useContext working
// @ts-ignore
import { DimensionsContext, Dimensions } from "../../App.tsx";

const Lobby: React.FC = () => {

  const [rows, setRows] = useState<number>(0)
  const [columns, setColumns] = useState<number>(0)
  
  //useContext: to get the value from the store. 
  const dimensionsContext:Dimensions = useContext(DimensionsContext)
  return (
    <div>
      rows: {dimensionsContext.dimensions.rows}
      columns: {dimensionsContext.dimensions.columns}
  
      {/* Calling our actions on button click */}
      <input
        onChange={(e) => {
            setRows(parseInt(e.target.value));
        }}
      />
      <input
        onChange={(e) => {
          setColumns(parseInt(e.target.value))
        }}
      />
      <button
        onClick={()=>{
          // dimensionsContext.dimensionsDispatch({type: 'SETDIMENSIONS', rows: rows, columns: columns})
        }}
      />
    </div>
  );
};

export default Lobby;
