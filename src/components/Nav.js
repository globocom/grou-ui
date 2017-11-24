import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    render(){
        return (
          <nav className="navbar is-fixed-top is-link">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item brand-text" href="#">
                  Grou
                </a>
                <div className="navbar-burger burger" data-target="navMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div id="navMenu" className="navbar-menu">
                <div className="navbar-start">
                  <Link className="navbar-item" to="/">
                    Dashboard
                  </Link>
                  <Link className="navbar-item" to="/tests">
                    Tests
                  </Link>
                </div>

              </div>
            </div>
          </nav>
        );
      }
}
