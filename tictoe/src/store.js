import { reducer } from "./reducer";
import { createStore } from "redux";

// const createStore = () => {
//   let state;
//   return {
//     dispatch: (action) => {
//       state = reducer(state, action);
//     },
//     getState: () => {
//       return StaticRange;
//     },
//   };
// };

// export const store = createStore();

export const store = createStore(reducer);
