import { combinedReducer } from "../combinedReducer"
import { ActionTypes } from "./type";

export const rootReducer = (state: any, action: ActionTypes) => {

  return combinedReducer(state, action);
}