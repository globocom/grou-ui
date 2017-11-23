import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import $ from 'jquery';

export default class Tests extends Component {



  constructor(){
     super();
     this.state = {tests:[]};

   }


   componentDidMount(){
     fetch(`http://grou.globoi.com/tests/`)
       .then(response => response.json())
       .then(tests => {
         this.setState({tests:tests._embedded.tests.sort(function(a, b) { return new Date (a.createdDate) - new Date (b.createdDate) }).reverse()});
         console.log("state", this.state);
       });
   }

    render(){
        return (
          <div>
            <h1 className="title is-1">Tests</h1>

            <section className="section">

            <table className="table is-bordered is-fullwidth">
              <thead>
                <tr>
                  <th><abbr title="Name">Name</abbr></th>
                  <th><abbr title="Project">Project</abbr></th>
                  <th><abbr title="Status">Status</abbr></th>
                  <th><abbr title="Created By">Created by</abbr></th>
                  <th><abbr title="Created At">Created Date</abbr></th>
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
                        <td><span className="tag">{test.status}</span></td>
                        <td>{test.createdBy}</td>
                        <td>
                          <Moment format="MMM Do YY - h:mm:ss a">
                            {new Date(test.createdDate)}
                          </Moment>
                        </td>
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
