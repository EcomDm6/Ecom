// @flow
import React from 'react';
import styled from 'styled-components';
import Nav from './Components/Nav/NavComponent';
import SaleComponent from './Components/SalePreview/SaleComponent';
import FooterContainer from './Components/InfoFooter/FooterComponent';
import MiddleNavComponent from './Components/MiddleNavBar/MiddleNavComponent';
import { containerFluid } from 'bootstrap/dist/css/bootstrap.css';

import './style.css';



const App = () => (
  <MainContainerDiv className="container-fluid">
    <Nav />
    <MiddleNavComponent />
    <SaleComponent />
    <FooterContainer />
  </MainContainerDiv>
);

export default App;

const MainContainerDiv = styled.div`
  margin: 0;
  padding: 0;
`;