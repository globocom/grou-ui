import React, { Component } from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Content from './components/Content';


class App extends Component {
  render() {
    return (
    <div id="root">
        <Nav/>
        <div class="container">
          <div class="columns">
            <Menu/>
            <Content/>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
