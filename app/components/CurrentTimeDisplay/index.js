/**
*
* CurrentTimeDisplay
*
*/

import React from 'react';

import styles from './styles.css';

class CurrentTimeDisplay extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      time: this.getTime(),
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({time: this.getTime()});
    }, 1000);
  }
  getTime() {
    let time = new Date();
    let hour = time.getHours();
    if (hour < 10) {
      hour = '0' + hour;
    }
    let min = time.getMinutes();
    if (min < 10) {
      min = '0' + min;
    }
    let colon = time.getSeconds() % 2 ? ':' : ' ';
    return (
      hour + colon + min
      //time.toLocaleTimeString()
    );
  }
  render() {
    console.log(`<3 returning CurrentTimeDisplay.render()!`);
    return (
      <span className={styles.currentTimeDisplay}>
        {this.state.time}
      </span>
    );
  }
}

export default CurrentTimeDisplay;
