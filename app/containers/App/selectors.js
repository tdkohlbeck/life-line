// containers/App/selectors.js
import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectData = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('data')
);

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectData,
  selectLocationState,
};
