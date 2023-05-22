import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { CounterReducer } from "./Reducer/CounterReducer";

const composedEnhancer = composeWithDevTools();

const store = createStore(
  combineReducers({
    counter: CounterReducer,
  }),
  composedEnhancer
);
export default store;