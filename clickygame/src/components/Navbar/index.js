import React from 'react';
import './style.css'

function Navbar(props) {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <p className='navbar'>
        Clicky Game
        </p>
    
      <p className='score'>score: {props.correctScore}</p>
    </nav>
    );
  }
  export default Navbar;