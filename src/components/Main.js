import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Tests from './Tests';


export default class Main extends Component {

    render(){
        return (
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/tests' component={Tests}/>
          </Switch>

        );
      }
}
