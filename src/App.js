import React, { Component } from "react";
import { nanoid } from "nanoid";
// model.id = nanoid();

class App extends Component {
  state = {
    contacts: [],
    name: "sss",
    number: "",
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

    this.clearStateName();
  };

  clearStateName = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
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
          {this.state.contacts.map(({ id, name, number }) => {
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
