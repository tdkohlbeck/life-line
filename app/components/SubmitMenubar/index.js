import React from 'react';

import CurrentTimeDisplay from 'components/CurrentTimeDisplay';

import styles from './styles.css';

function SubmitMenubar(props) {
  return (
    <form
      className={styles.form}
      onSubmit={props.formOnSubmit}
    >
      <label htmlFor="datumName">
        <CurrentTimeDisplay />
        <input
          className={styles.input}
          id="datumName"
          placeholder="Name your datum..."
          type="text"
          defaultValue={props.datumName}
          onChange={props.inputOnChange}
        />
      </label>
    </form>
  );
}

SubmitMenubar.propTypes = {
  datumName: React.PropTypes.string,
  formOnSubmit: React.PropTypes.func,
  inputOnChange: React.PropTypes.func,
};

export default SubmitMenubar;
