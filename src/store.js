import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { save } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, save({ namespace: 'todo-list' })))
  );
};

const store = configureStore({});

export default store;
