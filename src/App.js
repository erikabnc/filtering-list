import React, { Component } from 'react';
import ContactList from './ContactList';
import c from './data';

class App extends Component {
  render() {
    return (
      <div>
        <ContactList contacts={c.favorites} />
        <ContactList contacts={c.blocked} />
        <ContactList contacts={c.other} />
      </div>
    );
  }
}

export default App;
