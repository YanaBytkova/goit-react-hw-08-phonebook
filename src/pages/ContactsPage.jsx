import React from 'react';
import Filtering from 'components/Filtering/Filtering';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import css from 'components/App.module.css';

const ContactsPage = () => {
  return (
    <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filtering />
        <ContactList />
     </div>
  );
}

export default ContactsPage;
