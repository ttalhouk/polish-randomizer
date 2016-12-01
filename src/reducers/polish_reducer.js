import { FETCH_POLISH } from '../actions/types';

export default function(state = [], action) {
  console.log('actions',action.type, action.payload);
  switch (action.type) {
    case FETCH_POLISH:
      return [ ...action.payload, ...state ];
  }
  return state;
}
