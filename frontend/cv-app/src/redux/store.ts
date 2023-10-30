import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const reducers = {
  reducer,
};

export default createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk))
);
