import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tests from './Tests';
import Test from './Test';
import RequestTests from './RequestTests';

export default class Main extends Component {

    render(){
        return (
          <div className="column is-12">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/tests' component={Tests}/>
              <Route exact path='/tests/request' component={RequestTests}/>
              <Route path="/tests/:id" component={Test}/>

            </Switch>
          </div>

        );
      }
}
