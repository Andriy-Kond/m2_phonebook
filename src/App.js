import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "ContactForm";
import Filter from "Filter";
import ContactList from "ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  addContact = data => {
    // const name = e.currentTarget.elements.name.value;
    // const number = e.currentTarget.elements.number.value;
    const { name, number } = data;

    const isExistContact = this.state.contacts.find(contact => {
      return contact.name === name;
    });

    isExistContact
      ? alert(`Contact ${name} already in contact book`)
      : this.setState(prevState => {
          return {
            ...prevState,
            contacts: [
              ...prevState.contacts,
              { id: nanoid(), name: name, number: number },
            ],
          };
        });

    // this.clearState();
  };

  handleFilter = e => this.setState({ filter: e.currentTarget.value });

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );

    return (
      <>
        {/* 
        <ContactList ... /> */}
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <ContactList visibleContacts={visibleContacts} />
      </>
    );
  }
}

export default App;
