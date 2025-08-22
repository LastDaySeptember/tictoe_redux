import { useState } from "react";
import { Field, Information } from "./index.js";

export function App() {
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <>
      <div>
        <Information />
        <Field />
      </div>
    </>
  );
}
