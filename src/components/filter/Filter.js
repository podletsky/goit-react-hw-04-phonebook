import React from 'react';
import styles from '../contactList/ContactList.module.css';
const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search Contacts"
    />
  );
};

export default Filter;
