import React, { Component } from 'react';
import Nav from './Nav';
import Menu from './Menu';
import Main from './Main';


class App extends Component {
  render() {
    return (
    <div id="root">
        <Nav/>
        <div class="container">
          <div class="columns">
            <Menu/>
            <Main/>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
