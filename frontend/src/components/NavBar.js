
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: 'white', color: 'DarkOrchid', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' ,color: 'DarkOrchid'}} 
        to="/"
      >  
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px',color: 'DarkOrchid' }} 
        to="/stickynotes"
      >
        Sticky Notes
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px',color: 'DarkOrchid' }} 
        to="/importantnotes"
      >
        Important Sticky Notes
      </NavLink>
    </div>
  );
}

export default NavBar;