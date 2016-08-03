import {
  ADD_DATUM,
  CHANGE_DATUM_NAME,
} from './constants';

export function addDatum(datumName) {
  return {
    type: ADD_DATUM,
    datumName,
    time: Date.now(),
  };
}

export function changeDatumName(datumName) {
  return {
    type: CHANGE_DATUM_NAME,
    datumName,
  }
}
