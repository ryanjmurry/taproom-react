import React, { Component } from 'react';
import Nav from './Nav';
import TapList from './TapList';
import NewKegForm from './NewKegForm';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <TapList />
        <NewKegForm />
      </div>
    );
  }
}

export default App;
