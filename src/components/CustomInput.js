import React, {Component} from 'react';

export default class CustomInput extends Component{

  render(){
    return(
      <div className="field">
        <label className="label" htmlFor={this.props.id}>{this.props.label}</label>
        <div className="control">
          <input className="input" id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value}  onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}
