import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./redux-demo";

const rootReducer = combineReducers({
  counterReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;