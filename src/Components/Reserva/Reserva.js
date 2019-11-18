import React, { Component } from 'react';
import './Reserva.css';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import resImage from './reservar.png';


/*
const open = false;
const setOpen = false;
const anchorRef = React.useRef(null);
const selectedIndex = 1;
const setSelectedIndex = 1;
const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
*/
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

class Reserva extends Component {

  constructor() {
    super();
    this.state = {
       nombre: null,
       apellido: null,
       departamento: null,
       direccion: null,
       telefono: null,
       comboBoxOption:''

      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onClickBtn = this.onClickBtn.bind(this);
      /*this.handleClick = this.handleClick.bind(this);
      this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
      this.handleClose = this.handleClose.bind(this);*/

  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log(event.target.value);
}

  handleSubmit = (event) => {
    //Make a network call somewhere
    event.preventDefault();
  }

  onClickBtn(){
    console.log(this.state.nombre);
    console.log(this.state.comboBoxOption);
  }
/*
  handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  handleMenuItemClick = (event, index) => {
  setSelectedIndex(index);
    setOpen(false);
  };

  handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };*/

  render() {
    const { classes } = this.props;

    return (
      <div id = "reserve-div">

        <form id = "reserve-form" onSubmit={this.handleSubmit}>
        <h1 id="main-title">Reservar</h1>
          <TextField style = {{width: '75%'}} name="name" label = "Nombre" onChange={this.handleChange('nombre')} />
          <TextField style = {{width: '75%'}} name="surname" label = "Apellido" onChange={this.handleChange('apellido')} />
          <TextField style = {{width: '75%'}} name="region" label = "Departamento" onChange={this.handleChange('departamento')} />
          <TextField style = {{width: '75%'}} name="address" label = "Dirección" onChange={this.handleChange('direccion')} />
          <TextField style = {{width: '75%'}} name="phone" label = "Número de teléfono" onChange={this.handleChange('telefono')} />
          <TextField style = {{width: '75%'}} name="opt6" label = "Opción 6" onChange={this.handleChange('telefono')} />

          <FormControl >
        <InputLabel id="select-option">Seleccionar</InputLabel>
        <Select
          //labelId="select-label"
          //id="demo-simple-select"
          value={this.state.comboBoxOption}
          //onChange={this.handleChange}
          onChange={this.handleChange('comboBoxOption')}
        >
          <MenuItem value={'option 1'}>1</MenuItem>
          <MenuItem value={'option 2'}>2</MenuItem>
          <MenuItem value={'option 3'}>3</MenuItem>
        </Select>
      </FormControl>
      {/*
      <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
          <Button onClick={this.handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={this.handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={event => this.handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
      
      */}
      
          <Button onClick = {this.onClickBtn} style = {{width: '75%'}} name = "OK" label="Submit" type="submit" >OK</Button>
        </form>
        
        <div >
        <img style={{width:'100%',height:'100%', paddingTop: '40px'}} resizeMode='contain' id="proj-icon" src={resImage}></img>
        </div>
      </div>
    );
  }
}

Reserva.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default Reserva;