import React from 'react';
import styled from 'styled-components';

import Cart from '../Cart/Cart';
import Login from '../Login/Login';
// import './Nav.css';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: black;
  color: white;
  font-size: 1.5em;
  padding: 10px;
`;

const Nav = () => (
  <Navbar className="">
    <div className="flex flex_align_center flex_center flex_5">
      {'{ Logo goes here }'}
    </div>
    <Cart />
    <Login />
  </Navbar>
);
export default Nav;
