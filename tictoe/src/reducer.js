// OLD BASE STATES
// const [currentPlayer, setCurrentPlayer] = useState("x");
// const [isGameEnded, setIsGameEnded] = useState(false);
// const [isDraw, setIsDraw] = useState(false);
// const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
// const [winner, setWinner] = useState(null);
// const [isActive, setIsActive] = useState(true);
// const winPatterns = [
//   [0, 1, 2], // верхняя горизонталь
//   [3, 4, 5], // средняя горизонталь
//   [6, 7, 8], // нижняя горизонталь
//   [0, 3, 6], // левая вертикаль
//   [1, 4, 7], // средняя вертикаль
//   [2, 5, 8], // правая вертикаль
//   [0, 4, 8], // диагональ \
//   [2, 4, 6], // диагональ /
// ];

import {
  SET_CURRENT_PLAYER,
  END_GAME,
  SET_DRAW,
  UPDATE_FIELD,
  SET_WINNER,
  SET_GAME_ACTIVE,
  RESET_GAME,
} from "./constants.js";

const initialState = {
  currentPlayer: "x",
  isGameEnded: false,
  isDraw: false,
  field: ["", "", "", "", "", "", "", "", ""],
  winner: null,
  isActive: true,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_PLAYER: {
      return {
        ...state,
        currentPlayer: payload,
      };
    }
    case END_GAME: {
      return { ...state, isGameEnded: true };
    }
    case SET_DRAW: {
      return { ...state, isDraw: true };
    }
    case UPDATE_FIELD: {
      return { ...state, field: payload };
    }
    case SET_WINNER: {
      return { ...state, winner: payload };
    }
    case SET_GAME_ACTIVE: {
      return { ...state, isActive: payload };
    }
    case RESET_GAME: {
      return {
        currentPlayer: "x",
        isGameEnded: false,
        isDraw: false,
        field: ["", "", "", "", "", "", "", "", ""],
        winner: null,
        isActive: true,
      };
    }
    default: {
      return state;
    }
  }
};
