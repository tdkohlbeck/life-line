import React from 'react';

import styles from './styles.css';

function SubmitMenubar(props) {
  const getTime = () => {
    let time = new Date();
    return (
      //`${time.getHours()}:${time.getMinutes()}`
      time.toLocaleTimeString()
    );
  }
  return (
    <form
      className={styles.form}
      onSubmit={props.formOnSubmit}
    >
      <label htmlFor="datumName">
        <span>{getTime()}</span>
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
