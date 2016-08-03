// containers/HomePage/selectors.js
import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectDatumName = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('datumName')
);


export {
  selectHome,
  selectDatumName,
 };
