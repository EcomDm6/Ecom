// @flow
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

const Header = () => (
    <HeaderContainer className="container-fluid row">
      <LogoDiv className="col-md-6">
        <img src="https://www.iconexperience.com/_img/o_collection_png/blue_dark_grey/32x32/plain/jar_earth.png" alt="Jars of Air" />
        <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
        <HeaderText>reMemory jar</HeaderText>
      </LogoDiv>
      <SearchBar />
      <Login />
      <Cart />
    </HeaderContainer>
);
export default Header;

const HeaderContainer = styled.nav`
  height: 10vh;
  background-color: white;
  color: #3E9BD5;
  flex: auto;
  width: 100vw;
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60vw;
`;
const HeaderText = styled.div`
  font-size: 4em;
  font-family: 'Rubik', sans-serif;
`;
