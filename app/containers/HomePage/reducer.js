import {
  CHANGE_DATUM_NAME,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  datumName: 'bravo!',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DATUM_NAME:
      return state
        .set('datumName', action.datumName);
    default:
      return state;
  }
}

export default homeReducer;

// 3. ******************************************************
// The state object in selectors.js should be assigned
// here, and given the 'get' method from fromJS() (or
// at least that's what I assume), in the initial run of the
// homeReducer function. However, this file isn't imported
// in index.js! As far as I can tell, the only place this
// file is imported is in routes.js, to the right.
