import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tests from './Tests';
import RequestTests from './RequestTests';


export default class Main extends Component {

    render(){
        return (
          <div className="column is-12">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/tests' component={Tests}/>
              <Route path='/request-tests' component={RequestTests}/>
              </Switch>
          </div>

        );
      }
}
