import styles from "./FieldLayout.module.css";
import PropTypes from "prop-types";

export function FieldLayout({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  onClick,
  isActive,
  setIsActive,
}) {
  const containerState = isActive ? "active" : "disabled";

  return (
    <>
      <div className={`${styles["container"]} ${styles[containerState]}`}>
        {field.map((cell, index) => {
          return (
            <div
              key={index}
              className={`${styles["cell"]} ${styles[containerState]}`}
              onClick={() => {
                onClick(index);
              }}
            >
              {cell}
            </div>
          );
        })}
      </div>
    </>
  );
}

FieldLayout.PropTypes = {
  field: PropTypes.array,
  setField: PropTypes.function,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.function,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.function,
  isDraw: PropTypes.bool,
  setIsDraw: PropTypes.function,
  winPatterns: PropTypes.array,
  winner: PropTypes.string,
  setWinner: PropTypes.function,
  isActive: PropTypes.bool,
  setIsActive: PropTypes.function,
};
