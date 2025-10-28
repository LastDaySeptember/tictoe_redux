import styles from "./Button.module.css";
import PropTypes from "prop-types";
import { store } from "../store.js";
import { RESET_GAME } from "../constants.js";

export function Button({ children }) {
  function resetGame() {
    console.log("Resetted game");
    store.dispatch({ type: RESET_GAME });
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
