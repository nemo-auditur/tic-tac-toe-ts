import { useState } from "react";

interface Props {
  dimensions?: {
    rows: number;
    columns: number;
  };
}

const Grid: React.FC<Props> = (props) => {
  // get props more readable
  const { dimensions } = props;

  //setStates
  return (
    <>
      <div>
        {[...Array(dimensions.rows)].map((x, i) => {
          return (
            <div key={i} style={{ display: "flex" }}>
              {[...Array(dimensions.columns)].map((x,i) => {
                return <div key={i}>Hello{i}</div>;
              })}
            </div>
          );
        })}
      </div>
      
    </>
  );
};
export default Grid;
