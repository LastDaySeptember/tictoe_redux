import styles from "./InformationLayout.module.css";
import PropTypes from "prop-types";

export function InformationLayout({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  winner,
  setWinner,
}) {
  let infoText = "";
  if (!isGameEnded) {
    infoText = `Current Player : ${currentPlayer}`;
  } else if (isDraw) {
    infoText = `Draw!`;
  } else {
    infoText = `${winner} wins!`;
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
