import styles from "./InformationLayout.module.css";

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
