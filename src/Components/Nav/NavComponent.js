// @flow
import React from 'react';
import styled from 'styled-components';

import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import './Nav.css';

const Nav = () => (
    <NavContainer className="">
      <LogoDiv className="col-3-lg">
        <img src="https://www.iconexperience.com/_img/o_collection_png/blue_dark_grey/64x64/plain/jar_earth.png" alt="Jars of Air" />
        <h1>ReMemory JAR</h1>
      </LogoDiv>
      <Cart />
      <Login />
    </NavContainer>
);
export default Nav;


const NavContainer = styled.nav`
  height: 10vh;
  display: flex;
  background-color: white;
  color: #3E9BD5;
  font-size: 1em;
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
