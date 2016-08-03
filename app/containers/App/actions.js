// app/containers/App/actions.js

import {
  ADD_DATUM,
  APPEND_DATUM,
} from './constants';

// need to pass or access homeState somehow? to get datumName
export function addDatum() {
  //console.log(`<3 returning addDatum()`);
  return {
    type: ADD_DATUM,
  };
}

export function appendDatumToData(name) {
  console.log(`<3 returning appendDatumToData(${name})`);
  return {
    type: APPEND_DATUM,
    name,
    time: Date.now(),
    id: 3,
  };
}
