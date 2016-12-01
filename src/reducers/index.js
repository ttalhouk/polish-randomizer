import { combineReducers } from 'redux';
import PolishReducer from './polish_reducer';

const rootReducer = combineReducers({
  polishes: PolishReducer
});

export default rootReducer;
