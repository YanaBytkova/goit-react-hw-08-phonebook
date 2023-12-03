// import Loader from 'components/Loader/Loader';
import React from 'react';

// import Filtering from 'components/Filtering/Filtering';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import css from 'components/App.module.css';

// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addContacThunk,
//   deleteContactThunk,
//   fetchContactsThunk,
// } from 'redux/contacts/contacts.reducer';
// import {
//   selectContacts,
//   selectContactsError,
//   selectContactsIsLoading,
// } from 'redux/contacts/contacts.selectors';

const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectContactsIsLoading);
//   const error = useSelector(selectContactsError);

//   useEffect(() => {
//     dispatch(fetchContactsThunk());
//   }, [dispatch]);

//   const onAddContact = event => {
//     event.preventDefault();

//     const name = event.currentTarget.elements.contactName.value;
//     const number = event.currentTarget.elements.contactNumber.value;

//     const formData = {
//       name,
//       number,
//     };

//     dispatch(addContacThunk(formData))
//       .unwrap()
//       .then(() => event.target.reset());
//   };

//   const onDeleteContact = contactId => {
//     dispatch(deleteContactThunk(contactId));
//   };

  // const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    // <div>
    //   <form onSubmit={onAddContact}>
    //     <h2>Add New Contact</h2>
    //     <label>
    //       <p>Name:</p>
    //       <input
    //         type="text"
    //         placeholder="Jacob Mercer"
    //         required
    //         name="contactName"
    //       />
    //     </label>
    //     <label>
    //       <p>Number:</p>
    //       <input
    //         type="text"
    //         placeholder="761-23-96"
    //         required
    //         name="contactNumber"
    //         minLength={3}
    //       />
    //     </label>
    //     <br />
    //     <button type="submit">✨ Add</button>
    //   </form>
    //   {error !== null && <p className="error-bage">{error}</p>}
    //   {isLoading && <Loader />}
    //   <ul>
    //     {showContacts &&
    //       contacts.map(({ id, name, number }) => {
    //         return (
    //           <li key={id}>
    //             <h3>
    //               <span>{name}</span>
    //               <button
    //                 disabled={isLoading}
    //                 onClick={() => onDeleteContact(id)}
    //               >
    //                 🤷‍♂️
    //               </button>
    //             </h3>
    //             <p>{number}</p>
    //           </li>
    //         );
    //       })}
    //   </ul>
    // </div>
    <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <Filtering /> */}
        <ContactList />
     </div>
  );
};

export default ContactsPage;
