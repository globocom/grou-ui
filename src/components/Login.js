import React, { Component } from 'react';
import '../css/login.css';

export default class Login extends Component {

    constructor(){
      super();
      this.state = {msg:''};
    }

    send(event){
      event.preventDefault();

      var auth = 'Basic '+ btoa(this.login.value+':'+this.password.value);

      const requestInfo = {
        mode: 'no-cors',
        method:'GET',
        headers: new Headers({
          'Authorization': auth,
        })
      }

      fetch('http://localhost:8080/token/'+this.project.value, requestInfo)
        .then(response => {
          console.log(response);
          if(response.ok){
            return response.status();
          } else {
            console.log('Error');
            this.setState({msg:'Login not possible'});
          }
        })
        .then(token=> {
          console.log(token);
        });


    }

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
                      <form onSubmit={this.send.bind(this)}>

                        <div className="field">
                          <div className="control">
                            <input className="input is-large" type="text" placeholder="Login" ref={(input) => this.login = input}/>
                          </div>
                        </div>

                        <div className="field">
                          <div className="control">
                            <input className="input is-large" type="password" placeholder="Password" ref={(input) => this.password = input}/>
                          </div>
                        </div>

                        <div className="field">
                          <div className="control">
                            <input className="input is-large" type="text" placeholder="Project" ref={(input) => this.project = input}/>
                          </div>
                        </div>

                        <input className="button is-block is-info is-large" type="submit" value="Login" />
                      </form>
                    </div>
                    <p className="has-text-grey">
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
