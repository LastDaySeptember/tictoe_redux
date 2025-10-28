import { AppLayout } from "./AppLayout.jsx";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { store } from "../store.js";

export function App() {
  const [countStore, setCountStore] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log("State changes");
      console.log(store.getState());
      setCountStore((countStore) => countStore + 1);
    });

    return () => {
      unsubscribe();
    };
  }, [countStore]);

  return (
    <>
      <div>
        <AppLayout />
      </div>
    </>
  );
}
