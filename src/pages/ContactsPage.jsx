
import React from 'react';

import Filtering from 'components/Filtering/Filtering';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import logo from 'assets/images/phonebook.png';
import css from 'components/App.module.css';

const ContactsPage = () => {

  return (
    
    <div className={css.container}>
        <h1 className={css.titlePhonebook}>Phonebook <img src={logo} alt="Phonebook" className="image" width="100px"/></h1>
        
        <ContactForm />
        <h2 className={css.titleContacts}>Contacts</h2>
        <Filtering />
        <ContactList />
     </div>
  );
};

export default ContactsPage;
