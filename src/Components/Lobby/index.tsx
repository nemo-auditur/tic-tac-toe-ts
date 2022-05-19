import { useContext, useState } from "react";

// Imports mandatory TSX stuffs in order to make useContext working
// @ts-ignore
// import { DimensionsContext, Dimensions } from "../../App.tsx";
// @ts-ignore
import {DimensionsContext} from '../../reducer/index.tsx'

const Lobby: React.FC = () => {
  //useContext: to get the value from the store. 
  const { state, dispatch } = useContext(DimensionsContext)
  const [rows, setRows] = useState<number>(state.dimensions.rows)
  const [columns, setColumns] = useState<number>(state.dimensions.columns)
  return (
    <div>
      rows in context: {state.dimensions.rows}
      rows in state: {rows}

      columns in context: {state.dimensions.columns}
      columns in state: {columns}
  
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
        onClick={()=> dispatch({type: 'SETDIMENSIONS', payload : {rows : rows, columns: columns}})}
      />
    </div>
  );
};

export default Lobby;
