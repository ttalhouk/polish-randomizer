import {FETCH_POLISH, FETCH_COLORS, FETCH_TYPES, RANDOM_POLISH} from '../actions/types';

const INITIAL_STATE = { all: [], colors: [], types: [], polish: null}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POLISH:
      return { ...state, all: action.payload };
    case FETCH_COLORS:
      return { ...state, colors: action.payload };
    case FETCH_TYPES:
      return { ...state, types: action.payload };
    case RANDOM_POLISH:
      return { ...state, polish: action.payload }
  }
  return state;
}
