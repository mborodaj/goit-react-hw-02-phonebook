import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  console.log(contacts);
  return (
    <>
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contactListItem}>
            <p className={styles.contactData}>
              {name}: {number}
            </p>
            <button
              onClick={() => removeContact(id)}
              className={styles.removeButton}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
