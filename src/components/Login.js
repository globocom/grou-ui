import React, { Component } from 'react';
import '../css/login.css';

export default class Login extends Component {

    render(){
        return (
            <div>
            <section className="hero is-success is-fullheight">
              <div className="hero-body">
                <div className="container has-text-centered">
                  <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-grey">Grou</h3>
                    <p className="subtitle has-text-grey">Please enter your Keystone credentials</p>
                    <div className="box">
                      <form>
                        <div className="field">
                          <div className="control">
                            <input className="input is-large" type="text" placeholder="Login" autofocus=""/>
                          </div>
                        </div>

                        <div className="field">
                          <div className="control">
                            <input className="input is-large" type="password" placeholder="Password"/>
                          </div>
                        </div>
                        <a className="button is-block is-info is-large">Login</a>
                      </form>
                    </div>
                    <p classNameName="has-text-grey">
                      <a href="../">Sign Up</a> &nbsp;·&nbsp;
                      <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                      <a href="../">Need Help?</a>
                    </p>
                  </div>
                </div>
              </div>
              </section>
            </div>
        );
    }
}
