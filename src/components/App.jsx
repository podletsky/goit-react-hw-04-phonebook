import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../components/сontactForm/ContactForm.js';
import ContactList from '../components/contactList/ContactList.js';
import Filter from '../components/filter/Filter.js';
import styles from '../components/contactList/ContactList.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function addContact(contact) {
    console.log('Updated contacts:', contacts);
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  const handleFilterChange = event => {
    setFilter(event.target.value);
    console.log('Updated filter:', filter);
  };
  useEffect(() => {
    const savedContacts = localStorage.getItem(contacts);
    console.log('Saved contacts:', savedContacts);

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, []);
  const handleDelete = id => {
    console.log('Updated contacts:', contacts);

    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={getVisibleContacts()}
        deleteContact={handleDelete}
      />
    </div>
  );
};

export { App };
