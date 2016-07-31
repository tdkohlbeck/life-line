/*
 *
 * TestContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTestContainer from './selectors';
import styles from './styles.css';

export class TestContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.testContainer}>
      This is TestContainer container ! {this.props.test}
      </div>
    );
  }
}

const mapStateToProps = selectTestContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
