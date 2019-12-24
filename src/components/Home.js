import React, { Component } from 'react';
import Moment from 'react-moment';
export default class Home extends Component {


  constructor(){
     super();
     this.state = {tests:[]};

   }


   componentDidMount(){
     fetch(`http://grou.globoi.com/tests/`)
       .then(response => response.json())
       .then(tests => {
         console.log(tests.length);
         this.setState({
           tests:tests._embedded.tests,
           testsTotal: tests._embedded.tests.length,
           testsScheduled: tests._embedded.tests.filter((a) => { return a.status === 'SCHEDULED' }).length,
           testsEnqueued: tests._embedded.tests.filter((a) => { return a.status === 'ENQUEUED' }).length,
           testsRunning: tests._embedded.tests.filter((a) => { return a.status === 'RUNNING' }).length,
           tests: tests._embedded.tests.sort((a, b) => { return new Date (a.createdDate) - new Date (b.createdDate) }).reverse().slice(0,6),

         });
         console.log("state", this.state);
       });

   }

    render(){
        return (
            <div>
            <section className="info-tiles">
              <div className="tile is-ancestor has-text-centered">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">{ this.state.testsTotal }</p>
                    <p className="subtitle">Total Tests</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">{ this.state.testsScheduled }</p>
                    <p className="subtitle">Scheduled</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">{ this.state.testsEnqueued }</p>
                    <p className="subtitle">Enqueued</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">{ this.state.testsRunning}</p>
                    <p className="subtitle">Running</p>
                  </article>
                </div>


              </div>
            </section>
            <div className="columns">
              <div className="column is-12">
                <div className="card events-card">
                  <header className="card-header">
                    <p className="card-header-title">
                      Latest Tests
                    </p>
                  </header>
                  <div className="card-table">
                    <div className="content">
                      <table className="table is-fullwidth is-striped">

                        <tbody>
                        {
                          this.state.tests.map(function(test){
                            return (
                              <tr>
                                <td>
                                  <Moment format="MMM Do YY - h:mm:ss a">
                                    {new Date(test.createdDate)}
                                  </Moment>
                                </td>
                                <td>{test.createdBy}</td>
                                <td>{test.project}</td>
                                <td>{test.name}</td>


                                  <td>
                                    <span className = {
                                        test.status === 'OK' ? 'tag is-success'
                                      : test.status === 'ABORTED' ? 'tag is-warning'
                                      : test.status === 'ERROR' ? 'tag is-danger'
                                      : 'tag is-info'
                                    }>
                                      {test.status}
                                    </span>
                                  </td>
                              </tr>
                            );
                          })
                        }
                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            </div>

        );
      }
}
