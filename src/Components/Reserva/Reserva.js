import React, { Component } from 'react';
import './Reserva.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Reserva extends Component {

  constructor() {
    super();
    this.state = {
       nombre: null,

      };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
}
  handleSubmit = (event) => {
    //Make a network call somewhere
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField name="nombre" onChange={this.handleChange} />
          <Button label="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default Reserva;