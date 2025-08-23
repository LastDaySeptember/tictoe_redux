import { useState } from "react";
import { InformationLayout } from "./InformationLayout";

export function Information({
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
  return (
    <>
      <InformationLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        winner={winner}
        setWinner={setWinner}
      />
    </>
  );
}
