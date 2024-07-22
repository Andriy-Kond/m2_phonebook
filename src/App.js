import React, { Component } from "react";
import { nanoid } from "nanoid";
// model.id = nanoid();

class App extends Component {
  state = {
    contacts: [],
    name: "sss",
  };

  handleContact = e => {
    this.setState({ name: e.currentTarget.value });
  };

  addContact = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;

    this.setState(prevState => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, { id: nanoid(), name: name }],
      };
    });

    this.clearStateName();
  };

  clearStateName = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleContact}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default App;
