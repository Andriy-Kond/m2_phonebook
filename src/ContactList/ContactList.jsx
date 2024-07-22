import React, { Component } from "react";

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
