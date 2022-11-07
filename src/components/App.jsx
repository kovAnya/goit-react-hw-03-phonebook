import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { RootEl } from './App.styled';

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

  onFormSubmit = evt => {
    evt.preventDefault();
    const contactName = evt.currentTarget.elements.name.value;
    const contactPhone = evt.currentTarget.elements.number.value;

    if (this.searchForDublicate(contactName)) {
      evt.currentTarget.reset();
      return alert(`${contactName} is already in contacts.`);
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: contactName,
            number: contactPhone,
          },
        ],
      };
    });

    evt.currentTarget.reset();
  };

  searchForDublicate = searchedName => {
    return this.state.contacts.some(contact => contact.name === searchedName);
  };

  onFilterChange = event => {
    const filterValue = event.target.value;
    this.setState({ filter: filterValue });
  };

  onDelete = evt => {
    const nameToRemove = evt.currentTarget.dataset.name;
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.name !== nameToRemove
        ),
      };
    });
  };

  render() {
    return (
      <RootEl>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.onFormSubmit} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.onFilterChange} />
        <ContactList
          contacts={this.state.contacts}
          filterValue={this.state.filter}
          onDelete={this.onDelete}
        />
      </RootEl>
    );
  }
}
