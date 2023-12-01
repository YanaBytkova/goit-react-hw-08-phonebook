
import React, { useState } from 'react';
import { addContact } from 'redux/contacts/contacts.reducer';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/contacts/contacts.selector';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
   const [name, setName] = useState('');
   const [phone, setNumber] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const contactData = {
      name,
      phone
    };
    
    handleAddProduct(contactData);
    form.reset();
  };

  const handleAddProduct = contactData => {
    const isExist = contacts.some(
      contact => contact.name === contactData.name
    );

    if (isExist) {
      alert(`${contactData.name} is already in contacts.`);
      return
    }

    const finalNames = {
      ...contactData,
      id: nanoid(),
    };
    dispatch(addContact(finalNames));

  };

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name; 
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  
    return (
        
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Name</p>
          <input type="text" name="name" required onChange={handleInputChange}/>
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Number</p>
          <input type="tel" name="number" required onChange={handleInputChange}/>
        </label> <br />
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
 

}
export default ContactForm;