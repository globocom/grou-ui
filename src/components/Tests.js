import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Moment from 'react-moment';
import { Link } from 'react-router-dom';



export default class Tests extends Component {

  constructor(){
     super();
     this.state = {tests:[]};

   }


   componentDidMount(){
     fetch(`http://localhost:8080/tests/`)
       .then(response => response.json())
       .then(tests => {
         this.setState({tests:tests._embedded.tests.sort(function(a, b) { return new Date (a.createdDate) - new Date (b.createdDate) }).reverse()});
         console.log("state", this.state);
       });
   }

  render(){
    return(
      <div>

      <h1 className="title is-1">Tests</h1>

      <ReactTable
          data={this.state.tests}
          columns={[
            {
              Header: "Created Date",
              id: "createdDate",
              accessor: d => d.createdDate,
              Cell: row => (
                  <Moment format="MMM Do YY - h:mm:ss a">
                    { new Date(row.value) }
                  </Moment>
              )
            },
            {
              Header: "Created By",
              id: "createdBy",
              accessor: d => d.createdBy
            },
            {
              Header: "Name",
              id: "name",
              accessor: d => d.name
            },
            {
              Header: "Project",
              id: "project",
              accessor: d => d.project
            },
            {
              Header: "Status",
              id: "status",
              accessor: d => d.status,
              Cell: row => (
                    <span
                    className = {
                        row.value === 'OK' ? 'tag is-success'
                      : row.value === 'ABORTED' ? 'tag is-warning'
                      : row.value === 'ERROR' ? 'tag is-danger'
                      : 'tag is-info'
                    }
                    >
                    { row.value }
                    </span>
                  )
            },
            {
              Header: "Dashboard",
              id: "dashboard",
              accessor: d => d.dashboard,
              Cell: row => (
                <Link to={row.value} target="_blank">dashboard</Link>
              )
            },
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        </div>

    );
  }
}
