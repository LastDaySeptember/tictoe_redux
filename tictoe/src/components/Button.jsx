import styles from "./Button.module.css";

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
