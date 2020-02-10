import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, composeEnhancers());
};

const store = configureStore({});

export default store;
