import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Menu extends Component {

    render(){
        return (
          <div className="column is-3">
            <aside className="menu">
              <p className="menu-label">
                General
              </p>
              <ul className="menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tests">Tests</Link></li>
              </ul>
            </aside>
          </div>
        );
      }
}
