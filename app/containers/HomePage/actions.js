import {
  SUBMIT_DATUM,
} from './constants';

export function submitDatum(datumName) {
  alert(datumName);
  return {
    type: SUBMIT_DATUM,
    datumName,
    time: Date.now(),
  };
}
