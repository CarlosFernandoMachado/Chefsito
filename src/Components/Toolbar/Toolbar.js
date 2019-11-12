import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/">Chefsito</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/reserva">
              <Button> Reserva </Button>
            </Link>
          </li>

          <li>
            <Link to="/ratings">
              <Button> Ratings </Button>
            </Link>
          </li>

          <li>
            <Link to="/conocenos">
              <Button> Conocenos </Button>
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;