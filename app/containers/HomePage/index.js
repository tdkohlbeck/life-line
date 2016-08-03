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
  selectData,
} from '../App/selectors';

import {
  selectDatumName,
} from './selectors';

import {
  addDatum,
} from '../App/actions';


import {
  changeDatumName,
} from './actions';


import SubmitMenubar from 'components/SubmitMenubar';
import DatumList from 'components/DatumList';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    console.log('<3 returning HomePage.render()!');
    return (
      <div>
        <DatumList
          data={this.props.data}
        />
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
  /*data: React.PropTypes.array,*/
  datumName: React.PropTypes.string,
  formOnSubmit: React.PropTypes.func,
  inputOnChange: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  console.log(`<3 returning mapDispatchToProps(${dispatch})`);
  return {
    formOnSubmit: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(addDatum());
      //console.log(`<3 ending formOnSubmit after \ndispatch(addDatum());`);
    },
    inputOnChange: (evt) => {
      dispatch(changeDatumName(evt.target.value));
      //console.log(`<3 ending inputOnChange(<evt> ${evt}) after\ndispatch(changeDatumName(evt.target.value));`);
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  datumName: selectDatumName(),
  data: selectData(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
