import { createSelector } from 'reselect';

/*
let state = {
  datumName: 'eh?',
  get: (str) => {
    return str;
  },
};

I tried defining state and its 'get' method, but that didn't
work :(
*/
const selectHome = () => (state) => state.get('home');

const selectDatumName = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('datumName')
);

export {
  selectHome,
  selectDatumName,
 };

// 1. ******************************************************
// HELLO LIVECODING.TV VIEWERS! OUR ADVENTURE BEGINS ON LINE
// 14, where we receive the following error message:
// "Uncaught (in promise) TypeError: Cannot read property
// 'get' of undefined"
// travel with me to index.js where this file is imported!
