import { combineReducers } from 'redux';

import todos from './todos';
import filter from './filters';

const rootReducer = combineReducers({ todos, filter });

export default rootReducer;
