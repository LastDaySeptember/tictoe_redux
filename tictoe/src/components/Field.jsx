import { useState } from "react";
import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

export function Field({
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
  // FUNCTIONS

  function compareArray(array1, array2) {
    const isLengthEqual = array1.length === array2.length;
    if (!isLengthEqual) {
      return false;
    }
    let sortedArray1 = [...array1].sort();
    let sortedArray2 = [...array2].sort();

    for (let i = 0; i < sortedArray1.length; i++) {
      if (sortedArray1[i] !== sortedArray2[i]) {
        return false;
      }
    }
    return true;
  }

  // F win ior draw
  function checkWinDraw(updatedField) {
    const currentPattern = [];
    updatedField.forEach((cell, i) => {
      if (cell === currentPlayer) {
        currentPattern.push(i);
      }
    });

    winPatterns.forEach((pattern) => {
      if (compareArray(pattern, currentPattern)) {
        setIsGameEnded(true);
        setWinner(currentPlayer);
        setIsActive(false);
        return true;
      } else {
        console.log("No matches found");
      }
    });

    if (!isGameEnded && currentPattern.length >= 5) {
      setIsDraw(true);
      setIsActive(false);
      setIsGameEnded(true);
      return true;
    }
  }

  //  F change Player
  function changecurrentPlayer() {
    setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
  }

  // F = onClick
  function onClick(index) {
    if (isGameEnded) {
      return;
    }
    if (field[index]) {
      console.log("Already filled");
      return;
    }

    const updatedField = field.map((cell, i) => {
      let cellState = i === index ? currentPlayer : cell;
      return cellState;
    });
    console.log("Here", field);
    setField(updatedField);
    checkWinDraw(updatedField);
    changecurrentPlayer();
  }

  // RETURN
  return (
    <>
      <FieldLayout
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
        field={field}
        setField={setField}
        onClick={onClick}
        winner={winner}
        setWinner={setWinner}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}

Field.PropTypes = {
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
