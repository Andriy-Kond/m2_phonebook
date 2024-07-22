import React, { Component } from "react";
import { nanoid } from "nanoid";
// model.id = nanoid();

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "sss",
    number: "",
    filter: "",
  };

  handleContact = e => {
    const { name } = e.currentTarget;
    this.setState({ [name]: e.currentTarget.value });
  };

  addContact = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    this.setState(prevState => {
      return {
        ...prevState,
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: name, number: number },
        ],
      };
    });

    this.clearState();
  };

  clearState = () => {
    this.setState({ name: "", number: "" });
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(e.currentTarget.value);
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.includes(filter),
    );
    return (
      <>
        <h2>Phonebook</h2>
        <label>
          Filter here
          <input type="text" value={filter} onChange={this.handleFilter} />
        </label>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={this.handleContact}
            />
          </label>

          <label>
            Telephone
            <input
              type="tel"
              name="number"
              required
              value={number}
              onChange={this.handleContact}></input>
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
