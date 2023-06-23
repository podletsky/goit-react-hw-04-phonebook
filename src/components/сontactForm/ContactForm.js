// import React, { useState } from 'react';
// import styles from '../contactList/ContactList.module.css';
// // import ContactList from 'components/contactList/ContactList';
// const ContactForm=()=>{
//   const[name,setName]=useState,
//  const[number,setNumber]=useState,
//    const[contacts,setContacts]=useState ,
//   };

//   const handleNameChange = event => {
//   setName (event.target.value );
//   };

//   const handleNumberChange = event => {
//    setNumber(event.target.value);
//   };

//  const handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = contacts;
//     const { addContact, contacts } = this.props;
//     const newContact = { id: contacts.length + 1, name, number };

//    setContacts({
//       contacts: [...contacts, newContact],
//       name: '',
//       number: '',
//     });

//     const isDuplicateName = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (isDuplicateName) {
//       alert(`Контакт з ім'ям ${name} вже існує!`);
//     } else {
//       addContact({ name, number });
//      setContacts({ name: '', number: '' });
//     }
//   };

//     const { name, number } = contacts

//     return (
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//           className={styles.input}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleNameChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           className={styles.input}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleNumberChange}
//           placeholder="Phone Number"
//           required
//         />
//         <button className={styles.buttonForm} type="submit">
//           Add Contact
//         </button>
//       </form>
// );

// export default ContactForm;
import React, { useState } from 'react';
import styles from '../contactList/ContactList.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a name and phone number.');
      return;
    }

    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Name"
        required
      />
      <input
        className={styles.input}
        type="tel"
        name="number"
        value={number}
        onChange={event => setNumber(event.target.value)}
        placeholder="Phone Number"
        required
      />
      <button className={styles.buttonForm} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
