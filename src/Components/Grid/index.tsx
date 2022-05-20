import { useContext, useState } from "react";
// @ts-ignore
import { DimensionsContext } from "../../reducer/index.tsx";

const Grid: React.FC = () => {
  // get props more readable
  const { state } = useContext(DimensionsContext);
  return (
    <>
      {state.displayGrid === true ? (
        <div>
          {[...Array(state.dimensions.rows)].map((x, i) => {
            return (
              <div key={i} style={{ display: "flex" }}>
                {[...Array(state.dimensions.columns)].map((x, i) => {
                  return <div key={i}>Hello{i}</div>;
                })}
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
export default Grid;
