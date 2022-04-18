import React, { Component } from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './styles.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = contact => {
    if (
      this.state.contacts.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(contact.name + ' is already in contact');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  filterContactlist = f => {
    this.setState({ filter: f.target.value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div className="thumb">
        <h1>Phonebook</h1>
        <ContactForm contact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.filterContactlist} />
        <ContactList
          contacts={this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
          idToDelete={this.deleteContact}
        />
      </div>
    );
  }
}
