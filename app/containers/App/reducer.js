/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
 import {
   APPEND_DATUM,
 } from './constants';

import { fromJS, toArray } from 'immutable';
//import { uuid } from 'node-uuid';

// The initial state of the App
const initialState = fromJS({
  data: fromJS([
    fromJS({
      id: 1,
      name: 'My name is Datum!',
      time: 'The time!',
    }),
    fromJS({
      id: 2,
      name: 'Second datum!',
      time: 'Time again!',
    }),
  ]),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case APPEND_DATUM:
      const datum = fromJS({
        id: action.id,
        name: action.name,
        time: action.time,
      });
      console.log(typeof datum);
      console.log(typeof datum.toArray());
      console.log([...state.get('data'), datum]);
      const data = [...state.get('data'), datum];
      return state
        .set('data', data);
    default:
      return state;
  }
}

export default appReducer;
