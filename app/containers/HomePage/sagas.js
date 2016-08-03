import { take, call, put, select } from 'redux-saga/effects';

import {
  ADD_DATUM,
} from 'containers/App/constants';

import {
  addDatum,
  appendDatumToData,
} from 'containers/App/actions';

import {
  selectDatumName,
} from 'containers/HomePage/selectors';

export function* getDatumName() {
  const datumName = yield select(selectDatumName());
  yield put(appendDatumToData(datumName));
}

// Individual exports for testing
export function* getDatumNameWatcher() {
  while (yield take(ADD_DATUM)) {
    yield call(getDatumName);
  }
}

// Your sagas for this container
export default [
  getDatumName,
  getDatumNameWatcher,
];
