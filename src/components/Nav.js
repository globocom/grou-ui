import React, { Component } from 'react';

export default class Nav extends Component {

    render(){
        return (
          <nav className="navbar is-white">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item brand-text" href="../">
                  Bulma Admin
                </a>
                <div className="navbar-burger burger" data-target="navMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenu" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item" href="admin.html">
                    Home
                  </a>
                  <a className="navbar-item" href="admin.html">
                    Orders
                  </a>
                  <a className="navbar-item" href="admin.html">
                    Payments
                  </a>
                  <a className="navbar-item" href="admin.html">
                    Exceptions
                  </a>
                </div>

              </div>
            </div>
          </nav>
        );
      }
}
