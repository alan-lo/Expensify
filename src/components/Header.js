import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>{
  return(
    <div>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Go Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Page</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
    </div>
  );
}

export default Header;