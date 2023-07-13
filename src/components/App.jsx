import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { ContactListContainer, Phonebook, H2 } from './App.styled';
import ContactForm from './ContactForm/ContactForm';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    console.log("App  newContact", newContact)

    const isExist = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isExist) {
      Notify.info(`${name} is already in contacts`, {
        position: 'center-top',
        info: {
          background: '#738ddae4',
        },
      });
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    Notify.success('Contact added successfully', {
      position: 'center-top',
      clickToClose: true,
      success: {
        background: '#9dbc89df',
      },
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    Notify.success('Deleted', {
      position: 'center-top',
      clickToClose: true,
      timeout: 1500,
      success: {
        background: '#9dbc89df',
      },
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  resetFilter = () => {
    this.setState({ filter: '' });
  };

  render() {
    const {
      formSubmit,
      handleFilterChange,
      resetFilter,
      filterContactsByName,
      deleteContact,
      state,
    } = this;

    return (
      <>
        <Phonebook>Phonebook</Phonebook>
        <ContactForm onSubmit={formSubmit} />
        <ContactListContainer>
          <H2>Contacts</H2>
          <Filter
            value={state.filter}
            onChange={handleFilterChange}
            reset={resetFilter}
          />
          {filterContactsByName().length ? (
            <ContactList
              contacts={filterContactsByName()}
              onDeleteContact={deleteContact}
            />
          ) : (
            <H2>Contact list is empty</H2>
          )}
        </ContactListContainer>
      </>
    );
  }
}
