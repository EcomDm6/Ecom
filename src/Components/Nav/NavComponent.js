// @flow
import React from 'react';
import styled from 'styled-components';

import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import './Nav.css';

const Nav = () => (
  <NavContainer className="">
    <LogoDiv>{'{ Logo goes here }'}</LogoDiv>
    <Cart />
    <Login />
  </NavContainer>
);
export default Nav;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: black;
  color: white;
  font-size: 1.5em;
  padding: 10px;
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 5;
  justify-content: center;
`;
