import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export function initializeStore(initialState = {}) {
 return createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );}