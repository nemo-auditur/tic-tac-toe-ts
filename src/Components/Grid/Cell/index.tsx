import "./index.css";

type Props = {
  row: number;
  columns: number;
  handleCellSelection: () => void;
};

const Cell = ({ columns, row, handleCellSelection }: Props) => {
  return (
    <>
      <span
        className="cell"
        onClick={() => {
          handleCellSelection();
        }}
      ></span>
    </>
  );
};

export default Cell;
