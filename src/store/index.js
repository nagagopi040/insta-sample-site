import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from './reducers'

export default configureStore = (preloadedState) => {
  const middlewares = applyMiddleware([thunkMiddleware]);
  const store = createStore(rootReducer, preloadedState, )
}