import React, { Component } from 'react';
import styles from '../contactList/ContactList.module.css';
// import ContactList from 'components/contactList/ContactList';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    contacts: [],
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { addContact, contacts } = this.props;
    const newContact = { id: contacts.length + 1, name, number };

    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`Контакт з ім'ям ${name} вже існує!`);
    } else {
      addContact({ name, number });
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          placeholder="Name"
          required
        />
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
          placeholder="Phone Number"
          required
        />
        <button className={styles.buttonForm} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
