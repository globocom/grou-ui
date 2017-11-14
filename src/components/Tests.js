import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import CustomInput from './CustomInput.js';

export default class Tests extends Component {

  constructor(){
     super();
     this.state = {tests:[]};
     this.enviaForm = this.enviaForm.bind(this);
     this.setName = this.setName.bind(this);
     this.setProject = this.setProject.bind(this);
     this.setProperties = this.setProperties.bind(this);
   }


   componentDidMount(){
     fetch(`http://localhost:8080/tests/`)
       .then(response => response.json())
       .then(tests => {
         this.setState({tests:tests._embedded.tests});
         console.log("state", this.state);
       });
   }

    enviaForm(event){
     event.preventDefault();
     $.ajax({
      url:'http://localhost:8080/tests/',
      contentType:'application/json',
      dataType:'json',
      type:'post',
      data: JSON.stringify({name:this.state.name, project:this.state.project, name:this.state.properties}),
      error: function(resposta){
      console.log("erro");
     }
      });
    }

    setName(event){
      this.setState({name:event.target.value});
    }

    setProject(event){
      this.setState({project:event.target.value});
    }

    setProperties(event){
      this.setState({properties:event.target.value});
    }

    render(){
        return (
          <div>
            <h1 className="title is-1">Tests</h1>



            <section className="section">

              <p className="title">Request a Test</p>
              <form onSubmit={this.enviaForm} method="post">
                <CustomInput id="name" type="text" name="name" value={this.state.name} onChange={this.setName} label="Name"/>
                <CustomInput id="project" type="text" name="project" value={this.state.project} onChange={this.setProject} label="Project"/>
                <CustomInput id="properties" type="text" name="properties" value={this.state.properties} onChange={this.setProperties} label="Properties"/>
                <button type="submit" className="button is-primary">Submit</button>
              </form>
            </section>


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
