import React from 'react';
import styles from '../contactList/ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <div className={styles.list}>
        {contacts.map(contact => (
          <div key={contact.id}>
            {' '}
            <div className={styles.item}>
              <p className={styles.text}>
                {contact.name}: {contact.number}
              </p>
              <div>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => deleteContact(contact.id)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
