import {createStore, compose, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import {wrapMiddleware} from './middlewares';
import {reducer, epic} from './ducks';

export default function initStore() {
  const initState = {};
  const epicMiddleware = createEpicMiddleware();
  const middlewares = wrapMiddleware([epicMiddleware]);
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, initState, enhancer);
  epicMiddleware.run(epic);
  return store;
}
