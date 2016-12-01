import {data} from '../../data/polish_inventory';
import _ from 'lodash';

import {FETCH_POLISH, FETCH_COLORS, FETCH_TYPES, RANDOM_POLISH} from './types';

export function fetchPolish() {
  return {
    type: FETCH_POLISH,
    payload: data
  }
}
export function fetchPolishColors() {
  const colors = _.uniq(data, 'color').map((element) => {return element.color});
  console.log('colors',colors);
  return {
    type: FETCH_COLORS,
    payload: colors
  }
}
export function fetchPolishTypes() {
  const types = _.uniq(data, 'type').map((element) => {return element.type});
  console.log('types', types);
  return {
    type: FETCH_TYPES,
    payload: types
  }
}

export function fetchRandomPolish() {
  const polish = _.sample(data);
  console.log(polish);
  return {
    type: RANDOM_POLISH,
    payload: polish
  }
}
export function fetchSpecifiedColor(value) {
  const polish = _.sample(_.filter(data, {color: value}))
  console.log('fetch random color', value, polish);
  return {
    type: RANDOM_POLISH,
    payload: polish
  }
}
export function  fetchSpecifiedType(value) {
  const polish = _.sample(_.filter(data, {type: value}))
  console.log('fetch random type', value, polish);
  return {
    type: RANDOM_POLISH,
    payload: polish
  }

}
