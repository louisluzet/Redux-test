import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;