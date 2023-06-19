import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.contacts.items;
export const selectError = state => state.contacts.contacts.error;
export const selectLoading = state => state.contacts.contacts.isLoading;
export const selectFilter = state => state.contacts.filter;

export const selectFilterContacts = createSelector(
  [selectItems, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
