import { createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  RootReducer  from "./Reducers/RootReducer";

const composedEnhancer = composeWithDevTools();

const store = createStore(RootReducer,composedEnhancer);
export default store;