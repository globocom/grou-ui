import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class Tests extends Component {

  constructor(){
     super();
     this.state = {tests:[]};
   }


   componentDidMount(){
     fetch(`http://localhost:8080/tests/`)
       .then(response => response.json())
       .then(tests => {
         this.setState({tests:tests._embedded.tests});
         console.log("state", this.state);
       });
   }

    render(){
        return (
          <div>
            <h1 className="title is-1">Tests</h1>

            <section className="section">
            <h2 className="title is-2">All Tests</h2>

            <table className="table is-bordered is-fullwidth">
              <thead>
                <tr>
                  <th><abbr title="Name">Name</abbr></th>
                  <th><abbr title="Project">Project</abbr></th>
                  <th><abbr title="Tags">Tags</abbr></th>
                  <th><abbr title="Created By">Created by</abbr></th>
                  <th><abbr title="Dashboard">Dashboard</abbr></th>
                </tr>
              </thead>
              <tbody>
              {
                 this.state.tests.map(function(test){
                   return (
                     <tr>
                        <td>{test.name}</td>
                        <td>{test.project}</td>
                        <td>{test.tags}</td>
                        <td>{test.createdBy}</td>
                        <td><Link to={test.dashboard} target="_blank">dashboard</Link></td>
                      </tr>
                    );
                })
              }

              </tbody>
            </table>
            </section>
            </div>

        );
      }
}
