import styles from "./FieldLayout.module.css";

export function FieldLayout({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  onClick,
  isActive,
  setIsActive,
}) {
  const containerState = isActive ? "active" : "disabled";

  return (
    <>
      <div className={`${styles["container"]} ${styles[containerState]}`}>
        {field.map((cell, index) => {
          return (
            <div
              key={index}
              className={`${styles["cell"]} ${styles[containerState]}`}
              onClick={() => {
                onClick(index);
              }}
            >
              {cell}
            </div>
          );
        })}
      </div>
    </>
  );
}
