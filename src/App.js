// @flow
import React from 'react';

import Nav from './Components/Nav/NavComponent';
import SaleComponent from './Components/SalePreview/SaleComponent';
import FooterContainer from './Components/InfoFooter/FooterComponent';
import './style.css';

const App = () => (
  <div>
    <Nav />
    <SaleComponent />
    <FooterContainer />
  </div>
);

export default App;
