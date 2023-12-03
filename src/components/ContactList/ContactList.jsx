
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contacts.reducer';
import Loader from 'components/Loader/Loader';
import {
    selectContacts,
    selectContactsError,
    selectContactsIsLoading,
    selectFilterTerm,
    selectVisibleContacts
  } from 'redux/contacts/contacts.selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  let contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filterContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilterTerm);
  
  if (filter.length > 0) {
    contacts = filterContacts;   }

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
          <div>
            {error !== null && <p className={css.error}>{error}</p>}
             {isLoading && <Loader />}
             <ul className={css.list}>  
                { showContacts && contacts.map(contact => (
                  <ContactItem contact={contact} key={contact.id}/> 
                  ))  }
              </ul>
          </div>
          
      )  ; 
}

export default ContactList;
    
    



