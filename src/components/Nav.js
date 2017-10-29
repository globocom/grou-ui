import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    render(){
        return (
          <nav className="navbar is-white">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item brand-text" href="../">
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
                  <a className="navbar-item" href="admin.html">
                    Home
                  </a>
                </div>

              </div>
            </div>
          </nav>
        );
      }
}
