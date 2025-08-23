import styles from "./Button.module.css";
import PropTypes from "prop-types";

export function Button({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  winPatterns,
  winner,
  setWinner,
  children,
  setIsActive,
  isActive,
}) {
  function resetGame() {
    console.log("Resetted game");
    setCurrentPlayer("x");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    setIsActive(true);
  }

  return (
    <button
      onClick={() => {
        resetGame();
      }}
    >
      {children}
    </button>
  );
}

Button.PropTypes = {
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
