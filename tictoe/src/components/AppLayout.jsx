import styles from "./AppLayout.module.css";
import { Information } from "./Information.jsx";
import { Field } from "./Field.jsx";
import { Button } from "./Button.jsx";

export function AppLayout({
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
  isActive,
  setIsActive,
}) {
  return (
    <>
      <div className={styles["game"]}>
        <Information
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
          isDraw={isDraw}
          setIsDraw={setIsDraw}
          field={field}
          setField={setField}
          winPatterns={winPatterns}
          winner={winner}
          setWinner={setWinner}
        />
        <Field
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
          isDraw={isDraw}
          setIsDraw={setIsDraw}
          field={field}
          setField={setField}
          winPatterns={winPatterns}
          winner={winner}
          setWinner={setWinner}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <Button
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
          isDraw={isDraw}
          setIsDraw={setIsDraw}
          field={field}
          setField={setField}
          winPatterns={winPatterns}
          winner={winner}
          setWinner={setWinner}
          isActive={isActive}
          setIsActive={setIsActive}
        >
          Reset Game
        </Button>
      </div>
    </>
  );
}
