import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filterHandler, inputValue }) => {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.formLabel}>
        Contact search
        <input
          type="text"
          name="filter"
          value={inputValue}
          onChange={filterHandler}
          className={styles.inputForm}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
