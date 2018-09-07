import React, { Component } from 'react';
import Nav from './Nav';
import TapList from './TapList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={TapList} />
          <Route path='/newkeg' component={NewKegForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
