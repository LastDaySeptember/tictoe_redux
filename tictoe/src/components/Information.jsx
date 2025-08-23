import { useState } from "react";
import { InformationLayout } from "./InformationLayout";
import PropTypes from "prop-types";

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

Information.PropTypes = {
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
