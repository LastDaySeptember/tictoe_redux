import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";
import { store } from "../store.js";
import {
  SET_CURRENT_PLAYER,
  END_GAME,
  SET_DRAW,
  UPDATE_FIELD,
  SET_WINNER,
  SET_GAME_ACTIVE,
} from "../constants.js";

const winPatterns = [
  [0, 1, 2], // верхняя горизонталь
  [3, 4, 5], // средняя горизонталь
  [6, 7, 8], // нижняя горизонталь
  [0, 3, 6], // левая вертикаль
  [1, 4, 7], // средняя вертикаль
  [2, 5, 8], // правая вертикаль
  [0, 4, 8], // диагональ \
  [2, 4, 6], // диагональ /
];

export function Field() {
  // FUNCTIONS

  function containsArray(baseArray, arrayToCheck) {
    if (arrayToCheck.length < 3) return false;

    for (let i = 0; i < 3; i++) {
      if (!arrayToCheck.includes(baseArray[i])) {
        return false;
      }
    }

    return true;
  }

  // function compareArray(array1, array2) {
  //   let sortedArray1 = [...array1].sort();
  //   let sortedArray2 = [...array2].sort();
  //   console.log("sorting array", sortedArray1, sortedArray2);

  //   for (let i = 0; i < sortedArray1.length; i++) {
  //     console.log(i, " ", sortedArray1[i], " ", sortedArray2[i]);
  //     if (sortedArray1[i] !== sortedArray2[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // F win ior draw
  function checkWinDraw(updatedField) {
    const appState = store.getState();
    const currentPlayer = appState.currentPlayer;

    const currentPattern = [];
    updatedField.forEach((cell, i) => {
      if (cell === currentPlayer) {
        currentPattern.push(i);
      }
    });

    winPatterns.forEach((pattern) => {
      if (containsArray(pattern, currentPattern)) {
        store.dispatch({ type: END_GAME });
        store.dispatch({ type: SET_WINNER, payload: currentPlayer });
        store.dispatch({ type: SET_GAME_ACTIVE, payload: false });
        return true;
      } else {
        console.log("No matches found");
      }
    });

    if (!appState.isGameEnded && currentPattern.length >= 5) {
      store.dispatch({ type: END_GAME });
      store.dispatch({ type: SET_DRAW });
      store.dispatch({ type: SET_GAME_ACTIVE, payload: false });
      return true;
    }
  }

  //  F change Player
  function changecurrentPlayer() {
    const appState = store.getState();
    const currentPlayer = appState.currentPlayer;
    const otherPlayer = currentPlayer === "x" ? "o" : "x";

    store.dispatch({ type: SET_CURRENT_PLAYER, payload: otherPlayer });
  }

  // F = onClick
  function onClick(index) {
    const appState = store.getState();
    if (appState.isGameEnded) {
      return;
    }
    if (appState.field[index]) {
      console.log("Already filled");
      return;
    }

    const updatedField = appState.field.map((cell, i) => {
      let cellState = i === index ? appState.currentPlayer : cell;
      return cellState;
    });
    console.log("Here", appState.field);
    store.dispatch({ type: UPDATE_FIELD, payload: updatedField });
    checkWinDraw(updatedField);
    changecurrentPlayer();
  }

  // RETURN
  return (
    <>
      <FieldLayout onClick={onClick} />
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
