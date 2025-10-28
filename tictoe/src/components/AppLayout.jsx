import styles from "./AppLayout.module.css";
import { Information } from "./Information.jsx";
import { Field } from "./Field.jsx";
import { Button } from "./Button.jsx";

export function AppLayout() {
  return (
    <>
      <div className={styles["game"]}>
        <Information />
        <Field />
        <Button>Reset Game</Button>
      </div>
    </>
  );
}
