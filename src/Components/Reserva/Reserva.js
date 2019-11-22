import React, { Component } from 'react';
import './Reserva.css';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
//import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
/*import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';*/
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import PropTypes from 'prop-types';
import resImage from './chefcutting.png';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Reserva extends Component {

  constructor() {
    super();
    this.state = {
      nombre: null,
      email: null,
      departamento: null,
      direccion: null,
      telefono: null,
      chef: '',
      selectedDate: null,
      open: false,
      open2: false,
      setOpen: false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen2 = this.handleClickOpen2.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.validInfo = this.validInfo.bind(this);
    /*this.handleClick = this.handleClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);*/

  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log(event.target.value);
  }

  handleClickOpen = () => {
    this.setState({ setOpen: true, open: true });
  };

  handleClose = () => {
    this.setState({ setOpen: false, open: false });
  };

  handleClickOpen2 = () => {
    this.setState({ setOpen: true, open2: true });
  };

  handleClose2 = () => {
    this.setState({ setOpen: false, open2: false });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
    console.log(date);
  };

  handleSubmit = (event) => {
    //Make a network call somewhere
    event.preventDefault();
  }

  onClickBtn() {
    console.log(this.state);

  }

  validInfo() {
    return(this.state.nombre !== null &&
      this.state.email !== null &&
      this.state.departamento !== null &&
      this.state.direccion !== null &&
      this.state.telefono !== null &&
      this.state.chef !== '' &&
      this.state.selectedDate !== null)
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

    return (
      <div id="reserve-div">
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Gracias por utilizar Chefsito"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Tu reservación se ha realizado con éxito.
    </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button href="/" onClick={this.handleClose} color="primary">
              OK
    </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.open2}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose2}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Debes completar toda la información requerida."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Termina de llenar los campos requeridos.
</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose2} color="primary">
              OK
</Button>
          </DialogActions>
        </Dialog>



        <form id="reserve-form" onSubmit={this.handleSubmit}>
          <h1 id="main-title">Reservar</h1>
          <div id="inputs">
            <TextField style={{ width: '75%' }} name="name" label="Nombre" onChange={this.handleChange('nombre')} />
            <TextField style={{ width: '75%' }} name="email" label="Correo" onChange={this.handleChange('email')} />
            <TextField style={{ width: '75%' }} name="region" label="Departamento" onChange={this.handleChange('departamento')} />
            <TextField style={{ width: '75%' }} name="address" label="Dirección" onChange={this.handleChange('direccion')} />
            <TextField style={{ width: '75%' }} name="phone" label="Número de teléfono" onChange={this.handleChange('telefono')} />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>

              <div id="date-div">

                <KeyboardDatePicker
                  margin="normal"
                  //id="date-picker-dialog"
                  label="Fecha"
                  format="dd/MM/yyyy"
                  value={this.state.selectedDate}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <br />
                <KeyboardTimePicker
                  margin="normal"
                  //id="time-picker"
                  label="Hora"
                  value={this.state.selectedDate}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </div>


            </MuiPickersUtilsProvider>

            <FormControl style={{ width: '75%' }}>

              <InputLabel id="select-option">Seleccionar Chef</InputLabel>
              <Select

                //labelId="select-label"
                //id="demo-simple-select"
                value={this.state.chef}
                //onChange={this.handleChange}
                onChange={this.handleChange('chef')}
              >
                <MenuItem value={'Carlos Martinez'}>Carlos Martínez</MenuItem>
                <MenuItem value={'Andrea Rodriguez'}>Andrea Rodríguez</MenuItem>
                <MenuItem value={'Juan Pérez'}>Juan Pérez</MenuItem>
                <MenuItem value={'Maria Velásquez'}>Maria Velásquez</MenuItem>
              </Select>
            </FormControl>
            <div id="divider" />
            <Button id="button" onClick=  {this.validInfo() ? this.handleClickOpen : this.handleClickOpen2} name="OK" label="Submit" type="submit" >OK</Button>
            <div id="divider" />

          </div>


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


        </form>

        <div >
          <img style={{ width: '100%', height: '100%', paddingTop: '6%' }} resizeMode='contain' id="optionalstuff" src={resImage}></img>
        </div>
      </div>
    );
  }
}
export default Reserva;