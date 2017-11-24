import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Test extends Component {

    constructor(){
       super();
       this.state = {test:[]};
     }

     componentDidMount(){
       fetch(`http://localhost:8080/tests/` + this.props.match.params.id)
         .then(response => response.json())
         .then(test => {
           this.setState({test:test});
           console.log("state", this.state);
         });
     }


    render(){
        return (
          <div>
              <div class="column is-6">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                    Test Details
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <table class="table is-fullwidth">
                        <tbody>
                          <tr>
                            <td><strong>Name</strong></td><td>{ this.state.test.name }</td>
                          </tr>
                          <tr>
                            <td><strong>Project</strong></td><td>{ this.state.test.project }</td>
                          </tr>
                          <tr>
                            <td><strong>Created By</strong></td><td>{ this.state.test.createdBy }</td>
                          </tr>
                          <tr>
                            <td><strong>Creted Date</strong></td><td>{ this.state.test.createdDate }</td>
                          </tr>
                          <tr>
                            <td><strong>Dashboard</strong></td><td><Link to="{ this.state.test.dashboard }">view dashboard</Link></td>
                          </tr>
                          <tr>
                            <td><strong>Duration Time</strong></td><td>{ this.state.test.durationTimeMillis } ms</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                  </div>
              </div>
              </div>

        );
      }
}
