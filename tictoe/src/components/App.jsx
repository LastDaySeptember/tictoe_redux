import { useState } from "react";
import { AppLayout } from "./AppLayout.jsx";

export function App() {
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState(null);
  const [isActive, setIsActive] = useState(true);
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

  return (
    <>
      <div>
        <AppLayout
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
      </div>
    </>
  );
}
