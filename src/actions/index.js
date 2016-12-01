import {data} from '../../data/polish_inventory';

import {FETCH_POLISH} from './types';

export function fetchPolish(term) {

  console.log('Results:', data);
  return {
    type: FETCH_POLISH,
    payload: data
  }

}
