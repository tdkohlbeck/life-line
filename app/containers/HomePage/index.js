/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {
  selectDatumName,
} from './selectors';

import {
  submitDatum,
} from './actions';

import SubmitMenubar from 'components/SubmitMenubar';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <SubmitMenubar
          datumName={this.props.datumName}
          formOnSubmit={this.props.formOnSubmit}
          inputOnChange={this.props.inputOnChange}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  datumName: React.PropTypes.string,
  formOnSubmit: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    formOnSubmit: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
        console.log(evt.target);
      }
      dispatch(submitDatum(evt.target.value));
    },
    inputOnChange: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(submitDatum(evt.target.value));
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  datumName: selectDatumName(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

// 2. ******************************************************
// Here we have the container for our homepage component
// (which is just <SubmitMenubar /> for the time being)!
// We are importing the only function from selectors.js,
// and storing it in mapStateToProps on line 63, which is
// then passed to connect() on line 66. State *should* be
// assigned in reducer.js, the file to the right
