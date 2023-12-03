// import React from 'react';
// import css from './ContactItem.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteContactThunk } from 'redux/contacts/contacts.reducer';

// const ContactItem = ({ contact }) => {
//       const dispatch = useDispatch();

//       const handleDeleteContacts = contactId => {
//             dispatch(deleteContactThunk(contactId));
//           };
      
      
//       return (
          
//                   <li key={contact.id} className={css.item}>
//                         <span className={css.name}>{contact.name}</span>
//                         <span className={css.number}>{contact.phone}</span>
//                          <button className={css.button} onClick={() => handleDeleteContacts(contact.id)}
//                         type="button">Delete</button>
//                   </li>

//       )  ; 
          
      
// };


import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contacts.reducer';
import css from './ContactItem.module.css';


const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
 
  const onDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };
  return (
          
                        <li key={contact.id} className={css.item}>
                              <span className={css.name}>{contact.name}</span>
                              <span className={css.number}>{contact.number}</span>
                               <button className={css.button} onClick={() => onDeleteContact(contact.id)}
                              type="button">Delete</button>
                        </li>
      
            )  ; 
}

export default ContactItem;