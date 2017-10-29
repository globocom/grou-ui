import React, { Component } from 'react';

export default class Menu extends Component {

    render(){
        return (
          <div className="column is-3">
            <aside className="menu">
              <p className="menu-label">
                General
              </p>
              <ul className="menu-list">
                <li><a className="is-active">Dashboard</a></li>
                <li><a>Tests</a></li>
              </ul>
            </aside>
          </div>
        );
      }
}
