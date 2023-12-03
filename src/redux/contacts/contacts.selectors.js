import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phonebook.contacts;
export const selectContactsIsLoading = state => state.phonebook.isLoading;
export const selectContactsError = state => state.phonebook.error;
export const selectFilterTerm = state => state.contactsStore.filterTerm;


export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilterTerm],
     (contacts, filterTerm) => {
       return contacts.filter(contact => contact.name.toLowerCase()
        .includes(filterTerm.toLowerCase()))
     }
    )
