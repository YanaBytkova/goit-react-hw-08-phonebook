
import css from './ContactList.module.css';
// import React, { useEffect } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContactsThunk} from 'redux/contacts/contacts.reducer';
// import { selectContacts, selectFilterTerm, selectVisibleContacts} from 'redux/contacts/contacts.selector';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   let contacts = useSelector(selectContacts);
//   const filterContacts = useSelector(selectVisibleContacts);
//   const filter = useSelector(selectFilterTerm);
//   if (filter.length > 0) {
//        contacts = filterContacts;   }
  
 

//   useEffect(() => {
//     dispatch(fetchContactsThunk())
//   }, [dispatch]);

//        return (
//         <ul className={css.list}>  
//          {contacts.map(contact => (
//               <ContactItem contact={contact} key={contact.id}/> 
//         ))  }
//         </ul>
//   )  ; 
  
// }


import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contacts.reducer';
import { selectContacts } from 'redux/contacts/contacts.selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
            <ul className={css.list}>  
             {contacts.map(contact => (
                  <ContactItem contact={contact} key={contact.id}/> 
            ))  }
            </ul>
      )  ; 
}

export default ContactList;
    
    



