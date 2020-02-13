import { combineReducers } from 'redux';

import { todos, error, loading } from './todos';
import filter from './filters';

const rootReducer = combineReducers({ todos, filter, error, loading });

export default rootReducer;
