import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Reserva from '../Reserva/Reserva';
import Ratings from '../Ratings/Ratings';
import Conocenos from '../Conocenos/Conocenos';
import Home from '../Home/Home';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  rawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="TheDiv">
        <Router>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          {/*<main style={{ marginTop: '64px' }}></main>*/}

          <Route exact path="/reserva" component={Reserva}></Route>
          <Route exact path="/ratings" component={Ratings}></Route>
          <Route exact path="/" component={Home}></Route>
        </Router>
        <div className="container">
        </div>
      </div>
    );
  }
}

export default App;