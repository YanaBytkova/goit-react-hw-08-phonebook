
import React from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { ReactComponent as IconAdd } from 'assets/icons/addIcon.svg';

import {
  addContacThunk,
} from 'redux/contacts/contacts.reducer';


const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.contactName.value;
    const number = event.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    dispatch(addContacThunk(formData))
      .unwrap()
      .then(() => event.target.reset());
  };

    return (
        
      <form onSubmit={onAddContact} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Name</p>
          <input className={css.input} type="text" name="contactName" required />
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Number</p>
          <input className={css.input} type="tel" name="contactNumber" required />
        </label> <br />
        <button className={css.button} type="submit">Add contact <IconAdd className={css.svgIcon}/></button>
      </form>
    );
 

}
export default ContactForm;