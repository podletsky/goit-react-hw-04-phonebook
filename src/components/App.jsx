import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './сontactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import styles from './contactList/ContactList.module.css';

const App = () => {
  const [phonebook, setPhoneBook] = useState({
    contacts: [],
    filter: '',
  });

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setPhoneBook(prevState => ({
        ...prevState,
        contacts: JSON.parse(savedContacts),
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(phonebook.contacts));
  }, [phonebook.contacts]);

  const addContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    setPhoneBook(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  const handleFilterChange = event => {
    const { value } = event.target;
    setPhoneBook(prevState => ({
      ...prevState,
      filter: value,
    }));
  };

  const handleDelete = id => {
    setPhoneBook(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  const getVisibleContacts = () => {
    const { contacts, filter } = phonebook;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const { contacts, filter } = phonebook;

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
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
