import { useState } from "react";
import styles from "./AppLayout.module.css";
import { Field, Information } from "./index.js";

export function App() {
  return (
    <>
      <div>
        <Information />
        <Field />
      </div>
    </>
  );
}
