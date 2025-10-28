import styles from "./InformationLayout.module.css";
import PropTypes from "prop-types";
import { store } from "../store.js";

export function InformationLayout() {
  const appState = store.getState();

  let infoText = "";
  if (!appState.isGameEnded) {
    infoText = `Current Player : ${appState.currentPlayer}`;
  } else if (appState.isDraw) {
    infoText = `Draw!`;
  } else {
    infoText = `${appState.winner} wins!`;
  }

  return (
    <>
      <h1>Information:</h1>
      <div className={styles["information"]}>{infoText}</div>
    </>
  );
}

InformationLayout.PropTypes = {
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
