/**
*
* DatumList
*
*/

import React from 'react';

import styles from './styles.css';

function DatumList(props) {
  let i = 0;
  const dataList = props.data.map((datum) => {
    return (
      <div
        className={styles.datumView}
        key={i++}
      >
        <span>
          {datum.get('time')} -- {datum.get('name')}
        </span>
      </div>
    );
  });
  //console.log(props.data[0].get('name'));
  return (
    <div className={styles.DatumList}>
      {/*props.data.map((datum) => {
        return (
          <li key={i++}>
            <span>{datum.time}</span>
            <span>{datum.name}</span>
          </li>
        );
      })*/dataList}
    </div>
  );
}

/*DatumList.propTypes = {
  data: React.PropTypes.array,
};*/

export default DatumList;
