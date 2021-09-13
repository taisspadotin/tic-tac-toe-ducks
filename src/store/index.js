import { createStore, compose, aplyMiddleware } from "redux";
import rootReducer from "./duck";

const store = createStore(rootReducer);

export default store;